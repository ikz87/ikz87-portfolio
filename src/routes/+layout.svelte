<script>
	import './styles.css';
	import "../app.css";
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
	let selected_item = "~";

	
	import { page } from "$app/stores";

	
	$: {
		const currentPath = $page.url.pathname;
		const matchedItem = side_pane_items.find(item => item.link === currentPath);
		if (matchedItem) {
			selected_item = matchedItem.title;
		}
	}

</script>

<div class="app">
	<main>
		<div class="h-dvh w-full bg-ctp-crust p-8">
			<div class="flex flex-col h-full gap-8 w-full">
				<div class="grid grid-cols-2 p-4 px-6 rounded-xl box-shadow bg-ctp-surface1">
					<div class="text-2xl h-full flex flex-row gap-4 items-center justify-start">
						<h1 class="text-2xl text-ctp-blue font-bold">
							ikz87's Portfolio
						</h1>
						<div class="text-ctp-text font-bold">
							|
						</div>
						<div class="text-ctp-sky font-bold">
							Contact me at
							<a class="underline" href="mailto:i.arcia135@gmail.com">i.arcia135@gmail.com</a>
						</div>
					</div>
					<div class="text-4xl h-full flex flex-row gap-4 items-center justify-end">
						<div class="text-2xl text-ctp-red font-bold">
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
					</div>
				</div>
				<div class="h-[calc(100vh-170px)] bg-ctp-crust w-full grid grid-cols-6 gap-8 grid-rows-1">
					<div class="h-full bg-ctp-surface2 flex flex-col p-4 rounded-xl box-shadow justify-start items-start">
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
					<div class="h-full w-full col-span-5 flex flex-col">
						<slot/>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>

