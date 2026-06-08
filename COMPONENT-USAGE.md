# How to Use Reusable Header & Footer Components

## Overview
The site now has shared header and footer components that can be reused across all pages to eliminate code duplication and make maintenance easier.

## Files Created

### 1. `components/header.html`
Contains the complete navbar markup. This is identical across all pages.

### 2. `components/footer.html`
Contains the complete footer markup with copyright, legal links, social links, and WhatsApp button.

### 3. `components/include.js`
JavaScript file that dynamically loads header and footer into pages using the `fetch()` API.

---

## Implementation Instructions

### Step 1: Add Placeholders to Your HTML
In each page's HTML body, add these placeholders:

**At the top (replace the navbar):**
```html
<div id="header-placeholder"></div>
```

**At the bottom (replace the footer, before closing body tag):**
```html
<div id="footer-placeholder"></div>
```

### Step 2: Include the Script
Add this line before closing `</body>` tag:
```html
<script src="components/include.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

---

## Example: Minimal Page Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Page Title — Budget Friendly Freelancer</title>
  
  <!-- All CSS dependencies -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>

  <style>
    /* All existing CSS from your page */
    /* (color variables, navbar styles, footer styles, etc.) */
  </style>
</head>
<body>

  <!-- Reusable Header -->
  <div id="header-placeholder"></div>

  <!-- Page-Specific Content -->
  <main>
    <!-- Your unique page content here -->
  </main>

  <!-- Reusable Footer -->
  <div id="footer-placeholder"></div>

  <!-- Scripts -->
  <script src="components/include.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

## Benefits

✅ **Reduced Code Duplication** — Single navbar/footer shared across 9 pages  
✅ **Easier Updates** — Change header/footer once, updates everywhere  
✅ **Consistency** — All pages stay in sync automatically  
✅ **Lower Maintenance** — No risk of pages having different navigation  

---

## Current Status

- ✅ Header component created: `components/header.html`
- ✅ Footer component created: `components/footer.html`
- ✅ Include script created: `components/include.js`
- ⏳ Pages need to be updated to use components

---

## Next Steps

To fully implement this across all pages:
1. Update `index.html` to use placeholders
2. Update `about.html` to use placeholders
3. Update `services.html` to use placeholders
4. Update `portfolio.html` to use placeholders
5. Update `process.html` to use placeholders
6. Update `contact.html` to use placeholders
7. Update `privacy.html` to use placeholders
8. Update `terms.html` to use placeholders
9. Update `404.html` to use placeholders

Each update removes ~30-40 lines of duplicated navbar/footer code per page, reducing total code by ~270-360 lines across the site.

---

## Alternative Approach: Server-Side Includes (SSI)

If you host on a server that supports PHP or Server-Side Includes:
- Rename components to `.php`
- Use `<?php include 'components/header.php'; ?>`
- No JavaScript required
- Faster page load (no fetch calls)

---

## Version Date: 2026-06-08
