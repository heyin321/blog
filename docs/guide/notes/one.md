# 关于标题

规范的README文件开头都写上一个标题，这被称为大标题。



**[plain]**[view plain](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[copy](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[![在CODE上查看代码片](https://code.csdn.net/assets/CODE_ico.png)](https://code.csdn.net/snippets/294485)[![派生到我的代码片](https://code.csdn.net/assets/ico_fork.svg)](https://code.csdn.net/snippets/294485/fork)

1. 大标题 
2. ==== 

在文本下面加上 等于号 = ，那么上方的文本就变成了大标题。等于号的个数无限制，但一定要大于0个哦。。



比大标题低一级的是中标题，也就是显示出来比大标题小点。



**[plain]**[view plain](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[copy](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[![在CODE上查看代码片](https://code.csdn.net/assets/CODE_ico.png)](https://code.csdn.net/snippets/294485)[![派生到我的代码片](https://code.csdn.net/assets/ico_fork.svg)](https://code.csdn.net/snippets/294485/fork)

1. 中标题 
2. \------- 

在文本下面加上 下划线 - ，那么上方的文本就变成了中标题，同样的 下划线个数无限制。

除此之外，你也会发现大，中标题下面都有一条横线，没错这就是 = 和 - 的显示结果。

如果你只输入了等于号=，但其上方无文字，那么就只会显示一条直线。如果上方有了文字，但你又只想显示一条横线，而不想把上方的文字转义成大标题的话，那么你就要在等于号=和文字直接补一个空行。

***补空行：是很常用的用法，当你不想上下两个不同的布局方式交错到一起的时候，就要在两种布局之间补一个空行。\***

如果你只输入了短横线（减号）-，其上方无文字，那么要显示直线，必须要写三个减号以上。不过与等于号的显示效果不同，它显示出来时虚线而不是实线。同减号作用相同的还有星号*和下划线_，同样的这两者符号也要写三个以上才能显示一条虚横线。



除此以外，关于标题还有等级表示法，分为六个等级，显示的文本大小依次减小。不同等级之间是以井号 # 的个数来标识的。一级标题有一个 #，二级标题有两个# ，以此类推。



**[plain]**[view plain](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[copy](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[![在CODE上查看代码片](https://code.csdn.net/assets/CODE_ico.png)](https://code.csdn.net/snippets/294485)[![派生到我的代码片](https://code.csdn.net/assets/ico_fork.svg)](https://code.csdn.net/snippets/294485/fork)

1. \#一级标题 
2. \##二级标题 
3. \###三级标题 
4. \####四级标题 
5. \#####五级标题 
6. \######六级标题 

注意井号#和标题名称要并排写作一行，显示效果如图：



[![img](https://img-blog.csdn.net/20140415190616281)](https://github.com/guodongxiaren/test/blob/master/README.md)

实际上，前文所述的大标题和中标题是分别和一级标题和二级标题对应的。即大标题大小和一级标题相同，中标题大小和二级标题相同。

# 显示文本



## 普通文本 

直接输入的文字就是普通文本。需要注意的是要换行的时候不能直接通过回车来换行，需要使用<br>(或者<br/>)。也就是html里面的标签。***事实上，markdown支持一些html标签，你可以试试。***当然如果你完全使用html来写的话，就丧失意义了，毕竟markdown并非专门做前端的，然而仅实现一般效果的话，它会比html写起来要简洁得多得多啦。



**[plain]**[view plain](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[copy](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[![在CODE上查看代码片](https://code.csdn.net/assets/CODE_ico.png)](https://code.csdn.net/snippets/294485)[![派生到我的代码片](https://code.csdn.net/assets/ico_fork.svg)](https://code.csdn.net/snippets/294485/fork)

1. 这是一段普通的文本， 
2. 直接回车不能换行，<br> 
3. 要使用\<br> 

注意第三行的<br>前加了反斜杠 \ 。目的就是像其他语言那样实现转义，也就是 < 的转义。



效果如图：

![img](https://img-blog.csdn.net/20140415193641437)

此外，要显示一个***超链接***的话，就直接输入这个链接的URL就好了。显示出来会自动变成可链接的形式的。

## 显示空格的小Tip

默认的文本行首空格都会被忽略的，但是如果你想用空格来排一下版的话怎么办呢，有个小技巧，那就是把你的输入法由半角改成全角就OK啦。

## 单行文本

使用两个Tab符实现单行文本。



**[plain]**[view plain](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[copy](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[![在CODE上查看代码片](https://code.csdn.net/assets/CODE_ico.png)](https://code.csdn.net/snippets/294485)[![派生到我的代码片](https://code.csdn.net/assets/ico_fork.svg)](https://code.csdn.net/snippets/294485/fork)

1. Hello,大家好，我是果冻虾仁。 

注意前面有两个Tab。在GitHub上单行文本显示效果如图：



[![img](https://img-blog.csdn.net/20140415195517312)](https://github.com/guodongxiaren/test/blob/master/README.md)

## 多行文本

多行文本和单行文本异曲同工，只要在每行行首加两个Tab



**[plain]**[view plain](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[copy](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[![在CODE上查看代码片](https://code.csdn.net/assets/CODE_ico.png)](https://code.csdn.net/snippets/294485)[![派生到我的代码片](https://code.csdn.net/assets/ico_fork.svg)](https://code.csdn.net/snippets/294485/fork)

1. 欢迎到访 
2. 很高兴见到您 
3. 祝您，早上好，中午好，下午好，晚安 



[![img](https://img-blog.csdn.net/20140415195443515)](https://github.com/guodongxiaren/test/blob/master/README.md)

## 部分文字的高亮

如果你想使一段话中部分文字高亮显示，来起到突出强调的作用，那么可以把它用 ` ` 包围起来。注意这不是单引号，而是Tab上方，数字1左边的按键（注意使用英文输入法）。

Thank `You` . Please `Call` Me `Coder`

[![img](https://img-blog.csdn.net/20140415195420468)](https://github.com/guodongxiaren/test/blob/master/README.md)

## 文字超链接

给一段文字加入超链接的格式是这样的 **[** *要显示的文字* **](** *链接的地址* **)。比如：**



**[plain]**[view plain](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[copy](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[![在CODE上查看代码片](https://code.csdn.net/assets/CODE_ico.png)](https://code.csdn.net/snippets/294485)[![派生到我的代码片](https://code.csdn.net/assets/ico_fork.svg)](https://code.csdn.net/snippets/294485/fork)

1. [我的博客](http://blog.csdn.net/guodongxiaren) 

显示效果：
[![img](https://img-blog.csdn.net/20140415194927687)](https://github.com/guodongxiaren/test/blob/master/README.md)

你还可以给他加上一个鼠标悬停显示的文本。



**[plain]**[view plain](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[copy](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[![在CODE上查看代码片](https://code.csdn.net/assets/CODE_ico.png)](https://code.csdn.net/snippets/294485)[![派生到我的代码片](https://code.csdn.net/assets/ico_fork.svg)](https://code.csdn.net/snippets/294485/fork)

1. [我的博客](http://blog.csdn.net/guodongxiaren "悬停显示") 

即在URL之后 用双引号括起来一个字符串。同样要注意这里是英文双引号。



# 插入符号

## 圆点符

- 这是一个圆点符
- 这也是一个圆点符

上面这段的圆点是CSDN博客编辑器里面的符号列表。写文章在列出条目时经常用到。在GitHub的markdown语法里也支持使用圆点符。编辑的时候使用的是星号 *



**[plain]**[view plain](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[copy](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[![在CODE上查看代码片](https://code.csdn.net/assets/CODE_ico.png)](https://code.csdn.net/snippets/294485)[![派生到我的代码片](https://code.csdn.net/assets/ico_fork.svg)](https://code.csdn.net/snippets/294485/fork)

1. \* 昵称：果冻虾仁 
2. \* 别名：隔壁老王 
3. \* 英文名：Jelly 

要注意的是星号* 后面要有一个空格。否则显示为普通星号。上文的显示效果如图：



[![img](https://img-blog.csdn.net/20140415211024531)](https://github.com/guodongxiaren/test/blob/master/README.md)

此外还有二级圆点和三级圆点。就是多加一个Tab。



**[plain]**[view plain](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[copy](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[![在CODE上查看代码片](https://code.csdn.net/assets/CODE_ico.png)](https://code.csdn.net/snippets/294485)[![派生到我的代码片](https://code.csdn.net/assets/ico_fork.svg)](https://code.csdn.net/snippets/294485/fork)

1. \* 编程语言 
2.   \* 脚本语言 
3. ​    \* Python 

第二行一个Tab，第三行两个Tab。这样用来表示层级结构就更清晰了吧，看效果：



[![img](https://img-blog.csdn.net/20140415210959703)](https://github.com/guodongxiaren/test/blob/master/README.md)

**如果你觉得三级的结构还不够表达清楚的话，我们可以试着换一种形式，请看\*字符包围\***



## 缩进

缩进的含义是很容易理解的。。



**[plain]**[view plain](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[copy](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[![在CODE上查看代码片](https://code.csdn.net/assets/CODE_ico.png)](https://code.csdn.net/snippets/294485)[![派生到我的代码片](https://code.csdn.net/assets/ico_fork.svg)](https://code.csdn.net/snippets/294485/fork)

1. \>数据结构 
2. \>>树 
3. \>>>二叉树 
4. \>>>>平衡二叉树 
5. \>>>>>满二叉树 

显示效果：
[![img](https://img-blog.csdn.net/20140415210938296)](https://github.com/guodongxiaren/test/blob/master/README.md)



当然比这个更一般的用法是这样。常常能在书籍里面看到的效果，比如引用别人的文章。直接看效果。

[![img](https://img-blog.csdn.net/20140418163033265)](https://github.com/guodongxiaren/test/blob/master/README.md)



具体这个“缩进”的用法。大家自己摸索吧。

# 插入图片



## 来源于网络的图片 



网上有很多README插入图片的教程了，经我自己多次测试呢，发现可以使用的最简单，最基本的语法是：



**[plain]**[view plain](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[copy](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[![在CODE上查看代码片](https://code.csdn.net/assets/CODE_ico.png)](https://code.csdn.net/snippets/294485)[![派生到我的代码片](https://code.csdn.net/assets/ico_fork.svg)](https://code.csdn.net/snippets/294485/fork)

1. ![](http://www.baidu.com/img/bdlogo.gif) 

即 叹号! + 方括号[ ] + 括号( ) 其中叹号里是图片的URL。

如果不加叹号! ,就会变成普通文本baidu了。

在方括号里可以加入一些 标识性的信息，比如



**[plain]**[view plain](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[copy](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[![在CODE上查看代码片](https://code.csdn.net/assets/CODE_ico.png)](https://code.csdn.net/snippets/294485)[![派生到我的代码片](https://code.csdn.net/assets/ico_fork.svg)](https://code.csdn.net/snippets/294485/fork)

1. ![baidu](http://www.baidu.com/img/bdlogo.gif) 



这个方括号里的baidu并不会对图像显示造成任何改动，如果你想达到***鼠标悬停\***显示提示信息，那么可以仿照前面介绍的文本中的方法，就是这样：



**[plain]**[view plain](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[copy](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[![在CODE上查看代码片](https://code.csdn.net/assets/CODE_ico.png)](https://code.csdn.net/snippets/294485)[![派生到我的代码片](https://code.csdn.net/assets/ico_fork.svg)](https://code.csdn.net/snippets/294485/fork)

1. ![baidu](http://www.baidu.com/img/bdlogo.gif "百度logo") 

在URL后面，加一个双引号包围的字符串，显示效果如图：



[![img](https://img-blog.csdn.net/20140415084033031)](https://github.com/guodongxiaren/test/blob/master/README.md)



## GitHub仓库里的图片

有时候我们想显示一个GitHub仓库(或者说项目)里的图片而不是一张其他来源网络图片，因为其他来源的URL很可能会失效。那么如何显示一个GitHub项目里的图片呢？

其实与上面的格式基本一致的，所不同的就是括号里的URL该怎么写。

  **https://github.com*****/** 你的用户名 **/** 你的项目名 **/ raw /** 分支名 **/** 存放图片的文件夹 **/** 该文件夹下的图片*

这样一目了然了吧。比如：



**[plain]**[view plain](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[copy](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[![在CODE上查看代码片](https://code.csdn.net/assets/CODE_ico.png)](https://code.csdn.net/snippets/294485)[![派生到我的代码片](https://code.csdn.net/assets/ico_fork.svg)](https://code.csdn.net/snippets/294485/fork)

1. ![](https://github.com/guodongxiaren/ImageCache/raw/master/Logo/foryou.gif) 

我在GitHub上的用户名guodongxiaren；有一个项目ImageCache；raw表示原数据的意思吧，不用管它；主分支master；项目里有一个文件夹Logo；Logo文件夹下有一张图片foryou.gif



## 给图片加上超链接

如果你想使图片带有超链接的功能，即点击一个图片进入一个指定的网页。那么可以这样写：



**[plain]**[view plain](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[copy](http://blog.csdn.net/guodongxiaren/article/details/23690801#)[![在CODE上查看代码片](https://code.csdn.net/assets/CODE_ico.png)](https://code.csdn.net/snippets/294485)[![派生到我的代码片](https://code.csdn.net/assets/ico_fork.svg)](https://code.csdn.net/snippets/294485/fork)

1. [![baidu]](http://baidu.com) 

2. [baidu]: http://www.baidu.com/img/bdlogo.gif	"百度Logo"

这两句和前面的写法差异较大，但是也极易模仿着写出，就不过多介绍了。只需注意上下文中的 baidu 是你自己起的标识的名称，可以随意，但是一定要保证上下两行的 标识 是一致的。

这样就能实现 点击图片进入网页的功能了。





# 插入代码片段

我们需要在代码的上一行和下一行用` `` 标记。``` 不是三个单引号，而是数字1左边，Tab键上面的键。要实现语法高亮那么只要在 ``` 之后加上你的编程语言即可（忽略大小写）。c++语言可以写成c++也可以是cpp。看代码：

[![img](https://img-blog.csdn.net/20140414175605265)](https://github.com/guodongxiaren/test/blob/master/README.md)

实际显示效果

[![img](https://img-blog.csdn.net/20140414175637890)](https://github.com/guodongxiaren/test/blob/master/README.md)

# [题外话]在GitHub上用Gist写日记吧

看了这么多markdown的语法，你一定不满足于仅仅写一个README文件了，开始跃跃欲试想实际用markdown语法来编写博客或文章了吧。的确，网上也有依托或者支持markdown语法的博客。但是呢，更方便的是，你可以借助GitHub本身就有的一个功能——Gist。

Gist是以文件为单位的，不是以项目为单位的。而且与普通的GitHub上建的仓库不同，Gist是private的哦。普通的项目默认都是public的，要想弄成private貌似还要交钱的样子。既然是private那么用来写写日记，是极好的。

GitHub网页的顶部有：

![img](https://img-blog.csdn.net/20140415210829250)

点进去:

![img](https://img-blog.csdn.net/20140415210736578)

这就是你可以编辑的私有文件，它不仅支持Text文本，还支持各种编程语言呢！当然也包括markdown。输入文件名：

![img](https://img-blog.csdn.net/20140415210247125)

最后保存，选中 Create Secret Gist 就是私有的喽。

![img](https://img-blog.csdn.net/20140415210703281)

我在GitHub上为本文建的一个项目，供大家查看代码即具体效果：https://github.com/guodongxiaren/test



**[字体、字号与颜色](http://blog.csdn.net/testcs_dn/article/details/45719357)**





```html
<font face="黑体">我是黑体字</font>



<font face="微软雅黑">我是微软雅黑</font>



<font face="STCAIYUN">我是华文彩云</font>



<font color=#0099ff size=7 face="黑体">color=#0099ff size=72 face="黑体"</font>



<font color=#00ffff size=72>color=#00ffff</font>



<font color=gray size=72>color=gray</font>
```



Size：规定文本的尺寸大小。可能的值：从 1 到 7 的数字。浏览器默认值是 3。





# 颜色名列表

------

| 颜色名               | 十六进制颜色值 | 颜色               |
| :------------------- | :------------- | :----------------- |
| AliceBlue            | #F0F8FF        | rgb(240, 248, 255) |
| AntiqueWhite         | #FAEBD7        | rgb(250, 235, 215) |
| Aqua                 | #00FFFF        | rgb(0, 255, 255)   |
| Aquamarine           | #7FFFD4        | rgb(127, 255, 212) |
| Azure                | #F0FFFF        | rgb(240, 255, 255) |
| Beige                | #F5F5DC        | rgb(245, 245, 220) |
| Bisque               | #FFE4C4        | rgb(255, 228, 196) |
| Black                | #000000        | rgb(0, 0, 0)       |
| BlanchedAlmond       | #FFEBCD        | rgb(255, 235, 205) |
| Blue                 | #0000FF        | rgb(0, 0, 255)     |
| BlueViolet           | #8A2BE2        | rgb(138, 43, 226)  |
| Brown                | #A52A2A        | rgb(165, 42, 42)   |
| BurlyWood            | #DEB887        | rgb(222, 184, 135) |
| CadetBlue            | #5F9EA0        | rgb(95, 158, 160)  |
| Chartreuse           | #7FFF00        | rgb(127, 255, 0)   |
| Chocolate            | #D2691E        | rgb(210, 105, 30)  |
| Coral                | #FF7F50        | rgb(255, 127, 80)  |
| CornflowerBlue       | #6495ED        | rgb(100, 149, 237) |
| Cornsilk             | #FFF8DC        | rgb(255, 248, 220) |
| Crimson              | #DC143C        | rgb(220, 20, 60)   |
| Cyan                 | #00FFFF        | rgb(0, 255, 255)   |
| DarkBlue             | #00008B        | rgb(0, 0, 139)     |
| DarkCyan             | #008B8B        | rgb(0, 139, 139)   |
| DarkGoldenRod        | #B8860B        | rgb(184, 134, 11)  |
| DarkGray             | #A9A9A9        | rgb(169, 169, 169) |
| DarkGreen            | #006400        | rgb(0, 100, 0)     |
| DarkKhaki            | #BDB76B        | rgb(189, 183, 107) |
| DarkMagenta          | #8B008B        | rgb(139, 0, 139)   |
| DarkOliveGreen       | #556B2F        | rgb(85, 107, 47)   |
| Darkorange           | #FF8C00        | rgb(255, 140, 0)   |
| DarkOrchid           | #9932CC        | rgb(153, 50, 204)  |
| DarkRed              | #8B0000        | rgb(139, 0, 0)     |
| DarkSalmon           | #E9967A        | rgb(233, 150, 122) |
| DarkSeaGreen         | #8FBC8F        | rgb(143, 188, 143) |
| DarkSlateBlue        | #483D8B        | rgb(72, 61, 139)   |
| DarkSlateGray        | #2F4F4F        | rgb(47, 79, 79)    |
| DarkTurquoise        | #00CED1        | rgb(0, 206, 209)   |
| DarkViolet           | #9400D3        | rgb(148, 0, 211)   |
| DeepPink             | #FF1493        | rgb(255, 20, 147)  |
| DeepSkyBlue          | #00BFFF        | rgb(0, 191, 255)   |
| DimGray              | #696969        | rgb(105, 105, 105) |
| DodgerBlue           | #1E90FF        | rgb(30, 144, 255)  |
| Feldspar             | #D19275        | rgb(209, 146, 117) |
| FireBrick            | #B22222        | rgb(178, 34, 34)   |
| FloralWhite          | #FFFAF0        | rgb(255, 250, 240) |
| ForestGreen          | #228B22        | rgb(34, 139, 34)   |
| Fuchsia              | #FF00FF        | rgb(255, 0, 255)   |
| Gainsboro            | #DCDCDC        | rgb(220, 220, 220) |
| GhostWhite           | #F8F8FF        | rgb(248, 248, 255) |
| Gold                 | #FFD700        | rgb(255, 215, 0)   |
| GoldenRod            | #DAA520        | rgb(218, 165, 32)  |
| Gray                 | #808080        | rgb(128, 128, 128) |
| Green                | #008000        | rgb(0, 128, 0)     |
| GreenYellow          | #ADFF2F        | rgb(173, 255, 47)  |
| HoneyDew             | #F0FFF0        | rgb(240, 255, 240) |
| HotPink              | #FF69B4        | rgb(255, 105, 180) |
| IndianRed            | #CD5C5C        | rgb(205, 92, 92)   |
| Indigo               | #4B0082        | rgb(75, 0, 130)    |
| Ivory                | #FFFFF0        | rgb(255, 255, 240) |
| Khaki                | #F0E68C        | rgb(240, 230, 140) |
| Lavender             | #E6E6FA        | rgb(230, 230, 250) |
| LavenderBlush        | #FFF0F5        | rgb(255, 240, 245) |
| LawnGreen            | #7CFC00        | rgb(124, 252, 0)   |
| LemonChiffon         | #FFFACD        | rgb(255, 250, 205) |
| LightBlue            | #ADD8E6        | rgb(173, 216, 230) |
| LightCoral           | #F08080        | rgb(240, 128, 128) |
| LightCyan            | #E0FFFF        | rgb(224, 255, 255) |
| LightGoldenRodYellow | #FAFAD2        | rgb(250, 250, 210) |
| LightGrey            | #D3D3D3        | rgb(211, 211, 211) |
| LightGreen           | #90EE90        | rgb(144, 238, 144) |
| LightPink            | #FFB6C1        | rgb(255, 182, 193) |
| LightSalmon          | #FFA07A        | rgb(255, 160, 122) |
| LightSeaGreen        | #20B2AA        | rgb(32, 178, 170)  |
| LightSkyBlue         | #87CEFA        | rgb(135, 206, 250) |
| LightSlateBlue       | #8470FF        | rgb(132, 112, 255) |
| LightSlateGray       | #778899        | rgb(119, 136, 153) |
| LightSteelBlue       | #B0C4DE        | rgb(176, 196, 222) |
| LightYellow          | #FFFFE0        | rgb(255, 255, 224) |
| Lime                 | #00FF00        | rgb(0, 255, 0)     |
| LimeGreen            | #32CD32        | rgb(50, 205, 50)   |
| Linen                | #FAF0E6        | rgb(250, 240, 230) |
| Magenta              | #FF00FF        | rgb(255, 0, 255)   |
| Maroon               | #800000        | rgb(128, 0, 0)     |
| MediumAquaMarine     | #66CDAA        | rgb(102, 205, 170) |
| MediumBlue           | #0000CD        | rgb(0, 0, 205)     |
| MediumOrchid         | #BA55D3        | rgb(186, 85, 211)  |
| MediumPurple         | #9370D8        | rgb(147, 112, 216) |
| MediumSeaGreen       | #3CB371        | rgb(60, 179, 113)  |
| MediumSlateBlue      | #7B68EE        | rgb(123, 104, 238) |
| MediumSpringGreen    | #00FA9A        | rgb(0, 250, 154)   |
| MediumTurquoise      | #48D1CC        | rgb(72, 209, 204)  |
| MediumVioletRed      | #C71585        | rgb(199, 21, 133)  |
| MidnightBlue         | #191970        | rgb(25, 25, 112)   |
| MintCream            | #F5FFFA        | rgb(245, 255, 250) |
| MistyRose            | #FFE4E1        | rgb(255, 228, 225) |
| Moccasin             | #FFE4B5        | rgb(255, 228, 181) |
| NavajoWhite          | #FFDEAD        | rgb(255, 222, 173) |
| Navy                 | #000080        | rgb(0, 0, 128)     |
| OldLace              | #FDF5E6        | rgb(253, 245, 230) |
| Olive                | #808000        | rgb(128, 128, 0)   |
| OliveDrab            | #6B8E23        | rgb(107, 142, 35)  |
| Orange               | #FFA500        | rgb(255, 165, 0)   |
| OrangeRed            | #FF4500        | rgb(255, 69, 0)    |
| Orchid               | #DA70D6        | rgb(218, 112, 214) |
| PaleGoldenRod        | #EEE8AA        | rgb(238, 232, 170) |
| PaleGreen            | #98FB98        | rgb(152, 251, 152) |
| PaleTurquoise        | #AFEEEE        | rgb(175, 238, 238) |
| PaleVioletRed        | #D87093        | rgb(216, 112, 147) |
| PapayaWhip           | #FFEFD5        | rgb(255, 239, 213) |
| PeachPuff            | #FFDAB9        | rgb(255, 218, 185) |
| Peru                 | #CD853F        | rgb(205, 133, 63)  |
| Pink                 | #FFC0CB        | rgb(255, 192, 203) |
| Plum                 | #DDA0DD        | rgb(221, 160, 221) |
| PowderBlue           | #B0E0E6        | rgb(176, 224, 230) |
| Purple               | #800080        | rgb(128, 0, 128)   |
| Red                  | #FF0000        | rgb(255, 0, 0)     |
| RosyBrown            | #BC8F8F        | rgb(188, 143, 143) |
| RoyalBlue            | #4169E1        | rgb(65, 105, 225)  |
| SaddleBrown          | #8B4513        | rgb(139, 69, 19)   |
| Salmon               | #FA8072        | rgb(250, 128, 114) |
| SandyBrown           | #F4A460        | rgb(244, 164, 96)  |
| SeaGreen             | #2E8B57        | rgb(46, 139, 87)   |
| SeaShell             | #FFF5EE        | rgb(255, 245, 238) |
| Sienna               | #A0522D        | rgb(160, 82, 45)   |
| Silver               | #C0C0C0        | rgb(192, 192, 192) |
| SkyBlue              | #87CEEB        | rgb(135, 206, 235) |
| SlateBlue            | #6A5ACD        | rgb(106, 90, 205)  |
| SlateGray            | #708090        | rgb(112, 128, 144) |
| Snow                 | #FFFAFA        | rgb(255, 250, 250) |
| SpringGreen          | #00FF7F        | rgb(0, 255, 127)   |
| SteelBlue            | #4682B4        | rgb(70, 130, 180)  |
| Tan                  | #D2B48C        | rgb(210, 180, 140) |
| Teal                 | #008080        | rgb(0, 128, 128)   |
| Thistle              | #D8BFD8        | rgb(216, 191, 216) |
| Tomato               | #FF6347        | rgb(255, 99, 71)   |
| Turquoise            | #40E0D0        | rgb(64, 224, 208)  |
| Violet               | #EE82EE        | rgb(238, 130, 238) |
| VioletRed            | #D02090        | rgb(208, 32, 144)  |
| Wheat                | #F5DEB3        | rgb(245, 222, 179) |
| White                | #FFFFFF        | rgb(255, 255, 255) |
| WhiteSmoke           | #F5F5F5        | rgb(245, 245, 245) |
| Yellow               | #FFFF00        | rgb(255, 255, 0)   |
| YellowGreen          | #9ACD32        | rgb(154, 205, 50)  |