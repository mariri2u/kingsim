<template>
  <div class="caption">
    <h2>遺物</h2>
    <table>
      <tbody>
        <tr>
          <td>王冠</td>
          <td>
            <equipment
              v-bind:waking="this.$store.state.artifact.crown"
              @input="val => this.$store.commit('artifact/setCrown', val)" 
            />
          </td>
        </tr>
        <tr>
          <td>鞭</td>
          <td>
            <equipment
              v-bind:waking="this.$store.state.artifact.whip"
              @input="val => this.$store.commit('artifact/setWhip', val)" 
            />
          </td>
        </tr>
        <tr>
          <td>優秀賞</td>
          <td>
            <equipment
              v-bind:waking="this.$store.state.artifact.award"
              @input="val => this.$store.commit('artifact/setAward', val)" 
            />
          </td>
        </tr>
        <tr>
          <td>羽根</td>
          <td>
            <equipment
              v-bind:waking="this.$store.state.artifact.wing"
              @input="val => this.$store.commit('artifact/setWing', val)" 
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Equipment from '~/components/Equipment'

export default {
  components: {
    Equipment
  } 
}
</script>

<style lang="sass" scoped>
  @import "~/assets/style/caption.sass"
</style>