<template>
  <div class="container">
    <div class="w-1/6">
      <div id="Incomming_Games">
        <span>Incomming</span><br /><span style="color:rgba(223,80,62,1);">Games</span>
      </div>
    </div>
    <div class="container">
      <br />
      <div id="match_table">
        <div class="border-b-2 mt-3 mb-8"></div>
        <div class="flex bg-gray-100 rounded-lg p-1 m-3">
          <div id="1stIMG">
            <img
            src="~/assets/image/JhangLekGames-Logo_wb.png"
            class="lg:object-scale-down max-h-small"
          />
          </div>
          <h2 class="m-auto" id="1stincome">Coming Soon</h2>
        </div>

        <div class="flex bg-gray-100 rounded-lg p-1 m-3">
           <div id="2ndIMG">
            <img
            src="~/assets/image/JhangLekGames-Logo_wb.png"
            class="lg:object-scale-down max-h-small"
          />
          </div>
          <h2 class="m-auto" id="2ndincome">Coming Soon</h2>
        </div>
        <div class="flex bg-gray-100 rounded-lg p-1 m-3">
          <div id="3rdIMG">
            <img
            src="~/assets/image/JhangLekGames-Logo_wb.png"
            class="lg:object-scale-down max-h-small"
          />
          </div>
          <h2 class="m-auto" id="3rdincome">Coming Soon</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {api} from '../../api/api'
import $ from 'jquery'
export default {
  data(){
    return{

    }
  },
  methods : {
    async appendincomingMatch(arr){
      var scoreOrder = ['#1stincome','#2ndincome','#3rdincome']
      var imgOrder = ['#1stIMG','#2ndIMG','#3rdIMG']
      let i = 0;
      var imgTag = ''
      arr.forEach(each => {
        imgTag = this.mapImg(each.sportType)
        $(imgOrder[i]).html(imgTag)
        if(each.sportType == 'Swimming'){
          $(scoreOrder[i]).hide('fast')
          $(`<div class="m-auto"> <table class="table-fixed "> 
              <thead >
                <tr> 
              <th class="px-4">${each.team1}</th>
              <th class="px-4">${each.team2}</th>
              <th class="px-4">${each.team3}</th>
            </tr> 
            </thead>
            </table></div>`).insertAfter(imgOrder[i])
        }
        // else if(each.sportType == 'Athletics'){
          
        // }
        else{
          $(scoreOrder[i]).html(`
            <h2 class="m-auto">${each.team1} VS ${each.team2}</h2>
            <h2 class="m-auto">${each.startTime}</h2>
          `)
          $(scoreOrder[i]).show('fast')
        }
        i++
      });
    },
    async getIncomingMatch(arr){
      var returnArr = []
      arr.forEach(each => {
        let check = Date.parse(each.startTime) - Date.now();
        if(check > 0 ) {
          each.temp = Date.parse(each.startTime) - Date.now()
          returnArr.push(each)
        } 
      });
      // var sort = returnArr.sort(
      //   function(a,b){
      //     var keyA = a.temp
      //     var keyB = b.temp
      //     if(keyA < keyB) return - 1;
      //     else if(keyA > keyB) return 1;
      //     else return 0;
      // })
      let len = arr.length
      let loop
      if(len >= 3) loop = 3
      else loop = len
      returnArr = []
      for(let i=0 ;i<loop;i++){
        returnArr.push(arr[i]);
      }
      return returnArr
    },
    mapImg(sportType){
      var imgTag  = '<img src="/_nuxt/img/53a1fad.png" class="lg:object-scale-down max-h-small"/>'
      switch(sportType){
        case 'Badminton' :
          imgTag =  `<img src="/_nuxt/img/241e671.PNG" class="lg:object-scale-down max-h-small"/>`
          break
        case 'Basketball' :
          imgTag =  `<img src="/_nuxt/img/11dd02b.PNG" class="lg:object-scale-down max-h-small"/>`
          break
        case 'E-sport' :
          imgTag =  `<img src="/_nuxt/img/fd2e01.PNG" class="lg:object-scale-down max-h-small"/>`
          break
        case 'Football' :
          imgTag =  `<img src="/_nuxt/img/33dc3c6.PNG" class="lg:object-scale-down max-h-small"/>`
          break
        case 'Futsal' :
          imgTag =  `<img src="/_nuxt/img/8578cbc.PNG" class="lg:object-scale-down max-h-small"/>`
          break
        case 'Petanque' :
          imgTag =  `<img src="/_nuxt/img/8ad1bed.PNG" class="lg:object-scale-down max-h-small"/>`
          break
        case 'Tabletennis' :
          imgTag =  `<img src="/_nuxt/img/18b415f.PNG" class="lg:object-scale-down max-h-small"/>`
          break
        case 'Rugbyfootball' :
          imgTag =  `<img src="/_nuxt/img/bcb9655.PNG" class="lg:object-scale-down max-h-small"/>`
          break
        case 'Athletics' :
          imgTag =  `<img src="/_nuxt/img/c61456b.PNG" class="lg:object-scale-down max-h-small"/>`
          break
        case 'Entertainment' :
          imgTag =  `<img src="/_nuxt/img/add23ac.PNG" class="lg:object-scale-down max-h-small"/>`
          break
        case 'Sepaktakraw' :
          imgTag =  `<img src="/_nuxt/assets/02b4701.PNG" class="lg:object-scale-down max-h-small"/>`
          break
        case 'Softball' :
          imgTag =  `<img src="/_nuxt/img/0857216.PNG" class="lg:object-scale-down max-h-small"/>`
          break
        case 'Swimming' :
          imgTag =  `<img src="/_nuxt/img/cdaf21d.PNG" class="lg:object-scale-down max-h-small"/>`
          break
        case 'Tennis' :
          imgTag =  `<img src="/_nuxt/img/3702de5.PNG" class="lg:object-scale-down max-h-small"/>`
          break
        case 'Volleyball' :
          imgTag =  `<img src="/_nuxt/img/e6754dd.PNG" class="lg:object-scale-down max-h-small"/>`
          break
        case 'Boardgame' :
          imgTag =  `<img src="/_nuxt/img/6261fa6.PNG" class="lg:object-scale-down max-h-small"/>`
          break
      }
      return imgTag
    }
  },

  async mounted(){
    const res = await api.get('/api/incomingMatch')
    const arr = await this.getIncomingMatch(res.data)
    await this.appendincomingMatch(arr)
  }

};
</script>

<style>
#match_table {
  font-size: 20px;
}
#Incomming_Games {
  position: absolute;
  overflow: visible;
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
