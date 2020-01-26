<template>
  <v-container class="home">
    <v-card max-width="800">
      <v-card-text class="text-center">
        <h1 class="welcome-header">Welcome!</h1><br/><br/>
        <div class="welcome-text">We are IceBreak Studios, a newly founded indie studio wanting to break into the industry with new and exciting games!</div><br/>
        <div class="welcome-text">Most of the team are avid gamers and bring a variety of different skill sets and designs. We are bringing all of that together to create new and unique games for anyone to enjoy!</div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: 'home',
  components: {}
}
</script>
<style lang="scss" scoped>
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

  .home {
    display: flex;
    justify-content: center;
  }

</style>
