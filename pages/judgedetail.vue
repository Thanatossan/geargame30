<template>
  <div class="container max-w-screen-xl lg:mx-auto px-6">
    <!-- Head -->

    <div
      class="flex flex-col justify-center text-center border-b-8 border-red-700 mb-4 bg-red-800 sm:shadow-lg lg:h-24 w-full"
    >
      <div class="flex mb-4">
        <div class="w-1/5 h-12"></div>
        <div class="w-1/5 h-12"></div>
        <div class="w-1/5 h-12">
          <span class="default-text" style="font-size:36px; color:white;"> Match</span>
        </div>
        <div class="w-1/5 h-12"></div>
        <div class="w-1/5 h-12">
          <span style="color:white;">
            <button
              v-on:click="logout"
              class="md:object-right bg-blue-500 hover:bg-red-400 mt-2 py-1 px-3 border-b-2 border-blue-700 hover:border-red-500 rounded"
            >
              <font-awesome-icon :icon="['fas', 'sign-out-alt']" style="size:7px" />
            </button>
          </span>
        </div>
      </div>
    </div>

    <!-- Form 1 -->
    <div class="w-full rounded-lg">
      <form class="shadow-md rounded px-8 pt-6 rounded-l-lg pb-8 mb-4 w-auto my-5 mx-auto">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name of Jude</label>
        <input
         
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="กรอกชื่อผู้ตัดสิน"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="selected">Select Type Sport</label>
        <select>
          <option disabled value>Please select one</option>
          <option>Footsal</option>
          <option>Badminton</option>
          <option>Basketball</option>
          <option>e-sport</option>
          <option>Table-tennis</option>
          <option>Boardgames</option>
          <option>Volleyball</option>
          <option>Football</option>
          <option>Sepaktakraw</option>
          <option>Softball</option>
          <option>Tennis</option>
          <option>Petong</option>
          <option>Rugby</option>
          <option>Entertainment</option>
        </select>
      </div>
      <div class="mb-6">
        <input
          
          type="int"
          placeholder="กรอกคะแนนการแข่งขัน"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-6">
        <input
          
          type="text"
          placeholder="กรอกรายละเอียดการแข่งขัน"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          v-on:click="alertDisplay"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >Submit</button>
      </div>
    </form>
    </div>
    

    <!-- Form 2  -->
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label style="color:red">*หมายเหตุฟอร์มเฉพาะ กรีฑาและว่ายน้ำเท่านั้น!!!</label>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name2">Name of Jude</label>
        <input
          
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name2"
          type="text"
          placeholder="กรอกชื่อผู้ตัดสิน"
        />
      </div>
      <label class="block text-gray-700 text-sm font-bold mb-2" for="selected">Select Type Sport</label>
      <div class="mb-6">
        <select >
          <option disabled value>Please select one</option>
          <option>Athletics</option>
          <option>Swimming</option>
        </select>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="fst">input 1st</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="fst"
          type="text"
          placeholder="กรอกผู้ชนะอันดับที่ 1"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="sst">input 2st</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="sst"
          type="text"
          placeholder="กรอกผู้ชนะอันดับที่ 2"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="tst">input 3st</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tst"
          type="text"
          placeholder="กรอกผู้ชนะอันดับที่ 3"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          v-on:click="alertDisplay"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >Submit</button>
      </div>
    </form>

    <!-- Footer -->
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
import '../node_modules/sweetalert2/dist/sweetalert2.css'
export default {
   data() {
      return {}
    },
    methods: {
     async alertDisplay() {
         await this.$swal({
          title: 'Are you sure?',
          text: 'You can\'t revert your action',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes Delete it!',
          cancelButtonText: 'No, Keep it!',
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then((result) => {
          if(result.value) {
              alert("Accepted")
          } else {
            this.$swal.close()
          }
        })
      }
    },
  components: {

    border,
    Footer
  },
  
  // middleware : 'authen',
};
</script>

<style scoped>
.log-in {
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

