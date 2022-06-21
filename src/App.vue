<template>
	<!-- <MainPage /> -->
	<Header />
	<router-view />
</template>

<!-- <script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script> -->

<script lang="ts">
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();
import { defineComponent } from "vue";
import { templateRef } from "@vueuse/core";

export default defineComponent({
	name: "App",

	setup() {
		const tempRef = <any>templateRef("page");
		return { tempRef };
	},
});
</script>

<style lang="less">
& {
	@import (css) url("https://fonts.googleapis.com/css2?family=Kanit:wght@300;400&display=swap");
}

#app {
	font-family: "Kanit", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	// margin-top: 60px;
}
html {
	scroll-behavior: smooth;
}
</style>
