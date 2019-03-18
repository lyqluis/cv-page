<template>
  <div class="host page">
    <div class="talk title">{{hello}}</div>
    <div class="img-wrapper">
      <img :src="host.img" alt>
    </div>
    <p>{{host.author}}</p>
    <p class="sm-p">{{host.note}}</p>
    <div class="contact-wrapper" >
      <a v-for="(item,index) in host.contact" :key="index" :href="item.url" :class="'icon-'+item.name"></a>
      <!-- <a href="mailto:IBMkt36@163.com" class="icon-email"></a> -->
    </div>
    <div class="scroll">
      <span class="icon-Down"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    host: Object
  },
  created() {
    this.helloChange();
  },
  data() {
    return {
      hello: "",
      i: 0
    };
  },
  methods: {
    helloChange() {
      let str = this.host.greet;
      let len = str.length;
      if (this.i < len) {
        this.hello = str.slice(0, ++this.i) + "_";
        setTimeout(this.helloChange, 200);
      } else {
        this.hello = str;
        this.i = 0;
        setTimeout(this.helloChange, 1000);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.host
  // font-size: pr(20)
  .talk
    width: pr(100)
    height: pr(40)
    text-align: center
    border: pr(3) solid #52616b
    position: relative
    margin-bottom: pr(10)
    line-height: pr(34)
    &:after
      content: ''
      display: inline-block
      position: absolute
      top: pr(37)
      left: pr(42)
      border: pr(6) solid transparent
      border-top: pr(6) solid #52616b

  .img-wrapper
    flex: 0 0 auto
    width: pr(80)
    height: pr(80)
    border-radius: 50%
    overflow: hidden
    border: pr(2) solid #c9d6df
    margin pr(20) 0 pr(10) 0
    @media screen and (max-width: 500px)
      width: 100px
      height: 100px


    img
      height: 100%

  p
    margin: pr(5)


  .sm-p, .contact-wrapper
    margin: pr(5)
    display: flex
    justify-content: center
    align-items: center
    height: pr(40)
    width: 60%

    // background: lightyellow
    & a 
      cursor pointer
      font-size pr(20)
      margin: pr(5) pr(10)
      text-decoration:none; 
      color: #1e2022; 
      &:hover
        color #52616b
  .scroll
    font-size pr(20)
    width pr(30)
    height pr(30)
    text-align center
    line-height pr(30)
    color #f0f5f9
    background #52616b
    position absolute
    bottom 0
    &:hover
      background #1e2022
    &>span
      position relative
      animation down 1.5s linear infinite
    @keyframes down
      0%
        top -100%
      90%
        top 40%
      100%
        top 100%
    @media screen and (max-width: 500px)
      margin-bottom 40px
</style>
