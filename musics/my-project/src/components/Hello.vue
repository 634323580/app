<template>
  <div class="hello">
    <p>{{sb}}</p>
    <h1>{{ msg }}</h1>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
export default {
  props: ['sb'],
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'this is my todolist'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 { 
  color: #42b983;
}
</style>
