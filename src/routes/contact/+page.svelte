<script>
	import '../styles.css';
	import "../../app.css";
	import Terminal from "../components/Terminal.svelte"

	let content = {
"contact.txt": `<span class="text-ctp-mauve">### Contact info</span>
<br>
|‎ ‎ Field‎ ‎ |‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Value‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ |
<br>
|‎ ‎ ‎ ---‎ ‎ ‎ |‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ---‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎|
<br>
| ‎ E-mail | ‎ <a href="mailto:i.arcia135@gmail.com" class="underline">i.arcia135@gmail.com</a>  |
<br>
| ‎ Phone ‎ | ‎ ‎ ‎ <a href="tel:+50577046930" class="underline">+505 7704 56930</a> ‎ ‎ ‎ |
<br>
<br>
My phone is reachable on both Whatsapp and Telegram.`,

	};

	let tab_images = {
	};


	let selected_tab = "contact.txt";
</script>

<Terminal content={ content } 
	tab_images={ tab_images } 
	selected_tab={ selected_tab }
/>
