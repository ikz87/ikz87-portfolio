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
		"about-me.txt": `<span class="text-ctp-mauve">### Introduction</span>
		Hi, my name is Isaac Arcia and I'm an electronic engineering (about to graduate) 
		student and self taught developer. During the pandemic in 2020, in my first year 
		of college, I attended the in-person course <a href="https://code-fu.net.ni/" class="underline">CS50x.ni</a>. Having completed the course 
		successfully (see my <a href="documents/CS50x through CS50x.ni.pdf" class="underline">certificate</a>) I ended up developing a passion for anything 
		coding related and thus have gathered tons of experience, but mostly from 
		hobby-ish projects.
		<br>
		My actual work experience comes from as little as (almost) two years ago when I 
		worked along a cousin of mine for a local financial institution, developing a new 
		system for managing client loans among other things.
		Since then, I've been working on and off as a freelancer for other local 
		companies. Now, as I'm about to graduate, I'm looking for a more stable, remote 
		job as a Full-stack developer. If you like what you see here and have an open 
		position at your company, I'd love to hear from you.
		<br>
		<span class="text-ctp-pink">### Skills</span>
		I know how to use the following tools:
		- Web Dev: Svelte, React, TypeScript, Tailwind, PostgreSQL, AWS, Nginx
		- Backend: Python (Flask, Strawberry GraphQL, Psycopg), PostgreSQL
		- Systems & Tools: Linux, Bash, SSH, Git, Neovim
		<br>
		But beyond that, by far my greatest skill is my adaptability. I'm a fast, 
		self-taught learner. If I need to learn something new for a job, I'd probably get 
		it down in a day and start working right away. That's in fact how I've learned 
		everything I know.
		<br>
		<span class="text-ctp-flamingo">### Work experience</span>
		- Desarrollo Integral, Full-stack developer (August 2023 - March 2024)
		- Ecuación Futuro, Front-end developer (April 2024 - July 2024)
		- Opti-Grow Consulting Group, Front-end developer (September 2024 - October 2024)
		<br>
		Please refer to my <a class="underline" href="/documents/Isaac%20Arcia%20resume.pdf">resume</a> for a more detailed breakdown of my roles in the 
		mentioned positions.`,

	};

	let tab_images = {
	};


	let selected_tab = "about-me.txt";
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

