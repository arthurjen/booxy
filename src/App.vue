<script setup lang="ts">
  import BooxItem from './components/BooxItem.vue'
  const newColor = "rgb(0, 86, 172)";
</script>

<template>
  <main>
    <h1 id="title">booxy</h1>
    <div id="box-container">
      <BooxItem :color="newColor"/>
    </div>
  </main>
</template>

<style scoped>
  #title {
    margin: 50px;
  }

  #box-container {
    width: 800px;
    height: 800px;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
