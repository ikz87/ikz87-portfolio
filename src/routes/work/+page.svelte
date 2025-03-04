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
		"desarrollo-integral.txt":`<span class="text-ctp-flamingo">### Desarrollo Integral (August 2023 - March 2024)</span>
		This financial company had been using a system based 
		on google sheets from the start, but as they grew in 
		size, this proved to be inneficcient. 
		<br>
		My role involved developing a script that automatically 
		scraped data from Google Sheets and converted it into 
		a PostgreSQL database. I also created an API using 
		Python, psycopg2, and Strawberry GraphQL. Finally, I 
		designed and developed a web app with React, Typescript 
		and Tailwind.
		<br>
		Needless to say, this software is private, but on the 
		right are screenshots showing two of several pages that 
		interfaced with the backend to register data (new 
		clients and loans in this case) and the login screen 
		for company staff.`,
		"opti-grow.txt":`<span class="text-ctp-pink">### Opti-Grow (September 2024 - October 2024)</span>
		# <a href="https://www.optigrowinvest.com/#Inicio" class="text-ctp-blue underline">https://www.optigrowinvest.com/</a>
		Opti-Grow is a company that offers agronomic
		consultations. After working as an "IT guy" for 
		it's founder and director Ricardo Navarro, he offered
		to hire me as a freelancer to develop a website for his
		company.
		<br>
		My role in this job was to follow previously stablished
		design ideas and adapt them to a responsive and 
		professional looking website built with Svelte and 
		deployed on an AWS S3 bucket with Cloudfront.`,
		"ecuación-futuro.txt":`<span class="text-ctp-pink">### Ecuación Futuro (April 2024 - July 2024)</span>
		# <a href="https://ecuacionfuturo.org/#Home" class="text-ctp-blue underline">https://ecuacionfuturo.org/</a>
		Founded by Paulina Taboada, this is a non-profit
		organization that aims at raising the level of 
		mathematical proficiency for children in state of 
		vulnerability as an opportunity for human development. 
		As of 2025, they have helped over 300 children to 
		develop their math skills beyond what most children 
		their age know.
		<br>
		In the past, I had helped Paulina as a programming
		tutor, so when they needed a website for Ecuación Futuro,
		her mom was nice enough to give me the opportunity to 
		work for them as a front-end developer.
		<br>
		My role involved designing and developing a Svelte app 
		that could communicate (in both english and spanish) the 
		passion that Paulina and her team have for teaching, and 
		deploying it in an EC2 instance using Nginx for routing. 
		I built the first version of the website in about a month 
		but stayed in contact with Paulina for some time after 
		that to update information as they saw fit.`,

	};

	let tab_images = {
		"desarrollo-integral.txt": [
			{ 
				"url": "/images/di-clients.png",
				"alt": "Screenshot of client registration page for desarrollo integral",
			},
			{ 
				"url": "/images/di-loan.png",
				"alt": "Screenshot of loan processing page for desarrollo integral",
			},
			{ 
				"url": "/images/di-login.png",
				"alt": "Screenshot of login page for desarrollo integral",
			},
		],
		"opti-grow.txt": [
			{ 
				"url": "/images/og-home.png",
				"alt": "Screenshot of Opti-Grow's home page",
			},
			{ 
				"url": "/images/og-about.png",
				"alt": "Screenshot of Opti-Grow's about page",
			},
			{ 
				"url": "/images/og-contact.png",
				"alt": "Screenshot of Opti-Grow's contact info page",
			},
		],
		"ecuación-futuro.txt": [
			{ 
				"url": "/images/ef-home.png",
				"alt": "Screenshot of Ecuación Futuro's home page",
			},
			{ 
				"url": "/images/ef-projects.png",
				"alt": "Screenshot of Ecuación Futuro's projects page",
			},
			{ 
				"url": "/images/ef-volunteers.png",
				"alt": "Screenshot of Ecuación Futuro's volunteers page",
			},
		],
	};


	let selected_tab = "introduction.txt";
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
				class="box-shadow text-center flex items-center justify-center w-72 rounded-t-xl bg-ctp-surface0 p-2 px-4 text-ctp-lavender text-lg font-bold">
				{title}
			</div>
		{:else}
			<div role="button" 
				on:click={() => change_tab(title)}
				class="box-shadow text-center flex items-center justify-center w-72 rounded-t-xl bg-ctp-base p-2 px-4 text-ctp-surface1 text-lg font-bold">
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

