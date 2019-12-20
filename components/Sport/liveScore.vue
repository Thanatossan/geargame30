<template>
  <div class="container">
    <div class="w-1/6">
      <div id="Live_Score">
        <span>Live</span><br /><span style="color:rgba(223,80,62,1);">Score</span>
      </div>
    </div>
    <div class="container">
      <br />
      <div id="Live_Score_table">
        <div class="border-b-2 mt-3 mb-8 ">Coming Soon</div>
        <!-- V for -->
        <div class="flex bg-gray-100 rounded-lg p-1 m-3">
          <img
            src="~/assets/image/JhangLekGames-Logo_wb.png"
            width="100"
          />
          <h2 class="m-auto">Coming soon</h2>
        </div>
        <div class="flex bg-gray-100 rounded-lg p-1 m-3">
          <img
            src="~/assets/image/JhangLekGames-Logo_wb.png"
            width="100"
          />
          <h2 class="m-auto">Coming soon</h2>
        </div>
        <div class="flex bg-gray-100 rounded-lg p-1 m-3">
          <img
            src="~/assets/image/JhangLekGames-Logo_wb.png"
            width="100"
          />
          <h2 class="m-auto">Coming soon</h2>
        </div>
        <!-- loop end-->
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "../../api/api";
export default {
  // data() {
  //   return {
  //     testAPI: ""
  //   };
  // },
  // methods: {},
  // async mounted() {
  //   const test = await api.get("/api");
  //   this.testAPI = test.data;
  //   console.log(test);
  // }
};
</script>

<style>
#Live_Score_table {
  font-size: 20px;
}
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
