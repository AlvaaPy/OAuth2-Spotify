import express from "express";
import axios from "axios";
import querystring from 'querystring';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Spotify credentials
const {
    SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REDIRECT_URI,
} = process.env;

// Scopes for Spotify authorization
const SCOPES = [
    "user-read-private",
    "user-read-email",
];

// Serve the login page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to login and redirect to Spotify authorization
app.get("/login", (req, res) => {
    const authURL = "https://accounts.spotify.com/authorize?" + 
        querystring.stringify({
            client_id: SPOTIFY_CLIENT_ID,
            response_type: "code",
            redirect_uri: SPOTIFY_REDIRECT_URI,
            scope: SCOPES.join(" "),
        });
    res.redirect(authURL);
});

// Callback route for Spotify
app.get("/callback", async (req, res) => {
    const code = req.query.code || null;

    if (!code) {
        return res.status(400).send("Authorization code is missing.");
    }

    try {
        // Exchange authorization code for access token
        const response = await axios.post(
            "https://accounts.spotify.com/api/token",
            querystring.stringify({
                grant_type: "authorization_code",
                code,
                redirect_uri: SPOTIFY_REDIRECT_URI,
                client_id: SPOTIFY_CLIENT_ID,
                client_secret: SPOTIFY_CLIENT_SECRET,
            }),
            { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );

        const { access_token, refresh_token } = response.data;

        // Fetch user profile with access token
        const userProfile = await axios.get("https://api.spotify.com/v1/me", {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        res.send({
            message: "Login successful!",
            user: userProfile.data,
            tokens: { access_token, refresh_token },
        });
    } catch (error) {
        console.error("Error during Spotify OAuth2:", error.message);
        res.status(500).send("Something went wrong.");
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
