# Currency Catalog Kata

This application displays an interactive currency catalog. The main page displays all currencies (obtained via [OpenFinTech.io API](https://api.openfintech.io)) as a list (200 first currencies). When selecting a currency from the main page, additional information (all currency attributes) are displayed in a detail page.

+ An pagination is added at the end of the main page. By default, 10 currencies are displayed per page but this number could be changed (10, 50 or 100). 

+ Currencies could be filtered by field (id, code, name, type). Search by `id` is enabled by default.

+ The application is also compatible with mobile and tablet. 2, 4 and 6 currencies per row are set for mobile, tablet and desktop respectively.

### Run
To launch project, you can clone or download the project then execute the following command:
```
cd currency-catalog
npm install
npm run build
npm run start -- --port=8000 # run application on port 8000
```