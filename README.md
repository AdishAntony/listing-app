# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

----------------------------------------------------------------------------------------------------------

This is a mobile browser version of Content Listing page.

Overview
The mobile browser version of the Content Listing page is designed to provide a responsive and user-friendly experience for mobile users. It allows users to browse and view various content items such as images.

Functionality
The mobile browser version of the Content Listing page includes the following features:

1. Content Listing: Displays a list of content items with relevant details such as title, image etc.
 Implemented lazy loading for loading images. Used reacts inbuilt functionality for that
2. Pagination: Allows users to navigate through multiple pages of content items.
 Infinte scroller is implemented with the help of "react-infinite-scroller" package.
3. Search: Provides a search functionality to filter the content items based on keywords or specific criteria.

----------------------------------------------------------------------------------------------------------

Folder Structure

components - Contains major components of the app
core/redux - Contains redux related files - actions, store and reducers
core/services - Contains all network requests seperated in different files according to specific area
assets - Contains css and images used in the app
