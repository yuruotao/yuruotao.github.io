(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, i, r) {
      var o = r(11),
        a = r(34).f,
        c = r(61),
        l = r(28),
        u = r(189),
        h = r(266),
        d = r(111);
      t.exports = function (t, i) {
        var r,
          p,
          v,
          g,
          m,
          y = t.target,
          b = t.global,
          _ = t.stat;
        if ((r = b ? o : _ ? o[y] || u(y, {}) : (o[y] || {}).prototype))
          for (p in i) {
            if (
              ((g = i[p]),
              (v = t.dontCallGetSet ? (m = a(r, p)) && m.value : r[p]),
              !d(b ? p : y + (_ ? "." : "#") + p, t.forced) && void 0 !== v)
            ) {
              if (typeof g == typeof v) continue;
              h(g, v);
            }
            (t.sham || (v && v.sham)) && c(g, "sham", !0), l(r, p, g, t);
          }
      };
    },
    ,
    ,
    function (t, i) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    },
    function (t, i, r) {
      var o = r(106),
        a = Function.prototype,
        c = a.call,
        l = o && a.bind.bind(c, c);
      t.exports = o
        ? l
        : function (t) {
            return function () {
              return c.apply(t, arguments);
            };
          };
    },
    function (t, i, r) {
      (function (i) {
        var check = function (t) {
          return t && t.Math == Math && t;
        };
        t.exports =
          check("object" == typeof globalThis && globalThis) ||
          check("object" == typeof window && window) ||
          check("object" == typeof self && self) ||
          check("object" == typeof i && i) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      }.call(this, r(92)));
    },
    ,
    ,
    function (t, i, r) {
      var o = r(9);
      t.exports = !o(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      });
    },
    ,
    function (t, i, r) {
      var o = r(18),
        a = String,
        c = TypeError;
      t.exports = function (t) {
        if (o(t)) return t;
        throw c(a(t) + " is not an object");
      };
    },
    ,
    function (t, i, r) {
      var o = r(21),
        a = r(260),
        c = a.all;
      t.exports = a.IS_HTMLDDA
        ? function (t) {
            return "object" == typeof t ? null !== t : o(t) || t === c;
          }
        : function (t) {
            return "object" == typeof t ? null !== t : o(t);
          };
    },
    function (t, i, r) {
      var o = r(11),
        a = r(96),
        c = r(23),
        l = r(108),
        u = r(95),
        h = r(261),
        d = a("wks"),
        p = o.Symbol,
        v = p && p.for,
        g = h ? p : (p && p.withoutSetter) || l;
      t.exports = function (t) {
        if (!c(d, t) || (!u && "string" != typeof d[t])) {
          var i = "Symbol." + t;
          u && c(p, t) ? (d[t] = p[t]) : (d[t] = h && v ? v(i) : g(i));
        }
        return d[t];
      };
    },
    function (t, i, r) {
      var o = r(106),
        a = Function.prototype.call;
      t.exports = o
        ? a.bind(a)
        : function () {
            return a.apply(a, arguments);
          };
    },
    function (t, i, r) {
      var o = r(260),
        a = o.all;
      t.exports = o.IS_HTMLDDA
        ? function (t) {
            return "function" == typeof t || t === a;
          }
        : function (t) {
            return "function" == typeof t;
          };
    },
    function (t, i, r) {
      "use strict";
      var o,
        a,
        c,
        l = r(206),
        u = r(14),
        h = r(11),
        d = r(21),
        p = r(18),
        v = r(23),
        g = r(69),
        m = r(87),
        y = r(61),
        b = r(28),
        _ = r(24).f,
        w = r(60),
        x = r(54),
        S = r(80),
        k = r(19),
        T = r(108),
        E = r(37),
        O = E.enforce,
        I = E.get,
        C = h.Int8Array,
        A = C && C.prototype,
        L = h.Uint8ClampedArray,
        P = L && L.prototype,
        N = C && x(C),
        R = A && x(A),
        j = Object.prototype,
        M = h.TypeError,
        D = k("toStringTag"),
        q = T("TYPED_ARRAY_TAG"),
        V = l && !!S && "Opera" !== g(h.opera),
        B = !1,
        z = {
          Int8Array: 1,
          Uint8Array: 1,
          Uint8ClampedArray: 1,
          Int16Array: 2,
          Uint16Array: 2,
          Int32Array: 4,
          Uint32Array: 4,
          Float32Array: 4,
          Float64Array: 8,
        },
        H = { BigInt64Array: 8, BigUint64Array: 8 },
        getTypedArrayConstructor = function (t) {
          var i = x(t);
          if (p(i)) {
            var r = I(i);
            return r && v(r, "TypedArrayConstructor")
              ? r.TypedArrayConstructor
              : getTypedArrayConstructor(i);
          }
        },
        isTypedArray = function (t) {
          if (!p(t)) return !1;
          var i = g(t);
          return v(z, i) || v(H, i);
        };
      for (o in z)
        (c = (a = h[o]) && a.prototype)
          ? (O(c).TypedArrayConstructor = a)
          : (V = !1);
      for (o in H)
        (c = (a = h[o]) && a.prototype) && (O(c).TypedArrayConstructor = a);
      if (
        (!V || !d(N) || N === Function.prototype) &&
        ((N = function TypedArray() {
          throw M("Incorrect invocation");
        }),
        V)
      )
        for (o in z) h[o] && S(h[o], N);
      if ((!V || !R || R === j) && ((R = N.prototype), V))
        for (o in z) h[o] && S(h[o].prototype, R);
      if ((V && x(P) !== R && S(P, R), u && !v(R, D)))
        for (o in ((B = !0),
        _(R, D, {
          get: function () {
            return p(this) ? this[q] : void 0;
          },
        }),
        z))
          h[o] && y(h[o], q, o);
      t.exports = {
        NATIVE_ARRAY_BUFFER_VIEWS: V,
        TYPED_ARRAY_TAG: B && q,
        aTypedArray: function (t) {
          if (isTypedArray(t)) return t;
          throw M("Target is not a typed array");
        },
        aTypedArrayConstructor: function (t) {
          if (d(t) && (!S || w(N, t))) return t;
          throw M(m(t) + " is not a typed array constructor");
        },
        exportTypedArrayMethod: function (t, i, r, o) {
          if (u) {
            if (r)
              for (var a in z) {
                var c = h[a];
                if (c && v(c.prototype, t))
                  try {
                    delete c.prototype[t];
                  } catch (r) {
                    try {
                      c.prototype[t] = i;
                    } catch (t) {}
                  }
              }
            (R[t] && !r) || b(R, t, r ? i : (V && A[t]) || i, o);
          }
        },
        exportTypedArrayStaticMethod: function (t, i, r) {
          var o, a;
          if (u) {
            if (S) {
              if (r)
                for (o in z)
                  if ((a = h[o]) && v(a, t))
                    try {
                      delete a[t];
                    } catch (t) {}
              if (N[t] && !r) return;
              try {
                return b(N, t, r ? i : (V && N[t]) || i);
              } catch (t) {}
            }
            for (o in z) !(a = h[o]) || (a[t] && !r) || b(a, t, i);
          }
        },
        getTypedArrayConstructor: getTypedArrayConstructor,
        isView: function isView(t) {
          if (!p(t)) return !1;
          var i = g(t);
          return "DataView" === i || v(z, i) || v(H, i);
        },
        isTypedArray: isTypedArray,
        TypedArray: N,
        TypedArrayPrototype: R,
      };
    },
    function (t, i, r) {
      var o = r(10),
        a = r(26),
        c = o({}.hasOwnProperty);
      t.exports =
        Object.hasOwn ||
        function hasOwn(t, i) {
          return c(a(t), i);
        };
    },
    function (t, i, r) {
      var o = r(14),
        a = r(263),
        c = r(264),
        l = r(16),
        u = r(74),
        h = TypeError,
        d = Object.defineProperty,
        p = Object.getOwnPropertyDescriptor;
      i.f = o
        ? c
          ? function defineProperty(t, i, r) {
              if (
                (l(t),
                (i = u(i)),
                l(r),
                "function" == typeof t &&
                  "prototype" === i &&
                  "value" in r &&
                  "writable" in r &&
                  !r.writable)
              ) {
                var o = p(t, i);
                o &&
                  o.writable &&
                  ((t[i] = r.value),
                  (r = {
                    configurable:
                      "configurable" in r ? r.configurable : o.configurable,
                    enumerable: "enumerable" in r ? r.enumerable : o.enumerable,
                    writable: !1,
                  }));
              }
              return d(t, i, r);
            }
          : d
        : function defineProperty(t, i, r) {
            if ((l(t), (i = u(i)), l(r), a))
              try {
                return d(t, i, r);
              } catch (t) {}
            if ("get" in r || "set" in r) throw h("Accessors not supported");
            return "value" in r && (t[i] = r.value), t;
          };
    },
    ,
    function (t, i, r) {
      var o = r(40),
        a = Object;
      t.exports = function (t) {
        return a(o(t));
      };
    },
    function (t, i, r) {
      var o = r(69),
        a = String;
      t.exports = function (t) {
        if ("Symbol" === o(t))
          throw TypeError("Cannot convert a Symbol value to a string");
        return a(t);
      };
    },
    function (t, i, r) {
      var o = r(21),
        a = r(24),
        c = r(190),
        l = r(189);
      t.exports = function (t, i, r, u) {
        u || (u = {});
        var h = u.enumerable,
          d = void 0 !== u.name ? u.name : i;
        if ((o(r) && c(r, d, u), u.global)) h ? (t[i] = r) : l(i, r);
        else {
          try {
            u.unsafe ? t[i] && (h = !0) : delete t[i];
          } catch (t) {}
          h
            ? (t[i] = r)
            : a.f(t, i, {
                value: r,
                enumerable: !1,
                configurable: !u.nonConfigurable,
                writable: !u.nonWritable,
              });
        }
        return t;
      };
    },
    function (t, i, r) {
      var o = r(48);
      t.exports = function (t) {
        return o(t.length);
      };
    },
    function (t, i, r) {
      "use strict";
      var o = r(12),
        a = r.n(o),
        c = r(55);
      function ownKeys(t, i) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          i &&
            (o = o.filter(function (i) {
              return Object.getOwnPropertyDescriptor(t, i).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function _objectSpread(t) {
        for (var i = 1; i < arguments.length; i++) {
          var r = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(r), !0).forEach(function (i) {
                a()(t, i, r[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (i) {
                Object.defineProperty(
                  t,
                  i,
                  Object.getOwnPropertyDescriptor(r, i)
                );
              });
        }
        return t;
      }
      var l = _objectSpread(
        _objectSpread({}, c.a),
        {},
        {
          classNames: _objectSpread(
            _objectSpread({}, c.a.classNames),
            {},
            { DROPDOWN_MENU: "dropdown-menu" }
          ),
          collapsible: _objectSpread(
            _objectSpread({}, c.a.collapsible),
            {},
            {
              enabled: !0,
              tables: _objectSpread(
                _objectSpread({}, c.a.collapsible.tables),
                {},
                { enabled: !0 }
              ),
            }
          ),
          collateral: _objectSpread(
            _objectSpread({}, c.a.collateral),
            {},
            { tooltips: !0 }
          ),
          enableMultiRefPopUp: !0,
          figureViewer: _objectSpread(
            _objectSpread({}, c.a.figureViewer),
            {},
            {
              fvFocusMode: !0,
              openOnImageClick: !0,
              sidePanelRendersOpen: !0,
              navText: [
                '<span class="icon-arrow-left" aria-label="Previous"></span>',
                '<span class="icon-arrow-right" aria-label="Next"></span>',
              ],
            }
          ),
          icons: _objectSpread(
            _objectSpread({}, c.a.icons),
            {},
            {
              ICON_ACCORDION_ARROW: "icon-arrow-up",
              ICON_IN_NEW: "icon-extlink-smooth",
              ICON_PURCHASE_ACCESS: "icon-lock-open",
              ICON_RETURN: "icon-return",
              ICON_VIEWER: "icon-expand",
            }
          ),
          anchorEnhancements: _objectSpread(
            _objectSpread({}, c.a.anchorEnhancements),
            {},
            { tables: !0 }
          ),
        }
      );
      i.a = l;
    },
    function (t, i, r) {
      var o = r(63),
        a = r(10),
        c = r(107),
        l = r(26),
        u = r(29),
        h = r(114),
        d = a([].push),
        createMethod = function (t) {
          var i = 1 == t,
            r = 2 == t,
            a = 3 == t,
            p = 4 == t,
            v = 6 == t,
            g = 7 == t,
            m = 5 == t || v;
          return function (y, b, _, w) {
            for (
              var x,
                S,
                k = l(y),
                T = c(k),
                E = o(b, _),
                O = u(T),
                I = 0,
                C = w || h,
                A = i ? C(y, O) : r || g ? C(y, 0) : void 0;
              O > I;
              I++
            )
              if ((m || I in T) && ((S = E((x = T[I]), I, k)), t))
                if (i) A[I] = S;
                else if (S)
                  switch (t) {
                    case 3:
                      return !0;
                    case 5:
                      return x;
                    case 6:
                      return I;
                    case 2:
                      d(A, x);
                  }
                else
                  switch (t) {
                    case 4:
                      return !1;
                    case 7:
                      d(A, x);
                  }
            return v ? -1 : a || p ? p : A;
          };
        };
      t.exports = {
        forEach: createMethod(0),
        map: createMethod(1),
        filter: createMethod(2),
        some: createMethod(3),
        every: createMethod(4),
        find: createMethod(5),
        findIndex: createMethod(6),
        filterReject: createMethod(7),
      };
    },
    ,
    ,
    function (t, i, r) {
      var o = r(14),
        a = r(20),
        c = r(133),
        l = r(73),
        u = r(39),
        h = r(74),
        d = r(23),
        p = r(263),
        v = Object.getOwnPropertyDescriptor;
      i.f = o
        ? v
        : function getOwnPropertyDescriptor(t, i) {
            if (((t = u(t)), (i = h(i)), p))
              try {
                return v(t, i);
              } catch (t) {}
            if (d(t, i)) return l(!a(c.f, t, i), t[i]);
          };
    },
    function (t, i, r) {
      var o = r(21),
        a = r(87),
        c = TypeError;
      t.exports = function (t) {
        if (o(t)) return t;
        throw c(a(t) + " is not a function");
      };
    },
    function (t, i, r) {
      var o = r(11),
        a = r(21),
        aFunction = function (t) {
          return a(t) ? t : void 0;
        };
      t.exports = function (t, i) {
        return arguments.length < 2 ? aFunction(o[t]) : o[t] && o[t][i];
      };
    },
    function (t, i, r) {
      var o,
        a,
        c,
        l = r(265),
        u = r(11),
        h = r(18),
        d = r(61),
        p = r(23),
        v = r(188),
        g = r(136),
        m = r(109),
        y = u.TypeError,
        b = u.WeakMap;
      if (l || v.state) {
        var _ = v.state || (v.state = new b());
        (_.get = _.get),
          (_.has = _.has),
          (_.set = _.set),
          (o = function (t, i) {
            if (_.has(t)) throw y("Object already initialized");
            return (i.facade = t), _.set(t, i), i;
          }),
          (a = function (t) {
            return _.get(t) || {};
          }),
          (c = function (t) {
            return _.has(t);
          });
      } else {
        var w = g("state");
        (m[w] = !0),
          (o = function (t, i) {
            if (p(t, w)) throw y("Object already initialized");
            return (i.facade = t), d(t, w, i), i;
          }),
          (a = function (t) {
            return p(t, w) ? t[w] : {};
          }),
          (c = function (t) {
            return p(t, w);
          });
      }
      t.exports = {
        set: o,
        get: a,
        has: c,
        enforce: function (t) {
          return c(t) ? a(t) : o(t, {});
        },
        getterFor: function (t) {
          return function (i) {
            var r;
            if (!h(i) || (r = a(i)).type !== t)
              throw y("Incompatible receiver, " + t + " required");
            return r;
          };
        },
      };
    },
    ,
    function (t, i, r) {
      var o = r(107),
        a = r(40);
      t.exports = function (t) {
        return o(a(t));
      };
    },
    function (t, i, r) {
      var o = r(52),
        a = TypeError;
      t.exports = function (t) {
        if (o(t)) throw a("Can't call method on " + t);
        return t;
      };
    },
    function (t, i) {
      t.exports = !1;
    },
    ,
    ,
    function (t, i, r) {
      var o = r(382),
        a = r(23),
        c = r(270),
        l = r(24).f;
      t.exports = function (t) {
        var i = o.Symbol || (o.Symbol = {});
        a(i, t) || l(i, t, { value: c.f(t) });
      };
    },
    function (t, i, r) {
      var o = r(10),
        a = r(40),
        c = r(27),
        l = /"/g,
        u = o("".replace);
      t.exports = function (t, i, r, o) {
        var h = c(a(t)),
          d = "<" + i;
        return (
          "" !== r && (d += " " + r + '="' + u(c(o), l, "&quot;") + '"'),
          d + ">" + h + "</" + i + ">"
        );
      };
    },
    function (t, i, r) {
      var o = r(9);
      t.exports = function (t) {
        return o(function () {
          var i = ""[t]('"');
          return i !== i.toLowerCase() || i.split('"').length > 3;
        });
      };
    },
    function (t, i, r) {
      var o = r(268);
      t.exports = function (t) {
        var i = +t;
        return i != i || 0 === i ? 0 : o(i);
      };
    },
    function (t, i, r) {
      var o = r(47),
        a = Math.min;
      t.exports = function (t) {
        return t > 0 ? a(o(t), 9007199254740991) : 0;
      };
    },
    ,
    function (t, i, r) {
      "use strict";
      var o = Object.prototype.hasOwnProperty;
      function pug_classes(t, i) {
        return Array.isArray(t)
          ? (function pug_classes_array(t, i) {
              for (
                var r, o = "", a = "", c = Array.isArray(i), l = 0;
                l < t.length;
                l++
              )
                (r = pug_classes(t[l])) &&
                  (c && i[l] && (r = pug_escape(r)),
                  (o = o + a + r),
                  (a = " "));
              return o;
            })(t, i)
          : t && "object" == typeof t
          ? (function pug_classes_object(t) {
              var i = "",
                r = "";
              for (var a in t)
                a && t[a] && o.call(t, a) && ((i = i + r + a), (r = " "));
              return i;
            })(t)
          : t || "";
      }
      function pug_style(t) {
        if (!t) return "";
        if ("object" == typeof t) {
          var i = "";
          for (var r in t) o.call(t, r) && (i = i + r + ":" + t[r] + ";");
          return i;
        }
        return t + "";
      }
      function pug_attr(t, i, r, o) {
        if (!1 === i || null == i || (!i && ("class" === t || "style" === t)))
          return "";
        if (!0 === i) return " " + (o ? t : t + '="' + t + '"');
        var a = typeof i;
        return (
          ("object" !== a && "function" !== a) ||
            "function" != typeof i.toJSON ||
            (i = i.toJSON()),
          "string" == typeof i ||
          ((i = JSON.stringify(i)), r || -1 === i.indexOf('"'))
            ? (r && (i = pug_escape(i)), " " + t + '="' + i + '"')
            : " " + t + "='" + i.replace(/'/g, "&#39;") + "'"
        );
      }
      (i.merge = function pug_merge(t, i) {
        if (1 === arguments.length) {
          for (var r = t[0], o = 1; o < t.length; o++) r = pug_merge(r, t[o]);
          return r;
        }
        for (var a in i)
          if ("class" === a) {
            var c = t[a] || [];
            t[a] = (Array.isArray(c) ? c : [c]).concat(i[a] || []);
          } else if ("style" === a) {
            c = (c = pug_style(t[a])) && ";" !== c[c.length - 1] ? c + ";" : c;
            var l = pug_style(i[a]);
            (l = l && ";" !== l[l.length - 1] ? l + ";" : l), (t[a] = c + l);
          } else t[a] = i[a];
        return t;
      }),
        (i.classes = pug_classes),
        (i.style = pug_style),
        (i.attr = pug_attr),
        (i.attrs = function pug_attrs(t, i) {
          var r = "";
          for (var a in t)
            if (o.call(t, a)) {
              var c = t[a];
              if ("class" === a) {
                (c = pug_classes(c)), (r = pug_attr(a, c, !1, i) + r);
                continue;
              }
              "style" === a && (c = pug_style(c)), (r += pug_attr(a, c, !1, i));
            }
          return r;
        });
      var a = /["&<>]/;
      function pug_escape(t) {
        var i = "" + t,
          r = a.exec(i);
        if (!r) return t;
        var o,
          c,
          l,
          u = "";
        for (o = r.index, c = 0; o < i.length; o++) {
          switch (i.charCodeAt(o)) {
            case 34:
              l = "&quot;";
              break;
            case 38:
              l = "&amp;";
              break;
            case 60:
              l = "&lt;";
              break;
            case 62:
              l = "&gt;";
              break;
            default:
              continue;
          }
          c !== o && (u += i.substring(c, o)), (c = o + 1), (u += l);
        }
        return c !== o ? u + i.substring(c, o) : u;
      }
      (i.escape = pug_escape),
        (i.rethrow = function pug_rethrow(t, i, o, a) {
          if (!(t instanceof Error)) throw t;
          if (!(("undefined" == typeof window && i) || a))
            throw ((t.message += " on line " + o), t);
          try {
            a = a || r(369).readFileSync(i, "utf8");
          } catch (i) {
            pug_rethrow(t, null, o);
          }
          var c = 3,
            l = a.split("\n"),
            u = Math.max(o - c, 0),
            h = Math.min(l.length, o + c);
          c = l
            .slice(u, h)
            .map(function (t, i) {
              var r = i + u + 1;
              return (r == o ? "  > " : "    ") + r + "| " + t;
            })
            .join("\n");
          throw (
            ((t.path = i),
            (t.message =
              (i || "Pug") + ":" + o + "\n" + c + "\n\n" + t.message),
            t)
          );
        });
    },
    function (t, i, r) {
      var o = r(10),
        a = o({}.toString),
        c = o("".slice);
      t.exports = function (t) {
        return c(a(t), 8, -1);
      };
    },
    function (t, i) {
      t.exports = function (t) {
        return null == t;
      };
    },
    function (t, i, r) {
      var o = r(24).f,
        a = r(23),
        c = r(19)("toStringTag");
      t.exports = function (t, i, r) {
        t && !r && (t = t.prototype),
          t && !a(t, c) && o(t, c, { configurable: !0, value: i });
      };
    },
    function (t, i, r) {
      var o = r(23),
        a = r(21),
        c = r(26),
        l = r(136),
        u = r(202),
        h = l("IE_PROTO"),
        d = Object,
        p = d.prototype;
      t.exports = u
        ? d.getPrototypeOf
        : function (t) {
            var i = c(t);
            if (o(i, h)) return i[h];
            var r = i.constructor;
            return a(r) && i instanceof r
              ? r.prototype
              : i instanceof d
              ? p
              : null;
          };
    },
    function (t, i, r) {
      "use strict";
      var o = {
        alwaysShowPill: !1,
        articlePageHeader: {
          selector: "header.header",
          boundingClientSelector:
            '[data-extent="frontmatter"] header, header[data-extent="frontmatter"], h1',
          boundingSpacer: 0,
          hideOnScroll: !0,
          removeFixedStatus: !1,
        },
        classNames: {
          BTN: "btn",
          BTN_ALL_IN_VIEWER: "",
          BTN_INVERSE: "btn--inverse",
          DISABLED: "disabled",
          DROPDOWN_MENU: "dropdown__menu",
          FOCUSED: "focused",
          FIXED: "fixed",
          HIDDEN: "hidden",
          JS_HIDDEN: "js--hidden",
          JS_VISIBLE: "js--visible",
          JOURNAL_BRANDING: "journal-branding",
          MT3: "mt-3",
        },
        cloneFromBody: {
          figures: {
            controllers: {
              elements: "figure.graphic",
              elementsTab:
                "this.main.querySelector('#' + this.collateralTabIds.mediaFigures)",
              parentTab:
                "this.main.querySelector('#' + this.collateralTabIds.media)",
              tabController:
                "this.main.querySelector('[aria-controls=\"' + this.collateralTabIds.mediaFigures + '\"]')",
            },
            links: { goTo: { text: "data-figure" } },
            preventFor: {
              attribute: "data-position",
              enabled: !1,
              values: "anchor",
            },
            renderingSettings: { type: "graphic" },
          },
          otherMedia: {
            controllers: {
              elements: '[data-type="media"] figure',
              elementsTab:
                "this.main.querySelector('#' + this.collateralTabIds.mediaOther)",
              parentTab:
                "this.main.querySelector('#' + this.collateralTabIds.media)",
              tabController:
                "this.main.querySelector('[aria-controls=\"' + this.collateralTabIds.mediaOther + '\"]')",
            },
            links: {
              goTo: { text: "data-media" },
              openAll: { href: "#media" },
            },
            renderingSettings: { type: "media" },
          },
          references: {
            controllers: {
              elements:
                '[data-extent="backmatter"] [role="doc-bibliography"] .citation',
              elementsTab:
                "this.main.querySelector('#' + this.collateralTabIds.references)",
              parentTab:
                "this.main.querySelector('#' + this.collateralTabIds.references)",
            },
            links: {
              goTo: { enable: !1 },
              inViewer: { enable: !1 },
              openAll: { enable: !1 },
            },
            renderingSettings: {
              addWrapper: !0,
              renderFigure: !1,
              type: "citation",
            },
          },
          tables: {
            controllers: {
              elements: "figure.table",
              elementsTab:
                "this.main.querySelector('#' + this.collateralTabIds.mediaTables)",
              parentTab:
                "this.main.querySelector('#' + this.collateralTabIds.mediaTables)",
            },
            links: { goTo: { text: "data-table" } },
            renderingSettings: {
              addWrapper: !0,
              renderFigure: !0,
              renderFigureContent: !1,
              type: "table",
            },
          },
        },
        collapsible: {
          enabled: !1,
          citations: {
            enabled: !0,
            clamp: 4,
            height: "480px",
            method: "clamp",
            wrap: '[data-extent="backmatter"] [role="doc-bibliography"] [role="list"]',
          },
          coreProducts: {
            enabled: !1,
            clamp: 6,
            method: "clamp",
            wrap: '[data-extent="backmatter"] .core-product [role="list"]',
          },
          figures: {
            enabled: !1,
            conditional: !0,
            height: "400px",
            wrap: ".figure-wrap",
          },
          tables: {
            enabled: !1,
            conditional: !0,
            height: "280px",
            wrap: ".table-wrap",
          },
        },
        collateral: {
          affiliationsTitle: void 0,
          citedBySelector: ".cited-by__entry",
          focusTrap: !0,
          initialFocus: {},
          mediaSelectors: {
            figures: "article figure.graphic",
            figuresHeader: void 0,
            figuresWrapper: !1,
            references:
              '[data-extent="backmatter"] [role="doc-bibliography"] .citation',
            tables: "article figure.table",
            tablesHeader: void 0,
            tablesWrapper: !0,
            videos: '[data-type="media"] figure',
            videosHeader: void 0,
            videosWrapper: !1,
          },
          navMargin: { left: 80, top: 80, right: 16 },
          panes: {
            fulltextOptions: !0,
            info: !0,
            metrics: !0,
            references: !0,
            mediaFigures: !0,
            mediaTables: !0,
            mediaOther: !0,
            more: !1,
            selfCitation: !1,
            share: !0,
          },
          permissions: {
            identifier: ".core-permissions",
            linkSelector: ".btn",
            removeCondition: null,
          },
          removePermissions: !1,
          share: {
            delay: 3e3,
            selectors: {
              action: ".share-self__action",
              source: ".share-self__source",
              status: ".share-self__status",
              terms: "#terms-checkbox",
              wrapper: "#share-self",
            },
          },
          tooltips: !1,
        },
        contributors: {
          byline: {
            CONTRIBUTORS:
              '[data-extent="frontmatter"] .contributors, [data-extent="frontmatter"] .authors',
            DISPLAYED: "[data-displayed-on]",
            HIDDEN: "[data-hidden-on]",
          },
          expandOnFocus: !0,
          selectors: {
            CONTENT: ".content",
            LIST: '[property="author"], [property="editor"], [property="reviewer"]',
            TRIGGER: ".heading",
            TOGGLE_ALL: ".collateral-contributors-control",
            TOGGLE_ALL_WRAPPER: ".core-authors h4",
            TOGGLE_TEMPLATE: "collapsible_authors_template",
          },
          settings: {
            TOGGLE_ALL_POSITION: "append",
            WITH_CHEVRON: !0,
            WITH_TOGGLE_ALL: !0,
          },
        },
        enableMultiRefPopUp: !1,
        enhancements: {
          bodyPrefix: "body-ref-",
          citationSnippetLength: 44,
          enumeration: [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
          ],
          // the prefix here is for the snippet, here i erased it for references
          prefix: "",
          suffix: "-core",
          addDataIds: !1,
          dataIds: {
            authors_view_all: "article-authors-viewall",
            info: "article-pill-info",
            information: "article-collateral-tab-info",
            contributors: "article-collateral-tab-contributors",
            metrics: "article-pill-metrics",
            metricsInner: "article-collateral-tab-metrics",
            citations: "article-collateral-tab-citations",
            fulltextOptions: "article-pill-fulltextOptions",
            purchaseAccess: "article-pill-purchaseAccess",
            references: "article-pill-references",
            media: "article-pill-media",
            mediaFigures: "article-collateral-tab-figures",
            mediaTables: "article-pill-tables",
            mediaOther: "article-collateral-tab-other",
            more: "article-pill-more",
            selfCitation: "article-nav-menubar-citations",
            share: "article-pill-share",
          },
          enableArrowKeysTabs: !0,
          openInViewerFromBodyLinks: { images: !1, tables: !1 },
          focusOnWrapper: !0,
        },
        figureViewer: {
          enableIvViewer: !0,
          enableFullScreen: !0,
          enablePreventFor: !1,
          enableDownloadPanel: !1,
          openOnImageClick: !1,
          sidePanelRendersOpen: !1,
          sidePanelRendersAlwaysOpen: !1,
          sidePanelMedia: 968,
          fvFocusMode: !1,
          hasOpenAllInViewer: !0,
          hiddenClass: "js--hidden",
          navText: [
            '<span class="icon-arrow_left" aria-label="Previous"></span>',
            '<span class="icon-arrow_right" aria-label="Next"></span>',
          ],
          openAllInViewerClassList:
            "[this.s.BTN, this.s.BTN_INVERSE, this.s.BTN_ALL_IN_VIEWER]",
          preventFor: { attribute: "data-position", values: "anchor" },
          resizeInterfaceWithPanels: !0,
          selectors: {
            directory: " .fv__directory",
            directoryContentWrapper: ".fv__content.tab__content",
            directoryOverlay: " .fv__fit--overlay span",
            directoryTabWrapper: ".tab__nav",
            directoryTabItem: ".tab__nav__item",
            panel: ".fv__panel",
            panelHeaderTitle: ".fv__panel__title",
            panelText: ".fv__panel__contentText",
            panelTitle: ".fv__panel__contentTitle",
            slideshow: " .fv__slideshow",
            figureBtn: null,
            toolbarHolster: ".fv__toolbar__holster",
            toolbarText: ".fv__toolbar__contentText",
            toolbarTitle: ".fv__toolbar__contentTitle",
          },
          titleSeparator: " - ",
          topInfoData: "data.description || data.articleTitle",
          viewerTrigger: "open-in-viewer",
        },
        fixedMargins: { x: 60, y: 20 },
        icons: {
          ICON_ACCORDION_ARROW: "icon-arrow_up",
          ICON_ACCORDION_COLLAPSED: void 0,
          ICON_ACCORDION_EXPANDED: void 0,
          ICON_ALL_IN_VIEWER: "icon-open_in_new",
          ICON_MORE: "icon-more",
          ICON_PURCHASE_ACCESS: "icon-lock",
          ICON_REFERENCES: "icon-references",
          ICON_RETURN: "icon-subdirectory_arrow_left",
          ICON_VIEW_ACCESS: "icon-eye",
          ICON_VIEWER: void 0,
        },
        mobileBreakpoint: 769,
        mobileSticky: { enable: !0 },
        removeFigcaptionHeading: !1,
        sectionsNavbar: {
          autoClose: !0,
          hideIfEmpty: !1,
          scrollIndicator: !0,
          markBackmatterStart: !1,
          overlaps: !0,
          overlappingPivot: null,
          overlapClassname: "sections-navbar--overlapping",
          overlapOpenClassname: "sections-navbar--overlapping-open",
          openButtonLocationSelector: ".sections-navbar__container",
          subduedClassname: "sticky-menu--subdued",
          subduedInClassname: "sticky-menu--subdued-in",
          buttonClass: ".sections-navbar__trigger",
          buttonTemplate: "sections_navbar_button_template",
          eLettersCount: ".eletters__count",
          eLettersId: !1,
        },
        smartTables: {
          classes: {
            filter_table: "core-filterable",
            filter_tr: "filtering",
            filter_active: "filtered",
            even: "even",
            odd: "odd",
            sort_table: "core-sortable",
          },
          enabled: !1,
          enableFor:
            '[data-type="datasheet"], [data-type="technical-factsheet"]',
          filter: !0,
          rowLimit: 10,
          sort: !0,
        },
        stickyHeader: {
          enable: !0,
          breadcrumbs: !1,
          selectors: {
            alerts: ".st-header__alerts",
            articleBreadcrumbs: ".article__breadcrumbs",
            articleCitation: ".article-tools__citation",
            articleFavorite: ".article-tools__favorite",
            articleFormats: ".info-panel__formats",
            articleLogo: ".navbar__logo--light",
            citations: ".st-header__citation",
            cite: ".info-panel__citations",
            favorite: ".st-header__favorite",
            formats: ".st-header__formats",
            logo: ".st-header__logo",
            menu: ".header .journal-menu",
            navigation: ".st-header__nav",
            share: ".st-header__share",
            stickyHeader: '.st-header[role="navigation"]',
            title: ".st-header__title",
            titleSource: "h1",
            tracker: "#progress-tracker",
          },
        },
        tabs: {
          abstracts: {
            appendSelector: void 0,
            buttonSelector: void 0,
            closeIfActive: !1,
            enableArrowKeysTabs: !0,
            id: "abstracts",
            paneHeader: "h3",
            paneSelector: '[role="doc-abstract"]',
            triggerFirst: !0,
          },
          articleRelations: {
            appendSelector: void 0,
            buttonSelector: ".btn--article-relation",
            closeIfActive: !0,
            enableArrowKeysTabs: !1,
            paneHeader: void 0,
            paneSelector: ".core-relations .relationsGroup",
            triggerFirst: !1,
          },
          collateral: {
            appendSelector: "header",
            buttonSelector: '[role="tablist"] > button',
            closeIfActive: !1,
            enableArrowKeysTabs: !0,
            paneHeader: "h3",
            paneSelector: '[role="tabpanel"]',
            triggerFirst: !0,
          },
          figureViewer: {
            appendSelector: void 0,
            buttonSelector: ".tab__nav__item",
            closeIfActive: !1,
            enableArrowKeysTabs: !0,
            paneHeader: void 0,
            paneSelector: ".tab__pane",
            triggerFirst: !0,
          },
        },
        topOffset: 0,
        anchorEnhancements: { citations: !0, footnotes: !0, tables: !1 },
        mathJax: {
          config: {
            preferredFont: "STIX",
            displayAlign: "center",
            SVG: { scale: 110 },
            jax: ["output/SVG"],
            styles: {
              ".math-formula *": { "font-size": "2rem" },
              ".inline-formula *": { "font-size": "1rem" },
              ".math-formula ": { "text-align": "right" },
              ".math-formula .equationTd, .display-formula .equation": {
                display: "block",
                "text-align": "center",
              },
              ".display-formula .MathJax_Display": {
                "overflow-x": "auto",
                "overflow-y": "hidden",
              },
            },
            menuSettings: { zoom: "None" },
          },
          src: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS-MML_HTMLorMML",
        },
      };
      i.a = o;
    },
    function (t, i, r) {
      "use strict";
      r.r(i),
        r.d(i, "focusable", function () {
          return S;
        }),
        r.d(i, "isFocusable", function () {
          return E;
        }),
        r.d(i, "isTabbable", function () {
          return k;
        }),
        r.d(i, "tabbable", function () {
          return x;
        });
      /*!
       * tabbable 5.3.3
       * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
       */
      var o = [
          "input",
          "select",
          "textarea",
          "a[href]",
          "button",
          "[tabindex]:not(slot)",
          "audio[controls]",
          "video[controls]",
          '[contenteditable]:not([contenteditable="false"])',
          "details>summary:first-of-type",
          "details",
        ],
        a = o.join(","),
        c = "undefined" == typeof Element,
        l = c
          ? function () {}
          : Element.prototype.matches ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector,
        u =
          !c && Element.prototype.getRootNode
            ? function (t) {
                return t.getRootNode();
              }
            : function (t) {
                return t.ownerDocument;
              },
        h = function getCandidates(t, i, r) {
          var o = Array.prototype.slice.apply(t.querySelectorAll(a));
          return i && l.call(t, a) && o.unshift(t), (o = o.filter(r));
        },
        d = function getCandidatesIteratively(t, i, r) {
          for (var o = [], c = Array.from(t); c.length; ) {
            var u = c.shift();
            if ("SLOT" === u.tagName) {
              var h = u.assignedElements(),
                d = getCandidatesIteratively(h.length ? h : u.children, !0, r);
              r.flatten
                ? o.push.apply(o, d)
                : o.push({ scope: u, candidates: d });
            } else {
              l.call(u, a) && r.filter(u) && (i || !t.includes(u)) && o.push(u);
              var p =
                  u.shadowRoot ||
                  ("function" == typeof r.getShadowRoot && r.getShadowRoot(u)),
                v = !r.shadowRootFilter || r.shadowRootFilter(u);
              if (p && v) {
                var g = getCandidatesIteratively(
                  !0 === p ? u.children : p.children,
                  !0,
                  r
                );
                r.flatten
                  ? o.push.apply(o, g)
                  : o.push({ scope: u, candidates: g });
              } else c.unshift.apply(c, u.children);
            }
          }
          return o;
        },
        p = function getTabindex(t, i) {
          return t.tabIndex < 0 &&
            (i ||
              /^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) ||
              t.isContentEditable) &&
            isNaN(parseInt(t.getAttribute("tabindex"), 10))
            ? 0
            : t.tabIndex;
        },
        v = function sortOrderedTabbables(t, i) {
          return t.tabIndex === i.tabIndex
            ? t.documentOrder - i.documentOrder
            : t.tabIndex - i.tabIndex;
        },
        g = function isInput(t) {
          return "INPUT" === t.tagName;
        },
        m = function isNonTabbableRadio(t) {
          return (
            (function isRadio(t) {
              return g(t) && "radio" === t.type;
            })(t) &&
            !(function isTabbableRadio(t) {
              if (!t.name) return !0;
              var i,
                r = t.form || u(t),
                o = function queryRadios(t) {
                  return r.querySelectorAll(
                    'input[type="radio"][name="' + t + '"]'
                  );
                };
              if (
                "undefined" != typeof window &&
                void 0 !== window.CSS &&
                "function" == typeof window.CSS.escape
              )
                i = o(window.CSS.escape(t.name));
              else
                try {
                  i = o(t.name);
                } catch (t) {
                  return (
                    console.error(
                      "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                      t.message
                    ),
                    !1
                  );
                }
              var a = (function getCheckedRadio(t, i) {
                for (var r = 0; r < t.length; r++)
                  if (t[r].checked && t[r].form === i) return t[r];
              })(i, t.form);
              return !a || a === t;
            })(t)
          );
        },
        y = function isZeroArea(t) {
          var i = t.getBoundingClientRect(),
            r = i.width,
            o = i.height;
          return 0 === r && 0 === o;
        },
        b = function isNodeMatchingSelectorFocusable(t, i) {
          return !(
            i.disabled ||
            (function isHiddenInput(t) {
              return g(t) && "hidden" === t.type;
            })(i) ||
            (function isHidden(t, i) {
              var r = i.displayCheck,
                o = i.getShadowRoot;
              if ("hidden" === getComputedStyle(t).visibility) return !0;
              var a = l.call(t, "details>summary:first-of-type")
                ? t.parentElement
                : t;
              if (l.call(a, "details:not([open]) *")) return !0;
              var c = u(t).host,
                h =
                  (null == c ? void 0 : c.ownerDocument.contains(c)) ||
                  t.ownerDocument.contains(t);
              if (r && "full" !== r) {
                if ("non-zero-area" === r) return y(t);
              } else {
                if ("function" == typeof o) {
                  for (var d = t; t; ) {
                    var p = t.parentElement,
                      v = u(t);
                    if (p && !p.shadowRoot && !0 === o(p)) return y(t);
                    t = t.assignedSlot
                      ? t.assignedSlot
                      : p || v === t.ownerDocument
                      ? p
                      : v.host;
                  }
                  t = d;
                }
                if (h) return !t.getClientRects().length;
              }
              return !1;
            })(i, t) ||
            (function isDetailsWithSummary(t) {
              return (
                "DETAILS" === t.tagName &&
                Array.prototype.slice.apply(t.children).some(function (t) {
                  return "SUMMARY" === t.tagName;
                })
              );
            })(i) ||
            (function isDisabledFromFieldset(t) {
              if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
                for (var i = t.parentElement; i; ) {
                  if ("FIELDSET" === i.tagName && i.disabled) {
                    for (var r = 0; r < i.children.length; r++) {
                      var o = i.children.item(r);
                      if ("LEGEND" === o.tagName)
                        return (
                          !!l.call(i, "fieldset[disabled] *") || !o.contains(t)
                        );
                    }
                    return !0;
                  }
                  i = i.parentElement;
                }
              return !1;
            })(i)
          );
        },
        _ = function isNodeMatchingSelectorTabbable(t, i) {
          return !(m(i) || p(i) < 0 || !b(t, i));
        },
        w = function isValidShadowRootTabbable(t) {
          var i = parseInt(t.getAttribute("tabindex"), 10);
          return !!(isNaN(i) || i >= 0);
        },
        x = function tabbable(t, i) {
          return (function sortByOrder(t) {
            var i = [],
              r = [];
            return (
              t.forEach(function (t, o) {
                var a = !!t.scope,
                  c = a ? t.scope : t,
                  l = p(c, a),
                  u = a ? sortByOrder(t.candidates) : c;
                0 === l
                  ? a
                    ? i.push.apply(i, u)
                    : i.push(c)
                  : r.push({
                      documentOrder: o,
                      tabIndex: l,
                      item: t,
                      isScope: a,
                      content: u,
                    });
              }),
              r
                .sort(v)
                .reduce(function (t, i) {
                  return (
                    i.isScope ? t.push.apply(t, i.content) : t.push(i.content),
                    t
                  );
                }, [])
                .concat(i)
            );
          })(
            (i = i || {}).getShadowRoot
              ? d([t], i.includeContainer, {
                  filter: _.bind(null, i),
                  flatten: !1,
                  getShadowRoot: i.getShadowRoot,
                  shadowRootFilter: w,
                })
              : h(t, i.includeContainer, _.bind(null, i))
          );
        },
        S = function focusable(t, i) {
          return (i = i || {}).getShadowRoot
            ? d([t], i.includeContainer, {
                filter: b.bind(null, i),
                flatten: !0,
                getShadowRoot: i.getShadowRoot,
              })
            : h(t, i.includeContainer, b.bind(null, i));
        },
        k = function isTabbable(t, i) {
          if (((i = i || {}), !t)) throw new Error("No node provided");
          return !1 !== l.call(t, a) && _(i, t);
        },
        T = o.concat("iframe").join(","),
        E = function isFocusable(t, i) {
          if (((i = i || {}), !t)) throw new Error("No node provided");
          return !1 !== l.call(t, T) && b(i, t);
        };
    },
    ,
    ,
    function (t, i, r) {
      var o = r(1),
        a = r(2),
        c = (function () {
          "use strict";
          function VisualComponent(t) {
            o(this, VisualComponent),
              (this.main = void 0),
              (this.articleView = {}),
              (this.s = { HIDDEN: "hidden" });
          }
          return (
            a(VisualComponent, [
              {
                key: "hide",
                value: function hide() {
                  this.main && this.main.classList.add(this.s.HIDDEN);
                },
              },
              {
                key: "show",
                value: function show() {
                  this.main && this.main.classList.remove(this.s.HIDDEN);
                },
              },
              {
                key: "stringToHTML",
                value: function stringToHTML(t) {
                  var i = document.createElement("div");
                  return (
                    (i.innerHTML = t.trim()),
                    i.children.length > 1 ? i.innerHTML : i.firstChild
                  );
                },
              },
              { key: "initiate", value: function initiate() {} },
              {
                key: "isInDOM",
                value: function isInDOM(t) {
                  var i = t || this.main;
                  if (!i) return !1;
                  return (
                    0 !==
                    Object.values(
                      (function values() {
                        var t = i.getBoundingClientRect();
                        return {
                          top: t.top,
                          right: t.right,
                          bottom: t.bottom,
                          left: t.left,
                          width: t.width,
                          height: t.height,
                        };
                      })()
                    ).reduce(function (t, i) {
                      return Math.abs(i) + t;
                    }, 0)
                  );
                },
              },
              {
                key: "getSiblings",
                value: function getSiblings(t) {
                  for (
                    var i = t || this.main, r = [], o = i.parentNode.firstChild;
                    o;

                  )
                    1 === o.nodeType && o !== i && r.push(o),
                      (o = o.nextSibling);
                  return r;
                },
              },
            ]),
            VisualComponent
          );
        })();
      t.exports = c;
    },
    function (t, i, r) {
      var o = r(10);
      t.exports = o({}.isPrototypeOf);
    },
    function (t, i, r) {
      var o = r(14),
        a = r(24),
        c = r(73);
      t.exports = o
        ? function (t, i, r) {
            return a.f(t, i, c(1, r));
          }
        : function (t, i, r) {
            return (t[i] = r), t;
          };
    },
    function (t, i, r) {
      var o,
        a = r(16),
        c = r(195),
        l = r(193),
        u = r(109),
        h = r(269),
        d = r(135),
        p = r(136),
        v = p("IE_PROTO"),
        EmptyConstructor = function () {},
        scriptTag = function (t) {
          return "<script>" + t + "</script>";
        },
        NullProtoObjectViaActiveX = function (t) {
          t.write(scriptTag("")), t.close();
          var i = t.parentWindow.Object;
          return (t = null), i;
        },
        NullProtoObject = function () {
          try {
            o = new ActiveXObject("htmlfile");
          } catch (t) {}
          var t, i;
          NullProtoObject =
            "undefined" != typeof document
              ? document.domain && o
                ? NullProtoObjectViaActiveX(o)
                : (((i = d("iframe")).style.display = "none"),
                  h.appendChild(i),
                  (i.src = String("javascript:")),
                  (t = i.contentWindow.document).open(),
                  t.write(scriptTag("document.F=Object")),
                  t.close(),
                  t.F)
              : NullProtoObjectViaActiveX(o);
          for (var r = l.length; r--; ) delete NullProtoObject.prototype[l[r]];
          return NullProtoObject();
        };
      (u[v] = !0),
        (t.exports =
          Object.create ||
          function create(t, i) {
            var r;
            return (
              null !== t
                ? ((EmptyConstructor.prototype = a(t)),
                  (r = new EmptyConstructor()),
                  (EmptyConstructor.prototype = null),
                  (r[v] = t))
                : (r = NullProtoObject()),
              void 0 === i ? r : c.f(r, i)
            );
          });
    },
    function (t, i, r) {
      var o = r(88),
        a = r(35),
        c = r(106),
        l = o(o.bind);
      t.exports = function (t, i) {
        return (
          a(t),
          void 0 === i
            ? t
            : c
            ? l(t, i)
            : function () {
                return t.apply(i, arguments);
              }
        );
      };
    },
    function (t, i, r) {
      var o = r(106),
        a = Function.prototype,
        c = a.apply,
        l = a.call;
      t.exports =
        ("object" == typeof Reflect && Reflect.apply) ||
        (o
          ? l.bind(c)
          : function () {
              return l.apply(c, arguments);
            });
    },
    ,
    function (t, i, r) {
      "use strict";
      r.r(i);
      var o = r(254),
        a = r.n(o);
      r.d(i, "BehaviorFixedHeader", function () {
        return a.a;
      });
      var c = r(255),
        l = r.n(c);
      r.d(i, "BehaviorTab", function () {
        return l.a;
      });
      var u = r(256),
        h = r.n(u);
      r.d(i, "CollapsibleFigures", function () {
        return h.a;
      });
      var d = r(257),
        p = r.n(d);
      r.d(i, "CollapsibleText", function () {
        return p.a;
      });
      var v = r(179),
        g = r.n(v);
      r.d(i, "Debounce", function () {
        return g.a;
      });
    },
    function (t, i, r) {
      var o = r(36);
      t.exports = o("navigator", "userAgent") || "";
    },
    function (t, i, r) {
      var o = r(47),
        a = Math.max,
        c = Math.min;
      t.exports = function (t, i) {
        var r = o(t);
        return r < 0 ? a(r + i, 0) : c(r, i);
      };
    },
    function (t, i, r) {
      var o = r(194),
        a = r(21),
        c = r(51),
        l = r(19)("toStringTag"),
        u = Object,
        h =
          "Arguments" ==
          c(
            (function () {
              return arguments;
            })()
          );
      t.exports = o
        ? c
        : function (t) {
            var i, r, o;
            return void 0 === t
              ? "Undefined"
              : null === t
              ? "Null"
              : "string" ==
                typeof (r = (function (t, i) {
                  try {
                    return t[i];
                  } catch (t) {}
                })((i = u(t)), l))
              ? r
              : h
              ? c(i)
              : "Object" == (o = c(i)) && a(i.callee)
              ? "Arguments"
              : o;
          };
    },
    function (t, i, r) {
      "use strict";
      var o = r(9);
      t.exports = function (t, i) {
        var r = [][t];
        return (
          !!r &&
          o(function () {
            r.call(
              null,
              i ||
                function () {
                  return 1;
                },
              1
            );
          })
        );
      };
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(11),
        c = r(20),
        l = r(14),
        u = r(222),
        h = r(22),
        d = r(142),
        p = r(81),
        v = r(73),
        g = r(61),
        m = r(213),
        y = r(48),
        b = r(284),
        _ = r(308),
        w = r(74),
        x = r(23),
        S = r(69),
        k = r(18),
        T = r(94),
        E = r(62),
        O = r(60),
        I = r(80),
        C = r(76).f,
        A = r(309),
        L = r(31).forEach,
        P = r(98),
        N = r(24),
        R = r(34),
        j = r(37),
        M = r(145),
        D = j.get,
        q = j.set,
        V = j.enforce,
        B = N.f,
        z = R.f,
        H = Math.round,
        $ = a.RangeError,
        W = d.ArrayBuffer,
        G = W.prototype,
        U = d.DataView,
        Z = h.NATIVE_ARRAY_BUFFER_VIEWS,
        X = h.TYPED_ARRAY_TAG,
        K = h.TypedArray,
        Y = h.TypedArrayPrototype,
        J = h.aTypedArrayConstructor,
        Q = h.isTypedArray,
        fromList = function (t, i) {
          J(t);
          for (var r = 0, o = i.length, a = new t(o); o > r; ) a[r] = i[r++];
          return a;
        },
        addGetter = function (t, i) {
          B(t, i, {
            get: function () {
              return D(this)[i];
            },
          });
        },
        isArrayBuffer = function (t) {
          var i;
          return (
            O(G, t) || "ArrayBuffer" == (i = S(t)) || "SharedArrayBuffer" == i
          );
        },
        isTypedArrayIndex = function (t, i) {
          return Q(t) && !T(i) && i in t && m(+i) && i >= 0;
        },
        tt = function getOwnPropertyDescriptor(t, i) {
          return (i = w(i)), isTypedArrayIndex(t, i) ? v(2, t[i]) : z(t, i);
        },
        et = function defineProperty(t, i, r) {
          return (
            (i = w(i)),
            !(isTypedArrayIndex(t, i) && k(r) && x(r, "value")) ||
            x(r, "get") ||
            x(r, "set") ||
            r.configurable ||
            (x(r, "writable") && !r.writable) ||
            (x(r, "enumerable") && !r.enumerable)
              ? B(t, i, r)
              : ((t[i] = r.value), t)
          );
        };
      l
        ? (Z ||
            ((R.f = tt),
            (N.f = et),
            addGetter(Y, "buffer"),
            addGetter(Y, "byteOffset"),
            addGetter(Y, "byteLength"),
            addGetter(Y, "length")),
          o(
            { target: "Object", stat: !0, forced: !Z },
            { getOwnPropertyDescriptor: tt, defineProperty: et }
          ),
          (t.exports = function (t, i, r) {
            var l = t.match(/\d+$/)[0] / 8,
              h = t + (r ? "Clamped" : "") + "Array",
              d = "get" + t,
              v = "set" + t,
              m = a[h],
              w = m,
              x = w && w.prototype,
              S = {},
              addElement = function (t, i) {
                B(t, i, {
                  get: function () {
                    return (function (t, i) {
                      var r = D(t);
                      return r.view[d](i * l + r.byteOffset, !0);
                    })(this, i);
                  },
                  set: function (t) {
                    return (function (t, i, o) {
                      var a = D(t);
                      r && (o = (o = H(o)) < 0 ? 0 : o > 255 ? 255 : 255 & o),
                        a.view[v](i * l + a.byteOffset, o, !0);
                    })(this, i, t);
                  },
                  enumerable: !0,
                });
              };
            Z
              ? u &&
                ((w = i(function (t, i, r, o) {
                  return (
                    p(t, x),
                    M(
                      k(i)
                        ? isArrayBuffer(i)
                          ? void 0 !== o
                            ? new m(i, _(r, l), o)
                            : void 0 !== r
                            ? new m(i, _(r, l))
                            : new m(i)
                          : Q(i)
                          ? fromList(w, i)
                          : c(A, w, i)
                        : new m(b(i)),
                      t,
                      w
                    )
                  );
                })),
                I && I(w, K),
                L(C(m), function (t) {
                  t in w || g(w, t, m[t]);
                }),
                (w.prototype = x))
              : ((w = i(function (t, i, r, o) {
                  p(t, x);
                  var a,
                    u,
                    h,
                    d = 0,
                    v = 0;
                  if (k(i)) {
                    if (!isArrayBuffer(i))
                      return Q(i) ? fromList(w, i) : c(A, w, i);
                    (a = i), (v = _(r, l));
                    var g = i.byteLength;
                    if (void 0 === o) {
                      if (g % l) throw $("Wrong length");
                      if ((u = g - v) < 0) throw $("Wrong length");
                    } else if ((u = y(o) * l) + v > g) throw $("Wrong length");
                    h = u / l;
                  } else (h = b(i)), (a = new W((u = h * l)));
                  for (
                    q(t, {
                      buffer: a,
                      byteOffset: v,
                      byteLength: u,
                      length: h,
                      view: new U(a),
                    });
                    d < h;

                  )
                    addElement(t, d++);
                })),
                I && I(w, K),
                (x = w.prototype = E(Y))),
              x.constructor !== w && g(x, "constructor", w),
              (V(x).TypedArrayConstructor = w),
              X && g(x, X, h);
            var T = w != m;
            (S[h] = w),
              o({ global: !0, constructor: !0, forced: T, sham: !Z }, S),
              "BYTES_PER_ELEMENT" in w || g(w, "BYTES_PER_ELEMENT", l),
              "BYTES_PER_ELEMENT" in x || g(x, "BYTES_PER_ELEMENT", l),
              P(h);
          }))
        : (t.exports = function () {});
    },
    ,
    function (t, i) {
      t.exports = function (t, i) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: i,
        };
      };
    },
    function (t, i, r) {
      var o = r(134),
        a = r(94);
      t.exports = function (t) {
        var i = o(t, "string");
        return a(i) ? i : i + "";
      };
    },
    function (t, i, r) {
      var o,
        a,
        c = r(11),
        l = r(67),
        u = c.process,
        h = c.Deno,
        d = (u && u.versions) || (h && h.version),
        p = d && d.v8;
      p && (a = (o = p.split("."))[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])),
        !a &&
          l &&
          (!(o = l.match(/Edge\/(\d+)/)) || o[1] >= 74) &&
          (o = l.match(/Chrome\/(\d+)/)) &&
          (a = +o[1]),
        (t.exports = a);
    },
    function (t, i, r) {
      var o = r(267),
        a = r(193).concat("length", "prototype");
      i.f =
        Object.getOwnPropertyNames ||
        function getOwnPropertyNames(t) {
          return o(t, a);
        };
    },
    function (t, i, r) {
      "use strict";
      var o = r(74),
        a = r(24),
        c = r(73);
      t.exports = function (t, i, r) {
        var l = o(i);
        l in t ? a.f(t, l, c(0, r)) : (t[l] = r);
      };
    },
    function (t, i, r) {
      var o = r(51);
      t.exports =
        Array.isArray ||
        function isArray(t) {
          return "Array" == o(t);
        };
    },
    function (t, i, r) {
      var o = r(19),
        a = r(62),
        c = r(24).f,
        l = o("unscopables"),
        u = Array.prototype;
      null == u[l] && c(u, l, { configurable: !0, value: a(null) }),
        (t.exports = function (t) {
          u[l][t] = !0;
        });
    },
    function (t, i, r) {
      var o = r(10),
        a = r(16),
        c = r(280);
      t.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var t,
                i = !1,
                r = {};
              try {
                (t = o(
                  Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")
                    .set
                ))(r, []),
                  (i = r instanceof Array);
              } catch (t) {}
              return function setPrototypeOf(r, o) {
                return a(r), c(o), i ? t(r, o) : (r.__proto__ = o), r;
              };
            })()
          : void 0);
    },
    function (t, i, r) {
      var o = r(60),
        a = TypeError;
      t.exports = function (t, i) {
        if (o(i, t)) return t;
        throw a("Incorrect invocation");
      };
    },
    ,
    ,
    ,
    ,
    function (t, i, r) {
      var o = r(35),
        a = r(52);
      t.exports = function (t, i) {
        var r = t[i];
        return a(r) ? void 0 : o(r);
      };
    },
    function (t, i) {
      var r = String;
      t.exports = function (t) {
        try {
          return r(t);
        } catch (t) {
          return "Object";
        }
      };
    },
    function (t, i, r) {
      var o = r(51),
        a = r(10);
      t.exports = function (t) {
        if ("Function" === o(t)) return a(t);
      };
    },
    function (t, i, r) {
      var o = r(10);
      t.exports = o([].slice);
    },
    function (t, i, r) {
      var o = r(51),
        a = r(11);
      t.exports = "process" == o(a.process);
    },
    function (t, i, r) {
      var o = r(6),
        a = r(10),
        c = r(109),
        l = r(18),
        u = r(23),
        h = r(24).f,
        d = r(76),
        p = r(196),
        v = r(144),
        g = r(108),
        m = r(121),
        y = !1,
        b = g("meta"),
        _ = 0,
        setMetadata = function (t) {
          h(t, b, { value: { objectID: "O" + _++, weakData: {} } });
        },
        w = (t.exports = {
          enable: function () {
            (w.enable = function () {}), (y = !0);
            var t = d.f,
              i = a([].splice),
              r = {};
            (r[b] = 1),
              t(r).length &&
                ((d.f = function (r) {
                  for (var o = t(r), a = 0, c = o.length; a < c; a++)
                    if (o[a] === b) {
                      i(o, a, 1);
                      break;
                    }
                  return o;
                }),
                o(
                  { target: "Object", stat: !0, forced: !0 },
                  { getOwnPropertyNames: p.f }
                ));
          },
          fastKey: function (t, i) {
            if (!l(t))
              return "symbol" == typeof t
                ? t
                : ("string" == typeof t ? "S" : "P") + t;
            if (!u(t, b)) {
              if (!v(t)) return "F";
              if (!i) return "E";
              setMetadata(t);
            }
            return t[b].objectID;
          },
          getWeakData: function (t, i) {
            if (!u(t, b)) {
              if (!v(t)) return !0;
              if (!i) return !1;
              setMetadata(t);
            }
            return t[b].weakData;
          },
          onFreeze: function (t) {
            return m && y && v(t) && !u(t, b) && setMetadata(t), t;
          },
        });
      c[b] = !0;
    },
    ,
    ,
    function (t, i, r) {
      var o = r(36),
        a = r(21),
        c = r(60),
        l = r(261),
        u = Object;
      t.exports = l
        ? function (t) {
            return "symbol" == typeof t;
          }
        : function (t) {
            var i = o("Symbol");
            return a(i) && c(i.prototype, u(t));
          };
    },
    function (t, i, r) {
      var o = r(75),
        a = r(9);
      t.exports =
        !!Object.getOwnPropertySymbols &&
        !a(function () {
          var t = Symbol();
          return (
            !String(t) ||
            !(Object(t) instanceof Symbol) ||
            (!Symbol.sham && o && o < 41)
          );
        });
    },
    function (t, i, r) {
      var o = r(41),
        a = r(188);
      (t.exports = function (t, i) {
        return a[t] || (a[t] = void 0 !== i ? i : {});
      })("versions", []).push({
        version: "3.26.1",
        mode: o ? "pure" : "global",
        copyright: "?? 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",
        source: "https://github.com/zloirock/core-js",
      });
    },
    function (t, i, r) {
      var o = r(14),
        a = r(23),
        c = Function.prototype,
        l = o && Object.getOwnPropertyDescriptor,
        u = a(c, "name"),
        h = u && "something" === function something() {}.name,
        d = u && (!o || (o && l(c, "name").configurable));
      t.exports = { EXISTS: u, PROPER: h, CONFIGURABLE: d };
    },
    function (t, i, r) {
      "use strict";
      var o = r(36),
        a = r(24),
        c = r(19),
        l = r(14),
        u = c("species");
      t.exports = function (t) {
        var i = o(t),
          r = a.f;
        l &&
          i &&
          !i[u] &&
          r(i, u, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    function (t, i, r) {
      var o = r(63),
        a = r(20),
        c = r(16),
        l = r(87),
        u = r(200),
        h = r(29),
        d = r(60),
        p = r(138),
        v = r(118),
        g = r(277),
        m = TypeError,
        Result = function (t, i) {
          (this.stopped = t), (this.result = i);
        },
        y = Result.prototype;
      t.exports = function (t, i, r) {
        var b,
          _,
          w,
          x,
          S,
          k,
          T,
          E = r && r.that,
          O = !(!r || !r.AS_ENTRIES),
          I = !(!r || !r.IS_RECORD),
          C = !(!r || !r.IS_ITERATOR),
          A = !(!r || !r.INTERRUPTED),
          L = o(i, E),
          stop = function (t) {
            return b && g(b, "normal", t), new Result(!0, t);
          },
          callFn = function (t) {
            return O
              ? (c(t), A ? L(t[0], t[1], stop) : L(t[0], t[1]))
              : A
              ? L(t, stop)
              : L(t);
          };
        if (I) b = t.iterator;
        else if (C) b = t;
        else {
          if (!(_ = v(t))) throw m(l(t) + " is not iterable");
          if (u(_)) {
            for (w = 0, x = h(t); x > w; w++)
              if ((S = callFn(t[w])) && d(y, S)) return S;
            return new Result(!1);
          }
          b = p(t, _);
        }
        for (k = I ? t.next : b.next; !(T = a(k, b)).done; ) {
          try {
            S = callFn(T.value);
          } catch (t) {
            g(b, "throw", t);
          }
          if ("object" == typeof S && S && d(y, S)) return S;
        }
        return new Result(!1);
      };
    },
    function (t, i, r) {
      var o = r(10),
        a = r(40),
        c = r(27),
        l = r(147),
        u = o("".replace),
        h = "[" + l + "]",
        d = RegExp("^" + h + h + "*"),
        p = RegExp(h + h + "*$"),
        createMethod = function (t) {
          return function (i) {
            var r = c(a(i));
            return 1 & t && (r = u(r, d, "")), 2 & t && (r = u(r, p, "")), r;
          };
        };
      t.exports = {
        start: createMethod(1),
        end: createMethod(2),
        trim: createMethod(3),
      };
    },
    function (t, i, r) {
      var o = r(11);
      t.exports = o.Promise;
    },
    ,
    ,
    ,
    ,
    function (t, i, r) {
      var o = r(9);
      t.exports = !o(function () {
        var t = function () {}.bind();
        return "function" != typeof t || t.hasOwnProperty("prototype");
      });
    },
    function (t, i, r) {
      var o = r(10),
        a = r(9),
        c = r(51),
        l = Object,
        u = o("".split);
      t.exports = a(function () {
        return !l("z").propertyIsEnumerable(0);
      })
        ? function (t) {
            return "String" == c(t) ? u(t, "") : l(t);
          }
        : l;
    },
    function (t, i, r) {
      var o = r(10),
        a = 0,
        c = Math.random(),
        l = o((1).toString);
      t.exports = function (t) {
        return "Symbol(" + (void 0 === t ? "" : t) + ")_" + l(++a + c, 36);
      };
    },
    function (t, i) {
      t.exports = {};
    },
    function (t, i, r) {
      var o = r(39),
        a = r(68),
        c = r(29),
        createMethod = function (t) {
          return function (i, r, l) {
            var u,
              h = o(i),
              d = c(h),
              p = a(l, d);
            if (t && r != r) {
              for (; d > p; ) if ((u = h[p++]) != u) return !0;
            } else
              for (; d > p; p++)
                if ((t || p in h) && h[p] === r) return t || p || 0;
            return !t && -1;
          };
        };
      t.exports = { includes: createMethod(!0), indexOf: createMethod(!1) };
    },
    function (t, i, r) {
      var o = r(9),
        a = r(21),
        c = /#|\.prototype\./,
        isForced = function (t, i) {
          var r = u[l(t)];
          return r == d || (r != h && (a(i) ? o(i) : !!i));
        },
        l = (isForced.normalize = function (t) {
          return String(t).replace(c, ".").toLowerCase();
        }),
        u = (isForced.data = {}),
        h = (isForced.NATIVE = "N"),
        d = (isForced.POLYFILL = "P");
      t.exports = isForced;
    },
    function (t, i, r) {
      var o = r(267),
        a = r(193);
      t.exports =
        Object.keys ||
        function keys(t) {
          return o(t, a);
        };
    },
    function (t, i, r) {
      var o = r(68),
        a = r(29),
        c = r(77),
        l = Array,
        u = Math.max;
      t.exports = function (t, i, r) {
        for (
          var h = a(t),
            d = o(i, h),
            p = o(void 0 === r ? h : r, h),
            v = l(u(p - d, 0)),
            g = 0;
          d < p;
          d++, g++
        )
          c(v, g, t[d]);
        return (v.length = g), v;
      };
    },
    function (t, i, r) {
      var o = r(383);
      t.exports = function (t, i) {
        return new (o(t))(0 === i ? 0 : i);
      };
    },
    function (t, i, r) {
      var o = r(10),
        a = r(9),
        c = r(21),
        l = r(69),
        u = r(36),
        h = r(191),
        noop = function () {},
        d = [],
        p = u("Reflect", "construct"),
        v = /^\s*(?:class|function)\b/,
        g = o(v.exec),
        m = !v.exec(noop),
        y = function isConstructor(t) {
          if (!c(t)) return !1;
          try {
            return p(noop, d, t), !0;
          } catch (t) {
            return !1;
          }
        },
        b = function isConstructor(t) {
          if (!c(t)) return !1;
          switch (l(t)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
              return !1;
          }
          try {
            return m || !!g(v, h(t));
          } catch (t) {
            return !0;
          }
        };
      (b.sham = !0),
        (t.exports =
          !p ||
          a(function () {
            var t;
            return (
              y(y.call) ||
              !y(Object) ||
              !y(function () {
                t = !0;
              }) ||
              t
            );
          })
            ? b
            : y);
    },
    function (t, i, r) {
      var o = r(9),
        a = r(19),
        c = r(75),
        l = a("species");
      t.exports = function (t) {
        return (
          c >= 51 ||
          !o(function () {
            var i = [];
            return (
              ((i.constructor = {})[l] = function () {
                return { foo: 1 };
              }),
              1 !== i[t](Boolean).foo
            );
          })
        );
      };
    },
    function (t, i) {
      t.exports = {};
    },
    function (t, i, r) {
      var o = r(69),
        a = r(86),
        c = r(52),
        l = r(117),
        u = r(19)("iterator");
      t.exports = function (t) {
        if (!c(t)) return a(t, u) || a(t, "@@iterator") || l[o(t)];
      };
    },
    function (t, i, r) {
      var o = r(28);
      t.exports = function (t, i, r) {
        for (var a in i) o(t, a, i[a], r);
        return t;
      };
    },
    function (t, i, r) {
      var o = r(16),
        a = r(207),
        c = r(52),
        l = r(19)("species");
      t.exports = function (t, i) {
        var r,
          u = o(t).constructor;
        return void 0 === u || c((r = o(u)[l])) ? i : a(r);
      };
    },
    function (t, i, r) {
      var o = r(9);
      t.exports = !o(function () {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    },
    function (t, i) {
      var r = TypeError;
      t.exports = function (t, i) {
        if (t < i) throw r("Not enough arguments");
        return t;
      };
    },
    function (t, i, r) {
      var o = r(11),
        a = r(101),
        c = r(21),
        l = r(111),
        u = r(191),
        h = r(19),
        d = r(517),
        p = r(295),
        v = r(41),
        g = r(75),
        m = a && a.prototype,
        y = h("species"),
        b = !1,
        _ = c(o.PromiseRejectionEvent),
        w = l("Promise", function () {
          var t = u(a),
            i = t !== String(a);
          if (!i && 66 === g) return !0;
          if (v && (!m.catch || !m.finally)) return !0;
          if (!g || g < 51 || !/native code/.test(t)) {
            var r = new a(function (t) {
                t(1);
              }),
              FakePromise = function (t) {
                t(
                  function () {},
                  function () {}
                );
              };
            if (
              (((r.constructor = {})[y] = FakePromise),
              !(b = r.then(function () {}) instanceof FakePromise))
            )
              return !0;
          }
          return !i && (d || p) && !_;
        });
      t.exports = { CONSTRUCTOR: w, REJECTION_EVENT: _, SUBCLASSING: b };
    },
    function (t, i, r) {
      "use strict";
      var o = r(35),
        a = TypeError,
        PromiseCapability = function (t) {
          var i, r;
          (this.promise = new t(function (t, o) {
            if (void 0 !== i || void 0 !== r)
              throw a("Bad Promise constructor");
            (i = t), (r = o);
          })),
            (this.resolve = o(i)),
            (this.reject = o(r));
        };
      t.exports.f = function (t) {
        return new PromiseCapability(t);
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, i, r) {
      var o = r(1),
        a = r(2),
        c = (function () {
          "use strict";
          function DropdownBehavior() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : '[data-core-nav="header"]',
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : '[aria-haspopup="true"]',
              r =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              a =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : void 0;
            o(this, DropdownBehavior), this._hydrateDropdown(t, i, r, a);
          }
          return (
            a(DropdownBehavior, [
              {
                key: "_hydrateDropdown",
                value: function _hydrateDropdown(t, i, r, o) {
                  var a = document.body.querySelector(t);
                  if (a) {
                    var c = a.querySelectorAll(i);
                    if (c.length > 0) {
                      var l = this;
                      c.forEach(function (t) {
                        var i = a.querySelector(
                          "#" + t.getAttribute("aria-controls")
                        );
                        i &&
                          "menu" === i.getAttribute("role") &&
                          (jQuery
                            ? jQuery(i).hide()
                            : i.setAttribute("tabindex", "-1"),
                          t.addEventListener("click", function () {
                            l._toggle(t, i), o && o(this);
                          }));
                      }),
                        r &&
                          document.body.addEventListener("click", function (t) {
                            var i = t.target,
                              r = t.target.parentNode;
                            i.hasAttribute("aria-haspopup") ||
                              r.hasAttribute("aria-haspopup") ||
                              l._clickOutside(i, a);
                          });
                    }
                  }
                },
              },
              {
                key: "_clickOutside",
                value: function _clickOutside(t, i) {
                  var r = this,
                    o = i.querySelectorAll(
                      '[aria-haspopup="true"][aria-expanded="true"]'
                    ),
                    a = !1;
                  o.forEach(function (i) {
                    for (var o = i.nextElementSibling, c = [], l = t; l; ) {
                      if (l === o) {
                        a = !0;
                        break;
                      }
                      c.unshift(l), (l = l.parentNode);
                    }
                    a || r._hide(i, o);
                  });
                },
              },
              {
                key: "_hide",
                value: function _hide(t, i) {
                  jQuery
                    ? jQuery(i).slideToggle("fast")
                    : i.setAttribute("tabindex", "-1"),
                    t.setAttribute("aria-expanded", "false");
                },
              },
              {
                key: "_show",
                value: function _show(t, i) {
                  jQuery && jQuery(i).slideToggle("fast"),
                    i.setAttribute("tabindex", "0"),
                    i.focus(),
                    t.setAttribute("aria-expanded", "true");
                },
              },
              {
                key: "_toggle",
                value: function _toggle(t, i) {
                  "true" === t.getAttribute("aria-expanded")
                    ? this._hide(t, i)
                    : this._show(t, i);
                },
              },
            ]),
            DropdownBehavior
          );
        })();
      t.exports = c;
    },
    function (t, i, r) {
      var o = r(17),
        a = r(1),
        c = r(2);
      function _createForOfIteratorHelper(t, i) {
        var r =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!r) {
          if (
            Array.isArray(t) ||
            (r = (function _unsupportedIterableToArray(t, i) {
              if (!t) return;
              if ("string" == typeof t) return _arrayLikeToArray(t, i);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === r && t.constructor && (r = t.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return _arrayLikeToArray(t, i);
            })(t)) ||
            (i && t && "number" == typeof t.length)
          ) {
            r && (t = r);
            var o = 0,
              a = function F() {};
            return {
              s: a,
              n: function n() {
                return o >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[o++] };
              },
              e: function e(t) {
                throw t;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var c,
          l = !0,
          u = !1;
        return {
          s: function s() {
            r = r.call(t);
          },
          n: function n() {
            var t = r.next();
            return (l = t.done), t;
          },
          e: function e(t) {
            (u = !0), (c = t);
          },
          f: function f() {
            try {
              l || null == r.return || r.return();
            } finally {
              if (u) throw c;
            }
          },
        };
      }
      function _arrayLikeToArray(t, i) {
        (null == i || i > t.length) && (i = t.length);
        for (var r = 0, o = new Array(i); r < i; r++) o[r] = t[r];
        return o;
      }
      var l = (function () {
        "use strict";
        function SmartTables(t, i) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : void 0;
          if (
            (a(this, SmartTables),
            (this.config = t),
            (this.classes = t.classes),
            (this.ref = r),
            this.config.enabled)
          ) {
            if (
              ((this.tables =
                null == i
                  ? void 0
                  : i.filter(function (t) {
                      return t.smartCandidate;
                    })),
              0 === this.tables.length)
            )
              return;
            document.body.querySelectorAll(this.config.enableFor).length > 0 &&
              this.init(i);
          }
        }
        return (
          c(SmartTables, [
            {
              key: "init",
              value: function init() {
                try {
                  this.makeSmartTable(
                    this.tables,
                    this.config.sort,
                    this.config.filter
                  );
                } catch (t) {
                  console.error("Make smart tables:", t);
                }
              },
            },
            {
              key: "makeSmartTable",
              value: function makeSmartTable(t, i, r) {
                var a = this;
                t.forEach(function (t) {
                  var c,
                    l = (
                      (null === (c = a.ref) || void 0 === c
                        ? void 0
                        : c.querySelector("#" + t.id)) || t.ref
                    ).querySelector("table"),
                    u = o(l.querySelectorAll("thead th")).filter(function (t) {
                      return 1 === t.colSpan;
                    });
                  if (i && !l.classList.contains(a.classes.sort_table)) {
                    a._sort_table(l, u);
                    var h = o(l.tHead.rows).filter(function (t) {
                      return !t.classList.contains(a.classes.filter_tr);
                    });
                    h.forEach(function (t, i) {
                      var r = t.querySelectorAll("th"),
                        o = 0;
                      r.forEach(function (t, r) {
                        if (1 === t.colSpan) {
                          var c,
                            u,
                            d =
                              null === (c = h[i - 1]) ||
                              void 0 === c ||
                              null === (u = c.querySelectorAll("th")[r]) ||
                              void 0 === u
                                ? void 0
                                : u.rowSpan;
                          d > 1 && (o += d), a._sort_th(l, t, o);
                        }
                        o += t.colSpan;
                      });
                    });
                  }
                  if (r && !l.classList.contains(a.classes.filter_table)) {
                    var d,
                      p,
                      v =
                        (null === (d = l.tBodies[0]) ||
                        void 0 === d ||
                        null === (p = d.rows[0]) ||
                        void 0 === p
                          ? void 0
                          : p.getElementsByTagName("TD").length) || u.length;
                    a._filter_table(l), a._filter_thead(l, v);
                  }
                });
              },
            },
            {
              key: "_check_zebra_coloring",
              value: function _check_zebra_coloring(t) {
                var i,
                  r = _createForOfIteratorHelper(t.tBodies);
                try {
                  for (r.s(); !(i = r.n()).done; ) {
                    var o = i.value,
                      a = o.rows;
                    if (o.querySelector("." + this.classes.filter_active)) {
                      o.dataset.shading = "custom";
                      for (var c = "odd", l = 0; l < a.length; l++) {
                        var u = a[l].classList.contains(
                          this.classes.filter_active
                        );
                        a[l].classList.remove(
                          this.classes.even,
                          this.classes.odd
                        ),
                          u ||
                            (a[l].classList.add(this.classes[c]),
                            (c = "odd" === c ? "even" : "odd"));
                      }
                    } else {
                      o.removeAttribute("data-shading");
                      for (var h = 0; h < a.length; h++)
                        a[h].classList.remove(
                          this.classes.even,
                          this.classes.odd
                        );
                    }
                  }
                } catch (t) {
                  r.e(t);
                } finally {
                  r.f();
                }
              },
            },
            {
              key: "_filter",
              value: function _filter(t, i, r) {
                var a = this;
                if ("" === r.value || r.value.length < r.dataset.value.length) {
                  i.dispatchEvent(new Event("updateFiltering"));
                  var c = i.querySelectorAll("thead input");
                  o(c).forEach(function (t, r) {
                    return a._filter_fn(r, i, t);
                  });
                } else this._filter_fn(t, i, r);
                this._check_zebra_coloring(i);
              },
            },
            {
              key: "_filter_fn",
              value: function _filter_fn(t, i, r) {
                var o,
                  a = r.value,
                  c = _createForOfIteratorHelper(i.tBodies);
                try {
                  for (c.s(); !(o = c.n()).done; )
                    for (var l = o.value.rows, u = 0; u < l.length; u++) {
                      l[u]
                        .getElementsByTagName("TD")
                        [t].innerText.toLowerCase()
                        .includes(a.toLowerCase()) ||
                        l[u].classList.add(this.classes.filter_active);
                    }
                } catch (t) {
                  c.e(t);
                } finally {
                  c.f();
                }
                r.dataset.value = a;
              },
            },
            {
              key: "_filter_table",
              value: function _filter_table(t) {
                var i = this;
                t.addEventListener("updateFiltering", function () {
                  t.querySelectorAll("tbody tr").forEach(function (t) {
                    return t.classList.remove(i.classes.filter_active);
                  });
                }),
                  t.classList.add(this.classes.filter_table);
              },
            },
            {
              key: "_filter_thead",
              value: function _filter_thead(t, i) {
                var r = this,
                  o = t.querySelector("thead"),
                  a = document.createElement("tr");
                a.classList.add(this.classes.filter_tr);
                for (
                  var c = function _loop(i) {
                      var o = document.createElement("th"),
                        c = document.createElement("input");
                      (c.dataset.value = ""),
                        c.addEventListener("input", function (o) {
                          return r._filter(i, t, o.target);
                        }),
                        c.setAttribute("placeholder", "Type to search"),
                        o.append(c),
                        a.append(o);
                    },
                    l = 0;
                  l < i;
                  l++
                )
                  c(l);
                o.append(a);
              },
            },
            {
              key: "_sort_fn",
              value: function _sort_fn(t, i, r) {
                var o,
                  a,
                  c,
                  l = function isNumeric(t) {
                    return /^[0-9,]*$/g.test(t) || isFinite(t);
                  },
                  u = !0,
                  h = _createForOfIteratorHelper(i.tBodies);
                try {
                  for (h.s(); !(c = h.n()).done; ) {
                    for (
                      var d = c.value, p = d.cloneNode(!0), v = p.rows;
                      u;

                    ) {
                      for (u = !1, o = 0; o < v.length - 1; o++) {
                        a = !1;
                        var g = v[o].getElementsByTagName("TD")[t],
                          m = v[o + 1].getElementsByTagName("TD")[t],
                          y = g.innerText.toLowerCase(),
                          b = m.innerText.toLowerCase();
                        if (
                          (l(g.innerText) &&
                            l(m.innerText) &&
                            ((y = Number(y.replace(",", ""))),
                            (b = Number(b.replace(",", "")))),
                          "asc" === r)
                        ) {
                          if (y > b) {
                            a = !0;
                            break;
                          }
                        } else if ("desc" === r && y < b) {
                          a = !0;
                          break;
                        }
                      }
                      a &&
                        (v[o].parentNode.insertBefore(v[o + 1], v[o]),
                        (u = !0));
                    }
                    d.innerHTML = p.innerHTML;
                  }
                } catch (t) {
                  h.e(t);
                } finally {
                  h.f();
                }
                this._check_zebra_coloring(i);
              },
            },
            {
              key: "_sort_table",
              value: function _sort_table(t, i) {
                t.addEventListener("updateSorting", function (t) {
                  o(i)
                    .filter(function (i) {
                      return i !== t.detail;
                    })
                    .forEach(function (t) {
                      return (t.dataset.direction = "none");
                    });
                }),
                  t.classList.add(this.classes.sort_table);
              },
            },
            {
              key: "_sort_th",
              value: function _sort_th(t, i, r) {
                var o = this;
                (i.dataset.direction = "none"),
                  i.setAttribute("tabIndex", 0),
                  i.addEventListener("click", function () {
                    t.dispatchEvent(
                      new CustomEvent("updateSorting", { detail: i })
                    );
                    var a = "asc" === i.dataset.direction ? "desc" : "asc";
                    (i.dataset.direction = a), o._sort_fn(r, t, a);
                  });
              },
            },
          ]),
          SmartTables
        );
      })();
      t.exports = l;
    },
    function (t, i, r) {
      "use strict";
      var o = {}.propertyIsEnumerable,
        a = Object.getOwnPropertyDescriptor,
        c = a && !o.call({ 1: 2 }, 1);
      i.f = c
        ? function propertyIsEnumerable(t) {
            var i = a(this, t);
            return !!i && i.enumerable;
          }
        : o;
    },
    function (t, i, r) {
      var o = r(20),
        a = r(18),
        c = r(94),
        l = r(86),
        u = r(262),
        h = r(19),
        d = TypeError,
        p = h("toPrimitive");
      t.exports = function (t, i) {
        if (!a(t) || c(t)) return t;
        var r,
          h = l(t, p);
        if (h) {
          if (
            (void 0 === i && (i = "default"), (r = o(h, t, i)), !a(r) || c(r))
          )
            return r;
          throw d("Can't convert object to primitive value");
        }
        return void 0 === i && (i = "number"), u(t, i);
      };
    },
    function (t, i, r) {
      var o = r(11),
        a = r(18),
        c = o.document,
        l = a(c) && a(c.createElement);
      t.exports = function (t) {
        return l ? c.createElement(t) : {};
      };
    },
    function (t, i, r) {
      var o = r(96),
        a = r(108),
        c = o("keys");
      t.exports = function (t) {
        return c[t] || (c[t] = a(t));
      };
    },
    function (t, i) {
      i.f = Object.getOwnPropertySymbols;
    },
    function (t, i, r) {
      var o = r(20),
        a = r(35),
        c = r(16),
        l = r(87),
        u = r(118),
        h = TypeError;
      t.exports = function (t, i) {
        var r = arguments.length < 2 ? u(t) : i;
        if (a(r)) return c(o(r, t));
        throw h(l(t) + " is not iterable");
      };
    },
    function (t, i, r) {
      var o = r(19)("iterator"),
        a = !1;
      try {
        var c = 0,
          l = {
            next: function () {
              return { done: !!c++ };
            },
            return: function () {
              a = !0;
            },
          };
        (l[o] = function () {
          return this;
        }),
          Array.from(l, function () {
            throw 2;
          });
      } catch (t) {}
      t.exports = function (t, i) {
        if (!i && !a) return !1;
        var r = !1;
        try {
          var c = {};
          (c[o] = function () {
            return {
              next: function () {
                return { done: (r = !0) };
              },
            };
          }),
            t(c);
        } catch (t) {}
        return r;
      };
    },
    function (t, i, r) {
      "use strict";
      var o = r(39),
        a = r(79),
        c = r(117),
        l = r(37),
        u = r(24).f,
        h = r(201),
        d = r(203),
        p = r(41),
        v = r(14),
        g = l.set,
        m = l.getterFor("Array Iterator");
      t.exports = h(
        Array,
        "Array",
        function (t, i) {
          g(this, { type: "Array Iterator", target: o(t), index: 0, kind: i });
        },
        function () {
          var t = m(this),
            i = t.target,
            r = t.kind,
            o = t.index++;
          return !i || o >= i.length
            ? ((t.target = void 0), d(void 0, !0))
            : d("keys" == r ? o : "values" == r ? i[o] : [o, i[o]], !1);
        },
        "values"
      );
      var y = (c.Arguments = c.Array);
      if (
        (a("keys"), a("values"), a("entries"), !p && v && "values" !== y.name)
      )
        try {
          u(y, "name", { value: "values" });
        } catch (t) {}
    },
    function (t, i, r) {
      var o = r(35),
        a = r(26),
        c = r(107),
        l = r(29),
        u = TypeError,
        createMethod = function (t) {
          return function (i, r, h, d) {
            o(r);
            var p = a(i),
              v = c(p),
              g = l(p),
              m = t ? g - 1 : 0,
              y = t ? -1 : 1;
            if (h < 2)
              for (;;) {
                if (m in v) {
                  (d = v[m]), (m += y);
                  break;
                }
                if (((m += y), t ? m < 0 : g <= m))
                  throw u("Reduce of empty array with no initial value");
              }
            for (; t ? m >= 0 : g > m; m += y) m in v && (d = r(d, v[m], m, p));
            return d;
          };
        };
      t.exports = { left: createMethod(!1), right: createMethod(!0) };
    },
    function (t, i, r) {
      "use strict";
      var o = r(11),
        a = r(10),
        c = r(14),
        l = r(206),
        u = r(97),
        h = r(61),
        d = r(119),
        p = r(9),
        v = r(81),
        g = r(47),
        m = r(48),
        y = r(284),
        b = r(432),
        _ = r(54),
        w = r(80),
        x = r(76).f,
        S = r(24).f,
        k = r(199),
        T = r(113),
        E = r(53),
        O = r(37),
        I = u.PROPER,
        C = u.CONFIGURABLE,
        A = O.get,
        L = O.set,
        P = o.ArrayBuffer,
        N = P,
        R = N && N.prototype,
        j = o.DataView,
        M = j && j.prototype,
        D = Object.prototype,
        q = o.Array,
        V = o.RangeError,
        B = a(k),
        z = a([].reverse),
        H = b.pack,
        $ = b.unpack,
        packInt8 = function (t) {
          return [255 & t];
        },
        packInt16 = function (t) {
          return [255 & t, (t >> 8) & 255];
        },
        packInt32 = function (t) {
          return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255];
        },
        unpackInt32 = function (t) {
          return (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
        },
        packFloat32 = function (t) {
          return H(t, 23, 4);
        },
        packFloat64 = function (t) {
          return H(t, 52, 8);
        },
        addGetter = function (t, i) {
          S(t.prototype, i, {
            get: function () {
              return A(this)[i];
            },
          });
        },
        get = function (t, i, r, o) {
          var a = y(r),
            c = A(t);
          if (a + i > c.byteLength) throw V("Wrong index");
          var l = A(c.buffer).bytes,
            u = a + c.byteOffset,
            h = T(l, u, u + i);
          return o ? h : z(h);
        },
        set = function (t, i, r, o, a, c) {
          var l = y(r),
            u = A(t);
          if (l + i > u.byteLength) throw V("Wrong index");
          for (
            var h = A(u.buffer).bytes, d = l + u.byteOffset, p = o(+a), v = 0;
            v < i;
            v++
          )
            h[d + v] = p[c ? v : i - v - 1];
        };
      if (l) {
        var W = I && "ArrayBuffer" !== P.name;
        if (
          p(function () {
            P(1);
          }) &&
          p(function () {
            new P(-1);
          }) &&
          !p(function () {
            return new P(), new P(1.5), new P(NaN), 1 != P.length || (W && !C);
          })
        )
          W && C && h(P, "name", "ArrayBuffer");
        else {
          (N = function ArrayBuffer(t) {
            return v(this, R), new P(y(t));
          }).prototype = R;
          for (var G, U = x(P), Z = 0; U.length > Z; )
            (G = U[Z++]) in N || h(N, G, P[G]);
          R.constructor = N;
        }
        w && _(M) !== D && w(M, D);
        var X = new j(new N(2)),
          K = a(M.setInt8);
        X.setInt8(0, 2147483648),
          X.setInt8(1, 2147483649),
          (!X.getInt8(0) && X.getInt8(1)) ||
            d(
              M,
              {
                setInt8: function setInt8(t, i) {
                  K(this, t, (i << 24) >> 24);
                },
                setUint8: function setUint8(t, i) {
                  K(this, t, (i << 24) >> 24);
                },
              },
              { unsafe: !0 }
            );
      } else
        (R = (N = function ArrayBuffer(t) {
          v(this, R);
          var i = y(t);
          L(this, { bytes: B(q(i), 0), byteLength: i }),
            c || (this.byteLength = i);
        }).prototype),
          (M = (j = function DataView(t, i, r) {
            v(this, M), v(t, R);
            var o = A(t).byteLength,
              a = g(i);
            if (a < 0 || a > o) throw V("Wrong offset");
            if (a + (r = void 0 === r ? o - a : m(r)) > o)
              throw V("Wrong length");
            L(this, { buffer: t, byteLength: r, byteOffset: a }),
              c ||
                ((this.buffer = t),
                (this.byteLength = r),
                (this.byteOffset = a));
          }).prototype),
          c &&
            (addGetter(N, "byteLength"),
            addGetter(j, "buffer"),
            addGetter(j, "byteLength"),
            addGetter(j, "byteOffset")),
          d(M, {
            getInt8: function getInt8(t) {
              return (get(this, 1, t)[0] << 24) >> 24;
            },
            getUint8: function getUint8(t) {
              return get(this, 1, t)[0];
            },
            getInt16: function getInt16(t) {
              var i = get(
                this,
                2,
                t,
                arguments.length > 1 ? arguments[1] : void 0
              );
              return (((i[1] << 8) | i[0]) << 16) >> 16;
            },
            getUint16: function getUint16(t) {
              var i = get(
                this,
                2,
                t,
                arguments.length > 1 ? arguments[1] : void 0
              );
              return (i[1] << 8) | i[0];
            },
            getInt32: function getInt32(t) {
              return unpackInt32(
                get(this, 4, t, arguments.length > 1 ? arguments[1] : void 0)
              );
            },
            getUint32: function getUint32(t) {
              return (
                unpackInt32(
                  get(this, 4, t, arguments.length > 1 ? arguments[1] : void 0)
                ) >>> 0
              );
            },
            getFloat32: function getFloat32(t) {
              return $(
                get(this, 4, t, arguments.length > 1 ? arguments[1] : void 0),
                23
              );
            },
            getFloat64: function getFloat64(t) {
              return $(
                get(this, 8, t, arguments.length > 1 ? arguments[1] : void 0),
                52
              );
            },
            setInt8: function setInt8(t, i) {
              set(this, 1, t, packInt8, i);
            },
            setUint8: function setUint8(t, i) {
              set(this, 1, t, packInt8, i);
            },
            setInt16: function setInt16(t, i) {
              set(
                this,
                2,
                t,
                packInt16,
                i,
                arguments.length > 2 ? arguments[2] : void 0
              );
            },
            setUint16: function setUint16(t, i) {
              set(
                this,
                2,
                t,
                packInt16,
                i,
                arguments.length > 2 ? arguments[2] : void 0
              );
            },
            setInt32: function setInt32(t, i) {
              set(
                this,
                4,
                t,
                packInt32,
                i,
                arguments.length > 2 ? arguments[2] : void 0
              );
            },
            setUint32: function setUint32(t, i) {
              set(
                this,
                4,
                t,
                packInt32,
                i,
                arguments.length > 2 ? arguments[2] : void 0
              );
            },
            setFloat32: function setFloat32(t, i) {
              set(
                this,
                4,
                t,
                packFloat32,
                i,
                arguments.length > 2 ? arguments[2] : void 0
              );
            },
            setFloat64: function setFloat64(t, i) {
              set(
                this,
                8,
                t,
                packFloat64,
                i,
                arguments.length > 2 ? arguments[2] : void 0
              );
            },
          });
      E(N, "ArrayBuffer"),
        E(j, "DataView"),
        (t.exports = { ArrayBuffer: N, DataView: j });
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(11),
        c = r(10),
        l = r(111),
        u = r(28),
        h = r(91),
        d = r(99),
        p = r(81),
        v = r(21),
        g = r(52),
        m = r(18),
        y = r(9),
        b = r(139),
        _ = r(53),
        w = r(145);
      t.exports = function (t, i, r) {
        var x = -1 !== t.indexOf("Map"),
          S = -1 !== t.indexOf("Weak"),
          k = x ? "set" : "add",
          T = a[t],
          E = T && T.prototype,
          O = T,
          I = {},
          fixMethod = function (t) {
            var i = c(E[t]);
            u(
              E,
              t,
              "add" == t
                ? function add(t) {
                    return i(this, 0 === t ? 0 : t), this;
                  }
                : "delete" == t
                ? function (t) {
                    return !(S && !m(t)) && i(this, 0 === t ? 0 : t);
                  }
                : "get" == t
                ? function get(t) {
                    return S && !m(t) ? void 0 : i(this, 0 === t ? 0 : t);
                  }
                : "has" == t
                ? function has(t) {
                    return !(S && !m(t)) && i(this, 0 === t ? 0 : t);
                  }
                : function set(t, r) {
                    return i(this, 0 === t ? 0 : t, r), this;
                  }
            );
          };
        if (
          l(
            t,
            !v(T) ||
              !(
                S ||
                (E.forEach &&
                  !y(function () {
                    new T().entries().next();
                  }))
              )
          )
        )
          (O = r.getConstructor(i, t, x, k)), h.enable();
        else if (l(t, !0)) {
          var C = new O(),
            A = C[k](S ? {} : -0, 1) != C,
            L = y(function () {
              C.has(1);
            }),
            P = b(function (t) {
              new T(t);
            }),
            N =
              !S &&
              y(function () {
                for (var t = new T(), i = 5; i--; ) t[k](i, i);
                return !t.has(-0);
              });
          P ||
            (((O = i(function (t, i) {
              p(t, E);
              var r = w(new T(), t, O);
              return g(i) || d(i, r[k], { that: r, AS_ENTRIES: x }), r;
            })).prototype = E),
            (E.constructor = O)),
            (L || N) &&
              (fixMethod("delete"), fixMethod("has"), x && fixMethod("get")),
            (N || A) && fixMethod(k),
            S && E.clear && delete E.clear;
        }
        return (
          (I[t] = O),
          o({ global: !0, constructor: !0, forced: O != T }, I),
          _(O, t),
          S || r.setStrong(O, t, x),
          O
        );
      };
    },
    function (t, i, r) {
      var o = r(9),
        a = r(18),
        c = r(51),
        l = r(210),
        u = Object.isExtensible,
        h = o(function () {
          u(1);
        });
      t.exports =
        h || l
          ? function isExtensible(t) {
              return !!a(t) && (!l || "ArrayBuffer" != c(t)) && (!u || u(t));
            }
          : u;
    },
    function (t, i, r) {
      var o = r(21),
        a = r(18),
        c = r(80);
      t.exports = function (t, i, r) {
        var l, u;
        return (
          c &&
            o((l = i.constructor)) &&
            l !== r &&
            a((u = l.prototype)) &&
            u !== r.prototype &&
            c(t, u),
          t
        );
      };
    },
    function (t, i) {
      var r = Math.expm1,
        o = Math.exp;
      t.exports =
        !r ||
        r(10) > 22025.465794806718 ||
        r(10) < 22025.465794806718 ||
        -2e-17 != r(-2e-17)
          ? function expm1(t) {
              var i = +t;
              return 0 == i
                ? i
                : i > -1e-6 && i < 1e-6
                ? i + (i * i) / 2
                : o(i) - 1;
            }
          : r;
    },
    function (t, i) {
      t.exports = "\t\n\v\f\r ???????????????????????????????????????????????\u2028\u2029\ufeff";
    },
    function (t, i, r) {
      "use strict";
      var o = r(41),
        a = r(11),
        c = r(9),
        l = r(205);
      t.exports =
        o ||
        !c(function () {
          if (!(l && l < 535)) {
            var t = Math.random();
            __defineSetter__.call(null, t, function () {}), delete a[t];
          }
        });
    },
    function (t, i, r) {
      var o,
        a,
        c,
        l,
        u = r(11),
        h = r(64),
        d = r(63),
        p = r(21),
        v = r(23),
        g = r(9),
        m = r(269),
        y = r(89),
        b = r(135),
        _ = r(122),
        w = r(293),
        x = r(90),
        S = u.setImmediate,
        k = u.clearImmediate,
        T = u.process,
        E = u.Dispatch,
        O = u.Function,
        I = u.MessageChannel,
        C = u.String,
        A = 0,
        L = {};
      try {
        o = u.location;
      } catch (t) {}
      var run = function (t) {
          if (v(L, t)) {
            var i = L[t];
            delete L[t], i();
          }
        },
        runner = function (t) {
          return function () {
            run(t);
          };
        },
        listener = function (t) {
          run(t.data);
        },
        post = function (t) {
          u.postMessage(C(t), o.protocol + "//" + o.host);
        };
      (S && k) ||
        ((S = function setImmediate(t) {
          _(arguments.length, 1);
          var i = p(t) ? t : O(t),
            r = y(arguments, 1);
          return (
            (L[++A] = function () {
              h(i, void 0, r);
            }),
            a(A),
            A
          );
        }),
        (k = function clearImmediate(t) {
          delete L[t];
        }),
        x
          ? (a = function (t) {
              T.nextTick(runner(t));
            })
          : E && E.now
          ? (a = function (t) {
              E.now(runner(t));
            })
          : I && !w
          ? ((l = (c = new I()).port2),
            (c.port1.onmessage = listener),
            (a = d(l.postMessage, l)))
          : u.addEventListener &&
            p(u.postMessage) &&
            !u.importScripts &&
            o &&
            "file:" !== o.protocol &&
            !g(post)
          ? ((a = post), u.addEventListener("message", listener, !1))
          : (a =
              "onreadystatechange" in b("script")
                ? function (t) {
                    m.appendChild(b("script")).onreadystatechange =
                      function () {
                        m.removeChild(this), run(t);
                      };
                  }
                : function (t) {
                    setTimeout(runner(t), 0);
                  })),
        (t.exports = { set: S, clear: k });
    },
    function (t, i, r) {
      "use strict";
      var o,
        a,
        c = r(20),
        l = r(10),
        u = r(27),
        h = r(216),
        d = r(217),
        p = r(96),
        v = r(62),
        g = r(37).get,
        m = r(300),
        y = r(301),
        b = p("native-string-replace", String.prototype.replace),
        _ = RegExp.prototype.exec,
        w = _,
        x = l("".charAt),
        S = l("".indexOf),
        k = l("".replace),
        T = l("".slice),
        E =
          ((a = /b*/g),
          c(_, (o = /a/), "a"),
          c(_, a, "a"),
          0 !== o.lastIndex || 0 !== a.lastIndex),
        O = d.BROKEN_CARET,
        I = void 0 !== /()??/.exec("")[1];
      (E || I || O || m || y) &&
        (w = function exec(t) {
          var i,
            r,
            o,
            a,
            l,
            d,
            p,
            m = this,
            y = g(m),
            C = u(t),
            A = y.raw;
          if (A)
            return (
              (A.lastIndex = m.lastIndex),
              (i = c(w, A, C)),
              (m.lastIndex = A.lastIndex),
              i
            );
          var L = y.groups,
            P = O && m.sticky,
            N = c(h, m),
            R = m.source,
            j = 0,
            M = C;
          if (
            (P &&
              ((N = k(N, "y", "")),
              -1 === S(N, "g") && (N += "g"),
              (M = T(C, m.lastIndex)),
              m.lastIndex > 0 &&
                (!m.multiline ||
                  (m.multiline && "\n" !== x(C, m.lastIndex - 1))) &&
                ((R = "(?: " + R + ")"), (M = " " + M), j++),
              (r = new RegExp("^(?:" + R + ")", N))),
            I && (r = new RegExp("^" + R + "$(?!\\s)", N)),
            E && (o = m.lastIndex),
            (a = c(_, P ? r : m, M)),
            P
              ? a
                ? ((a.input = T(a.input, j)),
                  (a[0] = T(a[0], j)),
                  (a.index = m.lastIndex),
                  (m.lastIndex += a[0].length))
                : (m.lastIndex = 0)
              : E && a && (m.lastIndex = m.global ? a.index + a[0].length : o),
            I &&
              a &&
              a.length > 1 &&
              c(b, a[0], r, function () {
                for (l = 1; l < arguments.length - 2; l++)
                  void 0 === arguments[l] && (a[l] = void 0);
              }),
            a && L)
          )
            for (a.groups = d = v(null), l = 0; l < L.length; l++)
              d[(p = L[l])[0]] = a[p[1]];
          return a;
        }),
        (t.exports = w);
    },
    function (t, i, r) {
      var o = r(10),
        a = r(47),
        c = r(27),
        l = r(40),
        u = o("".charAt),
        h = o("".charCodeAt),
        d = o("".slice),
        createMethod = function (t) {
          return function (i, r) {
            var o,
              p,
              v = c(l(i)),
              g = a(r),
              m = v.length;
            return g < 0 || g >= m
              ? t
                ? ""
                : void 0
              : (o = h(v, g)) < 55296 ||
                o > 56319 ||
                g + 1 === m ||
                (p = h(v, g + 1)) < 56320 ||
                p > 57343
              ? t
                ? u(v, g)
                : o
              : t
              ? d(v, g, g + 2)
              : p - 56320 + ((o - 55296) << 10) + 65536;
          };
        };
      t.exports = { codeAt: createMethod(!1), charAt: createMethod(!0) };
    },
    function (t, i, r) {
      "use strict";
      r(302);
      var o = r(88),
        a = r(28),
        c = r(150),
        l = r(9),
        u = r(19),
        h = r(61),
        d = u("species"),
        p = RegExp.prototype;
      t.exports = function (t, i, r, v) {
        var g = u(t),
          m = !l(function () {
            var i = {};
            return (
              (i[g] = function () {
                return 7;
              }),
              7 != ""[t](i)
            );
          }),
          y =
            m &&
            !l(function () {
              var i = !1,
                r = /a/;
              return (
                "split" === t &&
                  (((r = {}).constructor = {}),
                  (r.constructor[d] = function () {
                    return r;
                  }),
                  (r.flags = ""),
                  (r[g] = /./[g])),
                (r.exec = function () {
                  return (i = !0), null;
                }),
                r[g](""),
                !i
              );
            });
        if (!m || !y || r) {
          var b = o(/./[g]),
            _ = i(g, ""[t], function (t, i, r, a, l) {
              var u = o(t),
                h = i.exec;
              return h === c || h === p.exec
                ? m && !l
                  ? { done: !0, value: b(i, r, a) }
                  : { done: !0, value: u(r, i, a) }
                : { done: !1 };
            });
          a(String.prototype, t, _[0]), a(p, g, _[1]);
        }
        v && h(p[g], "sham", !0);
      };
    },
    function (t, i, r) {
      var o = r(20),
        a = r(16),
        c = r(21),
        l = r(51),
        u = r(150),
        h = TypeError;
      t.exports = function (t, i) {
        var r = t.exec;
        if (c(r)) {
          var d = o(r, t, i);
          return null !== d && a(d), d;
        }
        if ("RegExp" === l(t)) return o(u, t, i);
        throw h("RegExp#exec called on incompatible receiver");
      };
    },
    function (t, i, r) {
      var o = r(22),
        a = r(120),
        c = o.aTypedArrayConstructor,
        l = o.getTypedArrayConstructor;
      t.exports = function (t) {
        return c(a(t, l(t)));
      };
    },
    function (t, i, r) {
      "use strict";
      var o = {
        crossmarkDialogTmpl: r(632),
        figureTmpl: r(633),
        fvDirectory: r(634),
        fvLightbox: r(635),
        fvThumbnails: r(636),
      };
      i.a = o;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, i, r) {
      "use strict";
      r.d(i, "a", function () {
        return o.default;
      }),
        r.d(i, "b", function () {
          return c.a;
        }),
        r.d(i, "c", function () {
          return initialise;
        });
      r(177);
      var o = r(178),
        a = r(253),
        c = r.n(a),
        l = (r(187), r(12)),
        u = r.n(l);
      r(380),
        r(388),
        r(389),
        r(390),
        r(391),
        r(392),
        r(393),
        r(394),
        r(395),
        r(396),
        r(397),
        r(398),
        r(399),
        r(400),
        r(401),
        r(402),
        r(403),
        r(404),
        r(405),
        r(406),
        r(407),
        r(408),
        r(409),
        r(410),
        r(411),
        r(413),
        r(414),
        r(415),
        r(140),
        r(416),
        r(417),
        r(418),
        r(419),
        r(420),
        r(421),
        r(422),
        r(423),
        r(424),
        r(425),
        r(426),
        r(427),
        r(429),
        r(430),
        r(431),
        r(433),
        r(434),
        r(435),
        r(437),
        r(438),
        r(440),
        r(441),
        r(443),
        r(444),
        r(445),
        r(446),
        r(447),
        r(448),
        r(450),
        r(451),
        r(452),
        r(453),
        r(454),
        r(455),
        r(456),
        r(457),
        r(459),
        r(460),
        r(461),
        r(463),
        r(464),
        r(465),
        r(466),
        r(467),
        r(468),
        r(469),
        r(470),
        r(471),
        r(472),
        r(474),
        r(475),
        r(476),
        r(477),
        r(478),
        r(479),
        r(480),
        r(481),
        r(482),
        r(483),
        r(484),
        r(485),
        r(486),
        r(487),
        r(488),
        r(489),
        r(490),
        r(491),
        r(492),
        r(493),
        r(494),
        r(495),
        r(496),
        r(497),
        r(498),
        r(499),
        r(500),
        r(501),
        r(502),
        r(503),
        r(504),
        r(505),
        r(506),
        r(508),
        r(509),
        r(510),
        r(511),
        r(523),
        r(524),
        r(525),
        r(526),
        r(527),
        r(528),
        r(529),
        r(530),
        r(531),
        r(532),
        r(533),
        r(534),
        r(535),
        r(536),
        r(537),
        r(302),
        r(539),
        r(540),
        r(541),
        r(543),
        r(544),
        r(545),
        r(546),
        r(304),
        r(547),
        r(548),
        r(549),
        r(550),
        r(551),
        r(552),
        r(554),
        r(555),
        r(556),
        r(557),
        r(558),
        r(560),
        r(562),
        r(563),
        r(564),
        r(565),
        r(566),
        r(567),
        r(568),
        r(569),
        r(570),
        r(571),
        r(572),
        r(573),
        r(574),
        r(575),
        r(578),
        r(579),
        r(580),
        r(581),
        r(582),
        r(583),
        r(584),
        r(585),
        r(586),
        r(587),
        r(588),
        r(589),
        r(592),
        r(593),
        r(594),
        r(595),
        r(596),
        r(597),
        r(598),
        r(599),
        r(600),
        r(601),
        r(602),
        r(603),
        r(604),
        r(605),
        r(606),
        r(607),
        r(608),
        r(609),
        r(610),
        r(611),
        r(612),
        r(613),
        r(615),
        r(617),
        r(618),
        r(619),
        r(622),
        r(623),
        r(626),
        r(629),
        r(630),
        r(349);
      function ownKeys(t, i) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          i &&
            (o = o.filter(function (i) {
              return Object.getOwnPropertyDescriptor(t, i).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function _objectSpread(t) {
        for (var i = 1; i < arguments.length; i++) {
          var r = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(r), !0).forEach(function (i) {
                u()(t, i, r[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (i) {
                Object.defineProperty(
                  t,
                  i,
                  Object.getOwnPropertyDescriptor(r, i)
                );
              });
        }
        return t;
      }
      var h = r(631);
      function initialise(t) {
        var i = t.ArticleStore,
          r = t.ArticleView,
          o = t.config,
          a = void 0 === o ? {} : o,
          c = t.templates,
          l = void 0 === c ? {} : c,
          u = t.customIsInEditor;
        if (document.body.querySelector("article[data-design]")) {
          var d = _objectSpread({ classNames: {}, selectors: {}, msg: {} }, a),
            p = !(
              !window.PB ||
              !window.PB.$ ||
              (!h("pbScope") && !h("pbEditor"))
            ),
            v = function initArticle() {
              try {
                var t = new i(
                  _objectSpread(_objectSpread({}, d), {}, { isInEditor: p })
                ).initiate();
                (window.articleView = new r(
                  t,
                  _objectSpread(_objectSpread({}, d), {}, { isInEditor: p }),
                  l
                )),
                  window.articleView.initiate();
              } catch (t) {
                console.error("Article couldn't be initialized: " + t);
              }
            };
          if (void 0 !== u) {
            if (((p = u), location.href.includes("pbEdit=true") && !p)) return;
            v();
          } else
            p
              ? window.PB.$(document.documentElement).one(
                  "EnteredDesignMode",
                  function () {
                    v();
                    try {
                      window.PB.enterDesignMode();
                    } catch (t) {
                      console.error("Can't update PB: " + t);
                    }
                  }
                )
              : v();
        } else
          console.debug("No Axel generated article found. Stop initialise");
      }
      r(180),
        r(181),
        r(184),
        r(132),
        r(185),
        r(59),
        r(131),
        r(182),
        r(186),
        r(183),
        r(66),
        r(55),
        r(155);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, i, r) {
      var o = r(1),
        a = r(2),
        c = (function () {
          "use strict";
          function EventManager() {
            o(this, EventManager),
              (this.dispatch = this.dispatch.bind(this)),
              (this.subscribe = this.subscribe.bind(this)),
              (this.dispatchAnchorsAction =
                this.dispatchAnchorsAction.bind(this));
          }
          return (
            a(EventManager, [
              {
                key: "subscribeAnchorClick",
                value: function subscribeAnchorClick(t, i) {
                  var r =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                  if (
                    ((this._anchorsClickQueue =
                      this._anchorsClickQueue || new Map()),
                    this._anchorsClickQueue.has(t) ||
                      this._anchorsClickQueue.set(t, []),
                    this._anchorsClickQueue.get(t).indexOf(i) < 0)
                  ) {
                    var o = this._anchorsClickQueue.get(t);
                    r
                      ? (o.splice(i, 1), this._anchorsClickQueue.set(t, o))
                      : (o.push(i), this._anchorsClickQueue.set(t, o));
                  }
                },
              },
              {
                key: "dispatchAnchorsAction",
                value: function dispatchAnchorsAction(t) {
                  if (
                    ("click" === t.type || 13 == t.keyCode) &&
                    this._anchorsClickQueue
                  ) {
                    for (var i = t.target; "A" !== i.tagName; ) {
                      if (!i.parentNode) {
                        i = null;
                        break;
                      }
                      i = i.parentNode;
                    }
                    if (i) {
                      var r = this.cloneEvent(t, { currentTarget: i });
                      this._anchorsClickQueue.forEach(function (t, o) {
                        (o === i || ("string" == typeof o && i.matches(o))) &&
                          t.map(function (t) {
                            t(r);
                          });
                      });
                    }
                  }
                },
              },
              {
                key: "subscribe",
                value: function subscribe(t, i) {
                  var r =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    o = t + "Queue";
                  this[o] = this[o] || [];
                  var a = this[o].indexOf(i) >= 0;
                  r
                    ? a && this[o].splice(this[o].indexOf(i), 1)
                    : a
                    ? console.warn(
                        "Attempting to assign duplicating callback to a performance sensitive event listener. Refusing."
                      )
                    : this[o].push(i);
                },
              },
              {
                key: "dispatch",
                value: function dispatch(t) {
                  var i = t.type || t;
                  this[i + "Queue"] &&
                    this[i + "Queue"].map(function (i) {
                      return i(t);
                    });
                },
              },
              {
                key: "cloneEvent",
                value: function cloneEvent(t, i) {
                  if (null != t) {
                    var r = new (function ClonedEvent() {})(),
                      o = function _loop(o) {
                        var a = Object.getOwnPropertyDescriptor(t, o);
                        a && (a.get || a.set)
                          ? Object.defineProperty(r, o, a)
                          : "function" == typeof t[o]
                          ? (r[o] = function () {
                              return t[o].apply(t, arguments);
                            })
                          : (r[o] = i[o] || t[o]);
                      };
                    for (var a in t) o(a);
                    return Object.setPrototypeOf(r, t), r;
                  }
                },
              },
            ]),
            EventManager
          );
        })();
      t.exports = c;
    },
    function (t, i, r) {
      "use strict";
      r.r(i),
        r.d(i, "default", function () {
          return m;
        }),
        r.d(i, "FigureType", function () {
          return y;
        });
      var o = r(12),
        a = r.n(o),
        c = r(8),
        l = r.n(c),
        u = r(17),
        h = r.n(u),
        d = r(1),
        p = r.n(d),
        v = r(2),
        g = r.n(v);
      function _createForOfIteratorHelper(t, i) {
        var r =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!r) {
          if (
            Array.isArray(t) ||
            (r = (function _unsupportedIterableToArray(t, i) {
              if (!t) return;
              if ("string" == typeof t) return _arrayLikeToArray(t, i);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === r && t.constructor && (r = t.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return _arrayLikeToArray(t, i);
            })(t)) ||
            (i && t && "number" == typeof t.length)
          ) {
            r && (t = r);
            var o = 0,
              a = function F() {};
            return {
              s: a,
              n: function n() {
                return o >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[o++] };
              },
              e: function e(t) {
                throw t;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var c,
          l = !0,
          u = !1;
        return {
          s: function s() {
            r = r.call(t);
          },
          n: function n() {
            var t = r.next();
            return (l = t.done), t;
          },
          e: function e(t) {
            (u = !0), (c = t);
          },
          f: function f() {
            try {
              l || null == r.return || r.return();
            } finally {
              if (u) throw c;
            }
          },
        };
      }
      function _arrayLikeToArray(t, i) {
        (null == i || i > t.length) && (i = t.length);
        for (var r = 0, o = new Array(i); r < i; r++) o[r] = t[r];
        return o;
      }
      function ownKeys(t, i) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          i &&
            (o = o.filter(function (i) {
              return Object.getOwnPropertyDescriptor(t, i).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function _objectSpread(t) {
        for (var i = 1; i < arguments.length; i++) {
          var r = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(r), !0).forEach(function (i) {
                a()(t, i, r[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (i) {
                Object.defineProperty(
                  t,
                  i,
                  Object.getOwnPropertyDescriptor(r, i)
                );
              });
        }
        return t;
      }
      var m = (function () {
          function ArticleStore(t) {
            var i = this,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            return (
              p()(this, ArticleStore),
              (this.s = {
                article: "article[data-design]",
                title: 'h1[property="name"]',
                sections: '[data-core-nav="article"] a',
                dataScriptId: "contribution-meta",
                audio: "audio",
                footnotes:
                  '#footnotes [role="doc-footnote"], .core-footnote-group [role="doc-footnote"]',
                authors: '.core-authors [property="author"]',
                navigation: ".content-navigation",
                access: "[data-article-access]",
                accessType: "[data-article-access-type]",
                decorationsXReference:
                  '#frontmatter header .core-container, header[data-extent="frontmatter"] .core-container',
                bookDataScriptId: "book-title",
                processorTitleSelector: ".label, .heading",
              }),
              (this.processors = {
                meta: function meta(t, r) {
                  try {
                    var o = document.getElementById(i.s.dataScriptId);
                    if (!o)
                      return (
                        console.debug("No data script has been sent"), null
                      );
                    try {
                      return JSON.parse(o.innerHTML);
                    } catch (t) {
                      return (
                        console.debug("Invalid JSON in article data script"),
                        null
                      );
                    }
                  } catch (t) {
                    console.error("Processors - meta: " + t);
                  }
                },
                citations: function citations(t) {
                  try {
                    var r = i.config.cloneFromBody.references;
                    return i.processorXefs(r.controllers.elements, t);
                  } catch (t) {
                    console.error("Processors - citations: " + t);
                  }
                },
                footnotes: function footnotes(t) {
                  try {
                    return i.processorXefs(i.s.footnotes, t);
                  } catch (t) {
                    console.error("Processors - footnotes: " + t);
                  }
                },
                navigation: function navigation(t) {
                  try {
                    return t.querySelector(i.s.navigation);
                  } catch (t) {
                    console.error("Processors - navigation: " + t);
                  }
                },
                access: function access(t) {
                  try {
                    var r = t.querySelector(i.s.access);
                    if (r) {
                      var access = r.getAttribute("data-article-access");
                      return (
                        access ||
                        (console.debug(
                          "No source for access type has been found! Falling back to FREE appearance. The data exposure is not affected."
                        ),
                        "free")
                      );
                    }
                  } catch (t) {
                    console.error("Processors - access: " + t);
                  }
                },
                accessType: function accessType(t) {
                  try {
                    var r = t.querySelector(i.s.accessType);
                    if (r) {
                      var o = r.getAttribute("data-article-access-type");
                      return (
                        o ||
                        (console.debug(
                          "No source for access type has been found! Falling back to FREE appearance. The data exposure is not affected."
                        ),
                        "free")
                      );
                    }
                  } catch (t) {
                    console.error("Processors - access type: " + t);
                  }
                },
                audio: function audio(t) {
                  try {
                    return (
                      (i.audio = h()(t.querySelectorAll(i.s.audio))),
                      i.audio.map(function (t) {
                        return i.defaultPreProcessor(t, i.audio, "audio");
                      }),
                      i.audio
                    );
                  } catch (t) {
                    console.error("Processors - audio" + t);
                  }
                },
                figures: function figures(t) {
                  try {
                    var r = i.config.cloneFromBody.figures;
                    (i.figures = h()(
                      t.querySelectorAll(r.controllers.elements)
                    )),
                      i.figures.map(function (t) {
                        return i.defaultPreProcessor(t, i.figures, "figures");
                      });
                    var o = i.figures.map(function (t) {
                      return i.defaultProcessor(
                        t,
                        i.s.processorTitleSelector,
                        "figures",
                        r
                      );
                    });
                    return i.defaultAfterProcessor(o);
                  } catch (t) {
                    console.error("Processors - figures: " + t);
                  }
                },
                tables: function tables(t) {
                  try {
                    var r = i.config.cloneFromBody.tables;
                    (i.tables = h()(
                      t.querySelectorAll(r.controllers.elements)
                    )),
                      i.tables.map(function (t) {
                        return i.defaultPreProcessor(t, i.tables, "tables");
                      });
                    var o = i.tables.map(function (t) {
                      return i.defaultProcessor(
                        t,
                        i.s.processorTitleSelector,
                        "tables",
                        r
                      );
                    });
                    return i.defaultAfterProcessor(o);
                  } catch (t) {
                    console.error("Processors - tables: " + t);
                  }
                },
                videos: function videos(t) {
                  try {
                    var r = i.config.cloneFromBody.otherMedia;
                    (i.videos = h()(
                      t.querySelectorAll(r.controllers.elements)
                    )),
                      i.videos.map(function (t) {
                        return i.defaultPreProcessor(t, i.videos, "videos");
                      });
                    var o = i.videos.map(function (t) {
                      return i.defaultProcessor(
                        t,
                        i.s.processorTitleSelector,
                        "videos",
                        r
                      );
                    });
                    return i.defaultAfterProcessor(o);
                  } catch (t) {
                    console.error("Processors - videos: " + t);
                  }
                },
                title: function title(t) {
                  try {
                    var r = document.getElementById(i.s.bookDataScriptId);
                    if (!r)
                      return (
                        console.debug("No book data script has been sent"), null
                      );
                    try {
                      var o = JSON.parse(r.innerHTML);
                    } catch (t) {
                      return (
                        console.debug("Invalid JSON in book data script"), null
                      );
                    }
                    var a = t.querySelector(i.s.title);
                    title = null;
                    if (a)
                      if (o.bookTitle)
                        var title = o.bookTitle + ":&nbsp;" + a.innerHTML;
                      else title = a.innerHTML;
                    return title;
                  } catch (t) {
                    console.error("Processors - title: " + t);
                  }
                },
                sections: function sections(t) {
                  try {
                    return Array.prototype.slice
                      .call(t.querySelectorAll(i.s.sections))
                      .reduce(function (t, i) {
                        if (i.hash) {
                          var r = document.getElementById(
                            i.hash.replace("#", "")
                          );
                          if (r) {
                            var o = r.querySelector("h2");
                            o && ((o.sectionParent = r), t.push(o));
                          }
                        }
                        return t;
                      }, []);
                  } catch (t) {
                    console.error("Processors - sections: " + t);
                  }
                },
                decorationsPosRef: function decorationsPosRef(t) {
                  return t.querySelector(i.s.decorationsXReference);
                },
              }),
              (this.config = t),
              "object" === l()(ArticleStore.instance)
                ? ArticleStore.instance
                : ((ArticleStore.instance = this),
                  (this.article = document.querySelector(this.s.article)),
                  (this.processors = Object.keys(r).length
                    ? _objectSpread(_objectSpread({}, this.processors), r)
                    : this.processors),
                  this)
            );
          }
          return (
            g()(ArticleStore, [
              {
                key: "initiate",
                value: function initiate() {
                  return (
                    this.article &&
                      ((this.data = this.processData()),
                      this.iOS() && document.body.classList.add("iOS")),
                    this
                  );
                },
              },
              {
                key: "getXRefPoints",
                value: function getXRefPoints(t, i) {
                  var r = [],
                    o = [];
                  if (
                    (i.id &&
                      (r.push("[href='#".concat(i.id, "']")), o.push(i.id)),
                    i.parentElement.id &&
                      (r.push("[href='#".concat(i.parentElement.id, "']")),
                      o.push(i.parentElement.id)),
                    o.length > 0)
                  ) {
                    var a = [];
                    return (
                      t
                        .querySelectorAll("[data-xml-rid]")
                        .forEach(function (t) {
                          t.getAttribute("data-xml-rid")
                            .split(" ")
                            .filter(function (i) {
                              return o.includes(i) && a.push(t);
                            });
                        }),
                      0 === a.length &&
                        r.length > 0 &&
                        (a = t.querySelectorAll(r.join(","))),
                      Array.prototype.slice.call(a)
                    );
                  }
                },
              },
              {
                key: "xrefs",
                value: function xrefs(t) {
                  var i = this;
                  return t.map(function (t) {
                    return _objectSpread(
                      _objectSpread({}, t),
                      {},
                      { processedPoints: i.enhanceXRefPoints(t) }
                    );
                  });
                },
              },
              {
                key: "processorXefs",
                value: function processorXefs(t, i) {
                  var r = this;
                  return Array.prototype.slice
                    .call(i.querySelectorAll(t))
                    .map(function (o) {
                      var a = o.id;
                      if (t !== r.s.footnotes || a)
                        a = o.id || o.parentElement.id;
                      else {
                        var c = h()(o.childNodes).filter(function (t) {
                          return "" !== t.id && void 0 !== t.id;
                        });
                        c.length > 0 && ((o = c[0]), (a = c[0].id));
                      }
                      var l = o.cloneNode(!0),
                        u = o.parentNode.previousElementSibling,
                        d = [].slice.call(
                          l.querySelectorAll(".external-links a")
                        );
                      return {
                        ref: o,
                        id: a,
                        description: l.innerHTML,
                        points: r.getXRefPoints(i, o),
                        label:
                          null != u && u.classList.contains("label")
                            ? u.outerHTML
                            : void 0,
                        links: d.map(function (t) {
                          return t.outerHTML;
                        }),
                      };
                    });
                },
              },
              {
                key: "enhanceXRefPoints",
                value: function enhanceXRefPoints(t) {
                  var i,
                    r = this,
                    o = t.ref,
                    a = t.points,
                    c = t.id;
                  if (a) {
                    var l =
                      null === (i = o.parentElement.previousSibling) ||
                      void 0 === i
                        ? void 0
                        : i.textContent;
                    return a.map(function (t, i) {
                      var o = r.processedXRefText(l, t, i);
                      return {
                        href: "#".concat(
                          r.config.enhancements.bodyPrefix +
                            c +
                            (a.length > 1 ? "-" + ++i : "")
                        ),
                        pointsTo: t,
                        content: o,
                      };
                    });
                  }
                },
              },
              {
                key: "processedXRefText",
                value: function processedXRefText(t, i, r) {
                  for (
                    var o,
                      a = i.previousSibling,
                      c = "",
                      l = this.config.enhancements;
                    "A" ===
                      (null === (u = a) || void 0 === u ? void 0 : u.tagName) ||
                    (null === (h = a) || void 0 === h
                      ? void 0
                      : h.textContent.length) <= 3;

                  ) {
                    var u, h, d;
                    a =
                      null === (d = a) || void 0 === d
                        ? void 0
                        : d.previousSibling;
                  }
                  var p,
                    v,
                    g =
                      null === (o = a) || void 0 === o ? void 0 : o.textContent;
                  g ||
                    (g =
                      null ===
                        (v = a =
                          null === (p = i.parentNode) || void 0 === p
                            ? void 0
                            : p.previousSibling) || void 0 === v
                        ? void 0
                        : v.textContent);
                  if (g) {
                    var m;
                    if (
                      ("(" === g.slice(-1) && (g = g.slice(0, -1)),
                      g.length <= 8)
                    )
                      g =
                        (null === (m = a.previousSibling) || void 0 === m
                          ? void 0
                          : m.textContent) + g;
                    var y,
                      b = _createForOfIteratorHelper(
                        g
                          .replace(/^\s+|\s+$/gm, "")
                          .split(" ")
                          .reverse()
                      );
                    try {
                      for (b.s(); !(y = b.n()).done; ) {
                        var _ = y.value;
                        if (c.length + _.length >= l.citationSnippetLength)
                          break;
                        c = _ + " " + c;
                      }
                    } catch (t) {
                      b.e(t);
                    } finally {
                      b.f();
                    }
                  } else c = i.textContent;
                  var w = l.enumeration[r];
                  if (void 0 === w) {
                    var x = ~~(r / l.enumeration.length) - 1,
                      S = r % l.enumeration.length;
                    w = "".concat(l.enumeration[x]).concat(l.enumeration[S]);
                  }
                  return "".concat(w, " [...] ").concat(c);
                },
              },
              {
                key: "infoProcessor",
                value: function infoProcessor(t) {
                  if (t) {
                    var i,
                      r = t.querySelector("h4"),
                      o = "";
                    if (r) {
                      var a = t.cloneNode(!0);
                      a.removeChild(a.querySelector("h4")),
                        (o = r.innerHTML),
                        (i = a.innerHTML);
                    } else i = t.innerHTML;
                    return { title: o, content: i, ref: t };
                  }
                },
              },
              {
                key: "defaultAfterProcessor",
                value: function defaultAfterProcessor(t) {
                  var i = [];
                  return (
                    Object.keys(t).forEach(function (r) {
                      return (
                        !t[r].invalidFigure &&
                        !t[r].excludeFigure &&
                        i.push(t[r])
                      );
                    }),
                    i
                  );
                },
              },
              {
                key: "defaultPreProcessor",
                value: function defaultPreProcessor(t, i, r) {
                  t.hasAttribute("role") &&
                    (t.querySelectorAll("figure").forEach(function (t) {
                      i = i.filter(function (i) {
                        return i !== t;
                      });
                    }),
                    (this[r] = i));
                },
              },
              {
                key: "defaultProcessor",
                value: function defaultProcessor(t, i, r, o) {
                  var a,
                    c = this;
                  "videos" === r &&
                    t.querySelectorAll("video-js").forEach(function (t) {
                      return (t.id += "-core");
                    });
                  var l,
                    u = h()(t.childNodes).filter(function (t) {
                      return "FIGCAPTION" !== t.tagName && "IMG" !== t.tagName;
                    }),
                    d = h()(t.childNodes).filter(function (t) {
                      return "FIGCAPTION" === t.tagName;
                    }),
                    p = h()(t.childNodes).filter(function (t) {
                      return "IMG" === t.tagName;
                    }),
                    v = y.HTML,
                    g = !1,
                    m = !1,
                    b = !1;
                  if (t.hasAttribute("role")) {
                    var _ = t.querySelectorAll("figure");
                    (l = []),
                      _.forEach(function (t) {
                        var i;
                        l.push(
                          c.defaultProcessor(
                            t,
                            c.s.processorTitleSelector,
                            "figures"
                          )
                        ),
                          (t.querySelector("img").alt =
                            null ===
                              (i = t.querySelector(
                                c.s.processorTitleSelector
                              )) || void 0 === i
                              ? void 0
                              : i.innerHTML);
                      }),
                      (p = t.querySelectorAll("img")),
                      (u = u.filter(function (t) {
                        return !t.classList.contains("figure-wrap");
                      }));
                  }
                  var w,
                    x,
                    S = "",
                    k = "";
                  (0 === p.length
                    ? ("figures" === r && (b = !0),
                      u.forEach(function (t) {
                        S += t.outerHTML;
                      }))
                    : (p.forEach(function (t) {
                        S += t.outerHTML;
                      }),
                      u.length > 0 &&
                        ((k = '<div class="otherData">'),
                        u.forEach(function (t) {
                          k += t.outerHTML;
                        }),
                        (k += "</div>"))),
                  "" === S && (b = !0),
                  d.forEach(function (t) {
                    var i = t.cloneNode(!0);
                    i.classList.remove("sr-only"), (k += i.outerHTML);
                  }),
                  (w = i
                    ? l
                      ? (null === (a = d[0]) || void 0 === a
                          ? void 0
                          : a.querySelector(i)) || t.querySelector(i)
                      : t.parentNode.querySelector(i)
                    : null),
                  "figures" === r && p.length > 0) &&
                    (null != o &&
                      null !== (x = o.preventFor) &&
                      void 0 !== x &&
                      x.enabled &&
                      t.getAttribute(o.preventFor.attribute) ===
                        o.preventFor.values &&
                      (m = !0),
                    p.length > 0 && (v = y.IMAGE));
                  if ("tables" === r) {
                    var T = t.querySelectorAll("table");
                    (g = !0),
                      0 === T.length
                        ? (v = y.IMAGE)
                        : T.forEach(function (t) {
                            t
                              .querySelectorAll("[rowspan], [colspan]")
                              .forEach(function (t) {
                                "TD" === t.tagName && (g = !1);
                              }),
                              t.querySelectorAll("tbody tr").length <
                                c.config.smartTables.rowLimit && (g = !1);
                          });
                  }
                  return {
                    content: S,
                    description: k,
                    excludeFigure: m,
                    figureType: v,
                    id: t.id,
                    invalidFigure: b,
                    multiImages: l,
                    ref: t,
                    smartCandidate: g,
                    title: w ? w.innerHTML : "",
                  };
                },
              },
              {
                key: "processDescription",
                value: function processDescription(t) {
                  var i = t.parentNode.querySelector("figcaption"),
                    r = i ? i.innerHTML : "";
                  if (this.config.removeFigcaptionHeading) {
                    var o = null == i ? void 0 : i.cloneNode(!0),
                      a = null == o ? void 0 : o.querySelector(".heading");
                    a && o && (a.remove(), (r = o.innerHTML));
                  }
                  return r;
                },
              },
              {
                key: "processData",
                value: function processData() {
                  var t = this,
                    i = Object.keys(this.processors).reduce(function (i, r) {
                      return (i[r] = t.processors[r](t.article, i, r)), i;
                    }, {});
                  return (
                    (i.citations = this.xrefs(
                      this.processors.citations(this.article)
                    )),
                    (i.footnotes = this.xrefs(
                      this.processors.footnotes(this.article)
                    )),
                    i
                  );
                },
              },
              {
                key: "iOS",
                value: function iOS() {
                  return (
                    [
                      "iPad Simulator",
                      "iPhone Simulator",
                      "iPod Simulator",
                      "iPad",
                      "iPhone",
                      "iPod",
                    ].includes(navigator.platform) ||
                    (navigator.userAgent.includes("Mac") &&
                      "ontouchend" in document)
                  );
                },
              },
            ]),
            ArticleStore
          );
        })(),
        y = { HTML: 0, IMAGE: 1 };
    },
    function (t, i) {
      t.exports = {
        debounce: function debounce(t, i, r) {
          var o;
          return function executedFunction() {
            var a = this,
              c = arguments,
              l = function later() {
                (o = null), r || t.apply(a, c);
              },
              u = r && !o;
            clearTimeout(o), (o = setTimeout(l, i)), u && t.apply(a, c);
          };
        },
      };
    },
    function (t, i, r) {
      var o = r(1),
        a = r(2),
        c = r(49),
        l = r(5),
        u = r(4),
        h = r(0);
      function _createSuper(t) {
        var i = (function _isNativeReflectConstruct() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var r,
            o = h(t);
          if (i) {
            var a = h(this).constructor;
            r = Reflect.construct(o, arguments, a);
          } else r = o.apply(this, arguments);
          return u(this, r);
        };
      }
      var d = (function (t) {
        "use strict";
        l(MobileSticky, t);
        var i = _createSuper(MobileSticky);
        function MobileSticky(t, r) {
          var a;
          return (
            o(this, MobileSticky),
            ((a = i.call(this)).config = r),
            r.mobileSticky.enable
              ? ((a.articleView = t),
                (a.article = t.getArticle()),
                (a.s = r.classNames),
                (a.container = document.createElement("div")),
                a.container.classList.add("sticky-menu-container"),
                (a.toggleSectionMenu = a.toggleSectionMenu.bind(c(a))),
                (a.repositionMenu = a.repositionMenu.bind(c(a))),
                a)
              : u(a)
          );
        }
        return (
          a(MobileSticky, [
            {
              key: "initiate",
              value: function initiate() {
                var t = this;
                if (
                  this.config.mobileSticky.enable &&
                  ((this.collateralNav = document.querySelector(
                    '[data-core-nav="collateral"] > ul'
                  )),
                  (this.sectionNavbar = this.articleView.sectionNavbar.main),
                  this.collateralNav || this.sectionNavbar)
                ) {
                  var i = document.getElementById("mobile_sticky_template");
                  (this.main = i.content.cloneNode(!0)),
                    this.createCollateralNav(),
                    this.container.appendChild(this.main),
                    (this.main = this.container.querySelector(".sticky-menu")),
                    (this.sectionNavButton = this.main.querySelector(
                      ".sticky-menu__sections"
                    )),
                    this.config.sectionsNavbar.hideIfEmpty
                      ? (this.sectionNavButton.style.display = "none")
                      : this.articleView.subscribeAnchorClick(
                          this.sectionNavButton,
                          this.toggleSectionMenu
                        ),
                    this.articleView.subscribe("mobileOff", function () {
                      t.articleView.subtractTopOverlay(
                        t.main.getBoundingClientRect().height
                      ),
                        t.disable();
                    }),
                    this.articleView.subscribe("mobileOn", function () {
                      t.enable(),
                        t.articleView.addTopOverlay(
                          t.main.getBoundingClientRect().height
                        );
                    });
                }
              },
            },
            {
              key: "createCollateralNav",
              value: function createCollateralNav() {
                if (this.collateralNav) {
                  var t = this.collateralNav.cloneNode(!0);
                  t.classList.add("sticky-menu__nav", "list-unstyled"),
                    t.querySelectorAll("li a.active").forEach(function (t) {
                      t.classList.remove("active");
                    }),
                    (this.main.getElementById("navigationReplacer").outerHTML =
                      t.outerHTML);
                }
              },
            },
            {
              key: "subdueSectionsMenu",
              value: function subdueSectionsMenu() {
                var t =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0];
                this.sectionNavbar &&
                  (t && this.sectionNavbar.parentNode !== this.main
                    ? ((this.sectionNavbar.style.display = "block"),
                      this.sectionNavbar.classList.add("sticky-menu--subdued"),
                      (this.sectionsOriginalPos =
                        this.sectionNavbar.parentNode),
                      this.main.appendChild(this.sectionNavbar))
                    : this.sectionsOriginalPos &&
                      !1 === t &&
                      (this.sectionsOriginalPos.appendChild(this.sectionNavbar),
                      this.sectionNavbar.classList.remove(
                        this.config.sectionsNavbar.subduedClassname
                      ),
                      this.sectionNavbar.classList.remove(
                        this.config.sectionsNavbar.subduedInClassname
                      ),
                      (this.sectionsOriginalPos = null)),
                  this.sectionNavButton.classList.remove("active"));
              },
            },
            {
              key: "toggleSectionMenu",
              value: function toggleSectionMenu(t) {
                t.preventDefault(),
                  this.sectionNavbar &&
                    (this.sectionNavbar.classList.toggle(
                      this.config.sectionsNavbar.subduedInClassname
                    ),
                    this.sectionNavButton.classList.toggle("active"));
              },
            },
            {
              key: "repositionMenu",
              value: function repositionMenu(t) {
                var i = this.articleView
                  .getArticle()
                  .querySelector(
                    '#frontmatter header, header[data-extent="frontmatter"]'
                  )
                  .getBoundingClientRect().bottom;
                i <= 0
                  ? ((this.container.style.height =
                      this.main.getBoundingClientRect().height + "px"),
                    (this.main.style.position = "fixed"))
                  : ((this.container.style.height = "auto"),
                    (this.main.style.position = "relative")),
                  (this.main.style.top = Math.max(i, 0) + "0"),
                  this.articleView.articleFixedHeader.trackWindowScroll(
                    this.main,
                    this.article
                  );
              },
            },
            {
              key: "show",
              value: function show() {
                this.main.classList.remove(this.s.HIDDEN);
                var t = this.article.querySelector(
                  '#frontmatter header, header[data-extent="frontmatter"]'
                );
                this.container.appendChild(this.main),
                  t.insertAdjacentElement("afterend", this.container);
              },
            },
            {
              key: "enable",
              value: function enable() {
                this.subdueSectionsMenu(),
                  this.repositionMenu(),
                  this.articleView.subscribe("resize", this.repositionMenu),
                  this.articleView.subscribe("scroll", this.repositionMenu),
                  this.show();
              },
            },
            {
              key: "disable",
              value: function disable() {
                this.hide(),
                  this.subdueSectionsMenu(!1),
                  this.articleView.subscribe("resize", this.repositionMenu, !0),
                  this.articleView.subscribe("scroll", this.repositionMenu, !0);
              },
            },
          ]),
          MobileSticky
        );
      })(r(59));
      t.exports = d;
    },
    function (module, exports, __webpack_require__) {
      var _slicedToArray = __webpack_require__(33),
        _defineProperty = __webpack_require__(12),
        _toConsumableArray = __webpack_require__(17),
        _classCallCheck = __webpack_require__(1),
        _createClass = __webpack_require__(2),
        _assertThisInitialized = __webpack_require__(49),
        _inherits = __webpack_require__(5),
        _possibleConstructorReturn = __webpack_require__(4),
        _getPrototypeOf = __webpack_require__(0);
      function ownKeys(t, i) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          i &&
            (o = o.filter(function (i) {
              return Object.getOwnPropertyDescriptor(t, i).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function _objectSpread(t) {
        for (var i = 1; i < arguments.length; i++) {
          var r = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(r), !0).forEach(function (i) {
                _defineProperty(t, i, r[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (i) {
                Object.defineProperty(
                  t,
                  i,
                  Object.getOwnPropertyDescriptor(r, i)
                );
              });
        }
        return t;
      }
      function _createSuper(t) {
        var i = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var r,
            o = _getPrototypeOf(t);
          if (i) {
            var a = _getPrototypeOf(this).constructor;
            r = Reflect.construct(o, arguments, a);
          } else r = o.apply(this, arguments);
          return _possibleConstructorReturn(this, r);
        };
      }
      function _isNativeReflectConstruct() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      var DropdownBehavior = __webpack_require__(131),
        ExpandableBehavior = __webpack_require__(182),
        _require = __webpack_require__(66),
        BehaviorTab = _require.BehaviorTab,
        VisualComponent = __webpack_require__(59),
        FocusTrap = __webpack_require__(183),
        Pill = (function (_VisualComponent) {
          "use strict";
          _inherits(Pill, _VisualComponent);
          var _super = _createSuper(Pill);
          function Pill(t, i, r, o) {
            var a;
            _classCallCheck(this, Pill),
              ((a = _super.call(this)).collateralPrefix = "core-collateral"),
              (a.collateralTabPrefix = "tab-"),
              (a.collateralTabIds = {
                info: a.collateralPrefix + "-info",
                information: a.collateralTabPrefix + "information",
                contributors: a.collateralTabPrefix + "contributors",
                metrics: a.collateralPrefix + "-metrics",
                metricsInner: a.collateralTabPrefix + "metrics-inner",
                citations: a.collateralTabPrefix + "citations",
                fulltextOptions: a.collateralPrefix + "-fulltext-options",
                purchaseAccess: a.collateralPrefix + "-purchase-access",
                references: a.collateralPrefix + "-references",
                media: a.collateralPrefix + "-media",
                mediaFigures: a.collateralTabPrefix + "figures",
                mediaTables: a.collateralPrefix + "-tables",
                mediaOther: a.collateralTabPrefix + "other",
                more: a.collateralPrefix + "-more",
                selfCitation: a.collateralPrefix + "-self-citation",
                share: a.collateralPrefix + "-share",
              });
            var c = document.getElementsByClassName(a.collateralPrefix)[0];
            return c
              ? ((a.data = t),
                (a.config = r),
                (a.collateralPanes = r.collateral.panes),
                (a.accessDenial = !1),
                (a.navMargin = r.collateral.navMargin),
                (a.scrollOffset = 60),
                (a.minCitations = 1),
                (a.expandAllAuthorsLink = !0),
                (a.s = r.classNames),
                (a.icons = r.icons),
                (a.texts = r.texts),
                (a.tmpl = { figure: o.figureTmpl }),
                (a.articleView = i),
                (a.accessDenial = a.articleView.isAccessDenial()),
                (a.collateralTexts = document.getElementById(
                  "collateral_texts_template"
                )),
                (a.main = c),
                (a.main.style.display = "none"),
                (a.focusTrap = null),
                (a.menuPositionReference = t.decorationsPosRef),
                (a.repositionMenu = a.repositionMenu.bind(
                  _assertThisInitialized(a)
                )),
                (a.openPillOn = a.openPillOn.bind(_assertThisInitialized(a))),
                (a.closePill = a.closePill.bind(_assertThisInitialized(a))),
                (a.closeOnMiss = a.closeOnMiss.bind(_assertThisInitialized(a))),
                (a.escapeModals = []),
                a)
              : (console.debug("Pill html hasn't been found. Will not start."),
                _possibleConstructorReturn(a));
          }
          return (
            _createClass(Pill, [
              {
                key: "prepareContent",
                value: function prepareContent() {
                  var t = this.main.querySelector(
                    "#" + this.collateralTabIds.fulltextOptions
                  );
                  if (t)
                    if (this.config.isInEditor) {
                      t
                        .querySelectorAll(".section--wrapper")
                        .forEach(function (t) {
                          return (t.tabIndex = 0);
                        }),
                        (t.querySelector("header h2").childNodes[1].nodeValue =
                          "Get Access / View Options");
                    } else {
                      if (this.accessDenial)
                        (this.collateralTabIds.fulltextOptions =
                          this.collateralPrefix + "-purchase-access"),
                          (t.id = this.collateralTabIds.fulltextOptions),
                          (t.querySelector("header i").className =
                            this.icons.ICON_PURCHASE_ACCESS),
                          (t.querySelector(
                            "header h2"
                          ).childNodes[1].nodeValue = t.querySelector(
                            ".section--wrapper h3"
                          ).innerText),
                          t
                            .querySelector('[tabindex="0"]')
                            .removeAttribute("tabindex");
                      var i = t.querySelector('[tabindex="-1"]');
                      null == i || i.remove();
                    }
                  var r = document.getElementsByClassName(
                    this.collateralPrefix
                  )[0];
                  this.collateralPanes.references &&
                    r.insertBefore(
                      this.createTabPanel(
                        this.collateralTabIds.references,
                        this.icons.ICON_REFERENCES,
                        [this.collateralTexts.getAttribute("data-references")]
                      ),
                      this.main.querySelector("#" + this.collateralTabIds.media)
                    ),
                    this.collateralPanes.more &&
                      r.prepend(
                        this.createTabPanel(
                          this.collateralTabIds.more,
                          this.icons.ICON_MORE,
                          [this.collateralTexts.getAttribute("data-more")]
                        )
                      ),
                    (this.panes = r.childNodes);
                },
              },
              {
                key: "buildInfoTab",
                value: function buildInfoTab(t) {
                  var i = this.main.querySelector(
                    "#" + this.collateralTabIds.information
                  );
                  if (!this.checkIfEmpty(i)) {
                    (t.notAvailable = !1), this.requestPermissionsLink(i);
                    var r = i.querySelector(".core-review-history a");
                    r && this.peerReviewHistoryLink(r);
                  }
                },
              },
              {
                key: "buildContributorsTab",
                value: function buildContributorsTab(t) {
                  var i = this.main.querySelector(
                    "#" + this.collateralTabIds.contributors
                  );
                  if (!this.checkIfEmpty(i)) {
                    t.notAvailable = !1;
                    var r = i.querySelector(".core-authors > h4");
                    void 0 !== this.config.collateral.affiliationsTitle &&
                      ("" === this.config.collateral.affiliationsTitle
                        ? (r.innerHTML = "<span></span>")
                        : (r.innerHTML =
                            this.config.collateral.affiliationsTitle)),
                      this.makeAuthorsList(i);
                  }
                },
              },
              {
                key: "buildMetricsTab",
                value: function buildMetricsTab(t) {
                  var i = this.main.querySelector(
                    "#" + this.collateralTabIds.metricsInner
                  );
                  (i ? this.checkIfEmpty(i) : this.checkIfEmpty(t)) ||
                    ((t.notAvailable = !1), i && this.removeEmptyDropzones(i));
                },
              },
              {
                key: "buildCitationsTab",
                value: function buildCitationsTab(t) {
                  var i = this,
                    r = this.main.querySelector(
                      "#" + this.collateralTabIds.citations
                    );
                  (r ? this.checkIfEmpty(r) : this.checkIfEmpty(t)) ||
                    ((t.notAvailable = !1),
                    this.main.addEventListener(
                      "updateCitationsCounter",
                      function (t) {
                        var o = document.querySelector(".citations-count");
                        r &&
                          null === o &&
                          ((i.citations = r.querySelectorAll(
                            i.config.collateral.citedBySelector
                          )),
                          i.citations.length &&
                            i.manageCitationCount(i.citations, i.minCitations),
                          i.removeEmptyDropzones(r));
                      }
                    ));
                },
              },
              {
                key: "buildFulltextAccessTab",
                value: function buildFulltextAccessTab(t) {
                  this.checkIfEmpty(t.querySelector(".section--wrapper")) ||
                    (t.notAvailable = !1);
                },
              },
              {
                key: "buildReferencesTab",
                value: function buildReferencesTab(t) {
                  var i = this;
                  this.populatePaneData(this.data.citations, "references", t);
                  try {
                    t.querySelectorAll(".section--wrapper > div").forEach(
                      function (t) {
                        var r = i.articleView.source.data.citations.filter(
                          function (r) {
                            return (
                              r.id ===
                              t.id.slice(i.config.enhancements.prefix.length)
                            );
                          }
                        );
                        0 !== r.length &&
                          i.articleView.linkBackRef(
                            r[0],
                            "citation",
                            i.config.enhancements.prefix,
                            t,
                            i.config.enhancements.suffix
                          );
                      }
                    );
                    try {
                      new DropdownBehavior(
                        "#" + this.collateralTabIds.references,
                        '[aria-haspopup="true"]',
                        !1,
                        function (t) {
                          return t
                            .closest(".citation")
                            .classList.toggle("expanded");
                        }
                      );
                    } catch (t) {
                      console.error(
                        "Initiate dropdown behavior for citations in collateral",
                        t
                      );
                    }
                  } catch (t) {
                    console.error("Link back citations:", t);
                  }
                },
              },
              {
                key: "buildFiguresTab",
                value: function buildFiguresTab(t) {
                  this.populatePaneData(this.data.figures, "figures", t);
                },
              },
              {
                key: "buildOtherTab",
                value: function buildOtherTab(t) {
                  this.populatePaneData(this.data.videos, "otherMedia", t);
                },
              },
              {
                key: "buildTablesTab",
                value: function buildTablesTab(t) {
                  this.populatePaneData(this.data.tables, "tables", t);
                },
              },
              {
                key: "buildShareTab",
                value: function buildShareTab() {
                  var t = this.main.querySelector(
                    "#" + this.collateralTabIds.share
                  );
                  this.checkIfEmpty(t) || this.manageShareLink();
                },
              },
              {
                key: "buildContent",
                value: function buildContent() {
                  try {
                    if (this.collateralPanes.info) {
                      var infoTab = this.main.querySelector(
                        "#" + this.collateralTabIds.info
                      );
                      this.config.isInEditor || (infoTab.notAvailable = !0),
                        this.buildInfoTab(infoTab),
                        this.buildContributorsTab(infoTab);
                    }
                  } catch (t) {
                    console.error("Build info tab:", t);
                  }
                  try {
                    if (this.collateralPanes.metrics) {
                      var metricsTab = this.main.querySelector(
                        "#" + this.collateralTabIds.metrics
                      );
                      this.config.isInEditor || (metricsTab.notAvailable = !0),
                        this.buildMetricsTab(metricsTab),
                        this.buildCitationsTab(metricsTab);
                    }
                  } catch (t) {
                    console.error("Build metrics tab:", t);
                  }
                  try {
                    if (this.collateralPanes.fulltextOptions) {
                      var fulltextOptionsTab = this.main.querySelector(
                        "#" + this.collateralTabIds.fulltextOptions
                      );
                      this.config.isInEditor ||
                        (fulltextOptionsTab.notAvailable = !0),
                        this.buildFulltextAccessTab(fulltextOptionsTab);
                    } else {
                      var paneId = "#" + this.collateralTabIds.fulltextOptions,
                        pane = this.main.querySelector(paneId);
                      this.config.isInEditor ||
                        this.accessDenial ||
                        null == pane ||
                        pane.remove();
                    }
                  } catch (t) {
                    console.error("Build view options tab:", t);
                  }
                  if (!this.config.isInEditor) {
                    try {
                      if (this.collateralPanes.references) {
                        var referencesTab = eval(
                          this.config.cloneFromBody.references.controllers
                            .parentTab
                        );
                        referencesTab.setAttribute(
                          "aria-labelledby",
                          "ref-title"
                        ),
                          (referencesTab.notAvailable = !0),
                          this.buildReferencesTab(referencesTab);
                      }
                    } catch (t) {
                      console.error("Build references tab:", t);
                    }
                    try {
                      var mediaTab = eval(
                        this.config.cloneFromBody.figures.controllers.parentTab
                      );
                      (mediaTab.notAvailable = !0),
                        this.collateralPanes.mediaFigures &&
                          this.buildFiguresTab(mediaTab),
                        this.collateralPanes.mediaOther &&
                          this.buildOtherTab(mediaTab);
                    } catch (t) {
                      console.error("Build media tab:", t);
                    }
                    try {
                      if (this.collateralPanes.mediaTables) {
                        var tablesTab = eval(
                          this.config.cloneFromBody.tables.controllers.parentTab
                        );
                        (tablesTab.notAvailable = !0),
                          this.buildTablesTab(tablesTab);
                      }
                    } catch (t) {
                      console.error("Build tables tab:", t);
                    }
                    try {
                      this.collateralPanes.share && this.buildShareTab();
                    } catch (t) {
                      console.error("Build share tab:", t);
                    }
                  }
                },
              },
              {
                key: "removeEmptyDropzones",
                value: function removeEmptyDropzones(t) {
                  var i = t.childNodes;
                  i.length > 0 &&
                    !this.config.isInEditor &&
                    _toConsumableArray(i).map(function (t) {
                      0 === t.childNodes.length && t.remove();
                    });
                },
              },
              {
                key: "initiate",
                value: function initiate() {
                  var t,
                    i = this;
                  if (this.main) {
                    this.prepareContent(),
                      this.buildContent(),
                      _toConsumableArray(this.panes).map(function (t) {
                        try {
                          new BehaviorTab(t, i.config.tabs.collateral);
                        } catch (i) {
                          console.error("Collateral tabs lists:", t, i);
                        }
                      }),
                      this.config.isInEditor ||
                        ((this.focusTrap = new FocusTrap(this.config)),
                        document.body.appendChild(this.main)),
                      this.main.dispatchEvent(
                        new Event("updateCitationsCounter")
                      ),
                      document.body.addEventListener("keydown", function (t) {
                        27 === t.keyCode &&
                          (i.escapeModals && i.escapeModals.length
                            ? i.escapeModals.pop()()
                            : i.main.classList.contains("pill--open") &&
                              i.closePill(t));
                      }),
                      this.articleView.subscribeAnchorClick(
                        "a",
                        this.openPillOn
                      ),
                      this.buildMenu(),
                      this.config.alwaysShowPill ||
                        (this.articleView.subscribe("mobileOff", function () {
                          i.main && i.showMenu();
                        }),
                        this.articleView.subscribe("mobileOn", function () {
                          i.main && i.hideMenu();
                        })),
                      this.articleView.subscribe(
                        "articleInnerTargetOpen",
                        function (t) {
                          i.isInDOM() &&
                            !i.config.isInEditor &&
                            i.closePill(t, { returnFocus: !1 });
                        }
                      ),
                      null !== (t = document.body.querySelector("main")) &&
                        void 0 !== t &&
                        t.classList.contains(this.s.JOURNAL_BRANDING) &&
                        this.main &&
                        this.main.classList.add(this.s.JOURNAL_BRANDING);
                    try {
                      this.config.enhancements.addDataIds && this.addDataIds();
                    } catch (t) {
                      console.error("Add data-id to elements:", t);
                    }
                    this.articleView.initiateMathJax("core-collateral");
                  } else console.debug("Pill constructor didn't run.");
                },
              },
              {
                key: "createTabPanel",
                value: function createTabPanel(t, i, r, o) {
                  var a = document.createElement("i");
                  a.classList.add(i);
                  var c = document.createElement("h2");
                  c.setAttribute("id", "ref-title"),
                    c.append(a),
                    c.append(r[0]);
                  var l = document.createElement("h3");
                  l.append(r[1] || r[0]);
                  var u = document.createElement("header");
                  u.append(c);
                  var h = document.createElement("div");
                  return (
                    h.setAttribute("id", t),
                    h.setAttribute("role", "tabpanel"),
                    h.append(u, l),
                    o && l.insertAdjacentHTML("afterend", o),
                    h
                  );
                },
              },
              {
                key: "closeOnMiss",
                value: function closeOnMiss(t) {
                  this.main.contains(t.target) ||
                    (this.menu && this.menu.contains(t.target)) ||
                    (this.closePill(t),
                    document.body.removeEventListener(
                      "click",
                      this.closeOnMiss
                    ));
                },
              },
              {
                key: "repositionMenu",
                value: function repositionMenu(t) {
                  var i = this,
                    r =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    o = this.pillIsOn(),
                    a = o ? this.main : this.menuPositionReference,
                    c = a.getBoundingClientRect(),
                    l = c.right,
                    u = c.left,
                    h = c.width,
                    d = this.menuPositionReference.getBoundingClientRect(),
                    p = d.bottom,
                    v = o ? u - this.navMargin.left : l + this.navMargin.left,
                    g = this.menu.getBoundingClientRect(),
                    m = this.articleView.getArticle().getBoundingClientRect();
                  (t && "resize" === t.type) ||
                    ((this.menu.style.transitionDuration = "0.35s"),
                    this.menu.addEventListener(
                      "transitionend",
                      function () {
                        i.menu.style.transitionDuration = "0s";
                      },
                      { once: !0 }
                    ));
                  var y =
                    Math.max(p, 0) +
                    (this.articleView.getTopOverlayHeight() ||
                      this.navMargin.top);
                  if (
                    ((y = Math.min(m.bottom - (g.height + 16), y)),
                    (this.menu.style.top = y + "px"),
                    !0 === r)
                  )
                    this.menu.style.right = h + this.navMargin.right + "px";
                  else {
                    var b = window.innerWidth - v;
                    this.menu.style.right = (b < 16 ? 16 : b) + "px";
                  }
                },
              },
              {
                key: "pillIsOn",
                value: function pillIsOn() {
                  return (
                    !!this.main && this.main.classList.contains("pill--open")
                  );
                },
              },
              {
                key: "makeAuthorsList",
                value: function makeAuthorsList(t) {
                  try {
                    new ExpandableBehavior({
                      classes: {
                        CHEVRON: this.icons.ICON_ACCORDION_ARROW,
                        COLLAPSED_ICON: this.icons.ICON_ACCORDION_COLLAPSED,
                        EXPANDED_ICON: this.icons.ICON_ACCORDION_EXPANDED,
                      },
                      selectors: _objectSpread(
                        _objectSpread({}, this.config.contributors.selectors),
                        {},
                        {
                          LIST: t.querySelectorAll(
                            this.config.contributors.selectors.LIST
                          ),
                          TOGGLE_ALL_WRAPPER: t.querySelector(
                            this.config.contributors.selectors
                              .TOGGLE_ALL_WRAPPER
                          ),
                        }
                      ),
                      settings: _objectSpread(
                        {},
                        this.config.contributors.settings
                      ),
                    });
                  } catch (t) {
                    console.error(
                      "Initiate contributors expandable behavior",
                      t
                    );
                  }
                },
              },
              {
                key: "peerReviewHistoryLink",
                value: function peerReviewHistoryLink(t) {
                  (t.innerHTML =
                    '<i class="icon-PDF"></i><span>Download</span>'),
                    (t.classList = [this.s.BTN, this.s.MT3].join(" "));
                },
              },
              {
                key: "requestPermissionsLink",
                value: function requestPermissionsLink(parent) {
                  var config = this.config.collateral.permissions,
                    section = parent.querySelector(config.identifier);
                  if (section) {
                    var link = section.querySelector(config.linkSelector),
                      removeCondition = eval(config.removeCondition);
                    removeCondition
                      ? section.remove()
                      : link &&
                        ((link.innerHTML = ""),
                        link.append(
                          this.collateralTexts.content.cloneNode(!0)
                        ));
                  }
                },
              },
              {
                key: "setMenuHTMLAnchorAttributes",
                value: function setMenuHTMLAnchorAttributes(t, i, r) {
                  t.setAttribute("href", "#" + i),
                    t.setAttribute("title", r.textContent || r.innerText),
                    this.config.collateral.tooltips &&
                      (t.setAttribute("data-toggle", "tooltip"),
                      t.setAttribute("data-placement", "left"));
                },
              },
              {
                key: "getMenuList",
                value: function getMenuList(t, i) {
                  var r =
                      i.getAttribute("id") || i.getAttribute("aria-labelledby"),
                    o = i.querySelector("header"),
                    a = document.createElement("a");
                  this.setMenuHTMLAnchorAttributes(a, r, o),
                    a.appendChild(o.querySelector("i").cloneNode(!0)),
                    i.notAvailable &&
                      (a.classList.add("inactive"),
                      a.setAttribute("aria-disabled", "true"));
                  var c = document.createElement("li");
                  c.appendChild(a), t.appendChild(c);
                },
              },
              {
                key: "buildMenuHTML",
                value: function buildMenuHTML() {
                  var t = this;
                  (this.tabPanels =
                    this.main.querySelectorAll('[role="tabpanel"]')),
                    _toConsumableArray(this.tabPanels).map(function (t) {
                      t.setAttribute("tabindex", "-1");
                    });
                  var i = document.createElement("ul");
                  _toConsumableArray(this.panes).map(function (r) {
                    var o, a;
                    t.getMenuList(i, r);
                    var c = document.createElement("button");
                    c.setAttribute("data-close", "collateral"),
                      c.setAttribute("aria-label", "close"),
                      (c.innerHTML = '<i class="icon-close" />'),
                      c.addEventListener("click", t.closePill),
                      r.querySelector("header").appendChild(c),
                      null === (o = r.querySelector('[role="tablist"]')) ||
                        void 0 === o ||
                        null ===
                          (a = o.querySelector("button:not(.inactive)")) ||
                        void 0 === a ||
                        a.click();
                  }, {});
                  var r = document.createElement("nav");
                  r.setAttribute("data-core-nav", "collateral"),
                    r.setAttribute("title", "Collateral Navigation"),
                    r.appendChild(i),
                    (this.menu = r);
                },
              },
              {
                key: "buildMenu",
                value: function buildMenu() {
                  var t = this;
                  this.menu ||
                    (this.buildMenuHTML(),
                    document.body.appendChild(this.menu),
                    this.articleView.subscribe("resize", function () {
                      t.repositionMenu(null, t.pillIsOn());
                    }),
                    this.articleView.subscribe("scroll", function () {
                      t.repositionMenu(null, t.pillIsOn());
                    }),
                    this.repositionMenu(null, this.pillIsOn()),
                    this.articleView.subscribe("mobileOff", function () {
                      t.repositionMenu(null, t.pillIsOn());
                    }),
                    this.articleView.subscribe("mobileOn", function () {
                      t.repositionMenu(null, t.pillIsOn());
                    }),
                    window.location.hash &&
                      this.openPillOn(window.location.hash)),
                    this.reactivateMenu();
                },
              },
              {
                key: "showMenu",
                value: function showMenu() {
                  this.menu && this.menu.classList.remove(this.s.HIDDEN),
                    this.reactivateMenu();
                },
              },
              {
                key: "hideMenu",
                value: function hideMenu() {
                  this.menu && this.menu.classList.add(this.s.HIDDEN),
                    this.reactivateMenu();
                },
              },
              {
                key: "openPillOn",
                value: function openPillOn(t) {
                  var i;
                  if ("string" != typeof t) {
                    if (!t || !t.currentTarget || !t.currentTarget.hash) return;
                    if (
                      !this.main.contains(t.currentTarget) &&
                      t.currentTarget.classList.contains("active") &&
                      this.pillIsOn()
                    )
                      return (
                        t.preventDefault && t.preventDefault(),
                        void this.closePill(t)
                      );
                  }
                  var r = "string" == typeof t ? t : t.currentTarget.hash;
                  r = "#" === r.substring(0, 1) ? r.substring(1) : r;
                  var o = this.main.querySelector("[id='" + r + "']"),
                    a = o ? o.closest('[role="tabpanel"]') : null;
                  if (o && a) {
                    if (
                      (t.preventDefault && t.preventDefault(),
                      this.config.collateral.tooltips)
                    )
                      try {
                        $('[data-toggle="tooltip"]').tooltip("hide");
                      } catch (t) {
                        console.error("Hide tooltips", t);
                      }
                    this.openPill();
                    var c = this.main.querySelector(
                      '[aria-controls="' + a.id + '"]'
                    );
                    c && (c.click(), (a = c.closest('[role="tabpanel"]'))),
                      this.focusOnContributor(o),
                      o.classList.add("focused"),
                      document.body.addEventListener(
                        "click",
                        function () {
                          o.classList.remove("focused");
                        },
                        { once: !0 }
                      ),
                      document.body.addEventListener(
                        "click",
                        function () {
                          o.classList.remove("focused");
                        },
                        { once: !0 }
                      ),
                      this.config.isInEditor ||
                        document.body.addEventListener(
                          "click",
                          this.closeOnMiss
                        ),
                      this.activateMenuFor(a),
                      o !== a &&
                        o.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                          inline: "center",
                        }),
                      o.focus(),
                      this.config.isInEditor ||
                        null === (i = this.focusTrap) ||
                        void 0 === i ||
                        i.init(a || o, this.main.parentElement, t.target, o);
                  }
                },
              },
              {
                key: "openPill",
                value: function openPill() {
                  (this.main.style.display = "block"),
                    this.main.getBoundingClientRect(),
                    this.main.classList.add("pill--open"),
                    document.body.classList.add("pill-lock-screen"),
                    this.menu && this.repositionMenu(null, !0);
                },
              },
              {
                key: "closePill",
                value: function closePill(t, i) {
                  var r,
                    o = this;
                  t && t.preventDefault && t.preventDefault(),
                    this.articleView
                      .getArticle()
                      .classList.contains("references-pop-up--shown") ||
                      this.main.addEventListener(
                        "transitionend",
                        function () {
                          o.main.style.display = "none";
                        },
                        { once: !0 }
                      ),
                    this.main.classList.remove("pill--open"),
                    document.body.removeEventListener(
                      "click",
                      this.closeOnMiss
                    ),
                    document.body.classList.add(
                      "pill-lock-screen--transitioning"
                    ),
                    clearTimeout(this.closingTimeout),
                    (this.closingTimeout = setTimeout(function () {
                      document.body.classList.remove("pill-lock-screen"),
                        document.body.classList.remove(
                          "pill-lock-screen--transitioning"
                        );
                    }, 400)),
                    null === (r = this.focusTrap) ||
                      void 0 === r ||
                      r.deactivate(i),
                    this.menu && this.repositionMenu(),
                    this.activateMenuFor();
                },
              },
              {
                key: "reactivateMenu",
                value: function reactivateMenu() {
                  this.lastTargetTriggers &&
                    this.lastTargetTriggers.length &&
                    this.activateMenuFor(
                      this.main.querySelector(this.lastTargetTriggers[0].hash)
                    );
                },
              },
              {
                key: "activateMenuFor",
                value: function activateMenuFor() {
                  var t = this,
                    i =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    r = [];
                  this.lastTargetTriggers &&
                    this.lastTargetTriggers.forEach(function (i) {
                      i.classList.remove("active"),
                        t.main
                          .querySelector(i.getAttribute("href"))
                          .setAttribute("tabindex", "-1");
                    }),
                    i &&
                      ((r = Array.prototype.slice.call(
                        document.body.querySelectorAll(
                          "[href='#".concat(i.id, "']")
                        )
                      )).forEach(function (t) {
                        return t.classList.add("active");
                      }),
                      i.setAttribute("tabindex", "0")),
                    (this.lastTargetTriggers = r);
                },
              },
              {
                key: "manageCitationCount",
                value: function manageCitationCount(t, i) {
                  var r,
                    o,
                    a = this.main.querySelector(
                      '[aria-controls="' +
                        this.collateralTabIds.citations +
                        '"]'
                    ),
                    c =
                      (null === (r = t[0]) ||
                      void 0 === r ||
                      null === (o = r.parentNode.dataset) ||
                      void 0 === o
                        ? void 0
                        : o.total) || t.length;
                  if (c >= i && a) {
                    var l = document.createElement("span");
                    l.classList.add("citations-count"),
                      (l.innerHTML = c),
                      a.appendChild(l);
                  }
                },
              },
              {
                key: "copyShareLink",
                value: function copyShareLink(t, i) {
                  var r = this.main
                    .querySelector(i.selectors.wrapper)
                    .querySelector(i.selectors.status);
                  navigator.clipboard.writeText(t).then(
                    function () {
                      r.classList.add("success"),
                        setTimeout(function () {
                          r.classList.remove("success");
                        }, i.delay);
                    },
                    function () {
                      r.classList.add("failed"),
                        setTimeout(function () {
                          r.classList.remove("failed");
                        }, i.delay);
                    }
                  );
                },
              },
              {
                key: "manageShareLink",
                value: function manageShareLink() {
                  var t = this.config.collateral.share,
                    i = this.main.querySelector(t.selectors.wrapper);
                  if (i) {
                    var r = i.querySelector(t.selectors.source),
                      o = i.querySelector(t.selectors.action),
                      a = window.location.origin + window.location.pathname;
                    r.href = r.innerHTML = a;
                    var c = this;
                    o.addEventListener("click", function (i) {
                      i.preventDefault(), c.copyShareLink(a, t);
                    });
                  }
                },
              },
              {
                key: "createLink",
                value: function createLink(t, i, r, o) {
                  var a =
                      !(arguments.length > 4 && void 0 !== arguments[4]) ||
                      arguments[4],
                    c = document.createElement("a");
                  if (
                    (t && c.setAttribute("href", "#" + t),
                    i && c.setAttribute("class", i),
                    r)
                  ) {
                    c.innerHTML = "<span>" + o + "</span>";
                    var l = document.createElement("i");
                    l.classList.add(r), a ? c.prepend(l) : c.append(l);
                  } else c.innerHTML = o;
                  return c;
                },
              },
              {
                key: "openInViewerLink",
                value: function openInViewerLink(t, i) {
                  var r =
                      "string" == typeof i.classes
                        ? [
                            i.classes,
                            this.config.figureViewer.viewerTrigger,
                          ].join(" ")
                        : []
                            .concat(_toConsumableArray(i.classes), [
                              this.config.figureViewer.viewerTrigger,
                            ])
                            .join(" "),
                    o = this.createLink(t, r, i.icon, i.text, i.prependIcon),
                    a = this.articleView;
                  return (
                    o.addEventListener("click", function (t) {
                      t.stopPropagation(), a.viewer.open(t);
                    }),
                    o
                  );
                },
              },
              {
                key: "goToOriginalLink",
                value: function goToOriginalLink(t, i) {
                  return this.createLink(
                    t,
                    [i.classes, "pill__to-original"].join(" "),
                    i.icon,
                    i.text,
                    i.prependIcon
                  );
                },
              },
              {
                key: "returnItemWrapper",
                value: function returnItemWrapper(t, i, r, o, a, c) {
                  var l = document.createElement("div");
                  if ((t && (l.innerHTML = t), i)) {
                    var u = l.querySelector(".external-links");
                    c
                      ? (u = l)
                      : u ||
                        (u = document.createElement("div")).classList.add(
                          "external-links"
                        ),
                      r.inViewer.enable &&
                        u.prepend(this.openInViewerLink(i, r.inViewer)),
                      r.goTo.enable &&
                        u.prepend(this.goToOriginalLink(i, r.goTo)),
                      !c && l.appendChild(u),
                      (l.id = o + i),
                      (l.classList = a);
                  }
                  return l;
                },
              },
              {
                key: "returnSectionWrapper",
                value: function returnSectionWrapper(t) {
                  var i = document.createElement("div");
                  return (
                    i.classList.add("section--wrapper"),
                    t && (i.innerHTML = t),
                    i
                  );
                },
              },
              {
                key: "populatePaneData",
                value: function populatePaneData(
                  figures,
                  figureType,
                  parentTab
                ) {
                  var elementsTab =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : void 0,
                    idPrefix =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : this.config.enhancements.prefix,
                    dataConfig = this.config.cloneFromBody[figureType];
                  elementsTab =
                    elementsTab || eval(dataConfig.controllers.elementsTab);
                  var tabController = eval(
                    dataConfig.controllers.tabController
                  );
                  if (figures && figures.length) {
                    var _dataConfig$links$goT,
                      _dataConfig$links$inV,
                      _dataConfig$links$ope,
                      panelData = this.stringToHTML(
                        this.tmpl.figure(
                          _objectSpread(
                            {
                              figures: figures,
                              links: _objectSpread(
                                _objectSpread({}, dataConfig.links),
                                {},
                                {
                                  goTo: _objectSpread(
                                    _objectSpread(
                                      {
                                        enable: !0,
                                        classes: "",
                                        icon: this.icons.ICON_RETURN,
                                        prependIcon: !0,
                                      },
                                      dataConfig.links.goTo
                                    ),
                                    {},
                                    {
                                      text:
                                        this.collateralTexts.getAttribute(
                                          null ===
                                            (_dataConfig$links$goT =
                                              dataConfig.links.goTo) ||
                                            void 0 === _dataConfig$links$goT
                                            ? void 0
                                            : _dataConfig$links$goT.text
                                        ) ||
                                        this.collateralTexts.getAttribute(
                                          "data-original"
                                        ),
                                    }
                                  ),
                                  inViewer: _objectSpread(
                                    _objectSpread(
                                      {
                                        enable: !0,
                                        classes: "",
                                        icon: this.icons.ICON_VIEWER,
                                        prependIcon: !1,
                                      },
                                      dataConfig.links.inViewer
                                    ),
                                    {},
                                    {
                                      text:
                                        this.collateralTexts.getAttribute(
                                          null ===
                                            (_dataConfig$links$inV =
                                              dataConfig.links.inViewer) ||
                                            void 0 === _dataConfig$links$inV
                                            ? void 0
                                            : _dataConfig$links$inV.text
                                        ) ||
                                        this.collateralTexts.getAttribute(
                                          "data-inViewer"
                                        ),
                                    }
                                  ),
                                  openAll: _objectSpread(
                                    _objectSpread(
                                      {
                                        enable:
                                          this.config.figureViewer
                                            .hasOpenAllInViewer,
                                        classes: [
                                          eval(
                                            this.config.figureViewer
                                              .openAllInViewerClassList
                                          ).join(" "),
                                          this.config.figureViewer
                                            .viewerTrigger,
                                        ].join(" "),
                                        href: "#" + figureType,
                                        icon: this.icons.ICON_ALL_IN_VIEWER,
                                        prependIcon: !1,
                                      },
                                      dataConfig.links.openAll
                                    ),
                                    {},
                                    {
                                      text:
                                        this.collateralTexts.getAttribute(
                                          null ===
                                            (_dataConfig$links$ope =
                                              dataConfig.links.openAll) ||
                                            void 0 === _dataConfig$links$ope
                                            ? void 0
                                            : _dataConfig$links$ope.text
                                        ) ||
                                        this.collateralTexts.getAttribute(
                                          "data-allInViewer"
                                        ),
                                    }
                                  ),
                                }
                              ),
                              addWrapper: !1,
                              idPrefix: idPrefix,
                              openInViewerFromFigure: !1,
                              renderFigure: !0,
                              renderFigureContent: !0,
                              renderFigureDescription: !0,
                              renderFigureLabel: !0,
                              renderTitle: !1,
                              type: void 0,
                            },
                            dataConfig.renderingSettings
                          )
                        )
                      );
                    (elementsTab.notAvailable = !1),
                      "string" == typeof panelData
                        ? (elementsTab.innerHTML += panelData)
                        : elementsTab.appendChild(panelData),
                      tabController &&
                        (tabController.classList.remove("inactive"),
                        tabController.removeAttribute("aria-disabled")),
                      parentTab && (parentTab.notAvailable = !1);
                  } else
                    (elementsTab.notAvailable = !0),
                      tabController &&
                        (tabController.classList.add("inactive"),
                        tabController.setAttribute("aria-disabled", "true"));
                },
              },
              {
                key: "addDataIds",
                value: function addDataIds() {
                  var t = this;
                  this.dataIds = this.config.enhancements.dataIds;
                  for (
                    var i = function _loop() {
                        var i = _slicedToArray(o[r], 2),
                          a = i[0],
                          c = i[1];
                        document.body
                          .querySelectorAll('[aria-controls="'.concat(c, '"]'))
                          .forEach(function (i) {
                            return i.setAttribute("data-id", t.dataIds[a]);
                          }),
                          document.body
                            .querySelectorAll('[href="#'.concat(c, '"]'))
                            .forEach(function (i) {
                              return i.setAttribute("data-id", t.dataIds[a]);
                            });
                      },
                      r = 0,
                      o = Object.entries(this.collateralTabIds);
                    r < o.length;
                    r++
                  )
                    i();
                },
              },
              {
                key: "checkIfEmpty",
                value: function checkIfEmpty(t) {
                  var i = _toConsumableArray(t.childNodes).filter(function (t) {
                    var i = t.tagName ? t.tagName : t.nodeName;
                    return "H3" !== i && "#comment" !== i;
                  });
                  return (t.notAvailable = 0 === i.length), 0 === i.length;
                },
              },
              {
                key: "focusOnContributor",
                value: function focusOnContributor(t) {
                  if ("author" === t.getAttribute("property")) {
                    var i,
                      r = this.config.contributors;
                    if (r.expandOnFocus)
                      null ===
                        (i = t.querySelector(
                          r.selectors.TRIGGER + '[aria-expanded="false"]'
                        )) ||
                        void 0 === i ||
                        i.click();
                  }
                },
              },
            ]),
            Pill
          );
        })(VisualComponent);
      module.exports = Pill;
    },
    function (t, i, r) {
      var o = r(12),
        a = r(1),
        c = r(2);
      function ownKeys(t, i) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          i &&
            (o = o.filter(function (i) {
              return Object.getOwnPropertyDescriptor(t, i).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function _objectSpread(t) {
        for (var i = 1; i < arguments.length; i++) {
          var r = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(r), !0).forEach(function (i) {
                o(t, i, r[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (i) {
                Object.defineProperty(
                  t,
                  i,
                  Object.getOwnPropertyDescriptor(r, i)
                );
              });
        }
        return t;
      }
      var l = (function () {
        "use strict";
        function ExpandableBehavior(t) {
          var i = this;
          a(this, ExpandableBehavior),
            (this.classes = _objectSpread(
              {
                CHEVRON: "icon-arrow_up",
                DISABLED: "inactive",
                EXPANDED_ICON: void 0,
                COLLAPSED_ICON: void 0,
              },
              t.classes
            )),
            (this.selectors = _objectSpread(
              {
                CONTENT: void 0,
                LIST: [],
                TRIGGER: void 0,
                TOGGLE_ALL: ".toggle-all",
                TOGGLE_ALL_WRAPPER: void 0,
                TOGGLE_TEMPLATE: "collapsible_authors_template",
              },
              t.selectors
            )),
            (this.settings = _objectSpread(
              {
                TOGGLE_ALL_POSITION: "append",
                WITH_CHEVRON: !0,
                WITH_TOGGLE_ALL: !0,
                FORCE_HYDRATE_TRIGGER: !1,
              },
              t.settings
            ));
          var r = [];
          this.selectors.LIST.forEach(function (t) {
            var o = i._hydrateContent(t);
            if (o) {
              if (
                (t.setAttribute("data-expandable", "item"),
                !o.hasChildNodes() || 0 === o.children.length)
              )
                return void (
                  i.settings.FORCE_HYDRATE_TRIGGER && i._hydrateTrigger(t, !0)
                );
              i._hydrateTrigger(t),
                t
                  .querySelector(i.selectors.TRIGGER)
                  .classList.contains(i.classes.DISABLED) || r.push(t);
            }
          }),
            (this.selectors.LIST = r),
            this.settings.WITH_TOGGLE_ALL && this._toggleAll();
        }
        return (
          c(ExpandableBehavior, [
            {
              key: "_constructArrow",
              value: function _constructArrow() {
                var t = document.createElement("i");
                return (
                  t.classList.add(this.classes.CHEVRON),
                  t.setAttribute("aria-hidden", "true"),
                  t
                );
              },
            },
            {
              key: "_hydrateContent",
              value: function _hydrateContent(t) {
                var i = t.querySelector(this.selectors.CONTENT);
                return (
                  i &&
                    (jQuery
                      ? jQuery(i).hide()
                      : i.setAttribute("tabindex", "-1"),
                    i.setAttribute("role", "region"),
                    i.setAttribute("id", t.id + "_content")),
                  i
                );
              },
            },
            {
              key: "_hydrateTrigger",
              value: function _hydrateTrigger(t, i) {
                var r = this,
                  o = t.querySelector(this.selectors.TRIGGER);
                if (o) {
                  if (
                    (o.setAttribute("aria-controls", t.id + "_content"),
                    o.setAttribute("aria-expanded", "false"),
                    i ||
                      (o.setAttribute("tabindex", "0"),
                      o.setAttribute("role", "button")),
                    this.settings.WITH_CHEVRON)
                  ) {
                    var a = this._constructArrow();
                    o.append(a);
                  }
                  o.addEventListener("click", function () {
                    "a" !== event.target.tagName.toLowerCase() && r._toggle(t);
                  }),
                    o.addEventListener("keydown", function (i) {
                      13 === (i.keyCode || i.which) &&
                        "a" !== event.target.tagName.toLowerCase() &&
                        r._toggle(t);
                    });
                }
                return o;
              },
            },
            {
              key: "_toggle",
              value: function _toggle(t, i, r) {
                if (!r) {
                  var o = this.selectors.TOGGLE_ALL_WRAPPER;
                  r =
                    null == o
                      ? void 0
                      : o.querySelector(this.selectors.TOGGLE_ALL);
                }
                var a = t.querySelector(this.selectors.TRIGGER),
                  c = t.querySelector(this.selectors.CONTENT),
                  l =
                    void 0 !== i
                      ? i
                      : "false" === a.getAttribute("aria-expanded");
                a && a.setAttribute("aria-expanded", l.toString()),
                  jQuery
                    ? l
                      ? c && jQuery(c).slideDown("fast")
                      : c && jQuery(c).slideUp("fast")
                    : c && c.setAttribute("tabindex", l ? "0" : "-1");
                var u =
                  this.selectors.TOGGLE_ALL_WRAPPER.parentNode.querySelectorAll(
                    '[data-expandable="item"] [aria-expanded="true"]'
                  );
                u.length > 0
                  ? this._toggleAllHTML(
                      r,
                      this.selectors.LIST.length / 2 < u.length
                    )
                  : this._toggleAllHTML(r, !1);
              },
            },
            {
              key: "_toggleAllHTML",
              value: function _toggleAllHTML(t, i) {
                t.setAttribute("aria-expanded", i),
                  ((t.querySelector("span") || t).innerHTML = t.getAttribute(
                    "data-label-".concat(i ? "collapse" : "expand")
                  ));
                var r = t.querySelector("i");
                r &&
                  (i
                    ? (r.classList.add(this.classes.EXPANDED_ICON),
                      r.classList.remove(this.classes.COLLAPSED_ICON))
                    : (r.classList.add(this.classes.COLLAPSED_ICON),
                      r.classList.remove(this.classes.EXPANDED_ICON)));
              },
            },
            {
              key: "_toggleAll",
              value: function _toggleAll() {
                var t = this,
                  i = this.selectors.TOGGLE_ALL_WRAPPER;
                if (i) {
                  var r = document
                    .getElementById(this.selectors.TOGGLE_TEMPLATE)
                    .content.cloneNode(!0);
                  "append" === this.settings.TOGGLE_ALL_POSITION
                    ? i.appendChild(r)
                    : i.prepend(r);
                  var o = i.querySelector(this.selectors.TOGGLE_ALL);
                  o.addEventListener("click", function toggle(i) {
                    i.preventDefault();
                    var r =
                      "true" === i.currentTarget.getAttribute("aria-expanded");
                    t.selectors.LIST.forEach(function (i) {
                      return t._toggle(i, !r, o);
                    });
                  });
                }
              },
            },
          ]),
          ExpandableBehavior
        );
      })();
      t.exports = l;
    },
    function (t, i, r) {
      var o = r(12),
        a = r(1),
        c = r(2);
      function ownKeys(t, i) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          i &&
            (o = o.filter(function (i) {
              return Object.getOwnPropertyDescriptor(t, i).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      var l = (function () {
        "use strict";
        function FocusTrap(t) {
          if (
            (a(this, FocusTrap),
            (this._enabled = !1),
            (this._currentTrap = null),
            (this._focusTrap = null),
            (this._tabbable = null),
            (this.config = t),
            t.collateral.focusTrap)
          )
            try {
              (this._focusTrap = r(366)),
                (this._tabbable = r(56)),
                (this._enabled = !0);
            } catch (t) {
              console.error("Focus Trap Library not found:", t);
            }
        }
        return (
          c(FocusTrap, [
            {
              key: "init",
              value: function init(t, i, r, a) {
                if (
                  ((a = t !== a && this.getFocusableInitialFocus(a)),
                  this._enabled)
                ) {
                  var c;
                  null === (c = this._currentTrap) ||
                    void 0 === c ||
                    c.deactivate();
                  var l = (function _objectSpread(t) {
                    for (var i = 1; i < arguments.length; i++) {
                      var r = null != arguments[i] ? arguments[i] : {};
                      i % 2
                        ? ownKeys(Object(r), !0).forEach(function (i) {
                            o(t, i, r[i]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(r)
                          )
                        : ownKeys(Object(r)).forEach(function (i) {
                            Object.defineProperty(
                              t,
                              i,
                              Object.getOwnPropertyDescriptor(r, i)
                            );
                          });
                    }
                    return t;
                  })(
                    {
                      allowOutsideClick: !0,
                      fallbackFocus: i,
                      setReturnFocus: r,
                      preventScroll: !0,
                    },
                    !!(a = a || this.getCustomInitialFocus(t)) && {
                      initialFocus: a,
                    }
                  );
                  (this._currentTrap = this._focusTrap.createFocusTrap(t, l)),
                    this._currentTrap.activate();
                }
              },
            },
            {
              key: "getCustomInitialFocus",
              value: function getCustomInitialFocus(t) {
                var i;
                return null === (i = this.config.collateral.initialFocus) ||
                  void 0 === i
                  ? void 0
                  : i[t.id];
              },
            },
            {
              key: "getFocusableInitialFocus",
              value: function getFocusableInitialFocus(t) {
                if (this._tabbable.isTabbable(t)) return t;
                var i = this._tabbable.focusable(t);
                return i.length ? i[0] : null;
              },
            },
            {
              key: "deactivate",
              value: function deactivate(t) {
                var i;
                this._focusTrap &&
                  (null === (i = this._currentTrap) ||
                    void 0 === i ||
                    i.deactivate(t));
              },
            },
          ]),
          FocusTrap
        );
      })();
      t.exports = l;
    },
    function (t, i, r) {
      var o = r(1),
        a = r(2),
        c = r(49),
        l = r(5),
        u = r(4),
        h = r(0);
      function _createSuper(t) {
        var i = (function _isNativeReflectConstruct() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var r,
            o = h(t);
          if (i) {
            var a = h(this).constructor;
            r = Reflect.construct(o, arguments, a);
          } else r = o.apply(this, arguments);
          return u(this, r);
        };
      }
      var d = r(59),
        p = r(370),
        v = (function (t) {
          "use strict";
          l(SectionsNavbar, t);
          var i = _createSuper(SectionsNavbar);
          function SectionsNavbar(t, r, a) {
            var l;
            return (
              o(this, SectionsNavbar),
              ((l = i.call(this)).articleView = r),
              (l.config = a.sectionsNavbar),
              (l.data = t),
              p || console.warn("No section navbar component was found."),
              (l.sectionsNavReposition = l.sectionsNavReposition.bind(c(l))),
              (l.sectionNavbar = p),
              l
            );
          }
          return (
            a(SectionsNavbar, [
              {
                key: "initiate",
                value: function initiate() {
                  var t,
                    i,
                    r,
                    o,
                    a = this;
                  if (
                    (this.sectionNavbar.init(
                      this.data.sections,
                      articleView,
                      this.config.scrollIndicator
                    ),
                    (this.main = this.sectionNavbar.main),
                    this.main)
                  ) {
                    if (
                      null !== (t = this.config) &&
                      void 0 !== t &&
                      t.eLettersId
                    ) {
                      var c = document.getElementById(this.config.eLettersId),
                        l =
                          null == c
                            ? void 0
                            : c.querySelector(this.config.eLettersCount);
                      l &&
                        this.addLiElement(
                          this.config.eLettersId,
                          "e Letters ".concat(l.textContent)
                        );
                    }
                    if (
                      ((null !== (i = this.config) &&
                        void 0 !== i &&
                        i.hideIfEmpty) ||
                        (this.articleView.subscribe("mobileOff", function () {
                          a.control();
                        }),
                        this.articleView.subscribe("mobileOn", function () {
                          a.control(!0);
                        })),
                      (null === (r = this.config) || void 0 === r
                        ? void 0
                        : r.overlaps) && this.initOpenButton(),
                      null !== (o = this.config) &&
                        void 0 !== o &&
                        o.markBackmatterStart)
                    ) {
                      var u = this.main.querySelectorAll("a[href]"),
                        h = !1;
                      u.forEach(function (t) {
                        var i;
                        null !== (i = document.body.querySelector(t.hash)) &&
                          void 0 !== i &&
                          i.closest('[data-extent="backmatter"]') &&
                          !h &&
                          (t.parentElement.classList.add("bordered"), (h = !0));
                      });
                    }
                  }
                },
              },
              {
                key: "control",
                value: function control() {
                  var t = this,
                    i =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                  this.sectionNavbar && !i
                    ? ((this.main.style.visibility = "hidden"),
                      (this.main.style.display = "flex"),
                      this.sectionsNavReposition(),
                      this.articleView.subscribe(
                        "scroll",
                        this.sectionsNavReposition
                      ),
                      this.articleView.subscribe(
                        "resize",
                        this.sectionsNavReposition
                      ),
                      (this.main.style.visibility = "visible"),
                      this.sectionNavbar.update())
                    : (this.articleView.subscribe(
                        "scroll",
                        this.sectionsNavReposition,
                        !0
                      ),
                      this.articleView.subscribe(
                        "resize",
                        this.sectionsNavReposition,
                        !0
                      ),
                      this.sectionNavbar.main.removeAttribute("style")),
                    this.main.setAttribute("title", "Section Navigation"),
                    this.config.autoClose &&
                      this.main
                        .querySelectorAll(".sections-navbar__container li a")
                        .forEach(function (i) {
                          i.addEventListener("click", function () {
                            var i, r, o;
                            t.main.classList.remove(
                              t.config.overlapOpenClassname
                            ),
                              t.main.classList.remove(
                                t.config.subduedInClassname
                              ),
                              null === (i = window.articleView) ||
                                void 0 === i ||
                                null === (r = i.mobileSticky) ||
                                void 0 === r ||
                                null === (o = r.sectionNavButton) ||
                                void 0 === o ||
                                o.classList.remove("active");
                          });
                        }),
                    document.addEventListener("click", function (i) {
                      (i.target &&
                        i.target.closest &&
                        i.target.closest(".sections-navbar")) ||
                        t.main.classList.remove(t.config.overlapOpenClassname);
                    });
                },
              },
              {
                key: "sectionsNavReposition",
                value: function sectionsNavReposition(t) {
                  var i = this.config,
                    r = i.overlaps,
                    o = i.overlappingPivot,
                    a = i.overlapClassname,
                    c = i.overlapOpenClassname,
                    l = this.data.decorationsPosRef.getBoundingClientRect(),
                    u = l.left,
                    h = l.bottom,
                    d = this.articleView.getArticle().getBoundingClientRect(),
                    p = this.sectionNavbar.main.getBoundingClientRect();
                  if (r) {
                    var v = this.data.decorationsPosRef.getBoundingClientRect(),
                      g = this.sectionNavbar.main.getBoundingClientRect();
                    (o ? o > document.body.clientWidth : g.width > v.left)
                      ? (this.main.classList.contains(a) ||
                          this.openButtonLocation.appendChild(this.openButton),
                        this.main.classList.add(a),
                        (this.main.style.left = 0))
                      : (this.openButton.parentNode ===
                          this.openButtonLocation &&
                          this.openButtonLocation.removeChild(this.openButton),
                        this.main.classList.remove(a, c),
                        (this.main.style.left =
                          Math.max(
                            u -
                              this.sectionNavbar.main.offsetWidth -
                              this.articleView.fixedMargins.x,
                            0
                          ) + "px"));
                  } else
                    this.main.style.left =
                      Math.max(
                        u -
                          this.sectionNavbar.main.offsetWidth -
                          this.articleView.fixedMargins.x,
                        0
                      ) + "px";
                  (this.main.style.marginTop = Math.max(h, 0) + "px"),
                    (this.main.style.paddingTop =
                      this.articleView.getTopOverlayHeight() + "px"),
                    (this.main.style.top =
                      Math.min(d.bottom - p.height, 0) + "px");
                },
              },
              {
                key: "initOpenButton",
                value: function initOpenButton() {
                  var t = this,
                    i = this.config,
                    r = this.main,
                    o = i.buttonClass,
                    a = i.buttonTemplate,
                    c = i.overlapOpenClassname,
                    l = i.openButtonLocationSelector;
                  if (
                    ((this.openButtonLocation = this.main.querySelector(l)),
                    this.openButtonLocation)
                  ) {
                    var u = document.getElementById(a).content.cloneNode(!0);
                    this.openButtonLocation.appendChild(u),
                      (this.openButton =
                        this.openButtonLocation.querySelector(o)),
                      this.openButton.addEventListener("click", function (i) {
                        var o;
                        i.preventDefault(),
                          r.classList.toggle(c),
                          null ===
                            (o = t.articleView
                              .getArticle()
                              .querySelector("#MathJax_ZoomOverlay")) ||
                            void 0 === o ||
                            o.dispatchEvent(new Event("mousedown"));
                      });
                  }
                },
              },
              {
                key: "addLiElement",
                value: function addLiElement(t, i) {
                  var r = this.main.querySelector("ul");
                  if (!r) {
                    var o = this.main.querySelector(
                      this.config.openButtonLocationSelector
                    );
                    (r = document.createElement("ul")), o.appendChild(r);
                  }
                  if (r) {
                    var a = document.createElement("a");
                    (a.href = "#" + t), (a.innerHTML = i);
                    var c = document.createElement("li");
                    c.appendChild(a), r.appendChild(c);
                  }
                },
              },
            ]),
            SectionsNavbar
          );
        })(d);
      t.exports = v;
    },
    function (t, i, r) {
      var o = r(1),
        a = r(2),
        c = r(49),
        l = r(5),
        u = r(4),
        h = r(0);
      function _createSuper(t) {
        var i = (function _isNativeReflectConstruct() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var r,
            o = h(t);
          if (i) {
            var a = h(this).constructor;
            r = Reflect.construct(o, arguments, a);
          } else r = o.apply(this, arguments);
          return u(this, r);
        };
      }
      var d = (function (t) {
        "use strict";
        l(StickyHeader, t);
        var i = _createSuper(StickyHeader);
        function StickyHeader(t, r) {
          var a;
          return (
            o(this, StickyHeader),
            ((a = i.call(this)).config = r),
            (a.main = document.body.querySelector(
              r.stickyHeader.selectors.stickyHeader
            )),
            r.stickyHeader.enable && a.main
              ? ((a.s = r.classNames),
                (a.articleView = t),
                (a.article = t.getArticle()),
                (a.trackWindowScroll = a.trackWindowScroll.bind(c(a))),
                a)
              : u(a)
          );
        }
        return (
          a(StickyHeader, [
            {
              key: "initiate",
              value: function initiate() {
                var t,
                  i = this;
                if (this.config.stickyHeader.enable && this.main) {
                  var r =
                      null === (t = this.config) || void 0 === t
                        ? void 0
                        : t.stickyHeader.selectors,
                    o = r.alerts,
                    a = r.articleCitation,
                    c = r.articleFavorite,
                    l = r.articleFormats,
                    u = r.articleLogo,
                    h = r.citations,
                    d = r.cite,
                    p = r.favorite,
                    v = r.formats,
                    g = r.logo,
                    m = r.menu,
                    y = r.navigation,
                    b = r.share,
                    _ = r.tracker,
                    w = r.title;
                  (this.tracker = this.main.querySelector(_)),
                    (this.title = this.main.querySelector(w)),
                    (this.alerts = this.main.querySelector(o)),
                    (this.citations = this.main.querySelector(h)),
                    (this.favorite = this.main.querySelector(p)),
                    (this.formats = this.main.querySelector(v)),
                    (this.logo = this.main.querySelector(g)),
                    (this.sequentialNav = this.main.querySelector(y)),
                    (this.share = this.main.querySelector(b));
                  var x = this.articleView.getArticle().querySelector(c);
                  if (x && this.favorite) {
                    var S = x.cloneNode(!0);
                    S.classList.remove(this.s.BTN, this.s.BTN_INVERSE),
                      this.favorite.appendChild(S);
                  }
                  var k = this.articleView.getArticle().querySelector(a);
                  if (k && this.alerts) {
                    var T = k.cloneNode(!0);
                    T.classList.remove(this.s.BTN, this.s.BTN_INVERSE),
                      this.alerts.appendChild(T),
                      this.alerts.classList.remove(this.s.HIDDEN);
                  } else this.alerts.classList.add(this.s.HIDDEN);
                  var E = document.body.querySelector(u);
                  E && this.logo && (this.logo.innerHTML = E.innerHTML);
                  var O = this.articleView.getArticle().querySelector(l);
                  O && this.formats && (this.formats.innerHTML = O.innerHTML);
                  var I = this.articleView.getArticle().querySelector(d);
                  I &&
                    this.citations &&
                    (this.citations.innerHTML = I.innerHTML),
                    (this.navigationLinks =
                      this.articleView.source.data.navigation),
                    this.navigationLinks &&
                      this.sequentialNav &&
                      0 === this.sequentialNav.childNodes.length &&
                      this.sequentialNav.appendChild(
                        this.navigationLinks.cloneNode(!0)
                      ),
                    this.setTitleItem(),
                    this.setMenu(m),
                    document.body.appendChild(this.main),
                    this.articleView.subscribe("mobileOff", function () {
                      i.enable(),
                        i.articleView.addTopOverlay(
                          i.main.getBoundingClientRect().height
                        );
                    }),
                    this.articleView.subscribe("mobileOn", function () {
                      i.articleView.subtractTopOverlay(
                        i.main.getBoundingClientRect().height
                      ),
                        i.disable();
                    });
                }
              },
            },
            {
              key: "setTitleItem",
              value: function setTitleItem() {
                var t = this;
                if (this.title) {
                  var i,
                    r =
                      null === (i = this.config) || void 0 === i
                        ? void 0
                        : i.stickyHeader,
                    o = r.breadcrumbs,
                    a = r.selectors,
                    c = function renderTitle() {
                      var i = t.articleView.source.data.title;
                      i &&
                        t.title &&
                        (t.title.innerHTML = i.replace(/[<]br[^>]*[>]/gi, ""));
                    };
                  if (o) {
                    var l = document.querySelector(a.articleBreadcrumbs);
                    l
                      ? (function renderBreadcrumbs(i) {
                          i &&
                            t.title.insertAdjacentHTML(
                              "beforebegin",
                              i.outerHTML
                            );
                        })(l)
                      : c();
                  } else c();
                } else this.title.parentNode.style.visibility = "hidden";
              },
            },
            {
              key: "setMenu",
              value: function setMenu(t) {
                if (((this.menu = document.querySelector(t)), this.menu)) {
                  var i = this.menu.cloneNode(!0);
                  try {
                    i.querySelectorAll("[id]").forEach(function (t) {
                      return (t.id = "core-" + t.id);
                    }),
                      i
                        .querySelectorAll("[aria-labelledby]")
                        .forEach(function (t) {
                          return t.setAttribute(
                            "aria-labelledby",
                            "core-" + t.getAttribute("aria-labelledby")
                          );
                        });
                  } catch (t) {
                    console.error(
                      "Sticky header - cloning - changing ids for A11y",
                      t
                    );
                  }
                  this.main.querySelector(".st-header__menu").appendChild(i);
                }
              },
            },
            {
              key: "enable",
              value: function enable() {
                this.trackWindowScroll(),
                  this.articleView.subscribe("scroll", this.trackWindowScroll);
              },
            },
            {
              key: "disable",
              value: function disable() {
                this.main.classList.remove(this.s.JS_VISIBLE),
                  this.articleView.subscribe(
                    "scroll",
                    this.trackWindowScroll,
                    !0
                  );
              },
            },
            {
              key: "trackWindowScroll",
              value: function trackWindowScroll() {
                var t = this;
                this.articleView.articleFixedHeader.trackWindowScroll(
                  this.main,
                  this.article,
                  function articleProgress() {
                    if (t.tracker && t.article) {
                      var i = t.article.getBoundingClientRect(),
                        r = i.top,
                        o = i.height,
                        a =
                          ((window.scrollX - r) / (o - window.innerHeight)) *
                          100;
                      t.tracker.style.width = a < 0 ? 0 : a + "%";
                    }
                  }
                );
              },
            },
          ]),
          StickyHeader
        );
      })(r(59));
      t.exports = d;
    },
    function (t, i, r) {
      var o = r(1),
        a = r(2),
        c = (function () {
          "use strict";
          function ToggleButton(t) {
            var i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "[data-toggle-btn]",
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "[data-toggle-area]",
              a =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              c =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : {
                      expanded: "toggle-state-expanded",
                      collapsed: "toggle-state-collapsed",
                    };
            o(this, ToggleButton),
              t &&
                ((this.toggleClasses = c),
                (this.hideOnOutsideClick = a),
                this.createToggleButtons(t, i, r, c, a));
          }
          return (
            a(ToggleButton, [
              {
                key: "setupHideOnOutsideClick",
                value: function setupHideOnOutsideClick(t, i) {
                  var r = this,
                    o = function outsideClickListener(o) {
                      i.contains(o.target) || (r.collapse(t, i), a());
                    },
                    a = function removeOutsideClickListener() {
                      document.removeEventListener("click", o);
                    };
                  a(), document.addEventListener("click", o);
                },
              },
              {
                key: "createToggleButtons",
                value: function createToggleButtons(t, i, r, o) {
                  var a = this;
                  document.querySelectorAll(t).forEach(function (t) {
                    var c = t.querySelector(i);
                    if (c) {
                      var l = t.querySelector(r);
                      l &&
                        c.addEventListener("click", function () {
                          c.classList.contains(o.expanded)
                            ? a.collapse(c, l)
                            : a.expand(c, l);
                        });
                    }
                  });
                },
              },
              {
                key: "expand",
                value: function expand(t, i) {
                  if (
                    (t.setAttribute("aria-expanded", "true"),
                    t.classList.add(this.toggleClasses.expanded),
                    t.classList.remove(this.toggleClasses.collapsed),
                    i.classList.add(this.toggleClasses.expanded),
                    i.classList.remove(this.toggleClasses.collapsed),
                    this.hideOnOutsideClick)
                  ) {
                    var r = this;
                    setTimeout(function () {
                      r.setupHideOnOutsideClick(t, i);
                    });
                  }
                },
              },
              {
                key: "collapse",
                value: function collapse(t, i) {
                  t.setAttribute("aria-expanded", "false"),
                    t.classList.remove(this.toggleClasses.expanded),
                    t.classList.add(this.toggleClasses.collapsed),
                    i.classList.remove(this.toggleClasses.expanded),
                    i.classList.add(this.toggleClasses.collapsed);
                },
              },
            ]),
            ToggleButton
          );
        })();
      t.exports = c;
    },
    function (module, exports, __webpack_require__) {
      var _toConsumableArray = __webpack_require__(17),
        _slicedToArray = __webpack_require__(33),
        _defineProperty = __webpack_require__(12),
        _classCallCheck = __webpack_require__(1),
        _createClass = __webpack_require__(2),
        _assertThisInitialized = __webpack_require__(49),
        _inherits = __webpack_require__(5),
        _possibleConstructorReturn = __webpack_require__(4),
        _getPrototypeOf = __webpack_require__(0);
      function ownKeys(t, i) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          i &&
            (o = o.filter(function (i) {
              return Object.getOwnPropertyDescriptor(t, i).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function _objectSpread(t) {
        for (var i = 1; i < arguments.length; i++) {
          var r = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(r), !0).forEach(function (i) {
                _defineProperty(t, i, r[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (i) {
                Object.defineProperty(
                  t,
                  i,
                  Object.getOwnPropertyDescriptor(r, i)
                );
              });
        }
        return t;
      }
      function _createSuper(t) {
        var i = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var r,
            o = _getPrototypeOf(t);
          if (i) {
            var a = _getPrototypeOf(this).constructor;
            r = Reflect.construct(o, arguments, a);
          } else r = o.apply(this, arguments);
          return _possibleConstructorReturn(this, r);
        };
      }
      function _isNativeReflectConstruct() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      __webpack_require__(372);
      var _require = __webpack_require__(66),
        BehaviorTab = _require.BehaviorTab,
        VisualComponent = __webpack_require__(59),
        downloadPanelTmpl = __webpack_require__(373),
        FocusMode = __webpack_require__(374),
        _require2 = __webpack_require__(178),
        FigureType = _require2.FigureType,
        SmartTables = __webpack_require__(132),
        FigureViewer = (function (_VisualComponent) {
          "use strict";
          _inherits(FigureViewer, _VisualComponent);
          var _super = _createSuper(FigureViewer);
          function FigureViewer(t, i) {
            var r,
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : { classNames: {} },
              a = arguments.length > 3 ? arguments[3] : void 0;
            return (
              _classCallCheck(this, FigureViewer),
              ((r = _super.call(this)).firstBuild = !0),
              (r.s = { prefix: "fv", semantic: "figureViewer" }),
              (r.tabPaneSelector = ".tab__pane"),
              (r.tabNavLinSelector = ".tab__nav__item"),
              (r.config = o),
              (r.srcsetParser = __webpack_require__(375)),
              (r.tmpl = {
                directory: a.fvDirectory,
                lightbox: a.fvLightbox,
                thumbnails: a.fvThumbnails,
              }),
              (r.imageNavigator = r.config.figureViewer.enableIvViewer
                ? __webpack_require__(376)
                : __webpack_require__(377)),
              (r.navText = r.config.figureViewer.navText),
              (r.dataTypes = ["figures", "tables", "others"]),
              (r.lightbox = {}),
              (r.data = {}),
              (r.sourceData = t),
              (r.articleView = i),
              (r.main = document.createElement("div")),
              (r.multiImageIndex = 0),
              (r.openSlideById = r.openSlideById.bind(
                _assertThisInitialized(r)
              )),
              (r.open = r.open.bind(_assertThisInitialized(r))),
              (r.closeViewer = r.closeViewer.bind(_assertThisInitialized(r))),
              (r.goBackToOriginal = r.goBackToOriginal.bind(
                _assertThisInitialized(r)
              )),
              r
            );
          }
          return (
            _createClass(FigureViewer, [
              {
                key: "getPanel",
                value: function getPanel(t, i, r, o) {
                  var a,
                    c = document.getElementById("fv_panel_template"),
                    l = c.content.cloneNode(!0),
                    u = this.config.figureViewer.selectors;
                  null === (a = l.querySelector(u.panel)) ||
                    void 0 === a ||
                    a.classList.add(t);
                  var h = l.querySelector(u.panelHeaderTitle),
                    d = l.querySelector(u.panelTitle);
                  return (
                    h && i
                      ? (h.innerHTML = i)
                      : h && o
                      ? (h.innerHTML = c.getAttribute(o))
                      : d && (d.innerHTML = c.getAttribute(o)),
                    l.querySelector(u.panelText) &&
                      r &&
                      (l.querySelector(u.panelText).innerHTML = r),
                    l
                  );
                },
              },
              {
                key: "getToolbarPanel",
                value: function getToolbarPanel(t, i) {
                  var r = document
                      .getElementById("fv_toolbar_template")
                      .content.cloneNode(!0),
                    o = this.config.figureViewer.selectors;
                  return (
                    r.querySelector(o.toolbarText) &&
                      i &&
                      (r.querySelector(o.toolbarText).innerHTML = i),
                    r.querySelector(o.toolbarTitle) &&
                      t &&
                      (r.querySelector(o.toolbarTitle).innerHTML = t),
                    r
                  );
                },
              },
              {
                key: "getDirectoryPanel",
                value: function getDirectoryPanel(t) {
                  var i = this.config.figureViewer.selectors,
                    r = document.getElementById("fv_directory_template"),
                    o = r.content.cloneNode(!0),
                    a = o.querySelector(i.directoryTabWrapper);
                  Object.keys(t).forEach(function (t) {
                    var r = document.getElementById(
                        "fv_directory_tabItem_template"
                      ),
                      o = r.content.cloneNode(!0),
                      c = o.querySelector(i.directoryTabItem);
                    c.setAttribute("aria-controls", "#tab-pane-" + t),
                      (c.innerHTML = r.getAttribute("data-" + t)),
                      a.appendChild(o);
                  }),
                    (o.querySelector(i.directoryContentWrapper).innerHTML =
                      this.tmpl.directory({
                        types: t,
                        overlayText: r.getAttribute("data-overlay"),
                      })),
                    this.main.appendChild(o);
                },
              },
              {
                key: "getLightboxPanel",
                value: function getLightboxPanel(t) {
                  var i = document.getElementById("fv_lightbox_template");
                  t.querySelectorAll("[data-sr]").forEach(function (t) {
                    var r = t.getAttribute("data-sr");
                    t.innerHTML = i.getAttribute("data-sr-" + r);
                  }),
                    t.querySelectorAll("[data-text]").forEach(function (t) {
                      var r = t.getAttribute("data-text");
                      t.innerHTML = i.getAttribute("data-text-" + r);
                    }),
                    t.querySelectorAll("[data-title]").forEach(function (t) {
                      var r = t.getAttribute("data-title"),
                        o = i.getAttribute("data-title-" + r);
                      t.setAttribute("title", o);
                    });
                },
              },
              {
                key: "initiate",
                value: function initiate() {
                  var t = this;
                  this.main.classList.add(this.s.prefix, this.s.semantic),
                    (this.lightbox = this.dataTypes.reduce(function (i, r) {
                      var o =
                        "others" === r ? t.sourceData.videos : t.sourceData[r];
                      return (
                        o &&
                          ("others" !== r || o.length) &&
                          ((t.data[r] = o.map(function (i) {
                            var o = i.content;
                            if (
                              (o && "figures" === r) ||
                              ("tables" === r &&
                                i.figureType === FigureType.IMAGE)
                            ) {
                              var a = t.stringToHTML(i.content);
                              if ("IMG" === a.nodeName && a.srcset) {
                                var c = t.srcsetParser
                                  .parse(a.srcset)
                                  .reduce(function (t, i) {
                                    return i.width > t.width ? i : t;
                                  });
                                o = '<img src="'
                                  .concat(c.url, '" alt="')
                                  .concat(a.alt, '"/>');
                              }
                            }
                            return (
                              (o = t.handleInternalLinks(o)),
                              "others" === r && (o = t.handleVideoJsIds(o)),
                              _objectSpread(
                                _objectSpread({}, i),
                                {},
                                {
                                  content: o,
                                  originalId: i.id,
                                  id: "fv-".concat(i.id),
                                }
                              )
                            );
                          })),
                          (i[r] = t.stringToHTML(
                            t.tmpl.lightbox({ slides: t.data[r], type: r })
                          )),
                          t.getLightboxPanel(i[r]),
                          (i[r].dataSource = t.data[r]),
                          0 !== t.data[r].length &&
                            ((i[r].zoomer = i[r].querySelector(".fv__zoom")),
                            (i[r].slideshow = t.buildMainCarousel(i[r])),
                            t.setupSharePanel(i[r]),
                            ("figures" === r ||
                              ("tables" === r &&
                                t.containsImageTables(i[r].dataSource))) &&
                              (i[r].imageNavigator = new t.imageNavigator(
                                i[r].slideshow,
                                i[r].zoomer,
                                t.config
                              )),
                            (i[r].slideshowNav = t.buildNavCarousel(i[r])))),
                        i
                      );
                    }, {})),
                    this.getDirectoryPanel(this.data),
                    (this.directory = this.main.querySelector(
                      this.config.figureViewer.selectors.directory
                    )),
                    (this.directory.style.display = "flex");
                  try {
                    new BehaviorTab(
                      this.directory,
                      this.config.tabs.figureViewer
                    );
                  } catch (t) {
                    console.error("FV directory tabs: ", t);
                  }
                  this.toRef(this.directory),
                    this.articleView.subscribeAnchorClick(
                      ".fv__close",
                      this.closeViewer
                    ),
                    document.body.appendChild(this.main),
                    document.body.addEventListener("keydown", function (i) {
                      27 === i.keyCode && t.closeViewer();
                    }),
                    this.articleView.subscribe(
                      "articleInnerTargetOpen",
                      function () {
                        t.isInDOM() && t.closeViewer();
                      }
                    ),
                    this.articleView.subscribeAnchorClick(
                      ".fv__open-item",
                      this.openSlideById
                    ),
                    this.articleView.subscribeAnchorClick(
                      ".".concat(this.s.semantic, " .fv__back-to-original"),
                      this.goBackToOriginal
                    ),
                    this.config.figureViewer.viewerTrigger &&
                      this.articleView.subscribeAnchorClick(
                        "." + this.config.figureViewer.viewerTrigger,
                        this.open
                      ),
                    this.config.figureViewer.fvFocusMode &&
                      this.setupFocusMode();
                },
              },
              {
                key: "setupFocusMode",
                value: function setupFocusMode() {
                  this.focusMode = new FocusMode(
                    this.main,
                    this.lightbox,
                    this.config.figureViewer.fvFocusMode
                  );
                },
              },
              {
                key: "goBackToOriginal",
                value: function goBackToOriginal(t) {
                  t.preventDefault(),
                    this.closeViewer(),
                    this.articleView.goToTarget(t);
                },
              },
              {
                key: "openSlideById",
                value: function openSlideById(t, i) {
                  t && t.preventDefault();
                  var r = i ? i.type : t.currentTarget.dataset.type,
                    o = i ? i.hash : t.currentTarget.hash,
                    a = this.lightbox[r],
                    c = a.querySelector(o);
                  if (
                    ($(a.slideshow).trigger("to.owl.carousel", [c.dataset.key]),
                    this.show(),
                    this.showLightbox(a, c),
                    "figures" === r || a.classList.contains("displaying-image"))
                  ) {
                    var l,
                      u = this.getToolbarHeight(a);
                    this.resizeCarousel(a, c, u),
                      null === (l = a.imageNavigator) ||
                        void 0 === l ||
                        l.setToolbarHeight(u);
                  }
                },
              },
              {
                key: "open",
                value: function open(t) {
                  var i = this;
                  t && t.preventDefault(),
                    (this.multiImageIndex = t.currentTarget.dataset.index || 0);
                  var r = t.currentTarget.hash,
                    o = r.replace("tab-pane-", "").replace("#", "");
                  if (
                    ((this.figureViewerIsOpen = !0),
                    this.dataTypes.indexOf(o) >= 0)
                  )
                    this.showDirectory("tab-pane-" + o);
                  else {
                    var a = Object.keys(this.data).reduce(function (t, o) {
                        var a = i.data[o].find(function (t) {
                          return "#" + i.unscopeId(t.id) === r;
                        });
                        return a ? { type: o, hash: "#" + a.id } : t;
                      }, {}),
                      c = a.type,
                      l = a.hash;
                    if (c && l) {
                      var u = "tab-pane-" + c;
                      this.openDirectoryTab(u),
                        this.openSlideById(null, { type: c, hash: l });
                    }
                  }
                },
              },
              {
                key: "openDirectoryTab",
                value: function openDirectoryTab(t) {
                  this.directory
                    .querySelector('[aria-controls="#' + t + '"]')
                    .click();
                },
              },
              {
                key: "showDirectory",
                value: function showDirectory(t) {
                  this.openDirectoryTab(t), this.show();
                },
              },
              {
                key: "show",
                value: function show() {
                  this.resetInterface(),
                    this.main.classList.remove("js--hidden"),
                    (this.main.style.display = "flex"),
                    document.body.classList.add("figure-viewer-lock-screen");
                },
              },
              {
                key: "showLightbox",
                value: function showLightbox(t, i) {
                  var r = this,
                    o = this.main.querySelector(".fv__lightbox");
                  o !== t &&
                    (o && o.parentNode.removeChild(o),
                    this.main.appendChild(t)),
                    (t.style.visbility = "hidden"),
                    (t.style.display = "flex"),
                    $(t.slideshow)
                      .one("changed.owl.carousel", function () {
                        r.articleView.initiateMathJax("fv__lightbox"),
                          (t.style.visbility = "visible"),
                          t.classList.remove("js--hidden");
                        try {
                          new SmartTables(
                            r.config.smartTables,
                            t.dataSource,
                            t
                          );
                        } catch (t) {
                          console.error(
                            "FV - initiate tables behavior enhancer",
                            t
                          );
                        }
                      })
                      .trigger("refresh.owl.carousel");
                  var a = t.querySelector(".owl-item");
                  this.trackPanels(t),
                    this.observeSlideWidth({ firstSlide: a, lightbox: t }),
                    (this.sidebarIsAnimating = !1),
                    this.toRef(t),
                    this.multiImageHandle(t, i);
                  var c =
                    ((this.config.figureViewer.sidePanelRendersOpen &&
                      this.firstBuild) ||
                      this.config.figureViewer.sidePanelRendersAlwaysOpen) &&
                    window.innerWidth > this.config.figureViewer.sidePanelMedia;
                  c && (this.toggleInfoPanel(t, c), (this.firstBuild = !1));
                },
              },
              {
                key: "observeSlideWidth",
                value: function observeSlideWidth(t) {
                  var i = t.firstSlide,
                    r = t.lightbox;
                  (this.observer = new MutationObserver(function () {
                    var t, i;
                    window.dispatchEvent(new Event("resize")),
                      null === (t = r.imageNavigator) ||
                        void 0 === t ||
                        null === (i = t.currentViewer) ||
                        void 0 === i ||
                        i.refresh();
                  })),
                    this.observer.observe(i, {
                      attributes: !0,
                      attributeFilter: ["style"],
                    });
                },
              },
              {
                key: "closeTarget",
                value: function closeTarget(t) {
                  t && t.preventDefault();
                  var i = this;
                  i.addEventListener(
                    "transitionend",
                    function handleTransitionEnd(t) {
                      t.target === i &&
                        ((i.style.display = "none"),
                        i.removeEventListener(
                          "transitionend",
                          handleTransitionEnd
                        ));
                    }
                  ),
                    i.classList.add("js--hidden"),
                    i
                      .querySelector(".fv__slideshowNav")
                      .classList.add("js--hidden"),
                    i.classList.remove("js--slideshowNav-open");
                },
              },
              {
                key: "unscopeId",
                value: function unscopeId(t) {
                  return t.replace("fv-", "");
                },
              },
              {
                key: "closeViewer",
                value: function closeViewer(t) {
                  var i,
                    r = this;
                  this.figureViewerIsOpen &&
                    (document.body.classList.remove(
                      "figure-viewer-lock-screen"
                    ),
                    this.closeTarget.call(this.main, t),
                    (this.figureViewerIsOpen = !1),
                    Object.values(this.lightbox).map(function (t) {
                      return r.closeTarget.call(t);
                    }),
                    null === (i = this.observer) ||
                      void 0 === i ||
                      i.disconnect(),
                    this.panels.forEach(function (t) {
                      t.removeEventListener(
                        "transitionend",
                        t.transitionEndListener
                      );
                    }));
                },
              },
              {
                key: "slidesNavigation",
                value: function slidesNavigation(t) {
                  ("click" !== t.type && 13 !== t.keyCode) ||
                    (t.currentTarget.classList.add("super-active"),
                    $(this.slideshow).trigger("to.owl.carousel", [
                      t.currentTarget.dataset.key,
                    ]),
                    t.preventDefault());
                },
              },
              {
                key: "trackPanels",
                value: function trackPanels(t) {
                  var i = this;
                  (this.panels = t.querySelectorAll(
                    this.config.figureViewer.selectors.panel
                  )),
                    this.panels.forEach(function (t) {
                      t.transitionEndListener ||
                        ((t.transitionEndListener = function () {
                          return (i.sidebarIsAnimating = !1);
                        }),
                        t.addEventListener(
                          "transitionend",
                          t.transitionEndListener
                        ));
                    });
                },
              },
              {
                key: "syncCarousel",
                value: function syncCarousel(t, i) {
                  $(i.slideshowNav)
                    .trigger("to.owl.carousel", [t])
                    .find(".fv__navItem")
                    .removeClass("super-active")
                    .eq(t)
                    .addClass("super-active");
                  var r = i.slideshow[0].querySelector(
                    '[data-key="' + t + '"]'
                  );
                  this.multiImageHandle(i, r);
                },
              },
              {
                key: "toggleNavCarousel",
                value: function toggleNavCarousel() {
                  this.querySelector(".fv__slideshowNav").classList.toggle(
                    "js--hidden"
                  ),
                    this.classList.toggle("js--slideshowNav-open");
                },
              },
              {
                key: "buildMainCarousel",
                value: function buildMainCarousel(t) {
                  var i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return $(t)
                    .find(".fv__slideshow__owl")
                    .addClass("owl-carousel")
                    .owlCarousel(
                      _objectSpread(
                        {
                          items: 1,
                          nav: !0,
                          dots: !1,
                          navText: this.navText,
                          touchDrag: !1,
                          mouseDrag: !1,
                          navContainer: t.querySelector(".owl-nav"),
                          onChanged: this.carouselChangeHandler(t).bind(this),
                        },
                        i
                      )
                    );
                },
              },
              {
                key: "resizeCarousel",
                value: function resizeCarousel(t, i, r) {
                  var o = t.slideshow[0];
                  this.config.figureViewer.enableFullScreen
                    ? (o.style.height = "100vh")
                    : (o.style.height = "calc(100vh - ".concat(r || 0, "px)")),
                    $(t.slideshow).trigger("refresh.owl.carousel");
                },
              },
              {
                key: "getToolbarHeight",
                value: function getToolbarHeight(t) {
                  var i = t.querySelector(".fv__toolbar");
                  if (!i) return 0;
                  var r = i.getBoundingClientRect().height;
                  return (
                    t.infoPanel &&
                      (t.infoPanel.style.top = (r < 72 ? 72 : r) + "px"),
                    t.sharePanel &&
                      (t.sharePanel.style.top = (r < 72 ? 72 : r) + "px"),
                    t.downloadPanel &&
                      (t.downloadPanel.style.top = (r < 72 ? 72 : r) + "px"),
                    r
                  );
                },
              },
              {
                key: "carouselChangeHandler",
                value: function carouselChangeHandler(t) {
                  var i = null,
                    r = this;
                  return function (o) {
                    o.item &&
                      o.item.index !== i &&
                      null !== o.item.index &&
                      (r.updateInfoPanels.call(r, t, o.item.index),
                      this.config.figureViewer.enableDownloadPanel
                        ? r.updateDownloadPanel.call(r, t, o.item.index)
                        : r.updateDownload.call(
                            r,
                            t,
                            t.dataSource[o.item.index]
                          ),
                      r.trackPanels.call(r, t),
                      r.syncCarousel.call(r, o.item.index, t),
                      (i = o.item.index));
                  };
                },
              },
              {
                key: "buildNavCarousel",
                value: function buildNavCarousel(t) {
                  var i = $(t).find(".fv__slideshowNav__owl");
                  return (
                    i
                      .find(".fv__navItem")
                      .on("click keydown", this.slidesNavigation.bind(t)),
                    this.articleView.subscribeAnchorClick(
                      ".fv__slideshowNav__back",
                      this.closeTarget.bind(t)
                    ),
                    this.articleView.subscribeAnchorClick(
                      ".fv__slideshowNav__tongue",
                      this.toggleNavCarousel.bind(t)
                    ),
                    i.addClass("owl-carousel").owlCarousel({
                      autoWidth: !0,
                      nav: !0,
                      dots: !1,
                      navText: this.navText,
                      navContainer: i.parent(),
                    })
                  );
                },
              },
              {
                key: "updateOwlSliderCallback",
                value: function updateOwlSliderCallback(t) {
                  var i,
                    r = this,
                    o =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0;
                  ($(t.slideshow).trigger("refresh.owl.carousel"),
                  this.sidebarIsAnimating && o < 16)
                    ? requestAnimationFrame(function () {
                        return r.updateOwlSliderCallback(t, o + 1);
                      })
                    : (window.dispatchEvent(new Event("resize")),
                      t.imageNavigator &&
                        0 ===
                          (null === (i = t.imageNavigator.currentViewer) ||
                          void 0 === i
                            ? void 0
                            : i._elements.image.width) &&
                        this.waitForImageLoad(t.imageNavigator.currentViewer),
                      this.showAllSlides(t));
                },
              },
              {
                key: "beginSidebarAnimation",
                value: function beginSidebarAnimation(t) {
                  var i = this;
                  this.hideRestSlides(t),
                    (this.sidebarIsAnimating = !0),
                    requestAnimationFrame(function () {
                      return i.updateOwlSliderCallback(t);
                    });
                },
              },
              {
                key: "closeSidePanels",
                value: function closeSidePanels(t) {
                  var i, r, o;
                  null === (i = t.downloadPanel) ||
                    void 0 === i ||
                    i.classList.add("js--hidden"),
                    null === (r = t.infoPanel) ||
                      void 0 === r ||
                      r.classList.add("js--hidden"),
                    null === (o = t.sharePanel) ||
                      void 0 === o ||
                      o.classList.add("js--hidden"),
                    t.classList.remove("js-open-info--opened");
                },
              },
              {
                key: "openSidePanel",
                value: function openSidePanel(t, i) {
                  this.closeSidePanels(t),
                    i.classList.remove("js--hidden"),
                    this.config.figureViewer.resizeInterfaceWithPanels &&
                      t.classList.add("js-open-info--opened");
                },
              },
              {
                key: "toggleInfoPanel",
                value: function toggleInfoPanel(t, i) {
                  t &&
                    t.infoPanel &&
                    this.togglePanel(t, t.infoPanel, ".fv__open-info", i);
                },
              },
              {
                key: "toggleDownloadPanel",
                value: function toggleDownloadPanel(t) {
                  t &&
                    t.downloadPanel &&
                    this.togglePanel(t, t.downloadPanel, ".fv__download");
                },
              },
              {
                key: "toggleSharePanel",
                value: function toggleSharePanel(t) {
                  t &&
                    t.sharePanel &&
                    this.togglePanel(t, t.sharePanel, ".fv__share");
                },
              },
              {
                key: "togglePanel",
                value: function togglePanel(t, i, r, o) {
                  var a,
                    c = t.querySelector(
                      this.config.figureViewer.selectors.toolbarHolster
                    );
                  null === (a = c.querySelector(".active")) ||
                    void 0 === a ||
                    a.classList.remove("active"),
                    i.classList.contains("js--hidden") || o
                      ? (this.openSidePanel(t, i),
                        c.querySelector(r).classList.add("active"))
                      : this.closeSidePanels(t),
                    this.config.figureViewer.resizeInterfaceWithPanels &&
                      this.beginSidebarAnimation(t);
                },
              },
              {
                key: "updateDownload",
                value: function updateDownload(t, i) {
                  var r = t.querySelector(".fv__download");
                  r &&
                    ((r.href = i.src || this.stringToHTML(i.content).src || ""),
                    (r.download = i.title));
                },
              },
              {
                key: "updateDownloadPanel",
                value: function updateDownloadPanel(t, i) {
                  var r = this,
                    o = t.querySelector(".fv__download");
                  if (o) {
                    var a,
                      c = t.dataSource[i];
                    if (
                      (o.classList.remove("d-none"),
                      null == c || null === (a = c.ref) || void 0 === a
                        ? void 0
                        : a.querySelector(
                            'img[data-specific-use="do-not-distribute"]'
                          ))
                    )
                      return void o.classList.add("d-none");
                    var l = c.originalId,
                      u = this.stringToHTML(c.content);
                    if (!u) return void o.classList.add("d-none");
                    var h =
                        this.articleView.source &&
                        this.articleView.source.data &&
                        this.articleView.source.data.meta &&
                        this.articleView.source.data.meta.doi,
                      d = {
                        pptx: null,
                        title: c.title,
                        src: { file: null, ext: null },
                      };
                    if (
                      (h &&
                        l &&
                        (d.pptx = "/action/downloadFigures?doi="
                          .concat(encodeURIComponent(h), "&id=")
                          .concat(l)),
                      u.src)
                    ) {
                      d.src.file = u.src;
                      var p = u.src.split(".").pop();
                      d.src.ext = p.length > 4 ? "Figure" : p.toUpperCase();
                    }
                    var v = this.stringToHTML(
                        downloadPanelTmpl({ content: d })
                      ),
                      g = this.getPanel(
                        "fv__downloadPanel",
                        null,
                        v.outerHTML,
                        "data-download"
                      );
                    this.updatePanel(
                      g,
                      t,
                      "downloadPanel",
                      ".fv__downloadPanel",
                      ".fv__download",
                      function () {
                        return r.toggleDownloadPanel(t);
                      }
                    );
                  }
                },
              },
              {
                key: "updateInfoPanels",
                value: function updateInfoPanels(t, i) {
                  var r,
                    o = t.dataSource[i];
                  (o.articleTitle =
                    null ===
                      (r = this.articleView
                        .getArticle()
                        .querySelector('[data-extent="frontmatter"] h1')) ||
                    void 0 === r
                      ? void 0
                      : r.textContent),
                    this.updateAsideInfoPanel(t, o),
                    this.updateTopInfo(t, o),
                    this.articleView.initiateMathJax("fv__lightbox");
                },
              },
              {
                key: "updateAsideInfoPanel",
                value: function updateAsideInfoPanel(t, i) {
                  var r = this,
                    o = this.getPanel(
                      "fv__infoPanel",
                      i.title,
                      "<figure>" + i.description + "</figure>"
                    );
                  this.updatePanel(
                    o,
                    t,
                    "infoPanel",
                    ".fv__infoPanel",
                    ".fv__open-info",
                    function () {
                      return r.toggleInfoPanel(t);
                    },
                    "" === i.description && "" === i.title
                  );
                },
              },
              {
                key: "updateTopInfo",
                value: function updateTopInfo(lightbox, data, multiIndex) {
                  var topPanel = lightbox.querySelector(".fv__toolbar__info"),
                    backToOriginal = lightbox.querySelectorAll(
                      ".fv__toolbar .fv__back-to-original"
                    ),
                    title = [data.title],
                    id,
                    _data$multiImages$mul,
                    _data$multiImages$mul2;
                  multiIndex &&
                    data.multiImages &&
                    (title.push(
                      null ===
                        (_data$multiImages$mul =
                          data.multiImages[multiIndex]) ||
                        void 0 === _data$multiImages$mul
                        ? void 0
                        : _data$multiImages$mul.title
                    ),
                    (id =
                      null ===
                        (_data$multiImages$mul2 =
                          data.multiImages[multiIndex]) ||
                      void 0 === _data$multiImages$mul2
                        ? void 0
                        : _data$multiImages$mul2.id));
                  var newTopPanel = this.getToolbarPanel(
                      title.join(this.config.figureViewer.titleSeparator),
                      eval(this.config.figureViewer.topInfoData)
                    ),
                    _lightbox$querySelect,
                    _lightbox$querySelect2;
                  (topPanel.parentNode.replaceChild(newTopPanel, topPanel),
                  backToOriginal.forEach(function (t) {
                    return (t.href = "#" + (id || data.originalId || data.id));
                  }),
                  lightbox.classList.contains("fv__lightbox--figures") ||
                    this.containsImageTables([data]))
                    ? (lightbox
                        .querySelector(".fv__zoom")
                        .classList.remove("hidden"),
                      lightbox
                        .querySelector(".fv__download")
                        .classList.remove("hidden"),
                      lightbox.classList.add("displaying-image"),
                      lightbox.classList.remove("displaying-html"))
                    : (null ===
                        (_lightbox$querySelect =
                          lightbox.querySelector(".fv__zoom")) ||
                        void 0 === _lightbox$querySelect ||
                        _lightbox$querySelect.classList.add("hidden"),
                      null ===
                        (_lightbox$querySelect2 =
                          lightbox.querySelector(".fv__download")) ||
                        void 0 === _lightbox$querySelect2 ||
                        _lightbox$querySelect2.classList.add("hidden"),
                      lightbox.classList.add("displaying-html"),
                      lightbox.classList.remove("displaying-image"));
                },
              },
              {
                key: "updatePanel",
                value: function updatePanel(t, i, r, o, a, c, l) {
                  var u = i.querySelector(
                    this.config.figureViewer.selectors.slideshow
                  );
                  if (u) {
                    var h, d, p;
                    if (l)
                      return (
                        null === (h = i.querySelector(a)) ||
                          void 0 === h ||
                          h.classList.add("disabled"),
                        void (
                          (null !== (d = i[r]) &&
                            void 0 !== d &&
                            d.classList.contains("js--hidden")) ||
                          c(i)
                        )
                      );
                    if (
                      (null === (p = i.querySelector(a)) ||
                        void 0 === p ||
                        p.classList.remove("disabled"),
                      i[r])
                    )
                      i[r].parentNode.replaceChild(t, i[r]),
                        i[r].classList.contains("js--hidden") ||
                          i
                            .querySelector("".concat(o, ".js--hidden"))
                            .classList.remove("js--hidden");
                    else {
                      var v = "".concat(o, " .fv__panel__close, ").concat(a);
                      $(i).on("click", v, function (t) {
                        t.preventDefault(), c(i);
                      }),
                        u.appendChild(t);
                    }
                    (i[r] = i.querySelector(o)), this.getToolbarHeight(i);
                  }
                },
              },
              {
                key: "setupSharePanel",
                value: function setupSharePanel(t) {
                  var i = this,
                    r = t.querySelector(
                      this.config.figureViewer.selectors.slideshow
                    );
                  if (!t.sharePanel && null !== t.sharePanel && r) {
                    var o = document.querySelector(".share-buttons");
                    if (
                      ((this.shareToggle = t.querySelector(".fv__share")),
                      this.shareToggle)
                    ) {
                      if (!o)
                        return (
                          this.shareToggle.remove(), void (t.sharePanel = null)
                        );
                      var a = this.getPanel(
                        "fv__sharePanel",
                        null,
                        o.outerHTML,
                        "data-shareSocial"
                      );
                      $(t).on(
                        "click",
                        ".fv__sharePanel .fv__panel__close, .fv__share",
                        function (r) {
                          r.preventDefault(), i.toggleSharePanel(t);
                        }
                      ),
                        r.appendChild(a),
                        (t.sharePanel = t.querySelector(".fv__sharePanel")),
                        t.sharePanel
                          .querySelectorAll(".share-buttons .btn")
                          .forEach(function (t) {
                            t.addEventListener(
                              "click",
                              i.handleShareClick.bind(i, t)
                            );
                          });
                    }
                  }
                },
              },
              {
                key: "handleShareClick",
                value: function handleShareClick(t, i) {
                  if ((i.preventDefault(), this.articleView.pill.main)) {
                    var r,
                      o = t.classList,
                      a = Array.prototype.slice.call(o).pop();
                    null ===
                      (r = this.articleView.pill.main.querySelector(
                        ".".concat(a)
                      )) ||
                      void 0 === r ||
                      r.click();
                  }
                },
              },
              {
                key: "imageLoadCallback",
                value: function imageLoadCallback(t) {
                  var i = this;
                  t._state.loaded
                    ? t.load(t._images.imageSrc)
                    : requestAnimationFrame(function () {
                        return i.imageLoadCallback(t);
                      });
                },
              },
              {
                key: "waitForImageLoad",
                value: function waitForImageLoad(t) {
                  var i = this;
                  requestAnimationFrame(function () {
                    return i.imageLoadCallback(t);
                  });
                },
              },
              {
                key: "hideRestSlides",
                value: function hideRestSlides(t) {
                  t.slideshow[0]
                    .querySelectorAll(".owl-item:not(.active)")
                    .forEach(function (t) {
                      return (t.style.opacity = 0);
                    });
                },
              },
              {
                key: "showAllSlides",
                value: function showAllSlides(t) {
                  t.slideshow[0]
                    .querySelectorAll(".owl-item")
                    .forEach(function (t) {
                      return (t.style.opacity = 1);
                    });
                },
              },
              {
                key: "resetInterface",
                value: function resetInterface() {
                  for (
                    var t = 0, i = Object.entries(this.lightbox);
                    t < i.length;
                    t++
                  ) {
                    var r = _slicedToArray(i[t], 1)[0];
                    this.lightbox[r].classList.remove("js--slideshowNav-open"),
                      this.lightbox[r].classList.add("js--hidden"),
                      this.closeSidePanels(this.lightbox[r]);
                  }
                },
              },
              {
                key: "toRef",
                value: function toRef(t) {
                  var i = this;
                  t.querySelectorAll('[role="doc-biblioref"]').forEach(
                    function (t) {
                      t.removeEventListener("click", i.closeViewer),
                        t.addEventListener("click", i.closeViewer, {
                          once: !0,
                        });
                    }
                  );
                },
              },
              {
                key: "handleInternalLinks",
                value: function handleInternalLinks(t) {
                  return (
                    _toConsumableArray(
                      new Set(t.matchAll('href="#(.*?)"'))
                    ).forEach(function (i) {
                      var r = i[0],
                        o = i[1];
                      t.match('id="'.concat(o, '"')) &&
                        (t = (t = t.replaceAll(
                          r,
                          'href="#'.concat(o, '_iv"')
                        )).replaceAll(
                          'id="'.concat(o, '"'),
                          'id="'.concat(o, '_iv"')
                        ));
                    }),
                    t
                  );
                },
              },
              {
                key: "handleVideoJsIds",
                value: function handleVideoJsIds(t) {
                  return (
                    _toConsumableArray(t.matchAll('id="(.*?)"')).forEach(
                      function (i) {
                        t = t.replace(
                          'id="'.concat(i[1], '"'),
                          'id="'.concat(i[1], '-fv"')
                        );
                      }
                    ),
                    t
                  );
                },
              },
              {
                key: "containsImageTables",
                value: function containsImageTables(t) {
                  return t.some(function (t) {
                    return t.figureType === FigureType.IMAGE;
                  });
                },
              },
              {
                key: "multiImageHandle",
                value: function multiImageHandle(t, i) {
                  var r,
                    o = i.getAttribute("data-key"),
                    a = t.getAttribute("data-type"),
                    c = this.data[a][o];
                  t.classList.contains("displaying-image") &&
                    (null === (r = i.children) || void 0 === r
                      ? void 0
                      : r.length) > 1 &&
                    this.multiImageInit(t, i, c);
                },
              },
              {
                key: "multiImageInit",
                value: function multiImageInit(t, i, r) {
                  i.querySelectorAll(".thumbnail").length ||
                    this.multiImageThumbnails.call(this, 0, t, i, r),
                    this.multiImageThumbnailsClick.call(
                      this,
                      this.multiImageIndex,
                      t,
                      i,
                      r
                    );
                },
              },
              {
                key: "multiImageThumbnails",
                value: function multiImageThumbnails(t, i, r, o) {
                  var a = this,
                    c = [];
                  r.childNodes.forEach(function (t) {
                    var i, r;
                    c.push({
                      src:
                        (null === (i = t.querySelector("img")) || void 0 === i
                          ? void 0
                          : i.src) || t.src,
                      title:
                        (null === (r = t.querySelector("img")) || void 0 === r
                          ? void 0
                          : r.alt) || t.alt,
                    });
                  }),
                    r.append(
                      this.stringToHTML(this.tmpl.thumbnails({ images: c }))
                    ),
                    r.querySelectorAll(".thumbnail").forEach(function (t) {
                      t.addEventListener("click", function () {
                        a.multiImageThumbnailsClick.call(
                          a,
                          t.dataset.index,
                          i,
                          r,
                          o
                        );
                      });
                    });
                },
              },
              {
                key: "multiImageThumbnailsClick",
                value: function multiImageThumbnailsClick(t, i, r, o) {
                  var a,
                    c = this,
                    l = i.imageNavigator;
                  null === (a = l.currentViewer) || void 0 === a || a.refresh(),
                    l.setMultiImageIndex(t),
                    l.viewers[r.dataset.key] &&
                      l.changeCurrentViewer(l.viewers[r.dataset.key][t]),
                    r.childNodes.forEach(function (r, o) {
                      Number(t) !== o
                        ? !r.classList.contains("thumbnail-container") &&
                          r.classList.add("js--hidden")
                        : (r.classList.remove("js--hidden"),
                          c.updateDownload(i, r.querySelector("img") || r));
                    }),
                    r.querySelectorAll(".thumbnail").forEach(function (i, r) {
                      Number(t) === r
                        ? (i.classList.add("active"), i.focus())
                        : i.classList.remove("active");
                    }),
                    this.updateTopInfo(i, o, t);
                },
              },
            ]),
            FigureViewer
          );
        })(VisualComponent);
      module.exports = FigureViewer;
    },
    function (t, i, r) {
      var o = r(11),
        a = r(189),
        c = o["__core-js_shared__"] || a("__core-js_shared__", {});
      t.exports = c;
    },
    function (t, i, r) {
      var o = r(11),
        a = Object.defineProperty;
      t.exports = function (t, i) {
        try {
          a(o, t, { value: i, configurable: !0, writable: !0 });
        } catch (r) {
          o[t] = i;
        }
        return i;
      };
    },
    function (t, i, r) {
      var o = r(9),
        a = r(21),
        c = r(23),
        l = r(14),
        u = r(97).CONFIGURABLE,
        h = r(191),
        d = r(37),
        p = d.enforce,
        v = d.get,
        g = Object.defineProperty,
        m =
          l &&
          !o(function () {
            return 8 !== g(function () {}, "length", { value: 8 }).length;
          }),
        y = String(String).split("String"),
        b = (t.exports = function (t, i, r) {
          "Symbol(" === String(i).slice(0, 7) &&
            (i = "[" + String(i).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            r && r.getter && (i = "get " + i),
            r && r.setter && (i = "set " + i),
            (!c(t, "name") || (u && t.name !== i)) &&
              (l ? g(t, "name", { value: i, configurable: !0 }) : (t.name = i)),
            m &&
              r &&
              c(r, "arity") &&
              t.length !== r.arity &&
              g(t, "length", { value: r.arity });
          try {
            r && c(r, "constructor") && r.constructor
              ? l && g(t, "prototype", { writable: !1 })
              : t.prototype && (t.prototype = void 0);
          } catch (t) {}
          var o = p(t);
          return (
            c(o, "source") ||
              (o.source = y.join("string" == typeof i ? i : "")),
            t
          );
        });
      Function.prototype.toString = b(function toString() {
        return (a(this) && v(this).source) || h(this);
      }, "toString");
    },
    function (t, i, r) {
      var o = r(10),
        a = r(21),
        c = r(188),
        l = o(Function.toString);
      a(c.inspectSource) ||
        (c.inspectSource = function (t) {
          return l(t);
        }),
        (t.exports = c.inspectSource);
    },
    function (t, i, r) {
      var o = r(36),
        a = r(10),
        c = r(76),
        l = r(137),
        u = r(16),
        h = a([].concat);
      t.exports =
        o("Reflect", "ownKeys") ||
        function ownKeys(t) {
          var i = c.f(u(t)),
            r = l.f;
          return r ? h(i, r(t)) : i;
        };
    },
    function (t, i) {
      t.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    function (t, i, r) {
      var o = {};
      (o[r(19)("toStringTag")] = "z"), (t.exports = "[object z]" === String(o));
    },
    function (t, i, r) {
      var o = r(14),
        a = r(264),
        c = r(24),
        l = r(16),
        u = r(39),
        h = r(112);
      i.f =
        o && !a
          ? Object.defineProperties
          : function defineProperties(t, i) {
              l(t);
              for (var r, o = u(i), a = h(i), d = a.length, p = 0; d > p; )
                c.f(t, (r = a[p++]), o[r]);
              return t;
            };
    },
    function (t, i, r) {
      var o = r(51),
        a = r(39),
        c = r(76).f,
        l = r(113),
        u =
          "object" == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [];
      t.exports.f = function getOwnPropertyNames(t) {
        return u && "Window" == o(t)
          ? (function (t) {
              try {
                return c(t);
              } catch (t) {
                return l(u);
              }
            })(t)
          : c(a(t));
      };
    },
    function (t, i) {
      var r = TypeError;
      t.exports = function (t) {
        if (t > 9007199254740991) throw r("Maximum allowed index exceeded");
        return t;
      };
    },
    function (t, i, r) {
      "use strict";
      var o = r(87),
        a = TypeError;
      t.exports = function (t, i) {
        if (!delete t[i])
          throw a("Cannot delete property " + o(i) + " of " + o(t));
      };
    },
    function (t, i, r) {
      "use strict";
      var o = r(26),
        a = r(68),
        c = r(29);
      t.exports = function fill(t) {
        for (
          var i = o(this),
            r = c(i),
            l = arguments.length,
            u = a(l > 1 ? arguments[1] : void 0, r),
            h = l > 2 ? arguments[2] : void 0,
            d = void 0 === h ? r : a(h, r);
          d > u;

        )
          i[u++] = t;
        return i;
      };
    },
    function (t, i, r) {
      var o = r(19),
        a = r(117),
        c = o("iterator"),
        l = Array.prototype;
      t.exports = function (t) {
        return void 0 !== t && (a.Array === t || l[c] === t);
      };
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(20),
        c = r(41),
        l = r(97),
        u = r(21),
        h = r(278),
        d = r(54),
        p = r(80),
        v = r(53),
        g = r(61),
        m = r(28),
        y = r(19),
        b = r(117),
        _ = r(279),
        w = l.PROPER,
        x = l.CONFIGURABLE,
        S = _.IteratorPrototype,
        k = _.BUGGY_SAFARI_ITERATORS,
        T = y("iterator"),
        returnThis = function () {
          return this;
        };
      t.exports = function (t, i, r, l, y, _, E) {
        h(r, i, l);
        var O,
          I,
          C,
          getIterationMethod = function (t) {
            if (t === y && R) return R;
            if (!k && t in P) return P[t];
            switch (t) {
              case "keys":
                return function keys() {
                  return new r(this, t);
                };
              case "values":
                return function values() {
                  return new r(this, t);
                };
              case "entries":
                return function entries() {
                  return new r(this, t);
                };
            }
            return function () {
              return new r(this);
            };
          },
          A = i + " Iterator",
          L = !1,
          P = t.prototype,
          N = P[T] || P["@@iterator"] || (y && P[y]),
          R = (!k && N) || getIterationMethod(y),
          j = ("Array" == i && P.entries) || N;
        if (
          (j &&
            (O = d(j.call(new t()))) !== Object.prototype &&
            O.next &&
            (c || d(O) === S || (p ? p(O, S) : u(O[T]) || m(O, T, returnThis)),
            v(O, A, !0, !0),
            c && (b[A] = returnThis)),
          w &&
            "values" == y &&
            N &&
            "values" !== N.name &&
            (!c && x
              ? g(P, "name", "values")
              : ((L = !0),
                (R = function values() {
                  return a(N, this);
                }))),
          y)
        )
          if (
            ((I = {
              values: getIterationMethod("values"),
              keys: _ ? R : getIterationMethod("keys"),
              entries: getIterationMethod("entries"),
            }),
            E)
          )
            for (C in I) (k || L || !(C in P)) && m(P, C, I[C]);
          else o({ target: i, proto: !0, forced: k || L }, I);
        return (
          (c && !E) || P[T] === R || m(P, T, R, { name: y }), (b[i] = R), I
        );
      };
    },
    function (t, i, r) {
      var o = r(9);
      t.exports = !o(function () {
        function F() {}
        return (
          (F.prototype.constructor = null),
          Object.getPrototypeOf(new F()) !== F.prototype
        );
      });
    },
    function (t, i) {
      t.exports = function (t, i) {
        return { value: t, done: i };
      };
    },
    function (t, i, r) {
      var o = r(113),
        a = Math.floor,
        mergeSort = function (t, i) {
          var r = t.length,
            c = a(r / 2);
          return r < 8
            ? insertionSort(t, i)
            : merge(t, mergeSort(o(t, 0, c), i), mergeSort(o(t, c), i), i);
        },
        insertionSort = function (t, i) {
          for (var r, o, a = t.length, c = 1; c < a; ) {
            for (o = c, r = t[c]; o && i(t[o - 1], r) > 0; ) t[o] = t[--o];
            o !== c++ && (t[o] = r);
          }
          return t;
        },
        merge = function (t, i, r, o) {
          for (var a = i.length, c = r.length, l = 0, u = 0; l < a || u < c; )
            t[l + u] =
              l < a && u < c
                ? o(i[l], r[u]) <= 0
                  ? i[l++]
                  : r[u++]
                : l < a
                ? i[l++]
                : r[u++];
          return t;
        };
      t.exports = mergeSort;
    },
    function (t, i, r) {
      var o = r(67).match(/AppleWebKit\/(\d+)\./);
      t.exports = !!o && +o[1];
    },
    function (t, i) {
      t.exports =
        "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
    },
    function (t, i, r) {
      var o = r(115),
        a = r(87),
        c = TypeError;
      t.exports = function (t) {
        if (o(t)) return t;
        throw c(a(t) + " is not a constructor");
      };
    },
    function (t, i, r) {
      var o = r(10),
        a = r(48),
        c = r(27),
        l = r(209),
        u = r(40),
        h = o(l),
        d = o("".slice),
        p = Math.ceil,
        createMethod = function (t) {
          return function (i, r, o) {
            var l,
              v,
              g = c(u(i)),
              m = a(r),
              y = g.length,
              b = void 0 === o ? " " : c(o);
            return m <= y || "" == b
              ? g
              : ((v = h(b, p((l = m - y) / b.length))).length > l &&
                  (v = d(v, 0, l)),
                t ? g + v : v + g);
          };
        };
      t.exports = { start: createMethod(!1), end: createMethod(!0) };
    },
    function (t, i, r) {
      "use strict";
      var o = r(47),
        a = r(27),
        c = r(40),
        l = RangeError;
      t.exports = function repeat(t) {
        var i = a(c(this)),
          r = "",
          u = o(t);
        if (u < 0 || u == 1 / 0) throw l("Wrong number of repetitions");
        for (; u > 0; (u >>>= 1) && (i += i)) 1 & u && (r += i);
        return r;
      };
    },
    function (t, i, r) {
      var o = r(9);
      t.exports = o(function () {
        if ("function" == typeof ArrayBuffer) {
          var t = new ArrayBuffer(8);
          Object.isExtensible(t) && Object.defineProperty(t, "a", { value: 8 });
        }
      });
    },
    function (t, i) {
      t.exports =
        Math.sign ||
        function sign(t) {
          var i = +t;
          return 0 == i || i != i ? i : i < 0 ? -1 : 1;
        };
    },
    function (t, i, r) {
      var o = r(10);
      t.exports = o((1).valueOf);
    },
    function (t, i, r) {
      var o = r(18),
        a = Math.floor;
      t.exports =
        Number.isInteger ||
        function isInteger(t) {
          return !o(t) && isFinite(t) && a(t) === t;
        };
    },
    function (t, i) {
      t.exports = function (t) {
        try {
          return { error: !1, value: t() };
        } catch (t) {
          return { error: !0, value: t };
        }
      };
    },
    function (t, i, r) {
      var o = r(18),
        a = r(51),
        c = r(19)("match");
      t.exports = function (t) {
        var i;
        return o(t) && (void 0 !== (i = t[c]) ? !!i : "RegExp" == a(t));
      };
    },
    function (t, i, r) {
      "use strict";
      var o = r(16);
      t.exports = function () {
        var t = o(this),
          i = "";
        return (
          t.hasIndices && (i += "d"),
          t.global && (i += "g"),
          t.ignoreCase && (i += "i"),
          t.multiline && (i += "m"),
          t.dotAll && (i += "s"),
          t.unicode && (i += "u"),
          t.unicodeSets && (i += "v"),
          t.sticky && (i += "y"),
          i
        );
      };
    },
    function (t, i, r) {
      var o = r(9),
        a = r(11).RegExp,
        c = o(function () {
          var t = a("a", "y");
          return (t.lastIndex = 2), null != t.exec("abcd");
        }),
        l =
          c ||
          o(function () {
            return !a("a", "y").sticky;
          }),
        u =
          c ||
          o(function () {
            var t = a("^r", "gy");
            return (t.lastIndex = 2), null != t.exec("str");
          });
      t.exports = { BROKEN_CARET: u, MISSED_STICKY: l, UNSUPPORTED_Y: c };
    },
    function (t, i, r) {
      var o = r(215),
        a = TypeError;
      t.exports = function (t) {
        if (o(t)) throw a("The method doesn't accept regular expressions");
        return t;
      };
    },
    function (t, i, r) {
      var o = r(19)("match");
      t.exports = function (t) {
        var i = /./;
        try {
          "/./"[t](i);
        } catch (r) {
          try {
            return (i[o] = !1), "/./"[t](i);
          } catch (t) {}
        }
        return !1;
      };
    },
    function (t, i, r) {
      "use strict";
      var o = r(151).charAt;
      t.exports = function (t, i, r) {
        return i + (r ? o(t, i).length : 1);
      };
    },
    function (t, i, r) {
      var o = r(97).PROPER,
        a = r(9),
        c = r(147);
      t.exports = function (t) {
        return a(function () {
          return !!c[t]() || "????????" !== "????????"[t]() || (o && c[t].name !== t);
        });
      };
    },
    function (t, i, r) {
      var o = r(11),
        a = r(9),
        c = r(139),
        l = r(22).NATIVE_ARRAY_BUFFER_VIEWS,
        u = o.ArrayBuffer,
        h = o.Int8Array;
      t.exports =
        !l ||
        !a(function () {
          h(1);
        }) ||
        !a(function () {
          new h(-1);
        }) ||
        !c(function (t) {
          new h(), new h(null), new h(1.5), new h(t);
        }, !0) ||
        a(function () {
          return 1 !== new h(new u(2), 1, void 0).length;
        });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, i, r) {
      var o = r(17),
        a = r(1),
        c = r(2),
        l = r(49),
        u = r(5),
        h = r(4),
        d = r(0);
      function _createSuper(t) {
        var i = (function _isNativeReflectConstruct() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var r,
            o = d(t);
          if (i) {
            var a = d(this).constructor;
            r = Reflect.construct(o, arguments, a);
          } else r = o.apply(this, arguments);
          return h(this, r);
        };
      }
      var p = r(364),
        v = r(131),
        g = r(132),
        m = r(66),
        y = m.BehaviorFixedHeader,
        b = m.BehaviorTab,
        _ = m.CollapsibleFigures,
        w = m.CollapsibleText,
        x = r(177),
        S = r(180),
        k = r(181),
        T = r(367),
        E = r(184),
        O = r(185),
        I = r(186),
        C = r(59),
        A = r(187),
        L = (function (t) {
          "use strict";
          u(ArticleView, t);
          var i = _createSuper(ArticleView);
          function ArticleView(t, r, o) {
            var c;
            return (
              a(this, ArticleView),
              ((c = i.call(this)).source = t),
              (c.config = r),
              (c.mathJax = {
                config: "\n                MathJax.Hub.Config(".concat(
                  JSON.stringify(r.mathJax.config),
                  ");\n                // bubbles click on document since mathJax stops the propagation...\n                // not the best solution though...\n                MathJax.Hub.signal.Interest(function(m){\n                    if(m[0] === 'math zoomed') {\n                        document.dispatchEvent(new Event('click'))\n                    }\n                });\n            "
                ),
                src: r.mathJax.src,
              }),
              (c.s = r.classNames),
              (c.fixedMargins = r.fixedMargins),
              (c.topOffset = r.topOffset),
              c.enhanceAnchors(),
              (c.articleFixedHeader = y
                ? new y(r.articlePageHeader, c.s)
                : null),
              (c.pill = k ? new k(t.data, l(c), r, o) : null),
              (c.sectionNavbar = E ? new E(t.data, l(c), r) : null),
              c.config.isInEditor
                ? h(c)
                : ((c.mobileSticky = S ? new S(l(c), r) : null),
                  (c.stHeader = O ? new O(l(c), r) : null),
                  c.config.enableMultiRefPopUp &&
                    (c.referencesPopup = T ? new T(t.data, l(c), r) : null),
                  (c.viewer = A ? new A(t.data, l(c), r, o) : null),
                  (c.crossmark = p ? new p(l(c), o.crossmarkDialogTmpl) : null),
                  (c.vC = new C()),
                  (c.heroImagery = c
                    .getArticle()
                    .querySelector(".core-hero-imagery img")),
                  c)
            );
          }
          return (
            c(ArticleView, [
              {
                key: "initiate",
                value: function initiate() {
                  if (
                    (this.tabbedAbstracts(),
                    document.body.querySelector(
                      '[data-core-tabs="relations"]'
                    ) && this.tabbedArticleRelations(),
                    document.body.querySelector(
                      ".relation [data-toggle-btn]"
                    ) && this.compoundArticleRelations(),
                    document.body.querySelector(
                      ".inline-core-relations [data-toggle-btn]"
                    ) && this.inlineArticleRelations(),
                    this.hideSectionsNavbarIfNoSectionsExist &&
                      (this.hideSectionsNavbarIfNoSectionsExist =
                        0 === this.source.data.sections.length),
                    this.stHeader)
                  )
                    try {
                      this.stHeader.initiate();
                    } catch (t) {
                      console.error("Sticky header - initiate:", t);
                    }
                  if (this.pill)
                    try {
                      this.pill.initiate();
                    } catch (t) {
                      console.error("Collateral - initiate:", t);
                    }
                  if (this.sectionNavbar)
                    try {
                      this.sectionNavbar.initiate();
                    } catch (t) {
                      console.error("Section navbar - initiate:", t);
                    }
                  if (this.mobileSticky)
                    try {
                      this.mobileSticky.initiate();
                    } catch (t) {
                      console.error("Mobile sticky - initiate:", t);
                    }
                  if (this.viewer)
                    try {
                      this.viewer.initiate();
                    } catch (t) {
                      console.error("Figure viewer - initiate:", t);
                    }
                  var t = document.getElementById("brightcove-template");
                  t && document.body.appendChild(t.content.cloneNode(!0)),
                    this.referencesPopup && this.referencesPopup.initiate(),
                    this.crossmark && this.crossmark.initiate(),
                    this.initEnhancers(),
                    (this.responsiveController =
                      this.responsiveController.bind(this)),
                    (this.toCitationTarget = this.toCitationTarget.bind(this)),
                    (this.onToCitationClick =
                      this.onToCitationClick.bind(this)),
                    (this.goToTarget = this.goToTarget.bind(this)),
                    this.addEventListeners(),
                    this.initResponsiveController(),
                    this.loadContentModifiers();
                },
              },
              {
                key: "initEnhancers",
                value: function initEnhancers() {
                  try {
                    this.enhanceMarkup();
                  } catch (t) {
                    console.error("Article view - enhance markup:", t);
                  }
                  try {
                    this.enhanceAuthors();
                  } catch (t) {
                    console.error("Article view - enhance authors:", t);
                  }
                  try {
                    this.enhanceFigures();
                  } catch (t) {
                    console.error("Article view - enhance figure:", t);
                  }
                  try {
                    this.truncateCitations();
                  } catch (t) {
                    console.error("Article view - truncate citations:", t);
                  }
                  try {
                    this.truncateCoreProducts();
                  } catch (t) {
                    console.error("Article view - truncate core products:", t);
                  }
                },
              },
              {
                key: "enhanceAnchors",
                value: function enhanceAnchors() {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.config.enhancements.bodyPrefix,
                    i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.config.enhancements.prefix,
                    r = this.source.data,
                    o = r.citations,
                    a = r.footnotes,
                    c = r.tables;
                  this.config.anchorEnhancements.citations &&
                    (o.forEach(function (r) {
                      var o;
                      null === (o = r.points) ||
                        void 0 === o ||
                        o.forEach(function (o, a) {
                          (o.id =
                            t + r.id + (r.points.length > 1 ? "-" + ++a : "")),
                            o.getAttribute("href-manipulated") ||
                              ((o.href = "#".concat(i + r.id)),
                              o.setAttribute("href-manipulated", !0)),
                            o.addEventListener("click", function () {
                              var t = window.location.href;
                              history.replaceState({}, "", o.href),
                                history.replaceState({}, "", t);
                            });
                        });
                    }),
                    (this.source.data.figures = this.source.processors.figures(
                      this.source.article
                    )),
                    (this.source.data.tables = this.source.processors.tables(
                      this.source.article
                    ))),
                    this.config.anchorEnhancements.footnotes &&
                      a.forEach(function (i) {
                        var r;
                        null === (r = i.points) ||
                          void 0 === r ||
                          r.forEach(function (r, o) {
                            r.id =
                              t + i.id + (i.points.length > 1 ? "-" + ++o : "");
                          });
                      }),
                    this.config.anchorEnhancements.tables &&
                      c.forEach(function (t) {
                        var i = t.ref.querySelector("table");
                        i && (t.content = i.outerHTML);
                      });
                },
              },
              {
                key: "initResponsiveController",
                value: function initResponsiveController() {
                  var t = this;
                  t.responsiveController(),
                    window
                      .matchMedia(
                        "(max-width: " + this.config.mobileBreakpoint + "px)"
                      )
                      .addEventListener(
                        "change",
                        function handleOrientationChange(i) {
                          t.responsiveController(),
                            i.matches
                              ? ($(document).trigger("screen-md-off"),
                                $(document).trigger("smartResize"))
                              : ($(document).trigger("screen-md-on"),
                                $(document).trigger("smartResize"));
                        }
                      );
                },
              },
              {
                key: "addEventListeners",
                value: function addEventListeners() {
                  window.addEventListener("resize", this.dispatch, {
                    passive: !0,
                  }),
                    window.addEventListener("scroll", this.dispatch, {
                      passive: !0,
                    }),
                    document.body.addEventListener(
                      "click",
                      this.dispatchAnchorsAction
                    ),
                    window.addEventListener(
                      "keydown",
                      this.dispatchAnchorsAction
                    );
                },
              },
              {
                key: "loadContentModifiers",
                value: function loadContentModifiers() {
                  this.loadMathJax(),
                    this.linkBackReferences(),
                    this.linkBackFootnotes(),
                    this.manageInterlinksScroll();
                  try {
                    new v(
                      "[data-extent='backmatter']",
                      '[aria-haspopup="true"]',
                      !1,
                      function (t) {
                        return t
                          .closest('.citations, .labeled[role="doc-footnote"]')
                          .classList.toggle("expanded");
                      }
                    );
                  } catch (t) {
                    console.error(
                      "Initiate dropdown behavior for citations in backmatter",
                      t
                    );
                  }
                  try {
                    this.smartTables = new g(
                      this.config.smartTables,
                      this.source.data.tables
                    );
                  } catch (t) {
                    console.error("Initiate tables behavior enhancer", t);
                  }
                },
              },
              {
                key: "getArticle",
                value: function getArticle() {
                  return this.source.article;
                },
              },
              {
                key: "loadMathJax",
                value: function loadMathJax() {
                  if (this.getArticle().querySelector('math, [role="math"]')) {
                    var t = document.createElement("script");
                    (t.type = "text/javascript"),
                      (t.src = this.mathJax.src),
                      t.setAttribute("data-ot-ignore", "");
                    var i = this.mathJax.config;
                    window.opera ? (t.innerHTML = i) : (t.text = i),
                      document.getElementsByTagName("head")[0].appendChild(t);
                    var r = this;
                    t.addEventListener("load", function () {
                      r.mathJaxState();
                    });
                  }
                },
              },
              {
                key: "initiateMathJax",
                value: function initiateMathJax(t) {
                  this.subscribe("mathLoaded", function () {
                    try {
                      document.body.querySelector('article [role="math"]') &&
                        MathJax.Hub.Queue(["Typeset", MathJax.Hub, t]);
                    } catch (i) {
                      console.error(
                        "Error initiating MathJax in the " + t + ":",
                        i
                      );
                    }
                  });
                },
              },
              {
                key: "mathJaxState",
                value: function mathJaxState() {
                  this.dispatch("mathLoaded");
                },
              },
              {
                key: "responsiveController",
                value: function responsiveController() {
                  window.innerWidth > this.config.mobileBreakpoint
                    ? this.toDesktopState()
                    : this.toMobileState();
                },
              },
              {
                key: "toMobileState",
                value: function toMobileState() {
                  this.dispatch("mobileOn");
                },
              },
              {
                key: "toDesktopState",
                value: function toDesktopState() {
                  this.dispatch("mobileOff");
                },
              },
              {
                key: "addTopOverlay",
                value: function addTopOverlay(t) {
                  this.topOffset += t;
                },
              },
              {
                key: "subtractTopOverlay",
                value: function subtractTopOverlay() {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  this.topOffset = Math.max(this.topOffset - t, 0);
                },
              },
              {
                key: "getTopOverlayHeight",
                value: function getTopOverlayHeight() {
                  if (this.heroImagery) {
                    var t,
                      i =
                        null === (t = this.heroImagery) || void 0 === t
                          ? void 0
                          : t.getBoundingClientRect();
                    return (
                      this.topOffset +
                      this.config.fixedMargins.y +
                      Math.min(Math.max(i.height, 0), Math.max(i.bottom, 0))
                    );
                  }
                  return this.topOffset + this.config.fixedMargins.y;
                },
              },
              {
                key: "linkBackFootnotes",
                value: function linkBackFootnotes() {
                  var t = this,
                    i =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "";
                  try {
                    this.source.data.footnotes.forEach(function (r) {
                      return r && t.linkBackRef(r, "footnote", i);
                    });
                  } catch (t) {
                    console.error("Link back footnotes:", t);
                  }
                },
              },
              {
                key: "linkBackReferences",
                value: function linkBackReferences() {
                  var t = this,
                    i =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.config.enhancements.prefix;
                  try {
                    this.source.data.citations.forEach(function (r) {
                      return r && t.linkBackRef(r, "citation", i);
                    });
                  } catch (t) {
                    console.error("Link back citations:", t);
                  }
                },
              },
              {
                key: "linkBackRef",
                value: function linkBackRef(t, i, r, o) {
                  var a = this,
                    c =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : "",
                    l = t.ref,
                    u = t.points,
                    h = t.processedPoints;
                  if (l && t.id) {
                    var d = document.body.querySelectorAll(
                      '[href="#' + r + (l.id || t.id) + '"]'
                    );
                    if (0 !== u.length || 0 !== d.length) {
                      var p,
                        v,
                        g = l.parentElement,
                        m = g.id,
                        y =
                          "" === l.id
                            ? this.config.enhancements.bodyPrefix + t.id
                            : y,
                        b = u || d;
                      if (
                        (b.length > 1 &&
                          ((y = "to-citation__accordion-".concat(m).concat(c)),
                          (b = h)),
                        (null === (p = b) || void 0 === p ? void 0 : p.length) >
                          1)
                      ) {
                        var _ = document.getElementById("toCitationAccordion"),
                          w = (v = _.content.cloneNode(!0)).querySelector(
                            "[aria-controls]"
                          );
                        w.setAttribute("aria-controls", y),
                          w
                            .querySelector("span")
                            .setAttribute(
                              "data-expand-title",
                              _.getAttribute("data-collapse-" + i)
                            ),
                          w
                            .querySelector("span")
                            .setAttribute(
                              "data-collapsed-title",
                              _.getAttribute("data-expand-" + i)
                            ),
                          v
                            .querySelector(".to-citation__accordion")
                            .setAttribute("id", y);
                        var x = v.querySelector("ul");
                        b.forEach(function (t) {
                          var i = document
                              .getElementById("toCitationAccordionItem")
                              .content.cloneNode(!0),
                            r = i.querySelector(".to-citation");
                          (r.href = t.href),
                            (r.querySelector("span").innerHTML = t.content),
                            x.appendChild(i);
                        });
                      } else if (y) {
                        var S = document.getElementById("toCitationLink");
                        (v = S.content.cloneNode(!0))
                          .querySelector("a")
                          .setAttribute("href", "#" + y),
                          (v.querySelector("span").innerHTML +=
                            " " + S.getAttribute("data-" + i));
                      } else {
                        var k = document.getElementById("toCitationButton");
                        (v = k.content.cloneNode(!0)).querySelector(
                          "span"
                        ).innerHTML += " " + k.getAttribute("data-" + i);
                      }
                      var T = (o || l).querySelector(".external-links");
                      T ||
                        (l.insertAdjacentHTML(
                          "beforeend",
                          '<div class="external-links"></div>'
                        ),
                        (T = l.querySelector(".external-links"))),
                        T.insertBefore(v, T.firstElementChild || null);
                      var E = T.firstElementChild,
                        O = E.querySelector(".to-citation__accordion");
                      if (O)
                        O.querySelectorAll(".to-citation").forEach(function (
                          t,
                          i
                        ) {
                          (t.pointsTo = b[i].pointsTo),
                            (t.refParent = l),
                            t.addEventListener("click", function (t) {
                              return a.onToCitationClick(t);
                            });
                        });
                      else {
                        if (((E.refParent = l), (E.points = b), !b.length))
                          return;
                        E.addEventListener("click", function (t) {
                          return a.onToCitationClick(t);
                        });
                      }
                      O && T.appendChild(O);
                    }
                  }
                },
              },
              {
                key: "onToCitationClick",
                value: function onToCitationClick(t) {
                  var i = t.currentTarget.pointsTo;
                  if (!i) {
                    if (
                      !t.currentTarget.refParent ||
                      t.currentTarget.classList.contains("disabled")
                    )
                      return;
                    i = this.toCitationTarget(t);
                  }
                  i &&
                    (this.dispatch({
                      type: "articleInnerTargetOpen",
                      target: i,
                    }),
                    this.animateTo(i));
                },
              },
              {
                key: "animateTo",
                value: function animateTo(t) {
                  var i = this;
                  "FIGURE" === t.tagName &&
                    this.config.enhancements.focusOnWrapper &&
                    (t = t.closest(".figure-wrap"));
                  var r = this.getTopOverlayHeight();
                  $("html, body").animate(
                    { scrollTop: this.getElementPosition(t).top - r },
                    500,
                    function () {
                      i.focusTarget(t);
                    }
                  );
                },
              },
              {
                key: "toCitationTarget",
                value: function toCitationTarget(t) {
                  if (t.currentTarget.points) return t.currentTarget.points[0];
                },
              },
              {
                key: "getElementPosition",
                value: function getElementPosition(t) {
                  var i = t.getBoundingClientRect(),
                    r = document.body,
                    o = document.documentElement,
                    a = window.pageYOffset || o.scrollTop || r.scrollTop,
                    c = window.pageXOffset || o.scrollLeft || r.scrollLeft,
                    l = o.clientTop || r.clientTop || 0,
                    u = o.clientLeft || r.clientLeft || 0,
                    h = i.top + a - l,
                    d = i.left + c - u;
                  return { top: Math.round(h), left: Math.round(d) };
                },
              },
              {
                key: "goToTarget",
                value: function goToTarget(t) {
                  if (
                    t.currentTarget.hash &&
                    t.currentTarget.origin === document.location.origin
                  ) {
                    var i = this.getArticle().querySelector(
                      t.currentTarget.hash
                    );
                    i &&
                      (this.dispatch({
                        type: "articleInnerTargetOpen",
                        target: i,
                      }),
                      this.animateTo(i));
                  }
                },
              },
              {
                key: "focusTarget",
                value: function focusTarget(t) {
                  var i = this;
                  t.classList.add(this.s.FOCUSED),
                    document.body.addEventListener(
                      "focusout",
                      function () {
                        t.classList.remove(i.s.FOCUSED);
                      },
                      { once: !0 }
                    ),
                    document.body.addEventListener(
                      "click",
                      function () {
                        t.classList.remove(i.s.FOCUSED);
                      },
                      { once: !0 }
                    ),
                    t.focus();
                },
              },
              {
                key: "manageInterlinksScroll",
                value: function manageInterlinksScroll() {
                  this.subscribeAnchorClick(
                    "a:not(.open-in-viewer)",
                    this.goToTarget
                  );
                },
              },
              {
                key: "isAccessDenial",
                value: function isAccessDenial() {
                  return "no" === this.source.data.access;
                },
              },
              {
                key: "truncateCitations",
                value: function truncateCitations() {
                  this.config.collapsible.citations.enabled &&
                    new w(
                      this.config.collapsible.citations,
                      "citations_truncate_template",
                      this.getArticle()
                    );
                },
              },
              {
                key: "truncateCoreProducts",
                value: function truncateCoreProducts() {
                  this.config.collapsible.coreProducts.enabled &&
                    new w(
                      this.config.collapsible.coreProducts,
                      "products_truncate_template",
                      this.getArticle()
                    );
                },
              },
              {
                key: "enhanceAuthors",
                value: function enhanceAuthors() {
                  var t = this,
                    i = this.getArticle().querySelector(
                      this.config.contributors.byline.CONTRIBUTORS
                    );
                  if (i) {
                    var r = new Event("authorsHide"),
                      o = new Event("authorsReveal");
                    i.querySelectorAll("[data-action]").forEach(function (a) {
                      var c,
                        l = o;
                      "hide" ===
                        (null === (c = a.dataset) || void 0 === c
                          ? void 0
                          : c.action) && (l = r),
                        a.setAttribute("tabindex", "0"),
                        a.addEventListener("keypress", function (t) {
                          var r = t.keyCode || t.which;
                          (13 !== r && 32 !== r) || i.dispatchEvent(l);
                        }),
                        a.addEventListener("click", function (t) {
                          return i.dispatchEvent(l);
                        });
                      var u = a.closest(t.config.contributors.byline.DISPLAYED);
                      if (u) {
                        var h = u.getAttribute("data-displayed-on"),
                          d = u.getAttribute("data-on-display") || "none";
                        i.addEventListener("authorsHide", function (t) {
                          return u.setAttribute("data-displayed-on", h);
                        }),
                          i.addEventListener("authorsReveal", function (t) {
                            return u.setAttribute("data-displayed-on", d);
                          });
                      }
                    }),
                      i
                        .querySelectorAll(
                          this.config.contributors.byline.HIDDEN
                        )
                        .forEach(function (t) {
                          var r = t.getAttribute("data-hidden-on");
                          i.addEventListener("authorsHide", function (i) {
                            return t.setAttribute("data-hidden-on", r);
                          }),
                            i.addEventListener("authorsReveal", function (i) {
                              return t.setAttribute("data-hidden-on", "none");
                            });
                        });
                  }
                },
              },
              {
                key: "enhanceFigures",
                value: function enhanceFigures() {
                  var t = this,
                    i = this.source.data,
                    r = i.figures,
                    a = i.tables,
                    c =
                      this.config.figureViewer.viewerTrigger ||
                      "open-in-viewer";
                  this.config.enhancements.openInViewerFromBodyLinks.images &&
                    o(r).forEach(function (i) {
                      var r = i.id;
                      t.getArticle()
                        .querySelectorAll(
                          "[href='#".concat(r, "']:not(.").concat(c, ")")
                        )
                        .forEach(function (t) {
                          return t.classList.add(c);
                        });
                    }),
                    this.config.enhancements.openInViewerFromBodyLinks.tables &&
                      o(a).forEach(function (i) {
                        var r = i.id;
                        t.getArticle()
                          .querySelectorAll(
                            "[href='#".concat(r, "']:not(.").concat(c, ")")
                          )
                          .forEach(function (t) {
                            return t.classList.add(c);
                          });
                      });
                },
              },
              {
                key: "enhanceMarkup",
                value: function enhanceMarkup() {
                  var t = this;
                  if (this.viewer) {
                    var i = this.source.data,
                      r = function addButton(i, r, o) {
                        var a = document
                            .getElementById("figure_nav_template")
                            .content.cloneNode(!0),
                          c = a.querySelector(".open-in-viewer");
                        c.setAttribute("href", "#" + (o || i.id)),
                          (c.dataset.index = r);
                        var l = i.ref.parentNode.querySelector(
                          t.config.figureViewer.selectors.figureBtn
                        );
                        if (!l) {
                          if (i.multiImages)
                            return void i.multiImages.forEach(function (t, r) {
                              return addButton(t, r, i.id);
                            });
                          l = i.ref.parentNode;
                        }
                        l.appendChild(a);
                      };
                    i.figures.map(function (i) {
                      var o = t.config.figureViewer;
                      (o.enablePreventFor &&
                        i.ref.getAttribute(o.preventFor.attribute) ===
                          o.preventFor.values) ||
                        r(i, 0);
                    }),
                      i.tables.map(function (t) {
                        return r(t, 0);
                      });
                  }
                  this.config.collapsible.enabled &&
                    this.importCollapsableModule(this.source.data);
                },
              },
              {
                key: "tabbedAbstracts",
                value: function tabbedAbstracts() {
                  var t = this.getArticle().querySelector(
                    '[data-core-tabs="abstracts"]'
                  );
                  try {
                    new b(t, this.config.tabs.abstracts),
                      null == t || t.setAttribute("data-core", "tabs");
                  } catch (t) {
                    console.error("Tabbed abstracts:", t);
                  }
                },
              },
              {
                key: "tabbedArticleRelations",
                value: function tabbedArticleRelations() {
                  var t = this.getArticle().querySelector(".core-relations");
                  try {
                    new b(t, this.config.tabs.articleRelations);
                  } catch (t) {
                    console.error("Tabbed article relations: ", t);
                  }
                },
              },
              {
                key: "compoundArticleRelations",
                value: function compoundArticleRelations() {
                  try {
                    new I(".core-relations .relation");
                  } catch (t) {
                    console.error("Compound article relations: ", t);
                  }
                },
              },
              {
                key: "inlineArticleRelations",
                value: function inlineArticleRelations() {
                  try {
                    new I(
                      ".inline-core-relations",
                      "[data-toggle-btn]",
                      "[data-toggle-area]",
                      !0
                    );
                  } catch (t) {
                    console.error("Inline article relations: ", t);
                  }
                },
              },
              {
                key: "importCollapsableModule",
                value: function importCollapsableModule(t) {
                  this.config.collapsible.figures.enabled &&
                    ((this.collapsibleFigures = new _(
                      t.figures,
                      this.config.collapsible.figures
                    )),
                    this.collapsibleFigures.init()),
                    this.config.collapsible.tables.enabled &&
                      ((this.collapsibleTables = new _(
                        t.tables,
                        this.config.collapsible.tables
                      )),
                      this.collapsibleTables.init());
                },
              },
            ]),
            ArticleView
          );
        })(x);
      t.exports = L;
    },
    function (t, i, r) {
      var o = r(1),
        a = r(2),
        c = r(179).debounce,
        l = (function () {
          "use strict";
          function FixedHeaderBehavior(t, i) {
            o(this, FixedHeaderBehavior),
              (this.config = t),
              (this.s = i),
              (this.header = document.querySelectorAll(t.selector)),
              0 !== this.header.length && this._removeFixedStatus();
          }
          return (
            a(FixedHeaderBehavior, [
              {
                key: "trackWindowScroll",
                value: function trackWindowScroll(t, i, r) {
                  c(this._controlFixedHeaderVisibility(t, i), 250, !0),
                    r && c(r(), 250);
                },
              },
              {
                key: "_removeFixedStatus",
                value: function _removeFixedStatus() {
                  var t = this;
                  this.config.removeFixedStatus &&
                    this.header.forEach(function (i) {
                      i.classList.remove(t.s.FIXED),
                        i.style.setProperty(
                          "position",
                          "relative",
                          "important"
                        ),
                        i.style.setProperty("top", "0");
                    });
                },
              },
              {
                key: "_controlFixedHeaderVisibility",
                value: function _controlFixedHeaderVisibility(t, i) {
                  var r,
                    o = this;
                  if (!t) return !1;
                  var a = (
                      null ===
                        (r =
                          i.querySelector(this.config.boundingClientSelector) ||
                          document.body.querySelector(
                            this.config.boundingClientSelector
                          )) || void 0 === r
                        ? void 0
                        : r.getBoundingClientRect()
                    ).bottom,
                    c = t.classList.contains(this.s.JS_VISIBLE),
                    l = this.header[0] ? this.header[0].offsetHeight : 0;
                  return (
                    (a += this.config.boundingSpacer) - l < 0 &&
                      !c &&
                      setTimeout(function () {
                        var i;
                        o.config.hideOnScroll &&
                          (null === (i = o.header) ||
                            void 0 === i ||
                            i.forEach(function (t) {
                              return t.classList.add(o.s.JS_HIDDEN);
                            })),
                          t.classList.add(o.s.JS_VISIBLE);
                      }, 0),
                    a - l >= 0 &&
                      c &&
                      setTimeout(function () {
                        var i;
                        o.config.hideOnScroll &&
                          (null === (i = o.header) ||
                            void 0 === i ||
                            i.forEach(function (t) {
                              return t.classList.remove(o.s.JS_HIDDEN);
                            })),
                          t.classList.remove(o.s.JS_VISIBLE);
                      }, 250),
                    !0
                  );
                },
              },
            ]),
            FixedHeaderBehavior
          );
        })();
      t.exports = l;
    },
    function (t, i, r) {
      var o = r(17),
        a = r(1),
        c = r(2),
        l = (function () {
          "use strict";
          function TabBehavior(t, i) {
            a(this, TabBehavior),
              t &&
                ((this.config = i),
                (this.buttonSelector = i.buttonSelector),
                (this.closeIfActive = i.closeIfActive),
                (this.enableArrowKeysTabs = i.enableArrowKeysTabs),
                (this.paneHeader = i.paneHeader),
                (this.paneSelector = i.paneSelector),
                (this.triggerFirst = i.triggerFirst),
                (this.tablistNode = null),
                (this.tabs = t.querySelectorAll(this.buttonSelector)),
                (this.tabpanels = t.querySelectorAll(this.paneSelector)),
                (this.firstTab = null),
                (this.lastTab = null),
                (this.wrapper = t),
                (this.append =
                  null == t ? void 0 : t.querySelector(i.appendSelector)),
                this.initialize());
          }
          return (
            c(TabBehavior, [
              {
                key: "initialize",
                value: function initialize() {
                  0 === this.tabs.length
                    ? this._createTabList()
                    : this.buttonSelector && this._hydrateTabList(),
                    this._hydrateTabPanels(),
                    this.triggerFirst && this.setSelectedTab(this.firstTab);
                  var t = this.wrapper.id || this.config.id || "default";
                  this.wrapper.setAttribute("data-core-tabs", t);
                },
              },
              {
                key: "_createTabList",
                value: function _createTabList() {
                  var t = this;
                  if (this.tabpanels.length > 1 && this.paneHeader) {
                    var i = document.createElement("div");
                    i.setAttribute("role", "tablist"),
                      o(this.tabpanels).forEach(function (r) {
                        var o = r.querySelector(t.paneHeader);
                        o.setAttribute("data-core", "tabHeader");
                        var a = document.createElement("button");
                        a.setAttribute("aria-controls", r.id),
                          a.setAttribute("role", "tab"),
                          (a.innerHTML = o.textContent || o.innerText),
                          i.appendChild(a);
                      }),
                      this.append
                        ? this.wrapper.insertBefore(i, this.append.nextSibling)
                        : this.wrapper.prepend(i),
                      (this.tablistNode = i),
                      (this.tabs = Array.from(
                        this.tablistNode.querySelectorAll("[role=tab]")
                      ));
                  }
                },
              },
              {
                key: "_hydrateTabList",
                value: function _hydrateTabList() {
                  (this.tablistNode = this.tabs[0].parentNode),
                    this.tablistNode.setAttribute("role", "tablist"),
                    (this.tabs = Array.from(
                      this.tablistNode.querySelectorAll("[role=tab]")
                    ));
                },
              },
              {
                key: "_hydrateTabButton",
                value: function _hydrateTabButton(t) {
                  (t.tabIndex = -1),
                    t.setAttribute("aria-selected", "false"),
                    t.addEventListener("keydown", this.onKeydown.bind(this)),
                    t.addEventListener("click", this.onClick.bind(this));
                },
              },
              {
                key: "_hydrateTabPane",
                value: function _hydrateTabPane(t) {
                  (t.tabIndex = -1), t.setAttribute("role", "tabpanel");
                  var i = o(t.childNodes);
                  return t.notAvailable || 0 === i.length;
                },
              },
              {
                key: "_hydrateTabPanels",
                value: function _hydrateTabPanels() {
                  for (
                    var t = 0 === this.tabpanels.length, i = 0;
                    i < this.tabs.length;
                    i += 1
                  ) {
                    var r = this.tabs[i];
                    this._hydrateTabButton(r),
                      this.firstTab || (this.firstTab = r),
                      (this.lastTab = r);
                    var o = r.getAttribute("aria-controls"),
                      a =
                        this.wrapper.querySelector(o) ||
                        this.wrapper.querySelector("#" + o);
                    this._hydrateTabPane(a) &&
                      (r.classList.add("inactive"),
                      r.setAttribute("aria-disabled", "true")),
                      t && this.tabpanels.push(a);
                  }
                },
              },
              {
                key: "setSelectedTab",
                value: function setSelectedTab(t, i) {
                  for (
                    var r = this,
                      o = function disable(t, i) {
                        t.setAttribute("aria-selected", "false"),
                          t.classList.remove("active"),
                          (t.tabIndex = -1),
                          (r.tabpanels[i].tabIndex = -1);
                      },
                      a = function enable(t, i) {
                        t.classList.add("active"),
                          t.setAttribute("aria-selected", "true"),
                          t.removeAttribute("tabindex"),
                          (r.tabpanels[i].tabIndex = 0);
                      },
                      c = 0;
                    c < this.tabs.length;
                    c += 1
                  ) {
                    var l = this.tabs[c];
                    if (t === l)
                      t.classList.contains("inactive")
                        ? this.eventKeys(t, i)
                        : t.classList.contains("active") && this.closeIfActive
                        ? o(l, c)
                        : (a(l, c),
                          2 === this.tabs.length &&
                            c === this.tabs.length - 1 &&
                            this.tabs[0].classList.contains("inactive") &&
                            (this.enableLastOne = !0));
                    else {
                      if (this.enableLastOne)
                        return void (this.enableLastOne = !1);
                      o(l, c);
                    }
                  }
                },
              },
              {
                key: "moveFocusToTab",
                value: function moveFocusToTab(t, i) {
                  t.focus(), this.setSelectedTab(t, i);
                },
              },
              {
                key: "moveFocusToPreviousTab",
                value: function moveFocusToPreviousTab(t, i) {
                  var r;
                  t === this.firstTab
                    ? this.moveFocusToTab(this.lastTab, i)
                    : ((r = this.tabs.indexOf(t)),
                      this.moveFocusToTab(this.tabs[r - 1], i));
                },
              },
              {
                key: "moveFocusToNextTab",
                value: function moveFocusToNextTab(t, i) {
                  var r;
                  t === this.lastTab
                    ? this.moveFocusToTab(this.firstTab, i)
                    : ((r = this.tabs.indexOf(t)),
                      this.moveFocusToTab(this.tabs[r + 1], i));
                },
              },
              {
                key: "eventKeys",
                value: function eventKeys(t, i) {
                  var r = !1;
                  switch (i) {
                    case "ArrowLeft":
                      this.moveFocusToPreviousTab(t, "ArrowLeft"), (r = !0);
                      break;
                    case "ArrowRight":
                      this.moveFocusToNextTab(t, "ArrowRight"), (r = !0);
                      break;
                    case "Home":
                      this.moveFocusToTab(this.firstTab, "ArrowRight"),
                        (r = !0);
                      break;
                    case "End":
                      this.moveFocusToTab(this.lastTab, "ArrowLeft"), (r = !0);
                  }
                  return r;
                },
              },
              {
                key: "onKeydown",
                value: function onKeydown(t) {
                  this.eventKeys(t.currentTarget, t.key) &&
                    (t.stopPropagation(), t.preventDefault());
                },
              },
              {
                key: "onClick",
                value: function onClick(t) {
                  this.setSelectedTab(t.currentTarget);
                },
              },
            ]),
            TabBehavior
          );
        })();
      t.exports = l;
    },
    function (t, i, r) {
      var o = r(1),
        a = r(2),
        c = (function () {
          "use strict";
          function CollapsibleFigures(t, i) {
            o(this, CollapsibleFigures), (this.figures = t), (this.config = i);
          }
          return (
            a(CollapsibleFigures, [
              {
                key: "init",
                value: function init() {
                  (this.wrapClass = this.config.wrap),
                    (this.collapsedHeight = this.config.height),
                    this._makeCollapsibleElements();
                },
              },
              {
                key: "_makeCollapsibleElements",
                value: function _makeCollapsibleElements() {
                  var t = this;
                  this.figures.map(function (i) {
                    var r = i.ref.querySelectorAll(t.wrapClass);
                    if (r.length > 0) {
                      var o = i.ref.querySelector("collapsible-wrapper");
                      try {
                        var a;
                        !o &&
                          (null === (a = r[0]) || void 0 === a
                            ? void 0
                            : a.offsetHeight) > parseInt(t.collapsedHeight) &&
                          ((o = document.createElement("div")).classList.add(
                            "collapsible-wrapper"
                          ),
                          r[0].parentNode.insertBefore(o, r[0]),
                          r.forEach(function (t) {
                            return o.appendChild(t);
                          }));
                      } catch (t) {
                        console.error("Add collapsible wrapper", t);
                      }
                      if (!o) return;
                      !(function handleTableExpand(i) {
                        var a = !1,
                          c = document.getElementById(
                            "collapsible_tables_collapse_template"
                          ),
                          l = o.parentNode.querySelector(
                            ".collapsible-figure-btn"
                          );
                        null == i || i.preventDefault(),
                          null == i || i.stopPropagation(),
                          l && ((a = !0), l.parentNode.remove()),
                          o.classList.contains("collapsed")
                            ? (o.classList.remove("collapsed"),
                              o.removeAttribute("style"),
                              o.setAttribute("aria-expanded", "true"),
                              r.forEach(function (i) {
                                return t._setTableInnerLinksTabIndex(
                                  "remove",
                                  i
                                );
                              }))
                            : (o.classList.add("collapsed"),
                              o.setAttribute("aria-expanded", "false"),
                              (o.style.height = t.collapsedHeight),
                              r.forEach(function (i) {
                                return t._setTableInnerLinksTabIndex("set", i);
                              }),
                              (c = document.getElementById(
                                "collapsible_tables_expand_template"
                              )),
                              a && o.parentNode.scrollIntoView());
                        var u = c.content.cloneNode(!0);
                        (l = u.querySelector(
                          ".collapsible-figure-btn"
                        )).addEventListener("click", handleTableExpand),
                          o.parentNode.insertBefore(u, o.nextSibling);
                      })(),
                        t.extraLogic(r);
                    }
                  });
                },
              },
              {
                key: "_setTableInnerLinksTabIndex",
                value: function _setTableInnerLinksTabIndex(t, i) {
                  var r,
                    o =
                      null === (r = i.querySelector("table")) || void 0 === r
                        ? void 0
                        : r.querySelectorAll("a");
                  null == o ||
                    o.forEach(function (i) {
                      "set" === t
                        ? i.setAttribute("tabindex", "-1")
                        : i.removeAttribute("tabindex");
                    });
                },
              },
              { key: "extraLogic", value: function extraLogic(t) {} },
            ]),
            CollapsibleFigures
          );
        })();
      t.exports = c;
    },
    function (t, i, r) {
      var o = r(1),
        a = r(2),
        c = (function () {
          "use strict";
          function CollapsibleText(t, i) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : document.body;
            o(this, CollapsibleText),
              (this.config = t),
              (this.parent = r),
              (this.tmpl = document.getElementById(i)),
              this.init();
          }
          return (
            a(CollapsibleText, [
              {
                key: "init",
                value: function init() {
                  if (
                    ((this.clamp = this.config.clamp || 4),
                    (this.method = this.config.method || "clamp"),
                    (this.controlClass = "js--citations-truncated"),
                    (this.wrapper = this.parent.querySelector(
                      this.config.wrap
                    )),
                    (this.collapsedWrapper = this.wrapper),
                    (this.maxHeight = this.config.height || "480px"),
                    this.wrapper)
                  ) {
                    try {
                      this._enhanceHTML();
                    } catch (t) {
                      console.error("Add collapsible text HTML", t);
                    }
                    try {
                      this._hydrateElements();
                    } catch (t) {
                      console.error("Hydrate collapsible text HTML", t);
                    }
                  }
                },
              },
              {
                key: "_enhanceHTML",
                value: function _enhanceHTML() {
                  if ("clamp" === this.method) {
                    this.maxHeight = 0;
                    var t = this.clamp;
                    "H2" === this.collapsedWrapper.childNodes[0].tagName && t++;
                    var i = document.createElement("div");
                    i.setAttribute("class", this.controlClass),
                      this.collapsedWrapper.insertBefore(
                        i,
                        this.collapsedWrapper.childNodes[t]
                      );
                    for (
                      var r = t + 1;
                      r < this.collapsedWrapper.childNodes.length;
                      r++
                    )
                      i.appendChild(this.collapsedWrapper.childNodes[r]), r--;
                    this.collapsedWrapper = i;
                  }
                },
              },
              {
                key: "_hydrateElements",
                value: function _hydrateElements() {
                  var t = this;
                  if (
                    parseInt(this.maxHeight) <
                    this.collapsedWrapper.offsetHeight
                  ) {
                    var i = this.tmpl.content.cloneNode(!0);
                    this.collapsedWrapper.parentNode.insertBefore(
                      i,
                      this.collapsedWrapper.nextSibling
                    );
                    var r = this.collapsedWrapper.nextElementSibling,
                      o = r.querySelector("button"),
                      a = function truncate() {
                        var i = o.querySelector("span");
                        t.collapsedWrapper.scrollHeight >
                        t.collapsedWrapper.offsetHeight
                          ? (t.collapsedWrapper.classList.remove(
                              t.controlClass
                            ),
                            r.classList.remove(t.controlClass),
                            t.wrapper.classList.remove(t.controlClass),
                            (t.collapsedWrapper.style.height = "auto"),
                            ((i || o).innerHTML = o.getAttribute(
                              "data-label-collapse"
                            )))
                          : ((t.collapsedWrapper.style.height = t.maxHeight),
                            t.collapsedWrapper.classList.add(t.controlClass),
                            r.classList.add(t.controlClass),
                            t.wrapper.classList.add(t.controlClass),
                            ((i || o).innerHTML =
                              o.getAttribute("data-label-expand")));
                      };
                    a(), o.addEventListener("click", a);
                  }
                },
              },
            ]),
            CollapsibleText
          );
        })();
      t.exports = c;
    },
    function (t, i, r) {
      var o = r(158),
        a = r(12);
      function set(t, i, r, c) {
        return (set =
          "undefined" != typeof Reflect && Reflect.set
            ? Reflect.set
            : function set(t, i, r, c) {
                var l,
                  u = o(t, i);
                if (u) {
                  if ((l = Object.getOwnPropertyDescriptor(u, i)).set)
                    return l.set.call(c, r), !0;
                  if (!l.writable) return !1;
                }
                if ((l = Object.getOwnPropertyDescriptor(c, i))) {
                  if (!l.writable) return !1;
                  (l.value = r), Object.defineProperty(c, i, l);
                } else a(c, i, r);
                return !0;
              })(t, i, r, c);
      }
      (t.exports = function _set(t, i, r, o, a) {
        if (!set(t, i, r, o || t) && a)
          throw new TypeError("failed to set property");
        return r;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, i, r) {
      var o = r(17),
        a = r(8),
        c = r(1),
        l = r(2),
        u = (function () {
          "use strict";
          function Viewer(t, i) {
            var r = this,
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : { classNames: {} };
            c(this, Viewer),
              (this._config = {}),
              (this.$owl = t),
              i && this.zoomController(i),
              (this.config = o),
              this.$owl.on(
                "refreshed.owl.carousel translated.owl.carousel",
                function (t) {
                  return r.onChangedController(t);
                }
              );
          }
          return (
            l(Viewer, [
              {
                key: "config",
                get: function get() {
                  return this._config;
                },
                set: function set(t) {
                  var i, r, o;
                  (this._config = {
                    HIDDEN: "hidden",
                    IMAGE_GRAB_CURSOR:
                      (null === (i = t.classNames) || void 0 === i
                        ? void 0
                        : i.imageGrabbingCursor) || "grabbing",
                    ZOOM_CLASS:
                      (null === (r = t.classNames) || void 0 === r
                        ? void 0
                        : r.zoomerActive) || "fv__slideshow--zoomed",
                    ZOOMER_ACTIVE:
                      (null === (o = t.classNames) || void 0 === o
                        ? void 0
                        : o.zoomerActive) || "fv--prezoomed",
                  }),
                    (this.hasIvViewer = t.figureViewer.enableIvViewer);
                },
              },
              {
                key: "setToolbarHeight",
                value: function setToolbarHeight(t) {
                  this.toolbarHeight = t;
                },
              },
              {
                key: "setMultiImageIndex",
                value: function setMultiImageIndex(t) {
                  this.multiImageIndex = t;
                },
              },
              {
                key: "zoomController",
                value: function zoomController(t) {
                  "object" === a(t) &&
                    ((this.zoomer = t),
                    t.addEventListener("click", this.zoomClick.bind(this)));
                },
              },
              {
                key: "zoomClick",
                value: function zoomClick(t) {
                  t.preventDefault(),
                    this.zoomer.classList.toggle(this.config.ZOOMER_ACTIVE);
                },
              },
              {
                key: "onZoomChange",
                value: function onZoomChange(t) {
                  var i,
                    r,
                    o = this.config,
                    a = o.ZOOM_CLASS,
                    c = o.ZOOMER_ACTIVE,
                    l = this.$owl.parent().parent();
                  t
                    ? (l.removeClass(a),
                      null === (i = this.zoomer) ||
                        void 0 === i ||
                        i.classList.remove(c))
                    : (l.addClass(a),
                      null === (r = this.zoomer) ||
                        void 0 === r ||
                        r.classList.add(c));
                },
              },
              {
                key: "onChangedController",
                value: function onChangedController(t) {
                  var i = this;
                  if (!this.$owl.parent().hasClass("js--hidden") && t.item) {
                    var r = this.$owl.find("[data-key=" + t.item.index + "]"),
                      a = r.children("img");
                    0 === a.length &&
                      1 === r.find(".iv-container").children("img").length &&
                      (a = r.find(".iv-container").children("img"));
                    var c = function functions(r, o) {
                      (!a.length ||
                        (i.image && i.image === r && i.image.offsetParent)) &&
                        console.warn(
                          "Owl refresh triggered but no real change occurred. Source stays the same."
                        ),
                        a.length && (i.image = r),
                        i.image
                          ? ((i.multiImageIndex = o), i.onImageChange(t))
                          : console.warn("No image. -> No navigator.");
                    };
                    a.length > 1
                      ? (o(a).forEach(function (t, i) {
                          return c(t, i);
                        }),
                        c(a[0], 0))
                      : 1 === a.length && c(a[0], 0);
                  }
                },
              },
              { key: "onImageChange", value: function onImageChange(t) {} },
            ]),
            Viewer
          );
        })();
      t.exports = u;
    },
    function (t, i) {
      var r = "object" == typeof document && document.all,
        o = void 0 === r && void 0 !== r;
      t.exports = { all: r, IS_HTMLDDA: o };
    },
    function (t, i, r) {
      var o = r(95);
      t.exports = o && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    function (t, i, r) {
      var o = r(20),
        a = r(21),
        c = r(18),
        l = TypeError;
      t.exports = function (t, i) {
        var r, u;
        if ("string" === i && a((r = t.toString)) && !c((u = o(r, t))))
          return u;
        if (a((r = t.valueOf)) && !c((u = o(r, t)))) return u;
        if ("string" !== i && a((r = t.toString)) && !c((u = o(r, t))))
          return u;
        throw l("Can't convert object to primitive value");
      };
    },
    function (t, i, r) {
      var o = r(14),
        a = r(9),
        c = r(135);
      t.exports =
        !o &&
        !a(function () {
          return (
            7 !=
            Object.defineProperty(c("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    function (t, i, r) {
      var o = r(14),
        a = r(9);
      t.exports =
        o &&
        a(function () {
          return (
            42 !=
            Object.defineProperty(function () {}, "prototype", {
              value: 42,
              writable: !1,
            }).prototype
          );
        });
    },
    function (t, i, r) {
      var o = r(11),
        a = r(21),
        c = o.WeakMap;
      t.exports = a(c) && /native code/.test(String(c));
    },
    function (t, i, r) {
      var o = r(23),
        a = r(192),
        c = r(34),
        l = r(24);
      t.exports = function (t, i, r) {
        for (var u = a(i), h = l.f, d = c.f, p = 0; p < u.length; p++) {
          var v = u[p];
          o(t, v) || (r && o(r, v)) || h(t, v, d(i, v));
        }
      };
    },
    function (t, i, r) {
      var o = r(10),
        a = r(23),
        c = r(39),
        l = r(110).indexOf,
        u = r(109),
        h = o([].push);
      t.exports = function (t, i) {
        var r,
          o = c(t),
          d = 0,
          p = [];
        for (r in o) !a(u, r) && a(o, r) && h(p, r);
        for (; i.length > d; ) a(o, (r = i[d++])) && (~l(p, r) || h(p, r));
        return p;
      };
    },
    function (t, i) {
      var r = Math.ceil,
        o = Math.floor;
      t.exports =
        Math.trunc ||
        function trunc(t) {
          var i = +t;
          return (i > 0 ? o : r)(i);
        };
    },
    function (t, i, r) {
      var o = r(36);
      t.exports = o("document", "documentElement");
    },
    function (t, i, r) {
      var o = r(19);
      i.f = o;
    },
    function (t, i, r) {
      var o = r(20),
        a = r(36),
        c = r(19),
        l = r(28);
      t.exports = function () {
        var t = a("Symbol"),
          i = t && t.prototype,
          r = i && i.valueOf,
          u = c("toPrimitive");
        i &&
          !i[u] &&
          l(
            i,
            u,
            function (t) {
              return o(r, this);
            },
            { arity: 1 }
          );
      };
    },
    function (t, i, r) {
      var o = r(95);
      t.exports = o && !!Symbol.for && !!Symbol.keyFor;
    },
    function (t, i, r) {
      "use strict";
      var o = r(26),
        a = r(68),
        c = r(29),
        l = r(198),
        u = Math.min;
      t.exports =
        [].copyWithin ||
        function copyWithin(t, i) {
          var r = o(this),
            h = c(r),
            d = a(t, h),
            p = a(i, h),
            v = arguments.length > 2 ? arguments[2] : void 0,
            g = u((void 0 === v ? h : a(v, h)) - p, h - d),
            m = 1;
          for (
            p < d && d < p + g && ((m = -1), (p += g - 1), (d += g - 1));
            g-- > 0;

          )
            p in r ? (r[d] = r[p]) : l(r, d), (d += m), (p += m);
          return r;
        };
    },
    function (t, i, r) {
      "use strict";
      var o = r(78),
        a = r(29),
        c = r(197),
        l = r(63),
        flattenIntoArray = function (t, i, r, u, h, d, p, v) {
          for (var g, m, y = h, b = 0, _ = !!p && l(p, v); b < u; )
            b in r &&
              ((g = _ ? _(r[b], b, i) : r[b]),
              d > 0 && o(g)
                ? ((m = a(g)), (y = flattenIntoArray(t, i, g, m, y, d - 1) - 1))
                : (c(y + 1), (t[y] = g)),
              y++),
              b++;
          return y;
        };
      t.exports = flattenIntoArray;
    },
    function (t, i, r) {
      "use strict";
      var o = r(31).forEach,
        a = r(70)("forEach");
      t.exports = a
        ? [].forEach
        : function forEach(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
          };
    },
    function (t, i, r) {
      "use strict";
      var o = r(63),
        a = r(20),
        c = r(26),
        l = r(412),
        u = r(200),
        h = r(115),
        d = r(29),
        p = r(77),
        v = r(138),
        g = r(118),
        m = Array;
      t.exports = function from(t) {
        var i = c(t),
          r = h(this),
          y = arguments.length,
          b = y > 1 ? arguments[1] : void 0,
          _ = void 0 !== b;
        _ && (b = o(b, y > 2 ? arguments[2] : void 0));
        var w,
          x,
          S,
          k,
          T,
          E,
          O = g(i),
          I = 0;
        if (!O || (this === m && u(O)))
          for (w = d(i), x = r ? new this(w) : m(w); w > I; I++)
            (E = _ ? b(i[I], I) : i[I]), p(x, I, E);
        else
          for (
            T = (k = v(i, O)).next, x = r ? new this() : [];
            !(S = a(T, k)).done;
            I++
          )
            (E = _ ? l(k, b, [S.value, I], !0) : S.value), p(x, I, E);
        return (x.length = I), x;
      };
    },
    function (t, i, r) {
      var o = r(20),
        a = r(16),
        c = r(86);
      t.exports = function (t, i, r) {
        var l, u;
        a(t);
        try {
          if (!(l = c(t, "return"))) {
            if ("throw" === i) throw r;
            return r;
          }
          l = o(l, t);
        } catch (t) {
          (u = !0), (l = t);
        }
        if ("throw" === i) throw r;
        if (u) throw l;
        return a(l), r;
      };
    },
    function (t, i, r) {
      "use strict";
      var o = r(279).IteratorPrototype,
        a = r(62),
        c = r(73),
        l = r(53),
        u = r(117),
        returnThis = function () {
          return this;
        };
      t.exports = function (t, i, r, h) {
        var d = i + " Iterator";
        return (
          (t.prototype = a(o, { next: c(+!h, r) })),
          l(t, d, !1, !0),
          (u[d] = returnThis),
          t
        );
      };
    },
    function (t, i, r) {
      "use strict";
      var o,
        a,
        c,
        l = r(9),
        u = r(21),
        h = r(18),
        d = r(62),
        p = r(54),
        v = r(28),
        g = r(19),
        m = r(41),
        y = g("iterator"),
        b = !1;
      [].keys &&
        ("next" in (c = [].keys())
          ? (a = p(p(c))) !== Object.prototype && (o = a)
          : (b = !0)),
        !h(o) ||
        l(function () {
          var t = {};
          return o[y].call(t) !== t;
        })
          ? (o = {})
          : m && (o = d(o)),
        u(o[y]) ||
          v(o, y, function () {
            return this;
          }),
        (t.exports = { IteratorPrototype: o, BUGGY_SAFARI_ITERATORS: b });
    },
    function (t, i, r) {
      var o = r(21),
        a = String,
        c = TypeError;
      t.exports = function (t) {
        if ("object" == typeof t || o(t)) return t;
        throw c("Can't set " + a(t) + " as a prototype");
      };
    },
    function (t, i, r) {
      "use strict";
      var o = r(64),
        a = r(39),
        c = r(47),
        l = r(29),
        u = r(70),
        h = Math.min,
        d = [].lastIndexOf,
        p = !!d && 1 / [1].lastIndexOf(1, -0) < 0,
        v = u("lastIndexOf"),
        g = p || !v;
      t.exports = g
        ? function lastIndexOf(t) {
            if (p) return o(d, this, arguments) || 0;
            var i = a(this),
              r = l(i),
              u = r - 1;
            for (
              arguments.length > 1 && (u = h(u, c(arguments[1]))),
                u < 0 && (u = r + u);
              u >= 0;
              u--
            )
              if (u in i && i[u] === t) return u || 0;
            return -1;
          }
        : d;
    },
    function (t, i, r) {
      var o = r(67).match(/firefox\/(\d+)/i);
      t.exports = !!o && +o[1];
    },
    function (t, i, r) {
      var o = r(67);
      t.exports = /MSIE|Trident/.test(o);
    },
    function (t, i, r) {
      var o = r(47),
        a = r(48),
        c = RangeError;
      t.exports = function (t) {
        if (void 0 === t) return 0;
        var i = o(t),
          r = a(i);
        if (i !== r) throw c("Wrong length or index");
        return r;
      };
    },
    function (t, i, r) {
      "use strict";
      var o = r(10),
        a = r(35),
        c = r(18),
        l = r(23),
        u = r(89),
        h = r(106),
        d = Function,
        p = o([].concat),
        v = o([].join),
        g = {},
        construct = function (t, i, r) {
          if (!l(g, i)) {
            for (var o = [], a = 0; a < i; a++) o[a] = "a[" + a + "]";
            g[i] = d("C,a", "return new C(" + v(o, ",") + ")");
          }
          return g[i](t, r);
        };
      t.exports = h
        ? d.bind
        : function bind(t) {
            var i = a(this),
              r = i.prototype,
              o = u(arguments, 1),
              l = function bound() {
                var r = p(o, u(arguments));
                return this instanceof l
                  ? construct(i, r.length, r)
                  : i.apply(t, r);
              };
            return c(r) && (l.prototype = r), l;
          };
    },
    function (t, i, r) {
      "use strict";
      var o = r(24).f,
        a = r(62),
        c = r(119),
        l = r(63),
        u = r(81),
        h = r(52),
        d = r(99),
        p = r(201),
        v = r(203),
        g = r(98),
        m = r(14),
        y = r(91).fastKey,
        b = r(37),
        _ = b.set,
        w = b.getterFor;
      t.exports = {
        getConstructor: function (t, i, r, p) {
          var v = t(function (t, o) {
              u(t, g),
                _(t, {
                  type: i,
                  index: a(null),
                  first: void 0,
                  last: void 0,
                  size: 0,
                }),
                m || (t.size = 0),
                h(o) || d(o, t[p], { that: t, AS_ENTRIES: r });
            }),
            g = v.prototype,
            b = w(i),
            define = function (t, i, r) {
              var o,
                a,
                c = b(t),
                l = getEntry(t, i);
              return (
                l
                  ? (l.value = r)
                  : ((c.last = l =
                      {
                        index: (a = y(i, !0)),
                        key: i,
                        value: r,
                        previous: (o = c.last),
                        next: void 0,
                        removed: !1,
                      }),
                    c.first || (c.first = l),
                    o && (o.next = l),
                    m ? c.size++ : t.size++,
                    "F" !== a && (c.index[a] = l)),
                t
              );
            },
            getEntry = function (t, i) {
              var r,
                o = b(t),
                a = y(i);
              if ("F" !== a) return o.index[a];
              for (r = o.first; r; r = r.next) if (r.key == i) return r;
            };
          return (
            c(g, {
              clear: function clear() {
                for (var t = b(this), i = t.index, r = t.first; r; )
                  (r.removed = !0),
                    r.previous && (r.previous = r.previous.next = void 0),
                    delete i[r.index],
                    (r = r.next);
                (t.first = t.last = void 0), m ? (t.size = 0) : (this.size = 0);
              },
              delete: function (t) {
                var i = b(this),
                  r = getEntry(this, t);
                if (r) {
                  var o = r.next,
                    a = r.previous;
                  delete i.index[r.index],
                    (r.removed = !0),
                    a && (a.next = o),
                    o && (o.previous = a),
                    i.first == r && (i.first = o),
                    i.last == r && (i.last = a),
                    m ? i.size-- : this.size--;
                }
                return !!r;
              },
              forEach: function forEach(t) {
                for (
                  var i,
                    r = b(this),
                    o = l(t, arguments.length > 1 ? arguments[1] : void 0);
                  (i = i ? i.next : r.first);

                )
                  for (o(i.value, i.key, this); i && i.removed; )
                    i = i.previous;
              },
              has: function has(t) {
                return !!getEntry(this, t);
              },
            }),
            c(
              g,
              r
                ? {
                    get: function get(t) {
                      var i = getEntry(this, t);
                      return i && i.value;
                    },
                    set: function set(t, i) {
                      return define(this, 0 === t ? 0 : t, i);
                    },
                  }
                : {
                    add: function add(t) {
                      return define(this, (t = 0 === t ? 0 : t), t);
                    },
                  }
            ),
            m &&
              o(g, "size", {
                get: function () {
                  return b(this).size;
                },
              }),
            v
          );
        },
        setStrong: function (t, i, r) {
          var o = i + " Iterator",
            a = w(i),
            c = w(o);
          p(
            t,
            i,
            function (t, i) {
              _(this, {
                type: o,
                target: t,
                state: a(t),
                kind: i,
                last: void 0,
              });
            },
            function () {
              for (var t = c(this), i = t.kind, r = t.last; r && r.removed; )
                r = r.previous;
              return t.target && (t.last = r = r ? r.next : t.state.first)
                ? v(
                    "keys" == i
                      ? r.key
                      : "values" == i
                      ? r.value
                      : [r.key, r.value],
                    !1
                  )
                : ((t.target = void 0), v(void 0, !0));
            },
            r ? "entries" : "values",
            !r,
            !0
          ),
            g(i);
        },
      };
    },
    function (t, i) {
      var r = Math.log;
      t.exports =
        Math.log1p ||
        function log1p(t) {
          var i = +t;
          return i > -1e-8 && i < 1e-8 ? i - (i * i) / 2 : r(1 + i);
        };
    },
    function (t, i, r) {
      var o = r(11),
        a = r(9),
        c = r(10),
        l = r(27),
        u = r(100).trim,
        h = r(147),
        d = c("".charAt),
        p = o.parseFloat,
        v = o.Symbol,
        g = v && v.iterator,
        m =
          1 / p(h + "-0") != -1 / 0 ||
          (g &&
            !a(function () {
              p(Object(g));
            }));
      t.exports = m
        ? function parseFloat(t) {
            var i = u(l(t)),
              r = p(i);
            return 0 === r && "-" == d(i, 0) ? -0 : r;
          }
        : p;
    },
    function (t, i, r) {
      var o = r(11),
        a = r(9),
        c = r(10),
        l = r(27),
        u = r(100).trim,
        h = r(147),
        d = o.parseInt,
        p = o.Symbol,
        v = p && p.iterator,
        g = /^[+-]?0x/i,
        m = c(g.exec),
        y =
          8 !== d(h + "08") ||
          22 !== d(h + "0x16") ||
          (v &&
            !a(function () {
              d(Object(v));
            }));
      t.exports = y
        ? function parseInt(t, i) {
            var r = u(l(t));
            return d(r, i >>> 0 || (m(g, r) ? 16 : 10));
          }
        : d;
    },
    function (t, i, r) {
      "use strict";
      var o = r(14),
        a = r(10),
        c = r(20),
        l = r(9),
        u = r(112),
        h = r(137),
        d = r(133),
        p = r(26),
        v = r(107),
        g = Object.assign,
        m = Object.defineProperty,
        y = a([].concat);
      t.exports =
        !g ||
        l(function () {
          if (
            o &&
            1 !==
              g(
                { b: 1 },
                g(
                  m({}, "a", {
                    enumerable: !0,
                    get: function () {
                      m(this, "b", { value: 3, enumerable: !1 });
                    },
                  }),
                  { b: 2 }
                )
              ).b
          )
            return !0;
          var t = {},
            i = {},
            r = Symbol();
          return (
            (t[r] = 7),
            "abcdefghijklmnopqrst".split("").forEach(function (t) {
              i[t] = t;
            }),
            7 != g({}, t)[r] || "abcdefghijklmnopqrst" != u(g({}, i)).join("")
          );
        })
          ? function assign(t, i) {
              for (
                var r = p(t), a = arguments.length, l = 1, g = h.f, m = d.f;
                a > l;

              )
                for (
                  var b,
                    _ = v(arguments[l++]),
                    w = g ? y(u(_), g(_)) : u(_),
                    x = w.length,
                    S = 0;
                  x > S;

                )
                  (b = w[S++]), (o && !c(m, _, b)) || (r[b] = _[b]);
              return r;
            }
          : g;
    },
    function (t, i, r) {
      var o = r(14),
        a = r(10),
        c = r(112),
        l = r(39),
        u = a(r(133).f),
        h = a([].push),
        createMethod = function (t) {
          return function (i) {
            for (
              var r, a = l(i), d = c(a), p = d.length, v = 0, g = [];
              p > v;

            )
              (r = d[v++]), (o && !u(a, r)) || h(g, t ? [r, a[r]] : a[r]);
            return g;
          };
        };
      t.exports = { entries: createMethod(!0), values: createMethod(!1) };
    },
    function (t, i) {
      t.exports =
        Object.is ||
        function is(t, i) {
          return t === i ? 0 !== t || 1 / t == 1 / i : t != t && i != i;
        };
    },
    function (t, i, r) {
      var o = r(67);
      t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(o);
    },
    function (t, i, r) {
      var o,
        a,
        c,
        l,
        u,
        h,
        d,
        p,
        v = r(11),
        g = r(63),
        m = r(34).f,
        y = r(149).set,
        b = r(293),
        _ = r(513),
        w = r(514),
        x = r(90),
        S = v.MutationObserver || v.WebKitMutationObserver,
        k = v.document,
        T = v.process,
        E = v.Promise,
        O = m(v, "queueMicrotask"),
        I = O && O.value;
      I ||
        ((o = function () {
          var t, i;
          for (x && (t = T.domain) && t.exit(); a; ) {
            (i = a.fn), (a = a.next);
            try {
              i();
            } catch (t) {
              throw (a ? l() : (c = void 0), t);
            }
          }
          (c = void 0), t && t.enter();
        }),
        b || x || w || !S || !k
          ? !_ && E && E.resolve
            ? (((d = E.resolve(void 0)).constructor = E),
              (p = g(d.then, d)),
              (l = function () {
                p(o);
              }))
            : x
            ? (l = function () {
                T.nextTick(o);
              })
            : ((y = g(y, v)),
              (l = function () {
                y(o);
              }))
          : ((u = !0),
            (h = k.createTextNode("")),
            new S(o).observe(h, { characterData: !0 }),
            (l = function () {
              h.data = u = !u;
            }))),
        (t.exports =
          I ||
          function (t) {
            var i = { fn: t, next: void 0 };
            c && (c.next = i), a || ((a = i), l()), (c = i);
          });
    },
    function (t, i) {
      t.exports =
        "object" == typeof Deno && Deno && "object" == typeof Deno.version;
    },
    function (t, i, r) {
      var o = r(101),
        a = r(139),
        c = r(123).CONSTRUCTOR;
      t.exports =
        c ||
        !a(function (t) {
          o.all(t).then(void 0, function () {});
        });
    },
    function (t, i, r) {
      var o = r(16),
        a = r(18),
        c = r(124);
      t.exports = function (t, i) {
        if ((o(t), a(i) && i.constructor === t)) return i;
        var r = c.f(t);
        return (0, r.resolve)(i), r.promise;
      };
    },
    function (t, i, r) {
      var o = r(23);
      t.exports = function (t) {
        return void 0 !== t && (o(t, "value") || o(t, "writable"));
      };
    },
    function (t, i, r) {
      var o = r(20),
        a = r(23),
        c = r(60),
        l = r(216),
        u = RegExp.prototype;
      t.exports = function (t) {
        var i = t.flags;
        return void 0 !== i || "flags" in u || a(t, "flags") || !c(u, t)
          ? i
          : o(l, t);
      };
    },
    function (t, i, r) {
      var o = r(9),
        a = r(11).RegExp;
      t.exports = o(function () {
        var t = a(".", "s");
        return !(t.dotAll && t.exec("\n") && "s" === t.flags);
      });
    },
    function (t, i, r) {
      var o = r(9),
        a = r(11).RegExp;
      t.exports = o(function () {
        var t = a("(?<a>b)", "g");
        return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c");
      });
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(150);
      o({ target: "RegExp", proto: !0, forced: /./.exec !== a }, { exec: a });
    },
    function (t, i, r) {
      var o = r(190),
        a = r(24);
      t.exports = function (t, i, r) {
        return (
          r.get && o(r.get, i, { getter: !0 }),
          r.set && o(r.set, i, { setter: !0 }),
          a.f(t, i, r)
        );
      };
    },
    function (t, i, r) {
      "use strict";
      var o = r(151).charAt,
        a = r(27),
        c = r(37),
        l = r(201),
        u = r(203),
        h = c.set,
        d = c.getterFor("String Iterator");
      l(
        String,
        "String",
        function (t) {
          h(this, { type: "String Iterator", string: a(t), index: 0 });
        },
        function next() {
          var t,
            i = d(this),
            r = i.string,
            a = i.index;
          return a >= r.length
            ? u(void 0, !0)
            : ((t = o(r, a)), (i.index += t.length), u(t, !1));
        }
      );
    },
    function (t, i, r) {
      var o = r(67);
      t.exports =
        /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(
          o
        );
    },
    function (t, i, r) {
      "use strict";
      var o = r(100).end,
        a = r(221);
      t.exports = a("trimEnd")
        ? function trimEnd() {
            return o(this);
          }
        : "".trimEnd;
    },
    function (t, i, r) {
      "use strict";
      var o = r(100).start,
        a = r(221);
      t.exports = a("trimStart")
        ? function trimStart() {
            return o(this);
          }
        : "".trimStart;
    },
    function (t, i, r) {
      var o = r(576),
        a = RangeError;
      t.exports = function (t, i) {
        var r = o(t);
        if (r % i) throw a("Wrong offset");
        return r;
      };
    },
    function (t, i, r) {
      var o = r(63),
        a = r(20),
        c = r(207),
        l = r(26),
        u = r(29),
        h = r(138),
        d = r(118),
        p = r(200),
        v = r(577),
        g = r(22).aTypedArrayConstructor,
        m = r(310);
      t.exports = function from(t) {
        var i,
          r,
          y,
          b,
          _,
          w,
          x,
          S,
          k = c(this),
          T = l(t),
          E = arguments.length,
          O = E > 1 ? arguments[1] : void 0,
          I = void 0 !== O,
          C = d(T);
        if (C && !p(C))
          for (S = (x = h(T, C)).next, T = []; !(w = a(S, x)).done; )
            T.push(w.value);
        for (
          I && E > 2 && (O = o(O, arguments[2])),
            r = u(T),
            y = new (g(k))(r),
            b = v(y),
            i = 0;
          r > i;
          i++
        )
          (_ = I ? O(T[i], i) : T[i]), (y[i] = b ? m(_) : +_);
        return y;
      };
    },
    function (t, i, r) {
      var o = r(134),
        a = TypeError;
      t.exports = function (t) {
        var i = o(t, "number");
        if ("number" == typeof i) throw a("Can't convert number to bigint");
        return BigInt(i);
      };
    },
    function (t, i, r) {
      "use strict";
      var o = r(10),
        a = r(119),
        c = r(91).getWeakData,
        l = r(81),
        u = r(16),
        h = r(52),
        d = r(18),
        p = r(99),
        v = r(31),
        g = r(23),
        m = r(37),
        y = m.set,
        b = m.getterFor,
        _ = v.find,
        w = v.findIndex,
        x = o([].splice),
        S = 0,
        uncaughtFrozenStore = function (t) {
          return t.frozen || (t.frozen = new UncaughtFrozenStore());
        },
        UncaughtFrozenStore = function () {
          this.entries = [];
        },
        findUncaughtFrozen = function (t, i) {
          return _(t.entries, function (t) {
            return t[0] === i;
          });
        };
      (UncaughtFrozenStore.prototype = {
        get: function (t) {
          var i = findUncaughtFrozen(this, t);
          if (i) return i[1];
        },
        has: function (t) {
          return !!findUncaughtFrozen(this, t);
        },
        set: function (t, i) {
          var r = findUncaughtFrozen(this, t);
          r ? (r[1] = i) : this.entries.push([t, i]);
        },
        delete: function (t) {
          var i = w(this.entries, function (i) {
            return i[0] === t;
          });
          return ~i && x(this.entries, i, 1), !!~i;
        },
      }),
        (t.exports = {
          getConstructor: function (t, i, r, o) {
            var v = t(function (t, a) {
                l(t, m),
                  y(t, { type: i, id: S++, frozen: void 0 }),
                  h(a) || p(a, t[o], { that: t, AS_ENTRIES: r });
              }),
              m = v.prototype,
              _ = b(i),
              define = function (t, i, r) {
                var o = _(t),
                  a = c(u(i), !0);
                return (
                  !0 === a ? uncaughtFrozenStore(o).set(i, r) : (a[o.id] = r), t
                );
              };
            return (
              a(m, {
                delete: function (t) {
                  var i = _(this);
                  if (!d(t)) return !1;
                  var r = c(t);
                  return !0 === r
                    ? uncaughtFrozenStore(i).delete(t)
                    : r && g(r, i.id) && delete r[i.id];
                },
                has: function has(t) {
                  var i = _(this);
                  if (!d(t)) return !1;
                  var r = c(t);
                  return !0 === r
                    ? uncaughtFrozenStore(i).has(t)
                    : r && g(r, i.id);
                },
              }),
              a(
                m,
                r
                  ? {
                      get: function get(t) {
                        var i = _(this);
                        if (d(t)) {
                          var r = c(t);
                          return !0 === r
                            ? uncaughtFrozenStore(i).get(t)
                            : r
                            ? r[i.id]
                            : void 0;
                        }
                      },
                      set: function set(t, i) {
                        return define(this, t, i);
                      },
                    }
                  : {
                      add: function add(t) {
                        return define(this, t, !0);
                      },
                    }
              ),
              v
            );
          },
        });
    },
    function (t, i) {
      t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
      };
    },
    function (t, i, r) {
      var o = r(135)("span").classList,
        a = o && o.constructor && o.constructor.prototype;
      t.exports = a === Object.prototype ? void 0 : a;
    },
    function (t, i, r) {
      var o = r(11),
        a = r(64),
        c = r(21),
        l = r(67),
        u = r(89),
        h = r(122),
        d = /MSIE .\./.test(l),
        p = o.Function,
        wrap = function (t) {
          return d
            ? function (i, r) {
                var o = h(arguments.length, 1) > 2,
                  l = c(i) ? i : p(i),
                  d = o ? u(arguments, 2) : void 0;
                return t(
                  o
                    ? function () {
                        a(l, this, d);
                      }
                    : l,
                  r
                );
              }
            : t;
        };
      t.exports = {
        setTimeout: wrap(o.setTimeout),
        setInterval: wrap(o.setInterval),
      };
    },
    function (t, i, r) {
      var o = r(9),
        a = r(19),
        c = r(41),
        l = a("iterator");
      t.exports = !o(function () {
        var t = new URL("b?a=1&b=2&c=3", "http://a"),
          i = t.searchParams,
          r = "";
        return (
          (t.pathname = "c%20d"),
          i.forEach(function (t, o) {
            i.delete("b"), (r += o + t);
          }),
          (c && !t.toJSON) ||
            !i.sort ||
            "http://a/c%20d?a=1&c=3" !== t.href ||
            "3" !== i.get("c") ||
            "a=1" !== String(new URLSearchParams("?a=1")) ||
            !i[l] ||
            "a" !== new URL("https://a@b").username ||
            "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
            "xn--e1aybc" !== new URL("http://????????").host ||
            "#%D0%B1" !== new URL("http://a#??").hash ||
            "a1c3" !== r ||
            "x" !== new URL("http://x", void 0).host
        );
      });
    },
    function (t, i, r) {
      "use strict";
      r(140);
      var o = r(6),
        a = r(11),
        c = r(20),
        l = r(10),
        u = r(14),
        h = r(315),
        d = r(28),
        p = r(119),
        v = r(53),
        g = r(278),
        m = r(37),
        y = r(81),
        b = r(21),
        _ = r(23),
        w = r(63),
        x = r(69),
        S = r(16),
        k = r(18),
        T = r(27),
        E = r(62),
        O = r(73),
        I = r(138),
        C = r(118),
        A = r(122),
        L = r(19),
        P = r(204),
        N = L("iterator"),
        R = m.set,
        j = m.getterFor("URLSearchParams"),
        M = m.getterFor("URLSearchParamsIterator"),
        D = Object.getOwnPropertyDescriptor,
        safeGetBuiltIn = function (t) {
          if (!u) return a[t];
          var i = D(a, t);
          return i && i.value;
        },
        q = safeGetBuiltIn("fetch"),
        V = safeGetBuiltIn("Request"),
        B = safeGetBuiltIn("Headers"),
        z = V && V.prototype,
        H = B && B.prototype,
        $ = a.RegExp,
        W = a.TypeError,
        G = a.decodeURIComponent,
        U = a.encodeURIComponent,
        Z = l("".charAt),
        X = l([].join),
        K = l([].push),
        Y = l("".replace),
        J = l([].shift),
        Q = l([].splice),
        tt = l("".split),
        et = l("".slice),
        it = /\+/g,
        nt = Array(4),
        percentSequence = function (t) {
          return (
            nt[t - 1] || (nt[t - 1] = $("((?:%[\\da-f]{2}){" + t + "})", "gi"))
          );
        },
        percentDecode = function (t) {
          try {
            return G(t);
          } catch (i) {
            return t;
          }
        },
        deserialize = function (t) {
          var i = Y(t, it, " "),
            r = 4;
          try {
            return G(i);
          } catch (t) {
            for (; r; ) i = Y(i, percentSequence(r--), percentDecode);
            return i;
          }
        },
        rt = /[!'()~]|%20/g,
        ot = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
        },
        replacer = function (t) {
          return ot[t];
        },
        serialize = function (t) {
          return Y(U(t), rt, replacer);
        },
        at = g(
          function Iterator(t, i) {
            R(this, {
              type: "URLSearchParamsIterator",
              iterator: I(j(t).entries),
              kind: i,
            });
          },
          "Iterator",
          function next() {
            var t = M(this),
              i = t.kind,
              r = t.iterator.next(),
              o = r.value;
            return (
              r.done ||
                (r.value =
                  "keys" === i
                    ? o.key
                    : "values" === i
                    ? o.value
                    : [o.key, o.value]),
              r
            );
          },
          !0
        ),
        URLSearchParamsState = function (t) {
          (this.entries = []),
            (this.url = null),
            void 0 !== t &&
              (k(t)
                ? this.parseObject(t)
                : this.parseQuery(
                    "string" == typeof t
                      ? "?" === Z(t, 0)
                        ? et(t, 1)
                        : t
                      : T(t)
                  ));
        };
      URLSearchParamsState.prototype = {
        type: "URLSearchParams",
        bindURL: function (t) {
          (this.url = t), this.update();
        },
        parseObject: function (t) {
          var i,
            r,
            o,
            a,
            l,
            u,
            h,
            d = C(t);
          if (d)
            for (r = (i = I(t, d)).next; !(o = c(r, i)).done; ) {
              if (
                ((l = (a = I(S(o.value))).next),
                (u = c(l, a)).done || (h = c(l, a)).done || !c(l, a).done)
              )
                throw W("Expected sequence with length 2");
              K(this.entries, { key: T(u.value), value: T(h.value) });
            }
          else
            for (var p in t)
              _(t, p) && K(this.entries, { key: p, value: T(t[p]) });
        },
        parseQuery: function (t) {
          if (t)
            for (var i, r, o = tt(t, "&"), a = 0; a < o.length; )
              (i = o[a++]).length &&
                ((r = tt(i, "=")),
                K(this.entries, {
                  key: deserialize(J(r)),
                  value: deserialize(X(r, "=")),
                }));
        },
        serialize: function () {
          for (var t, i = this.entries, r = [], o = 0; o < i.length; )
            (t = i[o++]), K(r, serialize(t.key) + "=" + serialize(t.value));
          return X(r, "&");
        },
        update: function () {
          (this.entries.length = 0), this.parseQuery(this.url.query);
        },
        updateURL: function () {
          this.url && this.url.update();
        },
      };
      var st = function URLSearchParams() {
          y(this, ct);
          var t = arguments.length > 0 ? arguments[0] : void 0;
          R(this, new URLSearchParamsState(t));
        },
        ct = st.prototype;
      if (
        (p(
          ct,
          {
            append: function append(t, i) {
              A(arguments.length, 2);
              var r = j(this);
              K(r.entries, { key: T(t), value: T(i) }), r.updateURL();
            },
            delete: function (t) {
              A(arguments.length, 1);
              for (
                var i = j(this), r = i.entries, o = T(t), a = 0;
                a < r.length;

              )
                r[a].key === o ? Q(r, a, 1) : a++;
              i.updateURL();
            },
            get: function get(t) {
              A(arguments.length, 1);
              for (var i = j(this).entries, r = T(t), o = 0; o < i.length; o++)
                if (i[o].key === r) return i[o].value;
              return null;
            },
            getAll: function getAll(t) {
              A(arguments.length, 1);
              for (
                var i = j(this).entries, r = T(t), o = [], a = 0;
                a < i.length;
                a++
              )
                i[a].key === r && K(o, i[a].value);
              return o;
            },
            has: function has(t) {
              A(arguments.length, 1);
              for (var i = j(this).entries, r = T(t), o = 0; o < i.length; )
                if (i[o++].key === r) return !0;
              return !1;
            },
            set: function set(t, i) {
              A(arguments.length, 1);
              for (
                var r,
                  o = j(this),
                  a = o.entries,
                  c = !1,
                  l = T(t),
                  u = T(i),
                  h = 0;
                h < a.length;
                h++
              )
                (r = a[h]).key === l &&
                  (c ? Q(a, h--, 1) : ((c = !0), (r.value = u)));
              c || K(a, { key: l, value: u }), o.updateURL();
            },
            sort: function sort() {
              var t = j(this);
              P(t.entries, function (t, i) {
                return t.key > i.key ? 1 : -1;
              }),
                t.updateURL();
            },
            forEach: function forEach(t) {
              for (
                var i,
                  r = j(this).entries,
                  o = w(t, arguments.length > 1 ? arguments[1] : void 0),
                  a = 0;
                a < r.length;

              )
                o((i = r[a++]).value, i.key, this);
            },
            keys: function keys() {
              return new at(this, "keys");
            },
            values: function values() {
              return new at(this, "values");
            },
            entries: function entries() {
              return new at(this, "entries");
            },
          },
          { enumerable: !0 }
        ),
        d(ct, N, ct.entries, { name: "entries" }),
        d(
          ct,
          "toString",
          function toString() {
            return j(this).serialize();
          },
          { enumerable: !0 }
        ),
        v(st, "URLSearchParams"),
        o({ global: !0, constructor: !0, forced: !h }, { URLSearchParams: st }),
        !h && b(B))
      ) {
        var lt = l(H.has),
          ut = l(H.set),
          wrapRequestOptions = function (t) {
            if (k(t)) {
              var i,
                r = t.body;
              if ("URLSearchParams" === x(r))
                return (
                  (i = t.headers ? new B(t.headers) : new B()),
                  lt(i, "content-type") ||
                    ut(
                      i,
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ),
                  E(t, { body: O(0, T(r)), headers: O(0, i) })
                );
            }
            return t;
          };
        if (
          (b(q) &&
            o(
              { global: !0, enumerable: !0, dontCallGetSet: !0, forced: !0 },
              {
                fetch: function fetch(t) {
                  return q(
                    t,
                    arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {}
                  );
                },
              }
            ),
          b(V))
        ) {
          var ht = function Request(t) {
            return (
              y(this, z),
              new V(
                t,
                arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {}
              )
            );
          };
          (z.constructor = ht),
            (ht.prototype = z),
            o(
              { global: !0, constructor: !0, dontCallGetSet: !0, forced: !0 },
              { Request: ht }
            );
        }
      }
      t.exports = { URLSearchParams: st, getState: j };
    },
    ,
    ,
    function (t, i, r) {
      var o = r(160),
        a = r(159),
        c = r(102),
        l = r(161);
      (t.exports = function _toArray(t) {
        return o(t) || a(t) || c(t) || l();
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, i, r) {
      "use strict";
      var o = r(12),
        a = r.n(o);
      function ownKeys(t, i) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          i &&
            (o = o.filter(function (i) {
              return Object.getOwnPropertyDescriptor(t, i).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function _objectSpread(t) {
        for (var i = 1; i < arguments.length; i++) {
          var r = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(r), !0).forEach(function (i) {
                a()(t, i, r[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (i) {
                Object.defineProperty(
                  t,
                  i,
                  Object.getOwnPropertyDescriptor(r, i)
                );
              });
        }
        return t;
      }
      var c = _objectSpread(
        _objectSpread({}, r(155).a),
        {},
        { fvDirectory: r(637), fvLightbox: r(638) }
      );
      i.a = c;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, i, r) {
      (function (t) {
        var i = r(8),
          o = (function (t) {
            "use strict";
            var r = Object.prototype,
              o = r.hasOwnProperty,
              a = "function" == typeof Symbol ? Symbol : {},
              c = a.iterator || "@@iterator",
              l = a.asyncIterator || "@@asyncIterator",
              u = a.toStringTag || "@@toStringTag";
            function define(t, i, r) {
              return (
                Object.defineProperty(t, i, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                }),
                t[i]
              );
            }
            try {
              define({}, "");
            } catch (t) {
              define = function define(t, i, r) {
                return (t[i] = r);
              };
            }
            function wrap(t, i, r, o) {
              var a = i && i.prototype instanceof Generator ? i : Generator,
                c = Object.create(a.prototype),
                l = new Context(o || []);
              return (
                (c._invoke = (function makeInvokeMethod(t, i, r) {
                  var o = "suspendedStart";
                  return function invoke(a, c) {
                    if ("executing" === o)
                      throw new Error("Generator is already running");
                    if ("completed" === o) {
                      if ("throw" === a) throw c;
                      return doneResult();
                    }
                    for (r.method = a, r.arg = c; ; ) {
                      var l = r.delegate;
                      if (l) {
                        var u = maybeInvokeDelegate(l, r);
                        if (u) {
                          if (u === h) continue;
                          return u;
                        }
                      }
                      if ("next" === r.method) r.sent = r._sent = r.arg;
                      else if ("throw" === r.method) {
                        if ("suspendedStart" === o)
                          throw ((o = "completed"), r.arg);
                        r.dispatchException(r.arg);
                      } else "return" === r.method && r.abrupt("return", r.arg);
                      o = "executing";
                      var d = tryCatch(t, i, r);
                      if ("normal" === d.type) {
                        if (
                          ((o = r.done ? "completed" : "suspendedYield"),
                          d.arg === h)
                        )
                          continue;
                        return { value: d.arg, done: r.done };
                      }
                      "throw" === d.type &&
                        ((o = "completed"),
                        (r.method = "throw"),
                        (r.arg = d.arg));
                    }
                  };
                })(t, r, l)),
                c
              );
            }
            function tryCatch(t, i, r) {
              try {
                return { type: "normal", arg: t.call(i, r) };
              } catch (t) {
                return { type: "throw", arg: t };
              }
            }
            t.wrap = wrap;
            var h = {};
            function Generator() {}
            function GeneratorFunction() {}
            function GeneratorFunctionPrototype() {}
            var d = {};
            define(d, c, function () {
              return this;
            });
            var p = Object.getPrototypeOf,
              v = p && p(p(values([])));
            v && v !== r && o.call(v, c) && (d = v);
            var g =
              (GeneratorFunctionPrototype.prototype =
              Generator.prototype =
                Object.create(d));
            function defineIteratorMethods(t) {
              ["next", "throw", "return"].forEach(function (i) {
                define(t, i, function (t) {
                  return this._invoke(i, t);
                });
              });
            }
            function AsyncIterator(t, r) {
              var a;
              this._invoke = function enqueue(c, l) {
                function callInvokeWithMethodAndArg() {
                  return new r(function (a, u) {
                    !(function invoke(a, c, l, u) {
                      var h = tryCatch(t[a], t, c);
                      if ("throw" !== h.type) {
                        var d = h.arg,
                          p = d.value;
                        return p && "object" === i(p) && o.call(p, "__await")
                          ? r.resolve(p.__await).then(
                              function (t) {
                                invoke("next", t, l, u);
                              },
                              function (t) {
                                invoke("throw", t, l, u);
                              }
                            )
                          : r.resolve(p).then(
                              function (t) {
                                (d.value = t), l(d);
                              },
                              function (t) {
                                return invoke("throw", t, l, u);
                              }
                            );
                      }
                      u(h.arg);
                    })(c, l, a, u);
                  });
                }
                return (a = a
                  ? a.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg
                    )
                  : callInvokeWithMethodAndArg());
              };
            }
            function maybeInvokeDelegate(t, i) {
              var r = t.iterator[i.method];
              if (void 0 === r) {
                if (((i.delegate = null), "throw" === i.method)) {
                  if (
                    t.iterator.return &&
                    ((i.method = "return"),
                    (i.arg = void 0),
                    maybeInvokeDelegate(t, i),
                    "throw" === i.method)
                  )
                    return h;
                  (i.method = "throw"),
                    (i.arg = new TypeError(
                      "The iterator does not provide a 'throw' method"
                    ));
                }
                return h;
              }
              var o = tryCatch(r, t.iterator, i.arg);
              if ("throw" === o.type)
                return (
                  (i.method = "throw"), (i.arg = o.arg), (i.delegate = null), h
                );
              var a = o.arg;
              return a
                ? a.done
                  ? ((i[t.resultName] = a.value),
                    (i.next = t.nextLoc),
                    "return" !== i.method &&
                      ((i.method = "next"), (i.arg = void 0)),
                    (i.delegate = null),
                    h)
                  : a
                : ((i.method = "throw"),
                  (i.arg = new TypeError("iterator result is not an object")),
                  (i.delegate = null),
                  h);
            }
            function pushTryEntry(t) {
              var i = { tryLoc: t[0] };
              1 in t && (i.catchLoc = t[1]),
                2 in t && ((i.finallyLoc = t[2]), (i.afterLoc = t[3])),
                this.tryEntries.push(i);
            }
            function resetTryEntry(t) {
              var i = t.completion || {};
              (i.type = "normal"), delete i.arg, (t.completion = i);
            }
            function Context(t) {
              (this.tryEntries = [{ tryLoc: "root" }]),
                t.forEach(pushTryEntry, this),
                this.reset(!0);
            }
            function values(t) {
              if (t) {
                var i = t[c];
                if (i) return i.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                  var r = -1,
                    a = function next() {
                      for (; ++r < t.length; )
                        if (o.call(t, r))
                          return (next.value = t[r]), (next.done = !1), next;
                      return (next.value = void 0), (next.done = !0), next;
                    };
                  return (a.next = a);
                }
              }
              return { next: doneResult };
            }
            function doneResult() {
              return { value: void 0, done: !0 };
            }
            return (
              (GeneratorFunction.prototype = GeneratorFunctionPrototype),
              define(g, "constructor", GeneratorFunctionPrototype),
              define(
                GeneratorFunctionPrototype,
                "constructor",
                GeneratorFunction
              ),
              (GeneratorFunction.displayName = define(
                GeneratorFunctionPrototype,
                u,
                "GeneratorFunction"
              )),
              (t.isGeneratorFunction = function (t) {
                var i = "function" == typeof t && t.constructor;
                return (
                  !!i &&
                  (i === GeneratorFunction ||
                    "GeneratorFunction" === (i.displayName || i.name))
                );
              }),
              (t.mark = function (t) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                    : ((t.__proto__ = GeneratorFunctionPrototype),
                      define(t, u, "GeneratorFunction")),
                  (t.prototype = Object.create(g)),
                  t
                );
              }),
              (t.awrap = function (t) {
                return { __await: t };
              }),
              defineIteratorMethods(AsyncIterator.prototype),
              define(AsyncIterator.prototype, l, function () {
                return this;
              }),
              (t.AsyncIterator = AsyncIterator),
              (t.async = function (i, r, o, a, c) {
                void 0 === c && (c = Promise);
                var l = new AsyncIterator(wrap(i, r, o, a), c);
                return t.isGeneratorFunction(r)
                  ? l
                  : l.next().then(function (t) {
                      return t.done ? t.value : l.next();
                    });
              }),
              defineIteratorMethods(g),
              define(g, u, "Generator"),
              define(g, c, function () {
                return this;
              }),
              define(g, "toString", function () {
                return "[object Generator]";
              }),
              (t.keys = function (t) {
                var i = [];
                for (var r in t) i.push(r);
                return (
                  i.reverse(),
                  function next() {
                    for (; i.length; ) {
                      var r = i.pop();
                      if (r in t)
                        return (next.value = r), (next.done = !1), next;
                    }
                    return (next.done = !0), next;
                  }
                );
              }),
              (t.values = values),
              (Context.prototype = {
                constructor: Context,
                reset: function reset(t) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = void 0),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = void 0),
                    this.tryEntries.forEach(resetTryEntry),
                    !t)
                  )
                    for (var i in this)
                      "t" === i.charAt(0) &&
                        o.call(this, i) &&
                        !isNaN(+i.slice(1)) &&
                        (this[i] = void 0);
                },
                stop: function stop() {
                  this.done = !0;
                  var t = this.tryEntries[0].completion;
                  if ("throw" === t.type) throw t.arg;
                  return this.rval;
                },
                dispatchException: function dispatchException(t) {
                  if (this.done) throw t;
                  var i = this;
                  function handle(r, o) {
                    return (
                      (c.type = "throw"),
                      (c.arg = t),
                      (i.next = r),
                      o && ((i.method = "next"), (i.arg = void 0)),
                      !!o
                    );
                  }
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var a = this.tryEntries[r],
                      c = a.completion;
                    if ("root" === a.tryLoc) return handle("end");
                    if (a.tryLoc <= this.prev) {
                      var l = o.call(a, "catchLoc"),
                        u = o.call(a, "finallyLoc");
                      if (l && u) {
                        if (this.prev < a.catchLoc)
                          return handle(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc)
                          return handle(a.finallyLoc);
                      } else if (l) {
                        if (this.prev < a.catchLoc)
                          return handle(a.catchLoc, !0);
                      } else {
                        if (!u)
                          throw new Error(
                            "try statement without catch or finally"
                          );
                        if (this.prev < a.finallyLoc)
                          return handle(a.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function abrupt(t, i) {
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var a = this.tryEntries[r];
                    if (
                      a.tryLoc <= this.prev &&
                      o.call(a, "finallyLoc") &&
                      this.prev < a.finallyLoc
                    ) {
                      var c = a;
                      break;
                    }
                  }
                  c &&
                    ("break" === t || "continue" === t) &&
                    c.tryLoc <= i &&
                    i <= c.finallyLoc &&
                    (c = null);
                  var l = c ? c.completion : {};
                  return (
                    (l.type = t),
                    (l.arg = i),
                    c
                      ? ((this.method = "next"), (this.next = c.finallyLoc), h)
                      : this.complete(l)
                  );
                },
                complete: function complete(t, i) {
                  if ("throw" === t.type) throw t.arg;
                  return (
                    "break" === t.type || "continue" === t.type
                      ? (this.next = t.arg)
                      : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && i && (this.next = i),
                    h
                  );
                },
                finish: function finish(t) {
                  for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var r = this.tryEntries[i];
                    if (r.finallyLoc === t)
                      return (
                        this.complete(r.completion, r.afterLoc),
                        resetTryEntry(r),
                        h
                      );
                  }
                },
                catch: function _catch(t) {
                  for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var r = this.tryEntries[i];
                    if (r.tryLoc === t) {
                      var o = r.completion;
                      if ("throw" === o.type) {
                        var a = o.arg;
                        resetTryEntry(r);
                      }
                      return a;
                    }
                  }
                  throw new Error("illegal catch attempt");
                },
                delegateYield: function delegateYield(t, i, r) {
                  return (
                    (this.delegate = {
                      iterator: values(t),
                      resultName: i,
                      nextLoc: r,
                    }),
                    "next" === this.method && (this.arg = void 0),
                    h
                  );
                },
              }),
              t
            );
          })("object" === i(t) ? t.exports : {});
        try {
          regeneratorRuntime = o;
        } catch (t) {
          "object" ===
          ("undefined" == typeof globalThis ? "undefined" : i(globalThis))
            ? (globalThis.regeneratorRuntime = o)
            : Function("r", "regeneratorRuntime = r")(o);
        }
      }.call(this, r(156)(t)));
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, i, r) {
      var o = r(1),
        a = r(2),
        c = r(5),
        l = r(4),
        u = r(0);
      function _createSuper(t) {
        var i = (function _isNativeReflectConstruct() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var r,
            o = u(t);
          if (i) {
            var a = u(this).constructor;
            r = Reflect.construct(o, arguments, a);
          } else r = o.apply(this, arguments);
          return l(this, r);
        };
      }
      var h = r(59),
        d = r(365),
        p = (function (t) {
          "use strict";
          c(CrossmarkBadge, t);
          var i = _createSuper(CrossmarkBadge);
          function CrossmarkBadge(t, r) {
            var a;
            return (
              o(this, CrossmarkBadge),
              ((a = i.call(this, t)).endpoint =
                "https://crossmark.crossref.org/dialog"),
              (a.scriptVersion = "v2.0"),
              (a.stylesheetUrl =
                "https://crossmark-cdn.crossref.org/widget/v2.0/style.css"),
              (a.renderDialog = r),
              (a.articleView = t),
              (a.crossmarkLinks = document.querySelectorAll(
                "[data-target=crossmark]"
              )),
              a
            );
          }
          return (
            a(CrossmarkBadge, [
              {
                key: "initiate",
                value: function initiate() {
                  if (0 !== this.crossmarkLinks.length) {
                    var t = this.buildQuery(),
                      i = d.buildQueryString(t),
                      r = "".concat(this.endpoint).concat(i),
                      o = d.buildLinkElement(this.stylesheetUrl);
                    document.querySelector("head").appendChild(o),
                      this.buildDialog(r, d.isIos()),
                      this.bindLinksToUrl(r),
                      this.bindDialogClose(),
                      this.main
                        .querySelector(".crossmark-popup__inner")
                        .addEventListener("click", function (t) {
                          t.stopPropagation();
                        });
                  }
                },
              },
              {
                key: "buildDialog",
                value: function buildDialog(t, i) {
                  (this.main = document.createElement("div")),
                    (this.main.innerHTML = this.renderDialog({
                      query: t,
                      isIos: i,
                    })),
                    this.main.setAttribute("id", "crossmark-widget"),
                    this.hide(),
                    document.body.appendChild(this.main);
                },
              },
              {
                key: "bindDialogClose",
                value: function bindDialogClose() {
                  var t = this;
                  this.main
                    .querySelectorAll(
                      ".crossmark-overlay, .crossmark-popup, .crossmark-popup__btn-close"
                    )
                    .forEach(function (i) {
                      i.addEventListener("click", function (i) {
                        t.hide(), i.preventDefault(), i.stopPropagation();
                      });
                    });
                },
              },
              {
                key: "buildQuery",
                value: function buildQuery() {
                  return {
                    doi: this.crossmarkLinks[0].dataset.doi,
                    domain: window.location.hostname,
                    uri_scheme: window.location.protocol,
                    cm_version: this.scriptVersion,
                  };
                },
              },
              {
                key: "bindLinksToUrl",
                value: function bindLinksToUrl(t) {
                  var i = this;
                  this.crossmarkLinks.forEach(function (r) {
                    (r.style.cursor = "pointer"),
                      r.setAttribute("href", t),
                      r.addEventListener("click", function (t) {
                        i.show(r),
                          d.isIos() &&
                            (i.main.querySelector(
                              ".crossmark-popup__inner"
                            ).style.top = "".concat(window.scrollY, "px")),
                          t.preventDefault(),
                          t.stopPropagation(),
                          t.stopImmediatePropagation();
                      });
                  });
                },
              },
              {
                key: "show",
                value: function show(t) {
                  var i = this;
                  if (this.main) {
                    var r;
                    this.main.style.display = "block";
                    var o = document.querySelector(".crossmark-popup__inner"),
                      a = document.querySelector(".core-collateral");
                    null === (r = this.articleView.pill.focusTrap) ||
                      void 0 === r ||
                      r.init(o, a, t),
                      this.articleView.pill.escapeModals.push(function () {
                        i.hide();
                      });
                  }
                },
              },
              {
                key: "hide",
                value: function hide() {
                  var t, i;
                  this.main &&
                    ((this.main.style.display = "none"),
                    null === (t = this.articleView.pill.focusTrap) ||
                      void 0 === t ||
                      t.deactivate(),
                    null === (i = this.articleView.pill.escapeModals) ||
                      void 0 === i ||
                      i.pop());
                },
              },
            ]),
            CrossmarkBadge
          );
        })(h);
      t.exports = p;
    },
    function (t, i, r) {
      var o = r(1),
        a = r(2),
        c = (function () {
          "use strict";
          function Utils() {
            o(this, Utils);
          }
          return (
            a(Utils, null, [
              {
                key: "buildQueryString",
                value: function buildQueryString(t) {
                  var i = [];
                  for (var r in t)
                    i.push(
                      encodeURIComponent(r) + "=" + encodeURIComponent(t[r])
                    );
                  return "?" + i.join("&");
                },
              },
              {
                key: "isIos",
                value: function isIos() {
                  return (
                    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                    !window.MSStream
                  );
                },
              },
              {
                key: "buildLinkElement",
                value: function buildLinkElement(t) {
                  var i = document.createElement("link");
                  return (
                    i.setAttribute("href", t),
                    i.setAttribute("type", "text/css"),
                    i.setAttribute("rel", "stylesheet"),
                    i
                  );
                },
              },
            ]),
            Utils
          );
        })();
      t.exports = c;
    },
    function (t, i, r) {
      "use strict";
      r.r(i),
        r.d(i, "createFocusTrap", function () {
          return p;
        });
      var o = r(56);
      /*!
       * focus-trap 6.9.4
       * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
       */ function ownKeys(t, i) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          i &&
            (o = o.filter(function (i) {
              return Object.getOwnPropertyDescriptor(t, i).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function _objectSpread2(t) {
        for (var i = 1; i < arguments.length; i++) {
          var r = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(r), !0).forEach(function (i) {
                _defineProperty(t, i, r[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (i) {
                Object.defineProperty(
                  t,
                  i,
                  Object.getOwnPropertyDescriptor(r, i)
                );
              });
        }
        return t;
      }
      function _defineProperty(t, i, r) {
        return (
          i in t
            ? Object.defineProperty(t, i, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[i] = r),
          t
        );
      }
      var a,
        c =
          ((a = []),
          {
            activateTrap: function activateTrap(t) {
              if (a.length > 0) {
                var i = a[a.length - 1];
                i !== t && i.pause();
              }
              var r = a.indexOf(t);
              -1 === r || a.splice(r, 1), a.push(t);
            },
            deactivateTrap: function deactivateTrap(t) {
              var i = a.indexOf(t);
              -1 !== i && a.splice(i, 1),
                a.length > 0 && a[a.length - 1].unpause();
            },
          }),
        l = function delay(t) {
          return setTimeout(t, 0);
        },
        u = function findIndex(t, i) {
          var r = -1;
          return (
            t.every(function (t, o) {
              return !i(t) || ((r = o), !1);
            }),
            r
          );
        },
        h = function valueOrHandler(t) {
          for (
            var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), o = 1;
            o < i;
            o++
          )
            r[o - 1] = arguments[o];
          return "function" == typeof t ? t.apply(void 0, r) : t;
        },
        d = function getActualTarget(t) {
          return t.target.shadowRoot && "function" == typeof t.composedPath
            ? t.composedPath()[0]
            : t.target;
        },
        p = function createFocusTrap(t, i) {
          var r,
            a = (null == i ? void 0 : i.document) || document,
            p = _objectSpread2(
              {
                returnFocusOnDeactivate: !0,
                escapeDeactivates: !0,
                delayInitialFocus: !0,
              },
              i
            ),
            v = {
              containers: [],
              containerGroups: [],
              tabbableGroups: [],
              nodeFocusedBeforeActivation: null,
              mostRecentlyFocusedNode: null,
              active: !1,
              paused: !1,
              delayInitialFocusTimer: void 0,
            },
            g = function getOption(t, i, r) {
              return t && void 0 !== t[i] ? t[i] : p[r || i];
            },
            m = function findContainerIndex(t) {
              return v.containerGroups.findIndex(function (i) {
                var r = i.container,
                  o = i.tabbableNodes;
                return (
                  r.contains(t) ||
                  o.find(function (i) {
                    return i === t;
                  })
                );
              });
            },
            y = function getNodeForOption(t) {
              var i = p[t];
              if ("function" == typeof i) {
                for (
                  var r = arguments.length,
                    o = new Array(r > 1 ? r - 1 : 0),
                    c = 1;
                  c < r;
                  c++
                )
                  o[c - 1] = arguments[c];
                i = i.apply(void 0, o);
              }
              if ((!0 === i && (i = void 0), !i)) {
                if (void 0 === i || !1 === i) return i;
                throw new Error(
                  "`".concat(
                    t,
                    "` was specified but was not a node, or did not return a node"
                  )
                );
              }
              var l = i;
              if ("string" == typeof i && !(l = a.querySelector(i)))
                throw new Error(
                  "`".concat(t, "` as selector refers to no known node")
                );
              return l;
            },
            b = function getInitialFocusNode() {
              var t = y("initialFocus");
              if (!1 === t) return !1;
              if (void 0 === t)
                if (m(a.activeElement) >= 0) t = a.activeElement;
                else {
                  var i = v.tabbableGroups[0];
                  t = (i && i.firstTabbableNode) || y("fallbackFocus");
                }
              if (!t)
                throw new Error(
                  "Your focus-trap needs to have at least one focusable element"
                );
              return t;
            },
            _ = function updateTabbableNodes() {
              if (
                ((v.containerGroups = v.containers.map(function (t) {
                  var i = Object(o.tabbable)(t, p.tabbableOptions),
                    r = Object(o.focusable)(t, p.tabbableOptions);
                  return {
                    container: t,
                    tabbableNodes: i,
                    focusableNodes: r,
                    firstTabbableNode: i.length > 0 ? i[0] : null,
                    lastTabbableNode: i.length > 0 ? i[i.length - 1] : null,
                    nextTabbableNode: function nextTabbableNode(t) {
                      var i =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1],
                        a = r.findIndex(function (i) {
                          return i === t;
                        });
                      if (!(a < 0))
                        return i
                          ? r.slice(a + 1).find(function (t) {
                              return Object(o.isTabbable)(t, p.tabbableOptions);
                            })
                          : r
                              .slice(0, a)
                              .reverse()
                              .find(function (t) {
                                return Object(o.isTabbable)(
                                  t,
                                  p.tabbableOptions
                                );
                              });
                    },
                  };
                })),
                (v.tabbableGroups = v.containerGroups.filter(function (t) {
                  return t.tabbableNodes.length > 0;
                })),
                v.tabbableGroups.length <= 0 && !y("fallbackFocus"))
              )
                throw new Error(
                  "Your focus-trap must have at least one container with at least one tabbable node in it at all times"
                );
            },
            w = function tryFocus(t) {
              !1 !== t &&
                t !== a.activeElement &&
                (t && t.focus
                  ? (t.focus({ preventScroll: !!p.preventScroll }),
                    (v.mostRecentlyFocusedNode = t),
                    (function isSelectableInput(t) {
                      return (
                        t.tagName &&
                        "input" === t.tagName.toLowerCase() &&
                        "function" == typeof t.select
                      );
                    })(t) && t.select())
                  : tryFocus(b()));
            },
            x = function getReturnFocusNode(t) {
              var i = y("setReturnFocus", t);
              return i || (!1 !== i && t);
            },
            S = function checkPointerDown(t) {
              var i = d(t);
              m(i) >= 0 ||
                (h(p.clickOutsideDeactivates, t)
                  ? r.deactivate({
                      returnFocus:
                        p.returnFocusOnDeactivate &&
                        !Object(o.isFocusable)(i, p.tabbableOptions),
                    })
                  : h(p.allowOutsideClick, t) || t.preventDefault());
            },
            k = function checkFocusIn(t) {
              var i = d(t),
                r = m(i) >= 0;
              r || i instanceof Document
                ? r && (v.mostRecentlyFocusedNode = i)
                : (t.stopImmediatePropagation(),
                  w(v.mostRecentlyFocusedNode || b()));
            },
            T = function checkKey(t) {
              if (
                (function isEscapeEvent(t) {
                  return (
                    "Escape" === t.key || "Esc" === t.key || 27 === t.keyCode
                  );
                })(t) &&
                !1 !== h(p.escapeDeactivates, t)
              )
                return t.preventDefault(), void r.deactivate();
              (function isTabEvent(t) {
                return "Tab" === t.key || 9 === t.keyCode;
              })(t) &&
                (function checkTab(t) {
                  var i = d(t);
                  _();
                  var r = null;
                  if (v.tabbableGroups.length > 0) {
                    var a = m(i),
                      c = a >= 0 ? v.containerGroups[a] : void 0;
                    if (a < 0)
                      r = t.shiftKey
                        ? v.tabbableGroups[v.tabbableGroups.length - 1]
                            .lastTabbableNode
                        : v.tabbableGroups[0].firstTabbableNode;
                    else if (t.shiftKey) {
                      var l = u(v.tabbableGroups, function (t) {
                        var r = t.firstTabbableNode;
                        return i === r;
                      });
                      if (
                        (l < 0 &&
                          (c.container === i ||
                            (Object(o.isFocusable)(i, p.tabbableOptions) &&
                              !Object(o.isTabbable)(i, p.tabbableOptions) &&
                              !c.nextTabbableNode(i, !1))) &&
                          (l = a),
                        l >= 0)
                      ) {
                        var h = 0 === l ? v.tabbableGroups.length - 1 : l - 1;
                        r = v.tabbableGroups[h].lastTabbableNode;
                      }
                    } else {
                      var g = u(v.tabbableGroups, function (t) {
                        var r = t.lastTabbableNode;
                        return i === r;
                      });
                      if (
                        (g < 0 &&
                          (c.container === i ||
                            (Object(o.isFocusable)(i, p.tabbableOptions) &&
                              !Object(o.isTabbable)(i, p.tabbableOptions) &&
                              !c.nextTabbableNode(i))) &&
                          (g = a),
                        g >= 0)
                      ) {
                        var b = g === v.tabbableGroups.length - 1 ? 0 : g + 1;
                        r = v.tabbableGroups[b].firstTabbableNode;
                      }
                    }
                  } else r = y("fallbackFocus");
                  r && (t.preventDefault(), w(r));
                })(t);
            },
            E = function checkClick(t) {
              var i = d(t);
              m(i) >= 0 ||
                h(p.clickOutsideDeactivates, t) ||
                h(p.allowOutsideClick, t) ||
                (t.preventDefault(), t.stopImmediatePropagation());
            },
            O = function addListeners() {
              if (v.active)
                return (
                  c.activateTrap(r),
                  (v.delayInitialFocusTimer = p.delayInitialFocus
                    ? l(function () {
                        w(b());
                      })
                    : w(b())),
                  a.addEventListener("focusin", k, !0),
                  a.addEventListener("mousedown", S, {
                    capture: !0,
                    passive: !1,
                  }),
                  a.addEventListener("touchstart", S, {
                    capture: !0,
                    passive: !1,
                  }),
                  a.addEventListener("click", E, { capture: !0, passive: !1 }),
                  a.addEventListener("keydown", T, {
                    capture: !0,
                    passive: !1,
                  }),
                  r
                );
            },
            I = function removeListeners() {
              if (v.active)
                return (
                  a.removeEventListener("focusin", k, !0),
                  a.removeEventListener("mousedown", S, !0),
                  a.removeEventListener("touchstart", S, !0),
                  a.removeEventListener("click", E, !0),
                  a.removeEventListener("keydown", T, !0),
                  r
                );
            };
          return (
            (r = {
              get active() {
                return v.active;
              },
              get paused() {
                return v.paused;
              },
              activate: function activate(t) {
                if (v.active) return this;
                var i = g(t, "onActivate"),
                  r = g(t, "onPostActivate"),
                  o = g(t, "checkCanFocusTrap");
                o || _(),
                  (v.active = !0),
                  (v.paused = !1),
                  (v.nodeFocusedBeforeActivation = a.activeElement),
                  i && i();
                var c = function finishActivation() {
                  o && _(), O(), r && r();
                };
                return o
                  ? (o(v.containers.concat()).then(c, c), this)
                  : (c(), this);
              },
              deactivate: function deactivate(t) {
                if (!v.active) return this;
                var i = _objectSpread2(
                  {
                    onDeactivate: p.onDeactivate,
                    onPostDeactivate: p.onPostDeactivate,
                    checkCanReturnFocus: p.checkCanReturnFocus,
                  },
                  t
                );
                clearTimeout(v.delayInitialFocusTimer),
                  (v.delayInitialFocusTimer = void 0),
                  I(),
                  (v.active = !1),
                  (v.paused = !1),
                  c.deactivateTrap(r);
                var o = g(i, "onDeactivate"),
                  a = g(i, "onPostDeactivate"),
                  u = g(i, "checkCanReturnFocus"),
                  h = g(i, "returnFocus", "returnFocusOnDeactivate");
                o && o();
                var d = function finishDeactivation() {
                  l(function () {
                    h && w(x(v.nodeFocusedBeforeActivation)), a && a();
                  });
                };
                return h && u
                  ? (u(x(v.nodeFocusedBeforeActivation)).then(d, d), this)
                  : (d(), this);
              },
              pause: function pause() {
                return v.paused || !v.active || ((v.paused = !0), I()), this;
              },
              unpause: function unpause() {
                return v.paused && v.active
                  ? ((v.paused = !1), _(), O(), this)
                  : this;
              },
              updateContainerElements: function updateContainerElements(t) {
                var i = [].concat(t).filter(Boolean);
                return (
                  (v.containers = i.map(function (t) {
                    return "string" == typeof t ? a.querySelector(t) : t;
                  })),
                  v.active && _(),
                  this
                );
              },
            }).updateContainerElements(t),
            r
          );
        };
    },
    function (t, i, r) {
      var o = r(12),
        a = r(1),
        c = r(2),
        l = r(3),
        u = r(5),
        h = r(4),
        d = r(0);
      function ownKeys(t, i) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          i &&
            (o = o.filter(function (i) {
              return Object.getOwnPropertyDescriptor(t, i).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function _objectSpread(t) {
        for (var i = 1; i < arguments.length; i++) {
          var r = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(r), !0).forEach(function (i) {
                o(t, i, r[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (i) {
                Object.defineProperty(
                  t,
                  i,
                  Object.getOwnPropertyDescriptor(r, i)
                );
              });
        }
        return t;
      }
      function _createSuper(t) {
        var i = (function _isNativeReflectConstruct() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var r,
            o = d(t);
          if (i) {
            var a = d(this).constructor;
            r = Reflect.construct(o, arguments, a);
          } else r = o.apply(this, arguments);
          return h(this, r);
        };
      }
      var p = r(368),
        v = (function (t) {
          "use strict";
          u(ReferencesPopup, t);
          var i = _createSuper(ReferencesPopup);
          function ReferencesPopup(t, r) {
            var o,
              c =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : { classNames: {} };
            return (
              a(this, ReferencesPopup),
              ((o = i.call(this)).s = {
                referencesPopup: ".references-pop-up",
                closeButton: ".references-pop-up__close",
                referenceNumber: ".references-pop-up__heading-number",
                referencesList: ".references-pop-up__items",
                citationTarget:
                  ".to-citation__accordion .to-citation, .to-citation__accordion .pill-link",
                popUpCitationTarget: ".references-pop-up__items .to-citation",
                citationList: ".to-citation__accordion",
                activeClass: "active",
                SHOW: "show",
                SHOWN: "references-pop-up--shown",
              }),
              (o.s = _objectSpread(_objectSpread({}, o.s), c.classNames)),
              (o.data = t),
              (o.articleView = r),
              (o.tmpl = p),
              (o.navMargin = { top: 80 }),
              (o.menuPositionReference = t.decorationsPosRef),
              o
            );
          }
          return (
            c(ReferencesPopup, [
              {
                key: "initiate",
                value: function initiate() {
                  l(d(ReferencesPopup.prototype), "initiate", this).call(this);
                  var t = this.stringToHTML(this.tmpl());
                  document.body.appendChild(t),
                    (this.main = document.querySelector(
                      this.s.referencesPopup
                    )),
                    this.setElements(),
                    this.addListeners();
                },
              },
              {
                key: "setElements",
                value: function setElements() {
                  (this.refList = this.main.querySelector(
                    this.s.referencesList
                  )),
                    (this.closeButton = this.main.querySelector(
                      this.s.closeButton
                    )),
                    (this.referenceNumber = this.main.querySelector(
                      this.s.referenceNumber
                    ));
                },
              },
              {
                key: "addListeners",
                value: function addListeners() {
                  var t = this;
                  this.articleView.subscribeAnchorClick(
                    this.s.citationTarget,
                    this.showPopUp.bind(this)
                  ),
                    this.closeButton.addEventListener("click", function (i) {
                      i.preventDefault(), t.hide();
                    }),
                    this.articleView.subscribe(
                      "scroll",
                      this.repositionMenu.bind(this)
                    );
                },
              },
              {
                key: "repositionMenu",
                value: function repositionMenu() {
                  if (!this.isClosed) {
                    var t =
                        this.menuPositionReference.getBoundingClientRect().top,
                      i = this.main.getBoundingClientRect(),
                      r = this.articleView.getArticle().getBoundingClientRect(),
                      o = Math.max(t, this.navMargin.top);
                    (o = Math.min(r.bottom - i.height, o)),
                      (this.main.style.top = o + "px");
                  }
                },
              },
              {
                key: "show",
                value: function show() {
                  var t, i, r, o, a, c;
                  null === (t = this.articleView.pill) ||
                    void 0 === t ||
                    t.closePill(),
                    null === (i = this.main) ||
                      void 0 === i ||
                      null === (r = i.classList) ||
                      void 0 === r ||
                      r.add(this.s.SHOW),
                    null === (o = this.articleView) ||
                      void 0 === o ||
                      null === (a = o.getArticle().classList) ||
                      void 0 === a ||
                      a.add(this.s.SHOWN),
                    null === (c = this.main) ||
                      void 0 === c ||
                      c.setAttribute("aria-hidden", "false");
                },
              },
              {
                key: "hide",
                value: function hide() {
                  var t, i, r;
                  null === (t = this.main) ||
                    void 0 === t ||
                    t.classList.remove(this.s.SHOW),
                    null === (i = this.articleView) ||
                      void 0 === i ||
                      i.getArticle().classList.remove(this.s.SHOWN),
                    null === (r = this.main) ||
                      void 0 === r ||
                      r.setAttribute("aria-hidden", "true");
                },
              },
              {
                key: "showPopUp",
                value: function showPopUp(t) {
                  var i = this;
                  this.show();
                  var r,
                    o = t.currentTarget.refParent;
                  if (
                    (r = o
                      ? o.querySelector(this.s.citationList)
                      : t.currentTarget.closest(this.s.citationList))
                  ) {
                    if (
                      ((this.refList.innerHTML = r.outerHTML),
                      0 !== this.refList.children.length)
                    ) {
                      this.refList
                        .querySelector(this.s.citationList)
                        .removeAttribute("style");
                      var a = r.querySelectorAll(this.s.citationTarget),
                        c = this.refList.querySelectorAll(
                          this.s.citationTarget
                        );
                      this.setReferenceLabel(t.currentTarget),
                        c.forEach(function (t, r) {
                          (t.pointsTo = a[r].pointsTo),
                            t.addEventListener(
                              "click",
                              i.articleView.onToCitationClick.bind(i)
                            );
                        }),
                        this.setToggleActive(t);
                    }
                  } else
                    console.debug(
                      "ReferencesPopup::Could not find parent selector"
                    );
                },
              },
              {
                key: "setReferenceLabel",
                value: function setReferenceLabel(t) {
                  var i = t.getAttribute("href").split("-")[2];
                  this.referenceNumber.textContent = i
                    ? i.match(/(\d+)/)[0]
                    : "";
                },
              },
              {
                key: "setToggleActive",
                value: function setToggleActive(t) {
                  var i = this;
                  this.refList
                    .querySelectorAll(this.s.citationTarget)
                    .forEach(function (r) {
                      t.currentTarget.href === r.href
                        ? r.classList.add(i.s.activeClass)
                        : r.classList.remove(i.s.activeClass);
                    });
                },
              },
              {
                key: "isClosed",
                get: function get() {
                  var t;
                  return !(
                    null !== (t = this.main) &&
                    void 0 !== t &&
                    t.classList.contains(this.s.SHOW)
                  );
                },
              },
            ]),
            ReferencesPopup
          );
        })(r(59));
      t.exports = v;
    },
    function (t, i, r) {
      r(50);
      t.exports = function template(t) {
        var i = "";
        return (i +=
          '<div class="references-pop-up fade" aria-hidden="true"><div class="references-pop-up__heading text-dark d-flex align-items-center"><div class="references-pop-up__title flex-grow-1">Reference #<span class="references-pop-up__heading-number">1</span></div><a class="references-pop-up__close text-dark" href="#" title="close pop-up"><i class="icon-close" aria-hidden="true"></i></a></div><div class="references-pop-up__items citations to-citation__accordion external-links"></div></div>');
      };
    },
    ,
    function (t, i, r) {
      var o,
        a = this,
        c = {
          id: "sections-navbar",
          observerOptions: { threshold: 0, rootMargin: "-30% 0% -65% 0%" },
          animationSpeed: "500",
          init: function init(t, i, l) {
            if (
              ((c.main =
                document.querySelector('[data-core-nav="article"]') ||
                document.getElementById(c.id)),
              c.main)
            ) {
              if (
                (c.main.classList.add(c.id),
                l && (o = r(371)),
                !c.main.querySelector("." + c.id + "__container"))
              ) {
                var u = document.createElement("div");
                u.classList.add(c.id + "__container"),
                  (u.innerHTML = c.main.innerHTML),
                  (c.main.innerHTML = u.outerHTML);
              }
              if (c.main) {
                var h =
                  c.main.querySelector(".".concat(c.id, "__list")) ||
                  c.main.querySelector("ul");
                return (
                  h &&
                    (t.length
                      ? t.map(function (t) {
                          var i = h.querySelector(
                            '[href="#' + t.parentNode.id + '"]'
                          );
                          (t.sectionParent.navbarPointer = i),
                            c.observe(t.sectionParent);
                        })
                      : c.main.classList.add("".concat(c.id, "--empty")),
                    i && (a.articleView = i),
                    (c.list = h),
                    c.modifyNewlyCreated(h)),
                  c.main
                );
              }
            }
          },
          modifyNewlyCreated: function modifyNewlyCreated(t) {
            o && o.initFor(t);
          },
          update: function update() {
            o && o.markInnerScroll({ target: c.list });
          },
          createNavItem: function createNavItem(t, i) {
            var r = document.createElement("a");
            (r.href = "#" + t.id),
              (r.innerHTML = t.innerHTML),
              r.classList.add("".concat(c.id, "__list__item")),
              r.addEventListener("click", function (i) {
                return c.moveTo(i, t);
              });
            var o = document.createElement("li");
            return o.appendChild(r), o;
          },
          observe: function observe(t) {
            void 0 !== window.IntersectionObserver &&
              (c.observer ||
                (c.observer = new IntersectionObserver(
                  c.onIntersectionChange,
                  c.observerOptions
                )),
              c.observer.observe(t));
          },
          onIntersectionChange: function onIntersectionChange(t) {
            t.map(function (t) {
              if (t.isIntersecting) {
                var i,
                  r = c.main.querySelector(".active");
                r && r.classList.remove("active"),
                  null === (i = t.target.navbarPointer) ||
                    void 0 === i ||
                    i.classList.add("active");
              } else {
                var o;
                null === (o = t.target.navbarPointer) ||
                  void 0 === o ||
                  o.classList.remove("active");
              }
            });
          },
          moveTo: function moveTo(t, i) {
            t.preventDefault();
            var r = a.articleView ? a.articleView.getTopOverlayHeight() : 0;
            $("html, body").animate(
              { scrollTop: i.offsetTop - r },
              c.animationSpeed
            );
          },
        },
        l = c;
      t.exports = l;
    },
    function (t, i) {
      var r = {
          throttle: 150,
          markInnerScroll: function markInnerScroll(t) {
            var i = t.target;
            i &&
              (i.scrollLeft !== i.scrollWidth - i.clientWidth
                ? i.classList.add("js--has-scroll-right")
                : i.classList.remove("js--has-scroll-right"),
              i.scrollLeft > 0
                ? i.classList.add("js--has-scroll-left")
                : i.classList.remove("js--has-scroll-left"),
              i.scrollTop !== i.scrollHeight - i.clientHeight
                ? i.classList.add("js--has-scroll-bottom")
                : i.classList.remove("js--has-scroll-bottom"),
              i.scrollTop > 0
                ? i.classList.add("js--has-scroll-top")
                : i.classList.remove("js--has-scroll-top"));
          },
          initFor: function initFor(t) {
            var i;
            r.markInnerScroll({ target: t }),
              t.addEventListener("scroll", r.markInnerScroll);
            var o = function throttleMarking() {
              i ||
                (i = setTimeout(function () {
                  r.markInnerScroll({ target: t }), (i = null);
                }, r.throttle));
            };
            window.addEventListener("scroll", o),
              window.addEventListener("resize", o);
          },
          init: function init() {
            var t = document.querySelectorAll(".js--indicate-inner-scroll");
            t.length && t.forEach(r.initFor);
          },
        },
        o = r;
      t.exports = o;
    },
    function (t, i, r) {
      var o = r(8);
      /**
       * Owl carousel
       * @version 2.3.4
       * @author Bartosz Wojciechowski
       * @author David Deutsch
       * @license The MIT License (MIT)
       * @todo Lazy Load Icon
       * @todo prevent animationend bubling
       * @todo itemsScaleUp
       * @todo Test Zepto
       * @todo stagePadding calculate wrong active classes
       */ !(function (t, i, r, a) {
        function Owl(i, r) {
          (this.settings = null),
            (this.options = t.extend({}, Owl.Defaults, r)),
            (this.$element = t(i)),
            (this._handlers = {}),
            (this._plugins = {}),
            (this._supress = {}),
            (this._current = null),
            (this._speed = null),
            (this._coordinates = []),
            (this._breakpoint = null),
            (this._width = null),
            (this._items = []),
            (this._clones = []),
            (this._mergers = []),
            (this._widths = []),
            (this._invalidated = {}),
            (this._pipe = []),
            (this._drag = {
              time: null,
              target: null,
              pointer: null,
              stage: { start: null, current: null },
              direction: null,
            }),
            (this._states = {
              current: {},
              tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"],
              },
            }),
            t.each(
              ["onResize", "onThrottledResize"],
              t.proxy(function (i, r) {
                this._handlers[r] = t.proxy(this[r], this);
              }, this)
            ),
            t.each(
              Owl.Plugins,
              t.proxy(function (t, i) {
                this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new i(
                  this
                );
              }, this)
            ),
            t.each(
              Owl.Workers,
              t.proxy(function (i, r) {
                this._pipe.push({
                  filter: r.filter,
                  run: t.proxy(r.run, this),
                });
              }, this)
            ),
            this.setup(),
            this.initialize();
        }
        (Owl.Defaults = {
          items: 3,
          loop: !1,
          center: !1,
          rewind: !1,
          checkVisibility: !0,
          mouseDrag: !0,
          touchDrag: !0,
          pullDrag: !0,
          freeDrag: !1,
          margin: 0,
          stagePadding: 0,
          merge: !1,
          mergeFit: !0,
          autoWidth: !1,
          startPosition: 0,
          rtl: !1,
          smartSpeed: 250,
          fluidSpeed: !1,
          dragEndSpeed: !1,
          responsive: {},
          responsiveRefreshRate: 200,
          responsiveBaseElement: i,
          fallbackEasing: "swing",
          slideTransition: "",
          info: !1,
          nestedItemSelector: !1,
          itemElement: "div",
          stageElement: "div",
          refreshClass: "owl-refresh",
          loadedClass: "owl-loaded",
          loadingClass: "owl-loading",
          rtlClass: "owl-rtl",
          responsiveClass: "owl-responsive",
          dragClass: "owl-drag",
          itemClass: "owl-item",
          stageClass: "owl-stage",
          stageOuterClass: "owl-stage-outer",
          grabClass: "owl-grab",
        }),
          (Owl.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
          (Owl.Type = { Event: "event", State: "state" }),
          (Owl.Plugins = {}),
          (Owl.Workers = [
            {
              filter: ["width", "settings"],
              run: function run() {
                this._width = this.$element.width();
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function run(t) {
                t.current =
                  this._items && this._items[this.relative(this._current)];
              },
            },
            {
              filter: ["items", "settings"],
              run: function run() {
                this.$stage.children(".cloned").remove();
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function run(t) {
                var i = this.settings.margin || "",
                  r = !this.settings.autoWidth,
                  o = this.settings.rtl,
                  a = {
                    width: "auto",
                    "margin-left": o ? i : "",
                    "margin-right": o ? "" : i,
                  };
                !r && this.$stage.children().css(a), (t.css = a);
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function run(t) {
                var i =
                    (this.width() / this.settings.items).toFixed(3) -
                    this.settings.margin,
                  r = null,
                  o = this._items.length,
                  a = !this.settings.autoWidth,
                  c = [];
                for (t.items = { merge: !1, width: i }; o--; )
                  (r = this._mergers[o]),
                    (r =
                      (this.settings.mergeFit &&
                        Math.min(r, this.settings.items)) ||
                      r),
                    (t.items.merge = r > 1 || t.items.merge),
                    (c[o] = a ? i * r : this._items[o].width());
                this._widths = c;
              },
            },
            {
              filter: ["items", "settings"],
              run: function run() {
                var i = [],
                  r = this._items,
                  o = this.settings,
                  a = Math.max(2 * o.items, 4),
                  c = 2 * Math.ceil(r.length / 2),
                  l = o.loop && r.length ? (o.rewind ? a : Math.max(a, c)) : 0,
                  u = "",
                  h = "";
                for (l /= 2; l > 0; )
                  i.push(this.normalize(i.length / 2, !0)),
                    (u += r[i[i.length - 1]][0].outerHTML),
                    i.push(
                      this.normalize(r.length - 1 - (i.length - 1) / 2, !0)
                    ),
                    (h = r[i[i.length - 1]][0].outerHTML + h),
                    (l -= 1);
                (this._clones = i),
                  t(u).addClass("cloned").appendTo(this.$stage),
                  t(h).addClass("cloned").prependTo(this.$stage);
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function run() {
                for (
                  var t = this.settings.rtl ? 1 : -1,
                    i = this._clones.length + this._items.length,
                    r = -1,
                    o = 0,
                    a = 0,
                    c = [];
                  ++r < i;

                )
                  (o = c[r - 1] || 0),
                    (a = this._widths[this.relative(r)] + this.settings.margin),
                    c.push(o + a * t);
                this._coordinates = c;
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function run() {
                var t = this.settings.stagePadding,
                  i = this._coordinates,
                  r = {
                    width: Math.ceil(Math.abs(i[i.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || "",
                  };
                this.$stage.css(r);
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function run(t) {
                var i = this._coordinates.length,
                  r = !this.settings.autoWidth,
                  o = this.$stage.children();
                if (r && t.items.merge)
                  for (; i--; )
                    (t.css.width = this._widths[this.relative(i)]),
                      o.eq(i).css(t.css);
                else r && ((t.css.width = t.items.width), o.css(t.css));
              },
            },
            {
              filter: ["items"],
              run: function run() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style");
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function run(t) {
                (t.current = t.current
                  ? this.$stage.children().index(t.current)
                  : 0),
                  (t.current = Math.max(
                    this.minimum(),
                    Math.min(this.maximum(), t.current)
                  )),
                  this.reset(t.current);
              },
            },
            {
              filter: ["position"],
              run: function run() {
                this.animate(this.coordinates(this._current));
              },
            },
            {
              filter: ["width", "position", "items", "settings"],
              run: function run() {
                var t,
                  i,
                  r,
                  o,
                  a = this.settings.rtl ? 1 : -1,
                  c = 2 * this.settings.stagePadding,
                  l = this.coordinates(this.current()) + c,
                  u = l + this.width() * a,
                  h = [];
                for (r = 0, o = this._coordinates.length; r < o; r++)
                  (t = this._coordinates[r - 1] || 0),
                    (i = Math.abs(this._coordinates[r]) + c * a),
                    ((this.op(t, "<=", l) && this.op(t, ">", u)) ||
                      (this.op(i, "<", l) && this.op(i, ">", u))) &&
                      h.push(r);
                this.$stage.children(".active").removeClass("active"),
                  this.$stage
                    .children(":eq(" + h.join("), :eq(") + ")")
                    .addClass("active"),
                  this.$stage.children(".center").removeClass("center"),
                  this.settings.center &&
                    this.$stage
                      .children()
                      .eq(this.current())
                      .addClass("center");
              },
            },
          ]),
          (Owl.prototype.initializeStage = function () {
            (this.$stage = this.$element.find("." + this.settings.stageClass)),
              this.$stage.length ||
                (this.$element.addClass(this.options.loadingClass),
                (this.$stage = t("<" + this.settings.stageElement + ">", {
                  class: this.settings.stageClass,
                }).wrap(t("<div/>", { class: this.settings.stageOuterClass }))),
                this.$element.append(this.$stage.parent()));
          }),
          (Owl.prototype.initializeItems = function () {
            var i = this.$element.find(".owl-item");
            if (i.length)
              return (
                (this._items = i.get().map(function (i) {
                  return t(i);
                })),
                (this._mergers = this._items.map(function () {
                  return 1;
                })),
                void this.refresh()
              );
            this.replace(this.$element.children().not(this.$stage.parent())),
              this.isVisible() ? this.refresh() : this.invalidate("width"),
              this.$element
                .removeClass(this.options.loadingClass)
                .addClass(this.options.loadedClass);
          }),
          (Owl.prototype.initialize = function () {
            var t, i, r;
            (this.enter("initializing"),
            this.trigger("initialize"),
            this.$element.toggleClass(
              this.settings.rtlClass,
              this.settings.rtl
            ),
            this.settings.autoWidth && !this.is("pre-loading")) &&
              ((t = this.$element.find("img")),
              (i = this.settings.nestedItemSelector
                ? "." + this.settings.nestedItemSelector
                : void 0),
              (r = this.$element.children(i).width()),
              t.length && r <= 0 && this.preloadAutoWidthImages(t));
            this.initializeStage(),
              this.initializeItems(),
              this.registerEventHandlers(),
              this.leave("initializing"),
              this.trigger("initialized");
          }),
          (Owl.prototype.isVisible = function () {
            return (
              !this.settings.checkVisibility || this.$element.is(":visible")
            );
          }),
          (Owl.prototype.setup = function () {
            var i = this.viewport(),
              r = this.options.responsive,
              o = -1,
              a = null;
            r
              ? (t.each(r, function (t) {
                  t <= i && t > o && (o = Number(t));
                }),
                "function" ==
                  typeof (a = t.extend({}, this.options, r[o])).stagePadding &&
                  (a.stagePadding = a.stagePadding()),
                delete a.responsive,
                a.responsiveClass &&
                  this.$element.attr(
                    "class",
                    this.$element
                      .attr("class")
                      .replace(
                        new RegExp(
                          "(" + this.options.responsiveClass + "-)\\S+\\s",
                          "g"
                        ),
                        "$1" + o
                      )
                  ))
              : (a = t.extend({}, this.options)),
              this.trigger("change", {
                property: { name: "settings", value: a },
              }),
              (this._breakpoint = o),
              (this.settings = a),
              this.invalidate("settings"),
              this.trigger("changed", {
                property: { name: "settings", value: this.settings },
              });
          }),
          (Owl.prototype.optionsLogic = function () {
            this.settings.autoWidth &&
              ((this.settings.stagePadding = !1), (this.settings.merge = !1));
          }),
          (Owl.prototype.prepare = function (i) {
            var r = this.trigger("prepare", { content: i });
            return (
              r.data ||
                (r.data = t("<" + this.settings.itemElement + "/>")
                  .addClass(this.options.itemClass)
                  .append(i)),
              this.trigger("prepared", { content: r.data }),
              r.data
            );
          }),
          (Owl.prototype.update = function () {
            for (
              var i = 0,
                r = this._pipe.length,
                o = t.proxy(function (t) {
                  return this[t];
                }, this._invalidated),
                a = {};
              i < r;

            )
              (this._invalidated.all ||
                t.grep(this._pipe[i].filter, o).length > 0) &&
                this._pipe[i].run(a),
                i++;
            (this._invalidated = {}), !this.is("valid") && this.enter("valid");
          }),
          (Owl.prototype.width = function (t) {
            switch ((t = t || Owl.Width.Default)) {
              case Owl.Width.Inner:
              case Owl.Width.Outer:
                return this._width;
              default:
                return (
                  this._width -
                  2 * this.settings.stagePadding +
                  this.settings.margin
                );
            }
          }),
          (Owl.prototype.refresh = function () {
            this.enter("refreshing"),
              this.trigger("refresh"),
              this.setup(),
              this.optionsLogic(),
              this.$element.addClass(this.options.refreshClass),
              this.update(),
              this.$element.removeClass(this.options.refreshClass),
              this.leave("refreshing"),
              this.trigger("refreshed");
          }),
          (Owl.prototype.onThrottledResize = function () {
            i.clearTimeout(this.resizeTimer),
              (this.resizeTimer = i.setTimeout(
                this._handlers.onResize,
                this.settings.responsiveRefreshRate
              ));
          }),
          (Owl.prototype.onResize = function () {
            return (
              !!this._items.length &&
              this._width !== this.$element.width() &&
              !!this.isVisible() &&
              (this.enter("resizing"),
              this.trigger("resize").isDefaultPrevented()
                ? (this.leave("resizing"), !1)
                : (this.invalidate("width"),
                  this.refresh(),
                  this.leave("resizing"),
                  void this.trigger("resized")))
            );
          }),
          (Owl.prototype.registerEventHandlers = function () {
            t.support.transition &&
              this.$stage.on(
                t.support.transition.end + ".owl.core",
                t.proxy(this.onTransitionEnd, this)
              ),
              !1 !== this.settings.responsive &&
                this.on(i, "resize", this._handlers.onThrottledResize),
              this.settings.mouseDrag &&
                (this.$element.addClass(this.options.dragClass),
                this.$stage.on(
                  "mousedown.owl.core",
                  t.proxy(this.onDragStart, this)
                ),
                this.$stage.on(
                  "dragstart.owl.core selectstart.owl.core",
                  function () {
                    return !1;
                  }
                )),
              this.settings.touchDrag &&
                (this.$stage.on(
                  "touchstart.owl.core",
                  t.proxy(this.onDragStart, this)
                ),
                this.$stage.on(
                  "touchcancel.owl.core",
                  t.proxy(this.onDragEnd, this)
                ));
          }),
          (Owl.prototype.onDragStart = function (i) {
            var o = null;
            3 !== i.which &&
              (t.support.transform
                ? (o = {
                    x: (o = this.$stage
                      .css("transform")
                      .replace(/.*\(|\)| /g, "")
                      .split(","))[16 === o.length ? 12 : 4],
                    y: o[16 === o.length ? 13 : 5],
                  })
                : ((o = this.$stage.position()),
                  (o = {
                    x: this.settings.rtl
                      ? o.left +
                        this.$stage.width() -
                        this.width() +
                        this.settings.margin
                      : o.left,
                    y: o.top,
                  })),
              this.is("animating") &&
                (t.support.transform ? this.animate(o.x) : this.$stage.stop(),
                this.invalidate("position")),
              this.$element.toggleClass(
                this.options.grabClass,
                "mousedown" === i.type
              ),
              this.speed(0),
              (this._drag.time = new Date().getTime()),
              (this._drag.target = t(i.target)),
              (this._drag.stage.start = o),
              (this._drag.stage.current = o),
              (this._drag.pointer = this.pointer(i)),
              t(r).on(
                "mouseup.owl.core touchend.owl.core",
                t.proxy(this.onDragEnd, this)
              ),
              t(r).one(
                "mousemove.owl.core touchmove.owl.core",
                t.proxy(function (i) {
                  var o = this.difference(this._drag.pointer, this.pointer(i));
                  t(r).on(
                    "mousemove.owl.core touchmove.owl.core",
                    t.proxy(this.onDragMove, this)
                  ),
                    (Math.abs(o.x) < Math.abs(o.y) && this.is("valid")) ||
                      (i.preventDefault(),
                      this.enter("dragging"),
                      this.trigger("drag"));
                }, this)
              ));
          }),
          (Owl.prototype.onDragMove = function (t) {
            var i = null,
              r = null,
              o = null,
              a = this.difference(this._drag.pointer, this.pointer(t)),
              c = this.difference(this._drag.stage.start, a);
            this.is("dragging") &&
              (t.preventDefault(),
              this.settings.loop
                ? ((i = this.coordinates(this.minimum())),
                  (r = this.coordinates(this.maximum() + 1) - i),
                  (c.x = ((((c.x - i) % r) + r) % r) + i))
                : ((i = this.settings.rtl
                    ? this.coordinates(this.maximum())
                    : this.coordinates(this.minimum())),
                  (r = this.settings.rtl
                    ? this.coordinates(this.minimum())
                    : this.coordinates(this.maximum())),
                  (o = this.settings.pullDrag ? (-1 * a.x) / 5 : 0),
                  (c.x = Math.max(Math.min(c.x, i + o), r + o))),
              (this._drag.stage.current = c),
              this.animate(c.x));
          }),
          (Owl.prototype.onDragEnd = function (i) {
            var o = this.difference(this._drag.pointer, this.pointer(i)),
              a = this._drag.stage.current,
              c = (o.x > 0) ^ this.settings.rtl ? "left" : "right";
            t(r).off(".owl.core"),
              this.$element.removeClass(this.options.grabClass),
              ((0 !== o.x && this.is("dragging")) || !this.is("valid")) &&
                (this.speed(
                  this.settings.dragEndSpeed || this.settings.smartSpeed
                ),
                this.current(
                  this.closest(a.x, 0 !== o.x ? c : this._drag.direction)
                ),
                this.invalidate("position"),
                this.update(),
                (this._drag.direction = c),
                (Math.abs(o.x) > 3 ||
                  new Date().getTime() - this._drag.time > 300) &&
                  this._drag.target.one("click.owl.core", function () {
                    return !1;
                  })),
              this.is("dragging") &&
                (this.leave("dragging"), this.trigger("dragged"));
          }),
          (Owl.prototype.closest = function (i, r) {
            var o = -1,
              a = this.width(),
              c = this.coordinates();
            return (
              this.settings.freeDrag ||
                t.each(
                  c,
                  t.proxy(function (t, l) {
                    return (
                      "left" === r && i > l - 30 && i < l + 30
                        ? (o = t)
                        : "right" === r && i > l - a - 30 && i < l - a + 30
                        ? (o = t + 1)
                        : this.op(i, "<", l) &&
                          this.op(
                            i,
                            ">",
                            void 0 !== c[t + 1] ? c[t + 1] : l - a
                          ) &&
                          (o = "left" === r ? t + 1 : t),
                      -1 === o
                    );
                  }, this)
                ),
              this.settings.loop ||
                (this.op(i, ">", c[this.minimum()])
                  ? (o = i = this.minimum())
                  : this.op(i, "<", c[this.maximum()]) &&
                    (o = i = this.maximum())),
              o
            );
          }),
          (Owl.prototype.animate = function (i) {
            var r = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(),
              r && (this.enter("animating"), this.trigger("translate")),
              t.support.transform3d && t.support.transition
                ? this.$stage.css({
                    transform: "translate3d(" + i + "px,0px,0px)",
                    transition:
                      this.speed() / 1e3 +
                      "s" +
                      (this.settings.slideTransition
                        ? " " + this.settings.slideTransition
                        : ""),
                  })
                : r
                ? this.$stage.animate(
                    { left: i + "px" },
                    this.speed(),
                    this.settings.fallbackEasing,
                    t.proxy(this.onTransitionEnd, this)
                  )
                : this.$stage.css({ left: i + "px" });
          }),
          (Owl.prototype.is = function (t) {
            return this._states.current[t] && this._states.current[t] > 0;
          }),
          (Owl.prototype.current = function (t) {
            if (void 0 === t) return this._current;
            if (0 !== this._items.length) {
              if (((t = this.normalize(t)), this._current !== t)) {
                var i = this.trigger("change", {
                  property: { name: "position", value: t },
                });
                void 0 !== i.data && (t = this.normalize(i.data)),
                  (this._current = t),
                  this.invalidate("position"),
                  this.trigger("changed", {
                    property: { name: "position", value: this._current },
                  });
              }
              return this._current;
            }
          }),
          (Owl.prototype.invalidate = function (i) {
            return (
              "string" === t.type(i) &&
                ((this._invalidated[i] = !0),
                this.is("valid") && this.leave("valid")),
              t.map(this._invalidated, function (t, i) {
                return i;
              })
            );
          }),
          (Owl.prototype.reset = function (t) {
            void 0 !== (t = this.normalize(t)) &&
              ((this._speed = 0),
              (this._current = t),
              this.suppress(["translate", "translated"]),
              this.animate(this.coordinates(t)),
              this.release(["translate", "translated"]));
          }),
          (Owl.prototype.normalize = function (t, i) {
            var r = this._items.length,
              o = i ? 0 : this._clones.length;
            return (
              !this.isNumeric(t) || r < 1
                ? (t = void 0)
                : (t < 0 || t >= r + o) &&
                  (t = ((((t - o / 2) % r) + r) % r) + o / 2),
              t
            );
          }),
          (Owl.prototype.relative = function (t) {
            return (t -= this._clones.length / 2), this.normalize(t, !0);
          }),
          (Owl.prototype.maximum = function (t) {
            var i,
              r,
              o,
              a = this.settings,
              c = this._coordinates.length;
            if (a.loop) c = this._clones.length / 2 + this._items.length - 1;
            else if (a.autoWidth || a.merge) {
              if ((i = this._items.length))
                for (
                  r = this._items[--i].width(), o = this.$element.width();
                  i-- &&
                  !((r += this._items[i].width() + this.settings.margin) > o);

                );
              c = i + 1;
            } else
              c = a.center
                ? this._items.length - 1
                : this._items.length - a.items;
            return t && (c -= this._clones.length / 2), Math.max(c, 0);
          }),
          (Owl.prototype.minimum = function (t) {
            return t ? 0 : this._clones.length / 2;
          }),
          (Owl.prototype.items = function (t) {
            return void 0 === t
              ? this._items.slice()
              : ((t = this.normalize(t, !0)), this._items[t]);
          }),
          (Owl.prototype.mergers = function (t) {
            return void 0 === t
              ? this._mergers.slice()
              : ((t = this.normalize(t, !0)), this._mergers[t]);
          }),
          (Owl.prototype.clones = function (i) {
            var r = this._clones.length / 2,
              o = r + this._items.length,
              a = function map(t) {
                return t % 2 == 0 ? o + t / 2 : r - (t + 1) / 2;
              };
            return void 0 === i
              ? t.map(this._clones, function (t, i) {
                  return a(i);
                })
              : t.map(this._clones, function (t, r) {
                  return t === i ? a(r) : null;
                });
          }),
          (Owl.prototype.speed = function (t) {
            return void 0 !== t && (this._speed = t), this._speed;
          }),
          (Owl.prototype.coordinates = function (i) {
            var r,
              o = 1,
              a = i - 1;
            return void 0 === i
              ? t.map(
                  this._coordinates,
                  t.proxy(function (t, i) {
                    return this.coordinates(i);
                  }, this)
                )
              : (this.settings.center
                  ? (this.settings.rtl && ((o = -1), (a = i + 1)),
                    (r = this._coordinates[i]),
                    (r +=
                      ((this.width() - r + (this._coordinates[a] || 0)) / 2) *
                      o))
                  : (r = this._coordinates[a] || 0),
                (r = Math.ceil(r)));
          }),
          (Owl.prototype.duration = function (t, i, r) {
            return 0 === r
              ? 0
              : Math.min(Math.max(Math.abs(i - t), 1), 6) *
                  Math.abs(r || this.settings.smartSpeed);
          }),
          (Owl.prototype.to = function (t, i) {
            var r = this.current(),
              o = null,
              a = t - this.relative(r),
              c = (a > 0) - (a < 0),
              l = this._items.length,
              u = this.minimum(),
              h = this.maximum();
            this.settings.loop
              ? (!this.settings.rewind &&
                  Math.abs(a) > l / 2 &&
                  (a += -1 * c * l),
                (o = (((((t = r + a) - u) % l) + l) % l) + u) !== t &&
                  o - a <= h &&
                  o - a > 0 &&
                  ((r = o - a), (t = o), this.reset(r)))
              : (t = this.settings.rewind
                  ? ((t % (h += 1)) + h) % h
                  : Math.max(u, Math.min(h, t))),
              this.speed(this.duration(r, t, i)),
              this.current(t),
              this.isVisible() && this.update();
          }),
          (Owl.prototype.next = function (t) {
            (t = t || !1), this.to(this.relative(this.current()) + 1, t);
          }),
          (Owl.prototype.prev = function (t) {
            (t = t || !1), this.to(this.relative(this.current()) - 1, t);
          }),
          (Owl.prototype.onTransitionEnd = function (t) {
            if (
              void 0 !== t &&
              (t.stopPropagation(),
              (t.target || t.srcElement || t.originalTarget) !==
                this.$stage.get(0))
            )
              return !1;
            this.leave("animating"), this.trigger("translated");
          }),
          (Owl.prototype.viewport = function () {
            var o;
            return (
              this.options.responsiveBaseElement !== i
                ? (o = t(this.options.responsiveBaseElement).width())
                : i.innerWidth
                ? (o = i.innerWidth)
                : r.documentElement && r.documentElement.clientWidth
                ? (o = r.documentElement.clientWidth)
                : console.warn("Can not detect viewport width."),
              o
            );
          }),
          (Owl.prototype.replace = function (i) {
            this.$stage.empty(),
              (this._items = []),
              i && (i = i instanceof jQuery ? i : t(i)),
              this.settings.nestedItemSelector &&
                (i = i.find("." + this.settings.nestedItemSelector)),
              i
                .filter(function () {
                  return 1 === this.nodeType;
                })
                .each(
                  t.proxy(function (t, i) {
                    (i = this.prepare(i)),
                      this.$stage.append(i),
                      this._items.push(i),
                      this._mergers.push(
                        1 *
                          i
                            .find("[data-merge]")
                            .addBack("[data-merge]")
                            .attr("data-merge") || 1
                      );
                  }, this)
                ),
              this.reset(
                this.isNumeric(this.settings.startPosition)
                  ? this.settings.startPosition
                  : 0
              ),
              this.invalidate("items");
          }),
          (Owl.prototype.add = function (i, r) {
            var o = this.relative(this._current);
            (r = void 0 === r ? this._items.length : this.normalize(r, !0)),
              (i = i instanceof jQuery ? i : t(i)),
              this.trigger("add", { content: i, position: r }),
              (i = this.prepare(i)),
              0 === this._items.length || r === this._items.length
                ? (0 === this._items.length && this.$stage.append(i),
                  0 !== this._items.length && this._items[r - 1].after(i),
                  this._items.push(i),
                  this._mergers.push(
                    1 *
                      i
                        .find("[data-merge]")
                        .addBack("[data-merge]")
                        .attr("data-merge") || 1
                  ))
                : (this._items[r].before(i),
                  this._items.splice(r, 0, i),
                  this._mergers.splice(
                    r,
                    0,
                    1 *
                      i
                        .find("[data-merge]")
                        .addBack("[data-merge]")
                        .attr("data-merge") || 1
                  )),
              this._items[o] && this.reset(this._items[o].index()),
              this.invalidate("items"),
              this.trigger("added", { content: i, position: r });
          }),
          (Owl.prototype.remove = function (t) {
            void 0 !== (t = this.normalize(t, !0)) &&
              (this.trigger("remove", { content: this._items[t], position: t }),
              this._items[t].remove(),
              this._items.splice(t, 1),
              this._mergers.splice(t, 1),
              this.invalidate("items"),
              this.trigger("removed", { content: null, position: t }));
          }),
          (Owl.prototype.preloadAutoWidthImages = function (i) {
            i.each(
              t.proxy(function (i, r) {
                this.enter("pre-loading"),
                  (r = t(r)),
                  t(new Image())
                    .one(
                      "load",
                      t.proxy(function (t) {
                        r.attr("src", t.target.src),
                          r.css("opacity", 1),
                          this.leave("pre-loading"),
                          !this.is("pre-loading") &&
                            !this.is("initializing") &&
                            this.refresh();
                      }, this)
                    )
                    .attr(
                      "src",
                      r.attr("src") ||
                        r.attr("data-src") ||
                        r.attr("data-src-retina")
                    );
              }, this)
            );
          }),
          (Owl.prototype.destroy = function () {
            for (var o in (this.$element.off(".owl.core"),
            this.$stage.off(".owl.core"),
            t(r).off(".owl.core"),
            !1 !== this.settings.responsive &&
              (i.clearTimeout(this.resizeTimer),
              this.off(i, "resize", this._handlers.onThrottledResize)),
            this._plugins))
              this._plugins[o].destroy();
            this.$stage.children(".cloned").remove(),
              this.$stage.unwrap(),
              this.$stage.children().contents().unwrap(),
              this.$stage.children().unwrap(),
              this.$stage.remove(),
              this.$element
                .removeClass(this.options.refreshClass)
                .removeClass(this.options.loadingClass)
                .removeClass(this.options.loadedClass)
                .removeClass(this.options.rtlClass)
                .removeClass(this.options.dragClass)
                .removeClass(this.options.grabClass)
                .attr(
                  "class",
                  this.$element
                    .attr("class")
                    .replace(
                      new RegExp(
                        this.options.responsiveClass + "-\\S+\\s",
                        "g"
                      ),
                      ""
                    )
                )
                .removeData("owl.carousel");
          }),
          (Owl.prototype.op = function (t, i, r) {
            var o = this.settings.rtl;
            switch (i) {
              case "<":
                return o ? t > r : t < r;
              case ">":
                return o ? t < r : t > r;
              case ">=":
                return o ? t <= r : t >= r;
              case "<=":
                return o ? t >= r : t <= r;
            }
          }),
          (Owl.prototype.on = function (t, i, r, o) {
            t.addEventListener
              ? t.addEventListener(i, r, o)
              : t.attachEvent && t.attachEvent("on" + i, r);
          }),
          (Owl.prototype.off = function (t, i, r, o) {
            t.removeEventListener
              ? t.removeEventListener(i, r, o)
              : t.detachEvent && t.detachEvent("on" + i, r);
          }),
          (Owl.prototype.trigger = function (i, r, o, a, c) {
            var l = {
                item: { count: this._items.length, index: this.current() },
              },
              u = t.camelCase(
                t
                  .grep(["on", i, o], function (t) {
                    return t;
                  })
                  .join("-")
                  .toLowerCase()
              ),
              h = t.Event(
                [i, "owl", o || "carousel"].join(".").toLowerCase(),
                t.extend({ relatedTarget: this }, l, r)
              );
            return (
              this._supress[i] ||
                (t.each(this._plugins, function (t, i) {
                  i.onTrigger && i.onTrigger(h);
                }),
                this.register({ type: Owl.Type.Event, name: i }),
                this.$element.trigger(h),
                this.settings &&
                  "function" == typeof this.settings[u] &&
                  this.settings[u].call(this, h)),
              h
            );
          }),
          (Owl.prototype.enter = function (i) {
            t.each(
              [i].concat(this._states.tags[i] || []),
              t.proxy(function (t, i) {
                void 0 === this._states.current[i] &&
                  (this._states.current[i] = 0),
                  this._states.current[i]++;
              }, this)
            );
          }),
          (Owl.prototype.leave = function (i) {
            t.each(
              [i].concat(this._states.tags[i] || []),
              t.proxy(function (t, i) {
                this._states.current[i]--;
              }, this)
            );
          }),
          (Owl.prototype.register = function (i) {
            if (i.type === Owl.Type.Event) {
              if (
                (t.event.special[i.name] || (t.event.special[i.name] = {}),
                !t.event.special[i.name].owl)
              ) {
                var r = t.event.special[i.name]._default;
                (t.event.special[i.name]._default = function (t) {
                  return !r ||
                    !r.apply ||
                    (t.namespace && -1 !== t.namespace.indexOf("owl"))
                    ? t.namespace && t.namespace.indexOf("owl") > -1
                    : r.apply(this, arguments);
                }),
                  (t.event.special[i.name].owl = !0);
              }
            } else
              i.type === Owl.Type.State &&
                (this._states.tags[i.name]
                  ? (this._states.tags[i.name] = this._states.tags[
                      i.name
                    ].concat(i.tags))
                  : (this._states.tags[i.name] = i.tags),
                (this._states.tags[i.name] = t.grep(
                  this._states.tags[i.name],
                  t.proxy(function (r, o) {
                    return t.inArray(r, this._states.tags[i.name]) === o;
                  }, this)
                )));
          }),
          (Owl.prototype.suppress = function (i) {
            t.each(
              i,
              t.proxy(function (t, i) {
                this._supress[i] = !0;
              }, this)
            );
          }),
          (Owl.prototype.release = function (i) {
            t.each(
              i,
              t.proxy(function (t, i) {
                delete this._supress[i];
              }, this)
            );
          }),
          (Owl.prototype.pointer = function (t) {
            var r = { x: null, y: null };
            return (
              (t =
                (t = t.originalEvent || t || i.event).touches &&
                t.touches.length
                  ? t.touches[0]
                  : t.changedTouches && t.changedTouches.length
                  ? t.changedTouches[0]
                  : t).pageX
                ? ((r.x = t.pageX), (r.y = t.pageY))
                : ((r.x = t.clientX), (r.y = t.clientY)),
              r
            );
          }),
          (Owl.prototype.isNumeric = function (t) {
            return !isNaN(parseFloat(t));
          }),
          (Owl.prototype.difference = function (t, i) {
            return { x: t.x - i.x, y: t.y - i.y };
          }),
          (t.fn.owlCarousel = function (i) {
            var r = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
              var a = t(this),
                c = a.data("owl.carousel");
              c ||
                ((c = new Owl(this, "object" == o(i) && i)),
                a.data("owl.carousel", c),
                t.each(
                  [
                    "next",
                    "prev",
                    "to",
                    "destroy",
                    "refresh",
                    "replace",
                    "add",
                    "remove",
                  ],
                  function (i, r) {
                    c.register({ type: Owl.Type.Event, name: r }),
                      c.$element.on(
                        r + ".owl.carousel.core",
                        t.proxy(function (t) {
                          t.namespace &&
                            t.relatedTarget !== this &&
                            (this.suppress([r]),
                            c[r].apply(this, [].slice.call(arguments, 1)),
                            this.release([r]));
                        }, c)
                      );
                  }
                )),
                "string" == typeof i && "_" !== i.charAt(0) && c[i].apply(c, r);
            });
          }),
          (t.fn.owlCarousel.Constructor = Owl);
      })(window.Zepto || window.jQuery, window, document),
        (function (t, i, r, o) {
          var a = function AutoRefresh(i) {
            (this._core = i),
              (this._interval = null),
              (this._visible = null),
              (this._handlers = {
                "initialized.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.autoRefresh &&
                    this.watch();
                }, this),
              }),
              (this._core.options = t.extend(
                {},
                AutoRefresh.Defaults,
                this._core.options
              )),
              this._core.$element.on(this._handlers);
          };
          (a.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
            (a.prototype.watch = function () {
              this._interval ||
                ((this._visible = this._core.isVisible()),
                (this._interval = i.setInterval(
                  t.proxy(this.refresh, this),
                  this._core.settings.autoRefreshInterval
                )));
            }),
            (a.prototype.refresh = function () {
              this._core.isVisible() !== this._visible &&
                ((this._visible = !this._visible),
                this._core.$element.toggleClass("owl-hidden", !this._visible),
                this._visible &&
                  this._core.invalidate("width") &&
                  this._core.refresh());
            }),
            (a.prototype.destroy = function () {
              var t, r;
              for (t in (i.clearInterval(this._interval), this._handlers))
                this._core.$element.off(t, this._handlers[t]);
              for (r in Object.getOwnPropertyNames(this))
                "function" != typeof this[r] && (this[r] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = a);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, i, r, o) {
          var a = function Lazy(i) {
            (this._core = i),
              (this._loaded = []),
              (this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
                  t.proxy(function (i) {
                    if (
                      i.namespace &&
                      this._core.settings &&
                      this._core.settings.lazyLoad &&
                      ((i.property && "position" == i.property.name) ||
                        "initialized" == i.type)
                    ) {
                      var r = this._core.settings,
                        o = (r.center && Math.ceil(r.items / 2)) || r.items,
                        a = (r.center && -1 * o) || 0,
                        c =
                          (i.property && void 0 !== i.property.value
                            ? i.property.value
                            : this._core.current()) + a,
                        l = this._core.clones().length,
                        u = t.proxy(function (t, i) {
                          this.load(i);
                        }, this);
                      for (
                        r.lazyLoadEager > 0 &&
                        ((o += r.lazyLoadEager),
                        r.loop && ((c -= r.lazyLoadEager), o++));
                        a++ < o;

                      )
                        this.load(l / 2 + this._core.relative(c)),
                          l &&
                            t.each(
                              this._core.clones(this._core.relative(c)),
                              u
                            ),
                          c++;
                    }
                  }, this),
              }),
              (this._core.options = t.extend(
                {},
                Lazy.Defaults,
                this._core.options
              )),
              this._core.$element.on(this._handlers);
          };
          (a.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
            (a.prototype.load = function (r) {
              var o = this._core.$stage.children().eq(r),
                a = o && o.find(".owl-lazy");
              !a ||
                t.inArray(o.get(0), this._loaded) > -1 ||
                (a.each(
                  t.proxy(function (r, o) {
                    var a,
                      c = t(o),
                      l =
                        (i.devicePixelRatio > 1 && c.attr("data-src-retina")) ||
                        c.attr("data-src") ||
                        c.attr("data-srcset");
                    this._core.trigger("load", { element: c, url: l }, "lazy"),
                      c.is("img")
                        ? c
                            .one(
                              "load.owl.lazy",
                              t.proxy(function () {
                                c.css("opacity", 1),
                                  this._core.trigger(
                                    "loaded",
                                    { element: c, url: l },
                                    "lazy"
                                  );
                              }, this)
                            )
                            .attr("src", l)
                        : c.is("source")
                        ? c
                            .one(
                              "load.owl.lazy",
                              t.proxy(function () {
                                this._core.trigger(
                                  "loaded",
                                  { element: c, url: l },
                                  "lazy"
                                );
                              }, this)
                            )
                            .attr("srcset", l)
                        : (((a = new Image()).onload = t.proxy(function () {
                            c.css({
                              "background-image": 'url("' + l + '")',
                              opacity: "1",
                            }),
                              this._core.trigger(
                                "loaded",
                                { element: c, url: l },
                                "lazy"
                              );
                          }, this)),
                          (a.src = l));
                  }, this)
                ),
                this._loaded.push(o.get(0)));
            }),
            (a.prototype.destroy = function () {
              var t, i;
              for (t in this.handlers)
                this._core.$element.off(t, this.handlers[t]);
              for (i in Object.getOwnPropertyNames(this))
                "function" != typeof this[i] && (this[i] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Lazy = a);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, i, r, o) {
          var a = function AutoHeight(r) {
            (this._core = r),
              (this._previousHeight = null),
              (this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": t.proxy(
                  function (t) {
                    t.namespace &&
                      this._core.settings.autoHeight &&
                      this.update();
                  },
                  this
                ),
                "changed.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.autoHeight &&
                    "position" === t.property.name &&
                    this.update();
                }, this),
                "loaded.owl.lazy": t.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.autoHeight &&
                    t.element
                      .closest("." + this._core.settings.itemClass)
                      .index() === this._core.current() &&
                    this.update();
                }, this),
              }),
              (this._core.options = t.extend(
                {},
                AutoHeight.Defaults,
                this._core.options
              )),
              this._core.$element.on(this._handlers),
              (this._intervalId = null);
            var o = this;
            t(i).on("load", function () {
              o._core.settings.autoHeight && o.update();
            }),
              t(i).resize(function () {
                o._core.settings.autoHeight &&
                  (null != o._intervalId && clearTimeout(o._intervalId),
                  (o._intervalId = setTimeout(function () {
                    o.update();
                  }, 250)));
              });
          };
          (a.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
            (a.prototype.update = function () {
              var i = this._core._current,
                r = i + this._core.settings.items,
                o = this._core.settings.lazyLoad,
                a = this._core.$stage.children().toArray().slice(i, r),
                c = [],
                l = 0;
              t.each(a, function (i, r) {
                c.push(t(r).height());
              }),
                (l = Math.max.apply(null, c)) <= 1 &&
                  o &&
                  this._previousHeight &&
                  (l = this._previousHeight),
                (this._previousHeight = l),
                this._core.$stage
                  .parent()
                  .height(l)
                  .addClass(this._core.settings.autoHeightClass);
            }),
            (a.prototype.destroy = function () {
              var t, i;
              for (t in this._handlers)
                this._core.$element.off(t, this._handlers[t]);
              for (i in Object.getOwnPropertyNames(this))
                "function" != typeof this[i] && (this[i] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = a);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, i, r, o) {
          var a = function Video(i) {
            (this._core = i),
              (this._videos = {}),
              (this._playing = null),
              (this._handlers = {
                "initialized.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._core.register({
                      type: "state",
                      name: "playing",
                      tags: ["interacting"],
                    });
                }, this),
                "resize.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.video &&
                    this.isInFullScreen() &&
                    t.preventDefault();
                }, this),
                "refreshed.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._core.is("resizing") &&
                    this._core.$stage.find(".cloned .owl-video-frame").remove();
                }, this),
                "changed.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    "position" === t.property.name &&
                    this._playing &&
                    this.stop();
                }, this),
                "prepared.owl.carousel": t.proxy(function (i) {
                  if (i.namespace) {
                    var r = t(i.content).find(".owl-video");
                    r.length &&
                      (r.css("display", "none"), this.fetch(r, t(i.content)));
                  }
                }, this),
              }),
              (this._core.options = t.extend(
                {},
                Video.Defaults,
                this._core.options
              )),
              this._core.$element.on(this._handlers),
              this._core.$element.on(
                "click.owl.video",
                ".owl-video-play-icon",
                t.proxy(function (t) {
                  this.play(t);
                }, this)
              );
          };
          (a.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
            (a.prototype.fetch = function (t, i) {
              var r = t.attr("data-vimeo-id")
                  ? "vimeo"
                  : t.attr("data-vzaar-id")
                  ? "vzaar"
                  : "youtube",
                o =
                  t.attr("data-vimeo-id") ||
                  t.attr("data-youtube-id") ||
                  t.attr("data-vzaar-id"),
                a = t.attr("data-width") || this._core.settings.videoWidth,
                c = t.attr("data-height") || this._core.settings.videoHeight,
                l = t.attr("href");
              if (!l) throw new Error("Missing video URL.");
              if (
                (o = l.match(
                  /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                ))[3].indexOf("youtu") > -1
              )
                r = "youtube";
              else if (o[3].indexOf("vimeo") > -1) r = "vimeo";
              else {
                if (!(o[3].indexOf("vzaar") > -1))
                  throw new Error("Video URL not supported.");
                r = "vzaar";
              }
              (o = o[6]),
                (this._videos[l] = { type: r, id: o, width: a, height: c }),
                i.attr("data-video", l),
                this.thumbnail(t, this._videos[l]);
            }),
            (a.prototype.thumbnail = function (i, r) {
              var o,
                a,
                c =
                  r.width && r.height
                    ? "width:" + r.width + "px;height:" + r.height + "px;"
                    : "",
                l = i.find("img"),
                u = "src",
                h = "",
                d = this._core.settings,
                p = function create(r) {
                  '<div class="owl-video-play-icon"></div>',
                    (o = d.lazyLoad
                      ? t("<div/>", { class: "owl-video-tn " + h, srcType: r })
                      : t("<div/>", {
                          class: "owl-video-tn",
                          style: "opacity:1;background-image:url(" + r + ")",
                        })),
                    i.after(o),
                    i.after('<div class="owl-video-play-icon"></div>');
                };
              if (
                (i.wrap(t("<div/>", { class: "owl-video-wrapper", style: c })),
                this._core.settings.lazyLoad &&
                  ((u = "data-src"), (h = "owl-lazy")),
                l.length)
              )
                return p(l.attr(u)), l.remove(), !1;
              "youtube" === r.type
                ? ((a = "//img.youtube.com/vi/" + r.id + "/hqdefault.jpg"),
                  p(a))
                : "vimeo" === r.type
                ? t.ajax({
                    type: "GET",
                    url: "//vimeo.com/api/v2/video/" + r.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function success(t) {
                      (a = t[0].thumbnail_large), p(a);
                    },
                  })
                : "vzaar" === r.type &&
                  t.ajax({
                    type: "GET",
                    url: "//vzaar.com/api/videos/" + r.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function success(t) {
                      (a = t.framegrab_url), p(a);
                    },
                  });
            }),
            (a.prototype.stop = function () {
              this._core.trigger("stop", null, "video"),
                this._playing.find(".owl-video-frame").remove(),
                this._playing.removeClass("owl-video-playing"),
                (this._playing = null),
                this._core.leave("playing"),
                this._core.trigger("stopped", null, "video");
            }),
            (a.prototype.play = function (i) {
              var r,
                o = t(i.target).closest("." + this._core.settings.itemClass),
                a = this._videos[o.attr("data-video")],
                c = a.width || "100%",
                l = a.height || this._core.$stage.height();
              this._playing ||
                (this._core.enter("playing"),
                this._core.trigger("play", null, "video"),
                (o = this._core.items(this._core.relative(o.index()))),
                this._core.reset(o.index()),
                (r = t(
                  '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
                )).attr("height", l),
                r.attr("width", c),
                "youtube" === a.type
                  ? r.attr(
                      "src",
                      "//www.youtube.com/embed/" +
                        a.id +
                        "?autoplay=1&rel=0&v=" +
                        a.id
                    )
                  : "vimeo" === a.type
                  ? r.attr(
                      "src",
                      "//player.vimeo.com/video/" + a.id + "?autoplay=1"
                    )
                  : "vzaar" === a.type &&
                    r.attr(
                      "src",
                      "//view.vzaar.com/" + a.id + "/player?autoplay=true"
                    ),
                t(r)
                  .wrap('<div class="owl-video-frame" />')
                  .insertAfter(o.find(".owl-video")),
                (this._playing = o.addClass("owl-video-playing")));
            }),
            (a.prototype.isInFullScreen = function () {
              var i =
                r.fullscreenElement ||
                r.mozFullScreenElement ||
                r.webkitFullscreenElement;
              return i && t(i).parent().hasClass("owl-video-frame");
            }),
            (a.prototype.destroy = function () {
              var t, i;
              for (t in (this._core.$element.off("click.owl.video"),
              this._handlers))
                this._core.$element.off(t, this._handlers[t]);
              for (i in Object.getOwnPropertyNames(this))
                "function" != typeof this[i] && (this[i] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Video = a);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, i, r, o) {
          var a = function Animate(i) {
            (this.core = i),
              (this.core.options = t.extend(
                {},
                Animate.Defaults,
                this.core.options
              )),
              (this.swapping = !0),
              (this.previous = void 0),
              (this.next = void 0),
              (this.handlers = {
                "change.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    "position" == t.property.name &&
                    ((this.previous = this.core.current()),
                    (this.next = t.property.value));
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
                  t.proxy(function (t) {
                    t.namespace && (this.swapping = "translated" == t.type);
                  }, this),
                "translate.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this.swapping &&
                    (this.core.options.animateOut ||
                      this.core.options.animateIn) &&
                    this.swap();
                }, this),
              }),
              this.core.$element.on(this.handlers);
          };
          (a.Defaults = { animateOut: !1, animateIn: !1 }),
            (a.prototype.swap = function () {
              if (
                1 === this.core.settings.items &&
                t.support.animation &&
                t.support.transition
              ) {
                this.core.speed(0);
                var i,
                  r = t.proxy(this.clear, this),
                  o = this.core.$stage.children().eq(this.previous),
                  a = this.core.$stage.children().eq(this.next),
                  c = this.core.settings.animateIn,
                  l = this.core.settings.animateOut;
                this.core.current() !== this.previous &&
                  (l &&
                    ((i =
                      this.core.coordinates(this.previous) -
                      this.core.coordinates(this.next)),
                    o
                      .one(t.support.animation.end, r)
                      .css({ left: i + "px" })
                      .addClass("animated owl-animated-out")
                      .addClass(l)),
                  c &&
                    a
                      .one(t.support.animation.end, r)
                      .addClass("animated owl-animated-in")
                      .addClass(c));
              }
            }),
            (a.prototype.clear = function (i) {
              t(i.target)
                .css({ left: "" })
                .removeClass("animated owl-animated-out owl-animated-in")
                .removeClass(this.core.settings.animateIn)
                .removeClass(this.core.settings.animateOut),
                this.core.onTransitionEnd();
            }),
            (a.prototype.destroy = function () {
              var t, i;
              for (t in this.handlers)
                this.core.$element.off(t, this.handlers[t]);
              for (i in Object.getOwnPropertyNames(this))
                "function" != typeof this[i] && (this[i] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Animate = a);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, i, r, o) {
          var a = function Autoplay(i) {
            (this._core = i),
              (this._call = null),
              (this._time = 0),
              (this._timeout = 0),
              (this._paused = !0),
              (this._handlers = {
                "changed.owl.carousel": t.proxy(function (t) {
                  t.namespace && "settings" === t.property.name
                    ? this._core.settings.autoplay
                      ? this.play()
                      : this.stop()
                    : t.namespace &&
                      "position" === t.property.name &&
                      this._paused &&
                      (this._time = 0);
                }, this),
                "initialized.owl.carousel": t.proxy(function (t) {
                  t.namespace && this._core.settings.autoplay && this.play();
                }, this),
                "play.owl.autoplay": t.proxy(function (t, i, r) {
                  t.namespace && this.play(i, r);
                }, this),
                "stop.owl.autoplay": t.proxy(function (t) {
                  t.namespace && this.stop();
                }, this),
                "mouseover.owl.autoplay": t.proxy(function () {
                  this._core.settings.autoplayHoverPause &&
                    this._core.is("rotating") &&
                    this.pause();
                }, this),
                "mouseleave.owl.autoplay": t.proxy(function () {
                  this._core.settings.autoplayHoverPause &&
                    this._core.is("rotating") &&
                    this.play();
                }, this),
                "touchstart.owl.core": t.proxy(function () {
                  this._core.settings.autoplayHoverPause &&
                    this._core.is("rotating") &&
                    this.pause();
                }, this),
                "touchend.owl.core": t.proxy(function () {
                  this._core.settings.autoplayHoverPause && this.play();
                }, this),
              }),
              this._core.$element.on(this._handlers),
              (this._core.options = t.extend(
                {},
                Autoplay.Defaults,
                this._core.options
              ));
          };
          (a.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1,
          }),
            (a.prototype._next = function (o) {
              (this._call = i.setTimeout(
                t.proxy(this._next, this, o),
                this._timeout * (Math.round(this.read() / this._timeout) + 1) -
                  this.read()
              )),
                this._core.is("interacting") ||
                  r.hidden ||
                  this._core.next(o || this._core.settings.autoplaySpeed);
            }),
            (a.prototype.read = function () {
              return new Date().getTime() - this._time;
            }),
            (a.prototype.play = function (r, o) {
              var a;
              this._core.is("rotating") || this._core.enter("rotating"),
                (r = r || this._core.settings.autoplayTimeout),
                (a = Math.min(this._time % (this._timeout || r), r)),
                this._paused
                  ? ((this._time = this.read()), (this._paused = !1))
                  : i.clearTimeout(this._call),
                (this._time += (this.read() % r) - a),
                (this._timeout = r),
                (this._call = i.setTimeout(
                  t.proxy(this._next, this, o),
                  r - a
                ));
            }),
            (a.prototype.stop = function () {
              this._core.is("rotating") &&
                ((this._time = 0),
                (this._paused = !0),
                i.clearTimeout(this._call),
                this._core.leave("rotating"));
            }),
            (a.prototype.pause = function () {
              this._core.is("rotating") &&
                !this._paused &&
                ((this._time = this.read()),
                (this._paused = !0),
                i.clearTimeout(this._call));
            }),
            (a.prototype.destroy = function () {
              var t, i;
              for (t in (this.stop(), this._handlers))
                this._core.$element.off(t, this._handlers[t]);
              for (i in Object.getOwnPropertyNames(this))
                "function" != typeof this[i] && (this[i] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.autoplay = a);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, i, r, o) {
          "use strict";
          var a = function Navigation(i) {
            (this._core = i),
              (this._initialized = !1),
              (this._pages = []),
              (this._controls = {}),
              (this._templates = []),
              (this.$element = this._core.$element),
              (this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to,
              }),
              (this._handlers = {
                "prepared.owl.carousel": t.proxy(function (i) {
                  i.namespace &&
                    this._core.settings.dotsData &&
                    this._templates.push(
                      '<div class="' +
                        this._core.settings.dotClass +
                        '">' +
                        t(i.content)
                          .find("[data-dot]")
                          .addBack("[data-dot]")
                          .attr("data-dot") +
                        "</div>"
                    );
                }, this),
                "added.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.dotsData &&
                    this._templates.splice(
                      t.position,
                      0,
                      this._templates.pop()
                    );
                }, this),
                "remove.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.dotsData &&
                    this._templates.splice(t.position, 1);
                }, this),
                "changed.owl.carousel": t.proxy(function (t) {
                  t.namespace && "position" == t.property.name && this.draw();
                }, this),
                "initialized.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    !this._initialized &&
                    (this._core.trigger("initialize", null, "navigation"),
                    this.initialize(),
                    this.update(),
                    this.draw(),
                    (this._initialized = !0),
                    this._core.trigger("initialized", null, "navigation"));
                }, this),
                "refreshed.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._initialized &&
                    (this._core.trigger("refresh", null, "navigation"),
                    this.update(),
                    this.draw(),
                    this._core.trigger("refreshed", null, "navigation"));
                }, this),
              }),
              (this._core.options = t.extend(
                {},
                Navigation.Defaults,
                this._core.options
              )),
              this.$element.on(this._handlers);
          };
          (a.Defaults = {
            nav: !1,
            navText: [
              '<span aria-label="Previous">&#x2039;</span>',
              '<span aria-label="Next">&#x203a;</span>',
            ],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
          }),
            (a.prototype.initialize = function () {
              var i,
                r = this._core.settings;
              for (i in ((this._controls.$relative = (
                r.navContainer
                  ? t(r.navContainer)
                  : t("<div>")
                      .addClass(r.navContainerClass)
                      .appendTo(this.$element)
              ).addClass("disabled")),
              (this._controls.$previous = t("<" + r.navElement + ">")
                .addClass(r.navClass[0])
                .html(r.navText[0])
                .prependTo(this._controls.$relative)
                .on(
                  "click",
                  t.proxy(function (t) {
                    this.prev(r.navSpeed);
                  }, this)
                )),
              (this._controls.$next = t("<" + r.navElement + ">")
                .addClass(r.navClass[1])
                .html(r.navText[1])
                .appendTo(this._controls.$relative)
                .on(
                  "click",
                  t.proxy(function (t) {
                    this.next(r.navSpeed);
                  }, this)
                )),
              r.dotsData ||
                (this._templates = [
                  t('<button role="button">')
                    .addClass(r.dotClass)
                    .append(t("<span>"))
                    .prop("outerHTML"),
                ]),
              (this._controls.$absolute = (
                r.dotsContainer
                  ? t(r.dotsContainer)
                  : t("<div>").addClass(r.dotsClass).appendTo(this.$element)
              ).addClass("disabled")),
              this._controls.$absolute.on(
                "click",
                "button",
                t.proxy(function (i) {
                  var o = t(i.target).parent().is(this._controls.$absolute)
                    ? t(i.target).index()
                    : t(i.target).parent().index();
                  i.preventDefault(), this.to(o, r.dotsSpeed);
                }, this)
              ),
              this._overrides))
                this._core[i] = t.proxy(this[i], this);
            }),
            (a.prototype.destroy = function () {
              var t, i, r, o, a;
              for (t in ((a = this._core.settings), this._handlers))
                this.$element.off(t, this._handlers[t]);
              for (i in this._controls)
                "$relative" === i && a.navContainer
                  ? this._controls[i].html("")
                  : this._controls[i].remove();
              for (o in this.overides) this._core[o] = this._overrides[o];
              for (r in Object.getOwnPropertyNames(this))
                "function" != typeof this[r] && (this[r] = null);
            }),
            (a.prototype.update = function () {
              var t,
                i,
                r = this._core.clones().length / 2,
                o = r + this._core.items().length,
                a = this._core.maximum(!0),
                c = this._core.settings,
                l =
                  c.center || c.autoWidth || c.dotsData
                    ? 1
                    : c.dotsEach || c.items;
              if (
                ("page" !== c.slideBy &&
                  (c.slideBy = Math.min(c.slideBy, c.items)),
                c.dots || "page" == c.slideBy)
              )
                for (this._pages = [], t = r, i = 0, 0; t < o; t++) {
                  if (i >= l || 0 === i) {
                    if (
                      (this._pages.push({
                        start: Math.min(a, t - r),
                        end: t - r + l - 1,
                      }),
                      Math.min(a, t - r) === a)
                    )
                      break;
                    i = 0;
                  }
                  i += this._core.mergers(this._core.relative(t));
                }
            }),
            (a.prototype.draw = function () {
              var i,
                r = this._core.settings,
                o = this._core.items().length <= r.items,
                a = this._core.relative(this._core.current()),
                c = r.loop || r.rewind;
              this._controls.$relative.toggleClass("disabled", !r.nav || o),
                r.nav &&
                  (this._controls.$previous.toggleClass(
                    "disabled",
                    !c && a <= this._core.minimum(!0)
                  ),
                  this._controls.$next.toggleClass(
                    "disabled",
                    !c && a >= this._core.maximum(!0)
                  )),
                this._controls.$absolute.toggleClass("disabled", !r.dots || o),
                r.dots &&
                  ((i =
                    this._pages.length -
                    this._controls.$absolute.children().length),
                  r.dotsData && 0 !== i
                    ? this._controls.$absolute.html(this._templates.join(""))
                    : i > 0
                    ? this._controls.$absolute.append(
                        new Array(i + 1).join(this._templates[0])
                      )
                    : i < 0 &&
                      this._controls.$absolute.children().slice(i).remove(),
                  this._controls.$absolute
                    .find(".active")
                    .removeClass("active"),
                  this._controls.$absolute
                    .children()
                    .eq(t.inArray(this.current(), this._pages))
                    .addClass("active"));
            }),
            (a.prototype.onTrigger = function (i) {
              var r = this._core.settings;
              i.page = {
                index: t.inArray(this.current(), this._pages),
                count: this._pages.length,
                size:
                  r &&
                  (r.center || r.autoWidth || r.dotsData
                    ? 1
                    : r.dotsEach || r.items),
              };
            }),
            (a.prototype.current = function () {
              var i = this._core.relative(this._core.current());
              return t
                .grep(
                  this._pages,
                  t.proxy(function (t, r) {
                    return t.start <= i && t.end >= i;
                  }, this)
                )
                .pop();
            }),
            (a.prototype.getPosition = function (i) {
              var r,
                o,
                a = this._core.settings;
              return (
                "page" == a.slideBy
                  ? ((r = t.inArray(this.current(), this._pages)),
                    (o = this._pages.length),
                    i ? ++r : --r,
                    (r = this._pages[((r % o) + o) % o].start))
                  : ((r = this._core.relative(this._core.current())),
                    (o = this._core.items().length),
                    i ? (r += a.slideBy) : (r -= a.slideBy)),
                r
              );
            }),
            (a.prototype.next = function (i) {
              t.proxy(this._overrides.to, this._core)(this.getPosition(!0), i);
            }),
            (a.prototype.prev = function (i) {
              t.proxy(this._overrides.to, this._core)(this.getPosition(!1), i);
            }),
            (a.prototype.to = function (i, r, o) {
              var a;
              !o && this._pages.length
                ? ((a = this._pages.length),
                  t.proxy(this._overrides.to, this._core)(
                    this._pages[((i % a) + a) % a].start,
                    r
                  ))
                : t.proxy(this._overrides.to, this._core)(i, r);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Navigation = a);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, i, r, o) {
          "use strict";
          var a = function Hash(r) {
            (this._core = r),
              (this._hashes = {}),
              (this.$element = this._core.$element),
              (this._handlers = {
                "initialized.owl.carousel": t.proxy(function (r) {
                  r.namespace &&
                    "URLHash" === this._core.settings.startPosition &&
                    t(i).trigger("hashchange.owl.navigation");
                }, this),
                "prepared.owl.carousel": t.proxy(function (i) {
                  if (i.namespace) {
                    var r = t(i.content)
                      .find("[data-hash]")
                      .addBack("[data-hash]")
                      .attr("data-hash");
                    if (!r) return;
                    this._hashes[r] = i.content;
                  }
                }, this),
                "changed.owl.carousel": t.proxy(function (r) {
                  if (r.namespace && "position" === r.property.name) {
                    var o = this._core.items(
                        this._core.relative(this._core.current())
                      ),
                      a = t
                        .map(this._hashes, function (t, i) {
                          return t === o ? i : null;
                        })
                        .join();
                    if (!a || i.location.hash.slice(1) === a) return;
                    i.location.hash = a;
                  }
                }, this),
              }),
              (this._core.options = t.extend(
                {},
                Hash.Defaults,
                this._core.options
              )),
              this.$element.on(this._handlers),
              t(i).on(
                "hashchange.owl.navigation",
                t.proxy(function (t) {
                  var r = i.location.hash.substring(1),
                    o = this._core.$stage.children(),
                    a = this._hashes[r] && o.index(this._hashes[r]);
                  void 0 !== a &&
                    a !== this._core.current() &&
                    this._core.to(this._core.relative(a), !1, !0);
                }, this)
              );
          };
          (a.Defaults = { URLhashListener: !1 }),
            (a.prototype.destroy = function () {
              var r, o;
              for (r in (t(i).off("hashchange.owl.navigation"), this._handlers))
                this._core.$element.off(r, this._handlers[r]);
              for (o in Object.getOwnPropertyNames(this))
                "function" != typeof this[o] && (this[o] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Hash = a);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, i, r, o) {
          var a = t("<support>").get(0).style,
            c = "Webkit Moz O ms".split(" "),
            l = {
              transition: {
                end: {
                  WebkitTransition: "webkitTransitionEnd",
                  MozTransition: "transitionend",
                  OTransition: "oTransitionEnd",
                  transition: "transitionend",
                },
              },
              animation: {
                end: {
                  WebkitAnimation: "webkitAnimationEnd",
                  MozAnimation: "animationend",
                  OAnimation: "oAnimationEnd",
                  animation: "animationend",
                },
              },
            },
            u = function csstransforms() {
              return !!test("transform");
            },
            h = function csstransforms3d() {
              return !!test("perspective");
            },
            d = function cssanimations() {
              return !!test("animation");
            };
          function test(i, r) {
            var o = !1,
              l = i.charAt(0).toUpperCase() + i.slice(1);
            return (
              t.each(
                (i + " " + c.join(l + " ") + l).split(" "),
                function (t, i) {
                  if (void 0 !== a[i]) return (o = !r || i), !1;
                }
              ),
              o
            );
          }
          function prefixed(t) {
            return test(t, !0);
          }
          (function csstransitions() {
            return !!test("transition");
          })() &&
            ((t.support.transition = new String(prefixed("transition"))),
            (t.support.transition.end =
              l.transition.end[t.support.transition])),
            d() &&
              ((t.support.animation = new String(prefixed("animation"))),
              (t.support.animation.end = l.animation.end[t.support.animation])),
            u() &&
              ((t.support.transform = new String(prefixed("transform"))),
              (t.support.transform3d = h()));
        })(window.Zepto || window.jQuery, window, document);
    },
    function (t, i, r) {
      var o = r(50);
      t.exports = function template(t) {
        var i,
          r = "",
          a = t || {};
        return (
          function (t) {
            t &&
              ((r += "<div>"),
              t.src &&
                t.src.file &&
                t.src.ext &&
                (r =
                  r +
                  '<div class="fv__download-item"><span>' +
                  (null == (i = t.src.ext) ? "" : i) +
                  " " +
                  o.escape(
                    null == (i = t.src.ext.length > 4 ? "" : "file") ? "" : i
                  ) +
                  '</span><a class="btn btn-outline-primary"' +
                  o.attr("href", t.src.file, !0, !0) +
                  o.attr(
                    "download",
                    "".concat(t.title, " ").concat(t.src.ext),
                    !0,
                    !0
                  ) +
                  ">Download " +
                  o.escape(null == (i = t.src.ext) ? "" : i) +
                  "</a></div>"),
              t.pptx &&
                (r =
                  r +
                  '<div class="fv__download-item"><span>PPT file</span><a class="btn btn-outline-primary"' +
                  o.attr("href", t.pptx, !0, !0) +
                  ' target="_blank"' +
                  o.attr("title", "".concat(t.title, " PPT"), !0, !0) +
                  ">Download PPT</a></div>"),
              (r += "</div>"));
          }.call(
            this,
            "content" in a
              ? a.content
              : "undefined" != typeof content
              ? content
              : void 0
          ),
          r
        );
      };
    },
    function (t, i, r) {
      var o = r(12),
        a = r(1),
        c = r(2);
      function ownKeys(t, i) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          i &&
            (o = o.filter(function (i) {
              return Object.getOwnPropertyDescriptor(t, i).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function _objectSpread(t) {
        for (var i = 1; i < arguments.length; i++) {
          var r = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(r), !0).forEach(function (i) {
                o(t, i, r[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (i) {
                Object.defineProperty(
                  t,
                  i,
                  Object.getOwnPropertyDescriptor(r, i)
                );
              });
        }
        return t;
      }
      var l = (function () {
        "use strict";
        function FocusMode(t, i, r) {
          a(this, FocusMode),
            (this._configs = {}),
            (this.currentFocusIdleTime = 0),
            (this.main = t),
            (this.lightbox = i),
            (this.configs = r),
            this.initialize();
        }
        return (
          c(FocusMode, [
            {
              key: "configs",
              get: function get() {
                return this._configs;
              },
              set: function set(t) {
                var i = {
                  idleTime: 5,
                  settingClassName: "js--has-focus-mode",
                  className: "js--focus-mode",
                  disabledOnClasses: [
                    "js-open-info--opened",
                    "js--slideshowNav-open",
                  ],
                  disableOnTouch: !0,
                };
                this._configs =
                  "boolean" == typeof t
                    ? i
                    : _objectSpread(_objectSpread({}, i), t);
              },
            },
            {
              key: "initialize",
              value: function initialize() {
                var t = this,
                  i = this.configs,
                  r = i.settingClassName,
                  o = i.disableOnTouch;
                this.main.classList.add(r),
                  (this.mouseIdleInterval = setInterval(
                    this.mouseIdle.bind(this),
                    1e3
                  )),
                  document.addEventListener(
                    "mousemove",
                    this.resetTimer.bind(this)
                  ),
                  document.addEventListener(
                    "click",
                    this.resetTimer.bind(this)
                  ),
                  o &&
                    document.addEventListener("touchend", function () {
                      (t.focusModeDisabled = !0),
                        t.mouseIdleInterval &&
                          clearInterval(t.mouseIdleInterval);
                    });
              },
            },
            {
              key: "mouseIdle",
              value: function mouseIdle() {
                var t = this.configs.idleTime;
                this.focusModeDisabled ||
                  (this.main.classList.contains("js--hidden")
                    ? (this.currentFocusIdleTime = 0)
                    : (this.toggleActions(),
                      this.currentFocusIdleTime > t ||
                        this.currentFocusIdleTime++));
              },
            },
            {
              key: "toggleActions",
              value: function toggleActions() {
                var t = this,
                  i = this.configs,
                  r = i.idleTime,
                  o = i.disabledOnClasses,
                  a = i.className;
                Object.values(this.lightbox).forEach(function (i) {
                  var c = !0;
                  o.forEach(function (t) {
                    i.classList.contains(t) && (c = !1);
                  }),
                    i.classList.toggle(a, t.currentFocusIdleTime >= r && c);
                });
              },
            },
            {
              key: "resetTimer",
              value: function resetTimer() {
                (this.currentFocusIdleTime = 0), this.toggleActions();
              },
            },
          ]),
          FocusMode
        );
      })();
      t.exports = l;
    },
    function (t, i, r) {
      "use strict";
      r.r(i),
        r.d(i, "parseSrcset", function () {
          return parseSrcset;
        }),
        r.d(i, "stringifySrcset", function () {
          return stringifySrcset;
        });
      var o = r(319),
        a = r.n(o);
      function _createForOfIteratorHelper(t, i) {
        var r =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!r) {
          if (
            Array.isArray(t) ||
            (r = (function _unsupportedIterableToArray(t, i) {
              if (!t) return;
              if ("string" == typeof t) return _arrayLikeToArray(t, i);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === r && t.constructor && (r = t.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return _arrayLikeToArray(t, i);
            })(t)) ||
            (i && t && "number" == typeof t.length)
          ) {
            r && (t = r);
            var o = 0,
              a = function F() {};
            return {
              s: a,
              n: function n() {
                return o >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[o++] };
              },
              e: function e(t) {
                throw t;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var c,
          l = !0,
          u = !1;
        return {
          s: function s() {
            r = r.call(t);
          },
          n: function n() {
            var t = r.next();
            return (l = t.done), t;
          },
          e: function e(t) {
            (u = !0), (c = t);
          },
          f: function f() {
            try {
              l || null == r.return || r.return();
            } finally {
              if (u) throw c;
            }
          },
        };
      }
      function _arrayLikeToArray(t, i) {
        (null == i || i > t.length) && (i = t.length);
        for (var r = 0, o = new Array(i); r < i; r++) o[r] = t[r];
        return o;
      }
      var c = /\s*([^,]\S*[^,](?:\s+[^,]+)?)\s*(?:,|$)/,
        l = function duplicateDescriptorCheck(t, i, r) {
          if (((t[r] = t[r] || {}), t[r][i]))
            throw new Error(
              "No more than one image candidate is allowed for a given descriptor: "
                .concat(i)
                .concat(r)
            );
          t[r][i] = !0;
        },
        u = function descriptorCountCheck(t, i) {
          if (0 === i.length)
            !(function fallbackDescriptorDuplicateCheck(t) {
              if (t.fallback)
                throw new Error("Only one fallback image candidate is allowed");
              if (t.x[1])
                throw new Error(
                  "A fallback image is equivalent to a 1x descriptor, providing both is invalid."
                );
              t.fallback = !0;
            })(t);
          else if (i.length > 1)
            throw new Error(
              "Image candidate may have no more than one descriptor, found "
                .concat(i.length, ": ")
                .concat(i.join(" "))
            );
        },
        h = function validDescriptorCheck(t, i, r) {
          if (Number.isNaN(t))
            throw new TypeError("".concat(r || t, " is not a valid number"));
          switch (i) {
            case "w":
              if (t <= 0)
                throw new Error("Width descriptor must be greater than zero");
              if (!Number.isInteger(t))
                throw new TypeError("Width descriptor must be an integer");
              break;
            case "x":
              if (t <= 0)
                throw new Error(
                  "Pixel density descriptor must be greater than zero"
                );
              break;
            case "h":
              throw new Error("Height descriptor is no longer allowed");
            default:
              throw new Error("Invalid srcset descriptor: ".concat(r));
          }
        };
      function parseSrcset(t) {
        var i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = i.strict,
          o = void 0 !== r && r,
          d = o ? {} : void 0;
        return t
          .split(c)
          .filter(function (t, i) {
            return i % 2 == 1;
          })
          .map(function (t) {
            var i = t.trim().split(/\s+/),
              r = a()(i),
              c = r[0],
              p = r.slice(1),
              v = { url: c };
            o && u(d, p);
            var g,
              m = _createForOfIteratorHelper(p);
            try {
              for (m.s(); !(g = m.n()).done; ) {
                var y = g.value,
                  b = y[y.length - 1],
                  _ = Number.parseFloat(y.slice(0, -1));
                switch ((o && (h(_, b, y), l(d, _, b)), b)) {
                  case "w":
                    v.width = _;
                    break;
                  case "h":
                    v.height = _;
                    break;
                  case "x":
                    v.density = _;
                }
              }
            } catch (t) {
              m.e(t);
            } finally {
              m.f();
            }
            return v;
          });
      }
      var d = new Set(["width", "height", "density"]);
      function stringifySrcset(t) {
        var i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = i.strict,
          o = void 0 !== r && r,
          a = o ? {} : void 0;
        return t
          .map(function (t) {
            if (!t.url) {
              if (o) throw new Error("URL is required");
              return "";
            }
            var i = Object.keys(t).filter(function (t) {
              return d.has(t);
            });
            o && u(a, i);
            var r,
              c = [t.url],
              p = _createForOfIteratorHelper(i);
            try {
              for (p.s(); !(r = p.n()).done; ) {
                var v = r.value,
                  g = t[v],
                  m = void 0;
                switch (v) {
                  case "width":
                    m = "w";
                    break;
                  case "height":
                    m = "h";
                    break;
                  case "density":
                    m = "x";
                }
                var y = "".concat(g).concat(m);
                o && (h(g, m), l(a, g, m)), c.push(y);
              }
            } catch (t) {
              p.e(t);
            } finally {
              p.f();
            }
            return c.join(" ");
          })
          .join(", ");
      }
    },
    function (t, i, r) {
      var o = r(12),
        a = r(1),
        c = r(2),
        l = r(5),
        u = r(4),
        h = r(258),
        d = r(3),
        p = r(0);
      function ownKeys(t, i) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          i &&
            (o = o.filter(function (i) {
              return Object.getOwnPropertyDescriptor(t, i).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function _objectSpread(t) {
        for (var i = 1; i < arguments.length; i++) {
          var r = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(r), !0).forEach(function (i) {
                o(t, i, r[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (i) {
                Object.defineProperty(
                  t,
                  i,
                  Object.getOwnPropertyDescriptor(r, i)
                );
              });
        }
        return t;
      }
      function _createSuper(t) {
        var i = (function _isNativeReflectConstruct() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var r,
            o = p(t);
          if (i) {
            var a = p(this).constructor;
            r = Reflect.construct(o, arguments, a);
          } else r = o.apply(this, arguments);
          return u(this, r);
        };
      }
      var v = (function (t) {
        "use strict";
        l(IVViewer, t);
        var i = _createSuper(IVViewer);
        function IVViewer(t, o) {
          var c,
            l =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { classNames: {} };
          return (
            a(this, IVViewer),
            ((c = i.call(this, t, o, l)).viewers = {}),
            (c.viewerModule = r(640).ImageViewer),
            null == o || o.classList.remove(c.config.HIDDEN),
            c
          );
        }
        return (
          c(IVViewer, [
            {
              key: "config",
              get: function get() {
                return d(p(IVViewer.prototype), "config", this);
              },
              set: function set(t) {
                var i, r, o, a;
                h(p(IVViewer.prototype), "config", t, this, !0),
                  (this._config = _objectSpread(
                    _objectSpread({}, this._config),
                    {
                      initialZoom:
                        (null === (i = t.ivViewer) || void 0 === i
                          ? void 0
                          : i.initalZoom) || 150,
                      maxZoom:
                        (null === (r = t.ivViewer) || void 0 === r
                          ? void 0
                          : r.maxZoom) || 1e3,
                      hasZoomButtons:
                        "boolean" !=
                          typeof (null === (o = t.ivViewer) || void 0 === o
                            ? void 0
                            : o.hasZoomButtons) ||
                        (null === (a = t.ivViewer) || void 0 === a
                          ? void 0
                          : a.hasZoomButtons),
                    }
                  ));
              },
            },
            {
              key: "zoomClick",
              value: function zoomClick(t) {
                var i, r, o;
                (d(p(IVViewer.prototype), "zoomClick", this).call(this, t),
                this.zoomer.classList.contains(this.config.ZOOMER_ACTIVE))
                  ? (null === (i = this.currentViewer) ||
                      void 0 === i ||
                      i.zoom(this.config.initialZoom),
                    null === (r = this.currentViewer) ||
                      void 0 === r ||
                      r.showSnapView(!1))
                  : null === (o = this.currentViewer) ||
                    void 0 === o ||
                    o.resetZoom();
              },
            },
            {
              key: "changeCurrentViewer",
              value: function changeCurrentViewer(t) {
                this.currentViewer = t;
              },
            },
            {
              key: "onImageChange",
              value: function onImageChange(t) {
                d(p(IVViewer.prototype), "onImageChange", this).call(this, t);
                var i = this.viewers[t.item.index];
                i && i[this.multiImageIndex]
                  ? i[this.multiImageIndex] !== this.currentViewer &&
                    i[this.multiImageIndex].refresh()
                  : (i || (this.viewers[t.item.index] = {}),
                    (this.viewers[t.item.index][this.multiImageIndex] =
                      this.viewerInstance),
                    (this.viewers[t.item.index][this.multiImageIndex].index =
                      t.item.index),
                    (i = this.viewers[t.item.index])),
                  this.changeCurrentViewer(i[this.multiImageIndex]);
              },
            },
            {
              key: "viewerInstance",
              get: function get() {
                var t = this;
                return new this.viewerModule(this.image, {
                  maxZoom: this.config.maxZoom,
                  hasZoomButtons: this.config.hasZoomButtons,
                  listeners: {
                    onZoomChange: function onZoomChange(i) {
                      var r = i.reachedMin;
                      t.onZoomChange(r);
                    },
                  },
                });
              },
            },
          ]),
          IVViewer
        );
      })(r(259));
      t.exports = v;
    },
    function (t, i, r) {
      var o = r(8),
        a = r(13),
        c = r(12),
        l = r(1),
        u = r(2),
        h = r(5),
        d = r(4),
        p = r(258),
        v = r(3),
        g = r(0);
      function _regeneratorRuntime() {
        "use strict";
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
          function _regeneratorRuntime() {
            return t;
          };
        var t = {},
          i = Object.prototype,
          r = i.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (t, i, r) {
              t[i] = r.value;
            },
          c = "function" == typeof Symbol ? Symbol : {},
          l = c.iterator || "@@iterator",
          u = c.asyncIterator || "@@asyncIterator",
          h = c.toStringTag || "@@toStringTag";
        function define(t, i, r) {
          return (
            Object.defineProperty(t, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[i]
          );
        }
        try {
          define({}, "");
        } catch (t) {
          define = function define(t, i, r) {
            return (t[i] = r);
          };
        }
        function wrap(t, i, r, o) {
          var c = i && i.prototype instanceof Generator ? i : Generator,
            l = Object.create(c.prototype),
            u = new Context(o || []);
          return a(l, "_invoke", { value: makeInvokeMethod(t, r, u) }), l;
        }
        function tryCatch(t, i, r) {
          try {
            return { type: "normal", arg: t.call(i, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = wrap;
        var d = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var p = {};
        define(p, l, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          g = v && v(v(values([])));
        g && g !== i && r.call(g, l) && (p = g);
        var m =
          (GeneratorFunctionPrototype.prototype =
          Generator.prototype =
            Object.create(p));
        function defineIteratorMethods(t) {
          ["next", "throw", "return"].forEach(function (i) {
            define(t, i, function (t) {
              return this._invoke(i, t);
            });
          });
        }
        function AsyncIterator(t, i) {
          var c;
          a(this, "_invoke", {
            value: function value(a, l) {
              function callInvokeWithMethodAndArg() {
                return new i(function (c, u) {
                  !(function invoke(a, c, l, u) {
                    var h = tryCatch(t[a], t, c);
                    if ("throw" !== h.type) {
                      var d = h.arg,
                        p = d.value;
                      return p && "object" == o(p) && r.call(p, "__await")
                        ? i.resolve(p.__await).then(
                            function (t) {
                              invoke("next", t, l, u);
                            },
                            function (t) {
                              invoke("throw", t, l, u);
                            }
                          )
                        : i.resolve(p).then(
                            function (t) {
                              (d.value = t), l(d);
                            },
                            function (t) {
                              return invoke("throw", t, l, u);
                            }
                          );
                    }
                    u(h.arg);
                  })(a, l, c, u);
                });
              }
              return (c = c
                ? c.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
                : callInvokeWithMethodAndArg());
            },
          });
        }
        function makeInvokeMethod(t, i, r) {
          var o = "suspendedStart";
          return function (a, c) {
            if ("executing" === o)
              throw new Error("Generator is already running");
            if ("completed" === o) {
              if ("throw" === a) throw c;
              return doneResult();
            }
            for (r.method = a, r.arg = c; ; ) {
              var l = r.delegate;
              if (l) {
                var u = maybeInvokeDelegate(l, r);
                if (u) {
                  if (u === d) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === o) throw ((o = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = "executing";
              var h = tryCatch(t, i, r);
              if ("normal" === h.type) {
                if (
                  ((o = r.done ? "completed" : "suspendedYield"), h.arg === d)
                )
                  continue;
                return { value: h.arg, done: r.done };
              }
              "throw" === h.type &&
                ((o = "completed"), (r.method = "throw"), (r.arg = h.arg));
            }
          };
        }
        function maybeInvokeDelegate(t, i) {
          var r = i.method,
            o = t.iterator[r];
          if (void 0 === o)
            return (
              (i.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((i.method = "return"),
                (i.arg = void 0),
                maybeInvokeDelegate(t, i),
                "throw" === i.method)) ||
                ("return" !== r &&
                  ((i.method = "throw"),
                  (i.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              d
            );
          var a = tryCatch(o, t.iterator, i.arg);
          if ("throw" === a.type)
            return (
              (i.method = "throw"), (i.arg = a.arg), (i.delegate = null), d
            );
          var c = a.arg;
          return c
            ? c.done
              ? ((i[t.resultName] = c.value),
                (i.next = t.nextLoc),
                "return" !== i.method &&
                  ((i.method = "next"), (i.arg = void 0)),
                (i.delegate = null),
                d)
              : c
            : ((i.method = "throw"),
              (i.arg = new TypeError("iterator result is not an object")),
              (i.delegate = null),
              d);
        }
        function pushTryEntry(t) {
          var i = { tryLoc: t[0] };
          1 in t && (i.catchLoc = t[1]),
            2 in t && ((i.finallyLoc = t[2]), (i.afterLoc = t[3])),
            this.tryEntries.push(i);
        }
        function resetTryEntry(t) {
          var i = t.completion || {};
          (i.type = "normal"), delete i.arg, (t.completion = i);
        }
        function Context(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(pushTryEntry, this),
            this.reset(!0);
        }
        function values(t) {
          if (t) {
            var i = t[l];
            if (i) return i.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                a = function next() {
                  for (; ++o < t.length; )
                    if (r.call(t, o))
                      return (next.value = t[o]), (next.done = !1), next;
                  return (next.value = void 0), (next.done = !0), next;
                };
              return (a.next = a);
            }
          }
          return { next: doneResult };
        }
        function doneResult() {
          return { value: void 0, done: !0 };
        }
        return (
          (GeneratorFunction.prototype = GeneratorFunctionPrototype),
          a(m, "constructor", {
            value: GeneratorFunctionPrototype,
            configurable: !0,
          }),
          a(GeneratorFunctionPrototype, "constructor", {
            value: GeneratorFunction,
            configurable: !0,
          }),
          (GeneratorFunction.displayName = define(
            GeneratorFunctionPrototype,
            h,
            "GeneratorFunction"
          )),
          (t.isGeneratorFunction = function (t) {
            var i = "function" == typeof t && t.constructor;
            return (
              !!i &&
              (i === GeneratorFunction ||
                "GeneratorFunction" === (i.displayName || i.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                : ((t.__proto__ = GeneratorFunctionPrototype),
                  define(t, h, "GeneratorFunction")),
              (t.prototype = Object.create(m)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          defineIteratorMethods(AsyncIterator.prototype),
          define(AsyncIterator.prototype, u, function () {
            return this;
          }),
          (t.AsyncIterator = AsyncIterator),
          (t.async = function (i, r, o, a, c) {
            void 0 === c && (c = Promise);
            var l = new AsyncIterator(wrap(i, r, o, a), c);
            return t.isGeneratorFunction(r)
              ? l
              : l.next().then(function (t) {
                  return t.done ? t.value : l.next();
                });
          }),
          defineIteratorMethods(m),
          define(m, h, "Generator"),
          define(m, l, function () {
            return this;
          }),
          define(m, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var i = Object(t),
              r = [];
            for (var o in i) r.push(o);
            return (
              r.reverse(),
              function next() {
                for (; r.length; ) {
                  var t = r.pop();
                  if (t in i) return (next.value = t), (next.done = !1), next;
                }
                return (next.done = !0), next;
              }
            );
          }),
          (t.values = values),
          (Context.prototype = {
            constructor: Context,
            reset: function reset(t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(resetTryEntry),
                !t)
              )
                for (var i in this)
                  "t" === i.charAt(0) &&
                    r.call(this, i) &&
                    !isNaN(+i.slice(1)) &&
                    (this[i] = void 0);
            },
            stop: function stop() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function dispatchException(t) {
              if (this.done) throw t;
              var i = this;
              function handle(r, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = t),
                  (i.next = r),
                  o && ((i.method = "next"), (i.arg = void 0)),
                  !!o
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  c = a.completion;
                if ("root" === a.tryLoc) return handle("end");
                if (a.tryLoc <= this.prev) {
                  var l = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (l && u) {
                    if (this.prev < a.catchLoc) return handle(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return handle(a.finallyLoc);
                  } else if (l) {
                    if (this.prev < a.catchLoc) return handle(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return handle(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function abrupt(t, i) {
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var c = a;
                  break;
                }
              }
              c &&
                ("break" === t || "continue" === t) &&
                c.tryLoc <= i &&
                i <= c.finallyLoc &&
                (c = null);
              var l = c ? c.completion : {};
              return (
                (l.type = t),
                (l.arg = i),
                c
                  ? ((this.method = "next"), (this.next = c.finallyLoc), d)
                  : this.complete(l)
              );
            },
            complete: function complete(t, i) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && i && (this.next = i),
                d
              );
            },
            finish: function finish(t) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var r = this.tryEntries[i];
                if (r.finallyLoc === t)
                  return (
                    this.complete(r.completion, r.afterLoc), resetTryEntry(r), d
                  );
              }
            },
            catch: function _catch(t) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var r = this.tryEntries[i];
                if (r.tryLoc === t) {
                  var o = r.completion;
                  if ("throw" === o.type) {
                    var a = o.arg;
                    resetTryEntry(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function delegateYield(t, i, r) {
              return (
                (this.delegate = {
                  iterator: values(t),
                  resultName: i,
                  nextLoc: r,
                }),
                "next" === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          t
        );
      }
      function ownKeys(t, i) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          i &&
            (o = o.filter(function (i) {
              return Object.getOwnPropertyDescriptor(t, i).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function _objectSpread(t) {
        for (var i = 1; i < arguments.length; i++) {
          var r = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(r), !0).forEach(function (i) {
                c(t, i, r[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (i) {
                Object.defineProperty(
                  t,
                  i,
                  Object.getOwnPropertyDescriptor(r, i)
                );
              });
        }
        return t;
      }
      function _createSuper(t) {
        var i = (function _isNativeReflectConstruct() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var r,
            o = g(t);
          if (i) {
            var a = g(this).constructor;
            r = Reflect.construct(o, arguments, a);
          } else r = o.apply(this, arguments);
          return d(this, r);
        };
      }
      var m = r(378),
        y = (function (t) {
          "use strict";
          h(ImageNavigator, t);
          var i,
            o = _createSuper(ImageNavigator);
          function ImageNavigator(t, i) {
            var a,
              c =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : { classNames: {} };
            return (
              l(this, ImageNavigator),
              ((a = o.call(this, t, i, c)).tmpl = r(379)),
              (a.zoomStep = 0.25),
              (a.transitionBase = 0.1),
              (a.minInitResize = 0.04),
              (a.maxImageSizeRatio = 1),
              (a.toolbarHeight = 0),
              a.registerCallbacks(),
              a.buildNavigator(),
              a
            );
          }
          return (
            u(ImageNavigator, [
              {
                key: "config",
                get: function get() {
                  return v(g(ImageNavigator.prototype), "config", this);
                },
                set: function set(t) {
                  var i, r;
                  p(g(ImageNavigator.prototype), "config", t, this, !0),
                    (this._config = _objectSpread(
                      _objectSpread({}, this._config),
                      {
                        makeVisibleOnHover:
                          (null === (i = t.imageNavigator) || void 0 === i
                            ? void 0
                            : i.makeVisibleOnHover) || !1,
                        showInterval:
                          (null === (r = t.imageNavigator) || void 0 === r
                            ? void 0
                            : r.showInterval) || 5,
                      }
                    ));
                },
              },
              {
                key: "registerCallbacks",
                value: function registerCallbacks() {
                  (this.adjustFocusPosition =
                    this.adjustFocusPosition.bind(this)),
                    (this.adjustFocusSize = this.adjustFocusSize.bind(this)),
                    (this.moverTracker = this.moverTracker.bind(this)),
                    (this.trackerTerminate = this.trackerTerminate.bind(this)),
                    (this.restoreFocusPositioning =
                      this.restoreFocusPositioning.bind(this)),
                    (this.moveFocus = this.moveFocus.bind(this)),
                    (this.trackerInit = this.trackerInit.bind(this)),
                    (this.prevent = this.prevent.bind(this)),
                    (this.unzoom = this.unzoom.bind(this)),
                    (this.zoom = this.zoom.bind(this)),
                    (this.adjustNavigator = this.adjustNavigator.bind(this)),
                    (this.removeOperateRunner =
                      this.removeOperateRunner.bind(this)),
                    (this.operateRunner = this.operateRunner.bind(this)),
                    (this.onRunnerDrag = this.onRunnerDrag.bind(this)),
                    (this.triggerOwlResizeHeight =
                      this.triggerOwlResizeHeight.bind(this));
                },
              },
              {
                key: "zoomDraggingElements",
                get: function get() {
                  var t = this.$owl && this.$owl.parent();
                  return [t && t[0], this.groove];
                },
              },
              {
                key: "getSrc",
                value: function getSrc(t) {
                  return void 0 !== t.currentSrc ? t.currentSrc : t.src;
                },
              },
              {
                key: "onImageChange",
                value: function onImageChange() {
                  var t = this;
                  v(g(ImageNavigator.prototype), "onImageChange", this).call(
                    this
                  ),
                    this.image.complete
                      ? setTimeout(function () {
                          t.initNavigator();
                        }, 0)
                      : this.image.addEventListener(
                          "load",
                          function () {
                            t.initNavigator();
                          },
                          { once: !0 }
                        );
                },
              },
              {
                key: "isResizedEnough",
                value: function isResizedEnough() {
                  return (
                    this.image.naturalWidth / this.image.width - 1 >
                    this.minInitResize
                  );
                },
              },
              {
                key: "initNavigator",
                value: function initNavigator() {
                  var t = this;
                  if (!this.isResizedEnough())
                    return (
                      console.warn(
                        "The image is naturally sized or very close it. Navigator is not launching."
                      ),
                      void (
                        this.zoomer &&
                        (this.zoomer.classList.add(this.config.HIDDEN),
                        this.main.classList.add(this.config.HIDDEN))
                      )
                    );
                  this.zoomer &&
                    (this.zoomer.classList.remove(this.config.HIDDEN),
                    this.main.classList.remove(this.config.HIDDEN));
                  var i =
                      this.image.width >= this.image.height
                        ? "width"
                        : "height",
                    r = "width" === i ? "height" : "width";
                  (this.frame.style[i] = "100%"),
                    (this.frame.style[r] =
                      (this.image[r] / this.image[i]) * 100 + "%"),
                    (this.frame.style.backgroundImage = "url('".concat(
                      this.getSrc(this.image),
                      "')"
                    )),
                    this.resetSavedImageBox(),
                    setTimeout(function () {
                      t.currentTransition =
                        t.transitionBase *
                          (t.image.naturalWidth / t.image.width) +
                        "s";
                    }, 0),
                    (this.pinchZoom = new m(
                      this.zoom,
                      this.unzoom,
                      this.scaleTo.bind(this),
                      this.getCurrentZoomRatio.bind(this)
                    )),
                    this.resetNavigator(),
                    this.imageEventsControl(this.image, !0),
                    this.adjustRunnerPosition(0);
                },
              },
              {
                key: "buildNavigator",
                value: function buildNavigator() {
                  var t = document.createElement("div");
                  (t.innerHTML = this.tmpl()),
                    (this.main = t.firstChild),
                    this.hideNavigator(),
                    (this.focus = this.main.querySelector(
                      ".image-navigator__focus"
                    )),
                    (this.frame = this.main.querySelector(
                      ".image-navigator__frame"
                    )),
                    (this.zoomIn = this.main.querySelector(
                      ".image-navigator__in"
                    )),
                    (this.zoomOut = this.main.querySelector(
                      ".image-navigator__out"
                    )),
                    (this.runner = this.main.querySelector(
                      ".image-navigator__runner"
                    )),
                    (this.groove = this.main.querySelector(
                      ".image-navigator__groove"
                    )),
                    this.focusEventsControl(),
                    this.runnerEventsControl(),
                    this.showTimerEventsControl(),
                    this.$owl.parent().append(this.main),
                    window.addEventListener(
                      "resize",
                      this.triggerOwlResizeHeight
                    );
                },
              },
              {
                key: "zoomClick",
                value: function zoomClick(t) {
                  var i = this;
                  v(g(ImageNavigator.prototype), "zoomClick", this).call(
                    this,
                    t
                  ),
                    this.zoomer.classList.toggle("js--selected"),
                    this.scaleTo(this.currentZoomRatio ? 0 : this.zoomStep),
                    this.showNavigator(),
                    this.resetTimer().then(function () {
                      i.hideNavigator();
                    });
                },
              },
              {
                key: "showTimerEventsControl",
                value: function showTimerEventsControl() {
                  var t = this;
                  this.$owl.on(
                    "mousemove",
                    a(
                      _regeneratorRuntime().mark(function _callee() {
                        return _regeneratorRuntime().wrap(function _callee$(i) {
                          for (;;)
                            switch ((i.prev = i.next)) {
                              case 0:
                                return (
                                  t.isZoomed &&
                                    t.config.makeVisibleOnHover &&
                                    t.showNavigator(),
                                  (i.next = 3),
                                  t.hideAfterReset()
                                );
                              case 3:
                              case "end":
                                return i.stop();
                            }
                        }, _callee);
                      })
                    )
                  ),
                    this.navigatorMouseEnter();
                },
              },
              {
                key: "navigatorMouseEnter",
                value: function navigatorMouseEnter() {
                  var t = this;
                  this.config.makeVisibleOnHover &&
                    this.main.addEventListener(
                      "mouseenter",
                      (function () {
                        var i = a(
                          _regeneratorRuntime().mark(function _callee2(i) {
                            return _regeneratorRuntime().wrap(
                              function _callee2$(i) {
                                for (;;)
                                  switch ((i.prev = i.next)) {
                                    case 0:
                                      if (!t.isShown()) {
                                        i.next = 3;
                                        break;
                                      }
                                      return (i.next = 3), t.resetTimer();
                                    case 3:
                                    case "end":
                                      return i.stop();
                                  }
                              },
                              _callee2
                            );
                          })
                        );
                        return function (t) {
                          return i.apply(this, arguments);
                        };
                      })()
                    );
                },
              },
              {
                key: "hideAfterReset",
                value:
                  ((i = a(
                    _regeneratorRuntime().mark(function _callee3() {
                      return _regeneratorRuntime().wrap(
                        function _callee3$(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!this.isShown()) {
                                  t.next = 4;
                                  break;
                                }
                                return (t.next = 3), this.resetTimer();
                              case 3:
                                this.hideNavigator();
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        _callee3,
                        this
                      );
                    })
                  )),
                  function hideAfterReset() {
                    return i.apply(this, arguments);
                  }),
              },
              {
                key: "isZoomed",
                get: function get() {
                  return this.$owl.parent().hasClass(this.config.ZOOM_CLASS);
                },
              },
              {
                key: "showNavigator",
                value: function showNavigator() {
                  (this.main.style.visibility = "visible"),
                    (this.main.style.opacity = "1");
                },
              },
              {
                key: "hideNavigator",
                value: function hideNavigator() {
                  (this.main.style.visibility = "hidden"),
                    (this.main.style.opacity = "0");
                },
              },
              {
                key: "isShown",
                value: function isShown() {
                  return "visible" === this.main.style.visibility;
                },
              },
              {
                key: "startTimer",
                value: function startTimer() {
                  var t,
                    i = new Promise(function (i, r) {
                      return (t = i);
                    });
                  return (
                    (this.timerName = setTimeout(function () {
                      return t();
                    }, 1e3 * this.config.showInterval)),
                    i
                  );
                },
              },
              {
                key: "resetTimer",
                value: function resetTimer(t) {
                  if ((clearTimeout(this.timerName), !t))
                    return this.startTimer();
                },
              },
              {
                key: "onZoomChange",
                value: function onZoomChange(t) {
                  v(g(ImageNavigator.prototype), "onZoomChange", this).call(
                    this,
                    t
                  ),
                    t
                      ? this.zoomer.classList.add("js--selected")
                      : this.zoomer.classList.remove("js--selected");
                },
              },
              {
                key: "setCurrentZoomRatio",
                value: function setCurrentZoomRatio() {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  (this.currentZoomRatio = t), this.onZoomChange(t > 0);
                },
              },
              {
                key: "triggerOwlResizeHeight",
                value: function triggerOwlResizeHeight(t) {
                  this.image && this.$owl.trigger("refreshed.owl.carousel");
                },
              },
              {
                key: "imageEventsControl",
                value: function imageEventsControl(t) {
                  var i =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    r = i ? "addEventListener" : "removeEventListener",
                    o = i ? "on" : "off";
                  t[r]("pointerdown", this.trackerInit),
                    t[r]("pointerup", this.trackerTerminate),
                    t[r]("dragend", this.trackerTerminate),
                    t[r]("dragstart", this.prevent),
                    t.parentNode[r]("scroll", this.adjustFocusPosition),
                    document[r]("mouseout", this.trackerTerminate),
                    this.$owl[o](
                      "refreshed.owl.carousel",
                      this.adjustNavigator
                    );
                },
              },
              {
                key: "prevent",
                value: function prevent(t) {
                  t.stopPropagation(), t.preventDefault();
                },
              },
              {
                key: "trackerInit",
                value: function trackerInit(t) {
                  this.pointerId
                    ? this.trackerTerminate()
                    : ((this.pointerId = t.pointerId),
                      this.isDraggable() &&
                        ((this.image.style.cursor =
                          this.config.IMAGE_GRAB_CURSOR),
                        (this.trackerX = t.clientX),
                        (this.trackerY = t.clientY),
                        document.body.classList.add("fv--image-drag"),
                        this.image.addEventListener(
                          "pointermove",
                          this.moverTracker
                        )));
                },
              },
              {
                key: "trackerTerminate",
                value: function trackerTerminate() {
                  (this.pointerId = null),
                    (this.image.style.cursor = "inherit"),
                    document.body.classList.remove("fv--image-drag"),
                    this.image.removeEventListener(
                      "pointermove",
                      this.moverTracker
                    );
                },
              },
              {
                key: "focusEventsControl",
                value: function focusEventsControl() {
                  var t = this;
                  this.focus.addEventListener("mousedown", function (i) {
                    (t.focus.style.cursor = t.config.IMAGE_GRAB_CURSOR),
                      (t.focusX = i.clientX),
                      (t.focusY = i.clientY),
                      t.image.parentNode.removeEventListener(
                        "scroll",
                        t.adjustFocusPosition
                      ),
                      t.focus.parentNode.addEventListener(
                        "mousemove",
                        t.moveFocus
                      ),
                      t.focus.parentNode.addEventListener(
                        "mouseout",
                        t.restoreFocusPositioning,
                        { once: !0 }
                      );
                  }),
                    this.focus.addEventListener(
                      "mouseup",
                      this.restoreFocusPositioning
                    ),
                    this.focus.addEventListener(
                      "dragend",
                      this.restoreFocusPositioning
                    );
                },
              },
              {
                key: "restoreFocusPositioning",
                value: function restoreFocusPositioning() {
                  this.image.parentNode.addEventListener(
                    "scroll",
                    this.adjustFocusPosition
                  ),
                    (this.focus.style.cursor = "grab"),
                    this.focus.parentNode.removeEventListener(
                      "mousemove",
                      this.moveFocus
                    );
                },
              },
              {
                key: "runnerEventsControl",
                value: function runnerEventsControl() {
                  var t = this;
                  this.zoomIn.addEventListener("click", this.zoom.bind(this)),
                    this.zoomOut.addEventListener(
                      "click",
                      this.unzoom.bind(this)
                    ),
                    this.runner.addEventListener(
                      "mousedown",
                      this.onRunnerDrag
                    ),
                    this.runner.addEventListener(
                      "touchstart",
                      this.onRunnerDrag
                    ),
                    this.zoomDraggingElements.forEach(function (i) {
                      null == i ||
                        i.addEventListener("mouseup", t.removeOperateRunner),
                        null == i ||
                          i.addEventListener("touchend", t.removeOperateRunner);
                    });
                },
              },
              {
                key: "onRunnerDrag",
                value: function onRunnerDrag(t) {
                  var i = this;
                  t.preventDefault(),
                    t.stopPropagation(),
                    this.resetTimer(!0),
                    this.runner.classList.remove("fv--transitionable");
                  var r = t.clientX;
                  t.changedTouches && (r = t.changedTouches[0].clientX),
                    (this.runnerX = r),
                    this.zoomDraggingElements.forEach(function (t) {
                      null == t ||
                        t.addEventListener("mousemove", i.operateRunner),
                        null == t ||
                          t.addEventListener("touchmove", i.operateRunner);
                    });
                },
              },
              {
                key: "removeOperateRunner",
                value: function removeOperateRunner(t) {
                  var i = this;
                  this.runner.classList.add("fv--transitionable"),
                    this.resetTimer().then(function () {
                      i.hideNavigator();
                    }),
                    this.zoomDraggingElements.forEach(function (t) {
                      null == t ||
                        t.removeEventListener("mousemove", i.operateRunner),
                        null == t ||
                          t.removeEventListener("touchmove", i.operateRunner);
                    });
                },
              },
              {
                key: "unzoom",
                value: function unzoom() {
                  var t = this.currentZoomRatio
                    ? this.currentZoomRatio - this.zoomStep
                    : -this.zoomStep;
                  this.scaleTo(t);
                },
              },
              {
                key: "zoom",
                value: function zoom() {
                  var t = this.currentZoomRatio
                    ? this.currentZoomRatio + this.zoomStep
                    : this.zoomStep;
                  this.scaleTo(t);
                },
              },
              {
                key: "adjustRunnerPosition",
                value: function adjustRunnerPosition(t) {
                  this.runner.style.left =
                    (this.groove.offsetWidth - this.runner.offsetWidth) * t +
                    "px";
                },
              },
              {
                key: "adjustNavigator",
                value: function adjustNavigator() {
                  var t = this.image.getBoundingClientRect(),
                    i = t.left,
                    r = t.top,
                    o = t.bottom,
                    a = t.right,
                    c = t.height,
                    l = t.width,
                    u = this.image.parentNode.getBoundingClientRect();
                  l > u.width &&
                    (a < u.width
                      ? (this.image.style.left =
                          u.width - l + (l - this.image.width) / 2 + "px")
                      : i > u.left &&
                        (this.image.style.left = (l - u.width) / 2 + "px")),
                    l <= u.width && this.centerImage("x"),
                    c > u.height &&
                      (o < u.height
                        ? (this.image.style.top =
                            u.height - c + (c - this.image.height) / 2 + "px")
                        : r > u.top &&
                          (this.image.style.top = (c - u.height) / 2 + "px")),
                    c <= u.height && this.centerImage("y"),
                    this.adjustFocusSize(),
                    this.adjustFocusPosition();
                },
              },
              {
                key: "centerImage",
                value: function centerImage(t) {
                  var i = this.image.parentNode.getBoundingClientRect();
                  ("y" !== t && t) ||
                    ((this.image.style.top =
                      (i.height - this.image.height) / 2 + "px"),
                    (this.image.style.bottom = "auto")),
                    ("x" !== t && t) ||
                      ((this.image.style.left =
                        (i.width - this.image.width) / 2 + "px"),
                      (this.image.style.right = "auto"));
                },
              },
              {
                key: "getCurrentZoomRatio",
                value: function getCurrentZoomRatio() {
                  return this.currentZoomRatio;
                },
              },
              {
                key: "scaleTo",
                value: function scaleTo(t) {
                  var i = this,
                    r =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    o =
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2];
                  if (!(t === this.currentZoomRatio || t < 0 || t > 1)) {
                    var a = this.image.getBoundingClientRect(),
                      c = a.left,
                      l = a.top,
                      u = a.height,
                      h = a.width,
                      d = this.image.parentNode,
                      p = d.offsetHeight,
                      v = d.offsetWidth,
                      g = this.image.parentNode.getBoundingClientRect(),
                      m = 1 - this.image.width / this.image.naturalWidth,
                      y = m * t + (1 - m),
                      b = y * (1 / (1 - m));
                    (this.image.style.width = this.image.width + "px"),
                      (this.image.style.maxHeight = "none"),
                      (this.image.style.maxWidth = "none");
                    var _ = b / (h / this.image.width),
                      w = h - _ * h,
                      x = u - _ * u,
                      S = c + w / 2,
                      k = l + x / 2,
                      T = this.image.width * b,
                      E = this.image.height * b,
                      O = S + T,
                      I = k + E;
                    if ((o && this.enableAnimation(), !(T < v && E < p))) {
                      var C = 10;
                      if (S > 0 && T > v)
                        this.image.style.left =
                          (T - this.image.width) / 2 + "px";
                      else if (O < v && T > v)
                        this.image.style.left =
                          S + (v - O) + (T - this.image.width) / 2 + "px";
                      else if (T < v) {
                        var A = Math.floor(
                            c +
                              (h - this.image.width) / 2 -
                              (g.width - this.image.width) / 2
                          ),
                          L = (h - this.image.width) / 2 + c;
                        Math.abs(A) > C && T > g.width
                          ? (this.image.style.left = L * _ + "px")
                          : (this.image.style.left =
                              (g.width - this.image.width) / 2 + "px");
                      }
                      if (k > 0 && E > p)
                        this.image.style.top =
                          (E - this.image.height) / 2 + "px";
                      else if (I < p && E >= p)
                        this.image.style.top =
                          k + (p - I) + (E - this.image.height) / 2 + "px";
                      else {
                        var P = Math.floor(
                          l +
                            (u - this.image.height) / 2 -
                            (g.height - this.image.height) / 2
                        );
                        if (Math.abs(P) > C && E > g.height) {
                          var N = (u - this.image.height) / 2 + l;
                          this.image.style.top = N * _ + "px";
                        } else
                          this.image.style.top =
                            (g.height - this.image.height) / 2 + "px";
                      }
                      this.image.style.transform = "scale(".concat(
                        b * this.maxImageSizeRatio,
                        ")"
                      );
                    }
                    (0 === t || (T < v && E < p)) &&
                      (this.resetImageManipulations(),
                      this.adjustRunnerPosition(0),
                      (this.image.style.transform = "scale(".concat(
                        this.maxImageSizeRatio,
                        ")"
                      )),
                      (t = 0)),
                      this.setCurrentZoomRatio(t);
                    var R = function afterScale() {
                      i.adjustFocusSize(),
                        i.adjustFocusPosition(),
                        i.checkDraggability(),
                        r && i.adjustRunnerPosition(t),
                        i.enableAnimation(!1);
                    };
                    o
                      ? this.image.addEventListener("transitionend", R, {
                          once: !0,
                        })
                      : R();
                  }
                },
              },
              {
                key: "setDefaultPos",
                value: function setDefaultPos() {
                  var t = this.imageOriginalBBox,
                    i = this.image.getBoundingClientRect(),
                    r = this.image.parentNode.getBoundingClientRect();
                  if (r.height !== t.height && r.width !== t.width) {
                    var o =
                        r.height / t.height > r.width / t.width
                          ? "height"
                          : "width",
                      a = "height" === o ? "width" : "height",
                      c = "width" === o ? "left" : "top",
                      l = "top" === c ? "left" : "top",
                      u = (r[o] - t[o] * (r[a] / t[a])) / 2;
                    (this.image.style[c] = u + "px"),
                      (this.image.style[l] = 0),
                      (this.image.style.width =
                        "width" === a
                          ? r.width + "px"
                          : r.height * (i.width / i.height) + "px");
                  } else this.centerImage();
                },
              },
              {
                key: "enableAnimation",
                value: function enableAnimation() {
                  var t =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    i = t ? "add" : "remove";
                  this.image.classList[i]("fv--transitionable"),
                    (this.image.style.transitionDuration = t
                      ? this.currentTransition
                      : "0s"),
                    (this.animationOn = t);
                },
              },
              {
                key: "operateRunner",
                value: function operateRunner(t) {
                  t.preventDefault();
                  var i = t.clientX;
                  t.changedTouches && (i = t.changedTouches[0].clientX);
                  var r = void 0 !== this.runnerX ? i - this.runnerX : 0,
                    o = this.runner.offsetLeft + r;
                  if (
                    o + this.runner.offsetWidth <= this.groove.offsetWidth &&
                    o >= 0
                  ) {
                    (this.runner.style.left = o + "px"), (this.runnerX = i);
                    var a =
                      this.runner.offsetLeft /
                      (this.groove.offsetWidth - this.runner.offsetWidth);
                    this.scaleTo(a, !1, !1);
                  }
                },
              },
              {
                key: "isDraggable",
                value: function isDraggable() {
                  var t = this.image.getBoundingClientRect(),
                    i = t.height,
                    r = t.width,
                    o = this.image.parentNode,
                    a = o.offsetWidth,
                    c = o.offsetHeight;
                  return r > a || i > c;
                },
              },
              {
                key: "checkDraggability",
                value: function checkDraggability() {
                  this.isDraggable()
                    ? this.image.parentNode.classList.add("fv--draggable")
                    : this.image.parentNode.classList.remove("fv--draggable");
                },
              },
              {
                key: "adjustFocusSize",
                value: function adjustFocusSize() {
                  if (this.image) {
                    var t = this.image.parentNode,
                      i = t.offsetHeight,
                      r = t.offsetWidth,
                      o = this.image.getBoundingClientRect().height,
                      a = this.image.getBoundingClientRect().width;
                    if (i && r) {
                      var c = r / a,
                        l = i / o;
                      (this.focus.style.width =
                        c <= 1 ? 100 * c + "%" : "100%"),
                        (this.focus.style.height =
                          l <= 1 ? 100 * l + "%" : "100%");
                    } else
                      console.warn(
                        "Can't adjust the position of focus element. It's probably hidden."
                      );
                  } else
                    console.warn("No image provided to resize. No resize.");
                },
              },
              {
                key: "adjustFocusPosition",
                value: function adjustFocusPosition() {
                  var t = this.image.getBoundingClientRect(),
                    i = t.height,
                    r = t.width,
                    o = t.left,
                    a = (t.top / i) * -100,
                    c = (o / r) * -100;
                  (this.focus.style.left = c < 0 ? 0 : c + "%"),
                    (this.focus.style.top = a < 0 ? 0 : a + "%");
                },
              },
              {
                key: "resetImageManipulations",
                value: function resetImageManipulations() {
                  this.setDefaultPos(),
                    (this.image.style.right = "auto"),
                    (this.image.style.bottom = "auto"),
                    (this.image.style.maxHeight = "100vh"),
                    (this.image.style.maxWidth = "100%"),
                    (this.image.style.transform = "scale(".concat(
                      this.maxImageSizeRatio,
                      ")"
                    ));
                },
              },
              {
                key: "resetNavigator",
                value: function resetNavigator() {
                  (this.focus.style.left = 0),
                    (this.focus.style.top = 0),
                    (this.focus.style.width = "100%"),
                    (this.focus.style.height = "100%"),
                    this.resetImageManipulations(),
                    this.adjustRunnerPosition(0),
                    this.setCurrentZoomRatio(0);
                },
              },
              {
                key: "moveFocus",
                value: function moveFocus(t) {
                  t.preventDefault(), t.stopPropagation();
                  var i = void 0 !== this.focusX ? t.clientX - this.focusX : 0,
                    r = void 0 !== this.focusY ? t.clientY - this.focusY : 0,
                    o = this.frame.getBoundingClientRect(),
                    a = this.focus.getBoundingClientRect(),
                    c = a.left - o.left + i,
                    l = a.top - o.top + r,
                    u = this.image.getBoundingClientRect(),
                    h = u.height,
                    d = u.width,
                    p =
                      (u.left,
                      u.top,
                      this.image.parentNode.getBoundingClientRect()),
                    v = d / o.width;
                  if (
                    c >= 0 &&
                    c + a.width <= o.width &&
                    ((this.focus.style.left = c + "px"), d >= p.width)
                  ) {
                    var g = p.width > d ? p.width - d : 0;
                    this.image.style.left =
                      -c * v + g / 2 - (this.image.width - d) / 2 + "px";
                  }
                  l >= 0 &&
                    l + a.height <= o.height &&
                    h >= p.height &&
                    ((this.focus.style.top = l + "px"),
                    (this.image.style.top =
                      -l * v - (this.image.height - h) / 2 + "px")),
                    (this.focusX = t.clientX),
                    (this.focusY = t.clientY);
                },
              },
              {
                key: "moverTracker",
                value: function moverTracker(t) {
                  var i = this.image.getBoundingClientRect(),
                    r = i.top,
                    o = i.left,
                    a = i.width,
                    c = i.height,
                    l = this.image,
                    u = l.offsetTop,
                    h = l.offsetLeft,
                    d =
                      void 0 !== this.trackerX ? t.clientX - this.trackerX : 0,
                    p =
                      void 0 !== this.trackerY ? t.clientY - this.trackerY : 0;
                  o + d <= 0 &&
                    o + a + d >= this.image.parentNode.offsetWidth &&
                    (this.image.style.left = h + d + "px"),
                    r + p <= 0 &&
                      r + c + p >= this.image.parentNode.offsetHeight &&
                      (this.image.style.top = u + p + "px"),
                    this.adjustFocusPosition(),
                    (this.trackerX = t.clientX),
                    (this.trackerY = t.clientY);
                },
              },
              {
                key: "resetSavedImageBox",
                value: function resetSavedImageBox(t) {
                  var i = this.image.getBoundingClientRect().toJSON();
                  t && this.imageOriginalBBox
                    ? (this.imageOriginalBBox[t] = i[t])
                    : (this.imageOriginalBBox = i),
                    (this.imageOriginalBBox.top -= this.getToolbarHeight());
                },
              },
              {
                key: "getToolbarHeight",
                value: function getToolbarHeight() {
                  return this.toolbarHeight;
                },
              },
              {
                key: "setToolbarHeight",
                value: function setToolbarHeight(t) {
                  this.toolbarHeight = t;
                },
              },
            ]),
            ImageNavigator
          );
        })(r(259));
      t.exports = y;
    },
    function (t, i, r) {
      var o = r(1),
        a = r(2),
        c = (function () {
          "use strict";
          function PinchZoom(t, i, r, a) {
            o(this, PinchZoom),
              (this.pointerOff = this.pointerOff.bind(this)),
              (this.addEvent = this.addEvent.bind(this)),
              (this.pointerMove = this.pointerMove.bind(this)),
              (this.unzoom = i),
              (this.zoom = t),
              (this.scaleTo = r),
              (this.prevDiff = -1),
              (this.prevScale = 1),
              (this.getCurrentZoomRatio = a),
              (this.eventsCollector = []),
              this.init();
          }
          return (
            a(PinchZoom, [
              {
                key: "init",
                value: function init() {
                  this.addEventListeners(window);
                },
              },
              {
                key: "addEvent",
                value: function addEvent(t) {
                  this.eventsCollector.push(t);
                },
              },
              {
                key: "removeEvent",
                value: function removeEvent(t) {
                  for (var i = 0; i < this.eventsCollector.length; i++)
                    if (this.eventsCollector[i].pointerId == t.pointerId) {
                      this.eventsCollector.splice(i, 1);
                      break;
                    }
                },
              },
              {
                key: "pointerMove",
                value: function pointerMove(t) {
                  t.preventDefault(), t.stopPropagation();
                  for (var i = 0; i < this.eventsCollector.length; i++)
                    if (t.pointerId == this.eventsCollector[i].pointerId) {
                      this.eventsCollector[i] = t;
                      break;
                    }
                  if (2 == this.eventsCollector.length) {
                    var r = Math.abs(
                        this.eventsCollector[0].clientX -
                          this.eventsCollector[1].clientX
                      ),
                      o = Math.abs(
                        this.eventsCollector[0].clientY -
                          this.eventsCollector[1].clientY
                      ),
                      a = Math.hypot(r, o),
                      c =
                        (this.getCurrentZoomRatio() || 0.1) *
                        (a / this.prevDiff);
                    this.scaleTo(c), (this.prevDiff = a);
                  }
                },
              },
              {
                key: "pointerOff",
                value: function pointerOff(t) {
                  this.removeEvent(t),
                    this.eventsCollector.length < 2 && (this.prevDiff = -1);
                },
              },
              {
                key: "addEventListeners",
                value: function addEventListeners(t) {
                  t.addEventListener("pointerdown", this.addEvent),
                    t.addEventListener("pointermove", this.pointerMove),
                    t.addEventListener("pointerup", this.pointerOff),
                    t.addEventListener("pointercancel", this.pointerOff),
                    t.addEventListener("pointerout", this.pointerOff),
                    t.addEventListener("pointerleave", this.pointerOff);
                },
              },
            ]),
            PinchZoom
          );
        })();
      t.exports = c;
    },
    function (t, i, r) {
      r(50);
      t.exports = function template(t) {
        var i = "";
        return (i +=
          '<div class="image-navigator"><div class="image-navigator__bounds"><div class="image-navigator__frame"><div class="image-navigator__focus"></div></div></div><div class="image-navigator__control"><a class="image-navigator__out" href="#"><i class="icon-minus"></i></a><div class="image-navigator__groove"><a class="image-navigator__runner fv--transitionable" href="#"></a></div><a class="image-navigator__in" href="#"><i class="icon-plus"></i></a></div></div>');
      };
    },
    function (t, i, r) {
      r(381), r(384), r(385), r(386), r(387);
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(11),
        c = r(20),
        l = r(10),
        u = r(41),
        h = r(14),
        d = r(95),
        p = r(9),
        v = r(23),
        g = r(60),
        m = r(16),
        y = r(39),
        b = r(74),
        _ = r(27),
        w = r(73),
        x = r(62),
        S = r(112),
        k = r(76),
        T = r(196),
        E = r(137),
        O = r(34),
        I = r(24),
        C = r(195),
        A = r(133),
        L = r(28),
        P = r(96),
        N = r(136),
        R = r(109),
        j = r(108),
        M = r(19),
        D = r(270),
        q = r(44),
        V = r(271),
        B = r(53),
        z = r(37),
        H = r(31).forEach,
        $ = N("hidden"),
        W = z.set,
        G = z.getterFor("Symbol"),
        U = Object.prototype,
        Z = a.Symbol,
        X = Z && Z.prototype,
        K = a.TypeError,
        Y = a.QObject,
        J = O.f,
        Q = I.f,
        tt = T.f,
        et = A.f,
        it = l([].push),
        nt = P("symbols"),
        rt = P("op-symbols"),
        ot = P("wks"),
        at = !Y || !Y.prototype || !Y.prototype.findChild,
        st =
          h &&
          p(function () {
            return (
              7 !=
              x(
                Q({}, "a", {
                  get: function () {
                    return Q(this, "a", { value: 7 }).a;
                  },
                })
              ).a
            );
          })
            ? function (t, i, r) {
                var o = J(U, i);
                o && delete U[i], Q(t, i, r), o && t !== U && Q(U, i, o);
              }
            : Q,
        wrap = function (t, i) {
          var r = (nt[t] = x(X));
          return (
            W(r, { type: "Symbol", tag: t, description: i }),
            h || (r.description = i),
            r
          );
        },
        ct = function defineProperty(t, i, r) {
          t === U && ct(rt, i, r), m(t);
          var o = b(i);
          return (
            m(r),
            v(nt, o)
              ? (r.enumerable
                  ? (v(t, $) && t[$][o] && (t[$][o] = !1),
                    (r = x(r, { enumerable: w(0, !1) })))
                  : (v(t, $) || Q(t, $, w(1, {})), (t[$][o] = !0)),
                st(t, o, r))
              : Q(t, o, r)
          );
        },
        lt = function defineProperties(t, i) {
          m(t);
          var r = y(i),
            o = S(r).concat($getOwnPropertySymbols(r));
          return (
            H(o, function (i) {
              (h && !c(ut, r, i)) || ct(t, i, r[i]);
            }),
            t
          );
        },
        ut = function propertyIsEnumerable(t) {
          var i = b(t),
            r = c(et, this, i);
          return (
            !(this === U && v(nt, i) && !v(rt, i)) &&
            (!(r || !v(this, i) || !v(nt, i) || (v(this, $) && this[$][i])) ||
              r)
          );
        },
        ht = function getOwnPropertyDescriptor(t, i) {
          var r = y(t),
            o = b(i);
          if (r !== U || !v(nt, o) || v(rt, o)) {
            var a = J(r, o);
            return (
              !a || !v(nt, o) || (v(r, $) && r[$][o]) || (a.enumerable = !0), a
            );
          }
        },
        ft = function getOwnPropertyNames(t) {
          var i = tt(y(t)),
            r = [];
          return (
            H(i, function (t) {
              v(nt, t) || v(R, t) || it(r, t);
            }),
            r
          );
        },
        $getOwnPropertySymbols = function (t) {
          var i = t === U,
            r = tt(i ? rt : y(t)),
            o = [];
          return (
            H(r, function (t) {
              !v(nt, t) || (i && !v(U, t)) || it(o, nt[t]);
            }),
            o
          );
        };
      d ||
        (L(
          (X = (Z = function Symbol() {
            if (g(X, this)) throw K("Symbol is not a constructor");
            var t =
                arguments.length && void 0 !== arguments[0]
                  ? _(arguments[0])
                  : void 0,
              i = j(t),
              setter = function (t) {
                this === U && c(setter, rt, t),
                  v(this, $) && v(this[$], i) && (this[$][i] = !1),
                  st(this, i, w(1, t));
              };
            return (
              h && at && st(U, i, { configurable: !0, set: setter }), wrap(i, t)
            );
          }).prototype),
          "toString",
          function toString() {
            return G(this).tag;
          }
        ),
        L(Z, "withoutSetter", function (t) {
          return wrap(j(t), t);
        }),
        (A.f = ut),
        (I.f = ct),
        (C.f = lt),
        (O.f = ht),
        (k.f = T.f = ft),
        (E.f = $getOwnPropertySymbols),
        (D.f = function (t) {
          return wrap(M(t), t);
        }),
        h &&
          (Q(X, "description", {
            configurable: !0,
            get: function description() {
              return G(this).description;
            },
          }),
          u || L(U, "propertyIsEnumerable", ut, { unsafe: !0 }))),
        o(
          { global: !0, constructor: !0, wrap: !0, forced: !d, sham: !d },
          { Symbol: Z }
        ),
        H(S(ot), function (t) {
          q(t);
        }),
        o(
          { target: "Symbol", stat: !0, forced: !d },
          {
            useSetter: function () {
              at = !0;
            },
            useSimple: function () {
              at = !1;
            },
          }
        ),
        o(
          { target: "Object", stat: !0, forced: !d, sham: !h },
          {
            create: function create(t, i) {
              return void 0 === i ? x(t) : lt(x(t), i);
            },
            defineProperty: ct,
            defineProperties: lt,
            getOwnPropertyDescriptor: ht,
          }
        ),
        o(
          { target: "Object", stat: !0, forced: !d },
          { getOwnPropertyNames: ft }
        ),
        V(),
        B(Z, "Symbol"),
        (R[$] = !0);
    },
    function (t, i, r) {
      var o = r(11);
      t.exports = o;
    },
    function (t, i, r) {
      var o = r(78),
        a = r(115),
        c = r(18),
        l = r(19)("species"),
        u = Array;
      t.exports = function (t) {
        var i;
        return (
          o(t) &&
            ((i = t.constructor),
            ((a(i) && (i === u || o(i.prototype))) ||
              (c(i) && null === (i = i[l]))) &&
              (i = void 0)),
          void 0 === i ? u : i
        );
      };
    },
    function (t, i, r) {
      var o = r(6),
        a = r(36),
        c = r(23),
        l = r(27),
        u = r(96),
        h = r(272),
        d = u("string-to-symbol-registry"),
        p = u("symbol-to-string-registry");
      o(
        { target: "Symbol", stat: !0, forced: !h },
        {
          for: function (t) {
            var i = l(t);
            if (c(d, i)) return d[i];
            var r = a("Symbol")(i);
            return (d[i] = r), (p[r] = i), r;
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(23),
        c = r(94),
        l = r(87),
        u = r(96),
        h = r(272),
        d = u("symbol-to-string-registry");
      o(
        { target: "Symbol", stat: !0, forced: !h },
        {
          keyFor: function keyFor(t) {
            if (!c(t)) throw TypeError(l(t) + " is not a symbol");
            if (a(d, t)) return d[t];
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(36),
        c = r(64),
        l = r(20),
        u = r(10),
        h = r(9),
        d = r(78),
        p = r(21),
        v = r(18),
        g = r(94),
        m = r(89),
        y = r(95),
        b = a("JSON", "stringify"),
        _ = u(/./.exec),
        w = u("".charAt),
        x = u("".charCodeAt),
        S = u("".replace),
        k = u((1).toString),
        T = /[\uD800-\uDFFF]/g,
        E = /^[\uD800-\uDBFF]$/,
        O = /^[\uDC00-\uDFFF]$/,
        I =
          !y ||
          h(function () {
            var t = a("Symbol")();
            return (
              "[null]" != b([t]) || "{}" != b({ a: t }) || "{}" != b(Object(t))
            );
          }),
        C = h(function () {
          return (
            '"\\udf06\\ud834"' !== b("\udf06\ud834") ||
            '"\\udead"' !== b("\udead")
          );
        }),
        stringifyWithSymbolsFix = function (t, i) {
          var r = m(arguments),
            o = i;
          if ((v(i) || void 0 !== t) && !g(t))
            return (
              d(i) ||
                (i = function (t, i) {
                  if ((p(o) && (i = l(o, this, t, i)), !g(i))) return i;
                }),
              (r[1] = i),
              c(b, null, r)
            );
        },
        fixIllFormed = function (t, i, r) {
          var o = w(r, i - 1),
            a = w(r, i + 1);
          return (_(E, t) && !_(O, a)) || (_(O, t) && !_(E, o))
            ? "\\u" + k(x(t, 0), 16)
            : t;
        };
      b &&
        o(
          { target: "JSON", stat: !0, arity: 3, forced: I || C },
          {
            stringify: function stringify(t, i, r) {
              var o = m(arguments),
                a = c(I ? stringifyWithSymbolsFix : b, null, o);
              return C && "string" == typeof a ? S(a, T, fixIllFormed) : a;
            },
          }
        );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(95),
        c = r(9),
        l = r(137),
        u = r(26);
      o(
        {
          target: "Object",
          stat: !0,
          forced:
            !a ||
            c(function () {
              l.f(1);
            }),
        },
        {
          getOwnPropertySymbols: function getOwnPropertySymbols(t) {
            var i = l.f;
            return i ? i(u(t)) : [];
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(14),
        c = r(11),
        l = r(10),
        u = r(23),
        h = r(21),
        d = r(60),
        p = r(27),
        v = r(24).f,
        g = r(266),
        m = c.Symbol,
        y = m && m.prototype;
      if (a && h(m) && (!("description" in y) || void 0 !== m().description)) {
        var b = {},
          _ = function Symbol() {
            var t =
                arguments.length < 1 || void 0 === arguments[0]
                  ? void 0
                  : p(arguments[0]),
              i = d(y, this) ? new m(t) : void 0 === t ? m() : m(t);
            return "" === t && (b[i] = !0), i;
          };
        g(_, m), (_.prototype = y), (y.constructor = _);
        var w = "Symbol(test)" == String(m("test")),
          x = l(y.valueOf),
          S = l(y.toString),
          k = /^Symbol\((.*)\)[^)]+$/,
          T = l("".replace),
          E = l("".slice);
        v(y, "description", {
          configurable: !0,
          get: function description() {
            var t = x(this);
            if (u(b, t)) return "";
            var i = S(t),
              r = w ? E(i, 7, -1) : T(i, k, "$1");
            return "" === r ? void 0 : r;
          },
        }),
          o({ global: !0, constructor: !0, forced: !0 }, { Symbol: _ });
      }
    },
    function (t, i, r) {
      r(44)("asyncIterator");
    },
    function (t, i, r) {
      r(44)("hasInstance");
    },
    function (t, i, r) {
      r(44)("isConcatSpreadable");
    },
    function (t, i, r) {
      r(44)("iterator");
    },
    function (t, i, r) {
      r(44)("match");
    },
    function (t, i, r) {
      r(44)("replace");
    },
    function (t, i, r) {
      r(44)("search");
    },
    function (t, i, r) {
      r(44)("species");
    },
    function (t, i, r) {
      r(44)("split");
    },
    function (t, i, r) {
      var o = r(44),
        a = r(271);
      o("toPrimitive"), a();
    },
    function (t, i, r) {
      var o = r(36),
        a = r(44),
        c = r(53);
      a("toStringTag"), c(o("Symbol"), "Symbol");
    },
    function (t, i, r) {
      r(44)("unscopables");
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(9),
        c = r(78),
        l = r(18),
        u = r(26),
        h = r(29),
        d = r(197),
        p = r(77),
        v = r(114),
        g = r(116),
        m = r(19),
        y = r(75),
        b = m("isConcatSpreadable"),
        _ =
          y >= 51 ||
          !a(function () {
            var t = [];
            return (t[b] = !1), t.concat()[0] !== t;
          }),
        w = g("concat"),
        isConcatSpreadable = function (t) {
          if (!l(t)) return !1;
          var i = t[b];
          return void 0 !== i ? !!i : c(t);
        };
      o(
        { target: "Array", proto: !0, arity: 1, forced: !_ || !w },
        {
          concat: function concat(t) {
            var i,
              r,
              o,
              a,
              c,
              l = u(this),
              g = v(l, 0),
              m = 0;
            for (i = -1, o = arguments.length; i < o; i++)
              if (isConcatSpreadable((c = -1 === i ? l : arguments[i])))
                for (a = h(c), d(m + a), r = 0; r < a; r++, m++)
                  r in c && p(g, m, c[r]);
              else d(m + 1), p(g, m++, c);
            return (g.length = m), g;
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(273),
        c = r(79);
      o({ target: "Array", proto: !0 }, { copyWithin: a }), c("copyWithin");
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(31).every;
      o(
        { target: "Array", proto: !0, forced: !r(70)("every") },
        {
          every: function every(t) {
            return a(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(199),
        c = r(79);
      o({ target: "Array", proto: !0 }, { fill: a }), c("fill");
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(31).filter;
      o(
        { target: "Array", proto: !0, forced: !r(116)("filter") },
        {
          filter: function filter(t) {
            return a(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(31).find,
        c = r(79),
        l = !0;
      "find" in [] &&
        Array(1).find(function () {
          l = !1;
        }),
        o(
          { target: "Array", proto: !0, forced: l },
          {
            find: function find(t) {
              return a(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
        c("find");
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(31).findIndex,
        c = r(79),
        l = !0;
      "findIndex" in [] &&
        Array(1).findIndex(function () {
          l = !1;
        }),
        o(
          { target: "Array", proto: !0, forced: l },
          {
            findIndex: function findIndex(t) {
              return a(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
        c("findIndex");
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(274),
        c = r(26),
        l = r(29),
        u = r(47),
        h = r(114);
      o(
        { target: "Array", proto: !0 },
        {
          flat: function flat() {
            var t = arguments.length ? arguments[0] : void 0,
              i = c(this),
              r = l(i),
              o = h(i, 0);
            return (o.length = a(o, i, i, r, 0, void 0 === t ? 1 : u(t))), o;
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(274),
        c = r(35),
        l = r(26),
        u = r(29),
        h = r(114);
      o(
        { target: "Array", proto: !0 },
        {
          flatMap: function flatMap(t) {
            var i,
              r = l(this),
              o = u(r);
            return (
              c(t),
              ((i = h(r, 0)).length = a(
                i,
                r,
                r,
                o,
                0,
                1,
                t,
                arguments.length > 1 ? arguments[1] : void 0
              )),
              i
            );
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(275);
      o(
        { target: "Array", proto: !0, forced: [].forEach != a },
        { forEach: a }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(276);
      o(
        {
          target: "Array",
          stat: !0,
          forced: !r(139)(function (t) {
            Array.from(t);
          }),
        },
        { from: a }
      );
    },
    function (t, i, r) {
      var o = r(16),
        a = r(277);
      t.exports = function (t, i, r, c) {
        try {
          return c ? i(o(r)[0], r[1]) : i(r);
        } catch (i) {
          a(t, "throw", i);
        }
      };
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(110).includes,
        c = r(9),
        l = r(79);
      o(
        {
          target: "Array",
          proto: !0,
          forced: c(function () {
            return !Array(1).includes();
          }),
        },
        {
          includes: function includes(t) {
            return a(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
        l("includes");
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(88),
        c = r(110).indexOf,
        l = r(70),
        u = a([].indexOf),
        h = !!u && 1 / u([1], 1, -0) < 0,
        d = l("indexOf");
      o(
        { target: "Array", proto: !0, forced: h || !d },
        {
          indexOf: function indexOf(t) {
            var i = arguments.length > 1 ? arguments[1] : void 0;
            return h ? u(this, t, i) || 0 : c(this, t, i);
          },
        }
      );
    },
    function (t, i, r) {
      r(6)({ target: "Array", stat: !0 }, { isArray: r(78) });
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(10),
        c = r(107),
        l = r(39),
        u = r(70),
        h = a([].join),
        d = c != Object,
        p = u("join", ",");
      o(
        { target: "Array", proto: !0, forced: d || !p },
        {
          join: function join(t) {
            return h(l(this), void 0 === t ? "," : t);
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(281);
      o(
        { target: "Array", proto: !0, forced: a !== [].lastIndexOf },
        { lastIndexOf: a }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(31).map;
      o(
        { target: "Array", proto: !0, forced: !r(116)("map") },
        {
          map: function map(t) {
            return a(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(9),
        c = r(115),
        l = r(77),
        u = Array;
      o(
        {
          target: "Array",
          stat: !0,
          forced: a(function () {
            function F() {}
            return !(u.of.call(F) instanceof F);
          }),
        },
        {
          of: function of() {
            for (
              var t = 0, i = arguments.length, r = new (c(this) ? this : u)(i);
              i > t;

            )
              l(r, t, arguments[t++]);
            return (r.length = i), r;
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(141).left,
        c = r(70),
        l = r(75),
        u = r(90);
      o(
        {
          target: "Array",
          proto: !0,
          forced: !c("reduce") || (!u && l > 79 && l < 83),
        },
        {
          reduce: function reduce(t) {
            var i = arguments.length;
            return a(this, t, i, i > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(141).right,
        c = r(70),
        l = r(75),
        u = r(90);
      o(
        {
          target: "Array",
          proto: !0,
          forced: !c("reduceRight") || (!u && l > 79 && l < 83),
        },
        {
          reduceRight: function reduceRight(t) {
            return a(
              this,
              t,
              arguments.length,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(10),
        c = r(78),
        l = a([].reverse),
        u = [1, 2];
      o(
        {
          target: "Array",
          proto: !0,
          forced: String(u) === String(u.reverse()),
        },
        {
          reverse: function reverse() {
            return c(this) && (this.length = this.length), l(this);
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(78),
        c = r(115),
        l = r(18),
        u = r(68),
        h = r(29),
        d = r(39),
        p = r(77),
        v = r(19),
        g = r(116),
        m = r(89),
        y = g("slice"),
        b = v("species"),
        _ = Array,
        w = Math.max;
      o(
        { target: "Array", proto: !0, forced: !y },
        {
          slice: function slice(t, i) {
            var r,
              o,
              v,
              g = d(this),
              y = h(g),
              x = u(t, y),
              S = u(void 0 === i ? y : i, y);
            if (
              a(g) &&
              ((r = g.constructor),
              ((c(r) && (r === _ || a(r.prototype))) ||
                (l(r) && null === (r = r[b]))) &&
                (r = void 0),
              r === _ || void 0 === r)
            )
              return m(g, x, S);
            for (
              o = new (void 0 === r ? _ : r)(w(S - x, 0)), v = 0;
              x < S;
              x++, v++
            )
              x in g && p(o, v, g[x]);
            return (o.length = v), o;
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(31).some;
      o(
        { target: "Array", proto: !0, forced: !r(70)("some") },
        {
          some: function some(t) {
            return a(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(10),
        c = r(35),
        l = r(26),
        u = r(29),
        h = r(198),
        d = r(27),
        p = r(9),
        v = r(204),
        g = r(70),
        m = r(282),
        y = r(283),
        b = r(75),
        _ = r(205),
        w = [],
        x = a(w.sort),
        S = a(w.push),
        k = p(function () {
          w.sort(void 0);
        }),
        T = p(function () {
          w.sort(null);
        }),
        E = g("sort"),
        O = !p(function () {
          if (b) return b < 70;
          if (!(m && m > 3)) {
            if (y) return !0;
            if (_) return _ < 603;
            var t,
              i,
              r,
              o,
              a = "";
            for (t = 65; t < 76; t++) {
              switch (((i = String.fromCharCode(t)), t)) {
                case 66:
                case 69:
                case 70:
                case 72:
                  r = 3;
                  break;
                case 68:
                case 71:
                  r = 4;
                  break;
                default:
                  r = 2;
              }
              for (o = 0; o < 47; o++) w.push({ k: i + o, v: r });
            }
            for (
              w.sort(function (t, i) {
                return i.v - t.v;
              }),
                o = 0;
              o < w.length;
              o++
            )
              (i = w[o].k.charAt(0)), a.charAt(a.length - 1) !== i && (a += i);
            return "DGBEFHACIJK" !== a;
          }
        });
      o(
        { target: "Array", proto: !0, forced: k || !T || !E || !O },
        {
          sort: function sort(t) {
            void 0 !== t && c(t);
            var i = l(this);
            if (O) return void 0 === t ? x(i) : x(i, t);
            var r,
              o,
              a = [],
              p = u(i);
            for (o = 0; o < p; o++) o in i && S(a, i[o]);
            for (
              v(
                a,
                (function (t) {
                  return function (i, r) {
                    return void 0 === r
                      ? -1
                      : void 0 === i
                      ? 1
                      : void 0 !== t
                      ? +t(i, r) || 0
                      : d(i) > d(r)
                      ? 1
                      : -1;
                  };
                })(t)
              ),
                r = u(a),
                o = 0;
              o < r;

            )
              i[o] = a[o++];
            for (; o < p; ) h(i, o++);
            return i;
          },
        }
      );
    },
    function (t, i, r) {
      r(98)("Array");
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(26),
        c = r(68),
        l = r(47),
        u = r(29),
        h = r(428),
        d = r(197),
        p = r(114),
        v = r(77),
        g = r(198),
        m = r(116)("splice"),
        y = Math.max,
        b = Math.min;
      o(
        { target: "Array", proto: !0, forced: !m },
        {
          splice: function splice(t, i) {
            var r,
              o,
              m,
              _,
              w,
              x,
              S = a(this),
              k = u(S),
              T = c(t, k),
              E = arguments.length;
            for (
              0 === E
                ? (r = o = 0)
                : 1 === E
                ? ((r = 0), (o = k - T))
                : ((r = E - 2), (o = b(y(l(i), 0), k - T))),
                d(k + r - o),
                m = p(S, o),
                _ = 0;
              _ < o;
              _++
            )
              (w = T + _) in S && v(m, _, S[w]);
            if (((m.length = o), r < o)) {
              for (_ = T; _ < k - o; _++)
                (x = _ + r), (w = _ + o) in S ? (S[x] = S[w]) : g(S, x);
              for (_ = k; _ > k - o + r; _--) g(S, _ - 1);
            } else if (r > o)
              for (_ = k - o; _ > T; _--)
                (x = _ + r - 1), (w = _ + o - 1) in S ? (S[x] = S[w]) : g(S, x);
            for (_ = 0; _ < r; _++) S[_ + T] = arguments[_ + 2];
            return h(S, k - o + r), m;
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(14),
        a = r(78),
        c = TypeError,
        l = Object.getOwnPropertyDescriptor,
        u =
          o &&
          !(function () {
            if (void 0 !== this) return !0;
            try {
              Object.defineProperty([], "length", { writable: !1 }).length = 1;
            } catch (t) {
              return t instanceof TypeError;
            }
          })();
      t.exports = u
        ? function (t, i) {
            if (a(t) && !l(t, "length").writable)
              throw c("Cannot set read only .length");
            return (t.length = i);
          }
        : function (t, i) {
            return (t.length = i);
          };
    },
    function (t, i, r) {
      r(79)("flat");
    },
    function (t, i, r) {
      r(79)("flatMap");
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(11),
        c = r(142),
        l = r(98),
        u = c.ArrayBuffer;
      o(
        { global: !0, constructor: !0, forced: a.ArrayBuffer !== u },
        { ArrayBuffer: u }
      ),
        l("ArrayBuffer");
    },
    function (t, i) {
      var r = Array,
        o = Math.abs,
        a = Math.pow,
        c = Math.floor,
        l = Math.log,
        u = Math.LN2;
      t.exports = {
        pack: function (t, i, h) {
          var d,
            p,
            v,
            g = r(h),
            m = 8 * h - i - 1,
            y = (1 << m) - 1,
            b = y >> 1,
            _ = 23 === i ? a(2, -24) - a(2, -77) : 0,
            w = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0,
            x = 0;
          for (
            (t = o(t)) != t || t === 1 / 0
              ? ((p = t != t ? 1 : 0), (d = y))
              : ((d = c(l(t) / u)),
                t * (v = a(2, -d)) < 1 && (d--, (v *= 2)),
                (t += d + b >= 1 ? _ / v : _ * a(2, 1 - b)) * v >= 2 &&
                  (d++, (v /= 2)),
                d + b >= y
                  ? ((p = 0), (d = y))
                  : d + b >= 1
                  ? ((p = (t * v - 1) * a(2, i)), (d += b))
                  : ((p = t * a(2, b - 1) * a(2, i)), (d = 0)));
            i >= 8;

          )
            (g[x++] = 255 & p), (p /= 256), (i -= 8);
          for (d = (d << i) | p, m += i; m > 0; )
            (g[x++] = 255 & d), (d /= 256), (m -= 8);
          return (g[--x] |= 128 * w), g;
        },
        unpack: function (t, i) {
          var r,
            o = t.length,
            c = 8 * o - i - 1,
            l = (1 << c) - 1,
            u = l >> 1,
            h = c - 7,
            d = o - 1,
            p = t[d--],
            v = 127 & p;
          for (p >>= 7; h > 0; ) (v = 256 * v + t[d--]), (h -= 8);
          for (r = v & ((1 << -h) - 1), v >>= -h, h += i; h > 0; )
            (r = 256 * r + t[d--]), (h -= 8);
          if (0 === v) v = 1 - u;
          else {
            if (v === l) return r ? NaN : p ? -1 / 0 : 1 / 0;
            (r += a(2, i)), (v -= u);
          }
          return (p ? -1 : 1) * r * a(2, v - i);
        },
      };
    },
    function (t, i, r) {
      var o = r(6),
        a = r(22);
      o(
        {
          target: "ArrayBuffer",
          stat: !0,
          forced: !a.NATIVE_ARRAY_BUFFER_VIEWS,
        },
        { isView: a.isView }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(88),
        c = r(9),
        l = r(142),
        u = r(16),
        h = r(68),
        d = r(48),
        p = r(120),
        v = l.ArrayBuffer,
        g = l.DataView,
        m = g.prototype,
        y = a(v.prototype.slice),
        b = a(m.getUint8),
        _ = a(m.setUint8);
      o(
        {
          target: "ArrayBuffer",
          proto: !0,
          unsafe: !0,
          forced: c(function () {
            return !new v(2).slice(1, void 0).byteLength;
          }),
        },
        {
          slice: function slice(t, i) {
            if (y && void 0 === i) return y(u(this), t);
            for (
              var r = u(this).byteLength,
                o = h(t, r),
                a = h(void 0 === i ? r : i, r),
                c = new (p(this, v))(d(a - o)),
                l = new g(this),
                m = new g(c),
                w = 0;
              o < a;

            )
              _(m, w++, b(l, o++));
            return c;
          },
        }
      );
    },
    function (t, i, r) {
      r(436);
    },
    function (t, i, r) {
      var o = r(6),
        a = r(142);
      o(
        { global: !0, constructor: !0, forced: !r(206) },
        { DataView: a.DataView }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(10),
        c = Date,
        l = a(c.prototype.getTime);
      o(
        { target: "Date", stat: !0 },
        {
          now: function now() {
            return l(new c());
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(439);
      o(
        { target: "Date", proto: !0, forced: Date.prototype.toISOString !== a },
        { toISOString: a }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(10),
        a = r(9),
        c = r(208).start,
        l = RangeError,
        u = isFinite,
        h = Math.abs,
        d = Date.prototype,
        p = d.toISOString,
        v = o(d.getTime),
        g = o(d.getUTCDate),
        m = o(d.getUTCFullYear),
        y = o(d.getUTCHours),
        b = o(d.getUTCMilliseconds),
        _ = o(d.getUTCMinutes),
        w = o(d.getUTCMonth),
        x = o(d.getUTCSeconds);
      t.exports =
        a(function () {
          return (
            "0385-07-25T07:06:39.999Z" != p.call(new Date(-50000000000001))
          );
        }) ||
        !a(function () {
          p.call(new Date(NaN));
        })
          ? function toISOString() {
              if (!u(v(this))) throw l("Invalid time value");
              var t = m(this),
                i = b(this),
                r = t < 0 ? "-" : t > 9999 ? "+" : "";
              return (
                r +
                c(h(t), r ? 6 : 4, 0) +
                "-" +
                c(w(this) + 1, 2, 0) +
                "-" +
                c(g(this), 2, 0) +
                "T" +
                c(y(this), 2, 0) +
                ":" +
                c(_(this), 2, 0) +
                ":" +
                c(x(this), 2, 0) +
                "." +
                c(i, 3, 0) +
                "Z"
              );
            }
          : p;
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(9),
        c = r(26),
        l = r(134);
      o(
        {
          target: "Date",
          proto: !0,
          arity: 1,
          forced: a(function () {
            return (
              null !== new Date(NaN).toJSON() ||
              1 !==
                Date.prototype.toJSON.call({
                  toISOString: function () {
                    return 1;
                  },
                })
            );
          }),
        },
        {
          toJSON: function toJSON(t) {
            var i = c(this),
              r = l(i, "number");
            return "number" != typeof r || isFinite(r) ? i.toISOString() : null;
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(23),
        a = r(28),
        c = r(442),
        l = r(19)("toPrimitive"),
        u = Date.prototype;
      o(u, l) || a(u, l, c);
    },
    function (t, i, r) {
      "use strict";
      var o = r(16),
        a = r(262),
        c = TypeError;
      t.exports = function (t) {
        if ((o(this), "string" === t || "default" === t)) t = "string";
        else if ("number" !== t) throw c("Incorrect hint");
        return a(this, t);
      };
    },
    function (t, i, r) {
      var o = r(10),
        a = r(28),
        c = Date.prototype,
        l = o(c.toString),
        u = o(c.getTime);
      "Invalid Date" != String(new Date(NaN)) &&
        a(c, "toString", function toString() {
          var t = u(this);
          return t == t ? l(this) : "Invalid Date";
        });
    },
    function (t, i, r) {
      var o = r(6),
        a = r(285);
      o(
        { target: "Function", proto: !0, forced: Function.bind !== a },
        { bind: a }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(21),
        a = r(18),
        c = r(24),
        l = r(54),
        u = r(19),
        h = r(190),
        d = u("hasInstance"),
        p = Function.prototype;
      d in p ||
        c.f(p, d, {
          value: h(function (t) {
            if (!o(this) || !a(t)) return !1;
            var i = this.prototype;
            if (!a(i)) return t instanceof this;
            for (; (t = l(t)); ) if (i === t) return !0;
            return !1;
          }, d),
        });
    },
    function (t, i, r) {
      var o = r(14),
        a = r(97).EXISTS,
        c = r(10),
        l = r(24).f,
        u = Function.prototype,
        h = c(u.toString),
        d = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
        p = c(d.exec);
      o &&
        !a &&
        l(u, "name", {
          configurable: !0,
          get: function () {
            try {
              return p(d, h(this))[1];
            } catch (t) {
              return "";
            }
          },
        });
    },
    function (t, i, r) {
      var o = r(11);
      r(53)(o.JSON, "JSON", !0);
    },
    function (t, i, r) {
      r(449);
    },
    function (t, i, r) {
      "use strict";
      r(143)(
        "Map",
        function (t) {
          return function Map() {
            return t(this, arguments.length ? arguments[0] : void 0);
          };
        },
        r(286)
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(287),
        c = Math.acosh,
        l = Math.log,
        u = Math.sqrt,
        h = Math.LN2;
      o(
        {
          target: "Math",
          stat: !0,
          forced:
            !c || 710 != Math.floor(c(Number.MAX_VALUE)) || c(1 / 0) != 1 / 0,
        },
        {
          acosh: function acosh(t) {
            var i = +t;
            return i < 1
              ? NaN
              : i > 94906265.62425156
              ? l(i) + h
              : a(i - 1 + u(i - 1) * u(i + 1));
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = Math.asinh,
        c = Math.log,
        l = Math.sqrt;
      o(
        { target: "Math", stat: !0, forced: !(a && 1 / a(0) > 0) },
        {
          asinh: function asinh(t) {
            var i = +t;
            return isFinite(i) && 0 != i
              ? i < 0
                ? -asinh(-i)
                : c(i + l(i * i + 1))
              : i;
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = Math.atanh,
        c = Math.log;
      o(
        { target: "Math", stat: !0, forced: !(a && 1 / a(-0) < 0) },
        {
          atanh: function atanh(t) {
            var i = +t;
            return 0 == i ? i : c((1 + i) / (1 - i)) / 2;
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(211),
        c = Math.abs,
        l = Math.pow;
      o(
        { target: "Math", stat: !0 },
        {
          cbrt: function cbrt(t) {
            var i = +t;
            return a(i) * l(c(i), 1 / 3);
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = Math.floor,
        c = Math.log,
        l = Math.LOG2E;
      o(
        { target: "Math", stat: !0 },
        {
          clz32: function clz32(t) {
            var i = t >>> 0;
            return i ? 31 - a(c(i + 0.5) * l) : 32;
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(146),
        c = Math.cosh,
        l = Math.abs,
        u = Math.E;
      o(
        { target: "Math", stat: !0, forced: !c || c(710) === 1 / 0 },
        {
          cosh: function cosh(t) {
            var i = a(l(t) - 1) + 1;
            return (i + 1 / (i * u * u)) * (u / 2);
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(146);
      o({ target: "Math", stat: !0, forced: a != Math.expm1 }, { expm1: a });
    },
    function (t, i, r) {
      r(6)({ target: "Math", stat: !0 }, { fround: r(458) });
    },
    function (t, i, r) {
      var o = r(211),
        a = Math.abs,
        c = Math.pow,
        l = c(2, -52),
        u = c(2, -23),
        h = c(2, 127) * (2 - u),
        d = c(2, -126);
      t.exports =
        Math.fround ||
        function fround(t) {
          var i,
            r,
            c = +t,
            p = a(c),
            v = o(c);
          return p < d
            ? v *
                (function (t) {
                  return t + 1 / l - 1 / l;
                })(p / d / u) *
                d *
                u
            : (r = (i = (1 + u / l) * p) - (i - p)) > h || r != r
            ? v * (1 / 0)
            : v * r;
        };
    },
    function (t, i, r) {
      var o = r(6),
        a = Math.hypot,
        c = Math.abs,
        l = Math.sqrt;
      o(
        {
          target: "Math",
          stat: !0,
          arity: 2,
          forced: !!a && a(1 / 0, NaN) !== 1 / 0,
        },
        {
          hypot: function hypot(t, i) {
            for (var r, o, a = 0, u = 0, h = arguments.length, d = 0; u < h; )
              d < (r = c(arguments[u++]))
                ? ((a = a * (o = d / r) * o + 1), (d = r))
                : (a += r > 0 ? (o = r / d) * o : r);
            return d === 1 / 0 ? 1 / 0 : d * l(a);
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(9),
        c = Math.imul;
      o(
        {
          target: "Math",
          stat: !0,
          forced: a(function () {
            return -5 != c(4294967295, 5) || 2 != c.length;
          }),
        },
        {
          imul: function imul(t, i) {
            var r = +t,
              o = +i,
              a = 65535 & r,
              c = 65535 & o;
            return (
              0 |
              (a * c +
                ((((65535 & (r >>> 16)) * c + a * (65535 & (o >>> 16))) <<
                  16) >>>
                  0))
            );
          },
        }
      );
    },
    function (t, i, r) {
      r(6)({ target: "Math", stat: !0 }, { log10: r(462) });
    },
    function (t, i) {
      var r = Math.log,
        o = Math.LOG10E;
      t.exports =
        Math.log10 ||
        function log10(t) {
          return r(t) * o;
        };
    },
    function (t, i, r) {
      r(6)({ target: "Math", stat: !0 }, { log1p: r(287) });
    },
    function (t, i, r) {
      var o = r(6),
        a = Math.log,
        c = Math.LN2;
      o(
        { target: "Math", stat: !0 },
        {
          log2: function log2(t) {
            return a(t) / c;
          },
        }
      );
    },
    function (t, i, r) {
      r(6)({ target: "Math", stat: !0 }, { sign: r(211) });
    },
    function (t, i, r) {
      var o = r(6),
        a = r(9),
        c = r(146),
        l = Math.abs,
        u = Math.exp,
        h = Math.E;
      o(
        {
          target: "Math",
          stat: !0,
          forced: a(function () {
            return -2e-17 != Math.sinh(-2e-17);
          }),
        },
        {
          sinh: function sinh(t) {
            var i = +t;
            return l(i) < 1
              ? (c(i) - c(-i)) / 2
              : (u(i - 1) - u(-i - 1)) * (h / 2);
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(146),
        c = Math.exp;
      o(
        { target: "Math", stat: !0 },
        {
          tanh: function tanh(t) {
            var i = +t,
              r = a(i),
              o = a(-i);
            return r == 1 / 0 ? 1 : o == 1 / 0 ? -1 : (r - o) / (c(i) + c(-i));
          },
        }
      );
    },
    function (t, i, r) {
      r(53)(Math, "Math", !0);
    },
    function (t, i, r) {
      r(6)({ target: "Math", stat: !0 }, { trunc: r(268) });
    },
    function (t, i, r) {
      "use strict";
      var o = r(14),
        a = r(11),
        c = r(10),
        l = r(111),
        u = r(28),
        h = r(23),
        d = r(145),
        p = r(60),
        v = r(94),
        g = r(134),
        m = r(9),
        y = r(76).f,
        b = r(34).f,
        _ = r(24).f,
        w = r(212),
        x = r(100).trim,
        S = a.Number,
        k = S.prototype,
        T = a.TypeError,
        E = c("".slice),
        O = c("".charCodeAt),
        toNumeric = function (t) {
          var i = g(t, "number");
          return "bigint" == typeof i ? i : toNumber(i);
        },
        toNumber = function (t) {
          var i,
            r,
            o,
            a,
            c,
            l,
            u,
            h,
            d = g(t, "number");
          if (v(d)) throw T("Cannot convert a Symbol value to a number");
          if ("string" == typeof d && d.length > 2)
            if (((d = x(d)), 43 === (i = O(d, 0)) || 45 === i)) {
              if (88 === (r = O(d, 2)) || 120 === r) return NaN;
            } else if (48 === i) {
              switch (O(d, 1)) {
                case 66:
                case 98:
                  (o = 2), (a = 49);
                  break;
                case 79:
                case 111:
                  (o = 8), (a = 55);
                  break;
                default:
                  return +d;
              }
              for (l = (c = E(d, 2)).length, u = 0; u < l; u++)
                if ((h = O(c, u)) < 48 || h > a) return NaN;
              return parseInt(c, o);
            }
          return +d;
        };
      if (l("Number", !S(" 0o1") || !S("0b1") || S("+0x1"))) {
        for (
          var I,
            C = function Number(t) {
              var i = arguments.length < 1 ? 0 : S(toNumeric(t)),
                r = this;
              return p(k, r) &&
                m(function () {
                  w(r);
                })
                ? d(Object(i), r, C)
                : i;
            },
            A = o
              ? y(S)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(
                  ","
                ),
            L = 0;
          A.length > L;
          L++
        )
          h(S, (I = A[L])) && !h(C, I) && _(C, I, b(S, I));
        (C.prototype = k),
          (k.constructor = C),
          u(a, "Number", C, { constructor: !0 });
      }
    },
    function (t, i, r) {
      r(6)(
        { target: "Number", stat: !0, nonConfigurable: !0, nonWritable: !0 },
        { EPSILON: Math.pow(2, -52) }
      );
    },
    function (t, i, r) {
      r(6)({ target: "Number", stat: !0 }, { isFinite: r(473) });
    },
    function (t, i, r) {
      var o = r(11).isFinite;
      t.exports =
        Number.isFinite ||
        function isFinite(t) {
          return "number" == typeof t && o(t);
        };
    },
    function (t, i, r) {
      r(6)({ target: "Number", stat: !0 }, { isInteger: r(213) });
    },
    function (t, i, r) {
      r(6)(
        { target: "Number", stat: !0 },
        {
          isNaN: function isNaN(t) {
            return t != t;
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(213),
        c = Math.abs;
      o(
        { target: "Number", stat: !0 },
        {
          isSafeInteger: function isSafeInteger(t) {
            return a(t) && c(t) <= 9007199254740991;
          },
        }
      );
    },
    function (t, i, r) {
      r(6)(
        { target: "Number", stat: !0, nonConfigurable: !0, nonWritable: !0 },
        { MAX_SAFE_INTEGER: 9007199254740991 }
      );
    },
    function (t, i, r) {
      r(6)(
        { target: "Number", stat: !0, nonConfigurable: !0, nonWritable: !0 },
        { MIN_SAFE_INTEGER: -9007199254740991 }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(288);
      o(
        { target: "Number", stat: !0, forced: Number.parseFloat != a },
        { parseFloat: a }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(289);
      o(
        { target: "Number", stat: !0, forced: Number.parseInt != a },
        { parseInt: a }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(10),
        c = r(47),
        l = r(212),
        u = r(209),
        h = r(9),
        d = RangeError,
        p = String,
        v = Math.floor,
        g = a(u),
        m = a("".slice),
        y = a((1).toFixed),
        pow = function (t, i, r) {
          return 0 === i
            ? r
            : i % 2 == 1
            ? pow(t, i - 1, r * t)
            : pow(t * t, i / 2, r);
        },
        multiply = function (t, i, r) {
          for (var o = -1, a = r; ++o < 6; )
            (a += i * t[o]), (t[o] = a % 1e7), (a = v(a / 1e7));
        },
        divide = function (t, i) {
          for (var r = 6, o = 0; --r >= 0; )
            (o += t[r]), (t[r] = v(o / i)), (o = (o % i) * 1e7);
        },
        dataToString = function (t) {
          for (var i = 6, r = ""; --i >= 0; )
            if ("" !== r || 0 === i || 0 !== t[i]) {
              var o = p(t[i]);
              r = "" === r ? o : r + g("0", 7 - o.length) + o;
            }
          return r;
        };
      o(
        {
          target: "Number",
          proto: !0,
          forced:
            h(function () {
              return (
                "0.000" !== y(8e-5, 3) ||
                "1" !== y(0.9, 0) ||
                "1.25" !== y(1.255, 2) ||
                "1000000000000000128" !== y(0xde0b6b3a7640080, 0)
              );
            }) ||
            !h(function () {
              y({});
            }),
        },
        {
          toFixed: function toFixed(t) {
            var i,
              r,
              o,
              a,
              u = l(this),
              h = c(t),
              v = [0, 0, 0, 0, 0, 0],
              y = "",
              b = "0";
            if (h < 0 || h > 20) throw d("Incorrect fraction digits");
            if (u != u) return "NaN";
            if (u <= -1e21 || u >= 1e21) return p(u);
            if ((u < 0 && ((y = "-"), (u = -u)), u > 1e-21))
              if (
                ((r =
                  (i =
                    (function (t) {
                      for (var i = 0, r = t; r >= 4096; )
                        (i += 12), (r /= 4096);
                      for (; r >= 2; ) (i += 1), (r /= 2);
                      return i;
                    })(u * pow(2, 69, 1)) - 69) < 0
                    ? u * pow(2, -i, 1)
                    : u / pow(2, i, 1)),
                (r *= 4503599627370496),
                (i = 52 - i) > 0)
              ) {
                for (multiply(v, 0, r), o = h; o >= 7; )
                  multiply(v, 1e7, 0), (o -= 7);
                for (multiply(v, pow(10, o, 1), 0), o = i - 1; o >= 23; )
                  divide(v, 1 << 23), (o -= 23);
                divide(v, 1 << o),
                  multiply(v, 1, 1),
                  divide(v, 2),
                  (b = dataToString(v));
              } else
                multiply(v, 0, r),
                  multiply(v, 1 << -i, 0),
                  (b = dataToString(v) + g("0", h));
            return (b =
              h > 0
                ? y +
                  ((a = b.length) <= h
                    ? "0." + g("0", h - a) + b
                    : m(b, 0, a - h) + "." + m(b, a - h))
                : y + b);
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(10),
        c = r(9),
        l = r(212),
        u = a((1).toPrecision);
      o(
        {
          target: "Number",
          proto: !0,
          forced:
            c(function () {
              return "1" !== u(1, void 0);
            }) ||
            !c(function () {
              u({});
            }),
        },
        {
          toPrecision: function toPrecision(t) {
            return void 0 === t ? u(l(this)) : u(l(this), t);
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(290);
      o(
        { target: "Object", stat: !0, arity: 2, forced: Object.assign !== a },
        { assign: a }
      );
    },
    function (t, i, r) {
      r(6)({ target: "Object", stat: !0, sham: !r(14) }, { create: r(62) });
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(14),
        c = r(148),
        l = r(35),
        u = r(26),
        h = r(24);
      a &&
        o(
          { target: "Object", proto: !0, forced: c },
          {
            __defineGetter__: function __defineGetter__(t, i) {
              h.f(u(this), t, { get: l(i), enumerable: !0, configurable: !0 });
            },
          }
        );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(14),
        c = r(195).f;
      o(
        {
          target: "Object",
          stat: !0,
          forced: Object.defineProperties !== c,
          sham: !a,
        },
        { defineProperties: c }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(14),
        c = r(24).f;
      o(
        {
          target: "Object",
          stat: !0,
          forced: Object.defineProperty !== c,
          sham: !a,
        },
        { defineProperty: c }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(14),
        c = r(148),
        l = r(35),
        u = r(26),
        h = r(24);
      a &&
        o(
          { target: "Object", proto: !0, forced: c },
          {
            __defineSetter__: function __defineSetter__(t, i) {
              h.f(u(this), t, { set: l(i), enumerable: !0, configurable: !0 });
            },
          }
        );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(291).entries;
      o(
        { target: "Object", stat: !0 },
        {
          entries: function entries(t) {
            return a(t);
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(121),
        c = r(9),
        l = r(18),
        u = r(91).onFreeze,
        h = Object.freeze;
      o(
        {
          target: "Object",
          stat: !0,
          forced: c(function () {
            h(1);
          }),
          sham: !a,
        },
        {
          freeze: function freeze(t) {
            return h && l(t) ? h(u(t)) : t;
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(99),
        c = r(77);
      o(
        { target: "Object", stat: !0 },
        {
          fromEntries: function fromEntries(t) {
            var i = {};
            return (
              a(
                t,
                function (t, r) {
                  c(i, t, r);
                },
                { AS_ENTRIES: !0 }
              ),
              i
            );
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(9),
        c = r(39),
        l = r(34).f,
        u = r(14),
        h = a(function () {
          l(1);
        });
      o(
        { target: "Object", stat: !0, forced: !u || h, sham: !u },
        {
          getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, i) {
            return l(c(t), i);
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(14),
        c = r(192),
        l = r(39),
        u = r(34),
        h = r(77);
      o(
        { target: "Object", stat: !0, sham: !a },
        {
          getOwnPropertyDescriptors: function getOwnPropertyDescriptors(t) {
            for (
              var i, r, o = l(t), a = u.f, d = c(o), p = {}, v = 0;
              d.length > v;

            )
              void 0 !== (r = a(o, (i = d[v++]))) && h(p, i, r);
            return p;
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(9),
        c = r(196).f;
      o(
        {
          target: "Object",
          stat: !0,
          forced: a(function () {
            return !Object.getOwnPropertyNames(1);
          }),
        },
        { getOwnPropertyNames: c }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(9),
        c = r(26),
        l = r(54),
        u = r(202);
      o(
        {
          target: "Object",
          stat: !0,
          forced: a(function () {
            l(1);
          }),
          sham: !u,
        },
        {
          getPrototypeOf: function getPrototypeOf(t) {
            return l(c(t));
          },
        }
      );
    },
    function (t, i, r) {
      r(6)({ target: "Object", stat: !0 }, { is: r(292) });
    },
    function (t, i, r) {
      var o = r(6),
        a = r(144);
      o(
        { target: "Object", stat: !0, forced: Object.isExtensible !== a },
        { isExtensible: a }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(9),
        c = r(18),
        l = r(51),
        u = r(210),
        h = Object.isFrozen;
      o(
        {
          target: "Object",
          stat: !0,
          forced:
            a(function () {
              h(1);
            }) || u,
        },
        {
          isFrozen: function isFrozen(t) {
            return !c(t) || !(!u || "ArrayBuffer" != l(t)) || (!!h && h(t));
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(9),
        c = r(18),
        l = r(51),
        u = r(210),
        h = Object.isSealed;
      o(
        {
          target: "Object",
          stat: !0,
          forced:
            a(function () {
              h(1);
            }) || u,
        },
        {
          isSealed: function isSealed(t) {
            return !c(t) || !(!u || "ArrayBuffer" != l(t)) || (!!h && h(t));
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(26),
        c = r(112);
      o(
        {
          target: "Object",
          stat: !0,
          forced: r(9)(function () {
            c(1);
          }),
        },
        {
          keys: function keys(t) {
            return c(a(t));
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(14),
        c = r(148),
        l = r(26),
        u = r(74),
        h = r(54),
        d = r(34).f;
      a &&
        o(
          { target: "Object", proto: !0, forced: c },
          {
            __lookupGetter__: function __lookupGetter__(t) {
              var i,
                r = l(this),
                o = u(t);
              do {
                if ((i = d(r, o))) return i.get;
              } while ((r = h(r)));
            },
          }
        );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(14),
        c = r(148),
        l = r(26),
        u = r(74),
        h = r(54),
        d = r(34).f;
      a &&
        o(
          { target: "Object", proto: !0, forced: c },
          {
            __lookupSetter__: function __lookupSetter__(t) {
              var i,
                r = l(this),
                o = u(t);
              do {
                if ((i = d(r, o))) return i.set;
              } while ((r = h(r)));
            },
          }
        );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(18),
        c = r(91).onFreeze,
        l = r(121),
        u = r(9),
        h = Object.preventExtensions;
      o(
        {
          target: "Object",
          stat: !0,
          forced: u(function () {
            h(1);
          }),
          sham: !l,
        },
        {
          preventExtensions: function preventExtensions(t) {
            return h && a(t) ? h(c(t)) : t;
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(18),
        c = r(91).onFreeze,
        l = r(121),
        u = r(9),
        h = Object.seal;
      o(
        {
          target: "Object",
          stat: !0,
          forced: u(function () {
            h(1);
          }),
          sham: !l,
        },
        {
          seal: function seal(t) {
            return h && a(t) ? h(c(t)) : t;
          },
        }
      );
    },
    function (t, i, r) {
      r(6)({ target: "Object", stat: !0 }, { setPrototypeOf: r(80) });
    },
    function (t, i, r) {
      var o = r(194),
        a = r(28),
        c = r(507);
      o || a(Object.prototype, "toString", c, { unsafe: !0 });
    },
    function (t, i, r) {
      "use strict";
      var o = r(194),
        a = r(69);
      t.exports = o
        ? {}.toString
        : function toString() {
            return "[object " + a(this) + "]";
          };
    },
    function (t, i, r) {
      var o = r(6),
        a = r(291).values;
      o(
        { target: "Object", stat: !0 },
        {
          values: function values(t) {
            return a(t);
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(288);
      o({ global: !0, forced: parseFloat != a }, { parseFloat: a });
    },
    function (t, i, r) {
      var o = r(6),
        a = r(289);
      o({ global: !0, forced: parseInt != a }, { parseInt: a });
    },
    function (t, i, r) {
      r(512), r(518), r(519), r(520), r(521), r(522);
    },
    function (t, i, r) {
      "use strict";
      var o,
        a,
        c,
        l = r(6),
        u = r(41),
        h = r(90),
        d = r(11),
        p = r(20),
        v = r(28),
        g = r(80),
        m = r(53),
        y = r(98),
        b = r(35),
        _ = r(21),
        w = r(18),
        x = r(81),
        S = r(120),
        k = r(149).set,
        T = r(294),
        E = r(515),
        O = r(214),
        I = r(516),
        C = r(37),
        A = r(101),
        L = r(123),
        P = r(124),
        N = L.CONSTRUCTOR,
        R = L.REJECTION_EVENT,
        j = L.SUBCLASSING,
        M = C.getterFor("Promise"),
        D = C.set,
        q = A && A.prototype,
        V = A,
        B = q,
        z = d.TypeError,
        H = d.document,
        $ = d.process,
        W = P.f,
        G = W,
        U = !!(H && H.createEvent && d.dispatchEvent),
        isThenable = function (t) {
          var i;
          return !(!w(t) || !_((i = t.then))) && i;
        },
        callReaction = function (t, i) {
          var r,
            o,
            a,
            c = i.value,
            l = 1 == i.state,
            u = l ? t.ok : t.fail,
            h = t.resolve,
            d = t.reject,
            v = t.domain;
          try {
            u
              ? (l ||
                  (2 === i.rejection && onHandleUnhandled(i),
                  (i.rejection = 1)),
                !0 === u
                  ? (r = c)
                  : (v && v.enter(), (r = u(c)), v && (v.exit(), (a = !0))),
                r === t.promise
                  ? d(z("Promise-chain cycle"))
                  : (o = isThenable(r))
                  ? p(o, r, h, d)
                  : h(r))
              : d(c);
          } catch (t) {
            v && !a && v.exit(), d(t);
          }
        },
        notify = function (t, i) {
          t.notified ||
            ((t.notified = !0),
            T(function () {
              for (var r, o = t.reactions; (r = o.get()); ) callReaction(r, t);
              (t.notified = !1), i && !t.rejection && onUnhandled(t);
            }));
        },
        dispatchEvent = function (t, i, r) {
          var o, a;
          U
            ? (((o = H.createEvent("Event")).promise = i),
              (o.reason = r),
              o.initEvent(t, !1, !0),
              d.dispatchEvent(o))
            : (o = { promise: i, reason: r }),
            !R && (a = d["on" + t])
              ? a(o)
              : "unhandledrejection" === t &&
                E("Unhandled promise rejection", r);
        },
        onUnhandled = function (t) {
          p(k, d, function () {
            var i,
              r = t.facade,
              o = t.value;
            if (
              isUnhandled(t) &&
              ((i = O(function () {
                h
                  ? $.emit("unhandledRejection", o, r)
                  : dispatchEvent("unhandledrejection", r, o);
              })),
              (t.rejection = h || isUnhandled(t) ? 2 : 1),
              i.error)
            )
              throw i.value;
          });
        },
        isUnhandled = function (t) {
          return 1 !== t.rejection && !t.parent;
        },
        onHandleUnhandled = function (t) {
          p(k, d, function () {
            var i = t.facade;
            h
              ? $.emit("rejectionHandled", i)
              : dispatchEvent("rejectionhandled", i, t.value);
          });
        },
        bind = function (t, i, r) {
          return function (o) {
            t(i, o, r);
          };
        },
        internalReject = function (t, i, r) {
          t.done ||
            ((t.done = !0),
            r && (t = r),
            (t.value = i),
            (t.state = 2),
            notify(t, !0));
        },
        internalResolve = function (t, i, r) {
          if (!t.done) {
            (t.done = !0), r && (t = r);
            try {
              if (t.facade === i) throw z("Promise can't be resolved itself");
              var o = isThenable(i);
              o
                ? T(function () {
                    var r = { done: !1 };
                    try {
                      p(
                        o,
                        i,
                        bind(internalResolve, r, t),
                        bind(internalReject, r, t)
                      );
                    } catch (i) {
                      internalReject(r, i, t);
                    }
                  })
                : ((t.value = i), (t.state = 1), notify(t, !1));
            } catch (i) {
              internalReject({ done: !1 }, i, t);
            }
          }
        };
      if (
        N &&
        ((B = (V = function Promise(t) {
          x(this, B), b(t), p(o, this);
          var i = M(this);
          try {
            t(bind(internalResolve, i), bind(internalReject, i));
          } catch (t) {
            internalReject(i, t);
          }
        }).prototype),
        ((o = function Promise(t) {
          D(this, {
            type: "Promise",
            done: !1,
            notified: !1,
            parent: !1,
            reactions: new I(),
            rejection: !1,
            state: 0,
            value: void 0,
          });
        }).prototype = v(B, "then", function then(t, i) {
          var r = M(this),
            o = W(S(this, V));
          return (
            (r.parent = !0),
            (o.ok = !_(t) || t),
            (o.fail = _(i) && i),
            (o.domain = h ? $.domain : void 0),
            0 == r.state
              ? r.reactions.add(o)
              : T(function () {
                  callReaction(o, r);
                }),
            o.promise
          );
        })),
        (a = function () {
          var t = new o(),
            i = M(t);
          (this.promise = t),
            (this.resolve = bind(internalResolve, i)),
            (this.reject = bind(internalReject, i));
        }),
        (P.f = W =
          function (t) {
            return t === V || void 0 === t ? new a(t) : G(t);
          }),
        !u && _(A) && q !== Object.prototype)
      ) {
        (c = q.then),
          j ||
            v(
              q,
              "then",
              function then(t, i) {
                var r = this;
                return new V(function (t, i) {
                  p(c, r, t, i);
                }).then(t, i);
              },
              { unsafe: !0 }
            );
        try {
          delete q.constructor;
        } catch (t) {}
        g && g(q, B);
      }
      l({ global: !0, constructor: !0, wrap: !0, forced: N }, { Promise: V }),
        m(V, "Promise", !1, !0),
        y("Promise");
    },
    function (t, i, r) {
      var o = r(67),
        a = r(11);
      t.exports = /ipad|iphone|ipod/i.test(o) && void 0 !== a.Pebble;
    },
    function (t, i, r) {
      var o = r(67);
      t.exports = /web0s(?!.*chrome)/i.test(o);
    },
    function (t, i, r) {
      var o = r(11);
      t.exports = function (t, i) {
        var r = o.console;
        r && r.error && (1 == arguments.length ? r.error(t) : r.error(t, i));
      };
    },
    function (t, i) {
      var Queue = function () {
        (this.head = null), (this.tail = null);
      };
      (Queue.prototype = {
        add: function (t) {
          var i = { item: t, next: null };
          this.head ? (this.tail.next = i) : (this.head = i), (this.tail = i);
        },
        get: function () {
          var t = this.head;
          if (t)
            return (
              (this.head = t.next),
              this.tail === t && (this.tail = null),
              t.item
            );
        },
      }),
        (t.exports = Queue);
    },
    function (t, i, r) {
      var o = r(295),
        a = r(90);
      t.exports =
        !o && !a && "object" == typeof window && "object" == typeof document;
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(20),
        c = r(35),
        l = r(124),
        u = r(214),
        h = r(99);
      o(
        { target: "Promise", stat: !0, forced: r(296) },
        {
          all: function all(t) {
            var i = this,
              r = l.f(i),
              o = r.resolve,
              d = r.reject,
              p = u(function () {
                var r = c(i.resolve),
                  l = [],
                  u = 0,
                  p = 1;
                h(t, function (t) {
                  var c = u++,
                    h = !1;
                  p++,
                    a(r, i, t).then(function (t) {
                      h || ((h = !0), (l[c] = t), --p || o(l));
                    }, d);
                }),
                  --p || o(l);
              });
            return p.error && d(p.value), r.promise;
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(41),
        c = r(123).CONSTRUCTOR,
        l = r(101),
        u = r(36),
        h = r(21),
        d = r(28),
        p = l && l.prototype;
      if (
        (o(
          { target: "Promise", proto: !0, forced: c, real: !0 },
          {
            catch: function (t) {
              return this.then(void 0, t);
            },
          }
        ),
        !a && h(l))
      ) {
        var v = u("Promise").prototype.catch;
        p.catch !== v && d(p, "catch", v, { unsafe: !0 });
      }
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(20),
        c = r(35),
        l = r(124),
        u = r(214),
        h = r(99);
      o(
        { target: "Promise", stat: !0, forced: r(296) },
        {
          race: function race(t) {
            var i = this,
              r = l.f(i),
              o = r.reject,
              d = u(function () {
                var l = c(i.resolve);
                h(t, function (t) {
                  a(l, i, t).then(r.resolve, o);
                });
              });
            return d.error && o(d.value), r.promise;
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(20),
        c = r(124);
      o(
        { target: "Promise", stat: !0, forced: r(123).CONSTRUCTOR },
        {
          reject: function reject(t) {
            var i = c.f(this);
            return a(i.reject, void 0, t), i.promise;
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(36),
        c = r(41),
        l = r(101),
        u = r(123).CONSTRUCTOR,
        h = r(297),
        d = a("Promise"),
        p = c && !u;
      o(
        { target: "Promise", stat: !0, forced: c || u },
        {
          resolve: function resolve(t) {
            return h(p && this === d ? l : this, t);
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(41),
        c = r(101),
        l = r(9),
        u = r(36),
        h = r(21),
        d = r(120),
        p = r(297),
        v = r(28),
        g = c && c.prototype;
      if (
        (o(
          {
            target: "Promise",
            proto: !0,
            real: !0,
            forced:
              !!c &&
              l(function () {
                g.finally.call({ then: function () {} }, function () {});
              }),
          },
          {
            finally: function (t) {
              var i = d(this, u("Promise")),
                r = h(t);
              return this.then(
                r
                  ? function (r) {
                      return p(i, t()).then(function () {
                        return r;
                      });
                    }
                  : t,
                r
                  ? function (r) {
                      return p(i, t()).then(function () {
                        throw r;
                      });
                    }
                  : t
              );
            },
          }
        ),
        !a && h(c))
      ) {
        var m = u("Promise").prototype.finally;
        g.finally !== m && v(g, "finally", m, { unsafe: !0 });
      }
    },
    function (t, i, r) {
      var o = r(6),
        a = r(64),
        c = r(35),
        l = r(16);
      o(
        {
          target: "Reflect",
          stat: !0,
          forced: !r(9)(function () {
            Reflect.apply(function () {});
          }),
        },
        {
          apply: function apply(t, i, r) {
            return a(c(t), i, l(r));
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(36),
        c = r(64),
        l = r(285),
        u = r(207),
        h = r(16),
        d = r(18),
        p = r(62),
        v = r(9),
        g = a("Reflect", "construct"),
        m = Object.prototype,
        y = [].push,
        b = v(function () {
          function F() {}
          return !(g(function () {}, [], F) instanceof F);
        }),
        _ = !v(function () {
          g(function () {});
        }),
        w = b || _;
      o(
        { target: "Reflect", stat: !0, forced: w, sham: w },
        {
          construct: function construct(t, i) {
            u(t), h(i);
            var r = arguments.length < 3 ? t : u(arguments[2]);
            if (_ && !b) return g(t, i, r);
            if (t == r) {
              switch (i.length) {
                case 0:
                  return new t();
                case 1:
                  return new t(i[0]);
                case 2:
                  return new t(i[0], i[1]);
                case 3:
                  return new t(i[0], i[1], i[2]);
                case 4:
                  return new t(i[0], i[1], i[2], i[3]);
              }
              var o = [null];
              return c(y, o, i), new (c(l, t, o))();
            }
            var a = r.prototype,
              v = p(d(a) ? a : m),
              w = c(t, v, i);
            return d(w) ? w : v;
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(14),
        c = r(16),
        l = r(74),
        u = r(24);
      o(
        {
          target: "Reflect",
          stat: !0,
          forced: r(9)(function () {
            Reflect.defineProperty(u.f({}, 1, { value: 1 }), 1, { value: 2 });
          }),
          sham: !a,
        },
        {
          defineProperty: function defineProperty(t, i, r) {
            c(t);
            var o = l(i);
            c(r);
            try {
              return u.f(t, o, r), !0;
            } catch (t) {
              return !1;
            }
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(16),
        c = r(34).f;
      o(
        { target: "Reflect", stat: !0 },
        {
          deleteProperty: function deleteProperty(t, i) {
            var r = c(a(t), i);
            return !(r && !r.configurable) && delete t[i];
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(20),
        c = r(18),
        l = r(16),
        u = r(298),
        h = r(34),
        d = r(54);
      o(
        { target: "Reflect", stat: !0 },
        {
          get: function get(t, i) {
            var r,
              o,
              p = arguments.length < 3 ? t : arguments[2];
            return l(t) === p
              ? t[i]
              : (r = h.f(t, i))
              ? u(r)
                ? r.value
                : void 0 === r.get
                ? void 0
                : a(r.get, p)
              : c((o = d(t)))
              ? get(o, i, p)
              : void 0;
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(14),
        c = r(16),
        l = r(34);
      o(
        { target: "Reflect", stat: !0, sham: !a },
        {
          getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, i) {
            return l.f(c(t), i);
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(16),
        c = r(54);
      o(
        { target: "Reflect", stat: !0, sham: !r(202) },
        {
          getPrototypeOf: function getPrototypeOf(t) {
            return c(a(t));
          },
        }
      );
    },
    function (t, i, r) {
      r(6)(
        { target: "Reflect", stat: !0 },
        {
          has: function has(t, i) {
            return i in t;
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(16),
        c = r(144);
      o(
        { target: "Reflect", stat: !0 },
        {
          isExtensible: function isExtensible(t) {
            return a(t), c(t);
          },
        }
      );
    },
    function (t, i, r) {
      r(6)({ target: "Reflect", stat: !0 }, { ownKeys: r(192) });
    },
    function (t, i, r) {
      var o = r(6),
        a = r(36),
        c = r(16);
      o(
        { target: "Reflect", stat: !0, sham: !r(121) },
        {
          preventExtensions: function preventExtensions(t) {
            c(t);
            try {
              var i = a("Object", "preventExtensions");
              return i && i(t), !0;
            } catch (t) {
              return !1;
            }
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(20),
        c = r(16),
        l = r(18),
        u = r(298),
        h = r(9),
        d = r(24),
        p = r(34),
        v = r(54),
        g = r(73);
      o(
        {
          target: "Reflect",
          stat: !0,
          forced: h(function () {
            var Constructor = function () {},
              t = d.f(new Constructor(), "a", { configurable: !0 });
            return !1 !== Reflect.set(Constructor.prototype, "a", 1, t);
          }),
        },
        {
          set: function set(t, i, r) {
            var o,
              h,
              m,
              y = arguments.length < 4 ? t : arguments[3],
              b = p.f(c(t), i);
            if (!b) {
              if (l((h = v(t)))) return set(h, i, r, y);
              b = g(0);
            }
            if (u(b)) {
              if (!1 === b.writable || !l(y)) return !1;
              if ((o = p.f(y, i))) {
                if (o.get || o.set || !1 === o.writable) return !1;
                (o.value = r), d.f(y, i, o);
              } else d.f(y, i, g(0, r));
            } else {
              if (void 0 === (m = b.set)) return !1;
              a(m, y, r);
            }
            return !0;
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(16),
        c = r(280),
        l = r(80);
      l &&
        o(
          { target: "Reflect", stat: !0 },
          {
            setPrototypeOf: function setPrototypeOf(t, i) {
              a(t), c(i);
              try {
                return l(t, i), !0;
              } catch (t) {
                return !1;
              }
            },
          }
        );
    },
    function (t, i, r) {
      var o = r(14),
        a = r(11),
        c = r(10),
        l = r(111),
        u = r(145),
        h = r(61),
        d = r(76).f,
        p = r(60),
        v = r(215),
        g = r(27),
        m = r(299),
        y = r(217),
        b = r(538),
        _ = r(28),
        w = r(9),
        x = r(23),
        S = r(37).enforce,
        k = r(98),
        T = r(19),
        E = r(300),
        O = r(301),
        I = T("match"),
        C = a.RegExp,
        A = C.prototype,
        L = a.SyntaxError,
        P = c(A.exec),
        N = c("".charAt),
        R = c("".replace),
        j = c("".indexOf),
        M = c("".slice),
        D = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
        q = /a/g,
        V = /a/g,
        B = new C(q) !== q,
        z = y.MISSED_STICKY,
        H = y.UNSUPPORTED_Y,
        $ =
          o &&
          (!B ||
            z ||
            E ||
            O ||
            w(function () {
              return (V[I] = !1), C(q) != q || C(V) == V || "/a/i" != C(q, "i");
            }));
      if (l("RegExp", $)) {
        for (
          var W = function RegExp(t, i) {
              var r,
                o,
                a,
                c,
                l,
                d,
                y = p(A, this),
                b = v(t),
                _ = void 0 === i,
                w = [],
                k = t;
              if (!y && b && _ && t.constructor === W) return t;
              if (
                ((b || p(A, t)) && ((t = t.source), _ && (i = m(k))),
                (t = void 0 === t ? "" : g(t)),
                (i = void 0 === i ? "" : g(i)),
                (k = t),
                E &&
                  ("dotAll" in q) &&
                  (o = !!i && j(i, "s") > -1) &&
                  (i = R(i, /s/g, "")),
                (r = i),
                z &&
                  ("sticky" in q) &&
                  (a = !!i && j(i, "y") > -1) &&
                  H &&
                  (i = R(i, /y/g, "")),
                O &&
                  ((t = (c = (function (t) {
                    for (
                      var i,
                        r = t.length,
                        o = 0,
                        a = "",
                        c = [],
                        l = {},
                        u = !1,
                        h = !1,
                        d = 0,
                        p = "";
                      o <= r;
                      o++
                    ) {
                      if ("\\" === (i = N(t, o))) i += N(t, ++o);
                      else if ("]" === i) u = !1;
                      else if (!u)
                        switch (!0) {
                          case "[" === i:
                            u = !0;
                            break;
                          case "(" === i:
                            P(D, M(t, o + 1)) && ((o += 2), (h = !0)),
                              (a += i),
                              d++;
                            continue;
                          case ">" === i && h:
                            if ("" === p || x(l, p))
                              throw new L("Invalid capture group name");
                            (l[p] = !0),
                              (c[c.length] = [p, d]),
                              (h = !1),
                              (p = "");
                            continue;
                        }
                      h ? (p += i) : (a += i);
                    }
                    return [a, c];
                  })(t))[0]),
                  (w = c[1])),
                (l = u(C(t, i), y ? this : A, W)),
                (o || a || w.length) &&
                  ((d = S(l)),
                  o &&
                    ((d.dotAll = !0),
                    (d.raw = W(
                      (function (t) {
                        for (
                          var i, r = t.length, o = 0, a = "", c = !1;
                          o <= r;
                          o++
                        )
                          "\\" !== (i = N(t, o))
                            ? c || "." !== i
                              ? ("[" === i ? (c = !0) : "]" === i && (c = !1),
                                (a += i))
                              : (a += "[\\s\\S]")
                            : (a += i + N(t, ++o));
                        return a;
                      })(t),
                      r
                    ))),
                  a && (d.sticky = !0),
                  w.length && (d.groups = w)),
                t !== k)
              )
                try {
                  h(l, "source", "" === k ? "(?:)" : k);
                } catch (t) {}
              return l;
            },
            G = d(C),
            U = 0;
          G.length > U;

        )
          b(W, C, G[U++]);
        (A.constructor = W),
          (W.prototype = A),
          _(a, "RegExp", W, { constructor: !0 });
      }
      k("RegExp");
    },
    function (t, i, r) {
      var o = r(24).f;
      t.exports = function (t, i, r) {
        r in t ||
          o(t, r, {
            configurable: !0,
            get: function () {
              return i[r];
            },
            set: function (t) {
              i[r] = t;
            },
          });
      };
    },
    function (t, i, r) {
      var o = r(11),
        a = r(14),
        c = r(303),
        l = r(216),
        u = r(9),
        h = o.RegExp,
        d = h.prototype;
      a &&
        u(function () {
          var t = !0;
          try {
            h(".", "d");
          } catch (i) {
            t = !1;
          }
          var i = {},
            r = "",
            o = t ? "dgimsy" : "gimsy",
            addGetter = function (t, o) {
              Object.defineProperty(i, t, {
                get: function () {
                  return (r += o), !0;
                },
              });
            },
            a = {
              dotAll: "s",
              global: "g",
              ignoreCase: "i",
              multiline: "m",
              sticky: "y",
            };
          for (var c in (t && (a.hasIndices = "d"), a)) addGetter(c, a[c]);
          return (
            Object.getOwnPropertyDescriptor(d, "flags").get.call(i) !== o ||
            r !== o
          );
        }) &&
        c(d, "flags", { configurable: !0, get: l });
    },
    function (t, i, r) {
      "use strict";
      var o = r(97).PROPER,
        a = r(28),
        c = r(16),
        l = r(27),
        u = r(9),
        h = r(299),
        d = RegExp.prototype.toString,
        p = u(function () {
          return "/a/b" != d.call({ source: "a", flags: "b" });
        }),
        v = o && "toString" != d.name;
      (p || v) &&
        a(
          RegExp.prototype,
          "toString",
          function toString() {
            var t = c(this);
            return "/" + l(t.source) + "/" + l(h(t));
          },
          { unsafe: !0 }
        );
    },
    function (t, i, r) {
      r(542);
    },
    function (t, i, r) {
      "use strict";
      r(143)(
        "Set",
        function (t) {
          return function Set() {
            return t(this, arguments.length ? arguments[0] : void 0);
          };
        },
        r(286)
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(151).codeAt;
      o(
        { target: "String", proto: !0 },
        {
          codePointAt: function codePointAt(t) {
            return a(this, t);
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o,
        a = r(6),
        c = r(88),
        l = r(34).f,
        u = r(48),
        h = r(27),
        d = r(218),
        p = r(40),
        v = r(219),
        g = r(41),
        m = c("".endsWith),
        y = c("".slice),
        b = Math.min,
        _ = v("endsWith");
      a(
        {
          target: "String",
          proto: !0,
          forced:
            !!(
              g ||
              _ ||
              ((o = l(String.prototype, "endsWith")), !o || o.writable)
            ) && !_,
        },
        {
          endsWith: function endsWith(t) {
            var i = h(p(this));
            d(t);
            var r = arguments.length > 1 ? arguments[1] : void 0,
              o = i.length,
              a = void 0 === r ? o : b(u(r), o),
              c = h(t);
            return m ? m(i, c, a) : y(i, a - c.length, a) === c;
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(10),
        c = r(68),
        l = RangeError,
        u = String.fromCharCode,
        h = String.fromCodePoint,
        d = a([].join);
      o(
        { target: "String", stat: !0, arity: 1, forced: !!h && 1 != h.length },
        {
          fromCodePoint: function fromCodePoint(t) {
            for (var i, r = [], o = arguments.length, a = 0; o > a; ) {
              if (((i = +arguments[a++]), c(i, 1114111) !== i))
                throw l(i + " is not a valid code point");
              r[a] =
                i < 65536
                  ? u(i)
                  : u(55296 + ((i -= 65536) >> 10), (i % 1024) + 56320);
            }
            return d(r, "");
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(10),
        c = r(218),
        l = r(40),
        u = r(27),
        h = r(219),
        d = a("".indexOf);
      o(
        { target: "String", proto: !0, forced: !h("includes") },
        {
          includes: function includes(t) {
            return !!~d(
              u(l(this)),
              u(c(t)),
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(20),
        a = r(152),
        c = r(16),
        l = r(52),
        u = r(48),
        h = r(27),
        d = r(40),
        p = r(86),
        v = r(220),
        g = r(153);
      a("match", function (t, i, r) {
        return [
          function match(i) {
            var r = d(this),
              a = l(i) ? void 0 : p(i, t);
            return a ? o(a, i, r) : new RegExp(i)[t](h(r));
          },
          function (t) {
            var o = c(this),
              a = h(t),
              l = r(i, o, a);
            if (l.done) return l.value;
            if (!o.global) return g(o, a);
            var d = o.unicode;
            o.lastIndex = 0;
            for (var p, m = [], y = 0; null !== (p = g(o, a)); ) {
              var b = h(p[0]);
              (m[y] = b),
                "" === b && (o.lastIndex = v(a, u(o.lastIndex), d)),
                y++;
            }
            return 0 === y ? null : m;
          },
        ];
      });
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(208).end;
      o(
        { target: "String", proto: !0, forced: r(305) },
        {
          padEnd: function padEnd(t) {
            return a(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(208).start;
      o(
        { target: "String", proto: !0, forced: r(305) },
        {
          padStart: function padStart(t) {
            return a(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(10),
        c = r(39),
        l = r(26),
        u = r(27),
        h = r(29),
        d = a([].push),
        p = a([].join);
      o(
        { target: "String", stat: !0 },
        {
          raw: function raw(t) {
            for (
              var i = c(l(t).raw),
                r = h(i),
                o = arguments.length,
                a = [],
                v = 0;
              r > v;

            ) {
              if ((d(a, u(i[v++])), v === r)) return p(a, "");
              v < o && d(a, u(arguments[v]));
            }
          },
        }
      );
    },
    function (t, i, r) {
      r(6)({ target: "String", proto: !0 }, { repeat: r(209) });
    },
    function (t, i, r) {
      "use strict";
      var o = r(64),
        a = r(20),
        c = r(10),
        l = r(152),
        u = r(9),
        h = r(16),
        d = r(21),
        p = r(52),
        v = r(47),
        g = r(48),
        m = r(27),
        y = r(40),
        b = r(220),
        _ = r(86),
        w = r(553),
        x = r(153),
        S = r(19)("replace"),
        k = Math.max,
        T = Math.min,
        E = c([].concat),
        O = c([].push),
        I = c("".indexOf),
        C = c("".slice),
        A = "$0" === "a".replace(/./, "$0"),
        L = !!/./[S] && "" === /./[S]("a", "$0");
      l(
        "replace",
        function (t, i, r) {
          var c = L ? "$" : "$0";
          return [
            function replace(t, r) {
              var o = y(this),
                c = p(t) ? void 0 : _(t, S);
              return c ? a(c, t, o, r) : a(i, m(o), t, r);
            },
            function (t, a) {
              var l = h(this),
                u = m(t);
              if ("string" == typeof a && -1 === I(a, c) && -1 === I(a, "$<")) {
                var p = r(i, l, u, a);
                if (p.done) return p.value;
              }
              var y = d(a);
              y || (a = m(a));
              var _ = l.global;
              if (_) {
                var S = l.unicode;
                l.lastIndex = 0;
              }
              for (var A = []; ; ) {
                var L = x(l, u);
                if (null === L) break;
                if ((O(A, L), !_)) break;
                "" === m(L[0]) && (l.lastIndex = b(u, g(l.lastIndex), S));
              }
              for (var P, N = "", R = 0, j = 0; j < A.length; j++) {
                for (
                  var M = m((L = A[j])[0]),
                    D = k(T(v(L.index), u.length), 0),
                    q = [],
                    V = 1;
                  V < L.length;
                  V++
                )
                  O(q, void 0 === (P = L[V]) ? P : String(P));
                var B = L.groups;
                if (y) {
                  var z = E([M], q, D, u);
                  void 0 !== B && O(z, B);
                  var H = m(o(a, void 0, z));
                } else H = w(M, u, D, q, B, a);
                D >= R && ((N += C(u, R, D) + H), (R = D + M.length));
              }
              return N + C(u, R);
            },
          ];
        },
        !!u(function () {
          var t = /./;
          return (
            (t.exec = function () {
              var t = [];
              return (t.groups = { a: "7" }), t;
            }),
            "7" !== "".replace(t, "$<a>")
          );
        }) ||
          !A ||
          L
      );
    },
    function (t, i, r) {
      var o = r(10),
        a = r(26),
        c = Math.floor,
        l = o("".charAt),
        u = o("".replace),
        h = o("".slice),
        d = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        p = /\$([$&'`]|\d{1,2})/g;
      t.exports = function (t, i, r, o, v, g) {
        var m = r + t.length,
          y = o.length,
          b = p;
        return (
          void 0 !== v && ((v = a(v)), (b = d)),
          u(g, b, function (a, u) {
            var d;
            switch (l(u, 0)) {
              case "$":
                return "$";
              case "&":
                return t;
              case "`":
                return h(i, 0, r);
              case "'":
                return h(i, m);
              case "<":
                d = v[h(u, 1, -1)];
                break;
              default:
                var p = +u;
                if (0 === p) return a;
                if (p > y) {
                  var g = c(p / 10);
                  return 0 === g
                    ? a
                    : g <= y
                    ? void 0 === o[g - 1]
                      ? l(u, 1)
                      : o[g - 1] + l(u, 1)
                    : a;
                }
                d = o[p - 1];
            }
            return void 0 === d ? "" : d;
          })
        );
      };
    },
    function (t, i, r) {
      "use strict";
      var o = r(20),
        a = r(152),
        c = r(16),
        l = r(52),
        u = r(40),
        h = r(292),
        d = r(27),
        p = r(86),
        v = r(153);
      a("search", function (t, i, r) {
        return [
          function search(i) {
            var r = u(this),
              a = l(i) ? void 0 : p(i, t);
            return a ? o(a, i, r) : new RegExp(i)[t](d(r));
          },
          function (t) {
            var o = c(this),
              a = d(t),
              l = r(i, o, a);
            if (l.done) return l.value;
            var u = o.lastIndex;
            h(u, 0) || (o.lastIndex = 0);
            var p = v(o, a);
            return (
              h(o.lastIndex, u) || (o.lastIndex = u), null === p ? -1 : p.index
            );
          },
        ];
      });
    },
    function (t, i, r) {
      "use strict";
      var o = r(64),
        a = r(20),
        c = r(10),
        l = r(152),
        u = r(16),
        h = r(52),
        d = r(215),
        p = r(40),
        v = r(120),
        g = r(220),
        m = r(48),
        y = r(27),
        b = r(86),
        _ = r(113),
        w = r(153),
        x = r(150),
        S = r(217),
        k = r(9),
        T = S.UNSUPPORTED_Y,
        E = Math.min,
        O = [].push,
        I = c(/./.exec),
        C = c(O),
        A = c("".slice);
      l(
        "split",
        function (t, i, r) {
          var c;
          return (
            (c =
              "c" == "abbc".split(/(b)*/)[1] ||
              4 != "test".split(/(?:)/, -1).length ||
              2 != "ab".split(/(?:ab)*/).length ||
              4 != ".".split(/(.?)(.?)/).length ||
              ".".split(/()()/).length > 1 ||
              "".split(/.?/).length
                ? function (t, r) {
                    var c = y(p(this)),
                      l = void 0 === r ? 4294967295 : r >>> 0;
                    if (0 === l) return [];
                    if (void 0 === t) return [c];
                    if (!d(t)) return a(i, c, t, l);
                    for (
                      var u,
                        h,
                        v,
                        g = [],
                        m =
                          (t.ignoreCase ? "i" : "") +
                          (t.multiline ? "m" : "") +
                          (t.unicode ? "u" : "") +
                          (t.sticky ? "y" : ""),
                        b = 0,
                        w = new RegExp(t.source, m + "g");
                      (u = a(x, w, c)) &&
                      !(
                        (h = w.lastIndex) > b &&
                        (C(g, A(c, b, u.index)),
                        u.length > 1 && u.index < c.length && o(O, g, _(u, 1)),
                        (v = u[0].length),
                        (b = h),
                        g.length >= l)
                      );

                    )
                      w.lastIndex === u.index && w.lastIndex++;
                    return (
                      b === c.length
                        ? (!v && I(w, "")) || C(g, "")
                        : C(g, A(c, b)),
                      g.length > l ? _(g, 0, l) : g
                    );
                  }
                : "0".split(void 0, 0).length
                ? function (t, r) {
                    return void 0 === t && 0 === r ? [] : a(i, this, t, r);
                  }
                : i),
            [
              function split(i, r) {
                var o = p(this),
                  l = h(i) ? void 0 : b(i, t);
                return l ? a(l, i, o, r) : a(c, y(o), i, r);
              },
              function (t, o) {
                var a = u(this),
                  l = y(t),
                  h = r(c, a, l, o, c !== i);
                if (h.done) return h.value;
                var d = v(a, RegExp),
                  p = a.unicode,
                  b =
                    (a.ignoreCase ? "i" : "") +
                    (a.multiline ? "m" : "") +
                    (a.unicode ? "u" : "") +
                    (T ? "g" : "y"),
                  _ = new d(T ? "^(?:" + a.source + ")" : a, b),
                  x = void 0 === o ? 4294967295 : o >>> 0;
                if (0 === x) return [];
                if (0 === l.length) return null === w(_, l) ? [l] : [];
                for (var S = 0, k = 0, O = []; k < l.length; ) {
                  _.lastIndex = T ? 0 : k;
                  var I,
                    L = w(_, T ? A(l, k) : l);
                  if (
                    null === L ||
                    (I = E(m(_.lastIndex + (T ? k : 0)), l.length)) === S
                  )
                    k = g(l, k, p);
                  else {
                    if ((C(O, A(l, S, k)), O.length === x)) return O;
                    for (var P = 1; P <= L.length - 1; P++)
                      if ((C(O, L[P]), O.length === x)) return O;
                    k = S = I;
                  }
                }
                return C(O, A(l, S)), O;
              },
            ]
          );
        },
        !!k(function () {
          var t = /(?:)/,
            i = t.exec;
          t.exec = function () {
            return i.apply(this, arguments);
          };
          var r = "ab".split(t);
          return 2 !== r.length || "a" !== r[0] || "b" !== r[1];
        }),
        T
      );
    },
    function (t, i, r) {
      "use strict";
      var o,
        a = r(6),
        c = r(88),
        l = r(34).f,
        u = r(48),
        h = r(27),
        d = r(218),
        p = r(40),
        v = r(219),
        g = r(41),
        m = c("".startsWith),
        y = c("".slice),
        b = Math.min,
        _ = v("startsWith");
      a(
        {
          target: "String",
          proto: !0,
          forced:
            !!(
              g ||
              _ ||
              ((o = l(String.prototype, "startsWith")), !o || o.writable)
            ) && !_,
        },
        {
          startsWith: function startsWith(t) {
            var i = h(p(this));
            d(t);
            var r = u(
                b(arguments.length > 1 ? arguments[1] : void 0, i.length)
              ),
              o = h(t);
            return m ? m(i, o, r) : y(i, r, r + o.length) === o;
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(100).trim;
      o(
        { target: "String", proto: !0, forced: r(221)("trim") },
        {
          trim: function trim() {
            return a(this);
          },
        }
      );
    },
    function (t, i, r) {
      r(559);
      var o = r(6),
        a = r(306);
      o(
        {
          target: "String",
          proto: !0,
          name: "trimEnd",
          forced: "".trimEnd !== a,
        },
        { trimEnd: a }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(306);
      o(
        {
          target: "String",
          proto: !0,
          name: "trimEnd",
          forced: "".trimRight !== a,
        },
        { trimRight: a }
      );
    },
    function (t, i, r) {
      r(561);
      var o = r(6),
        a = r(307);
      o(
        {
          target: "String",
          proto: !0,
          name: "trimStart",
          forced: "".trimStart !== a,
        },
        { trimStart: a }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(307);
      o(
        {
          target: "String",
          proto: !0,
          name: "trimStart",
          forced: "".trimLeft !== a,
        },
        { trimLeft: a }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(45);
      o(
        { target: "String", proto: !0, forced: r(46)("anchor") },
        {
          anchor: function anchor(t) {
            return a(this, "a", "name", t);
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(45);
      o(
        { target: "String", proto: !0, forced: r(46)("big") },
        {
          big: function big() {
            return a(this, "big", "", "");
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(45);
      o(
        { target: "String", proto: !0, forced: r(46)("blink") },
        {
          blink: function blink() {
            return a(this, "blink", "", "");
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(45);
      o(
        { target: "String", proto: !0, forced: r(46)("bold") },
        {
          bold: function bold() {
            return a(this, "b", "", "");
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(45);
      o(
        { target: "String", proto: !0, forced: r(46)("fixed") },
        {
          fixed: function fixed() {
            return a(this, "tt", "", "");
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(45);
      o(
        { target: "String", proto: !0, forced: r(46)("fontcolor") },
        {
          fontcolor: function fontcolor(t) {
            return a(this, "font", "color", t);
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(45);
      o(
        { target: "String", proto: !0, forced: r(46)("fontsize") },
        {
          fontsize: function fontsize(t) {
            return a(this, "font", "size", t);
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(45);
      o(
        { target: "String", proto: !0, forced: r(46)("italics") },
        {
          italics: function italics() {
            return a(this, "i", "", "");
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(45);
      o(
        { target: "String", proto: !0, forced: r(46)("link") },
        {
          link: function link(t) {
            return a(this, "a", "href", t);
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(45);
      o(
        { target: "String", proto: !0, forced: r(46)("small") },
        {
          small: function small() {
            return a(this, "small", "", "");
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(45);
      o(
        { target: "String", proto: !0, forced: r(46)("strike") },
        {
          strike: function strike() {
            return a(this, "strike", "", "");
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(45);
      o(
        { target: "String", proto: !0, forced: r(46)("sub") },
        {
          sub: function sub() {
            return a(this, "sub", "", "");
          },
        }
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(45);
      o(
        { target: "String", proto: !0, forced: r(46)("sup") },
        {
          sup: function sup() {
            return a(this, "sup", "", "");
          },
        }
      );
    },
    function (t, i, r) {
      r(71)("Float32", function (t) {
        return function Float32Array(i, r, o) {
          return t(this, i, r, o);
        };
      });
    },
    function (t, i, r) {
      var o = r(47),
        a = RangeError;
      t.exports = function (t) {
        var i = o(t);
        if (i < 0) throw a("The argument can't be less than 0");
        return i;
      };
    },
    function (t, i, r) {
      var o = r(69),
        a = r(10)("".slice);
      t.exports = function (t) {
        return "Big" === a(o(t), 0, 3);
      };
    },
    function (t, i, r) {
      r(71)("Float64", function (t) {
        return function Float64Array(i, r, o) {
          return t(this, i, r, o);
        };
      });
    },
    function (t, i, r) {
      r(71)("Int8", function (t) {
        return function Int8Array(i, r, o) {
          return t(this, i, r, o);
        };
      });
    },
    function (t, i, r) {
      r(71)("Int16", function (t) {
        return function Int16Array(i, r, o) {
          return t(this, i, r, o);
        };
      });
    },
    function (t, i, r) {
      r(71)("Int32", function (t) {
        return function Int32Array(i, r, o) {
          return t(this, i, r, o);
        };
      });
    },
    function (t, i, r) {
      r(71)("Uint8", function (t) {
        return function Uint8Array(i, r, o) {
          return t(this, i, r, o);
        };
      });
    },
    function (t, i, r) {
      r(71)(
        "Uint8",
        function (t) {
          return function Uint8ClampedArray(i, r, o) {
            return t(this, i, r, o);
          };
        },
        !0
      );
    },
    function (t, i, r) {
      r(71)("Uint16", function (t) {
        return function Uint16Array(i, r, o) {
          return t(this, i, r, o);
        };
      });
    },
    function (t, i, r) {
      r(71)("Uint32", function (t) {
        return function Uint32Array(i, r, o) {
          return t(this, i, r, o);
        };
      });
    },
    function (t, i, r) {
      "use strict";
      var o = r(10),
        a = r(22),
        c = o(r(273)),
        l = a.aTypedArray;
      (0, a.exportTypedArrayMethod)("copyWithin", function copyWithin(t, i) {
        return c(l(this), t, i, arguments.length > 2 ? arguments[2] : void 0);
      });
    },
    function (t, i, r) {
      "use strict";
      var o = r(22),
        a = r(31).every,
        c = o.aTypedArray;
      (0, o.exportTypedArrayMethod)("every", function every(t) {
        return a(c(this), t, arguments.length > 1 ? arguments[1] : void 0);
      });
    },
    function (t, i, r) {
      "use strict";
      var o = r(22),
        a = r(199),
        c = r(310),
        l = r(69),
        u = r(20),
        h = r(10),
        d = r(9),
        p = o.aTypedArray,
        v = o.exportTypedArrayMethod,
        g = h("".slice);
      v(
        "fill",
        function fill(t) {
          var i = arguments.length;
          p(this);
          var r = "Big" === g(l(this), 0, 3) ? c(t) : +t;
          return u(
            a,
            this,
            r,
            i > 1 ? arguments[1] : void 0,
            i > 2 ? arguments[2] : void 0
          );
        },
        d(function () {
          var t = 0;
          return (
            new Int8Array(2).fill({
              valueOf: function () {
                return t++;
              },
            }),
            1 !== t
          );
        })
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(22),
        a = r(31).filter,
        c = r(590),
        l = o.aTypedArray;
      (0, o.exportTypedArrayMethod)("filter", function filter(t) {
        var i = a(l(this), t, arguments.length > 1 ? arguments[1] : void 0);
        return c(this, i);
      });
    },
    function (t, i, r) {
      var o = r(591),
        a = r(154);
      t.exports = function (t, i) {
        return o(a(t), i);
      };
    },
    function (t, i, r) {
      var o = r(29);
      t.exports = function (t, i) {
        for (var r = 0, a = o(i), c = new t(a); a > r; ) c[r] = i[r++];
        return c;
      };
    },
    function (t, i, r) {
      "use strict";
      var o = r(22),
        a = r(31).find,
        c = o.aTypedArray;
      (0, o.exportTypedArrayMethod)("find", function find(t) {
        return a(c(this), t, arguments.length > 1 ? arguments[1] : void 0);
      });
    },
    function (t, i, r) {
      "use strict";
      var o = r(22),
        a = r(31).findIndex,
        c = o.aTypedArray;
      (0, o.exportTypedArrayMethod)("findIndex", function findIndex(t) {
        return a(c(this), t, arguments.length > 1 ? arguments[1] : void 0);
      });
    },
    function (t, i, r) {
      "use strict";
      var o = r(22),
        a = r(31).forEach,
        c = o.aTypedArray;
      (0, o.exportTypedArrayMethod)("forEach", function forEach(t) {
        a(c(this), t, arguments.length > 1 ? arguments[1] : void 0);
      });
    },
    function (t, i, r) {
      "use strict";
      var o = r(222);
      (0, r(22).exportTypedArrayStaticMethod)("from", r(309), o);
    },
    function (t, i, r) {
      "use strict";
      var o = r(22),
        a = r(110).includes,
        c = o.aTypedArray;
      (0, o.exportTypedArrayMethod)("includes", function includes(t) {
        return a(c(this), t, arguments.length > 1 ? arguments[1] : void 0);
      });
    },
    function (t, i, r) {
      "use strict";
      var o = r(22),
        a = r(110).indexOf,
        c = o.aTypedArray;
      (0, o.exportTypedArrayMethod)("indexOf", function indexOf(t) {
        return a(c(this), t, arguments.length > 1 ? arguments[1] : void 0);
      });
    },
    function (t, i, r) {
      "use strict";
      var o = r(11),
        a = r(9),
        c = r(10),
        l = r(22),
        u = r(140),
        h = r(19)("iterator"),
        d = o.Uint8Array,
        p = c(u.values),
        v = c(u.keys),
        g = c(u.entries),
        m = l.aTypedArray,
        y = l.exportTypedArrayMethod,
        b = d && d.prototype,
        _ = !a(function () {
          b[h].call([1]);
        }),
        w = !!b && b.values && b[h] === b.values && "values" === b.values.name,
        x = function values() {
          return p(m(this));
        };
      y(
        "entries",
        function entries() {
          return g(m(this));
        },
        _
      ),
        y(
          "keys",
          function keys() {
            return v(m(this));
          },
          _
        ),
        y("values", x, _ || !w, { name: "values" }),
        y(h, x, _ || !w, { name: "values" });
    },
    function (t, i, r) {
      "use strict";
      var o = r(22),
        a = r(10),
        c = o.aTypedArray,
        l = o.exportTypedArrayMethod,
        u = a([].join);
      l("join", function join(t) {
        return u(c(this), t);
      });
    },
    function (t, i, r) {
      "use strict";
      var o = r(22),
        a = r(64),
        c = r(281),
        l = o.aTypedArray;
      (0, o.exportTypedArrayMethod)("lastIndexOf", function lastIndexOf(t) {
        var i = arguments.length;
        return a(c, l(this), i > 1 ? [t, arguments[1]] : [t]);
      });
    },
    function (t, i, r) {
      "use strict";
      var o = r(22),
        a = r(31).map,
        c = r(154),
        l = o.aTypedArray;
      (0, o.exportTypedArrayMethod)("map", function map(t) {
        return a(
          l(this),
          t,
          arguments.length > 1 ? arguments[1] : void 0,
          function (t, i) {
            return new (c(t))(i);
          }
        );
      });
    },
    function (t, i, r) {
      "use strict";
      var o = r(22),
        a = r(222),
        c = o.aTypedArrayConstructor;
      (0, o.exportTypedArrayStaticMethod)(
        "of",
        function of() {
          for (var t = 0, i = arguments.length, r = new (c(this))(i); i > t; )
            r[t] = arguments[t++];
          return r;
        },
        a
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(22),
        a = r(141).left,
        c = o.aTypedArray;
      (0, o.exportTypedArrayMethod)("reduce", function reduce(t) {
        var i = arguments.length;
        return a(c(this), t, i, i > 1 ? arguments[1] : void 0);
      });
    },
    function (t, i, r) {
      "use strict";
      var o = r(22),
        a = r(141).right,
        c = o.aTypedArray;
      (0, o.exportTypedArrayMethod)("reduceRight", function reduceRight(t) {
        var i = arguments.length;
        return a(c(this), t, i, i > 1 ? arguments[1] : void 0);
      });
    },
    function (t, i, r) {
      "use strict";
      var o = r(22),
        a = o.aTypedArray,
        c = o.exportTypedArrayMethod,
        l = Math.floor;
      c("reverse", function reverse() {
        for (var t, i = a(this).length, r = l(i / 2), o = 0; o < r; )
          (t = this[o]), (this[o++] = this[--i]), (this[i] = t);
        return this;
      });
    },
    function (t, i, r) {
      "use strict";
      var o = r(11),
        a = r(20),
        c = r(22),
        l = r(29),
        u = r(308),
        h = r(26),
        d = r(9),
        p = o.RangeError,
        v = o.Int8Array,
        g = v && v.prototype,
        m = g && g.set,
        y = c.aTypedArray,
        b = c.exportTypedArrayMethod,
        _ = !d(function () {
          var t = new Uint8ClampedArray(2);
          return a(m, t, { length: 1, 0: 3 }, 1), 3 !== t[1];
        }),
        w =
          _ &&
          c.NATIVE_ARRAY_BUFFER_VIEWS &&
          d(function () {
            var t = new v(2);
            return t.set(1), t.set("2", 1), 0 !== t[0] || 2 !== t[1];
          });
      b(
        "set",
        function set(t) {
          y(this);
          var i = u(arguments.length > 1 ? arguments[1] : void 0, 1),
            r = h(t);
          if (_) return a(m, this, r, i);
          var o = this.length,
            c = l(r),
            d = 0;
          if (c + i > o) throw p("Wrong length");
          for (; d < c; ) this[i + d] = r[d++];
        },
        !_ || w
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(22),
        a = r(154),
        c = r(9),
        l = r(89),
        u = o.aTypedArray;
      (0, o.exportTypedArrayMethod)(
        "slice",
        function slice(t, i) {
          for (
            var r = l(u(this), t, i),
              o = a(this),
              c = 0,
              h = r.length,
              d = new o(h);
            h > c;

          )
            d[c] = r[c++];
          return d;
        },
        c(function () {
          new Int8Array(1).slice();
        })
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(22),
        a = r(31).some,
        c = o.aTypedArray;
      (0, o.exportTypedArrayMethod)("some", function some(t) {
        return a(c(this), t, arguments.length > 1 ? arguments[1] : void 0);
      });
    },
    function (t, i, r) {
      "use strict";
      var o = r(11),
        a = r(88),
        c = r(9),
        l = r(35),
        u = r(204),
        h = r(22),
        d = r(282),
        p = r(283),
        v = r(75),
        g = r(205),
        m = h.aTypedArray,
        y = h.exportTypedArrayMethod,
        b = o.Uint16Array,
        _ = b && a(b.prototype.sort),
        w = !(
          !_ ||
          (c(function () {
            _(new b(2), null);
          }) &&
            c(function () {
              _(new b(2), {});
            }))
        ),
        x =
          !!_ &&
          !c(function () {
            if (v) return v < 74;
            if (d) return d < 67;
            if (p) return !0;
            if (g) return g < 602;
            var t,
              i,
              r = new b(516),
              o = Array(516);
            for (t = 0; t < 516; t++)
              (i = t % 4), (r[t] = 515 - t), (o[t] = t - 2 * i + 3);
            for (
              _(r, function (t, i) {
                return ((t / 4) | 0) - ((i / 4) | 0);
              }),
                t = 0;
              t < 516;
              t++
            )
              if (r[t] !== o[t]) return !0;
          });
      y(
        "sort",
        function sort(t) {
          return (
            void 0 !== t && l(t),
            x
              ? _(this, t)
              : u(
                  m(this),
                  (function (t) {
                    return function (i, r) {
                      return void 0 !== t
                        ? +t(i, r) || 0
                        : r != r
                        ? -1
                        : i != i
                        ? 1
                        : 0 === i && 0 === r
                        ? 1 / i > 0 && 1 / r < 0
                          ? 1
                          : -1
                        : i > r;
                    };
                  })(t)
                )
          );
        },
        !x || w
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(22),
        a = r(48),
        c = r(68),
        l = r(154),
        u = o.aTypedArray;
      (0, o.exportTypedArrayMethod)("subarray", function subarray(t, i) {
        var r = u(this),
          o = r.length,
          h = c(t, o);
        return new (l(r))(
          r.buffer,
          r.byteOffset + h * r.BYTES_PER_ELEMENT,
          a((void 0 === i ? o : c(i, o)) - h)
        );
      });
    },
    function (t, i, r) {
      "use strict";
      var o = r(11),
        a = r(64),
        c = r(22),
        l = r(9),
        u = r(89),
        h = o.Int8Array,
        d = c.aTypedArray,
        p = c.exportTypedArrayMethod,
        v = [].toLocaleString,
        g =
          !!h &&
          l(function () {
            v.call(new h(1));
          });
      p(
        "toLocaleString",
        function toLocaleString() {
          return a(v, g ? u(d(this)) : d(this), u(arguments));
        },
        l(function () {
          return [1, 2].toLocaleString() != new h([1, 2]).toLocaleString();
        }) ||
          !l(function () {
            h.prototype.toLocaleString.call([1, 2]);
          })
      );
    },
    function (t, i, r) {
      "use strict";
      var o = r(22).exportTypedArrayMethod,
        a = r(9),
        c = r(11),
        l = r(10),
        u = c.Uint8Array,
        h = (u && u.prototype) || {},
        d = [].toString,
        p = l([].join);
      a(function () {
        d.call({});
      }) &&
        (d = function toString() {
          return p(this);
        });
      var v = h.toString != d;
      o("toString", d, v);
    },
    function (t, i, r) {
      r(614);
    },
    function (t, i, r) {
      "use strict";
      var o,
        a = r(11),
        c = r(10),
        l = r(119),
        u = r(91),
        h = r(143),
        d = r(311),
        p = r(18),
        v = r(144),
        g = r(37).enforce,
        m = r(265),
        y = !a.ActiveXObject && "ActiveXObject" in a,
        wrapper = function (t) {
          return function WeakMap() {
            return t(this, arguments.length ? arguments[0] : void 0);
          };
        },
        b = h("WeakMap", wrapper, d);
      if (m && y) {
        (o = d.getConstructor(wrapper, "WeakMap", !0)), u.enable();
        var _ = b.prototype,
          w = c(_.delete),
          x = c(_.has),
          S = c(_.get),
          k = c(_.set);
        l(_, {
          delete: function (t) {
            if (p(t) && !v(t)) {
              var i = g(this);
              return (
                i.frozen || (i.frozen = new o()),
                w(this, t) || i.frozen.delete(t)
              );
            }
            return w(this, t);
          },
          has: function has(t) {
            if (p(t) && !v(t)) {
              var i = g(this);
              return (
                i.frozen || (i.frozen = new o()), x(this, t) || i.frozen.has(t)
              );
            }
            return x(this, t);
          },
          get: function get(t) {
            if (p(t) && !v(t)) {
              var i = g(this);
              return (
                i.frozen || (i.frozen = new o()),
                x(this, t) ? S(this, t) : i.frozen.get(t)
              );
            }
            return S(this, t);
          },
          set: function set(t, i) {
            if (p(t) && !v(t)) {
              var r = g(this);
              r.frozen || (r.frozen = new o()),
                x(this, t) ? k(this, t, i) : r.frozen.set(t, i);
            } else k(this, t, i);
            return this;
          },
        });
      }
    },
    function (t, i, r) {
      r(616);
    },
    function (t, i, r) {
      "use strict";
      r(143)(
        "WeakSet",
        function (t) {
          return function WeakSet() {
            return t(this, arguments.length ? arguments[0] : void 0);
          };
        },
        r(311)
      );
    },
    function (t, i, r) {
      var o = r(11),
        a = r(312),
        c = r(313),
        l = r(275),
        u = r(61),
        handlePrototype = function (t) {
          if (t && t.forEach !== l)
            try {
              u(t, "forEach", l);
            } catch (i) {
              t.forEach = l;
            }
        };
      for (var h in a) a[h] && handlePrototype(o[h] && o[h].prototype);
      handlePrototype(c);
    },
    function (t, i, r) {
      var o = r(11),
        a = r(312),
        c = r(313),
        l = r(140),
        u = r(61),
        h = r(19),
        d = h("iterator"),
        p = h("toStringTag"),
        v = l.values,
        handlePrototype = function (t, i) {
          if (t) {
            if (t[d] !== v)
              try {
                u(t, d, v);
              } catch (i) {
                t[d] = v;
              }
            if ((t[p] || u(t, p, i), a[i]))
              for (var r in l)
                if (t[r] !== l[r])
                  try {
                    u(t, r, l[r]);
                  } catch (i) {
                    t[r] = l[r];
                  }
          }
        };
      for (var g in a) handlePrototype(o[g] && o[g].prototype, g);
      handlePrototype(c, "DOMTokenList");
    },
    function (t, i, r) {
      r(620), r(621);
    },
    function (t, i, r) {
      var o = r(6),
        a = r(11),
        c = r(149).clear;
      o(
        {
          global: !0,
          bind: !0,
          enumerable: !0,
          forced: a.clearImmediate !== c,
        },
        { clearImmediate: c }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(11),
        c = r(149).set;
      o(
        { global: !0, bind: !0, enumerable: !0, forced: a.setImmediate !== c },
        { setImmediate: c }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(11),
        c = r(294),
        l = r(35),
        u = r(122),
        h = r(90),
        d = a.process;
      o(
        { global: !0, enumerable: !0, dontCallGetSet: !0 },
        {
          queueMicrotask: function queueMicrotask(t) {
            u(arguments.length, 1), l(t);
            var i = h && d.domain;
            c(i ? i.bind(t) : t);
          },
        }
      );
    },
    function (t, i, r) {
      r(624), r(625);
    },
    function (t, i, r) {
      var o = r(6),
        a = r(11),
        c = r(314).setInterval;
      o(
        { global: !0, bind: !0, forced: a.setInterval !== c },
        { setInterval: c }
      );
    },
    function (t, i, r) {
      var o = r(6),
        a = r(11),
        c = r(314).setTimeout;
      o(
        { global: !0, bind: !0, forced: a.setTimeout !== c },
        { setTimeout: c }
      );
    },
    function (t, i, r) {
      r(627);
    },
    function (t, i, r) {
      "use strict";
      r(304);
      var o,
        a = r(6),
        c = r(14),
        l = r(315),
        u = r(11),
        h = r(63),
        d = r(10),
        p = r(28),
        v = r(303),
        g = r(81),
        m = r(23),
        y = r(290),
        b = r(276),
        _ = r(113),
        w = r(151).codeAt,
        x = r(628),
        S = r(27),
        k = r(53),
        T = r(122),
        E = r(316),
        O = r(37),
        I = O.set,
        C = O.getterFor("URL"),
        A = E.URLSearchParams,
        L = E.getState,
        P = u.URL,
        N = u.TypeError,
        R = u.parseInt,
        j = Math.floor,
        M = Math.pow,
        D = d("".charAt),
        q = d(/./.exec),
        V = d([].join),
        B = d((1).toString),
        z = d([].pop),
        H = d([].push),
        $ = d("".replace),
        W = d([].shift),
        G = d("".split),
        U = d("".slice),
        Z = d("".toLowerCase),
        X = d([].unshift),
        K = /[a-z]/i,
        Y = /[\d+-.a-z]/i,
        J = /\d/,
        Q = /^0x/i,
        tt = /^[0-7]+$/,
        et = /^\d+$/,
        it = /^[\da-f]+$/i,
        nt = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
        rt = /[\0\t\n\r #/:<>?@[\\\]^|]/,
        ot = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,
        at = /[\t\n\r]/g,
        serializeHost = function (t) {
          var i, r, o, a;
          if ("number" == typeof t) {
            for (i = [], r = 0; r < 4; r++) X(i, t % 256), (t = j(t / 256));
            return V(i, ".");
          }
          if ("object" == typeof t) {
            for (
              i = "",
                o = (function (t) {
                  for (var i = null, r = 1, o = null, a = 0, c = 0; c < 8; c++)
                    0 !== t[c]
                      ? (a > r && ((i = o), (r = a)), (o = null), (a = 0))
                      : (null === o && (o = c), ++a);
                  return a > r && ((i = o), (r = a)), i;
                })(t),
                r = 0;
              r < 8;
              r++
            )
              (a && 0 === t[r]) ||
                (a && (a = !1),
                o === r
                  ? ((i += r ? ":" : "::"), (a = !0))
                  : ((i += B(t[r], 16)), r < 7 && (i += ":")));
            return "[" + i + "]";
          }
          return t;
        },
        st = {},
        ct = y({}, st, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
        lt = y({}, ct, { "#": 1, "?": 1, "{": 1, "}": 1 }),
        ut = y({}, lt, {
          "/": 1,
          ":": 1,
          ";": 1,
          "=": 1,
          "@": 1,
          "[": 1,
          "\\": 1,
          "]": 1,
          "^": 1,
          "|": 1,
        }),
        percentEncode = function (t, i) {
          var r = w(t, 0);
          return r > 32 && r < 127 && !m(i, t) ? t : encodeURIComponent(t);
        },
        ht = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
        isWindowsDriveLetter = function (t, i) {
          var r;
          return (
            2 == t.length &&
            q(K, D(t, 0)) &&
            (":" == (r = D(t, 1)) || (!i && "|" == r))
          );
        },
        startsWithWindowsDriveLetter = function (t) {
          var i;
          return (
            t.length > 1 &&
            isWindowsDriveLetter(U(t, 0, 2)) &&
            (2 == t.length ||
              "/" === (i = D(t, 2)) ||
              "\\" === i ||
              "?" === i ||
              "#" === i)
          );
        },
        isSingleDot = function (t) {
          return "." === t || "%2e" === Z(t);
        },
        ft = {},
        dt = {},
        pt = {},
        vt = {},
        gt = {},
        mt = {},
        yt = {},
        bt = {},
        _t = {},
        wt = {},
        xt = {},
        St = {},
        kt = {},
        Tt = {},
        Et = {},
        Ot = {},
        It = {},
        Ct = {},
        At = {},
        Lt = {},
        Pt = {},
        URLState = function (t, i, r) {
          var o,
            a,
            c,
            l = S(t);
          if (i) {
            if ((a = this.parse(l))) throw N(a);
            this.searchParams = null;
          } else {
            if (
              (void 0 !== r && (o = new URLState(r, !0)),
              (a = this.parse(l, null, o)))
            )
              throw N(a);
            (c = L(new A())).bindURL(this), (this.searchParams = c);
          }
        };
      URLState.prototype = {
        type: "URL",
        parse: function (t, i, r) {
          var a,
            c,
            l,
            u,
            h,
            d = this,
            p = i || ft,
            v = 0,
            g = "",
            y = !1,
            w = !1,
            x = !1;
          for (
            t = S(t),
              i ||
                ((d.scheme = ""),
                (d.username = ""),
                (d.password = ""),
                (d.host = null),
                (d.port = null),
                (d.path = []),
                (d.query = null),
                (d.fragment = null),
                (d.cannotBeABaseURL = !1),
                (t = $(t, ot, ""))),
              t = $(t, at, ""),
              a = b(t);
            v <= a.length;

          ) {
            switch (((c = a[v]), p)) {
              case ft:
                if (!c || !q(K, c)) {
                  if (i) return "Invalid scheme";
                  p = pt;
                  continue;
                }
                (g += Z(c)), (p = dt);
                break;
              case dt:
                if (c && (q(Y, c) || "+" == c || "-" == c || "." == c))
                  g += Z(c);
                else {
                  if (":" != c) {
                    if (i) return "Invalid scheme";
                    (g = ""), (p = pt), (v = 0);
                    continue;
                  }
                  if (
                    i &&
                    (d.isSpecial() != m(ht, g) ||
                      ("file" == g &&
                        (d.includesCredentials() || null !== d.port)) ||
                      ("file" == d.scheme && !d.host))
                  )
                    return;
                  if (((d.scheme = g), i))
                    return void (
                      d.isSpecial() &&
                      ht[d.scheme] == d.port &&
                      (d.port = null)
                    );
                  (g = ""),
                    "file" == d.scheme
                      ? (p = Tt)
                      : d.isSpecial() && r && r.scheme == d.scheme
                      ? (p = vt)
                      : d.isSpecial()
                      ? (p = bt)
                      : "/" == a[v + 1]
                      ? ((p = gt), v++)
                      : ((d.cannotBeABaseURL = !0), H(d.path, ""), (p = At));
                }
                break;
              case pt:
                if (!r || (r.cannotBeABaseURL && "#" != c))
                  return "Invalid scheme";
                if (r.cannotBeABaseURL && "#" == c) {
                  (d.scheme = r.scheme),
                    (d.path = _(r.path)),
                    (d.query = r.query),
                    (d.fragment = ""),
                    (d.cannotBeABaseURL = !0),
                    (p = Pt);
                  break;
                }
                p = "file" == r.scheme ? Tt : mt;
                continue;
              case vt:
                if ("/" != c || "/" != a[v + 1]) {
                  p = mt;
                  continue;
                }
                (p = _t), v++;
                break;
              case gt:
                if ("/" == c) {
                  p = wt;
                  break;
                }
                p = Ct;
                continue;
              case mt:
                if (((d.scheme = r.scheme), c == o))
                  (d.username = r.username),
                    (d.password = r.password),
                    (d.host = r.host),
                    (d.port = r.port),
                    (d.path = _(r.path)),
                    (d.query = r.query);
                else if ("/" == c || ("\\" == c && d.isSpecial())) p = yt;
                else if ("?" == c)
                  (d.username = r.username),
                    (d.password = r.password),
                    (d.host = r.host),
                    (d.port = r.port),
                    (d.path = _(r.path)),
                    (d.query = ""),
                    (p = Lt);
                else {
                  if ("#" != c) {
                    (d.username = r.username),
                      (d.password = r.password),
                      (d.host = r.host),
                      (d.port = r.port),
                      (d.path = _(r.path)),
                      d.path.length--,
                      (p = Ct);
                    continue;
                  }
                  (d.username = r.username),
                    (d.password = r.password),
                    (d.host = r.host),
                    (d.port = r.port),
                    (d.path = _(r.path)),
                    (d.query = r.query),
                    (d.fragment = ""),
                    (p = Pt);
                }
                break;
              case yt:
                if (!d.isSpecial() || ("/" != c && "\\" != c)) {
                  if ("/" != c) {
                    (d.username = r.username),
                      (d.password = r.password),
                      (d.host = r.host),
                      (d.port = r.port),
                      (p = Ct);
                    continue;
                  }
                  p = wt;
                } else p = _t;
                break;
              case bt:
                if (((p = _t), "/" != c || "/" != D(g, v + 1))) continue;
                v++;
                break;
              case _t:
                if ("/" != c && "\\" != c) {
                  p = wt;
                  continue;
                }
                break;
              case wt:
                if ("@" == c) {
                  y && (g = "%40" + g), (y = !0), (l = b(g));
                  for (var k = 0; k < l.length; k++) {
                    var T = l[k];
                    if (":" != T || x) {
                      var E = percentEncode(T, ut);
                      x ? (d.password += E) : (d.username += E);
                    } else x = !0;
                  }
                  g = "";
                } else if (
                  c == o ||
                  "/" == c ||
                  "?" == c ||
                  "#" == c ||
                  ("\\" == c && d.isSpecial())
                ) {
                  if (y && "" == g) return "Invalid authority";
                  (v -= b(g).length + 1), (g = ""), (p = xt);
                } else g += c;
                break;
              case xt:
              case St:
                if (i && "file" == d.scheme) {
                  p = Ot;
                  continue;
                }
                if (":" != c || w) {
                  if (
                    c == o ||
                    "/" == c ||
                    "?" == c ||
                    "#" == c ||
                    ("\\" == c && d.isSpecial())
                  ) {
                    if (d.isSpecial() && "" == g) return "Invalid host";
                    if (
                      i &&
                      "" == g &&
                      (d.includesCredentials() || null !== d.port)
                    )
                      return;
                    if ((u = d.parseHost(g))) return u;
                    if (((g = ""), (p = It), i)) return;
                    continue;
                  }
                  "[" == c ? (w = !0) : "]" == c && (w = !1), (g += c);
                } else {
                  if ("" == g) return "Invalid host";
                  if ((u = d.parseHost(g))) return u;
                  if (((g = ""), (p = kt), i == St)) return;
                }
                break;
              case kt:
                if (!q(J, c)) {
                  if (
                    c == o ||
                    "/" == c ||
                    "?" == c ||
                    "#" == c ||
                    ("\\" == c && d.isSpecial()) ||
                    i
                  ) {
                    if ("" != g) {
                      var O = R(g, 10);
                      if (O > 65535) return "Invalid port";
                      (d.port = d.isSpecial() && O === ht[d.scheme] ? null : O),
                        (g = "");
                    }
                    if (i) return;
                    p = It;
                    continue;
                  }
                  return "Invalid port";
                }
                g += c;
                break;
              case Tt:
                if (((d.scheme = "file"), "/" == c || "\\" == c)) p = Et;
                else {
                  if (!r || "file" != r.scheme) {
                    p = Ct;
                    continue;
                  }
                  if (c == o)
                    (d.host = r.host),
                      (d.path = _(r.path)),
                      (d.query = r.query);
                  else if ("?" == c)
                    (d.host = r.host),
                      (d.path = _(r.path)),
                      (d.query = ""),
                      (p = Lt);
                  else {
                    if ("#" != c) {
                      startsWithWindowsDriveLetter(V(_(a, v), "")) ||
                        ((d.host = r.host),
                        (d.path = _(r.path)),
                        d.shortenPath()),
                        (p = Ct);
                      continue;
                    }
                    (d.host = r.host),
                      (d.path = _(r.path)),
                      (d.query = r.query),
                      (d.fragment = ""),
                      (p = Pt);
                  }
                }
                break;
              case Et:
                if ("/" == c || "\\" == c) {
                  p = Ot;
                  break;
                }
                r &&
                  "file" == r.scheme &&
                  !startsWithWindowsDriveLetter(V(_(a, v), "")) &&
                  (isWindowsDriveLetter(r.path[0], !0)
                    ? H(d.path, r.path[0])
                    : (d.host = r.host)),
                  (p = Ct);
                continue;
              case Ot:
                if (c == o || "/" == c || "\\" == c || "?" == c || "#" == c) {
                  if (!i && isWindowsDriveLetter(g)) p = Ct;
                  else if ("" == g) {
                    if (((d.host = ""), i)) return;
                    p = It;
                  } else {
                    if ((u = d.parseHost(g))) return u;
                    if (("localhost" == d.host && (d.host = ""), i)) return;
                    (g = ""), (p = It);
                  }
                  continue;
                }
                g += c;
                break;
              case It:
                if (d.isSpecial()) {
                  if (((p = Ct), "/" != c && "\\" != c)) continue;
                } else if (i || "?" != c)
                  if (i || "#" != c) {
                    if (c != o && ((p = Ct), "/" != c)) continue;
                  } else (d.fragment = ""), (p = Pt);
                else (d.query = ""), (p = Lt);
                break;
              case Ct:
                if (
                  c == o ||
                  "/" == c ||
                  ("\\" == c && d.isSpecial()) ||
                  (!i && ("?" == c || "#" == c))
                ) {
                  if (
                    (".." === (h = Z((h = g))) ||
                    "%2e." === h ||
                    ".%2e" === h ||
                    "%2e%2e" === h
                      ? (d.shortenPath(),
                        "/" == c ||
                          ("\\" == c && d.isSpecial()) ||
                          H(d.path, ""))
                      : isSingleDot(g)
                      ? "/" == c ||
                        ("\\" == c && d.isSpecial()) ||
                        H(d.path, "")
                      : ("file" == d.scheme &&
                          !d.path.length &&
                          isWindowsDriveLetter(g) &&
                          (d.host && (d.host = ""), (g = D(g, 0) + ":")),
                        H(d.path, g)),
                    (g = ""),
                    "file" == d.scheme && (c == o || "?" == c || "#" == c))
                  )
                    for (; d.path.length > 1 && "" === d.path[0]; ) W(d.path);
                  "?" == c
                    ? ((d.query = ""), (p = Lt))
                    : "#" == c && ((d.fragment = ""), (p = Pt));
                } else g += percentEncode(c, lt);
                break;
              case At:
                "?" == c
                  ? ((d.query = ""), (p = Lt))
                  : "#" == c
                  ? ((d.fragment = ""), (p = Pt))
                  : c != o && (d.path[0] += percentEncode(c, st));
                break;
              case Lt:
                i || "#" != c
                  ? c != o &&
                    ("'" == c && d.isSpecial()
                      ? (d.query += "%27")
                      : (d.query += "#" == c ? "%23" : percentEncode(c, st)))
                  : ((d.fragment = ""), (p = Pt));
                break;
              case Pt:
                c != o && (d.fragment += percentEncode(c, ct));
            }
            v++;
          }
        },
        parseHost: function (t) {
          var i, r, o;
          if ("[" == D(t, 0)) {
            if ("]" != D(t, t.length - 1)) return "Invalid host";
            if (
              !(i = (function (t) {
                var i,
                  r,
                  o,
                  a,
                  c,
                  l,
                  u,
                  h = [0, 0, 0, 0, 0, 0, 0, 0],
                  d = 0,
                  p = null,
                  v = 0,
                  chr = function () {
                    return D(t, v);
                  };
                if (":" == chr()) {
                  if (":" != D(t, 1)) return;
                  (v += 2), (p = ++d);
                }
                for (; chr(); ) {
                  if (8 == d) return;
                  if (":" != chr()) {
                    for (i = r = 0; r < 4 && q(it, chr()); )
                      (i = 16 * i + R(chr(), 16)), v++, r++;
                    if ("." == chr()) {
                      if (0 == r) return;
                      if (((v -= r), d > 6)) return;
                      for (o = 0; chr(); ) {
                        if (((a = null), o > 0)) {
                          if (!("." == chr() && o < 4)) return;
                          v++;
                        }
                        if (!q(J, chr())) return;
                        for (; q(J, chr()); ) {
                          if (((c = R(chr(), 10)), null === a)) a = c;
                          else {
                            if (0 == a) return;
                            a = 10 * a + c;
                          }
                          if (a > 255) return;
                          v++;
                        }
                        (h[d] = 256 * h[d] + a), (2 != ++o && 4 != o) || d++;
                      }
                      if (4 != o) return;
                      break;
                    }
                    if (":" == chr()) {
                      if ((v++, !chr())) return;
                    } else if (chr()) return;
                    h[d++] = i;
                  } else {
                    if (null !== p) return;
                    v++, (p = ++d);
                  }
                }
                if (null !== p)
                  for (l = d - p, d = 7; 0 != d && l > 0; )
                    (u = h[d]), (h[d--] = h[p + l - 1]), (h[p + --l] = u);
                else if (8 != d) return;
                return h;
              })(U(t, 1, -1)))
            )
              return "Invalid host";
            this.host = i;
          } else if (this.isSpecial()) {
            if (((t = x(t)), q(nt, t))) return "Invalid host";
            if (
              null ===
              (i = (function (t) {
                var i,
                  r,
                  o,
                  a,
                  c,
                  l,
                  u,
                  h = G(t, ".");
                if (
                  (h.length && "" == h[h.length - 1] && h.length--,
                  (i = h.length) > 4)
                )
                  return t;
                for (r = [], o = 0; o < i; o++) {
                  if ("" == (a = h[o])) return t;
                  if (
                    ((c = 10),
                    a.length > 1 &&
                      "0" == D(a, 0) &&
                      ((c = q(Q, a) ? 16 : 8), (a = U(a, 8 == c ? 1 : 2))),
                    "" === a)
                  )
                    l = 0;
                  else {
                    if (!q(10 == c ? et : 8 == c ? tt : it, a)) return t;
                    l = R(a, c);
                  }
                  H(r, l);
                }
                for (o = 0; o < i; o++)
                  if (((l = r[o]), o == i - 1)) {
                    if (l >= M(256, 5 - i)) return null;
                  } else if (l > 255) return null;
                for (u = z(r), o = 0; o < r.length; o++)
                  u += r[o] * M(256, 3 - o);
                return u;
              })(t))
            )
              return "Invalid host";
            this.host = i;
          } else {
            if (q(rt, t)) return "Invalid host";
            for (i = "", r = b(t), o = 0; o < r.length; o++)
              i += percentEncode(r[o], st);
            this.host = i;
          }
        },
        cannotHaveUsernamePasswordPort: function () {
          return !this.host || this.cannotBeABaseURL || "file" == this.scheme;
        },
        includesCredentials: function () {
          return "" != this.username || "" != this.password;
        },
        isSpecial: function () {
          return m(ht, this.scheme);
        },
        shortenPath: function () {
          var t = this.path,
            i = t.length;
          !i ||
            ("file" == this.scheme &&
              1 == i &&
              isWindowsDriveLetter(t[0], !0)) ||
            t.length--;
        },
        serialize: function () {
          var t = this,
            i = t.scheme,
            r = t.username,
            o = t.password,
            a = t.host,
            c = t.port,
            l = t.path,
            u = t.query,
            h = t.fragment,
            d = i + ":";
          return (
            null !== a
              ? ((d += "//"),
                t.includesCredentials() && (d += r + (o ? ":" + o : "") + "@"),
                (d += serializeHost(a)),
                null !== c && (d += ":" + c))
              : "file" == i && (d += "//"),
            (d += t.cannotBeABaseURL ? l[0] : l.length ? "/" + V(l, "/") : ""),
            null !== u && (d += "?" + u),
            null !== h && (d += "#" + h),
            d
          );
        },
        setHref: function (t) {
          var i = this.parse(t);
          if (i) throw N(i);
          this.searchParams.update();
        },
        getOrigin: function () {
          var t = this.scheme,
            i = this.port;
          if ("blob" == t)
            try {
              return new Nt(t.path[0]).origin;
            } catch (t) {
              return "null";
            }
          return "file" != t && this.isSpecial()
            ? t + "://" + serializeHost(this.host) + (null !== i ? ":" + i : "")
            : "null";
        },
        getProtocol: function () {
          return this.scheme + ":";
        },
        setProtocol: function (t) {
          this.parse(S(t) + ":", ft);
        },
        getUsername: function () {
          return this.username;
        },
        setUsername: function (t) {
          var i = b(S(t));
          if (!this.cannotHaveUsernamePasswordPort()) {
            this.username = "";
            for (var r = 0; r < i.length; r++)
              this.username += percentEncode(i[r], ut);
          }
        },
        getPassword: function () {
          return this.password;
        },
        setPassword: function (t) {
          var i = b(S(t));
          if (!this.cannotHaveUsernamePasswordPort()) {
            this.password = "";
            for (var r = 0; r < i.length; r++)
              this.password += percentEncode(i[r], ut);
          }
        },
        getHost: function () {
          var t = this.host,
            i = this.port;
          return null === t
            ? ""
            : null === i
            ? serializeHost(t)
            : serializeHost(t) + ":" + i;
        },
        setHost: function (t) {
          this.cannotBeABaseURL || this.parse(t, xt);
        },
        getHostname: function () {
          var t = this.host;
          return null === t ? "" : serializeHost(t);
        },
        setHostname: function (t) {
          this.cannotBeABaseURL || this.parse(t, St);
        },
        getPort: function () {
          var t = this.port;
          return null === t ? "" : S(t);
        },
        setPort: function (t) {
          this.cannotHaveUsernamePasswordPort() ||
            ("" == (t = S(t)) ? (this.port = null) : this.parse(t, kt));
        },
        getPathname: function () {
          var t = this.path;
          return this.cannotBeABaseURL ? t[0] : t.length ? "/" + V(t, "/") : "";
        },
        setPathname: function (t) {
          this.cannotBeABaseURL || ((this.path = []), this.parse(t, It));
        },
        getSearch: function () {
          var t = this.query;
          return t ? "?" + t : "";
        },
        setSearch: function (t) {
          "" == (t = S(t))
            ? (this.query = null)
            : ("?" == D(t, 0) && (t = U(t, 1)),
              (this.query = ""),
              this.parse(t, Lt)),
            this.searchParams.update();
        },
        getSearchParams: function () {
          return this.searchParams.facade;
        },
        getHash: function () {
          var t = this.fragment;
          return t ? "#" + t : "";
        },
        setHash: function (t) {
          "" != (t = S(t))
            ? ("#" == D(t, 0) && (t = U(t, 1)),
              (this.fragment = ""),
              this.parse(t, Pt))
            : (this.fragment = null);
        },
        update: function () {
          this.query = this.searchParams.serialize() || null;
        },
      };
      var Nt = function URL(t) {
          var i = g(this, Rt),
            r = T(arguments.length, 1) > 1 ? arguments[1] : void 0,
            o = I(i, new URLState(t, !1, r));
          c ||
            ((i.href = o.serialize()),
            (i.origin = o.getOrigin()),
            (i.protocol = o.getProtocol()),
            (i.username = o.getUsername()),
            (i.password = o.getPassword()),
            (i.host = o.getHost()),
            (i.hostname = o.getHostname()),
            (i.port = o.getPort()),
            (i.pathname = o.getPathname()),
            (i.search = o.getSearch()),
            (i.searchParams = o.getSearchParams()),
            (i.hash = o.getHash()));
        },
        Rt = Nt.prototype,
        accessorDescriptor = function (t, i) {
          return {
            get: function () {
              return C(this)[t]();
            },
            set:
              i &&
              function (t) {
                return C(this)[i](t);
              },
            configurable: !0,
            enumerable: !0,
          };
        };
      if (
        (c &&
          (v(Rt, "href", accessorDescriptor("serialize", "setHref")),
          v(Rt, "origin", accessorDescriptor("getOrigin")),
          v(Rt, "protocol", accessorDescriptor("getProtocol", "setProtocol")),
          v(Rt, "username", accessorDescriptor("getUsername", "setUsername")),
          v(Rt, "password", accessorDescriptor("getPassword", "setPassword")),
          v(Rt, "host", accessorDescriptor("getHost", "setHost")),
          v(Rt, "hostname", accessorDescriptor("getHostname", "setHostname")),
          v(Rt, "port", accessorDescriptor("getPort", "setPort")),
          v(Rt, "pathname", accessorDescriptor("getPathname", "setPathname")),
          v(Rt, "search", accessorDescriptor("getSearch", "setSearch")),
          v(Rt, "searchParams", accessorDescriptor("getSearchParams")),
          v(Rt, "hash", accessorDescriptor("getHash", "setHash"))),
        p(
          Rt,
          "toJSON",
          function toJSON() {
            return C(this).serialize();
          },
          { enumerable: !0 }
        ),
        p(
          Rt,
          "toString",
          function toString() {
            return C(this).serialize();
          },
          { enumerable: !0 }
        ),
        P)
      ) {
        var jt = P.createObjectURL,
          Mt = P.revokeObjectURL;
        jt && p(Nt, "createObjectURL", h(jt, P)),
          Mt && p(Nt, "revokeObjectURL", h(Mt, P));
      }
      k(Nt, "URL"),
        a({ global: !0, constructor: !0, forced: !l, sham: !c }, { URL: Nt });
    },
    function (t, i, r) {
      "use strict";
      var o = r(10),
        a = /[^\0-\u007E]/,
        c = /[.\u3002\uFF0E\uFF61]/g,
        l = "Overflow: input needs wider integers to process",
        u = RangeError,
        h = o(c.exec),
        d = Math.floor,
        p = String.fromCharCode,
        v = o("".charCodeAt),
        g = o([].join),
        m = o([].push),
        y = o("".replace),
        b = o("".split),
        _ = o("".toLowerCase),
        digitToBasic = function (t) {
          return t + 22 + 75 * (t < 26);
        },
        adapt = function (t, i, r) {
          var o = 0;
          for (t = r ? d(t / 700) : t >> 1, t += d(t / i); t > 455; )
            (t = d(t / 35)), (o += 36);
          return d(o + (36 * t) / (t + 38));
        },
        encode = function (t) {
          var i,
            r,
            o = [],
            a = (t = (function (t) {
              for (var i = [], r = 0, o = t.length; r < o; ) {
                var a = v(t, r++);
                if (a >= 55296 && a <= 56319 && r < o) {
                  var c = v(t, r++);
                  56320 == (64512 & c)
                    ? m(i, ((1023 & a) << 10) + (1023 & c) + 65536)
                    : (m(i, a), r--);
                } else m(i, a);
              }
              return i;
            })(t)).length,
            c = 128,
            h = 0,
            y = 72;
          for (i = 0; i < t.length; i++) (r = t[i]) < 128 && m(o, p(r));
          var b = o.length,
            _ = b;
          for (b && m(o, "-"); _ < a; ) {
            var w = 2147483647;
            for (i = 0; i < t.length; i++) (r = t[i]) >= c && r < w && (w = r);
            var x = _ + 1;
            if (w - c > d((2147483647 - h) / x)) throw u(l);
            for (h += (w - c) * x, c = w, i = 0; i < t.length; i++) {
              if ((r = t[i]) < c && ++h > 2147483647) throw u(l);
              if (r == c) {
                for (var S = h, k = 36; ; ) {
                  var T = k <= y ? 1 : k >= y + 26 ? 26 : k - y;
                  if (S < T) break;
                  var E = S - T,
                    O = 36 - T;
                  m(o, p(digitToBasic(T + (E % O)))), (S = d(E / O)), (k += 36);
                }
                m(o, p(digitToBasic(S))),
                  (y = adapt(h, x, _ == b)),
                  (h = 0),
                  _++;
              }
            }
            h++, c++;
          }
          return g(o, "");
        };
      t.exports = function (t) {
        var i,
          r,
          o = [],
          l = b(y(_(t), c, "."), ".");
        for (i = 0; i < l.length; i++)
          (r = l[i]), m(o, h(a, r) ? "xn--" + encode(r) : r);
        return g(o, ".");
      };
    },
    function (t, i, r) {
      "use strict";
      var o = r(6),
        a = r(20);
      o(
        { target: "URL", proto: !0, enumerable: !0 },
        {
          toJSON: function toJSON() {
            return a(URL.prototype.toString, this);
          },
        }
      );
    },
    function (t, i, r) {
      r(316);
    },
    function (t, i) {
      t.exports = function getParameterByName(t, i) {
        i || (i = window.location.href), (t = t.replace(/[\[\]]/g, "\\$&"));
        var r = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(i);
        return r
          ? r[2]
            ? decodeURIComponent(r[2].replace(/\+/g, " "))
            : ""
          : null;
      };
    },
    function (t, i, r) {
      var o = r(50);
      t.exports = function template(t) {
        var i = "",
          r = t || {};
        return (
          function (t, r) {
            i =
              i +
              '<div class="crossmark-reset crossmark-overlay"></div><div class="crossmark-reset crossmark-popup"><div' +
              o.attrs(
                o.merge([
                  { class: "crossmark-reset crossmark-popup__offset" },
                  { class: t ? "is-ios" : "" },
                ]),
                !0
              ) +
              '><div class="crossmark-reset crossmark-popup__inner"><div class="crossmark-reset crossmark-popup__header"><button class="crossmark-reset crossmark-popup__btn-close"><span class="sr-only">__("articleCrossmark.closePopup")</span></button></div><div class="crossmark-reset crossmark-popup__content-wrapper"><iframe class="crossmark-reset crossmark-popup__content" title="Crossmark service - Intentionally blank" aria-hidden="true"' +
              o.attr("src", r, !0, !0) +
              "></iframe></div></div></div></div>";
          }.call(
            this,
            "isIos" in r
              ? r.isIos
              : "undefined" != typeof isIos
              ? isIos
              : void 0,
            "query" in r
              ? r.query
              : "undefined" != typeof query
              ? query
              : void 0
          ),
          i
        );
      };
    },
    function (t, i, r) {
      var o = r(50);
      t.exports = function template(t) {
        var i,
          r = "",
          a = {},
          c = t || {};
        return (
          function (t, c, l, u, h, d, p, v, g, m, y) {
            (a.renderExternalLinks = i =
              function pug_interp(t) {
                this && this.block, this && this.attributes;
                (r += '<div class="external-links">'),
                  u.goTo.enable &&
                    ((r =
                      r +
                      "<a" +
                      (o.attr(
                        "class",
                        o.classes(
                          ["pill__to-original", u.goTo.classes],
                          [!1, !0]
                        ),
                        !1,
                        !0
                      ) +
                        o.attr("href", "#" + t.id, !0, !0)) +
                      ">"),
                    u.goTo.prependIcon
                      ? (u.goTo.icon &&
                          (r =
                            r +
                            "<i" +
                            o.attr(
                              "class",
                              o.classes([u.goTo.icon], [!0]),
                              !1,
                              !0
                            ) +
                            ' aria-hidden="true"></i>'),
                        (r =
                          r +
                          "<span>" +
                          o.escape(null == (i = u.goTo.text) ? "" : i) +
                          "</span>"))
                      : ((r =
                          r +
                          "<span>" +
                          o.escape(null == (i = u.goTo.text) ? "" : i) +
                          "</span>"),
                        u.goTo.icon &&
                          (r =
                            r +
                            "<i" +
                            o.attr(
                              "class",
                              o.classes([u.goTo.icon], [!0]),
                              !1,
                              !0
                            ) +
                            ' aria-hidden="true"></i>')),
                    (r += "</a>")),
                  u.inViewer.enable &&
                    ((r =
                      r +
                      "<a" +
                      (o.attr(
                        "class",
                        o.classes(
                          ["open-in-viewer", u.inViewer.classes],
                          [!1, !0]
                        ),
                        !1,
                        !0
                      ) +
                        o.attr("href", "#" + t.id, !0, !0)) +
                      ">"),
                    u.inViewer.prependIcon
                      ? (u.inViewer.icon &&
                          (r =
                            r +
                            "<i" +
                            o.attr(
                              "class",
                              o.classes([u.inViewer.icon], [!0]),
                              !1,
                              !0
                            ) +
                            ' aria-hidden="true"></i>'),
                        (r =
                          r +
                          "<span>" +
                          o.escape(null == (i = u.inViewer.text) ? "" : i) +
                          "</span>"))
                      : ((r =
                          r +
                          "<span>" +
                          o.escape(null == (i = u.inViewer.text) ? "" : i) +
                          "</span>"),
                        u.inViewer.icon &&
                          (r =
                            r +
                            "<i" +
                            o.attr(
                              "class",
                              o.classes([u.inViewer.icon], [!0]),
                              !1,
                              !0
                            ) +
                            ' aria-hidden="true"></i>')),
                    (r += "</a>")),
                  (r += "</div>");
              }),
              (a.renderData = i =
                function _pug_interp(t) {
                  this && this.block, this && this.attributes;
                  (r =
                    r +
                    "<div" +
                    (o.attr("class", o.classes([y], [!0]), !1, !0) +
                      o.attr("id", l + t.id, !0, !0)) +
                    ">"),
                    g && (r += null == (i = t.label) ? "" : i),
                    p && (r += null == (i = t.content) ? "" : i),
                    v && (r += null == (i = t.description) ? "" : i),
                    (r += "</div>");
                }),
              (a.renderFigure = i =
                function _pug_interp2(t) {
                  this && this.block, this && this.attributes;
                  (r = r + "<div" + o.attr("id", l + t.id, !0, !0) + ">"),
                    m &&
                      (r =
                        r +
                        "<div" +
                        o.attr("class", o.classes([y], [!0]), !1, !0) +
                        '><header><div class="label">' +
                        (null == (i = t.title) ? "" : i) +
                        "</div></header></div>"),
                    (r =
                      r +
                      "<figure" +
                      o.attr("class", o.classes([y], [!0]), !1, !0) +
                      ">"),
                    p &&
                      (h
                        ? (r =
                            r +
                            '<a class="open-in-viewer"' +
                            o.attr("href", "#" + t.id, !0, !0) +
                            ">" +
                            (null == (i = t.content) ? "" : i) +
                            "</a>")
                        : (r += null == (i = t.content) ? "" : i)),
                    v && (r += null == (i = t.description) ? "" : i),
                    (r += "</figure>"),
                    a.renderExternalLinks(t),
                    (r += "</div>");
                }),
              (a.renderOpenAll = i =
                function _pug_interp3() {
                  this && this.block, this && this.attributes;
                  u.openAll.enable &&
                    ((r =
                      r +
                      '<div class="text-right"><a' +
                      (o.attr(
                        "class",
                        o.classes([u.openAll.classes], [!0]),
                        !1,
                        !0
                      ) +
                        o.attr("href", u.openAll.href, !0, !0)) +
                      "><span>" +
                      o.escape(null == (i = u.openAll.text) ? "" : i) +
                      "</span>"),
                    u.openAll.icon &&
                      (r =
                        r +
                        "<i" +
                        o.attr(
                          "class",
                          o.classes([u.openAll.icon], [!0]),
                          !1,
                          !0
                        ) +
                        ' aria-hidden="true"></i>'),
                    (r += "</a></div>"));
                }),
              (a.populateData = i =
                function _pug_interp4() {
                  this && this.block, this && this.attributes;
                  a.renderOpenAll(),
                    function () {
                      var t = c;
                      if ("number" == typeof t.length)
                        for (var i = 0, r = t.length; i < r; i++) {
                          var o = t[i];
                          d ? a.renderFigure(o) : a.renderData(o);
                        }
                      else {
                        r = 0;
                        for (var i in t) {
                          r++;
                          o = t[i];
                          d ? a.renderFigure(o) : a.renderData(o);
                        }
                      }
                    }.call(this);
                }),
              t
                ? ((r += '<div class="section--wrapper">'),
                  a.populateData(),
                  (r += "</div>"))
                : a.populateData();
          }.call(
            this,
            "addWrapper" in c
              ? c.addWrapper
              : "undefined" != typeof addWrapper
              ? addWrapper
              : void 0,
            "figures" in c
              ? c.figures
              : "undefined" != typeof figures
              ? figures
              : void 0,
            "idPrefix" in c
              ? c.idPrefix
              : "undefined" != typeof idPrefix
              ? idPrefix
              : void 0,
            "links" in c
              ? c.links
              : "undefined" != typeof links
              ? links
              : void 0,
            "openInViewerFromFigure" in c
              ? c.openInViewerFromFigure
              : "undefined" != typeof openInViewerFromFigure
              ? openInViewerFromFigure
              : void 0,
            "renderFigure" in c
              ? c.renderFigure
              : "undefined" != typeof renderFigure
              ? renderFigure
              : void 0,
            "renderFigureContent" in c
              ? c.renderFigureContent
              : "undefined" != typeof renderFigureContent
              ? renderFigureContent
              : void 0,
            "renderFigureDescription" in c
              ? c.renderFigureDescription
              : "undefined" != typeof renderFigureDescription
              ? renderFigureDescription
              : void 0,
            "renderFigureLabel" in c
              ? c.renderFigureLabel
              : "undefined" != typeof renderFigureLabel
              ? renderFigureLabel
              : void 0,
            "renderTitle" in c
              ? c.renderTitle
              : "undefined" != typeof renderTitle
              ? renderTitle
              : void 0,
            "type" in c ? c.type : "undefined" != typeof type ? type : void 0
          ),
          r
        );
      };
    },
    function (t, i, r) {
      var o = r(50);
      t.exports = function template(t) {
        var i,
          r = "",
          a = t || {};
        return (
          function (t, a) {
            (function () {
              var c = a;
              if ("number" == typeof c.length)
                for (var l = 0, u = c.length; l < u; l++) {
                  var h = c[l];
                  (r =
                    r +
                    "<div" +
                    (o.attr(
                      "class",
                      o.classes(
                        ["tab__pane", "fv__list", "fv__list--" + l],
                        [!1, !1, !0]
                      ),
                      !1,
                      !0
                    ) +
                      o.attr("id", "tab-pane-" + l, !0, !0) +
                      o.attr("aria-labelledby", "#tabnav-" + l, !0, !0)) +
                    ">"),
                    function () {
                      var a = h;
                      if ("number" == typeof a.length)
                        for (var c = 0, u = a.length; c < u; c++) {
                          var d = a[c];
                          switch (((r += '<div class="fv__item">'), l)) {
                            case "tables":
                              r =
                                r +
                                '<a class="fv__open-item fv__item__view"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                '><i class="icon-tables"></i></a><div class="fv__item__title">' +
                                (null == (i = d.title) ? "" : i) +
                                '</div><div class="fv__item__description">' +
                                (null == (i = d.description) ? "" : i) +
                                "</div>";
                              break;
                            case "figures":
                              (r =
                                r +
                                '<a class="fv__open-item fv__item__view fv__fit"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                ">" +
                                (null == (i = d.content) ? "" : i)),
                                t &&
                                  (r =
                                    r +
                                    '<span class="fv__fit--overlay"><span>' +
                                    (null == (i = t) ? "" : i) +
                                    "</span></span>"),
                                (r =
                                  r +
                                  '</a><div class="fv__item__title">' +
                                  (null == (i = d.title) ? "" : i) +
                                  '</div><div class="fv__item__description">' +
                                  (null == (i = d.description) ? "" : i) +
                                  "</div>");
                              break;
                            case "others":
                              r =
                                r +
                                '<a class="fv__open-item fv__item__view"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                '><i class="icon-digital-object"></i></a><div class="fv__item__title">' +
                                (null == (i = d.title) ? "" : i) +
                                '</div><div class="fv__item__description">' +
                                (null == (i = d.description) ? "" : i) +
                                "</div>";
                          }
                          r += "</div>";
                        }
                      else {
                        u = 0;
                        for (var c in a) {
                          u++;
                          d = a[c];
                          switch (((r += '<div class="fv__item">'), l)) {
                            case "tables":
                              r =
                                r +
                                '<a class="fv__open-item fv__item__view"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                '><i class="icon-tables"></i></a><div class="fv__item__title">' +
                                (null == (i = d.title) ? "" : i) +
                                '</div><div class="fv__item__description">' +
                                (null == (i = d.description) ? "" : i) +
                                "</div>";
                              break;
                            case "figures":
                              (r =
                                r +
                                '<a class="fv__open-item fv__item__view fv__fit"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                ">" +
                                (null == (i = d.content) ? "" : i)),
                                t &&
                                  (r =
                                    r +
                                    '<span class="fv__fit--overlay"><span>' +
                                    (null == (i = t) ? "" : i) +
                                    "</span></span>"),
                                (r =
                                  r +
                                  '</a><div class="fv__item__title">' +
                                  (null == (i = d.title) ? "" : i) +
                                  '</div><div class="fv__item__description">' +
                                  (null == (i = d.description) ? "" : i) +
                                  "</div>");
                              break;
                            case "others":
                              r =
                                r +
                                '<a class="fv__open-item fv__item__view"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                '><i class="icon-digital-object"></i></a><div class="fv__item__title">' +
                                (null == (i = d.title) ? "" : i) +
                                '</div><div class="fv__item__description">' +
                                (null == (i = d.description) ? "" : i) +
                                "</div>";
                          }
                          r += "</div>";
                        }
                      }
                    }.call(this),
                    (r += "</div>");
                }
              else {
                u = 0;
                for (var l in c) {
                  u++;
                  h = c[l];
                  (r =
                    r +
                    "<div" +
                    (o.attr(
                      "class",
                      o.classes(
                        ["tab__pane", "fv__list", "fv__list--" + l],
                        [!1, !1, !0]
                      ),
                      !1,
                      !0
                    ) +
                      o.attr("id", "tab-pane-" + l, !0, !0) +
                      o.attr("aria-labelledby", "#tabnav-" + l, !0, !0)) +
                    ">"),
                    function () {
                      var a = h;
                      if ("number" == typeof a.length)
                        for (var c = 0, u = a.length; c < u; c++) {
                          var d = a[c];
                          switch (((r += '<div class="fv__item">'), l)) {
                            case "tables":
                              r =
                                r +
                                '<a class="fv__open-item fv__item__view"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                '><i class="icon-tables"></i></a><div class="fv__item__title">' +
                                (null == (i = d.title) ? "" : i) +
                                '</div><div class="fv__item__description">' +
                                (null == (i = d.description) ? "" : i) +
                                "</div>";
                              break;
                            case "figures":
                              (r =
                                r +
                                '<a class="fv__open-item fv__item__view fv__fit"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                ">" +
                                (null == (i = d.content) ? "" : i)),
                                t &&
                                  (r =
                                    r +
                                    '<span class="fv__fit--overlay"><span>' +
                                    (null == (i = t) ? "" : i) +
                                    "</span></span>"),
                                (r =
                                  r +
                                  '</a><div class="fv__item__title">' +
                                  (null == (i = d.title) ? "" : i) +
                                  '</div><div class="fv__item__description">' +
                                  (null == (i = d.description) ? "" : i) +
                                  "</div>");
                              break;
                            case "others":
                              r =
                                r +
                                '<a class="fv__open-item fv__item__view"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                '><i class="icon-digital-object"></i></a><div class="fv__item__title">' +
                                (null == (i = d.title) ? "" : i) +
                                '</div><div class="fv__item__description">' +
                                (null == (i = d.description) ? "" : i) +
                                "</div>";
                          }
                          r += "</div>";
                        }
                      else {
                        u = 0;
                        for (var c in a) {
                          u++;
                          d = a[c];
                          switch (((r += '<div class="fv__item">'), l)) {
                            case "tables":
                              r =
                                r +
                                '<a class="fv__open-item fv__item__view"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                '><i class="icon-tables"></i></a><div class="fv__item__title">' +
                                (null == (i = d.title) ? "" : i) +
                                '</div><div class="fv__item__description">' +
                                (null == (i = d.description) ? "" : i) +
                                "</div>";
                              break;
                            case "figures":
                              (r =
                                r +
                                '<a class="fv__open-item fv__item__view fv__fit"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                ">" +
                                (null == (i = d.content) ? "" : i)),
                                t &&
                                  (r =
                                    r +
                                    '<span class="fv__fit--overlay"><span>' +
                                    (null == (i = t) ? "" : i) +
                                    "</span></span>"),
                                (r =
                                  r +
                                  '</a><div class="fv__item__title">' +
                                  (null == (i = d.title) ? "" : i) +
                                  '</div><div class="fv__item__description">' +
                                  (null == (i = d.description) ? "" : i) +
                                  "</div>");
                              break;
                            case "others":
                              r =
                                r +
                                '<a class="fv__open-item fv__item__view"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                '><i class="icon-digital-object"></i></a><div class="fv__item__title">' +
                                (null == (i = d.title) ? "" : i) +
                                '</div><div class="fv__item__description">' +
                                (null == (i = d.description) ? "" : i) +
                                "</div>";
                          }
                          r += "</div>";
                        }
                      }
                    }.call(this),
                    (r += "</div>");
                }
              }
            }.call(this));
          }.call(
            this,
            "overlayText" in a
              ? a.overlayText
              : "undefined" != typeof overlayText
              ? overlayText
              : void 0,
            "types" in a
              ? a.types
              : "undefined" != typeof types
              ? types
              : void 0
          ),
          r
        );
      };
    },
    function (t, i, r) {
      var o = r(50);
      t.exports = function template(t) {
        var i,
          r = "",
          a = {},
          c = t || {};
        return (
          function (t, c) {
            var l = ["zoom", "back-to-original", "download", "share", "info"],
              u = {
                back: { srText: "data-sr-back", icon: "icon-go-to-original" },
                close: {
                  text: "data-text-close",
                  icon: "icon-arrow-long-left",
                },
                closeAlt: {
                  srText: "data-sr-closeAlt",
                  icon: "icon-subdirectory_arrow_left",
                },
                download: { srText: "data-sr-download", icon: "icon-download" },
                info: { srText: "data-sr-info", icon: "icon-info" },
                panel: { srText: "data-sr-panel", icon: "icon-close" },
                share: { srText: "data-sr-share", icon: "icon-share" },
                zoom: {
                  srText: "data-sr-zoom",
                  iconIn: "icon-zoom-in",
                  iconOut: "icon-zoom-out",
                },
                "nav-figures": { icon: "icon-photo", text: "data-nav-figures" },
                "nav-others": {
                  icon: "icon-digital-object",
                  text: "data-nav-others",
                },
                "nav-tables": { icon: "icon-tables", text: "data-nav-tables" },
                viewall: { icon: "icon-more-square", text: "data-viewall" },
              },
              h = {
                bg: "#f0f0f0",
                dx: 10,
                dy: -4,
                figures: "&#xe410;",
                others: "&#xe91b;",
                tables: "&#xe93d;",
              };
            (a.renderLinkContents = i =
              function pug_interp(t) {
                this && this.block, this && this.attributes;
                var i = u[t];
                i.srText &&
                  (r =
                    r +
                    '<span class="sr-only"' +
                    o.attr("data-sr", t, !0, !0) +
                    "></span>"),
                  i.icon &&
                    (r =
                      r +
                      "<i" +
                      o.attr("class", o.classes([i.icon], [!0]), !1, !0) +
                      ' aria-hidden="true"></i>'),
                  i.text &&
                    (r =
                      r +
                      "<span" +
                      o.attr("data-text", t, !0, !0) +
                      "></span>");
              }),
              (a.renderLink = i =
                function pug_interp(t, i) {
                  var c = this && this.block;
                  this && this.attributes;
                  i.href || (i.href = "#"),
                    (r =
                      r +
                      "<a" +
                      o.attrs(o.merge([{ "data-title": o.escape(t) }, i]), !0) +
                      ">"),
                    a.renderLinkContents(t),
                    c && c && c(),
                    (r += "</a>");
                }),
              (a["back-to-original"] = i =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  a.renderLink("back", { class: "fv__back-to-original" });
                }),
              (a["close-button"] = i =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  a.renderLink("closeAlt", { class: "fv__close" });
                }),
              (a.download = i =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  a.renderLink("download", {
                    class: "fv__download dropdown-icon",
                    download: "",
                  });
                }),
              (a.info = i =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  a.renderLink("info", { class: "fv__open-info" });
                }),
              (a.share = i =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  a.renderLink("share", { class: "fv__share" });
                }),
              (a.zoom = i =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  a.renderLink.call(
                    {
                      block: function block() {
                        r =
                          r +
                          "<i" +
                          o.attr(
                            "class",
                            o.classes([u.zoom.iconIn], [!0]),
                            !1,
                            !0
                          ) +
                          ' aria-hidden="true"></i><i' +
                          o.attr(
                            "class",
                            o.classes([u.zoom.iconOut], [!0]),
                            !1,
                            !0
                          ) +
                          ' aria-hidden="true"></i>';
                      },
                    },
                    "zoom",
                    { class: "fv__zoom hidden" }
                  );
                }),
              (a.toolbar = i =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  (r +=
                    '<div class="fv__toolbar"><a class="fv__close fv__toolbar__close" href="#">'),
                    a.renderLinkContents("close"),
                    (r +=
                      '</a><div class="fv__toolbar__info"></div><div class="fv__toolbar__holster">'),
                    function () {
                      var t = l;
                      if ("number" == typeof t.length)
                        for (var i = 0, r = t.length; i < r; i++) {
                          a[t[i]]();
                        }
                      else {
                        r = 0;
                        for (var i in t) {
                          r++, a[t[i]]();
                        }
                      }
                    }.call(this),
                    (r += "</div></div>");
                }),
              (a.slideshow = i =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  (r += '<div class="fv__slideshow__owl">'),
                    function () {
                      var a = t;
                      if ("number" == typeof a.length)
                        for (var c = 0, l = a.length; c < l; c++) {
                          var u = a[c];
                          r =
                            r +
                            '<figure class="fv__slideshow__item"' +
                            o.attr("id", u.id, !0, !0) +
                            o.attr("data-key", c, !0, !0) +
                            ">" +
                            (null == (i = u.content) ? "" : i) +
                            "</figure>";
                        }
                      else {
                        l = 0;
                        for (var c in a) {
                          l++;
                          u = a[c];
                          r =
                            r +
                            '<figure class="fv__slideshow__item"' +
                            o.attr("id", u.id, !0, !0) +
                            o.attr("data-key", c, !0, !0) +
                            ">" +
                            (null == (i = u.content) ? "" : i) +
                            "</figure>";
                        }
                      }
                    }.call(this),
                    (r += "</div>");
                }),
              (a.tongue = i =
                function _pug_interp() {
                  this && this.block, this && this.attributes;
                  r =
                    r +
                    '<a class="fv__slideshowNav__tongue" href="#"><svg width="207" height="42" viewBox="0 0 207 42"><path d="M12.8047 15.6552C15.3472 6.58442 23.4524 0 32.8728 0H173.948C183.449 0 191.605 6.70676 194.473 15.7651C197.306 24.7106 201.527 35.4036 207 42H0C4.49018 42 9.45851 27.5933 12.8047 15.6552Z"' +
                    o.attr("fill", h.bg, !0, !0) +
                    '></path><text x="50%" y="28" text-anchor="middle"><tspan class="icon-in-svg">' +
                    (null == (i = h[c]) ? "" : i) +
                    "</tspan><tspan" +
                    (o.attr("dx", h.dx, !0, !0) +
                      o.attr("dy", h.dy, !0, !0) +
                      o.attr("data-text", "nav-".concat(c), !0, !0)) +
                    "></tspan></text></svg></a>";
                }),
              (a.slideshowNav = i =
                function _pug_interp2() {
                  this && this.block, this && this.attributes;
                  (r += '<div class="fv__slideshowNav__owl">'),
                    function () {
                      var a = t;
                      if ("number" == typeof a.length)
                        for (var l = 0, u = a.length; l < u; l++) {
                          var h = a[l];
                          switch (
                            ((r =
                              r +
                              '<div class="fv__navItem"' +
                              o.attr("data-key", l, !0, !0) +
                              ' tabindex="0">'),
                            c)
                          ) {
                            case "figures":
                              r =
                                r +
                                '<div class="fv__navItem__cover fv__fit">' +
                                (null == (i = h.content) ? "" : i) +
                                "</div>";
                              break;
                            case "tables":
                              r +=
                                '<div class="fv__navItem__cover"><i class="icon-tables"></i></div>';
                              break;
                            case "others":
                              r +=
                                '<div class="fv__navItem__cover"><i class="icon-digital-object"></i></div>';
                          }
                          r =
                            r +
                            '<div class="fv__navItem__title">' +
                            (null == (i = h.title) ? "" : i) +
                            "</div></div>";
                        }
                      else {
                        u = 0;
                        for (var l in a) {
                          u++;
                          h = a[l];
                          switch (
                            ((r =
                              r +
                              '<div class="fv__navItem"' +
                              o.attr("data-key", l, !0, !0) +
                              ' tabindex="0">'),
                            c)
                          ) {
                            case "figures":
                              r =
                                r +
                                '<div class="fv__navItem__cover fv__fit">' +
                                (null == (i = h.content) ? "" : i) +
                                "</div>";
                              break;
                            case "tables":
                              r +=
                                '<div class="fv__navItem__cover"><i class="icon-tables"></i></div>';
                              break;
                            case "others":
                              r +=
                                '<div class="fv__navItem__cover"><i class="icon-digital-object"></i></div>';
                          }
                          r =
                            r +
                            '<div class="fv__navItem__title">' +
                            (null == (i = h.title) ? "" : i) +
                            "</div></div>";
                        }
                      }
                    }.call(this),
                    (r += "</div>");
                }),
              (a.goToDirectory = i =
                function _pug_interp3() {
                  this && this.block, this && this.attributes;
                  (r += '<a class="fv__slideshowNav__back" href="#">'),
                    a.renderLinkContents("nav-".concat(c)),
                    (r += "</a>");
                }),
              (r =
                r +
                "<div" +
                o.attr(
                  "class",
                  o.classes(["fv__lightbox", "fv__lightbox--" + c], [!1, !0]),
                  !1,
                  !0
                ) +
                ' id="fv__lightbox"' +
                o.attr("data-type", c, !0, !0) +
                ">"),
              t &&
                (a.toolbar(),
                (r += '<div class="fv__slideshow"><div class="owl-nav"></div>'),
                a.slideshow(),
                (r += '</div><div class="fv__slideshowNav js--hidden">'),
                a.tongue(),
                a.slideshowNav(),
                a.goToDirectory(),
                (r += "</div>")),
              (r += "</div>");
          }.call(
            this,
            "slides" in c
              ? c.slides
              : "undefined" != typeof slides
              ? slides
              : void 0,
            "type" in c ? c.type : "undefined" != typeof type ? type : void 0
          ),
          r
        );
      };
    },
    function (t, i, r) {
      var o = r(50);
      t.exports = function template(t) {
        var i,
          r = "",
          a = t || {};
        return (
          function (t) {
            (r += '<div class="thumbnail-container">'),
              function () {
                var a = t;
                if ("number" == typeof a.length)
                  for (var c = 0, l = a.length; c < l; c++) {
                    var u = a[c];
                    (r =
                      r +
                      '<div class="thumbnail-item"><button class="thumbnail"' +
                      o.attr("data-index", c, !0, !0) +
                      "><img" +
                      o.attr("src", u.src, !0, !0) +
                      "></button>"),
                      u.title &&
                        (r =
                          r +
                          "<span>" +
                          (null == (i = u.title) ? "" : i) +
                          "</span>"),
                      (r += "</div>");
                  }
                else {
                  l = 0;
                  for (var c in a) {
                    l++;
                    u = a[c];
                    (r =
                      r +
                      '<div class="thumbnail-item"><button class="thumbnail"' +
                      o.attr("data-index", c, !0, !0) +
                      "><img" +
                      o.attr("src", u.src, !0, !0) +
                      "></button>"),
                      u.title &&
                        (r =
                          r +
                          "<span>" +
                          (null == (i = u.title) ? "" : i) +
                          "</span>"),
                      (r += "</div>");
                  }
                }
              }.call(this),
              (r += "</div>");
          }.call(
            this,
            "images" in a
              ? a.images
              : "undefined" != typeof images
              ? images
              : void 0
          ),
          r
        );
      };
    },
    function (t, i, r) {
      var o = r(50);
      t.exports = function template(t) {
        var i,
          r = "",
          a = t || {};
        return (
          function (t, a) {
            (function () {
              var c = a;
              if ("number" == typeof c.length)
                for (var l = 0, u = c.length; l < u; l++) {
                  var h = c[l];
                  (r =
                    r +
                    "<div" +
                    (o.attr(
                      "class",
                      o.classes(
                        ["tab__pane", "fv__list", "fv__list--" + l],
                        [!1, !1, !0]
                      ),
                      !1,
                      !0
                    ) +
                      o.attr("id", "tab-pane-" + l, !0, !0) +
                      o.attr("aria-labelledby", "#tabnav-" + l, !0, !0)) +
                    ">"),
                    function () {
                      var a = h;
                      if ("number" == typeof a.length)
                        for (var c = 0, u = a.length; c < u; c++) {
                          var d = a[c];
                          switch (((r += '<div class="fv__item">'), l)) {
                            case "tables":
                              r =
                                r +
                                '<a class="fv__open-item fv__item__view"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                '><i class="icon-table"></i></a><div class="fv__item__title">' +
                                (null == (i = d.title) ? "" : i) +
                                '</div><div class="fv__item__description">' +
                                (null == (i = d.description) ? "" : i) +
                                "</div>";
                              break;
                            case "figures":
                              (r =
                                r +
                                '<a class="fv__open-item fv__item__view fv__fit"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                ">" +
                                (null == (i = d.content) ? "" : i)),
                                t &&
                                  (r =
                                    r +
                                    '<span class="fv__fit--overlay"><span>' +
                                    (null == (i = t) ? "" : i) +
                                    "</span></span>"),
                                (r =
                                  r +
                                  '</a><div class="fv__item__title">' +
                                  (null == (i = d.title) ? "" : i) +
                                  '</div><div class="fv__item__description">' +
                                  (null == (i = d.description) ? "" : i) +
                                  "</div>");
                              break;
                            case "others":
                              r =
                                r +
                                '<a class="fv__open-item fv__item__view"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                '><i class="icon-digital-object"></i></a><div class="fv__item__title">' +
                                (null == (i = d.title) ? "" : i) +
                                '</div><div class="fv__item__description">' +
                                (null == (i = d.description) ? "" : i) +
                                "</div>";
                          }
                          r += "</div>";
                        }
                      else {
                        u = 0;
                        for (var c in a) {
                          u++;
                          d = a[c];
                          switch (((r += '<div class="fv__item">'), l)) {
                            case "tables":
                              r =
                                r +
                                '<a class="fv__open-item fv__item__view"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                '><i class="icon-table"></i></a><div class="fv__item__title">' +
                                (null == (i = d.title) ? "" : i) +
                                '</div><div class="fv__item__description">' +
                                (null == (i = d.description) ? "" : i) +
                                "</div>";
                              break;
                            case "figures":
                              (r =
                                r +
                                '<a class="fv__open-item fv__item__view fv__fit"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                ">" +
                                (null == (i = d.content) ? "" : i)),
                                t &&
                                  (r =
                                    r +
                                    '<span class="fv__fit--overlay"><span>' +
                                    (null == (i = t) ? "" : i) +
                                    "</span></span>"),
                                (r =
                                  r +
                                  '</a><div class="fv__item__title">' +
                                  (null == (i = d.title) ? "" : i) +
                                  '</div><div class="fv__item__description">' +
                                  (null == (i = d.description) ? "" : i) +
                                  "</div>");
                              break;
                            case "others":
                              r =
                                r +
                                '<a class="fv__open-item fv__item__view"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                '><i class="icon-digital-object"></i></a><div class="fv__item__title">' +
                                (null == (i = d.title) ? "" : i) +
                                '</div><div class="fv__item__description">' +
                                (null == (i = d.description) ? "" : i) +
                                "</div>";
                          }
                          r += "</div>";
                        }
                      }
                    }.call(this),
                    (r += "</div>");
                }
              else {
                u = 0;
                for (var l in c) {
                  u++;
                  h = c[l];
                  (r =
                    r +
                    "<div" +
                    (o.attr(
                      "class",
                      o.classes(
                        ["tab__pane", "fv__list", "fv__list--" + l],
                        [!1, !1, !0]
                      ),
                      !1,
                      !0
                    ) +
                      o.attr("id", "tab-pane-" + l, !0, !0) +
                      o.attr("aria-labelledby", "#tabnav-" + l, !0, !0)) +
                    ">"),
                    function () {
                      var a = h;
                      if ("number" == typeof a.length)
                        for (var c = 0, u = a.length; c < u; c++) {
                          var d = a[c];
                          switch (((r += '<div class="fv__item">'), l)) {
                            case "tables":
                              r =
                                r +
                                '<a class="fv__open-item fv__item__view"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                '><i class="icon-table"></i></a><div class="fv__item__title">' +
                                (null == (i = d.title) ? "" : i) +
                                '</div><div class="fv__item__description">' +
                                (null == (i = d.description) ? "" : i) +
                                "</div>";
                              break;
                            case "figures":
                              (r =
                                r +
                                '<a class="fv__open-item fv__item__view fv__fit"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                ">" +
                                (null == (i = d.content) ? "" : i)),
                                t &&
                                  (r =
                                    r +
                                    '<span class="fv__fit--overlay"><span>' +
                                    (null == (i = t) ? "" : i) +
                                    "</span></span>"),
                                (r =
                                  r +
                                  '</a><div class="fv__item__title">' +
                                  (null == (i = d.title) ? "" : i) +
                                  '</div><div class="fv__item__description">' +
                                  (null == (i = d.description) ? "" : i) +
                                  "</div>");
                              break;
                            case "others":
                              r =
                                r +
                                '<a class="fv__open-item fv__item__view"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                '><i class="icon-digital-object"></i></a><div class="fv__item__title">' +
                                (null == (i = d.title) ? "" : i) +
                                '</div><div class="fv__item__description">' +
                                (null == (i = d.description) ? "" : i) +
                                "</div>";
                          }
                          r += "</div>";
                        }
                      else {
                        u = 0;
                        for (var c in a) {
                          u++;
                          d = a[c];
                          switch (((r += '<div class="fv__item">'), l)) {
                            case "tables":
                              r =
                                r +
                                '<a class="fv__open-item fv__item__view"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                '><i class="icon-table"></i></a><div class="fv__item__title">' +
                                (null == (i = d.title) ? "" : i) +
                                '</div><div class="fv__item__description">' +
                                (null == (i = d.description) ? "" : i) +
                                "</div>";
                              break;
                            case "figures":
                              (r =
                                r +
                                '<a class="fv__open-item fv__item__view fv__fit"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                ">" +
                                (null == (i = d.content) ? "" : i)),
                                t &&
                                  (r =
                                    r +
                                    '<span class="fv__fit--overlay"><span>' +
                                    (null == (i = t) ? "" : i) +
                                    "</span></span>"),
                                (r =
                                  r +
                                  '</a><div class="fv__item__title">' +
                                  (null == (i = d.title) ? "" : i) +
                                  '</div><div class="fv__item__description">' +
                                  (null == (i = d.description) ? "" : i) +
                                  "</div>");
                              break;
                            case "others":
                              r =
                                r +
                                '<a class="fv__open-item fv__item__view"' +
                                o.attr("href", "#" + d.id, !0, !0) +
                                o.attr("data-type", l, !0, !0) +
                                '><i class="icon-digital-object"></i></a><div class="fv__item__title">' +
                                (null == (i = d.title) ? "" : i) +
                                '</div><div class="fv__item__description">' +
                                (null == (i = d.description) ? "" : i) +
                                "</div>";
                          }
                          r += "</div>";
                        }
                      }
                    }.call(this),
                    (r += "</div>");
                }
              }
            }.call(this));
          }.call(
            this,
            "overlayText" in a
              ? a.overlayText
              : "undefined" != typeof overlayText
              ? overlayText
              : void 0,
            "types" in a
              ? a.types
              : "undefined" != typeof types
              ? types
              : void 0
          ),
          r
        );
      };
    },
    function (t, i, r) {
      var o = r(50);
      t.exports = function template(t) {
        var i,
          r = "",
          a = {},
          c = t || {};
        return (
          function (t, c, l) {
            var u = ["zoom", "back-to-original", "download", "share", "info"],
              h = {
                back: { srText: "data-sr-back", icon: "icon-go-to-original" },
                close: {
                  text: "data-text-close",
                  icon: "icon-arrow-long-left",
                },
                closeAlt: {
                  srText: "data-sr-closeAlt",
                  icon: "icon-subdirectory_arrow_left",
                },
                download: { srText: "data-sr-download", icon: "icon-download" },
                info: { srText: "data-sr-info", icon: "icon-info" },
                panel: { srText: "data-sr-panel", icon: "icon-close" },
                share: { srText: "data-sr-share", icon: "icon-share" },
                zoom: {
                  srText: "data-sr-zoom",
                  iconIn: "icon-zoom-in",
                  iconOut: "icon-zoom-out",
                },
                "nav-figures": { icon: "icon-photo", text: "data-nav-figures" },
                "nav-others": {
                  icon: "icon-digital-object",
                  text: "data-nav-others",
                },
                "nav-tables": { icon: "icon-tables", text: "data-nav-tables" },
                viewall: { icon: "icon-more-square", text: "data-viewall" },
              };
            (h = t.assign({}, h, {
              back: { srText: "data-sr-back", icon: "icon-figure-in-text-1" },
              close: { text: "data-text-close", icon: "icon-arrow-left" },
            })),
              (a.renderLinkContents = i =
                function pug_interp(t) {
                  this && this.block, this && this.attributes;
                  var i = h[t];
                  i.srText &&
                    (r =
                      r +
                      '<span class="sr-only"' +
                      o.attr("data-sr", t, !0, !0) +
                      "></span>"),
                    i.icon &&
                      (r =
                        r +
                        "<i" +
                        o.attr("class", o.classes([i.icon], [!0]), !1, !0) +
                        ' aria-hidden="true"></i>'),
                    i.text &&
                      (r =
                        r +
                        "<span" +
                        o.attr("data-text", t, !0, !0) +
                        "></span>");
                }),
              (a.renderLink = i =
                function pug_interp(t, i) {
                  var c = this && this.block;
                  this && this.attributes;
                  i.href || (i.href = "#"),
                    (r =
                      r +
                      "<a" +
                      o.attrs(o.merge([{ "data-title": o.escape(t) }, i]), !0) +
                      ">"),
                    a.renderLinkContents(t),
                    c && c && c(),
                    (r += "</a>");
                }),
              (a["back-to-original"] = i =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  a.renderLink("back", { class: "fv__back-to-original" });
                }),
              (a["close-button"] = i =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  a.renderLink("closeAlt", { class: "fv__close" });
                }),
              (a.download = i =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  a.renderLink("download", {
                    class: "fv__download dropdown-icon",
                    download: "",
                  });
                }),
              (a.info = i =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  a.renderLink("info", { class: "fv__open-info" });
                }),
              (a.share = i =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  a.renderLink("share", { class: "fv__share" });
                }),
              (a.zoom = i =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  a.renderLink.call(
                    {
                      block: function block() {
                        r =
                          r +
                          "<i" +
                          o.attr(
                            "class",
                            o.classes([h.zoom.iconIn], [!0]),
                            !1,
                            !0
                          ) +
                          ' aria-hidden="true"></i><i' +
                          o.attr(
                            "class",
                            o.classes([h.zoom.iconOut], [!0]),
                            !1,
                            !0
                          ) +
                          ' aria-hidden="true"></i>';
                      },
                    },
                    "zoom",
                    { class: "fv__zoom hidden" }
                  );
                }),
              (a.toolbar = i =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  (r +=
                    '<div class="fv__toolbar"><a class="fv__close fv__toolbar__close" href="#">'),
                    a.renderLinkContents("close"),
                    (r +=
                      '</a><div class="fv__toolbar__info"></div><div class="fv__toolbar__holster">'),
                    function () {
                      var t = u;
                      if ("number" == typeof t.length)
                        for (var i = 0, r = t.length; i < r; i++) {
                          a[t[i]]();
                        }
                      else {
                        r = 0;
                        for (var i in t) {
                          r++, a[t[i]]();
                        }
                      }
                    }.call(this),
                    (r += "</div></div>");
                }),
              (a.slideshow = i =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  (r += '<div class="fv__slideshow__owl">'),
                    function () {
                      var t = c;
                      if ("number" == typeof t.length)
                        for (var a = 0, l = t.length; a < l; a++) {
                          var u = t[a];
                          r =
                            r +
                            '<figure class="fv__slideshow__item"' +
                            o.attr("id", u.id, !0, !0) +
                            o.attr("data-key", a, !0, !0) +
                            ">" +
                            (null == (i = u.content) ? "" : i) +
                            "</figure>";
                        }
                      else {
                        l = 0;
                        for (var a in t) {
                          l++;
                          u = t[a];
                          r =
                            r +
                            '<figure class="fv__slideshow__item"' +
                            o.attr("id", u.id, !0, !0) +
                            o.attr("data-key", a, !0, !0) +
                            ">" +
                            (null == (i = u.content) ? "" : i) +
                            "</figure>";
                        }
                      }
                    }.call(this),
                    (r += "</div>");
                }),
              (a.tongue = i =
                function _pug_interp() {
                  this && this.block, this && this.attributes;
                  r =
                    r +
                    '<a class="fv__slideshowNav__tongue" href="#"><i class="icon-arrow-down"></i><span' +
                    o.attr("data-text", "nav-".concat(l), !0, !0) +
                    "></span></a>";
                }),
              (a.slideshowNav = i =
                function _pug_interp() {
                  this && this.block, this && this.attributes;
                  (r += '<div class="fv__slideshowNav__owl">'),
                    function () {
                      var t = c;
                      if ("number" == typeof t.length)
                        for (var a = 0, u = t.length; a < u; a++) {
                          var h = t[a];
                          switch (
                            ((r =
                              r +
                              '<div class="fv__navItem"' +
                              o.attr("data-key", a, !0, !0) +
                              ' tabindex="0">'),
                            l)
                          ) {
                            case "figures":
                              r =
                                r +
                                '<div class="fv__navItem__cover fv__fit">' +
                                (null == (i = h.content) ? "" : i) +
                                "</div>";
                              break;
                            case "tables":
                              r +=
                                '<div class="fv__navItem__cover"><i class="icon-table"></i></div>';
                              break;
                            case "others":
                              r +=
                                '<div class="fv__navItem__cover"><i class="icon-digital-object"></i></div>';
                          }
                          r =
                            r +
                            '<div class="fv__navItem__title">' +
                            (null == (i = h.title) ? "" : i) +
                            "</div></div>";
                        }
                      else {
                        u = 0;
                        for (var a in t) {
                          u++;
                          h = t[a];
                          switch (
                            ((r =
                              r +
                              '<div class="fv__navItem"' +
                              o.attr("data-key", a, !0, !0) +
                              ' tabindex="0">'),
                            l)
                          ) {
                            case "figures":
                              r =
                                r +
                                '<div class="fv__navItem__cover fv__fit">' +
                                (null == (i = h.content) ? "" : i) +
                                "</div>";
                              break;
                            case "tables":
                              r +=
                                '<div class="fv__navItem__cover"><i class="icon-table"></i></div>';
                              break;
                            case "others":
                              r +=
                                '<div class="fv__navItem__cover"><i class="icon-digital-object"></i></div>';
                          }
                          r =
                            r +
                            '<div class="fv__navItem__title">' +
                            (null == (i = h.title) ? "" : i) +
                            "</div></div>";
                        }
                      }
                    }.call(this),
                    (r += "</div>");
                }),
              (a.goToDirectory = i =
                function _pug_interp2() {
                  this && this.block, this && this.attributes;
                  (r +=
                    '<a class="fv__slideshowNav__back btn btn-primary" href="#">'),
                    a.renderLinkContents("viewall"),
                    (r += "</a>");
                }),
              (r =
                r +
                "<div" +
                o.attr(
                  "class",
                  o.classes(["fv__lightbox", "fv__lightbox--" + l], [!1, !0]),
                  !1,
                  !0
                ) +
                ' id="fv__lightbox"' +
                o.attr("data-type", l, !0, !0) +
                ">"),
              c &&
                (a.toolbar(),
                (r += '<div class="fv__slideshow"><div class="owl-nav"></div>'),
                a.slideshow(),
                (r += '</div><div class="fv__slideshowNav js--hidden">'),
                a.tongue(),
                a.slideshowNav(),
                a.goToDirectory(),
                (r += "</div>")),
              (r += "</div>");
          }.call(
            this,
            "Object" in c
              ? c.Object
              : "undefined" != typeof Object
              ? Object
              : void 0,
            "slides" in c
              ? c.slides
              : "undefined" != typeof slides
              ? slides
              : void 0,
            "type" in c ? c.type : "undefined" != typeof type ? type : void 0
          ),
          r
        );
      };
    },
    ,
    function (t, i, r) {
      "use strict";
      r.r(i),
        r.d(i, "ImageViewer", function () {
          return m;
        }),
        r.d(i, "FullScreenViewer", function () {
          return O;
        });
      var o = r(33),
        a = r.n(o),
        c = r(12),
        l = r.n(c),
        u = r(1),
        h = r.n(u),
        d = r(2),
        p = r.n(d);
      function noop() {}
      function easeOutQuart(t, i, r, o) {
        return (t /= o), -r * ((t -= 1) * t * t * t - 1) + i;
      }
      function createElement(t) {
        var i = document.createElement(t.tagName);
        return (
          t.id && (i.id = t.id),
          t.html && (i.innerHTML = t.html),
          t.className && (i.className = t.className),
          t.src && (i.src = t.src),
          t.style && (i.style.cssText = t.style),
          t.child && i.appendChild(t.child),
          t.insertBefore
            ? t.parent.insertBefore(i, t.insertBefore)
            : t.parent.appendChild(i),
          i
        );
      }
      function imageLoaded(t) {
        return (
          t.complete && (void 0 === t.naturalWidth || 0 !== t.naturalWidth)
        );
      }
      function toArray(t) {
        return t instanceof NodeList || t instanceof HTMLCollection
          ? Array.prototype.slice.call(t)
          : [t];
      }
      function css(t, i) {
        var r = toArray(t);
        if ("string" == typeof i) return window.getComputedStyle(r[0])[i];
        r.forEach(function (t) {
          Object.keys(i).forEach(function (r) {
            var o = i[r];
            t.style[r] = o;
          });
        });
      }
      function removeCss(t, i) {
        t.style.removeProperty(i);
      }
      function remove(t) {
        toArray(t).forEach(function (t) {
          t.parentNode.removeChild(t);
        });
      }
      function clamp(t, i, r) {
        return Math.min(Math.max(t, i), r);
      }
      function assignEvent(t, i, r) {
        return (
          "string" == typeof i && (i = [i]),
          i.forEach(function (i) {
            t.addEventListener(i, r);
          }),
          function () {
            i.forEach(function (i) {
              t.removeEventListener(i, r);
            });
          }
        );
      }
      function getTouchPointsDistance(t) {
        var i = t[0],
          r = t[1];
        return Math.sqrt(
          Math.pow(r.pageX - i.pageX, 2) + Math.pow(r.pageY - i.pageY, 2)
        );
      }
      var v = (function () {
        function Slider(t, i) {
          var r = this,
            o = i.onStart,
            a = i.onMove,
            c = i.onEnd,
            l = i.isSliderEnabled;
          h()(this, Slider),
            (this.startHandler = function (t) {
              if (r.isSliderEnabled()) {
                r.removeListeners(), t.preventDefault();
                var i = r.moveHandler,
                  o = r.endHandler,
                  a = r.onStart,
                  c = "touchstart" === t.type || "touchend" === t.type;
                (r.touchMoveEvent = c ? "touchmove" : "mousemove"),
                  (r.touchEndEvent = c ? "touchend" : "mouseup"),
                  (r.sx = c ? t.touches[0].clientX : t.clientX),
                  (r.sy = c ? t.touches[0].clientY : t.clientY),
                  a(t, { x: r.sx, y: r.sy }),
                  document.addEventListener(r.touchMoveEvent, i),
                  document.addEventListener(r.touchEndEvent, o),
                  document.addEventListener("contextmenu", o);
              }
            }),
            (this.moveHandler = function (t) {
              if (r.isSliderEnabled()) {
                t.preventDefault();
                var i = r.sx,
                  o = r.sy,
                  a = r.onMove,
                  c = "touchmove" === r.touchMoveEvent,
                  l = c ? t.touches[0].clientX : t.clientX,
                  u = c ? t.touches[0].clientY : t.clientY;
                a(t, { dx: l - i, dy: u - o, mx: l, my: u });
              }
            }),
            (this.endHandler = function () {
              r.isSliderEnabled() && (r.removeListeners(), r.onEnd());
            }),
            (this.container = t),
            (this.isSliderEnabled = l),
            (this.onStart = o || noop),
            (this.onMove = a || noop),
            (this.onEnd = c || noop);
        }
        return (
          p()(Slider, [
            {
              key: "removeListeners",
              value: function removeListeners() {
                this.touchMoveEvent &&
                  (document.removeEventListener(
                    this.touchMoveEvent,
                    this.moveHandler
                  ),
                  document.removeEventListener(
                    this.touchEndEvent,
                    this.endHandler
                  ),
                  document.removeEventListener("contextmenu", this.endHandler));
              },
            },
            {
              key: "init",
              value: function init() {
                var t = this;
                ["touchstart", "mousedown"].forEach(function (i) {
                  t.container.addEventListener(i, t.startHandler);
                });
              },
            },
            {
              key: "destroy",
              value: function destroy() {
                var t = this;
                ["touchstart", "mousedown"].forEach(function (i) {
                  t.container.removeEventListener(i, t.startHandler);
                }),
                  this.removeListeners();
              },
            },
          ]),
          Slider
        );
      })();
      function ownKeys(t, i) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          i &&
            (o = o.filter(function (i) {
              return Object.getOwnPropertyDescriptor(t, i).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function _objectSpread(t) {
        for (var i = 1; i < arguments.length; i++) {
          var r = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(r), !0).forEach(function (i) {
                l()(t, i, r[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (i) {
                Object.defineProperty(
                  t,
                  i,
                  Object.getOwnPropertyDescriptor(r, i)
                );
              });
        }
        return t;
      }
      var g = (function () {
        function ImageViewer(t) {
          var i = this,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          h()(this, ImageViewer),
            (this.zoom = function (t, r) {
              var o = i._options,
                a = i._elements,
                c = i._state,
                l = c.zoomValue,
                u = c.imageDim,
                h = c.containerDim,
                d = c.zoomSliderLength,
                p = a.image,
                v = a.zoomHandle,
                g = o.maxZoom;
              (t = Math.round(Math.max(100, t))),
                (t = Math.min(g, t)),
                (r = r || { x: h.w / 2, y: h.h / 2 });
              var m = parseFloat(css(p, "left")),
                y = parseFloat(css(p, "top"));
              i._clearFrames();
              var b = 0,
                _ = (h.w - u.w) / 2,
                w = (h.h - u.h) / 2,
                x = h.w - _,
                S = h.h - w;
              !(function zoom() {
                ++b < 16 && (i._frames.zoomFrame = requestAnimationFrame(zoom));
                var o = easeOutQuart(b, l, t - l, 16),
                  a = o / l,
                  c = (u.w * o) / 100,
                  h = (u.h * o) / 100,
                  k = -((r.x - m) * a - r.x),
                  T = -((r.y - y) * a - r.y);
                (k = Math.min(k, _)),
                  (T = Math.min(T, w)),
                  k + c < x && (k = x - c),
                  T + h < S && (T = S - h),
                  css(p, {
                    height: "".concat(h, "px"),
                    width: "".concat(c, "px"),
                    left: "".concat(k, "px"),
                    top: "".concat(T, "px"),
                  }),
                  (i._state.zoomValue = o),
                  i._resizeSnapHandle(c, h, k, T),
                  css(v, {
                    left: "".concat(((o - 100) * d) / (g - 100), "px"),
                  }),
                  i._listeners.onZoomChange &&
                    i._listeners.onZoomChange(i._callbackData);
              })();
            }),
            (this._clearFrames = function () {
              var t = i._frames,
                r = t.slideMomentumCheck,
                o = t.sliderMomentumFrame,
                a = t.zoomFrame;
              clearInterval(r),
                cancelAnimationFrame(o),
                cancelAnimationFrame(a);
            }),
            (this._resizeSnapHandle = function (t, r, o, a) {
              var c = i._elements,
                l = i._state,
                u = c.snapHandle,
                h = c.image,
                d = l.imageDim,
                p = l.containerDim,
                v = l.zoomValue,
                g = l.snapImageDim,
                m = t || (d.w * v) / 100,
                y = r || (d.h * v) / 100,
                b = o || parseFloat(css(h, "left")),
                _ = a || parseFloat(css(h, "top")),
                w = (-b * g.w) / m,
                x = (-_ * g.h) / y,
                S = (p.w * g.w) / m,
                k = (p.h * g.h) / y;
              css(u, {
                top: "".concat(x, "px"),
                left: "".concat(w, "px"),
                width: "".concat(S, "px"),
                height: "".concat(k, "px"),
              }),
                (i._state.snapHandleDim = { w: S, h: k });
            }),
            (this.showSnapView = function (t) {
              var r = i._state,
                o = r.snapViewVisible,
                a = r.zoomValue,
                c = r.loaded,
                l = i._elements.snapView;
              i._options.snapView &&
                (o ||
                  a <= 100 ||
                  !c ||
                  (clearTimeout(i._frames.snapViewTimeout),
                  (i._state.snapViewVisible = !0),
                  css(l, { opacity: 1, pointerEvents: "inherit" }),
                  t ||
                    (i._frames.snapViewTimeout = setTimeout(
                      i.hideSnapView,
                      1500
                    ))));
            }),
            (this.hideSnapView = function () {
              css(i._elements.snapView, { opacity: 0, pointerEvents: "none" }),
                (i._state.snapViewVisible = !1);
            }),
            (this.refresh = function () {
              i._calculateDimensions(), i.resetZoom();
            });
          var o = this._findContainerAndImageSrc(t, r),
            a = o.container,
            c = o.domElement,
            l = o.imageSrc,
            u = o.hiResImageSrc;
          (this._elements = { container: a, domElement: c }),
            (this._options = _objectSpread(
              _objectSpread({}, ImageViewer.defaults),
              r
            )),
            (this._events = {}),
            (this._listeners = this._options.listeners || {}),
            (this._frames = {}),
            (this._sliders = {}),
            (this._state = { zoomValue: this._options.zoomValue }),
            (this._images = { imageSrc: l, hiResImageSrc: u }),
            this._init(),
            l && this._loadImages(),
            (this.toolbarHeight = 0),
            (c._imageViewer = this);
        }
        return (
          p()(ImageViewer, [
            {
              key: "zoomInButton",
              get: function get() {
                return this._options.hasZoomButtons
                  ? '<div class="iv-button-zoom--in" role="button"></div>'
                  : "";
              },
            },
            {
              key: "zoomOutButton",
              get: function get() {
                return this._options.hasZoomButtons
                  ? '<div class="iv-button-zoom--out" role="button"></div>'
                  : "";
              },
            },
            {
              key: "imageViewHtml",
              get: function get() {
                return '\n    <div class="iv-loader"></div>\n    <div class="iv-snap-view">\n      <div class="iv-snap-image-wrap">\n        <div class="iv-snap-handle"></div>\n      </div>\n      <div class="iv-zoom-actions '
                  .concat(
                    this._options.hasZoomButtons
                      ? "iv-zoom-actions--has-buttons"
                      : "",
                    '">\n        '
                  )
                  .concat(
                    this.zoomInButton,
                    '\n        <div class="iv-zoom-slider">\n          <div class="iv-zoom-handle"></div>\n        </div>\n        '
                  )
                  .concat(
                    this.zoomOutButton,
                    '\n      </div>\n    </div>\n    <div class="iv-image-view" >\n      <div class="iv-image-wrap" ></div>\n    </div>\n  '
                  );
              },
            },
            {
              key: "_findContainerAndImageSrc",
              value: function _findContainerAndImageSrc(t) {
                var i,
                  r,
                  o = t;
                if (
                  ("string" == typeof t && (o = document.querySelector(t)),
                  o._imageViewer)
                )
                  throw new Error(
                    "An image viewer is already being initiated on the element."
                  );
                var a = t;
                if ("IMG" === o.tagName) {
                  (i = o.src),
                    (r =
                      o.getAttribute("high-res-src") ||
                      o.getAttribute("data-high-res-src"));
                  var c = o.classList.contains("js--hidden")
                    ? "iv-container iv-image-mode js--hidden"
                    : "iv-container iv-image-mode";
                  (a = (function wrap(t, i) {
                    var r = i.tag,
                      o = void 0 === r ? "div" : r,
                      a = i.className,
                      c = i.id,
                      l = i.style,
                      u = document.createElement(o);
                    return (
                      a && (u.className = a),
                      c && (u.id = c),
                      l && (u.style = l),
                      t.parentNode.insertBefore(u, t),
                      t.parentNode.removeChild(t),
                      u.appendChild(t),
                      u
                    );
                  })(o, {
                    className: c,
                    style: { display: "inline-block", overflow: "hidden" },
                  })),
                    css(o, { opacity: 0, position: "relative", zIndex: -1 });
                } else
                  (i = o.getAttribute("src") || o.getAttribute("data-src")),
                    (r =
                      o.getAttribute("high-res-src") ||
                      o.getAttribute("data-high-res-src"));
                return {
                  container: a,
                  domElement: o,
                  imageSrc: i,
                  hiResImageSrc: r,
                };
              },
            },
            {
              key: "_init",
              value: function _init() {
                this._initDom(),
                  this._initImageSlider(),
                  this._initSnapSlider(),
                  this._initZoomSlider(),
                  this._pinchAndZoom(),
                  this._scrollZoom(),
                  this._doubleTapToZoom(),
                  this._initEvents();
              },
            },
            {
              key: "_initDom",
              value: function _initDom() {
                var t = this._elements.container;
                createElement({
                  tagName: "div",
                  className: "iv-wrap",
                  html: this.imageViewHtml,
                  parent: t,
                }),
                  (function addClass(t, i) {
                    var r = i.split(" ");
                    r.length > 1
                      ? r.forEach(function (i) {
                          return addClass(t, i);
                        })
                      : t.classList
                      ? t.classList.add(i)
                      : (t.className += " ".concat(i));
                  })(t, "iv-container"),
                  "static" === css(t, "position") &&
                    css(t, { position: "relative" }),
                  (this._elements = _objectSpread(
                    _objectSpread({}, this._elements),
                    {},
                    {
                      snapView: t.querySelector(".iv-snap-view"),
                      snapImageWrap: t.querySelector(".iv-snap-image-wrap"),
                      imageWrap: t.querySelector(".iv-image-wrap"),
                      snapHandle: t.querySelector(".iv-snap-handle"),
                      zoomHandle: t.querySelector(".iv-zoom-handle"),
                      zoomIn: t.querySelector(".iv-button-zoom--in"),
                      zoomOut: t.querySelector(".iv-button-zoom--out"),
                    }
                  )),
                  this._listeners.onInit &&
                    this._listeners.onInit(this._callbackData);
              },
            },
            {
              key: "_initImageSlider",
              value: function _initImageSlider() {
                var t,
                  i,
                  r = this,
                  o = this._elements.imageWrap,
                  a = new v(o, {
                    isSliderEnabled: function isSliderEnabled() {
                      var t = r._state,
                        i = t.loaded,
                        o = t.zooming,
                        a = t.zoomValue;
                      return i && !o && a > 100;
                    },
                    onStart: function onStart(o, a) {
                      var c = r._sliders.snapSlider;
                      r._clearFrames(),
                        c.onStart(),
                        (t = [a, a]),
                        (i = void 0),
                        (r._frames.slideMomentumCheck = setInterval(
                          function () {
                            i && (t.shift(), t.push({ x: i.mx, y: i.my }));
                          },
                          50
                        ));
                    },
                    onMove: function onMove(t, o) {
                      var a = r._state.snapImageDim,
                        c = r._sliders.snapSlider,
                        l = r._getImageCurrentDim();
                      (i = o),
                        c.onMove(t, {
                          dx: (-o.dx * a.w) / l.w,
                          dy: (-o.dy * a.h) / l.h,
                        });
                    },
                    onEnd: function onEnd() {
                      var o,
                        a,
                        c,
                        l = r._state.snapImageDim,
                        u = r._sliders.snapSlider,
                        h = r._getImageCurrentDim();
                      r._clearFrames();
                      var d = t[1].x - t[0].x,
                        p = t[1].y - t[0].y;
                      (Math.abs(d) > 30 || Math.abs(p) > 30) &&
                        ((o = 1),
                        (a = i.dx),
                        (c = i.dy),
                        (function momentum() {
                          o <= 60 &&
                            (r._frames.sliderMomentumFrame =
                              requestAnimationFrame(momentum)),
                            (a += easeOutQuart(o, d / 3, -d / 3, 60)),
                            (c += easeOutQuart(o, p / 3, -p / 3, 60)),
                            u.onMove(null, {
                              dx: (-a * l.w) / h.w,
                              dy: (-c * l.h) / h.h,
                            }),
                            o++;
                        })());
                    },
                  });
                a.init(), (this._sliders.imageSlider = a);
              },
            },
            {
              key: "_initSnapSlider",
              value: function _initSnapSlider() {
                var t,
                  i,
                  r = this,
                  o = this._elements.snapHandle,
                  a = new v(o, {
                    isSliderEnabled: function isSliderEnabled() {
                      return r._state.loaded;
                    },
                    onStart: function onStart() {
                      var a = r._frames,
                        c = a.slideMomentumCheck,
                        l = a.sliderMomentumFrame;
                      (t = parseFloat(css(o, "top"))),
                        (i = parseFloat(css(o, "left"))),
                        clearInterval(c),
                        cancelAnimationFrame(l);
                    },
                    onMove: function onMove(a, c) {
                      var l = r._state,
                        u = l.snapHandleDim,
                        h = l.snapImageDim,
                        d = r._elements.image,
                        p = r._getImageCurrentDim(),
                        v = Math.max(h.w - u.w, i),
                        g = Math.max(h.h - u.h, t),
                        m = Math.min(0, i),
                        y = Math.min(0, t),
                        b = clamp(i + c.dx, m, v),
                        _ = clamp(t + c.dy, y, g),
                        w = (-b * p.w) / h.w,
                        x = (-_ * p.h) / h.h;
                      css(o, {
                        left: "".concat(b, "px"),
                        top: "".concat(_, "px"),
                      }),
                        css(d, {
                          left: "".concat(w, "px"),
                          top: "".concat(x, "px"),
                        });
                    },
                  });
                a.init(), (this._sliders.snapSlider = a);
              },
            },
            {
              key: "_initZoomSlider",
              value: function _initZoomSlider() {
                var t,
                  i,
                  r = this,
                  o = this._elements,
                  a = o.snapView,
                  c = o.zoomHandle,
                  l = a.querySelector(".iv-zoom-slider"),
                  u = new v(l, {
                    isSliderEnabled: function isSliderEnabled() {
                      return r._state.loaded;
                    },
                    onStart: function onStart(o) {
                      var a = r._sliders.zoomSlider;
                      (t =
                        l.getBoundingClientRect().left +
                        document.body.scrollLeft),
                        (i = parseInt(css(c, "width"), 10)),
                        a.onMove(o);
                    },
                    onMove: function onMove(o) {
                      var a = r._options.maxZoom,
                        c = r._state.zoomSliderLength,
                        l =
                          100 +
                          ((a - 100) *
                            clamp(
                              (void 0 !== o.pageX
                                ? o.pageX
                                : o.touches[0].pageX) -
                                t -
                                i / 2,
                              0,
                              c
                            )) /
                            c;
                      r.zoom(l);
                    },
                  });
                u.init(), (this._sliders.zoomSlider = u);
              },
            },
            {
              key: "_initEvents",
              value: function _initEvents() {
                this._snapViewEvents(),
                  this._options.refreshOnResize &&
                    (this._events.onWindowResize = assignEvent(
                      window,
                      "resize",
                      this.refresh
                    ));
              },
            },
            {
              key: "_snapViewEvents",
              value: function _snapViewEvents() {
                var t = this,
                  i = this._elements,
                  r = i.imageWrap,
                  o = i.snapView;
                if (
                  ((this._events.snapViewOnMouseMove = assignEvent(
                    r,
                    ["touchmove", "mousemove"],
                    function () {
                      t.showSnapView();
                    }
                  )),
                  (this._events.mouseEnterSnapView = assignEvent(
                    o,
                    ["mouseenter", "touchstart"],
                    function () {
                      (t._state.snapViewVisible = !1), t.showSnapView(!0);
                    }
                  )),
                  (this._events.mouseLeaveSnapView = assignEvent(
                    o,
                    ["mouseleave", "touchend"],
                    function () {
                      (t._state.snapViewVisible = !1), t.showSnapView();
                    }
                  )),
                  this._options.hasZoomButtons)
                ) {
                  var a = this._elements,
                    c = a.zoomOut,
                    l = a.zoomIn;
                  (this._events.zoomInClick = assignEvent(
                    l,
                    ["click"],
                    function () {
                      t.zoom(t._state.zoomValue + t._options.zoomStep || 50);
                    }
                  )),
                    (this._events.zoomOutClick = assignEvent(
                      c,
                      ["click"],
                      function () {
                        t.zoom(t._state.zoomValue - t._options.zoomStep || 50);
                      }
                    ));
                }
              },
            },
            {
              key: "_pinchAndZoom",
              value: function _pinchAndZoom() {
                var t = this,
                  i = this._elements,
                  r = i.imageWrap,
                  o = i.container;
                this._events.pinchStart = assignEvent(
                  r,
                  "touchstart",
                  function onPinchStart(i) {
                    var r = t._state,
                      a = r.loaded,
                      c = r.zoomValue,
                      l = t._events;
                    if (a) {
                      var u = i.touches[0],
                        h = i.touches[1];
                      if (u && h) {
                        t._state.zooming = !0;
                        var d = o.getBoundingClientRect(),
                          p = getTouchPointsDistance(i.touches),
                          v = {
                            x:
                              (h.pageX + u.pageX) / 2 -
                              (d.left + document.body.scrollLeft),
                            y:
                              (h.pageY + u.pageY) / 2 -
                              (d.top + document.body.scrollTop),
                          };
                        l.pinchMove && l.pinchMove(),
                          l.pinchEnd && l.pinchEnd(),
                          (l.pinchMove = assignEvent(
                            document,
                            "touchmove",
                            function moveListener(i) {
                              var r = getTouchPointsDistance(i.touches),
                                o = c + (r - p) / 2;
                              t.zoom(o, v);
                            }
                          )),
                          (l.pinchEnd = assignEvent(
                            document,
                            "touchend",
                            function endListener(i) {
                              l.pinchMove(),
                                l.pinchEnd(),
                                (t._state.zooming = !1),
                                1 === i.touches.length &&
                                  t._sliders.imageSlider.startHandler(i);
                            }
                          ));
                      }
                    }
                  }
                );
              },
            },
            {
              key: "_scrollZoom",
              value: function _scrollZoom() {
                var t = this,
                  i = this._options,
                  r = this._elements,
                  o = r.container,
                  a = r.imageWrap,
                  c = 0;
                this._ev = assignEvent(a, "wheel", function onMouseWheel(r) {
                  var a = t._state,
                    l = a.loaded,
                    u = a.zoomValue;
                  if (i.zoomOnMouseWheel && l) {
                    t._clearFrames();
                    var h = Math.max(
                        -1,
                        Math.min(1, r.wheelDelta || -r.detail || -r.deltaY)
                      ),
                      d = (u * (100 + 15 * h)) / 100;
                    if (
                      (d >= 100 && d <= i.maxZoom
                        ? (c = 0)
                        : (c += Math.abs(h)),
                      r.preventDefault(),
                      !(c > 5))
                    ) {
                      var p = o.getBoundingClientRect(),
                        v =
                          (r.pageX || r.pageX) -
                          (p.left + document.body.scrollLeft),
                        g =
                          (r.pageY || r.pageY) -
                          (p.top + document.body.scrollTop);
                      t.zoom(d, { x: v, y: g }), t.showSnapView();
                    }
                  }
                });
              },
            },
            {
              key: "_doubleTapToZoom",
              value: function _doubleTapToZoom() {
                var t,
                  i = this,
                  r = this._elements.imageWrap,
                  o = 0;
                assignEvent(r, "click", function onDoubleTap(r) {
                  0 === o
                    ? ((o = Date.now()), (t = { x: r.pageX, y: r.pageY }))
                    : Date.now() - o < 500 &&
                      Math.abs(r.pageX - t.x) < 50 &&
                      Math.abs(r.pageY - t.y) < 50
                    ? (i._state.zoomValue === i._options.zoomValue
                        ? i.zoom(200)
                        : i.resetZoom(),
                      (o = 0))
                    : (o = 0);
                });
              },
            },
            {
              key: "_getImageCurrentDim",
              value: function _getImageCurrentDim() {
                var t = this._state,
                  i = t.zoomValue,
                  r = t.imageDim;
                return { w: r.w * (i / 100), h: r.h * (i / 100) };
              },
            },
            {
              key: "_loadImages",
              value: function _loadImages() {
                var t = this,
                  i = this._images,
                  r = this._elements,
                  o = i.imageSrc,
                  a = i.hiResImageSrc,
                  c = r.container,
                  l = r.snapImageWrap,
                  u = r.imageWrap,
                  h = c.querySelector(".iv-loader");
                remove(c.querySelectorAll(".iv-snap-image, .iv-image"));
                var d = createElement({
                    tagName: "img",
                    className: "iv-snap-image",
                    src: o,
                    insertBefore: l.firstChild,
                    parent: l,
                  }),
                  p = createElement({
                    tagName: "img",
                    className: "iv-image iv-small-image",
                    src: o,
                    parent: u,
                  });
                (this._state.loaded = !1),
                  (this._elements.image = p),
                  (this._elements.snapImage = d),
                  css(h, { display: "block" }),
                  css(p, { visibility: "hidden" }),
                  this.hideSnapView();
                var v = function onImageLoad() {
                  css(h, { display: "none" }),
                    css(p, { visibility: "visible" }),
                    a && t._loadHighResImage(a),
                    (t._state.loaded = !0),
                    t._calculateDimensions(),
                    t._listeners.onImageLoad &&
                      t._listeners.onImageLoaded(t._callbackData),
                    t.resetZoom();
                };
                imageLoaded(p)
                  ? v()
                  : (this._events.imageLoad = assignEvent(p, "load", v));
              },
            },
            {
              key: "_loadHighResImage",
              value: function _loadHighResImage(t) {
                var i = this,
                  r = this._elements,
                  o = r.imageWrap,
                  a = r.container,
                  c = this._elements.image,
                  l = createElement({
                    tagName: "img",
                    className: "iv-image iv-large-image",
                    src: t,
                    parent: o,
                    style: c.style.cssText,
                  });
                (l.style.cssText = c.style.cssText),
                  (this._elements.image = a.querySelectorAll(".iv-image"));
                var u = function onHighResImageLoad() {
                  remove(c), (i._elements.image = l);
                };
                imageLoaded(l)
                  ? u()
                  : (this._events.hiResImageLoad = assignEvent(l, "load", u));
              },
            },
            {
              key: "_calculateDimensions",
              value: function _calculateDimensions() {
                var t = this._elements,
                  i = t.image,
                  r = t.container,
                  o = t.snapView,
                  a = t.snapImage,
                  c = t.zoomHandle,
                  l = t.domElement,
                  u = l.naturalWidth,
                  h = l.naturalHeight;
                try {
                  this.toolbarHeight = parseFloat(
                    css(
                      $(r).parents(".fv__lightbox").find(".fv__toolbar")[0],
                      "height"
                    )
                  );
                } catch (t) {
                  console.error("ImageViewer - toolbar height calculation:", t);
                }
                var d,
                  p,
                  v = parseInt(css(r, "width"), 10),
                  g = parseInt(css(r, "height"), 10) - this.toolbarHeight,
                  m = o.clientWidth,
                  y = o.clientHeight;
                this._state.containerDim = { w: v, h: g };
                var b = u / h;
                (p = (d = (u > h && g >= v) || b * g > v ? v : b * g) / b),
                  l.getAttribute("height") &&
                    l.naturalHeight < p &&
                    ((d = l.naturalWidth), (p = l.naturalHeight)),
                  (this._state.imageDim = { w: d, h: p }),
                  css(i, {
                    width: "".concat(d, "px"),
                    height: "".concat(p, "px"),
                    left: "".concat((v - d) / 2, "px"),
                    top: "".concat((g - p) / 2, "px"),
                    maxWidth: "none",
                    maxHeight: "none",
                  });
                var _ = d > p ? m : (d * y) / p,
                  w = p > d ? y : (p * m) / d;
                (this._state.snapImageDim = { w: _, h: w }),
                  css(a, {
                    width: "".concat(_, "px"),
                    height: "".concat(w, "px"),
                  });
                var x = o.querySelector(".iv-zoom-slider").clientWidth;
                this._state.zoomSliderLength = x - c.offsetWidth;
              },
            },
            {
              key: "resetZoom",
              value: function resetZoom() {
                var t =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0],
                  i = this._options.zoomValue;
                t || (this._state.zoomValue = i), this.zoom(i);
              },
            },
            {
              key: "load",
              value: function load(t, i) {
                (this._images = { imageSrc: t, hiResImageSrc: i }),
                  this._loadImages();
              },
            },
            {
              key: "destroy",
              value: function destroy() {
                var t = this._elements,
                  i = t.container,
                  r = t.domElement;
                Object.entries(this._sliders).forEach(function (t) {
                  var i = a()(t, 2);
                  i[0];
                  i[1].destroy();
                }),
                  Object.entries(this._events).forEach(function (t) {
                    var i = a()(t, 2);
                    i[0];
                    (0, i[1])();
                  }),
                  this._clearFrames(),
                  remove(i.querySelector(".iv-wrap")),
                  (function removeClass(t, i) {
                    var r = i.split(" ");
                    r.length > 1
                      ? r.forEach(function (i) {
                          return removeClass(t, i);
                        })
                      : t.classList
                      ? t.classList.remove(i)
                      : (t.className = t.className.replace(
                          new RegExp(
                            "(^|\\b)".concat(i.split(" ").join("|"), "(\\b|$)"),
                            "gi"
                          ),
                          " "
                        ));
                  })(i, "iv-container"),
                  removeCss(document.querySelector("html"), "relative"),
                  r !== i &&
                    (function unwrap(t) {
                      var i = t.parentNode;
                      i !== document.body &&
                        (i.parentNode.insertBefore(t, i),
                        i.parentNode.removeChild(i));
                    })(r),
                  (r._imageViewer = null),
                  this._listeners.onDestroy && this._listeners.onDestroy();
              },
            },
            {
              key: "_callbackData",
              get: function get() {
                return {
                  container: this._elements.container,
                  snapView: this._elements.snapView,
                  zoomValue: this._state.zoomValue,
                  reachedMin:
                    Math.round(this._state.zoomValue) ===
                    this._options.zoomValue,
                  reachedMax:
                    Math.round(this._state.zoomValue) === this._options.maxZoom,
                  instance: this,
                };
              },
            },
          ]),
          ImageViewer
        );
      })();
      g.defaults = {
        zoomValue: 100,
        snapView: !0,
        maxZoom: 500,
        refreshOnResize: !0,
        zoomOnMouseWheel: !0,
        hasZoomButtons: !1,
        zoomStep: 50,
        listeners: {
          onInit: null,
          onDestroy: null,
          onImageLoaded: null,
          onZoomChange: null,
        },
      };
      var m = g,
        y = r(3),
        b = r.n(y),
        _ = r(5),
        w = r.n(_),
        x = r(4),
        S = r.n(x),
        k = r(0),
        T = r.n(k);
      function FullScreen_ownKeys(t, i) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          i &&
            (o = o.filter(function (i) {
              return Object.getOwnPropertyDescriptor(t, i).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function FullScreen_objectSpread(t) {
        for (var i = 1; i < arguments.length; i++) {
          var r = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? FullScreen_ownKeys(Object(r), !0).forEach(function (i) {
                l()(t, i, r[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : FullScreen_ownKeys(Object(r)).forEach(function (i) {
                Object.defineProperty(
                  t,
                  i,
                  Object.getOwnPropertyDescriptor(r, i)
                );
              });
        }
        return t;
      }
      function _createSuper(t) {
        var i = (function _isNativeReflectConstruct() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var r,
            o = T()(t);
          if (i) {
            var a = T()(this).constructor;
            r = Reflect.construct(o, arguments, a);
          } else r = o.apply(this, arguments);
          return S()(this, r);
        };
      }
      var E =
          '\n  <div class="iv-fullscreen-container"></div>\n  <div class="iv-fullscreen-close"></div>\n',
        O = (function (t) {
          w()(FullScreenViewer, t);
          var i = _createSuper(FullScreenViewer);
          function FullScreenViewer() {
            var t,
              r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            h()(this, FullScreenViewer);
            var o = createElement({
                tagName: "div",
                className: "iv-fullscreen",
                html: E,
                parent: document.body,
              }),
              a = o.querySelector(".iv-fullscreen-container");
            return (
              ((t = i.call(
                this,
                a,
                FullScreen_objectSpread(
                  FullScreen_objectSpread({}, r),
                  {},
                  { refreshOnResize: !1 }
                )
              )).hide = function () {
                css(t._elements.fullScreen, { display: "none" }),
                  removeCss(document.querySelector("html"), "overflow"),
                  t._events.onWindowResize();
              }),
              (t._elements.fullScreen = o),
              t._initFullScreenEvents(),
              t
            );
          }
          return (
            p()(FullScreenViewer, [
              {
                key: "_initFullScreenEvents",
                value: function _initFullScreenEvents() {
                  var t = this._elements.fullScreen.querySelector(
                    ".iv-fullscreen-close"
                  );
                  this._events.onCloseBtnClick = assignEvent(
                    t,
                    "click",
                    this.hide
                  );
                },
              },
              {
                key: "show",
                value: function show(t, i) {
                  css(this._elements.fullScreen, { display: "block" }),
                    t && this.load(t, i),
                    (this._events.onWindowResize = assignEvent(
                      window,
                      "resize",
                      this.refresh
                    )),
                    css(document.querySelector("html"), { overflow: "hidden" });
                },
              },
              {
                key: "destroy",
                value: function destroy() {
                  var t = this._elements.fullScreen;
                  b()(T()(FullScreenViewer.prototype), "destroy", this).call(
                    this
                  ),
                    remove(t);
                },
              },
            ]),
            FullScreenViewer
          );
        })(m);
      i.default = m;
    },
  ],
]);
//# sourceMappingURL=vendors~article-d27b099af88530590d19.js.map
