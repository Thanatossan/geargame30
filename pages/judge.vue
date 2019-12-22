<template>
<div>
  <h1>Judge Page</h1>
   <button v-on:click="logout" class="bg-blue-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-black-700 hover:border-black-500 rounded" type="button">
        Logout
    </button>
</div>


</template>


<script>
export default {
  middleware : 'authen',
  components: {
   
  },
  methods : {
    async logout(){
      await this.$store.dispatch('logout')
    }
  }
};
</script>
