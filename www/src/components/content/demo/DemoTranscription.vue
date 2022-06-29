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
  <section class="demo-transcription w-full">
    <div class="container max-w-screen-2xl mx-auto">
      <div class="label">
        <span class="left-label" :class="{ selected: !checkedValue }">{{
          labelLeft
        }}</span>
        <Toggle
          v-model="checkedValue"
          @input="checkedValue = $event.target.checked"
        />
        <span class="right-label" :class="{ selected: checkedValue }">{{
          labelRight
        }}</span>
      </div>
      <div v-if="!checkedValue">
        <h3>Transcribe your voice in real-time.</h3>
        <p>Click the mic to give it a try.</p>
        <div class="flex justify-between">
          <div>
            <button class="microphone">microphone</button>
            <button class="volume-bars">bars</button>
          </div>
          <div>Language select</div>
        </div>
        <div class="transcription">
          <div class="box box-left">
            Transcribe your voice in English or select another language.
          </div>
          <div class="box box-right">Example Code</div>
        </div>
        <div class="flex justify-center">
          <a
            href="https://console.deepgram.com/signup"
            rel="noopener noreferrer"
            class="primary-button"
            >Transcribe More Free</a
          >
        </div>
      </div>
      <div v-else>
        <h3>Transcribe real-world audio.</h3>
        <p>See how Deepgram excels at tough, conversational audio files.</p>
        <p>Select a file below.</p>
        <div class="transcription">
          <div class="box box-radio">
            <RadioDemo
              :items="items"
              v-model="pickedValue"
              @input="pickedValue = $event.target.value"
            />
          </div>
          <div class="box box-right">{{ pickedValue }}</div>
        </div>
        <div class="flex justify-center">
          <a
            href="https://console.deepgram.com/signup"
            rel="noopener noreferrer"
            class="primary-button"
            >Try With Your Own Files</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h3 {
  @apply font-bold text-3xl;
  @apply mb-2;
}

h3 + p {
  @apply font-semibold;
  @apply mb-8;
}

.demo-transcription {
  @apply mt-8 px-11;
}

.primary-button {
  @apply button button--primary button--small;
  @apply mb-10;
}

.container {
  @apply flex flex-col;
  @apply px-28;
  /* TODO Change to a blur effect: */
  background-color: #181d24;
  @apply min-h-screen;
}

.label {
  @apply flex justify-center mb-14 mt-10;
  @apply font-bold text-lg;
}

.left-label {
  @apply flex justify-end;
}

.left-label,
.right-label {
  @apply text-stone;
  @apply px-4;
  @apply w-3/6;
}

.selected {
  @apply text-white;
}

.transcription {
  @apply flex flex-col lg:flex-row;
  @apply mt-4 mb-11 h-full;
}

.transcription > .box {
  @apply w-full lg:w-3/6;
  @apply h-80;
}

.box-left,
.box-radio {
  @apply mr-10 mb-10 h-80;
}

.box-left,
.box-right {
  @apply border-white border-2 w-full lg:w-3/6;
  @apply p-6;
}
</style>
