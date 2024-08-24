# Transition Panel Explanation

Easy way to switch between different pieces of content with enter and exit animations. It's perfect for enhancing user experience in areas such as onboarding card, settings adjustments, or any interactive content that requires a visual transition between states.

## Tabs with Transition Panel

here we have a state, of activeIndex, a constant items which is an array of objects, then, we return a div , this div
consists of three buttons with each item name, it then, will set the state index as this state index in the array

below that div we are going to have another div, with the TransitionPanel which will deal with the effect that has the
activeIndex, which transition we want, in this case is duration of 0.2 and an ease of easeInOut, and another property of
variants, which will deal with the animations for when it enters, center of the animation and exit of the animation, it will
start invisible, 50 units negative to the top and blurred, in the middle of the animation the opacity will be 1, the y as 0
which will make the text come from the top, and a blur of 0.

Inside the transition panel element, we are mapping over the ITEMS and rendering divs based on the activeIndex.

## Cards with Transition Panel

This example is quite similar to the tabs one, it will have a button component, which receives a onClick and children,
that oneClick is going to be passed from the parent that calls it, aswell as the children.

Now we have a function named TransitionPanelCard, this function has a state of activeIndex, direction, a ref measure

Then it will have an array of objects named features which will consist of title and description attributes, a function
named handleSetActiveIndex, which will receive a newIndex as parameter, then set the direction based on the item number
in the array

it will set the direction as

newIndex > activeIndex if yes it will be 1, if not -1, and set the active index as the new index, this will be useful
for us to know if there's a previous one or not, aswell as the next

a useEffect which will check if activeIndex < 0  and setActiveIndex as 0
and another if that it will check if activeIndex is bigger or equal than the array of objects length, if yes, it will set the active index as the features.length - 1

and a constant of variants which will deal with the beginning, middle and exit of the animation

Now it returns a div and inside that div the TransitionPanel, which will receive the index, the variants, which are going
to be dynamic, the enter of the animation will receive the direction state as argument and return x: direction > 0 ? 364 : -364, this is telling that, is it the first item? if so, the x will be 364, which means that i will be to the far right and invisible to the client, and if it is the first item, go back to the far left

