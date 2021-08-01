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
