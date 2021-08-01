<script>
	let url = '';
	function submitUrl() {
		alert(url);
	}
</script>

<div>
	<input bind:value={url} />
	<button on:click={submitUrl}> Submit URL </button>
</div>
