# 03-multiple-components

This example shows how a components work.

```html
<meta charset="utf-8" />
<div id="app"></div>
<script type="module">
  import {
    createApp,
    openBlock,
    createBlock,
    createVNode,
  } from 'https://unpkg.com/vue@3.0.0-alpha.2/dist/vue.esm.js'

  const otherComponent = {
    render() {
      return openBlock(), createBlock('h1', null, 'hello world')
    },
  }
  const component = {
    render() {
      return openBlock(), createVNode(otherComponent)
    },
  }
  createApp().mount(component, '#app')
</script>
```