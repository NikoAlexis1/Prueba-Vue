<template>
    <div>
        <h1>Child</h1>
        <form @submit.prevent>
            <input type="text" id="" v-model="Texto" data-text="nuevo-texto">
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