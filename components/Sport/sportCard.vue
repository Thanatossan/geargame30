<template>
  <section>
    <div class="flex">
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3">
            <img
              src="~/assets/sport_img/fotsal.PNG"
              class="object-fill"
              height="1000"
            />
            <br />
            <border />
            <br />
            <label class="default-text">ฟุตซอล</label>
          </div>
        </nuxt-link>
      </div>
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img
              src="~/assets/sport_img/badminton.PNG"
              class="object-fill h-auto w-auto"
            />
            <br />
            <border />
            <br />
            <label class="default-text">แบตมินตัน</label>
          </div>
        </nuxt-link>
      </div>
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img
              src="~/assets/sport_img/running.PNG"
              class="object-fill h-auto w-auto"
            />
            <br />
            <border />
            <br />
            <label class="default-text">กรีฑา</label>
          </div>
        </nuxt-link>
      </div>
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img
              src="~/assets/sport_img/basketball.PNG"
              class="object-fill h-auto w-auto"
            />
            <br />
            <border />
            <br />
            <label class="default-text">บาสเก็ตบอล</label>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="flex">
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/e-sport.PNG" />
            <br />
            <border />
            <br />
            <label class="default-text">E-sport</label>
          </div>
        </nuxt-link>
      </div>
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/swim.PNG" />
            <br />
            <border />
            <br />
            <label class="default-text">กีฬาทางน้ำ</label>
          </div>
        </nuxt-link>
      </div>
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/pingpong.PNG" />
            <br />
            <border />
            <br />
            <label class="default-text">ปิงปอง</label>
          </div>
        </nuxt-link>
      </div>
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/boardgame.PNG" />
            <br />
            <border />
            <br />
            <label class="default-text">หมากกระดาน</label>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="flex">
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/volleyball.PNG" />
            <br />
            <border />
            <br />
            <label class="default-text">วอลเล่ย์บอล</label>
          </div>
        </nuxt-link>
      </div>
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/football.PNG" />
            <br />
            <border />
            <br />
            <label class="default-text">ฟุตบอล</label>
          </div>
        </nuxt-link>
      </div>
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/sapak.PNG" />
            <br />
            <border />
            <br />
            <label class="default-text">เซปักตะกร้อ</label>
          </div>
        </nuxt-link>
      </div>
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/softball.PNG" />
            <br />
            <border />
            <br />
            <label class="default-text">ซอร์ฟบอล</label>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="flex">
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/tennis.PNG" />
            <br />
            <border />
            <br />
            <label class="default-text">เทนนิส</label>
          </div>
        </nuxt-link>
      </div>
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/petong.PNG" />
            <br />
            <border />
            <br />
            <label class="default-text">เปตอง</label>
          </div>
        </nuxt-link>
      </div>
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/rugby.PNG" />
            <br />
            <border />
            <br />
            <label class="default-text">รักบี้</label>
          </div>
        </nuxt-link>
      </div>
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/san.PNG" />
            <br />
            <border />
            <br />
            <label class="default-text">สันทนาการ</label>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
import border from "~/components/border";
export default {
  components: {
    border
  }
};
</script>
<style scoped>
.card-border {
  border: 2px solid rgb(214, 212, 212);
  border-radius: 15px;
  display: block;
}
.default-text {
  font-family: Rubik;
  text-align: center;
  font-size: 20px;
}
</style>
