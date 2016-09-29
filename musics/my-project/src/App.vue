<template>
  <div id="app">
    <ul class="nav">
      <li><a v-link="{ path: '/home' }" class="btn btn-large" v-effect="red">musics</a></li>
      <li><a v-link="{ path: '/router2' }" class="btn btn-large" v-effect="red">router2</a></li>
      <li><a v-link="{ path: '/router3' }" class="btn btn-large" v-effect="red">router3</a></li>
      <li><a v-link="{ path: '/router4' }" class="btn btn-large" v-effect="red">router4</a></li>
    </ul> 
    <router-view class="ui-view" keep-alive :transition="effect" transition-mode="out-in"></router-view>
    <br/>
    <br/>
    <br/>
    <p>{{age}}</p> 
    <!--<musics v-on:child-msg="handleIt" v-ref:profile></musics>-->
    <!--使用v-ref 为子组件指定一个索引 -->
    <hello v-ref:hellochild sb="我是父组件向子组件传递数据"></hello>
  </div>
</template>
<script>
  import Musics from './components/todolist';
  import Hello from './components/Hello';
export default {
  ready:function(){
    //直接通过索引访问子组件
    console.log(this.$refs.hellochild.msg)
  },
  data () {
   return {
      effect: 'fade', //路由模板动画参数
      age: ''
      
   }
  },
  events: {
   'child-msg': function(msg){
      console.log(msg)
      this.age = msg;
    }
  },
  methods:{
    handleIt:function(age){
      console.log(age)
    }
  },
  components: {
    Musics,Hello
  }
}
</script>

<style lang="scss">
  *{
    padding:0;
    margin:0;
  }
  .ui-view {
    width: 300px;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
  }
  .fade-enter{
    opacity: 1;
    transform: translate3d(100%, 0, 0);
  }
  .fade-leave {
    opacity: 0; 
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);

  }
  .nav{
    margin:10px 0;
    overflow:hidden;
    position:fixed;
    width: 300px;
    top: 50px;
    li{
      line-height: 30px;
      background:#42b983;
      list-style:none;
      width: 25%;
      float:left;
      a{
        display: block;
        color: #fff !important;
        border-right:1px solid #fff;
      }
      &:last-of-type{
        a{
          border-right:none;
        }
      }
    }
  }
  a.nav-active{
    background:#2bbbad;
  }

/*点击波浪效果*/
.waves-effect {
    position: relative;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    vertical-align: middle;
    z-index: 1;
    will-change: opacity, transform;
    transition: all .3s ease-out;
}

.waves-effect.waves-red .waves-ripple{background-color:rgba(0, 0, 0, .2)}
.waves-effect .waves-ripple{
  position:absolute;
  border-radius:50%;
  width:20px;
  height:20px;
  margin-top:-10px;
  margin-left:-10px;
  opacity:0;
  background:rgba(0,0,0,0.2);
  transition:all 0.7s ease-out;
  transition-property:opacity, -webkit-transform;
  transition-property:transform, opacity;
  transition-property:transform, opacity, -webkit-transform;
  -webkit-transform:scale(0);
  transform:scale(0);
  pointer-events:none
  }
</style>
