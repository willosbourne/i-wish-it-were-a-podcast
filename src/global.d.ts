/// <reference types="@sveltejs/kit" />

interface ImportMetaEnv {
	// sk-auth definition
	VITE_GOOGLE_OAUTH_CLIENT_ID: string;
	VITE_GOOGLE_OAUTH_CLIENT_SECRET: string;
	VITE_TWITCH_OAUTH_CLIENT_ID: string;
	VITE_TWITCH_OAUTH_CLIENT_SECRET: string;
	VITE_FACEBOOK_OAUTH_CLIENT_ID: string;
	VITE_FACEBOOK_OAUTH_CLIENT_SECRET: string;
	VITE_TWITTER_API_KEY: string;
	VITE_TWITTER_API_SECRET: string;
	VITE_REDDIT_API_KEY: string;
	VITE_REDDIT_API_SECRET: string;
	VITE_JWT_SECRET_KEY: string;
}

interface User {
	loggedIn: boolean;
	name: string;
	email: string;
	info: GoogleUser;
}

// sk-auth Google user definition
interface GoogleUser {
	sub: string;
	name: string;
	given_name: string;
	family_name: string;
	profile: string;
	picture: string;
	email: string;
	email_verified: boolean;
	gender: string;
	locale: string;
	hd: string;
}
