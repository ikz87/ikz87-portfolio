<script>
	function escapeHTML(str) {
		return str
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#39;")
			.replace(/\\/g, "&#92;");
	}

	let content = ` _    _      _                           
| |  | |    | |                          
| |  | | ___| | ___ ___  _ __ ___   ___       
| |/\\| |/ _ \\ |/ __/ _ \\| '_ ' _ \\ / _ \\   /\\/| 
\\  /\\  /  __/ | (_| (_) | | | | | |  __/  |/\\/    
 \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___|      
================================================
Use the side pane to navigate through my stuff
Have fun :)`;

	let lines = content.split("\n").map(escapeHTML);
</script>
<div class="flex w-full bg-ctp-crust">
	<div role="button" class="box-shadow text-center flex items-center justify-center w-40 rounded-t-xl bg-ctp-surface0 p-2 px-8 text-ctp-text text-xl font-bold">
		home
	</div>
</div>
<div class="bg-ctp-surface0 p-4 rounded-b-xl box-shadow rounded-tr-xl h-full w-full flex overflow-auto">
	<div class="bg-ctp-base flex flex-row w-full h-full overflow-y-auto">
		<div class="flex flex-col items-end w-14 h-full bg-ctp-overlay0">
			{#each lines as line, i}
				<div class="text-lg px-2 text-right text-ctp-text ">
					{i+1}
				</div>
			{/each}
		</div>
		<div class="flex flex-col w-full h-full">
			{#each lines as line, i}
				<div class="text-lg px-3 text-ctp-text ascii hover:bg-ctp-overlay0 transition-all">
					{@html line}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.ascii {
		font-family: monospace;
		white-space: pre; /* Preserves spaces exactly */
	}
</style>

