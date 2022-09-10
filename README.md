# Twilio Conversations x Vue.js demo chat app

This is a basic demo chat app made with [Twilio Conversations API](https://www.twilio.com/conversations-api) and [Vue.js](https://vuejs.org/).

See the blog post [Creating a web chat app with Twilio Conversations and Vue.js](https://www.twilio.com/blog/twilio-conversations-vue-part-one) for detailed instructions to run the app.

:warning: **Disclaimer** <br />
This is repository is for reference only and is not directly supported by Twilio Inc. Please do not contact them for support as they will not be able to help you with it. Feature requests and pull requests may not be responded to.

## Start the app

1. Clone this repository and move into the project folder by executing this command:

```
cd twilio-conversation-vue-chat-app
```

2. Install the dependencies by executing this command:

```
npm install
```

3. Create a `.env` file by executing this command:

```
touch .env
```

4. Add these environment variables to the `.env` file:

```
TWILIO_ACCOUNT_SID=XXXXX
TWILIO_API_KEY_SID=XXXXX
TWILIO_API_KEY_SECRET=XXXXX
TWILIO_CONVERSATIONS_SERVICE_SID=XXXXX
```
`XXXXX` indicates credentials you'll need for this app. The table below summarizes each item and shows where you can find the credentials. Replace `XXXXX` with your own credentials and save the file.

| Credential | Description | Steps to obtain the credential |
|---|---|---|
| TWILIO_ACCOUNT_SID | Account SID. Account SID is a combination of numbers and alphabets that uniquely identifies an account. By combining Account SID and Authentication Token, it can be used as authentication information to call APIs. | Login to the [Twilio Console](https://twilio.com/console) and locate the Account SID. |
| TWILIO_API_KEY | API Key. API Key is a key that represents the required credentials to access the Twilio API. It authenticates with Twilio's API and creates and revokes access tokens. | Access Twilio Console's [API Key](https://www.twilio.com/console/project/api-keys) page. Click the red plus symbol. Enter a key name in the **FRIENDLY NAME** field and set **KEY TYPE** to `standard`. Click **Create API Key**. You'll see **SID** and **SECRET** on the screen. **SID** is your API Key. <br /> :warning: If you leave this screen, you will never be able to access your **SECRET** again. Copy and save the value before closing the screen.|
| TWILIO_API_SECRET | API Key secret. API Key secret is a secret that is attached to an API key. It is used to sign access tokens. | The API Key secret is **SECRET** shown when you create an API Key.  |
| TWILIO_SERVICE_SID | Service SID. Service SID is a combination of numbers and alphabets that uniquely identifies a [Service](https://www.twilio.com/docs/chat/rest/service-resource). | Access [Conversations](https://www.twilio.com/console/conversations) in the Twilio Console. Click on **Manage** > **Services** > **Create a new service**. When a new screen appears, enter enter a recognizable service name such as "vue-conversations". The Service SID is **Service SID** on the screen. |

5. Run the server by executing this command:

```
node server.js
```
You should see `Example app listening at http://localhost:5000`.

6. Open a new tab or window in your terminal and run the app by executing this command:

```
npm run serve
```


https://learnvue.co/tutorials/deploy-vue-to-github-pages#step-3-run-git-add-dist--git-commit--m-adding-dist-subtree

```
export NODE_OPTIONS=--openssl-legacy-provider
```
```
git add dist && git commit -m 'adding dist subtree'
```

```
git subtree push --prefix dist origin gh-pages
```