<script>

	import CaretLeftFill from "svelte-bootstrap-icons/lib/CaretLeftFill.svelte";
	import CaretRightFill from "svelte-bootstrap-icons/lib/CaretRightFill.svelte";

	let is_menu_open = false;
	
	function toggleMenu() {
		is_menu_open = is_menu_open? false : true 
		const menu = document.getElementById("sidebar");
		if (is_menu_open) {
			menu.classList.add("sidebar-open");
			menu.classList.remove("sidebar-close");
			menu.classList.remove('opacity-40');
		} else {
			menu.classList.remove("sidebar-open");
			menu.classList.add("sidebar-close");
			menu.classList.add('opacity-40');
		}
	}

	function goToSection(section) {
		const curtain = document.getElementById('curtain');
		curtain.classList.remove('curtain-open');
		curtain.classList.add('curtain-close');
		toggleMenu();
		// ^ Not sure if that's good 
		setTimeout(() => {
			window.location.href = section;
			curtain.classList.add('curtain-open');
			curtain.classList.remove('curtain-close');
		}, 600)
	}


</script>

<div id="curtain" class="curtain-close curtain-open bg-sky-900 border-l-8 border-orange-500 fixed top-0 left-0 w-full h-full z-30"></div>
<div id="sidebar" class="sidebar-open sidebar-close translate-x-[-65%] flex flex-cols-2 items-center justify-center my-button h-dvh fixed left-0 min-h-0 z-40 transition hover:opacity-100 opacity-40">
	<div class="hover:blur-none h-dvh text-xs font-bold flex flex-col justify-center bg-gray-200 opacity-100 p-4 w-16 md:w-24 text-center items-center min-h-0 border-r-4 border-orange-500">
		<div class="overflow-y-auto h-dvh overflow-x-hidden align-middle box-border p-3 flex flex-col justify-center items-center">
			{#each ['Main', 'Mission', 'Projects', 'Volunteers', 'Fundraising', 'Stories', 'Articles', 'Gallery', 'Founder'] as name}
				<button class="my-2 hover:scale-110 my-button flex-col transition hover:bg-orange-400 hover:text-orange-200 border-2 rounded border-gray-600 text-gray-600 border aspect-square w-12 md:w-full flex justify-center text-center items-center p-1" 
						on:click={() => goToSection(`#${name}`)}>
						<div class="scale-[0.7] spanish-text md:scale-100 md:text-xs">
							{name}
						</div>
						<div class="scale-[0.7] english-text hidden md:scale-100 md:text-xs">
							{name}
						</div>
				</button>
			{/each}
		</div>
	</div>
	<button on:click={toggleMenu} class="bg-gray-200 md:px-2 w-full border-r-4 border-y-4 border-orange-500 h-24 rounded-r-xl translate-x-[-4px] z-50">
		{#if is_menu_open}
			<CaretLeftFill width="32"/> 
		{:else}
			<CaretRightFill width="32"/> 
		{/if}

	</button>
</div>
