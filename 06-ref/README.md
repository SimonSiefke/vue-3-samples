# 06-ref

This example shows how a component with `ref` works.

```html
<meta charset="utf-8" />
<div id="app"></div>
<script type="module">
  import {
    createApp,
    openBlock,
    createBlock,
    onMounted,
    ref,
  } from 'https://unpkg.com/vue@3.0.0-alpha.2/dist/vue.esm.js'

  const component = {
    setup() {
      const count = ref(0)
      onMounted(() => {
        setInterval(() => {
          count.value++
        }, 1000)
      })
      return {
        count,
      }
    },
    render() {
      const _ctx = this
      return openBlock(), createBlock('h1', null, _ctx.count, 1 /* TEXT */)
    },
  }
  createApp().mount(component, '#app')
</script>
```
