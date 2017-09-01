<template>
  <div class="home">
  	<div class="nav flex">
  		<!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/home/recommend" class="item-flex">推荐</router-link>
      <router-link to="/home/rank" class="item-flex">排行</router-link>
  	</div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>
<style scoped>
.nav {
  background: #9BCD9B;
  height: 1.8rem;
  line-height: 1.8rem;
}
.nav a {
  text-align: center;
  color: #F0FFFF;
}
</style>