<template>
  <div class="home">
    <v-img alt="IceBreak logo" src="../assets/InstalledGameIcon.png"/>
    <LandingPage/>
    <h1>wat</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from '@/components/LandingPage.vue'

export default {
  name: 'home',
  components: {
    LandingPage
  }
}
</script>
