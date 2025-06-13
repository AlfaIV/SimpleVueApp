<script setup lang="ts">
import NewsList from 'features/newsList/ui/NewsList.vue';
import Layout from 'app/Layout.vue';
</script>

<template>
  <Layout>
    <template #header>
      <p>Header</p>
    </template>

    <NewsList/>

    <template #footer>
      <p>Footer</p>
    </template>
  </Layout>
</template>