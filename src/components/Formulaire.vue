<template>
    <h1>Formulaire d'inscription</h1>
    <form @submit.prevent="envoyerForm">
        <Champ
            :placeholder="'Ex: Doe...'"
            v-model="data.nom"
        >
            Votre Nom
        </Champ>
        <Champ
            :placeholder="'Ex: John...'"
            v-model="data.prenom"
        >
            Votre Prenom
        </Champ>
        <Champ
            :placeholder="'Ex: john.doe@ex.com...'"
            v-model="data.email"
        >
            Votre Email
        </Champ>
        <Champ
            :placeholder="'****'"
            v-model="data.mdp"
        >
            Votre Mot de Passe
        </Champ>

        <button>Envoyer</button>
    </form>
</template>

<script setup>
import { reactive } from 'vue';
import Champ from './Champ.vue';

const data = reactive({
    nom: '',
    prenom: '',
    email: '', 
    mdp: ''
});

const emit = defineEmits(['formSend']);

const envoyerForm = () => {
    emit('formSend', data);
}
</script>

<style scoped>

h1 {
    margin-bottom: 2em;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1em;
}

button {
    width: fit-content;
}

</style>