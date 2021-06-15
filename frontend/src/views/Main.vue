<template>
  <div class="d-flex align-center justify-center pt-5 flex-column">
    <v-card flat color="#00000000" width="900px">
      <div :class="{ 'zoom-in-out': drug >= 2 }">
        <div
          class="d-flex align-end justify-center"
          :class="{ rotate: drug >= 2 }"
        >
          <div>
            <v-icon :class="{ 'ranbow-text': drug >= 1 }" class="super-big">
              mdi-video-wireless
            </v-icon>
          </div>
          <h1 :class="{ 'ranbow-text': drug >= 1 }" class="big">
            <span>串流清單</span>
          </h1>
        </div>
      </div>
      <v-divider></v-divider>
      <v-list color="#00000000" class="video-list">
        <v-list-item-group v-model="group">
          <v-list-item
            link
            v-for="(stream, idx) in streams"
            :key="'stream' + idx"
            :to="'/' + stream"
            :class="{ 'rotate-reverse': drug >= 2 }"
          >
            <v-list-item-icon>
              <v-icon :class="{ 'ranbow-text': drug >= 1 }">
                mdi-video-outline
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title :class="{ 'ranbow-text': drug >= 1 }">
                {{ stream }}
              </v-list-item-title>
            </v-list-item-content>
            <v-fade-transition>
              <div v-if="drug >= 2" class="center-dot">
                <img src="/images/cat.jpg" class="rotate-fast" />
              </div>
            </v-fade-transition>
          </v-list-item>
        </v-list-item-group>
        <v-list-item v-if="streams.length === 0">
          <v-list-item-content>
            <v-list-item-title>目前無串流影像</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    streams: [],
    group: null,
  }),
  computed: {
    ...mapState(["drug"]),
  },
  async created() {
    const res = await this.$http.get("stream");
    this.streams = res.data;
  },
};
</script>

<style lang="scss" scoped>

@media (max-width: 600px) {
  .super-big {
    font-size: 80px !important;
  }
  .big {
    font-size: 40px !important;
  }
}

@media (min-width: 600px) and (max-width: 1200px) {
  .super-big {
    font-size: 120px !important;
  }
  .big {
    font-size: 60px !important;
  }
}

@media (min-width: 1200px) and (max-width: 1600px) {
  .super-big {
    font-size: 180px !important;
  }
  .big {
    font-size: 90px !important;
  }
}

@media (min-width: 1600px) {
  .super-big {
    font-size: 200px !important;
  }
  .big {
    font-size: 100px !important;
  }
}



.video-list {
  position: relative;
  z-index: 3;
}

.move:hover {
  top: 100px;
}

.rotate {
  z-index: 0;
  position: relative;
}

.center-dot {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: #03a9f4 solid 0px;
  position: absolute;
  left: 425px;
  overflow: hidden;
  z-index: 10;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>