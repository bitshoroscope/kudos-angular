# MyKudosAPP

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.
It uses MaterializeCSS as front-end framework.

## Project structure
`components` -> These are the base components for the UI  
`services` -> Common functionality to interchange data  
`models` -> Interfaces for type definition   
`functions` -> Auxiliar code to prepare mock data for the demo  

## Considerations
These project was built using Firebase as a platform. 
To deploy in a new server you muste create a Firebase project and then create the firebase object in the `environments.ts`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build and deployment

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `npm run deploy:dev` to build and deploy the project to the firebase hosting

## How to use
### Functions
Invoke the url `https://us-central1-my-kudos-app.cloudfunctions.net/scramble` this will create a new document on the `kudos` firebase collection.

### Interface
You can login with one of the following users: 
`andy@simpson.com`, `homer@simpson.com`
pass: 123456

## Known issues
1. You must give two clicks to login to the app

Happy kudoing!! 🤩