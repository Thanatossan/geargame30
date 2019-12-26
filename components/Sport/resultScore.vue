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
            <select  class="w-full" v-model="Sport" id="s">
              <option value="FUTSAL">FUTSAL</option>
              <option value="BADMINTON">BADMINTON</option>
              <option value="ATHLETICS">ATHLETICS</option>
              <option value="BASKETBALL">BASKETBALL</option>
              <option value="E-SPORT">E-SPORT (ROV)</option>
              <option value="SWIMMING">SWIMMING</option>
              <option value="TABLETENNIS">TABLE TENNIS</option>
              <option value="BOARDGAMES">BOARDGAMES</option>
              <option value="VOLLEYBALL">VOLLEYBALL</option>
              <option value="FOOTBALL">FOOTBALL</option>
              <option value="SEPAKTAKRAW">SEPAK TAKRAW</option>
              <option value="SOFTBALL">SOFTBALL</option>
              <option value="TENNIS">TENNIS</option>
              <option value="PETANQUE">PETANQUE</option>
              <option value="RUGBYFOOTBALL">RUGBY FOOTBALL</option>
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
            <select class="w-full" v-model="Day">
              <option value="Dec 24">24 Dec 2019</option>
              <option value="Dec 25">25 Dec 2019</option>
              <option value="Dec 26">26 Dec 2019</option>
              <option value="Dec 27">27 Dec 2019</option>
            </select>
            </div>
          </span>
        </div>
        <br>
        <div class="m-auto">
          <!-- <nuxt-link to="getScore"> -->
            <button v-on:click="search" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Get
              Result</button>
              
          <!-- </nuxt-link> -->
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
      border,
      
    },
    data(){
      return{
        Sport : '',
        Day : ''
      }
    },
    methods : {
      async search(){
        if(this.Sport === '') alert('เลือกกีฬาและวันที่แข่งขัน')
        else{
          const res = await this.$store.dispatch("search",{
          Sport : this.Sport,
          Day : this.Day
        })      
        if(res === true) setTimeout('location.href="/getScore"')
        else alert('ไม่พบผลการแข่ง')
        }
        
      }
    }
  };

</script>

<style>
  tbody tr:hover {
    background-color: #edf2f7;
  }

</style>
