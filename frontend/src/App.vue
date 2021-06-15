<template>
  <v-app :class="{ rotate: drug >= 3 }">
    <Header></Header>
    <v-main>
      <v-fade-transition>
        <div class="d-flex cat-div" v-if="drug >= 1">
          <div>
            <img
              width="250px"
              class="ranbow-cat"
              :class="{ move: drug >= 2 }"
              src="/images/nyan_cat.gif"
            />
          </div>
          <v-spacer></v-spacer>
          <div class="align-self-end">
            <img
              width="250px"
              class="ranbow-cat reverse"
              :class="{ move: drug >= 2 }"
              src="/images/nyan_cat.gif"
            />
          </div>
        </div>
      </v-fade-transition>
      <router-view />
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: { Header, Footer },
  computed: {
    ...mapState(["drug"]),
  },
};
</script>

<style lang="scss" scoped>
.cat-div {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.ranbow-cat {
  position: relative;
  &.move {
    -webkit-animation: moveX 2s ease-in-out 0s infinite;
    -moz-animation: moveX 2s ease-in-out 0s infinite;
    -o-animation: moveX 2s ease-in-out 0s infinite;
    animation: moveX 2s ease-in-out 0s infinite;
  }
  &.reverse {
    transform: rotateY(180deg);
    &.move {
      -webkit-animation: moveX-reverse 2s ease-in-out 0s infinite;
      -moz-animation: moveX-reverse 2s ease-in-out 0s infinite;
      -o-animation: moveX-reverse 2s ease-in-out 0s infinite;
      animation: moveX-reverse 2s ease-in-out 0s infinite;
    }
  }
}

@-webkit-keyframes moveX {
  from {
    left: -15vw;
  }
  to {
    left: 110vw;
  }
}

@-moz-keyframes moveX {
  from {
    left: -15vw;
  }
  to {
    left: 110vw;
  }
}

@-o-keyframes moveX {
  from {
    left: -15vw;
  }
  to {
    left: 110vw;
  }
}

@keyframes moveX {
  from {
    left: -15vw;
  }
  to {
    left: 110vw;
  }
}

@-webkit-keyframes moveX-reverse {
  from {
    right: -15vw;
  }
  to {
    right: 110vw;
  }
}
@-moz-keyframes moveX-reverse {
  from {
    right: -15vw;
  }
  to {
    right: 110vw;
  }
}
@-o-keyframes moveX-reverse {
  from {
    right: -15vw;
  }
  to {
    right: 110vw;
  }
}
@keyframes moveX-reverse {
  from {
    right: -15vw;
  }
  to {
    right: 110vw;
  }
}
</style>