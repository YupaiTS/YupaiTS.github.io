(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{229:function(e,t,n){"use strict";n.r(t);var s=n(0),a=Object(s.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("ol",[e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),n("li",[n("p",[e._v("JPA事务管理踩坑：")]),e._v(" "),e._m(7),n("ul",[e._m(8),e._v(" "),e._m(9),e._v(" "),n("li",[n("p",[e._v("参考："),n("a",{attrs:{href:"https://stackoverflow.com/questions/46708063/springboot-jpa-need-no-save-on-transactional",target:"_blank",rel:"noopener noreferrer"}},[e._v("SpringBoot JPA need no .save() on @Transactional?"),n("OutboundLink")],1)])])])]),e._v(" "),e._m(10)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"常见异常解决方案总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见异常解决方案总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 常见异常解决方案总结")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"java-spring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-spring","aria-hidden":"true"}},[this._v("#")]),this._v(" Java/Spring")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[t("code",[this._v("Caused by: com.alibaba.fastjson.JSONException: default constructor not found.")])]),this._v(" "),t("ul",[t("li",[this._v("解决方案：解析的目标类增加无参构造方法。")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("使用 "),t("code",[this._v("frontend-maven-plugin")]),this._v(" 进行maven打包时出现以下错误：")]),this._v(" "),t("p",[t("code",[this._v("Failed to execute goal com.github.eirslett:frontend-maven-plugin:1.6:install-node-and-npm (install node and npm) on project spider-web: Could not extract the npm archive: Could not extract archive: 'C:\\Users\\xxx\\.m2\\repository\\com\\github\\eirslett\\npm\\5.7.1\\npm-5.7.1.tar.gz': EOFException")])]),this._v(" "),t("ul",[t("li",[this._v("解决方案：把./m2目录下载不完全的包清掉之后再执行打包。")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Apache工具类方法FileUtils.forceDelete(File file)报 "),t("code",[this._v("java.io.IOException: Unable to delete file:")]),this._v(" 错误。")]),this._v(" "),t("ul",[t("li",[this._v("解决方案：检查file的路径是否是绝对路径，相对路径有可能会出问题。")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("p",[n("code",[e._v("sudo: no tty present and no askpass program specified")])]),e._v(" "),n("ul",[n("li",[e._v("解决方案：设置指定用户（如 gitlab-runner）使用sudo命令不需要手动输入登录密码。"),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[e._v("vi")]),e._v(" /etc/sudoers\ngitlab-runner ALL"),n("span",{attrs:{class:"token operator"}},[e._v("=")]),n("span",{attrs:{class:"token punctuation"}},[e._v("(")]),e._v("ALL"),n("span",{attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" NOPASSWD: ALL\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("p",[e._v("Spring Cloud架构下微服务使用 "),n("code",[e._v("@EnableJpaAuditing")]),e._v(" 开启审计功能时，需要调用方服务依赖 "),n("code",[e._v("spring-aspects.jar")]),e._v(" 包，否则在使用RestTemplate进行服务间调用时会报如下错误：\n"),n("code",[e._v("o.s.s.o.provider.endpoint.TokenEndpoint : Handling error: InternalAuthenticationServiceException, sun.reflect.annotation.TypeNotPresentExceptionProxy")])]),e._v(" "),n("ul",[n("li",[n("p",[e._v("解决方案：通过在TypeNotPresentExceptionProxy类的构造方法中打断点，发现根本原因是：\n"),n("code",[e._v("java.lang.NoClassDefFoundError: org/springframework/beans/factory/aspectj/ConfigurableObject")])]),e._v(" "),n("p",[e._v("而该类是存在于spring-aspects包中，最终通过添加该依赖解决问题。")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("If you retrieve an entity, for example using the findOne method call within a transactional method it has become managed from that point by the persistence provider.\nNow if you make any changes to that entity (which is actually a proxy object), upon transaction commit, those changes will be persisted to the database, regardless of the fact of invoking the save or update methods.\nsave or persist has to be used when you are creating a new entity from scratch and persistence provider does not know of its existance yet.\nRemember that you can prevent making any changes upon commit, if you use detach or evict methods on that particular entity before those changes occur.\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br"),t("span",{staticClass:"line-number"},[this._v("4")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("翻译：如果您检索实体，例如findOne在事务方法中使用方法调用，则由持久性提供程序从那时起管理它。现在，如果对该实体（实际上是代理对象）进行任何更改，则在事务提交时，无论调用save或update方法的事实如何，这些更改都将持久保存到数据库。save或者persist必须在从头开始创建新实体时使用，并且持久性提供程序还不知道它的存在。请记住，如果在发生更改之前在特定实体上使用detach或使用evict方法，则可以阻止在提交时进行任何更改。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("解决方案：简而言之，就是在save通过findxxxByxxx查询得到的对象的时候，如果有spring的事务进行控制时，需要new一个同类型的对象再去save。")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("p",[e._v("Logback使用AmqpAppender的json格式日志向elk打印日志时，如果使用%ex会因为异常堆栈信息中包含为转义的\\t\\n等字符导致logstash的json解析失败，从而使得日志中无法记录堆栈信息。")]),e._v(" "),n("ul",[n("li",[e._v("解决思路：\n"),n("ol",[n("li",[e._v("logstash的input直接使用 "),n("code",[e._v("codec => plain")]),e._v(" 解析，此方式适用于 "),n("code",[e._v("AmqpAppender")]),e._v(" 的 "),n("code",[e._v("pattern")]),e._v(" 格式为字符串日志而不是类json格式日志")]),e._v(" "),n("li",[e._v("pattern中使用 "),n("code",[e._v("%replace")]),e._v(" 对 "),n("code",[e._v("%ex")]),e._v(" 中的 "),n("code",[e._v("\\t\\n")]),e._v(" 等字符进行转义替换")])])])])])}],!1,null,null,null);a.options.__file="10.md";t.default=a.exports}}]);