import React from "react";
import ReactDOM from "react-dom/client";

/* 
<div id="parent">
    <div id="child">
        <h1>Hello, Its a Nested structure</h1>
        <h2>sibbling</h2>
    </div>
    <div id="child2">
        <h1>Hello, Its a Nested structure</h1>
        <h2>sibbling</h2>
    </div>
</div> 
*/

const parent = React.createElement(
    'div', 
    {id: 'parent'}, 
    [
        React.createElement(
            'div', 
            {id: 'child'}, 
            [
                React.createElement('h1', {id: ''}, 'Hello, Its a Nested structure'), 
                React.createElement('h2', {id: ''}, 'sibbling')
            ]),

            React.createElement(
                'div', 
                {id: 'child2'}, 
                [
                    React.createElement('h1', {id: ''}, 'Hello, Its a Nested structure'), 
                    React.createElement('h2', {id: ''}, 'sibbling')
                ])
    ]
    )



const heading = React.createElement("h1", {id: 'heading', xyz:'abc'}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

console.log(heading); // It is an Object. hence, React.createElement returns an Object


// Note:- React.createElement returns an object  => html (Browser understands)



// JSX
const headingJSX = <h1>Hello World from React by JSX</h1>   // by using JSX
console.log(headingJSX)
// root.render(parent)

// JSX => React.createElement => object => html (Browser understands)
// conversion from JSX code to React.createElement done by Babel (Minister of Modi Ji)



// React Element
const HeadingElement = <h1 className="heading">Hello Ravie, It's a Heading Element</h1>
// const HeadingElement = (
//     <h1 className="heading">Hello Ravie, It's a Heading Element</h1>
//     )
// root.render(HeadingElement);



// Functional Component
const HeadingComponent = () => <h1 className="heading">Hello Ravie, It's a Functional Component</h1>

// const HeadingComponent = () => (
//     <h1 className="heading">Hello Ravie, It's a Functional Component</h1>
// )

// const HeadingComponent = () => {
//     return (
//     <h1 className="heading">Hello Ravie, It's a Functional Component</h1>
// )}

// root.render(HeadingComponent());
// root.render(<HeadingComponent/>);
// root.render(<HeadingComponent></HeadingComponent>);



// React Element inside a Functional Component
// Functional Component inside another Functional Component (Component Composition)
const HeadingComponent2 = () => {
    return (
        <div>
            {10000 + 2000}
            {console.log('hello')}
            {HeadingElement} 
            <HeadingComponent/>
            <h1 className="heading">Hi there, It's a Functional Component</h1>
        </div>
)}
root.render(<HeadingComponent2/>);