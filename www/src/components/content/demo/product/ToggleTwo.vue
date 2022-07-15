<script setup>
import { ref } from "vue";

const props = defineProps({
	demoItems: Array,
	modelValue: String,
});

const picked = ref(0);
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
	<div class="radio-group">
		<div class="item" v-for="item in demoItems" :key="item.id">
			<label :for="item.id">
				<div class="label-text" :class="item.id === picked ? 'picked' : 'not-picked'">
					<div class="title">
						{{ item.title }}
					</div>
					<div class="details">{{ item.details }}</div>
					<a href="{href}" class="hyperlink mt-4 flex items-center"
						><span class="pr-1" :class="item.id === picked ? 'picked' : 'not-picked'">{{ item.buttonText }}</span></a
					>
				</div>
				<input type="radio" :id="item.title" :value="item.id" v-model="picked" @input="$emit('update:modelValue', $event.target.value)" />
			</label>
		</div>
	</div>
</template>

<style scoped>
.title {
	@apply text-2xl font-semibold;
	@apply mb-4;
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

label {
	@apply px-5;
}

.label-text {
	/* @apply w-11/12; */
}

.item {
	@apply border-lightIris border-l-2;
	@apply mt-14 mb-3;
}

.not-picked {
	@apply text-casper;
}
</style>
