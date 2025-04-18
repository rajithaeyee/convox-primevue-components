<template>
  <div class="overflow-x-hidden">
    <header class="sticky top-0 z-50">
    <h1 class="p-5 bg-slate-900 text-[#9AEDFF] text-center text-xl w-screen shadow-sm">Convox Themed Sample
      Components</h1>
  </header>
  <main class="p-5" >
    <ButtonsList />
    <Checkboxes />
    <Inputs />
    <DataTables />
    <Dialogs />
    <Toasters />
    <Charts />
  </main>
  </div>

</template>

<style scoped></style>

<script>
import {defineAsyncComponent} from 'vue';
export default {
  components: {
    ButtonsList: defineAsyncComponent(() => import('@/components/ButtonsList.vue')),
    Checkboxes: defineAsyncComponent(() => import('@/components/Checkboxes.vue')),
    Inputs: defineAsyncComponent(() => import('@/components/Inputs.vue')),
    DataTables: defineAsyncComponent(() => import('@/components/DataTables.vue')),
    Dialogs: defineAsyncComponent(() => import('@/components/Dialogs.vue')),
    Toasters: defineAsyncComponent(() => import('@/components/Toasters.vue')),
    Charts: defineAsyncComponent(() => import('@/components/Charts.vue')),
  },
}
</script>
