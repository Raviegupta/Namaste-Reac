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
- it refers to a **geograpically distributed group of services** which work together **to provide fast delivery of internet content.**
- CDN allows us for **Quick transger af assets** needed for loading Internet content including _HTML design Pages, JS files, Stylesheets, images & videos._
- Both **React & React-DOM** are available for CDN. <br>
React - CDN
`<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>` <br>
ReactDOM - CDN
`<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>` <br>