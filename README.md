# Directory Structure
8 directories, 23 files
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

/src/views: functions that dynamically generate html files to server to the user
/src/components: helper functions used by the .views files
/src/controllers: api controllers that interact with the monodb
/src/routes: functions that route URLs to views or request handlers
/src/server.js: the entry point of the server
/html and /css: files served to the user

TODO:

1:  Currently, the .views files fetch data from the mongodb to print onto the html files and THEN serves it to the user.
    We might want to instead print the api call into the html, serve it to user, then the client-side code calls the api to fetch from database
2:  I still don't know how to organize the css/html directories. Maybe we should organize files into /src and /public?
