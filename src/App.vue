<template>
	<button @click="affichage = !affichage">Changer l'affichage</button>

	<h1 id="moi" v-if="affichage">Je suis présent dans le DOM</h1>
	<h1 v-else>Je suis l'autre qui apparait à sa place</h1>

	<h2 v-show="affichage">Je reste dans le DOM même caché</h2>

	<h3 v-if="test">{{ test.compte }}</h3>
</template>

<script setup>
import { reactive, ref } from 'vue';

const affichage = ref(true);

const test = reactive();

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
