<template>
  <div class="app">
    <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
.app{
  text-align: center;
}
</style>



