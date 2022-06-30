<script setup>
import { ref } from "vue";
import Toggle from "../../Toggle.vue";
import RadioDemo from "./RadioDemo.vue";
const labelLeft = "Transcribe Live";
const labelRight = "Transcribe Pre Recorded";
let checkedValue = ref(false);
let pickedValue = ref("");
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
      <div class="flex">
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
        <p>Transcribe your voice in real-time.</p>
        <p>Click the mic to give it a try.</p>
        <div class="flex justify-between">
          <div>
            <button>microphone</button>
            <button>dots</button>
          </div>
          <div>Language select</div>
        </div>
        <div class="transcription">
          <div class="box-left">
            Transcribe your voice in English or select another language.
          </div>
          <div class="box-right">Example Code</div>
        </div>
        BUTTON
      </div>
      <div v-else>
        <p>Transcribe real-world audio.</p>
        <p>See how Deepgram excels at tough, conversational audio files.</p>
        <p>Select a file below.</p>
        <div class="transcription">
          <RadioDemo
            :items="items"
            v-model="pickedValue"
            @input="pickedValue = $event.target.value"
          />
          <div class="box-right">{{ pickedValue }}</div>
        </div>
        BUTTON
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  @apply flex flex-col;
  @apply w-8/12;
  /* TODO Change to a blur effect: */
  background-color: #181d24;
}

.left-label,
.right-label {
  @apply text-stone;
}

.selected {
  @apply text-white;
}

.transcription {
  @apply flex;
}

.transcription > div {
  @apply w-3/6;
}

.box-left,
.box-right {
  @apply border-white border-2 w-3/6;
}
</style>
