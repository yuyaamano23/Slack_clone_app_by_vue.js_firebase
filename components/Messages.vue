<template>
 <div class="chats-container">
   <Message />
   <Message />
 </div>
</template>

<script>
import Message from '~/components/Message'

export default {
    components: {
        Message
    }
    
}
</script>

<style scoped>
.chats-container {
    padding: 16px;
}
</style>