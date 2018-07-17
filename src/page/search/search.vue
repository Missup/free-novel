<template>
  <div class="search">
  	<div class="entry">
      <div class="entry-input fl">
        <i class="icon iconfont">&#xe65c;</i>
        <input type="text" placeholder="搜索作者或书名">
      </div>
      <span class="fr">取消</span>
  	</div>
    <div class="hot-search" v-if="getStatus === 0">
      <p class="hot-search-title">热门搜索：</p>
      <ul class="hot-search-lists">
        <li v-for="item in hotLists" :key="item" class="noWrapEllipsis"><router-link :to="'/detail/' + item.id">{{ item.title }}</router-link></li>
      </ul>
    </div>
    <div v-if="getStatus === 1">
      <p class="result">搜索结果：</p>
      <div class="rank-content" v-for="item in rankLists" :key="item">
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
</template>
<script>
export default {
  data () {
    return {
      hotLists: [
        {
          id: 1,
          title: '凤临天下：王妃十三岁'
        },
        {
          id: 2,
          title: '狼行成双'
        },
        {
          id: 3,
          title: '土匪攻略'
        },
        {
          id: 4,
          title: '邪帝冷妻'
        },
        {
          id: 5,
          title: '兔子压倒窝边草'
        }
      ],
      getStatus: 0,
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
      ]
    }
  }
}
</script>
<style scoped>
.search {
  height: 100%;
  background-color: #fff;
}
.entry {
  height: 2rem;
  line-height: 2rem;
  font-size: 0.58rem;
  padding: 0 0.6rem;
}
.entry-input {
  height: 1.2rem;
  line-height: 1.2rem;
  overflow: hidden;
  border-radius: 0.6rem;
  margin-top: 0.4rem;
  padding-left: 0.4rem;
  background-color: #f7f7f7;
}
.entry-input i {
  font-size: 0.72rem;
  color: #9BCD9B;
}
.entry-input input {
  height: 100%;
  line-height: 1.2rem;
  vertical-align: top;
  font-size: 0.48rem;
  width: 10.8rem;
  border: none;
  text-indent: 1em;
}
.hot-search {
  width: 100%;
  max-width: 10.4rem;
  text-align: center;
  margin: 0 auto;
}
.hot-search-title {
  width: 100%;
  font-size: 0.7rem;
  padding: 0.4rem 0;
}
.hot-search-lists {
  color: #9BCD9B;
}
.hot-search-lists a {
  color: #9BCD9B;
  font-size: 0.6rem;
}
.result {
  font-size: 0.6rem;
  padding: 0 0.6rem;
  color: #9BCD9B;
}
.rank-content {
  height: 6rem;
  overflow: hidden;
  padding: .6rem .6rem;
  border-bottom: 1px solid #ccc;
}
.rank-content a {
  color: #333;
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
