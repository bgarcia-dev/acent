/* eslint-disable space-before-function-paren */
import { defineStore } from 'pinia'

export const useMyStore = defineStore('myStore', {
  state: () => ({
    myData: null
  }),
  actions: {
    setMyData(newData) {
      this.myData = newData
    },
    removeData() {
      this.myData = null
    }
  }
})
