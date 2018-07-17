<template>
  <div class="home">
  	<div class="nav flex">
      <span :class="{choosed: chooseStatus === 1}" class="item-flex nav-item" @click="chooseStatus = 1">推 荐</span>
      <span :class="{choosed: chooseStatus === 2}" class="item-flex nav-item" @click="chooseStatus = 2">排 行</span>
  	</div>
    <div class="recommend" v-if="chooseStatus === 1">
      <div class="recommend-list" v-for="item in rankLists" :key="item">
        <router-link :to="'/detail/' + item.id">
          <div class="fl cover"><img :src="item.imgUrl" alt=""></div>
          <div class="info">
            <div class="info-title">
              <p class="noWrapEllipsis fl">{{ item.title }}</p>
              <i class="icon iconfont fr" v-if="item.hotStatus === 1">&#xe757;</i>
            </div>
            <div class="info-msg">
              <p class="rank-author fl noWrapEllipsis">作者：{{ item.author }}</p>
              <span class="fr">{{ item.tag }}</span>
            </div>
            <p class="moreEllipsis">{{ item.brief }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="rank" v-if="chooseStatus === 2">
      <div class="girl-rank">
        <div class="rank-header">女生</div>
        <ul class="classify clearfix">
          <li>
            <router-link to="/rank/travel">
              <div class="bg">
                <img src="/static/images/classify01.jpg" alt="">
                <div class="bg-mask"></div>
              </div>
              <span>穿越架空</span>
            </router-link>
          </li>
          <li>
            <router-link to="/rank/campus">
              <div class="bg">
                <img src="/static/images/classify02.jpg" alt="">
                <div class="bg-mask"></div>
              </div>
              <span>青春校园</span>
            </router-link>
          </li>
          <li>
            <router-link to="/rank/ceo">
              <div class="bg">
                <img src="/static/images/classify03.jpg" alt="">
                <div class="bg-mask"></div>
              </div>
              <span>霸道总裁</span>
            </router-link>
          </li>
          <li>
            <router-link to="/rank/underworld">
              <div class="bg">
                <img src="/static/images/classify01.jpg" alt="">
                <div class="bg-mask"></div>
              </div>
              <span>黑道世家</span>
            </router-link>
          </li>
          <li>
            <router-link to="/rank/immortal">
              <div class="bg">
                <img src="/static/images/classify02.jpg" alt="">
                <div class="bg-mask"></div>
              </div>
              <span>仙侣情缘</span>
            </router-link>
          </li>
          <li>
            <router-link to="/rank/online">
              <div class="bg">
                <img src="/static/images/classify03.jpg" alt="">
                <div class="bg-mask"></div>
              </div>
              <span>耽美网游</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="boy-rank">
        <div class="rank-header">男生</div>
        <ul class="classify clearfix">
          <li>
            <router-link to="/rank/urban">
              <div class="bg">
                <img src="/static/images/classify01.jpg" alt="">
                <div class="bg-mask"></div>
              </div>
              <span>都市重生</span>
            </router-link>
          </li>
          <li>
            <router-link to="/rank/ghost">
              <div class="bg">
                <img src="/static/images/classify02.jpg" alt="">
                <div class="bg-mask"></div>
              </div>
              <span>灵异鬼怪</span>
            </router-link>
          </li>
          <li>
            <router-link to="/rank/history">
              <div class="bg">
                <img src="/static/images/classify03.jpg" alt="">
                <div class="bg-mask"></div>
              </div>
              <span>架空历史</span>
            </router-link>
          </li>
          <li>
            <router-link to="/rank/games">
              <div class="bg">
                <img src="/static/images/classify01.jpg" alt="">
                <div class="bg-mask"></div>
              </div>
              <span>游戏人生</span>
            </router-link>
          </li>
          <li>
            <router-link to="/rank/society">
              <div class="bg">
                <img src="/static/images/classify02.jpg" alt="">
                <div class="bg-mask"></div>
              </div>
              <span>热血江湖</span>
            </router-link>
          </li>
          <li>
            <router-link to="/rank/war">
              <div class="bg">
                <img src="/static/images/classify03.jpg" alt="">
                <div class="bg-mask"></div>
              </div>
              <span>军事战争</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="rank-container">
        <div class="rank-content recommend-list" v-for="item in rankLists" :key="item">
          <router-link :to="'/detail/' + item.id">
            <div class="fl cover"><img :src="item.imgUrl" alt=""></div>
            <div class="info">
              <div class="info-title">
                <p class="noWrapEllipsis fl">{{ item.title }}</p>
                <i class="icon iconfont fr" v-if="item.hotStatus === 1">&#xe757;</i>
              </div>
              <div class="info-msg">
                <p class="rank-author fl noWrapEllipsis">作者：{{ item.author }}</p>
                <span class="fr">{{ item.tag }}</span>
              </div>
              <p class="moreEllipsis">{{ item.brief }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <ul class="icons">
      <li><router-link to="/search"><i class="icon iconfont">&#xe65c;</i></router-link></li>
      <li v-if="loginStatus"><router-link to="/user"><i class="icon iconfont">&#xe78b;</i></router-link></li>
      <li v-if="!loginStatus"><router-link to="/login"><i class="icon iconfont">&#xe78b;</i></router-link></li>
      <li @click="toTop"><i class="icon iconfont">&#xe69e;</i></li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      chooseStatus: 1,
      rankLists: [
        {
          id: 1,
          imgUrl: '/static/images/pic01.jpg',
          title: '凤临天下：王妃十三岁',
          author: '一世风流',
          tag: '穿越架空',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。。',
          hotStatus: 1
        },
        {
          id: 1,
          imgUrl: '/static/images/pic01.jpg',
          title: '凤临天下：王妃十三岁',
          author: '一世风流',
          tag: '穿越架空',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。。',
          hotStatus: 1
        },
        {
          id: 1,
          imgUrl: '/static/images/pic01.jpg',
          title: '凤临天下：王妃十三岁',
          author: '一世风流',
          tag: '穿越架空',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。。',
          hotStatus: 1
        },
        {
          id: 1,
          imgUrl: '/static/images/pic01.jpg',
          title: '凤临天下：王妃十三岁',
          author: '一世风流',
          tag: '穿越架空',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。。',
          hotStatus: 0
        },
        {
          id: 1,
          imgUrl: '/static/images/pic01.jpg',
          title: '凤临天下：王妃十三岁',
          author: '一世风流',
          tag: '穿越架空',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。。',
          hotStatus: 0
        },
        {
          id: 1,
          imgUrl: '/static/images/pic01.jpg',
          title: '凤临天下：王妃十三岁',
          author: '一世风流',
          tag: '穿越架空',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。。',
          hotStatus: 0
        }
      ],
      currentPosition: 0,
      timer: null,
      loginStatus: false
    }
  },
  methods: {
    // 置顶
    toTop: function () {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.currentPosition = document.documentElement.scrollTop || document.body.scrollTop
        this.currentPosition -= 10
        if (this.currentPosition > 0) {
          window.scrollTo(0, this.currentPosition)
        } else {
          window.scrollTo(0, 0)
          clearInterval(this.timer)
        }
      }, 1)
    }
  }
}
</script>
<style scoped>
.nav {
  background: #9BCD9B;
  height: 1.8rem;
  line-height: 1.8rem;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  width: 100%;
  max-width: 15.0rem;
}
.nav .nav-item {
  text-align: center;
  color: #fff;
  font-size: 0.86rem;
}
.nav .nav-item.choosed {
  border-bottom: 0.12rem solid #000;
}
.nav .nav-rank {
  position: relative;
}
.nav i {
  position: absolute;
  right: 1.2rem;
  font-size: 0.86rem;
}
/* recommend */
.recommend {
  padding-top: 1.8rem;
  background-color: #fff;
}
.recommend-list {
  height: 7rem;
  overflow: hidden;
  padding: .6rem .6rem;
  border-bottom: 1px solid #eee;
}
.recommend-list a {
  color: #333;
}
.recommend-list:last-child {
  border-bottom: none;
}
.recommend-list .cover {
  width: 4.6rem;
  height: 100%;
}
.recommend-list .cover img {
  width: 100%;
  height: 100%;
}
.recommend-list p {
  font-size: 0.5rem;
  padding-left: 0.44rem;
  line-height: 0.72rem;
  padding-top: 0.16rem;
}
.recommend-list .info-msg {
  margin: 0;
}
/* rank */
.rank {
  padding-top: 1.8rem;
}
.girl-rank, .boy-rank {
  padding: 0.4rem .6rem;
  background-color: #fff;
}
.girl-rank {
  margin-bottom: 0.4rem;
}
.boy-rank {
  margin-bottom: 0.4rem;
}
.rank-header {
  position: relative;
  height: 1.0rem;
  line-height: 1.0rem;
  font-size: 0.88rem;
  padding-left: 0.6rem;
}
.rank-header:before {
  position: absolute;
  content: '';
  background-color: red;
  width: 0.16rem;
  height: 0.8rem;
  left: 0;
  top: 0.08rem;
}
.classify {
  margin-top: 0.2rem;
}
.classify li {
  float: left;
  width: 50%;
  height: 2.0rem;
  padding: 0 0.2rem;
  margin-bottom: 0.2rem;
}
.classify li a {
  display: block;
  position: relative;
  height: 100%;
}
.classify .bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 1;
  border-radius: 0.2rem;
}
.classify .bg img {
  width: 100%;
}
.classify .bg-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .3);
}
.classify span {
  color: #fff;
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  line-height: 2.0rem;
  text-align: center;
  font-size: 0.8rem;
}
.rank-container {
  background-color: #fff;
}
.rank-content {
  height: 6rem;
}
.rank-content .cover {
  width: 3.8rem;
}
.rank-content .moreEllipsis {
  -webkit-line-clamp: 3;
}
.info {
  overflow: hidden;
}
.info-title {
  height: 1.0rem;
  line-height: 1.0rem;
}
.info-title p {
  height: 100%;
  line-height: 1.0rem;
  padding-top: 0;
  font-size: 0.6rem;
  font-weight: bold;
  max-width: 8.0rem;
}
.info-title i {
  color: red;
  font-size: 0.6rem;
}
.info-msg {
  height: 1.0rem;
  line-height: 1.0rem;
  font-size: 0.5rem;
  overflow: hidden;
  margin: 0.12rem 0;
}
.info-msg span {
  border: 1px solid #9BCD9B;
  height: 100%;
  border-radius: 0.1rem;
  padding: 0 0.2rem;
  color: #9BCD9B;
}
.info-msg .rank-author {
  height: 100%;
  line-height: 1.0rem;
  padding-top: 0;
  max-width: 6.6rem;
}
/* icons */
.icons {
  position: fixed;
  bottom: 0.4rem;
  right: 0.2rem;
  z-index: 100;
}
.icons li {
  width: 1.4rem;
  height: 1.4rem;
  text-align: center;
  line-height: 1.4rem;
  margin-bottom: 0.1rem;
  background: rgba(155, 205, 155, .9);
  box-shadow: 0 0 0.12rem rgba(0, 0, 0, .3);
}
.icons li i {
  font-size: 0.6rem;
  color: #fff;
  vertical-align: middle;
}
</style>