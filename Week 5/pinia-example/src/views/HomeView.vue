<template>
  <div class="home">
    <h1>Home</h1>
    <div class="count">{{ storeCounter.count }}</div>
    <hr />
    <div class="buttons">
      <button class="button" @click="storeCounter.decreaseCount">--</button>
      <button class="button" @click="storeCounter.increaseCount">++</button>
    </div>
    <hr />
    <div class="numberType">
      <h1>This counter is {{ storeCounter.oddOrEven }}</h1>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter"

// use of store constant as a method inside this file
const storeCounter = useCounterStore();

</script>

<style>
.count{
  font-size: 80px;
  margin: 30px;
}

.button {
  font-size: 40px;
  margin: 25px;
}

</style>

