<script setup lang="ts">
import BooxItem from './components/BooxItem.vue'
const newColor = "rgb(0, 86, 172)";
</script>

<template>
  <main>
    <h1>booxy</h1>
    <div id="box-container">
      <BooxItem :color="newColor"/>
    </div>
  </main>
</template>

<style scoped>
#box-container {
  width: 800px;
  height: 800px;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
