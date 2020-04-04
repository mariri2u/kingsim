<template>
  <div>
    <h2>ラブリル {{ weapon }}</h2>
    <table>
      <tbody>
        <tr>
          <td>専用武器</td>
          <td>
            <equipment
              v-bind:waking="this.weapon"
              @input="val => weapon = val" 
            />
          </td>
        </tr>
        <tr>
          <td>ソウルウェポン</td>
          <td>
            <soul-weapon
              v-bind:waking="this.soul"
              @input="val => soul = val" 
            />
          </td>
        </tr>
        <tr>
          <td>専用宝物</td>
          <td>
            <equipment
              v-bind:waking="this.treasure"
              @input="val => treasure = val" 
            />
          </td>
        </tr>
        <tr>
          <td>魔王軍</td>
          <td><input /></td>
        </tr>
        <tr>
          <td>クリダメ</td>
          <td><input /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Equipment from '~/components/Equipment'
import SoulWeapon from '~/components/SoulWeapon'

export default {
  components: {
    Equipment,
    SoulWeapon
  },
  data() {
    return {
      name: 'ラブリル',
      weapon: 1,
      soul: 0,
      treasure: 1
    }
  }
}
</script>
