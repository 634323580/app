<template>
  <div>
    <a v-on:click="onClickMe"  class="btn btn-large parent-dataBtn" v-effect="red">click</a>
    <input type="text" v-model="newItem" v-on:keyUp.enter="addNew" id="newItemInput">
    <ul id="todolist">
      <li v-for="(index,item) in items" v-on:click="toggle(item)" :class="{on: item.isFinished}">
        <span class="delete" v-on:click="deleteFn(index,$event)">×</span> 
        {{item.label}}
      </li>
    </ul>
    <h1 class="musics-title">音乐搜索结果</h1>
    <div class="musics-list">
      <p v-show="show">加载中...</p>
      <ul v-if="musicsNumber">
        <li v-for="ites in  musics">
          <a :href="ites.alt" :style="{color: '#fff'}" :title="ites.title">{{ites.title}}</a>
        </li>
      </ul>
      <p v-else="musicsNumber">找不着</p>
    </div>
  </div>
</template>
<script>
import Store from '../store'
import Directive from '../directive'

export default {
  ready() {
     
  },
  data () {
   return {
      age:'这是什么东西.............',
      isClass: true,
      items:Store.fetch(),
      newItem: '',
      musics:'',
      musicsNumber:true,
      show:false
      
   }
  },
  methods: {
    toggle:function(item){
      item.isFinished = !item.isFinished;
      
    },
    addNew:function(){
      if(this.newItem == ""){
       this.newItem = '';
        return;
      }
      // this.items.push({
      //   label: this.newItem,
      //   isFinished: false
      // })

      this.musics = '';
      this.show = !this.show;
      this.musicsNumber = true;
      this.$http.jsonp('music/search', {
       params: { q:this.newItem }
     })
     .then((response) => {
      this.musics = response.json().musics
      // this.musics =  JSON.parse(JSON.stringify(this.$musics));
      this.show = !this.show;
      this.newItem = '';
      this.musicsNumber = this.musics.length ? true : false;
      
    })
    .catch((err) => {
      console.log(err)
    })
    },
    deleteFn:function(index,e){
      e.stopPropagation();
      this.items.splice(index,1)
    },
    onClickMe: function(){
      this.$dispatch('child-msg', '哈哈')
    }
  },
  watch: {
    items:{
      handler:function(){
          Store.save(this.items);
      },
      deep: true
    }
  },
  components: {
    
  }
}


</script>

<style lang="scss">
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font: 14px/1.5 "PingFang SC", Helvetica, "Helvetica Neue", "微软雅黑", Tahoma, Arial, sans-serif;
  background:#e8e8e8;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
.red{
  color:red;
}
#todolist li.on{
  opacity: 1;
}
#todolist,#todolist li{
  padding:0;
  list-style: none;
}
#todolist li,.musics-list li{
  line-height: 35px;
  height: 35px;
  background-color: #52b983;
  font-size: 14px;
  margin-bottom: 2px;
  color: #fff;
  opacity: 1;
  /*opacity: 0.5;*/
  position: relative;
}
.musics-list li a{
  display: block;
}
#newItemInput{
  width: 250px;
  height:45px;
  border:2px solid rgba(66, 185,134, .5);
  outline: none;
  font-size: 18px;
  text-align: center;
  background: transparent;
  background-origin: padding-box;
  width: 100%;
  box-sizing:border-box;
}
#todolist li{
  span{
    color:red;
    position: absolute;
    right: 10px;
    cursor: pointer;
    font-size: 24px; 
  }
}
.musics-list{
  max-height: 290px;
  overflow-y:auto;
}
.musics-title{
  color:#52b983;
  font-weight: bold;
  margin:20px 0;
}
.musics-list li{
  text-align: left;
  box-sizing:border-box;
  padding:0 10px;
  a{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
}
.parent-dataBtn{
  display: inline-block;
  width: 120px;
  line-height: 35px;
  background: #fff;
}
</style>
