<template>
  <div class="wrapper">
    <Toolbar />
    <main>
      <section class="left">
        <ComponentList />
      </section>
      <section @drop="handleDrop" @dragover="handleDragOver" class="center">
        <Editor />
      </section>
      <section class="right">
        <el-tabs class="tabs" v-model="activeName">
          <el-tab-pane label="属性" name="attr">
            <p class="placeholder">请选择组件</p>
          </el-tab-pane>
          <el-tab-pane label="动画" name="animation">
            <p class="placeholder">请选择组件</p>
          </el-tab-pane>
          <el-tab-pane label="事件" name="events">
            <p class="placeholder">请选择组件</p>
          </el-tab-pane>
        </el-tabs>
      </section>
    </main>
  </div>
</template>
<script>
import Toolbar from "../components/Toolbar.vue";
import ComponentList from "../components/ComponentList.vue";
//左侧组件数据
import componentList from "../custom-components/component-list";
import Editor from "../components/Editor/index.vue";
import { deepCopy } from "../utils/utils";
import generateID from "@/utils/generateID";

export default {
  name: "Home",
  components: { Toolbar, ComponentList, Editor },
  data() {
    return {
      activeName: "attr",
    };
  },
  methods: {
    handleDragOver(e) {
      //取消该事件
      e.preventDefault();
      //dropEffect 会根据用户的请求的行为进行初始化。
      // copy;
      // 在新位置生成源项的副本;
      // move;
      // 将项目移动到新位置;
      // link;
      // 在新位置建立源项目的链接;
      e.dataTransfer.dropEffect = "copy";
    },
    handleDrop(e) {
      //drop 在e.dataTransfer.dropEffect = "..."后出发
      e.preventDefault();
      //防止调用相同事件的传播。
      e.stopPropagation();
      //拖拽接收数据,index为对应组件的索引值
      const index = e.dataTransfer.getData("index");
      if (index) {
        const component = deepCopy(componentList[index]);
        component.id = generateID();
        this.$store.commit("addComponent", { component });
        console.log("component", component);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  height: 100vh;

  .placeholder {
    text-align: center;
    color: #333;
  }

  main {
    height: calc(100% - 64px);
    position: relative;
    .left {
      position: absolute;
      height: 100%;
      width: 200px;
      left: 0;
      top: 0;
      padding-top: 10px;
    }
    .right {
      position: absolute;
      height: 100%;
      width: 262px;
      right: 0;
      top: 0;
      .tabs {
        margin: 0 10px;
      }
    }
    .center {
      margin-left: 200px;
      margin-right: 262px;
      background: #f5f5f5;
      height: 100%;
      overflow: auto;
      padding: 20px;

      .content {
        width: 100%;
        height: 100%;
        overflow: auto;
      }
    }
  }
}
</style>