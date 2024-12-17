<template>
    <div>
        <label><slot></slot></label> :
        <input 
            v-model="model.val" 
            :placeholder="placeholder" 
            :type="type"
            @input="checkInput"
        />
    </div>
    <span v-if="!model.isValid" style="color: red;">Ce champ est obligatoire!</span>
</template>

<script setup>

const props = defineProps({
    placeholder: String, 
    type: {
        type: String, 
        default: 'text'
    }
});

const model = defineModel();

const emit = defineEmits(['validatedInput']);

const checkInput = () => {
    model.value.isValid = model.value.val.length != 0

    if(model.value.isValid) {
        emit('validatedInput');
    }
}

</script>

<style scoped>

div {
    border: 1px solid #147c40;
    border-radius: 10px;
    width: fit-content;
    padding: 5px;
}

</style>