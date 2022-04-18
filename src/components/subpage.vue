<template>
  <div class="subpage">
    <div class="subpage__header">
      <div v-if="data.role" class="subpage__pretitle"></div>
      <div class="subpage__lower-title">
        <h2>{{ data.name }}</h2>
      </div>
    </div>
    <div class="subpage__text">
      <p>{{ data.description }}</p>
    </div>
    <div v-if="data.distance" class="destination__info">
      <div class="destination__info-box">
        <p class="destination__info-title"></p>
        <h3>avg.distance</h3>
        <p class="destination__info-data"></p>
        <h3>{{ data.distance }}</h3>
      </div>
      <div class="destination__info-box">
        <div class="destination__info-title"><h3>est.travel.time</h3></div>
        <div class="destination__info-data">
          <h3>{{ data.travel }}</h3>
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
