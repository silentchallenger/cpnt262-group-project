<script setup>

</script>

<template>

  <AppMain>
    <div class="main flex flex-col items-center gap-20">
      <p class="text-4xl">Customize your pc today</p>
    <AppButton page="/keyboard" bgColor="bg-slate-600" hoverBg="hover:bg-white" hoverTxt="hover:text-black" content="Shop Keyboards" />
   </div>
  </AppMain>

</template>

<style>
body{
  background: linear-gradient(rgba(0, 0, 0, 0.850),rgba(0, 0, 0, 0.750)),url(/img/home-bg.jpg);
  background-size:cover; 

}
main .main {
  font-weight: 500;
  font-size:4rem;
  color: white;
  line-height: 1.5;
  padding: 5.5rem;
  padding-right: 4rem;
}
</style>
