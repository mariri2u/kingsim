<template>
  <section class="section">
    <labrill />
    <velonica />
    <artifact />
  </section>
</template>

<script>
import Labrill from '~/characters/Labrill'
import Velonica from '~/characters/Velonica'
import Artifact from '~/components/Artifact'

export default {
  components: {
    Labrill,
    Velonica,
    Artifact
  }
}
</script>
