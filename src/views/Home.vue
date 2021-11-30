<template>
  <div class="wrapper">
    <Toolbar></Toolbar>
    <main>
      <section class="left">左侧列表</section>
      <section class="center">中间画布</section>
      <section class="right">右侧画布</section>
    </main>
  </div>
</template>
<script>
import Toolbar from "../components/Toolbar.vue";
export default {
  name: "Home",
  components: { Toolbar },
};
</script>
<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  
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