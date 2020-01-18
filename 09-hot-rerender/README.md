# 09-hot-rerender

This example shows how a component with hot-rerender works.

```html
<meta charset="utf-8" />
<div id="app"></div>
<script type="module">
  import { createApp, openBlock, createBlock } from './dist/vue.js'

  const __hmrId = 'component'
  const component = {
    __hmrId,
    render() {
      return openBlock(), createBlock('h1', null, 'hello world')
    },
  }
  const api = __VUE_HMR_RUNTIME__
  api.createRecord(__hmrId, component)
  createApp().mount(component, '#app')
  setTimeout(() => {
    const newRender = function() {
      const _ctx = this
      return (
        openBlock(), createBlock('h1', null, 'The render method has changed')
      )
    }
    api.rerender(__hmrId, newRender)
  }, 1500)
</script>
```
