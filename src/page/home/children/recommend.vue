<template>
	<div class="recommend">
    <div class="recommend-list flex" v-for="item in recommendLists">
      <div class="flex-shrink"><img :src="item.imgUrl" alt=""></div>
      <p class="item-flex moreEllipsis">{{ item.brief }}</p>
    </div>
  </div>
</template>

<script>
import '../../../assets/recommend.css'
export default {
  data () {
    return {
      recommendLists: [
        {
          imgUrl: '/static/images/pic01.jpg',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。'
        },
        {
          imgUrl: '/static/images/pic01.jpg',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。'
        },
        {
          imgUrl: '/static/images/pic01.jpg',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。'
        },
        {
          imgUrl: '/static/images/pic01.jpg',
          brief: '她，是特种雇佣兵的首领，生杀予夺，我行我素。他，是帝国的绝色王爷，铁血冷酷，威震天下。当现代雇佣兵，穿越时空，成为娇小的十三岁王妃。当古代的绝色王爷，浴室之内，对上喋血的利剑谁能降伏谁？ “少打我的主意，否则别怪我不客气。” 乱世浮沉，这天下不尽是男儿的天下风云会聚，且看今生谁主浮沉。'
        }
      ]
    }
  }
}
</script>