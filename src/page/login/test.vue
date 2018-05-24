<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
    </ul>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
    }
  },
  components: {
  },
  created () {
  },
  mounted () {
    setTimeout(() => {
      this.initScroll()
    }, 20)
  },
  methods: {
    initScroll () {
      let options = {
        scrollY: true,
        click: true,
        scrollbar: {
          fade: true,
          interactive: false // 1.8.0 新增
        },
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300
        }
      }
      this.scroll = new BScroll(this.$refs.wrapper, options)
    }
  }
}
</script>
<style scoped>
.wrapper {
  width: 400px;
  height: 500px;
  margin: 0 auto;
  background: pink;
  overflow: hidden;
}
</style>