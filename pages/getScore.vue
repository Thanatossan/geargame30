<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
      rel="stylesheet"
    />
    <div class="container max-w-screen-xl lg:mx-auto px-6">
      <div class="justify-center text-center">
        <navbar />
        <!-- title section -->
        <div class="flex flex-col justify-center mb-4 bg-red-800 text-center lg:h-48 w-full">
          <label
            class="default-text"
            style="font-size:55px; color:white;"
          >Score Results</label>
        </div>

        <!-- content section -->
        <div class="">
        <h1 class="text-2xl font-bold text-center p-4 ">{{resultStatus}}</h1>
        <div class="flex flex-col p-4">
          <div class="w-11/12 m-auto">
            <div class="flex flex-row" id="sp">
              <h1 class="text-lg font-bold pb-2">Sport : </h1>
              <h1 class="text-lg font-bold pb-2 pl-4">{{sport}}</h1>
            </div>
            <div class="overflow-auto">
              <table class="table-auto w-full" id="table">
                <thead>
                  <tr>
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">ทีมที่ 1</th>
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">ทีมที่ 2</th>
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">ผลการแข่งขัน</th>
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">ประเภท</th>
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">สถานที่แข่ง</th>
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">เริ่มการแข่งขัน</th>
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">จบการแข่งขัน</th>
                  </tr>
                </thead>
                <tbody id="append">
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <br>
      </div>

      </div>
    </div>

    <br />

    <!-- footer -->
    <br />
    <border />
    <div class="container flex justify-center items-center text-center mx-auto">
      <div class="w-4/6">
        <div class="my-5 mx-auto text-right">
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "~/components/navbar";
import border from "~/components/border";
import Footer from "~/components/Footer";
import $ from 'jquery'
export default {
  components: {
    navbar,
    border,
    Footer,
  },
  data(){
    return {
      resultStatus : 'No result',
      sport :'none'
    }
  },
  methods : {
    async appendTable(arr){
      for(let i = 0; i<arr.length; i++){
         $('#append').append(
          `<tr>
              <td class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">${arr[i].nameTeam1}</td>
              <td class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">${arr[i].nameTeam2}</td>
              <td class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">${arr[i].scoreTeam1} - ${arr[i].scoreTeam2}</td>
              <td class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">${arr[i].sportCategory}</td>
              <td class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">${arr[i].matchStartTime.substr(0, 10)} ${arr[i].matchStartTime.substr(1, 15)
              .substr(10, 16)} น. </td>
              <td class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">${arr[i].matchEndTime.substr(0, 10)} ${arr[i].matchEndTime.substr(1, 15)
              .substr(10, 16)} น. </td>
            </tr>`
        )
      }
    }
  },

  async mounted(){
     const res = await this.$store.dispatch("getFilteredMatch")
     console.log(res.length);
     if(res.length > 0) {
       this.resultStatus = 'Result'
       this.sport = res[0].sportType
       await this.appendTable(res)
       $('#table').show('fast')
       $('#sp').show('fast')
     }else{
        $('#table').hide('fast')
        $('#sp').hide('fast')
     }   
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */
.default-text {
  font-family: Rubik;
}
</style>
