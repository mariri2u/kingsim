<template>
  <section class="section">
    <div class="caption">
      <h2>入力</h2>
      <table>
        <tr>
          <td>攻撃力</td>
          <td><input type="text" v-model="x0" /></td>
          <td><input type="text" v-model="x1" /></td>
        </tr>
        <tr>
          <td>スキル威力</td>
          <td><input type="text" v-model="y0" /></td>
          <td><input type="text" v-model="y1" /></td>
        </tr>
      </table>
    </div>
    <div class="caption">
      <h2>計算結果</h2>
      <table>
        <tr>
          <td>スキル基礎値</td>
          <td><input type="text" v-model="base" readonly /></td>
        </tr>
        <tr>
          <td>スキル倍率</td>
          <td><input  type="text" v-model="magni" readonly /></td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      x0: 0,
      x1: 0,
      y0: 0,
      y1: 0
    }
  },
  computed: {
    base: function() {
      let b = this.y0 - this.x0 * this.magni
      b = Math.round(b)
      return b || 0
    },
    magni: function() {
      let b = (this.y1 - this.y0) / (this.x1 - this.x0)
      b = b * 100
      b = Math.round(b)
      b = b / 100
      return b || 0
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "~/assets/style/caption.sass"
</style>
