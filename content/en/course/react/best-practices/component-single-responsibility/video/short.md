

**Narrator:** In programming, SOLID is an acronym for a group of five good development principles 

**Narrator:** Those principles apply to React components as well

**Video Editor:** Show the first slide that describes what is solid `01-comp`

**Narrator:** Each of our React components should have a single responsibility
Having a component that is in charge of multiple aspects of the software is a breach of the Single Responsibility Principle and a mistake many React developers are often doing.

**Video Editor** funny movie quote with a meme: "There should be only one"

**Narrator:** Let's examine the following component which grabs a list of todo 
items from a server and display them.

**Video Editor:** should display `02-comp` and match video marking to the narator list below

**Narrator:** The component will:
- send a query to the server(narator need to match with video first marking - same for other points here)
- while the query is pending display a loading message
- If the query fails display an error message
- finally display the list to todo items

**Narrator:** This component is breaking the single responsibility principle let's examine ways that we can improve the component

plan your work - It helps to write proper jsdoc comments before starting to work on the component.
Writing comments helps you plan and write the intent of what the component should be doing, often while writing them you will naturally understand that your component is doing too much

**Video editor:** should show the video `03-comp` and mark a box around the multiple items and mark it with an X and a text - this component is doing too much

**Narrator:** If your component is too long, it's often a sign of breaking the single responsibility principle

**Narrator:** If your component has many if's , while each if is rendering something else, is often a sign of single responsibility breach.

**Narrator:** Let's examine how we can improve this component:
1. extract the query to a custom hook
2. Suspense can help you share loading logic and extract it from components
3. Error boundary can help you extract error handling and share it among components
4. Component is only in charge of displaying the list - create a list item component for presentation purpose

Single responsibility will help you arrange your components, and custom hooks better, it will be easier to test your code, refactor your code, and even share components and logic and avoid DRY violations.


