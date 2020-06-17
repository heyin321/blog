module.exports = [
    {
        text: '菜鸟教程', link: '/guide/'
    },
    {
        text: '知识宝典', link: '/baodian/',
		items: [
            {text: '英语宝库', link: '/baodian/zero/'},
            {text: '云应用系统开发', link: '/baodian/high/'},
			{text: 'java语言', link: '/baodian/java/'},
			{text: '物联网安全技术', link: '/baodian/C/'},
        ]
    },
	
    {
        text: '工具箱',
        items: [
			{
                text: '在线编辑',
				items: [
					{text: '图片压缩', link: 'https://tinypng.com/'}
				]
            },
			{
                text: '在线服务',
				items: [
					{text: '阿里云', link: 'https://www.aliyun.com/'},
					{text: '腾讯云', link: 'https://cloud.tencent.com/'}
				]
            },
			{
                text: '博客指南',
				items: [
					{text: '掘金', link: 'https://juejin.im/'},
					{text: 'CSDN', link: 'https://blog.csdn.net/'}
				]
            }
        ]
    },
	{
        text: '首页', link: '/home/'
    },
]