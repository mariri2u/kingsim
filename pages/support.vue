<template>
  <section class="section">
    <labrill />
    <velonica />
    <artifact />
  </section>
</template>

<script>
import Labrill from '~/components/Labrill'
import Artifact from '~/components/Artifact'
import Velonica from '~/components/Velonica'

export default {
  components: {
    Labrill,
    Velonica,
    Artifact
  }
}
</script>
