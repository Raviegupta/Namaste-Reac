const heading = React.createElement("h1", {id: 'heading', xyz:'abc'}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log(heading); // It is an Object. hence, React.createElement returns an Object
