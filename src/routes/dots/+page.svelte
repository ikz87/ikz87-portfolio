<script>
	import '../styles.css';
	import "../../app.css";
	import Terminal from "../components/Terminal.svelte"

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


</script>

<Terminal content={ content } 
	tab_images={ tab_images } 
	selected_tab={ selected_tab }
/>
