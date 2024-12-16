<template>
	<form @submit.prevent="ajouter">
		<input v-model="tache" required placeholder="Nouvelle Tache"/>
		<button>Ajouter une tache</button>
	</form>

	<ul>
		<li v-for="todo in listeCache" :key="todo.id">
			<input type="checkbox" v-model="todo.complete" /> |
			<span :class="{ complete: todo.complete }">{{ todo.texte }}</span> | 
			<button @click="removeTodo(todo)">X</button>
		</li>
	</ul>

	<button @click="cacherTache = !cacherTache">{{ cacherTache ? 'Afficher' : 'Cacher' }}  complété</button>
</template>

<script setup>
import { computed, ref } from 'vue';

var id = 0;
const todoList = ref([
	{ id: id++, texte: 'Faire le lit', complete: true }, 
	{ id: id++, texte: 'Faire le petit dej', complete: false },
	{ id: id++, texte: 'Aller au travail', complete: false }
]);
const tache = ref();

const ajouter = () => {
	todoList.value.push({ id: id++, texte: tache.value, complete: false });
	tache.value = '';
}
const removeByIndex = index => {
	const res = [];

	for(var i = 0; i < todoList.value.length; i++) {
		if(i != index) {
			res.push(todoList.value[i]);
		}
	}

	todoList.value = res;
};
const removeTodo = todo => {
	todoList.value = todoList.value.filter(t => t != todo);
}

const cacherTache = ref(false);
const listeCache = computed(() => {
	if(todoList.value.length > 0) {
		console.log('other compute')
	}
	console.log('compute')
	return cacherTache.value ? 
		todoList.value.filter(t => !t.complete) : todoList.value;
})
</script>

<style scoped>
.complete {
	text-decoration: line-through;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
