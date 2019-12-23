<template>
  <div>
    <div class="container justify-center items-center mx-auto">
      <!-- Head -->

      <div
        class=" justify-center text-center border-b-8 border-red-700 mb-4 bg-red-800 sm:shadow-lg lg:h-24 w-full"
      >
        <div class="flex mb-4">
          <div class="w-1/5 h-12"></div>
          <div class="w-1/5 h-12"></div>
          <div class="w-1/5 h-12">
            <span class="default-text" style="font-size:36px; color:white;"
              >Match Table</span
            >
          </div>
          <div class="w-1/5 h-12"></div>
          <div class="w-1/5 h-12">
            <span style="color:white;">
              <button
                v-on:click="logout"
                class=" md:object-right bg-blue-500 hover:bg-red-400 mt-2 py-1 px-3 border-b-2 border-blue-700 hover:border-red-500 rounded"
              >
                <font-awesome-icon
                  :icon="['fas', 'sign-out-alt']"
                  style="size:7px"
                />
              </button>
            </span>
          </div>
        </div>
      </div>
      <nuxt-link to="/judgedetail">
        <button
          class="custom-buttom bg-blue-500 hover:bg-red-400 mt-2 text-white font-bold py-1 px-3 border-b-4 border-blue-700 hover:border-red-500 rounded"
        >
          <font-awesome-icon :icon="['fas', 'plus']" style="size:9px" /></button
      ></nuxt-link>

      <!-- Body page -->

      <div class="flex w-full text-center">
        <div class="container">
          <table
            class="flex flex-row flex-no-wrap w-auto sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 mx-auto"
          >
            <thead class="text-white">
              <tr
                class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 bg-red-700 sm:table-row rounded-l-lg sm:rounded mb-2 sm:mb-0"
              >
                <th class="p-3 text-left border" style="color:white">
                  MatchNumber
                </th>
                <th class="p-3 text-left border" style="color:white">team1</th>
                <th class="p-3 text-left border" style="color:white">
                  scoreteam1
                </th>
                <th class="p-3 text-left border" style="color:white">team2</th>
                <th class="p-3 text-left border" style="color:white">
                  scoreteam2
                </th>
                <th class="p-3 text-left border" style="color:white">team3</th>
                <th class="p-3 text-left border" style="color:white">
                  scoreteam3
                </th>
                <th class="p-3 text-left border" style="color:white">
                  player1
                </th>
                <th class="p-3 text-left border" style="color:white">
                  player2
                </th>
                <th class="p-3 text-left border" style="color:white">
                  player3
                </th>
                <th class="p-3 text-left border" style="color:white">
                  sportType
                </th>
                <th class="p-3 text-left border" style="color:white">
                  sportCategory
                </th>
              </tr>
            </thead>
            <tbody id="append" class="flex-1 sm:flex-none"></tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="container max-w-screen-xl lg:mx-auto px-6">
      <div></div>
    </div>
    <!-- Footer -->
    <br />
    <border />
    <div class="container flex justify-center items-center text-center mx-auto">
      <div class="w-5/6">
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
import engineer from "~/components/about/eng_history";
import $ from "jquery";
import { api } from "../api/api";

export default {
  components: {
    border,
    Footer,
    engineer
  },
  data() {
    return {
      user: ""
    };
  },
  // middleware : 'authen',
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
    },
    async getJudge() {
      return await this.$store.dispatch("getJudgeID");
    },
    async appendTable(arr) {
      arr.forEach(each => {
        $("#append").append(`
            <tr class="sm:table-row mb-2 sm:mb-0 flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0>
              <td class="border-grey-light border hover:bg-gray-100 p-3">${each.matchNumber}</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">${each.nameTeam1}</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">${each.scoreTeam1}</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">${each.nameTeam2}</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">${each.scoreTeam2}</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">${each.nameTeam3}</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">${each.scoreTeam3}</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">${each.team1Player}</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">${each.team2Player}</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">${each.team3Player}</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">${each.sportType}</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">${each.sportCategory}</td>

            </tr>
          `);
      });
    }
  },
  async mounted() {
    var get = await this.getJudge();
    this.user = get.username;
    if (this.user != "") {
      const res = await api.get(`/api/getMatchbyUser/${this.user}`);
      console.log(this.user);
      console.log(res.data);
      await this.appendTable(res.data);
    }
  }
};
</script>

<style scoped>
.custom-buttom {
  margin-left: 95%;
}
.custom-logout {
  margin-right: -50%;
}

html,
body {
  height: 100%;
}

@media (min-width: 640px) {
  table {
    display: inline-table !important;
  }

  thead tr:not(:first-child) {
    display: none;
  }
}

td:not(:last-child) {
  border-bottom: 0;
}

th:not(:last-child) {
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}
</style>
