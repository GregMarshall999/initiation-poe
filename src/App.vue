<template>
  	{{ text }}
	<button @click="text = 'test'">Changer</button>
	<p ref="refChargement">Je suis en train de charger</p>
</template>

<script>

import { onMounted } from 'vue';
import { onUpdated } from 'vue';
import { onBeforeUpdate } from 'vue';
import { onBeforeMount } from 'vue';
import { ref } from 'vue';

export default {
	setup() {
		console.log('setup');

		const text = ref('toast');
		const refChargement = ref(null);

		onBeforeMount(() => console.log('beforeMount', refChargement.value))

		onMounted(() => {
			console.log('mounted', refChargement.value);

			setTimeout(() => refChargement.value.textContent = 'Chargé', 2000);
		}) 
		
		onBeforeUpdate(() => console.log('before update', text.value))

		onUpdated(() => console.log('updated', text.value))

		return {
			text, 
			refChargement
		}
	}
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
