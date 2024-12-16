<template>
	<h1>Titre de la page</h1>

	<Affichage 
		:titre="affichage1.titre" 
		:textes="affichage1.textes" 
		:obj="{test: 'je suis requis'}"
	/>

	<Affichage 
		:titre="affichage2.titre" 
		:textes="affichage2.textes" 
		:obj="{}" 
		:show="true"
	/>
</template>

<script setup>
import { reactive } from 'vue';
import Affichage from './components/Affichage.vue';

const affichage1 = reactive({
	titre: 'Titre principal', 
	textes: ['Première ligne', 'Seconde ligne'], 
})

const affichage2 = reactive({
	titre: 'Titre secondaire', 
	textes: [    
		'Neque porro quisquam est qui dolorem ipsum.', 
    	'Sit amet, consectetur, adipisci velit.', 
    	'Dolorem ipsum quia.'
	], 
})

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
