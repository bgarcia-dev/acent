<template>
  <div class="row justify-center">
    <div class="col-xs-12 col-sm-12 col-md-10">
      <div class="row justify-center q-pa-md">
        <OptionTheme
          class="q-my-md"
          v-for="(option,index) in listOptions"
          :key="index"
          :icon="option.icon"
          :textTop="option.textTop"
          :textBottom="option.textBottom"
        />

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
    const listOptions = [
      {
        icon: 'fluent-emoji-high-contrast:parrot',
        textTop: 'Agudas, graves, esdrújulas y sobresdrújulas',
        textBottom: 'Los cuatro tipos de palabras que determinan la acentuación',
        toPage: 'ToDo'
      },
      {
        icon: 'arcticons:birday',
        textTop: 'Palabras tónicas y átonas',
        textBottom: 'Cómo se pronuncian y escriben las palabras que tienen acento',
        toPage: 'ToDo'
      },
      {
        icon: 'emojione-monotone:bird',
        textTop: 'Palabras tritónicas',
        textBottom: 'La situación de su sílaba tónica varía y cambia el significado',
        toPage: 'ToDo'
      }
    ]
    return {
      listOptions
    }
  }
})
</script>
