<template>
  <nav class="navigation">
    <ul class="nav-data">
      <li
        v-for="(nav,index) in navs"
        :key="index"
        :class="{active: nav.checked}"
        :data-target-nav="nav.id"
        @click="navChange"
      >
        <i :class="'icon-'+nav.icon"/>
        <div class="nav-note" >{{nav.id}}</div>
        <!-- <span class="list-info">{{nav.id}}</span> -->
        <!-- <svg :class="'icon list-img '+nav.icon" aria-hidden="true">
          <use xlink:href="'#'+nav.icon"></use>
        </svg>-->
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "navigation",
  props: {
    navs: Array
  },
  data() {
    return {};
  },
  methods: {
    navChange(e) {
      this.$emit("navChange", event);
    },
    // navActive(e){
    //   console.log(e.target)
    //   e.target.className = 'active'
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.navigation
  font-size: pr(10)

  ul
    li
      width: pr(8)
      height: pr(8)
      border-radius: 50%
      background: #c9d6df
      margin: pr(10) pr(5)
      position: relative
      font-size pr(5)
      text-align center
      line-height pr(8)
      &:hover
        background #f0f5f9
        transition transform .3s ease
        border 1px solid #1e2022
        border-radius 50%
        transform scale(2)
        &>i 
          display inline-block
        .nav-note
          // background: #1e2022
          color white
          height: pr(8)
          line-height pr(8)
          font-size pr(6)
          position: absolute
          left: pr(10)
          top 0
          display inline-block
          padding 0 pr(2)
          overflow hidden
          &:after
            left 0
            // transform translateX(10%)

      .nav-note
        display none
        &:after
          position: absolute
          content: ''
          width 0
          height 100%
          background #52616b
          // transform skewX(15deg)
          z-index -1
          width 100%
          left -100%
          transition all .1s ease 

      &>i 
        display none
    .active
      background #f0f5f9
      transition all .5s ease
      border 1px solid #1e2022
      border-radius 50%
      transform scale(2)
      &>i 
        display inline-block
</style>
