<template>
  <section>
    <div id="square"
    v-for="n in 5"
    :key="n">
    </div>
  </section>
</template>

<script>
export default {
  props: ['amount']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

section {
  display: flex;
}

#square {
  width: 100px;
  height: 100px;
  background: orange;
  margin: 5px 5px;
  transition:all 0.5s ease;
}

#square:hover {
  background: red;
}
</style>
