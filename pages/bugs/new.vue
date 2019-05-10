<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <new-bug />
    </v-flex>
  </v-layout>
</template>

<script>
import NewBug from '~/components/bugs/NewBug.vue'

export default {
  components: {
    NewBug
  }
}
</script>
