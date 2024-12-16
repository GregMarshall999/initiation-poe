<script lang="jsx">
import { ref } from 'vue';

const MonComponsant = (props) => {
	return <div>Salut, je suis un {props.nom}!</div>
}

export default {
	components: {
		MonComponsant
	},
	setup() {
		const message = ref('Robot');

		return () => (
			<div>
				<MonComponsant nom={message.value} />
			</div>
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
