<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p @click="handlerOnClick">{{this.a}}</p>
  </div>
</template>

<script>
export default {
  name: "Hello",
  props: {
    msg: String
  },
  data: () => ({
    a: 'Hello'
  }),
  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {
    console.log("created")
  },
  beforeMount() {
    console.log("beforeMount")
  },
  mounted() {
    console.log("mounted")
  },
  beforeUpdate() {
    console.log("beforeUpdate")
  },
  updated() {
    console.log("updated")
  },
  beforeDestroy() {
    console.log("beforeDestroy")
  },
  destroyed() {
    console.log("destroyed")
  },
  methods: {
    handlerOnClick () {
      console.log('click')
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
