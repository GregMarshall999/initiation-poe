<template>
    <p>Id liste des tâches: {{ id }}</p>
	<button @click="id++">Récupérer les prochaines tâches</button>

	<p v-if="data">{{ data }}</p>
	<p v-else>Chargement en cours...</p>
</template>

<script setup>
import { onBeforeMount, ref, watch } from 'vue';

const id = ref(1);
const data = ref();

const recuperer = async () => {
	data.value = null;
	const resultat = await fetch(`https://jsonplaceholder.typicode.com/todos/${id.value}`);
	data.value = await resultat.json();
}

watch(id, (newId, oldId) => {
	console.log('id', id.value);
	console.log('newId', newId);
	console.log('oldId', oldId);

	recuperer();
});

onBeforeMount(() => recuperer());
</script>