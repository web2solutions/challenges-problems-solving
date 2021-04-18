<template>
  <div>
    <h2 class="counter">{{ counter }}</h2>
    <p class="counter-button" v-on:click="handlerOnClick">Click</p>
  </div>
</template>

<script>
export default {
  name: "counter",
  data: () => ({
    counter: 42
  }),
  methods: {
    handlerOnClick () {
      this.counter += 1
      console.log(this.counter)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
