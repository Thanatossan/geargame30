<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
      rel="stylesheet"
    >
    <div class="flex">
      <div class="w-1/6"></div>
      <div class="w-4/6">
        <navbar />
        <promote />
        <br>
        <border />
        <sponcer />
        <br>
        <border />
        <br>
        <Sport />
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
export default {
  components: {
    navbar,
    promote,
    sponcer,
    border,
    Sport
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", "Rubik", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
