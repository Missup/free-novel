<template>
  <div class="home">
  	<div class="nav flex">
      <span :class="{choosed: chooseStatus === 1}" class="item-flex nav-item" @click="chooseStatus = 1">推 荐</span>
      <span :class="{choosed: chooseStatus === 2}" class="item-flex nav-item" @click="chooseStatus = 2">排 行</i></span>
  	</div>
    <div class="recommend" v-if="chooseStatus === 1">
      <div class="recommend-list" v-for="item in recommendLists">
        <div class="fl cover"><img :src="item.imgUrl" alt=""></div>
        <p class="moreEllipsis">{{ item.brief }}</p>
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
              <span>恋爱网游</span>
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
        <div class="rank-content recommend-list" v-for="item in recommendLists">
          <div class="fl cover"><img :src="item.imgUrl" alt=""></div>
          <div class="info">
            <div class="info-title">
              <p class="noWrapEllipsis">{{ item.title }}</p>
              <i class="icon iconfont">&#xe757;</i>
            </div>
            <div class="info-msg">
              <p>作者：{{ item.author }}</p>
              <span>{{ item.tag }}</span>
            </div>
            <p class="moreEllipsis">{{ item.brief }}</p>
          </div>
        </div>
      </div>
    </div>
    <ul class="icons">
      <li><router-link to="/search"><i class="icon iconfont">&#xe65c;</i></router-link></li>
      <li><router-link to="/help"><i class="icon iconfont">&#xe691;</i></router-link></li>
      <li @click="toTop"><i class="icon iconfont">&#xe69e;</i></li>
    </ul>
  </div>
</template>
<script>
import '../../assets/home.css'
export default {
  data () {
    return {
      chooseStatus: 1,
      recommendLists: [
        {
          imgUrl: '/static/images/pic01.jpg',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。'
        },
        {
          imgUrl: '/static/images/pic01.jpg',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。'
        },
        {
          imgUrl: '/static/images/pic01.jpg',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。'
        },
        {
          imgUrl: '/static/images/pic01.jpg',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。'
        }
      ],
      rankLists: [
        {
          imgUrl: '/static/images/pic01.jpg',
          title: '凤临天下：王妃十三岁',
          author: '一世风流',
          tag: '穿越架空',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。。'
        }
      ],
      currentPosition: 0,
      timer: null
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