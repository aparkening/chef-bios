This Drupal installation includes biographies of well-known chefs in the Portland, Maine restaurant scene. 

The included Migration Dashboard custom module centers around a React-based proof-of-concept that helps authors track content status amidst a large editorial migration project. This isn't intended to be a permanent addition to a site, but rather an assistant for the duration of the internal project.

To interact with the dashboard, log in as an editor or administrator and visit '/admin/content/migration-dashboard'.


Site Security Features:
-----------------
- Bio edit permissions are restricted to Editor and Administrator roles
- Migration Dashboard can only be accessed by users with proper Bio edit permissions
- HTTP Basic Authentication module enabled to require token
- JASON:API Extras configuration disables all resources except node--bio and file--file
- JASON:API Extras configuration specifies obscured path prefix


Migration Dashboard Module:
---------------------------
- See Readme.txt inside `modules/custom/migration_dashboard` for more details
- Optimized Javascript executes within module, and React source is included for reference
- To interact with a development version of the React portion of the module, clone https://github.com/aparkening/react-migration-dashboard