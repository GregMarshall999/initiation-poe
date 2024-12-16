<template>
  	<h1 v-bind:class="classTitre">Je suis un titre {{ classTitre }}</h1>
	<button @click="toggleColor">Changer la couleur</button>
</template>

<script setup>
import { ref } from 'vue';

const classTitre = ref('rouge');

let etat = true;
const toggleColor = () => {
	if(etat) {
		classTitre.value = 'bleu'
	}
	else {
		classTitre.value = 'rouge'
	}

	etat = !etat;
}

</script>

<style scoped>
.rouge {
	color: red;
}
.bleu {
	color: blue;
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
