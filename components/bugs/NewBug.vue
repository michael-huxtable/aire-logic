<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>
    <v-textarea
      v-model="description"
      :rules="descriptionRules"
      label="Description"
      required
    ></v-textarea>

    <v-btn :disabled="!valid" color="success" @click="validate">Validate</v-btn>
    <v-btn color="error" @click="reset">Reset Form</v-btn>
    <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
  </v-form>
</template>

<script>
export default {
  components: {},
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    description: '',
    descriptionRules: [v => !!v || 'Description is required']
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
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
