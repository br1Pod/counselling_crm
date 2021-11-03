# Capstone Project - CRM Dashboard for a Counselling Service

## Intro

The client requires a single interface app to manage many of the facets of their Counselling service in one place. The app needs to track and display a diary of counselling sessions, store client and contact information, store case notes, and provide a simple way to store and share documents. If possible, they would also like to see on overview of the business accounts.

**Background**

The client suffers from severe dyslexia and as such, finds it difficult to navigate the various apps, programs and services required to run their business. An app would help them by providing a one-stop place to manage their business - session bookings, client and contact records, file management and sharing, and accounts information.
With an app installed on their machine, they would be able to work without the hassle of navigating to various services (Cloud Storage, Calendars, Accounting Software) - they wouldn't need to remember a load of passwords, nor would they have the accessibility issues that come with using several different programs/applications every day.

## MVP

### Primary Requirements

The user needs to:

* View upcoming sessions in a calendar view
* View, Create and Edit client records, including adding Case Notes to the client's record
* View, Create and Edit other contact information (eg Venues, Organisations etc)
* Be able to upload files and documents, then be able to download them to share with clients or contacts via email
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
