<template>
  <section>
    <div id="square"
    
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
  methods: {
    onClick() {
      this.rounded = !this.rounded;
      console.log(this.amount);
    }
  }
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



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
}

.round {
  border-radius: 50px;
}

</style>
