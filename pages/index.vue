<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
      rel="stylesheet"
    />
    <div
      class="container min-h-screen flex justify-center items-center text-center mx-auto"
    >
      <div class="w-4/6">
        <navbar />
        <promote />
        <br />
        <border />
        <sponcer />
        <br />
        <border />
        <br />
        <Sport />
        <br />
        <border />
        <br />
        <News />
        <br />
        <border />
        <br />
        <SponcerCon />
        <br />
        <footer />
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "~/components/navbar";
import promote from "~/components/promote";
import sponcer from "~/components/sponcer";
import border from "~/components/border";
import Sport from "~/components/Sport";
import News from "~/components/News";
import SponcerCon from "~/components/SponcerCon";
import Footer from "~/components/Footer";
export default {
  components: {
    navbar,
    promote,
    sponcer,
    border,
    Sport,
    News,
    SponcerCon,
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
