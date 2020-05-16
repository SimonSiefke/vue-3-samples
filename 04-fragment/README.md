# 04-fragment

This example shows how a component with fragments works.

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
  } from 'https://unpkg.com/vue@3.0.0-beta.12/dist/vue.esm-browser.js'

  const _hoisted_1 = createVNode('h1', null, 'Hello Vue 3!')
  const _hoisted_2 = createVNode('h1', null, 'This is a Fragment.')
  const App = {
    render() {
      const _ctx = this
      return (
        openBlock(),
        createBlock(
          Fragment,
          null,
          [_hoisted_1, _hoisted_2],
          64 /* STABLE_FRAGMENT */,
        )
      )
    },
  }
  createApp(App).mount('#app')
</script>
```
