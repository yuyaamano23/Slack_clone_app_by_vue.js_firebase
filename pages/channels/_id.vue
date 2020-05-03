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
import { db } from '~/plugins/firebase'

export default {
  components: {
    Messages,
    ChatForm
  },
  data () {
      return {
          messages: []
      }
  },
  mounted () {
      const channelID = this.$route.params.id
      db.collection('channels').doc(channelID).collection('messages').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            this.messages.push({id: doc.id, ...doc.data()})
            })
            console.log(this.messages) // 開発用に
        })
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