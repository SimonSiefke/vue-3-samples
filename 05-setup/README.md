# 05-setup

This example shows how a component with `setup` works.

```html
<meta charset="utf-8" />
<div id="app"></div>
<script type="module">
  import {
    createApp,
    openBlock,
    createBlock,
  } from 'https://unpkg.com/vue@3.0.0-beta.12/dist/vue.esm-browser.js'

  const App = {
    setup() {
      return {
        message: 'hello from setup',
      }
    },
    render() {
      const _ctx = this
      return openBlock(), createBlock('h1', null, _ctx.message, 1 /* TEXT */)
    },
  }
  createApp(App).mount('#app')
</script>
```
