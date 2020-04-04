<template>
  <div>
    <span v-bind:class="{active: waking==-1}" @click="selected(-1)" class="equipment-waking">無し</span>
    <span v-bind:class="{active: waking==0}" @click="selected(0)" class="equipment-waking">未昇格</span>
    <span v-bind:class="{active: waking==1}" @click="selected(1)" class="equipment-waking">1昇格</span>
    <span v-bind:class="{active: waking==2}" @click="selected(2)" class="equipment-waking">2昇格</span>
  </div>
</template>

<script>
export default {
  props: {
    waking: Number
  },
  methods: {
    selected: function(value){
      this.$emit('input', value)
    }
  }
}
</script>

<style lang='sass' scoped>
  @import "~/assets/style/equipment.sass"

  .equipment-waking
    width: 60px

</style>