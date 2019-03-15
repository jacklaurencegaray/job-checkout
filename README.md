# Job Checkout

This project is built primarily to comply for a technical assessment for a company I'm seeking to join. This is a React application. Please read the "Before Using" section of this readme before running the application.

## Getting Started

In order to get started, with in the directory, type `yarn start` or `npm start` in your command line and a React application will run automatically on your localhost.

### Prerequisites

In the directory with a terminal, type:
```yarn install``` or
```npm install``` to install dependencies of the application.


## Running the tests

Because of initial lack of testing experiences, I havenot included any scripts that automatically test each existing components and functions. However, the app is small enough to be tested page-by-page, and with the limited use cases of it. Maybe I'll be adding in the near future some Jest testing for components. Could've done better hadn't it been for the time constraints and pending university demands.

## Technologies used

React, MobX, propTypes, Webpack, SASS, Babel (ES6)

## Architecture

In terms of file structure, the following are directories under `/src`, the directory containing all source files:

/assets - contains all scss and svg's used in the app.
/components - intended for re-usable components.
/data - contains all prepopulated data.
/helpers - contains all CRUD helpers for the populated data (equivalent to a database backend except non-persistent); it also contains other helper functions.
/layout - contains all layout within the app that is used to wrap Pages
/pages - contains all pages the router refers to whenever a specific URL is visited
/stores - contains all mobX stores: primarily AccountStore, AdStore, CartStore, and most importantly - the RootStore, the global store containing all other subscribable stores with in the application.

For the preferred /asset file structure architecture I've used in this application: https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization

## Assets

Choice of logo is a random SVG I've found over the internet. The design, all the way from UI to UX is written from scratch by me.

## Before Using

The application tries to emulate a synthetic authentication system by asking one information alone that is: Username. This would've been otherwise more complicated in a real system but for the intent of simplifying it in this technical assessment, I've resorted to not implementing a registration system, or even a password system in the authentication.

Username is an identification for each company. Within the /data directory, promos.js identifies wether a company is being offered a promo primarily by their username. This is not case sensitive. Ford and ford means the same in this application and both will still be eligible for the same promotion.

To login as an administrator, use the same login system AND use 'admin' as the username. The app will redirect you to the admin dashboard.
