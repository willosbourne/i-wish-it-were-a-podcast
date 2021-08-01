<script>
	let count = 0;
	$: doubled = count * 2;

	function incrementCount() {
		count += 1;
	}
	// --------

	let url = '';
	function submitUrl() {
		alert(url);
	}
</script>

<div>
	<button on:click={incrementCount}>
		Clicked {count} {count === 1 ? 'time' : 'times'}
	</button>
	<p>And here's that doubled: {doubled}</p>
	<hr/>
	<input bind:value={url} />
	<button on:click={submitUrl}>
		Submit URL
	</button>
</div>