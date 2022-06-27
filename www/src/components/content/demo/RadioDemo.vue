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
  <div>
    <div v-for="item in items" :key="item.id">
      <input
        type="radio"
        :id="item.title"
        :value="item.code"
        v-model="picked"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <label for="one">{{ item.title }}</label>
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>
