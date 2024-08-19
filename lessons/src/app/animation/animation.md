# Animation Libraries

In this lesson we are mainly talking about an underrated animation library which is "Motion Primitives"

MP, is a project dedicated to showcasing animated components build with Framer Motion and Tailwind CSS. It offers a curated
collection of reusable components designed to enhance your web applications or marketing websites with beautiful, smooth
animations.

MP is similar to shadcn ui, but for animations, in this lesson i'm going to give several examples of it

/* Reminder */

clsx: A tiny (less than 1KB) utility for constructing classNames in JavaScript. It allows for more dynamic and conditional className creation, which aids in crafting more interactive and responsive UI components.
tailwind-merge: An incredibly useful utility for merging Tailwind CSS classes. This comes in handy when we need to conditionally apply or combine different Tailwind utility classes.
class-variance-authority: A library that assists in managing class variations in components. It’s excellent for establishing consistent styles throughout a project.

is always useful for us to add this in our utils

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

cn function is a helper utility that makes it easier to handle className manipulation in a tailwind environment. Ensuring
that classNames are appropriately merged and any conflicts are resolved, making the component styling more consistent and
maintainable

/* End of Reminder */

