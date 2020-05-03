<template>
  <div class="app-layout">
    <div class="sidebar">
    </div>
    <div class="main-content">
      <nuxt />
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

.app-layout {
 display: flex;
}

.sidebar {
 width: 300px;
 background:#4A4141;
 height: 100vh;
}

.main-content {
 width: 100%;
 background:#F1F1F1;
 height: 100vh;
}
</style>
