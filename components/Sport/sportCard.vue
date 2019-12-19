<template>
  <section>
    <div class="flex">
      <div class="flex-col">
        <nuxt-link to="sportDetails/fotsal">
          <div class="card-body card-border m-3">
            <img
              src="~/assets/sport_img/fotsal.PNG"
              class="object-fill"
              height="1000"
            />
            <br />
          </div>
          <h1>FOOTSAL</h1>
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
          </div>
          <H1> BADMINTON</H1>
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
          </div>
          <h1>
            ATHLETICS
          </h1>
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
          </div>
          <h1>
            BASKETBALL
          </h1>
        </nuxt-link>
      </div>
    </div>
    <div class="flex">
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/e-sport.PNG" />
            <br />
          </div>
          <h1>
            E-SPORT
          </h1>
        </nuxt-link>
      </div>
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/swim.PNG" />
            <br />
          </div>
          <h1>
            SWIMMING
          </h1>
        </nuxt-link>
      </div>
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/pingpong.PNG" />
            <br />
          </div>
          <h1>
            TABLE-TENNIS
          </h1>
        </nuxt-link>
      </div>
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/boardgame.PNG" />
            <br />
          </div>
          <h1>
            BOARDGAMES
          </h1>
        </nuxt-link>
      </div>
    </div>
    <div class="flex">
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/volleyball.PNG" />
            <br />
          </div>
          <h1>
            VOLLEYBALL
          </h1>
        </nuxt-link>
      </div>
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/football.PNG" />
            <br />
          </div>
          <h1>
            FOOTBALL
          </h1>
        </nuxt-link>
      </div>
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/sapak.PNG" />
            <br />
          </div>
          <h1>
            SEPAKTAKRAW
          </h1>
        </nuxt-link>
      </div>
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/softball.PNG" />
            <br />
          </div>
          <h1>
            SOFTBALL
          </h1>
        </nuxt-link>
      </div>
    </div>
    <div class="flex">
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/tennis.PNG" />
            <br />
          </div>
          <h1>
            TENNIS
          </h1>
        </nuxt-link>
      </div>
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/petong.PNG" />
            <br />
          </div>
          <h1>
            PETONG
          </h1>
        </nuxt-link>
      </div>
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/rugby.PNG" />
            <br />
          </div>
          <h1>
            RUGBY
          </h1>
        </nuxt-link>
      </div>
      <div class="flex-col">
        <nuxt-link to="sportDetails">
          <div class="card-body card-border m-3 btn btn-outline-danger">
            <img src="~/assets/sport_img/san.PNG" />
            <br />
          </div>
          <h1>
            สันทนาการ
          </h1>
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
