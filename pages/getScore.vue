<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
      rel="stylesheet"
    />
    <div class="container max-w-screen-xl lg:mx-auto px-6">
      <div class="justify-center text-center">
        <navbar />
        <!-- title section -->
        <div class="flex flex-col justify-center mb-4 bg-red-800 text-center lg:h-48 w-full">
          <label
            class="default-text"
            style="font-size:55px; color:white;"
          >Score Results</label>
        </div>

        <!-- content section -->
        <div class="">
        <h1 class="text-2xl font-bold text-center p-4 ">Result</h1>
        <div class="flex flex-col p-4">
          <div class="w-11/12 m-auto">
            <div class="flex flex-row ">
              <h1 class="text-lg font-bold pb-2">Sport : </h1>
              <h1 class="text-lg font-bold pb-2 pl-4">Futsal</h1>
            </div>
            <div class="overflow-auto">
              <table class="table-auto w-full ">
                <thead>
                  <tr>
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">Time</th>
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">Team 1</th>
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">Team 2</th>
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">Result</th>
                    <th class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">9:30</td>
                    <td class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">SAXXXXXX</td>
                    <td class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">AX48ssss</td>
                    <td class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">1-2</td>
                    <td class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">ชายเดี่ยว</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">9:30</td>
                    <td class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">SAXXXXXX</td>
                    <td class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">AX48ssss</td>
                    <td class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">1-2</td>
                    <td class="border border-gray-400 px-2 py-2 text-gray-800 " align="center">ชายเดี่ยว</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <br>
      </div>

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
import border from "~/components/border";
import Footer from "~/components/Footer";
export default {
  components: {
    navbar,
    border,
    Footer,
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */
.default-text {
  font-family: Rubik;
}
</style>
