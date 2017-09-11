<template>
  <div class="user">
    <div class="user-header">
      <div class="user-avatar fl"><img src="/static/images/avatar.jpg" alt=""></div>
      <div class="user-info fl">
        <p class="user-name">sup</p>
        <p class="user-brief moreEllipsis">为上王者而读书~</p>
      </div>
      <router-link to="/user/edit"><i class="icon iconfont fr">&#xe649;</i></router-link>
    </div>
    <ul class="user-links">
      <li class="clearfix">
        <router-link to="/user/like">
          <span class="links-left fl"><i class="icon iconfont">&#xe644;</i>我的点赞</span>
          <span class="links-right fr"><i class="icon iconfont">&#xe6a3;</i></span>
        </router-link>
      </li>
      <li class="clearfix">
        <router-link to="/user/comment">
          <span class="links-left fl"><i class="icon iconfont">&#xe667;</i>我的评论</span>
          <span class="links-right fr"><i class="icon iconfont">&#xe6a3;</i></span>
        </router-link>
      </li>
      <li><a href="tel:18605116605" class="links-left"><i class="icon iconfont">&#xe652;</i>联系我们</a></li>
    </ul>
    <router-link to="/home"><span class="logo"><img src="/static/images/logo.png" alt=""></span></router-link>
    <router-view></router-view>
  </div>
</template>
<style scoped>
.user {
  height: 100%;
  background-color: #fff;
}
.user-header {
  width: 100%;
  height: 6.0rem;
  background-color: #9BCD9B;
}
.user-avatar {
  width: 3.6rem;
  height: 3.6rem;
  border: 2px solid rgba(255, 255, 255, .8);
  border-radius: 0.18rem;
  overflow: hidden;
  margin-top: 1.2rem;
  margin-left: 0.6rem;
}
.user-avatar img {
  width: 100%;
  height: 100%;
}
.user-info {
  font-size: 0.8rem;
  padding-left: 0.6rem;
  padding-top: 1.64rem;
  color: #fff;
  max-width: 8.0rem;
}
.user-brief {
  font-size: 0.54rem;
  color: #e1f0e1;
  margin-top: 0.2rem;
}
.user-brief.moreEllipsis {
  -webkit-line-clamp: 2;
}
.user-header i {
  font-size: 0.8rem;
  color: #fff;
  margin-right: 0.6rem;
  margin-top: 2.6rem;
}
.user-links {
  padding: 0 0.6rem;
}
.user-links a {
  display: block;
  border-bottom: 1px solid #eee;
  color: #333;
  font-size: 0.6rem;
  height: 1.6rem;
  line-height: 1.6rem;
}
.user-links a i {
  font-size: 0.6rem;
}
.links-left i {
  margin-right: 0.4rem;
}
.user-links li:nth-child(1) .links-left i {
  color: pink;
}
.user-links li:nth-child(2) .links-left i {
  color: skyblue;
}
.user-links li:nth-child(3) .links-left i {
  color: orange;
}
.logo {
  position: fixed;
  bottom: 1.0rem;
  right: 0.6rem;
  width: 2.5rem;
  height: 1.16rem;
}
.logo img {
  width: 100%;
  height: 100%;
}
</style>