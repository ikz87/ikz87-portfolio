<script>
	import '../styles.css';
	import "../../app.css";
	function escapeHTML(str) {
		return str
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#39;")
			.replace(/\\/g, "&#92;");
	}

	let content = {
		"introduction.txt": `Here you'll find all the jobs I've worked on.
		Some of the things I've developed are private, but I'll include all the details I can.`,
		"Desarrollo Integral":`
		<span class="text-ctp-flamingo">### Desarrollo Integral (August 2023 - March 2024)</span>
		This financial company had been using a system based 
		on google sheets from the start, but as they grew in 
		size, this proved to be inneficcient. 
		<br>
		My role involved developing a script that automatically 
		scraped data from Google Sheets and converted it into 
		a PostgreSQL database.
		I also created an API using Python, psycopg2, and 
		Strawberry GraphQL. 
		Finally, I designed and developed a web app with React,
		Typescript and tailwind.
		<br>
		Needless to say, this software is private, but on the 
		right are screenshots of one of several pages that 
		interfaced with the backend to register data (new 
		clients in this case) and the login screen for company 
		staff.
		`,

	};

	let tab_images = {
		"Desarrollo Integral": [
			"/images/di-clients.png",
			"/images/di-login.png",
		],
	};

	function change_tab(tab_title) {
		selected_tab = tab_title;
		let new_lines = content[tab_title].split("\n");
		lines = new_lines;	
	}

	let selected_tab = "introduction.txt";
	let lines = content[selected_tab].split("\n");
</script>
<div class="flex w-full bg-ctp-crust">
	{#each Object.entries(content) as [title, paragraph]}
		{#if title == selected_tab}
			<div role="button" 
				class="box-shadow text-center flex items-center justify-center w-72 rounded-t-xl bg-ctp-surface0 p-2 px-8 text-ctp-lavender text-lg font-bold">
				{title}
			</div>
		{:else}
			<div role="button" 
				on:click={() => change_tab(title)}
				class="box-shadow text-center flex items-center justify-center w-72 rounded-t-xl bg-ctp-base p-2 px-8 text-ctp-surface1 text-lg font-bold">
				{title}
			</div>
		{/if}
	{/each}
</div>
<div class="bg-ctp-surface0 p-4 rounded-b-xl box-shadow rounded-tr-xl h-full w-full flex overflow-hidden">
	{#if selected_tab in tab_images}
		<div class="grid grid-cols-2 h-full w-full">
			<div class="bg-ctp-base flex flex-row w-full h-full overflow-y-auto">
				<div class="flex flex-col items-end w-14 h-full bg-ctp-overlay0">
					{#each lines as line, i}
						<div class="text-lg px-2 w-full text-right text-ctp-text bg-ctp-overlay0">
							{i+1}
						</div>
					{/each}
				</div>
				<div class="flex flex-col w-full h-full">
					{#each lines as line, i}
						<div class="text-lg px-3 text-ctp-text hover:bg-ctp-overlay0 transition-all">
							{@html line}
						</div>
					{/each}
				</div>
			</div>
		</div>
	{:else}
		<div class="bg-ctp-base flex flex-row w-full h-full overflow-y-auto">
			<div class="flex flex-col items-end w-14 h-full bg-ctp-overlay0">
				{#each lines as line, i}
					<div class="text-lg px-2 w-full text-right text-ctp-text bg-ctp-overlay0">
						{i+1}
					</div>
				{/each}
			</div>
			<div class="flex flex-col w-full h-full">
				{#each lines as line, i}
					<div class="text-lg px-3 text-ctp-text hover:bg-ctp-overlay0 transition-all">
						{@html line}
					</div>
				{/each}
			</div>
		</div>
	{/if}	
</div>

<style>
	.ascii {
		font-family: monospace;
		white-space: pre;
	}
</style>

