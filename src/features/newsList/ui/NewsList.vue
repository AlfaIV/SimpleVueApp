<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import NewsCard from 'widgets/newsCard/NewsCard.vue'
import { NewsListStore } from '../model/newsListStore';

const newsListStore = NewsListStore();

onMounted(() => {
  newsListStore.fetchLatestNews();
});
</script>


<template>
  <newsCard
    header="Супер ИТ новость"
    :rating=18
    author="автор: Белый хакер"
    date="18 мая"
  />
</template>