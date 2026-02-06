const fs = require('fs');
const path = require('path');

// Category Map is hardcoded in the function below

// Note: In an admin script we might ordinarily use the service role key, 
// but for this we'll verify if RLS allows anon inserts or if we need to sign in a user.
// The user has setup RLS with "authenticated admin for CUD operations".
// So using ANON key directly nicely might fail if we are not logged in.
// However, I can use the service role key if it's available? 
// Usually it's strictly server-side.
// The user didn't provide SERVICE_ROLE_KEY.
// OPTION: We can try to login as admin in the script using the credentials user provided earlier 
// (admin@dhomec.com / password123) or just use the MCP SQL tool which bypasses RLS?
// 
// Actually, generating SQL statements and using the MCP tool 'execute_sql' is SAFER and guaranteed to work 
// because the MCP tool has direct DB access.
// So I will write a script that generates the SQL statements, outputs them, and then I (the agent) 
// will execute the SQL using the tool.

function parseProducts() {
    console.error("Starting parse...");
    const filePath = path.join(process.cwd(), 'components/productsdetails/products.txt');
    const content = fs.readFileSync(filePath, 'utf-8');

    // Category Map from previous step
    const categories = {
        'Road Traffic Control': '8c424b5a-2f03-4305-92f6-9c4b44fb9b32',
        'Swing Gates Opener': '98e2ed97-6cd5-46ef-a686-b755fc3529ab',
        'Rapid Door': '5cf6b645-23d5-4617-b51f-431ffdfacb13',
        'Garage Doors Opener': 'c5c47739-e083-4436-bb3c-dbbcc4d41ce2',
        'Glass Doors': '0ede0bee-b792-433f-a09a-f16ad1d5bed8',
        'Sliding Gate Opener': 'b099d339-5e9a-412d-9a66-ba1c45cee854',
        'Door Closer': 'a0c51458-feb6-4346-97b0-9c056a8610ea',
        'Infrared Detection Radar': '737fa5d1-02ab-460e-87e0-9000e87f5711',
        'Swing Shutter': '0ee53cb3-8b4d-48f3-9f81-ff1a7b1fa1a9',
        'Microwave Sensor': 'e9c79549-34c7-4eed-82ba-1da8f3442e03',
        'Mild Steel Gate': 'f4cab552-2f18-4dc3-8fcf-08d43d0b9886',
        'Fire Curtains': '259d5842-b6aa-4faa-8636-a7eedfc20427',
        'Tripod Turnstile': '9fd02d7f-a029-45c9-8627-014806bb6adb',
        'New Items': 'e616ebf0-d344-456c-9f25-8f588a34749c'
    };

    const lines = content.split(/\r?\n/);
    let currentCategory = null;
    let currentProductLines = [];

    let products = [];

    const processProduct = (lines, categoryId) => {
        if (lines.length === 0) return;

        // Find price
        let price = null;
        let priceIndex = -1;
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes('₹')) {
                const match = lines[i].match(/₹\s*([\d,]+)/);
                if (match) {
                    price = parseFloat(match[1].replace(/,/g, ''));
                    priceIndex = i;
                    break;
                }
            }
            if (lines[i].toLowerCase().includes('ask price')) {
                price = 0;
                priceIndex = i;
                break;
            }
        }

        // Name is usually the first line
        let name = lines[0];

        // Specs and Description
        let specs = {};
        let description = "";

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            // Heuristic for specs: contains tab (KV pair)
            if (line.includes('\t') && i > priceIndex) {
                const parts = line.split('\t');
                if (parts.length >= 2) {
                    const key = parts[0].trim().toLowerCase().replace(/\s+/g, '_');
                    specs[key] = parts[1].trim();
                }
            } else if (i > priceIndex && !line.includes('Get Latest Price') && !line.includes('Product Brochure') && !line.startsWith('Minimum Order') && !line.includes('Get More Photos') && !line.includes('Interested in this product')) {
                if (line.length > 10 && !line.includes(name)) { // Avoid repeating name in description
                    description += line + "\n";
                }
            }
        }

        description = description.trim();
        const material = specs['material'] || null;
        const usage = specs['usage/application'] || specs['usage'] || specs['application'] || null;
        const color = specs['color'] || null;
        const brand = specs['brand'] || 'Motorline';
        const autoGrade = specs['automation_grade'] || specs['opening_pattern'] || specs['operating_style'] || null;
        const freq = specs['frequency'] || specs['power_frequency'] || null;
        const voltage = specs['voltage'] || specs['input_voltage'] || specs['product_voltage'] || null;
        const model = specs['model_name'] || specs['model_name/number'] || specs['model'] || null;

        // Slug
        let slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

        products.push({
            category_id: categoryId,
            name,
            slug,
            description,
            price,
            material,
            usage_application: usage,
            color,
            brand,
            automation_grade: autoGrade,
            frequency: freq,
            voltage,
            model_name: model
        });
    };

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;

        // Check if line is a category header
        // Simple string match against keys
        let foundCat = null;
        for (const cat of Object.keys(categories)) {
            // Check exact match or "our products : Category"
            if (trimmed === cat || trimmed === `our products : ${cat}` || (trimmed.includes(cat) && trimmed.length < cat.length + 20)) {
                foundCat = cat;
                break;
            }
        }

        if (foundCat) {
            // Switching category?
            // If we were building a product, it might be incomplete or the previous section ended.
            // Actually, products are terminated by "Yes, I am interested!".
            // So if we find a category header, we just update currentCategory.
            currentCategory = categories[foundCat];
            // Clear current product buffer as we are entering new section
            currentProductLines = [];
            continue;
        }

        if (trimmed === 'Yes, I am interested!') {
            if (currentCategory && currentProductLines.length > 0) {
                processProduct(currentProductLines, currentCategory);
            }
            currentProductLines = [];
            continue;
        }

        if (currentCategory) {
            currentProductLines.push(trimmed);
        }
    }


    fs.writeFileSync('parse_debug.txt', `Processed ${lines.length} lines. Generated ${products.length} products.\n`);
    fs.writeFileSync('products.json', JSON.stringify(products, null, 2));
}

parseProducts();
