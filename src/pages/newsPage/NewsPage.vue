<script setup lang="ts">
import Layout from 'app/Layout.vue';
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <Layout>
    <template #header>
      <el-page-header @back="router.go(-1)">
        <template #content>
          <span class="text-large font-600 mr-3"> Hacker News </span>
        </template>
      </el-page-header>
    </template>

    <h1>Название</h1>

    <p>Автор</p>

    <Link url="213">Ссылка</Link>

    <p>Дата</p>

    <p>Количество комментариев</p>

    <template #footer>
      <p>Footer</p>
    </template>
  </Layout>
</template>