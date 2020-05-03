<template>
 <div class="input-container">
   <textarea v-on:click="login"></textarea>
 </div>
</template>

<script>
export default {
    methods: {
        login () {
            window.alert('ログインしろよくそが')
        }
    }
}
</script>
<style scoped>
.input-container {
  padding: 10px;
  height: 70%;
}
textarea {
  width: 100%;
  height: 100%;
}
</style>