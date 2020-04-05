import wakingTable from '~/data/waking_table.json'

export const state = () => ({
  crown: 0,
  whip: 0,
  award: 0,
  wing: 0
});

export const getters = {
  suplyAtkMagni: function(state) {
    val = 0
    if (0 <= state.crown && state.crown <= 5) {
      val = wakingTable['base30'][state.crown]
    }
    return val
  },
  suplyAmp: function(state) {
    
  }
}

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