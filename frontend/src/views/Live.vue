<template>
  <div class="d-flex align-center justify-center pt-5 flex-column">
    <h1 class="mb-2" :class="{'zoom-in-out': drug>=2}">
      <span :class="{'ranbow-text': drug >= 1}">{{ $route.params.id }}</span>
      <span :class="{'ranbow-text': drug >= 1}" v-show="!exist"> 無此串流</span>
    </h1>
    <v-responsive :aspect-ratio="16/9" v-show="exist" class="player" :class="{'dvd-move': drug>=2}">
      <video ref="videoPlayer" class="video-js vjs-big-play-centered" controls muted></video>
    </v-responsive>
  </div>
</template>

<script>
import { mapState } from "vuex";
import videojs from 'video.js';
import 'video.js/dist/video-js.css'
require('videojs-contrib-quality-levels')
require('videojs-hls-quality-selector')

export default {
  data: () => ({
    player: null,
    exist: false,
    url: "",
    options: {
      autoplay: true,
      controls: true,
      sources: [],
    },
  }),
  computed: {
    ...mapState(["drug"])
  },
  watch: {
    async $route() {
      await this.checkStreamPath()
      this.player.src({
        src: this.url,
        type: "application/vnd.apple.mpegurl",
      })
    }
  },
  methods: {
    resizeWindow() {
      if (this.$refs.videoPlayer) {
        // let width = this.$refs.videoPlayer.parentElement.offsetWidth;
        // this.player.width(width);
        // this.player.height(width * 9 / 16);
      }
    },
    async checkStreamPath() {
      const res = await this.$http.get("stream");
      const playList = res.data;
      this.exist = (playList.findIndex(el => el === this.$route.params.id) !== -1);
      this.url = `${process.env.VUE_APP_VIDEO_URL || ""}/${this.$route.params.id}.m3u8`;
    },
    loadVideo() {
      if (this.exist) {
        this.player = videojs(this.$refs.videoPlayer, this.options, () => {
          this.player.src({
            src: this.url,
            type: "application/x-mpegurl",
          })
          this.player.hlsQualitySelector({
            displayCurrentQuality: true,
          })
          this.resizeWindow();
        })
      }
    },
    disposePlayer() {
      if (this.player) {
        this.player.dispose();
        this.player = null;
        window.removeEventListener("resize", this.resizeWindow);
      }
    }
  },
  async mounted() {
    await this.checkStreamPath()
    this.loadVideo();
    window.addEventListener("resize", this.resizeWindow);
    
  },
  beforeDestroy() {
    this.disposePlayer();
  }
};
</script>

<style lang="scss" scoped>
@media (max-width: 1200px) {
  .player {
    width: 100vw;  
  }
}
@media (min-width: 1200px) {
  .player {
    width: 60vw;  
  }
}

.video-js {
  width: 100%;
  height: 100%;
}

.dvd-move {
  position: absolute;
  z-index: 1;
  -webkit-animation: moveX 2s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate;
  -moz-animation: moveX 2s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate;
  -o-animation: moveX 2s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate;
  animation: moveX 2s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate;
}


@-webkit-keyframes moveX {
  from { left: 0; } to { left: 40vw; }
}
@-moz-keyframes moveX {
  from { left: 0; } to { left: 40vw; }
}
@-o-keyframes moveX {
  from { left: 0; } to { left: 40vw; }
}
@keyframes moveX {
  from { left: 0; } to { left: 40vw; }
}

@-webkit-keyframes moveY {
  from { top: 0; } to { top: 25vh; }
}
@-moz-keyframes moveY {
  from { top: 0; } to { top: 25vh; }
}
@-o-keyframes moveY {
  from { top: 0; } to { top: 25vh; }
}
@keyframes moveY {
  from { top: 0; } to { top: 25vh; }
}
</style>