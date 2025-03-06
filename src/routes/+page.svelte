<script>
	import './styles.css';
	import "../app.css";
	import Terminal from "./components/Terminal.svelte"

	let content = { "home.txt": ` _    _      _                           
| |  | |    | |                          
| |  | | ___| | ___ ___  _ __ ___   ___       
| |/\\| |/ _ \\ |/ __/ _ \\| '_ ' _ \\ / _ \\   /\\/| 
\\  /\\  /  __/ | (_| (_) | | | | | |  __/  |/\\/    
 \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___|      
================================================
Use the side pane to navigate through my stuff
Have fun :)`,};

	let tab_images = {
	};
	let selected_tab = "home.txt";
</script>


<Terminal content={ content } 
	tab_images={ tab_images } 
	selected_tab={ selected_tab } 
	preserve_white_space={ true } 
/>
