<script setup></script>

<template>
  <div class="demo-transcription">
    <div>TOGGLE</div>
    <p>Transcribe your voice in real-time.</p>
    <p>Click the mic to give it a try.</p>
    <div class="flex justify-between">
      <div>
        <button>microphone</button>
        <button>dots</button>
      </div>
      <div>Language select</div>
    </div>
  </div>
</template>

<style>
.demo-transcription {
  @apply flex flex-col;
  @apply w-8/12;
  /* TODO Change to a blur effect: */
  background-color: #181d24; 
}
</style>