<script>
	import '../styles.css';
	import "../../app.css";
	import { onMount } from 'svelte';
	import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
	import { faSpinner } from '@fortawesome/free-solid-svg-icons';
	import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
	import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
	import { faBars } from "@fortawesome/free-solid-svg-icons";
    import { slide } from 'svelte/transition';


	export let content = {
		"sample.txt": `TODO`,
	};

	export let tab_images = {
		"sample.txt": [
			{ 
				"url": "/images/sample.webp",
				"alt": "Sample image",
			},
		],
	};

	export let selected_tab = "introduction.txt";

	export let preserve_white_space = false;

	let gallery_container;
	let text_container;
	let selected_image = {};
	let typewriter = ""
	let typing_speed = 5;
	let typing_interval;


	function change_tab(tab_title) {
		selected_tab = tab_title;
		typewriter = ""; 
		let text = content[tab_title];
		let i = 0;
		left_shadow_opacity = 0;
		right_shadow_opacity = 1;

		clearInterval(typing_interval); 
		if (gallery_container) { 
			gallery_container.scrollTop = 0;
			gallery_container.scrollLeft = 0;
		}
		if (text_container) { 
			text_container.scrollTop = 0;
			text_container.scrollLeft = 0;
		}

		typing_interval = setInterval(() => {
			if (i < text.length) {
				typewriter += text[i]; // Append the next character (including newlines)
				i++;

				// Ensure Svelte updates the variable reactively
				typewriter = `${typewriter}`;
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


	let is_dropdown_open = false;
	function open_dropdown() {
		is_dropdown_open =!is_dropdown_open;
	}
	function close_dropdown() {
		is_dropdown_open = false;
	}
	function toggle_dropdown() {
		is_dropdown_open =!is_dropdown_open;
	}

	let total_lg_lines = 0;
	let total_lines = 0;

	function calculate_line_numbers() {
		if (!text_container) return;
		const container_height = text_container.scrollHeight;
		total_lines = Math.ceil(container_height / 16);
		total_lg_lines = Math.ceil(container_height / 28);
	};

	let left_shadow_opacity = 0;
	let right_shadow_opacity = 1;

	function update_shadows() {

		const maxScroll = gallery_container.scrollWidth - gallery_container.clientWidth;
		const scrollLeft = gallery_container.scrollLeft;

		left_shadow_opacity = Math.round(10 * Math.min(1, scrollLeft / maxScroll))/10;
		right_shadow_opacity = Math.round(10 * (1 - left_shadow_opacity))/10;
	}

	onMount(() => {
    calculate_line_numbers();
	change_tab(selected_tab);
    
    const text_observer = new MutationObserver(calculate_line_numbers);
    text_observer.observe(text_container, { childList: true, subtree: true, characterData: true });
    text_container.addEventListener("scroll", calculate_line_numbers);

  });


</script>
<div class="lg:block hidden">
	<div class="flex w-full lg:text-lg text-xs bg-ctp-crust">
		{#each Object.entries(content) as [title, paragraph]}
			{#if title == selected_tab}
				<div role="button" 
					class="box-shadow text-center flex items-center justify-center lg:w-48 w-32 lg:rounded-t-xl rounded-t-md bg-ctp-surface0 p-2 text-ctp-lavender font-bold">
					{title}
				</div>
			{:else}
				<div role="button" 
					on:click={() => change_tab(title)}
					class="box-shadow text-center flex items-center justify-center lg:w-48 w-32 lg:rounded-t-xl rounded-t-md bg-ctp-base p-2 text-ctp-surface1 font-bold">
					{title}
				</div>
			{/if}
		{/each}
	</div>
</div>
<div class="lg:hidden block relative flex gap-2">
	{#if Object.keys(content).length > 1}
		<div role="button" 
			on:click={ toggle_dropdown }
			class="text-xs box-shadow border-b-ctp-text border-b-4 text-center flex gap-2 items-center justify-center w-36 rounded-t-md bg-ctp-overlay0 p-2 text-ctp-lavender font-bold">
			{selected_tab}
			{#if is_dropdown_open}
				<FontAwesomeIcon icon={faAngleUp} />
			{:else}
				<div class="">
					<FontAwesomeIcon icon={faBars} class=""/>
				</div>
			{/if}
		</div> 
			{#if is_dropdown_open}
				<div class="lg:hidden block z-30 fixed inset-0 bg-black bg-opacity-0 transition-opacity" on:click={close_dropdown}></div>
				<div class="absolute rounded-b-md left-0 top-full w-36 flex flex-col text-xs bg-ctp-surface0 shadow-md z-50"
					transition:slide={{duration: 300}}
				>
					{#each Object.entries(content) as [title, paragraph]}
						{#if title != selected_tab}
							<div role="button" 
								on:click={() => { is_dropdown_open = false; change_tab(title)}}
								class="box-shadow text-center flex items-center justify-center lg:w-48 w-36 bg-ctp-base p-2 text-ctp-overlay1 font-bold">
								{title}
							</div>
						{/if}
					{/each}
				</div>
			{:else}
			<div class="left-0 text-xs text-ctp-lavender flex items-center justify-center">
				+{Object.keys(content).length - 1} Tabs
			</div>
			{/if}
	{:else}
		<div  
			class="text-xs box-shadow border-b-ctp-text border-b-4 text-center flex gap-2 items-center justify-center w-36 rounded-t-md bg-ctp-overlay0 p-2 text-ctp-lavender font-bold">
			{selected_tab}
		</div>
	{/if}
</div>
<div class="fixed h-dvh lg:w-full w-dvw top-0 left-0 lg:p-8 p-3 lg:pt-[11.2rem] lg:pl-[25rem] pt-[6.8rem] pointer-events-none">
<div class="pointer-events-auto bg-ctp-surface0 {is_dropdown_open? "" : "z-10"} lg:p-4 p-2 lg:rounded-b-xl box-shadow lg:rounded-tr-xl rounded-b-md rounded-tr-md h-full w-full flex overflow-hidden">
	<div class="grid {(selected_tab in tab_images)? "lg:grid-cols-3 lg:grid-rows-1 lg:gap-4 gap-2 grid-rows-3" : "" }  h-full w-full">
		<div class="bg-ctp-base flex col-span-2 lg:row-span-1 row-span-2 flex-row w-full h-full overflow-y-auto overflow-x-clip">
			<div class="flex flex-col items-end lg:w-14 w-10 h-full bg-ctp-overlay0">
				{#each Array.from({ length: total_lines }) as _, i}
					<div class="lg:hidden block text-xs lg:px-2 px-1 w-full text-right text-ctp-text bg-ctp-overlay0">
						{i+1}
					</div>
				{/each}
				{#each Array.from({ length: total_lg_lines }) as _, i}
					<div class="lg:block hidden text-lg lg:px-2 px-1 w-full text-right text-ctp-text bg-ctp-overlay0">
						{i+1}
					</div>
				{/each}
			</div>
			<div class="flex flex-col w-full h-full" bind:this={text_container}>
					<div class=" { preserve_white_space? "ascii" : "" } lg:text-lg text-xs px-3 text-ctp-text transition-all">
						{@html typewriter}
					</div>
			</div>
		</div>
		{#if selected_tab in tab_images}
			<div class="relative w-full grid h-full lg:col-span-1 col-span-2">
				<div 
					bind:this={gallery_container} 
					on:scroll={update_shadows}
					class="flex lg:pr-5 gap-4 p-1 lg:flex-col flex-row lg:items-start items-center { tab_images[selected_tab].length == 1 ? "justify-center" : "justify-start"} lg:h-auto lg:w-full h-full lg:overflow-x-clip lg:overflow-y-auto overflow-x-auto">
					{#each tab_images[selected_tab] as img}
						<div class="relative aspect-video bg-red-200 lg:h-auto lg:w-full h-full">
							<div class="absolute top-0 left-0 w-full h-full aspect-video border-ctp-crust border-4 ring ring-ctp-overlay0 bg-ctp-overlay2 flex items-center justify-center">
								<FontAwesomeIcon icon={faSpinner} class="text-ctp-text animate-spin text-3xl" />
							</div>
							<img role="button" 
								on:click={() => { selected_image = img }}
								on:load={() => markLoaded(img.url)}
								class:loaded={loadedImages[img.url]}
								class="absolute top-0 left-0 aspect-video h-full border-ctp-crust border-4 ring ring-ctp-overlay0 hover:border-ctp-yellow hover:ring-ctp-peach" src={img.url} alt={img.alt} />
						</div>
					{/each}
					{#if (Object.keys(selected_image).length !== 0) }
						<div 
							on:click={() => { selected_image = {} }}
							class="z-20 fixed p-16 bg-black opacity-70 top-0 left-0 h-dvh w-dvw">
						</div>
						<img role="button"
							on:click={ () => window.open(selected_image.url, '_blank') }
							class="z-30 fixed top-1/2 left-1/2 surrounding-shadow -translate-x-1/2 -translate-y-1/2 border-2 border-ctp-crust opacity-100 lg:w-2/3 w-full" src={selected_image.url} alt={selected_image.alt} />
					{/if}
				</div>
				{#if tab_images[selected_tab].length > 1 }
					<div class="lg:hidden block absolute pointer-events-none grid grid-cols-12 top-0 left-0 w-full h-full">
						<div class="bg-gradient-to-r from-ctp-surface0 to-transparent w-full h-full" style="opacity: {left_shadow_opacity}">
						</div>
						<div class="col-span-10"/>
						<div class="bg-gradient-to-l from-ctp-surface0 to-transparent w-full h-full" style="opacity: {right_shadow_opacity}">
						</div>
					</div>
				{/if}
			</div>
		{/if}	
	</div>
</div>
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
	  @keyframes upDown {
    0%, 100% { transform: translateY(-2px); }
    50% { transform: translateY(1px); } 
  }

  .bouncing {
    animation: upDown 1s ease-in-out infinite; /* Adjust speed */
  }

</style>

