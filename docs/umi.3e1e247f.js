(function (e) {
  function n(n) {
    for (
      var a, i, c = n[0], o = n[1], m = n[2], s = 0, d = [];
      s < c.length;
      s++
    )
      (i = c[s]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && d.push(r[i][0]),
        (r[i] = 0);
    for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    u && u(n);
    while (d.length) d.shift()();
    return l.push.apply(l, m || []), t();
  }
  function t() {
    for (var e, n = 0; n < l.length; n++) {
      for (var t = l[n], a = !0, c = 1; c < t.length; c++) {
        var o = t[c];
        0 !== r[o] && (a = !1);
      }
      a && (l.splice(n--, 1), (e = i((i.s = t[0]))));
    }
    return e;
  }
  var a = {},
    r = { 0: 0 },
    l = [];
  function i(n) {
    if (a[n]) return a[n].exports;
    var t = (a[n] = { i: n, l: !1, exports: {} });
    return e[n].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  (i.m = e),
    (i.c = a),
    (i.d = function (e, n, t) {
      i.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (i.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.t = function (e, n) {
      if ((1 & n && (e = i(e)), 8 & n)) return e;
      if (4 & n && 'object' === typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (i.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & n && 'string' != typeof e)
      )
        for (var a in e)
          i.d(
            t,
            a,
            function (n) {
              return e[n];
            }.bind(null, a),
          );
      return t;
    }),
    (i.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e['default'];
            }
          : function () {
              return e;
            };
      return i.d(n, 'a', n), n;
    }),
    (i.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (i.p = 'https://yicoding.github.io/eco-image-picker/');
  var c = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    o = c.push.bind(c);
  (c.push = n), (c = c.slice());
  for (var m = 0; m < c.length; m++) n(c[m]);
  var u = o;
  l.push([0, 1]), t();
})({
  '/7QA': function (e, n, t) {
    'use strict';
    t.d(n, 'a', function () {
      return A;
    }),
      t.d(n, 'b', function () {
        return j;
      });
    t('TttT');
    var a = t('Kl5d'),
      r = t.n(a),
      l = t('9og8'),
      i = t('tJVT'),
      c = t('WmNS'),
      o = t.n(c),
      m = t('q1tI'),
      u = t.n(m),
      s = t('TSYQ'),
      d = t.n(s),
      p = t('fI17'),
      g = t.n(p),
      f = t('U0F3'),
      v = t.n(f),
      h = t('erb0'),
      E = t.n(h),
      b = () => {},
      k = Object(m['forwardRef'])((e, n) => {
        var t = e.value,
          a = void 0 === t ? [] : t,
          c = e.max,
          s = void 0 === c ? 1 : c,
          p = e.onChange,
          f = void 0 === p ? b : p,
          h = e.accept,
          k = void 0 === h ? 'image/*' : h,
          A = e.multiple,
          w = e.capture,
          y = e.width,
          P = void 0 === y ? '80px' : y,
          x = e.height,
          j = void 0 === x ? '80px' : x,
          I = e.config,
          C = void 0 === I ? ['defaultBorder'] : I,
          O = e.children,
          T = e.mode,
          N = void 0 === T ? 'fill' : T,
          B = e.size,
          M = e.disabledPreview,
          S = e.disabledSelect,
          X = e.onUpload,
          U = e.onInit,
          V = e.onFail,
          F = void 0 === V ? b : V,
          Z = e.onGetPreviewUrl,
          L = e.resize,
          R = e.showRemove,
          z = void 0 === R || R,
          q = e.replace,
          D = e.quality,
          J = n || Object(m['useRef'])(null),
          K = Object(m['useRef'])(null),
          _ = Object(m['useRef'])(a),
          G = [];
        _.current.forEach((e) => {
          e.preview ? G.push(e.preview) : e.url && G.push(e.url);
        });
        var W = Object(m['useMemo'])(() => {
            for (var e = 0, n = 0; n < a.length; n++) {
              var t = a[n],
                r = t.url,
                l = t.errorTip;
              (r || l) && e++;
            }
            return e;
          }, [a]),
          H = Object(m['useState'])(!1),
          Q = Object(i['a'])(H, 2),
          Y = Q[0],
          $ = Q[1],
          ee = Object(m['useState'])(0),
          ne = Object(i['a'])(ee, 2),
          te = ne[0],
          ae = ne[1],
          re = Object(m['useState'])(''),
          le = Object(i['a'])(re, 2),
          ie = le[0],
          ce = le[1],
          oe = (e) => {
            U &&
              U(e)
                .then((n) => {
                  (_.current[e] = Object.assign({}, _.current[e], n, {
                    loading: !1,
                  })),
                    (_.current = [..._.current]),
                    setTimeout(() => f(_.current), 10);
                })
                .catch((n) => {
                  (_.current[e] = Object.assign({}, _.current[e], {
                    url: '',
                    loading: !1,
                    errorTip: n || '\u52a0\u8f7d\u5931\u8d25',
                  })),
                    (_.current = [..._.current]),
                    setTimeout(() => f(_.current), 10);
                });
          };
        Object(m['useEffect'])(() => {
          if ('function' === typeof U)
            for (var e = 0; e < _.current.length; e++)
              _.current.forEach((e) => {
                (e.loading = !0), (e.isInit = !0);
              }),
                (_.current = [..._.current]),
                f(_.current),
                oe(e);
        }, []),
          Object(m['useEffect'])(() => {
            if (L) {
              var e = getComputedStyle(K.current).width;
              ce(e);
            }
          }, [L]);
        var me = (e) =>
            new Promise((n) => {
              new g.a(e, {
                quality: D,
                success: (e) => {
                  n(e);
                },
                error: (t) => {
                  n(e);
                },
              });
            }),
          ue = (function () {
            var e = Object(l['a'])(
              o.a.mark(function e(n, t, r) {
                var l;
                return o.a.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((l = n), !D)) {
                          e.next = 5;
                          break;
                        }
                        return (e.next = 4), me(n);
                      case 4:
                        l = e.sent;
                      case 5:
                        return e.abrupt(
                          'return',
                          new Promise((e, n) => {
                            var i = new FileReader();
                            (i.onload = (i) => {
                              var c = i.target.result;
                              c
                                ? e(
                                    Object.assign({}, a[r + t], {
                                      file: l,
                                      url: c,
                                    }),
                                  )
                                : n('Fail to get the '.concat(t, ' image'));
                            }),
                              i.readAsDataURL(l);
                          }),
                        );
                      case 6:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (n, t, a) {
              return e.apply(this, arguments);
            };
          })(),
          se = (e) => {
            var n = e.target,
              t = n.files;
            if (!t || !t.length) return (n.value = '');
            var a = s - (q ? 0 : W);
            t.length > (q ? s : a) &&
              r.a.info(
                '\u56fe\u7247\u6700\u591a\u4e0d\u8d85\u8fc7'.concat(
                  s,
                  '\u5f20',
                ),
              );
            for (
              var l = Array.from(t).slice(0, a), i = [], c = 0;
              c < l.length;
              c++
            )
              i.push(ue(l[c], c, W));
            _.current = _.current.filter((e) => e.url || e.errorTip);
            var o = q ? 0 : _.current.length;
            Promise.all(i)
              .then((e) => {
                'function' === typeof X && e.forEach((e) => (e.loading = !0));
                var t = e.filter((e) =>
                  B && e.file.size > 1024 * B * 1024
                    ? r.a.info(
                        '\u56fe\u7247\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc7'.concat(
                          B,
                          'M',
                        ),
                      )
                    : e,
                );
                if (
                  ((_.current = q ? [...t] : _.current.concat(t)),
                  f(_.current),
                  'function' === typeof X)
                )
                  for (
                    var a = function (e) {
                        var n = _.current[e];
                        e >= o &&
                          X(n)
                            .then((n) => {
                              (_.current[e] = Object.assign(
                                {},
                                _.current[e],
                                n,
                                { loading: !1 },
                              )),
                                (_.current = [..._.current]),
                                setTimeout(() => f(_.current), 10);
                            })
                            .catch((n) => {
                              (_.current[e] = Object.assign({}, _.current[e], {
                                url: '',
                                loading: !1,
                                errorTip: n || '\u4e0a\u4f20\u5931\u8d25',
                              })),
                                (_.current = [..._.current]),
                                setTimeout(() => f(_.current), 10);
                            });
                      },
                      l = 0;
                    l < _.current.length;
                    l++
                  )
                    a(l);
                n.value = '';
              })
              .catch((e) => {
                F(e), (n.value = '');
              });
          },
          de = () => {
            S || (J && J.current && J.current.click());
          },
          pe = (e) => {
            for (var n = !0, t = 0; t < _.current.length; t++) {
              var a = _.current[t].loading;
              if (a) {
                n = !1;
                break;
              }
            }
            if (!n)
              return r.a.info(
                '\u56fe\u7247\u4e0a\u4f20\u4e2d\uff0c\u8bf7\u7a0d\u540e\u64cd\u4f5c',
              );
            _.current.splice(e, 1), (_.current = [..._.current]), f(_.current);
          },
          ge = (function () {
            var e = Object(l['a'])(
              o.a.mark(function e(n, t) {
                var a;
                return o.a.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!M) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt('return');
                      case 2:
                        if (_.current[t].preview || 'function' !== typeof Z) {
                          e.next = 9;
                          break;
                        }
                        return (e.next = 5), Z(t);
                      case 5:
                        (a = e.sent),
                          (_.current[t].preview = a),
                          (_.current = [..._.current]),
                          f(_.current);
                      case 9:
                        ae(n), fe();
                      case 11:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (n, t) {
              return e.apply(this, arguments);
            };
          })(),
          fe = () => $((e) => !e),
          ve = L ? ie : j,
          he = 0;
        if (L) {
          var Ee = Math.floor(100 / parseFloat(P));
          if (a && a.length > 0 && Ee > 1) {
            var be = a.length % Ee;
            be >= 0 &&
              be <= Ee - 1 &&
              ((he = Ee - be - 1), a.length === s && (he += 1));
          }
        }
        var ke = d()(E.a.parent, {
          [E.a.noMargin]: 1 === s || a.length < 1,
          [E.a.marginBottom]: L,
        });
        return u.a.createElement(
          'div',
          { className: d()(E.a.root, { [E.a.justifyContent]: L }) },
          u.a.createElement('input', {
            className: E.a.hidden,
            ref: J,
            type: 'file',
            accept: k,
            multiple: A,
            capture: w,
            onChange: se,
          }),
          a &&
            a.length > 0 &&
            a.map((e, n) => {
              var t = e.url,
                r = e.loading,
                l = e.name,
                i = e.errorTip,
                c = e.isInit;
              if (t || i || c) {
                for (
                  var o = a.slice(0, n + 1), m = 0, s = 0;
                  s < o.length;
                  s++
                ) {
                  var p = o[s].errorTip;
                  p && m++;
                }
                var g = n - m;
                return u.a.createElement(
                  'div',
                  { key: n, className: ke, style: { width: P } },
                  u.a.createElement(
                    'div',
                    {
                      className: d()(E.a.imgBox, ...C.map((e) => E.a[e])),
                      style: { height: ve },
                    },
                    t &&
                      u.a.createElement('img', {
                        alt: '',
                        className: E.a.img,
                        src: t,
                        style: { objectFit: N },
                        onClick: () => ge(g, n),
                      }),
                    i &&
                      u.a.createElement('div', { className: E.a.errorTip }, i),
                    z &&
                      u.a.createElement('i', {
                        className: E.a.iconRemove,
                        onClick: () => pe(n),
                      }),
                    r &&
                      u.a.createElement(
                        'div',
                        { className: E.a.loadingBox },
                        u.a.createElement('i', { className: E.a.loading }),
                      ),
                  ),
                  l && u.a.createElement('div', { className: E.a.name }, l),
                );
              }
            }),
          W < s &&
            u.a.createElement(
              'div',
              { className: ke, style: { width: P }, ref: K, onClick: de },
              O ||
                u.a.createElement('div', {
                  style: { height: ve },
                  className: d()(E.a.childrenEle, [...C.map((e) => E.a[e])]),
                }),
              1 === s &&
                a[0] &&
                a[0].name &&
                u.a.createElement(
                  'div',
                  { className: E.a.name, style: { width: P } },
                  a[0].name,
                ),
            ),
          he > 0 &&
            new Array(he)
              .fill(he)
              .map((e, n) =>
                u.a.createElement('div', {
                  key: n,
                  className: ke,
                  style: { width: P },
                }),
              ),
          Y && u.a.createElement(v.a, { onClose: fe, index: te, urls: G }),
        );
      }),
      A = k,
      w = t('2qhL'),
      y = t.n(w),
      P = () => {},
      x = Object(m['forwardRef'])((e, n) => {
        var t = e.value,
          a = void 0 === t ? [] : t,
          r = e.onChange,
          c = void 0 === r ? P : r,
          s = e.width,
          p = void 0 === s ? '80px' : s,
          g = e.height,
          f = void 0 === g ? '80px' : g,
          h = e.config,
          E = void 0 === h ? ['defaultBorder'] : h,
          b = e.mode,
          k = void 0 === b ? 'fill' : b,
          A = e.disabledPreview,
          w = e.onInit,
          x = e.onGetPreviewUrl,
          j = e.resize,
          I = Object(m['useRef'])(null),
          C = Object(m['useRef'])(a),
          O = [];
        C.current.forEach((e) => {
          e.preview ? O.push(e.preview) : e.url && O.push(e.url);
        });
        var T = Object(m['useState'])(!1),
          N = Object(i['a'])(T, 2),
          B = N[0],
          M = N[1],
          S = Object(m['useState'])(0),
          X = Object(i['a'])(S, 2),
          U = X[0],
          V = X[1],
          F = Object(m['useState'])(''),
          Z = Object(i['a'])(F, 2),
          L = Z[0],
          R = Z[1],
          z = (e) => {
            w &&
              w(e)
                .then((n) => {
                  (C.current[e] = Object.assign({}, C.current[e], n, {
                    loading: !1,
                  })),
                    (C.current = [...C.current]),
                    setTimeout(() => c(C.current), 10);
                })
                .catch((n) => {
                  (C.current[e] = Object.assign({}, C.current[e], {
                    url: '',
                    loading: !1,
                    errorTip: n || '\u52a0\u8f7d\u5931\u8d25',
                  })),
                    (C.current = [...C.current]),
                    setTimeout(() => c(C.current), 10);
                });
          };
        Object(m['useEffect'])(() => {
          if ('function' === typeof w)
            for (var e = 0; e < C.current.length; e++)
              C.current.forEach((e) => {
                (e.loading = !0), (e.isInit = !0);
              }),
                (C.current = [...C.current]),
                c(C.current),
                z(e);
        }, []),
          Object(m['useEffect'])(() => {
            if (j) {
              var e = getComputedStyle(I.current).width;
              R(e);
            }
          }, [j]);
        var q = (function () {
            var e = Object(l['a'])(
              o.a.mark(function e(n, t) {
                var a;
                return o.a.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!A) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt('return');
                      case 2:
                        if (C.current[t].preview || 'function' !== typeof x) {
                          e.next = 9;
                          break;
                        }
                        return (e.next = 5), x(t);
                      case 5:
                        (a = e.sent),
                          (C.current[t].preview = a),
                          (C.current = [...C.current]),
                          c(C.current);
                      case 9:
                        V(n), D();
                      case 11:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (n, t) {
              return e.apply(this, arguments);
            };
          })(),
          D = () => M((e) => !e),
          J = j ? L : f;
        if (j) {
          var K = Math.floor(100 / parseFloat(p));
          if (a && a.length > 0 && K > 1) {
            var _ = a.length % K;
            _ >= 0 && _ <= K - 1 && K - _ - 1;
          }
        }
        var G = d()(y.a.parent, {
          [y.a.noMargin]: a.length < 1,
          [y.a.marginBottom]: j,
        });
        return u.a.createElement(
          'div',
          { className: d()(y.a.root, { [y.a.justifyContent]: j }) },
          a &&
            a.length > 0 &&
            a.map((e, n) => {
              var t = e.url,
                r = e.loading,
                l = e.name,
                i = e.errorTip,
                c = e.isInit;
              if (t || i || c) {
                for (
                  var o = a.slice(0, n + 1), m = 0, s = 0;
                  s < o.length;
                  s++
                ) {
                  var g = o[s].errorTip;
                  g && m++;
                }
                var f = n - m;
                return u.a.createElement(
                  'div',
                  { key: n, className: G, style: { width: p } },
                  u.a.createElement(
                    'div',
                    {
                      className: d()(y.a.imgBox, ...E.map((e) => y.a[e])),
                      style: { height: J },
                    },
                    t &&
                      u.a.createElement('img', {
                        alt: '',
                        className: y.a.img,
                        src: t,
                        style: { objectFit: k },
                        onClick: () => q(f, n),
                      }),
                    i &&
                      u.a.createElement('div', { className: y.a.errorTip }, i),
                    r &&
                      u.a.createElement(
                        'div',
                        { className: y.a.loadingBox },
                        u.a.createElement('i', { className: y.a.loading }),
                      ),
                  ),
                  l && u.a.createElement('div', { className: y.a.name }, l),
                );
              }
            }),
          B && u.a.createElement(v.a, { onClose: D, index: U, urls: O }),
        );
      }),
      j = x;
  },
  0: function (e, n, t) {
    e.exports = t('tB8F');
  },
  '0vTL': function (e, n, t) {
    'use strict';
    t.r(n);
    var a = t('tJVT'),
      r = t('q1tI'),
      l = t.n(r),
      i = t('/7QA'),
      c = t('cMq5');
    n['default'] = () => {
      var e = Object(r['useState'])([
          { url: '', fssid: 'id-1' },
          { url: '', fssid: 'id-2' },
        ]),
        n = Object(a['a'])(e, 2),
        t = n[0],
        o = n[1],
        m = (e) => {
          e.forEach((e, n) => (e.name = '\u793a\u4f8b\u56fe'.concat(n))), o(e);
        },
        u = () =>
          new Promise((e, n) => {
            var t = Math.random();
            setTimeout(
              () =>
                t > 0.3 ? e({ url: c['a'] }) : n('\u52a0\u8f7d\u5931\u8d25'),
              3e3,
            );
          }),
        s = (e) =>
          new Promise((e, n) => {
            var t = Math.random();
            setTimeout(() => {
              if (t > 0.3) return e({ fssid: t.toString().slice(-6) });
              n('\u4e0a\u4f20\u5931\u8d25');
            }, 3e3);
          });
      return l.a.createElement(i['a'], {
        value: t,
        onChange: m,
        multiple: !0,
        max: 10,
        mode: 'cover',
        onUpload: s,
        onInit: u,
      });
    };
  },
  '19b6': function (e, n) {
    e.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAAByCAMAAADAvHvuAAABI1BMVEXx8fHh4eGSxP/1n4Hy1YXrnoDq6url5eX39/ey0/rt8PLk5OTn5+fuyoDw14fwvIH0sILuyLn0woT////yz4T1oIH0x4TyzIT1o4Hy14v1ooHw8PDzuYP1qYHu7u7s7Ozy36ny1IX0p4Hx8O3114j9/f3y58fy5b/x2ZLy0YT1toTx7+rsoYP1rIKXx//6+vrQ4vbz8/Py7ejy7uPy4rXzvYP1s4P1poLvy4Hx47v1yobwwIPwxYKeyv6q0Pzy6M/v183x25zy25jtr4H29vbx69nx3tbv0MPuxLTtuqXx3J/x3J71z4fus4L1r4LtqoG41/q51/nY5vXm7PPr7/Lx5+Tx6tXy4bDy3qXutJnsrJPspov1voXutYLspoHw4dvw1b3UZAjfAAAEGklEQVR42u3c13LaQBQG4AO7AicQTCQhOqY3g7HB2LHBPXGLS3pv7/8U2RUoogoxg2aOJvvd2INvfu/8uzpoNAJFKe2Aa+yUFAWUFrhKS4ESuEwJXoLLrIGLiqxzX2BBEARBEARhCclPld3s2fltdrfyCaxs+D0r59+AZW2WsyFqimdPCjCHz+MIHyylcBCnk+KVJMwU8DgiAMuoDAPXNLmb6sqaSnXVMsziccgynbilXLTbjJChfEqjXHZWO/weR/jBtldVPXCYDBix03ro8w5MyTjSjEAG7DqJ80bs/VtgLUGGmlHe6FcwzeeAJdaYJ47mydDDYfGuToYSMs/cAVw6PDFf2ISxyMU7Y8HZRym+CTcBk8I5TxwhifqPGNH9qGtkYF9LR/TMt4DJAUuksrDNYrFOxkXk4t0+IbwbZcCjHaI0p/f48HCfTNiTZZ48yupcADQ+U0q7xFqTUnoAWHT48ZYgprrxM0JMGqUhNDuQN3mkwvuHRTkyaPFoTfKY2nzOmhwjJrm4N2hxUSYjWJu/AA68F9pYbWNpwqVjTTIixZpRGJ+XAytnb14um72wxJtxMprY4wg7mXdZlDSxoUZpBcckl2WRY8SKWeZdHPPya0pzxA6N0iyOVa5SqhI7ZErPcMzLLHLNbuTXMCLpC66cLwn2ikEjtouBAt9+5lUuEZ5g/jcq334o8EOuaV4wQhPCZCiS44ccCuWxOU4NTdDIUFi/lKDQpiNHxkNoSszcfSEsE/PZ8PKXiMVicmhKin2cYL1Q0ew+gAqLzGe2/rNJL3Tslz6b6zANnx2qL3P6mYU8X+Q4mhEfPuvj57pV5HAK1Rcp2IyzPKl1K6kcpdUCjMkE/SsXzNhuMxO2mpXVYZNxzMtMgR8auflDcyLK/v4F1/3ldpVnDs9bY564uons/vKfHGVSM8ejcI1fbL5iu7/87aJm3F6ekJcpoz5KpzAu43FEBuz5LUm/opTTHsZWOi1TLvpLkm5gQsbnXzlfBmy6kiSp0ae6mryXjvE9lw93VarrScx3QOW5xN2r1JBTc9QQvZB0gAqPzP1U6ST1XhpoACqnkpHroqeO5u1dSIZvgEq7IZkef673+tF+b/3+URpxDbjcSIs0PgIuHxvSAs8Bm1PJ2k0S0Ln8Llm4RpgYoH09txxfL2EGnwOzXMAHS0leXj2fdnXaRvw8xhyIn8eYC+vzGMsKehwRBOcknbm/nAQHJTd8K7eB8jAVBEEQBEEQBJd5igjYsH285UVk63gbFnjjRefNgjX2ImS9zsdehI7BCqoeG7bAypEXoSOw8sSL0BOw8h5hM7beg6V36Kpx9A4W+LD99gkib7c/gCAIwn/Eda8B2nHf26FeuvEdXMoauMqaAoq73s7WUnhkpdRac4lWicX9C81Kok0FFxVKAAAAAElFTkSuQmCC';
  },
  '2qhL': function (e, n, t) {
    e.exports = {
      root: 'root___2yaR5',
      justifyContent: 'justifyContent___2eofh',
      hidden: 'hidden___2YVM6',
      imgBox: 'imgBox___1gsGA',
      img: 'img___NU3cF',
      errorTip: 'errorTip___3gy2d',
      iconRemove: 'iconRemove___1lA_x',
      parent: 'parent___2m4X7',
      noMargin: 'noMargin___2eKtJ',
      marginBottom: 'marginBottom___2S62m',
      name: 'name___3VQl9',
      childrenEle: 'childrenEle___1b5hi',
      defaultDashed: 'defaultDashed___3uC-5',
      defaultBackGround: 'defaultBackGround___1woVQ',
      defaultBorder: 'defaultBorder___3BgZb',
      loadingBox: 'loadingBox___Sr7jv',
      loading: 'loading___O8g58',
      myRound: 'myRound___2_bDa',
    };
  },
  '9kvl': function (e, n, t) {
    'use strict';
    var a = t('FfOG');
    t.d(n, 'a', function () {
      return a['b'];
    });
    t('bCY9');
  },
  AvFv: function (e, n, t) {
    'use strict';
    t.r(n);
    var a = t('q1tI'),
      r = t.n(a),
      l = t('dEAq'),
      i = t('Zxc8'),
      c = t('Rsk4'),
      o = r.a.memo(c['default']['image-view-init'].component);
    n['default'] = (e) => (
      r.a.useEffect(() => {
        var n;
        null !== e &&
          void 0 !== e &&
          null !== (n = e.location) &&
          void 0 !== n &&
          n.hash &&
          l['AnchorLink'].scrollToAnchor(
            decodeURIComponent(e.location.hash.slice(1)),
          );
      }, []),
      r.a.createElement(
        r.a.Fragment,
        null,
        r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h1',
              { id: 'imageview-\u56fe\u7247\u9884\u89c8' },
              r.a.createElement(
                l['AnchorLink'],
                {
                  to: '#imageview-\u56fe\u7247\u9884\u89c8',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'ImageView \u56fe\u7247\u9884\u89c8',
            ),
            r.a.createElement(
              'h2',
              { id: '\u57fa\u672c\u7528\u6cd5' },
              r.a.createElement(
                l['AnchorLink'],
                {
                  to: '#\u57fa\u672c\u7528\u6cd5',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u57fa\u672c\u7528\u6cd5',
            ),
          ),
          r.a.createElement(
            i['default'],
            c['default']['image-view-init'].previewerProps,
            r.a.createElement(o, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h2',
              { id: 'api' },
              r.a.createElement(
                l['AnchorLink'],
                { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'API',
            ),
            r.a.createElement(
              'h3',
              { id: 'imageview' },
              r.a.createElement(
                l['AnchorLink'],
                { to: '#imageview', 'aria-hidden': 'true', tabIndex: -1 },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'ImageView',
            ),
          ),
        ),
      )
    );
  },
  CK2m: function (e, n, t) {
    'use strict';
    t.r(n);
    t('ZyjE');
    var a = t('4IZf'),
      r = t.n(a),
      l = t('tJVT'),
      i = t('q1tI'),
      c = t.n(i),
      o = t('/7QA'),
      m = t('S/KV'),
      u = t.n(m),
      s = t('okqA'),
      d = t('19b6'),
      p = t('CWFq');
    n['default'] = () => {
      var e = Object(i['useState'])([{ name: '\u4eba\u50cf', url: '' }]),
        n = Object(l['a'])(e, 2),
        t = n[0],
        a = n[1],
        m = Object(i['useState'])([{ name: '\u56fd\u5fbd', url: '' }]),
        g = Object(l['a'])(m, 2),
        f = g[0],
        v = g[1],
        h = (e) =>
          new Promise((e, n) => {
            var t = Math.random();
            setTimeout(() => {
              if (t > 0.3) return e({ fssid: t.toString().slice(-6) });
              n('\u4e0a\u4f20\u5931\u8d25');
            }, 3e3);
          }),
        E = (e) => {
          if (0 === e.length)
            return e.push({ name: '\u4eba\u50cf', url: '' }), a(e);
          a(e);
        },
        b = (e) => {
          if (0 === e.length)
            return e.push({ name: '\u56fd\u5fbd', url: '' }), v(e);
          v(e);
        };
      return c.a.createElement(
        'div',
        { className: u.a.root },
        c.a.createElement(
          'div',
          { className: u.a.item },
          c.a.createElement(
            o['a'],
            {
              value: t,
              onChange: E,
              mode: 'cover',
              width: '100%',
              height: '90px',
              onUpload: h,
            },
            c.a.createElement(
              r.a,
              { className: u.a.children, justify: 'center' },
              c.a.createElement('img', { className: u.a.img, alt: '', src: s }),
              c.a.createElement('img', {
                alt: '',
                className: u.a.iconPhoto,
                src: p,
              }),
            ),
          ),
        ),
        c.a.createElement(
          'div',
          { className: u.a.item },
          c.a.createElement(
            o['a'],
            {
              value: f,
              onChange: b,
              mode: 'cover',
              width: '100%',
              height: '90px',
              onUpload: h,
            },
            c.a.createElement(
              r.a,
              { className: u.a.children, justify: 'center' },
              c.a.createElement('img', { className: u.a.img, alt: '', src: d }),
              c.a.createElement('img', {
                alt: '',
                className: u.a.iconPhoto,
                src: p,
              }),
            ),
          ),
        ),
      );
    };
  },
  CWFq: function (e, n) {
    e.exports =
      'data:image/png;base64,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';
  },
  FKBv: function (e, n, t) {
    'use strict';
    t.r(n);
    t('ZyjE');
    var a = t('4IZf'),
      r = t.n(a),
      l = (t('ca75'), t('JMAg')),
      i = t.n(l),
      c = (t('dlV3'), t('4cdd')),
      o = t.n(c),
      m = t('tJVT'),
      u = t('q1tI'),
      s = t.n(u),
      d = t('/7QA');
    n['default'] = () => {
      var e = Object(u['useState'])([]),
        n = Object(m['a'])(e, 2),
        t = n[0],
        a = n[1],
        l = (e) => {
          a(e);
        };
      return s.a.createElement(
        r.a,
        { direction: 'row', wrap: 'wrap' },
        s.a.createElement(
          i.a,
          null,
          s.a.createElement(d['a'], { value: t, onChange: l, quality: 0.1 }),
          s.a.createElement(o.a, null),
        ),
        s.a.createElement(
          i.a,
          null,
          s.a.createElement(d['a'], {
            value: t,
            onChange: l,
            config: ['defaultBackGround'],
          }),
          s.a.createElement(o.a, null),
        ),
        s.a.createElement(
          i.a,
          null,
          s.a.createElement(d['a'], {
            showRemove: !1,
            value: t,
            onChange: l,
            config: ['defaultDashed'],
          }),
          s.a.createElement(o.a, null),
        ),
        s.a.createElement(
          i.a,
          null,
          s.a.createElement(d['a'], {
            value: t,
            onChange: l,
            config: ['defaultBorder', 'defaultBackGround'],
          }),
          s.a.createElement(o.a, null),
        ),
        s.a.createElement(
          i.a,
          null,
          s.a.createElement(d['a'], {
            value: t,
            onChange: l,
            config: ['defaultDashed', 'defaultBackGround'],
          }),
          s.a.createElement(o.a, null),
        ),
      );
    };
  },
  FfOG: function (e, n, t) {
    'use strict';
    t.d(n, 'a', function () {
      return i;
    }),
      t.d(n, 'b', function () {
        return l;
      });
    var a = t('YS25'),
      r = { basename: '/' };
    window.routerBase && (r.basename = window.routerBase);
    var l = Object({ NODE_ENV: 'production' }).__IS_SERVER
        ? null
        : Object(a['b'])(r),
      i = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return e || (l = Object(a['b'])(r)), l;
      };
  },
  JobO: function (e, n, t) {
    'use strict';
    t.r(n);
    var a = t('tJVT'),
      r = t('q1tI'),
      l = t.n(r),
      i = t('/7QA'),
      c = t('cMq5');
    n['default'] = () => {
      var e = Object(r['useState'])([
          { url: '', fssid: 'id-1' },
          { url: '', fssid: 'id-2' },
        ]),
        n = Object(a['a'])(e, 2),
        t = n[0],
        o = n[1],
        m = (e) => {
          e.forEach((e, n) => (e.name = '\u793a\u4f8b\u56fe'.concat(n))), o(e);
        },
        u = () =>
          new Promise((e, n) => {
            var t = Math.random();
            setTimeout(
              () =>
                t > 0.3 ? e({ url: c['a'] }) : n('\u52a0\u8f7d\u5931\u8d25'),
              3e3,
            );
          });
      return l.a.createElement(i['b'], {
        value: t,
        onChange: m,
        mode: 'cover',
        onInit: u,
      });
    };
  },
  Rsk4: function (e, n, t) {
    'use strict';
    t.r(n);
    var a =
        "import React, { useState } from 'react';\n\nimport { WhiteSpace, Flex, WingBlank } from 'antd-mobile';\nimport { ImagePicker } from 'eco-image-picker';\n\ninterface Files {\n  url: string; // \u56fe\u7247url\n  preview?: string; // \u9884\u89c8\u56fe\n  loading?: boolean; // \u56fe\u7247\u662f\u5426\u52a0\u8f7d\u4e2d\n  errorTip?: string; // \u9519\u8bef\u63d0\u793a\n  name?: string; // \u56fe\u7247\u540d\u79f0\n  [index: string]: any;\n}\n\nexport default () => {\n  const [value, setValue] = useState<Array<Files>>([]);\n\n  // \u6570\u7ec4\u6539\u53d8\n  const onChange = (arr: Array<Files>) => {\n    setValue(arr);\n  };\n\n  return (\n    <Flex direction=\"row\" wrap=\"wrap\">\n      <WingBlank>\n        <ImagePicker value={value} onChange={onChange} quality={0.1} />\n        <WhiteSpace />\n      </WingBlank>\n      <WingBlank>\n        <ImagePicker\n          value={value}\n          onChange={onChange}\n          config={['defaultBackGround']}\n        />\n        <WhiteSpace />\n      </WingBlank>\n      <WingBlank>\n        <ImagePicker\n          showRemove={false}\n          value={value}\n          onChange={onChange}\n          config={['defaultDashed']}\n        />\n        <WhiteSpace />\n      </WingBlank>\n      <WingBlank>\n        <ImagePicker\n          value={value}\n          onChange={onChange}\n          config={['defaultBorder', 'defaultBackGround']}\n        />\n        <WhiteSpace />\n      </WingBlank>\n      <WingBlank>\n        <ImagePicker\n          value={value}\n          onChange={onChange}\n          config={['defaultDashed', 'defaultBackGround']}\n        />\n        <WhiteSpace />\n      </WingBlank>\n    </Flex>\n  );\n};",
      r =
        "import React, { useEffect } from 'react';\n\nimport Form, { Field } from 'rc-field-form';\nimport { WhiteSpace, Button } from 'antd-mobile';\nimport { ImagePicker } from 'eco-image-picker';\n\nexport default () => {\n  const [form] = Form.useForm();\n\n  useEffect(() => {\n    form.setFieldsValue({ filesList: [] });\n  }, []);\n\n  const submit = () => {\n    const values = form.getFieldsValue();\n    console.log(values);\n  };\n\n  return (\n    <div>\n      <Form form={form}>\n        <Field name=\"filesList\">\n          <ImagePicker />\n        </Field>\n      </Form>\n      <WhiteSpace />\n      <Button onClick={submit} size=\"small\" type=\"primary\" inline>\n        Submit\n      </Button>\n    </div>\n  );\n};",
      l =
        "import React, { useState } from 'react';\n\nimport { ImagePicker } from 'eco-image-picker';\n\ninterface Files {\n  url: string; // \u56fe\u7247url\n  preview?: string; // \u9884\u89c8\u56fe\n  loading?: boolean; // \u56fe\u7247\u662f\u5426\u52a0\u8f7d\u4e2d\n  errorTip?: string; // \u9519\u8bef\u63d0\u793a\n  name?: string; // \u56fe\u7247\u540d\u79f0\n  [index: string]: any;\n}\n\nexport default () => {\n  const [value, setValue] = useState<Array<Files>>([]);\n\n  // \u6570\u7ec4\u6539\u53d8\n  const onChange = (arr: Array<Files>) => {\n    console.log('onChange', arr);\n    arr.forEach((item, index) => (item.name = `\u793a\u4f8b\u56fe${index}`));\n    setValue(arr);\n  };\n\n  // \u5b9e\u65f6\u4e0a\u4f20\u65b9\u6cd5\n  const onUpload = (item: any): Promise<object | undefined> => {\n    return new Promise((resolve, reject) => {\n      const rate = Math.random();\n      setTimeout(() => {\n        if (rate > 0.3) {\n          // \u6210\u529f\n          return resolve({ fssid: rate.toString().slice(-6) });\n        }\n        reject('\u4e0a\u4f20\u5931\u8d25');\n      }, 3000);\n    });\n  };\n\n  return (\n    <ImagePicker\n      value={value}\n      onChange={onChange}\n      multiple\n      max={10}\n      mode=\"cover\"\n      onUpload={onUpload}\n    />\n  );\n};",
      i =
        "import React, { useState } from 'react';\n\nimport { Flex } from 'antd-mobile';\nimport { ImagePicker } from 'eco-image-picker';\nimport s from './idCard.less';\n\nconst iconIdCard = require('../../assets/images/icon-idcard.png');\nconst iconIdCardBack = require('../../assets/images/icon-idcard-back.png');\nconst iconPhoto = require('../../assets/images/icon-photo.png');\n\ninterface Files {\n  url: string; // \u56fe\u7247url\n  preview?: string; // \u9884\u89c8\u56fe\n  loading?: boolean; // \u56fe\u7247\u662f\u5426\u52a0\u8f7d\u4e2d\n  errorTip?: string; // \u9519\u8bef\u63d0\u793a\n  name?: string; // \u56fe\u7247\u540d\u79f0\n  [index: string]: any;\n}\n\nexport default () => {\n  const [idCard, setIdCard] = useState<Array<Files>>([\n    { name: '\u4eba\u50cf', url: '' },\n  ]);\n  const [idCardBack, setIdCardBack] = useState<Array<Files>>([\n    { name: '\u56fd\u5fbd', url: '' },\n  ]);\n\n  // \u5b9e\u65f6\u4e0a\u4f20\u65b9\u6cd5\n  const onUpload = (item: any): Promise<object | undefined> => {\n    console.log('onUpload', item);\n    return new Promise((resolve, reject) => {\n      const rate = Math.random();\n      setTimeout(() => {\n        if (rate > 0.3) {\n          // \u6210\u529f\n          return resolve({ fssid: rate.toString().slice(-6) });\n        }\n        reject('\u4e0a\u4f20\u5931\u8d25');\n      }, 3000);\n    });\n  };\n\n  // \u4eba\u50cf\u9762\u6539\u53d8\n  const onChangeIdCard = (arr: Array<Files>) => {\n    console.log('onChangeIdCard', arr);\n    if (arr.length === 0) {\n      arr.push({ name: '\u4eba\u50cf', url: '' });\n      return setIdCard(arr);\n    }\n    setIdCard(arr);\n  };\n\n  // \u56fd\u5fbd\u9762\u6539\u53d8\n  const onChangeIdCardBack = (arr: Array<Files>) => {\n    if (arr.length === 0) {\n      arr.push({ name: '\u56fd\u5fbd', url: '' });\n      return setIdCardBack(arr);\n    }\n    setIdCardBack(arr);\n  };\n\n  return (\n    <div className={s.root}>\n      <div className={s.item}>\n        <ImagePicker\n          value={idCard}\n          onChange={onChangeIdCard}\n          mode=\"cover\"\n          width=\"100%\"\n          height=\"90px\"\n          onUpload={onUpload}\n        >\n          <Flex className={s.children} justify=\"center\">\n            <img className={s.img} alt=\"\" src={iconIdCard} />\n            <img alt=\"\" className={s.iconPhoto} src={iconPhoto} />\n          </Flex>\n        </ImagePicker>\n      </div>\n      <div className={s.item}>\n        <ImagePicker\n          value={idCardBack}\n          onChange={onChangeIdCardBack}\n          mode=\"cover\"\n          width=\"100%\"\n          height=\"90px\"\n          onUpload={onUpload}\n        >\n          <Flex className={s.children} justify=\"center\">\n            <img className={s.img} alt=\"\" src={iconIdCardBack} />\n            <img alt=\"\" className={s.iconPhoto} src={iconPhoto} />\n          </Flex>\n        </ImagePicker>\n      </div>\n    </div>\n  );\n};",
      c =
        '.root {\n  display: flex;\n}\n.item {\n  flex: 1;\n  &:first-child {\n    margin-right: 10px;\n  }\n}\n.children {\n  background: #e8f1fc;\n  height: 90px;\n  position: relative;\n}\nimg {\n  width: 89px;\n  height: 57px;\n}\n.iconPhoto {\n  width: 32px;\n  height: 28px;\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n}',
      o =
        "import React, { useState } from 'react';\n\nimport { Toast } from 'antd-mobile';\nimport { ImagePicker } from 'eco-image-picker';\n\ninterface Files {\n  url: string; // \u56fe\u7247url\n  preview?: string; // \u9884\u89c8\u56fe\n  loading?: boolean; // \u56fe\u7247\u662f\u5426\u52a0\u8f7d\u4e2d\n  errorTip?: string; // \u9519\u8bef\u63d0\u793a\n  name?: string; // \u56fe\u7247\u540d\u79f0\n  [index: string]: any;\n}\n\nexport default () => {\n  const [value, setValue] = useState<Array<Files>>([]);\n\n  // \u6570\u7ec4\u6539\u53d8\n  const onChange = (arr: Array<Files>) => {\n    console.log('onChange', arr);\n    setValue(arr);\n  };\n\n  // \u5b9e\u65f6\u4e0a\u4f20\u65b9\u6cd5\n  const onUpload = (item: any): Promise<object | undefined> => {\n    console.log('item', item);\n    return new Promise((resolve, reject) => {\n      const rate = Math.random();\n      setTimeout(() => {\n        if (rate > 0.3) {\n          // \u6210\u529f\n          return resolve({ fssid: rate.toString().slice(-6) });\n        }\n        reject('\u4e0a\u4f20\u5931\u8d25');\n      }, 3000);\n    });\n  };\n\n  // \u67e5\u770b\u5927\u56fe\u65b9\u6cd5\n  const onGetPreviewUrl = (index: number): Promise<string> => {\n    return new Promise((resolve, reject) => {\n      Toast.loading('Loading...');\n      setTimeout(() => {\n        Toast.hide();\n        resolve(value[index].url);\n      }, 1000);\n    });\n  };\n\n  return (\n    <ImagePicker\n      value={value}\n      onChange={onChange}\n      multiple\n      max={12}\n      mode=\"cover\"\n      onUpload={onUpload}\n      resize\n      width=\"22%\"\n      onGetPreviewUrl={onGetPreviewUrl}\n    />\n  );\n};",
      m =
        "import React, { useState } from 'react';\n\nimport { ImagePicker } from 'eco-image-picker';\nimport { demo } from '../../assets/icon';\n\ninterface Files {\n  url: string; // \u56fe\u7247url\n  preview?: string; // \u9884\u89c8\u56fe\n  loading?: boolean; // \u56fe\u7247\u662f\u5426\u52a0\u8f7d\u4e2d\n  errorTip?: string; // \u9519\u8bef\u63d0\u793a\n  name?: string; // \u56fe\u7247\u540d\u79f0\n  [index: string]: any;\n}\n\nexport default () => {\n  const [value, setValue] = useState<Array<Files>>([\n    {\n      url: '',\n      fssid: 'id-1',\n    },\n    {\n      url: '',\n      fssid: 'id-2',\n    },\n  ]);\n\n  // \u6570\u7ec4\u6539\u53d8\n  const onChange = (arr: Array<Files>) => {\n    console.log('onChange', arr);\n    arr.forEach((item, index) => (item.name = `\u793a\u4f8b\u56fe${index}`));\n    setValue(arr);\n  };\n\n  // \u521d\u59cb\u5316\u65b9\u6cd5\n  const onInit = () => {\n    return new Promise((resolve, reject) => {\n      const rate = Math.random();\n      setTimeout(() => {\n        if (rate > 0.3) {\n          // \u6210\u529f\n          return resolve({ url: demo });\n        }\n        return reject('\u52a0\u8f7d\u5931\u8d25');\n      }, 3000);\n    });\n  };\n\n  // \u5b9e\u65f6\u4e0a\u4f20\u65b9\u6cd5\n  const onUpload = (item: any): Promise<object | undefined> => {\n    return new Promise((resolve, reject) => {\n      const rate = Math.random();\n      setTimeout(() => {\n        if (rate > 0.3) {\n          // \u6210\u529f\n          return resolve({ fssid: rate.toString().slice(-6) });\n        }\n        reject('\u4e0a\u4f20\u5931\u8d25');\n      }, 3000);\n    });\n  };\n\n  return (\n    <ImagePicker\n      value={value}\n      onChange={onChange}\n      multiple\n      max={10}\n      mode=\"cover\"\n      onUpload={onUpload}\n      onInit={onInit}\n    />\n  );\n};",
      u =
        'export const demo = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABcCAMAAAC8wqBSAAAAjVBMVEUAAADm5ubm5ubl5eXl5eXd3d3m5ubm5ubm5ubm5ua1tbXl5eXl5eXl5eXm5ubm5ubm5ubl5eXl5eXk5OTm5ubk5OTi4uLl5eXl5eXj4+Pc3Nzl5eXl5eXl5eXl5eXY2Njl5eXm5ubl5eXm5ubm5ubk5OTm5ubm5ubm5ubm5ubm5ubm5ubl5eXk5OTm5uZ+RDafAAAALnRSTlMAZhR72g/zmvvMAzmIcPHpRfnvVaxKIk9bKgrEdWs+BuTeoJWLMY/X0r63gmEbAQb9LQAAAo1JREFUaN7tmdmaojAQRgsRzMQGFVeURVxbu633f7wB0vPFLYZI0XPDuZQPj5XUTwHCO8x6Od/wO/Qx5wOe0sr+myxN+NuyZWIos337XRn/8GMTFY8Ysvg9GbcZuia58DCHeWYy6UJkVnXZwpc2Q1npwsEcqjOWNjNZJFxDAAKbRmZLlwnzAHNGnpFM1LWWLsPaYgOZJ+syZSFqiyvLvJHOpV9JSyeTLrmG5owDsZIcbkkw53CXL6tOXbK29QVucaY5Idyw92vUJbskGEMFeDwSddWyuTqX7MXSVcu2gKp4U2hpaakA7xCS6ubKsUtGZr92OZ9IyGCmuYcjZfvKdcmQlGAPanaYww42Abtylk7ULjEATxwo2GAOUw4CPpHH6xOWU361VBweisopCpN7onjEWK4wx+0DEbM15hw7z/OMYkvJ+MKCSJ1nN6STXTJlsm0Ud4OEeKpkh2v5M6hwupjjPyZ7iwU7IMV63gZ7VxZGR6fsg9HwWZ7xi9IkO/zkwDVThjlZh1qWrkqb9Zhn9ICceVlF97oKq/zo6NDL0tP9/ly6WPANDTAUj77h3XXljwMNkJ6xYMNBMBtgwQIaISlniZtcjzlccaBHfv1ZDLa+TzEzdfOfza/yfE6hKXqyJUQS2BAaI/T/pdhZobwZaIhDqchmEGGBO3c0vFhl7mgIA9H+PwvKfFdD9OrdjObcgIldK2VV6NW6ZzeUTTRbQio7KsfP8kQuY4lKNvPJZbhVbxm9LOgrCsuIZfJS+sgWyWXK990xa0bGxk8CPcJmZMgi/vhfCLVMMrkJQFie3JgM3c2085Pl/m6ARDI1n72dbX9sVwyRTKanlbWyVtbKUEUra2WtrJXpZHPr11j8BVuY017FDvZgAAAAAElFTkSuQmCC`;',
      s =
        "import React, { useState } from 'react';\n\nimport { ImageView } from 'eco-image-picker';\nimport { demo } from '../../assets/icon';\n\ninterface Files {\n  url: string; // \u56fe\u7247url\n  preview?: string; // \u9884\u89c8\u56fe\n  loading?: boolean; // \u56fe\u7247\u662f\u5426\u52a0\u8f7d\u4e2d\n  errorTip?: string; // \u9519\u8bef\u63d0\u793a\n  name?: string; // \u56fe\u7247\u540d\u79f0\n  [index: string]: any;\n}\n\nexport default () => {\n  const [value, setValue] = useState<Array<Files>>([\n    {\n      url: '',\n      fssid: 'id-1',\n    },\n    {\n      url: '',\n      fssid: 'id-2',\n    },\n  ]);\n\n  // \u6570\u7ec4\u6539\u53d8\n  const onChange = (arr: Array<Files>) => {\n    console.log('onChange', arr);\n    arr.forEach((item, index) => (item.name = `\u793a\u4f8b\u56fe${index}`));\n    setValue(arr);\n  };\n\n  // \u521d\u59cb\u5316\u65b9\u6cd5\n  const onInit = () => {\n    return new Promise((resolve, reject) => {\n      const rate = Math.random();\n      setTimeout(() => {\n        if (rate > 0.3) {\n          // \u6210\u529f\n          return resolve({ url: demo });\n        }\n        return reject('\u52a0\u8f7d\u5931\u8d25');\n      }, 3000);\n    });\n  };\n\n  // \u5b9e\u65f6\u4e0a\u4f20\u65b9\u6cd5\n  const onUpload = (item: any): Promise<object | undefined> => {\n    return new Promise((resolve, reject) => {\n      const rate = Math.random();\n      setTimeout(() => {\n        if (rate > 0.3) {\n          // \u6210\u529f\n          return resolve({ fssid: rate.toString().slice(-6) });\n        }\n        reject('\u4e0a\u4f20\u5931\u8d25');\n      }, 3000);\n    });\n  };\n\n  return (\n    <ImageView value={value} onChange={onChange} mode=\"cover\" onInit={onInit} />\n  );\n};";
    n['default'] = {
      'image-picker-base': {
        component: t('FKBv').default,
        previewerProps: {
          sources: { _: { tsx: a } },
          dependencies: {
            'antd-mobile': {
              version: '2.3.4',
              css: 'antd-mobile/dist/antd-mobile.css',
            },
            react: { version: '17.0.2' },
            'eco-image-picker': { version: '1.0.10' },
          },
          componentName: 'image-picker',
          identifier: 'image-picker-base',
        },
      },
      'image-picker-form': {
        component: t('XM9Y').default,
        previewerProps: {
          sources: { _: { tsx: r } },
          dependencies: {
            'antd-mobile': {
              version: '2.3.4',
              css: 'antd-mobile/dist/antd-mobile.css',
            },
            react: { version: '>= 16.9.0' },
            'rc-field-form': { version: '1.21.2' },
            'eco-image-picker': { version: '1.0.10' },
            'react-dom': { version: '>= 16.9.0' },
          },
          componentName: 'image-picker',
          identifier: 'image-picker-form',
        },
      },
      'image-picker-onupload': {
        component: t('jQK9').default,
        previewerProps: {
          sources: { _: { tsx: l } },
          dependencies: {
            react: { version: '17.0.2' },
            'eco-image-picker': { version: '1.0.10' },
          },
          componentName: 'image-picker',
          identifier: 'image-picker-onupload',
        },
      },
      'image-picker-idcard': {
        component: t('CK2m').default,
        previewerProps: {
          sources: {
            _: { tsx: i },
            'idCard.less': { import: './idCard.less', content: c },
          },
          dependencies: {
            'antd-mobile': {
              version: '2.3.4',
              css: 'antd-mobile/dist/antd-mobile.css',
            },
            react: { version: '17.0.2' },
            'eco-image-picker': { version: '1.0.10' },
          },
          componentName: 'image-picker',
          compact: !0,
          identifier: 'image-picker-idcard',
        },
      },
      'image-picker-resize': {
        component: t('cazh').default,
        previewerProps: {
          sources: { _: { tsx: o } },
          dependencies: {
            'antd-mobile': {
              version: '2.3.4',
              css: 'antd-mobile/dist/antd-mobile.css',
            },
            react: { version: '17.0.2' },
            'eco-image-picker': { version: '1.0.10' },
          },
          componentName: 'image-picker',
          identifier: 'image-picker-resize',
        },
      },
      'image-picker-init': {
        component: t('0vTL').default,
        previewerProps: {
          sources: {
            _: { tsx: m },
            'assets/icon/index.ts': { import: '../../assets/icon', content: u },
          },
          dependencies: {
            react: { version: '17.0.2' },
            'eco-image-picker': { version: '1.0.10' },
          },
          componentName: 'image-picker',
          identifier: 'image-picker-init',
        },
      },
      'image-view-init': {
        component: t('JobO').default,
        previewerProps: {
          sources: {
            _: { tsx: s },
            'assets/icon/index.ts': { import: '../../assets/icon', content: u },
          },
          dependencies: {
            react: { version: '17.0.2' },
            'eco-image-picker': { version: '1.0.10' },
          },
          componentName: 'image-view',
          identifier: 'image-view-init',
        },
      },
    };
  },
  'S/KV': function (e, n, t) {
    e.exports = {
      root: 'root___UMgaZ',
      item: 'item___2hoap',
      children: 'children___2E8OG',
      iconPhoto: 'iconPhoto___6J49Q',
    };
  },
  XM9Y: function (e, n, t) {
    'use strict';
    t.r(n);
    t('BXRl');
    var a = t('LajT'),
      r = t.n(a),
      l = (t('dlV3'), t('4cdd')),
      i = t.n(l),
      c = t('tJVT'),
      o = t('q1tI'),
      m = t.n(o),
      u = t('85Yc'),
      s = t('/7QA');
    n['default'] = () => {
      var e = u['b'].useForm(),
        n = Object(c['a'])(e, 1),
        t = n[0];
      Object(o['useEffect'])(() => {
        t.setFieldsValue({ filesList: [] });
      }, []);
      var a = () => {
        t.getFieldsValue();
      };
      return m.a.createElement(
        'div',
        null,
        m.a.createElement(
          u['b'],
          { form: t },
          m.a.createElement(
            u['a'],
            { name: 'filesList' },
            m.a.createElement(s['a'], null),
          ),
        ),
        m.a.createElement(i.a, null),
        m.a.createElement(
          r.a,
          { onClick: a, size: 'small', type: 'primary', inline: !0 },
          'Submit',
        ),
      );
    };
  },
  bCY9: function (e, n, t) {
    'use strict';
    t.d(n, 'a', function () {
      return r;
    });
    var a = t('rlch'),
      r = new a['b']({
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
  cMq5: function (e, n, t) {
    'use strict';
    t.d(n, 'a', function () {
      return a;
    });
    var a =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABcCAMAAAC8wqBSAAAAjVBMVEUAAADm5ubm5ubl5eXl5eXd3d3m5ubm5ubm5ubm5ua1tbXl5eXl5eXl5eXm5ubm5ubm5ubl5eXl5eXk5OTm5ubk5OTi4uLl5eXl5eXj4+Pc3Nzl5eXl5eXl5eXl5eXY2Njl5eXm5ubl5eXm5ubm5ubk5OTm5ubm5ubm5ubm5ubm5ubm5ubl5eXk5OTm5uZ+RDafAAAALnRSTlMAZhR72g/zmvvMAzmIcPHpRfnvVaxKIk9bKgrEdWs+BuTeoJWLMY/X0r63gmEbAQb9LQAAAo1JREFUaN7tmdmaojAQRgsRzMQGFVeURVxbu633f7wB0vPFLYZI0XPDuZQPj5XUTwHCO8x6Od/wO/Qx5wOe0sr+myxN+NuyZWIos337XRn/8GMTFY8Ysvg9GbcZuia58DCHeWYy6UJkVnXZwpc2Q1npwsEcqjOWNjNZJFxDAAKbRmZLlwnzAHNGnpFM1LWWLsPaYgOZJ+syZSFqiyvLvJHOpV9JSyeTLrmG5owDsZIcbkkw53CXL6tOXbK29QVucaY5Idyw92vUJbskGEMFeDwSddWyuTqX7MXSVcu2gKp4U2hpaakA7xCS6ubKsUtGZr92OZ9IyGCmuYcjZfvKdcmQlGAPanaYww42Abtylk7ULjEATxwo2GAOUw4CPpHH6xOWU361VBweisopCpN7onjEWK4wx+0DEbM15hw7z/OMYkvJ+MKCSJ1nN6STXTJlsm0Ud4OEeKpkh2v5M6hwupjjPyZ7iwU7IMV63gZ7VxZGR6fsg9HwWZ7xi9IkO/zkwDVThjlZh1qWrkqb9Zhn9ICceVlF97oKq/zo6NDL0tP9/ly6WPANDTAUj77h3XXljwMNkJ6xYMNBMBtgwQIaISlniZtcjzlccaBHfv1ZDLa+TzEzdfOfza/yfE6hKXqyJUQS2BAaI/T/pdhZobwZaIhDqchmEGGBO3c0vFhl7mgIA9H+PwvKfFdD9OrdjObcgIldK2VV6NW6ZzeUTTRbQio7KsfP8kQuY4lKNvPJZbhVbxm9LOgrCsuIZfJS+sgWyWXK990xa0bGxk8CPcJmZMgi/vhfCLVMMrkJQFie3JgM3c2085Pl/m6ARDI1n72dbX9sVwyRTKanlbWyVtbKUEUra2WtrJXpZHPr11j8BVuY017FDvZgAAAAAElFTkSuQmCC';
  },
  cazh: function (e, n, t) {
    'use strict';
    t.r(n);
    t('TttT');
    var a = t('Kl5d'),
      r = t.n(a),
      l = t('tJVT'),
      i = t('q1tI'),
      c = t.n(i),
      o = t('/7QA');
    n['default'] = () => {
      var e = Object(i['useState'])([]),
        n = Object(l['a'])(e, 2),
        t = n[0],
        a = n[1],
        m = (e) => {
          a(e);
        },
        u = (e) =>
          new Promise((e, n) => {
            var t = Math.random();
            setTimeout(() => {
              if (t > 0.3) return e({ fssid: t.toString().slice(-6) });
              n('\u4e0a\u4f20\u5931\u8d25');
            }, 3e3);
          }),
        s = (e) =>
          new Promise((n, a) => {
            r.a.loading('Loading...'),
              setTimeout(() => {
                r.a.hide(), n(t[e].url);
              }, 1e3);
          });
      return c.a.createElement(o['a'], {
        value: t,
        onChange: m,
        multiple: !0,
        max: 12,
        mode: 'cover',
        onUpload: u,
        resize: !0,
        width: '22%',
        onGetPreviewUrl: s,
      });
    };
  },
  erb0: function (e, n, t) {
    e.exports = {
      root: 'root___3qxUD',
      justifyContent: 'justifyContent___1Zpuq',
      hidden: 'hidden___2HrBf',
      imgBox: 'imgBox___3fkFT',
      img: 'img___3kqcM',
      errorTip: 'errorTip___2YBo5',
      iconRemove: 'iconRemove___39dCt',
      parent: 'parent___2iped',
      noMargin: 'noMargin___3PtND',
      marginBottom: 'marginBottom___1_jKe',
      name: 'name___1JV_D',
      childrenEle: 'childrenEle___3HYyv',
      defaultDashed: 'defaultDashed___1DjJT',
      defaultBackGround: 'defaultBackGround___Qk5EN',
      defaultBorder: 'defaultBorder___3jW6w',
      loadingBox: 'loadingBox___3WPNf',
      loading: 'loading___3UDZf',
      myRound: 'myRound___3EOwF',
    };
  },
  gql7: function (e, n, t) {
    'use strict';
    t.r(n);
    var a = t('q1tI'),
      r = t.n(a),
      l = t('dEAq'),
      i = t('H1Ra');
    t('Rsk4');
    n['default'] = (e) => (
      r.a.useEffect(() => {
        var n;
        null !== e &&
          void 0 !== e &&
          null !== (n = e.location) &&
          void 0 !== n &&
          n.hash &&
          l['AnchorLink'].scrollToAnchor(
            decodeURIComponent(e.location.hash.slice(1)),
          );
      }, []),
      r.a.createElement(
        r.a.Fragment,
        null,
        r.a.createElement(
          'div',
          { className: 'markdown' },
          r.a.createElement(
            'h1',
            { id: 'eco-image-picker' },
            r.a.createElement(
              l['AnchorLink'],
              { to: '#eco-image-picker', 'aria-hidden': 'true', tabIndex: -1 },
              r.a.createElement('span', { className: 'icon icon-link' }),
            ),
            'eco-image-picker',
          ),
          r.a.createElement(
            'p',
            null,
            '\u57fa\u4e8e',
            r.a.createElement('code', null, 'react'),
            '\u7684\u79fb\u52a8\u7aef\u56fe\u7247\u4e0a\u4f20\u7ec4\u4ef6',
          ),
          r.a.createElement(
            'p',
            null,
            r.a.createElement(
              l['Link'],
              { to: 'https://yicoding.github.io/eco-image-picker' },
              '\u67e5\u770b\u6587\u6863\u548c\u793a\u4f8b',
            ),
          ),
          r.a.createElement(
            'h2',
            { id: '\u4f7f\u7528' },
            r.a.createElement(
              l['AnchorLink'],
              { to: '#\u4f7f\u7528', 'aria-hidden': 'true', tabIndex: -1 },
              r.a.createElement('span', { className: 'icon icon-link' }),
            ),
            '\u4f7f\u7528',
          ),
          r.a.createElement(
            'h3',
            { id: 'npm-\u6216-yarn-\u5b89\u88c5' },
            r.a.createElement(
              l['AnchorLink'],
              {
                to: '#npm-\u6216-yarn-\u5b89\u88c5',
                'aria-hidden': 'true',
                tabIndex: -1,
              },
              r.a.createElement('span', { className: 'icon icon-link' }),
            ),
            'npm \u6216 yarn \u5b89\u88c5',
          ),
          r.a.createElement(i['a'], {
            code: 'npm install eco-image-picker --save',
            lang: 'shell',
          }),
          r.a.createElement('br', null),
          r.a.createElement(i['a'], {
            code: 'yarn add eco-image-picker',
            lang: 'shell',
          }),
          r.a.createElement('br', null),
          r.a.createElement(i['a'], {
            code: "import { ImagePicker } from 'eco-image-picker';",
            lang: 'shell',
          }),
        ),
      )
    );
  },
  jQK9: function (e, n, t) {
    'use strict';
    t.r(n);
    var a = t('tJVT'),
      r = t('q1tI'),
      l = t.n(r),
      i = t('/7QA');
    n['default'] = () => {
      var e = Object(r['useState'])([]),
        n = Object(a['a'])(e, 2),
        t = n[0],
        c = n[1],
        o = (e) => {
          e.forEach((e, n) => (e.name = '\u793a\u4f8b\u56fe'.concat(n))), c(e);
        },
        m = (e) =>
          new Promise((e, n) => {
            var t = Math.random();
            setTimeout(() => {
              if (t > 0.3) return e({ fssid: t.toString().slice(-6) });
              n('\u4e0a\u4f20\u5931\u8d25');
            }, 3e3);
          });
      return l.a.createElement(i['a'], {
        value: t,
        onChange: o,
        multiple: !0,
        max: 10,
        mode: 'cover',
        onUpload: m,
      });
    };
  },
  mZby: function (e, n, t) {
    'use strict';
    t.r(n);
    var a = t('q1tI'),
      r = t.n(a),
      l = t('dEAq'),
      i = t('Zxc8'),
      c = t('Rsk4'),
      o = r.a.memo(c['default']['image-picker-base'].component),
      m = r.a.memo(c['default']['image-picker-form'].component),
      u = r.a.memo(c['default']['image-picker-onupload'].component),
      s = r.a.memo(c['default']['image-picker-idcard'].component),
      d = r.a.memo(c['default']['image-picker-resize'].component),
      p = r.a.memo(c['default']['image-picker-init'].component);
    n['default'] = (e) => (
      r.a.useEffect(() => {
        var n;
        null !== e &&
          void 0 !== e &&
          null !== (n = e.location) &&
          void 0 !== n &&
          n.hash &&
          l['AnchorLink'].scrollToAnchor(
            decodeURIComponent(e.location.hash.slice(1)),
          );
      }, []),
      r.a.createElement(
        r.a.Fragment,
        null,
        r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h1',
              { id: 'imagepicker-\u56fe\u7247\u9009\u62e9\u5668' },
              r.a.createElement(
                l['AnchorLink'],
                {
                  to: '#imagepicker-\u56fe\u7247\u9009\u62e9\u5668',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'ImagePicker \u56fe\u7247\u9009\u62e9\u5668',
            ),
            r.a.createElement(
              'h2',
              { id: '\u57fa\u672c\u7528\u6cd5' },
              r.a.createElement(
                l['AnchorLink'],
                {
                  to: '#\u57fa\u672c\u7528\u6cd5',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u57fa\u672c\u7528\u6cd5',
            ),
          ),
          r.a.createElement(
            i['default'],
            c['default']['image-picker-base'].previewerProps,
            r.a.createElement(o, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h2',
              { id: '\u7ed3\u5408-form' },
              r.a.createElement(
                l['AnchorLink'],
                {
                  to: '#\u7ed3\u5408-form',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u7ed3\u5408 form',
            ),
          ),
          r.a.createElement(
            i['default'],
            c['default']['image-picker-form'].previewerProps,
            r.a.createElement(m, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h2',
              { id: '\u591a\u9009\u5b9e\u65f6\u4e0a\u4f20' },
              r.a.createElement(
                l['AnchorLink'],
                {
                  to: '#\u591a\u9009\u5b9e\u65f6\u4e0a\u4f20',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u591a\u9009+\u5b9e\u65f6\u4e0a\u4f20',
            ),
          ),
          r.a.createElement(
            i['default'],
            c['default']['image-picker-onupload'].previewerProps,
            r.a.createElement(u, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h2',
              { id: '\u81ea\u5b9a\u4e49\u9009\u62e9\u5668\u5b50\u7ec4\u4ef6' },
              r.a.createElement(
                l['AnchorLink'],
                {
                  to: '#\u81ea\u5b9a\u4e49\u9009\u62e9\u5668\u5b50\u7ec4\u4ef6',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u81ea\u5b9a\u4e49\u9009\u62e9\u5668(\u5b50\u7ec4\u4ef6)',
            ),
          ),
          r.a.createElement(
            i['default'],
            c['default']['image-picker-idcard'].previewerProps,
            r.a.createElement(s, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h2',
              {
                id: '\u591a\u9009\u9ad8\u5ea6\u4e0e\u5bbd\u5ea6\u76f8\u7b49\u9884\u89c8\u56fe',
              },
              r.a.createElement(
                l['AnchorLink'],
                {
                  to: '#\u591a\u9009\u9ad8\u5ea6\u4e0e\u5bbd\u5ea6\u76f8\u7b49\u9884\u89c8\u56fe',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u591a\u9009+\u9ad8\u5ea6\u4e0e\u5bbd\u5ea6\u76f8\u7b49+\u9884\u89c8\u56fe',
            ),
          ),
          r.a.createElement(
            i['default'],
            c['default']['image-picker-resize'].previewerProps,
            r.a.createElement(d, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h2',
              { id: '\u521d\u59cb\u5316\u5916\u90e8\u8bf7\u6c42' },
              r.a.createElement(
                l['AnchorLink'],
                {
                  to: '#\u521d\u59cb\u5316\u5916\u90e8\u8bf7\u6c42',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u521d\u59cb\u5316\u5916\u90e8\u8bf7\u6c42',
            ),
          ),
          r.a.createElement(
            i['default'],
            c['default']['image-picker-init'].previewerProps,
            r.a.createElement(p, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h2',
              { id: 'api' },
              r.a.createElement(
                l['AnchorLink'],
                { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'API',
            ),
            r.a.createElement(
              'h3',
              { id: 'imagepicker' },
              r.a.createElement(
                l['AnchorLink'],
                { to: '#imagepicker', 'aria-hidden': 'true', tabIndex: -1 },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'ImagePicker',
            ),
            r.a.createElement(
              'table',
              null,
              r.a.createElement(
                'thead',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('th', null, '\u5c5e\u6027'),
                  r.a.createElement('th', null, '\u8bf4\u660e'),
                  r.a.createElement('th', null, '\u7c7b\u578b'),
                  r.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'value'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u56fe\u7247\u6587\u4ef6\u6570\u7ec4,\u5143\u7d20\u4e3a\u5bf9\u8c61,\u5305\u542b\u5c5e\u6027 ',
                    r.a.createElement('code', null, 'url'),
                    ': \u56fe\u7247\u8def\u5f84(\u5fc5\u586b), ',
                    r.a.createElement('code', null, 'preview'),
                    ': \u56fe\u7247\u9884\u89c8\u56fe, ',
                    r.a.createElement('code', null, 'loading'),
                    ': \u56fe\u7247\u52a0\u8f7d\u72b6\u6001, ',
                    r.a.createElement('code', null, 'errorTip'),
                    ': \u56fe\u7247\u52a0\u8f7d\u5931\u8d25\u63d0\u793a\u6587\u6848,',
                    r.a.createElement('code', null, 'name'),
                    ': \u56fe\u7247\u5e95\u90e8\u663e\u793a\u7684\u540d\u79f0;\u4ee5\u53ca\u4e1a\u52a1\u9700\u8981\u7684\u5176\u5b83\u5c5e\u6027',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'Array'),
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, '[]'),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'onChange'),
                  r.a.createElement(
                    'td',
                    null,
                    'files \u503c\u53d1\u751f\u53d8\u5316\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement(
                      'code',
                      null,
                      '(arr: Array<Files>) => void',
                    ),
                  ),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'max'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u6700\u5927\u4e0a\u4f20\u6587\u4ef6\u6570\u91cf',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'number'),
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, '1'),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'quality'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u56fe\u7247\u538b\u7f29\u6bd4\u4f8b,0~1',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'number'),
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement(
                      'code',
                      null,
                      '\u9ed8\u8ba4\u4e0d\u538b\u7f29',
                    ),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'onUpload'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u56fe\u7247\u5b9e\u65f6\u4e0a\u4f20\u65b9\u6cd5',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement(
                      'code',
                      null,
                      '(file) => Promise<object or undefined>',
                    ),
                  ),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'onInit'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u56fe\u7247\u521d\u59cb\u5316\u52a0\u8f7d',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement(
                      'code',
                      null,
                      '(file) => Promise<object or undefined>',
                    ),
                  ),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'onGetPreviewUrl'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u83b7\u53d6\u9884\u89c8\u56fe\u7247\u65b9\u6cd5',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement(
                      'code',
                      null,
                      '(index: number) => Promise<string>',
                    ),
                  ),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'accept'),
                  r.a.createElement('td', null, '\u56fe\u7247\u7c7b\u578b'),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'string'),
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'image/*'),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'capture'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u56fe\u7247\u9009\u62e9\u7684\u65b9\u5f0f',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'string'),
                  ),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'multiple'),
                  r.a.createElement('td', null, '\u662f\u5426\u591a\u9009'),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'boolean'),
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'false'),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'resize'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u9ad8\u5ea6\u662f\u5426\u6839\u636e\u5bbd\u5ea6\u8ba1\u7b97,\u4e3a',
                    r.a.createElement('code', null, 'true'),
                    '\u65f6\uff0c',
                    r.a.createElement('code', null, 'width'),
                    '\u9700\u8981\u586b\u5199\u767e\u5206\u6bd4',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'boolean'),
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'false'),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'width'),
                  r.a.createElement('td', null, '\u56fe\u7247\u5bbd\u5ea6'),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'string'),
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, '80px'),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'height'),
                  r.a.createElement('td', null, '\u56fe\u7247\u9ad8\u5ea6'),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'string'),
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, '80px'),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'config'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u56fe\u7247\u7684\u989d\u5916\u6269\u5c55\u9879,',
                    r.a.createElement('code', null, 'defaultBorder'),
                    ': \u663e\u793a\u5b9e\u7ebf\u8fb9\u6846, ',
                    r.a.createElement('code', null, 'defaultBackGround'),
                    ': \u663e\u793a\u9ed8\u8ba4\u80cc\u666f\u8272, ',
                    r.a.createElement('code', null, 'defaultDashed'),
                    ': \u663e\u793a\u865a\u7ebf\u8fb9\u6846',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'string[]'),
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'defaultBorder'),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'children'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u9009\u62e9\u56fe\u7247\u5143\u7d20',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'React.ReactNode'),
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'default'),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'disabledSelect'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u7981\u6b62\u9009\u62e9\u56fe\u7247',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'boolean'),
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'false'),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'disabledPreview'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u7981\u7528\u9884\u89c8\u56fe\u7247',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'boolean'),
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'false'),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'showRemove'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u663e\u793a\u5220\u9664\u6309\u94ae',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'boolean'),
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'true'),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'replace'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u66ff\u6362\u56fe\u7247\u5217\u8868',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'boolean'),
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'false'),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'mode'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u56fe\u7247\u88c1\u5207\u7c7b\u578b(\u540c css \u4e2d',
                    r.a.createElement('code', null, 'object-fit'),
                    '\u5c5e\u6027), ',
                    r.a.createElement('code', null, 'fill'),
                    ', ',
                    r.a.createElement('code', null, 'cover'),
                    ', ',
                    r.a.createElement('code', null, 'contain'),
                    ', ',
                    r.a.createElement('code', null, 'scale-down'),
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'string'),
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'fill'),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'size'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u5355\u4e2a\u56fe\u7247\u9650\u5236\u5927\u5c0f\uff0c\u5355\u4f4d M',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'number'),
                  ),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'onFail'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u56fe\u7247\u9009\u62e9\u5931\u8d25',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, '(msg: string)=> void'),
                  ),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'ref'),
                  r.a.createElement('td', null, '\u6302\u8f7d input'),
                  r.a.createElement('td', null, '-'),
                  r.a.createElement('td', null, '-'),
                ),
              ),
            ),
          ),
        ),
      )
    );
  },
  okqA: function (e, n) {
    e.exports =
      'data:image/png;base64,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';
  },
  q3YX: function (e) {
    e.exports = JSON.parse(
      '{"menus":{"en-US":{"*":[{"path":"/","title":"eco-image-picker","meta":{"order":null}},{"title":"ImagePicker \u56fe\u7247\u9009\u62e9\u5668","path":"/image-picker","meta":{"__fallback":true},"children":[]},{"title":"ImageView \u56fe\u7247\u9884\u89c8","path":"/image-view","meta":{"__fallback":true},"children":[]}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{},"title":"eco-image-picker","logo":"https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png","mode":"doc","repository":{"url":"https://github.com/Yicoding/eco-image-picker","branch":"master"},"theme":{}}',
    );
  },
  tB8F: function (e, n, t) {
    'use strict';
    t.r(n);
    t('pNMO'),
      t('4Brf'),
      t('tjZM'),
      t('3I1R'),
      t('7+kd'),
      t('KhsS'),
      t('gOCb'),
      t('a57n'),
      t('GXvd'),
      t('I1Gw'),
      t('gXIK'),
      t('lEou'),
      t('ma9I'),
      t('TeQF'),
      t('BIHw'),
      t('XbcX'),
      t('pjDv'),
      t('yq1k'),
      t('yXV3'),
      t('4mDm'),
      t('uqXc'),
      t('2B1R'),
      t('E9XD'),
      t('9N29'),
      t('Junv'),
      t('+2oP'),
      t('ToJy'),
      t('94Xl'),
      t('pDQq'),
      t('QGkA'),
      t('c9m3'),
      t('wZ/5'),
      t('rOQg'),
      t('7+zs'),
      t('tW5y'),
      t('DEfu'),
      t('Tskq'),
      t('Uydy'),
      t('QFcT'),
      t('I9xj'),
      t('w1rZ'),
      t('toAj'),
      t('zKZe'),
      t('Eqjn'),
      t('5xtp'),
      t('T63A'),
      t('wfmh'),
      t('27RR'),
      t('v5b1'),
      t('W/eh'),
      t('07d7'),
      t('B6y2'),
      t('5s+n'),
      t('p532'),
      t('pv2x'),
      t('SuFq'),
      t('ftMj'),
      t('TWNs'),
      t('U3f4'),
      t('JfAA'),
      t('YGK4'),
      t('inlA'),
      t('JTJg'),
      t('Rm1S'),
      t('hDyC'),
      t('TZCg'),
      t('UxlC'),
      t('hByQ'),
      t('EnZy'),
      t('LKBx'),
      t('SYor'),
      t('HiXI'),
      t('7ueG'),
      t('z8NH'),
      t('SpvK'),
      t('/Yfv'),
      t('iwkZ'),
      t('FDzp'),
      t('XMab'),
      t('ilnZ'),
      t('hMMk'),
      t('+ywr'),
      t('IL/d'),
      t('gvgV'),
      t('7JcK'),
      t('s5qe'),
      t('cvf0'),
      t('ENF9'),
      t('H+LF'),
      t('66V8'),
      t('iIM6'),
      t('2tOg'),
      t('gYJb'),
      t('EDT/'),
      t('j+VE'),
      t('wgYD'),
      t('R3/m'),
      t('l/vG'),
      t('0q/z'),
      t('n5pg'),
      t('zu+z'),
      t('ihrJ'),
      t('Q7Pz'),
      t('unQa'),
      t('Vnov'),
      t('nIe3'),
      t('CUyW'),
      t('qc1c'),
      t('5921'),
      t('VOz1'),
      t('Thag'),
      t('9D6x'),
      t('cOPa'),
      t('vdRX'),
      t('KrxN'),
      t('SL6q'),
      t('lehK'),
      t('eO0o'),
      t('NqR8'),
      t('w7s6'),
      t('uWhJ'),
      t('WPzJ'),
      t('NV22'),
      t('ny8l'),
      t('a5/B'),
      t('vzwy'),
      t('pevA'),
      t('8go2'),
      t('DrvE'),
      t('kCkZ'),
      t('++zV'),
      t('Y4C7'),
      t('ZsH6'),
      t('vZi8'),
      t('5r1n'),
      t('sQ9d'),
      t('bdeN'),
      t('AwgR'),
      t('qgGA'),
      t('49+q'),
      t('AVoK'),
      t('hcok'),
      t('dNT4'),
      t('3uUd'),
      t('tijO'),
      t('1kQv'),
      t('ZY7T'),
      t('C1JJ'),
      t('lmH4'),
      t('Co1j'),
      t('5JV0'),
      t('ctDJ'),
      t('8r4s'),
      t('JwUS'),
      t('qaHo'),
      t('Si40'),
      t('BGb9'),
      t('fN96'),
      t('UzNg'),
      t('DhMN'),
      t('rZ3M'),
      t('apDx'),
      t('4XaG'),
      t('6V7H'),
      t('cfiF'),
      t('702D'),
      t('TJ79'),
      t('Z4nd'),
      t('8STE'),
      t('spTT'),
      t('rb3L'),
      t('FZtP'),
      t('3bBZ'),
      t('Ew+T'),
      t('n5b4'),
      t('Kz25'),
      t('vxnP'),
      t('mGGf'),
      t('97ZR');
    var a = t('bCY9'),
      r = t('FfOG'),
      l = t('rlch'),
      i = t('/dmz'),
      c = t('q1tI'),
      o = t.n(c);
    function m() {
      var e = [
        {
          path: '/~demos/:uuid',
          layout: !1,
          wrappers: [t('KcUY').default],
          component: (e) => {
            var n = t('F4QJ'),
              a = n.default,
              r = t('Zxc8'),
              l = r.default,
              i = t('Rsk4'),
              c = i.default,
              m = t('dEAq'),
              u = m.usePrefersColor,
              s = a(e, c);
            switch ((u(), s.length)) {
              case 1:
                return s[0];
              case 2:
                return o.a.createElement(l, s[0], s[1]);
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
          wrappers: [t('KcUY').default, t('0Bia').default],
          routes: [
            {
              path: '/',
              component: t('gql7').default,
              exact: !0,
              meta: {
                locale: 'en-US',
                order: null,
                filePath: 'README.md',
                updatedTime: 1632905629e3,
                slugs: [
                  {
                    depth: 1,
                    value: 'eco-image-picker',
                    heading: 'eco-image-picker',
                  },
                  { depth: 2, value: '\u4f7f\u7528', heading: '\u4f7f\u7528' },
                  {
                    depth: 3,
                    value: 'npm \u6216 yarn \u5b89\u88c5',
                    heading: 'npm-\u6216-yarn-\u5b89\u88c5',
                  },
                ],
                title: 'eco-image-picker',
              },
              title: 'eco-image-picker',
            },
            {
              path: '/image-picker',
              component: t('mZby').default,
              exact: !0,
              meta: {
                filePath: 'src/image-picker/index.md',
                updatedTime: 1631861951e3,
                componentName: 'image-picker',
                group: {
                  title: 'ImagePicker \u56fe\u7247\u9009\u62e9\u5668',
                  __fallback: !0,
                  path: '/image-picker',
                },
                slugs: [
                  {
                    depth: 1,
                    value: 'ImagePicker \u56fe\u7247\u9009\u62e9\u5668',
                    heading: 'imagepicker-\u56fe\u7247\u9009\u62e9\u5668',
                  },
                  {
                    depth: 2,
                    value: '\u57fa\u672c\u7528\u6cd5',
                    heading: '\u57fa\u672c\u7528\u6cd5',
                  },
                  {
                    depth: 2,
                    value: '\u7ed3\u5408 form',
                    heading: '\u7ed3\u5408-form',
                  },
                  {
                    depth: 2,
                    value: '\u591a\u9009+\u5b9e\u65f6\u4e0a\u4f20',
                    heading: '\u591a\u9009\u5b9e\u65f6\u4e0a\u4f20',
                  },
                  {
                    depth: 2,
                    value:
                      '\u81ea\u5b9a\u4e49\u9009\u62e9\u5668(\u5b50\u7ec4\u4ef6)',
                    heading:
                      '\u81ea\u5b9a\u4e49\u9009\u62e9\u5668\u5b50\u7ec4\u4ef6',
                  },
                  {
                    depth: 2,
                    value:
                      '\u591a\u9009+\u9ad8\u5ea6\u4e0e\u5bbd\u5ea6\u76f8\u7b49+\u9884\u89c8\u56fe',
                    heading:
                      '\u591a\u9009\u9ad8\u5ea6\u4e0e\u5bbd\u5ea6\u76f8\u7b49\u9884\u89c8\u56fe',
                  },
                  {
                    depth: 2,
                    value: '\u521d\u59cb\u5316\u5916\u90e8\u8bf7\u6c42',
                    heading: '\u521d\u59cb\u5316\u5916\u90e8\u8bf7\u6c42',
                  },
                  { depth: 2, value: 'API', heading: 'api' },
                  { depth: 3, value: 'ImagePicker', heading: 'imagepicker' },
                ],
                title: 'ImagePicker \u56fe\u7247\u9009\u62e9\u5668',
              },
              title: 'ImagePicker \u56fe\u7247\u9009\u62e9\u5668',
            },
            {
              path: '/image-view',
              component: t('AvFv').default,
              exact: !0,
              meta: {
                filePath: 'src/image-view/index.md',
                updatedTime: 1632905629e3,
                componentName: 'image-view',
                group: {
                  title: 'ImageView \u56fe\u7247\u9884\u89c8',
                  __fallback: !0,
                  path: '/image-view',
                },
                slugs: [
                  {
                    depth: 1,
                    value: 'ImageView \u56fe\u7247\u9884\u89c8',
                    heading: 'imageview-\u56fe\u7247\u9884\u89c8',
                  },
                  {
                    depth: 2,
                    value: '\u57fa\u672c\u7528\u6cd5',
                    heading: '\u57fa\u672c\u7528\u6cd5',
                  },
                  { depth: 2, value: 'API', heading: 'api' },
                  { depth: 3, value: 'ImageView', heading: 'imageview' },
                ],
                title: 'ImageView \u56fe\u7247\u9884\u89c8',
              },
              title: 'ImageView \u56fe\u7247\u9884\u89c8',
            },
          ],
          title: 'eco-image-picker',
          component: (e) => e.children,
        },
      ];
      return (
        a['a'].applyPlugins({
          key: 'patchRoutes',
          type: l['a'].event,
          args: { routes: e },
        }),
        e
      );
    }
    var u = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return a['a'].applyPlugins({
          key: 'render',
          type: l['a'].compose,
          initialValue: () => {
            var n = a['a'].applyPlugins({
              key: 'modifyClientRenderOpts',
              type: l['a'].modify,
              initialValue: {
                routes: e.routes || m(),
                plugin: a['a'],
                history: Object(r['a'])(e.hot),
                isServer: Object({ NODE_ENV: 'production' }).__IS_SERVER,
                rootElement: 'root',
                defaultTitle: 'eco-image-picker',
              },
            });
            return Object(i['a'])(n);
          },
          args: e,
        });
      },
      s = u();
    n['default'] = s();
    window.g_umi = { version: '3.5.18' };
  },
  x2v5: function (e) {
    e.exports = JSON.parse('{}');
  },
});