<template>
  <div id="app">
    <h1>booxy</h1>
    <section id="box-container">
      <Boox/>
    </section>
  </div>
</template>

<script>
import Boox from './components/Boox'

export default {
  components: {
    Boox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  position: absolute;
  top: 47%;
  color: white;
  font-size: 1em;
}
#box-container {
  width: 800px;
  height: 800px;
}
</style>
