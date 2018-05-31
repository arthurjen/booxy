<template>
  <div class="rows">
      <Row
      v-for="n in number"
      :key="n"
      :id="n"
      :amount="number"
      />
  </div>
</template>

<script>
import Row from './Row.vue';

export default {
  data() {
    return {
      number: 3
    }
  },
  components: {
    Row
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
