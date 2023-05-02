<template>
  <q-page>
    <div class="row col-12">
      <p class="col-12 text-center q-mb-md q-mt-sm">
        Asocia la palabra con su significado
      </p>
    </div>

    <div class="row col-12">
      <div class="col-6 q-px-md q-py-md">
        <div
          v-ripple
          class="relative-position flex flex-center q-px-md q-pt-md shadow-3 cursor-pointer"
        >
          <q-img
            src="~/assets/img01.png"
            :ratio="16/9"
            spinner-color="primary"
            spinner-size="82px"
            style="max-height: 30vh;"
          />
          <p>papa</p>
        </div>
      </div>

      <div class="col-6 q-px-md q-py-md flex flex-center">
        <div
          v-ripple
          class="relative-position flex flex-center shadow-3 q-px-md q-py-md cursor-pointer"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa expedita a assumenda, exercitationem incidunt quibusdam esse iusto fugiat modi, officia animi quia ab enim sequi molestias excepturi odio eos nostrum!
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'strategyRelationship',
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.container-meaning{
  cursor: pointer;
}

p{
  font-size:18px;
}
</style>
