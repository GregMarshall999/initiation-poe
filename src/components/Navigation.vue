<template>
    <nav>
        <RouterLink to="/">Page Principale</RouterLink> |
        <RouterLink :to="{ name: 'Contact' }">Nous Contacter</RouterLink> |
        <RouterLink :to="{ name: 'Message', params: { message: 'Test' } }">Message de Contact</RouterLink> |
        <RouterLink v-if="!isConnected" :to="{ name: 'Profil' }" @click="connecter">Se Connecter</RouterLink>
        <RouterLink v-else :to="{ name: 'Home' }" @click="deconnecter">Se Déconnecter</RouterLink>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const isConnected = ref(localStorage.connecte && localStorage.connecte === 'true');

const connecter = () => {
    localStorage.connecte = true;
    isConnected.value = true
}

const deconnecter = () => {
    localStorage.connecte = false;
    isConnected.value = false;
}
</script>