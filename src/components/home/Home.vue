<template>
  <div class="page has-footer">
    <mt-header title="首页">
      <mt-button slot="left" @click="popupMenu = true" class="fa fa-fw fa-bars"></mt-button>
      <mt-button slot="right" @click="go('/page/login')" class="fa fa-fw fa-lock"></mt-button>
    </mt-header>
    
    <div>
      <mt-swipe v-if="showSwipe" @change="handleChange" :prevent="true" :auto="auto" :style="{height:screenWidth*0.6+'px'}">
        <mt-swipe-item v-for="i in 5" :key="i">
          <img width="100%" :src="'./static/img/banner/'+(i-1)+'.jpg'">
        </mt-swipe-item>
      </mt-swipe>
      <table class="icon-table">
        <tr v-if="index%4 == 0" v-for="(menu, index) in menus" :key="index">
          <td @click="go(menu.url)" v-if="i>=index && i<index+4" v-for="(menu, i) in menus" style="width:25%;padding-top:5px;">
            <div>
              <i class="fa fa-fw" :class="'fa fa-'+menu.icon" :style="{color:menu.color}"></i><br/>
              <span>{{menu.name}}</span>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <mt-button size="large" style="border-radius:0;text-align:left;color:#26a2ff;">
      <i class="fa fa-calendar-o"></i> 日程安排
    </mt-button>

    <timeline :items="timelines"></timeline>

    <mt-popup v-model="popupMenu" position="left" style="width:80%;">
      <mt-header title="菜单" fixed>
        <mt-button @click="popupMenu = !popupMenu" slot="right" icon="back">隐藏</mt-button>
      </mt-header>

      <div class="has-header" style="overflow-y:auto;" :style="{height:screenHeight-40+'px'}">
        <mt-cell @click.native="popupMenu = false;go(menu.url)" v-for="(menu, index) in menus" :key="index" :title="menu.name">
          <i slot="icon" class="fa fa-fw" :class="'fa fa-'+menu.icon" :style="{verticalAlign:'middle', color:menu.color}"></i>
        </mt-cell>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import Vue from 'vue'
import {
  Cell,
  Swipe,
  SwipeItem
} from 'mint-ui'
Vue.component(Cell.name, Cell)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
import timeline from '../common/Timeline.vue'
import {
  mapGetters,
  mapMutations
} from 'vuex'

export default {
  name: 'home',
  components:{
    timeline
  },
  data() {
    return {
      auto: 5000,
      showSwipe:true,
      drawer: false,
      mini: false,
      temporary: true,
      right: null,
      popupMenu: false,
      leftMenus: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      menus: [{
        name: '列表',
        icon: 'list',
        color: '#ff7f50',
        url: 'list'
      },{
        name: '选项卡',
        icon: 'folder',
        color: '#ffa500',
        url: 'tab'
      },{
        name: '图表',
        icon: 'bar-chart',
        color: '#87cefa',
        url: 'chart'
      },{
        name: '通讯录',
        icon: 'address-book-o',
        color: '#da70d6',
        url: 'contact'
      },{
        name: '表单',
        icon: 'list-alt',
        color: '#32cd32',
        url: 'form'
      },{
        name: '锁屏',
        icon: 'hand-o-up',
        color: '#ff69b4',
        url: 'lock'
      },{
        name: '加载',
        icon: 'spinner',
        color: '#6495ed',
        url: 'loading'
      },{
        name: '视频',
        icon: 'video-camera',
        color: '#cd5c5c',
        url: 'video'
      },{
        name: '日历',
        icon: 'calendar',
        color: '#ba55d3',
        url: 'calendar'
      },{
        name: '地图',
        icon: 'map',
        color: '#40e0d0',
        url: 'map'
      },{
        name: '弹窗',
        icon: 'window-restore',
        color: '#1e90ff',
        url: 'dialog'
      },{
        name: '聊天',
        icon: 'qq',
        color: '#ff6347',
        url: 'chat'
      },{
        name: '上传',
        icon: 'upload',
        color: '#7b68ee',
        url: 'upload'
      },{
        name: '浏览器',
        icon: 'chrome',
        color: '#00fa9a',
        url: 'browser'
      },{
        name: '缩放',
        icon: 'arrows-alt',
        color: '#ffd700',
        url: 'zoom'
      },{
        name: '流程图',
        icon: 'sitemap',
        color: '#6b8e23',
        url: 'workflow'
      }],
      timelines:[{
        time:(()=>{
          let date = new Date()
          date.setHours(9, 0, 0, 0)
          return date
        })(),
        history:(()=>{
          let date = new Date()
          date.setHours(9, 0, 0, 0)
          return date < new Date()
        })(),
        title:'会议',
        content:'部门早会',
        icon:'fa fa-microphone'
      },{
        time:(()=>{
          let date = new Date()
          date.setHours(12, 0, 0, 0)
          return date
        })(),
        history:(()=>{
          let date = new Date()
          date.setHours(12, 0, 0, 0)
          return date < new Date()
        })(),
        title:'午饭',
        content:'员工食堂用餐',
        icon:'fa fa-cutlery'
      },{
        time:(()=>{
          let date = new Date()
          date.setHours(15, 0, 0, 0)
          return date
        })(),
        history:(()=>{
          let date = new Date()
          date.setHours(15, 0, 0, 0)
          return date < new Date()
        })(),
        title:'下午茶',
        content:'放松一下心情',
        icon:'fa fa-coffee'
      },{
        time:(()=>{
          let date = new Date()
          date.setHours(20, 0, 0, 0)
          return date
        })(),
        history:(()=>{
          let date = new Date()
          date.setHours(20, 0, 0, 0)
          return date < new Date()
        })(),
        title:'生日',
        content:'朋友生日，一起庆祝',
        icon:'fa fa-birthday-cake'
      },{
        time:(()=>{
          let date = new Date()
          date.setHours(22, 0, 0, 0)
          return date
        })(),
        history:(()=>{
          let date = new Date()
          date.setHours(22, 0, 0, 0)
          return date < new Date()
        })(),
        title:'睡觉',
        content:'亲爱滴，晚安么么哒~',
        icon:'fa fa-moon-o'
      }]
      /*
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed', 
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0', 
        '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700', 
        '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0' 
      */
    }
  },
  methods: {
    handleChange(index){
      if(this.$route.name != 'home'){
        this.showSwipe = false
      }
    }
  },
  watch:{
    popupMenu(val){
      if(val){
        utils.ui.modal.afterOpen()
      }else{
        utils.ui.modal.beforeClose()
      }
    }
  },
  mounted(){

  },
  beforeRouteEnter(to, from, next) {
    next(vm=>{
      vm.showSwipe = true
    })
  }
}
</script>
<style type="text/css" scoped>
.icon-table{
  width:100%;
  text-align:center;
  background:white;
  font-size:13px;
  border:none;
  border-collapse: collapse;
}
.icon-table td{
  height:64px;
  line-height: 20px;
  vertical-align:middle;
  border:1px dashed #dfdfdf;
}
.icon-table td i{
  font-size:24px;
}
</style>