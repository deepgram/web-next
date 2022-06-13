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
    default: "left",
  },
  text: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
});
</script>
