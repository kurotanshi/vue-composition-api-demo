<template>
  <div>
    <p>{{ title }}</p>
    <div>mouse position: (x,y) = ({{ x }}, {{ y }})</div>
    <div>mouse click position: (x,y) = ({{ x2 }}, {{ y2 }})</div>
  </div>
</template>

<script>
import { mousePositionMixin, mouseClickPositionMixin } from "../mixins/Mouse";

export default {
  props: {
    title: String
  },
  mixins: [mousePositionMixin, mouseClickPositionMixin]
};
</script>

