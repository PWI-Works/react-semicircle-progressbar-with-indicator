var Ue = {}, Vt = {
  get exports() {
    return Ue;
  },
  set exports(C) {
    Ue = C;
  }
}, Ge = {}, hr = {}, Wt = {
  get exports() {
    return hr;
  },
  set exports(C) {
    hr = C;
  }
}, g = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var st;
function Ut() {
  if (st)
    return g;
  st = 1;
  var C = Symbol.for("react.element"), v = Symbol.for("react.portal"), pe = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), ee = Symbol.for("react.provider"), re = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), G = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), Y = Symbol.iterator;
  function te(n) {
    return n === null || typeof n != "object" ? null : (n = Y && n[Y] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var X = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ce = Object.assign, Ie = {};
  function ae(n, s, h) {
    this.props = n, this.context = s, this.refs = Ie, this.updater = h || X;
  }
  ae.prototype.isReactComponent = {}, ae.prototype.setState = function(n, s) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, s, "setState");
  }, ae.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function oe() {
  }
  oe.prototype = ae.prototype;
  function N(n, s, h) {
    this.props = n, this.context = s, this.refs = Ie, this.updater = h || X;
  }
  var he = N.prototype = new oe();
  he.constructor = N, ce(he, ae.prototype), he.isPureReactComponent = !0;
  var ue = Array.isArray, V = Object.prototype.hasOwnProperty, K = { current: null }, fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ve(n, s, h) {
    var w, _ = {}, k = null, A = null;
    if (s != null)
      for (w in s.ref !== void 0 && (A = s.ref), s.key !== void 0 && (k = "" + s.key), s)
        V.call(s, w) && !fe.hasOwnProperty(w) && (_[w] = s[w]);
    var O = arguments.length - 2;
    if (O === 1)
      _.children = h;
    else if (1 < O) {
      for (var S = Array(O), U = 0; U < O; U++)
        S[U] = arguments[U + 2];
      _.children = S;
    }
    if (n && n.defaultProps)
      for (w in O = n.defaultProps, O)
        _[w] === void 0 && (_[w] = O[w]);
    return { $$typeof: C, type: n, key: k, ref: A, props: _, _owner: K.current };
  }
  function Re(n, s) {
    return { $$typeof: C, type: n.type, key: s, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function we(n) {
    return typeof n == "object" && n !== null && n.$$typeof === C;
  }
  function Ye(n) {
    var s = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(h) {
      return s[h];
    });
  }
  var Ce = /\/+/g;
  function J(n, s) {
    return typeof n == "object" && n !== null && n.key != null ? Ye("" + n.key) : s.toString(36);
  }
  function Q(n, s, h, w, _) {
    var k = typeof n;
    (k === "undefined" || k === "boolean") && (n = null);
    var A = !1;
    if (n === null)
      A = !0;
    else
      switch (k) {
        case "string":
        case "number":
          A = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case C:
            case v:
              A = !0;
          }
      }
    if (A)
      return A = n, _ = _(A), n = w === "" ? "." + J(A, 0) : w, ue(_) ? (h = "", n != null && (h = n.replace(Ce, "$&/") + "/"), Q(_, s, h, "", function(U) {
        return U;
      })) : _ != null && (we(_) && (_ = Re(_, h + (!_.key || A && A.key === _.key ? "" : ("" + _.key).replace(Ce, "$&/") + "/") + n)), s.push(_)), 1;
    if (A = 0, w = w === "" ? "." : w + ":", ue(n))
      for (var O = 0; O < n.length; O++) {
        k = n[O];
        var S = w + J(k, O);
        A += Q(k, s, h, S, _);
      }
    else if (S = te(n), typeof S == "function")
      for (n = S.call(n), O = 0; !(k = n.next()).done; )
        k = k.value, S = w + J(k, O++), A += Q(k, s, h, S, _);
    else if (k === "object")
      throw s = String(n), Error("Objects are not valid as a React child (found: " + (s === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : s) + "). If you meant to render a collection of children, use an array instead.");
    return A;
  }
  function B(n, s, h) {
    if (n == null)
      return n;
    var w = [], _ = 0;
    return Q(n, w, "", "", function(k) {
      return s.call(h, k, _++);
    }), w;
  }
  function ie(n) {
    if (n._status === -1) {
      var s = n._result;
      s = s(), s.then(function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = h);
      }, function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = h);
      }), n._status === -1 && (n._status = 0, n._result = s);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var d = { current: null }, le = { transition: null }, Se = { ReactCurrentDispatcher: d, ReactCurrentBatchConfig: le, ReactCurrentOwner: K };
  return g.Children = { map: B, forEach: function(n, s, h) {
    B(n, function() {
      s.apply(this, arguments);
    }, h);
  }, count: function(n) {
    var s = 0;
    return B(n, function() {
      s++;
    }), s;
  }, toArray: function(n) {
    return B(n, function(s) {
      return s;
    }) || [];
  }, only: function(n) {
    if (!we(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, g.Component = ae, g.Fragment = pe, g.Profiler = ne, g.PureComponent = N, g.StrictMode = M, g.Suspense = j, g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Se, g.cloneElement = function(n, s, h) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var w = ce({}, n.props), _ = n.key, k = n.ref, A = n._owner;
    if (s != null) {
      if (s.ref !== void 0 && (k = s.ref, A = K.current), s.key !== void 0 && (_ = "" + s.key), n.type && n.type.defaultProps)
        var O = n.type.defaultProps;
      for (S in s)
        V.call(s, S) && !fe.hasOwnProperty(S) && (w[S] = s[S] === void 0 && O !== void 0 ? O[S] : s[S]);
    }
    var S = arguments.length - 2;
    if (S === 1)
      w.children = h;
    else if (1 < S) {
      O = Array(S);
      for (var U = 0; U < S; U++)
        O[U] = arguments[U + 2];
      w.children = O;
    }
    return { $$typeof: C, type: n.type, key: _, ref: k, props: w, _owner: A };
  }, g.createContext = function(n) {
    return n = { $$typeof: re, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: ee, _context: n }, n.Consumer = n;
  }, g.createElement = ve, g.createFactory = function(n) {
    var s = ve.bind(null, n);
    return s.type = n, s;
  }, g.createRef = function() {
    return { current: null };
  }, g.forwardRef = function(n) {
    return { $$typeof: H, render: n };
  }, g.isValidElement = we, g.lazy = function(n) {
    return { $$typeof: I, _payload: { _status: -1, _result: n }, _init: ie };
  }, g.memo = function(n, s) {
    return { $$typeof: G, type: n, compare: s === void 0 ? null : s };
  }, g.startTransition = function(n) {
    var s = le.transition;
    le.transition = {};
    try {
      n();
    } finally {
      le.transition = s;
    }
  }, g.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, g.useCallback = function(n, s) {
    return d.current.useCallback(n, s);
  }, g.useContext = function(n) {
    return d.current.useContext(n);
  }, g.useDebugValue = function() {
  }, g.useDeferredValue = function(n) {
    return d.current.useDeferredValue(n);
  }, g.useEffect = function(n, s) {
    return d.current.useEffect(n, s);
  }, g.useId = function() {
    return d.current.useId();
  }, g.useImperativeHandle = function(n, s, h) {
    return d.current.useImperativeHandle(n, s, h);
  }, g.useInsertionEffect = function(n, s) {
    return d.current.useInsertionEffect(n, s);
  }, g.useLayoutEffect = function(n, s) {
    return d.current.useLayoutEffect(n, s);
  }, g.useMemo = function(n, s) {
    return d.current.useMemo(n, s);
  }, g.useReducer = function(n, s, h) {
    return d.current.useReducer(n, s, h);
  }, g.useRef = function(n) {
    return d.current.useRef(n);
  }, g.useState = function(n) {
    return d.current.useState(n);
  }, g.useSyncExternalStore = function(n, s, h) {
    return d.current.useSyncExternalStore(n, s, h);
  }, g.useTransition = function() {
    return d.current.useTransition();
  }, g.version = "18.2.0", g;
}
var Je = {}, Yt = {
  get exports() {
    return Je;
  },
  set exports(C) {
    Je = C;
  }
};
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ct;
function Bt() {
  return ct || (ct = 1, function(C, v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var pe = "18.2.0", M = Symbol.for("react.element"), ne = Symbol.for("react.portal"), ee = Symbol.for("react.fragment"), re = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), G = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), Ie = Symbol.for("react.offscreen"), ae = Symbol.iterator, oe = "@@iterator";
      function N(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ae && e[ae] || e[oe];
        return typeof r == "function" ? r : null;
      }
      var he = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ue = {
        transition: null
      }, V = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, K = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, fe = {}, ve = null;
      function Re(e) {
        ve = e;
      }
      fe.setExtraStackFrame = function(e) {
        ve = e;
      }, fe.getCurrentStack = null, fe.getStackAddendum = function() {
        var e = "";
        ve && (e += ve);
        var r = fe.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var we = !1, Ye = !1, Ce = !1, J = !1, Q = !1, B = {
        ReactCurrentDispatcher: he,
        ReactCurrentBatchConfig: ue,
        ReactCurrentOwner: K
      };
      B.ReactDebugCurrentFrame = fe, B.ReactCurrentActQueue = V;
      function ie(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          le("warn", e, a);
        }
      }
      function d(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          le("error", e, a);
        }
      }
      function le(e, r, a) {
        {
          var o = B.ReactDebugCurrentFrame, i = o.getStackAddendum();
          i !== "" && (r += "%s", a = a.concat([i]));
          var p = a.map(function(l) {
            return String(l);
          });
          p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
        }
      }
      var Se = {};
      function n(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", i = o + "." + r;
          if (Se[i])
            return;
          d("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Se[i] = !0;
        }
      }
      var s = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          n(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          n(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          n(e, "setState");
        }
      }, h = Object.assign, w = {};
      Object.freeze(w);
      function _(e, r, a) {
        this.props = e, this.context = r, this.refs = w, this.updater = a || s;
      }
      _.prototype.isReactComponent = {}, _.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, _.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var k = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, A = function(e, r) {
          Object.defineProperty(_.prototype, e, {
            get: function() {
              ie("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var O in k)
          k.hasOwnProperty(O) && A(O, k[O]);
      }
      function S() {
      }
      S.prototype = _.prototype;
      function U(e, r, a) {
        this.props = e, this.context = r, this.refs = w, this.updater = a || s;
      }
      var me = U.prototype = new S();
      me.constructor = U, h(me, _.prototype), me.isPureReactComponent = !0;
      function mr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Xe = Array.isArray;
      function Fe(e) {
        return Xe(e);
      }
      function gr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function $e(e) {
        try {
          return Te(e), !1;
        } catch {
          return !0;
        }
      }
      function Te(e) {
        return "" + e;
      }
      function Oe(e) {
        if ($e(e))
          return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(e)), Te(e);
      }
      function Qe(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var i = r.displayName || r.name || "";
        return i !== "" ? a + "(" + i + ")" : a;
      }
      function Pe(e) {
        return e.displayName || "Context";
      }
      function de(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case ee:
            return "Fragment";
          case ne:
            return "Portal";
          case H:
            return "Profiler";
          case re:
            return "StrictMode";
          case Y:
            return "Suspense";
          case te:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case G:
              var r = e;
              return Pe(r) + ".Consumer";
            case j:
              var a = e;
              return Pe(a._context) + ".Provider";
            case I:
              return Qe(e, e.render, "ForwardRef");
            case X:
              var o = e.displayName || null;
              return o !== null ? o : de(e.type) || "Memo";
            case ce: {
              var i = e, p = i._payload, l = i._init;
              try {
                return de(l(p));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ke = Object.prototype.hasOwnProperty, Ne = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ze, er, Le;
      Le = {};
      function Be(e) {
        if (ke.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function ge(e) {
        if (ke.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function _r(e, r) {
        var a = function() {
          Ze || (Ze = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function rr(e, r) {
        var a = function() {
          er || (er = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function tr(e) {
        if (typeof e.ref == "string" && K.current && e.__self && K.current.stateNode !== e.__self) {
          var r = de(K.current.type);
          Le[r] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Le[r] = !0);
        }
      }
      var je = function(e, r, a, o, i, p, l) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: M,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: l,
          // Record the component responsible for creating this element.
          _owner: p
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: i
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function br(e, r, a) {
        var o, i = {}, p = null, l = null, y = null, E = null;
        if (r != null) {
          Be(r) && (l = r.ref, tr(r)), ge(r) && (Oe(r.key), p = "" + r.key), y = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
          for (o in r)
            ke.call(r, o) && !Ne.hasOwnProperty(o) && (i[o] = r[o]);
        }
        var P = arguments.length - 2;
        if (P === 1)
          i.children = a;
        else if (P > 1) {
          for (var x = Array(P), D = 0; D < P; D++)
            x[D] = arguments[D + 2];
          Object.freeze && Object.freeze(x), i.children = x;
        }
        if (e && e.defaultProps) {
          var $ = e.defaultProps;
          for (o in $)
            i[o] === void 0 && (i[o] = $[o]);
        }
        if (p || l) {
          var W = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && _r(i, W), l && rr(i, W);
        }
        return je(e, p, l, y, E, K.current, i);
      }
      function Er(e, r) {
        var a = je(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Rr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, i = h({}, e.props), p = e.key, l = e.ref, y = e._self, E = e._source, P = e._owner;
        if (r != null) {
          Be(r) && (l = r.ref, P = K.current), ge(r) && (Oe(r.key), p = "" + r.key);
          var x;
          e.type && e.type.defaultProps && (x = e.type.defaultProps);
          for (o in r)
            ke.call(r, o) && !Ne.hasOwnProperty(o) && (r[o] === void 0 && x !== void 0 ? i[o] = x[o] : i[o] = r[o]);
        }
        var D = arguments.length - 2;
        if (D === 1)
          i.children = a;
        else if (D > 1) {
          for (var $ = Array(D), W = 0; W < D; W++)
            $[W] = arguments[W + 2];
          i.children = $;
        }
        return je(e.type, p, l, y, E, P, i);
      }
      function _e(e) {
        return typeof e == "object" && e !== null && e.$$typeof === M;
      }
      var nr = ".", wr = ":";
      function Cr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(i) {
          return a[i];
        });
        return "$" + o;
      }
      var Me = !1, ar = /\/+/g;
      function ye(e) {
        return e.replace(ar, "$&/");
      }
      function Ae(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Oe(e.key), Cr("" + e.key)) : r.toString(36);
      }
      function be(e, r, a, o, i) {
        var p = typeof e;
        (p === "undefined" || p === "boolean") && (e = null);
        var l = !1;
        if (e === null)
          l = !0;
        else
          switch (p) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case M:
                case ne:
                  l = !0;
              }
          }
        if (l) {
          var y = e, E = i(y), P = o === "" ? nr + Ae(y, 0) : o;
          if (Fe(E)) {
            var x = "";
            P != null && (x = ye(P) + "/"), be(E, r, x, "", function(Mt) {
              return Mt;
            });
          } else
            E != null && (_e(E) && (E.key && (!y || y.key !== E.key) && Oe(E.key), E = Er(
              E,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (E.key && (!y || y.key !== E.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                ye("" + E.key) + "/"
              ) : "") + P
            )), r.push(E));
          return 1;
        }
        var D, $, W = 0, q = o === "" ? nr : o + wr;
        if (Fe(e))
          for (var yr = 0; yr < e.length; yr++)
            D = e[yr], $ = q + Ae(D, yr), W += be(D, r, a, $, i);
        else {
          var Lr = N(e);
          if (typeof Lr == "function") {
            var ot = e;
            Lr === ot.entries && (Me || ie("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Me = !0);
            for (var Nt = Lr.call(ot), ut, Lt = 0; !(ut = Nt.next()).done; )
              D = ut.value, $ = q + Ae(D, Lt++), W += be(D, r, a, $, i);
          } else if (p === "object") {
            var it = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (it === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : it) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return W;
      }
      function xe(e, r, a) {
        if (e == null)
          return e;
        var o = [], i = 0;
        return be(e, o, "", "", function(p) {
          return r.call(a, p, i++);
        }), o;
      }
      function Sr(e) {
        var r = 0;
        return xe(e, function() {
          r++;
        }), r;
      }
      function or(e, r, a) {
        xe(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function Tr(e) {
        return xe(e, function(r) {
          return r;
        }) || [];
      }
      function ur(e) {
        if (!_e(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function ir(e) {
        var r = {
          $$typeof: G,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: j,
          _context: r
        };
        var a = !1, o = !1, i = !1;
        {
          var p = {
            $$typeof: G,
            _context: r
          };
          Object.defineProperties(p, {
            Provider: {
              get: function() {
                return o || (o = !0, d("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(l) {
                r.Provider = l;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(l) {
                r._currentValue = l;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(l) {
                r._currentValue2 = l;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(l) {
                r._threadCount = l;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, d("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(l) {
                i || (ie("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", l), i = !0);
              }
            }
          }), r.Consumer = p;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var De = -1, ze = 0, qe = 1, Or = 2;
      function Pr(e) {
        if (e._status === De) {
          var r = e._result, a = r();
          if (a.then(function(p) {
            if (e._status === ze || e._status === De) {
              var l = e;
              l._status = qe, l._result = p;
            }
          }, function(p) {
            if (e._status === ze || e._status === De) {
              var l = e;
              l._status = Or, l._result = p;
            }
          }), e._status === De) {
            var o = e;
            o._status = ze, o._result = a;
          }
        }
        if (e._status === qe) {
          var i = e._result;
          return i === void 0 && d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, i), "default" in i || d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, i), i.default;
        } else
          throw e._result;
      }
      function kr(e) {
        var r = {
          // We use these fields to store the result.
          _status: De,
          _result: e
        }, a = {
          $$typeof: ce,
          _payload: r,
          _init: Pr
        };
        {
          var o, i;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(p) {
                d("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = p, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return i;
              },
              set: function(p) {
                d("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), i = p, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function jr(e) {
        e != null && e.$$typeof === X ? d("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? d("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && d("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && d("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: I,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function u(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === ee || e === H || Q || e === re || e === Y || e === te || J || e === Ie || we || Ye || Ce || typeof e == "object" && e !== null && (e.$$typeof === ce || e.$$typeof === X || e.$$typeof === j || e.$$typeof === G || e.$$typeof === I || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function c(e, r) {
        u(e) || d("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: X,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(i) {
              o = i, !e.name && !e.displayName && (e.displayName = i);
            }
          });
        }
        return a;
      }
      function f() {
        var e = he.current;
        return e === null && d(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function R(e) {
        var r = f();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? d("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && d("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function T(e) {
        var r = f();
        return r.useState(e);
      }
      function b(e, r, a) {
        var o = f();
        return o.useReducer(e, r, a);
      }
      function m(e) {
        var r = f();
        return r.useRef(e);
      }
      function z(e, r) {
        var a = f();
        return a.useEffect(e, r);
      }
      function F(e, r) {
        var a = f();
        return a.useInsertionEffect(e, r);
      }
      function L(e, r) {
        var a = f();
        return a.useLayoutEffect(e, r);
      }
      function Z(e, r) {
        var a = f();
        return a.useCallback(e, r);
      }
      function Ee(e, r) {
        var a = f();
        return a.useMemo(e, r);
      }
      function sr(e, r, a) {
        var o = f();
        return o.useImperativeHandle(e, r, a);
      }
      function se(e, r) {
        {
          var a = f();
          return a.useDebugValue(e, r);
        }
      }
      function vt() {
        var e = f();
        return e.useTransition();
      }
      function yt(e) {
        var r = f();
        return r.useDeferredValue(e);
      }
      function ht() {
        var e = f();
        return e.useId();
      }
      function mt(e, r, a) {
        var o = f();
        return o.useSyncExternalStore(e, r, a);
      }
      var He = 0, Mr, Vr, Wr, Ur, Yr, Br, zr;
      function qr() {
      }
      qr.__reactDisabledLog = !0;
      function gt() {
        {
          if (He === 0) {
            Mr = console.log, Vr = console.info, Wr = console.warn, Ur = console.error, Yr = console.group, Br = console.groupCollapsed, zr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: qr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          He++;
        }
      }
      function _t() {
        {
          if (He--, He === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: h({}, e, {
                value: Mr
              }),
              info: h({}, e, {
                value: Vr
              }),
              warn: h({}, e, {
                value: Wr
              }),
              error: h({}, e, {
                value: Ur
              }),
              group: h({}, e, {
                value: Yr
              }),
              groupCollapsed: h({}, e, {
                value: Br
              }),
              groupEnd: h({}, e, {
                value: zr
              })
            });
          }
          He < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ar = B.ReactCurrentDispatcher, xr;
      function cr(e, r, a) {
        {
          if (xr === void 0)
            try {
              throw Error();
            } catch (i) {
              var o = i.stack.trim().match(/\n( *(at )?)/);
              xr = o && o[1] || "";
            }
          return `
` + xr + e;
        }
      }
      var Dr = !1, fr;
      {
        var bt = typeof WeakMap == "function" ? WeakMap : Map;
        fr = new bt();
      }
      function Hr(e, r) {
        if (!e || Dr)
          return "";
        {
          var a = fr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Dr = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var p;
        p = Ar.current, Ar.current = null, gt();
        try {
          if (r) {
            var l = function() {
              throw Error();
            };
            if (Object.defineProperty(l.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(l, []);
              } catch (q) {
                o = q;
              }
              Reflect.construct(e, [], l);
            } else {
              try {
                l.call();
              } catch (q) {
                o = q;
              }
              e.call(l.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (q) {
              o = q;
            }
            e();
          }
        } catch (q) {
          if (q && o && typeof q.stack == "string") {
            for (var y = q.stack.split(`
`), E = o.stack.split(`
`), P = y.length - 1, x = E.length - 1; P >= 1 && x >= 0 && y[P] !== E[x]; )
              x--;
            for (; P >= 1 && x >= 0; P--, x--)
              if (y[P] !== E[x]) {
                if (P !== 1 || x !== 1)
                  do
                    if (P--, x--, x < 0 || y[P] !== E[x]) {
                      var D = `
` + y[P].replace(" at new ", " at ");
                      return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && fr.set(e, D), D;
                    }
                  while (P >= 1 && x >= 0);
                break;
              }
          }
        } finally {
          Dr = !1, Ar.current = p, _t(), Error.prepareStackTrace = i;
        }
        var $ = e ? e.displayName || e.name : "", W = $ ? cr($) : "";
        return typeof e == "function" && fr.set(e, W), W;
      }
      function Et(e, r, a) {
        return Hr(e, !1);
      }
      function Rt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function lr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Hr(e, Rt(e));
        if (typeof e == "string")
          return cr(e);
        switch (e) {
          case Y:
            return cr("Suspense");
          case te:
            return cr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case I:
              return Et(e.render);
            case X:
              return lr(e.type, r, a);
            case ce: {
              var o = e, i = o._payload, p = o._init;
              try {
                return lr(p(i), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Gr = {}, Kr = B.ReactDebugCurrentFrame;
      function dr(e) {
        if (e) {
          var r = e._owner, a = lr(e.type, e._source, r ? r.type : null);
          Kr.setExtraStackFrame(a);
        } else
          Kr.setExtraStackFrame(null);
      }
      function wt(e, r, a, o, i) {
        {
          var p = Function.call.bind(ke);
          for (var l in e)
            if (p(e, l)) {
              var y = void 0;
              try {
                if (typeof e[l] != "function") {
                  var E = Error((o || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                y = e[l](r, l, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (P) {
                y = P;
              }
              y && !(y instanceof Error) && (dr(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, l, typeof y), dr(null)), y instanceof Error && !(y.message in Gr) && (Gr[y.message] = !0, dr(i), d("Failed %s type: %s", a, y.message), dr(null));
            }
        }
      }
      function Ve(e) {
        if (e) {
          var r = e._owner, a = lr(e.type, e._source, r ? r.type : null);
          Re(a);
        } else
          Re(null);
      }
      var Ir;
      Ir = !1;
      function Jr() {
        if (K.current) {
          var e = de(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Ct(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function St(e) {
        return e != null ? Ct(e.__source) : "";
      }
      var Xr = {};
      function Tt(e) {
        var r = Jr();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function Qr(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Tt(r);
          if (!Xr[a]) {
            Xr[a] = !0;
            var o = "";
            e && e._owner && e._owner !== K.current && (o = " It was passed a child from " + de(e._owner.type) + "."), Ve(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ve(null);
          }
        }
      }
      function Zr(e, r) {
        if (typeof e == "object") {
          if (Fe(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              _e(o) && Qr(o, r);
            }
          else if (_e(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var i = N(e);
            if (typeof i == "function" && i !== e.entries)
              for (var p = i.call(e), l; !(l = p.next()).done; )
                _e(l.value) && Qr(l.value, r);
          }
        }
      }
      function et(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === I || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === X))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = de(r);
            wt(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Ir) {
            Ir = !0;
            var i = de(r);
            d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ot(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              Ve(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ve(null);
              break;
            }
          }
          e.ref !== null && (Ve(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
        }
      }
      function rt(e, r, a) {
        var o = u(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = St(r);
          p ? i += p : i += Jr();
          var l;
          e === null ? l = "null" : Fe(e) ? l = "array" : e !== void 0 && e.$$typeof === M ? (l = "<" + (de(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, d("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, i);
        }
        var y = br.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var E = 2; E < arguments.length; E++)
            Zr(arguments[E], e);
        return e === ee ? Ot(y) : et(y), y;
      }
      var tt = !1;
      function Pt(e) {
        var r = rt.bind(null, e);
        return r.type = e, tt || (tt = !0, ie("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return ie("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function kt(e, r, a) {
        for (var o = Rr.apply(this, arguments), i = 2; i < arguments.length; i++)
          Zr(arguments[i], o.type);
        return et(o), o;
      }
      function jt(e, r) {
        var a = ue.transition;
        ue.transition = {};
        var o = ue.transition;
        ue.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (ue.transition = a, a === null && o._updatedFibers) {
            var i = o._updatedFibers.size;
            i > 10 && ie("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var nt = !1, pr = null;
      function At(e) {
        if (pr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = C && C[r];
            pr = a.call(C, "timers").setImmediate;
          } catch {
            pr = function(i) {
              nt === !1 && (nt = !0, typeof MessageChannel > "u" && d("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var p = new MessageChannel();
              p.port1.onmessage = i, p.port2.postMessage(void 0);
            };
          }
        return pr(e);
      }
      var We = 0, at = !1;
      function xt(e) {
        {
          var r = We;
          We++, V.current === null && (V.current = []);
          var a = V.isBatchingLegacy, o;
          try {
            if (V.isBatchingLegacy = !0, o = e(), !a && V.didScheduleLegacyUpdate) {
              var i = V.current;
              i !== null && (V.didScheduleLegacyUpdate = !1, Nr(i));
            }
          } catch ($) {
            throw vr(r), $;
          } finally {
            V.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var p = o, l = !1, y = {
              then: function($, W) {
                l = !0, p.then(function(q) {
                  vr(r), We === 0 ? Fr(q, $, W) : $(q);
                }, function(q) {
                  vr(r), W(q);
                });
              }
            };
            return !at && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              l || (at = !0, d("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var E = o;
            if (vr(r), We === 0) {
              var P = V.current;
              P !== null && (Nr(P), V.current = null);
              var x = {
                then: function($, W) {
                  V.current === null ? (V.current = [], Fr(E, $, W)) : $(E);
                }
              };
              return x;
            } else {
              var D = {
                then: function($, W) {
                  $(E);
                }
              };
              return D;
            }
          }
        }
      }
      function vr(e) {
        e !== We - 1 && d("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), We = e;
      }
      function Fr(e, r, a) {
        {
          var o = V.current;
          if (o !== null)
            try {
              Nr(o), At(function() {
                o.length === 0 ? (V.current = null, r(e)) : Fr(e, r, a);
              });
            } catch (i) {
              a(i);
            }
          else
            r(e);
        }
      }
      var $r = !1;
      function Nr(e) {
        if (!$r) {
          $r = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            $r = !1;
          }
        }
      }
      var Dt = rt, It = kt, Ft = Pt, $t = {
        map: xe,
        forEach: or,
        count: Sr,
        toArray: Tr,
        only: ur
      };
      v.Children = $t, v.Component = _, v.Fragment = ee, v.Profiler = H, v.PureComponent = U, v.StrictMode = re, v.Suspense = Y, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B, v.cloneElement = It, v.createContext = ir, v.createElement = Dt, v.createFactory = Ft, v.createRef = mr, v.forwardRef = jr, v.isValidElement = _e, v.lazy = kr, v.memo = c, v.startTransition = jt, v.unstable_act = xt, v.useCallback = Z, v.useContext = R, v.useDebugValue = se, v.useDeferredValue = yt, v.useEffect = z, v.useId = ht, v.useImperativeHandle = sr, v.useInsertionEffect = F, v.useLayoutEffect = L, v.useMemo = Ee, v.useReducer = b, v.useRef = m, v.useState = T, v.useSyncExternalStore = mt, v.useTransition = vt, v.version = pe, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Yt, Je)), Je;
}
var ft;
function pt() {
  return ft || (ft = 1, function(C) {
    process.env.NODE_ENV === "production" ? C.exports = Ut() : C.exports = Bt();
  }(Wt)), hr;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function zt() {
  if (lt)
    return Ge;
  lt = 1;
  var C = pt(), v = Symbol.for("react.element"), pe = Symbol.for("react.fragment"), M = Object.prototype.hasOwnProperty, ne = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function re(H, j, G) {
    var I, Y = {}, te = null, X = null;
    G !== void 0 && (te = "" + G), j.key !== void 0 && (te = "" + j.key), j.ref !== void 0 && (X = j.ref);
    for (I in j)
      M.call(j, I) && !ee.hasOwnProperty(I) && (Y[I] = j[I]);
    if (H && H.defaultProps)
      for (I in j = H.defaultProps, j)
        Y[I] === void 0 && (Y[I] = j[I]);
    return { $$typeof: v, type: H, key: te, ref: X, props: Y, _owner: ne.current };
  }
  return Ge.Fragment = pe, Ge.jsx = re, Ge.jsxs = re, Ge;
}
var Ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function qt() {
  return dt || (dt = 1, process.env.NODE_ENV !== "production" && function() {
    var C = pt(), v = Symbol.for("react.element"), pe = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), H = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), X = Symbol.for("react.offscreen"), ce = Symbol.iterator, Ie = "@@iterator";
    function ae(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = ce && t[ce] || t[Ie];
      return typeof u == "function" ? u : null;
    }
    var oe = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(t) {
      {
        for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
          c[f - 1] = arguments[f];
        he("error", t, c);
      }
    }
    function he(t, u, c) {
      {
        var f = oe.ReactDebugCurrentFrame, R = f.getStackAddendum();
        R !== "" && (u += "%s", c = c.concat([R]));
        var T = c.map(function(b) {
          return String(b);
        });
        T.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, T);
      }
    }
    var ue = !1, V = !1, K = !1, fe = !1, ve = !1, Re;
    Re = Symbol.for("react.module.reference");
    function we(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === M || t === ee || ve || t === ne || t === G || t === I || fe || t === X || ue || V || K || typeof t == "object" && t !== null && (t.$$typeof === te || t.$$typeof === Y || t.$$typeof === re || t.$$typeof === H || t.$$typeof === j || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Re || t.getModuleId !== void 0));
    }
    function Ye(t, u, c) {
      var f = t.displayName;
      if (f)
        return f;
      var R = u.displayName || u.name || "";
      return R !== "" ? c + "(" + R + ")" : c;
    }
    function Ce(t) {
      return t.displayName || "Context";
    }
    function J(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case M:
          return "Fragment";
        case pe:
          return "Portal";
        case ee:
          return "Profiler";
        case ne:
          return "StrictMode";
        case G:
          return "Suspense";
        case I:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case H:
            var u = t;
            return Ce(u) + ".Consumer";
          case re:
            var c = t;
            return Ce(c._context) + ".Provider";
          case j:
            return Ye(t, t.render, "ForwardRef");
          case Y:
            var f = t.displayName || null;
            return f !== null ? f : J(t.type) || "Memo";
          case te: {
            var R = t, T = R._payload, b = R._init;
            try {
              return J(b(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, B = 0, ie, d, le, Se, n, s, h;
    function w() {
    }
    w.__reactDisabledLog = !0;
    function _() {
      {
        if (B === 0) {
          ie = console.log, d = console.info, le = console.warn, Se = console.error, n = console.group, s = console.groupCollapsed, h = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: w,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        B++;
      }
    }
    function k() {
      {
        if (B--, B === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Q({}, t, {
              value: ie
            }),
            info: Q({}, t, {
              value: d
            }),
            warn: Q({}, t, {
              value: le
            }),
            error: Q({}, t, {
              value: Se
            }),
            group: Q({}, t, {
              value: n
            }),
            groupCollapsed: Q({}, t, {
              value: s
            }),
            groupEnd: Q({}, t, {
              value: h
            })
          });
        }
        B < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var A = oe.ReactCurrentDispatcher, O;
    function S(t, u, c) {
      {
        if (O === void 0)
          try {
            throw Error();
          } catch (R) {
            var f = R.stack.trim().match(/\n( *(at )?)/);
            O = f && f[1] || "";
          }
        return `
` + O + t;
      }
    }
    var U = !1, me;
    {
      var mr = typeof WeakMap == "function" ? WeakMap : Map;
      me = new mr();
    }
    function Xe(t, u) {
      if (!t || U)
        return "";
      {
        var c = me.get(t);
        if (c !== void 0)
          return c;
      }
      var f;
      U = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = A.current, A.current = null, _();
      try {
        if (u) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (se) {
              f = se;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (se) {
              f = se;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (se) {
            f = se;
          }
          t();
        }
      } catch (se) {
        if (se && f && typeof se.stack == "string") {
          for (var m = se.stack.split(`
`), z = f.stack.split(`
`), F = m.length - 1, L = z.length - 1; F >= 1 && L >= 0 && m[F] !== z[L]; )
            L--;
          for (; F >= 1 && L >= 0; F--, L--)
            if (m[F] !== z[L]) {
              if (F !== 1 || L !== 1)
                do
                  if (F--, L--, L < 0 || m[F] !== z[L]) {
                    var Z = `
` + m[F].replace(" at new ", " at ");
                    return t.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", t.displayName)), typeof t == "function" && me.set(t, Z), Z;
                  }
                while (F >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        U = !1, A.current = T, k(), Error.prepareStackTrace = R;
      }
      var Ee = t ? t.displayName || t.name : "", sr = Ee ? S(Ee) : "";
      return typeof t == "function" && me.set(t, sr), sr;
    }
    function Fe(t, u, c) {
      return Xe(t, !1);
    }
    function gr(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function $e(t, u, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Xe(t, gr(t));
      if (typeof t == "string")
        return S(t);
      switch (t) {
        case G:
          return S("Suspense");
        case I:
          return S("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case j:
            return Fe(t.render);
          case Y:
            return $e(t.type, u, c);
          case te: {
            var f = t, R = f._payload, T = f._init;
            try {
              return $e(T(R), u, c);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, Oe = {}, Qe = oe.ReactDebugCurrentFrame;
    function Pe(t) {
      if (t) {
        var u = t._owner, c = $e(t.type, t._source, u ? u.type : null);
        Qe.setExtraStackFrame(c);
      } else
        Qe.setExtraStackFrame(null);
    }
    function de(t, u, c, f, R) {
      {
        var T = Function.call.bind(Te);
        for (var b in t)
          if (T(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var z = Error((f || "React class") + ": " + c + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              m = t[b](u, b, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              m = F;
            }
            m && !(m instanceof Error) && (Pe(R), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, b, typeof m), Pe(null)), m instanceof Error && !(m.message in Oe) && (Oe[m.message] = !0, Pe(R), N("Failed %s type: %s", c, m.message), Pe(null));
          }
      }
    }
    var ke = Array.isArray;
    function Ne(t) {
      return ke(t);
    }
    function Ze(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, c = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function er(t) {
      try {
        return Le(t), !1;
      } catch {
        return !0;
      }
    }
    function Le(t) {
      return "" + t;
    }
    function Be(t) {
      if (er(t))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(t)), Le(t);
    }
    var ge = oe.ReactCurrentOwner, _r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, tr, je;
    je = {};
    function br(t) {
      if (Te.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Er(t) {
      if (Te.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Rr(t, u) {
      if (typeof t.ref == "string" && ge.current && u && ge.current.stateNode !== u) {
        var c = J(ge.current.type);
        je[c] || (N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', J(ge.current.type), t.ref), je[c] = !0);
      }
    }
    function _e(t, u) {
      {
        var c = function() {
          rr || (rr = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function nr(t, u) {
      {
        var c = function() {
          tr || (tr = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var wr = function(t, u, c, f, R, T, b) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: t,
        key: u,
        ref: c,
        props: b,
        // Record the component responsible for creating this element.
        _owner: T
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Cr(t, u, c, f, R) {
      {
        var T, b = {}, m = null, z = null;
        c !== void 0 && (Be(c), m = "" + c), Er(u) && (Be(u.key), m = "" + u.key), br(u) && (z = u.ref, Rr(u, R));
        for (T in u)
          Te.call(u, T) && !_r.hasOwnProperty(T) && (b[T] = u[T]);
        if (t && t.defaultProps) {
          var F = t.defaultProps;
          for (T in F)
            b[T] === void 0 && (b[T] = F[T]);
        }
        if (m || z) {
          var L = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && _e(b, L), z && nr(b, L);
        }
        return wr(t, m, z, R, f, ge.current, b);
      }
    }
    var Me = oe.ReactCurrentOwner, ar = oe.ReactDebugCurrentFrame;
    function ye(t) {
      if (t) {
        var u = t._owner, c = $e(t.type, t._source, u ? u.type : null);
        ar.setExtraStackFrame(c);
      } else
        ar.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function be(t) {
      return typeof t == "object" && t !== null && t.$$typeof === v;
    }
    function xe() {
      {
        if (Me.current) {
          var t = J(Me.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Sr(t) {
      {
        if (t !== void 0) {
          var u = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
          return `

Check your code at ` + u + ":" + c + ".";
        }
        return "";
      }
    }
    var or = {};
    function Tr(t) {
      {
        var u = xe();
        if (!u) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (u = `

Check the top-level render call using <` + c + ">.");
        }
        return u;
      }
    }
    function ur(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Tr(u);
        if (or[c])
          return;
        or[c] = !0;
        var f = "";
        t && t._owner && t._owner !== Me.current && (f = " It was passed a child from " + J(t._owner.type) + "."), ye(t), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), ye(null);
      }
    }
    function ir(t, u) {
      {
        if (typeof t != "object")
          return;
        if (Ne(t))
          for (var c = 0; c < t.length; c++) {
            var f = t[c];
            be(f) && ur(f, u);
          }
        else if (be(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var R = ae(t);
          if (typeof R == "function" && R !== t.entries)
            for (var T = R.call(t), b; !(b = T.next()).done; )
              be(b.value) && ur(b.value, u);
        }
      }
    }
    function De(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var c;
        if (typeof u == "function")
          c = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === j || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === Y))
          c = u.propTypes;
        else
          return;
        if (c) {
          var f = J(u);
          de(c, t.props, "prop", f, t);
        } else if (u.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var R = J(u);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ze(t) {
      {
        for (var u = Object.keys(t.props), c = 0; c < u.length; c++) {
          var f = u[c];
          if (f !== "children" && f !== "key") {
            ye(t), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), ye(null);
            break;
          }
        }
        t.ref !== null && (ye(t), N("Invalid attribute `ref` supplied to `React.Fragment`."), ye(null));
      }
    }
    function qe(t, u, c, f, R, T) {
      {
        var b = we(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Sr(R);
          z ? m += z : m += xe();
          var F;
          t === null ? F = "null" : Ne(t) ? F = "array" : t !== void 0 && t.$$typeof === v ? (F = "<" + (J(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : F = typeof t, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, m);
        }
        var L = Cr(t, u, c, R, T);
        if (L == null)
          return L;
        if (b) {
          var Z = u.children;
          if (Z !== void 0)
            if (f)
              if (Ne(Z)) {
                for (var Ee = 0; Ee < Z.length; Ee++)
                  ir(Z[Ee], t);
                Object.freeze && Object.freeze(Z);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ir(Z, t);
        }
        return t === M ? ze(L) : De(L), L;
      }
    }
    function Or(t, u, c) {
      return qe(t, u, c, !0);
    }
    function Pr(t, u, c) {
      return qe(t, u, c, !1);
    }
    var kr = Pr, jr = Or;
    Ke.Fragment = M, Ke.jsx = kr, Ke.jsxs = jr;
  }()), Ke;
}
(function(C) {
  process.env.NODE_ENV === "production" ? C.exports = zt() : C.exports = qt();
})(Vt);
const Ht = ({ strokeWidth: C, percentage: v, strokeColor: pe, size: M, strokeLinecap: ne, percentageSeperator: ee, fontStyle: re }) => {
  if (v < 0 || v > 100)
    throw new Error("Percentage must be between 0 and 100");
  if (isNaN(C) || C <= 0)
    throw new Error("Stroke width must be a positive number");
  if (isNaN(M.width) || M.width <= 0 || isNaN(M.height) || M.height <= 0)
    throw new Error("Size must be a positive number");
  const H = 50 - C / 2, j = 1.1 * Math.PI * H, G = j - v / 100 * j, I = "M5,64 a1,1 0 0,1 90,0";
  return Ue.jsxs("svg", { width: M.width, height: M.height, viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "_half-circular-progress", children: [Ue.jsx("path", { cx: "45", cy: "45", r: "32", d: I, style: {
    transition: "stroke-dashoffset 0.35s",
    stroke: pe || "#04001b",
    strokeLinecap: ne || "round",
    strokeDasharray: `${j}`,
    strokeDashoffset: `${G}`,
    strokeWidth: `${C}`
  }, fill: "none" }), Ue.jsx("animate", { attributeName: "stroke-dashoffset", from: "283", to: "0", dur: "1s", fill: "freeze" }), Ue.jsxs("text", { x: "52%", y: "60%", dominantBaseline: "middle", textAnchor: "middle", fontSize: "20", fontFamily: "Arial", fill: "#04001b", style: {
    ...re
  }, children: [v, ee || "%"] })] });
};
export {
  Ht as SemiCircleProgress
};
