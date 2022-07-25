<script setup>
import { ref } from "vue";
import Toggle from "../../Toggle.vue";
import RadioDemo from "./RadioDemo.vue";
const labelLeft = "TRANSCRIBE LIVE";
const labelRight = "TRANSCRIBE PRE-RECORDED";
let checkedValue = ref(false); // toggle v-model
let pickedValue = ref(""); // radio button v-model
const items = [
	{
		id: 0,
		title: "NASA: First All Female Space Walk",
		text: "Poor audio quality, background noise, lengthy audio, multiple speakers, female speakers",
		code: "code NASA",
	},
	{
		id: 1,
		title: "Podcast: Deep Learning’s Effect on Science",
		text: "Multiple speakers, lengthy audio",
		code: "code Podcast",
	},
	{
		id: 2,
		title: "Call Center: Upgrade Service",
		text: "Multiple speakers, Multiple Genders, lengthy audio",
		code: "code Call Center",
	},
];
</script>

<template>
	<div class="container w-full">
		<div class="label">
			<span class="left-label" :class="{ selected: !checkedValue }">{{ labelLeft }}</span>
			<Toggle v-model="checkedValue" @input="checkedValue = $event.target.checked" />
			<span class="right-label" :class="{ selected: checkedValue }">{{ labelRight }}</span>
		</div>
		<div v-if="!checkedValue">
			<h3>See real-time transcription with live radio.</h3>
			<p>Click the button to transcribe live.</p>
			<div class="mic-buttons"><button>mic</button><button>volumebars</button></div>
			<div class="grid-container">
				<div class="grid-div">Transcribe your voice in English or select another language.</div>
				<div class="grid-div">test 2</div>
			</div>
			<div class="mt-10 flex justify-center">
				<a href="https://console.deepgram.com/signup" rel="noopener noreferrer" class="button button--primary button--small mb-10">Transcribe More Free</a>
			</div>
		</div>
		<div v-else>
			<h3>Transcribe real-world audio.</h3>
			<p>See how Deepgram excels at tough, conversational audio files.</p>
			<p>Select a file below.</p>
			<div class="grid-container">
				<div>
					<RadioDemo :items="items" v-model="pickedValue" @input="pickedValue = $event.target.value" />
				</div>
				<div class="grid-div">{{ pickedValue }}</div>
			</div>
			<div class="mt-10 flex justify-center">
				<a href="https://console.deepgram.com/signup" rel="noopener noreferrer" class="button button--primary button--small mb-10">Try With Your Own Files</a>
			</div>
		</div>
	</div>
</template>

<style scoped>
h3 {
	@apply text-3xl font-bold;
	@apply mb-6;
}

h3 + p {
	@apply font-semibold;
	@apply mb-8;
}

h3 + p + p {
	@apply mb-6;
}

img {
	@apply relative;
	@apply w-4/12;
	@apply relative top-40 -left-56 z-0;
}

.demo-transcription {
	@apply px-8 lg:px-16 xl:px-36;
	@apply mt-8 -mb-40 md:-mb-52 lg:-mb-56 2xl:-mb-80;
	@apply relative -top-52 md:-top-64 lg:-top-72 xl:-top-80 2xl:-top-96;
}

.container {
	@apply flex flex-col;
	@apply px-8 md:px-16 lg:px-24 xl:px-28;
	@apply relative z-10;
	backdrop-filter: blur(10px);
	background-color: rgba(79, 98, 120, 0.3);
}

.label {
	@apply mb-14 mt-10 flex justify-center;
	@apply text-lg font-bold;
}

.left-label {
	@apply flex justify-end;
	@apply px-4;
}

.right-label {
	@apply pl-4 pr-10 md:px-4;
}

.left-label,
.right-label {
	@apply text-stone;
	/* @apply px-4; */
	@apply w-3/6;
}

.selected {
	@apply text-white;
}

.mic-buttons {
	@apply mb-6 flex w-3/6 justify-between pr-6;
}
.grid-container {
	@apply grid grid-cols-1 gap-6 lg:grid-cols-2;
}

.grid-div {
	@apply h-80 border-2 border-white;
	@apply px-3 py-6;
	@apply text-stone text-lg;
}
</style>
