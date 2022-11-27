<template>
    <div>
        <div class="container">
            <h1>Mediciones</h1>
            <MedicionesTabla />
        </div>
    </div>
</template>
  
<script>
// @ is an alias to /src
import MedicionesTabla from '@/components/MedicionesTabla.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MedicionesView',
    components: {
        MedicionesTabla
    }
})
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    /*align-items: center;*/
}

h1 {
    text-align: start;
}
</style>