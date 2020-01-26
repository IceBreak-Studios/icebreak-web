<template>
  <v-container class="games">
    <get-pucked-card/>
  </v-container>
</template>
<script>
import GetPuckedCard from './GetPuckedCard'

export default {
  name: 'Games',
  components: { GetPuckedCard },
  data: () => ({
  })
}

</script>
<style lang="scss" scoped>
  .games {
    display: flex;
    justify-content: center;
  }

</style>
