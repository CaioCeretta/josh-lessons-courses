# Cursor animation explanation

## 1. Custom SVG Component: MouseIcon

On the cursor animation, we can usually utilize alongside the motion.div, where te motion is part of the framer-motion
library. we utilize motion.element so it will now support the element properties and also allow us to animate is properties.

Let's use our explanation based on the CustomComponentCursor

Here we have the custom svg component, which is the MouseIcon, and it is a mouse pointer using svg, it renders a green arrow
like shape with a white stroke. The icon is created using standard svg properties.

The MouseIcon props accept SVGProps<SVGElement>, which allows it to be customizable, so you can pass additional styling
with all the properties that are valid for an svg html element.

##### 2. Main Component: `CursorCustomComponent`

The purpose of this component is that it showcases a cursor animation effect when hovering over an image. It uses the 'Cursor'
component to render a custom cursor that includes the MouseIcon and some text

##### 3. Cursor Component 

The purpose of the Cursor component is that it wraps around the custom cursor and manages its position and animation
based on the user's mouse movement.

attachToParent: this is where we ensure the custom cursor stays relative to the parent element, and only appear and move
within the boundaries of its parent

variants:
  . initial: The starting state when the curson first appears (small and invisible)
  . animate: the state the cursor animates to when it's fully visible (scaled to normal size and fully opaque)
  . exit: the state when the cursor is exiting (shrinks and fade out)

transition: This prop defines the animation timing and easing. Here, the cursor animates with a smooth ease-in-out effect
over 0.15 seconds

className: this adds additional styles to position the cursor relative to its parent element.

##### 4. MouseIcon and Text Within Cursor

. MouseIcon: The MouseIcon svg is rendered inside the custom cursor. it visually represents the custom cursor icon.

. Text: The Text svg is rendered inside the custom cursor

##### 5. Image element

Target image that the custom cursor interacts with. So when we hover over, the custom cursor MouseIcon and text appears


## Summarizing: How's it working

When the custom cursor hovers over the container, the Cursor component becomes active, showing the custom cursor MuseIcon
and text on top of the image, the appearance and disappearance of that custom cursor are smoothly animated based on the
variants and transition props defined within the `Cursor`component.

This setup provides a visually appealing and interactive experience, where the custom cursor adds a dynamic element to the
user's interaction with the imagwe