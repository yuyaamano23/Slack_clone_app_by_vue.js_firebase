<template>
  <div class="container">
    <button v-on:click="login">ログイン</button>
  </div>
</template>

<script>
import { firebase } from '~/plugins/firebase'

export default {
  methods: {
    login () {
      window.alert('ログインするよ')
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          const user = result.user
          console.log(user)
        }).catch((error) => {
          window.alert(error)
        })
    }
  }
}
</script>

<style scoped>

</style>