## 🌺🌺 Date:- 23/Jan/24 (Monday)   Episode #05

## Topics
- What is the difference b/w `Named` export, `default` export, and `as` export ?        ✅ (assignment)
- What is the importance of config.js file ?                                            ✅ (assignment)
- What are React Hooks ?                                                                💗💥 (react-practice)
- Why do we need a useState Hook ?                                                      💗💥 (react-practice)

### Q1. What is the difference b/w `Named` export, `default` export, and `as` export ?
`default` export : when have to export only 1 thing as default.
- export default  ___________
- import ___________ from 'path'

`Named` export : when we have to export multiple things from a single file / module
- export const __________
- import { _________ , _________ } from 'path


`as` export (Renaming Exports): "as" keyword is used in import statements to rename named exports or default exports to a different name locally.
- export const name = 'ravie';
- import { name as myName } from './module';        <br>
console.log(myFoo); // Output: ravie


### Q2. What is the importance of config.js file ?
config.js file can be used to store configuration settings, environment variables, or other constants that are used across different parts of the application. <br>
some reasons why a config.js file can be important:
- Security and Privacy : API keys or authentication tokens, Placing these settings in a config.js file allows us to manage their access and visibility more effectively.