<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet" />
    <div class="container max-w-screen-xl lg:mx-auto px-6">

      <div>

        <navbar />
        <Map />
        <border />
        <br>
        <h1 class="text-2xl text-center"> แผนที่หอพักนักศึกษา </h1>
        <div class="flex">
          <div>
            <img src="~/assets/Map/cmu_map.png" class=" object-center lg:w-3/4 lg:ml-40" />
          </div>

        </div>

        <h1 class="text-center text-2xl"> แผนที่ สนามแข่งกีฬา </h1>
        <br>
        <border />
        <br>

        <div class="border-dashed lg:border-none border-4 border-gray-400 flex flex-col lg:flex-row">
          <div class="w-full lg:w-3/4">
            <a href="https://goo.gl/maps/2Z74oAbXGAj8gAqw7">
              <img src="~/assets/Map/athletic & recreation map.png">
            </a>
          </div>
          <div class="lg:w-1/4">
            <div class="hidden lg:block"><br><br><br></div>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬากรีฑา</h1>
            <border />
            <br><br>
            <p class="text-center lg:text-right"> CMU Main Stadium
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <div class="w-full flex justify-center">
              <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <a href="https://goo.gl/maps/2Z74oAbXGAj8gAqw7" class="text-center lg:text-right">
                  goo.gl/maps/2Z74oAbXGAj8gAqw7</a>
              </button>
            </div>
            <br>
          </div>
        </div>
        <br><br>
        <div class="border-dashed lg:border-none border-4 border-gray-400 flex flex-col lg:flex-row">
          <div class="w-full lg:w-3/4">
            <a href="https://goo.gl/maps/p7tegmkVN88vv24x8">
              <img src="~/assets/Map/badminton map.png">
            </a>
          </div>
          <div class="lg:w-1/4">
            <div class="hidden lg:block"><br><br><br></div>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาแบดมินตัน</h1>
            <border />
            <br><br>
            <p class="text-center lg:text-right">Main Gymnasium Chiangmai University
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <div class="w-full flex justify-center">
              <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <a href="https://goo.gl/maps/p7tegmkVN88vv24x8" class="text-center lg:text-right">
                  goo.gl/maps/p7tegmkVN88vv24x8</a>
              </button>
            </div>
            <br>
          </div>
        </div>
        <br><br>
        <div class="border-dashed lg:border-none border-4 border-gray-400 flex flex-col lg:flex-row">
          <div class="w-full lg:w-3/4">
            <a href="https://goo.gl/maps/p7tegmkVN88vv24x8">
              <img src="~/assets/Map/basketball map.png">
            </a>
          </div>
          <div class="lg:w-1/4">
            <div class="hidden lg:block"><br><br><br></div>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาบาสเก็ตบอล</h1>
            <border />
            <br><br>
            <p class="text-center lg:text-right">Main Gymnasium Chiangmai University
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <div class="w-full flex justify-center">
              <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <a href="https://goo.gl/maps/p7tegmkVN88vv24x8" class="text-center lg:text-right">
                  goo.gl/maps/p7tegmkVN88vv24x8</a>
              </button>
            </div>
            <br>
          </div>
        </div>
        <br><br>
        <div class="border-dashed lg:border-none border-4 border-gray-400 flex flex-col lg:flex-row">
          <div class="w-full lg:w-3/4">
            <a href="https://goo.gl/maps/tXv2vxLjW6Y5GQUs9">
              <img src="~/assets/Map/foot ball map (ในมช.).png">
            </a>
          </div>
          <div class="lg:w-1/4">
            <div class="hidden lg:block"><br><br><br></div>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาฟุตบอล (สนามในมช.)</h1>
            <border />
            <br><br>
            <p class="text-center lg:text-right">CMU Main Stadium
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <div class="w-full flex justify-center">
              <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <a href="https://goo.gl/maps/tXv2vxLjW6Y5GQUs9" class="text-center lg:text-right">
                  goo.gl/maps/tXv2vxLjW6Y5GQUs9</a>
              </button>
            </div>
            <br>
          </div>
        </div>
        <br><br>
        <div class="border-dashed lg:border-none border-4 border-gray-400 flex flex-col lg:flex-row">
          <div class="w-full lg:w-3/4">
            <a href="https://goo.gl/maps/hfKyMT8rqF1i1dvZ9">
              <img src="~/assets/Map/foot ball map (นอกมช. 2).png">
            </a>
          </div>
          <div class="lg:w-1/4">
            <div class="hidden lg:block"><br><br><br></div>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาฟุตบอล (สนามนอกมช.)</h1>
            <border />
            <br><br>
            <p class="text-center lg:text-right">สนามฟุตบอล กองทัพอากาศ กองบิน 41
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <div class="w-full flex justify-center">
              <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <a href="https://goo.gl/maps/hfKyMT8rqF1i1dvZ9" class="text-center lg:text-right">
                  goo.gl/maps/hfKyMT8rqF1i1dvZ9</a>
              </button>
            </div>
            <br>
          </div>
        </div>
        <br><br>
        <div class="border-dashed lg:border-none border-4 border-gray-400 flex flex-col lg:flex-row">
          <div class="w-full lg:w-3/4">
            <a href="https://goo.gl/maps/p7tegmkVN88vv24x8">
              <img src="~/assets/Map/futsal map.png">
            </a>
          </div>
          <div class="lg:w-1/4">
            <div class="hidden lg:block"><br><br><br></div>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาฟุตซอล</h1>
            <border />
            <br><br>
            <p class="text-center lg:text-right">สนามฟุตซอล โรงเรียนสาธิตมหาวิทยาลัยเชียงใหม่
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <div class="w-full flex justify-center">
              <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <a href="https://goo.gl/maps/p7tegmkVN88vv24x8" class="text-center lg:text-right">
                  goo.gl/maps/p7tegmkVN88vv24x8</a>
              </button>
            </div>
            <br>
          </div>
        </div>
        <br><br>
        <div class="border-dashed lg:border-none border-4 border-gray-400 flex flex-col lg:flex-row">
          <div class="w-full lg:w-3/4">
            <a href="https://goo.gl/maps/2P9Tdi289egz11FBA">
              <img src="~/assets/Map/petanque map.png">
            </a>
          </div>
          <div class="lg:w-1/4">
            <div class="hidden lg:block"><br><br><br></div>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาเปตอง</h1>
            <border />
            <br><br>
            <p class="text-center lg:text-right">ลานดำสนามเปตอง มหาวิทยาลัยเชียงใหม่
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <div class="w-full flex justify-center">
              <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <a href="https://goo.gl/maps/2P9Tdi289egz11FBA" class="text-center lg:text-right">
                  goo.gl/maps/2P9Tdi289egz11FBA</a>
              </button>
            </div>
            <br>
          </div>
        </div>
        <br><br>
        <div class="border-dashed lg:border-none border-4 border-gray-400 flex flex-col lg:flex-row">
          <div class="w-full lg:w-3/4">
            <a href="https://goo.gl/maps/UhTVSZLDamg51vJi9">
              <img src="~/assets/Map/rugby map.png">
            </a>
          </div>
          <div class="lg:w-1/4">
            <div class="hidden lg:block"><br><br><br></div>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬารักบี้ฟุตบอล</h1>
            <border />
            <br><br>
            <p class="text-center lg:text-right">Rugby Field Chiang Mai University
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <div class="w-full flex justify-center">
              <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <a href="https://goo.gl/maps/UhTVSZLDamg51vJi9" class="text-center lg:text-right">
                  goo.gl/maps/UhTVSZLDamg51vJi9</a>
              </button>
            </div>

            <br><br>
            <p class="text-center lg:text-right">CMU Main Stadium (รอบชิงชนะเลิศ)
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <div class="w-full flex justify-center">
              <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <a href="https://goo.gl/maps/tXv2vxLjW6Y5GQUs9" class="text-center lg:text-right">
                  goo.gl/maps/tXv2vxLjW6Y5GQUs9</a>
              </button>
            </div>
            <br>
          </div>
        </div>
        <br><br>
        <div class="border-dashed lg:border-none border-4 border-gray-400 flex flex-col lg:flex-row">
          <div class="w-full lg:w-3/4">
            <a href="https://goo.gl/maps/GqPPvNowxLWS1qBB6">
              <img src="~/assets/Map/sepak takraw map.png">
            </a>
          </div>
          <div class="lg:w-1/4">
            <div class="hidden lg:block"><br><br><br></div>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาเซปักตะกร้อ</h1>
            <border />
            <br><br>
            <p class="text-center lg:text-right">สนามตะกร้อ มอชอ
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <div class="w-full flex justify-center">
              <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <a href="https://goo.gl/maps/GqPPvNowxLWS1qBB6" class="text-center lg:text-right">
                  goo.gl/maps/GqPPvNowxLWS1qBB6</a>
              </button>
            </div>
            <br>
          </div>
        </div>
        <br><br>
        <div class="border-dashed lg:border-none border-4 border-gray-400 flex flex-col lg:flex-row">
          <div class="w-full lg:w-3/4">
            <a href="https://goo.gl/maps/xZ67ic217M3bVLgv6">
              <img src="~/assets/Map/softball map.png">
            </a>
          </div>
          <div class="lg:w-1/4">
            <div class="hidden lg:block"><br><br><br></div>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาซอฟท์บอล</h1>
            <border />
            <br><br>
            <p class="text-center lg:text-right">สนามซอฟท์บอล มช.
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <div class="w-full flex justify-center">
              <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <a href="https://goo.gl/maps/xZ67ic217M3bVLgv6" class="text-center lg:text-right">
                  goo.gl/maps/xZ67ic217M3bVLgv6</a>
              </button>
            </div>
            <br>
          </div>
        </div>
        <br><br>
        <div class="border-dashed lg:border-none border-4 border-gray-400 flex flex-col lg:flex-row">
          <div class="w-full lg:w-3/4">
            <a href="https://goo.gl/maps/EryYLUZEU4YHyQgu8">
              <img src="~/assets/Map/swim map.png">
            </a>
          </div>
          <div class="lg:w-1/4">
            <div class="hidden lg:block"><br><br><br></div>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาว่ายน้ำ</h1>
            <border />
            <br><br>
            <p class="text-center lg:text-right">Rujirawong Swimming Pool
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <div class="w-full flex justify-center">
              <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <a href="https://goo.gl/maps/EryYLUZEU4YHyQgu8" class="text-center lg:text-right">
                  goo.gl/maps/EryYLUZEU4YHyQgu8</a>
              </button>
            </div>
            <br>
          </div>
        </div>
        <br><br>
        <div class="border-dashed lg:border-none border-4 border-gray-400 flex flex-col lg:flex-row">
          <div class="w-full lg:w-3/4">
            <a href="https://goo.gl/maps/dT6XxtGhZEp2Hq959">
              <img src="~/assets/Map/table tennis map.png">
            </a>
          </div>
          <div class="lg:w-1/4">
            <div class="hidden lg:block"><br><br><br></div>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาเทเบิลเทนนิส</h1>
            <border />
            <br><br>
            <p class="text-center lg:text-right">โรงยิมชั้น 2 อาคารสาธิตรวมใจ โรงเรียนสาธิตมหาวิทยาลัยเชียงใหม่
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <div class="w-full flex justify-center">
              <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <a href="https://goo.gl/maps/dT6XxtGhZEp2Hq959" class="text-center lg:text-right">
                  goo.gl/maps/dT6XxtGhZEp2Hq959</a>
              </button>
            </div>
            <br>
          </div>
        </div>
        <br><br>
        <div class="border-dashed lg:border-none border-4 border-gray-400 flex flex-col lg:flex-row">
          <div class="w-full lg:w-3/4">
            <a href="https://goo.gl/maps/x7gV3ryvM5gpPWrYA">
              <img src="~/assets/Map/tennis map.png">
            </a>
          </div>
          <div class="lg:w-1/4">
            <div class="hidden lg:block"><br><br><br></div>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาเทนนิส</h1>
            <border />
            <br><br>
            <p class="text-center lg:text-right">สนามเทนนิส มอชอ
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <div class="w-full flex justify-center">
              <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <a href="https://goo.gl/maps/x7gV3ryvM5gpPWrYA" class="text-center lg:text-right">
                  goo.gl/maps/x7gV3ryvM5gpPWrYA</a>
              </button>
            </div>
            <br>
          </div>
        </div>
        <br><br>
        <div class="border-dashed lg:border-none border-4 border-gray-400 flex flex-col lg:flex-row">
          <div class="w-full lg:w-3/4">
            <a href="https://goo.gl/maps/bVfxbSmQJ62dGNhy8">
              <img src="~/assets/Map/volleyball map.png">
            </a>
          </div>
          <div class="lg:w-1/4">
            <div class="hidden lg:block"><br><br><br></div>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาวอลเลย์บอล</h1>
            <border />
            <br><br>
            <p class="text-center lg:text-right">สนามกีฬาวอลเลย์บอลกลางแจ้ง มหาวิทยาลัยเชียงใหม่
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <div class="w-full flex justify-center">
              <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <a href="https://goo.gl/maps/bVfxbSmQJ62dGNhy8" class="text-center lg:text-right">
                  goo.gl/maps/bVfxbSmQJ62dGNhy8</a>
              </button>
            </div>
            <br>
            <br><br>
            <p class="text-center lg:text-right">โรงยิมคณะศึกษาศาสตร์ มหาวิทยาลัยเชียงใหม่
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <div class="w-full flex justify-center">
              <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <a href="https://goo.gl/maps/D1eCdANNU99VnRp89" class="text-center lg:text-right">
                  goo.gl/maps/D1eCdANNU99VnRp89</a>
              </button>
            </div>
            <br>
          </div>
        </div>
        <br><br>


      </div>
    </div>
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
  import Map from "~/components/Map/Map";
  import Footer from "~/components/Footer";
  export default {
    components: {
      navbar,
      border,
      Map,
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
