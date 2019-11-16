<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet" />
    <div class="container flex justify-center items-center text-center mx-auto">
      <div class="w-4/6">
        <navbar />
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
import Footer from "~/components/Footer";
import border from "~/components/border";
export default {
  components: {
    navbar,
    Footer,
    border
  }
};
</script>