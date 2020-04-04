export const state = () => ({
  crown: 0,
  whip: 0,
  award: 0,
  wing: 0
});

export const mutations = {
  setCrown(state, value) {
    state.crown = value
  },
  setWhip(state, value) {
    state.whip = value
  },
  setAward(state, value) {
    state.award = value
  },
  setWing(state, value) {
    state.wing = value
  }
}