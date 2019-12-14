<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="IceBreak Logo"
          class="shrink mr-2"
          contain
          src="./assets/InstalledGameIcon.png"
          transition="scale-transition"
          width="40"
        />
        <v-toolbar-title>IceBreak Studios</v-toolbar-title>
      </div>

      <v-spacer/>
      <v-toolbar-items>
        <v-btn to="/">Home</v-btn>
        <v-btn to="/games">Games</v-btn>
        <v-btn to="/privacypolicy">Privacy Policy</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  })
}
</script>
