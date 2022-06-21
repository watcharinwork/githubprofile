<template>
	<div class="w-auto">
		<!-- START PAGE -->
		<div id="start" class="h-screen m-2 bg-gray-100 flex flex-wrap">
			<div class="w-full self-center flex flex-wrap items-end justify-center">
				<div class="w-full lg:text-2xl text-md mb-4">Hello World.</div>
				<div class="w-full self-center flex flex-wrap items-end justify-center">
					<div class="text-xs lg:text-xl text-left ml-1">printf( "</div>
					<div class="text-2xl lg:text-6xl text-yellow-600 -mb-1 self-center mx-0 my-0">Watcharin&nbsp;Wiangwised</div>
					<div class="text-xs lg:text-xl text-right mr-1">")</div>
				</div>
				<div class="w-full lg:text-2xl text-md mt-4 mb-8 lg:mb-1">|&nbsp;Full-Stack Developer&nbsp;|</div>
				<div class="w-full lg:block flex flex-col lg:flex-row lg:text-2xl text-md lg:mt-4">
					<button class="btn-besic" @click="gotoLocation(1)">About</button>
					<button class="btn-besic" @click="gotoLocation(0)">Education</button>
					<button class="btn-besic" @click="gotoLocation(2)">Skill</button>
					<button class="btn-besic" @click="gotoLocation(3)">Experience</button>
					<!-- <a class="btn-besic" href="#education">Education</a> -->
					<!-- <router-link class="btn-besic" :to="{name:'education'}">Education</router-link> -->
				</div>
			</div>
		</div>

		<!-- ABOUT PAGE -->
		<div ref="about" class="h-screen m-2 bg-gray-100 flex flex-wrap">
			<div class="lg:container lg:mx-auto flex flex-wrap lg:flex-nowrap gap-8 w-full mx-4 my-auto">
				<div class="w-full lg:w-1/5 h-min lg:flex lg:mt-16">
					<img class="mx-auto w-2/3 lg:w-full lg:my-auto rounded-full" src="../../assets/profile.jpg" />
				</div>
				<div class="flex-1 w-full lg:my-auto">
					<div class="text-2xl underline lg:text-4xl mb-8 text-red-600">About Me</div>
					<div class="w-3/4 lg:w-full mx-auto text-m lg:text-xl text-center mb-8 italic">
						"I have 2 years experience working with VueJs, NuxtJs, Golang, HTML, mySQL, have some skills with Kotlin and Python. And now practice with
						ViteJS. I'm not afraid to learn something new."
					</div>
					<div class="text-m lg:text-xl text-left ml-8">Name : Watcharin Wiangwised</div>
					<div class="text-m lg:text-xl text-left ml-8">Nickname : Pai</div>
					<div class="text-m lg:text-xl text-left ml-8">
						Address
						<span
							><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline pb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</span>
						: 81 Phibunsongkhram R. Bangkhen Nonthaburi 11000
					</div>
					<div class="text-m lg:text-xl text-left ml-8">
						Date of Birth<span
							><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline pb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
								/></svg></span
						>: 3 February 1996
					</div>
					<div class="text-m lg:text-xl text-left ml-8">
						Email
						<span
							><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline pb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/></svg></span
						>: <a class="hover:text-blue-500" href="mailto:watcharin.ww@hotmail.com">watcharin.ww@hotmail.com</a>
					</div>
					<div class="text-m lg:text-xl text-left ml-8">
						Call
						<span
							><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline pb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
								/></svg
						></span>
						: <a href="tel:+66819746035">(+66)819746035</a>
					</div>
				</div>
			</div>
		</div>

		<!-- EDUCATION PAGE -->
		<div ref="education" class="h-screen m-2 bg-gray-100 flex flex-wrap">
			<div class="lg:container lg:mx-auto w-full self-center flex flex-wrap items-end justify-center">
				<div class="w-full underline lg:text-4xl text-2xl mb-4 text-yellow-500">Education</div>
				<div class="w-full lg:text-xl text-base mb-4">Bachelor's Degree Computer Technology</div>
				<div class="w-full lg:text-xl text-base mb-4">Department of Computer Education</div>
				<div class="w-full lg:text-xl text-base mb-4">King’ Mongkut’s University of Technology North Bangkok</div>
				<div class="w-full lg:text-2xl text-xl mb-4">2015 - 2019</div>
			</div>
		</div>

		<!-- SKILL PAGE -->
		<div ref="skill" class="h-screen m-2 bg-gray-100 flex flex-wrap">
			<div class="lg:container lg:mx-auto w-full self-center flex flex-wrap items-end justify-center">
				<div class="w-full underline lg:text-4xl text-2xl mb-4 text-indigo-500">Skills</div>
				<div class="w-full lg:text-xl text-base mb-4">VueJS (Javascript/Typescript)</div>
				<div class="w-full lg:text-xl text-base mb-4">HTML/CSS/LESS</div>
				<div class="w-full lg:text-xl text-base mb-4">Golang</div>
				<div class="w-full lg:text-xl text-base mb-4">mySQL</div>
				<div class="w-full lg:text-xl text-base mb-4">Kotlin</div>
				<div class="w-full lg:text-xl text-base mb-4">Python</div>
			</div>
		</div>

		<!-- EXPERIENCE PAGE -->
		<div ref="experience" class="h-screen m-2 bg-gray-100 flex flex-wrap">
			<div class="lg:container lg:mx-auto w-full self-center flex flex-wrap items-end justify-center">
				<div class="w-full underline lg:text-4xl text-2xl mb-4 text-green-500">Experience</div>
				<div class="w-full lg:text-xl text-base mb-4">Full-stack Developer @ Qube Digital Content : 2019 – Present</div>

				<ul class="list-disc list-inside text-left">
					<li>Connect API Promptpay Payment from SCB.</li>
					<li>Connect API place order on SCG Express</li>
					<li>Develop front web page ex.github pages</li>
					<li>Develop back-end and connect to database via MySQL</li>
				</ul>
			</div>
		</div>
	</div>
	<transition
		enter-active-class="transform transition ease-in-out duration-200"
		enter-from-class="-translate-y-full"
		enter-to-class="translate-y-0"
		leave-active-class="transform transition ease-in-out duration-200"
		leave-from-class="translate-y-0"
		leave-to-class="-translate-y-full"
	>
		<div v-if="y > (data.tamplateHeight * 80) / 100" class="fixed top-0 pointer-event-auto cursor-pointer">
			<div class="w-screen grid grid-cols-4">
				<div
					@click="gotoLocation(1)"
					class="hover:bg-blue-100 border-b border-l border-r border-gray-400 border-t-0 p-1 bg-white rounded-none rounded-bl"
				>
					About
				</div>
				<div @click="gotoLocation(0)" class="hover:bg-blue-100 border-b border-r border-gray-400 border-t-0 p-1 bg-white rounded-none">Education</div>
				<div @click="gotoLocation(2)" class="hover:bg-blue-100 border-b border-r border-gray-400 border-t-0 p-1 bg-white rounded-none">Skill</div>
				<div @click="gotoLocation(3)" class="hover:bg-blue-100 border-b border-r border-gray-400 border-t-0 p-1 bg-white rounded-none rounded-br">
					Experience
				</div>
			</div>
		</div>
	</transition>

	<transition
		enter-active-class="opacity transition ease-linear duration-200 "
		enter-from-class="opacity-0"
		enter-to-class="opacity-100"
		leave-active-class="opacity transition ease-linear duration-100 "
		leave-from-class="opacity-100"
		leave-to-class="opacity-0"
	>
		<div
			v-if="y > 50"
			@click="scrollTop()"
			class="fixed right-4 bottom-4 p-2 border bg-white border-solid border-gray-200 rounded-full pointer-events-auto cursor-pointer"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l4-4m0 0l4 4m-4-4v18" />
			</svg>
		</div>
	</transition>
</template>

<script lang="ts">
import { reactive, onMounted, onUnmounted, defineComponent } from "vue";
import { templateRef, useWindowScroll } from "@vueuse/core";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
	setup() {
		const data = reactive({
			text: "Hello World",
			stillScrolling: false,
			scrollingTimestamp: 0,
			tamplateHeight: 0,
		});

		const position = ["#education", "#about", "#skill", "#experience"];

		const tempRef = [<any>templateRef("education"), <any>templateRef("about"), <any>templateRef("skill"), <any>templateRef("experience")];
		const route = useRoute();
		const router = useRouter();

		const gotoLocation = (index: number) => {
			if (tempRef[index] && tempRef[index].value) {
				window.scrollTo({
					left: 0,
					top: tempRef[index].value.offsetTop,
					behavior: "smooth",
				});
			}
		};

		/* const gotoAbout = () => {
			const index = 1;

			if (tempRef[index] && tempRef[index].value) {
				window.scrollTo({
					left: 0,
					top: tempRef[index].value.offsetTop,
					behavior: "smooth",
				});
			}
		};

		const gotoSkill = () => {
			const index = 2;

			if (tempRef[index] && tempRef[index].value) {
				window.scrollTo({
					left: 0,
					top: tempRef[index].value.offsetTop,
					behavior: "smooth",
				});
			}
		}; */

		const scrollTop = () => {
			window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
		};

		const setTag = () => {
			const pos = window.scrollY;

			if (pos >= tempRef[3].value.offsetTop) {
				router.replace({ hash: position[3] });
			} else if (pos >= tempRef[2].value.offsetTop) {
				router.replace({ hash: position[2] });
			} else if (pos >= tempRef[0].value.offsetTop) {
				router.replace({ hash: position[0] });
			} else if (pos >= tempRef[1].value.offsetTop) {
				router.replace({ hash: position[1] });
			} else if (pos < tempRef[0].value.offsetTop) {
				router.replace({ hash: "" });
			}
		};

		const scrolling = () => {
			data.stillScrolling = true;
			data.scrollingTimestamp = Date.now();

			setTimeout(() => {
				if (Date.now() - data.scrollingTimestamp > 200) {
					if (!data.stillScrolling) {
						return;
					}
					data.stillScrolling = false;

					setTag();
				}
			}, 300);
		};

		const movePosition = () => {
			switch (route.hash) {
				case position[0]:
					return gotoLocation(0);
				case position[1]:
					return gotoLocation(1);
				case position[2]:
					return gotoLocation(2);
				default:
					return;
			}
		};

		onMounted(() => {
			movePosition();
			data.tamplateHeight = tempRef[0].value.scrollHeight;
			window.addEventListener("scroll", scrolling);
		});

		onUnmounted(() => {
			window.removeEventListener("scroll", scrolling);
		});

		const { _, y } = useWindowScroll();

		return { data, gotoLocation, scrollTop, y, position };
	},
});
</script>
