<script setup>
import { ref } from "vue";
const props = defineProps({
  modelValue: Boolean,
});
const checked = ref(false);
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div>
    <label class="switch">
      <input
        @input="$emit('update:modelValue', $event.target.checked)"
        type="checkbox"
        :value="modelValue"
      />
      <span class="slider round"></span>
    </label>
  </div>
</template>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 56px;
  height: 30px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  @apply bg-meadow;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 4px;
  bottom: 4px;
  @apply bg-storm;
  transition: 0.4s;
}

input:checked + .slider {
  @apply bg-meadow;
}

input:focus + .slider {
  box-shadow: 0 0 1px rgb(56 237 172);
}

input:checked + .slider:before {
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
