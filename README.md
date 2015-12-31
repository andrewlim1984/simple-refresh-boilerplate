SIMPLE-REFRESH-BOILERPLATE

A simple boiler plate that refreshes the browser whenever a change is made

Installation:

	1. git clone
	2. npm install
	3. nodemon server.js


CHANGE LOG:

12/30/15:
	
	- Browser will refresh whenever css/html files are changed.
	- JS files will cause browser refresh if connected with the html file that's currently loaded.
	- nodemon is configured to ignore all files in the public folder in order to minimize disconnection.
	- disconnection from js files may require refresh in browser, sometimes not.