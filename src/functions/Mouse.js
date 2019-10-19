import { ref, onMounted, onUnmounted } from '@vue/composition-api';

export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)
  
  const update = e => {
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(() => {
    window.addEventListener('mousemove', update)
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })
  return { x, y }
}

export function useMouseClickPosition() {
  const x = ref(0)
  const y = ref(0)

  const update = e => {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('click', update)
  })
  onUnmounted(() => {
    window.removeEventListener('click', update)
  })
  return { x, y }
}


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
