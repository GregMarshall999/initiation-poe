<template>
	<ul>
		<li v-for="todo in todoList" :key="todo.id">
			{{ todo.texte }} | 
			<button @click="removeTodo(todo)">X</button>
		</li>
	</ul>
</template>

<script setup>

import { ref } from 'vue';

var id = 0;
const todoList = ref([
	{ id: id++, texte: 'Faire le lit' }, 
	{ id: id++, texte: 'Faire le petit dej' },
	{ id: id++, texte: 'Aller au travail' }
]);

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

</script>

<style scoped>
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
