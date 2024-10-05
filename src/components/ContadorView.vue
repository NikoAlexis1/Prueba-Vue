<template>
    <div>
        <p class="contador">Contador: {{ contador }}</p>
        <button class="incrementar" @click="actionIncrementar">Incrementar</button>
        <button class="disminuir" @click="actionDisminuir">Disminuir</button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Contador',
    computed: {
        ...mapState(['contador'])
    },
    methods: {
        ...mapActions(['actionIncrementar', 'actionDisminuir'])
    }

}
</script>

<style scoped>
.contador {
    margin-top: 10px;
    margin-bottom: 40px;
    text-align: center;
    font-size: 30px;
}

button {
    padding: 10px;
    background-color: transparent;
    border: 1px solid #00bd7e;
    color: #00bd7e;
    cursor: pointer;
    margin: 0px 10px;
}

button:active {
    transform: translateY(2px);
    border-color: #00bd7eb6;
    color: #00bd7eb6;
}
</style>