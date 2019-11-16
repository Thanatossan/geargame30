<template>
  <div class=" md:flex flex m-6 container">
    <div class="w-1/2 ">
      <div class="justify-center items-center mx-auto px-auto">
        <img src="~/assets/image/information.jpg" />
      </div>
    </div>
    <div class="w-1/2 pl-6 ">
      <p class="text-left"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ยินดีต้อนรับ นักกีฬาและบุคคลากรทุกท่าน สู่ระบบลงทะเบียน
        จ๊างเหล็กเกมส์ กีฬาเกียร์ครั้งที่ 30 ทุกท่านสามารถลงทะเบียน เพื่อ
        กรอกข้อมูลส่วนตัว สำหรับผู้เข้าร่วมกิจกรรม
        ได้ที่เว็บลงทะเบียน โดยผ่านลิ้งค์ด้านล่าง </p>
      <br>
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full "
        onclick="window.location = 'https://geargames30.eng.cmu.ac.th/login'"
      >เข้าสู่ระบบกรอกข้อมูส่วนตัว </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#logo-figure {
  max-width: 259px;
  max-height: 163px;
}
</style>
