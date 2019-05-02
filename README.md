# vue-prerender-app1
vue prerender demo
- 使用vue-cli3搭建项目，要使用customer直接装上想要的依赖，否则还需要之后手动安装
- 使用插件：prerender-spa-plugin。安装命令: npm install --save prerender-spa-plugin；[官方文档](https://www.npmjs.com/package/prerender-spa-plugin).
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

<font color=red size=6 face=“黑体”>注意： 
- 路由mode必须是history；
- prerender-spa-plugin的新版本是依赖的谷歌的浏览器的，利用谷歌的无头浏览器，在不打开浏览器的情况下，渲染编译出html。但是谷歌浏览器又一两百兆，在window环境还好，但是到服务器上，通过jekins去编译，或者直接在服务器上执行npm run build会失败。这时候跳过安装谷歌浏览器，翻墙去谷歌下个linux版本的浏览器，然后在服务器上安装，一般安装好之后会默认在/usr/lib中，代码里面也不需要在prerender-spa-plugin配置中配置puppeteer.launch的executablePath(可执行路径)，会默认去/usr/lib中寻找。安装Chromium真的是有点难装！！！！
- 预渲染不适用于 渲染路由过多 和 动态路由 ，只是适用于几个简单的固定路由的情景 。
</font>


- 安装 vue-meta-info
- 在main.js中加上
```
export default {
  metaInfo: {
    title: 'text',
    meta: [
      {
        name: 'keywords',
        content: '关键字1,关键字2,关键字3'
      },
      {
        name: 'description',
        content: '这是一段网页的描述'
      }
    ]
  }
}

```


> 做SEO稍微有点年月的人都知道Meta Keywords曾经是搜索引擎算法中的一个因子，在SEO刚开始流行的时期，SEO简单到只要在Meta  Keywords标签里面堆积大量的关键词都能有很好的排名，当然，这是一种黑帽做法，所以注定了Meta  Keywords要被和谐。  
> 国外知名SEO网站http://searchengineland.com上有人撰文，说微软Bing搜索引擎仍然在使用Meta  Keywords标签，只不过是用来判断网站是否作弊用的。假如蜘蛛程序发现你的网站上有Meta  Keywords标签，并且后面跟了一长串的关键词，那么很明显，你这个细节是为搜索引擎特意准备的，说白了是在讨好搜索引擎，从而想要在搜索结果中获得较好的排名。这样的网页，不仅无法获得搜索引擎的好感，甚至更容易引起搜索引擎对这个页面的不信任，一旦搜索引擎不信任你这个页面了，排名肯定会受到影响，甚至你用的太过分，招来K站大祸也是有可能的。 引用自：https://www.chinaz.com/web/2011/1019/214529.shtml 


