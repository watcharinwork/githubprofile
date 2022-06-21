<template>
	<nav>
		<div class="grid grid-cols-4 grid-flow-row-dense gap-4">
			<div class="col-span-2 self-center">
				<div class="flex mx-16 uppercase cursor-default">
					<div class="transition hover:-translate-y-1 hover:scale-150">Watcharin</div>
					<div class="text-left mx-8">Software Developer</div>
				</div>
			</div>
			<div></div>
			<div class="text-right">
				<div class="inline-flex flex-wrap flex-col mx-8 my-2">
					<router-link :to="{ hash: '#about' }" class="hover:text-blue-400 bg-white rounded-none rounded-bl">About</router-link>
					<router-link :to="{ hash: '#education' }" class="hover:text-blue-400 bg-white rounded-none">Education</router-link>
					<router-link :to="{ hash: '#skill' }" class="hover:text-blue-400 bg-white rounded-none">Skill</router-link>
					<router-link :to="{ hash: '#experience' }" class="hover:text-blue-400 bg-white rounded-none rounded-br">Experience</router-link>
				</div>
			</div>
		</div>

		<!-- <div class="m-0 bg-gray-100 flex flex-wrap">
			<div class="top-0 pointer-event-auto cursor-pointer">
				<div class="w-screen grid grid-cols-4">
					<router-link
						:to="{ hash: '#about' }"
						class="hover:bg-blue-100 border-b border-l border-r border-gray-400 border-t-0 p-1 bg-white rounded-none rounded-bl"
						>About</router-link
					>
					<router-link :to="{ hash: '#education' }" class="hover:bg-blue-100 border-b border-r border-gray-400 border-t-0 p-1 bg-white rounded-none"
						>Education</router-link
					>
					<router-link :to="{ hash: '#skill' }" class="hover:bg-blue-100 border-b border-r border-gray-400 border-t-0 p-1 bg-white rounded-none"
						>Skill</router-link
					>
					<router-link
						:to="{ hash: '#experience' }"
						class="hover:bg-blue-100 border-b border-r border-gray-400 border-t-0 p-1 bg-white rounded-none rounded-br"
						>Experience</router-link
					>
				</div>
			</div>
		</div> -->
	</nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	setup() {},
});
</script>
