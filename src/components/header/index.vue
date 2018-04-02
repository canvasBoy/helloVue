<template>
  <div  class="header-warp">
    <header>
      <a href="/MyCenter">
        <div class="left">
          <span class="icon"></span>
        </div>
      </a>
      
      <div class="center">
        <h1 class="text_title">{{title}}</h1>
      </div>

      <a href="/lottery">
        <div class="right">
          <span class="icon"></span>
        </div>
      </a>
    </header>
  </div>
</template>

<script>
  export default {
    data (){
      return{
        // title:'开心夹娃娃'
      }
    },
    props:{
      title: String
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/rem';

  header{
    background-image: url('./imgs/title_bg.png');
    background-size: 100% rem(100);
    .left .icon{
      background-image: url('./imgs/个人中心icon.png');
      background-size: rem(44) rem(38);
    }
    .right .icon{
      background-image: url('./imgs/礼包icon.png');
      background-size: rem(42) rem(43);
    }
  }
</style>