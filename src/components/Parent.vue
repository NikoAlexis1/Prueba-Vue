<template>
    <div>
        <h1>Parent</h1>
        <p data-text="texto-recibido"> Texto: {{ textoRecibido }}</p>
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