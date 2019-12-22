<template>
<div class="container max-w-screen-xl lg:mx-auto px-6">

    <!-- Head Logo -->
   
    <div class="flex flex-col justify-center mb-4 bg-red-800 text-center lg:h-48 w-full">
          <label class="default-text" style="font-size:55px; color:white;"
            >Jude Statement</label
          >
    </div>
 
    <!-- Form 1 -->
  <form class=" shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
   

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name" >
        Name of Jude
      </label>
      <input v-model="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="กรอกชื่อผู้ตัดสิน">
    </div>
    <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="selected ">
      Select Type Sport
    </label>
      <select v-model="selected ">
      <option disabled value="">Please select one</option>
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
        <option>สันทนาการ</option>
    </select>
    <span>Selected: {{ selected }}</span>
    </div>
    <div class="mb-6">
       <input v-model="score" type="int" placeholder="กรอกคะแนนการแข่งขัน" 
       class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    </div>
    <div class="mb-6">
       <input v-model="detail" type="text" placeholder="กรอกรายละเอียดการแข่งขัน" 
       class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    </div>
    <div class="flex items-center justify-between">
      <button v-on:click="Submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Submit 
      </button>
    </div>
  </form>

  <!-- Form 2  -->
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
    <div class="mb-4" >
        <label style="color:red">*หมายเหตุฟอร์มเฉพาะ กรีฑาและว่ายน้ำเท่านั้น!!!</label>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name" >
        Name of Jude
      </label>
      <input v-model="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="กรอกชื่อผู้ตัดสิน">
    </div>
    <label class="block text-gray-700 text-sm font-bold mb-2" for="selected ">
      Select Type Sport
    </label>
    <div class="mb-6">
      <select v-model="selected ">
      <option disabled value="">Please select one</option>
        <option>Athletics</option>
        <option>Swimming</option>
    </select>
    <span>Selected: {{ selected }}</span>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="1st" >
        input 1st
      </label>
      <input v-model="Fst" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="1st" type="text" placeholder="กรอกผู้ชนะอันดับที่ 1">
    </div>
     <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="2st" >
        input 2st
      </label>
      <input v-model="Sst" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="2st" type="text" placeholder="กรอกผู้ชนะอันดับที่ 2">
    </div>
     <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="3st" >
        input 3st
      </label>
      <input v-model="Fst" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="3st" type="text" placeholder="กรอกผู้ชนะอันดับที่ 3">
    </div>
    <div class="flex items-center justify-between">
      <button v-on:click="Submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Submit 
      </button>
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
import navbar from "~/components/navbar";
import border from "~/components/border";
import Footer from "~/components/Footer";
import chaingmai from "~/components/about/chaingmai_history";
import geargame from "~/components/about/geargame_history";
import engineer from "~/components/about/eng_history";
import univer from "~/components/about/univer_list";
export default {
  components: {
    navbar,
    border,
    chaingmai,
    engineer,
    geargame,
    univer,
    Footer
  },
  methods : {
    async Submit(){
      alert('Are you Sure to Submit??')
    }
  }
};
</script>

<style scoped>
    .log-in{
        margin: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
</style>