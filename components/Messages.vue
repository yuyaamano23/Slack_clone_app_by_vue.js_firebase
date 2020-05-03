<template>
 <div class="chats-container">
   <message v-for="message in messages" :key="message" :message="message"/>
 </div>
</template>

<script>
import Message from '~/components/Message'

export default {
    props: [
        'messages'
    ],
    components: {
        Message
    },
    mounted () {
        console.log(this.messages)
    }
    
}
</script>

<style scoped>
.chats-container {
    padding-left: 16px;
}
</style>