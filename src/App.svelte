<script lang="ts">
  import Tailwind from "./components/0-quarks/Tailwind.svelte";
	let name: String = "João";
</script>

<Tailwind />

<main>
	<div class="bg-gray-200 px-4 py-2 rounded">Hello {name}!</div>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>