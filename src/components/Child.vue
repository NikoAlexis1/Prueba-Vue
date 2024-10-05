<template>
    <div>
        <form @submit.prevent>
            <input type="text" id="" v-model="Texto" data-text="nuevo-texto" placeholder="Escriba un texto">
            <button @click="$emit('enviar', Texto)" data-test="button">Enviar</button>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            Texto: ''
        }
    },

}
</script>

<style scoped>
input {
    background-color: transparent;
    color: #fff;
    padding: 8px 0;
}

button {
    background-color: transparent;
    border: 1px solid #00bd7e;
    color: #00bd7e;
    cursor: pointer;
    padding: 8px;
}
</style>