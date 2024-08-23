# Toolbar Dynamic Explanation

The toolbar dynamic also has a const named transition which is an object with the type of spring, bounce and a duration
of the animation.

## Button Component 


It has a button component which will receive a children, an onClick, a disabled and an aria label for acessibility,
and it will return a button with these classes

className='relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg
text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]
disabled:pointer-events-none disabled:opacity-50'

which means it will be relative to the parent, flex, h and w of 9, won't be possible to shrink it less than that, a scale-100
to get the original size, a select-none which won't let the client select this element, items-center for all the children
of the button be on the same level, rounded, text-zinc, a transition-colors for when the colors change on hover, a ring 
of 2 units for when it's focused, a scale to shrink a little bit when the button is active, pointer events for the cursor
disabled when button is disabled and thje opacity is lower when the button is disabled.

The onClick and disabled are going to be the function passed as props, and it will have the children as children

## Toolbar Component

state of isOpen and setIsOpen for when the dynamic toolbar is clicked, and a container ref for the tooltip container

useClickOutside just as the other examples, receive the ref and a callBack

returns a MotionConfig, which defines a transaction style to all elements within it, being the transiction we defined
before. The container is a motion.div which has an animate within it and then the rest is common styling we usually have
on elements. Here is the basic functionaltity

first the motion.div will have an animate and check if the state of the isOpen is true or false, if it is false, it will
render a div, with two buttons, one with being disabled and the user icon and is self closing, and another one, which is
the search icon, and when we click on it it will set the isOpen as true. After we click on the search icon, the state will
change and the component will re-render, and show an input telling us to search notes. In this simple example, after we
click outside  we are going to shrink the search box, and show it as we normally would




