(() => {
  "use strict";
  var e = {},
    r = {};
  function t(n) {
    if (r[n]) return r[n].exports;
    var o = (r[n] = { exports: {} });
    return e[n].call(o.exports, o, o.exports, t), o.exports;
  }
  (t.m = e),
    (t.x = (e) => {}),
    (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (t.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 666: 0 },
        r = [],
        n = (e) => {},
        o = (o, l) => {
          for (var p, s, [a, u, h, i] = l, f = 0, c = []; f < a.length; f++)
            (s = a[f]), t.o(e, s) && e[s] && c.push(e[s][0]), (e[s] = 0);
          for (p in u) t.o(u, p) && (t.m[p] = u[p]);
          for (h && h(t), o && o(l); c.length; ) c.shift()();
          return i && r.push.apply(r, i), n();
        },
        l = (self.webpackChunksphinx_scylladb_theme =
          self.webpackChunksphinx_scylladb_theme || []);
      function p() {
        for (var n, o = 0; o < r.length; o++) {
          for (var l = r[o], p = !0, s = 1; s < l.length; s++) {
            var a = l[s];
            0 !== e[a] && (p = !1);
          }
          p && (r.splice(o--, 1), (n = t((t.s = l[0]))));
        }
        return 0 === r.length && (t.x(), (t.x = (e) => {})), n;
      }
      l.forEach(o.bind(null, 0)), (l.push = o.bind(null, l.push.bind(l)));
      var s = t.x;
      t.x = () => ((t.x = s || ((e) => {})), (n = p)());
    })(),
    t.x();
})();
