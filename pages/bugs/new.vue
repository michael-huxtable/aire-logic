<template>
  <v-layout align-center>
    <v-flex xs12>
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
