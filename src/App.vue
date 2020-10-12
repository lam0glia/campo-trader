<template>
  <div id="app">
    <navbar />
    <b-container class="mt-2">
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Navbar from './containers/Navbar'

export default {
  name: 'App',
  components: { Navbar }
}
</script>
