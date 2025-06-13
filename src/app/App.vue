<script setup lang="ts">
import NewsList from 'features/newsList/ui/NewsList.vue';
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="4"></el-col>
          <el-col :span="16"><NewsList/></el-col>
          <el-col :span="4"></el-col>
        </el-row>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
