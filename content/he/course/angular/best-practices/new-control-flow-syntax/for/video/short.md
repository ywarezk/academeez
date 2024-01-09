- If you're using Angular version 17 you should stop using `*ngFor`
  **Editor: type `*ngFor` on screen and do an X**

- Angular 17 is shipped with a new control flow syntax and there is a better way to loop on iterables in your angular templates

- So stop using \*ngFor and instead use the new `@for` syntax in your angular templates
  **Editor: type `@for` and a v checkmark**

There are benefits for using the new syntax:

- better performance
- easier to see the boundaries of the loop - **Editor should highlight the curly brackets**
- track function is mandatory with an easier api - **Editor should highlight the track part**
- Support for `@empty` block on edge cases where the iterable is empty null or undefined. - **Editor should highlight the empty block**

Check out our complete `@for` guide and a coding playground to play with the new syntax
link in the description.
