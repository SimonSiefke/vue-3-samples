# 07-event-handlers

TODO current broken

This example shows how a component with event handlers works.

```html
<meta charset="utf-8" />
<div id="app"></div>
<script type="module">
  import {
    createApp,
    openBlock,
    createBlock,
    createVNode,
    Fragment,
    onMounted,
    ref,
  } from 'https://unpkg.com/vue@3.0.0-alpha.2/dist/vue.esm.js'

  const component = {
    setup() {
      const count = ref(0)
      return {
        count,
      }
    },
    render() {
      const _ctx = this
      const _cache = _ctx.$cache
      return (
        openBlock(),
        createBlock(
          'button',
          { onClick: _cache[1] || (_cache[1] = ($event) => _ctx.count++) },
          _ctx.count,
          1 /* TEXT */,
        )
      )
    },
  }
  createApp().mount(component, '#app')
</script>
```
