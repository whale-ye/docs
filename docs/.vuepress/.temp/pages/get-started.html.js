import comp from "/Users/zhangyunxia/Downloads/zyx-csdn/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"知识库\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"页面\",\"slug\":\"页面\",\"link\":\"#页面\",\"children\":[]},{\"level\":2,\"title\":\"内容\",\"slug\":\"内容\",\"link\":\"#内容\",\"children\":[]},{\"level\":2,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[]},{\"level\":2,\"title\":\"布局和自定义\",\"slug\":\"布局和自定义\",\"link\":\"#布局和自定义\",\"children\":[]}],\"git\":{\"updatedTime\":1750820132000,\"contributors\":[{\"name\":\"zhangyunxia\",\"username\":\"zhangyunxia\",\"email\":\"yyxkay@126.com\",\"commits\":1,\"url\":\"https://github.com/zhangyunxia\"}],\"changelog\":[{\"hash\":\"d79e5af8adeb9c48ed3ea41aa92251c2fdd21361\",\"time\":1750820132000,\"email\":\"yyxkay@126.com\",\"author\":\"zhangyunxia\",\"message\":\"初始化\"}]},\"filePathRelative\":\"get-started.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
