<template>
  <navbar />
  <RouterView />
</template>

<script>
import Navbar from './components/Navbar.vue';
import navBar from './components/Navbar.vue'
export default {
  components: { Navbar },
  name: "App",
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
