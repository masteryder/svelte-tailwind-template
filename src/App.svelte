<script lang="ts">
  import Tailwind from "./components/0-quarks/Tailwind.svelte";
	export let name: String;
</script>

<Tailwind />

<main class="text-center p-4 my-0	mx-auto max-w-lg">
	<div class="bg-gray-200 px-4 py-2 rounded text-xl">Hello {name}!</div>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<p>Get started with <a href="https://tailwindcss.com/docs">Tailwindcss</a></p>
</main>

<style>
	a {
		@apply text-highlight;
	}
</style>