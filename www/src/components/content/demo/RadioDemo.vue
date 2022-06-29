<script setup>
import { ref } from "vue";

const props = defineProps({
  items: Array,
  modelValue: String,
});

const picked = ref("One");
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="radio-group">
    <div class="item" v-for="item in items" :key="item.id">
      <label :for="item.id" :class="item.code === picked ? 'picked' : null">
        <svg
          width="31"
          height="39"
          viewBox="0 0 31 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.6023 10.7753V37.7765H1.80859V1.66772H20.3013"
            stroke="white"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M29.6018 10.7753L20.3008 1.66772V10.7753H29.6018Z"
            stroke="white"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.3283 18.9897C11.0395 19.8469 11.4772 20.972 11.4772 22.2042C11.4772 23.5971 10.9301 24.8293 10 25.7401"
            stroke="white"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.6425 15.9146C14.9137 17.6524 15.7006 19.7765 15.7006 22.158C15.7006 24.8613 14.7321 27.2428 13.0977 29.045"
            stroke="white"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.9495 13.3645C19.0286 15.7218 20.2869 18.829 20.2869 22.2042C20.2869 25.9008 18.8097 29.2224 16.3477 31.6868"
            stroke="white"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div class="label-text">
          <div class="title">{{ item.title }}</div>
          <div>{{ item.text }}</div>
        </div>
        <input
          type="radio"
          :id="item.title"
          :value="item.code"
          v-model="picked"
          @input="$emit('update:modelValue', $event.target.value)"
        />
      </label>
    </div>
  </div>
</template>

<style scoped>
.title {
  @apply font-semibold;
}

input[type="radio"] {
  position: absolute;
  opacity: 0;
  height: 100%;
  left: 0;
  margin: 0;
  padding: 0;
  top: 0;
  width: 100%;
  cursor: pointer;
}

label {
  position: relative;
  @apply h-full pr-6;
  @apply flex items-center;
}

svg {
  @apply m-5;
}

.radio-group {
  @apply mb-10;
}

.label-text {
  @apply w-10/12;
}

.item {
  @apply bg-ink;
  @apply h-24;
  @apply mb-3;
}

.picked {
  @apply bg-rock;
}
</style>
