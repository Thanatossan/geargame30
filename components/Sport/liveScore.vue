<template>
  <div>
    <div class="w-1/6">
      <div id="Live_Score">
        <span>Live</span><br><span style="color:rgba(223,80,62,1);">Score</span>
      </div>
    </div>
    <div class="w-5/6">
      <br>
      <div class="border-b-2 mt-3 mb-8 "></div>
      <!-- V for -->
      <div class="md:flex bg-gray-100 rounded-lg p-1 m-3">
        <img
          src="~/assets/image/JhangLekGames-Logo.png"
          width="100"
        >
      </div>
      <div class="md:flex bg-gray-100 rounded-lg p-1 m-3">
        <img
          src="~/assets/image/JhangLekGames-Logo.png"
          width="100"
        >
      </div>
      <div class="md:flex bg-gray-100 rounded-lg p-1 m-3">
        <img
          src="~/assets/image/JhangLekGames-Logo.png"
          width="100"
        >
      </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#Live_Score {
  position: absolute;
  overflow: hidden;
  width: 95px;
  height: 90px;
  text-align: left;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  color: rgba(50, 61, 83, 1);
}
</style>