This installation highlights the Migration Dashboard custom module, a React-based proof-of-concept tool to help authors track content status amidst a large editorial migration project. The module isn't intended to be a permanent addition to a site, but rather an assistant for the duration of the internal project.

Quick Start:
------------
This site's sample content nodes are biographies of well-known chefs in the Portland, Maine restaurant scene. In this scenario, the client is updating their photos, summaries, and full biographies to conform to new content standards.

User flow:
1. Authenticated editors and administrators move bios from 'To Do' to 'In Process' in the dashboard. They work with their teams to edit/create content based on the new content standards.
2. Once the content is ready, they edit a node, update the content, and mark the status as 'Done' before submitting.
3. They return to the dashboard to tackle the next bio from the Shortcuts menu.

Log in and visit Migration Dashboard at `admin/content/migration-dashboard`


Motivation:
-----------
Tools like GatherContent offer too many features if clients simply want to track where they're at in the migration process. And giant spreadsheets, while very extensible, can be overwhelming to use and require manual updates (or complicated integrations).

Migration Dashboard provides an easy way to track that data all inside Drupal! And the tool is meant to be customized (by a professional services team) to display the information most relevant to each client.


Based in Reality:
-----------------
This idea came from a real-world client scenario. A friend's current project involves four law firms who recently merged into one company. Each firm had their own way of writing staff biographies, so new editorial standards were created. Now the communications team is working their way through editing the entire roster. Most of the writing and approval process happens offline, but they need a single source of truth for which bios are currently being edited, which are finished and published on the site, and how many are left to do.


Many Choices:
-------------
As with all things Drupal, there were many approaches I could take to build this little dashboard. It would be a great candidate for a Views Display Plugin! But, well... I wanted to play with Drupal's JSON:API, so here we are. Let's pretend there were legacy systems in place that made this the most sensible choice.


Site Security Features:
-----------------
- Bio edit permissions are restricted to Editor and Administrator roles
- Migration Dashboard can only be accessed by users with proper Bio edit permissions
- HTTP Basic Authentication module enabled to require token
- JASON:API Extras configuration disables all resources except node--bio and file--file
- JASON:API Extras configuration specifies obscured path prefix


Migration Dashboard Module:
---------------------------
- See Readme.txt inside `modules/custom/migration_dashboard` for more details.
- Optimized Javascript executes within module, and React source is included for reference
- To interact with a development version of the React portion of the module, clone https://github.com/aparkening/react-migration-dashboard