# Welcome to ParPo 🏢⚡

ParPo stands for Partner Portfolio. It is an edible portfolio presenter, manager and analyzer for the commercial real estate industry.

This is the publically available prototype of the app with planned updates considered among internal factors.

## Technologies Used

Application is built on the following:

### Front End

Language: TypeScript
Framework: Functional React/Redux

Also includes Material UI for styling, Google Maps APIs, and React Router DOM.

### Back End

Language: JavaScript
Framework: Node.JS/Express
Testing: Jest
DB: MongoDB

## Installation

This is the front-end portion of ParPo. You can clone this repo to your desktop and run it with:

```
npm install
npm start
```

There may be additional authentication required by Firebase. Please reach out to zach@propterra.io if you have issues.

##  Current Works-in-Progress

The current version of this project is the publicly visible demo for ParPo. In future iterations, we are planning to:

    -   Fully containerize app to deploy on K8s
    -   Improved error handling for edge cases to allow easier scaling of functionality later
    -   Finish updating profile section to separate user lists by company
    -   Add company specific log in to have defined different views by logged in organizations.

##  How to Use This Project

To have partial admin access, login with "admin@gmail.com", "password" to have the full view. In this repo, some functionality has been stripped away for data integrity purposes. Otherwise, log in with your Google account to access the project as a normal viewer. Peruse through the various properties to help you decide whether to invest with this hypothetical firm!

##  External Integrations

ParPo leverages Firebase, Firestore, MongoDB and GCP Cloud Functions to handle most of the backend and data storage. As such, some access may be limited if running from a local machine without authentication. If this is the case, please reach out to zach@propterra.io to discuss project access.

## Contributions

Thank you to the E-StateMate Services Team for putting this project together.
- Eddie Wideman
- Zach Tippit
- Sylvia Jung
- Kalju Nekvasil
- Alejandro Terra
- Larry Howell
- Paola Garcia

## License

This app is not intended for commercial use for anyone outside of PropTerra LLC or E-StateMate Services.
