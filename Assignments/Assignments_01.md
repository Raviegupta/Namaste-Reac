# Episode 01 - Inception (Date:- 28/Dec/23 - 29/Dec/23)

### Q1. What is Emmet. what does it do ? (2008)
- This is **pluggin** for many popular text editors which greatly improves **HTML & CSS WorkFlow**.
- Emmet allows us to write **shortcuts**, **abbreviations** that are then expanded into full pieces of code.
---

### Q2. Difference between Libray and Framework ?
1. A `library` `implements a particular function`. ex:- React, JQuery, image carousel (It's Js library) whereas a `Framework` is a `collection of libraries` which implement a particular methodology ex:- Angular, Vue

2. Inversion of control
    - <img src="https://www.baeldung.com/wp-content/uploads/sites/4/2021/11/Framework-and-Library.png" alt="Inversion Of Control" width="400"/>
    - When an application code uses a library, we developer writing the code is in the charge of application flow. **This means we developer decides when to call the library.**
    Whereas when we uses a framework, **the framework decides when to call the library.**

3. Library:- facilates Program Binding. It Provide `reusable function` to our code. <br>
    Framework:- easy to create & deploy application. It provides ready to use **tools, standard templates & policies for fast application process.**
    
---

### Q3. What is CDN ? Why do we use it ?
- Content Delivery Network.
- It refers to a **geograpically distributed group of services** which work together **to provide fast delivery of internet content.**
- CDN allows us for **Quick transger af assets** needed for loading Internet content including _HTML design Pages, JS files, Stylesheets, images & videos._
- Both **React & React-DOM** are available for CDN. <br>
React - CDN
`<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>` <br>
ReactDOM - CDN
`<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>` <br>

---

### Q4. Why is react known as react ?
- React, the JavaScript library for building user interfaces, is known as 'React' beacause it focuses on a `reactive programming paradigm`.
-  In reactive programming, the application reacts to changes in its state by automatically updating the user interface. 
- React accomplishes this through its use of a virtual DOM and a component-based architecture.
- The name "React" reflects this `reactive nature` of the library. 
- When the state of a React component changes, React efficiently updates the virtual DOM, compares it with the actual DOM, and applies the necessary changes to the user interface.

---

### Q5. What is crossorigin in script tag ?
- cross origin is an `attribute`.
- crossorigin sets the mode the requests as an **HTTP CORS 
request**
- CORS :- Cross Origin Resourse Sharing.
_**Note:- If we serve React from a CDN, we recommend to keep crossorigin attribute set.**_

### Q6. What is Difference between React & ReactDOM ?
- **React**:- `Core Library` of React
- **ReactDOM**:- `Web Version` of React, it gives us access to Document Object Model(DOM). `responsible for all DOM operations`.

---

### Q7. What is difference between react.development.js and react.production.js files via CDN?
1. The development build is used - as the name suggests - for development reasons. We have Source Maps, debugging and often times hot reloading ability in these builds. while The production build runs in production mode which means this is the code running on your client's machine.
2. react.production.js :- It takes `minimum size`, Production mode `minifies our code` and better represents our app's performance on end users' devices. <br>
* Note:- for production ready we need
  * ` minify` our files
  * ` bundle ready`
  * we need `server` to run the things up
  * lot of `optimisation`.
  * ` clean console`.
  * we need caching
  * **So, to get all these functioalities**  we need `BUNDLERS`

---

## Q8. What are async and defer ?
- async and defer both are `boolean attributes` which are used along with script tags to load the external scripts efficiently in our webpage.
- When we load a webpage 2 things happen in our browser
1. HTML parsing
2. loading the script. --- 2 things
    - a. `fetching the script` from the N/w.
    - b. `executing the scripts` line by line. <br>
<img src="https://media.licdn.com/dms/image/C5112AQFW3cKEhP9AkQ/article-cover_image-shrink_600_2000/0/1520214760879?e=2147483647&v=beta&t=hlxDsKDgQ3eE7lliu-_zEHjalqcl-jn2l54t5WEn5ys" alt="async vs defer" width=500px>  <br>

```
<script src=""></script>
```
- here, HTML parser is paused . So, this is the blocking of rendering process of html. Hence, it's not a good choice.

```
<script src="" async></script>
```
- while `HTML parsing is going on`, `scripts are fetched` from the network `asynchronously`. as soon as `scripts` are `fetched` and `available` in the `browser`. `html parsing` is `stopped` & `scripts are executed` there & there.
- and once `scripts are executed`, `then html parsing goes` continously.

```
<script src="" defer></script>
```
- here, HTML parsing goes on continously and along with that scripts are fetched from N/w & data are being available in the browser. (yaha per kisi bi kimat me html parsing ni rukta)
- and one the HTML parsing is done completly, then scripts are executed.
- So, here there is no blocking of html parsing.