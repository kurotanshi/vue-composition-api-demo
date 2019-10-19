export const mousePositionMixin = {
  data: () => ({
    x: 0,
    y: 0,
  }),
  methods: {
    update(e) {
      this.x = e.pageX
      this.y = e.pageY
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.update)
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.update)
  }
}

export const mouseClickPositionMixin = {
  data: () => ({
    x2: 0,
    y2: 0,
  }),
  methods: {
    update2(e) {
      this.x2 = e.pageX
      this.y2 = e.pageY
    }
  },
  mounted() {
    window.addEventListener('click', this.update2)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.update2)
  }
}
