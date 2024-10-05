<template>
    <div>
        <p>Texto: {{ textoRecibido }}</p>
        <Child @enviar="actualizarTexto" />
    </div>
</template>

<script>
import Child from './Child.vue'
export default {
    data() {
        return {
            textoRecibido: ''
        }
    },
    components: {
        Child
    },
    methods: {
        actualizarTexto(texto) {
            this.textoRecibido = texto
        }
    }
}
</script>
<style scoped>
p {
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 20px;
}
</style>