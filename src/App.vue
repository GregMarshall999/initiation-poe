<script lang="jsx">
import { ref } from 'vue';

export default {
	setup() {
		const show = ref(true);

		const toggle = () => {
			show.value = !show.value;
		}

		return () => (
			<div>
				{ show.value ? <p>J'affiche</p> : <p>Je Cache</p> }
				{ show.value && <p>Je ne suis pas là quand show est faux</p> }
				<button onclick={toggle}>click</button>
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
