import type { IndexHtmlTransformResult } from 'vite'
import { loadScript } from './utils'

export const transformIndexHtml = (authUrl: string): IndexHtmlTransformResult => [
  loadScript('./thingjsProject/lib/thing.min.js'),
  loadScript('./thingjsProject/static/release/thing.widget.min.js'),
  loadScript('./thingjsProject/dist/cb_loader.js'),
  loadScript('./thingjsProject/lib/loader.js'),
  loadScript('./thingjsProject/lib/jquery-3.2.1.js'),
  loadScript('./thingjsProject/lib/wasm2.0/thing.wasm.loader.umd.js'),
  loadScript('./thingjsProject/lib/wasm2.0/thing.wasm.loader.tool.js'),
  loadScript('./thingjsProject/lib/wasm2.0/thing.wasm.js'),
  {
    tag: 'style',
    injectTo: 'head-prepend',
    children: 'html,body{height:100%;overflow:hidden}#content{width:100%;height:100%;display:flex;align-items:stretch;flex-wrap:wrap}#div3d{z-index:2;flex:auto}#div2d{position:absolute;top:0;left:0;width:100%;height:100%}#div2d>div{z-index:3}#content .ThingJS-Banner-top{width:100%;height:50px;z-index:10002}#content .ThingJS-Banner-left{width:60px;z-index:10001}#content .ThingJS-Banner-top+.ThingJS-banner-left{height:calc(100% - 50px)}#content.ThingJS-top #div3d{width:100%;height:calc(100% - 50px)}#content.ThingJS-top #div2d{top:50px;height:calc(100% - 50px)}#content.ThingJS-left #div2d{left:60px;width:calc(100% - 60px)}#content.ThingJS-left #div3d{width:calc(100% - 60px)}#div3d #dataAttribution{display:none}',
  },
  {
    tag: 'div',
    attrs: {
      id: 'content',
    },
    injectTo: 'body',
    children: "<div id='ThingJS-banner-top'></div><div id='ThingJS-banner-left'></div><div id='div3d'></div><div id='div2d' class='div2d'></div>",
  },
  {
    tag: 'div',
    attrs: {
      id: 'ThingJS-DevUI',
      style: 'position:fixed;z-index:99999;bottom:32px;right:32px;',
    },
    injectTo: 'body',
    children: [],
  },
  {
    tag: 'script',
    injectTo: 'body-prepend',
    children: `THING.__auth_server_URL__ = '${authUrl}'`,
  },
  // {
  //   tag: 'script',
  //   injectTo: 'body',
  //   attrs: {
  //     type: 'module',
  //     src: '/node_modules/vite-plugin-thingjs/src/devUI/inject.tsx',
  //   },
  // },
]
