module.exports = {
    title: '银哥博客',
	head: [
        ['link', {rel: 'icon', href: '/img/main.jpg'}],
		["link", { rel: "stylesheet", href: "/css/style.css" }],
		 ["script", { charset: "utf-8", src: "/js/main.js" }],
    ],
	themeConfig: {
        nav: require("./nav.js"),
		 sidebar: require("./sidebar.js")
	},
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
         serviceWorker: true,
        editLinks: true,
        editLinkText: '/home',
    }
