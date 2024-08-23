# PopOver Animation Explanation

A popover is usually a quick user interaction over existing content. It pops up on command and closes easily with a
click outside or a click button

let's break down this animation

first wich a constant transition, which is an object of type spring, bounce 0,05, and duration of 0.3, just as we are used
to, but now in this case, it is stored in a constant which will be passed to the popover

then we have a formContainerRef, which is going to store a reference to the div element
a state of isOpen and setIsOpen
and another state for the note the client will write

a function openMenu, to update the state to open, a function to close, which will set the note as null and the open to false
and a function of clicking outside, which will check if the referenced passed is clicked and call the closeMenu function
ass a cb.

After that we will have a useEffect where we will have a function that checks if the escape button was pressed, and
close the menu, then we are going to an event listener, that check if the key was pressed, then on the return, which happens
after the useEffect, it will remove this listener.

In the return part of the Popover component we are going to have

a MotionConfig, which comes from the framer-motion, defines a default transition configuration for all the framer morion animations
within the Popover. Sindie thje motion config, we are going to have a div that is going to cover all of the content, inside
of it, a button, where it's a motion.button so the onClick={openMenu} will have the transition effect passed in the constant
basically this is going to be basic a normal div

one other important element is the AnimatePresence component, which has the uniqueId we set at the beginning of the component
as the layout id, and stylings for the note box

