# Portfolio Video Setup Guide

## 🎬 Your New Video Portfolio is Ready!

The portfolio page has been transformed into a modern, polished video showcase with:
- ✅ Video play overlays on thumbnails
- ✅ Smooth hover effects
- ✅ Modern filter categories (Branding, Commercial, Product, Lifestyle)
- ✅ Video popup modal integration
- ✅ Responsive grid layout
- ✅ Beautiful gradient overlays

---

## 📹 How to Add Your Videos

### Step 1: Upload Videos to Vimeo/YouTube

**Recommended: Vimeo** (for professional quality and customization)

1. Go to [Vimeo.com](https://vimeo.com) and upload your videos
2. For each video, get the video ID from the URL:
   - Example URL: `https://vimeo.com/123456789`
   - Video ID: `123456789`

**Or use YouTube:**
- Example URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Video ID: `dQw4w9WgXcQ`

### Step 2: Update Portfolio Data

Open `src/data/PortfolioData.ts` and update the `videoUrl` for each project:

```typescript
{
   id: 1,
   page: "portfolio_1",
   img: "/assets/img/portfolio/two-columns/thumb.jpg",
   title: "Dacht - Brand Story",
   tag: "BRANDING",
   category: "branding commercial",
   description: "A compelling brand story showcasing Dacht's unique identity",
   client: "Dacht",
   videoUrl: "123456789",  // 👈 Add your Vimeo/YouTube ID here
   videoType: "vimeo"       // 👈 "vimeo" or "youtube"
}
```

### Step 3: Update Thumbnails (Optional)

Replace the thumbnail images in:
- `/public/assets/img/portfolio/two-columns/`

Or use custom paths in the `img` field.

---

## 🎨 Filter Categories

The portfolio now has these filter categories:

1. **ALL WORK** - Shows everything
2. **BRANDING** - Brand story videos, identity work
3. **COMMERCIAL** - Commercial ads, promotional videos
4. **PRODUCT** - Product showcases, demos
5. **LIFESTYLE** - Lifestyle campaigns, culture videos

### How to Categorize Videos:

In the `category` field, use space-separated keywords:
```typescript
category: "branding commercial"  // Shows in both Branding & Commercial filters
category: "product lifestyle"    // Shows in both Product & Lifestyle filters
category: "commercial"           // Shows only in Commercial filter
```

---

## 📝 Current Portfolio Structure

### Portfolio Page (`portfolio_1`)

Current 6 videos ready for your content:

1. **Dacht - Brand Story**
   - Categories: branding, commercial
   - Ready for: Brand identity video

2. **Ye-Almaz Dental - Service Showcase**
   - Categories: commercial, explainer
   - Ready for: Service/explainer video

3. **SARA Bedroom Solutions - Product Highlight**
   - Categories: commercial, product
   - Ready for: Product showcase

4. **La Maison - Lifestyle Campaign**
   - Categories: branding, lifestyle
   - Ready for: Lifestyle/culture video

5. **Brundo - Brand Launch**
   - Categories: commercial, branding
   - Ready for: Brand launch video

6. **NAK Trading - Corporate Video**
   - Categories: commercial, corporate
   - Ready for: Corporate storytelling

---

## 🎯 Example: Complete Video Entry

```typescript
{
   id: 1,
   page: "portfolio_1",
   img: "/Dacht.jpg",                    // Your thumbnail image
   title: "Dacht - Brand Story",         // Project title
   tag: "BRANDING",                      // Tag badge (appears on thumbnail)
   category: "branding commercial",      // Filter categories
   description: "A compelling brand story showcasing Dacht's unique identity", // Description
   client: "Dacht",                      // Client name
   videoUrl: "987654321",                // Your Vimeo/YouTube ID
   videoType: "vimeo"                    // "vimeo" or "youtube"
}
```

---

## 🎨 Features Included

### Visual Design:
- 🎬 **Play button overlay** - Beautiful animated play button
- 🌈 **Gradient overlays** - Professional dark gradient at bottom
- ✨ **Hover effects** - Images scale on hover, play button pulses
- 📱 **Responsive** - Works perfectly on all devices

### Functionality:
- 🎥 **Video popup** - Videos open in a modal overlay
- 🔍 **Filtering** - Isotope-powered smooth filtering
- ⚡ **Fast loading** - Optimized image loading
- 🎭 **Smooth transitions** - All animations are butter-smooth

---

## 🚀 Quick Start Checklist

- [ ] Upload videos to Vimeo/YouTube
- [ ] Get video IDs for all 6 videos
- [ ] Update `videoUrl` in `src/data/PortfolioData.ts`
- [ ] Update `videoType` to "vimeo" or "youtube"
- [ ] (Optional) Replace thumbnail images
- [ ] (Optional) Update titles and descriptions
- [ ] Test the portfolio page
- [ ] Deploy to Vercel

---

## 💡 Tips

1. **Thumbnail Quality**: Use high-quality images (at least 1200x800px)
2. **Video Quality**: Upload in at least 1080p for best results
3. **Descriptions**: Keep descriptions concise (1-2 sentences)
4. **Categories**: Use 2-3 categories max per video for best filtering

---

## 📂 File Locations

- Portfolio Data: `src/data/PortfolioData.ts`
- Portfolio Component: `src/components/portfolios/portfolio-one/PortfolioArea.tsx`
- Thumbnails: `/public/assets/img/portfolio/two-columns/`

---

## 🎬 Ready to Add Videos!

Once you provide the video URLs, I can:
1. Update all the `videoUrl` fields
2. Adjust categories if needed
3. Update descriptions
4. Help with any customizations

Just share:
- Video URLs/IDs
- Which video goes where (by client name)
- Any specific categorization preferences

Let's make your video portfolio amazing! 🚀


