<template>
  <h1>Image Grid Scroller</h1>
  <h2>door Onno van der Zee</h2>
  <TenThousand />
  <section style="display: none">
  	<a class="app_link" href="/services/apps/72157718495764908/">ten-thousand-images</a>
  	<p>
  		<strong>Key:</strong><br>
  		<span class="api-key-info">980b06a4493f051d32e73dc5af2f56bc</span>
  	</p>
  	<p>
  		<strong>Secret:</strong><br>
  		<span class="api-key-info">1092b4b4de32d7ce</span>
  	</p>
  	<p id="ag-done-action-links">
  		<a href="/services/apps/72157718495764908/">Edit app details</a>
  		<span>-</span>
  		<a href="/services/apps/72157718495764908/auth">Edit auth flow for this app</a>
  		<span>-</span>
  		<a href="/services/apps/by/me">View all Apps by You</a>
  	</p>
  </section>
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
