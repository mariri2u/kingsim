<template>
  <div>
    <span v-bind:class="{active: waking==-1}" @click="selected(-1)" class="equipment-waking">無し</span>
    <span v-bind:class="{active: waking==0}" @click="selected(0)" class="equipment-waking">☆0</span>
    <span v-bind:class="{active: waking==1}" @click="selected(1)" class="equipment-waking">☆1</span>
    <span v-bind:class="{active: waking==2}" @click="selected(2)" class="equipment-waking">☆2</span>
    <span v-bind:class="{active: waking==3}" @click="selected(3)" class="equipment-waking">☆3</span>
    <span v-bind:class="{active: waking==4}" @click="selected(4)" class="equipment-waking">☆4</span>
    <span v-bind:class="{active: waking==5}" @click="selected(5)" class="equipment-waking">☆5</span>
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
</style>