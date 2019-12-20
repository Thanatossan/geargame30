<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
      rel="stylesheet"
    />
    <div class="container max-w-screen-xl lg:mx-auto px-6">

      <div>

        <navbar />
        <Map />
        <border />
        <br>
        <h1 class="text-2xl text-center"> แผนที่หอพักนักศึกษา </h1>
        <div class="flex">
          <div>
            <img
              src="~/assets/Map/cmu_map.png"
              class=" object-center lg:w-3/4 lg:ml-40"
            />
          </div>

        </div>

        <h1 class="text-center text-2xl"> แผนที่ สนามแข่งกีฬา </h1>
        <br>
        <border />

        <div class="flex ">
          <div class="w-3/4 ">
            <a href="https://goo.gl/maps/2Z74oAbXGAj8gAqw7">
              <img src="~/assets/Map/athletic & recreation map.png">
            </a>
          </div>
          <div class="w-1/4 ">
            <br><br><br>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬากรีฑา</h1>
            <border />
            <br><br>
            <p class="text-right lg:text-center"> CMU Main Stadium
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <a
              href="https://goo.gl/maps/2Z74oAbXGAj8gAqw7"
              class="text-right"
            > https://goo.gl/maps/2Z74oAbXGAj8gAqw7</a>
          </div>
        </div>
        <br><br>
        <div class="flex">
          <div class="w-3/4">
            <a href="https://goo.gl/maps/2Z74oAbXGAj8gAqw7">
              <img src="~/assets/Map/badminton map.png">
            </a>
          </div>
          <div class="w-1/4">
            <br><br><br>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาแบดมินตัน</h1>
            <border />
            <br><br>
            <p class="text-right">Main Gymnasium Chiangmai University
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <a
              href="https://goo.gl/maps/p7tegmkVN88vv24x8"
              class="text-right"
            > https://goo.gl/maps/p7tegmkVN88vv24x8</a>
          </div>
        </div>
        <div class="flex">
          <div class="w-3/4">
            <a href="https://goo.gl/maps/2Z74oAbXGAj8gAqw7">
              <img src="~/assets/Map/basketball map.png">
            </a>
          </div>
          <div class="w-1/4">
            <br><br><br>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาบาสเก็ตบอล</h1>
            <border />
            <br><br>
            <p class="text-right">Main Gymnasium Chiangmai University
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <a
              href="https://goo.gl/maps/p7tegmkVN88vv24x8"
              class="text-right"
            > https://goo.gl/maps/p7tegmkVN88vv24x8</a>
          </div>
        </div>

        <div class="flex">
          <div class="w-3/4">
            <a href="https://goo.gl/maps/2Z74oAbXGAj8gAqw7">
              <img src="~/assets/Map/foot ball map (ในมช.).png">
            </a>
          </div>
          <div class="w-1/4">
            <br><br><br>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาฟุตบอล (สนามในมช.)</h1>
            <border />
            <br><br>
            <p class="text-right">CMU Main Stadium
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <a
              href="https://goo.gl/maps/tXv2vxLjW6Y5GQUs9"
              class="text-right"
            > https://goo.gl/maps/tXv2vxLjW6Y5GQUs9</a>
          </div>
        </div>
        <div class="flex">
          <div class="w-3/4">
            <a href="https://goo.gl/maps/2Z74oAbXGAj8gAqw7">
              <img src="~/assets/Map/foot ball map (นอกมช. 2).png">
            </a>
          </div>
          <div class="w-1/4">
            <br><br><br>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาฟุตบอล (สนามนอกมช.)</h1>
            <border />
            <br><br>
            <p class="text-right">สนามฟุตบอล กองทัพอากาศ กองบิน 41
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <a
              href="https://goo.gl/maps/hfKyMT8rqF1i1dvZ9"
              class="text-right"
            > https://goo.gl/maps/hfKyMT8rqF1i1dvZ9</a>
          </div>
        </div>
        <div class="flex">
          <div class="w-3/4">
            <a href="https://goo.gl/maps/2Z74oAbXGAj8gAqw7">
              <img src="~/assets/Map/futsal map.png">
            </a>
          </div>
          <div class="w-1/4">
            <br><br><br>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาฟุตซอล</h1>
            <border />
            <br><br>
            <p class="text-right">สนามฟุตซอล โรงเรียนสาธิตมหาวิทยาลัยเชียงใหม่
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <a
              href="https://goo.gl/maps/p7tegmkVN88vv24x8"
              class="text-right"
            > https://goo.gl/maps/p7tegmkVN88vv24x8</a>
          </div>
        </div>

        <div class="flex">
          <div class="w-3/4">
            <a href="https://goo.gl/maps/2Z74oAbXGAj8gAqw7">
              <img src="~/assets/Map/petanque map.png">
            </a>
          </div>
          <div class="w-1/4">
            <br><br><br>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาเปตอง</h1>
            <border />
            <br><br>
            <p class="text-right">ลานดำสนามเปตอง มหาวิทยาลัยเชียงใหม่
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <a
              href="https://goo.gl/maps/2P9Tdi289egz11FBA"
              class="text-right"
            > https://goo.gl/maps/2P9Tdi289egz11FBA</a>
          </div>
        </div>

        <div class="flex">
          <div class="w-3/4">
            <a href="https://goo.gl/maps/2Z74oAbXGAj8gAqw7">
              <img src="~/assets/Map/rugby map.png">
            </a>
          </div>
          <div class="w-1/4">
            <br><br><br>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬารักบี้ฟุตบอล</h1>
            <border />
            <br><br>
            <p class="text-right">Rugby Field Chiang Mai University
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <a
              href="https://goo.gl/maps/UhTVSZLDamg51vJi9"
              class="text-right"
            > https://goo.gl/maps/UhTVSZLDamg51vJi9</a>
            <br><br>
            <p class="text-right">CMU Main Stadium (รอบชิงชนะเลิศ)
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <a
              href="https://goo.gl/maps/tXv2vxLjW6Y5GQUs9"
              class="text-right"
            > https://goo.gl/maps/tXv2vxLjW6Y5GQUs9</a>
          </div>
        </div>

        <div class="flex">
          <div class="w-3/4">
            <a href="https://goo.gl/maps/2Z74oAbXGAj8gAqw7">
              <img src="~/assets/Map/sepak takraw map.png">
            </a>
          </div>
          <div class="w-1/4">
            <br><br><br>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาเซปักตะกร้อ</h1>
            <border />
            <br><br>
            <p class="text-right">สนามตะกร้อ มอชอ
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <a
              href="https://goo.gl/maps/GqPPvNowxLWS1qBB6"
              class="text-right"
            > https://goo.gl/maps/GqPPvNowxLWS1qBB6</a>
          </div>
        </div>

        <div class="flex">
          <div class="w-3/4">
            <a href="https://goo.gl/maps/2Z74oAbXGAj8gAqw7">
              <img src="~/assets/Map/softball map.png">
            </a>
          </div>
          <div class="w-1/4">
            <br><br><br>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาซอฟท์บอล</h1>
            <border />
            <br><br>
            <p class="text-right">สนามซอฟท์บอล มช.
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <a
              href="https://goo.gl/maps/xZ67ic217M3bVLgv6"
              class="text-right"
            > https://goo.gl/maps/xZ67ic217M3bVLgv6</a>
          </div>
        </div>

        <div class="flex">
          <div class="w-3/4">
            <a href="https://goo.gl/maps/2Z74oAbXGAj8gAqw7">
              <img src="~/assets/Map/swim map.png">
            </a>
          </div>
          <div class="w-1/4">
            <br><br><br>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาว่ายน้ำ</h1>
            <border />
            <br><br>
            <p class="text-right">Rujirawong Swimming Pool
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <a
              href="https://goo.gl/maps/EryYLUZEU4YHyQgu8"
              class="text-right"
            > https://goo.gl/maps/EryYLUZEU4YHyQgu8</a>
          </div>
        </div>

        <div class="flex">
          <div class="w-3/4">
            <a href="https://goo.gl/maps/2Z74oAbXGAj8gAqw7">
              <img src="~/assets/Map/table tennis map.png">
            </a>
          </div>
          <div class="w-1/4">
            <br><br><br>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาเทเบิลเทนนิส</h1>
            <border />
            <br><br>
            <p class="text-right">โรงยิมชั้น 2 อาคารสาธิตรวมใจ โรงเรียนสาธิตมหาวิทยาลัยเชียงใหม่
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <a
              href="https://goo.gl/maps/dT6XxtGhZEp2Hq959"
              class="text-right"
            > https://goo.gl/maps/dT6XxtGhZEp2Hq959</a>
          </div>
        </div>

        <div class="flex">
          <div class="w-3/4">
            <a href="https://goo.gl/maps/2Z74oAbXGAj8gAqw7">
              <img src="~/assets/Map/tennis map.png">
            </a>
          </div>
          <div class="w-1/4">
            <br><br><br>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาเทนนิส</h1>
            <border />
            <br><br>
            <p class="text-right">สนามเทนนิส มอชอ
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <a
              href="https://goo.gl/maps/x7gV3ryvM5gpPWrYA"
              class="text-right"
            > https://goo.gl/maps/x7gV3ryvM5gpPWrYA</a>
          </div>
        </div>

        <div class="flex">
          <div class="w-3/4">
            <a href="https://goo.gl/maps/2Z74oAbXGAj8gAqw7">
              <img src="~/assets/Map/volleyball map.png">
            </a>
          </div>
          <div class="w-1/4">
            <br><br><br>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาวอลเลย์บอล</h1>
            <border />
            <br><br>
            <p class="text-right">สนามกีฬาวอลเลย์บอลกลางแจ้ง มหาวิทยาลัยเชียงใหม่
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <a
              href="https://goo.gl/maps/bVfxbSmQJ62dGNhy8"
              class="text-right"
            > https://goo.gl/maps/bVfxbSmQJ62dGNhy8</a>
            <br><br>
            <p class="text-right">โรงยิมคณะศึกษาศาสตร์ มหาวิทยาลัยเชียงใหม่
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <a
              href="https://goo.gl/maps/D1eCdANNU99VnRp89"
              class="text-right"
            > https://goo.gl/maps/D1eCdANNU99VnRp89</a>
          </div>
        </div>

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