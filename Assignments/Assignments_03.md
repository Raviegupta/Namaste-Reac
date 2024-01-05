# Episode 03 - Laying the Foundation (Date:- 04/Jan/2023)
## Topics
- JSX                           ✅ (assignment)
- Benefits of JSX               ✅ (assignment)
- Behind the Scenes of JSX      ✅ (notes)   
- Babel & parcel role in JSX    ✅ (notes)  
- React.createElement vs JSX     
- Components
- Functional Components
    - Composing Components


## Assignments
- What is JSX?                   ✅ (assignment)
- Superpowers of JSX.            ✅ (assignment)
- Role of `type` attribute in script tag? What options can I use there?
- {TitleComponent} vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}`

## Coding Assignment
- Create a Nested header Element using React.createElement


---
---
Assignments
### Q1. What is JSX? Does Browsers understands JSX? How does JSX executes code in the browser? Benefits of JSX.
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

### Advantages of JSX.
- readability
- developer experience
- syntatical sugar
- less code
- good to maintain
- no repetition
- code for humans

Note:- `syntactic sugar` is syntax within a programming language that is designed to make things `easier to read or to express`. It makes the language "sweeter" for human use: things can be expressed more clearly, more concisely

---

### Q2. What is Pollyfill?
A polyfill is a piece of code (usually JavaScript) that provides modern functionality on older browsers, ensuring a more consistent experience for users across different browser versions.
- suppose our browser don't understand promises or ES6. so that promises or ES6 code is converted into some other piece of code (undestandable by older browsers) that is a pollyfill.
- `Babel` does this role automatically to convert newer code to older code.

some key points about polyfills:
1. Browser Compatibility:
2. Feature Detection: to check if a certain feature is supported by the user's browser. Feature detection allows developers to conditionally load the polyfill only when necessary, `avoiding unnecessary code execution in modern browsers that already support the feature`.  

---

### Q3. What is a Babel?
ans in notes

---



