<script setup lang="ts">
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <slot name="header"/>
      </el-header>

      <el-main>
        <el-row :gutter="20">
          <el-col :span="4"></el-col>

          <el-col :span="16">
            <NewsList/>
            
            <slot/>
          </el-col>

          <el-col :span="4"></el-col>
        </el-row>
      </el-main>

      <el-footer>
        <slot name="footer"/>
      </el-footer>
    </el-container>
  </div>
</template>