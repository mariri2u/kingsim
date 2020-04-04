export const state = () => ({
  weapon: 0,
  soul: 0,
  treasure: 0,
  evil: 0,
  criDmg: 0,
  tier5: 0,
  tree: 0
});

export const getters = {
  selfCriDmg: function(state) {
    let val = 0
    val += state.criDmg
    switch (state.tree) {
      case 0:
        val += 50
        break
      case 1:
        val += 60
        break
      case 2:
        val += 72
        break
      case 3:
        val += 87
        break
      case 4:
        val += 105
        break
      case 5:
        val += 125
        break
    }
    if (state.tier5 == 1) {
      val += 20
    }
    return val
  },
  suplyCriDmg: function(state, getters) {
    let val = 50 + Math.floor(getters.selfCriDmg * 0.15)
    switch (state.weapon) {
      case 0:
        val += 30
        break
      case 1:
        val += 36
        break
      case 2:
        val += 42
        break
      case 3:
        val += 51
        break
      case 4:
        val += 63
        break
      case 5:
        val += 75
        break
    }
    switch (state.treasure) {
      case 0:
        val += 20
        break
      case 1:
        val += 24
        break
      case 2:
        val += 29
        break
      case 3:
        val += 35
        break
      case 4:
        val += 42
        break
      case 5:
        val += 50
        break
    }
    switch (state.evil) {
      case 1:
        val += 5
        break
      case 2:
        val += 13
        break
    }
    return val
  }
}

export const mutations = {
  setWeapon(state, value) {
    state.weapon = value
  },
  setSoul(state, value) {
    state.soul = value
  },
  setTreasure(state, value) {
    state.treasure = value
  },
  setEvil(state, value) {
    state.evil = value
  },
  setCriDmg(state, value) {
    state.criDmg = value
  },
  setTier5(state, value) {
    state.tier5 = value
  },
  setTree(state, value) {
    state.tree = value
  }
}