<template>
	<HelloWorld v-if="data.pages == 1" msg="Hello Vue 3 + Vite" />
	<div v-if="data.pages == 2">Page2</div>
	<PageDemo v-if="data.pages == 3" />
	<div class="m-4">
		<button v-if="data.showPage" class="btn-besic" @click="backPage()">Back</button>
		<button v-if="data.showPage" class="btn-besic" @click="nextPage()">Next</button>
	</div>
</template>

<style lang="less"></style>

<script lang="ts">
import { reactive } from "vue";
export default {
	setup() {
		const data = reactive({
			pages: 3,
			showPage: false,
		});

		const nextPage = () => {
			const pageMax = 3;
			if (data.pages >= pageMax) data.pages = pageMax;
			else data.pages++;
		};

		const backPage = () => {
			const pageMin = 1;
			if (data.pages <= pageMin) data.pages = pageMin;
			else data.pages--;
		};

		return { data, nextPage, backPage };
	},
};
</script>
