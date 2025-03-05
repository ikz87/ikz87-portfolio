<script>
	import '../styles.css';
	import "../../app.css";
	import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
	import { faSpinner } from '@fortawesome/free-solid-svg-icons';

	let gallery_container;
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
		"dotfiles.txt":`<span class="text-ctp-mauve">### My dotfiles and end-game rice
		# <a href="https://github.com/ikz87/dots-2.0" class="text-ctp-blue underline">https://github.com/ikz87/dots-2.0</a>
		This had to be in its own section, because that's just how 
		much I love this very niche part of coding as a hobby.
		<br>
		For the uninitiated, dotfiles usually refers to everything
		inside the \`~/.config/\` folder in linux, meaning, every
		file that *configures* your apps/programs. For a programer 
		and linux power user like me, configuring these files (usually 
		called ricing) is nothing short of an art form.
		<br>
		I've spent countless hours making what I consider to be my 
		end game rice, which I've been using for about 3 years at
		this point.
		<br>
		My rice consists a <a href="https://github.com/baskerville/bspwm" class="underline">bspwm</a> and <a href="https://github.com/elkowar/eww" class="underline">EWW</a> rice that automatically 
		generates a colorscheme for every important program I use 
		based on my current wallpaper. My rice is like a home, it's
		where I work from and it's honestly one of the things that
		motivates me every time I sit down to code.
		`,

	};

	let tab_images = {
		"dotfiles.txt": [
			{ 
				"url": "/images/rice-ryo.gif",
				"alt": "A GIF showcasing my rice in real time",
			},
			{ 
				"url": "/images/rice-ultrakill.webp",
				"alt": "Screenshot showcasing my rice",
			},
			{ 
				"url": "/images/rice-planets.webp",
				"alt": "Screenshot showcasing my rice",
			},
		],
	};


	let selected_tab = "dotfiles.txt";
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
		if (gallery_container) { 
			gallery_container.scrollTop = 0;
		}


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


	// Stuff to show skeletons for images
	let loadedImages = {};

	function markLoaded(url) {
		loadedImages = { ...loadedImages, [url]: true };
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
						<div class="text-lg lines px-3 text-ctp-text hover:bg-ctp-overlay0 transition-all">
							{@html line}
						</div>
					{/each}
				</div>
			</div>
			<div bind:this={gallery_container} class="flex gap-4 p-1 pr-5 flex-col items-start w-full h-full overflow-y-auto">
				{#each tab_images[selected_tab] as img}
					<div class="relative w-full">
						{#if !loadedImages[img.url]}
							<div class="w-full aspect-video border-ctp-crust border-4 ring ring-ctp-overlay0 bg-ctp-overlay2 flex items-center justify-center">
								<FontAwesomeIcon icon={faSpinner} class="text-ctp-text animate-spin text-3xl" />
							</div>
						{/if}

						<img role="button" 
							on:click={() => { selected_image = img }}
							on:load={() => markLoaded(img.url)}
							class:loaded={loadedImages[img.url]}
							class="w-full border-ctp-crust border-4 ring ring-ctp-overlay0 hover:border-ctp-yellow hover:ring-ctp-peach" src={img.url} alt={img.alt} />
					</div>
				{/each}
				{#if (Object.keys(selected_image).length !== 0) }
					<div 
						on:click={() => { selected_image = {} }}
						class="fixed p-16 bg-black opacity-70 top-0 left-0 h-dvh w-dvw">
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
	.gallery-container {
		scrollbar-gutter: stable both-edges; /* Reserves space for the scrollbar */
		overflow-y: scroll;
	}

</style>

