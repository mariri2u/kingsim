<template>
  <div>
    <h2>{{ name }}</h2>
    <table>
      <tbody>
        <tr>
          <td>王冠</td>
          <td><input /></td>
        </tr>
        <tr>
          <td>鞭</td>
          <td><input /></td>
        </tr>
        <tr>
          <td>優秀賞</td>
          <td><input /></td>
        </tr>
        <tr>
          <td>羽根</td>
          <td><input /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '遺物'
    }
  } 
}
</script>