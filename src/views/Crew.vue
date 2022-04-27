
<template>
  <div class="crewTech crew subpage__wrapper">
    <div class="subpage__title">
      <span>01</span>
      <h1>meet your crew</h1>
    </div>

    <img
      class="subpage__img subpage__img--crew"
      :src="
        require(`../assets${$route.path}/image-${data[this.currentIndex].name
          .replace(' ', '-')
          .toLowerCase()}.png`)
      "
      :alt="data.name"
    />
    <swiper
      ref="mySwiper"
      :pagination="pagination"
      :modules="modules"
      class="mySwiper"
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlide"
    >
      <swiper-slide v-for="data in data" :key="data.name">
        <subpage :data="data" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import data from "../assets/data.json";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import subpage from "../components/subpage.vue";
import "swiper/swiper-bundle.css";
import "swiper/modules/pagination/pagination";
import "swiper/modules/pagination/pagination.min.css";
import { Pagination } from "swiper";

export default {
  name: "Crew",
  mounted() {},
  beforeCreate: function () {
    document.body.className = "crew-body";
  },
  beforeUnmount() {
    document.body.classList.remove("crew-body");
  },
  components: {
    Swiper,
    SwiperSlide,
    subpage,
  },
  data() {
    const onSwiper = (swiper) => {
      console.log(swiper);
      swiper.observerUpdate;
    };
    const onSlideChange = (swiper) => {
      console.log(swiper.activeIndex);
      swiper.updateSlidesClasses();
    };

    return {
      data: data.crew,
      currentIndex: 0,
      onSwiper,
      onSlideChange,
      pagination: {
        clickable: true,
      },

      modules: [Pagination],
    };
  },
  methods: {
    onSlide(swiper) {
      console.log(swiper.activeIndex);
      this.currentIndex = swiper.activeIndex;
    },
  },
};
</script>

<style lang="css" >
.crew .swiper-pagination {
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  margin: auto;
  border-top: 2px solid hsla(231, 15%, 26%, 1);
}
.crew .swiper-pagination-bullet {
  background-color: hsla(0, 0%, 100%, 0.17);
  opacity: 1;
  margin: 0 1rem !important;
}

.crew .swiper-pagination-bullet-active {
  border-radius: 100%;
  background-color: hsla(0, 0%, 100%, 1);
}
@media (min-width: 768px) {
  .crew .swiper {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  .crew .swiper-pagination-bullet {
    width: 1.2rem;
    height: 1.2rem;
    margin: 0 2rem !important;
  }
  .crew .swiper-pagination {
    order: 1;
    border-top: none;
    border-bottom: none;
  }
}
@media (min-width: 1024px) {
  .crew .swiper {
    display: flex;
    flex-direction: column;

    flex-basis: 45%;
    margin: 0;
  }
  .crew .swiper-pagination {
    max-width: none;

    padding: 0;
    justify-content: flex-start;
  }
  .crew .swiper-slide {
    display: flex;
  }
}
</style>

