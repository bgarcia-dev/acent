<template>
  <q-btn
    :class="$q.dark.isActive ? 'button-option--dark' : 'button-option--light'"
    push
  >
  <div class="row items-center">
    <div class="col-12 q-mt-md">
      <Icon
      :icon="icon"
      :color="$q.dark.isActive ? '#f7f7f7':'#151635'"
      :horizontalFlip="toggleHorizontal"
      width="64"
      height="64"
      />
    </div>
    <div class="col-12">
      <p class="text-bold">
        {{  paragraph  }}
      </p>
    </div>
  </div>
  </q-btn>
</template>

<script>
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  name: 'ButtonCircle',
  props: {
    icon: {
      type: String
    },
    toggleHorizontal: {
      type: Boolean,
      default: false
    },
    paragraph: {
      type: String,
      default: ''
    }
  },
  components: {
    Icon
  },
  setup (props) {}
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
