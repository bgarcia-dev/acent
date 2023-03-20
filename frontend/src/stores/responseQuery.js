/* eslint-disable space-before-function-paren */
import { defineStore } from 'pinia'

export const useMyStore = defineStore('myStore', {
  state: () => ({
    myData: null,
    accentuation: null,
    word: null
  }),
  actions: {
    setMyData(newData) {
      this.myData = newData
    },
    removeData() {
      this.myData = null
    },
    setAccentuation(newAccentuation) {
      this.accentuation = newAccentuation
    },
    removeAccentuation() {
      this.accentuation = null
    },
    setWord(newWord) {
      this.word = newWord
    },
    removeWord() {
      this.word = null
    }
  }
})
