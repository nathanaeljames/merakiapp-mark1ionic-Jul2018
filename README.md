# merakiapp-mark1ionic-Jul2018
 Meraki Schools mobile application - unfinished draft in Ionic 1.3.2 with Angular
 
I started the app version 1 in Ionic with Angular in summer 2018. The app uses the custom ACORN plugin for the Joomla jBackend API, developed in collabortation with Luigi Balzano of jbackend.com. The API extends the Guru and JomSocial plugins for Joomla and allows retrieval of relevant data within the Joomla system.

The hybrid-web app is designed to manage user sessions and retrieve and play our own interactive SCORM-compliant English lessons developed in Adobe Captivate directly from within the app while also allowing users the functionality to engage with JomSocial's private social networking features.

PROBLEMS:
1. Web-based Ionic Framework tool actually made the project more difficult than simply downloading Ionic and developing from the ground up.
2. iframe-based JomSocial tab is slowwww and needs either preloading or better API functionality.
3. Cookie-based sessions expire after set hours--must replace with tolken-based authentication.
4. Lesson view approach relied on in-app browser and extensive html stripping which caused CORS issues circumvented with elaborate JavaScript.
5. Push notification broadcast system not started yet.
6. In-app social networking presents challenges with minors and young students, GDPR, etc.

NEW APP DIRECTIONS:
1. The removal of the on-site English lesson component in Oñati stands to change the entire flipped classroom approach of the app. Will it be replaced with a digital classroom and telepresent teachers? Or less-involved course graders/ moderators? Or are we now marketing an entirely different product?
2. Not an English school, but a SCORM-player foir various downloadable subscribed course modules.
3. In-classroom aspect will need to be replaced with either digital classroom or much stronger in-app speaking and voice technologies.

SOLUTIONS:
1. Scrap entire project and start from scratch as a SPA in React--faster, less bugs, more responsive, more control.
2. Use new Guru SCORM functionality to play lessons in Cordova without HTML stripping or CORS trouble.
3. Develop learning AI to deliver curriculum to students based on their weaknesses and skip based on strengths.
4. Only reminder push notifications and no broadcasts.
