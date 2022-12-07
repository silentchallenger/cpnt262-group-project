<script setup>
const showMenu = ref(false)
const menuToggle = () => (showMenu.value = !showMenu.value)

const router = useRouter();

const mainRoutes = computed(() => {
  return router.options.routes.filter(
    (route) => route.path.split("/").length <= 2
  );
});

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

</script>
<template>
  <section class="md:flex md:justify-between bg-slate-200">
    <section class="flex justify-between items-center">
        <!-- Logo will be here -->
      <p class="font-bold text-xl text-center pl-4 md:p-4">DR Shop</p>
      <button @click.prevent="menuToggle" class="p-4 bg-blue-300 md:hidden">
        Menu
      </button>
    </section>
    <nav class="bg-slate-300 text-black text-xl font-bold">
      <ul :class="showMenu ? 'inline' : 'hidden'" class="md:flex md:justify-evenly">
        <li v-for="route in mainRoutes" :key="route.id">
          <NuxtLink :to="route.path" class="block p-4 text-center hover:text-white hover:bg-black" active-class="bg-red-200">
            {{ capitalize(route.name) }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </section>
</template>