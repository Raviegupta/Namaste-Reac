# Episode 03 - Laying the Foundation (Date:- 04/Jan/2023)
## Topics
- JSX
- React.createElement vs JSX
- Benefits of JSX
- Behind the Scenes of JSX
- Babel & parcel role in JSX
- Components
- Functional Components
    - Composing Components


## Assignments
- What is JSX?
- Superpowers of JSX.
- Role of type attribute in script tag? What options can I use there?
- {TitleComponent} vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}`

## Coding Assignment
- Create a Nested header Element using React.createElement


---
---
Assignments
### Q1. What is JSX? Does Browsers understands JSX? How does JSX executes code in the browser ?
JSX (JavaScript XML) is a `syntax extension for JavaScript`.
It allows developers to write `HTML-like syntax code` within JavaScript.

- JSX allows `JavaScript expressions, logic, dynamic content` to be embedded within curly braces `{ }`.
- JSX code is `not directly understood by browsers`. it needs to be transformed into regular JavaScript code before it can be executed. This transformation (`transpilation`) is done using a tool like `Babel` which converts JSX into equivalent JavaScript code that browsers can understand.
- `Component Composition`: JSX is commonly used to define React components. Components written in JSX can be composed together to build complex UIs, where each component encapsulates its own logic and UI structure.
- While JSX resembles HTML, there are some key differences, such as using `className` instead of `class` for specifying CSS classes, and using camelCase for attribute names like onClick instead of onclick.

ex:- 
```
// using single line
const heading = <h1 id="title" key="h1">Ravie Enterprises by JSX</h1>

// if using multiple line then we have to put ()
const heading = (
  <h1 id="title" key="h1">
    Ravie Enterprises by JSX
  </h1>
  );
```

- `Babel` is a `compiler` for writing `next generation JavaScript`. Babel reads code line by line word by word & then sees an `angular bracket`, which means there must be a JSX. then the above code is converted into as below
- JSX uses => `React.createElement` behind the scenes => `Object` => `HTML(DOM)` <br>
(Behind the scenes, Babel compiler converts JSX into React.createElement())
- babel comes along with bundler parcel / webpack. (babel comes as a dependency along with parcel.)

---

### Q2. What is Pollyfill?
