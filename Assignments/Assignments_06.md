## 🌺🌺 Date:- 24/Jan/24 (Monday)   Episode #06

## Topics
- What is the Microservice ?                                                            ✅ (assignment)
- What is Monolith architecture ?                                                       ✅ (assignment)
- What is the difference b/w Monolith and Microservice ?                                ✅ (assignment)
- Why do we need a useEffect Hook ?                                                     💗💥 (react-practice)
- What is Optional Chaining ?                                                           ✅ (assignment)
- What is Shimmer UI ?                                                                  ✅ (assignment)
- What is the difference between JS expression and JS statement.                        ✅ (assignment)
- What is Conditional Rendering ? explain with a code example.                          ✅ (assignment)
- What is CORS ?                                                                        ✅ (assignment)
- What is async and await ?                                                             ✅ (assignment)
- What is the use of `const json = await data.json()` in getRestaurants()               ✅ (assignment)



### Q1. What is Monolith architecture ?
Earlier all the projects were developed in monolith architecture. In the whole app/project, we have Frontend written, Backend written, API, DB, Notification written.   <br>
If we had to change the color of even one button, then we had to redeploy the entire project.

- Monolithic architecture is a software design approach where all components of the application are tightly integrated and deployed as a single unit. <br>
- monolithic architectures have their drawbacks, especially for large, complex applications, they can still be an appropriate choice for small, simple applications.



### Q2. What is the Microservice ?
Microservices is an architectural style that structures an application as a collection of loosely coupled services, which implement business capabilities. Each service is designed to perform a specific business function and can be developed, deployed, and scaled independently.      <br>
Here, different services for different work (seperate project for all services like Backend, UI, Authentication, DB, SMS, Email Notificatiion). All thesse services combined together to form a big App.    <br>
Microservices architecture is particularly beneficial for large, complex applications that require high scalability and flexibility.



### Q3. What is the difference b/w Monolith and Microservice ?
1. Architecture:
    - Monolithic - entire application is developed and deployed as a single unit.
    - Microservices - composed of multiple independent services, each responsible for a specific business function.

1. Development and Deployment:
    - Monolithic - changes to any part require the entire application to be rebuilt and redeployed.
    - Microservices - Each service can be deployed and scaled independently.

1. Technology Stack:
    - Monolithic - Monolithic applications often use a single technology stack for the entire application.
    - Microservices - different services can use different technologies based on their specific requirements.



### Q4. What is Optional Chaining ?
Optional chaining is a feature in JavaScript that allows us to safely access nested properties of an object without having to explicitly check for the existence of each property in the chain.



### Q5. What is Shimmer UI ?
Shimmer UI, also known as skeleton loading  is a design pattern used in user interfaces to indicate that content is loading. The purpose of a shimmer UI is to provide users with visual feedback that something is happening in the background, preventing them from perceiving the application as unresponsive or slow.
- Load the Page untill we get actual data from the API.
- more responsive, engaging and better UX (user experience)



### Q6. What is the difference between JS expression and JS statement.
An JS expression is a piece of code that produces a value. It can be a single value, a function call that returns a value, or a combination of values and operators that ultimately evaluates to a value. 
for ex:-  <br>
`3 + 4` is an expression, `1991` is an expression, `true && false && !false` is an expression. <br>

Js Statement is a bigger piece of code that is executed and which does not produce a value on itself. It perform actions or control the flow of a program. 
```
if(23 > 10) {
    const str = '23 is bigger';   // this whole line is a statement
}
```
ex: - In a template literal, we can only insert expression, but not statements
```
console.log(`John is ${2037 - 1991} years old`)
```



### Q7. What is Conditional Rendering ? explain with a code example.
render different components or UI elements based on certain conditions. This allows us to dynamically control what is displayed to the user based on the application state or other factors.

```
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterdRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // optional chaining
    liveResList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurant(liveResList);
    setFilteredRestaurant(liveResList);
  };

  // if(listOfRestaurant.length == 0) {
  //   return <Shimmer />
  // }

  return listOfRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button className="top-rated-res-filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilteredRestaurant(filteredList)
          }}
        >Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {filterdRestaurant.map((restau, index) => (
          <Link key={restau.info.id} to={"/restaurants/" + restau.info.id}><RestaurantCard resData={restau} /></Link>
        ))}
      </div>
    </div>
  );
};
```



### Q8. What is CORS ?
CORS stands for Cross-Origin Resource Sharing. It is a `security feature` implemented by web browsers to restrict web pages from making requests to a different origin (domain, protocol, or port) than the one that served the web page. <br>
- It is a critical security mechanism to prevent various types of attacks, such as cross-site scripting (XSS) and cross-site request forgery (CSRF).
- It is widely used in modern web development, especially in the context of single-page applications (SPAs) and API integrations.



### Q9. What is the use of `const json = await data.json()` in fetchData() ?
The line const `json = await data.json()`; is used to asynchronously parse the JSON body of the HTTP response obtained from the fetch call. 
1. `data.json()`: It returns a promise that resolves to the JSON representation of the response body. This method reads the body of the response stream and parses it as JSON.
1. `await data.json()`: By using the await keyword, we are pausing the execution of the fetchData function until the promise returned by data.json() is resolved.
1. `const json = ...` : Once the promise returned by data.json() is resolved, the parsed JSON data is assigned to the data variable. This json variable now contains the JavaScript object.




### Q10. What is the use of try & catch here ?
```
    async function fetchData() {
        try {
            const data = await fetch('https://api.example.com/data');
            const json = await data.json();
            return json;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
```

The try and catch blocks are used to **handle errors that may occur during the asynchronous operations** inside the async function. 
- `try` BLock :- it includes the asynchronous operations that fetch data from an API using the fetch function and parse the JSON response using response.json().  If any errors occur within the try block (e.g., network issues, invalid JSON response), they will be caught by the catch block.
- `catch` block :- The catch block is used to handle any errors that are thrown within the try block.  When an error occurs, the execution jumps from the try block to the catch block.



### Q11. What is async and await ?
async and await are features introduced in ES8 that provide a more concise and readable way to work with asynchronous code in JavaScript, particularly when dealing with promises.

- The `async` keyword is used to define an asynchronous function. When a function is declared with async, it automatically returns a promise.
- Inside an async function, we can use the `await` keyword to pause the execution of the function until a promise is settled (resolved or rejected). This allows us to write asynchronous code that looks and behaves more like synchronous code.
- An async function can contain one or more await expressions, which are used to wait for the resolution of a promise.
- If the promise is rejected, await throws an error that can be caught using a try...catch block.