(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{191:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),a("p",[s._v("注册中心是微服务的核心组件，SpringCloud比较常见的注册中心有eureka和consul，这里简单说明下这两种注册中心服务如何实现。这里的例子是基于SpringCloud Edgeware版本。")]),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),s._m(7),s._v(" "),a("ol",[a("li",[a("p",[a("a",{attrs:{href:"https://www.consul.io/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载"),a("OutboundLink")],1),s._v("consul服务端程序")])]),s._v(" "),s._m(8)]),s._v(" "),s._m(9),s._v(" "),s._m(10)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"快速搭建微服务-注册中心、服务发现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速搭建微服务-注册中心、服务发现","aria-hidden":"true"}},[this._v("#")]),this._v(" 快速搭建微服务-注册中心、服务发现")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"spring-cloud-eureka注册中心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-eureka注册中心","aria-hidden":"true"}},[this._v("#")]),this._v(" Spring Cloud Eureka注册中心")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"server端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server端","aria-hidden":"true"}},[this._v("#")]),this._v(" Server端")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[a("p",[s._v("maven")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.springframework.cloud"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring-cloud-starter-netflix-eureka-server"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("application.yml")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("9101")]),s._v("\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("eureka")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("instance")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("hostname")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" localhost\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("client")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("register-with-eureka")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("fetch-registry")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("service-url")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[s._v("defaultZone")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//$"),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("eureka.instance.hostname"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("$"),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("server.port"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/eureka\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("wait-time-in-ms-when-sync-empty")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" eureka"),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Application.java")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[s._v("@EnableEurekaServer")]),s._v("\n"),a("span",{attrs:{class:"token annotation punctuation"}},[s._v("@SpringBootApplication")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("EurekaServerApplication")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("main")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        SpringApplication"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("run")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("EurekaServerApplication"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token keyword"}},[s._v("class")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"client端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#client端","aria-hidden":"true"}},[this._v("#")]),this._v(" Client端")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[a("p",[s._v("maven")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.springframework.cloud"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring-cloud-starter-netflix-eureka-client"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("application.yml")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("9110")]),s._v("\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("eureka")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("client")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("service-url")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[s._v("defaultZone")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//eureka"),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("9101/eureka\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("instance")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("prefer-ip-address")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("instance-id")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("spring.cloud.client.ipAddress"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("$"),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("server.port"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" service"),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("order\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Application.java")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[s._v("@EnableDiscoveryClient")]),s._v("\n"),a("span",{attrs:{class:"token annotation punctuation"}},[s._v("@SpringBootApplication")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("ServiceOrderApplication")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("main")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        SpringApplication"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("run")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ServiceOrderApplication"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token keyword"}},[s._v("class")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"spring-cloud-consul注册中心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-consul注册中心","aria-hidden":"true"}},[this._v("#")]),this._v(" Spring Cloud Consul注册中心")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"server端-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server端-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Server端")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("li",[a("p",[s._v("运行consul")]),s._v(" "),a("ul",[a("li",[s._v("开发环境")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("consul agent -dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("正式部署")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("consul agent -data-dir=tem/consul\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"client端-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#client端-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Client端")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[a("p",[s._v("maven")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.springframework.cloud"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring-cloud-starter-consul-discovery"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("application.yml")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("9110")]),s._v("\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" service"),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("order\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("cloud")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("consul")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[s._v("host")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" localhost\n      "),a("span",{attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("8500")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Application.java")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[s._v("@EnableDiscoveryClient")]),s._v("\n"),a("span",{attrs:{class:"token annotation punctuation"}},[s._v("@SpringBootApplication")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("ServiceOrderApplication")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("main")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        SpringApplication"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("run")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ServiceOrderApplication"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token keyword"}},[s._v("class")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])])}],!1,null,null,null);e.options.__file="README.md";t.default=e.exports}}]);