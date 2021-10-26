# Capstone Project - CRM Dashboard for a Counselling Service

## Intro

The client requires a single interface app to manage many of the facets of their Counselling service in one place. The app needs to track and display a diary of counselling sessions, store client and contact information, store case notes, and provide a simple way to store and share documents. If possible, they would also like to see on overview of the business accounts.

**Background**

The client suffers from severe dyslexia and as such, finds it difficult to navigate the various apps, programs and services required to run their business. An app would help them by providing a one-stop place to manage their business - session bookings, client and contact records, file management and sharing, and accounts information.
With an app installed on their machine, they would be able to work without the hassle of navigating to various services (Cloud Storage, Calendars, Accounting Software) - they wouldn't need to remember a load of passwords, nor would they have the accessibility issues that come with using several different programs/applications every day.

## MVP

### Primary Requirements

The user needs to:

* View upcoming sessions in a calendar view, book new sessions, and view details of previous sessions.
* View, Create and Edit client records, including adding Case Notes to the client's record
* View, Create and Edit other contact information (eg Venues, Organisations etc)
* See an overview of the business accounts - outstanding invoices, upcoming payments, monthly and yearly running totals.
* Be able to upload files and documents, and share those documents with clients or contacts via email
* As much as possible, the app needs to be accessible for a user with dyslexia - Fonts and colours need to be appropriate, actions should be shortened to the minimum amount of clicks, and there should be little or no requirement for remembering lots of passwords

## Extensions

Further functionality could include:

* Google Calendar integration, for on-the-move access to the schedule
* Simplify Client/Contact record creation with Postcode Lookup
* Integration with the clients FreeAgent accounting package

### Advanced Extensions

* Ability to create and send new invoices, which will sync with Freeagent
* Install and run the app from a cloud service (such as AWS)

## Technologies


1. Front End built with HTML, CSS and Javascript
2. React
3. npm
4. express.js
5. express-fileupload
6. mongodb
7. GridFS - for storing larger documents in the database
8. API integration with JSON





<hr />




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
