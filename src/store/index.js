import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    componentData: [] //画布组件数据
  },
  mutations: {
    addComponent(state, {
      component
    }) {
      state.componentData.push(component);
    }
  },
});