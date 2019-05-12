<template>
  <v-layout align-center>
    <v-flex xs12>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="title"
          :counter="100"
          :rules="titleRules"
          label="Title"
          required
        ></v-text-field>
        <v-textarea
          v-model="description"
          :rules="descriptionRules"
          label="Description"
          required
        ></v-textarea>

        <v-btn :disabled="!valid" color="success" @click="submit">Submit</v-btn>
        <v-btn color="error" @click="reset">Reset Form</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {},
  data: () => ({
    valid: true,
    title: '',
    titleRules: [
      v => !!v || 'Title is required',
      v => (v && v.length <= 100) || 'Title must be less than 100 characters'
    ],
    description: '',
    descriptionRules: [v => !!v || 'Description is required']
  }),
  methods: {
    submit() {
      if (!this.$refs.form.validate()) {
        return
      }

      const todo = {
        title: this.title,
        description: this.description
      }

      this.$store.commit('bugs/add', todo)
      this.$router.push('/bugs')
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    }
  }
}
</script>
