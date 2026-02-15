# Installation & Dependency Strategy

### Development

* npm install --legacy-peer-deps
* npm run dev

**This project combines two constraints:**
1.	Migration to React Router 7 (Framework Mode with SSR)
2.	Strict preservation of the original Kotlin homepage visual design and behavior

React Router 7 assumes a modern React environment (React 18).
However, the original UI layer inherited from the source project (@jetbrains/kotlin-web-site-ui@3.x) declares peer compatibility: react >= 16.8.6 < 18

**This results in a peer dependency conflict:**
•	React Router 7 → requires React 18
•	Legacy Kotlin UI package → declares compatibility only up to React 17
•	npm (v7+) strictly enforces peer constraints and fails with ERESOLVE

For this assignment, visual fidelity was prioritized over refactoring or upgrading the UI library.

Upgrading @jetbrains/kotlin-web-site-ui to a React 18–compatible version would potentially introduce visual and behavioral differences not directly related to the routing migration.

An experimental upgrade to a React 18–compatible UI version was evaluated. However, noticeable visual differences were observed in the Header component. Since the assignment explicitly prioritizes visual accuracy and preservation of the original appearance, the decision was made to retain the legacy UI version rather than introduce unintended UI deviations.

Therefore, installation uses: npm install --legacy-peer-deps

This allows the dependency tree to resolve while preserving:
•	Original design
•	Original component structure
•	Expected UI behavior

## Production

* Build the application: npm run build
* Start the production SSR server: npm run start

## Project structure
```
app/
├── root.tsx                # Root layout
├── routes/                 # React Router 7 routes
├── kotlin/
│   └── js/
│       └── page/index/     # Homepage content
│       └── ktl-component/  # Header and Footer wrappers
```
## SSR strategy
Header and Footer Handling
@jetbrains/kotlin-web-site-ui components rely on browser-specific APIs:

	•	window
	•	document
	•	ResizeObserver
	•	layout measurements (getBoundingClientRect)
	•	scroll locking via document.body

Because these APIs are unavailable during server rendering, the Header and Footer are wrapped in a client-only boundary.

This approach:
•	Keeps SSR enabled for main content
•	Prevents server runtime errors
•	Preserves full interactivity after hydration
•	Avoids patching third-party library internals

## Verifying SSR
* Build and start production: npm run build && npm run start 
* Disable JavaScript in the browser and reload. 
* The homepage content remains visible. 
* Alternatively, use “View Page Source” and verify that the main headline appears in the raw HTML.

## Engineering Note
In a production system, the preferred solution would be to align all dependencies to officially supported versions (e.g., upgrading UI components to a React 18–compatible release).
For this migration task, dependency overrides were chosen intentionally to:
•	Limit scope strictly to routing and SSR migration
•	Avoid unintended visual regressions
•	Preserve original design fidelity
