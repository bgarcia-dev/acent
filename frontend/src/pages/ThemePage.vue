<template>
  <div class="row justify-center">
    <div class="col-xs-12 col-sm-12 col-md-10">
      <div class="row justify-center q-pa-md">
        <OptionTheme/>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import OptionTheme from '../components/optionTheme'

export default defineComponent({
  name: 'ThemePage',
  components: {
    OptionTheme
  },
  setup () {
    return {}
  }
})
</script>
