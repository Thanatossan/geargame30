<template>
  <div class="container">
    <div class="w-1/6">
      <div id="Incomming_Games">
        <span>Incomming</span><br /><span style="color:rgba(223,80,62,1);">Games</span>
      </div>
    </div>
    <div class="container">
      <br />
      <div id="match_table">
        <div class="border-b-2 mt-3 mb-8"></div>
        <div class="md:flex bg-gray-100 rounded-lg p-1 m-3">
          <img
            src="~/assets/image/JhangLekGames-Logo_wb.png"
            width="100"
          />
          <h2 class="m-auto">Coming soon</h2>
        </div>

        <div class="md:flex bg-gray-100 rounded-lg p-1 m-3">
          <img
            src="~/assets/image/JhangLekGames-Logo_wb.png"
            width="100"
          />
          <h2 class="m-auto">Coming soon</h2>
        </div>
        <div class="md:flex bg-gray-100 rounded-lg p-1 m-3">
          <img
            src="~/assets/image/JhangLekGames-Logo_wb.png"
            width="100"
          />
          <h2 class="m-auto">Coming soon</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#match_table {
  font-size: 20px;
}
#Incomming_Games {
  position: absolute;
  overflow: visible;
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
