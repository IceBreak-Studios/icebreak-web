<template>
  <v-container class="about">
    <v-card max-width="800">
      <v-card-text class="text-center">
        <h1 class="welcome-header">About</h1><br/><br/>
        <div class="welcome-text">Our team is very unique in the sense that we don't work side by side with one another. We were brought together remotely through our skillsets and are now working remotely in order to develop the games we want to make!</div><br/>
        <div class="welcome-text">The games we are focusing on right now are primarily for mobile devices. This helps keep the scope smaller, which allows us to learn how to become a more productive team before working on larger scale, long-term projects.</div><br/>
        <div class="welcome-text">With the help of the community, we are striving to bring some truly unique and fun games to the market. We hope that with your feedback, and our passion, we can make games that you honestly want to play!</div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  components: {}
}
</script>
<style lang="scss">
  .welcome-header {
    font-size: 50px;
    text-align: center;
    color: black;
  }
  .welcome-text {
    font-size: 24px;
    color: black;
    text-align: left;
    line-height: 30px;
  }

  .about {
    display: flex;
    justify-content: center;
  }

</style>
