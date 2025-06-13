<script setup lang="ts">
import NewsCard from 'widgets/newsCard/NewsCard.vue'
import NewsList from 'features/newsList/ui/NewsList.vue';
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <NewsList/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
