## Next JS Page Transistion Animation

Basic boilerplate code to get started and experiment with page transitions in Next JS & Framer Motion. Expand with GSAP or other animation libraries to create more complex animations.

## Getting Started

- Clone the repo
- Run `npm install`
- Run `npm run dev` to preview build
- Adjust animation with the Motion div in `pages/index.js` to your liking. 


## Information

The App component takes two props, Component and pageProps.
Inside the component, the useRouter hook is used to access the Next.js router.

motion.div for Page Transition:

The main content of the page is wrapped in a motion.div.
The key attribute is set to router.pathname to trigger a re-render when the route changes.
The Component (presumably the page content) is rendered inside this motion.div.

#### Entry and Exit Animations:

Two motion.div elements are used for entry and exit animations.
The first motion.div with the class "slide-in" is initially hidden (scaleY:0), then animates to a fully visible state (scaleY:1) on exit.
The second motion.div with the class "slide-out" is initially fully visible (scaleY:1), then animates to be hidden (scaleY:0) on exit.
Both animations have a duration of 1 second and use a custom ease function ([0.22, 1, 0.36, 1]).
AnimatePresence Component:

The outermost AnimatePresence component is used to manage the presence of its children, enabling enter and exit animations.

