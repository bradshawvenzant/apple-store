# AppleStore by Maikel Bradshaw

Thanks to the Boalt Team for the opportunity !!!


## Overview

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

AppleStore is a project about an online store where the user can see the latest apple products (iphone, macbook and watch) as well as the shipping dates and price. The user needs to register and authenticate using email and password in order to access to the store.

After the user is authenticated the application will redirect to the welcome page and from this point the user can navigate to the home page. Once in the home page the user will be able to access the different products available in the store.

## Login/Autentication

When the sign up form is submitted, the user's information is persisted in a Map<email, User> that is defined in a service and available for the application.

The password is encoded using CryptoJS simulating a real process and to avoid the password to be saved in plane text (even in the browser).

When the user tries to log in, the credentials are validated against the already register users (decrypting the password), generating a token using btoa() of window object (encodes a string in base-64) and saving it in the session storage.

Default User: 
email: admin@apple.com
password: admin

## Navigation

Following the design, the user can navigate between different products using the top navigation menu or product icon bar (common component) displayed either in the right or bottom of the page.

Non authenticated routes are protected with a guard, activating the route only if the user is authenticated, verifiying is there is a valid authentication token in the Session Storage. 

Non authenticated routes: Redirect to login page.

Invalid route: Redirect to not found page.

Routing to /products route will trigger a resolver to get the shipping dates for the products, avoiding the product pages display before the dates are resolved.

## Validations

The signIn and signUp forms both are created using reactive form and both have validations for each field.

Regular Expressions were used to validate the full name as well as the email entered by the user during the sign up process:

Full name - No special characters or numbers are allowed.
Email - Regular Expression validated by W3C for valid emails.

All fields are required.

## Animations

Angular Animations Module was used for the transitions and animations accross the application for route and components animations.

## Images

Some of the images were resized in order to improve the performance of the application and user experience.
The icons for the product icon bar were designed using Adobe Photoshop.

## Dependencies

In order to match the provided design and extend the angular capabilities the application uses the following third party libraries:

ng-bootstrap
Ng-Bootstrap contains a set of native Angular directives based on Bootstrap’s markup and CSS.
https://ng-bootstrap.github.io/

crypto-js
JavaScript library of crypto standards.
https://www.npmjs.com/package/crypto-js

ng2-odometer
Odometer for Angular that wraps HubSpot's Odometer.
https://www.npmjs.com/package/ng2-odometer

## Notes

The responsive is not fully completed as well as the animations for the entire application, impacting the final user experience.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
