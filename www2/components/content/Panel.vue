<template>
  <section>
    <img v-if="align === 'left'" :src="image" />
    <p>{{ text }}</p>
    <img v-if="align !== 'left'" :src="image" />
  </section>
</template>

<script setup>
defineProps({
  align: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>
