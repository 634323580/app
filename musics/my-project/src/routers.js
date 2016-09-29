module.exports = function(router){
    //路由表
    router.map({
        //默认
        '/':{
            name:'todolist',
            component: require('./components/todolist.vue')

        },
        'home':{
            name:'home',
            component: function(reslove){
              return require(['./components/todolist.vue'],reslove);
            }

        },
        'router2':{
          component:{
            template: '<p>找不着</p>',
          }
          
        },
        'router3':{
          component:{
            template: '<p>找不着</p>',
          }
          
        },
        'router4':{
          component:{
            template: '<p>找不着</p>',
          }
          
        },
        '*': {
            name:'404error',
           component:{
            template: '<p>乱输你麻痹</p>',
          }
        },

    });


    //默认List主页
    router.redirect({
        '/':"/home" 
    });


};
