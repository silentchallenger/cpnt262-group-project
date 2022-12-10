<script setup>
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
  <footer class="flex flex-col p-4 text-lg bg-slate-400">
    <div class="flex flex-col text-center md:flex-row md:justify-center md:items-center md:gap-20">
      <section class="flex flex-col justify-between items-center">
          <!-- Logo will be here -->
        <p class="font-bold text-xl text-center pl-4 md:p-4">DR Shop</p>
        <!-- Social will be here -->
      </section>
      <nav class="text-black">
        <ul class="p-4">
          <li v-for="route in mainRoutes" :key="route.id">
            <NuxtLink :to="route.path" class="block p-2 text-center text-lg hover:underline hover:font-bold">
              {{ capitalize(route.name) }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <p class="text-center">&copy; DR Shop. All rights reserved.</p>
  </footer>
</template>