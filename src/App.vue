<template>
  <h1>Image Grid Scroller</h1>
  <h2>door Onno van der Zee</h2>
  <TenThousand />
</template>

<script>
import TenThousand from "./components/TenThousand.vue";

export default {
  name: "App",
  components: {
    TenThousand
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
  text-align: center;
  color: #2c3e50;
  margin: 1.5em;
}
</style>
