import comp from "/Users/zhangyunxia/Downloads/zyx-csdn/docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"actions\":[{\"text\":\"开始使用\",\"link\":\"subassembly/directives/limitNumber.md\",\"type\":\"primary\"}]},\"headers\":[],\"git\":{\"updatedTime\":1750831917000,\"contributors\":[{\"name\":\"zhangyunxia\",\"username\":\"zhangyunxia\",\"email\":\"yyxkay@126.com\",\"commits\":4,\"url\":\"https://github.com/zhangyunxia\"}],\"changelog\":[{\"hash\":\"595a56d0572dd43d80ebec2e14cdf6085a522b6b\",\"time\":1750831917000,\"email\":\"yyxkay@126.com\",\"author\":\"zhangyunxia\",\"message\":\"feat: 根目录更改\"},{\"hash\":\"8065666bad3333628ddf6c8f649ccc58a12e9b6e\",\"time\":1750830588000,\"email\":\"yyxkay@126.com\",\"author\":\"zhangyunxia\",\"message\":\"feat: 更改构建根目录\"},{\"hash\":\"2e1c90910a5fb9ad5f1a40393a185362a5dfeade\",\"time\":1750828548000,\"email\":\"yyxkay@126.com\",\"author\":\"zhangyunxia\",\"message\":\"feat: 更新readme文档\"},{\"hash\":\"d79e5af8adeb9c48ed3ea41aa92251c2fdd21361\",\"time\":1750820132000,\"email\":\"yyxkay@126.com\",\"author\":\"zhangyunxia\",\"message\":\"初始化\"}]},\"filePathRelative\":\"README.md\"}")
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
