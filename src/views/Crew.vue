
<template>
  <div class="crew subpage__wrapper">
    <div class="subpage__title">
      <span>01</span>
      <h1>pick your destination</h1>
    </div>
    <img
      class="subpage__img"
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
        renderBullet: function (index, className) {
          return `<span class="${className} swiper-pagination-bullet-custom">${
            index + 1
          }</span>`;
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
.crew .swiper-pagination {
  position: static;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  margin: auto;
}
.crew .swiper-pagination-bullet {
  color: red;

  opacity: 1;

  padding-bottom: 1rem;
}
.crew .swiper-pagination-bullet-active {
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

