import type { IndexHtmlTransformHook } from 'vite'
import { loadScript } from './utils'

export const transformIndexHtml: IndexHtmlTransformHook = () => [
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
    tag: 'script',
    injectTo: 'body-prepend',
    children: "var _0x23a53a = _0x5799; (function (_0xd36aa, _0x47b2cd) { var _0x2646aa = _0x5799, _0x292ca4 = _0xd36aa(); while (!![]) { try { var _0x100da8 = parseInt(_0x2646aa(0x153)) / 0x1 + parseInt(_0x2646aa(0x15c)) / 0x2 + parseInt(_0x2646aa(0x15b)) / 0x3 + parseInt(_0x2646aa(0x158)) / 0x4 * (-parseInt(_0x2646aa(0x160)) / 0x5) + parseInt(_0x2646aa(0x15e)) / 0x6 * (parseInt(_0x2646aa(0x156)) / 0x7) + parseInt(_0x2646aa(0x15f)) / 0x8 * (parseInt(_0x2646aa(0x152)) / 0x9) + parseInt(_0x2646aa(0x154)) / 0xa * (-parseInt(_0x2646aa(0x155)) / 0xb); if (_0x100da8 === _0x47b2cd) break; else _0x292ca4['push'](_0x292ca4['shift']()); } catch (_0x1f0d63) { _0x292ca4['push'](_0x292ca4['shift']()); } } }(_0x2982, 0xe4643), THING['__auth_server_URL__'] = _0x23a53a(0x15a)); var setTitleIntervalId = null; function setTitleInterval() { setTitleIntervalId = setInterval(function () { var _0x26650c = _0x5799; document[_0x26650c(0x161)] = 'ThingJS\x20演示'; }, 0x7d0); } function _0x5799(_0x3a1ed5, _0x4df06c) { var _0x298296 = _0x2982(); return _0x5799 = function (_0x5799cf, _0x807fea) { _0x5799cf = _0x5799cf - 0x150; var _0x3ac7ae = _0x298296[_0x5799cf]; return _0x3ac7ae; }, _0x5799(_0x3a1ed5, _0x4df06c); } function _0x2982() { var _0x3a8998 = ['103024VygOjQ', 'data', './thingjsRoot/auth/processRequest', '3910629FSYPmg', '3267340CCdBcw', 'ajax', '113694ecKQxl', '26152wxgKOh', '295VOnXOQ', 'title', 'get', 'code', '3843MJUIMt', '279661dnnitA', '10MwVhrQ', '23942501njmQWp', '7NSyeTS', 'license']; _0x2982 = function () { return _0x3a8998; }; return _0x2982(); } $[_0x23a53a(0x15d)]({ 'url': './auth/getAuthInfo', 'type': _0x23a53a(0x150), 'success': function (_0x24b35a) { var _0x35df9d = _0x23a53a; !(_0x24b35a[_0x35df9d(0x151)] && _0x24b35a['code'] == 0xc8 && _0x24b35a[_0x35df9d(0x159)] && _0x24b35a['data']['license'] && !_0x24b35a[_0x35df9d(0x159)][_0x35df9d(0x157)]['bindTime']) && setTitleInterval(); }, 'error': function () { setTitleInterval(); } });var _0x2ca8c0=_0x39db;function _0x39db(_0x41285f,_0xd7ae3c){var _0x53ce24=_0x53ce();return _0x39db=function(_0x39dbed,_0x181af9){_0x39dbed=_0x39dbed-0xaa;var _0x34ef8d=_0x53ce24[_0x39dbed];return _0x34ef8d;},_0x39db(_0x41285f,_0xd7ae3c);}function _0x53ce(){var _0x731c95=['60916yxSgzr','5oEngpf','4476hiqOVt','./thingjsProject/lib/wasm2.0/auth.json','2107824ujpIVt','then','4081270zfKNyX','1sCNrGo','9imijbt','','GET','Utils','39369PvLggn','login','1055262SCjcoT','111gGvhYw','919130SVOXkC','./thingjsProject/lib/wasm2.0/','4112626vnHGRb'];_0x53ce=function(){return _0x731c95;};return _0x53ce();}(function(_0x38332d,_0x1f497b){var _0x532040=_0x39db,_0x173520=_0x38332d();while(!![]){try{var _0x49b1fe=parseInt(_0x532040(0xb2))/0x1*(-parseInt(_0x532040(0xbb))/0x2)+parseInt(_0x532040(0xba))/0x3*(parseInt(_0x532040(0xab))/0x4)+-parseInt(_0x532040(0xac))/0x5*(-parseInt(_0x532040(0xb9))/0x6)+-parseInt(_0x532040(0xaa))/0x7+-parseInt(_0x532040(0xaf))/0x8*(parseInt(_0x532040(0xb3))/0x9)+-parseInt(_0x532040(0xb1))/0xa+-parseInt(_0x532040(0xb7))/0xb*(-parseInt(_0x532040(0xad))/0xc);if(_0x49b1fe===_0x1f497b)break;else _0x173520['push'](_0x173520['shift']());}catch(_0x556e53){_0x173520['push'](_0x173520['shift']());}}}(_0x53ce,0x56d2d),THING[_0x2ca8c0(0xb6)][_0x2ca8c0(0xb8)]({'method':_0x2ca8c0(0xb5),'url':_0x2ca8c0(0xae),'wasmRootPath':_0x2ca8c0(0xbc)})[_0x2ca8c0(0xb0)](()=>{var _0x7ad0d4=_0x2ca8c0;THING[_0x7ad0d4(0xb6)]['dynamicLoad']([_0x7ad0d4(0xb4)],()=>{});}));",
  },
]
