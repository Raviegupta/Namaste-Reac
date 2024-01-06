# Episode 03 - Laying the Foundation (Date:- 04/Jan/2023)
## Topics
- JSX                           ✅ (assignment)
- Benefits of JSX               ✅ (assignment)
- Behind the Scenes of JSX      ✅ (notes)   
- Babel & parcel role in JSX    ✅ (notes)  
- React.createElement vs JSX    ✅ (notes)      
- Components
- Functional Components         ✅ (assignment) 
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

## 🌺🌺 Date:- 06/Jan/24 (Saturday)   Episode #03 continues...
### Q4. What is Functional Component in React?
- This is a new way of writing code, it's just a Normal `JavaScript Function` that's `returns some piece of JSX` or a `react element` or a `composition of react element` or a `component in itself`. Name of Functional component `starts with Capital letter`.
  ```
  // Function Componenet
  const HeaderComponent = () => {
    return <h1>Hello Ravie Functional Componenet</h1>
  }
  ```
  ```
  // when our code goes in multiple line then we have to wrap in parenthesis ()
  const HeaderComponent = () => {
    return (
      <div>
        <h1>Hello Ravie Functional Componenet</h1>
        <h2>This is a h2 tag</h2>
      </div>
    );
  };

  root.render(<HeaderComponent/>)
  ```
- How to **render** Functional Componenet? 
  - see above 
  - rendered using </>   `root.render(<HeaderComponent/>)`

---

### Q5. Difference b/w React Element & React Componenet?
- The only difference between react element & react component.
  ```
  // functional component
  const HeaderComponent = () =>  (
      <div>
        <h1>Hello Ravie Functional Componenet</h1>
        <h2>This is a h2 tag</h2>
      </div>
  );

  // react element  [just remove  () => & enjoy as element 😊]
  const heading = (
      <div>
        <h1>Hello World</h1>
        <h2>This is a h2 tag</h2>
      </div>
  );
  ```
  Hence, 
  - to **render React Element**
    - `root.render(heading)`
  - to **render React Functional Component** (use of angular bracket with closing slash)
    - `root.render(<HeaderComponent/>)`

- **React Element** (just JS variable) `returns a object`.
- React Functional component (just a JS function) & it `returns a JSX.`

### Conclusion :-
1. If it is a element => use curly braces => { heading }
2. If it is a Func Comp => use curly braces & then call it => { `Title()` }  or <br>
   use of angular bracket `<Title/>`
3. we can do any JavaScript operation under curly braces.

---

#### How to insert one Functional Component inside aanother Functional Component?
- write Functional component inside `</>` inside functional component or <br>
- Since it is a JavaScript function only. Just **call it inside curly braces**.  { `Title()` }

  ```
  const Title = () => (
    <h1 id="title" key="h11">
      this is a Functional Component
    </h1>
  );

  const HeaderComponent6 = function() {
    return (
    <div>
      <Title/>
      {Title()}
      <h1>function component</h1>
      <h2>this is h2 tag</h2>
    </div>
    )
  }

  root.render(<HeaderComponent6/>)
  ```

---

### Q6. What is component composition in React?
Simply when we `write a Function component outside` & `insert this to another Function component by using < />`. This is called Component Composition. Just a fancy term aur kuch bhi nahi h. 🤣
In Simple language (ek component ko dusre component k ander ghusana.)

---

### Q7. Is the component Hoisted? 🤣
Yes, It behave the same way as Functions. We just call it as Functional Component. But it is a Function at the end of the day. So, it behaves exatly as the JavaScript Function.

---

### Q8. What is the difference between Pollyfill & Babel ?
- Babel is a compiler which creates pollyfill for us. (Babel takes new piece of code & split out a code by doing something out of it. & that old piece of code is Pollyfill)
- Pollyfill is that old piece of code & it is replacement for old piece of code.

---

### In this Foundation Class I have learnt:
* Babel
* Pollyfill
* exact meaning of "last 10 chrome versions" in browserslist
* parcel tree shaking
* Story behind command npm run start ?
* How we build the the script, write the script. created build in scripts.
* What is .gitignore & how to use it (using command git init)
* How we can install a plugin & package into our system & configure it.
* How to remove console.log from dist js file ?
* What is JSX. At the end of day JSX uses React.createElement() behind the scenes. & React.createEelement gives us an Object.
* How does react.createElement() work ?
* Is JSX is html inside JavaScript ?
* How does JSX executes code in the browser ?
* Advantages of JSX
* How many package-lock.json our code has ?
* Functional Component
* How to render Functional Componenet
* Understand the difference between react element & react component.
* How to use my react element inside functional componenet ?
* How will we insert one functional componenet inside a functional componenet ?
* Can we write any JavaScript code inside a functional component ?
* JSX Sanitisation
* component composition in React 

---



