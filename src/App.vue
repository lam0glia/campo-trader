<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './containers/Navbar'

export default {
  name: 'App',
  components: { Navbar }
}
</script>
