<template>
  <div class="like">
    <div class="like-bg"></div>
    <div class="like-container">
      <div class="like-content" v-for="item in likeData">
        <div class="like-cover fl"><img :src="item.imgUrl" alt=""></div>
        <div class="like-info">
          <p class="like-title noWrapEllipsis">{{ item.title }}</p>
          <p class="like-author">{{ item.author }}</p>
          <p class="like-time">{{ item.time }}</p> 
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      likeData: [
        {
          imgUrl: '/static/images/pic02.jpg',
          title: '狼行成双',
          author: '巫哲',
          time: '2017-09-06'
        },
        {
          imgUrl: '/static/images/pic01.jpg',
          title: '凤临天下：王妃十三岁',
          author: '一世风流',
          time: '2016-09-06'
        }
      ]
    }
  }
}
</script>
<style scoped>
.like-bg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 98;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.like-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-color: #fff;
}
.like-content {
  height: 4.0rem;
  border-bottom: 1px solid #eee;
  padding: 0.4rem 0.6rem;
  overflow: hidden;
}
.like-cover {
  width: 2.6rem;
  height: 3.18rem;
  overflow: hidden;
}
.like-cover img {
  width: 100%;
  height: 100%;
}
.like-info {
  overflow: hidden;
  font-size: 0.54rem;
  padding-left: 0.48rem;
  padding-top: 0.2rem;
}
.like-title {
  font-size: 0.6rem;
  font-weight: bold;
  height: 1.0rem;
  line-height: 1.0rem;
}
.like-author {
  margin-bottom: 0.4rem;
}
.like-time {
  color: #aaaaaa;
}
</style>