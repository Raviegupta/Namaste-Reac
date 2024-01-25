## 🌺🌺 Date:- 25/Jan/24 (Thursday)   Episode #07

## Topics
- What are the various ways to add images into our App? Explain with code examples.     ✅ (assignment)
- What would happen if we do console.log(useState()) ?                                  ✅ (assignment)
- How will useEffect behave if we don't add a dependency array ?                        ✅ (assignment)
- What is SPA ?                                                                         ✅ (assignment)
- What is difference between Client Side Routing and Server Side Routing ?              ✅ (assignment)



### Q1. What are the various ways to add images into our App? Explain with code examples.
1. Importing Images using `import`:
    ```
    import React from 'react';
    import logo from './logo.png'; // Import the image file

    function App() {
    return (
        <div>
        <img src={logo} alt="Logo" /> {/* Use the imported image */}
        </div>
    );
    }

    export default App;
    ```

2. Using the `require` function: common in older JavaScript environments or when using CommonJS modules.
    ```
    import React from 'react';
    const logo = require('./logo.png'); // Use require to load the image

    function App() {
    return (
        <div>
        <img src={logo} alt="Logo" /> {/* Use the loaded image */}
        </div>
    );
    }

    export default App;
    ```

3. Using CSS: suitable for background images or when we need more control over the image presentation.
```
import React from 'react';
import './App.css'; // Import the CSS file

function App() {
  return (
    <div className="app">
      {/* Use CSS for background image */}
    </div>
  );
}

export default App;
```

4. directly using dynamic cdn url or image address in image src

5. import constants part of cdn url kept in constants.js inside utils folder & then adding cloudnary image id in src to make it dynamic.
```
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId, name, avgRating, costForTwo, areaName, cuisines, sla } = resData.info;

    return (
        <div className='res-card' style={{backgroundColor: '#f0f0f0'}}>
            <div className='res-logo-container'>
                <img className='res-logo' src={ CDN_URL + cloudinaryImageId } alt="res image" />
            </div>
            <h3>{name}</h3>
        </div>
    )
}

export default RestaurantCard;
```

6. Using Public Folder: In a Create React App (CRA) project, we can place images in the `public` folder. These images are automatically accessible in our app using the public URL.
```
import React from 'react';

function App() {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" /> {/* Use the public URL */}
    </div>
  );
}

export default App;
```



### Q2. What would happen if we do console.log(useState()) ?
we will get an array of length two `[undefined, f]`
- the first value shows that it is a variable (state variable) currently showing value undefined bcoz we have not initialized it.
- the second value of this array is a function which is used to set the value of the state variable.



### Q3. How will useEffect behave if we don't add a dependency array ?
fisrt of all when useEffect is called: after every render of that component. (jiske ander useEffect h) <br>
`dependency array` :- it changes the behaviour of useEffect.

1. if No dependency array: useEffect is called on every render of that component.
2. if dependency array is empty []: useEffect is called on only initial render & just once(jab component first time render hoga)
3. if we put something inside dependency ex: [btnName]: useEffect is called every time btnName is updated.



### Q4. What is SPA ?
SPA stands for Single Page Application (it has only 1 html file). A single page application is a web platform that `dynamically updates content on a web page without reloading the whole website`. When we interact with a SPA, by scrolling or clicking on an image, only a few elements are updated.
- popular web frameworks used for the web application development of single page applications are
    - React.JS, Angular.JS, Vue.JS, BackBone.JS
- Examples of Single Page Web Apps: facebook, gmail, twitter, trello


Q. Can we make a SPA using Vanilla JS ?
* yes, we can but it will become very complex.
* Ref :- https://vinaypatel1437.github.io/movieAPp/
* https://github.com/vinaypatel1437/movieAPp



### Q5. What is difference between Client Side Routing and Server Side Routing ?
`Client Side Routing`: here we don't make any network call or fetch any page, we already have all the route pages. <br>
- the routing logic and navigation are handled by the client (usually a web browser) rather than being managed by the server
- Fast UI
- SPA: Client-side routing is commonly used in SPAs 

`Server Side Routing`: It sends the route query to server & fetches the information as response & renders it on page. 
- the routing logic is handled by the server. When a user navigates to a different URL or requests a new page, the browser sends a request to the server, which then responds with the appropriate HTML page for the requested route. Each navigation action typically results in a full page reload.
- Full Page Reloads
- Traditional Web Applications:
- SEO-Friendly: generally more SEO-friendly because each page is a separate HTML document that can be indexed by search engines.