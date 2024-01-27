## 🌺🌺 Date:- 27/Jan/24 (Saturday)   Interview Questions Basics -

## Q1. What is React ?
* React is a JavaScript Libraray.
* Use for building Front-end UI with good speed
* It allows we developers to create reusable UI componenets and manage the state and props of those components.
* developed by facebook (now it's meta)
* current version is 18.

---

## Q2. What are Core features of React ?
 ![](https://static.javatpoint.com/tutorial/reactjs/images/reactjs-features.png)

1. JSX.
2. Components.
3. One-way DATA BINDING.
4. Virtual DOM.
1. Simplicity.
1. Performance.
1. Component based architecture.
1. Declarative UI
1. React Native, React 3D

---

## Q3. What do you mean by component ?
* Components are **independent and reusable bits of code**. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
* used to create reusable UI elements.
* It is more powerful than functions.
* 2 Types :-  class component and `Function component`
* Components accept inputs called props (similar to Functions take arguments) and manage their own state.

---

## Q4. How does React handles updates & rendering ?

* When a component's state changes, React will re-render that component and its child components to reflect the new state.
* React uses a virtual DOM, reconciliation process & diff algorithm to optimize updates by only re-rendering the specific parts of the actual DOM that have changed.
* This helps to improve the performance of the application.

---

## Q5. Does Browsers understands JSX ?
*  `No`, JSX files cannot be read directly by browsers. **because there is no inherent implementation for the browser engines to read and understand them**. 

* It **can only read objects that JavaScript provides**. a _JSX file needs to be converted using JSX transformers into a JavaScript object before it can be loaded into the browser and used in the pipeline._

* JSX is transpiled to plain JavaScript before being executed by Babel, so then it is compatible with all web browsers.

--- 

## Q6. What are syntheticEvent in React ?
In React, SyntheticEvent is a `cross-browser wrapper` around the browser's native event. It is a normalized wrapper provided by React that aims to `provide consistent behavior across different browsers`.
```
import React from 'react';

const MyComponent = () => {
  const handleClick = (event) => {
    // Accessing properties of the SyntheticEvent
    console.log('Clicked!', event.target);
  };

  return (
    <button onClick={handleClick}>Click me</button>
  );
};

export default MyComponent;

```
- Inside the component body, we define a handleClick function that takes a SyntheticEvent as an argument.
- When the button is clicked, the handleClick function is called with a SyntheticEvent as its argument. Inside handleClick, we can access properties of the SyntheticEvent, such as event.target, which refers to the element that triggered the event.
- We attach handleClick as an event handler for the onClick event of the button by passing it directly as the onClick prop.

---

## Q7. How does React.js handle state and props ?
* State in React.js refers to the data or variables that determine a component's behavior and render its content.
* Props (short for properties) are inputs passed to a component from its parent.
* They are read-only and cannot be changed within the component.

---

## Q8. Difference between controlled component & uncontrolled component.
* In a `controlled component`, **form data is handled by a React component**. Whereas in `uncontrolled components`, **form data is handled by the DOM itself**.

---

## Q9. What do you mean by custom hooks ?
* If we have stateful logic that needs to be reused in several components, we can build our own custom Hooks.

---

## Q10. How do you use event handling in React.js?
* Event handling in React.js is done using the `onEventName` syntax, where EventName is the name of the event we want to handle, such as onClick or onSubmit.

* Event handlers are passed as props to the component and are defined as arrow functions or bound methods.

---

## Q11. How do you use forms and form validation in React.js ?

* Forms and form validation in React.js are typically implemented using `controlled components`, where the form input values are stored in the state and updated as the user interacts with the form.

* Form validation is then performed by checking the values in the state against a set of rules.

---

## Q12. What is the significance of Higher Order Components (HOC) in React.js ?

* Higher Order Components (HOC) in React.js are components `that wrap other components` to add additional functionality.
*  HOCs are functions that `take a component as an argument` and `return a new component with additional functionality`.

* They are significant because they allow for `code reuse`, `abstraction`,  common functionality into a single, reusable component.

---

## Q13. How can you optimize the performance of a React.js application ?
* Performance of React.js applications can be optimized through techniques like using the `shouldComponentUpdate`
lifecycle method and `lazy loading`

* `Memoization` can also be used to improve the performance of React.js applications.

---

## Q14. How do you test React.js components ?
* React.js components can be tested using various testing libraries, such as `Jest` and `Enzyme`.
* These libraries **provide APIs** for _writing and running unit tests for React components._

---

## Q15. explain how React handles performance optimization, such as lazy loading and memoization?
#### React's performance optimization techniques:
1. `Lazy loading` :- Lazy loading in React involves loading components only when they are needed, rather than loading all components upfront. This can improve performance by reducing the amount of data that needs to be loaded and processed.

2. `Memoization`: Memoization in React involves caching the results of expensive computations so that they can be reused in the future, rather than recomputing the results each time. This can improve performance by reducing the amount of redundant computation.

3. `Virtual DOM`: React uses a virtual DOM, which is a lightweight in-memory representation of the actual DOM, to update the UI efficiently. This can improve performance by minimizing the number of actual DOM updates that are required.

---