<template>
  <div class="destination subpage__wrapper">
    <div class="subpage__title">
      <span>01</span>
      <h1>pick your destination</h1>
    </div>
    <img
      class="subpage__img"
      :src="
        require(`../assets${$route.path}/image-${
          data[this.currentIndex].name
        }.png`)
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
  name: "Destination",

  beforeCreate: function () {
    document.body.className = "destination-body";
  },
  beforeUnmount() {
    document.body.classList.remove("destination-body");
  },
  components: {
    Swiper,
    SwiperSlide,
    subpage,
  },
  data() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = (swiper) => {
      console.log(swiper.activeIndex);
    };

    return {
      data: data.destinations,
      currentIndex: 0,
      onSwiper,
      onSlideChange,
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          const names = ["MOON", "MARS", "EUROPA", "TITAN"];
          return '<span class="' + className + '">' + names[index] + "</span>";
        },
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
.destination .swiper-pagination {
  position: static !important;
  display: flex !important;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  margin: auto;
}
.destination .swiper-pagination-bullet {
  color: hsla(231, 77%, 90%, 1);
  letter-spacing: 0.235rem;
  opacity: 1;
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid transparent;
  background-color: transparent;
}
.destination .swiper-pagination-bullet-active {
  color: hsla(0, 0%, 100%, 1);

  background-color: transparent;
  border-bottom: 1px solid hsla(0, 0%, 100%, 1);
  border-radius: 0%;
}
@media (min-width: 1024px) {
  .swiper {
    display: flex;
    flex-direction: column;

    flex-basis: 45%;
    margin: 0;
  }
  .swiper-pagination {
    max-width: none;
    padding: 0;
    text-align: left;
  }
  .swiper-slide {
    display: flex;
  }
}
</style>

