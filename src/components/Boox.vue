<template>
  <div class="boox"
    @click="clicked = true"
    :class="[{ hidden: clicked }]"
    >
      <Boox
      v-if="clicked"
      v-for="n in 4"
      :key="n"
      />
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicked: false
    }
  },
  name: 'Boox'
}
</script>

<style scoped>

.boox {
  display: grid;
  grid-template: 49% 49% / 49% 49%;
  grid-gap: 2% 2%;
  height: 100%;
  width: 100%;
  background: orange;
  box-sizing: border-box;
  border: 1px solid white;
  transition:all 2s ease;
  border-radius: 15%;
}

.hidden {
  background: white;
}
</style>
