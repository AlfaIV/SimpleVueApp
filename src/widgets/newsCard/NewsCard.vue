<script setup lang="ts">
defineProps<{
  header: string,
  rating: number,
  author: string,
  date: string,
}>();
</script>

<template>
  <el-card style="max-width: 400px">
    <template #header>
      <p>{{ header }}</p>
    </template>

    <p :style="`font-size: var(--el-font-size-base)`">автор: {{ author }}</p>

    <p>рейтинг: {{ rating }}</p>

    <p>дата публикации: {{ date }}</p>
  </el-card>
</template>
