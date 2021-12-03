<template>
  <div class="editor">
    <Shape
      v-for="(item, index) in componentData"
      :key="item.id"
      :index="index"
      :style="getShapeStyle(item.style)"
      :element="item"
      :defaultStyle="item.style"
    >
      <component
        :is="item.component"
        :id="'component' + item.id"
        :element="item"
        :propValue="item.propValue"
        :style="getComponentStyle(item.style)"
      ></component>
    </Shape>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { getStyle } from "../../utils/style";
import Shape from "./Shape.vue";

export default {
  name: "editor",
  components: { Shape },
  computed: mapState(["componentData"]),
  methods: {
    getComponentStyle(style) {
      return getStyle(style, ["top", "left", "width", "height", "rotate"]);
    },
    getShapeStyle(style) {
      const result = {};
      ["width", "height", "top", "left", "rotate"].forEach((attr) => {
        if (attr != "rotate") {
          result[attr] = style[attr] + "px";
        } else {
          result.transform = "rotate(" + style[attr] + "deg)";
        }
      });

      return result;
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