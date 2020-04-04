export const state = () => ({
  weapon: 0,
  soul: 0,
  evil: 0
});

export const getters = {
  weaponStack: function(state) {
    let val = 5
    switch (state.weapon) {
      case 0:
        val = 9
        break
      case 1:
        val = 10
        break
      case 2:
        val = 11
        break
      case 3:
        val = 12
        break
      case 4:
        val = 13
        break
      case 5:
        val = 15
        break
    }
    return val
  },
  s4magni: function(state, getters) {
    var stack = getters.weaponStack
    var val = 1.0
    if (state.soul >= 2) {
      val += 1.0
    }
    val += stack * 0.1
    return val
  },
  suplyCriDmg: function(state, getter) {
    var val = 0
    if (state.soul >= 0) {
      val = 50
    }
    return val * getter.s4magni 
  },
  suplyBossDmg: function(state, getter) {
    var val = 15
    if (state.soul >= 0) {
      val += 20
    }
    return val * getter.s4magni
  },
  suplyAtkConst: (state, getter) => { return 50584 * (1.5 + getter.s4magni) }
}

export const mutations = {
  setWeapon(state, value) {
    state.weapon = value
  },
  setSoul(state, value) {
    state.soul = value
  },
  setEvil(state, value) {
    state.evil = value
  }
}