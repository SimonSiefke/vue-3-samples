# 10-ssr

This example shows how a component with ssr and hydration works. `<div id="app">` must have the attribute `data-server-rendered="true"` and the ssr content must match exactly the content of the virtual dom.

```html
<meta charset="utf-8" />
<div id="app" data-server-rendered="true"><h1>hello world</h1></div>
<script type="module">
  import {
    openBlock,
    createBlock,
    createSSRApp,
  } from 'https://unpkg.com/vue@3.0.0-beta.12/dist/vue.esm-browser.js'

  const App = {
    render() {
      return openBlock(), createBlock('h1', null, 'hello world')
    },
  }
  createSSRApp(App).mount('#app')
</script>
```
