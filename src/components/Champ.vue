<template>
    <div>
        <label><slot></slot></label> :
        <input v-model="model" :placeholder="placeholder" />
    </div>
</template>

<script setup>

const props = defineProps(['placeholder']);

const model = defineModel();

</script>

<style scoped>

div {
    border: 1px solid #147c40;
    border-radius: 10px;
    width: fit-content;
    padding: 5px;
}

</style>