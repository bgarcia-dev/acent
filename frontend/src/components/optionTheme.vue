<template>
  <div
    class="col-12 inline row q-pa-sm option-theme justify-between"
    :class="$q.dark.isActive ? 'option-theme--dark' : 'option-theme--light'"
  >
    <div class="col-2 col-md-1 row justify-center" >
      <Icon
        class="self-center"
        :icon="icon"
        :color="$q.dark.isActive ? '#cfcece':'#494750'"
        width="48"
        height="48"
      />
    </div>
    <div class="col-8 col-md-10 justify-center self-center">
      <p class="inline text-center text-weight-bolder text-body1 top paragraph">
        {{  textTop  }}
      </p>
      <p class="inline text-center text-weight-bold bottom paragraph">
        {{  textBottom  }}
      </p>
    </div>
    <div class="col-2 col-md-1">
      <div class="row justify-center" :class="$q.screen.width < 576? 'q-mb-sm':''">
        <q-btn
        flat
        >
          <Icon
            class="self-center"
            icon="material-symbols:play-circle-outline-rounded"
            :color="$q.dark.isActive ? '#f7f7f7':'#151635'"
            :width="$q.screen.lt.sm > 576? 32 : 48"
            :height="$q.screen.width > 576? 32 : 48"
          />
        </q-btn>
      </div>
      <div class="row justify-center">
        <q-btn
          flat
          @click="executeCallback"
        >
          <Icon
            class="self-center"
            icon="material-symbols:menu-book-outline-rounded"
            :color="$q.dark.isActive ? '#f7f7f7':'#151635'"
            :width="$q.screen.width > 576? 32 : 48"
            :height="$q.screen.width > 576? 32 : 48"
          />
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  name: 'optionTheme',
  props: ['icon', 'textTop', 'textBottom', 'callback'],
  components: {
    Icon
  },
  setup (props) {
    const methods = {
      ages: () => {
        console.log('ages')
      },
      tonicaAtona: () => {
        console.log('tonica')
      },
      tritonica: () => {
        console.log('tritonica')
      }
    }

    function executeCallback () {
      methods[props.callback]()
    }

    return {
      executeCallback
    }
  }
})
</script>

<style lang="scss" scoped>
.option-theme {
  border-radius: 10px;
}

.option-theme--dark {
  background-color: #6A6D80 !important;
  .top{
    color: #f7f7f7;
  }
  .bottom{
    color: #cfcece;
  }
}

.option-theme--light {
  background-color: #b6b5b5 !important;
  .top{
    color: #151635;
  }
  .bottom{
    color: #5b5c48;
  }
}

.paragraph {
  padding: 0;
  margin: 0;
}

</style>
