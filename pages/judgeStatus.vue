<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
      rel="stylesheet"
    />
    <div class="text-right m-3">
         <label class="m-3 text-2xl">{{user}}</label>
         <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Logout
        </button>
    </div>
   
    <div class="container max-w-screen-xl lg:mx-auto">
      <div class="justify-center text-center">
        <navbar />
        <!-- title section -->
        <div class="flex flex-col justify-center mb-4 bg-red-800 text-center lg:h-48 w-full">
          <label
            class="default-text"
            style="font-size:55px; color:white;"
          >Match Status</label>
        </div>

        <!-- content section -->
        <div class="">
        <h1 class="text-2xl font-bold text-center p-4 "></h1>
        <div class="flex flex-col p-4">
          <div class="w-11/12 m-auto">
            <div class="flex flex-row" id="sp">
              <h1 class="text-lg font-bold pb-2">Match</h1>
            </div>
            <div class="overflow-auto">
              <table class="table-auto w-full" id="table">
                <thead>
                  <tr>
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">MatchNumber</th>
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">Name team 1</th>
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">Score team 1</th>
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">Name team 2</th>
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">Score team 2</th>
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">Name team 3</th>
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">Score team 3</th>
                    <!-- <div v-if="single === false"> -->
                        <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">Player 1</th>
                        <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">Player 2</th>
                        <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">Player 3</th>
                    <!-- </div> -->
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">Category</th>
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">Start time</th>
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">End time</th>
                  </tr>
                </thead>
                <tbody id="append">
                  <tr>
                       <td class="border border-gray-400 px-2 py-2 text-gray-800 " align="center"></td>
                  </tr>
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
import border from "~/components/border";
import Footer from "~/components/Footer";
import $ from 'jquery'
export default {
    components: {
    border,
    Footer,
    },
    data(){
        return{
            user : "none",
            single : false
        }
    },
    methods : {
        async logout(){
            await this.$store.dispatch('logout')
        }
    }
}
</script>