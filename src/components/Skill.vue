<template>
  <div class="skill page">
    <p class="title">{{skills.name}}</p>
    <div class="content">
      <div class="skill-wrapper" v-for="(item,index) in skills.skills" :key="index">
        <!-- <div class="circle" :style="{borderColor:item.color}"> -->
        <svg class="circle-svg" viewBox="0 0 100 100">
          <circle
            r="45"
            cx="50"
            cy="50"
            class="circle"
            :data-percent="item.per"
            :data-stroke="item.color"
          ></circle>
        </svg>
        <span :style="{color:item.color}">{{item.name}}</span>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skills: Object
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.skill

  .content
    width: 80%
    display: flex
    flex-flow: row wrap
    justify-content: space-around
    color: white

    .skill-wrapper
      display: flex
      position: relative
      margin: pr(10)

      // font-size 0
      .circle-svg
        // flex: 1 1
        // position: absolute
        width: pr(100)
        height: pr(100)
        transform: rotate(-90deg)
        background: transparent

        circle
          fill: transparent
          stroke-dasharray: 0 300
          transition: stroke-dasharray 5s ease
          stroke-width: 10px

      span
        font-size: pr(16)
        position: absolute
        padding: 0 pr(0)
        width: 100%
        line-height: pr(100)
        text-align: center
  // @media screen and (max-width: 500px)


</style>
