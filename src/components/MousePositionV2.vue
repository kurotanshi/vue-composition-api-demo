<template>
  <div>
    <p>{{ title }}</p>
    <div>mouse position: (x,y) = ({{ x }}, {{ y }})</div>
    <div>mouse click position: (x,y) = ({{ x2 }}, {{ y2 }})</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  data: function() {
    return {
      x: 0,
      y: 0,
      x2: 0,
      y2: 0,
    };
  },
  methods: {
    update(e) {
      this.x = e.pageX
      this.y = e.pageY
    },
    update2(e) {
      this.x2 = e.pageX
      this.y2 = e.pageY
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.update);
    window.addEventListener('click', this.update2);
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.update);
    window.removeEventListener('click', this.update2)
  }
};
</script>

