<template>
  <div id="app">
    <hello></hello>
    <input type="text" v-model="newItem" v-on:keyUp.enter="addNew" id="newItemInput">
    <ul id="todolist">
      <li v-for="item in items" v-on:click="toggle(item)" :class="{on: item.isFinished}">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
import Store from './store'
import Hello from './components/Hello'
export default {
  data () {
   return {
      age:'这是什么东西.............',
      isClass: true,
      items:Store.fetch(),
      newItem: ''
   }
  },
  methods: {
    toggle:function(item){
      item.isFinished = !item.isFinished;
    },
    addNew:function(){
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = null;
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
    Hello
  }
}
</script>

<style>
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
#todolist li{
  line-height: 35px;
  background-color: #52b983;
  font-size: 14px;
  margin-bottom: 2px;
  color: #fff;
  opacity: 0.5;
  cursor: pointer;
}
#newItemInput{
  width: 250px;
  height:45px;
  border-radius: 5px;
  border:2px solid rgba(66, 185,134, .5);
  outline: none;
  font-size: 18px;
  text-align: center;
  background: transparent;
  background-origin: padding-box;
}
</style>
