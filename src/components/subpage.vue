<template>
  <div class="subpage">
    <div class="subpage__header">
      <div v-if="data.role" class="subpage__pretitle">{{ data.role }}</div>
      <div class="subpage__lower-title">
        <h3 class="technology__pretitle subpage__pretitle-second">
          the terminology
        </h3>
        <h2 class="destination__slide-title" v-if="data.travel">
          {{ data.name }}
        </h2>

        <h2 v-else>
          {{ data.name }}
        </h2>
      </div>
    </div>
    <div class="subpage__text">
      <p v-if="data.description">{{ data.description }}</p>
      <p v-else>{{ data.bio }}</p>
    </div>
    <div v-if="data.distance" class="destination__info">
      <div class="destination__info-box">
        <div class="destination__info-title">
          <h3>avg.distance</h3>
        </div>
        <div class="destination__info-data">
          <p>{{ data.distance }}</p>
        </div>
      </div>
      <div class="destination__info-box">
        <div class="destination__info-title"><h3>est.travel time</h3></div>
        <div class="destination__info-data">
          <p>{{ data.travel }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "subpage",
  props: ["data"],
};
</script>
