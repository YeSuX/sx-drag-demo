<template>
  <div class="shape" @mousedown="handleMouseDownOnShape">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "shape",
  props: {
    element: {
      type: Object,
      require: true,
    },
    index: {
      type: [Number, String],
      require: true,
    },
    defaultStyle: {
      type: Object,
      require: true,
    },
  },
  methods: {
    handleMouseDownOnShape(e) {
      e.stopPropagation();
      //vuex更新当前组件
      this.$store.commit("setCurComponent", {
        component: this.element,
        index: this.index,
      });
      const pos = { ...this.defaultStyle };
      //获取位置
      const startY = e.clientY;
      const startX = e.clientX;
      console.log("pos", pos, startY, startX);
      // 如果直接修改属性，值的类型会变为字符串，所以要转为数值型
    },
  },
};
</script>
<style lang="scss" scoped>
.shape {
  position: absolute;

  &:hover {
    cursor: move;
  }
}
</style>