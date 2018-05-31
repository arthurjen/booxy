<template>
  <div class="rows">
      <Square
      v-for="n in 5"
      :key="n"
      :amount="number"
      />
  </div>
</template>

<script>
import Square from './Square.vue';

export default {
  data() {
    return {
      number: '3'
    }
  },
  components: {
    Square
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rows {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
