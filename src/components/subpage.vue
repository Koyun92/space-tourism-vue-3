<template>
  <div class="subpage__img">
    <img
      :src="require(`../assets${$route.path}/image-${data.name}.png`)"
      :alt="data.name"
    />
  </div>
  <div class="subpage__title">{{ data.name }}</div>
  <div class="subpage__text">
    <p>{{ data.description }}</p>
  </div>
</template>
<script>
export default {
  name: "subpage",
  props: ["data"],
};
</script>
