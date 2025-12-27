
# Integrating the Visualizing AI Cinema SPA

To integrate this React 18 SPA into your existing website seamlessly, follow these simple steps:

### 1. The Container Approach (Iframe)
The simplest way to ensure zero style conflicts is to host the SPA and embed it via an iframe.
```html
<iframe 
  src="path-to-your-spa/index.html" 
  width="100%" 
  height="1200px" 
  style="border:none; border-radius: 12px; overflow: hidden;"
  title="Visualizing AI Cinema Infographic">
</iframe>
```

### 2. Native Component Integration
If you are already using React in your main site:
1. Copy the `components/`, `constants.tsx`, and `types.ts` into your source folder.
2. Install dependencies: `npm install recharts framer-motion lucide-react`.
3. Import and render the `App` component (or a specific section) wherever needed.
4. Ensure your global CSS handles Tailwind's `@tailwind base;` but be careful of conflicts with existing site styles. Using a prefix for Tailwind (e.g., `tw-`) in your `tailwind.config.js` is recommended.

### 3. Shared Resources
The SPA relies on the **Inter** font. Ensure your parent site loads:
`<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">`

### 4. Responsiveness
The SPA is mobile-first. When embedding, ensure the parent container has `width: 100%` to allow the internal Tailwind grid to respond correctly.
