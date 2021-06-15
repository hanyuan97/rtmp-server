<template>
  <div class="d-flex align-center justify-center pt-5 flex-column">
    <h1 class="mb-2">
      <span>{{ $route.params.id }}</span>
      <span v-show="!exist"> 無此串流</span>
    </h1>
    <div v-show="exist">
      <video ref="videoPlayer" class="video-js player vjs-big-play-centered" controls muted></video>
    </div>
  </div>
</template>

<script>
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
  watch: {
    async $route() {
      await this.checkStreamPath()
      this.player.src({
        src: this.url,
        type: "application/x-mpegurl",
      })
    }
  },
  methods: {
    resizeWindow() {
      if (this.$refs.videoPlayer) {
        let width = this.$refs.videoPlayer.parentElement.offsetWidth;
        this.player.width(width);
        this.player.height(width * 9 / 16);
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
          this.player.hlsQualitySelector({
            displayCurrentQuality: true,
          })
          this.player.src({
            src: this.url,
            type: "application/x-mpegurl",
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

<style scoped>
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
</style>