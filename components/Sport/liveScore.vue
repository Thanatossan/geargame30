<template>
  <div class="container">
    <div class="w-1/6">
      <div id="Live_Score">
        <span>Live</span><br /><span style="color:rgba(223,80,62,1);">Score</span>
      </div>
    </div>
    <div class="container">
      <br />
      <div id="Live_Score_table">
        <div class="border-b-2 mt-3 mb-8 "></div>
        <!-- V for -->
        <div class="flex bg-gray-100 rounded-lg p-1 m-3">
          <!--<div id="1stimgField"> -->
          <div>
            <img
              src="~/assets/image/JhangLekGames-Logo_wb.png"
              class="lg:object-scale-down max-h-small"
            />
          </div>
          <h2 class="m-auto">Closed</h2>
        </div>
        
        <!-- <div class="flex bg-gray-100 rounded-lg p-1 m-3">
          <div id="2ndimgField">
            <img
              src="~/assets/image/JhangLekGames-Logo_wb.png"
              class="lg:object-scale-down max-h-small"
            />
          </div>
          <h2
            class="m-auto"
            id="2nd"
          >Coming Soon</h2>
        </div>
        <div class="flex bg-gray-100 rounded-lg p-1 m-3">
          <div id="3rdimgField">
            <img
              src="~/assets/image/JhangLekGames-Logo_wb.png"
              class="lg:object-scale-down max-h-small"
            />
          </div>
          <h2
            class="m-auto"
            id="3rd"
          >Coming Soon</h2>
        </div>
        <div class="flex bg-gray-100 rounded-lg p-1 m-3">
          <div id="4rdimgField">
            <img
              src="~/assets/image/JhangLekGames-Logo_wb.png"
              class="lg:object-scale-down max-h-small"
            />
          </div>
          <h2
            class="m-auto"
            id="4rd"
          >Coming Soon</h2>
        </div>
        <div class="flex bg-gray-100 rounded-lg p-1 m-3">
          <div id="5rdimgField">
            <img
              src="~/assets/image/JhangLekGames-Logo_wb.png"
              class="lg:object-scale-down max-h-small"
            />
          </div>
          <h2
            class="m-auto"
            id="5rd"
          >Coming Soon</h2>
        </div>
        <div class="flex bg-gray-100 rounded-lg p-1 m-3">
          <div id="6rdimgField">
            <img
              src="~/assets/image/JhangLekGames-Logo_wb.png"
              class="lg:object-scale-down max-h-small"
            />
          </div>
          <h2
            class="m-auto"
            id="6rd"
          >Coming Soon</h2>
        </div> -->
        <!-- loop end-->
      </div>
    </div>
  </div>
</template>

<script>
// import { api } from "../../api/api";
// import $ from "jquery";
// export default {
//   data() {
//     return {};
//   },

//   methods: {
//     async appendliveSocre(arr) {
//       var socreOrder = ["#1st", "#2nd", "#3rd", "#4rd", "#5rd", "#6rd"];
//       var imgOrder = [
//         "#1stimgField",
//         "#2ndimgField",
//         "#3rdimgField",
//         "#4rdimgField",
//         "#5rdimgField",
//         "#6rdimgField"
//       ];
//       let i = 0;
//       var imgTag = "";
//       arr.forEach(each => {
//         imgTag = this.mapImg(each.sportType);
//         $(imgOrder[i]).html(imgTag);
//         if (each.sportType == "Swimming") {
//           $(socreOrder[i]).hide("fast");
//           $(`<div class="m-auto"> 
//           <h2 class="m-auto text-center">${each.sportCategory} </h2>
//           <table class="table-auto "> 
//               <thead >
//               </thead>
//               <tbody>
//                 <tr> 
//               <th class="px-4">${each.team1Player}</th>
//                <td class="px-4">${each.scoreTeam1}</td>
//                </tr> 
//                <tr> 
//               <th class="px-4">${each.team2Player}</th>
//               <td class="px-4">${each.scoreTeam2}</td>
//               </tr> 
//               <tr> 
//               <th class="px-4">${each.team3Player}</th>
//               <td class="px-4">${each.scoreTeam3}</td>
//               </tr>
//             </tbody>
//             </table></div>`).insertAfter(imgOrder[i]);
//         } else if (each.sportType == "Athletics") {
//           $(socreOrder[i]).hide("fast");
//           $(`<div class="m-auto"> 
//           <h2 class="m-auto text-center">${each.sportCategory} </h2>
//           <table class="table-auto "> 
//                <thead >
//               </thead>
//               <tbody>
//                 <tr> 
//               <td class="px-4">${each.team1Player}</th>
//                <td class="px-4">${each.scoreTeam1}</td>
//                </tr> 
//                <tr> 
//               <td class="px-4">${each.team2Player}</th>
//               <td class="px-4">${each.scoreTeam2}</td>
//               </tr> 
//               <tr> 
//               <td class="px-4">${each.team3Player}</th>
//               <td class="px-4">${each.scoreTeam3}</td>
//               </tr>
//             </tbody>
//             </table></div>`).insertAfter(imgOrder[i]);
//         } else if (each.sportType === "Entertainment") {
//           $(socreOrder[i]).html(
//             `<h2 class="m-auto text-center">${each.nameTeam1}</h2>
//               <h2 class="m-auto text-center">${each.scoreTeam1} </h2>
//             `
//           );
//           $(socreOrder[i]).show("fast");
//         } else if (each.sportCategory == null) {
//           $(socreOrder[i]).html(
//             `<h2 class="m-auto text-center">${each.nameTeam1} ${each.scoreTeam1} - ${each.scoreTeam2} ${each.nameTeam2} </h2>

//             `
//           );
//           $(socreOrder[i]).show("fast");
//         } else {
//           $(socreOrder[i]).html(
//             `<h2 class="m-auto text-center">${each.nameTeam1} ${each.scoreTeam1} - ${each.scoreTeam2} ${each.nameTeam2} </h2>
//             <h2 class="m-auto text-center">${each.sportCategory} </h2>
                
//             `
//           );
//           $(socreOrder[i]).show("fast");
//         }
//         i++;
//       });
//     },
//     async threeLastUpdatedScore(arr) {
//       var threeLeastScore = [];
//       // var sort = arr.sort(
//       //   function(a,b){
//       //     var keyA = new Date(a.updated)
//       //     var keyB = new Date(b.updated)
//       //     if(keyA > keyB) return - 1;
//       //     else if(keyA < keyB) return 1;
//       //     else return 0;
//       // })
//       let len = arr.length;
//       let loop;
//       if (len >= 6) loop = 6;
//       else loop = len;
//       for (let i = 0; i < loop; i++) {
//         threeLeastScore.push(arr[i]);
//       }
//       return threeLeastScore;
//     },
//     mapImg(sportType) {
//       var imgTag =
//         '<img src="/_nuxt/img/53a1fad.png" class="lg:object-scale-down max-h-small"/>';
//       switch (sportType) {
//         case "Badminton":
//           imgTag = `<img src="/_nuxt/img/241e671.PNG" class="lg:object-scale-down max-h-small"/>`;
//           break;
//         case "Basketball":
//           imgTag = `<img src="/_nuxt/img/11dd02b.PNG" class="lg:object-scale-down max-h-small"/>`;
//           break;
//         case "E-sport":
//           imgTag = `<img src="/_nuxt/img/fde2e01.PNG" class="lg:object-scale-down max-h-small"/>`;
//           break;
//         case "Football":
//           imgTag = `<img src="/_nuxt/img/33dc3c6.PNG" class="lg:object-scale-down max-h-small"/>`;
//           break;
//         case "Futsal":
//           imgTag = `<img src="/_nuxt/img/8578cbc.PNG" class="lg:object-scale-down max-h-small"/>`;
//           break;
//         case "Petanque":
//           imgTag = `<img src="/_nuxt/img/8ad1bed.PNG" class="lg:object-scale-down max-h-small"/>`;
//           break;
//         case "Tabletennis":
//           imgTag = `<img src="/_nuxt/img/18b415f.PNG" class="lg:object-scale-down max-h-small"/>`;
//           break;
//         case "Rugbyfootball":
//           imgTag = `<img src="/_nuxt/img/bcb9655.PNG" class="lg:object-scale-down max-h-small"/>`;
//           break;
//         case "Athletics":
//           imgTag = `<img src="/_nuxt/img/c61456b.PNG" class="lg:object-scale-down max-h-small"/>`;
//           break;
//         case "Entertainment":
//           imgTag = `<img src="/_nuxt/img/add23ac.PNG" class="lg:object-scale-down max-h-small"/>`;
//           break;
//         case "Sepaktakraw":
//           imgTag = `<img src="/_nuxt/img/02b4701.PNG" class="lg:object-scale-down max-h-small"/>`;
//           break;
//         case "Softball":
//           imgTag = `<img src="/_nuxt/img/0857216.PNG" class="lg:object-scale-down max-h-small"/>`;
//           break;
//         case "Swimming":
//           imgTag = `<img src="/_nuxt/img/cdaf21d.PNG" class="lg:object-scale-down max-h-small"/>`;
//           break;
//         case "Tennis":
//           imgTag = `<img src="/_nuxt/img/3702de5.PNG" class="lg:object-scale-down max-h-small"/>`;
//           break;
//         case "Volleyball":
//           imgTag = `<img src="/_nuxt/img/e6754dd.PNG" class="lg:object-scale-down max-h-small"/>`;
//           break;
//         case "Boardgame":
//           imgTag = `<img src="/_nuxt/img/6261fa6.PNG" class="lg:object-scale-down max-h-small"/>`;
//           break;
//       }
//       return imgTag;
//     }
//   },
//   async mounted() {
//     // const match = await api.get("/api/getMatch");
//     // var update = await this.threeLastUpdatedScore(match.data);
//     // await this.appendliveSocre(update);
//   },
//   computed: {}
// };
</script>

<style>
#Live_Score_table {
  font-size: 20px;
}
#Live_Score {
  position: absolute;
  overflow: hidden;
  width: 95px;
  height: 90px;
  text-align: left;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  color: rgba(50, 61, 83, 1);
}
</style>
