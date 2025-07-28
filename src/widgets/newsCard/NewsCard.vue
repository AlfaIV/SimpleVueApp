<script setup lang="ts">
defineProps<{
  id: number,
  header: string,
  rating: number,
  author: string,
  date: string,
}>();
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <el-card style="max-width: 400px" @click="router.push(`/news/${id}`)">
    <template #header>
      <p>{{ header }}</p>
    </template>

    <p :style="`font-size: var(--el-font-size-base)`">автор: {{ author }}</p>

    <p>рейтинг: {{ rating }}</p>

    <p>дата публикации: {{ date }}</p>
  </el-card>
</template>
