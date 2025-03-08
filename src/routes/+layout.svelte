<script>
	import './styles.css';
	import "../app.css";
	import { onMount } from 'svelte';
	import { fly } from "svelte/transition";

	import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
	import { faGithub } from "@fortawesome/free-brands-svg-icons";
	import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
	import { faYoutube } from "@fortawesome/free-brands-svg-icons";
	import { faDiscord } from "@fortawesome/free-brands-svg-icons";
	import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
	import { faFolder } from "@fortawesome/free-regular-svg-icons";
	import { faFileCode } from "@fortawesome/free-regular-svg-icons";
	import { faFile } from "@fortawesome/free-regular-svg-icons";
	import { faFileLines } from "@fortawesome/free-regular-svg-icons";
	import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
	import { faBars } from "@fortawesome/free-solid-svg-icons";
	import { faXmark } from "@fortawesome/free-solid-svg-icons";
	import { faCode } from "@fortawesome/free-solid-svg-icons";
	import { faSpinner } from '@fortawesome/free-solid-svg-icons';
		
	
	const side_pane_items = [
		{
			title: "~",
			link: "/",
			icon: faFolderOpen,
		},
		{
			title: "about-me.txt",
			link: "/about",
			icon: faFileLines,
		},
		{
			title: "my-work",
			link: "/work",
			icon: faFolder,
		},
		{
			title: "cool-projects",
			link: "/projects",
			icon: faFolder,
		},
		{
			title: "dotfiles.txt",
			link: "/dots",
			icon: faFileLines,
		},
		{
			title: "contact-info.txt",
			link: "/contact",
			icon: faFileLines,
		},
		{
			title: "resume.pdf",
			link: "/documents/Isaac%20Arcia%20resume.pdf",
			icon: faFilePdf,
		},
	];

	let is_menu_open = false;
	function open_menu() {
		is_menu_open = true;	
	}
	function close_menu() {
		is_menu_open = false;	
	}


	let selected_item = "~";

	
	import { page } from "$app/stores";

	
	$: {
		const currentPath = $page.url.pathname;
		const matchedItem = side_pane_items.find(item => item.link === currentPath);
		if (matchedItem) {
			selected_item = matchedItem.title;
		}
	}

	let show_content = false;
	  onMount(() => {
		requestAnimationFrame(() => show_content = true);
  });

</script>

<div class="app bg-ctp-crust h-dvh w-full">
	<main>
		{#if is_menu_open}
			<div class="lg:hidden block z-30 fixed inset-0 bg-black bg-opacity-70 transition-opacity" on:click={close_menu}></div>
		{/if}
		{#if is_menu_open}
			<aside
				class="lg:hidden block z-30 pt-12 fixed top-0 right-0 h-full w-64 bg-ctp-surface2 shadow-lg flex flex-col gap-1 p-2 transition-transform"
				transition:fly={{ x: 200, duration: 300 }}
			>
				<button
					class="absolute top-2 right-0"
					on:click={close_menu}
				>
					<FontAwesomeIcon icon={faXmark} class="text-lg aspect-square px-4 py-2 text-ctp-text"/>
				</button>
				<a 
					href="https://github.com/ikz87/ikz87-portfolio"
					class="absolute flex text-xs underline w-full items-center justify-center text-ctp-text flex-row bottom-2 left-1/2 -translate-x-1/2 "
					on:click={close_menu}
				>
					<FontAwesomeIcon icon={faCode} class="text-lg aspect-square px-4 py-2 text-ctp-text"/>
					View source
			</a>
				<div class="flex flex-col gap-2 w-full bg-ctp-surface1 p-4 rounded-md">
				{#each side_pane_items as item}
					{#if item.title == "~"}
						<a href="/" class="w-full" on:click={close_menu}>
							{#if selected_item === "~"}
								<div role="button" class="text-xs w-full p-3 py-1 flex gap-2 flex-row rounded-md items-center role-button group bg-ctp-green transition-all">
									<FontAwesomeIcon icon={faFolderOpen} class="text-ctp-surface2" />
									<h2 class="text-ctp-surface2">~</h2>
								</div>
							{:else}
								<div role="button" class="text-xs w-full p-3 py-1 flex gap-2 flex-row rounded-md items-center role-button group transition-all">
									<FontAwesomeIcon icon={faFolderOpen} class="text-ctp-green group-hover:translate-x-1" />
									<h2 class="text-ctp-text group-hover:text-ctp-green group-hover:translate-x-1 group-hover:underline">~</h2>
								</div>
							{/if}
						</a>
					{:else}
						<a href={item.link} class="text-ctp-text group w-full hover:text-ctp-surface2" on:click={close_menu}>
							<div class="w-full flex flex-col pl-4">
								{#if selected_item === item.title}
									<div role="button" class="text-xs w-full p-3 py-1 flex gap-2 flex-row rounded-r-md items-center role-button group bg-ctp-green transition-all">
										<FontAwesomeIcon icon={item.icon} class="text-ctp-surface2" />
										<div class="text-ctp-surface2">{item.title}</div>
									</div>
								{:else}
									<div role="button" class="border-l-2 border-ctp-green text-xs w-full p-3 py-1 flex gap-2 flex-row rounded-r-md items-center role-button group transition-all">
										<FontAwesomeIcon icon={item.icon} class="text-ctp-green group-hover:text-ctp-green group-hover:translate-x-1" />
										<div class="text-ctp-text group-hover:underline group-hover:text-ctp-green group-hover:translate-x-1">
											{item.title}
										</div>
									</div>
								{/if}
							</div>
						</a>
					{/if}
				{/each}
			</div>
			</aside>
		{/if}



		<div class="{show_content? "opacity-100" : "opacity-0"} transition duration-200 h-dvh overflow-hidden w-full bg-ctp-crust lg:p-8 p-3">
			<div class="flex flex-col h-full lg:gap-8 gap-3 w-full">
				<div class="grid grid-cols-2 lg:p-4 lg:px-6 lg:rounded-xl rounded-md box-shadow bg-ctp-surface1">
					<div class="lg:py-0  py-1 lg:text-2xl text-sm h-full flex flex-row lg:gap-4 gap-3 items-center justify-start">
						<h1 class="lg:pl-0 pl-2 text-ctp-blue font-bold">
							ikz87's <br class="lg:hidden block"> Portfolio
							
						</h1>
						<div class="lg:block hidden text-ctp-text font-bold">
							|
						</div>
						<div class="lg:block hidden text-ctp-sky font-bold">
							Contact me at
							<a class="underline" href="mailto:i.arcia135@gmail.com">i.arcia135@gmail.com</a>
						</div>
					</div>
					<div class="lg:text-4xl text-2xl h-full flex flex-row gap-4 items-center justify-end">
						<div class="lg:block hidden text-2xl text-ctp-red font-bold">
							Follow/Add me on my socials: 
						</div>
						<a href="https://github.com/ikz87">
							<FontAwesomeIcon icon={faGithub} class="text-ctp-text"/>
						</a>
						<a href="https://www.linkedin.com/in/isaac-arcia-9b408932a/">
							<FontAwesomeIcon icon={faLinkedin} class="text-ctp-text"/>
						</a>
						<a href="https://www.youtube.com/@kz8785">
							<FontAwesomeIcon icon={faYoutube} class="text-ctp-text"/>
						</a>
						<a href="https://discordapp.com/users/218938202386333697">
							<FontAwesomeIcon icon={faDiscord} class="text-ctp-text"/>
						</a>
						<button 
							class="lg:hidden block flex items-center justify-center bg-ctp-overlay0 border-l-4 border-ctp-text h-full rounded-r-md"
							on:click={open_menu}
						>
							<FontAwesomeIcon icon={faBars} class="px-4 text-lg text-ctp-lavender rounded-r-md"/>
						</button>
					</div>
				</div>
				<div class="lg:h-[calc(100vh-170px)] h-[calc(100vh-200px)] bg-ctp-crust w-full grid lg:grid-cols-5 gap-8 grid-rows-1">
					<div class="lg:block relative hidden h-full bg-ctp-surface2 flex flex-col p-4 rounded-xl box-shadow justify-start items-start">
						<a 
							href="https://github.com/ikz87/ikz87-portfolio"
							class="absolute flex text-lg underline w-full items-center justify-center text-ctp-text flex-row bottom-4 left-1/2 -translate-x-1/2 "
							on:click={close_menu}
						>
							<FontAwesomeIcon icon={faCode} class="text-lg aspect-square px-4 py-2 text-ctp-text"/>
							View source
						</a>
						{#each side_pane_items as item}
							{#if item.title == "~"}
								<a href="/" class="w-full">
									{#if selected_item === "~"}
										<div role="button" class="text-lg w-full p-3 py-0 flex gap-2 flex-row rounded-lg items-center role-button group bg-ctp-green transition-all">
											<FontAwesomeIcon icon={faFolderOpen} class="text-ctp-surface2"/>
												<h2 class="text-ctp-surface2 ">
													~
												</h2>
										</div>
									{:else}
										<div role="button" class="text-lg w-full p-3 py-0 flex gap-2 flex-row rounded-lg items-center role-button group transition-all">
											<FontAwesomeIcon icon={faFolderOpen} class="text-ctp-green group-hover:translate-x-1"/>
												<h2 class="text-ctp-text group-hover:text-ctp-green group-hover:translate-x-1 group-hover:underline">
													~
												</h2>
										</div>
									{/if}
								</a>
							{:else}
								<a href={item.link} class="text-ctp-text group w-full hover:text-ctp-surface2">
									<div class="w-full flex flex-col pl-4">
										{#if selected_item === item.title}
											<div role="button" class="text-lg w-full p-3 py-0 flex gap-2 flex-row rounded-lg items-center role-button group bg-ctp-green transition-all">
												<FontAwesomeIcon icon={item.icon} class="text-ctp-surface2"/>
												<div class="text-ctp-surface2">
													{item.title}
												</div>
											</div>
										{:else}
											<div role="button" class="text-lg w-full p-3 py-0 flex gap-2 flex-row rounded-lg items-center role-button group transition-all">
												<FontAwesomeIcon icon={item.icon} class="text-ctp-green group-hover:text-ctp-green group-hover:translate-x-1"/>
												<div class="text-ctp-text group-hover:underline group-hover:text-ctp-green group-hover:translate-x-1">
													{item.title}
												</div>
											</div>
										{/if}
									</div>
								</a>
							{/if}
						{/each}
					</div>
					<div class="h-full w-full col-span-4 flex flex-col">
						<slot/>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>

