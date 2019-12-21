<template>
  <div class="flex flex-col lg:flex-row container xl:m-5">
    <div class=" lg:pl-2 w-auto lg:w-1/2 overflow-y-auto">
      <liveScore />
    </div>
    <div class=" lg:pl-2 w-auto lg:w-1/2 overflow-y-auto">
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