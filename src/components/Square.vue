<template>
  <section>
    <div id="square"
    v-for="n in 5"
    :key="n"
    v-on:click="onClick"
    :class="{ round: rounded }">
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      rounded: false
    }
  },
  props: ['amount'],
  methods: {
    onClick() {
      this.rounded = !this.rounded;
    }
  }
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
  transition:all 1s ease;
}

#square:hover {
  background: red;
  transform: scale(1.1);
  transition:all 1s ease;
}

.round {
  border-radius: 50px;
}

</style>
