import wakingTable from '~/data/waking_table.json'

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
  // 自分のクリダメ(内部値)
  selfCriDmg: function(state) {
    // 表示クリダメで初期化
    let val = state.criDmg
    // 聖夜のクリスマスツリー
    if (0 <= state.tree && state.tree <= 5) {
      val += wakingTable['base50'][state.tree]
    }
    // T5光
    if (state.tier5 == 1) {
      val += 20
    }
    return val
  },
  suplyCriDmg: function(state, getters) {
    let val = 50 + Math.floor(getters.selfCriDmg * 0.15)
    if (0 <= state.weapon && state.weapon <= 5) {
      val += wakingTable['base30'][state.weapon]
    }
    if (0 <= state.treasure && state.treasure <= 5) {
      val += wakingTable['base20'][state.treasure]
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