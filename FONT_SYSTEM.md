# Neo Marketing - Custom Font System

## Overview
Your website now uses a purposeful custom font system featuring **TGSPerfectCondensed** and **Helvena** font families.

---

## Font Families

### 1. **TGSPerfectCondensed**
- **Purpose**: Big, impactful hero titles and display text
- **Use when**: You need maximum visual impact in condensed space
- **Character**: Bold, condensed, attention-grabbing

### 2. **Helvena** (Clean & Professional)
- **Purpose**: Versatile font for all other text (headings and body)
- **Character**: Clean, professional, modern
- **Available Weights**:
  - Extralight (200)
  - Light (300)
  - Regular (400)
  - Medium (500)
  - Semibold (600)
  - Bold (700)
  - Extrabold (800)
  - Black (900)

---

## Font Hierarchy & Usage

### Display Text (TGSPerfectCondensed)
- **Size**: 80px desktop / 44px mobile
- **Weight**: Normal
- **Line Height**: 1.0
- **Usage**: 
  - Hero titles
  - Page headers
  - Big impact statements
  - Call-to-action text in large sections

### Primary Headings (Helvena Extrabold/Bold)
#### H1
- **Size**: 64px desktop / 36px mobile
- **Weight**: 800 (Extrabold)
- **Line Height**: 1.15
- **Usage**: Main page titles, section headers

#### H2
- **Size**: 52px desktop / 32px mobile
- **Weight**: 800 (Extrabold)
- **Line Height**: 1.2
- **Usage**: Major section titles

### Secondary Headings (Helvena Bold/Semibold)
#### H3
- **Size**: 40px desktop / 26px mobile
- **Weight**: 700 (Bold)
- **Line Height**: 1.3
- **Usage**: Subsection titles, card headers

#### H4
- **Size**: 28px desktop / 22px mobile
- **Weight**: 600 (Semibold)
- **Line Height**: 1.4
- **Usage**: Component titles, smaller sections

#### H5
- **Size**: 22px desktop / 19px mobile
- **Weight**: 600 (Semibold)
- **Line Height**: 1.4
- **Usage**: Small headings, emphasized labels

#### H6
- **Size**: 19px desktop / 17px mobile
- **Weight**: 600 (Semibold)
- **Line Height**: 1.5
- **Usage**: Tiny headings, form labels

### Body Text (Helvena Medium/Regular)
#### Body Large
- **Size**: 22px desktop / 19px mobile
- **Weight**: 500 (Medium)
- **Line Height**: 1.6
- **Usage**: Featured paragraphs, introductions

#### Body (Standard)
- **Size**: 18px desktop / 16px mobile
- **Weight**: 400 (Regular)
- **Line Height**: 1.65
- **Usage**: Standard paragraphs, descriptions

#### Body Small
- **Size**: 16px desktop / 14px mobile
- **Weight**: 400 (Regular)
- **Line Height**: 1.6
- **Usage**: Secondary text, navigation

### Fine Print (Helvena Light)
#### Caption
- **Size**: 14px desktop / 12px mobile
- **Weight**: 300 (Light)
- **Line Height**: 1.5
- **Usage**: Captions, footnotes, disclaimers

---

## Where Each Font is Applied

### TGSPerfectCondensed Usage:
✅ **Hero Section** - Main hero title on homepage  
✅ **Section 4 Titles** - Display titles across the site  
✅ **Footer Big Title** - "Let's Build Something Extraordinary"  
✅ **Portfolio Big Titles** - Large showcase titles  

### Helvena Usage:

#### Helvena Extrabold/Bold (700-800):
✅ All H1, H2, and H3 headings across the site
✅ Service card titles  
✅ Team member names  

#### Helvena Semibold (600):
✅ All H4, H5, H6 headings  
✅ Navigation menu items  

#### Helvena Medium (500):
✅ Body Large text  
✅ Emphasized body text  

#### Helvena Regular (400):
✅ All standard body text  
✅ Paragraphs  
✅ Descriptions  
✅ Button text  

#### Helvena Light (300):
✅ Captions  
✅ Small print  
✅ Subtle information  

---

## Responsive Behavior

All fonts automatically adjust for mobile devices at the 768px breakpoint:
- **Desktop**: Full font sizes for optimal readability on large screens
- **Mobile**: Reduced font sizes (approximately 50-60% of desktop size) for better mobile UX

---

## Technical Implementation

### Files Modified:
1. `public/assets/scss/utils/_fonts.scss` - @font-face declarations
2. `public/assets/scss/utils/_typography.scss` - Font hierarchy definition
3. `public/assets/scss/utils/_mixins.scss` - Responsive font mixins
4. `public/assets/scss/components/_theme.scss` - Base typography
5. All component SCSS files - Applied responsive fonts

### How to Use in Code:
```scss
// Use the responsive-font mixin
.my-element {
    @include responsive-font('h1'); // Automatically includes font-family, size, weight, and mobile responsiveness
}

// Or use font family directly
.my-custom-element {
    font-family: var(--td-ff-display); // TGSPerfectCondensed
    font-family: var(--td-ff-heading); // Helvena
    font-family: var(--td-ff-body);    // Helvena
}
```

---

## Benefits of This System

1. ✅ **Consistent Branding**: Unified font usage across all pages
2. ✅ **Mobile-First**: Automatic responsive scaling for all devices
3. ✅ **Performance**: Local custom fonts with optimized loading
4. ✅ **Professional**: Purpose-driven font hierarchy
5. ✅ **Maintainable**: Easy to update fonts site-wide from one location
6. ✅ **Semantic**: Clear naming convention (display, h1-h6, body, caption)

---

## Font File Locations

All custom font files are stored in:
```
public/assets/fonts/
├── TGSPerfectCondensed.ttf
├── TGSPerfectCondensed.woff
├── TGSPerfectCondensed.woff2
├── Helvena-Extralight.woff
├── Helvena-Light.woff
├── Helvena-Regular.woff
├── Helvena-Medium.woff
├── Helvena-Semibold.woff
├── Helvena-Bold.woff
├── Helvena-Extrabold.woff
└── Helvena-Black.woff
```

---

**Build Status**: ✅ Updated to use Helvena font!

