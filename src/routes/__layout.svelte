<script>
import Index from "./index.svelte";

	let user = {
		email: 'will@sht.dev',
		loggedIn: true,
	}

	function toggleAuth() {
		user.loggedIn = !user.loggedIn;
	}
</script>

<nav>
	<a href=".">Home</a>
	<a href="about">About</a>
	<button on:click={toggleAuth}>
		{#if user.loggedIn}
			Log Out
		{:else}
			Log In
		{/if}
	</button>
</nav>

<slot></slot>