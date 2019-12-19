<template>
  <div class="flex">
    <div class="w-1/4">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          src="~/assets/sport_img/running.PNG"
          width="200"
        >
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import border from "~/components/border";
export default {
  components: {
    border
  }
};
</script>
<style scoped>
.card-border {
  border: 2px solid rgb(214, 212, 212);
  border-radius: 15px;
  display: block;
}

.default-text {
  font-family: Rubik;
  text-align: center;
  font-size: 20px;
}
</style>
