<script lang="jsx">

const ComposantSlots = (_, { slots }) => {
	return (
		<div>
			<header>{slots.header()}</header>
			<main>{slots.default()}</main>
			<footer>{slots.footer()}</footer>
		</div>
	)
}

export default {
	components: {
		ComposantSlots
	},
	setup() {
		return () => (
			<ComposantSlots>
				{{
					header: () => <h1>Contenu d'entete</h1>,
					default: () => <h1>Contenu Principal</h1>,
					footer: () => <h1>Contenu Pied de page</h1>
				}}
			</ComposantSlots>
		)
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
