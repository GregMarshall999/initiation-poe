<template>
  	{{ text }}
	<button @click="text = 'test'">Changer</button>
	<p ref="refChargement">Je suis en train de charger</p>
</template>

<script>

export default {
	data() {
		return {
			text: 'toast'
		}
	},
	setup() {
		console.log('setup');
	}, 
	beforeCreate() {
		console.log('before create', this.text);
	}, 
	created() {
		console.log('create', this.text);
	}, 
	beforeMount() {
		console.log('beforeMount');
	}, 
	mounted() {
		console.log('mounted');

		setTimeout(() => this.$refs.refChargement.textContent = 'Chargé', 2000);
	}, 
	beforeUpdate() {
		console.log('before update', this.text)
	}, 
	updated() {
		console.log('updated', this.text)
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
