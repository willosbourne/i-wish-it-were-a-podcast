<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { user } from '$lib/stores/appStore';

	onMount(() => {
		if (!$user.loggedIn) {
			goto("/");
		}
	});
</script>

{#if $user}
	<slot />
{:else}
	<div>Loading...</div>
{/if}