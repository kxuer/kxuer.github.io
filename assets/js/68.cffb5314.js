(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{394:function(e,t,s){"use strict";s.r(t);var a=s(4),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"github-pages-实现部署vdoing博客"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-pages-实现部署vdoing博客"}},[e._v("#")]),e._v(" GitHub Pages 实现部署vdoing博客")]),e._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),t("p",[e._v("我使用vuepress-theme-vdoing搭建了一个静态博客，挂在了Github pages上面。")]),e._v(" "),t("h2",{attrs:{id:"实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[e._v("#")]),e._v(" 实现")]),e._v(" "),t("ol",[t("li",[e._v("首先，需要创建一个公开仓库，并命名为“用户名.github.io”。")])]),e._v(" "),t("p",[e._v("注意：貌似必须为自己的GitHub用户名，不能为别的名称。")]),e._v(" "),t("p",[e._v("默认访问<你的用户名>.github.io即可。")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("先生成token：点击头像–>settings–>Developer settings–>Personal access tokens–>Generate new token–>(生成令牌)")])]),e._v(" "),t("p",[e._v("下载"),t("a",{attrs:{href:"https://github.com/xugaoyi/vuepress-theme-vdoing.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-theme-vdoing"),t("OutboundLink")],1),e._v("zip压缩包。")]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("你的token"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("@github.com/"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("你的用户名"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("你的用户名"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(".github.io.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("你的用户名"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(".github.io\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("把vuepress-theme-vdoing压缩包中的内容放到自己的仓库目录下。")]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run dev\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("访问http://localhost:8080/可查看到页面。")]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("部署：")])]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 在git bash中执行：")]),e._v("\n./deploy.sh\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("这里脚本会打包项目并push到自己仓库的gh-pages分支。")]),e._v(" "),t("p",[e._v("最后，访问GitHub进入仓库之后，修改部署分支为gh-pages：点击 Settings->Pages->Build and deployment->Branch->改为gh-pages分支->Save。")]),e._v(" "),t("p",[e._v("访问<你的用户名>.github.io即可。")]),e._v(" "),t("h2",{attrs:{id:"vdoing官方指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vdoing官方指南"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://doc.xugaoyi.com/pages/a2f161/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vdoing官方指南"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实践"}},[e._v("#")]),e._v(" 实践")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("写文章时大概的流程："),t("a",{attrs:{href:"https://doc.xugaoyi.com/pages/9ae0bd/",target:"_blank",rel:"noopener noreferrer"}},[e._v("xugaoyi"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("在线编辑原有的文章："),t("a",{attrs:{href:"https://doc.xugaoyi.com/pages/c5a54d/",target:"_blank",rel:"noopener noreferrer"}},[e._v("xugaoyi"),t("OutboundLink")],1),e._v(" 注：配置文件为"),t("code",[e._v("docs\\.vuepress\\config.ts")])])]),e._v(" "),t("li",[t("p",[e._v("目录页配置："),t("a",{attrs:{href:"https://doc.xugaoyi.com/pages/54651a/",target:"_blank",rel:"noopener noreferrer"}},[e._v("xugaoyi目录页配置"),t("OutboundLink")],1),e._v(" 注：可在"),t("code",[e._v("docs\\00.目录页")]),e._v("下放置目录页文件(.md文件)，对应"),t("code",[e._v("docs")]),e._v("目录下的文件夹，在"),t("code",[e._v("docs\\00.目录页")]),e._v("下新建文件夹，放置子目录对应的目录页文件(.md文件)。如果想在导航栏中出现链接，还需在"),t("code",[e._v("docs\\.vuepress\\config.ts")]),e._v("的"),t("code",[e._v("nav")]),e._v("添加对应项。")])])]),e._v(" "),t("img",{attrs:{src:"https://cdn.staticaly.com/gh/kxuer/image_store@main/img/tempsnip.1x21a4r33ips.png",width:"20%"}}),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("p",[t("a",{attrs:{href:"https://xugaoyi.com/pages/1da0bf9a988eafe5/",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用Gitalk实现静态博客无后台评论系统"),t("OutboundLink")],1),e._v("。部署到GitHub后，登录个人账户，点击一个页面就只会初始化那个页面的issue。")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://xugaoyi.com/pages/a5f73af5185fdf0a/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub + jsDelivr + TinyPNG+ PicGo 打造稳定快速、高效免费图床"),t("OutboundLink")],1)])])]),e._v(" "),t("h2",{attrs:{id:"排错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排错"}},[e._v("#")]),e._v(" 排错")]),e._v(" "),t("ol",[t("li",[e._v("GitHub构建报错："),t("code",[e._v('Module build failed (from ./node_modules/vue-loader/lib/loaders/templateLoader.js): SyntaxError: Unexpected token, expected ","')])])]),e._v(" "),t("p",[e._v("原因：使用{{}}会使vue-loader解析其中的变量，如"),t("code",[e._v("\\{\\{ sum2 = price2&&amount2 ? (price2 | number:8)*(amount2 | number:8) : 0.0 \\}\\}")]),e._v("。")]),e._v(" "),t("p",[e._v("解决：写markdown笔记时使用反斜杠转义{{}}，实际代码去掉反斜杠。")]),e._v(" "),t("blockquote",[t("p",[e._v("ps：实践中发现一行中不能出现两个{{}}，否则也出错。")])]),e._v(" "),t("blockquote",[t("p",[e._v("ps：尽管本地运行npm run dev不报错，push到GitHub才报错，也不用每次都修改一点push到GitHub中尝试发现错误，因为尽管本地运行npm run dev不报错，但打开对应页面是没有东西的，因此可以本地修改直到正常显示页面为止。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);