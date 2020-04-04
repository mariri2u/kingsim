<template>
  <div>
    <h2>ラブリル - ({{ this.$store.getters['labrill/suplyCriDmg'] }})</h2>
    <table>
      <tbody>
        <tr>
          <td>専用武器</td>
          <td>
            <equipment
              v-bind:waking="this.$store.state.labrill.weapon"
              @input="val => this.$store.commit('labrill/setWeapon', val)" 
            />
          </td>
        </tr>
        <tr>
          <td>ソウルウェポン</td>
          <td>
            <soul-weapon
              v-bind:waking="this.$store.state.labrill.soul"
              @input="val => this.$store.commit('labrill/setSoul', val)" 
            />
          </td>
        </tr>
        <tr>
          <td>専用宝物</td>
          <td>
            <equipment
              v-bind:waking="this.$store.state.labrill.treasure"
              @input="val => this.$store.commit('labrill/setTreasure', val)" 
            />
          </td>
        </tr>
        <tr>
          <td>魔王軍</td>
          <td>
            <evil-set
              v-bind:waking="this.$store.state.labrill.evil"
              @input="val => this.$store.commit('labrill/setEvil', val)" 
            />
          </td>
        </tr>
        <tr>
          <td>クリダメ</td>
          <td>
            <input type="text"
              :value="$store.state.labrill.criDmg"
              @change="val => this.$store.commit('labrill/setCriDmg', Number(val.target.value))"
            />
          </td>
        </tr>
        <tr>
          <td>T5光</td>
          <td>
            <selector
              v-bind:waking="this.$store.state.labrill.tier5"
              @input="val => this.$store.commit('labrill/setTier5', val)" 
            />
          </td>
        </tr>
        <tr>
          <td>クリスマスツリー</td>
          <td>
            <equipment
              v-bind:waking="this.$store.state.labrill.tree"
              @input="val => this.$store.commit('labrill/setTree', val)" 
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Equipment from '~/components/Equipment'
import SoulWeapon from '~/components/SoulWeapon'
import EvilSet from '~/components/EvilSet'
import Selector from '~/components/Selector'

export default {
  components: {
    Equipment,
    SoulWeapon,
    EvilSet,
    Selector
  }
}
</script>
