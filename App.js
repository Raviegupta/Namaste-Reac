/* 
<div id="parent">
    <div id="child">
        <h1>Hello, Its a Nested structure</h1>
    </div>
</div> 
*/

const parent = React.createElement(
    'div', 
    {id: 'parent'}, 
    React.createElement(
        'div', 
        {id: 'child'}, 
        React.createElement('h2', {id: ''}, 'Hello, Its a Nested structure'))
    )



const heading = React.createElement("h1", {id: 'heading', xyz:'abc'}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

console.log(heading); // It is an Object. hence, React.createElement returns an Object
