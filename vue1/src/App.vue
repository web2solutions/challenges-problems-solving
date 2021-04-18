<template>
  <div id="app">
    <Hello></Hello>
    <Counter></Counter>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import Counter from './components/Counter.vue'
export default {
  name: "App",
  components: {
    Hello,
    Counter
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
