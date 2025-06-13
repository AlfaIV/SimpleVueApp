<script setup lang="ts">
import HelloWorld from '~/components/HelloWorld.vue'
import NewsCard from 'widgets/newsCard/NewsCard.vue'
</script>

<template>
  <div>
    <HelloWorld msg="Vite + Vue" />
    <newsCard 
      header="Супер ИТ новость"
      :rating=18
      author="автор: Белый хакер"
      date="18 мая"
    />
  </div>
</template>
