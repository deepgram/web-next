<script setup>
import { ref } from "vue";
import ToggleTwo from "./ToggleTwo.vue";
import RadioDemo from "../RadioDemo.vue";
// const labelLeft = "TRANSCRIBE LIVE";
// const labelRight = "TRANSCRIBE PRE-RECORDED";
let checkedValue = ref("0"); // toggle v-model
let pickedValue = ref(""); // radio button v-model
const demoItems = [
	{
		id: 0,
		title: "Real-time transcription",
		details: "Got live audio? Get real-time transcription that’s actually in “real time” with <300 millisecond latency. Click the mic and  give it a try.",
		buttonText: "Transcribe More Free",
	},
	{
		id: 1,
		title: "Pre-recorded transcription",
		details: "Accurately transcribe the toughest audio blazingly fast: just 30 seconds to transcribe an hour. Select a file to try it.",
		buttonText: "Try Free With Your Own Audio",
	},
];
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
	<section class="demo-transcription w-full">
		<div class="grid grid-cols-1 lg:grid-cols-4">
			<div class="col-span-1">
				<ToggleTwo :demoItems="demoItems" v-model="checkedValue" @input="checkedValue = $event.target.value" />
			</div>
			<div class="col-span-3">
				<div class="container mx-0 lg:mx-12">
					<div v-if="checkedValue === '0'">
						<div class="mic-buttons"><button>mic</button><button>volumebars</button></div>
						<div class="grid-container">
							<div class="grid-div">Transcribe your voice in English or select another language.</div>
							<div class="grid-div">test 2</div>
						</div>
						<div class="mt-10 flex justify-center">
							<a href="https://console.deepgram.com/signup" rel="noopener noreferrer" class="button button--primary button--small">Transcribe More Free</a>
						</div>
					</div>
					<div v-if="checkedValue === '1'">
						<div class="mic-buttons">
							<p>Select a file below.</p>
						</div>
						<div class="grid-container">
							<RadioDemo :items="items" v-model="pickedValue" @input="pickedValue = $event.target.value" />
							<div class="grid-div">
								{{ pickedValue }}
							</div>
						</div>
						<div class="flex justify-center">
							<a href="https://console.deepgram.com/signup" rel="noopener noreferrer" class="button button--primary button--small">Transcribe More Free</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
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
	/* @apply relative z-0 top-40 -left-56; */
}

.demo-transcription {
	@apply px-8 lg:px-16 xl:px-36;
	/* @apply mt-8 -mb-40 md:-mb-52 lg:-mb-56 2xl:-mb-80; */
	/* @apply relative -top-52 md:-top-64 lg:-top-72 xl:-top-80 2xl:-top-96; */
}

.container {
	@apply flex flex-col;
	@apply p-8 md:px-16 lg:px-12;
	@apply col-span-3;
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
	@apply mb-12 flex w-3/6 justify-between pr-6;
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
