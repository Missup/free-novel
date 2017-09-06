<template>
  <div class="comment">
    <div class="comment-bg"></div>
    <div class="comment-container">
      <div class="detail-comments-part" v-for="comment in commentsData">
        <div class="detail-comments-author">
          <div class="detail-comments-header fl">
            <div class="detail-comments-avatar fl"><img :src="comment.author.avatar" alt=""></div>
            <p class="detail-comments-nickname fl">{{ comment.author.nickname }}</p>
            <span class="fr">{{ comment.time }}</span>
          </div>
        </div>
        <div class="detail-comments-content">{{ comment.content }}</div>
        <p class="detail-comments-from noWrapEllipsis">来自：《{{ comment.title }}》</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      commentsData: [
        {
          author: {
            nickname: 'sup',
            username: '05132789',
            avatar: '/static/images/avatar.jpg'
          },
          title: '狼行成双',
          content: '灰常好看，再来一打~',
          time: '2017-09-06'
        },
        {
          author: {
            nickname: 'sup',
            username: '05132789',
            avatar: '/static/images/avatar.jpg'
          },
          title: '邪帝冷妻',
          content: '沙发~自嗨~耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶~~~~~',
          time: '2016-08-06'
        },
        {
          author: {
            nickname: 'sup',
            username: '05132789',
            avatar: '/static/images/avatar.jpg'
          },
          title: '兔子压倒窝边草',
          content: '支持楼上，再来两打~~~~',
          time: '2014-12-06'
        }
      ]
    }
  }
}
</script>
<style scoped>
.comment-bg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 98;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.comment-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-color: #fff;
  font-size: 0.5rem;
  padding: 0.6rem;
}
.detail-comments-part {
  border-bottom: 1px solid #eee;
  padding: 0.4rem 0;
}
.detail-comments-header {
  height: 1.2rem;
  line-height: 1.2rem;
  width: 100%;
}
.detail-comments-header span {
  color: #aaa;
  font-size: 0.48rem;
}
.detail-comments-author {
  height: 1.2rem;
  line-height: 1.2rem;
}
.detail-comments-avatar {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  overflow: hidden;
}
.detail-comments-avatar img {
  width: 100%;
  height: 100%;
}
.detail-comments-nickname {
  padding-left: 0.4rem;
}
.detail-comments-content {
  padding-left: 1.6rem;
  margin-top: 0.2rem;
  text-align: justify;
  word-wrap: break-word;
}
.detail-comments-from {
  padding-left: 1.6rem;
  word-wrap: break-word;
  color: #aaa;
  font-size: 0.48rem;
  margin-top: 0.32rem;
}
</style>