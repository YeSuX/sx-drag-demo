//注册自定义组件

import Vue from 'vue'

const components = [
  'SxButton'
]

components.forEach(key => {
  Vue.component(key, () => import(`../custom-components/${key}`))
})