<template>
  <div class="container">
  </div>
</template>

<script>
import { firebase } from '~/plugins/firebase'

export default {
  mounted () {
    console.log(this.$store.getters.isAuthenticated)
  },
  methods: {
  }
}
</script>

<style scoped>

</style>