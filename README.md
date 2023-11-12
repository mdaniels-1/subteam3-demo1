# Project Structure

This project follows the given directory structure with various components organized into specific folders:
8 directories, 23 file
```
.
├── README.md
├── components
├── css
│   ├── footer.css
│   ├── landingPage.css
│   ├── navigation.css
│   ├── reviewMenu.css
│   └── reviewStyle.css
├── html
│   ├── landingPage.html
│   ├── map.html
│   ├── reviewsTemplate.html
│   └── test.html
├── package-lock.json
├── package.json
└── src
    ├── components
    │   ├── footer.js
    │   ├── navigation.js
    │   ├── reviewComponent.js
    │   └── reviewMenu.js
    ├── controllers
    │   └── review.controller.js
    ├── routes
    │   └── review.routes.js
    ├── server.js
    └── views
        ├── landingPage.views.js
        ├── partyMapPage.views.js
        ├── partyReviewsPage.views.js
        └── staticFile.views.js
```

## src Directory Details

- `/src/views`: Functions that dynamically generate HTML files to serve to the user.
- `/src/components`: Helper functions used by the `.views` files.
- `/src/controllers`: API controllers that interact with the MongoDB.
- `/src/routes`: Functions that route URLs to views or request handlers.
- `/src/server.js`: The entry point of the server.

## Static Files

- `/html` and `/css`: Files served to the user.

## TODO

1. Currently, the `.views` files fetch data from the MongoDB to print onto the HTML files and THEN serve it to the user. We might want to instead print the API call into the HTML, serve it to the user, then the client-side code calls the API to fetch from the database.
2. I still don't know how to organize the CSS/HTML directories. Maybe we should organize files into `/src` and `/public`?
