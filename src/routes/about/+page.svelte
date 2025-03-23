<script>
	import '../styles.css';
	import "../../app.css";
	import Terminal from "../components/Terminal.svelte"

		let content = {
		"about-me.txt": `<span class="text-ctp-mauve">### Introduction</span>
		<br>
		Hi, my name is Isaac Arcia and I'm an electronic engineering (about to graduate) 
		student and self taught developer. During the pandemic in 2020, in my first year 
		of college, I attended the in-person course <a href="https://code-fu.net.ni/" class="underline">CS50x.ni</a>. Having completed the course 
		successfully (see my <a href="documents/CS50x through CS50x.ni.pdf" class="underline">certificate</a>) I ended up developing a passion for anything 
		coding related and thus have gathered tons of experience, but mostly from 
		hobby-ish projects.
		<br>
		<br>
		My actual work experience comes from as little as (almost) two years ago when I 
		worked along a cousin of mine for a local financial institution, developing a new 
		system for managing client loans among other things.
		Since then, I've been working on and off as a freelancer for other local 
		companies. Now, as I'm about to graduate, I'm looking for a more stable, remote 
		job as a Full-stack developer. If you like what you see here and have an open 
		position at your company, I'd love to hear from you.
		<br>
		<br>
		<span class="text-ctp-pink">### Skills</span>
		<br>
		I know how to use the following tools:
		<br>
		- Web Dev: Svelte, React, TypeScript, Tailwind, AWS
		<br>
		- Backend: Python (Flask, Strawberry GraphQL, Psycopg), PostgreSQL, Nginx
		<br>
		- Systems & Tools: Linux, Bash, SSH, Git, Neovim
		<br>
		<br>
		But beyond that, by far my greatest skill is my adaptability. I'm a fast, 
		self-taught learner. If I need to learn something new for a job, I'd probably get 
		it down in a day and start working right away. That's in fact how I've learned 
		everything I know.
		<br>
		<br>
		<span class="text-ctp-flamingo">### Work experience</span>
		<br>
		- Desarrollo Integral, Full-stack developer (August 2023 - March 2024)
		<br>
		- Ecuación Futuro, Front-end developer (April 2024 - July 2024)
		<br>
		- Opti-Grow Consulting Group, Front-end developer (September 2024 - October 2024)
		<br>
		<br>
		Please refer to my <a class="underline" href="/documents/Isaac%20Arcia%20resume.pdf">resume</a> for a more detailed breakdown of my roles in the 
		mentioned positions.`,

	};

	let tab_images = {
	};


	let selected_tab = "about-me.txt";
</script>

<Terminal content={ content } 
	tab_images={ tab_images } 
	selected_tab={ selected_tab }
/>
