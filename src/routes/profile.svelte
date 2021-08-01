<script lang="ts">
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	import { user } from '../lib/stores/appStore';
	import { signOut as authSignOut } from 'sk-auth/client';
	import ProtectedLayout from '$lib/components/ProtectedLayout.svelte';

	let appUser = null as User;
	user.subscribe(u => appUser = u);

	function signOut() {
		// alert("sign out not implemented (you're here forever)");
		user.set({} as User);
		authSignOut().then(session.set);
		goto('/');
	}
</script>

<ProtectedLayout>
	<div>
		<h1>profile</h1>
		<button on:click={signOut}> Sign Out </button>
		<h2>User:</h2>
		<pre>
			<code>{JSON.stringify(appUser, null, 2)}</code>
		</pre>
	</div>
</ProtectedLayout>
