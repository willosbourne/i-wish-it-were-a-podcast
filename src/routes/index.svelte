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
	{/if}
	<p>Add a YouTube Link below to send it to your podcast feed.</p>
	<Upload />
</div>
