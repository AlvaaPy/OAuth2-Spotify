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


   You can obtain your SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET by registering your application in the [Spotify Developer Dashboard](https://developer.spotify.com/).

   


