ABOUT MIGRATION DASHBOARD
-------------------------

The Migration Dashboard Drupal module is a proof-of-concept tool to help authors track content status amidst a large editorial migration project. This isn't intended to be a permanent addition to a site, but rather an assistant for the duration of the internal project.

The module currently only works for Bio content types with specific fields. If that content exists, simply navigate to `admin/content/migration-dashboard` in your browser to interact with the data.


Features:
---------
- Initial browser state populated by a JSON fetch
- Moving an item both updates browser state and patches the Drupal bio entity 
- Patches are somewhat secure through session token
- An alert displays for 5 seconds if patch fails
- Items visually fade in and out when moved
- Minimal styling to take advantage of Drupal administrative theme
- All CSS bundled in React components for portability
- React code linted with AirBnB's configuration: https://github.com/airbnb/javascript/tree/master/react


Module Security Features:
-------------------------
- Dashboard route is restricted to anyone who can edit Bio content in .routing.yml.
- GET and PATCH are the only available routes. DELETE and POST routes have been disabled in a routing subscription service.
- Bios and File are the only mutable resource types, also through the routing subscription service


Dependencies:
-------------
- Node, because the dashboard exists to update nodes
- JSON:API because React consumes JSON from GET and PATCH requests
- JASON:API Extras because it's handy to obscure the jasonapi path and to disable all resources except node--bio and file--file. Read more at https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/security-considerations.


JavaScript:
-----------
The executable JavaScript files are in the custom module's `js` folder. The development React files (which require Node to run) are in `js/dev`.


More Development Highlights:
----------------------------
- DashboardController adds react-app div to twig template
- JS files are loaded as library attachments in the module hook_page_attachments() override


Features To Add:
----------------
- Tests
- Module administrator-based configuration option to display custom introduction
- Test Drupal 9 compatibility
- Dashboard link on Admin Manage menu