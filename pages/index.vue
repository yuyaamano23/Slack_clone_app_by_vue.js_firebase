<template>
  <div class="container">
    <div class="chats-layout">
      <messages />
    </div>
    <div class="input-layout">
      <ChatForm />
    </div>
  </div>
</template>

<script>
import Messages from '~/components/Messages.vue'
import ChatForm from '~/components/ChatForm.vue'

export default {
  components: {
    Messages,
    ChatForm
  }
}
</script>

<style scoped>
.container {
  height: 100%;
}
.chats-layout {
  overflow: scroll;
  height: 85%;
}
.input-layout {
  height: 15%;
}

</style>