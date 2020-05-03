<template>
  <div class="container">
    <div class="chats-layout">
      <messages :messages="messages"/>
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
        db.collection('channels').doc(channelID).collection('messages').orderBy('createdAt')
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                const doc = change.doc
                if (change.type === 'added') {
                    this.messages.push({id: doc.id, ...doc.data()})
                }
            })
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