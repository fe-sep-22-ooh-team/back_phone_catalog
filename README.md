**This is a simple API for the [Phone Catalog](https://fe-sep-22-ooh-team.github.io/phone-catalog/) 'Ooh-team'**

[Server DEMO](https://ooh-team.netlify.app/.netlify/functions/server)

## API Documentation
\
GET to /products\
*Response: {*\
  *next: Next;*\
  *results: Phone[];*\
  *totalPages: number;*\
  *currentPage: number;*\
*}*\
\
Query Parameters (page, perPage, sortBy)\
*Response: sorted phones[] by sortBy from page.*\
\
GET to /products/getNew\
*Response: sorted phones[] by year .*\
\
GET to /products/getDiscounted\
*Response: phones[] sorted by the difference between the price and the discounted price.*

GET to /products/:goodId\
 *ResponseFromAPIOne {*\
  *phoneInfo: allInfoAboutPhone;*\
  *phones: Phone[];*\
*}*

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run format`

format by prettier

### `npm run lint`

format by lint

### `npm run fix-style`

format by prettier & lint.
