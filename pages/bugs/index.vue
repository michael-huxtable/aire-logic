<template>
  <v-layout align-center>
    <v-flex xs12>
      <v-list two-line subheader>
        <v-subheader inset>Bug List</v-subheader>

        <v-list-tile v-for="item in bugs" :key="item.title" avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title>
              {{ item.description }}
            </v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon ripple>
              <v-icon color="grey lighten-1">info</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({ bugs: state => state.bugs.list })
  }
}
</script>
