<template>
	<div class="detail">
    <div class="detail-intro">
      <div class="fl detail-cover"><img :src="detailData.imgUrl" alt=""></div>
      <div class="detail-info">
        <p class="detail-title noWrapEllipsis">{{ detailData.title }}</p>
        <p class="detail-author noWrapEllipsis">作者：{{ detailData.author }}</p>
        <p class="detail-tags">
          <span v-for="tag in detailData.tags" :key="tag">{{ tag }}</span>
        </p>
        <p class="detail-download moreEllipsis">下载量：{{ detailData.download }}</p>
        <div class="detail-like">
          <span class="fl">喜欢就戳一下呗~</span>
          <span class="fr">
            <i class="icon iconfont" v-if="!likeStatus" @click="like">&#xe644;</i>
            <i class="icon iconfont" v-else @click="dislike">&#xe6e3;</i>
          </span>
        </div>
      </div>
    </div>
    <div class="detail-brief">{{ detailData.brief }}</div>
    <div class="detail-comments">
      <div class="comments-header">
        <span class="comments-title fl">书友评价</span>
        <span class="comments-write fr"><i class="icon iconfont">&#xe761;</i>写评价</span>
      </div>
      <div class="detail-comments-part" v-for="comment in commentsData" :key="comment">
        <div class="detail-comments-author">
          <div class="detail-comments-avatar fl"><img :src="comment.author.avatar" alt=""></div>
          <p class="detail-comments-nickname">{{ comment.author.nickname }}</p>
        </div>
        <div class="detail-comments-content">{{ comment.content }}</div>
      </div>
    </div>
    <div class="download">点击下载 <i class="icon iconfont">&#xe703;</i></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      detailData: {
        imgUrl: '/static/images/pic02.jpg',
        title: '狼行成双',
        author: '巫哲',
        tags: ['耽美网游', '强强', '都市情缘', '欢喜冤家', '欢喜冤家', '欢喜冤家', '欢喜冤家', '欢喜冤家'],
        download: 10000,
        brief: '边南这头“野狼”最近比较暴躁，因为他觉得自己的人生简直寸到家。家里人共享天伦没自己什么事儿，忍着；网球训练被教练罚跑圈，忍着；就连刚看上的姑娘也被一个叫邱奕的家伙抢了先机，实在忍无可忍的主角决定靠暴力解决对方，却没有想到结果差点被对方打残。边南这才意识到，这次他遇到的也不是什么善茬儿......大概是两个互相看不顺眼的逗比相爱相杀的故事。HE。'
      },
      commentsData: [
        {
          author: {
            nickname: 'sup',
            username: '05132789',
            avatar: '/static/images/avatar.jpg'
          },
          content: '灰常好看，再来一打~'
        },
        {
          author: {
            nickname: 'timor',
            username: '001547',
            avatar: '/static/images/avatar.jpg'
          },
          content: '支持楼上，再来两打~~~~'
        },
        {
          author: {
            nickname: '卡布kaka',
            username: '78987',
            avatar: '/static/images/avatar.jpg'
          },
          content: '沙发~自嗨~耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶耶~~~~~'
        }
      ],
      likeStatus: false
    }
  },
  methods: {
    like: function () {
      this.likeStatus = true
    },
    dislike: function () {
      this.likeStatus = false
    }
  }
}
</script>
<style scoped>
.detail {
  font-size: 0.5rem;
  padding-bottom: 1.6rem;
}
.detail-intro {
  height: 6.0rem;
  background: #fff;
  padding: 0.6rem;
  margin-bottom: 0.3rem;
}
.detail-info {
  overflow: hidden;
  padding-left: 0.4rem;
}
.detail-cover {
  width: 3.8rem;
  height: 100%;
}
.detail-cover img {
  width: 100%;
  height: 100%;
}
.detail-title {
  font-size: 0.7rem;
  font-weight: bold;
  margin: 0.1rem 0;
}
.detail-tags {
  height: 1rem;
  overflow: hidden;
  margin-top: 0.2rem;
}
.detail-tags span {
  text-align: center;
  padding: 0.08rem 0.2rem;
  border-radius: 0.08rem;
  font-size: 0.48rem;
  display: inline-block;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
}
.detail-tags span:nth-child(1) {
  border: 1px solid #FFD700;
  color: #FFD700;
}
.detail-tags span:nth-child(2) {
  border: 1px solid pink;
  color: pink;
}
.detail-tags span:nth-child(3) {
  border: 1px solid skyblue;
  color: skyblue;
}
.detail-tags span:nth-child(4) {
  border: 1px solid orange;
  color: orange;
}
.detail-tags span:last-child {
  margin-right: 0;
}
.detail-like {
  height: 1.0rem;
  line-height: 1.0rem;
  color: #9BCD9B;
}
.detail-like i {
  font-size: .5rem;
}
.detail-brief {
  background-color: #fff;
  padding: 0.6rem;
  margin-bottom: 0.3rem;
  text-align: justify;
  word-wrap: break-word;
}
.detail-brief .moreEllipsis {
  -webkit-line-clamp: 7;
}
.detail-comments {
  background-color: #fff;
  padding: 0.6rem;
  padding-top: 0.4rem;
}
.comments-header {
  height: 1.0rem;
  line-height: 1.0rem;
}
.comments-title {
  position: relative;
  padding-left: 0.4rem;
}
.comments-title:before {
  position: absolute;
  content: '';
  width: 0.16rem;
  height: 0.5rem;
  background-color: #9BCD9B;
  left: 0;
  top: 0.2rem;
}
.comments-write {
  color: #9BCD9B;
}
.comments-write i {
  font-size: 0.5rem;
  margin-right: 0.2rem;
  color: #9BCD9B;
}
.detail-comments-part {
  border-bottom: 1px solid #eee;
  padding: 0.4rem 0;
}
.detail-comments-part:last-child {
  border-bottom: none;
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
  overflow: hidden;
  padding-left: 0.4rem;
}
.detail-comments-content {
  padding-left: 1.6rem;
  margin-top: 0.2rem;
  text-align: justify;
  word-wrap: break-word;
}
.download {
  position: fixed;
  width: 100%;
  text-align: center;
  height: 1.6rem;
  line-height: 1.6rem;
  background-color: #9BCD9B;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  width: 100%;
  max-width: 15.0rem;
  font-size: 0.72rem;
  font-weight: bold;
  color: #fff;
}
.download i {
  font-size: 0.72rem;
}
</style>