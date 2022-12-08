<script setup>

</script>

<template>

  <AppMain>
    <div class="main">
    <p class="text-3xl">Home Page</p>
    <NuxtLink to="/keyboard" class="text-xl bg-slate-600 border-2 rounded-md p-2 hover:bg-white hover:text-black"> Shop Keyboards </NuxtLink>
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
