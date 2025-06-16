<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

import NewsCard from 'widgets/newsCard/NewsCard.vue'

import { NewsListStore } from '../model/newsListStore';
import { timerInMs } from '~/shared/constants/commonConstants';

const newsListStore = NewsListStore();
let intervalId: NodeJS.Timeout;

onMounted(() => {
  if (newsListStore.newsList.length === 0){
    newsListStore.getNewsList();
  }
  intervalId = setInterval(() => newsListStore.getNewsList(), timerInMs);
});

onUnmounted(() => {
  clearInterval(intervalId);
})

</script>


<template>
  <div :class="$style.container">
    <newsCard
      v-for="newsItem in newsListStore.newsList"
      :key="newsItem.url"

      :id="newsItem.id"
      :header="newsItem.header || 'Заголовок новости'"
      :rating="newsItem.rating || 0"                  
      :author="'Автор: ' + (newsItem.author || '')"   
      :date="newsItem.date || ''"      
    />
  </div>
</template>

<style module>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  row-gap: 50px;
  column-gap: 20px;
}
</style>