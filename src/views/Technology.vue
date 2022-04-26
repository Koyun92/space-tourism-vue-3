<template>
  <div
    class="crewTech technology subpage__wrapper subpage__wrapper--technology"
  >
    <div class="subpage__title">
      <span>01</span>
      <h1>space launch 101</h1>
    </div>
    <div class="subpage__img-container">
      <img
        class="subpage__img subpage__img--technology"
        :src="
          require(`../assets${$route.path}/image-${data[this.currentIndex].name
            .replace(' ', '-')
            .toLowerCase()}-landscape.jpg`)
        "
        :alt="data.name"
      />
    </div>
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
  name: "Technology",
  mounted() {},
  beforeCreate: function () {
    document.body.className = "technology-body";
  },
  beforeUnmount() {
    document.body.classList.remove("technology-body");
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
      data: data.technology,
      currentIndex: 0,
      onSwiper,
      onSlideChange,
      pagination: {
        clickable: true,
      },
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + index + "</span>";
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
.technology .swiper-pagination {
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  margin: auto;
  border-top: none !important;
}
.technology .swiper-pagination-bullet {
  background-color: transparent !important;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  padding: 0;
  margin: 0 1rem !important;
  border: 1px hsla(0, 0%, 100%, 0.2) solid;
  width: 3.5rem;
  height: 3.5rem;
}

.technology .swiper-pagination-bullet-active {
  border-radius: 100%;
  background-color: hsla(0, 0%, 100%, 1) !important;
  color: hsla(230, 35%, 7%, 1);
}
.technology .swiper {
  padding: 0 3rem;
}
@media (min-width: 768px) {
  .technology .swiper {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  .technology .swiper-pagination-bullet {
    margin: 0 2rem !important;
  }
  .technology .swiper-pagination {
    border-top: none;
    border-bottom: none;
  }
}
@media (min-width: 1024px) {
  .technology .swiper {
    display: flex;
    flex-direction: column;

    flex-basis: 45%;
    margin: 0;
  }
  .technology .swiper-pagination {
    max-width: none;
    padding: 0;
    justify-content: flex-start;
  }
  .technology .swiper-slide {
    display: flex;
  }
}
</style>


