# vue-prerender-app1

vue prerender demo
- 使用vue-cli3搭建项目，要使用customer直接装上想要的依赖，否则还需要之后手动安装
- 使用插件：prerender-spa-plugin。安装命令: npm install --save prerender-spa-plugin；：Wq[官方文档](https://www.npmjs.com/package/prerender-spa-plugin).

- 在新建的项目根目录下新建vue.config.js文件，详情请看vue.config.js文件
- 修改mian.js如下
```
new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
```

- 现在 npm run build,就能看到dist文件下增加了对应vue.config.js里面的routes的目录，目录下是一个html文件，是静态文件

> 预渲染：构建阶段生成匹配预渲染路径的 html 文件（注意：每个需要预渲染的路由都有一个对应的 html）。构建出来的 html 文件已经有静态数据，需要ajax数据的部分未构建。