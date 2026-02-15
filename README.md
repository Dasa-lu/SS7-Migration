# React Router 7 SSR Migration
This project is a migration of a legacy Kotlin homepage to React Router 7 (Framework Mode) with Server-Side Rendering (SSR) while preserving visual appearance and interactive functionality.

******
### **Tech Stack**
- React 18
- RR7 (Framework Mode)
- Vite
- TypeScript
- @rescui UI components
- @jetbrains/kotlin-web-site-ui
******
### **Installation**
- npm install --legacy-peer-deps

### **Development**
- npm run dev

*******
### **Production**
**Build the application:**
npm run build

**Start the production SSR server:**
npm run start

*****
```
Project structure
├── app/
    ├── root.tsx   # Root layout
    ├── routes/
    ├── kotlin/    
        └── js/    
            └── page/index/  #Homepage section
            └── ktl-component/ #Header and Footer Wrappers
```

****
### **Header and Footer strategy**

The Header and Footer components are provided by @jetbrains/kotlin-web-site-ui.

These components internally rely on browser-specific APIs such as:
* window
* document
* ResizeObserver
* layout measurements (getBoundingClientRect)
* scroll-lock logic on document.body

Because of this, they are not fully SSR-safe in this environment without modifying internal library implementation.

Instead of disabling SSR globally or patching the third-party library, a client-only boundary was introduced specifically for Header and Footer.

This approach:
* Keeps SSR enabled for the main page content
* Prevents server runtime errors
* Preserves full interactivity after hydration
* Maintains architectural separation of browser-dependent logic


Verifying SSR
### Verifying SSR

1. Run:
   npm run build && npm run start
2. Disable JavaScript in the browser and reload the page.
3. The homepage content should remain visible.
4. Alternatively, use “View Page Source” and verify that the headline appears in the raw HTML.

### Summary

The application builds successfully in production mode, renders server-side HTML, and becomes fully interactive after hydration while maintaining the original design.
