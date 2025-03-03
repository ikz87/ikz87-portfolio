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
		"about-me.txt": `
		<span class="text-ctp-mauve">### Introduction</span>
		Hi, my name is Isaac Arcia and I'm an electronic engineering (about to graduate) student and self taught developer.
		During the pandemic in 2020, in my first year of college, I attended the in-person course <a href="https://code-fu.net.ni/" class="underline">CS50x.ni</a>.
		Having completed the course successfully (see my <a href="documents/CS50x through CS50x.ni.pdf" class="underline">certificate</a>) I ended up developing a passion for anything coding related and thus
		have gathered tons of experience, but mostly from hobby-ish projects.
		My actual work experience comes from as little as (almost) two years ago when I worked along a cousin of mine for a local 
		financial institution, developing a new system for managing client loans among other things.
		Since then, I've been working on and off as a freelancer for other local companies. Now, as I'm about to graduate, I'm looking for
		a more stable, remote job as a Full-stack developer.
		If you like what you see here and have an open position at your company, I'd love to hear from you.
		<br>
		<span class="text-ctp-pink">### Skills</span>
		I know how to use the following tools:
		- Web Dev: Svelte, React, TypeScript, Tailwind, PostgreSQL, AWS, Nginx
		- Backend: Python (Flask, Strawberry GraphQL, Psycopg), PostgreSQL
		- Systems & Tools: Linux, Bash, SSH, Git, Neovim
		But beyond that, by far my greatest skill is my adaptability. I'm a fast, self-taught learner. If I need to learn something new
		for a job, I'd probably get it down in a day and start working right away. That's in fact how I've learned everything I know.
		<br>
		<span class="text-ctp-flamingo">### Work experience</span>
		- Desarrollo Integral, Full-stack Web developer (August 2023 - March 2024)
		- Ecuación Futuro, Front-end Web developer (April 2024 - July 2024)
		- Opti-Grow Consulting Group, Front-end Web developer (September 2024 - October 2024)
		Please refer to my <a class="underline" href="/documents/Isaac%20Arcia%20resume.pdf">resume</a> for a more detailed breakdown of my roles in the mentioned positions.
		`,

	};

	let selected_tab = "about-me.txt";
	let lines = content["about-me.txt"].split("\n");

	function change_tab(tab_title) {
		selected_tab = tab_title;
		let new_lines = content[tab_title].split("\n");
		lines = new_lines;	
	}
</script>
<div class="flex w-full bg-ctp-crust">
	{#each Object.entries(content) as [title, paragraph]}
		<div role="button" 
			class="box-shadow text-center flex items-center justify-center w-72 rounded-t-xl bg-ctp-surface0 p-2 px-8 text-ctp-lavender text-lg font-bold">
			{title}
		</div>
	{/each}
</div>
<div class="bg-ctp-surface0 p-4 rounded-b-xl box-shadow rounded-tr-xl h-full w-full flex overflow-hidden">
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

<style>
	.ascii {
		font-family: monospace;
		white-space: pre;
	}
</style>

