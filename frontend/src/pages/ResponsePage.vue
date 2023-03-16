<template>
  <div class="row justify-center">
    <div class="col-xs-12 col-sm-12 col-md-10">
      <div class="row justify-center q-pa-md">
        <pre>
          {{  response  }}
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'ResponsePage',
  props: ['data'],
  setup (props) {
    const response = ref('')

    onMounted(() => {
      console.log('val', props.data)
    })

    return { response }
  }
})

</script>
