<template>
<!-- 布局 -->
 <el-container>
   <!-- 左右布局 -->
   <el-aside class="left" style="width:220px">
     <div class="menu-title" style="background-color:#2e2f32">
       <img src="../../assets/img/logo_admin.png" alt="">
     </div>
     <el-menu :default-active="activeIndex" class="el-menu-demo" @select="handleSelect" style="width:221px" background-color="#353b4e" text-color="#adafb5" active-text-color="#ffd04b">
       <el-menu-item index="1">首页</el-menu-item>
       <el-submenu index="1">
        <template slot="title">内容管理</template>
        <el-menu-item index="1-1">发布文章</el-menu-item>
        <el-menu-item index="1-2">内容列表</el-menu-item>
        <el-menu-item index="1-3">评论列表</el-menu-item>
        <el-menu-item index="1-4">素材管理</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
        <template slot="title">粉丝管理</template>
        <el-menu-item index="2-1">图文数据</el-menu-item>
        <el-menu-item index="2-2">粉丝概况</el-menu-item>
        <el-menu-item index="2-3">粉丝画像</el-menu-item>
        <el-menu-item index="2-3">粉丝列表</el-menu-item>
        </el-submenu>
        <el-menu-item index="1">账户信息</el-menu-item>
    </el-menu>
   </el-aside>
   <!-- 右边的大容器 -->
   <el-container>
     <!-- 头部内容 -->
     <el-header>
       <layout-header></layout-header>
     </el-header>
     <!-- 都不,下面的大容器 -->
     <el-main>
       <!-- 二级路由容器 -->
       <router-view></router-view>
     </el-main>
   </el-container>
 </el-container>
</template>

<script>
import layoutHeader from '../../components/layout-header.vue'
export default {
  name: 'home',
  components: {
    'layout-header': layoutHeader
  }
}
</script>
<style lang="less" scoped>
  .left {
    width: 20px;
    height: 100vh;
    background-color: #353b4e;
    overflow: hidden;
    .menu-title{
      padding: 15px 0;
      text-align: center;
    }
    img {
      height: 30px;
    }
  }
</style>
