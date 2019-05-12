<template>
  <v-layout align-center>
    <v-flex xs12>
      <v-form ref="form">
        <h1>{{ bug.title }}</h1>

        <h2>Description</h2>
        <p>{{ bug.description }}</p>

        <h3>Date Created</h3>
        <p>{{ bug.dateCreated }}</p>

        <v-btn color="information" :to="'/bugs'">
          Go Back
        </v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {},
  validate({ params }) {
    return !isNaN(+params.id)
  },
  data() {
    const params = this.$route.params
    const bug = this.$store.getters['bugs/getById'](+params.id)
    return {
      bug: bug
    }
  }
}
</script>
