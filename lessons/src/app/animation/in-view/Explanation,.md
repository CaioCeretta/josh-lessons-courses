# In View Animation

InView animation consists of animating elements when they come into view. We can apply that animation to elements when
they enter the viewport, or when they are fully visible

## In View Basic

Here in this example we created a outer div with specific height and overflow being auto, which means that if the content overflowed
the div size, it would generate a scroll bar, then inside of it, would have another div with some padding, just for the text
of scroll down and a sibling div, which would contain the divs content, this div have the height of 500px, which is already
taller than the parent, a flex items-end, which will make the children to be aligned at the bottom.
So the element still isn't visible to the user, and when we scroll down, it will show with the variants

hidden={ opacity: 0, y: 100, filter: 'blur(4px)'}, this means that the element has the opacity of 0, it is initially blurred,
and the y refers to a vertical translation of 100 units, meaning it would be 100 units below the element's original position

visible={ opacity: 1, y: 0, filter: 'blur(0px)'}, this means that when the element enters on the screen it will have the animation
of coming from the bottom and with the invisibility and blur being faded out

then it will have another property named viewOption with the value of margin: 0 0 -200px 0px, this means that the element will
be considered IN VIEW when it's still 200px away from actually entering the visible part of the viewport, due to the negative
bottom margin

and another component named transition, which will have a duration and an ease of easeInOut, meaning that it will take
0.3s to enter the animation and end, being faster in start and slower in the end


## In View With Margins

The inview with margin consists basically of the same thing as the above, the variants are going to be practically equal
but with another attribute named scale, which will start at 0.95 and end in 1, it will make the container of the text be
a little bigger.

inside of that outerdiv, we are going to have three inview components, one with the viewOptions that on the transition the
text will come from the bottom, another inview it will be a little different, because it has the x of 100, meaning it will 
start on the far right and when it comes to the viewOption it will come to x 0, meaning it will come from the right

and it will have another inview sibling, that will start when it is not visible, it will have a scale of 150% and on scale
it will have the scale of 100%, which will visually cause on us the impression of shrinking

## In View With Image and Margins

This example consists of 

viewOptions={{ once: true, margin: '0px 0px -250px 0px' }}: These options specify that the animation should trigger
once (once: true), and the margin adjusts when the element is considered "in view" by using an offset of -250px on the
bottom.

and when the image come into view, they will transition to the opacity of 1, and a staggerChildren of 0.09, which delays
the start of each child animation by 0.09 seconds

The images are on a grid with two columns, and once it reach the sm width, it will have 3 columns.

Each image is wrapped on a motion,div, to animate the entry of the image, its variants are also going to be hidden and visible
and when it is hidden it will have reduced opacity, smaller scale, and a blur, properties that are going to go back to normal
when it reaches the visible viewport. The style of the image div is going to be size-full rounded-lg and object-contain, 
so the image is styled to take up the full size of its container, have rounded corners and maintain it's aspect ratio

