<template>
  <section>
    <Square class="square"
      v-for="n in amount"
      :key="n"
      :class="n + amount"
    />
  </section>
</template>

<script>
import Square from './Square.vue';

export default {
  components: {
    Square
  },
  props: ['amount']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  display: flex;
}
</style>
