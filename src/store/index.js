import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    componentData: [], //画布组件数据
    curComponent: null, //当前组件实例
    curComponentIndex: null, //当前组件索引值
  },
  mutations: {
    addComponent(state, {
      component
    }) {
      state.componentData.push(component);
    },
    setCurComponent(state, {
      component,
      index
    }) {
      state.curComponent = component;
      state.curComponentIndex = index;
    }
  },
});