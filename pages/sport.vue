<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
      rel="stylesheet"
    />
    <div class="container max-w-screen-xl lg:mx-auto px-6">

      <div>
        <navbar />
        <h2 class="text-center text-5xl"> Sports</h2>
        <div class="flex flex-col lg:flex-row container xl:m-5">
          <div class=" lg:pl-2 w-auto lg:w-1/2 overflow-y-auto">
            <h2> sssss</h2>
          </div>
          <div class=" lg:pl-2 w-auto lg:w-1/2 overflow-y-auto">
            <h2> sssss</h2>
          </div>
        </div>

      </div>
    </div>
    <border />
    <div class="container max-w-screen-xl lg:mx-auto px-6">
      <div>
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
export default {
  components: {
    navbar,
    Footer
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */

html {
  font-family: Rubik;
}
</style>
