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

Q. What is window ?
- It's a `Global Object`. given by `Browser`. represnts `Browser's window`. gives access to lot of `superpowers`. ex:- 
    - window.localStorage
    - window.location
- All global JavaScript `objects`, `functions`, and `variables` automatically become members of the window object.

Note:- <br>
    * `Global variables` are _`properties` of the window object_.
    * `Global functions` are `_methods` of the window object_.
    * Even the `document object (of the HTML DOM)` is a _property of the window object_.

 `window.document.getElementById("header");`
  is the same as
  `document.getElementById("header");`

<img src="https://learn.javascript.ru/article/browser-environment/windowObjects.png" alt="windows-object" width="400px"> <br>

Q. What is BOM ?
- JavaScript Window - The Browser Object Model
- here, we have all the details related to the browser.
    * location
    * navigator
    * history
    * screen
    * frames
    * XML http request

---

#### Q. What is Bundler ?
- `development tool` that **combines many JavaScript code files into a single one** and that is ready for `production-ready loadable in the browser`.
- `puts together` all our `JavaScript code and its dependencies` and throws a new JavaScript output file with everything merged, ready for the web, commonly known as the bundle file.
- some bundlers are :-
    - Web-Pack (npx create-react-app by default uses Web-Pack bundler)
    - parcel
    - vite
    - browserify
    - ES build
    - Roll up
- <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Des71L_W--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/naipfc68z6u3looyvidm.png" alt="bundlers" width=""> <br>

---

### Process of Installing Any Package Manager say npm in our app.
`npm init -y ` :- will skip up lot of option.
`npm init` :- this will ask us a lot of question & will give us a **package.json** file.

### How to install any package in our app ?
- Before installing any package, it is necessary to have a package manager.
- `npm install` [package name] 
- `npm i` [package name]

- `npm install` `-D` [package name] 
    - `-D` flag :- Dev dependency [-D means we are `installing parcel with Dev dependency`]

- `npm install` `--save-dev` [package name] :- (it does same thing as npm install -D )

### How to install React & ReactDOM in our app ?
- since, using `cdn & React.createElememt is not the efficient way to use react`. This is bcoz when react version is updated then we have to change the cdn manually.
- So, we will install the react by :- 
```
npm install react
```

```
npm install react-dom
```
here -D flag are not required bcoz i want react & reactDOM in Global not in just development environment.

### How we will ignite(run) our App ?
run command 
```
npx parcel [entry point]
```
ex:- `npx parcel index.html`