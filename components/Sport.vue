<template>
  <div class="flex m-6">
    <div class="w-1/2 pl-16">
      <liveScore />
    </div>
    <div class="w-1/2 pl-16">
      <match />
    </div>
  </div>
</template>

<script>
import liveScore from "~/components/Sport/liveScore";
import match from "~/components/Sport/match";
export default {
  components: {
    liveScore,
    match
  }
};
</script>

<style>
</style>