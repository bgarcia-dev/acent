<template>
  <q-btn class="boton-mi-tema" :class="$q.dark.isActive ? 'boton-mi-tema--dark' : 'boton-mi-tema--light'" push>
    <div class="row items-center no-wrap">

      <q-icon class="q-mr-sm" color="white" size="lg" name="search" />

      <div>
        <p class="inline text-left  text-weight-bold paragraph">Realizar consulta</p>
        <p class="inline text-left paragraph">Tiene una palabra a buscar</p>
      </div>
    </div>
  </q-btn>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonOption'
})
</script>

<style lang="scss" scoped>
.boton-mi-tema {
  box-sizing: content-box;
  background-color: aqua !important;
}

.paragraph {
  padding: 0;
  margin: 0;
}

.boton-mi-tema--dark {
  background-color: blue !important;
  color: #f7f7f7;
}

.boton-mi-tema--light {
  background-color: #f7f7f7 !important;
  color: #333;
}
</style>
