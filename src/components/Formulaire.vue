<template>
    <h1>Formulaire d'inscription</h1>
    <form @submit.prevent="envoyerForm">
        <Champ
            :placeholder="'Ex: Doe...'"
            v-model="data.nom"
            @validated-input="updateInvalidForm"
        >
            Votre Nom
        </Champ>
        <Champ
            :placeholder="'Ex: John...'"
            v-model="data.prenom"
            @validated-input="updateInvalidForm"
        >
            Votre Prenom
        </Champ>
        <Champ
            :placeholder="'Ex: john.doe@ex.com...'"
            v-model="data.email"
            @validated-input="updateInvalidForm"
        >
            Votre Email
        </Champ>
        <Champ
            :placeholder="'****'"
            :type="'password'"
            v-model="data.mdp"
            @validated-input="updateInvalidForm"
        >
            Votre Mot de Passe
        </Champ>

        <button :disabled="invalidForm">Envoyer</button>
    </form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import Champ from './Champ.vue';

const data = reactive({
    nom: {
        val: '', 
        isValid: true
    },
    prenom: {
        val: '', 
        isValid: true
    },
    email: {
        val: '', 
        isValid: true
    },
    mdp: {
        val: '', 
        isValid: true
    },
});
const invalidForm = ref(false);

const emit = defineEmits(['formSend']);

const envoyerForm = () => {
    updateInvalidForm()

    if(!invalidForm.value) {
        emit('formSend', data);
    }
}

const updateInvalidForm = () => {
    invalidForm.value = false;

    for(let d of Object.keys(data)) {
        if(data[d].val === '') {
            invalidForm.value = true;
            data[d].isValid = false;
        }
    }
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