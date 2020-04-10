<template>
  <div class="caption">
    <h2>ベロニカ</h2>
    <table>
      <tbody>
        <tr>
          <td>専用武器</td>
          <td>
            <equipment
              v-bind:waking="this.$store.state.velonica.weapon"
              @input="val => this.$store.commit('velonica/setWeapon', val)" 
            />
          </td>
        </tr>
        <tr>
          <td>ソウルウェポン</td>
          <td>
            <soul-weapon
              v-bind:waking="this.$store.state.velonica.soul"
              @input="val => this.$store.commit('velonica/setSoul', val)" 
            />
          </td>
        </tr>
        <tr>
          <td>魔王軍</td>
          <td>
            <evil-set
              v-bind:waking="this.$store.state.velonica.evil"
              @input="val => this.$store.commit('velonica/setEvil', val)" 
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

export default {
  components: {
    Equipment,
    SoulWeapon,
    EvilSet,
  }
}
</script>

<style lang="sass" scoped>
  @import "~/assets/style/caption.sass"
</style>