<template>
  <div class="app-layout">
    <div class="sidebar">
      <p>チャンネル一覧</p>
      <p v-for="channel in channels" :key="channel.name">
        <!-- {{ channel.name }} -->
        <nuxt-link :to="`/channels/${channel.id}`" class="channel">{{ channel.name }}</nuxt-link>
      </p>
    </div>
    <div class="main-content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import { db } from '~/plugins/firebase'

export default {
  data () {
    return {
      channels: []
    }
  },
  mounted () {
    db.collection('channels').get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // this.channels.push(doc.data())
        this.channels.push({id: doc.id, ...doc.data()})
      })
      console.log(this.channels)
    })
  }
}
</script>
<style>
* {
  margin: 0;
  /* padding: 0; */
}

.app-layout {
 display: flex;
}

.sidebar {
 width: 300px;
 background:#4A4141;
 /* height: 100vh; */
 padding: 20px;
}

.sidebar p {
  color: #DDDDDD;
  padding-top: 4px;
}

.channel {
  text-decoration: underline;
  color: #DDDDDD;
}

.main-content {
 width: 100%;
 background:#F1F1F1;
 height: 100vh;
}
</style>
