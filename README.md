# MyKudosAPP

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.
It uses MaterializeCSS as front-end framework.

## Project structure
`components` -> These are the base components for the UI  
`services` -> Common functionality to interchange data  
`models` -> Interfaces for type definition   
`functions` -> Auxiliar code to prepare mock data for the demo  

## Considerations
This project was built using Firebase as a platform. 
To deploy in a new server, you must create a Firebase project and then make the firebase object in the `environments.ts`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Test your functions in a sandbox environment `firebase emulators:start`

## Build and deployment

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `npm run deploy:dev` to build and deploy the project to the firebase hosting

Deploy only the functions: `firebase deploy --only functions`

To change the domain, modify the file firebase.json and change the line
```
dist/kudos-angular"
```
Don't forget to clean the cache if you don't see changes in the hosting.

## How to use
### Functions
Invoke the URL `https://us-central1-my-kudos-app.cloudfunctions.net/scramble` this will create a new document on the `kudos` firebase collection.

### Interface
You can log in with one of the following users: 
`andy@simpson.com`, `homer@simpson.com`
`pass: 123456`

## Known issues
1. MAJOR. Correct the session management, currently the app is mixing data between users. If you notice this just refesh the page.
2. The app is not refreshing the kudos counter after sending them. 

Happy kudoing!! 🤩