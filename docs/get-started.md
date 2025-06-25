# 知识库

这是一个普通页面，包含了 VuePress 的基础知识。

## 页面

你可以在 vuepress 目录中添加 markdown 文件，每个 markdown 文件都会被转换为网站中的一个页面。

查看[路由][]了解更多详情。

## 内容


每个 markdown 文件[都会被渲染成 HTML，然后转换为 Vue 单文件组件][content]。

VuePress 支持基本的 markdown 语法和[一些扩展][synatex-extensions]，你也可以在其中[使用 Vue 的特性][vue-feature]。

## 配置

VuePress 使用 `.vuepress/config.js`（或 .ts）文件作为[站点配置][config]，你可以用它来配置你的站点。

对于[客户端配置][client-config]，你可以创建 `.vuepress/client.js`（或 .ts）。

同时，你也可以使用[前置元数据][frontmatter]为每个页面添加配置。

## 布局和自定义

以下是控制 `@vuepress/theme-default` 布局的常见配置：

- [导航栏][navbar]
- [侧边栏][sidebar]

查看[默认主题文档][default-theme]获取完整参考。

你可以通过 `.vuepress/styles/index.scss` 文件[添加额外的样式][style]。

[routing]: https://vuejs.press/guide/page.html#routing
[content]: https://vuejs.press/guide/page.html#content
[synatex-extensions]: https://vuejs.press/guide/markdown.html#syntax-extensions
[vue-feature]: https://vuejs.press/guide/markdown.html#using-vue-in-markdown
[config]: https://vuejs.press/guide/configuration.html#client-config-file
[client-config]: https://vuejs.press/guide/configuration.html#client-config-file
[frontmatter]: https://vuejs.press/guide/page.html#frontmatter
[navbar]: https://vuejs.press/reference/default-theme/config.html#navbar
[sidebar]: https://vuejs.press/reference/default-theme/config.html#sidebar
[default-theme]: https://vuejs.press/reference/default-theme/
[style]: https://vuejs.press/reference/default-theme/styles.html#style-file
