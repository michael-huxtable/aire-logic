<template>
  <v-layout align-center>
    <v-flex xs12>
      <v-list two-line subheader>
        <v-subheader>All Bugs</v-subheader>

        <v-list-tile v-for="item in bugs" :key="item.title">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title>
              {{ item.dateCreated }}
            </v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <NuxtLink :to="'/bugs/' + item.id">
              <v-icon color="grey lighten-1">info</v-icon>
            </NuxtLink>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ bugs: 'bugs/getAll' })
  }
}
</script>
