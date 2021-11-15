(function (e) {
  function t(t) {
    for (
      var n, o, i = t[0], c = t[1], m = t[2], d = 0, u = [];
      d < i.length;
      d++
    )
      (o = i[d]),
        Object.prototype.hasOwnProperty.call(l, o) && l[o] && u.push(l[o][0]),
        (l[o] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    s && s(t);
    while (u.length) u.shift()();
    return r.push.apply(r, m || []), a();
  }
  function a() {
    for (var e, t = 0; t < r.length; t++) {
      for (var a = r[t], n = !0, i = 1; i < a.length; i++) {
        var c = a[i];
        0 !== l[c] && (n = !1);
      }
      n && (r.splice(t--, 1), (e = o((o.s = a[0]))));
    }
    return e;
  }
  var n = {},
    l = { 0: 0 },
    r = [];
  function o(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
  }
  (o.m = e),
    (o.c = n),
    (o.d = function (e, t, a) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (o.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (o.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          o.d(
            a,
            n,
            function (t) {
              return e[t];
            }.bind(null, n),
          );
      return a;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default'];
            }
          : function () {
              return e;
            };
      return o.d(t, 'a', t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = 'https://yicoding.github.io/eco-image-picker/refs/heads/undefined/');
  var i = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    c = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var m = 0; m < i.length; m++) t(i[m]);
  var s = c;
  r.push([0, 1]), a();
})({
  '/7QA': function (e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'Foo', function () {
        return r;
      });
    var n = a('q1tI'),
      l = a.n(n),
      r = (e) => {
        var t = e.title;
        return l.a.createElement('h1', null, t);
      };
  },
  0: function (e, t, a) {
    e.exports = a('tB8F');
  },
  '9kvl': function (e, t, a) {
    'use strict';
    var n = a('FfOG');
    a.d(t, 'a', function () {
      return n['b'];
    });
    a('bCY9');
  },
  'F+kV': function (e, t, a) {
    'use strict';
    a.r(t);
    var n = a('q1tI'),
      l = a.n(n),
      r = a('dEAq');
    a('Rsk4');
    t['default'] = (e) => (
      l.a.useEffect(() => {
        var t;
        null !== e &&
          void 0 !== e &&
          null !== (t = e.location) &&
          void 0 !== t &&
          t.hash &&
          r['AnchorLink'].scrollToAnchor(
            decodeURIComponent(e.location.hash.slice(1)),
          );
      }, []),
      l.a.createElement(l.a.Fragment, null)
    );
  },
  FfOG: function (e, t, a) {
    'use strict';
    a.d(t, 'a', function () {
      return o;
    }),
      a.d(t, 'b', function () {
        return r;
      });
    var n = a('YS25'),
      l = { basename: '/' };
    window.routerBase && (l.basename = window.routerBase);
    var r = Object({ NODE_ENV: 'production' }).__IS_SERVER
        ? null
        : Object(n['b'])(l),
      o = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return e || (r = Object(n['b'])(l)), r;
      };
  },
  MWsa: function (e, t, a) {
    'use strict';
    a.r(t);
    var n = a('q1tI'),
      l = a.n(n),
      r = a('dEAq'),
      o = a('Zxc8'),
      i = a('Rsk4'),
      c = l.a.memo(i['default']['Foo-demo'].component);
    t['default'] = (e) => (
      l.a.useEffect(() => {
        var t;
        null !== e &&
          void 0 !== e &&
          null !== (t = e.location) &&
          void 0 !== t &&
          t.hash &&
          r['AnchorLink'].scrollToAnchor(
            decodeURIComponent(e.location.hash.slice(1)),
          );
      }, []),
      l.a.createElement(
        l.a.Fragment,
        null,
        l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h2',
              { id: 'foo' },
              l.a.createElement(
                r['AnchorLink'],
                { to: '#foo', 'aria-hidden': 'true', tabIndex: -1 },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Foo',
            ),
            l.a.createElement('p', null, 'Demo:'),
          ),
          l.a.createElement(
            o['default'],
            i['default']['Foo-demo'].previewerProps,
            l.a.createElement(c, null),
          ),
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'p',
              null,
              'More skills for writing demo: ',
              l.a.createElement(
                r['Link'],
                { to: 'https://d.umijs.org/guide/basic#write-component-demo' },
                'https://d.umijs.org/guide/basic#write-component-demo',
              ),
            ),
          ),
        ),
      )
    );
  },
  Rsk4: function (e, t, a) {
    'use strict';
    a.r(t),
      (t['default'] = {
        'Foo-demo': {
          component: function () {
            var e = a('K+nK'),
              t = e(a('q1tI')),
              n = a('/7QA'),
              l = function () {
                return t['default'].createElement(n.Foo, {
                  title: 'First Demo',
                });
              };
            return t['default'].createElement(l);
          },
          previewerProps: {
            sources: {
              _: {
                tsx: "import React from 'react';\nimport { Foo } from 'eco-image-picker';\n\nexport default () => <Foo title=\"First Demo\" />;",
              },
            },
            dependencies: {
              react: { version: '>= 16.8.0' },
              'eco-image-picker': { version: '1.0.53' },
              'react-dom': { version: '>= 16.8.0' },
            },
            componentName: 'Foo',
            identifier: 'Foo-demo',
          },
        },
      });
  },
  VCHF: function (e, t, a) {
    'use strict';
    a.r(t);
    var n = a('q1tI'),
      l = a.n(n),
      r = a('dEAq'),
      o = a('H1Ra');
    a('Rsk4');
    t['default'] = (e) => (
      l.a.useEffect(() => {
        var t;
        null !== e &&
          void 0 !== e &&
          null !== (t = e.location) &&
          void 0 !== t &&
          t.hash &&
          r['AnchorLink'].scrollToAnchor(
            decodeURIComponent(e.location.hash.slice(1)),
          );
      }, []),
      l.a.createElement(
        l.a.Fragment,
        null,
        l.a.createElement(
          'div',
          { className: 'markdown' },
          l.a.createElement(
            'h1',
            { id: '\u5feb\u901f\u4e0a\u624b' },
            l.a.createElement(
              r['AnchorLink'],
              {
                to: '#\u5feb\u901f\u4e0a\u624b',
                'aria-hidden': 'true',
                tabIndex: -1,
              },
              l.a.createElement('span', { className: 'icon icon-link' }),
            ),
            '\u5feb\u901f\u4e0a\u624b',
          ),
          l.a.createElement(
            'p',
            null,
            l.a.createElement(
              r['Link'],
              { to: 'https://www.npmjs.com/package/eco-image-picker' },
              l.a.createElement('img', {
                src: 'https://img.shields.io/npm/v/eco-image-picker.svg',
                alt: 'npm',
              }),
            ),
            l.a.createElement('img', {
              src: 'https://shopmushi.com/configFile/assets/mit.svg',
              alt: 'GitHub',
            }),
          ),
          l.a.createElement(
            'h2',
            { id: '\u4f7f\u7528' },
            l.a.createElement(
              r['AnchorLink'],
              { to: '#\u4f7f\u7528', 'aria-hidden': 'true', tabIndex: -1 },
              l.a.createElement('span', { className: 'icon icon-link' }),
            ),
            '\u4f7f\u7528',
          ),
          l.a.createElement(
            'h3',
            { id: 'npm-\u6216-yarn-\u5b89\u88c5' },
            l.a.createElement(
              r['AnchorLink'],
              {
                to: '#npm-\u6216-yarn-\u5b89\u88c5',
                'aria-hidden': 'true',
                tabIndex: -1,
              },
              l.a.createElement('span', { className: 'icon icon-link' }),
            ),
            'npm \u6216 yarn \u5b89\u88c5',
          ),
          l.a.createElement(o['a'], {
            code: 'npm install eco-image-picker',
            lang: 'shell',
          }),
          l.a.createElement('br', null),
          l.a.createElement(o['a'], {
            code: 'yarn add eco-image-picker',
            lang: 'shell',
          }),
          l.a.createElement(
            'h3',
            { id: '\u793a\u4f8b' },
            l.a.createElement(
              r['AnchorLink'],
              { to: '#\u793a\u4f8b', 'aria-hidden': 'true', tabIndex: -1 },
              l.a.createElement('span', { className: 'icon icon-link' }),
            ),
            '\u793a\u4f8b',
          ),
          l.a.createElement(o['a'], {
            code: "import React, { useState } from 'react';\nimport { ImagePicker } from 'eco-image-picker';\n\ntype Files = {\n  url: string, // \u56fe\u7247url\n  preview?: string, // \u9884\u89c8\u56fe\n  loading?: boolean, // \u56fe\u7247\u662f\u5426\u52a0\u8f7d\u4e2d\n  errorTip?: string, // \u9519\u8bef\u63d0\u793a\n  name?: string, // \u6587\u4ef6\u8bf4\u660e\n  fileName?: string, // \u6587\u4ef6\u540d\u79f0,\u5305\u542b\u540e\u7f00\n  [index: string]: any,\n};\n\nexport default () => {\n  const [value, setValue] = useState < Array < Files >> [];\n\n  // \u6570\u7ec4\u6539\u53d8\n  const onChange = (arr: Array<Files>) => setValue(arr);\n\n  return <ImagePicker value={value} onChange={onChange} />;\n};",
            lang: 'javascript',
          }),
          l.a.createElement(
            'h2',
            { id: '\u5bf9\u5e94\u7248\u672c' },
            l.a.createElement(
              r['AnchorLink'],
              {
                to: '#\u5bf9\u5e94\u7248\u672c',
                'aria-hidden': 'true',
                tabIndex: -1,
              },
              l.a.createElement('span', { className: 'icon icon-link' }),
            ),
            '\u5bf9\u5e94\u7248\u672c',
          ),
          l.a.createElement(
            'table',
            null,
            l.a.createElement(
              'thead',
              null,
              l.a.createElement(
                'tr',
                null,
                l.a.createElement('th', null, 'eco-image-picker'),
                l.a.createElement('th', null, 'antd-mobile'),
              ),
            ),
            l.a.createElement(
              'tbody',
              null,
              l.a.createElement(
                'tr',
                null,
                l.a.createElement('td', null, 'v1.x'),
                l.a.createElement('td', null, 'v2.x'),
              ),
              l.a.createElement(
                'tr',
                null,
                l.a.createElement('td', null, 'v2.x'),
                l.a.createElement('td', null, '\u4e0d\u4f9d\u8d56'),
              ),
            ),
          ),
          l.a.createElement(
            'h2',
            { id: 'api' },
            l.a.createElement(
              r['AnchorLink'],
              { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
              l.a.createElement('span', { className: 'icon icon-link' }),
            ),
            'API',
          ),
          l.a.createElement(
            'ul',
            null,
            l.a.createElement(
              'li',
              null,
              l.a.createElement('strong', null, '\u4e0a\u4f20'),
              l.a.createElement(
                'ul',
                null,
                l.a.createElement(
                  'li',
                  null,
                  l.a.createElement(
                    r['Link'],
                    { to: '/components/image-picker' },
                    'ImagePicker',
                  ),
                  ' - \u56fe\u7247\u4e0a\u4f20',
                ),
                l.a.createElement(
                  'li',
                  null,
                  l.a.createElement(
                    r['Link'],
                    { to: '/components/file-picker' },
                    'FilePicker',
                  ),
                  ' - \u6587\u4ef6\u4e0a\u4f20',
                ),
              ),
            ),
            l.a.createElement(
              'li',
              null,
              l.a.createElement('strong', null, '\u9884\u89c8'),
              l.a.createElement(
                'ul',
                null,
                l.a.createElement(
                  'li',
                  null,
                  l.a.createElement(
                    r['Link'],
                    { to: '/components/image-view' },
                    'ImageView',
                  ),
                  ' - \u56fe\u7247\u9884\u89c8',
                ),
                l.a.createElement(
                  'li',
                  null,
                  l.a.createElement(
                    r['Link'],
                    { to: '/components/file-view' },
                    'FileView',
                  ),
                  ' - \u6587\u4ef6\u9884\u89c8',
                ),
              ),
            ),
          ),
          l.a.createElement(
            'h2',
            { id: '\u7b2c\u4e09\u65b9\u7ec4\u4ef6' },
            l.a.createElement(
              r['AnchorLink'],
              {
                to: '#\u7b2c\u4e09\u65b9\u7ec4\u4ef6',
                'aria-hidden': 'true',
                tabIndex: -1,
              },
              l.a.createElement('span', { className: 'icon icon-link' }),
            ),
            '\u7b2c\u4e09\u65b9\u7ec4\u4ef6',
          ),
          l.a.createElement(
            'ul',
            null,
            l.a.createElement(
              'li',
              null,
              l.a.createElement(
                r['Link'],
                { to: 'https://www.npmjs.com/package/react-wx-images-viewer' },
                'react-wx-images-viewer',
              ),
              ' - \u79fb\u52a8\u7aef\u56fe\u7247\u6d4f\u89c8 React \u7ec4\u4ef6',
            ),
            l.a.createElement(
              'li',
              null,
              l.a.createElement(
                r['Link'],
                { to: 'https://www.npmjs.com/package/compressorjs' },
                'compressorjs',
              ),
              ' - JavaScript \u56fe\u50cf\u538b\u7f29\u5668',
            ),
          ),
        ),
      )
    );
  },
  abP8: function (e, t, a) {
    'use strict';
    a.r(t);
    var n = a('q1tI'),
      l = a.n(n),
      r = a('dEAq');
    a('Rsk4');
    t['default'] = (e) => (
      l.a.useEffect(() => {
        var t;
        null !== e &&
          void 0 !== e &&
          null !== (t = e.location) &&
          void 0 !== t &&
          t.hash &&
          r['AnchorLink'].scrollToAnchor(
            decodeURIComponent(e.location.hash.slice(1)),
          );
      }, []),
      l.a.createElement(
        l.a.Fragment,
        null,
        l.a.createElement(
          'div',
          { className: 'markdown' },
          l.a.createElement(
            'h1',
            { id: '\u4ece-v1-\u5230-v2' },
            l.a.createElement(
              r['AnchorLink'],
              {
                to: '#\u4ece-v1-\u5230-v2',
                'aria-hidden': 'true',
                tabIndex: -1,
              },
              l.a.createElement('span', { className: 'icon icon-link' }),
            ),
            '\u4ece v1 \u5230 v2',
          ),
          l.a.createElement(
            'h3',
            { id: '\u53bb\u9664-antd-mobile-\u7ec4\u4ef6\u5e93\u4f9d\u8d56' },
            l.a.createElement(
              r['AnchorLink'],
              {
                to: '#\u53bb\u9664-antd-mobile-\u7ec4\u4ef6\u5e93\u4f9d\u8d56',
                'aria-hidden': 'true',
                tabIndex: -1,
              },
              l.a.createElement('span', { className: 'icon icon-link' }),
            ),
            '\u53bb\u9664 antd-mobile \u7ec4\u4ef6\u5e93\u4f9d\u8d56',
          ),
          l.a.createElement(
            'ul',
            null,
            l.a.createElement(
              'li',
              null,
              l.a.createElement('code', null, 'v2'),
              ' \u7248\u672c\u5c06\u4e0d\u518d\u4f9d\u8d56 ',
              l.a.createElement('code', null, 'antd-mobile'),
              '\uff0c\u66f4\u7eaf\u51c0\u7684\u7b2c\u4e09\u65b9\u56fe\u7247/\u6587\u4ef6\u4e0a\u4f20\u7ec4\u4ef6\u3002',
            ),
          ),
          l.a.createElement(
            'h3',
            { id: '\u7ec4\u4ef6\u62c6\u5206' },
            l.a.createElement(
              r['AnchorLink'],
              {
                to: '#\u7ec4\u4ef6\u62c6\u5206',
                'aria-hidden': 'true',
                tabIndex: -1,
              },
              l.a.createElement('span', { className: 'icon icon-link' }),
            ),
            '\u7ec4\u4ef6\u62c6\u5206',
          ),
          l.a.createElement(
            'ul',
            null,
            l.a.createElement(
              'li',
              null,
              'ImagePicker',
              l.a.createElement(
                'ul',
                null,
                l.a.createElement(
                  'li',
                  null,
                  l.a.createElement('code', null, 'ImagePicker'),
                  ' \u62c6\u5206\u4e3a ',
                  l.a.createElement('code', null, 'ImagePicker'),
                  ' \u548c ',
                  l.a.createElement('code', null, 'FilePicker'),
                  ' \u4e24\u4e2a\u7ec4\u4ef6',
                ),
              ),
            ),
            l.a.createElement(
              'li',
              null,
              'ImageView',
              l.a.createElement(
                'ul',
                null,
                l.a.createElement(
                  'li',
                  null,
                  l.a.createElement('code', null, 'ImageView'),
                  ' \u62c6\u5206\u4e3a ',
                  l.a.createElement('code', null, 'ImageView'),
                  ' \u548c ',
                  l.a.createElement('code', null, 'FileView'),
                  ' \u4e24\u4e2a\u7ec4\u4ef6',
                ),
              ),
            ),
          ),
        ),
      )
    );
  },
  bCY9: function (e, t, a) {
    'use strict';
    a.d(t, 'a', function () {
      return l;
    });
    var n = a('LtsZ'),
      l = new n['Plugin']({
        validKeys: [
          'modifyClientRenderOpts',
          'patchRoutes',
          'rootContainer',
          'render',
          'onRouteChange',
          '__mfsu',
        ],
      });
  },
  q3YX: function (e) {
    e.exports = JSON.parse(
      '{"menus":{"zh-CN":{"/components":[{"title":"Components","path":"/components/foo","meta":{},"children":[{"path":"/components/foo","title":"Foo","meta":{}}]}],"/docs":[{"title":"\u5feb\u901f\u4e0a\u624b","meta":{"__fallback":true,"order":0},"children":[],"path":"/docs/getting-started"},{"title":"\u4ece v1 \u5230 v2","meta":{"__fallback":true,"order":1},"children":[],"path":"/docs/upgrade"}],"*":[{"path":"/","title":"eco-image-picker - \u57fa\u4e8e react \u6269\u5c55\u7684\u79fb\u52a8\u7aef\u56fe\u7247/\u6587\u4ef6\u4e0a\u4f20\u7ec4\u4ef6","meta":{}}]}},"locales":[{"name":"zh-CN","label":"\u4e2d\u6587"}],"navs":{"zh-CN":[{"title":"\u6307\u5357","path":"/docs"},{"title":"Components","path":"/components"},{"title":"GitHub","path":"https://github.com/Yicoding/eco-image-picker"}]},"title":"eco-image-picker","logo":"https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{}}',
    );
  },
  tB8F: function (e, t, a) {
    'use strict';
    a.r(t);
    a('pNMO'),
      a('4Brf'),
      a('tjZM'),
      a('3I1R'),
      a('7+kd'),
      a('KhsS'),
      a('gOCb'),
      a('a57n'),
      a('GXvd'),
      a('I1Gw'),
      a('gXIK'),
      a('lEou'),
      a('ma9I'),
      a('TeQF'),
      a('BIHw'),
      a('XbcX'),
      a('pjDv'),
      a('yq1k'),
      a('yXV3'),
      a('4mDm'),
      a('uqXc'),
      a('2B1R'),
      a('E9XD'),
      a('9N29'),
      a('Junv'),
      a('+2oP'),
      a('ToJy'),
      a('94Xl'),
      a('pDQq'),
      a('QGkA'),
      a('c9m3'),
      a('wZ/5'),
      a('rOQg'),
      a('7+zs'),
      a('tW5y'),
      a('DEfu'),
      a('Tskq'),
      a('Uydy'),
      a('QFcT'),
      a('I9xj'),
      a('w1rZ'),
      a('toAj'),
      a('zKZe'),
      a('Eqjn'),
      a('5xtp'),
      a('T63A'),
      a('wfmh'),
      a('27RR'),
      a('v5b1'),
      a('W/eh'),
      a('07d7'),
      a('B6y2'),
      a('5s+n'),
      a('p532'),
      a('pv2x'),
      a('SuFq'),
      a('ftMj'),
      a('TWNs'),
      a('U3f4'),
      a('JfAA'),
      a('YGK4'),
      a('inlA'),
      a('JTJg'),
      a('Rm1S'),
      a('hDyC'),
      a('TZCg'),
      a('UxlC'),
      a('hByQ'),
      a('EnZy'),
      a('LKBx'),
      a('SYor'),
      a('HiXI'),
      a('7ueG'),
      a('z8NH'),
      a('SpvK'),
      a('/Yfv'),
      a('iwkZ'),
      a('FDzp'),
      a('XMab'),
      a('ilnZ'),
      a('hMMk'),
      a('+ywr'),
      a('IL/d'),
      a('gvgV'),
      a('7JcK'),
      a('s5qe'),
      a('cvf0'),
      a('ENF9'),
      a('H+LF'),
      a('66V8'),
      a('iIM6'),
      a('2tOg'),
      a('gYJb'),
      a('EDT/'),
      a('j+VE'),
      a('wgYD'),
      a('R3/m'),
      a('l/vG'),
      a('0q/z'),
      a('n5pg'),
      a('zu+z'),
      a('ihrJ'),
      a('Q7Pz'),
      a('unQa'),
      a('Vnov'),
      a('nIe3'),
      a('CUyW'),
      a('qc1c'),
      a('5921'),
      a('VOz1'),
      a('Thag'),
      a('9D6x'),
      a('cOPa'),
      a('vdRX'),
      a('KrxN'),
      a('SL6q'),
      a('lehK'),
      a('eO0o'),
      a('NqR8'),
      a('w7s6'),
      a('uWhJ'),
      a('WPzJ'),
      a('NV22'),
      a('ny8l'),
      a('a5/B'),
      a('vzwy'),
      a('pevA'),
      a('8go2'),
      a('DrvE'),
      a('kCkZ'),
      a('++zV'),
      a('Y4C7'),
      a('ZsH6'),
      a('vZi8'),
      a('5r1n'),
      a('sQ9d'),
      a('bdeN'),
      a('AwgR'),
      a('qgGA'),
      a('49+q'),
      a('AVoK'),
      a('hcok'),
      a('dNT4'),
      a('3uUd'),
      a('tijO'),
      a('1kQv'),
      a('ZY7T'),
      a('C1JJ'),
      a('lmH4'),
      a('Co1j'),
      a('5JV0'),
      a('ctDJ'),
      a('8r4s'),
      a('JwUS'),
      a('qaHo'),
      a('Si40'),
      a('BGb9'),
      a('fN96'),
      a('UzNg'),
      a('DhMN'),
      a('rZ3M'),
      a('apDx'),
      a('4XaG'),
      a('6V7H'),
      a('cfiF'),
      a('702D'),
      a('TJ79'),
      a('Z4nd'),
      a('8STE'),
      a('spTT'),
      a('rb3L'),
      a('FZtP'),
      a('3bBZ'),
      a('Ew+T'),
      a('n5b4'),
      a('Kz25'),
      a('vxnP'),
      a('mGGf'),
      a('VWci');
    var n = a('bCY9'),
      l = a('FfOG'),
      r = a('LtsZ'),
      o = a('/dmz'),
      i = a('q1tI'),
      c = a.n(i);
    function m() {
      var e = [
        {
          path: '/~demos/:uuid',
          layout: !1,
          wrappers: [a('KcUY').default],
          component: (e) => {
            var t = a('F4QJ'),
              n = t.default,
              l = a('Zxc8'),
              r = l.default,
              o = a('Rsk4'),
              i = o.default,
              m = a('dEAq'),
              s = m.usePrefersColor,
              d = n(e, i);
            switch ((s(), d.length)) {
              case 1:
                return d[0];
              case 2:
                return c.a.createElement(r, d[0], d[1]);
              default:
                return 'Demo '.concat(e.match.params.uuid, ' not found :(');
            }
          },
        },
        { path: '/_demos/:uuid', redirect: '/~demos/:uuid' },
        {
          __dumiRoot: !0,
          layout: !1,
          path: '/',
          wrappers: [a('KcUY').default, a('0Bia').default],
          routes: [
            {
              path: '/components/foo',
              component: a('MWsa').default,
              exact: !0,
              meta: {
                filePath: 'src/Foo/index.md',
                updatedTime: 1636901761e3,
                componentName: 'Foo',
                nav: { title: 'Components', path: '/components' },
                slugs: [{ depth: 2, value: 'Foo', heading: 'foo' }],
                title: 'Foo',
                group: { path: '/components/foo', title: 'Components' },
              },
              title: 'Foo - eco-image-picker',
            },
            {
              path: '/docs/getting-started',
              component: a('VCHF').default,
              exact: !0,
              meta: {
                filePath: 'docs/getting-started.md',
                updatedTime: 1636901761e3,
                title: '\u5feb\u901f\u4e0a\u624b',
                order: 0,
                group: {
                  title: '\u5feb\u901f\u4e0a\u624b',
                  __fallback: !0,
                  path: '/docs',
                },
                nav: { title: '\u6307\u5357', path: '/docs' },
                slugs: [
                  {
                    depth: 1,
                    value: '\u5feb\u901f\u4e0a\u624b',
                    heading: '\u5feb\u901f\u4e0a\u624b',
                  },
                  { depth: 2, value: '\u4f7f\u7528', heading: '\u4f7f\u7528' },
                  {
                    depth: 3,
                    value: 'npm \u6216 yarn \u5b89\u88c5',
                    heading: 'npm-\u6216-yarn-\u5b89\u88c5',
                  },
                  { depth: 3, value: '\u793a\u4f8b', heading: '\u793a\u4f8b' },
                  {
                    depth: 2,
                    value: '\u5bf9\u5e94\u7248\u672c',
                    heading: '\u5bf9\u5e94\u7248\u672c',
                  },
                  { depth: 2, value: 'API', heading: 'api' },
                  {
                    depth: 2,
                    value: '\u7b2c\u4e09\u65b9\u7ec4\u4ef6',
                    heading: '\u7b2c\u4e09\u65b9\u7ec4\u4ef6',
                  },
                ],
              },
              title: '\u5feb\u901f\u4e0a\u624b - eco-image-picker',
            },
            {
              path: '/',
              component: a('F+kV').default,
              exact: !0,
              meta: {
                filePath: 'docs/index.md',
                updatedTime: 1636901761e3,
                title:
                  'eco-image-picker - \u57fa\u4e8e react \u6269\u5c55\u7684\u79fb\u52a8\u7aef\u56fe\u7247/\u6587\u4ef6\u4e0a\u4f20\u7ec4\u4ef6',
                hero: {
                  title: 'eco-image-picker',
                  desc: '<div class="markdown"><p>\u57fa\u4e8e react \u6269\u5c55\u7684\u79fb\u52a8\u7aef\u56fe\u7247/\u6587\u4ef6\u4e0a\u4f20\u7ec4\u4ef6</p></div>',
                  actions: [
                    { text: '\u5feb\u901f\u4e0a\u624b', link: '/docs' },
                  ],
                },
                features: [
                  {
                    icon: 'https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png',
                    title: '\u7b80\u5355\u6613\u7528',
                    desc: '<div class="markdown"><p>\u57fa\u4e8eReact\u5c01\u88c5</p></div>',
                  },
                  {
                    icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png',
                    title: '\u529f\u80fd\u4e30\u5bcc',
                    desc: '<div class="markdown"><p>\u6db5\u76d6\u79fb\u52a8\u7aef\u56fe\u7247/\u6587\u4ef6\u4e0a\u4f20\u573a\u666f</p></div>',
                  },
                  {
                    icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png',
                    title: 'TypeScript',
                    desc: '<div class="markdown"><p>\u63d0\u4f9b TypeScript \u7c7b\u578b\u5b9a\u4e49</p></div>',
                  },
                ],
                footer:
                  '<div class="markdown"><p>Open-source MIT Licensed | Copyright \xa9 2020<br />Powered by <a href="https://d.umijs.org/" target="_blank">dumi<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="__dumi-default-external-link-icon"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a></p></div>',
                slugs: [],
              },
              title:
                'eco-image-picker - \u57fa\u4e8e react \u6269\u5c55\u7684\u79fb\u52a8\u7aef\u56fe\u7247/\u6587\u4ef6\u4e0a\u4f20\u7ec4\u4ef6 - eco-image-picker',
            },
            {
              path: '/docs/upgrade',
              component: a('abP8').default,
              exact: !0,
              meta: {
                filePath: 'docs/upgrade.md',
                updatedTime: 1636901761e3,
                title: '\u4ece v1 \u5230 v2',
                order: 1,
                group: {
                  title: '\u4ece v1 \u5230 v2',
                  __fallback: !0,
                  path: '/docs',
                },
                nav: { title: '\u6307\u5357', path: '/docs' },
                slugs: [
                  {
                    depth: 1,
                    value: '\u4ece v1 \u5230 v2',
                    heading: '\u4ece-v1-\u5230-v2',
                  },
                  {
                    depth: 3,
                    value:
                      '\u53bb\u9664 antd-mobile \u7ec4\u4ef6\u5e93\u4f9d\u8d56',
                    heading:
                      '\u53bb\u9664-antd-mobile-\u7ec4\u4ef6\u5e93\u4f9d\u8d56',
                  },
                  {
                    depth: 3,
                    value: '\u7ec4\u4ef6\u62c6\u5206',
                    heading: '\u7ec4\u4ef6\u62c6\u5206',
                  },
                ],
              },
              title: '\u4ece v1 \u5230 v2 - eco-image-picker',
            },
            {
              path: '/components',
              meta: {},
              exact: !0,
              redirect: '/components/foo',
            },
            {
              path: '/docs',
              meta: { __fallback: !0 },
              exact: !0,
              redirect: '/docs/getting-started',
            },
          ],
          title: 'eco-image-picker',
          component: (e) => e.children,
        },
      ];
      return (
        n['a'].applyPlugins({
          key: 'patchRoutes',
          type: r['ApplyPluginsType'].event,
          args: { routes: e },
        }),
        e
      );
    }
    var s = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return n['a'].applyPlugins({
          key: 'render',
          type: r['ApplyPluginsType'].compose,
          initialValue: () => {
            var t = n['a'].applyPlugins({
              key: 'modifyClientRenderOpts',
              type: r['ApplyPluginsType'].modify,
              initialValue: {
                routes: e.routes || m(),
                plugin: n['a'],
                history: Object(l['a'])(e.hot),
                isServer: Object({ NODE_ENV: 'production' }).__IS_SERVER,
                rootElement: 'root',
                defaultTitle: 'eco-image-picker',
              },
            });
            return Object(o['a'])(t);
          },
          args: e,
        });
      },
      d = s();
    t['default'] = d();
    window.g_umi = { version: '3.5.20' };
  },
  x2v5: function (e) {
    e.exports = JSON.parse('{}');
  },
});
