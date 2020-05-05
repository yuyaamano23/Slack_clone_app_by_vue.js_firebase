<template>
 <div class="input-container">
   <!-- <textarea v-on:click="login"></textarea> -->
   <textarea v-model="text" v-on:keydown.enter="addMessage"></textarea>
 </div>
</template>

<script>
import { db } from '~/plugins/firebase'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

export default {
    data () {
        return {
            text: null
        }
    },
    methods: {
        addMessage(event) {
            if (this.keyDownedForJPConversion(event)) { return }
            const channelId = this.$route.params.id
            db.collection('channels').doc(channelId).collection('messages').add({ 
                text: this.text, 
                createdAt: new Date().getTime()
            })
            .then(() => {
                this.text = null
            })
        },
        keyDownedForJPConversion (event) {
            const codeForConversion = 229
            return event.keyCode === codeForConversion
        }
        // login () {
        //     window.alert('ログインしろよくそが')
        // }
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
