<template>
  <div class="container max-w-screen-xl lg:mx-auto px-6">
    <!-- Head -->
    <nuxt-link to="/judgetable"><button>Status</button></nuxt-link>

    <div class="flex flex-col justify-center text-center border-b-8 border-red-700 mb-4 bg-red-800 sm:shadow-lg lg:h-24 w-full">
      <div class="flex mb-4">
        <div class="w-1/5 h-12"></div>
        <div class="w-1/5 h-12"></div>
        <div class="w-1/5 h-12">
          <span
            class="default-text"
            style="font-size:36px; color:white;"
          >Match</span>
        </div>
        <div class="w-1/5 h-12"></div>
        <div class="w-1/5 h-12">
          <span style="color:white;">{{ user }}</span>
          <span style="color:white;">
            <button
              v-on:click="logout"
              class="md:object-right bg-blue-500 hover:bg-red-400 mt-2 py-1 px-3 border-b-2 border-blue-700 hover:border-red-500 rounded"
            >
              <font-awesome-icon
                :icon="['fas', 'sign-out-alt']"
                style="size:7px"
              />
            </button>
          </span>
        </div>
      </div>
    </div>

    <!-- Form 1 -->
    <div class="w-full rounded-lg">
      <form class="shadow-md rounded px-8 pt-6 rounded-l-lg pb-8 mb-4 w-auto my-5 mx-auto">
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="selected"
          >เลือกประเภทกีฬา</label>
          <select
            v-model="sportType"
            required
          >
            <option
              disabled
              value
            >Please select one</option>
            <option>Futsal</option>
            <option>Badminton</option>
            <option>Basketball</option>
            <option>E-sport</option>
            <option>Tabletennis</option>
            <option>Boardgame</option>
            <option>Volleyball</option>
            <option>Football</option>
            <option>Sepaktakraw</option>
            <option>Softball</option>
            <option>Tennis</option>
            <option>Petanque</option>
            <option>Rugbyfootball</option>
            <option>Entertainment</option>
          </select>
          <select
            v-model="category"
            required
          >
            <option
              disabled
              value
            >Please select one</option>
            <option v-if="
                sportType == 'Badminton' ||
                  sportType == 'Tennis' ||
                  sportType == 'Tabletennis'
              ">ประเภทเดี่ยวชาย</option>
            <option v-if="
                sportType == 'Badminton' ||
                  sportType == 'Tennis' ||
                  sportType == 'Tabletennis'
              ">ประเภทเดี่ยวหญิง</option>
            <option v-if="
                sportType == 'Badminton' ||
                  sportType == 'Tennis' ||
                  sportType == 'Petanque'
              ">ประเภทคู่ชายล้วน</option>
            <option v-if="
                sportType == 'Badminton' ||
                  sportType == 'Tennis' ||
                  sportType == 'Petanque'
              ">ประเภทคู่หญิงล้วน</option>
            <option v-if="
                sportType == 'Badminton' ||
                  sportType == 'Tennis' ||
                  sportType == 'Petanque'
              ">ประเภทคู่ผสม</option>
            <option v-if="
                sportType == 'Futsal' ||
                  sportType == 'Petanque' ||
                  sportType == 'Basketball' ||
                  sportType == 'E-sport' ||
                  sportType == 'Volleyball' ||
                  sportType == 'Football' ||
                  sportType == 'Sepaktakraw' ||
                  sportType == 'Softball' ||
                  sportType == 'Rugbyfootball' ||
                  sportType == 'Entertainment'
              ">ประเภททีมชาย</option>
            <option v-if="sportType == 'Tabletennis'">ประเภททีมชาย(3 คน)</option>
            <option v-if="sportType == 'Petanque' || sportType == 'Volleyball'">ประเภททีมหญิง</option>
            <option v-if="sportType == 'Boardgame'">หมากรุกไทย</option>
            <option v-if="sportType == 'Boardgame'">A-math แบบเดี่ยว</option>
            <option v-if="sportType == 'Boardgame'">A-math แบบคู่</option>
            <option v-if="sportType == 'Boardgame'">Crossword แบบเดี่ยว</option>
            <option v-if="sportType == 'Boardgame'">Crossword แบบคู่</option>
          </select>
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="selected"
          >เลือกสนามแข่ง</label>
          <select
            v-model="field"
            required
          >
            <option>โรงยิมกลาง</option>
            <option>สนามฟุตบอลกองบิน 41</option>
            <option>สนามกีฬากลาง</option>
            <option>สนามฟุตซอลโรงยิมพลศึกษา</option>
            <option>สนามเปตอง</option>
            <option>สนามรักบี้</option>
            <option>สนามตระกร้อ</option>
            <option>สนามซอฟบอล</option>
            <option>โรงเรียนสาธิต มช.</option>
            <option>สนามเทนนิส</option>
            <option>สนามวอลเลย์บอลกลางแจ้ง</option>
            <option>โรงยิมคณะศึกษาศาสตร์</option>
          </select>
        </div>
        <div class="mb-4">
          <label
            class="text-gray-700 text-sm font-bold"
            for="selected"
          >เวลาเริ่มแข่งขัน</label>
          <input
            v-model="startTime"
            class="hadow appearance-none border rounded w-25 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="datetime-local"
          />
          <label
            class="text-gray-700 text-sm font-bold"
            for="selected"
          >เวลาจบแข่งขัน</label>
          <input
            v-model="endTime"
            class="hadow appearance-none border rounded w-25 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="datetime-local"
          />
        </div>

        <div v-if="
            sportType == 'Entertainment' ||
              sportType == 'Sepaktakraw' ||
              sportType == 'Petanque' ||
              sportType == 'Tennis' ||
              sportType == 'Boardgames' ||
              sportType == 'Softball' ||
              sportType == 'Basketball' ||
              sportType == 'Football' ||
              sportType == 'Futsal' ||
              sportType == 'Rugbyfootball' ||
              sportType == 'Volleyball' ||
              sportType == 'E-sport' ||
              sportType == 'Tabletennis'||
              sportType == 'Badminton'
          ">
          <!-- team1-section -->
          <h2 class="text-gray-700 font-bold mb-2">Team 1</h2>
          <div class="mb-4">
            <input
              v-model="nameTeam1"
              class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="กรอกชื่อทีมที่ 1"
            />
            <input
              v-model="scoreTeam1"
              class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="กรอกคะแนนทีมที่ 1"
            />
          </div>
          <!-- team2-section -->
          <h2 class="text-gray-700 font-bold mb-2">Team 2</h2>
          <div class="mb-4">
            <input
              v-model="nameTeam2"
              class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="กรอกชื่อทีมที่ 2"
            />
            <input
              v-model="scoreTeam2"
              class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="กรอกคะแนนทีมที่ 2"
            />
          </div>

          <!-- team3--section -->
          <div class="mb-4">
            <label style="color:red">*หมายเหตุ ถ้าไม่มีไม่ต้องกรอก</label>
          </div>
          <h2 class="text-gray-700 font-bold mb-2">Team 3</h2>
          <div class="mb-4">
            <input
              v-model="nameTeam3"
              class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="กรอกชื่อทีมที่ 3"
            />
            <input
              v-model="scoreTeam3"
              class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="กรอกคะแนนทีมที่ 3"
            />
          </div>
        </div>

        <!-- player section -->
        <div v-if="sportType == 'Tabletennis' && category == 'ประเภททีมชาย(3 คน)'">
          <h2 class="text-gray-700 font-bold mb-2">Palyer 1</h2>
          <div class="mb-4">
            <input
              v-model="player1"
              class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="กรอกชื่อผู้เล่นคนที่ 1"
              required
            />
            <input
              v-model="scorePlayer1"
              class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="กรอกคะแนนผู้เล่นคนที่ 1"
              required
            />
          </div>

          <h2 class="text-gray-700 font-bold mb-2">Palyer 2</h2>
          <div class="mb-4">
            <input
              v-model="player2"
              class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="กรอกชื่อผู้เล่นคนที่ 2"
              required
            />
            <input
              v-model="scorePlayer2"
              class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="กรอกคะแนนผู้เล่นคนที่ 2"
              required
            />
          </div>

          <h2 class="text-gray-700 font-bold mb-2">Palyer 3</h2>
          <div class="mb-4">
            <input
              v-model="player3"
              class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="กรอกชื่อผู้เล่นคนที่ 3"
            />
            <input
              v-model="scorePlayer3"
              class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="กรอกคะแนนผู้เล่นคนที่ 3"
            />
          </div>
        </div>
        <div class="flex items-center justify-between">
          <button
            v-on:click="insert"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

    <!-- Form 2  -->
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label style="color:red">*หมายเหตุฟอร์มเฉพาะ กรีฑาและว่ายน้ำเท่านั้น!!!</label>
      </div>
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="selected"
      >เลือกประเภทกีฬา</label>
      <div class="mb-6">
        <select v-model="sportType">
          <option
            disabled
            value
          >Please select one</option>
          <option>Athletics</option>
          <option>Swimming</option>
        </select>
        <select v-model="category">
          <option
            disabled
            value
          >Please select one</option>
          <option v-if="sportType == 'Athletics'">ประเภท 100 เมตรชาย</option>
          <option v-if="sportType == 'Athletics'">ประเภท 100 เมตรหญิง</option>
          <option v-if="sportType == 'Athletics'">ประเภท 200 เมตรชาย</option>
          <option v-if="sportType == 'Athletics'">ประเภท 200 เมตรหญิง</option>
          <option v-if="sportType == 'Athletics'">ประเภท 400 เมตรชาย</option>
          <option v-if="sportType == 'Athletics'">ประเภท 400 เมตรหญิง</option>
          <option v-if="sportType == 'Athletics'">ประเภททีมวิ่งพลัด 4*100 เมตรชาย</option>
          <option v-if="sportType == 'Athletics'">ประเภททีมวิ่งพลัด 4*100 เมตรหญิง</option>
          <option v-if="sportType == 'Athletics'">ประเภททีมวิ่งพลัด 4*400 เมตรชาย</option>
          <option v-if="sportType == 'Athletics'">ประเภททีมวิ่งพลัด 4*100 เมตรกญืง</option>

          <option v-if="sportType == 'Swimming'">ประเภทเดี่ยวผสม 200 เมตรหญิง</option>
          <option v-if="sportType == 'Swimming'">ประเภทท่าฟรีสไตล์ 50 เมตร เมตรชาย</option>
          <option v-if="sportType == 'Swimming'">ประเภทท่าฟรีสไตล์ 50 เมตรหญิง</option>
          <option v-if="sportType == 'Swimming'">ประเภทท่าฟรีสไตล์ 100 เมตรชาย</option>
          <option v-if="sportType == 'Swimming'">ประเภทท่าฟรีสไตล์ 100 เมตรหญิง</option>
          <option v-if="sportType == 'Swimming'">ประเภทผีเสื้อ 50 เมตรชาย</option>
          <option v-if="sportType == 'Swimming'">ประเภทท่าผีเสื้อ 50 เมตรหญิง</option>
          <option v-if="sportType == 'Swimming'">ประเภทท่ากรรเชียง 50 เมตรชาย</option>
          <option v-if="sportType == 'Swimming'">ประเภทท่ากรรเชียง 50 เมตรหญิง</option>
          <option v-if="sportType == 'Swimming'">ประเภทท่ากบ 50 เมตรชาย</option>
          <option v-if="sportType == 'Swimming'">ประเภทท่ากบ 50 เมตรหญิง</option>
          <option v-if="sportType == 'Swimming'">ประเภทท่ากบ 100 เมตรชาย</option>
          <option v-if="sportType == 'Swimming'">ประเภทท่ากบ 100 เมตรหญิง</option>
          <option v-if="sportType == 'Swimming'">ประเภทผลัดผสม 4*50 เมตรชาย</option>
          <option v-if="sportType == 'Swimming'">ประเภทผลัดฟรีสไตล์ 4*50 เมตรชาย</option>
        </select>
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="selected"
        >เลือกสนามแข่ง</label>
        <select
          v-model="field"
          required
        >
          <option>สระรุจิระวงศ์</option>
          <option>สนามกีฬากลาง</option>
        </select>
      </div>
      <div class="mb-4">
        <label
          class="text-gray-700 text-sm font-bold"
          for="selected"
        >เวลาเริ่มแข่งขัน</label>
        <input
          v-model="startTime"
          class="hadow appearance-none border rounded w-25 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="datetime-local"
        />
        <label
          class="text-gray-700 text-sm font-bold"
          for="selected"
        >เวลาจบแข่งขัน</label>
        <input
          v-model="endTime"
          class="hadow appearance-none border rounded w-25 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="datetime-local"
        />
      </div>
      <div v-if="
          (sportType == 'Swimming' &&
            (category == 'ประเภทผลัดผสม 4*50 เมตรชาย' ||
              category == 'ประเภทผลัดฟรีสไตล์ 4*50 เมตรชาย')) ||
            (sportType == 'Athletics' &&
              (category == 'ประเภททีมวิ่งพลัด 4*100 เมตรชาย' ||
                category == 'ประเภททีมวิ่งพลัด 4*100 เมตรหญิง' ||
                category == 'ประเภททีมวิ่งพลัด 4*400 เมตรชาย' ||
                category == 'ประเภททีมวิ่งพลัด 4*100 เมตรกญืง'))
        ">
        <!-- team1-section -->
        <h2 class="text-gray-700 font-bold mb-2">Team 1</h2>
        <div class="mb-4">
          <input
            v-model="nameTeam1"
            class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="กรอกชื่อทีมที่ 1"
          />
          <input
            v-model="scoreTeam1"
            class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="กรอกคะแนนทีมที่ 1"
          />
        </div>
        <!-- team2-section -->
        <h2 class="text-gray-700 font-bold mb-2">Team 2</h2>
        <div class="mb-4">
          <input
            v-model="nameTeam2"
            class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="กรอกชื่อทีมที่ 2"
          />
          <input
            v-model="scoreTeam2"
            class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="กรอกคะแนนทีมที่ 2"
          />
        </div>

        <!-- team3--section -->
        <div class="mb-4">
          <label style="color:red">*หมายเหตุ ถ้าไม่มีไม่ต้องกรอก</label>
        </div>
        <h2 class="text-gray-700 font-bold mb-2">Team 3</h2>
        <div class="mb-4">
          <input
            v-model="nameTeam3"
            class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="กรอกชื่อทีมที่ 3"
          />
          <input
            v-model="scoreTeam3"
            class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="กรอกคะแนนทีมที่ 3"
          />
        </div>
      </div>

      <div v-else>
        <h2 class="text-gray-700 font-bold mb-2">Palyer 1</h2>
        <div class="mb-4">
          <input
            v-model="player1"
            class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="กรอกชื่อผู้เล่นคนที่ 1"
            required
          />
          <input
            v-model="scorePlayer1"
            class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="กรอกคะแนนผู้เล่นคนที่ 1"
            required
          />
        </div>

        <h2 class="text-gray-700 font-bold mb-2">Palyer 2</h2>
        <div class="mb-4">
          <input
            v-model="player2"
            class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="กรอกชื่อผู้เล่นคนที่ 2"
            required
          />
          <input
            v-model="scorePlayer2"
            class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="กรอกคะแนนผู้เล่นคนที่ 2"
            required
          />
        </div>

        <h2 class="text-gray-700 font-bold mb-2">Palyer 3</h2>
        <div class="mb-4">
          <input
            v-model="player3"
            class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="กรอกชื่อผู้เล่นคนที่ 3"
          />
          <input
            v-model="scorePlayer3"
            class="m-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="กรอกคะแนนผู้เล่นคนที่ 3"
          />
        </div>
      </div>
      <div class="flex items-center justify-between">
        <button
          v-on:click="submitForm1"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Submit
        </button>
      </div>
    </form>

    <!-- Footer -->
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
import border from "~/components/border";
import Footer from "~/components/Footer";
import "../node_modules/sweetalert2/dist/sweetalert2.css";
import { api } from "../api/api";
export default {
  middleware: "authen",
  data() {
    return {
      sportType: "",
      category: "",
      field: "",
      nameTeam1: "",
      nameTeam2: "",
      nameTeam3: "",
      scoreTeam1: "",
      scoreTeam2: "",
      scoreTeam3: "",
      player1: "",
      player2: "",
      player3: "",
      scorePlayer1: "",
      scorePlayer2: "",
      scorePlayer3: "",
      startTime: null,
      endTime: null,
      user: ""
    };
  },
  methods: {
    async submitForm1() {
      await this.$swal({
        title: "ต้องการเพิ่มหรือไม่ ?",
        // text: 'You can\'t revert your action',
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "เพิ่ม",
        cancelButtonText: "ยกเลิก",
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(result => {
        if (result.value) {
          this.insert();
        } else {
          this.$swal.close();
        }
      });
    },
    async insert() {
      const judgeID = await this.$store.dispatch("getJudgeID");
      if (judgeID == "") {
        await this.$swal({
          title: "Session Expired !",
          text: "เซสชั่นหมดอายุ โปรดล็อคอินอีกครั้ง",
          type: "warning",
          confirmButtonText: "OK",
          showLoaderOnConfirm: true
        }).then(result => {
          setTimeout('location.href="/login"', 0);
        });
      } else if (
        this.field == "" ||
        this.startTime === null ||
        this.endTime === null ||
        this.sportType == "" ||
        this.category == " "
      ) {
        console.log(this.endTime);

        alert("โปรดกรอกกีฬา ประเภท สนาม เวลาเริ่ม จบ ให้ครบ");
      } else {
        const data = {
          nameTeam1: this.nameTeam1,
          scoreTeam1: this.scoreTeam1,
          player1: this.player1,
          nameTeam2: this.nameTeam2,
          scoreTeam2: this.scoreTeam2,
          player2: this.player2,
          nameTeam3: this.nameTeam3,
          scoreTeam3: this.scoreTeam3,
          player3: this.player3,
          sportType: this.sportType,
          sportCategory: this.category,
          startTime: this.startTime,
          endTime: this.endTime,
          //query
          sportField: this.field,
          judgeID: judgeID
        };
        alert("inserted");
        await api.post("/api/addMatch", { data });
      }
    },

    async logout() {
      await this.$store.dispatch("logout");
    },
    async getJudge() {
      return await this.$store.dispatch("getJudgeID");
    }
  },
  components: {
    border,
    Footer
  },
  async mounted() {
    let get = await this.getJudge();
    this.user = get.username;
  }
};
</script>

<style scoped>
.log-in {
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
