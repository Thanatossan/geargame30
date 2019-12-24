<template>
  <section>
    <div class="flex flex-col border border-solid border-16 border-gray-600 rounded p-2">
      <h1 class="text-2xl font-bold text-center p-4 ">Result Score</h1>
      <border />
      <br>
      <div class="flex flex-col p-4">
        <div class="w-11/12 m-auto">
          <span>
            <h1 class="text-lg font-bold pb-2">Select Sport</h1>
          </span>
          <span>
            <div class="w-full border border-8 rounded-full py-2 px-4 hover:border-green-400">
            <select  class="w-full">
              <option value="FUTSAL">FUTSAL</option>
              <option value="BADMINTON">BADMINTON</option>
              <option value="ATHLETICS">ATHLETICS</option>
              <option value="BASKETBALL">BASKETBALL</option>
              <option value="E-SPORT (ROV)">E-SPORT (ROV)</option>
              <option value="SWIMMING">SWIMMING</option>
              <option value="TABLE TENNIS">TABLE TENNIS</option>
              <option value="BOARDGAMES">BOARDGAMES</option>
              <option value="VOLLEYBALL">VOLLEYBALL</option>
              <option value="FOOTBALL">FOOTBALL</option>
              <option value="SEPAK TAKRAW">SEPAK TAKRAW</option>
              <option value="SOFTBALL">SOFTBALL</option>
              <option value="TENNIS">TENNIS</option>
              <option value="PETANQUE">PETANQUE</option>
              <option value="RUGBY FOOTBALL">RUGBY FOOTBALL</option>
              <option value="ENTERTAINMENT GAMES">ENTERTAINMENT GAMES</option>
            </select>
            </div>
          </span>
        </div>
        <br>
        <div class="w-11/12 m-auto">
          <span>
            <h1 class="text-lg font-bold pb-2">Select Day</h1>
          </span>
          <span>
            <div class="w-full border border-8 rounded-full py-2 px-4 hover:border-green-400">
            <select class="w-full">
              <option value="dec24">24 Dec 2019</option>
              <option value="dec25">25 Dec 2019</option>
              <option value="dec26">26 Dec 2019</option>
              <option value="dec27">27 Dec 2019</option>
            </select>
            </div>
          </span>
        </div>
        <br>
        <div class="m-auto">
          <nuxt-link to="getScore">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Get
              Result</button>
          </nuxt-link>
        </div>
      </div>
      <br>
      
      
    </div>
    <br>
  </section>

</template>

<script>
  import border from "~/components/border";
  export default {
    components: {
      border
    }
  };

</script>

<style>
  tbody tr:hover {
    background-color: #edf2f7;
  }

</style>
