<template>
  <div
    class="col-12 row q-pa-sm option-theme justify-between"
    :class="$q.dark.isActive ? 'option-theme--dark' : 'option-theme--light'"
  >
    <div class="col-xs-2 col-sm-2 col-md-1 row" >
      <Icon
        class="self-center"
        icon="ph:bird-bold"
        :color="$q.dark.isActive ? '#f7f7f7':'#151635'"
        width="64"
        height="64"
      />
    </div>
    <div class="col-xs-7 col-sm-7 col-md-10">
      <p class="inline text-left text-weight-bolder text-body1 top paragraph">
        Agudas, graves, esdrújulas y sobresdrújulas
        </p>
        <p class="inline text-left text-weight-bold bottom paragraph">
          Los cuatro tipos de palabras que determinan la acentuación
        </p>
    </div>
    <div class="col-xs-2 col-sm-2 col-md-1 justify-center self-center">
      <div class="row justify-center">
          <Icon
            class="self-center"
            icon="material-symbols:play-circle-outline-rounded"
            :color="$q.dark.isActive ? '#f7f7f7':'#151635'"
            width="48"
            height="48"
          />
      </div>
      <div class="row justify-center q-my-sm">
          <Icon
            class="self-center"
            icon="material-symbols:menu-book-outline-rounded"
            :color="$q.dark.isActive ? '#f7f7f7':'#151635'"
            width="48"
            height="48"
          />
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  name: 'optionTheme',
  // props: ['icon', 'textTop', 'textBottom'],
  components: {
    Icon
  },
  setup (props) {}
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
    color: #5b5c64;
  }
}

.paragraph {
  padding: 0;
  margin: 0;
}

</style>
