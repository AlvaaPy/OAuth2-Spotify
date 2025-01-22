# Spotify OAuth2 Login with Express

This project demonstrates how to implement a login system using OAuth2 with Spotify API in an Express.js application. Users can log in with their Spotify account and retrieve their profile information.

## Features

- Redirect users to Spotify for authentication.
- Handle the Spotify OAuth2 authorization flow.
- Retrieve and display the user's profile information after successful authentication.
- Store access and refresh tokens to interact with the Spotify API.

## Prerequisites

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://npmjs.com/) (Node Package Manager)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AlvaaPy/OAuth2-Spotify.git
   cd OAuth2-Spotify

2. **Install Dependencies**
   Run the following command to install required dependencies:

   ```bash
   npm install

3. **Set up your .env file:**
   Create a .env file in the root of the project and add your Spotify credentials:

   ```bash
   SPOTIFY_CLIENT_ID=your-spotify-client-id
   SPOTIFY_CLIENT_SECRET=your-spotify-client-secret
   SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
   ```

   You can obtain your SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET by registering your application in the [Spotify Developer Dashboard](https://developer.spotify.com/).

## How It Works
1. **Start the Express server:**
   After setting up the .env file, run the following command to start the server:

   ```bash
   npm start
   ```
   The server will start running on http://localhost:3000.

2. **Login with Spotify:**
   
   - Visit http://localhost:3000 in your browser.
   - Click the "Login" button to be redirected to Spotify's authorization page.
   - Once the user logs in and grants permissions, they will be redirected to the /callback route, where the server exchanges the authorization code for an access token and refresh token.

3. **Retrieve User Profile:**
   
   After successful authentication, the user's profile information will be displayed, including their name, email, and other relevant details fetched from the Spotify API.

## Project Structure
```bash
spotify-oauth-express/
├── node_modules/           # Installed npm packages
├── .env                    # Environment variables for Spotify credentials
├── index.html              # Login page that allows the user to login via Spotify
├── server.js               # Express server code
├── package.json            # Project dependencies and scripts
├── README.md               # Documentation for the project
└── package-lock.json       # Lock file for npm packages
```

## Technologies Used
- Node.js: Server-side runtime environment.
- Express.js: Web framework for Node.js.
- Spotify Web API: For retrieving user data from Spotify.
- OAuth2: Authentication protocol to authorize users with Spotify.
- dotenv: To manage environment variables.

## Creator
**Muhammad Asrort Alva 'Izzi**  
[Instagram](https://www.instagram.com/asroralva/) | [LinkedIn](https://www.linkedin.com/in/asroralva/)



