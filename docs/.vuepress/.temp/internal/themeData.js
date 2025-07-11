export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"navbar\":[{\"text\":\"知识库\",\"link\":\"/subassembly/directives/limitNumber\"}],\"sidebarDepth\":3,\"contributors\":true,\"lastUpdated\":true,\"docsDir\":\"docs\",\"docsBranch\":\"master\",\"docsRepo\":\"https://github.com/whale-ye/docs.git/subassembly/directives/limitNumber\",\"sidebar\":{\"/subassembly/\":[{\"title\":\"自定义指令\",\"text\":\"自定义指令\",\"prefix\":\"directives/\",\"children\":[{\"text\":\"限制数字输入\",\"link\":\"limitNumber.md\"}]},{\"title\":\"算法题\",\"text\":\"算法题\",\"prefix\":\"algorithm/\",\"children\":[{\"title\":\"排序\",\"text\":\"排序\",\"prefix\":\"sort/\",\"children\":[{\"text\":\"冒泡排序1\",\"link\":\"bubbleSort.md\"},{\"text\":\"快速排序\",\"link\":\"quikSort.md\"}]},{\"title\":\"矩阵\",\"text\":\"矩阵\",\"prefix\":\"ff/\",\"children\":[{\"text\":\"矩阵1\",\"link\":\"index.md\"}]}]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
