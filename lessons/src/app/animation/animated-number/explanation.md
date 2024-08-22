# Animated Number Explanation

Animated Number component receive a property named springOptions, spring animation reffers to an effect that mimics the
behavior of a physical spring, where an element moves towards a target position but overshoots, bounces back and eventually
settles. This effect is more complex than simple linear or ease-in/ease-out transformations.

The spring options object consist of the respective properties for us to reach the desired output, those options are: 

interface SpringOptions extends DurationSpringOptions, VelocityOptions {
    stiffness?: number;
    damping?: number;
    mass?: number;
}
interface DecayOptions extends VelocityOptions {
    keyframes?: number[];
    power?: number;
    timeConstant?: number;
    modifyTarget?: (v: number) => number;
}
interface InertiaOptions$1 extends DecayOptions {
    bounceStiffness?: number;
    bounceDamping?: number;
    min?: number;
    max?: number;
}
interface KeyframeOptions {
    ease?: Easing | Easing[];
    times?: number[];
}

## Examples


## Basic

The basic example that's been used in this lesson, i have a star svg on the left and the animatednumber component, it has
it's styling, such as inline-flex, items-center..., and it has the property springOptions, which is an object with the duration
of the animation and the bounce when it comes to rest. A bounce, as bigger the value gets, the animated number would overshoot
slightly until it reach its final position.

## Counter

In the counter example, we have two buttons, a minu button, which the onclick, will cause the value to be decreased by 100
and in toe othher side an increment value which will increase by 100, then we will also have, just like the basic example
the same animated-component number we have, the springOptions are still going to be applied on the plus and the minus.

## With useInView

this uses the useInView from framer-motion, it detects if the div being referenced is visible on the screen, the animation
will start running