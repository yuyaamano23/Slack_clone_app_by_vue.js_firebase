<template>
  <div class="app-layout">
    <div class="sidebar">
      <p>チャンネル一覧</p>
      <p v-for="channel in channels" :key="channel.name">{{ channel.name }}</p>
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
        // console.log(doc.id, " => ", doc.data())
        this.channels.push(doc.data())
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

.main-content {
 width: 100%;
 background:#F1F1F1;
 height: 100vh;
}
</style>
