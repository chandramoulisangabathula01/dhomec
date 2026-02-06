# 🔧 Troubleshooting Guide - Hero Options Not Showing

## Quick Fix Steps

### Step 1: Start the Dev Server

Open your terminal and run:
```bash
cd "c:\Users\chandra mouli\Documents\dhomec"
npm run dev
```

Wait for the server to start. You should see something like:
```
▲ Next.js 16.1.4
- Local:        http://localhost:3000
✓ Ready in 2.3s
```

### Step 2: Open in Browser

Open your browser and navigate to:
```
http://localhost:3000/hero-options
```

---

## If You See a Blank Page

### Check 1: Browser Console
1. Press `F12` to open Developer Tools
2. Click on the "Console" tab
3. Look for any red error messages
4. Common errors and fixes:

**Error: "Cannot find module"**
- Solution: Run `npm install` in your terminal

**Error: "Unexpected token"**
- Solution: Clear your browser cache and reload

**Error: "Module not found: Can't resolve '@/components/ui/button'"**
- Solution: The Button component might be missing

### Check 2: Network Tab
1. Open Developer Tools (`F12`)
2. Click "Network" tab
3. Reload the page
4. Look for any failed requests (red items)

---

## If the Server Won't Start

### Fix 1: Kill Existing Process
```bash
# Windows
taskkill /F /IM node.exe

# Then restart
npm run dev
```

### Fix 2: Clear Next.js Cache
```bash
# Delete .next folder
Remove-Item -Recurse -Force .next

# Reinstall and restart
npm install
npm run dev
```

### Fix 3: Check Port 3000
```bash
# Check if port 3000 is in use
netstat -ano | findstr :3000

# If something is using it, either:
# 1. Kill that process, or
# 2. Use a different port:
npm run dev -- -p 3001
```

---

## If You See "404 - Page Not Found"

The route might not be set up correctly. Verify:

1. File exists at: `app/hero-options/page.tsx`
2. File contains:
```tsx
import { HeroOptionsPreview } from "@/components/hero-options/hero-options-preview"

export default function HeroOptionsPage() {
    return <HeroOptionsPreview />
}
```

---

## If Components Are Missing

### Verify All Files Exist:

Run this in PowerShell:
```powershell
Get-ChildItem "c:\Users\chandra mouli\Documents\dhomec\components\hero-options" | Select-Object Name
```

You should see:
- ✅ hero-option-1.tsx
- ✅ hero-option-2.tsx
- ✅ hero-option-3.tsx
- ✅ hero-option-4.tsx
- ✅ hero-option-5.tsx (NEW)
- ✅ hero-option-6.tsx (NEW)
- ✅ hero-option-7.tsx (NEW)
- ✅ hero-option-8.tsx (NEW)
- ✅ hero-options-preview.tsx

---

## If You See TypeScript Errors

Run:
```bash
npx tsc --noEmit
```

If you see errors, they'll be listed. Common fixes:

**Error: "Cannot find name 'useState'"**
- Already imported correctly, should not happen

**Error: "Property 'icon' does not exist"**
- Check the component code

---

## Alternative: Test Individual Components

If the preview page doesn't work, test individual components:

### Create a test page:

File: `app/test-hero/page.tsx`
```tsx
import { HeroOption5 } from "@/components/hero-options/hero-option-5"

export default function TestPage() {
    return <HeroOption5 />
}
```

Then visit: `http://localhost:3000/test-hero`

---

## Quick Verification Commands

Run these to verify everything is set up:

```bash
# 1. Check if files exist
dir "c:\Users\chandra mouli\Documents\dhomec\components\hero-options\hero-option-*.tsx"

# 2. Check for TypeScript errors
npx tsc --noEmit

# 3. Try building
npm run build

# 4. If build succeeds, start dev server
npm run dev
```

---

## Still Not Working?

### Option 1: Check the Browser URL
Make sure you're visiting:
- ✅ `http://localhost:3000/hero-options`
- ❌ NOT `http://localhost:3000/hero-options/`
- ❌ NOT `http://localhost:3000/components/hero-options`

### Option 2: Hard Refresh
- Windows: `Ctrl + Shift + R`
- Or: `Ctrl + F5`

### Option 3: Clear Browser Cache
1. Open DevTools (`F12`)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"

### Option 4: Try Different Browser
- Chrome
- Edge
- Firefox

---

## Expected Behavior

When working correctly, you should see:

1. **Navigation bar at top** with buttons for Options 1-8
2. **Hero section** displaying below
3. **Floating indicator** at bottom right showing "Viewing: Option X"
4. **Smooth transitions** when switching between options

---

## Debug Mode

Add this to see what's rendering:

File: `app/hero-options/page.tsx`
```tsx
import { HeroOptionsPreview } from "@/components/hero-options/hero-options-preview"

export default function HeroOptionsPage() {
    console.log("Hero Options Page Rendering")
    return (
        <div>
            <h1 style={{ color: 'red', padding: '20px' }}>
                Hero Options Page Loaded!
            </h1>
            <HeroOptionsPreview />
        </div>
    )
}
```

If you see the red text, the page is loading but the component might have issues.

---

## Contact Info

If none of these work, please provide:
1. Screenshot of browser console (F12 → Console tab)
2. Screenshot of terminal where `npm run dev` is running
3. Any error messages you see

---

## Quick Test

Run this command to test if Next.js is working:
```bash
npm run dev
```

Then visit `http://localhost:3000` (homepage)

If homepage works but `/hero-options` doesn't, there's an issue with the route or component.

---

**Most Common Issue:** Server not running
**Solution:** Make sure `npm run dev` is running in your terminal!
