(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{498:function(t,a,s){"use strict";s.r(a);var e=s(12),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"最终一致性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最终一致性"}},[t._v("#")]),t._v(" 最终一致性")]),t._v(" "),s("blockquote",[s("p",[t._v("引用自 "),s("a",{attrs:{href:"https://feixiao.github.io/2017/03/14/fbsxt9/",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式系统原理九：CAP理论和BASE理论"),s("OutboundLink")],1),t._v(" 作者：frank")])]),t._v(" "),s("h2",{attrs:{id:"base理论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#base理论"}},[t._v("#")]),t._v(" BASE理论")]),t._v(" "),s("p",[t._v("BASE是 Basically Available（基本可用）、Soft state（软状态）和Eventually consistent（最终一致性）三个短语的简写。")]),t._v(" "),s("p",[t._v("BASE是对CAP中一致性和可用性权衡的结果，其来源于对大规模互联网系统分布式实践的总结，是基于CAP定理逐步演化而来的，其核心思想是即使无法做到强一致性，但每个应用都可以根据自身的业务特点，采用适当的方法来使系统达到最终一致性。接下来，我们着重对BASE中的三要素进行讲解。")]),t._v(" "),s("h3",{attrs:{id:"基本可用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本可用"}},[t._v("#")]),t._v(" 基本可用")]),t._v(" "),s("p",[t._v("基本可用是指分布式系统在出现不可预知故障的时候，允许损失部分可用性——但请注意，这绝不等价于系统不可用。以下就是两个“基本可用”的例子。")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("响应时间上的损失：正常情况下，一个在线搜索引擎需要在0.5秒之内返回给用户相应的查询结果，但由于出现故障（比如系统部分机房发生断电或断网故障），查询结果的响应时间增加到了1~2秒。")])]),t._v(" "),s("li",[s("p",[t._v("功能上的损失：正常情况下，在一个电子商务网站（比如淘宝）上购物，消费者几乎能够顺利地完成每一笔订单。但在一些节日大促购物高峰的时候（比如双十一、双十二），由于消费者的购物行为激增，为了保护系统的稳定性（或者保证一致性），部分消费者可能会被引导到一个降级页面。")])])]),t._v(" "),s("h3",{attrs:{id:"软状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#软状态"}},[t._v("#")]),t._v(" 软状态")]),t._v(" "),s("p",[t._v("软状态是指允许系统中的数据存在中间状态，并认为该中间状态的存在不会影响系统的整体可用性，即允许系统在不同的数据副本之间进行数据同步的过程存在延时。")]),t._v(" "),s("h3",{attrs:{id:"最终一致性-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最终一致性-2"}},[t._v("#")]),t._v(" 最终一致性")]),t._v(" "),s("p",[t._v("最终一致性强调的是系统中所有的数据副本，在经过一段时间的同步后，最终能够达到一个一致的状态。因此，最终一致性的本质是需要系统保证最终数据能够达到一致，而不需要实时保证系统数据的强一致性。")]),t._v(" "),s("p",[t._v("最终一致性是一种特殊的弱一致性：系统能够在保证没有其他新的更新操作的情况下，数据最终一定能够达到一致的状态，因此所有客户端对系统的数据访问都能够获取到最新的值。同时，在没有发生故障的前提下，数据达到一致状态的延迟，取决于网络延迟、系统负载和数据复制方案设计等因素。")]),t._v(" "),s("p",[t._v("在实际工程实践中，最终一致性存在以下五类主要变种：")]),t._v(" "),s("ul",[s("li",[t._v("因果一致性（Causal consistency）")]),t._v(" "),s("li",[t._v("读己之所写（Read your writes）")]),t._v(" "),s("li",[t._v("会话一致性（Session consistency）")]),t._v(" "),s("li",[t._v("单调读一致性（Monotonic read consistency）")]),t._v(" "),s("li",[t._v("单调写一致性（Monotonic write consistency）")])]),t._v(" "),s("p",[t._v("以上就是最终一致性的五种常见的变种，在实际系统实践中，可以将其中的若干个变种互相结合起来，以构建一个具有最终一致性特性的分布式系统。事实上，最终一致性并不是只有哪些大型分布式系统才涉及的特性，许多现代的关系型数据库都采用了最终一致性模型。在现代关系型数据库中（比如MySQL和PostgreSQL），大多都会采用同步或异步方式来实现主备数据复制技术。在同步方式中，数据的复制过程通常是更新事务的一部分，因此在事务完成后，主备数据库的数据就会达到一致。而在异步方式中，备库的更新往往会存在延时，这取决于事务日志在主备数据库之间传输的时间长短。如果传输时间过长或者甚至在日志传输过程中出现异常导致无法及时将事务应用到备库上，那么很显然，从备库中读取的数据将是旧的，因此就出现了数据不一致的情况。当然，无论是采用多此重试还是人为数据订正，关系型数据库还是能够保证最终数据达到一致，这就是系统提供最终一致性保证的经典案例。")])])}),[],!1,null,null,null);a.default=r.exports}}]);