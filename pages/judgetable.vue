<template>
  <div>
    <div class="container justify-center items-center mx-auto">
      <!-- Head -->
         
      <div
        class="flex flex-col justify-center text-center border-b-8 border-red-700 mb-4 bg-red-800 sm:shadow-lg lg:h-24 w-full"
      >
        <div class="flex mb-4">
          <div class="w-1/5 h-12"></div>
          <div class="w-1/5 h-12"></div>
          <div class="w-1/5 h-12">
            <span class="default-text" style="font-size:36px; color:white;">Match Table</span>
          </div>
          <div class="w-1/5 h-12"></div>
          <div class="w-1/5 h-12">
            <span class="" style="color:white;">
              <button
                class=" md:object-right bg-blue-500 hover:bg-red-400 mt-2 py-1 px-3 border-b-2 border-blue-700 hover:border-red-500 rounded"
              >
                <font-awesome-icon :icon="['fas', 'sign-out-alt']" style="size:7px"/>
              </button>
            </span>
          </div>
        </div>
      </div>
      <button
        class="custom-buttom bg-blue-500 hover:bg-red-400 mt-2 text-white font-bold py-1 px-3 border-b-4 border-blue-700 hover:border-red-500 rounded"
      ><font-awesome-icon :icon="['fas', 'plus']" style="size:9px"/></button>

      <!-- Body page -->
      
      <div class="w-full text-center">
        <div>
          <table class="w-auto sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 mx-auto">
          <thead class="text-white">
            <tr class="bg-red-700 sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th class="p-3 text-left border" style="color:white">Match Number</th>
              <th class="p-3 text-left border" style="color:white">Team vs Team</th>
              <th class="p-3 text-left border" style="color:white">Score</th>
              <th class="p-3 text-left border" style="color:white">Sport Type</th>
              <th class="p-3 text-left border" style="color:white">Sport Catagory</th>
              <th class="p-3 text-left border" style="color:white">field Number</th>
              <th class="p-3 text-left border" style="color:white">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr class="sm:table-row mb-2 sm:mb-0">
              <td class="border-grey-light border hover:bg-gray-100 p-3">John Covv</td>
              <td
                class="border-grey-light border hover:bg-gray-100 p-3 truncate"
              >contato@johncovv.tech</td>
              <td
                class="border-grey-light border hover:bg-gray-100 p-3 "
              >Delete</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">159.36</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">Football</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">25</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">19.00 Am.</td>
            </tr>
            <tr class="sm:table-row mb-2 sm:mb-0">
              <td class="border-grey-light border hover:bg-gray-100 p-3">Michael Jackson</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">m_jackson@mail.com</td>
              <td
                class="border-grey-light border hover:bg-gray-100 p-3 "
              >Delete</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">159.36</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">Football</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">25</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">19.00 Am.</td>
            </tr>
            <tr class="sm:table-row mb-2 sm:mb-0">
              <td class="border-grey-light border hover:bg-gray-100 p-3">Julia</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">julia@mail.com</td>
              <td
                class="border-grey-light border hover:bg-gray-100 p-3 "
              >Delete</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">159.36</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">Football</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">25</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">19.00 Am.</td>
            </tr>
            <tr class="sm:table-row mb-2 sm:mb-0">
              <td class="border-grey-light border hover:bg-gray-100 p-3">Martin Madrazo</td>
              <td
                class="border-grey-light border hover:bg-gray-100 p-3 truncate"
              >martin.madrazo@mail.com</td>
              <td
                class="border-grey-light border hover:bg-gray-100 p-3 "
              >Delete</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">159.36</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">Football</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">25</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">19.00 Am.</td>
            </tr>
          </tbody>
        </table>
        </div>
        
      </div>
    </div>
    <div class="container max-w-screen-xl lg:mx-auto px-6">
      <div>
       
      </div>

    </div>
    <!-- Footer -->
    <br>
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
import engineer from "~/components/about/eng_history";;

export default {
  components: {
    border,
    Footer,
    engineer
  }
};
</script>

<style scoped>
.custom-buttom {
  margin-left: 95%;
}
.custom-logout{
  margin-right: -50%
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
