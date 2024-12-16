<template>
    <div 
        v-show="show" 
        class="container"
        @click="emit('envoyerTitre', props.titre)"
        style="cursor: pointer;"
    >
        <h1>{{ titre }}</h1>
        <p v-for="t in textes">{{ t }}</p>

        <span v-if="obj.test">
            {{ obj.test }}
        </span>
    </div>
</template>

<script setup>

const props = defineProps({
    titre: String, 
    textes: Array, 
    obj: {
        type: Object, 
        required: true
    }, 
    show: {
        type: Boolean, 
        default: false
    }
});

const emit = defineEmits(['envoyerTitre']);

</script>

<style scoped>

.container {
    border: 1px solid rgb(79, 175, 111);
    border-radius: 10px;
    background-color: rgb(130, 206, 155);
    color: rgb(87, 87, 87);
    margin: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0;
}

h1 {
    text-decoration: underline;
    margin-bottom: 20px;
}

</style>