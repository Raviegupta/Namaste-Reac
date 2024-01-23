## 🌺🌺 Date:- 20/Jan/24 (Monday)   Episode #04

## Topics
- Is Jsx mandotory for React?                               ✅ (assignment)
- Is ES mandotory for React?                                ✅ (assignment)
- {TitleComponent} vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX     ✅ (assignment 3)
- How can I write comments in JSX       
- What is <React.Fragment><React.Fragment/> and <></> ?     ✅ (assignment)
- What is Virtual DOM?                                      ✅ (assignment)
- What is Reconciliation in React?                          ✅ (assignment)
- Why we need keys in React? When do we need keys in React? ✅ (assignment)
- Can we use index as keys in React?                        ✅ (assignment)
- What is props in React? Ways to write props?              ✅ (assignment)
- What is config driven UI ?                                ✅ (assignment)
- What is React Fiber ?                                     ✅ (assignment)


### Q1. Is Jsx mandotory for React?
- No, JSX (JavaScript XML) is not mandatory for building React applications, but it is highly recommended and widely used due to its benefits.
- While we can write React applications without JSX by using by using React.createElements();


### Q2. Is ES mandotory for React?
- No, It's not mandotory.
- ES (ECMAScript) is the standard for JavaScript. Since React applications are built using JavaScript. Therefore, having a good understanding of ES features is essential for working with React. 

### Q3. What is React Fragment. <React.Fragment><React.Fragment/> and <></> ?
- In React, each render method must return a single parent element. However, sometimes adding an extra wrapper div or any other element to the DOM is unnecessary.
- <React.Fragment> is a feature provided by React that allows us to group multiple children elements `without adding extra nodes to the DOM.` Introduced in React 16.2
- particularly useful when you need to return multiple elements from a component's render method, as JSX expressions must have a single parent element.

```
import React from 'react';

function MyComponent() {
  return (
    <React.Fragment>
        <ChildA />
        <ChildB />
        <ChildC />
    </React.Fragment>
  );
}
```

- The <> </> syntax is a shorthand for <React.Fragment>. It provides a more concise way to achieve the same functionality.
```
import React from 'react';

function MyComponent() {
  return (
    <>
        <ChildA />
        <ChildB />
        <ChildC />
    </>
  );
}
```

- In both cases with Fragments, ChildA, ChildB, and ChildC will be siblings in the output, without an extra parent element wrapping them. This can be particularly useful in scenarios like rendering a list of items or when a component is expected to return multiple elements but we don't want to add extra nodes to the DOM.


```
import React from 'react';

function MyComponent() {
  return (
   <div> {/* Extra div added */}
        <ChildA />
        <ChildB />
        <ChildC />
    </div>
  );
}
```

---


## 🌺🌺 Date:- 22/Jan/24 (Monday)   Episode #04

### Q4. What is Virtual DOM ?   What is Real Dom ?
**Real Dom**
- The Real DOM is a `tree-like structure` that `represents the UI of a web page`. It includes all the HTML elements and their properties.
- In terms of React, This is web version of React. responsible for all DOM operations.

**Virtual DOM**
- The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.
- representation of Actual DOM (It's not Actual DOM).
- like a Normal JS Object.



### Q5. What is Reconciliation in React ?
- When changes are made to the UI in a React application, such as updating state or props, React doesn't immediately update the Real DOM. Instead, it updates the Virtual DOM.
- React then compares the updated Virtual DOM with a previous version of the Virtual DOM (created before the update).
- React identifies the differences (or "diffs") between the two versions of the Virtual DOM. (This is done by `Diff Algorithm`)
- Once React has identified the differences between the old and new Virtual DOM. It calculates the most efficient way to update the Real DOM to reflect the changes. 
- Rather than updating the entire Real DOM tree, React only updates the specific parts of the Real DOM that have changed.
- This process is known as Reconciliation. 


## Q5. How does the virtual DOM work in React.js ?
* React uses a virtual DOM (Document Object Model) to optimize updates and rendering.
* The virtual DOM is a lightweight in-memory & representation of the actual DOM.
* When the state of a component changes, React compares the virtual DOM with the actual DOM and only makes changes to the actual DOM where necessary, which is much more efficient than rerendering the entire page.



### Q6. Why we need keys in React? When do we need keys in React?
- Each child in a list should have a unique “key”
- This indicates us that we need to give each array item a `key` a **string or a number** that `uniquely identifies` it among other items in that array:  <br>
ex:-  `<li key={person.id}>...</li>` 
- It is important bcoz our array items can move (e.g. due to sorting), get inserted, or get deleted.
- A well-chosen `key` helps React infer what exactly has happened, and make the `correct updates to the DOM tree`.
- Keys are important for reconciliation, the process by which React updates the actual DOM based on changes to the virtual DOM. <br>
  #### why keys are important
  - Identifying Elements in Lists
  - Optimizing Reconciliation :- Keys help React identify which items have changed, been added, or been removed from a list. Without keys, React may resort to re-rendering the entire list, which can be inefficient, especially for large lists.
  
  #### When we need keys
  - Rendering Lists: When you map over an array to render a list of items using Array.map(), each item should have a unique key.
  - Dynamic Forms: When rendering dynamic forms where input fields or components can be added or removed, keys help React identify and track the state of each form element.
  - Animations and Transitions: When working with animations or transitions, keys can help maintain the continuity of UI elements as they change position or appearance.



### Q7. Can we use index as keys in React?
- React don’t recommend using indexes for keys bcoz if the order of items may change. This can negatively impact performance and may cause issues with component state.
- key with unique id >>>>>>>>>> key as index >> not to have key.
- If we don't have unique id then we use index as key but it's not recommended.



### Q8. What is props in React? Ways to write props?
- props are just like normal arguments of the function call.
- When we are passing props to a component  =>  we are passing arguments to a Function call.
- `<RestaurantCard resName="Meghna Food" cuisines="North Indian, Fast Foods">`
    - `resName="Meghna Food" cuisines="North Indian, Fast Foods"` : as arguments pass ho rahe h, ek object me wrap hokar jata h, jise hum props bolte h

- In React, "props" is a short form for "properties," and it refers to the mechanism for passing data from a parent component to a child component in a React application.
- Props are read-only and are used to communicate between components
- we can't change or update props in those component where we are receiving props from other component.



### Q9. What is State in React ?      
* It holds information inside component and it store any data like a variable.
* when we update state component, it rerenders again but not in case of variable. 
* we can only use state inside of component but can't outside of component.
* The state object can contain many properties.

```
class Garden extends React.component {
    constructor(props) {
    super(props);
    this.state = {flower: "Rose", color: "white-pink" };
  }
  render() {
    return (
      <div>
        <h1>example for state</h1>
      </div>
    );
}
```


### Q10. What is config driven UI ?
A config-driven UI (User Interface) is an approach where the structure, behavior, and appearance of a user interface are defined and driven by configuration data rather than being hard-coded into the application's source code.
- This configuration data can be in various forms, such as JSON, YAML etc..  <br>
- ex: some offers available in banglore, some other offers available in kolkata, carasouel offers will be different as per location (some location might not have offers). So, to controll our UI from Conflicts & data that conflicts. This is Config Driven UI. (our website is driven by config data)



### Q11. What is React Fiber ?
React Fiber is a complete rewrite of the React core algorithm and reconciliation algorithm introduced in React 16.
Its main goal is to enable `incremental rendering` of the virtual DOM.
- **Incremental rendering**: the ability to split rendering work into chunks and spread it out over multiple frames.
- The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures.  <br>

The key features and goals of React Fiber include:
- Incremental Rendering: split the rendering work into smaller chunks, prioritizing updates based on their urgency and scheduling them more efficiently.
- Concurrent Mode: Fiber enables concurrent mode, a set of new features that help React apps stay responsive and gracefully adjust to the user’s device capabilities and network speed.
- Improved Error Handling: With Fiber, React introduced the concept of error boundaries. These are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole app. <br>

It's important to note that Fiber is more about the internal mechanism of React’s rendering process and doesn't require changes to the way React is written by developers.