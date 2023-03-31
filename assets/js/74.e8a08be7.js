(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{400:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),a("ol",[a("li",[s._v("Ubuntu拉取 Docker 镜像十分缓慢："),a("a",{attrs:{href:"https://blog.csdn.net/qq_38463737/article/details/120031716",target:"_blank",rel:"noopener noreferrer"}},[s._v("csdn"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /etc/docker/daemon.json\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加如下内容。其中insecure-registries项为自己的harbor仓库，如果没有可不加")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"registry-mirrors"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://docker.mirrors.ustc.edu.cn"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://hub-mirror.c.163.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"insecure-registries"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.1.22:8082"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 载入daemon.json")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启docker")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("docker引擎的日志："),a("code",[s._v("journalctl -xu docker.service")]),s._v("。  "),a("a",{attrs:{href:"https://docs.docker.com/config/daemon/#read-the-logs",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("ol",[a("li",[s._v("假设要批量停止的docker名字前缀为xxx，则可以执行下面两条命令来停止。")])]),s._v(" "),a("p",[s._v("方法一：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $1}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("docker stop 停止容器")])]),s._v(" "),a("blockquote",[a("p",[s._v("$() 返回在括号内运行脚本的结果")])]),s._v(" "),a("blockquote",[a("p",[s._v("docker ps -a 列出所有容器的docker")])]),s._v(" "),a("blockquote",[a("p",[s._v("| grep “xxx” 管道上一个命令的结果，grep以搜索包含字符串xxx的行")])]),s._v(" "),a("blockquote",[a("p",[s._v("| awk '{print $1}' 管道的结果grep搜索到的awk命令，该命令被告知仅打印在第1列，其是容器的ID的值")])]),s._v(" "),a("p",[s._v("方法二：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $1}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("docker ps 用于列出所有正常运行的容器")])]),s._v(" "),a("blockquote",[a("p",[s._v("| grep filter 将上一命令的结果通过管道传给过滤器，过滤条件为包含xxx关键字")])]),s._v(" "),a("blockquote",[a("p",[s._v("| awk '{print $1}' 将上一命令的结果通过管道传给awk,  awk '{print $1}' 打印第一列的数据，也就是容器ID")])]),s._v(" "),a("blockquote",[a("p",[s._v("| xargs docker stop 将上一命令的结果通过管道传给xargs, xargs 将参数传给docker stop，然后停止这些容器")])]),s._v(" "),a("h2",{attrs:{id:"docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[s._v("#")]),s._v(" docker-compose")]),s._v(" "),a("ol",[a("li",[s._v("示例：")])]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("connectora")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" connectora\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 58080"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" local\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./conf/config.json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/config/config.json\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./conf/connectorA.p12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/config/connectorA.p12\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" SPRING_DATASOURCE_URL=jdbc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("postgresql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//postgres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("5432/connectordb1\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" SPRING_DATASOURCE_USERNAME=connector    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#可以直接覆盖spring程序的配置，但是格式有点变化，如原来application.properties的配置为spring.datasource.username=sa，这里要为SPRING_DATASOURCE_USERNAME=...的形式")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" SPRING_DATASOURCE_PASSWORD=12345\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" PORTAINER_APPLICATION_SCHEME=http\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" PORTAINER_APPLICATION_HOST=portainer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ce\n      。。。\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("extra_hosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 相当于配置容器的域名->IP映射")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" appstore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("192.168.1.22\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h3",{attrs:{id:"harbor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#harbor"}},[s._v("#")]),s._v(" Harbor")]),s._v(" "),a("ol",[a("li",[s._v("Habor是由VMWare公司开源的容器镜像仓库。离线安装：")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/goharbor/harbor/releases/download/v2.5.0/harbor-offline-installer-v2.5.0.tgz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xzvf harbor-offline-installer-v2.5.0.tgz \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" harbor\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" harbor.yml.tmpl harbor.yml\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" harbor.yml\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1. hostname改为自己主机IP如192.168.1.22")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2. 根据需要修改端口为如8090")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#3. 如果没有证书，注释配置文件内容：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https related config")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#https:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https port for harbor, default is 443")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# port: 443")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The path of cert and key files for nginx")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#certificate: /your/certificate/path")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#private_key: /your/private/key/path")]),s._v("\n./prepare \n./install.sh \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("安装完毕，使用浏览器访问：http://192.168.1.22:8090 用户名/密码：admin/Harbor12345")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("把自己制作的镜像push到harbor中：")])]),s._v(" "),a("p",[s._v("修改docker配置信息"),a("code",[s._v("nano /etc/docker/daemon.json")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"registry-mirrors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://docker.mirrors.ustc.edu.cn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://hub-mirror.c.163.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"insecure-registries"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.1.22:8090"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("重启docker：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemctl daemon-reload\nsystemctl restart "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" login "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.22:8090\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#输入用户名/密码：admin/Harbor12345")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("查看config文件看docker配置是否成功："),a("code",[s._v("nano /root/.docker/config.json")])]),s._v(" "),a("p",[s._v("构建个人镜像并push到harbor中：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.22:8090/library/app-tpl:v1.0\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.22:8090/library/app-tpl:v1.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("push成功后，登录harbor页面http://192.168.1.22:8090查看。")]),s._v(" "),a("p",[s._v("pull镜像："),a("code",[s._v("docker pull 192.168.1.22:8090/library/app-tpl:v1.0")])]),s._v(" "),a("p",[s._v("参考："),a("a",{attrs:{href:"https://blog.csdn.net/zlb663107/article/details/124461732",target:"_blank",rel:"noopener noreferrer"}},[s._v("csdn"),a("OutboundLink")],1)]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("为harbor配置https访问："),a("a",{attrs:{href:"https://goharbor.io/docs/2.5.0/install-config/configure-https/",target:"_blank",rel:"noopener noreferrer"}},[s._v("goharbor"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如何配置证书：")]),s._v("\nopenssl genrsa "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-out")]),s._v(" ca.key "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\nopenssl req "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-x509")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-nodes")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sha512")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-days")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3650")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-subj")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/C=CN/ST=Beijing/L=Beijing/O=example/OU=Personal/CN=yourdomain.com"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-key")]),s._v(" ca.key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-out")]),s._v(" ca.crt\nopenssl genrsa "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-out")]),s._v(" yourdomain.com.key "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\nopenssl req "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sha512")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-subj")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/C=CN/ST=Beijing/L=Beijing/O=example/OU=Personal/CN=yourdomain.com"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-key")]),s._v(" yourdomain.com.key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-out")]),s._v(" yourdomain.com.csr\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# DNS.n用来配置域名，IP.n用来配置IP地址（不加IP的话可能会报错Get https://xx.xx.xx.xx/v2/: x509: cannot validate certificate for xx.xx.xx.xx because it doesn't contain any IP SANs，参考https://blog.csdn.net/weixin_40592935/article/details/85112158）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" v3.ext "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nauthorityKeyIdentifier=keyid,issuer\nbasicConstraints=CA:FALSE\nkeyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment\nextendedKeyUsage = serverAuth\nsubjectAltName = @alt_names\n\n[alt_names]\nDNS.1=yourdomain.com\nDNS.2=yourdomain\nDNS.3=hostname\nIP.1=yourIP\nEOF")]),s._v("\n\nopenssl x509 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-req")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sha512")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-days")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3650")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-extfile")]),s._v(" v3.ext "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-CA")]),s._v(" ca.crt "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-CAkey")]),s._v(" ca.key "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-CAcreateserial")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-in")]),s._v(" yourdomain.com.csr "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-out")]),s._v(" yourdomain.com.crt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" yourdomain.com.crt /data/cert/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" yourdomain.com.key /data/cert/\nopenssl x509 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-inform")]),s._v(" PEM "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-in")]),s._v(" yourdomain.com.crt "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-out")]),s._v(" yourdomain.com.cert\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" yourdomain.com.cert /etc/docker/certs.d/yourdomain.com/  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果端口不是443，而是如58080，则这里的目录改为/etc/docker/certs.d/yourdomain.com:58080")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" yourdomain.com.key /etc/docker/certs.d/yourdomain.com/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" ca.crt /etc/docker/certs.d/yourdomain.com/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启docker")]),s._v("\nsystemctl restart "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n\n./prepare\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" down "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 修改docker配置信息`nano /etc/docker/daemon.json`：把"insecure-registries"对应内容删掉')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" login yourdomain.com  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果端口不是443，而是如58080，则这里docker login yourdomain.com:58080")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br")])]),a("blockquote",[a("p",[s._v("注：貌似升级为https访问后，再想改会http访问就通过不了了，浏览器登录会报401 unauthorized错误，即使重装harbor也不行。")])]),s._v(" "),a("h2",{attrs:{id:"排错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排错"}},[s._v("#")]),s._v(" 排错")]),s._v(" "),a("ol",[a("li",[s._v("通过portainer启动容器报错："),a("code",[s._v("Error response from daemon: driver failed programming external connectivity on endpoint app-1668755303771 (c2d1c88d7fc168c65bfdbe01109940e99bf33622bd740a60af7bc3cee31e7d03): invalid transport protocol: 0 Error: failed to start containers: 823ffc5d503a")])])]),s._v(" "),a("p",[s._v("原因：创建容器时端口映射使用的协议错误。")]),s._v(" "),a("p",[s._v("解决：把"),a("code",[s._v("8080/HTTP/1.1")]),s._v("改为"),a("code",[s._v("8080/tcp")])])])}),[],!1,null,null,null);a.default=e.exports}}]);