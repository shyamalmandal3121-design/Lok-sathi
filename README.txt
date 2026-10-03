LOK SATHI - REAL FIREBASE LINKED EDITION

Firebase project: lok-sathi-782ec

This package is linked to the Lok Sathi Firebase Web project already configured in script.js and admin.html.

DATABASE DESIGN
- Complaints: full private complaint record (name, mobile, address, description, photo, status, admin reply, reach, etc.).
- ComplaintPublic: non-sensitive mirror used by the citizen homepage for live counters and complaint tracking.
- Citizen submission writes both records in one Firestore batch.
- Admin status/reply/reach edits update both records together.
- Admin deletion deletes both records together.

ONE-TIME FIREBASE SETUP
1. Firebase Console -> Authentication -> Sign-in method -> Email/Password -> Enable.
2. Authentication -> Users -> Add user. Create your admin email/password.
3. Firestore Database -> Rules: paste firestore.rules and Publish.
4. Open index.html through a web host/local web server (ES modules need a browser context).

IMPORTANT
- Do not use 'allow read, write: if false;' with this website, because it blocks the app.
- The public collection contains only tracking/counter fields, not citizen name/mobile/full description/photo.
- Existing full complaints are mirrored into ComplaintPublic automatically when the authenticated admin opens the dashboard.
- Firebase Web API keys are identifiers, not passwords. Never put Firebase Admin SDK service-account private keys in this ZIP.
