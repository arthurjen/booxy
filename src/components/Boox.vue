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
  name: 'Boox',
  methods: {
    getRandomColor() {
      var letters = '789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}
  }
}
</script>

<style scoped>

.boox {
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  grid-gap: 1px 1px;
  height: 100%;
  width: 100%;
  background: #0057AC;
  transition:all 2s ease;
}

.hidden {
  background: white;
}
</style>