<template>
  <div id="app">
    <header>
      <h1>booxy</h1>
    </header>
    <section id="box-container">
      <GridContainer/>
    </section>
  </div>
</template>

<script>
import GridContainer from './components/GridContainer.vue'

export default {
  components: {
    GridContainer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
