<template>
	<h1>{{ titrePage }}</h1>

	<AffichageSimple>
		J'ai initialisé l'emplacement depuis le parent.
	</AffichageSimple>

	<AffichageComplexe>
		<template v-slot:header>
			Titre du Lorem
		</template>

		<template #default>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam cumque cum quidem totam quae porro asperiores maiores laudantium, explicabo blanditiis repudiandae ex culpa voluptate officia, magni perspiciatis nobis sunt?
		</template>

		<template #footer>
			<p>Le footer du Lorem</p>
		</template>
	</AffichageComplexe>
</template>

<script setup>
import { reactive } from 'vue';
import { ref } from 'vue';
import AffichageSimple from './components/AffichageSimple.vue';
import AffichageComplexe from './components/AffichageComplexe.vue';

const titrePage = ref('Titre de la page');
const changerTitre = newTitre => {
	titrePage.value = newTitre;
}

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
