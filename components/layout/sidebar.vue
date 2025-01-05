<template>
	<div :class="['sidebar', { sidebar_open: sidebarIsOpen }]">
		<div class="item" v-for="link of links" :key="link.name">
			<nuxt-link :to="link.path">{{ link.name }}</nuxt-link>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	sidebarIsOpen: {
		type: Boolean,
		required: true
	}
})
const links = ref([
	{ name: 'Typography', path: '/typography' },
	{ name: 'Button', path: '/button' },
	// { name: 'Checkbox', path: '/checkbox' }
])
</script>

<style>
.sidebar {
	position: fixed;
	left: 0;
	top: 55px;
	height: 100%;
	width: 250px;
	background-color: var(--color-bg-dark);
	padding: 2rem;
	font-size: 18px;
	font-weight: 600;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
	transition: var(--transition);
	transform: translateX(-250px);
}

.sidebar.sidebar_open {
	transform: translateX(0);
}

.item {
	margin-bottom: 0.3rem;
}

.item>a {
	color: var(--color-text-dark);
	transition: var(--transition);
}

.item>a:hover {
	color: var(--color-highlight);
}

.item:last-child {
	margin-bottom: 0;
}
</style>