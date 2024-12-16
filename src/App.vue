<template></template>

<script>
import { h, ref } from 'vue';

export default {
	setup() {
		const compte = ref(0);
		const incrementer = () => {
			compte.value++;
		}

		return () => 
			h('div', { class: 'container' }, [
				h('h1', 'Compteur avec JSX'), 
				h('p', `Compte: ${compte.value}`), 
				h('button', { onclick: incrementer }, 'Incrémenter')
			]
		);
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
