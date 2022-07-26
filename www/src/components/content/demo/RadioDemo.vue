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
				<img src="src/assets/icons/audiofile.svg" />

				<div class="label-text">
					<div class="title">{{ item.title }}</div>
					<div class="hidden xl:flex">{{ item.text }}</div>
				</div>
				<input type="radio" :id="item.title" :value="item.code" v-model="picked" @input="$emit('update:modelValue', $event.target.value)" />
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
	@apply h-80;
}

label {
	@apply px-4;
}

.label-text {
	@apply pl-4;
	@apply w-11/12;
}

.item {
	@apply bg-ink;
	@apply h-24;
	@apply mb-4;
}

.picked {
	@apply bg-rock;
}
</style>
