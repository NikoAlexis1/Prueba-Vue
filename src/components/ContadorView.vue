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