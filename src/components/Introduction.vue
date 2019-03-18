<template>
  <div class="introduction page">
    <div class="title">{{intro.name}}</div>
    <p>{{intro.status}}</p>
    <p>{{intro.introduction}}</p>
    <div class="info-wrapper">
      <div class="info" v-for="(item,index) in intro.baseInfo" :key="index">
        <div class="info-item">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="'#icon-'+item.logo"></use>
          </svg>
          <p>{{item.dis}}</p>
        </div>
      </div>
    </div>
    <div class="scroll">
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    intro: Object
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.introduction
  &>p
    font-size pr(14)
    margin pr(10)
  .info-wrapper
    margin pr(40)
    width: 80%
    display: flex
    flex-flow: wrap
    justify-content: space-between

    .info
      .info-item
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center

  @media screen and (max-width: 900px)
    .info-wrapper
      flex-direction: column

      .info
        .info-item
          font-size pr(18)
          display: flex
          flex-direction: row
          justify-content: flex-start
          align-items: center
          margin pr(10)
          &>p
            margin-left pr(10)
</style>
