<template>
	<img class="mx-auto" alt="Vue logo" src="../../assets/logo.png" />
	<h1>{{ msg }}</h1>
	HelloWorld
	<p>
		Recommended IDE setup:
		<a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
		+
		<a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
	</p>

	<p>
		<a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a>
		|
		<a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
	</p>

	<button type="button" @click="state.count++">count is: {{ state.count }}</button>
	<p>
		Edit
		<code>components/HelloWorld.vue</code> to test hot module replacement.
	</p>
</template>

<script lang="ts" src="./HelloWorld.vue.ts"></script>

<style scoped>
a {
	color: #42b983;
}
</style>
