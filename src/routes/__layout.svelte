<script>
	let user = {
		email: 'will@sht.dev',
		loggedIn: true,
	}
</script>

<style>
	.header {
		border-bottom: 1px solid black;
		margin-bottom: 1em;
	}

	.body {
		border: 1px solid black;
		display: flex;
		justify-content: center;
		align-content: center;
		padding: 2em;
	}
</style>

<div class="header">
	<nav>
		<a href=".">Home</a>
		<a href="about">About</a>
		<a href="login">Login</a>
	</nav>
</div>

<div class="body">
	<slot></slot>
</div>
