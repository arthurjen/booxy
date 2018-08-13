<template>
  <div id="app">
    <nav class="main-nav">
      <router-link to="/">Home</router-link>
      <br>
      <router-link to="/booxy">Booxy</router-link>
      <br>
      <router-link to="/scootsy">Scootsy</router-link>
    </nav>
    <router-view class="content"/>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
#app {
  display: grid;
  grid-template: auto / 200px auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
} 

.main-nav {
  border-right: 1px solid lightgrey;
}

</style>
