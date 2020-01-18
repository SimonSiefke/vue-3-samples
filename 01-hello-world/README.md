# 01-hello-world

This example shows how a simple component works.

```html
<meta charset="utf-8" />
<div id="app"></div>
<script type="module">
  import {
    createApp,
    openBlock,
    createBlock,
  } from 'https://unpkg.com/vue@3.0.0-alpha.2/dist/vue.esm.js'

  const component = {
    render() {
      return openBlock(), createBlock('h1', null, 'hello world')
    },
  }
  createApp().mount(component, '#app')
</script>
```
