# Vue-Vuex-Demo
> 練習vue及vuex的範例專案

## Resources
* [實作小範例入門 Vue & Vuex 2.0 系列](https://github.com/hungjie19/ironman2017vue)
* [vue.js](https://vuejs.org/)
* [vue-cli](https://github.com/vuejs/vue-cli)

## Note

### Command
* `npm install` 安裝相依套件
* `npm run dev` 執行開發模式

### Keyword
* `v-modal` 將資料名稱綁定到元素上

### Install
* `npm install -g vue-cli` 安裝 [vue-cli](https://github.com/vuejs/vue-cli)
* `vue init webpack your-project-name` 建立vue專安
* `npm install vue-router --save-dev` 安裝vue-route

### vue-route
* 建立路由
```
> router/index.js

export default new Router({
  routes: [
    {
      path: '/hello', # 一般路由
      name: 'Hello',
      component: Hello
    }, {
      path: '/c2f',
      name: 'c2f',
      component: CtoF
    }, {
      path: '/*', 
      redirect: '/hello' # 重新導向
    }
  ]
})
```
* 建立連結
```
<router-link :to="{path: '/hello'}">Hello</router-link>
<router-link :to="{name: 'c2f'}">CtoF</router-link>

<router-view></router-view> # 轉跳後所載入的 component 最後會顯示在此
```

### Vue-API
* Computed: 需要計算後才顯示的data可以放在computed裡，當data改變時會立即計算結果。
