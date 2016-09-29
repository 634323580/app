import Vue from 'vue'
import App from './App'
Vue.config.debug = true
import Resource from 'vue-resource'
Vue.use(Resource);

// 设置默认请求地址
Vue.http.options.root = 'https://api.douban.com/v2/';


/*设置请求头信息*/
// Vue.http.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
// Vue.http.headers.put['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'; 

// 拦截器
let index = 0 ;
Vue.http.interceptors.push((request, next)  => {
    console.log('开始')
    // 继续下一个拦截器
	index++;
	console.log(index);
    next((response) => {
		--index;
        // 修改响应
        // console.log(response.body)
	console.log(index);
    });
});

import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
	//abstract:true,
	//地址栏不会有变化
	//以下设置需要服务端设置
	hashbang: true,
	history: false,//当使用 HTML5 history 模式时，服务器需要被正确配置 以防用户在直接访问链接时会遇到404页面。
	saveScrollPosition: true,
	transitionOnLoad: true,
	linkActiveClass:'nav-active' //全局设置连接匹配时的类名 参考http://vuejs.github.io/vue-router/en/link.html
})
require('./routers')(router);  



router.start(App,'app');
/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
