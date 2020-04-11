<template>
  <div class="caption columns">
    <h2>ルナ</h2>
    <div class="caption">
      <h2>装備</h2>
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
            <td>カオビ</td>
            <td>
              <evil-set
                v-bind:waking="this.$store.state.labrill.evil"
                @input="val => this.$store.commit('labrill/setEvil', val)" 
              />
            </td>
          </tr>
          <tr>
            <td>教科書</td>
            <td>
              <equipment
                v-bind:waking="this.$store.state.labrill.tree"
                @input="val => this.$store.commit('labrill/setTree', val)" 
              />
            </td>
          </tr>
          <tr>
            <td>異形の剣</td>
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
    <div class="caption">
      <h2>ステータス</h2>
      <table>
        <tbody>
          <tr>
            <td>攻撃力</td>
            <td>
              <input type="text"
                :value="$store.state.labrill.criDmg"
                @change="val => this.$store.commit('labrill/setCriDmg', Number(val.target.value))"
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
            <td>防御貫通力</td>
            <td>
              <input type="text"
                :value="$store.state.labrill.criDmg"
                @change="val => this.$store.commit('labrill/setCriDmg', Number(val.target.value))"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="caption">
      <h2>超越特性</h2>
      <table>
        <tbody>
          <tr>
            <td>T1攻撃力</td>
            <td>
              <selector
                v-bind:waking="this.$store.state.labrill.tier5"
                @input="val => this.$store.commit('labrill/setTier5', val)" 
              />
            </td>
          </tr>
          <tr>
            <td>モンスター狩り</td>
            <td>
              <selector
                v-bind:waking="this.$store.state.labrill.tier5"
                @input="val => this.$store.commit('labrill/setTier5', val)" 
              />
            </td>
          </tr>
          <tr>
            <td>精巧な射撃</td>
            <td>
              <selector
                v-bind:waking="this.$store.state.labrill.tier5"
                @input="val => this.$store.commit('labrill/setTier5', val)" 
              />
            </td>
          </tr>
          <tr>
            <td>会心の一撃</td>
            <td>
              <selector
                v-bind:waking="this.$store.state.labrill.tier5"
                @input="val => this.$store.commit('labrill/setTier5', val)" 
              />
            </td>
          </tr>
          <tr>
            <td>集中</td>
            <td>
              <selector
                v-bind:waking="this.$store.state.labrill.tier5"
                @input="val => this.$store.commit('labrill/setTier5', val)" 
              />
            </td>
          </tr>
          <tr>
            <td>S2光</td>
            <td>
              <selector
                v-bind:waking="this.$store.state.labrill.tier5"
                @input="val => this.$store.commit('labrill/setTier5', val)" 
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
            <td>T5闇</td>
            <td>
              <selector
                v-bind:waking="this.$store.state.labrill.tier5"
                @input="val => this.$store.commit('labrill/setTier5', val)" 
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
  },
  data: function() {
    return {
      skillBase: 170000,
      skillMagni: 3.5
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "~/assets/style/caption.sass"
</style>