<template>
  <div class="project page">
    <div class="title">{{project.name}}</div>
    <div class="content">
      <div class="item-wrapper" v-for="(item,index) in project.projects" :key="index">
        <div class="img-wrapper">
          <div class="before">
            <img :src="item.img" alt>
          </div>
        </div>
        <ul class="note">
          <div class="project-name">{{item.name}}</div>
          <li v-for="(dis,index) in item.note" :key="index">{{dis}}</li>
          <div class="btns">
            <div class="btn" v-for="(btn,index) in project.btns" :key="index" @click="open(item,index)">{{btn}}</div>
          </div>
        </ul>
      </div>
    </div>
    <div class="more">
      <a :href="project.more.url">
        {{project.more.name}}
        <i :class="'icon-'+project.more.icon"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  },
  methods:{
    open(item,index){
      let url = index ? item.source : item.preview;
      window.open(url,'_blank')
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.project
  // width 100%
  height: auto
  background: #f0f5f9

  .content
    width: 100%
    display: flex
    justify-content: space-around
    align-items: center

    .item-wrapper
      display: flex
      flex-direction: column
      justify-content: flex-start
      align-items: center
      margin: pr(20)
      height: pr(250)
      position: relative

      .img-wrapper
        height: pr(150)
        width: pr(150)
        background: #c9d6df
        position: relative
        display: flex
        justify-content: center

        &:before, &:after
          display: inline-block
          position: absolute
          content: ''
          width: pr(150)
          height: pr(3)
          background: #52616b
          transform: scaleX(0)
          transition: all 0.2s ease
          transform-origin: 0 0 0

        &:after
          transform-origin: 100% 100% 0
          bottom: 0
          left: 0

        .before
          overflow: hidden

          &>img
            width: 100%
            height: 100%
            margin: 0 auto

          // height 100%
          &:before, &:after
            display: inline-block
            position: absolute
            content: ' '
            top: 0
            width: pr(3)
            height: pr(150)
            background: #52616b
            transform: scaleY(0)
            transition: all 0.2s ease 0.2s

          &:before
            transform-origin: 100% 100% 0
            left: 0

          &:after
            transform-origin: 0 0 0
            right: 0

        &:hover
          transform: translate3d(-10px, -10px, 0)
          box-shadow: pr(10) pr(10) 0 #52616b
          transition: all 0.2s ease 0.4s
          cursor: pointer

          &:before, &:after
            transform: scaleX(1)

          .before
            &:before, &:after
              transform: scaleY(1)

      .note
        margin: pr(5)
        font-size: pr(8)
        list-style-position: inside
        list-style: disc

        .project-name
          font-size: pr(10)
          font-weight: 900
          text-align: center
          margin: pr(5)

      .btns
        width: 100%
        display: flex
        justify-content: space-around
        position: absolute
        bottom: 0
        left 0

        .btn
          font-size: pr(10)
          height: pr(20)
          line-height: pr(18)
          width: 40%
          border: pr(1) solid #52616b
          // border-radius: pr(20)
          text-align: center
          position: relative
          overflow: hidden

          &:after
            position: absolute
            content: ''
            width: 0
            height: pr(20)
            background: #52616b
            transform: skewX(15deg)
            z-index: -1
            left: -10%
            transition: all 0.5s ease

          &:hover
            color: #f0f5f9
            border-radius: 0
            cursor: pointer

            &:after
              left: -10%
              width: 120%

    @media screen and (max-width: 900px)
      flex-direction: column
      justify-content: space-between

      .item-wrapper
        height: 100%

        .img-wrapper
          height: pr(300)
          width: pr(300)

          &:before, &:after
            width: pr(300)

          .before
            &:before, &:after
              height: pr(300)

        .note
          font-size: pr(16)

          .project-name
            font-size: pr(16)

        .btns
          position: static
          margin-top: pr(20)

          .btn
            font-size: pr(16)
            height: pr(40)
            line-height: pr(40)
            background: #52616b
            color: #f0f5f9

  .more
    font-size: pr(10)

    &>a
      color: #1e2022
      text-decoration: none
      cursor: pointer

      &:hover
        text-decoration: underline
</style>
