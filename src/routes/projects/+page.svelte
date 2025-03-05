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
		"introduction.txt": `These are projects I've worked on as a hobbyist. They
		are all open source so you can get an idea of the quality
		of the code I write by visiting each repo.
		<br>
		Some of parts of these projects are more coding-adjacent 
		than full on software, but they still showcase my
		skills as a developer.
		<br> 
		I believe that the projects in this section show my 
		experience as a developer more than any professional work
		I've done so far.
		<br>
		Below are some other minor projects that I think deserve 
		an honourable mention:
		- <a href="https://github.com/ikz87/GLWall" class="underline">GLWall</a>: GLSL renderer meant to be used for live and 
		‎ ‎ responsive wallpapers, written in C.
		- <a href="https://github.com/ikz87/picom-shaders" class="underline">Picom shaders</a>: A collection of GLSL shaders meant to be
		‎ ‎ used with picom.`,
		"kzooting.txt":`<span class="text-ctp-flamingo">### The kzooting project</span>
		# <a href="https://github.com/ikz87/https://github.com/ikz87/rpp-osu-keypad" class="text-ctp-blue underline">https://github.com/ikz87/rpp-osu-keypad</a>
		# <a href="https://github.com/ikz87/kzooting-GUI" class="text-ctp-blue underline">https://github.com/ikz87/kzooting-GUI</a>
		The kzooting is a completely DIY analog keypad inspired
		by <a href="https://wooting.io/#Our-keyboards" class="underline">wooting</a> keyboards, and thus, posseses <a href"https://wooting.io/rapid-trigger" class="underline">rapid trigger</a> 
		technology. The project started by modifying MX Reds 
		keyboard switches by attaching a small neodimium magnet
		below the switch stem and glueing a linear hall effect
		sensor below the switch casing.
		<br>
		After some microcontroller programming on a Raspberry Pi
		Pico, the first kzooting prototype was alive and working! 
		<br>
		I proceeded to modify the seven remaining switches and 
		building a whole casing out of materials I had laying 
		around.
		<br>
		With the kzooting complete, I developed (with the help of
		a cousin (ty calito <3)) a GUI desktop client written in
		Python using PyQt5 that allowed me to easily visualize 
		the state of each key and configure all parameters related
		to key activation.
		<br>
		The last thing I worked on for this project was a nice 
		looking key visualizer for when I play <a href="https://osu.ppy.sh/" class="underline">osu!</a> with the device.
		You can also check a full video with a prototype of this
		visualizer <a href="https://www.youtube.com/watch?v=f1oFjeYvJh4" class="underline">here</a>.
		<br>
		I presented this as a final project for my "machines
		and computers" course. If you know spanish, you can check 
		this <a href="/documents/kzooting-document.pdf" class="underline">document</a> explaining every detail about the project.`,
		"tracking.txt":`<span class="text-ctp-pink">### Phone facial tracking</span>
		# <a href="https://github.com/ikz87/phone-facial-tracking" class="text-ctp-blue underline">https://github.com/ikz87/phone-facial-tracking</a>
		This project consisted on a device that could move my phone
		using two servomotors and processing real time video from
		the phone's camera so that it could track faces.
		<br>
		I started by assembling a base with the servomotors that 
		could securely hold my phone in place. With that done, 
		I wrote some code to interface with the microcontroller 
		(a Raspberry Pi Pico) to manually move the servoss so I 
		could test the device. Then came some coding with OpenCV 
		(in Python) and a *lot* of math to calculate the angle 
		needed to move each servomotor so that the tracking would 
		be as precise as possible.
		<br>
		With the project being done, I also built a desktop app 
		with PyQT5 to show general real time information and a 3D
		simulation of the tracking taking place.
		<br>
		I presented this as a final project for my "Control Systems" 
		course. If you know spanish, you can check this <a href="/documents/pft-document.pdf" class="underline">document</a>, 
		where you'll find more information about the project, 
		especially all the math behind it.
		`,
		"yawns.txt":`<span class="text-ctp-mauve">### Yawns: Your Adaptable Widget Notification System</span>
		# <a href="https://github.com/ikz87/yawns" class="text-ctp-blue underline">https://github.com/ikz87/yawns</a>
		Yawns is a notification manager (or daemon) built with PyQt out 
		of the necessity for highly customizable, adaptable 
		notifications.  Why would your notification for a brightness 
		change look the same as your Spotify song change notification? 
		Or even an email one? Yawns offers multiple ways to show desktop 
		notifications depending on the notification title, summary, app 
		name or "yawn type".
		<br>
		Although it's a somewhat unfinished project, It's still fully 
		functional and I use it to this day on my linux installation.`,
		"swizzling.txt":`<span class="text-ctp-sky">### Python vector swizzling</span>
		# <a href="https://github.com/ikz87/python-vector-swizzling" class="text-ctp-blue underline">https://github.com/ikz87/python-vector-swizzling</a>
		# <a href="https://pypi.org/project/vector-swizzling/" class="text-ctp-blue underline">https://pypi.org/project/vector-swizzling</a>
		This Python library provides flexible and intuitive vector 
		manipulation with swizzling capabilities, designed to resemble 
		GLSL vector handling for 2D, 3D, and 4D vectors. Originally built
		for my facial tracking project, I decided to publish this as my 
		first Python package in PyPi.`,
		"tty-cube.txt":`<span class="text-ctp-green">### TTY cube </span>
		# <a href="https://github.com/ikz87/tty-cube" class="text-ctp-blue underline">https://github.com/ikz87/tty-cube</a>
		This C program renders a rotating cube on your TTY via frame
		buffer. The program provides tons of configuration options
		to customize the appearance and behavior of the cube. Even 
		implementing image rendering and (sort of) fragment shaders.
		<br>
		The cube is rendered using basic linear algebra and analytic 
		geometry with a solution I came with while knowing nothing
		about actual rasterization.`,
	};

	let tab_images = {
		"kzooting.txt": [
			{ 
				"url": "/images/kzooting-switch.webp",
				"alt": "Pictures of a modified MX red switch",
			},
			{ 
				"url": "/images/kzooting-prototype.gif",
				"alt": "A GIF of the first kzooting prototype",
			},
			{ 
				"url": "/images/kzooting-casing.webp",
				"alt": "A Picture of the complete kzooting casing",
			},
			{ 
				"url": "/images/kzooting-client.webp",
				"alt": "Screenshot of my desktop with the kzooting GUI client open",
			},
			{ 
				"url": "/images/kzooting-visualizer.gif",
				"alt": "A GIF showcasinf the kzooting key visualizer",
			},
		],
		"tracking.txt": [
			{ 
				"url": "/images/pft-demo.gif",
				"alt": "A GIF showcasing real time facial tracaking",
			},
			{ 
				"url": "/images/pft-base.webp",
				"alt": "Picture of the facial tracking device's base",
			},
			{ 
				"url": "/images/pft-app.webp",
				"alt": "Picture of the facial tracking desktop app",
			},
			{ 
				"url": "/images/pft-math.webp",
				"alt": "Picture of the 3D simulation for the facial tracking app",
			},
		],
		"yawns.txt": [
			{ 
				"url": "/images/yawns-demo.gif",
				"alt": "A GIF demonstrating different types of yawns",
			},
		],
		"tty-cube.txt": [
			{ 
				"url": "/images/tty-cube-demo.gif",
				"alt": "A GIF demonstrating TTY cube runnning",
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
						<div class="text-lg px-3 text-ctp-text hover:bg-ctp-overlay0 transition-all">
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

