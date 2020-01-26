<template>
  <v-card class="get-pucked-game">
    <div>
      <v-img height="200px" width="200px" alt="IceBreak logo" src="../assets/InstalledGameIcon.png"/>
      <v-card-title>Get Pucked</v-card-title>
      <div>
        <v-divider/>
        <v-card-text>
          <v-row
            justify="left"
          >
            <v-col class="px-0" style="flex-grow: 0;">
              <v-btn icon elevation='0' style="padding-left: 0;">
                <a
                  target="_blank"
                  href='https://play.google.com/store/apps/details?id=com.IcebreakStudios.GetPucked&hl=en_US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img
                  width='136px' height='60px' alt='Get it on Google Play' src='../assets/google-play-badge.png'/></a>
              </v-btn>
            </v-col>

            <v-col class="px-0" style="flex-grow: 0;">
              <v-btn icon elevation='0'>
                <a target="_blank" href='https://apps.apple.com/us/app/get-pucked/id1488272958'><img
                  alt='Download on the App Store'
                  src='../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'/></a>
              </v-btn>
            </v-col>
            <v-col class="px-0" style="flex-grow: 0; margin-left: 10px; padding-top: 9px" width='120px' height='40px'>
              <v-btn to="privacy-policy" style='background-color: #000000; color: #FFFFFF;' elevation='0' width='100%'
                     height='100%'>Privacy Policy
              </v-btn>
            </v-col>
          </v-row>
          <v-row
            justify="left"
            class="flex-column ma-0"
            style="flex-grow: 0;"
          >
            <v-col class="px-0" style="flex-grow: 0;">
              <h3>About:</h3>
              <div>The concept of Get Pucked is to defeat your enemy before they defeat you.</div>
              <div>In order to do that, you must use your 'puck' and 'flick' the puck as accurately as you can in order
                to
                break through the enemy defenses and destroy their core.
              </div>
              <div>Along the way you will acquire buffs to make your pucks stronger and more effective.</div>
              <br/>
              <div>Survive as long as you can!</div>
              <br/>
            </v-col>
          </v-row>
        </v-card-text>
      </div>

    </div>
  </v-card>
</template>
<script>
export default {
  name: 'get-pucked-card'
}
</script>
<style lang="scss" scoped>

  .get-pucked-game {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: auto;
  }
</style>
