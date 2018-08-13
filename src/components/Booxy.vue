<template>
  <div id="booxy">
    <h1 v-if="showTitle">booxy</h1>
    <section id="box-container" @click="showTitle = false">
      <Boox/>
    </section>
  </div>
</template>

<script>
import Boox from './Boox'

export default {
  data() {
    return {
      showTitle: true
    }
  },
  components: {
    Boox
  }
}
</script>

<style scoped>
#booxy {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  position: absolute;
  color: white;
  top: 47%;
  font-size: 1em;
}

#box-container {
  width: 800px;
  height: 800px;
}


</style>
