# Notes - Notes for the things which i should know, but it is lesser important for me with regard to IQ (Date:- 02/Jan/24)

#### Q. is React a Global Object ?
Yes, React is a global object

---

#### Q. What is React.createElement ?
- Plane JavaScript Object.
- createElement let us create a React Element. It serves `as an alternative to writing JSX`.
```
React.createElement(
  type,
  [props],
  [...children]
)
```
1st Parameter :- tag name string (such as 'div' or 'span')
2nd Parameter :- `props` :- either `null` or an `object`. If we pass `null`, it will be treated the same as an empty object.
3rd Parameter :- its an optional, zero or more child nodes. They can be any react nodes, including React elements, strings, numbers, emptynodes (null, undefined, true, false) and arrays of React nodes.

---

#### Q. What is createRoot ? Why do we need to createRoot ? can we have more than 1 root ?
- `createRoot` lets us create a root to display React components inside a browser DOM node.
- `createRoot` tells whatever we passes inside this becomes the root of the app. **Any existing DOM elements inside are replaced when render is called.**
```
const root = ReactDOM.createRoot(document.getElementById('root'));
```
`root` :- It is the place where React runs.
we need createRoot bcoz **React wants to know where we want to push our stuff**.
generally in our app we see just 1 root, that is the single place where we are injecting our react tool (most of the app have 1 root & 1 render method) and everything we will build, we will build inside it.

---

#### Q. What is root.render()?
- `render()` :- it is a function, it modifies our DOM.
- React will override whatever is in my existing root & react will replace it with whatever we give inside render.

---

#### Q. What will happen if we keep script above react cdn links ? will it be rendered ?
No, it wil not be rendered. that's why we keep script tag below the cdn of react.

---

#### Q. What is JSX ? How JSX came ?
- Initially, the react was built on `React.createElement` & t**his was core of react**.
- Initially the whole idea of creating a React is to write whole HTML inside JavaScript & that's not user friendly. that's why JSX came. So, JSX is not the only way of creating element.
- JSX stands for JavaScript XML.
-JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

---

#### Q. What is stylesheet ?
```
<link rel="stylesheet" href="">
```
- `rel` attribute :- define the **relationship** betweeen **linked file and the html document**.
- `rel="stylesheet"` :- specifies a preferred style. (always applied when stylesheets are enabled)
- `rel="alternate stylesheet"` :- Specifying alternative style sheets in a web page provides a way for users to see multiple versions of a page, based on their needs or preferences.

---

#### Q. Why we import CSS file in head ?
- The loading of the page is asynchronous, so if you have external stylesheet `it will load the css file immediately` when it reach the link tag, that is why it is good to have at the top in head.
- CSS in the head is to `eliminate the latency` in the network request, ie there is no network request for the CSS.

---