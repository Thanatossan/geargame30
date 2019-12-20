<template>
<div class="w-full max-w-xs log-in">
    <img
        src="~/assets/image/JhangLekGames-Logo.png"
        class="w-auto h-auto"
    >
    <h1 class="block font-bold text-center text-lg" style="font-size:35px">Judge Login</h1>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username" >
        Username
      </label>
      <input v-model="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password" />
    </div>
    <div class="flex items-center justify-between">
      <button v-on:click="login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Log in
      </button>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    Geargame30 Faculty of Engineering,
  </p >
  <p class="text-center text-gray-500 text-xs">
    Chinag Mai University.
  </p>
  </div>
</template>

<script>
import {api} from '../api/api'

export default {
    data(){
        return{
            username : '',
            password : ''
        }
    },
    methods : {
       async login(){
           const user = {username : this.username , password : this.password}
           const response = await api.post('/api/auth',{user})
           console.log(response.data);
       }
    }
}
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
