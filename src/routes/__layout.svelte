<script lang="ts">
	import { session } from '$app/stores';
	import { user } from '../lib/stores/appStore';
	let googleUser = null as GoogleUser;
	if ($session.user) {
		googleUser = $session.user.connections.google as GoogleUser;
	}
	let tempUserObj = {
		loggedIn: false,
		name: '',
		email: '',
		info: null as GoogleUser
	};

	if (googleUser) {
		tempUserObj.loggedIn = true;
		tempUserObj.name = googleUser.name;
		tempUserObj.email = googleUser.email;
		tempUserObj.info = googleUser;
	}

	user.set(tempUserObj);

	let appUser = null as User;
	user.subscribe(u => appUser = u);
</script>

<header class="header">
	<nav>
		<a href=".">Home</a>
		<a href="about">About</a>
		{#if appUser && appUser.loggedIn}
			<a href="profile">Profile</a>
		{:else}
			<a href="login">Login</a>
		{/if}
	</nav>
</header>

<main class="body">
	<slot />
</main>

<style>
	header {
		border-bottom: 1px solid black;
		margin-bottom: 1em;
	}

	main {
		border: 1px solid black;
		display: flex;
		justify-content: center;
		align-content: center;
		padding: 2em;
	}
</style>
