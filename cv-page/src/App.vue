<template>
  <div id="app">
    <div class="language">
      <span v-for="(item,index) in info.language" :key="index" @click="changeLanguage(item)" :class="item.checked ? 'active':''">{{item.name}}</span>
    </div>
    <host :host="sections[0]"/>
    <introduction :intro="sections[1]"/>
    <skill :skills="sections[2]"/>
    <project :project="sections[3]"/>
    <navigation :navs="sections" @navChange="navChange"/>
  </div>
</template>

<script>
import info from "./assets/js/info.js";
import host from "./components/Host.vue";
import introduction from "./components/Introduction";
import skill from "./components/Skill";
import project from "./components/Project";
import navigation from "./components/Navigation";

const slideDuration = 20;
const html = document.querySelector("html");

function getScrollTop() {
  //兼容safari
  return window.pageYOffset || html.scrollTop;
}

export default {
  name: "app",
  components: {
    host,
    introduction,
    skill,
    project,
    navigation
  },
  data() {
    return {
      info,
      oldScrollPos: 0,
      scrollPos: 0
    };
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.scrollChange);
    this.scrollChange();
  },
  computed: {
    sections() {
      return this.info.language.find(el => el.checked).sections;
    }
  },
  watch: {
    scrollPos() {
      //navChange
      this.scrollNavChange(this.scrollPos);
      //skillChange
      this.skillChange(this.scrollPos);
      this.upChange(this.scrollPos);
    }
  },
  methods: {
    changeLanguage(lan){
      this.info.language.forEach(el=>{
        el.checked = false;
      });
      lan.checked = true;
    },
    //页面滚动
    scrollChange() {
      //获取当前页面scrolltop
      let currPos = getScrollTop();
      this.oldScrollPos = this.scrollPos;
      //判断当前页面
      this.scrollPos = Math.min(Math.round(currPos / html.clientHeight), 3);
    },
    //up
    upChange(scrollPos) {
      //oldScrollPos 删除class
      let oldChildren = document.querySelectorAll(".page")[this.oldScrollPos]
        .children;
      for (let i = 0, len = oldChildren.length; i < len; i++) {
        let upIndex = oldChildren[i].className.indexOf(" up");
        if (upIndex !== -1) {
          oldChildren[i].className = oldChildren[i].className.substring(
            0,
            upIndex
          );
        }
      }
      //新的增加class
      let children = document.querySelectorAll(".page")[scrollPos].children;
      for (let i = 1, len = children.length; i < len; i++) {
        children[i].className += " up";
      }
    },
    //点击导航滚动页面
    navChange(e) {
      let target =
        e.target.tagName.toLowerCase() == "li" ? e.target : e.target.parentNode;
      let self = this;
      let targetNavId = target.getAttribute("data-target-nav");
      // console.log(e);
      // console.log(targetNavId);
      let targetNav = document.querySelector("." + targetNavId);
      let cover = 0;
      let currPos = targetNav.getBoundingClientRect().top;
      let targetPos = html.getBoundingClientRect().top;
      let to = currPos ? currPos - targetPos : -targetPos;
      let dis = Math.abs(currPos);
      let direction = dis / currPos;
      let pace = () => {
        let step = dis / slideDuration;
        if (cover + step < dis) {
          window.scrollTo(0, html.scrollTop + step * direction);
          cover += step;
          self.animation = window.requestAnimationFrame(pace);
        } else {
          window.scrollTo(0, to);
          window.cancelAnimationFrame(self.animation);
        }
      };
      self.animation = window.requestAnimationFrame(pace);
    },
    //初始化导航
    clearNav() {
      this.sections.forEach(el => {
        el.checked = false;
      });
    },
    //滚动页面切换导航
    scrollNavChange(scrollPos) {
      this.clearNav();
      this.sections[scrollPos].checked = true;
    },
    //技能
    skillChange(scrollPos) {
      let circles = document.querySelectorAll("circle");
      circles.forEach(el => {
        let percent = el.getAttribute("data-percent") / 100;
        let stroke = el.getAttribute("data-stroke");
        let speed = Math.PI * 2 * 45;
        el.style.stroke = stroke;
        if (scrollPos == 2) {
          el.style.strokeDasharray =
            percent * speed + "," + (1 - percent) * speed;
        } else {
          circles.forEach(el => {
            el.style.strokeDasharray = "0,10000";
          });
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
#app
  position relative
  .language
    position fixed
    top 10px
    right 10px
    color #c9d6df
    z-index 5
    font-size 16px
    &>span 
      margin 5px
      cursor pointer
    .active
      color #1e2022
  .navigation
    position: fixed
    top: 45%

    @media screen and (max-width: 500px)
      display: none
</style>
