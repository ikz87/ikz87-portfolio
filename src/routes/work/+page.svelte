<script>
	import '../styles.css';
	import "../../app.css";
	import Terminal from "../components/Terminal.svelte"

		let content = {
		"intro.txt": `Here you'll find all the jobs I've worked on.
		Some of the things I've developed are private, but I'll include all the details I can.`,
		"d-integral.txt":`<span class="text-ctp-flamingo">### Desarrollo Integral (August 2023 - March 2024)</span>
		<br>
		<br>
		This financial company had been using a system based 
		on google sheets from the start, but as they grew in 
		size, this proved to be inneficcient. 
		<br>
		<br>
		My role involved developing a script that automatically 
		scraped data from Google Sheets and converted it into 
		a PostgreSQL database. I also created an API using 
		Python, psycopg2, and Strawberry GraphQL. Finally, I 
		designed and developed a web app with React, Typescript 
		and Tailwind.
		<br>
		<br>
		Needless to say, this software is private, but on the 
		right are screenshots showing two of several pages that 
		interfaced with the backend to register data (new 
		clients and loans in this case) and the login screen 
		for company staff.`,
		"opti-grow.txt":`<span class="text-ctp-pink">### Opti-Grow (September 2024 - October 2024)</span>
		<br>
		# <a href="https://www.optigrowinvest.com/#Inicio" class="text-ctp-blue underline">https://www.optigrowinvest.com/</a>
		<br>
		<br>
		Opti-Grow is a company that offers agronomic
		consultations. After working as an "IT guy" for 
		it's founder and director Ricardo Navarro, he offered
		to hire me as a freelancer to develop a website for his
		company.
		<br>
		<br>
		My role in this job was to follow previously stablished
		design ideas and adapt them to a responsive and 
		professional looking website built with Svelte and 
		deployed on an AWS S3 bucket with Cloudfront.`,
		"e-futuro.txt":`<span class="text-ctp-mauve">### Ecuación Futuro (April 2024 - July 2024)</span>
		<br>
		# <a href="https://ecuacionfuturo.org/#Home" class="text-ctp-blue underline">https://ecuacionfuturo.org/</a>
		<br>
		<br>
		Founded by Paulina Taboada, this is a non-profit
		organization that aims at raising the level of 
		mathematical proficiency for children in state of 
		vulnerability as an opportunity for human development. 
		As of 2025, they have helped over 300 children to 
		develop their math skills beyond what most children 
		their age know.
		<br>
		<br>
		In the past, I had helped Paulina as a programming
		tutor, so when they needed a website for Ecuación Futuro,
		her mom was nice enough to give me the opportunity to 
		work for them as a front-end developer.
		<br>
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
		"d-integral.txt": [
			{ 
				"url": "/images/di-clients.webp",
				"alt": "Screenshot of client registration page for desarrollo integral",
			},
			{ 
				"url": "/images/di-loan.webp",
				"alt": "Screenshot of loan processing page for desarrollo integral",
			},
			{ 
				"url": "/images/di-login.webp",
				"alt": "Screenshot of login page for desarrollo integral",
			},
		],
		"opti-grow.txt": [
			{ 
				"url": "/images/og-home.webp",
				"alt": "Screenshot of Opti-Grow's home page",
			},
			{ 
				"url": "/images/og-about.webp",
				"alt": "Screenshot of Opti-Grow's about page",
			},
			{ 
				"url": "/images/og-contact.webp",
				"alt": "Screenshot of Opti-Grow's contact info page",
			},
		],
		"e-futuro.txt": [
			{ 
				"url": "/images/ef-home.webp",
				"alt": "Screenshot of Ecuación Futuro's home page",
			},
			{ 
				"url": "/images/ef-projects.webp",
				"alt": "Screenshot of Ecuación Futuro's projects page",
			},
			{ 
				"url": "/images/ef-volunteers.webp",
				"alt": "Screenshot of Ecuación Futuro's volunteers page",
			},
		],
	};


	let selected_tab = "intro.txt";


</script>

<Terminal content={ content } 
	tab_images={ tab_images } 
	selected_tab={ selected_tab }
/>
