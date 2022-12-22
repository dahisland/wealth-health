[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](./readme-assets/made-with-react.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](./readme-assets/uses-redux.svg)](https://forthebadge.com)

<br/>

<div id="header" align="left">
  <img src="./src/assets/logo-wealth-health.png" width="200"/>
</div>

# WEALTH HEALTH HRNET :

This project is the converted version in React of an outdated application used to HR management in
the Wealth Health company.
The old version was using Jquery plugins that affected performances.
This new version has been fully implemented with React.
Library components have been used to replace old plugins.
I developped my own library for one of them, published on official website [NPM](https://www.npmjs.com/).

## TECHNOLOGIES

- JS
- CSS with Sass
- React
- Redux toolkit
- Babel

## REACT LIBRARY COMPONENT IMPORTED

- [react date-picker](https://www.npmjs.com/package/react-datepicker) by HackerOne.

## REACT LIBRARY COMPONENT DEVELOPPED AND PUBLISHED BY ME

- [modale-fullscreen-customizable](https://www.npmjs.com/package/modale-fullscreen-customizable?activeTab=readme)
- [Repository for this lib](https://github.com/dahisland/fullscreen-modale-customizable-lib)

## INSTALLATION :

### \* Prerequites

- Github account
- [Node.js v16](https://nodejs.org/en/)
- npm version : 8.15.0
- Initial project before conversion is available on this [link](https://github.com/OpenClassrooms-Student-Center/P12_Front-end).

### \* Run the project

- Fork this repository : https://github.com/dahisland/MyriamMornet_14_122022 to your Github account.
- Clone it to the local folder's project of your choice in your computer.
- Open the folder in your favorite framework editor.
- Use the `npm install` command to install dependencies.
- Use the `npm start` command to run the project localy on your browser.

Local url by default is : http://localhost:3000/ .

No API backend is available yet.
To store data in the Redux store, you can manually complete the "Create employee" form or you can charge mock data by decomment the useEffect from the page component "Employee list". It will store mock data in the Redux store.
