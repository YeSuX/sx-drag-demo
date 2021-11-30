<template>
  <div class="wrapper">
    <Toolbar />
    <main>
      <section class="left">
        <ComponentList />
      </section>
      <section class="center">中间画布</section>
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

export default {
  name: "Home",
  components: { Toolbar, ComponentList },
  data() {
    return {
      activeName: "attr",
    };
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