<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps(['color'])
const hide = ref(false);


function changeColor(color: string) {
  const increments = [-30, 30];

  const [red ,green, blue] = color.slice(4,-1).split(',').map(n => {
    const toIncrement = increments[Math.floor(Math.random() * increments.length)];
    return Math.abs(Number(n) + toIncrement);
  });

  return `rgb(${red},${green},${blue})`
}

const newColor = changeColor(props.color);
const myStyle = ref({ backgroundColor: newColor });

function updateClicked() {
  hide.value = true;
  myStyle.value = { backgroundColor: "white" };
}
</script>

<template>
  <Transition name="bounce" appear>
    <div class="boox"
      @click="updateClicked"
      :style="myStyle"
    >
      <BooxItem
        v-if="hide"
        v-for="n in 4"
        :key="n"
        :color="newColor"
      />
    </div>
  </Transition>
</template>

<style scoped>


.boox {
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  grid-gap: 1px 1px;
  height: 100%;
  width: 100%;
}
.hidden {
  background-color: white;
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
