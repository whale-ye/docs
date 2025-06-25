export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/zhangyunxia/Downloads/zyx-csdn/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/zhangyunxia/Downloads/zyx-csdn/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"知识库"} }],
  ["/subassembly/directives/limitNumber.html", { loader: () => import(/* webpackChunkName: "subassembly_directives_limitNumber.html" */"/Users/zhangyunxia/Downloads/zyx-csdn/vuepress-starter/docs/.vuepress/.temp/pages/subassembly/directives/limitNumber.html.js"), meta: {"title":"限制数字的输入"} }],
  ["/subassembly/algorithm/sort/bubbleSort.html", { loader: () => import(/* webpackChunkName: "subassembly_algorithm_sort_bubbleSort.html" */"/Users/zhangyunxia/Downloads/zyx-csdn/vuepress-starter/docs/.vuepress/.temp/pages/subassembly/algorithm/sort/bubbleSort.html.js"), meta: {"title":""} }],
  ["/subassembly/algorithm/sort/quikSort.html", { loader: () => import(/* webpackChunkName: "subassembly_algorithm_sort_quikSort.html" */"/Users/zhangyunxia/Downloads/zyx-csdn/vuepress-starter/docs/.vuepress/.temp/pages/subassembly/algorithm/sort/quikSort.html.js"), meta: {"title":""} }],
  ["/subassembly/algorithm/sort/ss.html", { loader: () => import(/* webpackChunkName: "subassembly_algorithm_sort_ss.html" */"/Users/zhangyunxia/Downloads/zyx-csdn/vuepress-starter/docs/.vuepress/.temp/pages/subassembly/algorithm/sort/ss.html.js"), meta: {"title":""} }],
  ["/subassembly/algorithm/ff/", { loader: () => import(/* webpackChunkName: "subassembly_algorithm_ff_index.html" */"/Users/zhangyunxia/Downloads/zyx-csdn/vuepress-starter/docs/.vuepress/.temp/pages/subassembly/algorithm/ff/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/zhangyunxia/Downloads/zyx-csdn/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
