npm init
npm install express
create a new project
npm install firebase
npm install -g firebase-tools
firebase login or npx firebase login  -> Yes
server.js file create
in package.json  "build" : "echo\"no build process is required for this project"" (under scripts, after start put a,)
npm run build
firebase init or npx firebase init
Yes -> Hosting -> use an existing project
public directory ->build
N
Yes for github
deepaistires/reponame -> click the link and set up the service account
Settings -> secrets and variables -> actions
y -> npm ci && npm run build -> Yes -> main
Create a new secret -> FIREBASE_SERVICE_ACCOUNT add a secret
Firebase console -> project name -> project settings -> service accounts -> generate a new private key
Save the folder in your vs code project folder
Replace private key with the downloaded folder with your secret key name
Set up the work flow Yes -> npm ci && npm run build ->Y -> main 
Locate public directory and makes changes in the index.html
firebase deploy or npx firebase deploy
If it doesnt work reload the page
