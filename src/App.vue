<template>
  <div id="app">
    <Test />
  </div>
</template>

<script>
import Test from './components/Test.vue'

export default {
  name: 'App',
  components: {
    Test
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Consolas, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color:#1e1e1e;
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0;
  padding: 0;
}
</style>
