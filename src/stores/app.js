import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      seasonId: 308
    }
  },
  getters: {
    getSeasonId: (state) => state.seasonId
  },
  actions: {
    setSeasonId (param) {
      this.seasonId = param;
    }
  },
  persist: {
    storage: window.localStorage
  }
});