<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { onMounted, ref } from 'vue';

import { NewsListStore } from '~/features/newsList/model/newsListStore';
import { CommentStore } from '~/features/comments/model/commentsStore';
import Comments from 'features/comments/ui/Comments.vue';
import Layout from 'app/Layout.vue';

import type { TNews } from '~/entities/news/newsType';

const router = useRouter();
const route = useRoute();
const newsListStore = NewsListStore();
const commentStore = CommentStore();

const newsConfig = ref<TNews | null>(null);

const newsPageId = Array.isArray(route.params.id) ? -1 : parseInt(route.params.id);

onMounted(async () => {
  const existingNews = newsListStore.newsList.find(news => news.id === newsPageId);
  if (existingNews) {
    newsConfig.value = existingNews;
  } else {
    newsConfig.value = await newsListStore.fetchNewsItem(newsPageId) ?? null;
  }
  
  if (commentStore?.comments.length === 0) {
    commentStore.getComments(newsConfig.value?.comments ?? []);
  }
});
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

    <h1>{{ newsConfig?.header }}</h1>

    <p>{{ newsConfig?.author }}</p>

    <Link url="213">Ссылка</Link>

    <p>{{ newsConfig?.date }}</p>

    <p>{{ newsConfig?.comments.length }}</p>

    <Comments />

    <template #footer>
      <p>Footer</p>
    </template>
  </Layout>
</template>