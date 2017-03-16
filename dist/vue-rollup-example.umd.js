(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('vue')) :
	typeof define === 'function' && define.amd ? define(['vue'], factory) :
	(factory(global.Vue));
}(this, (function (Vue) { 'use strict';

Vue = 'default' in Vue ? Vue['default'] : Vue;

(function(){ if(document){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .header { padding: 10px 0; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();










var AppHeader = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h1',{staticClass:"header"},[_vm._v(_vm._s(_vm.title))])},staticRenderFns: [],
  name: 'AppHeader',
  props: ['title']
};

(function(){ if(document){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .view { color: teal; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();










var AppBody = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"view"},[_vm._v("Some body content!")])},staticRenderFns: [],
  name: 'AppBody'
};

(function(){ if(document){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .footer { margin: 20px 0; padding: 10px 0; border: 1px solid #333; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();












var AppFooter = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer"},[_vm._v("support@support.com")])},staticRenderFns: [],
  name: 'AppFooter'
};

(function(){ if(document){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
















var App = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"layout",attrs:{"id":"app"}},[_c('header',[_c('app-header',{attrs:{"title":"Boilerplate App"}})],1),_c('div',{staticClass:"body"},[_c('main',{staticClass:"content"},[_c('app-body')],1)]),_c('footer',[_c('app-footer')],1)])},staticRenderFns: [],
  name: 'App',
  components: { AppHeader: AppHeader, AppBody: AppBody, AppFooter: AppFooter }
};

var app = new Vue({
  render: function (h) { return h(App); }
});

app.$mount('app');

})));
