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
  } from 'https://unpkg.com/vue@3.0.0-beta.12/dist/vue.esm-browser.js'

  const otherComponent = {
    render() {
      return openBlock(), createBlock('h1', null, 'Other Component')
    },
  }
  const App = {
    render() {
      return openBlock(), createVNode(otherComponent)
    },
  }
  createApp(App).mount('#app')
</script>
```
