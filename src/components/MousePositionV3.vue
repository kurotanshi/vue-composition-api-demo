<template>
  <div>
    <p>{{ title }}</p>
    <div>mouse position: (x,y) = ({{ x }}, {{ y }})</div>
    <div>mouse click position: (x,y) = ({{ x2 }}, {{ y2 }})</div>
  </div>
</template>

<script>
import { useMousePosition, useMouseClickPosition } from "../composition/Mouse";

export default {
  props: {
    title: String
  },
  setup (props, context) {
    const { x, y } = useMousePosition();
    const { x: x2, y: y2 } = useMouseClickPosition();

    return { x, y, x2, y2 };
  }
};
</script>


