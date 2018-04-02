<template>
  <div class="home-page">
    <!--头部-->
    <my-header v-bind:title="header_title"></my-header>
    <!--轮播图-->
    <my-slider v-bind:lists="slider.lists" :wait="3" :auto="true"></my-slider>
    <!--*虚拟* 控制房间列表那个黄色的背景高度-->
    <div class="room-warp">
      <my-room-list-title></my-room-list-title>
      <div>jjjjj</div>
      <div>jjjjj</div>
      <div>jjjjj</div>
      <div>jjjjj</div>
    </div>
    <!--控制房间列表商品高度及展示商品-->
    <div class="content">
      <my-room-list-title></my-room-list-title>
      <div>jjjjj</div>
      <div>jjjjj</div>
      <div>jjjjj</div>
      <div>jjjjj</div>
    </div>

  </div>
</template>

<script>

import _header from '../components/header/index'
import _slider from '../components/slider/index'
import _roomListTitle from '../components/room-list-title/index'

export default {
  name: 'index',
  data () {
    return {
      header_title: '开心夹娃娃',//Header title
      slider: {
        lists: [
          {pic: '../header/imgs/title_bg.png'},
          {pic: '../header/imgs/title_bg.png'},
          {pic: '../header/imgs/title_bg.png'}
        ]
      }
    }
  },
  components: {
    'my-header': _header,
    'my-slider': _slider,
    'my-room-list-title': _roomListTitle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-page{
  height: 100%;
  position: relative;
}
</style>