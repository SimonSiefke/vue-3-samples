# 11-ssr-fragment

This example shows how a component with ssr and fragments works. Vue wraps fragments with a html comment that looks like an array `<!--[-->` `<!--]-->` to identify fragments during hydration.

```html
<meta charset="utf-8" />
<div id="app" data-server-rendered="true"><!--[--><h1>A</h1><h1>B</h1><!--]--></div>

<script type="module">
  import {
    openBlock,
    createBlock,
    createSSRApp,
    createVNode,
    Fragment,
  } from 'https://unpkg.com/vue@3.0.0-beta.12/dist/vue.esm-browser.js'

  const _hoisted_1 = createVNode('h1', null, 'A')
  const _hoisted_2 = createVNode('h1', null, 'B')

  const App = {
    render() {
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

  createSSRApp(App).mount('#app')
</script>
```
