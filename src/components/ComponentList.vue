<template>
  <div @dragstart="handleDragStart" class="componentListWrapper">
    <div
      v-for="(item, index) in componentList"
      :key="index"
      class="list"
      draggable
      :data-index="index"
    >
      <span class="iconfont" :class="'icon-' + item.icon"></span>
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>
<script>
import componentList from "../custom-components/component-list";

export default {
  name: "componentList",
  data() {
    return {
      componentList,
    };
  },
  methods: {
    handleDragStart(e) {
      //拖拽传输数据
      e.dataTransfer.setData("index", e.target.dataset.index);
    },
  },
};
</script>
<style lang="scss" scoped>
.componentListWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;

  .list {
    width: 45%;
    border: 1px solid #ddd;
    cursor: grab;
    margin-bottom: 10px;
    text-align: center;
    color: #333;
    padding: 2px 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:active {
      cursor: grabbing;
    }

    .iconfont {
      margin-right: 4px;
      font-size: 20px;
    }

    .icon-wenben,
    .icon-tupian {
      font-size: 18px;
    }
  }
}
</style>