<template>
  <div class="about">
    <h1>About</h1>
    <button @click="storeCounter.increaseCount" class="button">{{ storeCounter.count }}</button>
  </div>
</template>

<script setup>
import {useCounterStore} from "../stores/counter"

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
