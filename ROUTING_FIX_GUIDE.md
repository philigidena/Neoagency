# 404 Routing Fix Guide

## Problem
When reloading pages (except homepage) in your React SPA, you get a 404 error. This happens because the server looks for actual files at those paths.

## Solutions by Environment

### ✅ For Netlify (DEPLOYED)
1. The `public/_redirects` file is already created
2. The `netlify.toml` already has the correct configuration
3. **ACTION REQUIRED**: Redeploy your site
   ```bash
   npm run build
   # Then push to git or drag the `dist` folder to Netlify
   ```
4. After deployment, test by visiting `/about` or `/portfolio` and hitting refresh

### ✅ For Vercel (DEPLOYED)
1. The `vercel.json` file is already created
2. **ACTION REQUIRED**: Redeploy your site
   ```bash
   npm run build
   # Then deploy via Vercel CLI or push to git
   ```
3. After deployment, all routes should work on refresh

### ✅ For Local Development (`npm run dev`)
- **This should already work!** Vite's dev server handles SPA routing automatically
- If you're seeing 404s in dev mode:
  1. Stop the dev server (Ctrl+C)
  2. Clear browser cache
  3. Run `npm run dev` again
  4. Navigate to http://localhost:5173/about and refresh

### ✅ For Local Testing of Built Files (`npm run preview`)
1. Run:
   ```bash
   npm run build
   npm run preview
   ```
2. Vite's preview server will serve the built files
3. Navigate to any route and refresh - it should work

### ❌ Opening `dist/index.html` Directly in Browser
**This will NEVER work** with client-side routing because:
- The browser uses `file://` protocol
- React Router needs a web server to handle routing
- **Solution**: Use `npm run preview` instead

## Testing Checklist

### Local Testing:
- [ ] Run `npm run dev`
- [ ] Navigate to http://localhost:5173/about
- [ ] Hit F5 to refresh
- [ ] Should show About page, not 404

### Production Testing (after deployment):
- [ ] Deploy the latest build
- [ ] Visit your-site.com/about
- [ ] Hit F5 to refresh
- [ ] Should show About page, not 404

## Files Created/Updated

1. **`public/_redirects`** - For Netlify (copies to dist on build)
2. **`vercel.json`** - For Vercel deployments
3. **`netlify.toml`** - Already existed, has correct config
4. **`vite.config.ts`** - Updated with optimizations

## Still Having Issues?

### Check 1: Are you testing deployed or locally?
- **Deployed**: Redeploy your site after the changes
- **Locally**: Use `npm run dev` or `npm run preview`, not opening files directly

### Check 2: Is the `_redirects` file in your `dist` folder?
```bash
cat dist/_redirects
# Should output: /*    /index.html   200
```

### Check 3: Clear browser cache
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Or open in incognito/private mode

### Check 4: Check browser console
- Open DevTools (F12)
- Look for any errors in the Console tab
- Check Network tab to see what files are being requested

## Next Steps

1. **Identify your scenario** from the list above
2. **Follow the specific steps** for that scenario
3. **Test** by navigating to a route and refreshing
4. If still not working, check your hosting platform's documentation for SPA routing

