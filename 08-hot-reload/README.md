# 08-hot-reload

This example shows how a component with hot-reload works.

```html
<meta charset="utf-8" />
<div id="app"></div>
<script type="module">
  import { createApp, openBlock, createBlock } from './dist/vue.js'

  const __hmrId = 'component'
  const component = {
    __hmrId,
    setup() {
      return {
        count: 0,
      }
    },
    render() {
      const _ctx = this
      return openBlock(), createBlock('h1', null, _ctx.count, 1 /* TEXT */)
    },
  }
  const api = __VUE_HMR_RUNTIME__
  api.createRecord(__hmrId, component)
  createApp().mount(component, '#app')
  setTimeout(() => {
    const newComponent = {
      ...component,
      setup() {
        return {
          count: 42,
        }
      },
    }
    api.reload(__hmrId, newComponent)
  }, 1500)
</script>
```
