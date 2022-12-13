import{_ as D,r,o as F,c as b,a as t,w as l,b as s,d as a,e as c,p as y,f as i}from"./app.785ab469.js";const J=JSON.parse('{"title":"Link 链接","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":2,"title":"不同大小","slug":"不同大小","link":"#不同大小","children":[]},{"level":2,"title":"不同状态","slug":"不同状态","link":"#不同状态","children":[]},{"level":2,"title":"自定义颜色","slug":"自定义颜色","link":"#自定义颜色","children":[]},{"level":2,"title":"禁用状态","slug":"禁用状态","link":"#禁用状态","children":[]},{"level":2,"title":"禁止跳转","slug":"禁止跳转","link":"#禁止跳转","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[{"level":3,"title":"LinkTarget","slug":"linktarget","link":"#linktarget","children":[]},{"level":3,"title":"LinkState","slug":"linkstate","link":"#linkstate","children":[]}]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/link.md","lastUpdated":1670893183000}'),v={name:"components/link.md"},d=n=>(y("data-v-db124b5d"),n=n(),i(),n),h=c('<h1 id="link-链接" tabindex="-1" data-v-db124b5d>Link 链接 <a class="header-anchor" href="#link-链接" aria-hidden="true" data-v-db124b5d>#</a></h1><p data-v-db124b5d>一个超链接</p><ul data-v-db124b5d><li data-v-db124b5d><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/link" target="_blank" rel="noreferrer" data-v-db124b5d>源代码</a></li><li data-v-db124b5d><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/link.md" target="_blank" rel="noreferrer" data-v-db124b5d>文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1" data-v-db124b5d>基本使用 <a class="header-anchor" href="#基本使用" aria-hidden="true" data-v-db124b5d>#</a></h2><p data-v-db124b5d><code data-v-db124b5d>type</code> 属性可以配置不同的链接类型，展示不同的颜色状态</p>',5),C=d(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"href"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'""'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"default"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"默认链接"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"href"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'""'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"primary"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"主要链接"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"href"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'""'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"success"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"成功链接"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"href"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'""'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"danger"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"危险链接"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"href"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'""'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"warning"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"警告链接"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"})])])],-1)),f=d(()=>a("h2",{id:"不同大小",tabindex:"-1"},[s("不同大小 "),a("a",{class:"header-anchor",href:"#不同大小","aria-hidden":"true"},"#")],-1)),A=d(()=>a("p",null,[a("code",null,"size"),s(" 属性可以配置不同大小的 "),a("code",null,"link")],-1)),u=d(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"href"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'""'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"12px"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"default"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"默认链接"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"href"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'""'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"12px"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"primary"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"主要链接"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"href"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'""'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"16px"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"success"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"成功链接"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"href"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'""'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"20"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"danger"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"危险链接"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"href"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'""'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"24"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"warning"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"警告链接"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"})])])],-1)),_=c('<h2 id="不同状态" tabindex="-1" data-v-db124b5d>不同状态 <a class="header-anchor" href="#不同状态" aria-hidden="true" data-v-db124b5d>#</a></h2><p data-v-db124b5d><code data-v-db124b5d>state</code> 可以配置 <code data-v-db124b5d>link</code> 的不同状态，可选值为 <code data-v-db124b5d>line</code> 和 <code data-v-db124b5d>bag</code> 代表显示下划线和 <code data-v-db124b5d>hover</code> 状态的显示背景色</p>',2),g=d(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"href"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'""'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"state"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"line"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"primary"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"带有下划线"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"href"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'""'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"state"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"bag"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"danger"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"hover 一下试试"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"})])])],-1)),k=d(()=>a("h2",{id:"自定义颜色",tabindex:"-1"},[s("自定义颜色 "),a("a",{class:"header-anchor",href:"#自定义颜色","aria-hidden":"true"},"#")],-1)),E=d(()=>a("p",null,[s("如果你不喜欢 "),a("code",null,"type"),s(" 属性带了的不同颜色，你也可以使用 "),a("code",null,"color"),s(" 属性自定义你的 "),a("code",null,"link"),s(" 颜色")],-1)),m=d(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"href"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'""'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"color"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"#58c8de"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"看我颜色好看吗"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"href"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'""'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"color"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"#e372ff"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"链接"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"href"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'""'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"color"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"#e49b33"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"还有我"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"})])])],-1)),T=d(()=>a("h2",{id:"禁用状态",tabindex:"-1"},[s("禁用状态 "),a("a",{class:"header-anchor",href:"#禁用状态","aria-hidden":"true"},"#")],-1)),x=d(()=>a("p",null,[a("code",null,"disabled"),s(" 可以让按钮处于禁用状态")],-1)),S=d(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"disabled"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"href"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'""'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"primary"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"不许点我"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"disabled"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"href"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'""'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"state"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"line"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"success"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"不许点我"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"disabled"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"href"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'""'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"state"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"bag"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"warning"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"不许点我"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"})])])],-1)),I=d(()=>a("h2",{id:"禁止跳转",tabindex:"-1"},[s("禁止跳转 "),a("a",{class:"header-anchor",href:"#禁止跳转","aria-hidden":"true"},"#")],-1)),L=d(()=>a("p",null,[s("你甚至可以拿 "),a("code",null,"link"),s(" 当作一个按钮来使用，那么要取消点击刷新和跳转的默认行为，使用 "),a("code",null,"noLink"),s(" 属性可以实现")],-1)),z=d(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"href"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'""'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"no-link"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"拿我当按钮使用"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-link"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"})])])],-1)),w=c(`<h2 id="attributes" tabindex="-1" data-v-db124b5d>Attributes <a class="header-anchor" href="#attributes" aria-hidden="true" data-v-db124b5d>#</a></h2><div class="vp-table__container" data-v-db124b5d><table data-v-db124b5d><thead data-v-db124b5d><tr data-v-db124b5d><th data-v-db124b5d>参数</th><th data-v-db124b5d>说明</th><th data-v-db124b5d>类型</th><th data-v-db124b5d>可选值</th><th data-v-db124b5d>默认值</th></tr></thead><tbody data-v-db124b5d><tr data-v-db124b5d><td data-v-db124b5d><code data-v-db124b5d>type</code></td><td data-v-db124b5d>不同类型</td><td data-v-db124b5d><a href="/components/interface.html#fightingtype" data-v-db124b5d>FightingType</a></td><td data-v-db124b5d><code data-v-db124b5d>default</code> <code data-v-db124b5d>primary</code> <code data-v-db124b5d>success</code> <code data-v-db124b5d>danger</code> <code data-v-db124b5d>warning</code></td><td data-v-db124b5d>——</td></tr><tr data-v-db124b5d><td data-v-db124b5d><code data-v-db124b5d>href</code></td><td data-v-db124b5d>链接的地址</td><td data-v-db124b5d>string</td><td data-v-db124b5d>——</td><td data-v-db124b5d>——</td></tr><tr data-v-db124b5d><td data-v-db124b5d><code data-v-db124b5d>size</code></td><td data-v-db124b5d>文字大小</td><td data-v-db124b5d>string / number</td><td data-v-db124b5d>——</td><td data-v-db124b5d>——</td></tr><tr data-v-db124b5d><td data-v-db124b5d><code data-v-db124b5d>state</code></td><td data-v-db124b5d>鼠标移入的样式状态</td><td data-v-db124b5d><a href="#linkstate" data-v-db124b5d>LinkState</a></td><td data-v-db124b5d><code data-v-db124b5d>line</code> <code data-v-db124b5d>bag</code></td><td data-v-db124b5d>——</td></tr><tr data-v-db124b5d><td data-v-db124b5d><code data-v-db124b5d>disabled</code></td><td data-v-db124b5d>是否禁用</td><td data-v-db124b5d>boolean</td><td data-v-db124b5d>——</td><td data-v-db124b5d>false</td></tr><tr data-v-db124b5d><td data-v-db124b5d><code data-v-db124b5d>target</code></td><td data-v-db124b5d>原生 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-href" target="_blank" rel="noreferrer" data-v-db124b5d>target</a> 属性</td><td data-v-db124b5d><a href="#linktarget" data-v-db124b5d>LinkTarget</a></td><td data-v-db124b5d><code data-v-db124b5d>_self</code> <code data-v-db124b5d>_blank</code> <code data-v-db124b5d>_parent</code> <code data-v-db124b5d>_top</code></td><td data-v-db124b5d>——</td></tr><tr data-v-db124b5d><td data-v-db124b5d><code data-v-db124b5d>color</code></td><td data-v-db124b5d>自定义 link 颜色</td><td data-v-db124b5d>string</td><td data-v-db124b5d>——</td><td data-v-db124b5d>——</td></tr><tr data-v-db124b5d><td data-v-db124b5d><code data-v-db124b5d>no-copy</code></td><td data-v-db124b5d>是否禁止 copy</td><td data-v-db124b5d>boolean</td><td data-v-db124b5d>——</td><td data-v-db124b5d>false</td></tr><tr data-v-db124b5d><td data-v-db124b5d><code data-v-db124b5d>no-link</code></td><td data-v-db124b5d>是否禁止链接跳转及重新加载（取消默认事件）</td><td data-v-db124b5d>boolean</td><td data-v-db124b5d>——</td><td data-v-db124b5d>false</td></tr><tr data-v-db124b5d><td data-v-db124b5d><code data-v-db124b5d>after-icon</code></td><td data-v-db124b5d>之前的 icon</td><td data-v-db124b5d><a href="/components/interface.html#fightingicon" data-v-db124b5d>FightingIcon</a></td><td data-v-db124b5d>——</td><td data-v-db124b5d>——</td></tr><tr data-v-db124b5d><td data-v-db124b5d><code data-v-db124b5d>before-icon</code></td><td data-v-db124b5d>之后的 icon</td><td data-v-db124b5d><a href="/components/interface.html#fightingicon" data-v-db124b5d>FightingIcon</a></td><td data-v-db124b5d>——</td><td data-v-db124b5d>——</td></tr><tr data-v-db124b5d><td data-v-db124b5d><code data-v-db124b5d>on-click</code></td><td data-v-db124b5d>点击执行的回调</td><td data-v-db124b5d><a href="/components/interface.html#HandleMouse" data-v-db124b5d>HandleMouse</a></td><td data-v-db124b5d>——</td><td data-v-db124b5d>——</td></tr></tbody></table></div><h2 id="slots" tabindex="-1" data-v-db124b5d>Slots <a class="header-anchor" href="#slots" aria-hidden="true" data-v-db124b5d>#</a></h2><div class="vp-table__container" data-v-db124b5d><table data-v-db124b5d><thead data-v-db124b5d><tr data-v-db124b5d><th data-v-db124b5d>名称</th><th data-v-db124b5d>说明</th></tr></thead><tbody data-v-db124b5d><tr data-v-db124b5d><td data-v-db124b5d><code data-v-db124b5d>default</code></td><td data-v-db124b5d>默认内容</td></tr><tr data-v-db124b5d><td data-v-db124b5d><code data-v-db124b5d>beforeIcon</code></td><td data-v-db124b5d>之前的 icon</td></tr><tr data-v-db124b5d><td data-v-db124b5d><code data-v-db124b5d>afterIcon</code></td><td data-v-db124b5d>之后的 icon</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-db124b5d>Interface <a class="header-anchor" href="#interface" aria-hidden="true" data-v-db124b5d>#</a></h2><p data-v-db124b5d>组件导出以下类型定义：</p><div class="language-ts" data-v-db124b5d><button title="Copy Code" class="copy" data-v-db124b5d></button><span class="lang" data-v-db124b5d>ts</span><pre class="shiki" data-v-db124b5d><code data-v-db124b5d><span class="line" data-v-db124b5d><span style="color:#89DDFF;" data-v-db124b5d>import</span><span style="color:#A6ACCD;" data-v-db124b5d> </span><span style="color:#89DDFF;" data-v-db124b5d>type</span><span style="color:#A6ACCD;" data-v-db124b5d> </span><span style="color:#89DDFF;" data-v-db124b5d>{</span><span style="color:#F07178;" data-v-db124b5d> </span><span style="color:#A6ACCD;" data-v-db124b5d>LinkInstance</span><span style="color:#89DDFF;" data-v-db124b5d>,</span><span style="color:#F07178;" data-v-db124b5d> </span><span style="color:#A6ACCD;" data-v-db124b5d>LinkProps</span><span style="color:#89DDFF;" data-v-db124b5d>,</span><span style="color:#F07178;" data-v-db124b5d> </span><span style="color:#A6ACCD;" data-v-db124b5d>LinkTarget</span><span style="color:#89DDFF;" data-v-db124b5d>,</span><span style="color:#F07178;" data-v-db124b5d> </span><span style="color:#A6ACCD;" data-v-db124b5d>LinkState</span><span style="color:#F07178;" data-v-db124b5d> </span><span style="color:#89DDFF;" data-v-db124b5d>}</span><span style="color:#A6ACCD;" data-v-db124b5d> </span><span style="color:#89DDFF;" data-v-db124b5d>from</span><span style="color:#A6ACCD;" data-v-db124b5d> </span><span style="color:#89DDFF;" data-v-db124b5d>&#39;</span><span style="color:#C3E88D;" data-v-db124b5d>fighting-design</span><span style="color:#89DDFF;" data-v-db124b5d>&#39;</span></span>
<span class="line" data-v-db124b5d></span></code></pre></div><h3 id="linktarget" tabindex="-1" data-v-db124b5d>LinkTarget <a class="header-anchor" href="#linktarget" aria-hidden="true" data-v-db124b5d>#</a></h3><div class="language-ts" data-v-db124b5d><button title="Copy Code" class="copy" data-v-db124b5d></button><span class="lang" data-v-db124b5d>ts</span><pre class="shiki" data-v-db124b5d><code data-v-db124b5d><span class="line" data-v-db124b5d><span style="color:#C792EA;" data-v-db124b5d>type</span><span style="color:#A6ACCD;" data-v-db124b5d> </span><span style="color:#FFCB6B;" data-v-db124b5d>LinkTarget</span><span style="color:#A6ACCD;" data-v-db124b5d> </span><span style="color:#89DDFF;" data-v-db124b5d>=</span><span style="color:#A6ACCD;" data-v-db124b5d> </span><span style="color:#89DDFF;" data-v-db124b5d>&#39;</span><span style="color:#C3E88D;" data-v-db124b5d>_self</span><span style="color:#89DDFF;" data-v-db124b5d>&#39;</span><span style="color:#A6ACCD;" data-v-db124b5d> </span><span style="color:#89DDFF;" data-v-db124b5d>|</span><span style="color:#A6ACCD;" data-v-db124b5d> </span><span style="color:#89DDFF;" data-v-db124b5d>&#39;</span><span style="color:#C3E88D;" data-v-db124b5d>_blank</span><span style="color:#89DDFF;" data-v-db124b5d>&#39;</span><span style="color:#A6ACCD;" data-v-db124b5d> </span><span style="color:#89DDFF;" data-v-db124b5d>|</span><span style="color:#A6ACCD;" data-v-db124b5d> </span><span style="color:#89DDFF;" data-v-db124b5d>&#39;</span><span style="color:#C3E88D;" data-v-db124b5d>_parent</span><span style="color:#89DDFF;" data-v-db124b5d>&#39;</span><span style="color:#A6ACCD;" data-v-db124b5d> </span><span style="color:#89DDFF;" data-v-db124b5d>|</span><span style="color:#A6ACCD;" data-v-db124b5d> </span><span style="color:#89DDFF;" data-v-db124b5d>&#39;</span><span style="color:#C3E88D;" data-v-db124b5d>_top</span><span style="color:#89DDFF;" data-v-db124b5d>&#39;</span></span>
<span class="line" data-v-db124b5d></span></code></pre></div><h3 id="linkstate" tabindex="-1" data-v-db124b5d>LinkState <a class="header-anchor" href="#linkstate" aria-hidden="true" data-v-db124b5d>#</a></h3><div class="language-ts" data-v-db124b5d><button title="Copy Code" class="copy" data-v-db124b5d></button><span class="lang" data-v-db124b5d>ts</span><pre class="shiki" data-v-db124b5d><code data-v-db124b5d><span class="line" data-v-db124b5d><span style="color:#C792EA;" data-v-db124b5d>type</span><span style="color:#A6ACCD;" data-v-db124b5d> </span><span style="color:#FFCB6B;" data-v-db124b5d>LinkState</span><span style="color:#A6ACCD;" data-v-db124b5d> </span><span style="color:#89DDFF;" data-v-db124b5d>=</span><span style="color:#A6ACCD;" data-v-db124b5d> </span><span style="color:#89DDFF;" data-v-db124b5d>&#39;</span><span style="color:#C3E88D;" data-v-db124b5d>line</span><span style="color:#89DDFF;" data-v-db124b5d>&#39;</span><span style="color:#A6ACCD;" data-v-db124b5d> </span><span style="color:#89DDFF;" data-v-db124b5d>|</span><span style="color:#A6ACCD;" data-v-db124b5d> </span><span style="color:#89DDFF;" data-v-db124b5d>&#39;</span><span style="color:#C3E88D;" data-v-db124b5d>bag</span><span style="color:#89DDFF;" data-v-db124b5d>&#39;</span></span>
<span class="line" data-v-db124b5d></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-db124b5d>Contributors <a class="header-anchor" href="#contributors" aria-hidden="true" data-v-db124b5d>#</a></h2>`,12),V={href:"https://github.com/Tyh2001",target:"_blank"};function N(n,P,B,$,H,M){const o=r("f-link"),e=r("vp-demo"),p=r("f-avatar");return F(),b("div",null,[h,t(e,{source:""},{source:l(()=>[t(o,{href:"",type:"default"},{default:l(()=>[s("默认链接")]),_:1}),t(o,{href:"",type:"primary"},{default:l(()=>[s("主要链接")]),_:1}),t(o,{href:"",type:"success"},{default:l(()=>[s("成功链接")]),_:1}),t(o,{href:"",type:"danger"},{default:l(()=>[s("危险链接")]),_:1}),t(o,{href:"",type:"warning"},{default:l(()=>[s("警告链接")]),_:1})]),default:l(()=>[C]),_:1}),f,A,t(e,{source:""},{source:l(()=>[t(o,{href:"",size:"12px",type:"default"},{default:l(()=>[s("默认链接")]),_:1}),t(o,{href:"",size:"12px",type:"primary"},{default:l(()=>[s("主要链接")]),_:1}),t(o,{href:"",size:"16px",type:"success"},{default:l(()=>[s("成功链接")]),_:1}),t(o,{href:"",size:20,type:"danger"},{default:l(()=>[s("危险链接")]),_:1}),t(o,{href:"",size:24,type:"warning"},{default:l(()=>[s("警告链接")]),_:1})]),default:l(()=>[u]),_:1}),_,t(e,{source:""},{source:l(()=>[t(o,{href:"",state:"line",type:"primary"},{default:l(()=>[s("带有下划线")]),_:1}),t(o,{href:"",state:"bag",type:"danger"},{default:l(()=>[s("hover 一下试试")]),_:1})]),default:l(()=>[g]),_:1}),k,E,t(e,{source:""},{source:l(()=>[t(o,{href:"",color:"#58c8de"},{default:l(()=>[s("看我颜色好看吗")]),_:1}),t(o,{href:"",color:"#e372ff"},{default:l(()=>[s("链接")]),_:1}),t(o,{href:"",color:"#e49b33"},{default:l(()=>[s("还有我")]),_:1})]),default:l(()=>[m]),_:1}),T,x,t(e,{source:""},{source:l(()=>[t(o,{disabled:"",href:"",type:"primary"},{default:l(()=>[s("不许点我")]),_:1}),t(o,{disabled:"",href:"",state:"line",type:"success"},{default:l(()=>[s("不许点我")]),_:1}),t(o,{disabled:"",href:"",state:"bag",type:"warning"},{default:l(()=>[s("不许点我")]),_:1})]),default:l(()=>[S]),_:1}),I,L,t(e,{source:""},{source:l(()=>[t(o,{href:"","no-link":""},{default:l(()=>[s("拿我当按钮使用")]),_:1})]),default:l(()=>[z]),_:1}),w,a("a",V,[t(p,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}const O=D(v,[["render",N],["__scopeId","data-v-db124b5d"]]);export{J as __pageData,O as default};
