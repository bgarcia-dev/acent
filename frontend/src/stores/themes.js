/* eslint-disable space-before-function-paren */
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    aguadas: null,
    graves: null,
    esdrujulas: null,
    sobresdrujulas: null,
    tonicas: null,
    atonas: null,
    tritonicas: null,
    groupSelected: null
  }),

  getters: {
    getAgudas(state) { return state.aguadas },
    getGraves(state) { return state.graves },
    getEsdrujulas(state) { return state.esdrujulas },
    getSobresdrujulas(state) { return state.sobresdrujulas },
    getTonicas(state) { return state.tonicas },
    getAtonas(state) { return state.atonas },
    getTritonicas(state) { return state.tritonicas },
    getGroupSeleted(state) { return state.groupSelected }
  },

  actions: {
    // Setters
    setAgudas(newValue) { this.aguadas = newValue },
    setGraves(newValue) { this.graves = newValue },
    setEsdrujulas(newValue) { this.esdrujulas = newValue },
    setSobresdrujulas(newValue) { this.sobresdrujulas = newValue },
    setTonicas(newValue) { this.tonicas = newValue },
    setAtonas(newValue) { this.atonas = newValue },
    setTritonicas(newValue) { this.tritonicas = newValue },
    setGroupSeleted(newValue) { this.groupSelected = newValue },
    // Cleanners
    removeAgudas() { this.aguadas = null },
    removeGraves() { this.graves = null },
    removeEsdrujulas() { this.esdrujulas = null },
    removeSobresdrujulas() { this.sobresdrujulas = null },
    removeTonicas() { this.tonicas = null },
    removeAtonas() { this.atonas = null },
    removeTritonicas() { this.tritonicas = null },
    removeGroupSelected() { this.groupSelected = null }
  }
})
