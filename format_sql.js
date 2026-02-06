const fs = require('fs');
const path = require('path');

const products = JSON.parse(fs.readFileSync('products.json', 'utf-8'));

const escape = (val) => {
    if (val === null || val === undefined) return 'NULL';
    if (typeof val === 'number') return val;
    // Use dollar quoting for strings to handle quotes and newlines safely
    // Guard against $$ in string (unlikely but safe)
    const str = val.toString();
    if (str.includes('$$')) {
        // Fallback to standard escaping if $$ exists
        return "'" + str.replace(/'/g, "''") + "'";
    }
    return '$$' + str + '$$';
};

const columns = [
    'category_id', 'name', 'slug', 'description', 'price',
    'material', 'usage_application', 'color', 'brand',
    'automation_grade', 'frequency', 'voltage', 'model_name'
];

let values = products.map(p => {
    return `(${columns.map(c => escape(p[c])).join(', ')})`;
});

const batchSize = 25;
const batch1 = values.slice(0, batchSize);
const batch2 = values.slice(batchSize);

const sql1 = `INSERT INTO products (${columns.join(', ')}) VALUES ${batch1.join(',')};`;
const sql2 = batch2.length > 0 ? `INSERT INTO products (${columns.join(', ')}) VALUES ${batch2.join(',')};` : '';

fs.writeFileSync('sql_dollar.json', JSON.stringify({ batch1: sql1, batch2: sql2 }, null, 2));
