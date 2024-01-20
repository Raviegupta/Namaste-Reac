# Episode 04 (Date:- 20/Jan/2023)

## Topics
- Is Jsx mandotory for React?                               ✅ (assignment)
- Is ES mandotory for React?                                ✅ (assignment)
- {TitleComponent} vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX     ✅ (assignment 3)
- How can I write comments in JSX       
- What is <React.Fragment><React.Fragment/> and <></> ?     ✅ (assignment)
- What is Virtual DOM?
- What is Reconciliation in React?
- Why we need keys in React? When do we need keys in React?
- Can we use index as keys in React?
- What is props in React? Ways to write props?
- What is config driven UI ?


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