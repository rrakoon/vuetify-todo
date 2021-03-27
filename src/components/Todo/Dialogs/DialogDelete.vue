<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="headline"> Delete Task?? </v-card-title>
      <v-card-text class="primary--text">
        선택하신 Task를 삭제하시겠습니까???
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="$emit('close')">
          취소
        </v-btn>
        <v-btn
          color="red lighten-1"
          text
          @click="$store.dispatch('deleteTask', task.id)"
        >
          확인
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
};
</script>

<style>
</style>