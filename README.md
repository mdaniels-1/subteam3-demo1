# Overview
This repository is a collection of the work of a subteam that design some functionality for a party-finding site, Party Safari. This site, as part of a school project, provides users with the ability to host, locate, attend, and review parties in their local area. 

This subteam was responsible for creating host-related functionality for the site, including but not limited to:
* Manage, delete, and edit parties for hosts
* Attendance management, such as scanning tickets and allowing users to RSVP to an event
* Viewing, creating, and managing party reviews

The team was also responsible for the landing page. 

# Demonstration
As of now, the database is not accessible. To view the project, see related video demonstrations: 

[Westra Tech - Party Safari - Demo 1](https://www.youtube.com/watch?v=uSSdl8bke58)

See the following time stamps for demonstrations related to this team:
* 10:00 | Introduction to functionality related to viewing and managing party reviews
* 14:08 | Sharing Party on Social Media

[Westra Tech - Party Safari - Demo 2](https://www.youtube.com/watch?v=rf89g0zgOgE)

See the following time stamps for demonstrations related to this team:
* 4:23 | Writing, Editing, Deleting, and Viewing Party Reviews
* 6:50 | Landing Page
* 7:20 | Party Host Dashboard and Scanning Tickets

Some basic aspects are still viewable, however, the site is very limited. 

# How to Run

- Make sure you have your .env file located in `/src` and configured like so:
    ```
    MONGO_USER="your_first_name"
    MONGO_USER_PASSWORD="your_password_which_chirag_shouldve_DMed_to_you_on_discord"
    ```
- Make sure you have the necessary node dependencies. Rebuild your package with `npm ci` to be safe.

- A temporary login is as follows:
  ```
  MONGO_USER = 'report3'
  MONGO_USER_PASSWORD = '86oISbIIIc1SiiwV'
  ```


To run the project, navigate to the `/src` folder and run the following:
```
npm i
node server.js
```

## Project Structure

This project follows the given directory structure with various components organized into specific folders:
```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── client.js
│   ├── components
│   │   ├── devBox.js
│   │   ├── footer.js
│   │   ├── navigation.js
│   │   ├── reviewComponent.js
│   │   └── reviewMenu.js
│   ├── css
│   │   ├── footer.css
│   │   ├── landingPage.css
│   │   ├── navigation.css
│   │   ├── reviewMenu.css
│   │   └── reviewStyle.css
│   └── html
│       ├── landingPage.html
│       ├── map.html
│       ├── reviewsTemplate.html
│       └── test.html
└── src
    ├── controllers
    │   ├── party.controller.js
    │   ├── review.controller.js
    │   ├── rsvp.controller.js
    │   └── users.controller.js
    ├── model
    │   ├── notes.txt
    │   ├── parties_co.js
    │   ├── parties_dummies.js
    │   ├── reviews_co.js
    │   ├── reviews_dummies.js
    │   ├── rsvps_co.js
    │   ├── rsvps_dummies.js
    │   ├── users_co.js
    │   └── users_dummies.js
    ├── routes
    │   ├── party.routes.js
    │   ├── review.routes.js
    │   ├── rsvp.routes.js
    │   └── users.routes.js
    ├── server.js
    └── views
        ├── landingPage.views.js
        ├── partyMapPage.views.js
        ├── partyReviewsPage.views.js
        └── staticFile.views.js
```

## Directories and Files

- `README.md`: The introductory documentation for the project, including setup instructions and other essential information.
- `package-lock.json`: Automatically generated file for any operations where npm modifies either the node_modules tree or `package.json`.
- `package.json`: Lists the packages your project depends on and provides information about the project (like its version).

### `/public`: Contains the client-facing codebase.

- `client.js`: Handles client-side API calls.
- `/components`: Modular JavaScript files for different components of the application.
- `/css`: Styling files for the client-side application.
- `/html`: HTML templates and pages for the application.

### `/src`: The server-side codebase including the MVC (Model-View-Controller) architecture.

- `/controllers`: Contains controllers that handle direct interactions with the mongodb.
- `/model`: Represents the application's data structures.
  - `xxx_co.js`: mongosh script to create the xxx collection
  - `xxx_dummies.js`: mongosh script to populate the xxx collection with example data entries
- `/routes`: Routes requests to the right controllers.
- `server.js`: The main entry point for the Node.js server.
- `/views`: Server-side templates and views.
  - `landingPage.views.js`: Serves the landing page view.
  - `partyMapPage.views.js`: WIP.
  - `partyReviewsPage.views.js`: Serves the reviews page to the user.
  - `staticFile.views.js`: Helper functions for serving static files.

