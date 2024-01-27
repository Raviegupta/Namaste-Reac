## 🌺🌺 Date:- 27/Jan/24 (Saturday)   Extra Questions basd on Class Component (old collection) - 

### Q. OOPS Concept
#### `OOPS` :- Object Oriented Programming language.
1. **Abstraction** :-
    * To show only important things and hiding the others.
    * It is used to hide background details or any unnecessary implementation about the data so that users only see the required information.

2. **Encapsulation** :-
    * Properties(variables) and methods(functions) into a single container.
    * The process of wrapping data and functions that perform actions on the data into a single entity is known as encapsulation.
    <img  src="https://www.scientecheasy.com/wp-content/uploads/2018/06/encapsulation-in-java.png"/>
    - ex:-  binding function, variables & states together in react class component.
        ```
        import React, { Component } from 'react'

        export default class Footer extends Component {
            render() {
            // function
            // variables
            // states
            return (
                <div>temp</div>
            )
            }
        }
        ```
    
    * ex:- binding name & function in object

      ```
      let obj = {
       name : 'ravie',
       fn() {
           console.log('Hello Encapsulation')
       }
      }
      ```

3. **Inheritance** :-
    * When a child inherit some properties from its parent than it is referred to as Inheritance.
    * When a class derives from another class. The child class will inherit all the public and protected properties and methods from the parent class. *In addition, it can have its own properties and methods*. 
    * An inherited class is defined by using the **extends** keyword. <br>
    <img  src="https://static.javatpoint.com/images/core/typesofinheritance.jpg" width="600px"/> <br>
    <img  src="https://simplesnippets.tech/wp-content/uploads/2018/04/java-types-of-inheritance.jpg" width="600px"/>
   
    * ex:-  making component `Temp` in react by class component. (see `extends` keyword is there)

      ```
      import React, { Component } from 'react'

      export default class Temp extends Component {
        render() {
          return (
            <div>temp</div>
          )
        }
      }
      ```

4. **Polymorphism** :- 
    * **Passing different message using same name** is known as Polymorphism.  ex:- **Function overloading**.
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221108162620/Polymorphism.png" width="600px"/> <br>

      ```
      // Function Overloading:- Function name is same but function defination will be different.

      function add(a,b) {
          return a+b;
      }

      function add(a,b,c) {
          return a+b-c;
      }

      function add(a,b,c,d) {
          return a*b+c+d;
      }

      print(add(5,6,5,6));

      // Here we are passing different parameters to the same function 'add' 
      // & depending upon the number of parameter the function is being called.

      // if we will pass no param, then it will refer to first one.
      ```

5. **Classes and Object** :- Classes and object. 

    * Class is a **blueprint or template** from which objects are created.
    * object is an **instance of class** 
    * A single entity of a class is known as Object.
    * Collection of similar type of entities is known as class.
    * Collection of entities which posses similar kind of behaviour is known as class.
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/Screenshot-from-2018-08-27-10-39-14-1.png" /> <br>
 
      ```
       import React, { Component } from 'react'

       export default class Footer extends Component {
        render() {
          return (
            <div>temp</div>
          )
        }
      }
      ```
    * here Footer sirf class ni raha, it become Footer component with the help of Component.

    ---


### Q. What is LifeCycle in React ?
* The component lifecycle in React.js refers to the different stages a component goes through, from its creation to its destruction. (from birth to death)
* React.js lifecycle methods are used to *manage the various stages of a component's lifecycle*, such as `mounting`, `updating,` and `unmounting`.

* living organisms life cycle
  1. birth :- creation
  2. child --> teen --> adult --> old :- updation phase
  3. death --> destruction.


* Similarly `Component lifecycle phases` are (either in class or functional component):- 
  1. **Mount**    -> creation phase
  2. **Updation** -> state change, props change, ref change.
  3. **Unmount**  -> destroy

`The main lifecycle methods include:`

  1. `componentDidMount`: executed after the first render .
  1. `componentDidUpdate`: executed after each update.
  1. `componentWillUnmount`: executed before the component is removed from the DOM. 


### Q. Explain LifeCycle Phases in brief.
#### 1. Mounting:
- `constructor`: first method that is called when a component is created. It is used for *initializing state and binding event handlers*.
- render: responsible for returning the JSX that represents the component's UI.
- `componentDidMount`: called after the component has been rendered to the DOM. often used for performing side effects like fetching data from a server.

#### 2. Updating:
- `shouldComponentUpdate`: called before rendering when new props or state are received. allows us to control whether the component should update or not based on the new props or state.
- render: Same as in the mounting phase, responsible for returning the JSX that represents the updated UI.
- `componentDidUpdate`: called after the component has been updated in the DOM. often used for interacting with the DOM or performing additional side effects.

#### 3. Unmounting:
- `componentWillUnmount`: called just before the component is removed from the DOM. used for performing cleanup tasks like removing event listeners or cancelling network requests.



### Q. what is class component?
Class components are the traditional way of defining components in React and are used to create reusable UI components with their own state and lifecycle methods.
```
import React, { Component } from 'react';

class Garden extends Component {

  render() {  // anything which we want to render on UI we will write it inside the return of render method. 
    return <h1>Hello, class component</h1>;
  }
}

export default Garden;
```


### Q. little code to understand Class Component (change the color on clicking button).

```
import React, { Component } from 'react'

export default class Temp extends Component {
  constructor() {
    super();
    this.state = {flowerColor : 'class1'}
  }
  changeColor = () => {
    this.setState({flowerColor: 'class2'})
  }
  render() {
    return (
      <h1>
        <div className = {this.state.flowerColor}>My Garden</div>
        <button onClick={this.changeColor}>change the color</button>
      </h1>
    )
  }
}
```
```
.class1{
  background-color: red;
  color: yellow;
}
.class2 {
  background-color: blue;
  color: white;
}

```
---

### Notes
### Constructor()
#### _If we don’t initialize state & don’t bind methods, we don’t need to implement a constructor for our React component_.

* The constructor for a React component is called before it is mounted. When we are implementing the constructor for a React. we should call **super(props)** before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.

#### constructors are only used for two purposes:
1. Initializing `local state` by assigning an object to this.state.
2. Binding `event handler` methods to an instance.

we should not call setState() in the constructor(). Instead, if our component needs to use local state, assign the initial state to this.state directly in the constructor:

* Constructor is the only place where we should assign this.state directly. In all other methods, we need to use this.setState() instead.
* Avoid introducing any side-effects or subscriptions in the constructor. For those use cases, use componentDidMount() instead.

```
constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```



Ref :- https://reactjs.org/docs/react-component.html#:~:text=Typically%2C%20in%20React%20constructors%20are,handler%20methods%20to%20an%20instance.

---



### Counter using class component.
```
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    // Lifecycle method called after the component is mounted
    // Can be used for performing side effects like data fetching
  }

  componentDidUpdate(prevProps, prevState) {
    // Lifecycle method called after the component's state or props are updated
    // Can be used for reacting to state/props changes
  }

  componentWillUnmount() {
    // Lifecycle method called before the component is unmounted
    // Can be used for cleanup tasks like removing event listeners
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default MyComponent;

```