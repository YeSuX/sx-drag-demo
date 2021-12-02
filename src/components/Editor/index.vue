<template>
  <div class="editor">
    <div v-for="(item, index) in componentData" :key="item.id" :index="index">
      <component
        :is="item.component"
        :id="'component' + item.id"
        :element="item"
        :propValue="item.propValue"
        :style="getComponentStyle(item.style)"
      ></component>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { getStyle } from "../../utils/style";

export default {
  name: "editor",
  computed: mapState(["componentData"]),
  methods: {
    getComponentStyle(style) {
      return getStyle(style, ["top", "left", "width", "height", "rotate"]);
    },
  },
};
</script>
<style lang="scss" scoped>
.editor {
  position: relative;
  background: #fff;
  margin: auto;
  width: 1200px;
  height: 740px;
}
</style>