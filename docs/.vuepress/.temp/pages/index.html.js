import comp from "/Users/zhangyunxia/Downloads/zyx-csdn/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"actions\":[{\"text\":\"开始使用\",\"link\":\"/subassembly/directives/limitNumber.md\",\"type\":\"primary\"}]},\"headers\":[],\"git\":{\"updatedTime\":1750828548000,\"contributors\":[{\"name\":\"zhangyunxia\",\"username\":\"zhangyunxia\",\"email\":\"yyxkay@126.com\",\"commits\":2,\"url\":\"https://github.com/zhangyunxia\"}],\"changelog\":[{\"hash\":\"2e1c90910a5fb9ad5f1a40393a185362a5dfeade\",\"time\":1750828548000,\"email\":\"yyxkay@126.com\",\"author\":\"zhangyunxia\",\"message\":\"feat: 更新readme文档\"},{\"hash\":\"d79e5af8adeb9c48ed3ea41aa92251c2fdd21361\",\"time\":1750820132000,\"email\":\"yyxkay@126.com\",\"author\":\"zhangyunxia\",\"message\":\"初始化\"}]},\"filePathRelative\":\"README.md\"}")
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
