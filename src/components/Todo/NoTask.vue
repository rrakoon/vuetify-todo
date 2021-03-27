<template>
  <div class="no-tasks">
    <v-icon size="250" color="red lighten-4"> mdi-block-helper </v-icon>
    <div class="text-h5 primary--text">
      <br>
      <p style="text-align: center">No Tasks.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
.no-tasks
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%,-50%)
</style>