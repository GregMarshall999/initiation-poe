<template>
  	<h1>Nom Prénom</h1>
	<input v-model="info.nom" placeholder="Entrez votre nom"/>
	<input v-model="info.prenom" placeholder="Entrez votre prénom"/>

	<button @click="console.log(info.nom, info.prenom)">Envoyer les informations</button>
</template>

<script setup>
import { reactive } from 'vue';

const info = reactive({
	nom: '', 
	prenom: ''
});
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
