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
		"contact.txt": `<span class="text-ctp-mauve">### Contact info</span>
|    Field    |            Value            |
|     ---     |             ---             |
|    E-mail   |     <a href="mailto:i.arcia135@gmail.com" class="underline">i.arcia135@gmail.com</a>    |
|    Phone    |       <a href="tel:+50577046930" class="underline">+505 7704 56930</a>       |

My phone is reachable on both Whatsapp and Telegram.`,

	};

	let tab_images = {
	};


	let selected_tab = "contact.txt";
	let selected_image = {};
	let typewriter = []
	let typing_speed = 1;
	let typing_interval;

	change_tab(selected_tab);

	function change_tab(tab_title) {
		selected_tab = tab_title;
		typewriter = [""]; 
		let text = content[tab_title];
		let i = 0;

		clearInterval(typing_interval); 

		typing_interval = setInterval(() => {
			if (i < text.length) {
				if (text[i] === "\n") {
					typewriter.push(""); 
				} else {
					typewriter[typewriter.length - 1] += text[i]; 
				}
				typewriter = [...typewriter]; 
				i++;
			} else {
				clearInterval(typing_interval); 
			}
		}, typing_speed);
	}


</script>
<div class="flex w-full bg-ctp-crust">
	{#each Object.entries(content) as [title, paragraph]}
		{#if title == selected_tab}
			<div role="button" 
				class="box-shadow text-center flex items-center justify-center w-48 rounded-t-xl bg-ctp-surface0 p-2 px-4 text-ctp-lavender text-lg font-bold">
				{title}
			</div>
		{:else}
			<div role="button" 
				on:click={() => change_tab(title)}
				class="box-shadow text-center flex items-center justify-center w-48 rounded-t-xl bg-ctp-base p-2 px-4 text-ctp-surface1 text-lg font-bold">
				{title}
			</div>
		{/if}
	{/each}
</div>
<div class="bg-ctp-surface0 p-4 rounded-b-xl box-shadow rounded-tr-xl h-full w-full flex overflow-hidden">
	{#if selected_tab in tab_images}
		<div class="grid grid-cols-3 gap-4 h-full w-full">
			<div class="bg-ctp-base flex col-span-2 flex-row w-full h-full overflow-y-auto">
				<div class="flex flex-col items-end w-14 h-full bg-ctp-overlay0">
					{#each typewriter as line, i}
						<div class="text-lg px-2 w-full text-right text-ctp-text bg-ctp-overlay0">
							{i+1}
						</div>
					{/each}
				</div>
				<div class="flex flex-col w-full h-full">
					{#each typewriter as line, i}
						<div class="text-lg px-3 text-ctp-text hover:bg-ctp-overlay0 transition-all">
							{@html line}
						</div>
					{/each}
				</div>
			</div>
			<div class="flex gap-4 p-1 pr-5 flex-col items-start w-full h-full overflow-y-auto">
				{#each tab_images[selected_tab] as img}
					<img role="button" 
						on:click={() => { selected_image = img }}
						class="w-full border-ctp-crust border-4 ring ring-ctp-overlay0 hover:border-ctp-yellow hover:ring-ctp-peach" src={img.url} alt={img.alt} />
				{/each}
				{#if (Object.keys(selected_image).length !== 0) }
					<div 
						on:click={() => { selected_image = {} }}
						class="fixed p-16 bg-black opacity-55 top-0 left-0 h-dvh w-dvw">
					</div>
					<img role="button"
						on:click={ () => window.open(selected_image.url, '_blank') }
						class="fixed top-1/2 left-1/2 surrounding-shadow -translate-x-1/2 -translate-y-1/2 border-2 border-ctp-crust opacity-100 w-2/3" src={selected_image.url} alt={selected_image.alt} />
				{/if}
			</div>
		</div>
	{:else}
		<div class="bg-ctp-base flex flex-row w-full h-full overflow-y-auto">
			<div class="flex flex-col items-end w-14 h-full bg-ctp-overlay0">
				{#each typewriter as line, i}
					<div class="text-lg px-2 w-full text-right text-ctp-text bg-ctp-overlay0">
						{i+1}
					</div>
				{/each}
			</div>
			<div class="flex flex-col w-full h-full">
				{#each typewriter as line, i}
					<div class="ascii text-lg px-3 text-ctp-text hover:bg-ctp-overlay0 transition-all">
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
	.gallery-container {
		scrollbar-gutter: stable both-edges; /* Reserves space for the scrollbar */
		overflow-y: scroll;
	}

</style>

