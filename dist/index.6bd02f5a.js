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
*/ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {
            id: ""
        }, "Hello, Its a Nested structure"),
        React.createElement("h2", {
            id: ""
        }, "sibbling")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {
            id: ""
        }, "Hello, Its a Nested structure"),
        React.createElement("h2", {
            id: ""
        }, "sibbling")
    ])
]);
const heading = React.createElement("h1", {
    id: "heading",
    xyz: "abc"
}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(heading); // It is an Object. hence, React.createElement returns an Object
 // Note:- React.createElement returns an object  => html (Browser understands)

//# sourceMappingURL=index.6bd02f5a.js.map
