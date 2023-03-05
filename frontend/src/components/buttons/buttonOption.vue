<template>
  <q-btn class="button-option q-py-sm q-pr-lg" :class="$q.dark.isActive ? 'button-option--dark' : 'button-option--light'" push>
    <div class="row items-center no-wrap">

      <q-icon class="q-mr-sm" :color="$q.dark.isActive ? '#6A6D80':'#5b5c64'" size="lg" name="search" />

      <div>
        <p class="inline text-left text-weight-bold text-body1 top paragraph">Realizar consulta</p>
        <p class="inline text-left text-weight-medium text-body2 bottom paragraph">Tiene una palabra a buscar</p>
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
.button-option {
  box-sizing: content-box;
}

.paragraph {
  padding: 0;
  margin: 0;
}

.button-option--dark {
  background-color: #6A6D80 !important;
  .top{
    color: #f7f7f7;
  }
  .bottom{
    color: #cfcece;
  }

}

.button-option--light {
  background-color: #f7f7f7 !important;
  .top{
    color: #151635;
  }
  .bottom{
    color: #5b5c64;
  }
}
</style>
