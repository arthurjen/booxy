<template>
  <transition name="bounce">
    <div class="boox"
      @click="clicked = true"
      :class="{ hidden: clicked }"
    >
      <Boox
      v-if="clicked"
      v-for="n in 4"
      :key="n"
      />
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      clicked: false,
    }
  },
  name: 'Boox'
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
  
}

.hidden {
  background: white;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(1);
    opacity: 0;
    border-radius: 50%;
  }
  50% {
    transform: scale(.9);
    opacity: .5;
    border-radius: 25%;
  }
  100% {
    transform: scale(1);
    opacity: 1;
    border-radius: 0%;
  }
}

</style>