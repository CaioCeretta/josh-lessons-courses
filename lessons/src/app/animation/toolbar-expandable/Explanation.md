# Toolbar expandable

Toolbar that changes its height as needed. It grows to show more content and shrink to save space, keeping the screen neat

## How it works

it starts, as always, defining the transition on a constant that is an object, the constant has the attributes type, bounce
and duration

then we have a constant ITEMS which is an array of objects containing id, label, title and content, where content is what
we want to be displayed on the click

then, where we create the component function we have a state of active, a contentReafure which has the value of the useMeasure()

### What is useMeasure

useMeasure is a custom hook from the library react-use-measure, it returns a reference to contentRef as firstParameter and
as the second one an object containing the dimension of the element {height: heightContent}. Where heightContent is the extraction
of the property height and renamed to heightContent, it will hold the current height of the element that contentRef is attached
to. heightContent dynamycally update the height of that element whenever its size changes

This hook automatically measures the size of the element that contentRef is attached to.

Now, let's continue of how it works, 
then it has a menuRef, which is also a constant that holds the measurements of the div it is attached to
a ref, a state of isOpen and a state of maxWidth

after the variables definition we will have the useClickOutside function, this case is a little different, because the callback
we passed on examples before, utilized a function, here we are going to set on the same code, so we will pass the ref we want
and set the toolbar to closed and active as null

a useEffect which will check if we don't have a widthContainer or the maxWidth > 0 we would exit the function, and set
the maxWidth as the widthContainer.

the return will be similar as the others, a MotionConfig, which will tell all the children element to have the animation
defined on the transition, which is the object we declared above, an outer div, which will have the ref where we also
created above. 
Inside that div it will have another div that will take full height of the parent, full width of the parent and other
styles.
Inside that div we will have another with the overflow hidden, and inside of it, finally we will have an AnimatePresence
component.

AnimatePresenca is a component which  helps managing the animation of components as they are added to or removed
from the DOM. It allows you to animate components as they enter and exit, enabling smooth transitions for elements that are
conditionally rendered. it can receive the initial property, which is a boolean that control whether elements sould animate
as they initially appear.


## Sumary of the working code

SO basically here the AP is used to manage the entry and exit animations for the toolbar content, it wraps around the
content that should animate when it enters or exits the DOM. Here in this case, when the isOpen is true, the content
area of the toolbar is animated, the content height is animated from 0 to the contentHeight when it opens and back to
0 when it closes, same thing happens with the width, is also sed dynamically based on the toolbar

motion.div for individual items, each toolbar has its own motion.div to manage the fade-in and fade-out effect, when an
item is selected, it content fades in with opacity 1, and if it is not selected, the opacity is 0.

## Explanation of the animation

. Content Expand / Colapse:

  . The content area of the toolbar expands when an item is clicked and colapses when the toolbar is closed or another item
  is selected
  . This is controlled by the initial, animate and exit properties of the motion.div that wraps the content
  . initial: { height: 0 } ensures the content starts from a height of 0 when entering.
  . animate: { height: heightContent || 0 } smoothly expands the content to its full height.
  . exit: { height: 0 } collapses the content back to a height of 0.

. Item Content Fade:

. The content of each individual toolbar item fades in and out based on whether the item is selected
. The motion.div wrapping each item's content has 'initial', 'animate', and 'exit' properties controlling the opacity
. initial: { opacity: 0 } starts with the content hidden.
. animate: { opacity: isSelected ? 1 : 0 } makes the content fully visible when selected.
. exit: { opacity: 0 } fades out the content when the item is deselected.













