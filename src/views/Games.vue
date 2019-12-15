<template>
  <v-container class="games">
    <v-card class="get-pucked-game" @click="show = !show">
      <div>
        <v-img height="200px" width="200px" alt="IceBreak logo" src="../assets/InstalledGameIcon.png"/>
        <v-card-title>Get Pucked</v-card-title>
        <v-expand-transition>
          <div v-show="show">
            <v-divider/>
            <v-card-text>
              <h3>About:</h3>
              <div>The concept of Get Pucked is to defeat your enemy before they defeat you.</div>
              <div>In order to do that, you must use your 'puck' and 'flick' the puck as accurately as you can in order to break through the enemy defenses and destroy their core.</div>
              <div>Along the way you will acquire buffs to make your pucks stronger and more effective.</div>
              <br/>
              <div>Survive as long as you can!</div>
              <br/>
            </v-card-text>
            <v-card-actions>
              <v-tooltip left>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on">Store Link</v-btn>
                </template>
                <span>Coming Soon!</span>
              </v-tooltip>
              <v-divider/>
              <v-btn to="privacy-policy">Privacy Policy</v-btn>
            </v-card-actions>
          </div>
        </v-expand-transition>
      </div>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'Games',
  data: () => ({
    show: false
  })
}

</script>
<style lang="scss">
  .games {
    display: flex;
    justify-content: center;
  }

  .get-pucked-game {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: auto;
  }

</style>
