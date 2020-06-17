# VuePress

这篇文章主要是记录自己在使用VuePress过程中所遇到的问题以及如何一步一步的解决问题。

> 安装vuepress前，请确保你的 Node.js 版本 >= 8

## 全局安装

```
# 安装
yarn global add vuepress 或者：npm install -g vuepress

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev .

# 构建静态文件
vuepress build .
```

#### 注意 ：`vuepress dev .`和`vuepress build .`后面的`.`。

## 在现有项目中安装

```
# 将 vuepress 作为一个本地依赖安装
yarn add -D vuepress 或者：npm install -D vuepress

# 新建一个 docs 文件夹
mkdir docs

# 新建一个 markdown 文件
echo '# Hello VuePress!' > docs/README.md

# 开始写作
npx vuepress dev docs
```

接着，在 `package.json` 里加一些脚本:

```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

开始写作

```
yarn docs:dev 或者：npm run docs:dev
```

第一个坑：我的项目就是依赖`webpack 3.6.0`同时也是用npm安装依赖，然后继续使用npm安装vuepress，然后执行`npx vuepress dev docs`的时候报错了，上网查了好久也没有解决问题，最后使用yarn安装vuepress成功了。

如果你的现有项目依赖了 webpack 3.x，推荐使用 yarn而不是 npm 来安装 vuepress。

要生成静态的 HTML 文件，运行：

```
yarn docs:build 或者：npm run docs:build
```

默认情况下，文件将会被生成在 `.vuepress/dist`，也可以通过 `.vuepress/config.js` 中的 `dest` 字段来修改.

以上步骤都成功以后，就可以在浏览器总看到页面了，接下来就是对页面进行布局

## 主题配置

本文是根据VuePress默认主题配置

### 1.首页

在docs文件夹下创建`.vuepress文件夹`和`README.md文件`。(如果以及有了就不要再新建)
根目录下的README.md文件可以当作首页，在文件中加入下面文字：

```
---
home: true
actionText: 快速上手 →
actionLink: /guide/install/install
---
```

可以根据自己的需要添加、删除、修改，这就完成了首页的布局
`actionLink: /guide/install/install`就是首页后要显示的下一个页面

接下来在docs文件夹中创建`guide文件夹`(根据自己的需要命名)。这个文件夹中放的是`markdown`文件，每一个`markdown`文件对应一个页面。至于页面之间的跳转和页面导航栏和侧边栏布局在`config.js`文件中设置。
VuePress 网站必要的配置文件是 `.vuepress/config.js`，它应该导出一个 JavaScript 对象：

```
module.exports = {
      title: 'VuePress',
    description: 'VuePress',
}
```

对于上述的配置，运行`yarn docs:dev`，你应该能看到一个页面，它包含一个页头，里面包含一个标题和一个搜索框。

### 2.导航栏

可以通过 `themeConfig.nav` 增加一些导航栏链接:

```
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [       
           {text: '指南',link:'/guide/install/install'}
        ]
  }
}
```

当你提供了一个 `items` 数组而不是一个单一的 `link` 时，它将显示为一个 `下拉列表` ：

```
module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ]
  }
}
```

### 3.侧边栏

想要使侧边栏（Sidebar）生效，需要配置 `themeConfig.sidebar`

```
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
        {
            title: '开发指南',
            collapsable: false, //是否展开
        },
          ['./guide/install/install','安装'],
           ['./guide/started/started','快速上手'],
        {
            title: '组件',
            collapsable: false
        },
        ['./guide/icon/icon','icon'],
    ]
  }
}
```

可以省略 `.md` 拓展名，同时以 `/` 结尾的路径将会被视为 `*/README.md`
如果想要显示地指定链接的文字，使用一个格式为 `[link, text]` 的数组。
具体配置可以根据官网配置：[默认主题配置](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#侧边栏)

这是浏览器显示效果：

![1.png](https://segmentfault.com/img/remote/1460000017264883)

现在页面基本也搭建完成，可以在页面之间进行切换。下一步是如何在`markdown`中使用vue组件，也就是在页面中展示自己的项目。

## 在markdown中使用Vue

在`.vuepress`中创建`components`文件夹。
所有在 `.vuepress/components` 中找到的 `*.vue` 文件将会自动地被注册为全局的异步组件。

如果需要引入静态文件，可以在`.vuepress`下新建`public`文件夹，里面可以放静态文件。

因为本文的案例是展示Icon图标，所有引入了`svg.js`，`svg.js`可以在http://www.iconfont.cn/中获取，本文使用`## symbol引用`具体方法请访问官网。放在`public`文件夹中，可以在`components`文件夹中的组件引入。

这是docs文件夹目录结构

![2.png](https://segmentfault.com/img/remote/1460000017264884)

```
.
└─ .vuepress
   └─ components
      ├─ demo-1.vue
      └─ Icon
         └─ vi-icon.vue
```

可以直接使用这些组件在任意的 Markdown 文件中（组件名是通过文件名取到的）：

```
<demo-1/>
<Icon-vi-icon/> //文件名和组件名之间同`-`连接
```

完成这一步以后就可以在页面中看到自己的组件在页面中展示了，但是在运行下面命令进行打包的时候会报错：
报错原因参考官网文档：[浏览器的 API 访问限制](https://vuepress.vuejs.org/zh/guide/using-vue.html#浏览器的-api-访问限制)

```
yarn docs:build 或者：npm run docs:build
```

解决这个问题只需要在使用Vue组件的`markdown`文件中使用`<ClientOnly></ClientOnly>`将组件包裹起来。如：

```
<ClientOnly>
  <Icon-vi-icon/>
</ClientOnly>
```

注意：在markdown文件中如果需要给组件名缩进，不要用`tab`键，会被当做`markdown`语法解析。

浏览器效果图

![3.png](https://segmentfault.com/img/remote/1460000017264885)

到这一步，基本上可以在页面中展示自己的组件。下一篇将继续写如何通过Vue组件实现跟：[Element](http://element-cn.eleme.io/#/zh-CN/component/icon)相似的效果。