<script>
	import './styles.css';
	import "../app.css";
	import Terminal from "./components/Terminal.svelte"


	let ascii_art =	`
 \\    / _  |  _  _  ._ _   _  /\\/      
	<br>
  \\/\\/ (/_ | (_ (_) | | | (/_         
	<br>
=================================`

	let ascii_lg_art = `
 _    _      _
<br>
| |  | |    | |                          
<br>
| |  | | ___| | ___ ___  _ __ ___   ___       
<br>
| |/\\| |/ _ \\ |/ __/ _ \\| '_ ' _ \\ / _ \\   /\\/| 
<br>
\\  /\\  /  __/ | (_| (_) | | | | | |  __/  |/\\/    
<br>
 \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___|      
<br>
===============================================
<br>
	`;
	let text = `
<br>
Use the side menu to navigate through my stuff. 
<br>
Have fun :)`;
	let content_lg = {"home.txt": ascii_lg_art.replace(/ /g, "‎ ") + text,};
	let content = {"home.txt": ascii_art.replace(/ /g, "‎ ") + text,};

	let tab_images = {
	};
	let selected_tab = "home.txt";
</script>


<Terminal content={ content } 
	tab_images={ tab_images } 
	selected_tab={ selected_tab } 
/>
