<script lang="ts">
	import Upload from '../components/upload.svelte';
	import { user } from '$lib/stores/appStore';

	let appUser = null as User;
	user.subscribe(u => appUser = u)
</script>

<!-- src/routes/index.svelte -->
<svelte:head>
	<title>IWIWAP - I Wish It Were A Podcast</title>
</svelte:head>

<div>
	<h1>IWIWAP</h1>
	<h2>I Wish It Were A Podcast</h2>
	{#if appUser.name}
		<p>Welcome, {appUser.name}</p>
		<p>Add a YouTube Link below to send it to your podcast feed.</p>
		<Upload />
	{/if}
	<p>You'll need to <a href="/login">log in</a> to use this app.</p>
	<p>Without logging in, you won't have your own personal podcast feed.</p>
</div>
