<template>
 <div class="chats-container">
   <Message />
   <Message />
   <Message />
   <Message />
   <Message />
   <Message />
   <Message />
   <Message />
   <Message />
   <Message />
   <Message />
   <Message />
   <Message />
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
    padding-left: 16px;
}
</style>