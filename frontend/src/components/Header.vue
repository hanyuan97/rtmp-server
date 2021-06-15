<template>
  <div>
    <v-card tile class="mx-auto overflow-hidden" width="100%">
      <v-toolbar color="light-blue" dark>
        <v-app-bar-nav-icon @click="getStreamTitle"></v-app-bar-nav-icon>
        <v-toolbar-title style="cursor: pointer" @click="$router.push('/')" >
          <strong>Lab7 - Live Streaming via srsLTE</strong>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn text class="mr-2 btn-drug" @click="more">
          <span v-if="drug===0">drug</span>
          <span v-else-if="drug===1">more</span>
          <span v-else-if="drug===2">heaven</span>
        </v-btn>
        <v-btn text v-if="drug>=3">all pass!!!</v-btn>
      </v-toolbar>
    </v-card>
    <v-navigation-drawer v-model="drawer" absolute temporary class="pt-8">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h5">
            <strong>串流清單</strong>
          </v-list-item-title>
          <v-list-item-subtitle>
            Streaming list
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item-group v-model="group">
          <v-list-item link v-for="(stream, idx) in streams" :key="'stream' + idx" :to="'/'+stream">
            <v-list-item-icon>
              <v-icon :class="{'ranbow-text': drug >= 1}">mdi-video-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title :class="{'ranbow-text': drug >= 1}">{{ stream }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-list-item v-if="streams.length===0">
          <v-list-item-content>
            <v-list-item-title>目前無串流影像</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>  
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data: () => ({
    drawer: false,
    streams: [],
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  computed: {
    ...mapState(["drug"])
  },
  methods: {
    ...mapMutations(["more", "less"]),
    async getStreamTitle() {
      const res = await this.$http.get("stream");
      this.streams = res.data;
      this.drawer = !this.drawer;
    }
  }
};
</script>