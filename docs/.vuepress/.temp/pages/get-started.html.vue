<template><div><h1 id="知识库" tabindex="-1"><a class="header-anchor" href="#知识库"><span>知识库</span></a></h1>
<p>这是一个普通页面，包含了 VuePress 的基础知识。</p>
<h2 id="页面" tabindex="-1"><a class="header-anchor" href="#页面"><span>页面</span></a></h2>
<p>你可以在 vuepress 目录中添加 markdown 文件，每个 markdown 文件都会被转换为网站中的一个页面。</p>
<p>查看[路由][]了解更多详情。</p>
<h2 id="内容" tabindex="-1"><a class="header-anchor" href="#内容"><span>内容</span></a></h2>
<p>每个 markdown 文件<a href="https://vuejs.press/guide/page.html#content" target="_blank" rel="noopener noreferrer">都会被渲染成 HTML，然后转换为 Vue 单文件组件</a>。</p>
<p>VuePress 支持基本的 markdown 语法和<a href="https://vuejs.press/guide/markdown.html#syntax-extensions" target="_blank" rel="noopener noreferrer">一些扩展</a>，你也可以在其中<a href="https://vuejs.press/guide/markdown.html#using-vue-in-markdown" target="_blank" rel="noopener noreferrer">使用 Vue 的特性</a>。</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>VuePress 使用 <code v-pre>.vuepress/config.js</code>（或 .ts）文件作为<a href="https://vuejs.press/guide/configuration.html#client-config-file" target="_blank" rel="noopener noreferrer">站点配置</a>，你可以用它来配置你的站点。</p>
<p>对于<a href="https://vuejs.press/guide/configuration.html#client-config-file" target="_blank" rel="noopener noreferrer">客户端配置</a>，你可以创建 <code v-pre>.vuepress/client.js</code>（或 .ts）。</p>
<p>同时，你也可以使用<a href="https://vuejs.press/guide/page.html#frontmatter" target="_blank" rel="noopener noreferrer">前置元数据</a>为每个页面添加配置。</p>
<h2 id="布局和自定义" tabindex="-1"><a class="header-anchor" href="#布局和自定义"><span>布局和自定义</span></a></h2>
<p>以下是控制 <code v-pre>@vuepress/theme-default</code> 布局的常见配置：</p>
<ul>
<li><a href="https://vuejs.press/reference/default-theme/config.html#navbar" target="_blank" rel="noopener noreferrer">导航栏</a></li>
<li><a href="https://vuejs.press/reference/default-theme/config.html#sidebar" target="_blank" rel="noopener noreferrer">侧边栏</a></li>
</ul>
<p>查看<a href="https://vuejs.press/reference/default-theme/" target="_blank" rel="noopener noreferrer">默认主题文档</a>获取完整参考。</p>
<p>你可以通过 <code v-pre>.vuepress/styles/index.scss</code> 文件<a href="https://vuejs.press/reference/default-theme/styles.html#style-file" target="_blank" rel="noopener noreferrer">添加额外的样式</a>。</p>
</div></template>


