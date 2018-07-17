<template>
  <div class="rank">
  	<ul class="flex nav">
      <li class="item-flex" v-for="(item, index) in navLists" :key="index" :class="{active: isClick === index}" @click="changeData(index)">{{ item }}</li>
    </ul>
  	<div class="rank-container">
  		<div class="rank-content" v-for="item in rankLists" :key="item">
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
      </div>
  	</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navLists: ['最新', '最热', '完结'],
      isClick: 0,
      rankLists: [
        {
          imgUrl: '/static/images/pic01.jpg',
          title: '凤临天下：王妃十三岁',
          author: '一世风流',
          tag: '穿越架空',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。。',
          hotStatus: 1
        },
        {
          imgUrl: '/static/images/pic01.jpg',
          title: '凤临天下：王妃十三岁',
          author: '一世风流',
          tag: '穿越架空',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。。',
          hotStatus: 1
        },
        {
          imgUrl: '/static/images/pic01.jpg',
          title: '凤临天下：王妃十三岁',
          author: '一世风流',
          tag: '穿越架空',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。。',
          hotStatus: 1
        },
        {
          imgUrl: '/static/images/pic01.jpg',
          title: '凤临天下：王妃十三岁',
          author: '一世风流',
          tag: '穿越架空',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。。',
          hotStatus: 0
        },
        {
          imgUrl: '/static/images/pic01.jpg',
          title: '凤临天下：王妃十三岁',
          author: '一世风流',
          tag: '穿越架空',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。。',
          hotStatus: 0
        },
        {
          imgUrl: '/static/images/pic01.jpg',
          title: '凤临天下：王妃十三岁',
          author: '一世风流',
          tag: '穿越架空',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。。',
          hotStatus: 0
        },
        {
          imgUrl: '/static/images/pic01.jpg',
          title: '凤临天下：王妃十三岁',
          author: '一世风流',
          tag: '穿越架空',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。。',
          hotStatus: 0
        }
      ]
    }
  },
  methods: {
    changeData: function (index) {
      this.isClick = index
    }
  }
}
</script>
<style scoped>
.nav {
  background-color: #fff;
  height: 1.32rem;
  line-height: 1.32rem;
  font-size: 0.7rem;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  width: 100%;
  max-width: 15.0rem;
  border-bottom: 2px solid #9BCD9B;
}
.nav li {
  text-align: center;
}
.nav li.active {
  color: #9BCD9B;
}
.rank-container {
  padding-top: 1.52rem;
  background-color: #f7f7f7;
}
.rank-content {
  height: 6rem;
  overflow: hidden;
  padding: .6rem .6rem;
  border-bottom: 1px solid #eee;
  background-color: #fff;
}
.rank-content:last-child {
  border-bottom: none;
}
.rank-content .cover {
  width: 3.8rem;
  height: 100%;
}
.rank-content .cover img {
  width: 100%;
  height: 100%;
}
.rank-content p {
  font-size: 0.5rem;
  padding-left: 0.44rem;
}
.rank-content .moreEllipsis {
  -webkit-line-clamp: 3;
}
.rank-content .info {
  overflow: hidden;
}
.rank-content .info-title {
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
.rank-content .info-msg {
  height: 1.0rem;
  line-height: 1.0rem;
  font-size: 0.5rem;
  overflow: hidden;
  margin: 0.2rem 0;
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
</style>