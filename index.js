function uv(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function Rf(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var bf = {
    exports: {}
}
  , Xi = {}
  , Mf = {
    exports: {}
}
  , O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var So = Symbol.for("react.element")
  , cv = Symbol.for("react.portal")
  , dv = Symbol.for("react.fragment")
  , fv = Symbol.for("react.strict_mode")
  , pv = Symbol.for("react.profiler")
  , hv = Symbol.for("react.provider")
  , mv = Symbol.for("react.context")
  , gv = Symbol.for("react.forward_ref")
  , vv = Symbol.for("react.suspense")
  , yv = Symbol.for("react.memo")
  , xv = Symbol.for("react.lazy")
  , qu = Symbol.iterator;
function wv(e) {
    return e === null || typeof e != "object" ? null : (e = qu && e[qu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Af = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Lf = Object.assign
  , Df = {};
function mr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Df,
    this.updater = n || Af
}
mr.prototype.isReactComponent = {};
mr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
mr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Vf() {}
Vf.prototype = mr.prototype;
function Ra(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Df,
    this.updater = n || Af
}
var ba = Ra.prototype = new Vf;
ba.constructor = Ra;
Lf(ba, mr.prototype);
ba.isPureReactComponent = !0;
var Zu = Array.isArray
  , _f = Object.prototype.hasOwnProperty
  , Ma = {
    current: null
}
  , If = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Of(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            _f.call(t, r) && !If.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        o.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        o.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: So,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Ma.current
    }
}
function Sv(e, t) {
    return {
        $$typeof: So,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Aa(e) {
    return typeof e == "object" && e !== null && e.$$typeof === So
}
function Cv(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Ju = /\/+/g;
function Ns(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Cv("" + e.key) : t.toString(36)
}
function ni(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case So:
            case cv:
                s = !0
            }
        }
    if (s)
        return s = e,
        o = o(s),
        e = r === "" ? "." + Ns(s, 0) : r,
        Zu(o) ? (n = "",
        e != null && (n = e.replace(Ju, "$&/") + "/"),
        ni(o, t, n, "", function(u) {
            return u
        })) : o != null && (Aa(o) && (o = Sv(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Ju, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    Zu(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var a = r + Ns(i, l);
            s += ni(i, t, n, a, o)
        }
    else if (a = wv(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(i = e.next()).done; )
            i = i.value,
            a = r + Ns(i, l++),
            s += ni(i, t, n, a, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function Ao(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return ni(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function Pv(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var je = {
    current: null
}
  , ri = {
    transition: null
}
  , Ev = {
    ReactCurrentDispatcher: je,
    ReactCurrentBatchConfig: ri,
    ReactCurrentOwner: Ma
};
function Ff() {
    throw Error("act(...) is not supported in production builds of React.")
}
O.Children = {
    map: Ao,
    forEach: function(e, t, n) {
        Ao(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ao(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ao(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Aa(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
O.Component = mr;
O.Fragment = dv;
O.Profiler = pv;
O.PureComponent = Ra;
O.StrictMode = fv;
O.Suspense = vv;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ev;
O.act = Ff;
O.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Lf({}, e.props)
      , o = e.key
      , i = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        s = Ma.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            _f.call(t, a) && !If.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: So,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
}
;
O.createContext = function(e) {
    return e = {
        $$typeof: mv,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: hv,
        _context: e
    },
    e.Consumer = e
}
;
O.createElement = Of;
O.createFactory = function(e) {
    var t = Of.bind(null, e);
    return t.type = e,
    t
}
;
O.createRef = function() {
    return {
        current: null
    }
}
;
O.forwardRef = function(e) {
    return {
        $$typeof: gv,
        render: e
    }
}
;
O.isValidElement = Aa;
O.lazy = function(e) {
    return {
        $$typeof: xv,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Pv
    }
}
;
O.memo = function(e, t) {
    return {
        $$typeof: yv,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
O.startTransition = function(e) {
    var t = ri.transition;
    ri.transition = {};
    try {
        e()
    } finally {
        ri.transition = t
    }
}
;
O.unstable_act = Ff;
O.useCallback = function(e, t) {
    return je.current.useCallback(e, t)
}
;
O.useContext = function(e) {
    return je.current.useContext(e)
}
;
O.useDebugValue = function() {}
;
O.useDeferredValue = function(e) {
    return je.current.useDeferredValue(e)
}
;
O.useEffect = function(e, t) {
    return je.current.useEffect(e, t)
}
;
O.useId = function() {
    return je.current.useId()
}
;
O.useImperativeHandle = function(e, t, n) {
    return je.current.useImperativeHandle(e, t, n)
}
;
O.useInsertionEffect = function(e, t) {
    return je.current.useInsertionEffect(e, t)
}
;
O.useLayoutEffect = function(e, t) {
    return je.current.useLayoutEffect(e, t)
}
;
O.useMemo = function(e, t) {
    return je.current.useMemo(e, t)
}
;
O.useReducer = function(e, t, n) {
    return je.current.useReducer(e, t, n)
}
;
O.useRef = function(e) {
    return je.current.useRef(e)
}
;
O.useState = function(e) {
    return je.current.useState(e)
}
;
O.useSyncExternalStore = function(e, t, n) {
    return je.current.useSyncExternalStore(e, t, n)
}
;
O.useTransition = function() {
    return je.current.useTransition()
}
;
O.version = "18.3.1";
Mf.exports = O;
var w = Mf.exports;
const he = Rf(w)
  , zf = uv({
    __proto__: null,
    default: he
}, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tv = w
  , kv = Symbol.for("react.element")
  , Nv = Symbol.for("react.fragment")
  , jv = Object.prototype.hasOwnProperty
  , Rv = Tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , bv = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Bf(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        jv.call(t, r) && !bv.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: kv,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Rv.current
    }
}
Xi.Fragment = Nv;
Xi.jsx = Bf;
Xi.jsxs = Bf;
bf.exports = Xi;
var v = bf.exports
  , ml = {}
  , Uf = {
    exports: {}
}
  , He = {}
  , $f = {
    exports: {}
}
  , Wf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(j, M) {
        var I = j.length;
        j.push(M);
        e: for (; 0 < I; ) {
            var D = I - 1 >>> 1
              , B = j[D];
            if (0 < o(B, M))
                j[D] = M,
                j[I] = B,
                I = D;
            else
                break e
        }
    }
    function n(j) {
        return j.length === 0 ? null : j[0]
    }
    function r(j) {
        if (j.length === 0)
            return null;
        var M = j[0]
          , I = j.pop();
        if (I !== M) {
            j[0] = I;
            e: for (var D = 0, B = j.length, H = B >>> 1; D < H; ) {
                var Ie = 2 * (D + 1) - 1
                  , _n = j[Ie]
                  , Oe = Ie + 1
                  , an = j[Oe];
                if (0 > o(_n, I))
                    Oe < B && 0 > o(an, _n) ? (j[D] = an,
                    j[Oe] = I,
                    D = Oe) : (j[D] = _n,
                    j[Ie] = I,
                    D = Ie);
                else if (Oe < B && 0 > o(an, I))
                    j[D] = an,
                    j[Oe] = I,
                    D = Oe;
                else
                    break e
            }
        }
        return M
    }
    function o(j, M) {
        var I = j.sortIndex - M.sortIndex;
        return I !== 0 ? I : j.id - M.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date
          , l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = []
      , u = []
      , d = 1
      , c = null
      , f = 3
      , g = !1
      , x = !1
      , y = !1
      , S = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function h(j) {
        for (var M = n(u); M !== null; ) {
            if (M.callback === null)
                r(u);
            else if (M.startTime <= j)
                r(u),
                M.sortIndex = M.expirationTime,
                t(a, M);
            else
                break;
            M = n(u)
        }
    }
    function C(j) {
        if (y = !1,
        h(j),
        !x)
            if (n(a) !== null)
                x = !0,
                z(P);
            else {
                var M = n(u);
                M !== null && se(C, M.startTime - j)
            }
    }
    function P(j, M) {
        x = !1,
        y && (y = !1,
        m(k),
        k = -1),
        g = !0;
        var I = f;
        try {
            for (h(M),
            c = n(a); c !== null && (!(c.expirationTime > M) || j && !$()); ) {
                var D = c.callback;
                if (typeof D == "function") {
                    c.callback = null,
                    f = c.priorityLevel;
                    var B = D(c.expirationTime <= M);
                    M = e.unstable_now(),
                    typeof B == "function" ? c.callback = B : c === n(a) && r(a),
                    h(M)
                } else
                    r(a);
                c = n(a)
            }
            if (c !== null)
                var H = !0;
            else {
                var Ie = n(u);
                Ie !== null && se(C, Ie.startTime - M),
                H = !1
            }
            return H
        } finally {
            c = null,
            f = I,
            g = !1
        }
    }
    var T = !1
      , E = null
      , k = -1
      , A = 5
      , L = -1;
    function $() {
        return !(e.unstable_now() - L < A)
    }
    function V() {
        if (E !== null) {
            var j = e.unstable_now();
            L = j;
            var M = !0;
            try {
                M = E(!0, j)
            } finally {
                M ? J() : (T = !1,
                E = null)
            }
        } else
            T = !1
    }
    var J;
    if (typeof p == "function")
        J = function() {
            p(V)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var b = new MessageChannel
          , q = b.port2;
        b.port1.onmessage = V,
        J = function() {
            q.postMessage(null)
        }
    } else
        J = function() {
            S(V, 0)
        }
        ;
    function z(j) {
        E = j,
        T || (T = !0,
        J())
    }
    function se(j, M) {
        k = S(function() {
            j(e.unstable_now())
        }, M)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(j) {
        j.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        x || g || (x = !0,
        z(P))
    }
    ,
    e.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < j ? Math.floor(1e3 / j) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(j) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var M = 3;
            break;
        default:
            M = f
        }
        var I = f;
        f = M;
        try {
            return j()
        } finally {
            f = I
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(j, M) {
        switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            j = 3
        }
        var I = f;
        f = j;
        try {
            return M()
        } finally {
            f = I
        }
    }
    ,
    e.unstable_scheduleCallback = function(j, M, I) {
        var D = e.unstable_now();
        switch (typeof I == "object" && I !== null ? (I = I.delay,
        I = typeof I == "number" && 0 < I ? D + I : D) : I = D,
        j) {
        case 1:
            var B = -1;
            break;
        case 2:
            B = 250;
            break;
        case 5:
            B = 1073741823;
            break;
        case 4:
            B = 1e4;
            break;
        default:
            B = 5e3
        }
        return B = I + B,
        j = {
            id: d++,
            callback: M,
            priorityLevel: j,
            startTime: I,
            expirationTime: B,
            sortIndex: -1
        },
        I > D ? (j.sortIndex = I,
        t(u, j),
        n(a) === null && j === n(u) && (y ? (m(k),
        k = -1) : y = !0,
        se(C, I - D))) : (j.sortIndex = B,
        t(a, j),
        x || g || (x = !0,
        z(P))),
        j
    }
    ,
    e.unstable_shouldYield = $,
    e.unstable_wrapCallback = function(j) {
        var M = f;
        return function() {
            var I = f;
            f = M;
            try {
                return j.apply(this, arguments)
            } finally {
                f = I
            }
        }
    }
}
)(Wf);
$f.exports = Wf;
var Mv = $f.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Av = w
  , $e = Mv;
function N(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Hf = new Set
  , qr = {};
function bn(e, t) {
    sr(e, t),
    sr(e + "Capture", t)
}
function sr(e, t) {
    for (qr[e] = t,
    e = 0; e < t.length; e++)
        Hf.add(t[e])
}
var Tt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , gl = Object.prototype.hasOwnProperty
  , Lv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , ec = {}
  , tc = {};
function Dv(e) {
    return gl.call(tc, e) ? !0 : gl.call(ec, e) ? !1 : Lv.test(e) ? tc[e] = !0 : (ec[e] = !0,
    !1)
}
function Vv(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function _v(e, t, n, r) {
    if (t === null || typeof t > "u" || Vv(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Re(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = s
}
var ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ye[e] = new Re(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ye[t] = new Re(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ye[e] = new Re(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ye[e] = new Re(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ye[e] = new Re(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ye[e] = new Re(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ye[e] = new Re(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ye[e] = new Re(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ye[e] = new Re(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var La = /[\-:]([a-z])/g;
function Da(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(La, Da);
    ye[t] = new Re(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(La, Da);
    ye[t] = new Re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(La, Da);
    ye[t] = new Re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ye[e] = new Re(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ye.xlinkHref = new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ye[e] = new Re(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Va(e, t, n, r) {
    var o = ye.hasOwnProperty(t) ? ye[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_v(t, n, o, r) && (n = null),
    r || o === null ? Dv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var bt = Av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Lo = Symbol.for("react.element")
  , On = Symbol.for("react.portal")
  , Fn = Symbol.for("react.fragment")
  , _a = Symbol.for("react.strict_mode")
  , vl = Symbol.for("react.profiler")
  , Gf = Symbol.for("react.provider")
  , Kf = Symbol.for("react.context")
  , Ia = Symbol.for("react.forward_ref")
  , yl = Symbol.for("react.suspense")
  , xl = Symbol.for("react.suspense_list")
  , Oa = Symbol.for("react.memo")
  , Vt = Symbol.for("react.lazy")
  , Qf = Symbol.for("react.offscreen")
  , nc = Symbol.iterator;
function wr(e) {
    return e === null || typeof e != "object" ? null : (e = nc && e[nc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var re = Object.assign, js;
function Ar(e) {
    if (js === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            js = t && t[1] || ""
        }
    return `
` + js + e
}
var Rs = !1;
function bs(e, t) {
    if (!e || Rs)
        return "";
    Rs = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (o[s] !== i[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || o[s] !== i[l]) {
                                var a = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        Rs = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Ar(e) : ""
}
function Iv(e) {
    switch (e.tag) {
    case 5:
        return Ar(e.type);
    case 16:
        return Ar("Lazy");
    case 13:
        return Ar("Suspense");
    case 19:
        return Ar("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = bs(e.type, !1),
        e;
    case 11:
        return e = bs(e.type.render, !1),
        e;
    case 1:
        return e = bs(e.type, !0),
        e;
    default:
        return ""
    }
}
function wl(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Fn:
        return "Fragment";
    case On:
        return "Portal";
    case vl:
        return "Profiler";
    case _a:
        return "StrictMode";
    case yl:
        return "Suspense";
    case xl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Kf:
            return (e.displayName || "Context") + ".Consumer";
        case Gf:
            return (e._context.displayName || "Context") + ".Provider";
        case Ia:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Oa:
            return t = e.displayName || null,
            t !== null ? t : wl(e.type) || "Memo";
        case Vt:
            t = e._payload,
            e = e._init;
            try {
                return wl(e(t))
            } catch {}
        }
    return null
}
function Ov(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return wl(t);
    case 8:
        return t === _a ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Jt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Yf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Fv(e) {
    var t = Yf(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s,
                i.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Do(e) {
    e._valueTracker || (e._valueTracker = Fv(e))
}
function Xf(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Yf(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function gi(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Sl(e, t) {
    var n = t.checked;
    return re({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function rc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Jt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function qf(e, t) {
    t = t.checked,
    t != null && Va(e, "checked", t, !1)
}
function Cl(e, t) {
    qf(e, t);
    var n = Jt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Pl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Pl(e, t.type, Jt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function oc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Pl(e, t, n) {
    (t !== "number" || gi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Lr = Array.isArray;
function er(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Jt(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function El(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(N(91));
    return re({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function ic(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(N(92));
            if (Lr(n)) {
                if (1 < n.length)
                    throw Error(N(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Jt(n)
    }
}
function Zf(e, t) {
    var n = Jt(t.value)
      , r = Jt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function sc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Jf(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Tl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Jf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Vo, ep = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Vo = Vo || document.createElement("div"),
        Vo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Vo.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Zr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Or = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , zv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Or).forEach(function(e) {
    zv.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Or[t] = Or[e]
    })
});
function tp(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Or.hasOwnProperty(e) && Or[e] ? ("" + t).trim() : t + "px"
}
function np(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = tp(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var Bv = re({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function kl(e, t) {
    if (t) {
        if (Bv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(N(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(N(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(N(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(N(62))
    }
}
function Nl(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var jl = null;
function Fa(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Rl = null
  , tr = null
  , nr = null;
function lc(e) {
    if (e = Eo(e)) {
        if (typeof Rl != "function")
            throw Error(N(280));
        var t = e.stateNode;
        t && (t = ts(t),
        Rl(e.stateNode, e.type, t))
    }
}
function rp(e) {
    tr ? nr ? nr.push(e) : nr = [e] : tr = e
}
function op() {
    if (tr) {
        var e = tr
          , t = nr;
        if (nr = tr = null,
        lc(e),
        t)
            for (e = 0; e < t.length; e++)
                lc(t[e])
    }
}
function ip(e, t) {
    return e(t)
}
function sp() {}
var Ms = !1;
function lp(e, t, n) {
    if (Ms)
        return e(t, n);
    Ms = !0;
    try {
        return ip(e, t, n)
    } finally {
        Ms = !1,
        (tr !== null || nr !== null) && (sp(),
        op())
    }
}
function Jr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = ts(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(N(231, t, typeof n));
    return n
}
var bl = !1;
if (Tt)
    try {
        var Sr = {};
        Object.defineProperty(Sr, "passive", {
            get: function() {
                bl = !0
            }
        }),
        window.addEventListener("test", Sr, Sr),
        window.removeEventListener("test", Sr, Sr)
    } catch {
        bl = !1
    }
function Uv(e, t, n, r, o, i, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var Fr = !1
  , vi = null
  , yi = !1
  , Ml = null
  , $v = {
    onError: function(e) {
        Fr = !0,
        vi = e
    }
};
function Wv(e, t, n, r, o, i, s, l, a) {
    Fr = !1,
    vi = null,
    Uv.apply($v, arguments)
}
function Hv(e, t, n, r, o, i, s, l, a) {
    if (Wv.apply(this, arguments),
    Fr) {
        if (Fr) {
            var u = vi;
            Fr = !1,
            vi = null
        } else
            throw Error(N(198));
        yi || (yi = !0,
        Ml = u)
    }
}
function Mn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function ap(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function ac(e) {
    if (Mn(e) !== e)
        throw Error(N(188))
}
function Gv(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Mn(e),
        t === null)
            throw Error(N(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return ac(o),
                    e;
                if (i === r)
                    return ac(o),
                    t;
                i = i.sibling
            }
            throw Error(N(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var s = !1, l = o.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = o,
                    r = i;
                    break
                }
                if (l === r) {
                    s = !0,
                    r = o,
                    n = i;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = i.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (l === r) {
                        s = !0,
                        r = i,
                        n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(N(189))
            }
        }
        if (n.alternate !== r)
            throw Error(N(190))
    }
    if (n.tag !== 3)
        throw Error(N(188));
    return n.stateNode.current === n ? e : t
}
function up(e) {
    return e = Gv(e),
    e !== null ? cp(e) : null
}
function cp(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = cp(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var dp = $e.unstable_scheduleCallback
  , uc = $e.unstable_cancelCallback
  , Kv = $e.unstable_shouldYield
  , Qv = $e.unstable_requestPaint
  , le = $e.unstable_now
  , Yv = $e.unstable_getCurrentPriorityLevel
  , za = $e.unstable_ImmediatePriority
  , fp = $e.unstable_UserBlockingPriority
  , xi = $e.unstable_NormalPriority
  , Xv = $e.unstable_LowPriority
  , pp = $e.unstable_IdlePriority
  , qi = null
  , pt = null;
function qv(e) {
    if (pt && typeof pt.onCommitFiberRoot == "function")
        try {
            pt.onCommitFiberRoot(qi, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var lt = Math.clz32 ? Math.clz32 : ey
  , Zv = Math.log
  , Jv = Math.LN2;
function ey(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Zv(e) / Jv | 0) | 0
}
var _o = 64
  , Io = 4194304;
function Dr(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function wi(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~o;
        l !== 0 ? r = Dr(l) : (i &= s,
        i !== 0 && (r = Dr(i)))
    } else
        s = n & ~o,
        s !== 0 ? r = Dr(s) : i !== 0 && (r = Dr(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - lt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function ty(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function ny(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - lt(i)
          , l = 1 << s
          , a = o[s];
        a === -1 ? (!(l & n) || l & r) && (o[s] = ty(l, t)) : a <= t && (e.expiredLanes |= l),
        i &= ~l
    }
}
function Al(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function hp() {
    var e = _o;
    return _o <<= 1,
    !(_o & 4194240) && (_o = 64),
    e
}
function As(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Co(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - lt(t),
    e[t] = n
}
function ry(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - lt(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function Ba(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - lt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var W = 0;
function mp(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var gp, Ua, vp, yp, xp, Ll = !1, Oo = [], $t = null, Wt = null, Ht = null, eo = new Map, to = new Map, Ot = [], oy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function cc(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        $t = null;
        break;
    case "dragenter":
    case "dragleave":
        Wt = null;
        break;
    case "mouseover":
    case "mouseout":
        Ht = null;
        break;
    case "pointerover":
    case "pointerout":
        eo.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        to.delete(t.pointerId)
    }
}
function Cr(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = Eo(t),
    t !== null && Ua(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function iy(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return $t = Cr($t, e, t, n, r, o),
        !0;
    case "dragenter":
        return Wt = Cr(Wt, e, t, n, r, o),
        !0;
    case "mouseover":
        return Ht = Cr(Ht, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return eo.set(i, Cr(eo.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        to.set(i, Cr(to.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function wp(e) {
    var t = mn(e.target);
    if (t !== null) {
        var n = Mn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = ap(n),
                t !== null) {
                    e.blockedOn = t,
                    xp(e.priority, function() {
                        vp(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function oi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Dl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            jl = r,
            n.target.dispatchEvent(r),
            jl = null
        } else
            return t = Eo(n),
            t !== null && Ua(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function dc(e, t, n) {
    oi(e) && n.delete(t)
}
function sy() {
    Ll = !1,
    $t !== null && oi($t) && ($t = null),
    Wt !== null && oi(Wt) && (Wt = null),
    Ht !== null && oi(Ht) && (Ht = null),
    eo.forEach(dc),
    to.forEach(dc)
}
function Pr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Ll || (Ll = !0,
    $e.unstable_scheduleCallback($e.unstable_NormalPriority, sy)))
}
function no(e) {
    function t(o) {
        return Pr(o, e)
    }
    if (0 < Oo.length) {
        Pr(Oo[0], e);
        for (var n = 1; n < Oo.length; n++) {
            var r = Oo[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for ($t !== null && Pr($t, e),
    Wt !== null && Pr(Wt, e),
    Ht !== null && Pr(Ht, e),
    eo.forEach(t),
    to.forEach(t),
    n = 0; n < Ot.length; n++)
        r = Ot[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ot.length && (n = Ot[0],
    n.blockedOn === null); )
        wp(n),
        n.blockedOn === null && Ot.shift()
}
var rr = bt.ReactCurrentBatchConfig
  , Si = !0;
function ly(e, t, n, r) {
    var o = W
      , i = rr.transition;
    rr.transition = null;
    try {
        W = 1,
        $a(e, t, n, r)
    } finally {
        W = o,
        rr.transition = i
    }
}
function ay(e, t, n, r) {
    var o = W
      , i = rr.transition;
    rr.transition = null;
    try {
        W = 4,
        $a(e, t, n, r)
    } finally {
        W = o,
        rr.transition = i
    }
}
function $a(e, t, n, r) {
    if (Si) {
        var o = Dl(e, t, n, r);
        if (o === null)
            Us(e, t, r, Ci, n),
            cc(e, r);
        else if (iy(o, e, t, n, r))
            r.stopPropagation();
        else if (cc(e, r),
        t & 4 && -1 < oy.indexOf(e)) {
            for (; o !== null; ) {
                var i = Eo(o);
                if (i !== null && gp(i),
                i = Dl(e, t, n, r),
                i === null && Us(e, t, r, Ci, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            Us(e, t, r, null, n)
    }
}
var Ci = null;
function Dl(e, t, n, r) {
    if (Ci = null,
    e = Fa(r),
    e = mn(e),
    e !== null)
        if (t = Mn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = ap(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Ci = e,
    null
}
function Sp(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Yv()) {
        case za:
            return 1;
        case fp:
            return 4;
        case xi:
        case Xv:
            return 16;
        case pp:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var zt = null
  , Wa = null
  , ii = null;
function Cp() {
    if (ii)
        return ii;
    var e, t = Wa, n = t.length, r, o = "value"in zt ? zt.value : zt.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
        ;
    return ii = o.slice(e, 1 < r ? 1 - r : void 0)
}
function si(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Fo() {
    return !0
}
function fc() {
    return !1
}
function Ge(e) {
    function t(n, r, o, i, s) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = s,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Fo : fc,
        this.isPropagationStopped = fc,
        this
    }
    return re(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Fo)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Fo)
        },
        persist: function() {},
        isPersistent: Fo
    }),
    t
}
var gr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Ha = Ge(gr), Po = re({}, gr, {
    view: 0,
    detail: 0
}), uy = Ge(Po), Ls, Ds, Er, Zi = re({}, Po, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ga,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Er && (Er && e.type === "mousemove" ? (Ls = e.screenX - Er.screenX,
        Ds = e.screenY - Er.screenY) : Ds = Ls = 0,
        Er = e),
        Ls)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Ds
    }
}), pc = Ge(Zi), cy = re({}, Zi, {
    dataTransfer: 0
}), dy = Ge(cy), fy = re({}, Po, {
    relatedTarget: 0
}), Vs = Ge(fy), py = re({}, gr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), hy = Ge(py), my = re({}, gr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), gy = Ge(my), vy = re({}, gr, {
    data: 0
}), hc = Ge(vy), yy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, xy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, wy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Sy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = wy[e]) ? !!t[e] : !1
}
function Ga() {
    return Sy
}
var Cy = re({}, Po, {
    key: function(e) {
        if (e.key) {
            var t = yy[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = si(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? xy[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ga,
    charCode: function(e) {
        return e.type === "keypress" ? si(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? si(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Py = Ge(Cy)
  , Ey = re({}, Zi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , mc = Ge(Ey)
  , Ty = re({}, Po, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ga
})
  , ky = Ge(Ty)
  , Ny = re({}, gr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , jy = Ge(Ny)
  , Ry = re({}, Zi, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , by = Ge(Ry)
  , My = [9, 13, 27, 32]
  , Ka = Tt && "CompositionEvent"in window
  , zr = null;
Tt && "documentMode"in document && (zr = document.documentMode);
var Ay = Tt && "TextEvent"in window && !zr
  , Pp = Tt && (!Ka || zr && 8 < zr && 11 >= zr)
  , gc = String.fromCharCode(32)
  , vc = !1;
function Ep(e, t) {
    switch (e) {
    case "keyup":
        return My.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Tp(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var zn = !1;
function Ly(e, t) {
    switch (e) {
    case "compositionend":
        return Tp(t);
    case "keypress":
        return t.which !== 32 ? null : (vc = !0,
        gc);
    case "textInput":
        return e = t.data,
        e === gc && vc ? null : e;
    default:
        return null
    }
}
function Dy(e, t) {
    if (zn)
        return e === "compositionend" || !Ka && Ep(e, t) ? (e = Cp(),
        ii = Wa = zt = null,
        zn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Pp && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Vy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function yc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Vy[e.type] : t === "textarea"
}
function kp(e, t, n, r) {
    rp(r),
    t = Pi(t, "onChange"),
    0 < t.length && (n = new Ha("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Br = null
  , ro = null;
function _y(e) {
    Ip(e, 0)
}
function Ji(e) {
    var t = $n(e);
    if (Xf(t))
        return e
}
function Iy(e, t) {
    if (e === "change")
        return t
}
var Np = !1;
if (Tt) {
    var _s;
    if (Tt) {
        var Is = "oninput"in document;
        if (!Is) {
            var xc = document.createElement("div");
            xc.setAttribute("oninput", "return;"),
            Is = typeof xc.oninput == "function"
        }
        _s = Is
    } else
        _s = !1;
    Np = _s && (!document.documentMode || 9 < document.documentMode)
}
function wc() {
    Br && (Br.detachEvent("onpropertychange", jp),
    ro = Br = null)
}
function jp(e) {
    if (e.propertyName === "value" && Ji(ro)) {
        var t = [];
        kp(t, ro, e, Fa(e)),
        lp(_y, t)
    }
}
function Oy(e, t, n) {
    e === "focusin" ? (wc(),
    Br = t,
    ro = n,
    Br.attachEvent("onpropertychange", jp)) : e === "focusout" && wc()
}
function Fy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ji(ro)
}
function zy(e, t) {
    if (e === "click")
        return Ji(t)
}
function By(e, t) {
    if (e === "input" || e === "change")
        return Ji(t)
}
function Uy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var ut = typeof Object.is == "function" ? Object.is : Uy;
function oo(e, t) {
    if (ut(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!gl.call(t, o) || !ut(e[o], t[o]))
            return !1
    }
    return !0
}
function Sc(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Cc(e, t) {
    var n = Sc(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Sc(n)
    }
}
function Rp(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Rp(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function bp() {
    for (var e = window, t = gi(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = gi(e.document)
    }
    return t
}
function Qa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function $y(e) {
    var t = bp()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Rp(n.ownerDocument.documentElement, n)) {
        if (r !== null && Qa(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = Cc(n, i);
                var s = Cc(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Wy = Tt && "documentMode"in document && 11 >= document.documentMode
  , Bn = null
  , Vl = null
  , Ur = null
  , _l = !1;
function Pc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    _l || Bn == null || Bn !== gi(r) || (r = Bn,
    "selectionStart"in r && Qa(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Ur && oo(Ur, r) || (Ur = r,
    r = Pi(Vl, "onSelect"),
    0 < r.length && (t = new Ha("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Bn)))
}
function zo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Un = {
    animationend: zo("Animation", "AnimationEnd"),
    animationiteration: zo("Animation", "AnimationIteration"),
    animationstart: zo("Animation", "AnimationStart"),
    transitionend: zo("Transition", "TransitionEnd")
}
  , Os = {}
  , Mp = {};
Tt && (Mp = document.createElement("div").style,
"AnimationEvent"in window || (delete Un.animationend.animation,
delete Un.animationiteration.animation,
delete Un.animationstart.animation),
"TransitionEvent"in window || delete Un.transitionend.transition);
function es(e) {
    if (Os[e])
        return Os[e];
    if (!Un[e])
        return e;
    var t = Un[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Mp)
            return Os[e] = t[n];
    return e
}
var Ap = es("animationend")
  , Lp = es("animationiteration")
  , Dp = es("animationstart")
  , Vp = es("transitionend")
  , _p = new Map
  , Ec = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function rn(e, t) {
    _p.set(e, t),
    bn(t, [e])
}
for (var Fs = 0; Fs < Ec.length; Fs++) {
    var zs = Ec[Fs]
      , Hy = zs.toLowerCase()
      , Gy = zs[0].toUpperCase() + zs.slice(1);
    rn(Hy, "on" + Gy)
}
rn(Ap, "onAnimationEnd");
rn(Lp, "onAnimationIteration");
rn(Dp, "onAnimationStart");
rn("dblclick", "onDoubleClick");
rn("focusin", "onFocus");
rn("focusout", "onBlur");
rn(Vp, "onTransitionEnd");
sr("onMouseEnter", ["mouseout", "mouseover"]);
sr("onMouseLeave", ["mouseout", "mouseover"]);
sr("onPointerEnter", ["pointerout", "pointerover"]);
sr("onPointerLeave", ["pointerout", "pointerover"]);
bn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
bn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
bn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
bn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
bn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Vr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Ky = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));
function Tc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Hv(r, t, void 0, e),
    e.currentTarget = null
}
function Ip(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    Tc(o, l, u),
                    i = a
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (l = r[s],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    Tc(o, l, u),
                    i = a
                }
        }
    }
    if (yi)
        throw e = Ml,
        yi = !1,
        Ml = null,
        e
}
function Q(e, t) {
    var n = t[Bl];
    n === void 0 && (n = t[Bl] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Op(t, e, 2, !1),
    n.add(r))
}
function Bs(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Op(n, e, r, t)
}
var Bo = "_reactListening" + Math.random().toString(36).slice(2);
function io(e) {
    if (!e[Bo]) {
        e[Bo] = !0,
        Hf.forEach(function(n) {
            n !== "selectionchange" && (Ky.has(n) || Bs(n, !1, e),
            Bs(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Bo] || (t[Bo] = !0,
        Bs("selectionchange", !1, t))
    }
}
function Op(e, t, n, r) {
    switch (Sp(t)) {
    case 1:
        var o = ly;
        break;
    case 4:
        o = ay;
        break;
    default:
        o = $a
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !bl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Us(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === o || l.nodeType === 8 && l.parentNode === o)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
                        a === o || a.nodeType === 8 && a.parentNode === o))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = mn(l),
                    s === null)
                        return;
                    if (a = s.tag,
                    a === 5 || a === 6) {
                        r = i = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    lp(function() {
        var u = i
          , d = Fa(n)
          , c = [];
        e: {
            var f = _p.get(e);
            if (f !== void 0) {
                var g = Ha
                  , x = e;
                switch (e) {
                case "keypress":
                    if (si(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    g = Py;
                    break;
                case "focusin":
                    x = "focus",
                    g = Vs;
                    break;
                case "focusout":
                    x = "blur",
                    g = Vs;
                    break;
                case "beforeblur":
                case "afterblur":
                    g = Vs;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    g = pc;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    g = dy;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    g = ky;
                    break;
                case Ap:
                case Lp:
                case Dp:
                    g = hy;
                    break;
                case Vp:
                    g = jy;
                    break;
                case "scroll":
                    g = uy;
                    break;
                case "wheel":
                    g = by;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    g = gy;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    g = mc
                }
                var y = (t & 4) !== 0
                  , S = !y && e === "scroll"
                  , m = y ? f !== null ? f + "Capture" : null : f;
                y = [];
                for (var p = u, h; p !== null; ) {
                    h = p;
                    var C = h.stateNode;
                    if (h.tag === 5 && C !== null && (h = C,
                    m !== null && (C = Jr(p, m),
                    C != null && y.push(so(p, C, h)))),
                    S)
                        break;
                    p = p.return
                }
                0 < y.length && (f = new g(f,x,null,n,d),
                c.push({
                    event: f,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                g = e === "mouseout" || e === "pointerout",
                f && n !== jl && (x = n.relatedTarget || n.fromElement) && (mn(x) || x[kt]))
                    break e;
                if ((g || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window,
                g ? (x = n.relatedTarget || n.toElement,
                g = u,
                x = x ? mn(x) : null,
                x !== null && (S = Mn(x),
                x !== S || x.tag !== 5 && x.tag !== 6) && (x = null)) : (g = null,
                x = u),
                g !== x)) {
                    if (y = pc,
                    C = "onMouseLeave",
                    m = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (y = mc,
                    C = "onPointerLeave",
                    m = "onPointerEnter",
                    p = "pointer"),
                    S = g == null ? f : $n(g),
                    h = x == null ? f : $n(x),
                    f = new y(C,p + "leave",g,n,d),
                    f.target = S,
                    f.relatedTarget = h,
                    C = null,
                    mn(d) === u && (y = new y(m,p + "enter",x,n,d),
                    y.target = h,
                    y.relatedTarget = S,
                    C = y),
                    S = C,
                    g && x)
                        t: {
                            for (y = g,
                            m = x,
                            p = 0,
                            h = y; h; h = In(h))
                                p++;
                            for (h = 0,
                            C = m; C; C = In(C))
                                h++;
                            for (; 0 < p - h; )
                                y = In(y),
                                p--;
                            for (; 0 < h - p; )
                                m = In(m),
                                h--;
                            for (; p--; ) {
                                if (y === m || m !== null && y === m.alternate)
                                    break t;
                                y = In(y),
                                m = In(m)
                            }
                            y = null
                        }
                    else
                        y = null;
                    g !== null && kc(c, f, g, y, !1),
                    x !== null && S !== null && kc(c, S, x, y, !0)
                }
            }
            e: {
                if (f = u ? $n(u) : window,
                g = f.nodeName && f.nodeName.toLowerCase(),
                g === "select" || g === "input" && f.type === "file")
                    var P = Iy;
                else if (yc(f))
                    if (Np)
                        P = By;
                    else {
                        P = Fy;
                        var T = Oy
                    }
                else
                    (g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (P = zy);
                if (P && (P = P(e, u))) {
                    kp(c, P, n, d);
                    break e
                }
                T && T(e, f, u),
                e === "focusout" && (T = f._wrapperState) && T.controlled && f.type === "number" && Pl(f, "number", f.value)
            }
            switch (T = u ? $n(u) : window,
            e) {
            case "focusin":
                (yc(T) || T.contentEditable === "true") && (Bn = T,
                Vl = u,
                Ur = null);
                break;
            case "focusout":
                Ur = Vl = Bn = null;
                break;
            case "mousedown":
                _l = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                _l = !1,
                Pc(c, n, d);
                break;
            case "selectionchange":
                if (Wy)
                    break;
            case "keydown":
            case "keyup":
                Pc(c, n, d)
            }
            var E;
            if (Ka)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var k = "onCompositionStart";
                        break e;
                    case "compositionend":
                        k = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        k = "onCompositionUpdate";
                        break e
                    }
                    k = void 0
                }
            else
                zn ? Ep(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
            k && (Pp && n.locale !== "ko" && (zn || k !== "onCompositionStart" ? k === "onCompositionEnd" && zn && (E = Cp()) : (zt = d,
            Wa = "value"in zt ? zt.value : zt.textContent,
            zn = !0)),
            T = Pi(u, k),
            0 < T.length && (k = new hc(k,e,null,n,d),
            c.push({
                event: k,
                listeners: T
            }),
            E ? k.data = E : (E = Tp(n),
            E !== null && (k.data = E)))),
            (E = Ay ? Ly(e, n) : Dy(e, n)) && (u = Pi(u, "onBeforeInput"),
            0 < u.length && (d = new hc("onBeforeInput","beforeinput",null,n,d),
            c.push({
                event: d,
                listeners: u
            }),
            d.data = E))
        }
        Ip(c, t)
    })
}
function so(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Pi(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = Jr(e, n),
        i != null && r.unshift(so(e, i, o)),
        i = Jr(e, t),
        i != null && r.push(so(e, i, o))),
        e = e.return
    }
    return r
}
function In(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function kc(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        o ? (a = Jr(n, i),
        a != null && s.unshift(so(n, a, l))) : o || (a = Jr(n, i),
        a != null && s.push(so(n, a, l)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var Qy = /\r\n?/g
  , Yy = /\u0000|\uFFFD/g;
function Nc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Qy, `
`).replace(Yy, "")
}
function Uo(e, t, n) {
    if (t = Nc(t),
    Nc(e) !== t && n)
        throw Error(N(425))
}
function Ei() {}
var Il = null
  , Ol = null;
function Fl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var zl = typeof setTimeout == "function" ? setTimeout : void 0
  , Xy = typeof clearTimeout == "function" ? clearTimeout : void 0
  , jc = typeof Promise == "function" ? Promise : void 0
  , qy = typeof queueMicrotask == "function" ? queueMicrotask : typeof jc < "u" ? function(e) {
    return jc.resolve(null).then(e).catch(Zy)
}
: zl;
function Zy(e) {
    setTimeout(function() {
        throw e
    })
}
function $s(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    no(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    no(t)
}
function Gt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Rc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var vr = Math.random().toString(36).slice(2)
  , ft = "__reactFiber$" + vr
  , lo = "__reactProps$" + vr
  , kt = "__reactContainer$" + vr
  , Bl = "__reactEvents$" + vr
  , Jy = "__reactListeners$" + vr
  , e0 = "__reactHandles$" + vr;
function mn(e) {
    var t = e[ft];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[kt] || n[ft]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Rc(e); e !== null; ) {
                    if (n = e[ft])
                        return n;
                    e = Rc(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Eo(e) {
    return e = e[ft] || e[kt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function $n(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(N(33))
}
function ts(e) {
    return e[lo] || null
}
var Ul = []
  , Wn = -1;
function on(e) {
    return {
        current: e
    }
}
function Y(e) {
    0 > Wn || (e.current = Ul[Wn],
    Ul[Wn] = null,
    Wn--)
}
function G(e, t) {
    Wn++,
    Ul[Wn] = e.current,
    e.current = t
}
var en = {}
  , Pe = on(en)
  , Le = on(!1)
  , Pn = en;
function lr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return en;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function De(e) {
    return e = e.childContextTypes,
    e != null
}
function Ti() {
    Y(Le),
    Y(Pe)
}
function bc(e, t, n) {
    if (Pe.current !== en)
        throw Error(N(168));
    G(Pe, t),
    G(Le, n)
}
function Fp(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(N(108, Ov(e) || "Unknown", o));
    return re({}, n, r)
}
function ki(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || en,
    Pn = Pe.current,
    G(Pe, e),
    G(Le, Le.current),
    !0
}
function Mc(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(N(169));
    n ? (e = Fp(e, t, Pn),
    r.__reactInternalMemoizedMergedChildContext = e,
    Y(Le),
    Y(Pe),
    G(Pe, e)) : Y(Le),
    G(Le, n)
}
var yt = null
  , ns = !1
  , Ws = !1;
function zp(e) {
    yt === null ? yt = [e] : yt.push(e)
}
function t0(e) {
    ns = !0,
    zp(e)
}
function sn() {
    if (!Ws && yt !== null) {
        Ws = !0;
        var e = 0
          , t = W;
        try {
            var n = yt;
            for (W = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            yt = null,
            ns = !1
        } catch (o) {
            throw yt !== null && (yt = yt.slice(e + 1)),
            dp(za, sn),
            o
        } finally {
            W = t,
            Ws = !1
        }
    }
    return null
}
var Hn = []
  , Gn = 0
  , Ni = null
  , ji = 0
  , Ye = []
  , Xe = 0
  , En = null
  , xt = 1
  , wt = "";
function dn(e, t) {
    Hn[Gn++] = ji,
    Hn[Gn++] = Ni,
    Ni = e,
    ji = t
}
function Bp(e, t, n) {
    Ye[Xe++] = xt,
    Ye[Xe++] = wt,
    Ye[Xe++] = En,
    En = e;
    var r = xt;
    e = wt;
    var o = 32 - lt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - lt(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32),
        r >>= s,
        o -= s,
        xt = 1 << 32 - lt(t) + o | n << o | r,
        wt = i + e
    } else
        xt = 1 << i | n << o | r,
        wt = e
}
function Ya(e) {
    e.return !== null && (dn(e, 1),
    Bp(e, 1, 0))
}
function Xa(e) {
    for (; e === Ni; )
        Ni = Hn[--Gn],
        Hn[Gn] = null,
        ji = Hn[--Gn],
        Hn[Gn] = null;
    for (; e === En; )
        En = Ye[--Xe],
        Ye[Xe] = null,
        wt = Ye[--Xe],
        Ye[Xe] = null,
        xt = Ye[--Xe],
        Ye[Xe] = null
}
var Ue = null
  , Be = null
  , Z = !1
  , st = null;
function Up(e, t) {
    var n = qe(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Ac(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ue = e,
        Be = Gt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ue = e,
        Be = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = En !== null ? {
            id: xt,
            overflow: wt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = qe(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ue = e,
        Be = null,
        !0) : !1;
    default:
        return !1
    }
}
function $l(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Wl(e) {
    if (Z) {
        var t = Be;
        if (t) {
            var n = t;
            if (!Ac(e, t)) {
                if ($l(e))
                    throw Error(N(418));
                t = Gt(n.nextSibling);
                var r = Ue;
                t && Ac(e, t) ? Up(r, n) : (e.flags = e.flags & -4097 | 2,
                Z = !1,
                Ue = e)
            }
        } else {
            if ($l(e))
                throw Error(N(418));
            e.flags = e.flags & -4097 | 2,
            Z = !1,
            Ue = e
        }
    }
}
function Lc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ue = e
}
function $o(e) {
    if (e !== Ue)
        return !1;
    if (!Z)
        return Lc(e),
        Z = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Fl(e.type, e.memoizedProps)),
    t && (t = Be)) {
        if ($l(e))
            throw $p(),
            Error(N(418));
        for (; t; )
            Up(e, t),
            t = Gt(t.nextSibling)
    }
    if (Lc(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(N(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Be = Gt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Be = null
        }
    } else
        Be = Ue ? Gt(e.stateNode.nextSibling) : null;
    return !0
}
function $p() {
    for (var e = Be; e; )
        e = Gt(e.nextSibling)
}
function ar() {
    Be = Ue = null,
    Z = !1
}
function qa(e) {
    st === null ? st = [e] : st.push(e)
}
var n0 = bt.ReactCurrentBatchConfig;
function Tr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(N(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(N(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var l = o.refs;
                s === null ? delete l[i] : l[i] = s
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(N(284));
        if (!n._owner)
            throw Error(N(290, e))
    }
    return e
}
function Wo(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Dc(e) {
    var t = e._init;
    return t(e._payload)
}
function Wp(e) {
    function t(m, p) {
        if (e) {
            var h = m.deletions;
            h === null ? (m.deletions = [p],
            m.flags |= 16) : h.push(p)
        }
    }
    function n(m, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(m, p),
            p = p.sibling;
        return null
    }
    function r(m, p) {
        for (m = new Map; p !== null; )
            p.key !== null ? m.set(p.key, p) : m.set(p.index, p),
            p = p.sibling;
        return m
    }
    function o(m, p) {
        return m = Xt(m, p),
        m.index = 0,
        m.sibling = null,
        m
    }
    function i(m, p, h) {
        return m.index = h,
        e ? (h = m.alternate,
        h !== null ? (h = h.index,
        h < p ? (m.flags |= 2,
        p) : h) : (m.flags |= 2,
        p)) : (m.flags |= 1048576,
        p)
    }
    function s(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function l(m, p, h, C) {
        return p === null || p.tag !== 6 ? (p = qs(h, m.mode, C),
        p.return = m,
        p) : (p = o(p, h),
        p.return = m,
        p)
    }
    function a(m, p, h, C) {
        var P = h.type;
        return P === Fn ? d(m, p, h.props.children, C, h.key) : p !== null && (p.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Vt && Dc(P) === p.type) ? (C = o(p, h.props),
        C.ref = Tr(m, p, h),
        C.return = m,
        C) : (C = pi(h.type, h.key, h.props, null, m.mode, C),
        C.ref = Tr(m, p, h),
        C.return = m,
        C)
    }
    function u(m, p, h, C) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== h.containerInfo || p.stateNode.implementation !== h.implementation ? (p = Zs(h, m.mode, C),
        p.return = m,
        p) : (p = o(p, h.children || []),
        p.return = m,
        p)
    }
    function d(m, p, h, C, P) {
        return p === null || p.tag !== 7 ? (p = Sn(h, m.mode, C, P),
        p.return = m,
        p) : (p = o(p, h),
        p.return = m,
        p)
    }
    function c(m, p, h) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = qs("" + p, m.mode, h),
            p.return = m,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Lo:
                return h = pi(p.type, p.key, p.props, null, m.mode, h),
                h.ref = Tr(m, null, p),
                h.return = m,
                h;
            case On:
                return p = Zs(p, m.mode, h),
                p.return = m,
                p;
            case Vt:
                var C = p._init;
                return c(m, C(p._payload), h)
            }
            if (Lr(p) || wr(p))
                return p = Sn(p, m.mode, h, null),
                p.return = m,
                p;
            Wo(m, p)
        }
        return null
    }
    function f(m, p, h, C) {
        var P = p !== null ? p.key : null;
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return P !== null ? null : l(m, p, "" + h, C);
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case Lo:
                return h.key === P ? a(m, p, h, C) : null;
            case On:
                return h.key === P ? u(m, p, h, C) : null;
            case Vt:
                return P = h._init,
                f(m, p, P(h._payload), C)
            }
            if (Lr(h) || wr(h))
                return P !== null ? null : d(m, p, h, C, null);
            Wo(m, h)
        }
        return null
    }
    function g(m, p, h, C, P) {
        if (typeof C == "string" && C !== "" || typeof C == "number")
            return m = m.get(h) || null,
            l(p, m, "" + C, P);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
            case Lo:
                return m = m.get(C.key === null ? h : C.key) || null,
                a(p, m, C, P);
            case On:
                return m = m.get(C.key === null ? h : C.key) || null,
                u(p, m, C, P);
            case Vt:
                var T = C._init;
                return g(m, p, h, T(C._payload), P)
            }
            if (Lr(C) || wr(C))
                return m = m.get(h) || null,
                d(p, m, C, P, null);
            Wo(p, C)
        }
        return null
    }
    function x(m, p, h, C) {
        for (var P = null, T = null, E = p, k = p = 0, A = null; E !== null && k < h.length; k++) {
            E.index > k ? (A = E,
            E = null) : A = E.sibling;
            var L = f(m, E, h[k], C);
            if (L === null) {
                E === null && (E = A);
                break
            }
            e && E && L.alternate === null && t(m, E),
            p = i(L, p, k),
            T === null ? P = L : T.sibling = L,
            T = L,
            E = A
        }
        if (k === h.length)
            return n(m, E),
            Z && dn(m, k),
            P;
        if (E === null) {
            for (; k < h.length; k++)
                E = c(m, h[k], C),
                E !== null && (p = i(E, p, k),
                T === null ? P = E : T.sibling = E,
                T = E);
            return Z && dn(m, k),
            P
        }
        for (E = r(m, E); k < h.length; k++)
            A = g(E, m, k, h[k], C),
            A !== null && (e && A.alternate !== null && E.delete(A.key === null ? k : A.key),
            p = i(A, p, k),
            T === null ? P = A : T.sibling = A,
            T = A);
        return e && E.forEach(function($) {
            return t(m, $)
        }),
        Z && dn(m, k),
        P
    }
    function y(m, p, h, C) {
        var P = wr(h);
        if (typeof P != "function")
            throw Error(N(150));
        if (h = P.call(h),
        h == null)
            throw Error(N(151));
        for (var T = P = null, E = p, k = p = 0, A = null, L = h.next(); E !== null && !L.done; k++,
        L = h.next()) {
            E.index > k ? (A = E,
            E = null) : A = E.sibling;
            var $ = f(m, E, L.value, C);
            if ($ === null) {
                E === null && (E = A);
                break
            }
            e && E && $.alternate === null && t(m, E),
            p = i($, p, k),
            T === null ? P = $ : T.sibling = $,
            T = $,
            E = A
        }
        if (L.done)
            return n(m, E),
            Z && dn(m, k),
            P;
        if (E === null) {
            for (; !L.done; k++,
            L = h.next())
                L = c(m, L.value, C),
                L !== null && (p = i(L, p, k),
                T === null ? P = L : T.sibling = L,
                T = L);
            return Z && dn(m, k),
            P
        }
        for (E = r(m, E); !L.done; k++,
        L = h.next())
            L = g(E, m, k, L.value, C),
            L !== null && (e && L.alternate !== null && E.delete(L.key === null ? k : L.key),
            p = i(L, p, k),
            T === null ? P = L : T.sibling = L,
            T = L);
        return e && E.forEach(function(V) {
            return t(m, V)
        }),
        Z && dn(m, k),
        P
    }
    function S(m, p, h, C) {
        if (typeof h == "object" && h !== null && h.type === Fn && h.key === null && (h = h.props.children),
        typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case Lo:
                e: {
                    for (var P = h.key, T = p; T !== null; ) {
                        if (T.key === P) {
                            if (P = h.type,
                            P === Fn) {
                                if (T.tag === 7) {
                                    n(m, T.sibling),
                                    p = o(T, h.props.children),
                                    p.return = m,
                                    m = p;
                                    break e
                                }
                            } else if (T.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Vt && Dc(P) === T.type) {
                                n(m, T.sibling),
                                p = o(T, h.props),
                                p.ref = Tr(m, T, h),
                                p.return = m,
                                m = p;
                                break e
                            }
                            n(m, T);
                            break
                        } else
                            t(m, T);
                        T = T.sibling
                    }
                    h.type === Fn ? (p = Sn(h.props.children, m.mode, C, h.key),
                    p.return = m,
                    m = p) : (C = pi(h.type, h.key, h.props, null, m.mode, C),
                    C.ref = Tr(m, p, h),
                    C.return = m,
                    m = C)
                }
                return s(m);
            case On:
                e: {
                    for (T = h.key; p !== null; ) {
                        if (p.key === T)
                            if (p.tag === 4 && p.stateNode.containerInfo === h.containerInfo && p.stateNode.implementation === h.implementation) {
                                n(m, p.sibling),
                                p = o(p, h.children || []),
                                p.return = m,
                                m = p;
                                break e
                            } else {
                                n(m, p);
                                break
                            }
                        else
                            t(m, p);
                        p = p.sibling
                    }
                    p = Zs(h, m.mode, C),
                    p.return = m,
                    m = p
                }
                return s(m);
            case Vt:
                return T = h._init,
                S(m, p, T(h._payload), C)
            }
            if (Lr(h))
                return x(m, p, h, C);
            if (wr(h))
                return y(m, p, h, C);
            Wo(m, h)
        }
        return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h,
        p !== null && p.tag === 6 ? (n(m, p.sibling),
        p = o(p, h),
        p.return = m,
        m = p) : (n(m, p),
        p = qs(h, m.mode, C),
        p.return = m,
        m = p),
        s(m)) : n(m, p)
    }
    return S
}
var ur = Wp(!0)
  , Hp = Wp(!1)
  , Ri = on(null)
  , bi = null
  , Kn = null
  , Za = null;
function Ja() {
    Za = Kn = bi = null
}
function eu(e) {
    var t = Ri.current;
    Y(Ri),
    e._currentValue = t
}
function Hl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function or(e, t) {
    bi = e,
    Za = Kn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ae = !0),
    e.firstContext = null)
}
function et(e) {
    var t = e._currentValue;
    if (Za !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Kn === null) {
            if (bi === null)
                throw Error(N(308));
            Kn = e,
            bi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Kn = Kn.next = e;
    return t
}
var gn = null;
function tu(e) {
    gn === null ? gn = [e] : gn.push(e)
}
function Gp(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    tu(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Nt(e, r)
}
function Nt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var _t = !1;
function nu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Kp(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Ct(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Kt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    U & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Nt(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    tu(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Nt(e, n)
}
function li(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Ba(e, n)
    }
}
function Vc(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Mi(e, t, n, r) {
    var o = e.updateQueue;
    _t = !1;
    var i = o.firstBaseUpdate
      , s = o.lastBaseUpdate
      , l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        s === null ? i = u : s.next = u,
        s = a;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        l = d.lastBaseUpdate,
        l !== s && (l === null ? d.firstBaseUpdate = u : l.next = u,
        d.lastBaseUpdate = a))
    }
    if (i !== null) {
        var c = o.baseState;
        s = 0,
        d = u = a = null,
        l = i;
        do {
            var f = l.lane
              , g = l.eventTime;
            if ((r & f) === f) {
                d !== null && (d = d.next = {
                    eventTime: g,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var x = e
                      , y = l;
                    switch (f = t,
                    g = n,
                    y.tag) {
                    case 1:
                        if (x = y.payload,
                        typeof x == "function") {
                            c = x.call(g, c, f);
                            break e
                        }
                        c = x;
                        break e;
                    case 3:
                        x.flags = x.flags & -65537 | 128;
                    case 0:
                        if (x = y.payload,
                        f = typeof x == "function" ? x.call(g, c, f) : x,
                        f == null)
                            break e;
                        c = re({}, c, f);
                        break e;
                    case 2:
                        _t = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                f = o.effects,
                f === null ? o.effects = [l] : f.push(l))
            } else
                g = {
                    eventTime: g,
                    lane: f,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                d === null ? (u = d = g,
                a = c) : d = d.next = g,
                s |= f;
            if (l = l.next,
            l === null) {
                if (l = o.shared.pending,
                l === null)
                    break;
                f = l,
                l = f.next,
                f.next = null,
                o.lastBaseUpdate = f,
                o.shared.pending = null
            }
        } while (1);
        if (d === null && (a = c),
        o.baseState = a,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = d,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                s |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        kn |= s,
        e.lanes = s,
        e.memoizedState = c
    }
}
function _c(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(N(191, o));
                o.call(r)
            }
        }
}
var To = {}
  , ht = on(To)
  , ao = on(To)
  , uo = on(To);
function vn(e) {
    if (e === To)
        throw Error(N(174));
    return e
}
function ru(e, t) {
    switch (G(uo, t),
    G(ao, e),
    G(ht, To),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Tl(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Tl(t, e)
    }
    Y(ht),
    G(ht, t)
}
function cr() {
    Y(ht),
    Y(ao),
    Y(uo)
}
function Qp(e) {
    vn(uo.current);
    var t = vn(ht.current)
      , n = Tl(t, e.type);
    t !== n && (G(ao, e),
    G(ht, n))
}
function ou(e) {
    ao.current === e && (Y(ht),
    Y(ao))
}
var ee = on(0);
function Ai(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Hs = [];
function iu() {
    for (var e = 0; e < Hs.length; e++)
        Hs[e]._workInProgressVersionPrimary = null;
    Hs.length = 0
}
var ai = bt.ReactCurrentDispatcher
  , Gs = bt.ReactCurrentBatchConfig
  , Tn = 0
  , ne = null
  , ce = null
  , pe = null
  , Li = !1
  , $r = !1
  , co = 0
  , r0 = 0;
function xe() {
    throw Error(N(321))
}
function su(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!ut(e[n], t[n]))
            return !1;
    return !0
}
function lu(e, t, n, r, o, i) {
    if (Tn = i,
    ne = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    ai.current = e === null || e.memoizedState === null ? l0 : a0,
    e = n(r, o),
    $r) {
        i = 0;
        do {
            if ($r = !1,
            co = 0,
            25 <= i)
                throw Error(N(301));
            i += 1,
            pe = ce = null,
            t.updateQueue = null,
            ai.current = u0,
            e = n(r, o)
        } while ($r)
    }
    if (ai.current = Di,
    t = ce !== null && ce.next !== null,
    Tn = 0,
    pe = ce = ne = null,
    Li = !1,
    t)
        throw Error(N(300));
    return e
}
function au() {
    var e = co !== 0;
    return co = 0,
    e
}
function dt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return pe === null ? ne.memoizedState = pe = e : pe = pe.next = e,
    pe
}
function tt() {
    if (ce === null) {
        var e = ne.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ce.next;
    var t = pe === null ? ne.memoizedState : pe.next;
    if (t !== null)
        pe = t,
        ce = e;
    else {
        if (e === null)
            throw Error(N(310));
        ce = e,
        e = {
            memoizedState: ce.memoizedState,
            baseState: ce.baseState,
            baseQueue: ce.baseQueue,
            queue: ce.queue,
            next: null
        },
        pe === null ? ne.memoizedState = pe = e : pe = pe.next = e
    }
    return pe
}
function fo(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Ks(e) {
    var t = tt()
      , n = t.queue;
    if (n === null)
        throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = ce
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next,
            i.next = s
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var l = s = null
          , a = null
          , u = i;
        do {
            var d = u.lane;
            if ((Tn & d) === d)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var c = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = c,
                s = r) : a = a.next = c,
                ne.lanes |= d,
                kn |= d
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? s = r : a.next = l,
        ut(r, t.memoizedState) || (Ae = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            ne.lanes |= i,
            kn |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Qs(e) {
    var t = tt()
      , n = t.queue;
    if (n === null)
        throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do
            i = e(i, s.action),
            s = s.next;
        while (s !== o);
        ut(i, t.memoizedState) || (Ae = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Yp() {}
function Xp(e, t) {
    var n = ne
      , r = tt()
      , o = t()
      , i = !ut(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    Ae = !0),
    r = r.queue,
    uu(Jp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || pe !== null && pe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        po(9, Zp.bind(null, n, r, o, t), void 0, null),
        me === null)
            throw Error(N(349));
        Tn & 30 || qp(n, t, o)
    }
    return o
}
function qp(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ne.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ne.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Zp(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    eh(t) && th(e)
}
function Jp(e, t, n) {
    return n(function() {
        eh(t) && th(e)
    })
}
function eh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !ut(e, n)
    } catch {
        return !0
    }
}
function th(e) {
    var t = Nt(e, 1);
    t !== null && at(t, e, 1, -1)
}
function Ic(e) {
    var t = dt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fo,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = s0.bind(null, ne, e),
    [t.memoizedState, e]
}
function po(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ne.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ne.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function nh() {
    return tt().memoizedState
}
function ui(e, t, n, r) {
    var o = dt();
    ne.flags |= e,
    o.memoizedState = po(1 | t, n, void 0, r === void 0 ? null : r)
}
function rs(e, t, n, r) {
    var o = tt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ce !== null) {
        var s = ce.memoizedState;
        if (i = s.destroy,
        r !== null && su(r, s.deps)) {
            o.memoizedState = po(t, n, i, r);
            return
        }
    }
    ne.flags |= e,
    o.memoizedState = po(1 | t, n, i, r)
}
function Oc(e, t) {
    return ui(8390656, 8, e, t)
}
function uu(e, t) {
    return rs(2048, 8, e, t)
}
function rh(e, t) {
    return rs(4, 2, e, t)
}
function oh(e, t) {
    return rs(4, 4, e, t)
}
function ih(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function sh(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    rs(4, 4, ih.bind(null, t, e), n)
}
function cu() {}
function lh(e, t) {
    var n = tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && su(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function ah(e, t) {
    var n = tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && su(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function uh(e, t, n) {
    return Tn & 21 ? (ut(n, t) || (n = hp(),
    ne.lanes |= n,
    kn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ae = !0),
    e.memoizedState = n)
}
function o0(e, t) {
    var n = W;
    W = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Gs.transition;
    Gs.transition = {};
    try {
        e(!1),
        t()
    } finally {
        W = n,
        Gs.transition = r
    }
}
function ch() {
    return tt().memoizedState
}
function i0(e, t, n) {
    var r = Yt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    dh(e))
        fh(t, n);
    else if (n = Gp(e, t, n, r),
    n !== null) {
        var o = Ne();
        at(n, e, r, o),
        ph(n, t, r)
    }
}
function s0(e, t, n) {
    var r = Yt(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (dh(e))
        fh(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var s = t.lastRenderedState
                  , l = i(s, n);
                if (o.hasEagerState = !0,
                o.eagerState = l,
                ut(l, s)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o,
                    tu(t)) : (o.next = a.next,
                    a.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Gp(e, t, o, r),
        n !== null && (o = Ne(),
        at(n, e, r, o),
        ph(n, t, r))
    }
}
function dh(e) {
    var t = e.alternate;
    return e === ne || t !== null && t === ne
}
function fh(e, t) {
    $r = Li = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function ph(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Ba(e, n)
    }
}
var Di = {
    readContext: et,
    useCallback: xe,
    useContext: xe,
    useEffect: xe,
    useImperativeHandle: xe,
    useInsertionEffect: xe,
    useLayoutEffect: xe,
    useMemo: xe,
    useReducer: xe,
    useRef: xe,
    useState: xe,
    useDebugValue: xe,
    useDeferredValue: xe,
    useTransition: xe,
    useMutableSource: xe,
    useSyncExternalStore: xe,
    useId: xe,
    unstable_isNewReconciler: !1
}
  , l0 = {
    readContext: et,
    useCallback: function(e, t) {
        return dt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: et,
    useEffect: Oc,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        ui(4194308, 4, ih.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return ui(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return ui(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = dt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = dt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = i0.bind(null, ne, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = dt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Ic,
    useDebugValue: cu,
    useDeferredValue: function(e) {
        return dt().memoizedState = e
    },
    useTransition: function() {
        var e = Ic(!1)
          , t = e[0];
        return e = o0.bind(null, e[1]),
        dt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ne
          , o = dt();
        if (Z) {
            if (n === void 0)
                throw Error(N(407));
            n = n()
        } else {
            if (n = t(),
            me === null)
                throw Error(N(349));
            Tn & 30 || qp(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        Oc(Jp.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        po(9, Zp.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = dt()
          , t = me.identifierPrefix;
        if (Z) {
            var n = wt
              , r = xt;
            n = (r & ~(1 << 32 - lt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = co++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = r0++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , a0 = {
    readContext: et,
    useCallback: lh,
    useContext: et,
    useEffect: uu,
    useImperativeHandle: sh,
    useInsertionEffect: rh,
    useLayoutEffect: oh,
    useMemo: ah,
    useReducer: Ks,
    useRef: nh,
    useState: function() {
        return Ks(fo)
    },
    useDebugValue: cu,
    useDeferredValue: function(e) {
        var t = tt();
        return uh(t, ce.memoizedState, e)
    },
    useTransition: function() {
        var e = Ks(fo)[0]
          , t = tt().memoizedState;
        return [e, t]
    },
    useMutableSource: Yp,
    useSyncExternalStore: Xp,
    useId: ch,
    unstable_isNewReconciler: !1
}
  , u0 = {
    readContext: et,
    useCallback: lh,
    useContext: et,
    useEffect: uu,
    useImperativeHandle: sh,
    useInsertionEffect: rh,
    useLayoutEffect: oh,
    useMemo: ah,
    useReducer: Qs,
    useRef: nh,
    useState: function() {
        return Qs(fo)
    },
    useDebugValue: cu,
    useDeferredValue: function(e) {
        var t = tt();
        return ce === null ? t.memoizedState = e : uh(t, ce.memoizedState, e)
    },
    useTransition: function() {
        var e = Qs(fo)[0]
          , t = tt().memoizedState;
        return [e, t]
    },
    useMutableSource: Yp,
    useSyncExternalStore: Xp,
    useId: ch,
    unstable_isNewReconciler: !1
};
function ot(e, t) {
    if (e && e.defaultProps) {
        t = re({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Gl(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : re({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var os = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Mn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ne()
          , o = Yt(e)
          , i = Ct(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = Kt(e, i, o),
        t !== null && (at(t, e, o, r),
        li(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ne()
          , o = Yt(e)
          , i = Ct(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = Kt(e, i, o),
        t !== null && (at(t, e, o, r),
        li(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ne()
          , r = Yt(e)
          , o = Ct(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = Kt(e, o, r),
        t !== null && (at(t, e, r, n),
        li(t, e, r))
    }
};
function Fc(e, t, n, r, o, i, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !oo(n, r) || !oo(o, i) : !0
}
function hh(e, t, n) {
    var r = !1
      , o = en
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = et(i) : (o = De(t) ? Pn : Pe.current,
    r = t.contextTypes,
    i = (r = r != null) ? lr(e, o) : en),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = os,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function zc(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && os.enqueueReplaceState(t, t.state, null)
}
function Kl(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    nu(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = et(i) : (i = De(t) ? Pn : Pe.current,
    o.context = lr(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Gl(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && os.enqueueReplaceState(o, o.state, null),
    Mi(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function dr(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Iv(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Ys(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Ql(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var c0 = typeof WeakMap == "function" ? WeakMap : Map;
function mh(e, t, n) {
    n = Ct(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        _i || (_i = !0,
        oa = r),
        Ql(e, t)
    }
    ,
    n
}
function gh(e, t, n) {
    n = Ct(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            Ql(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Ql(e, t),
        typeof r != "function" && (Qt === null ? Qt = new Set([this]) : Qt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function Bc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new c0;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = E0.bind(null, e, t, n),
    t.then(e, e))
}
function Uc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function $c(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ct(-1, 1),
    t.tag = 2,
    Kt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var d0 = bt.ReactCurrentOwner
  , Ae = !1;
function ke(e, t, n, r) {
    t.child = e === null ? Hp(t, null, n, r) : ur(t, e.child, n, r)
}
function Wc(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return or(t, o),
    r = lu(e, t, n, r, i, o),
    n = au(),
    e !== null && !Ae ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    jt(e, t, o)) : (Z && n && Ya(t),
    t.flags |= 1,
    ke(e, t, r, o),
    t.child)
}
function Hc(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !yu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        vh(e, t, i, r, o)) : (e = pi(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : oo,
        n(s, r) && e.ref === t.ref)
            return jt(e, t, o)
    }
    return t.flags |= 1,
    e = Xt(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function vh(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (oo(i, r) && e.ref === t.ref)
            if (Ae = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Ae = !0);
            else
                return t.lanes = e.lanes,
                jt(e, t, o)
    }
    return Yl(e, t, n, r, o)
}
function yh(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            G(Yn, Fe),
            Fe |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                G(Yn, Fe),
                Fe |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            G(Yn, Fe),
            Fe |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        G(Yn, Fe),
        Fe |= r;
    return ke(e, t, o, n),
    t.child
}
function xh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Yl(e, t, n, r, o) {
    var i = De(n) ? Pn : Pe.current;
    return i = lr(t, i),
    or(t, o),
    n = lu(e, t, n, r, i, o),
    r = au(),
    e !== null && !Ae ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    jt(e, t, o)) : (Z && r && Ya(t),
    t.flags |= 1,
    ke(e, t, n, o),
    t.child)
}
function Gc(e, t, n, r, o) {
    if (De(n)) {
        var i = !0;
        ki(t)
    } else
        i = !1;
    if (or(t, o),
    t.stateNode === null)
        ci(e, t),
        hh(t, n, r),
        Kl(t, n, r, o),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , l = t.memoizedProps;
        s.props = l;
        var a = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = et(u) : (u = De(n) ? Pn : Pe.current,
        u = lr(t, u));
        var d = n.getDerivedStateFromProps
          , c = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        c || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && zc(t, s, r, u),
        _t = !1;
        var f = t.memoizedState;
        s.state = f,
        Mi(t, r, s, o),
        a = t.memoizedState,
        l !== r || f !== a || Le.current || _t ? (typeof d == "function" && (Gl(t, n, d, r),
        a = t.memoizedState),
        (l = _t || Fc(t, n, l, r, f, a, u)) ? (c || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        s.props = r,
        s.state = a,
        s.context = u,
        r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        Kp(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : ot(t.type, l),
        s.props = u,
        c = t.pendingProps,
        f = s.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = et(a) : (a = De(n) ? Pn : Pe.current,
        a = lr(t, a));
        var g = n.getDerivedStateFromProps;
        (d = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== c || f !== a) && zc(t, s, r, a),
        _t = !1,
        f = t.memoizedState,
        s.state = f,
        Mi(t, r, s, o);
        var x = t.memoizedState;
        l !== c || f !== x || Le.current || _t ? (typeof g == "function" && (Gl(t, n, g, r),
        x = t.memoizedState),
        (u = _t || Fc(t, n, u, r, f, x, a) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, a)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = x),
        s.props = r,
        s.state = x,
        s.context = a,
        r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Xl(e, t, n, r, i, o)
}
function Xl(e, t, n, r, o, i) {
    xh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return o && Mc(t, n, !1),
        jt(e, t, i);
    r = t.stateNode,
    d0.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = ur(t, e.child, null, i),
    t.child = ur(t, null, l, i)) : ke(e, t, l, i),
    t.memoizedState = r.state,
    o && Mc(t, n, !0),
    t.child
}
function wh(e) {
    var t = e.stateNode;
    t.pendingContext ? bc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && bc(e, t.context, !1),
    ru(e, t.containerInfo)
}
function Kc(e, t, n, r, o) {
    return ar(),
    qa(o),
    t.flags |= 256,
    ke(e, t, n, r),
    t.child
}
var ql = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Zl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Sh(e, t, n) {
    var r = t.pendingProps, o = ee.current, i = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    G(ee, o & 1),
    e === null)
        return Wl(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = s) : i = ls(s, r, 0, null),
        e = Sn(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Zl(n),
        t.memoizedState = ql,
        e) : du(t, s));
    if (o = e.memoizedState,
    o !== null && (l = o.dehydrated,
    l !== null))
        return f0(e, t, s, r, l, o, n);
    if (i) {
        i = r.fallback,
        s = t.mode,
        o = e.child,
        l = o.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = Xt(o, a),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        l !== null ? i = Xt(l, i) : (i = Sn(i, s, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        s = e.child.memoizedState,
        s = s === null ? Zl(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        i.memoizedState = s,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = ql,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = Xt(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function du(e, t) {
    return t = ls({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ho(e, t, n, r) {
    return r !== null && qa(r),
    ur(t, e.child, null, n),
    e = du(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function f0(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Ys(Error(N(422))),
        Ho(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = ls({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = Sn(i, o, s, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && ur(t, e.child, null, s),
        t.child.memoizedState = Zl(s),
        t.memoizedState = ql,
        i);
    if (!(t.mode & 1))
        return Ho(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        i = Error(N(419)),
        r = Ys(i, r, void 0),
        Ho(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0,
    Ae || l) {
        if (r = me,
        r !== null) {
            switch (s & -s) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            Nt(e, o),
            at(r, e, o, -1))
        }
        return vu(),
        r = Ys(Error(N(421))),
        Ho(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = T0.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    Be = Gt(o.nextSibling),
    Ue = t,
    Z = !0,
    st = null,
    e !== null && (Ye[Xe++] = xt,
    Ye[Xe++] = wt,
    Ye[Xe++] = En,
    xt = e.id,
    wt = e.overflow,
    En = t),
    t = du(t, r.children),
    t.flags |= 4096,
    t)
}
function Qc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Hl(e.return, t, n)
}
function Xs(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function Ch(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (ke(e, t, r.children, n),
    r = ee.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Qc(e, n, t);
                else if (e.tag === 19)
                    Qc(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (G(ee, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && Ai(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Xs(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Ai(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Xs(t, !0, n, null, i);
            break;
        case "together":
            Xs(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function ci(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function jt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    kn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(N(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Xt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Xt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function p0(e, t, n) {
    switch (t.tag) {
    case 3:
        wh(t),
        ar();
        break;
    case 5:
        Qp(t);
        break;
    case 1:
        De(t.type) && ki(t);
        break;
    case 4:
        ru(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        G(Ri, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (G(ee, ee.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Sh(e, t, n) : (G(ee, ee.current & 1),
            e = jt(e, t, n),
            e !== null ? e.sibling : null);
        G(ee, ee.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Ch(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        G(ee, ee.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        yh(e, t, n)
    }
    return jt(e, t, n)
}
var Ph, Jl, Eh, Th;
Ph = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Jl = function() {}
;
Eh = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        vn(ht.current);
        var i = null;
        switch (n) {
        case "input":
            o = Sl(e, o),
            r = Sl(e, r),
            i = [];
            break;
        case "select":
            o = re({}, o, {
                value: void 0
            }),
            r = re({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = El(e, o),
            r = El(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ei)
        }
        kl(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (qr.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in a)
                            a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}),
                            n[s] = a[s])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (qr.hasOwnProperty(u) ? (a != null && u === "onScroll" && Q("scroll", e),
                    i || l === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Th = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function kr(e, t) {
    if (!Z)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function we(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function h0(e, t, n) {
    var r = t.pendingProps;
    switch (Xa(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return we(t),
        null;
    case 1:
        return De(t.type) && Ti(),
        we(t),
        null;
    case 3:
        return r = t.stateNode,
        cr(),
        Y(Le),
        Y(Pe),
        iu(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && ($o(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        st !== null && (la(st),
        st = null))),
        Jl(e, t),
        we(t),
        null;
    case 5:
        ou(t);
        var o = vn(uo.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Eh(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(N(166));
                return we(t),
                null
            }
            if (e = vn(ht.current),
            $o(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[ft] = t,
                r[lo] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    Q("cancel", r),
                    Q("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    Q("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Vr.length; o++)
                        Q(Vr[o], r);
                    break;
                case "source":
                    Q("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    Q("error", r),
                    Q("load", r);
                    break;
                case "details":
                    Q("toggle", r);
                    break;
                case "input":
                    rc(r, i),
                    Q("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    Q("invalid", r);
                    break;
                case "textarea":
                    ic(r, i),
                    Q("invalid", r)
                }
                kl(n, i),
                o = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var l = i[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Uo(r.textContent, l, e),
                        o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Uo(r.textContent, l, e),
                        o = ["children", "" + l]) : qr.hasOwnProperty(s) && l != null && s === "onScroll" && Q("scroll", r)
                    }
                switch (n) {
                case "input":
                    Do(r),
                    oc(r, i, !0);
                    break;
                case "textarea":
                    Do(r),
                    sc(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Ei)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Jf(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[ft] = t,
                e[lo] = r,
                Ph(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = Nl(n, r),
                    n) {
                    case "dialog":
                        Q("cancel", e),
                        Q("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Q("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Vr.length; o++)
                            Q(Vr[o], e);
                        o = r;
                        break;
                    case "source":
                        Q("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Q("error", e),
                        Q("load", e),
                        o = r;
                        break;
                    case "details":
                        Q("toggle", e),
                        o = r;
                        break;
                    case "input":
                        rc(e, r),
                        o = Sl(e, r),
                        Q("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = re({}, r, {
                            value: void 0
                        }),
                        Q("invalid", e);
                        break;
                    case "textarea":
                        ic(e, r),
                        o = El(e, r),
                        Q("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    kl(n, o),
                    l = o;
                    for (i in l)
                        if (l.hasOwnProperty(i)) {
                            var a = l[i];
                            i === "style" ? np(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && ep(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Zr(e, a) : typeof a == "number" && Zr(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (qr.hasOwnProperty(i) ? a != null && i === "onScroll" && Q("scroll", e) : a != null && Va(e, i, a, s))
                        }
                    switch (n) {
                    case "input":
                        Do(e),
                        oc(e, r, !1);
                        break;
                    case "textarea":
                        Do(e),
                        sc(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Jt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? er(e, !!r.multiple, i, !1) : r.defaultValue != null && er(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = Ei)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return we(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Th(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(N(166));
            if (n = vn(uo.current),
            vn(ht.current),
            $o(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[ft] = t,
                (i = r.nodeValue !== n) && (e = Ue,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Uo(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Uo(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[ft] = t,
                t.stateNode = r
        }
        return we(t),
        null;
    case 13:
        if (Y(ee),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Z && Be !== null && t.mode & 1 && !(t.flags & 128))
                $p(),
                ar(),
                t.flags |= 98560,
                i = !1;
            else if (i = $o(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(N(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(N(317));
                    i[ft] = t
                } else
                    ar(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                we(t),
                i = !1
            } else
                st !== null && (la(st),
                st = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ee.current & 1 ? de === 0 && (de = 3) : vu())),
        t.updateQueue !== null && (t.flags |= 4),
        we(t),
        null);
    case 4:
        return cr(),
        Jl(e, t),
        e === null && io(t.stateNode.containerInfo),
        we(t),
        null;
    case 10:
        return eu(t.type._context),
        we(t),
        null;
    case 17:
        return De(t.type) && Ti(),
        we(t),
        null;
    case 19:
        if (Y(ee),
        i = t.memoizedState,
        i === null)
            return we(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = i.rendering,
        s === null)
            if (r)
                kr(i, !1);
            else {
                if (de !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = Ai(e),
                        s !== null) {
                            for (t.flags |= 128,
                            kr(i, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                s = i.alternate,
                                s === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                e = s.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return G(ee, ee.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && le() > fr && (t.flags |= 128,
                r = !0,
                kr(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Ai(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    kr(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !s.alternate && !Z)
                        return we(t),
                        null
                } else
                    2 * le() - i.renderingStartTime > fr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    kr(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = i.last,
            n !== null ? n.sibling = s : t.child = s,
            i.last = s)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = le(),
        t.sibling = null,
        n = ee.current,
        G(ee, r ? n & 1 | 2 : n & 1),
        t) : (we(t),
        null);
    case 22:
    case 23:
        return gu(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Fe & 1073741824 && (we(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : we(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(N(156, t.tag))
}
function m0(e, t) {
    switch (Xa(t),
    t.tag) {
    case 1:
        return De(t.type) && Ti(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return cr(),
        Y(Le),
        Y(Pe),
        iu(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return ou(t),
        null;
    case 13:
        if (Y(ee),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(N(340));
            ar()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return Y(ee),
        null;
    case 4:
        return cr(),
        null;
    case 10:
        return eu(t.type._context),
        null;
    case 22:
    case 23:
        return gu(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Go = !1
  , Ce = !1
  , g0 = typeof WeakSet == "function" ? WeakSet : Set
  , R = null;
function Qn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                oe(e, t, r)
            }
        else
            n.current = null
}
function ea(e, t, n) {
    try {
        n()
    } catch (r) {
        oe(e, t, r)
    }
}
var Yc = !1;
function v0(e, t) {
    if (Il = Si,
    e = bp(),
    Qa(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , d = 0
                      , c = e
                      , f = null;
                    t: for (; ; ) {
                        for (var g; c !== n || o !== 0 && c.nodeType !== 3 || (l = s + o),
                        c !== i || r !== 0 && c.nodeType !== 3 || (a = s + r),
                        c.nodeType === 3 && (s += c.nodeValue.length),
                        (g = c.firstChild) !== null; )
                            f = c,
                            c = g;
                        for (; ; ) {
                            if (c === e)
                                break t;
                            if (f === n && ++u === o && (l = s),
                            f === i && ++d === r && (a = s),
                            (g = c.nextSibling) !== null)
                                break;
                            c = f,
                            f = c.parentNode
                        }
                        c = g
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Ol = {
        focusedElem: e,
        selectionRange: n
    },
    Si = !1,
    R = t; R !== null; )
        if (t = R,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            R = e;
        else
            for (; R !== null; ) {
                t = R;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var y = x.memoizedProps
                                  , S = x.memoizedState
                                  , m = t.stateNode
                                  , p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : ot(t.type, y), S);
                                m.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var h = t.stateNode.containerInfo;
                            h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(N(163))
                        }
                } catch (C) {
                    oe(t, t.return, C)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    R = e;
                    break
                }
                R = t.return
            }
    return x = Yc,
    Yc = !1,
    x
}
function Wr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && ea(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function is(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function ta(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function kh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    kh(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[ft],
    delete t[lo],
    delete t[Bl],
    delete t[Jy],
    delete t[e0])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Nh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Xc(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Nh(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function na(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Ei));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (na(e, t, n),
        e = e.sibling; e !== null; )
            na(e, t, n),
            e = e.sibling
}
function ra(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ra(e, t, n),
        e = e.sibling; e !== null; )
            ra(e, t, n),
            e = e.sibling
}
var ge = null
  , it = !1;
function At(e, t, n) {
    for (n = n.child; n !== null; )
        jh(e, t, n),
        n = n.sibling
}
function jh(e, t, n) {
    if (pt && typeof pt.onCommitFiberUnmount == "function")
        try {
            pt.onCommitFiberUnmount(qi, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Ce || Qn(n, t);
    case 6:
        var r = ge
          , o = it;
        ge = null,
        At(e, t, n),
        ge = r,
        it = o,
        ge !== null && (it ? (e = ge,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ge.removeChild(n.stateNode));
        break;
    case 18:
        ge !== null && (it ? (e = ge,
        n = n.stateNode,
        e.nodeType === 8 ? $s(e.parentNode, n) : e.nodeType === 1 && $s(e, n),
        no(e)) : $s(ge, n.stateNode));
        break;
    case 4:
        r = ge,
        o = it,
        ge = n.stateNode.containerInfo,
        it = !0,
        At(e, t, n),
        ge = r,
        it = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ce && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , s = i.destroy;
                i = i.tag,
                s !== void 0 && (i & 2 || i & 4) && ea(n, t, s),
                o = o.next
            } while (o !== r)
        }
        At(e, t, n);
        break;
    case 1:
        if (!Ce && (Qn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                oe(n, t, l)
            }
        At(e, t, n);
        break;
    case 21:
        At(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ce = (r = Ce) || n.memoizedState !== null,
        At(e, t, n),
        Ce = r) : At(e, t, n);
        break;
    default:
        At(e, t, n)
    }
}
function qc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new g0),
        t.forEach(function(r) {
            var o = k0.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function nt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , s = t
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        ge = l.stateNode,
                        it = !1;
                        break e;
                    case 3:
                        ge = l.stateNode.containerInfo,
                        it = !0;
                        break e;
                    case 4:
                        ge = l.stateNode.containerInfo,
                        it = !0;
                        break e
                    }
                    l = l.return
                }
                if (ge === null)
                    throw Error(N(160));
                jh(i, s, o),
                ge = null,
                it = !1;
                var a = o.alternate;
                a !== null && (a.return = null),
                o.return = null
            } catch (u) {
                oe(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Rh(t, e),
            t = t.sibling
}
function Rh(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (nt(t, e),
        ct(e),
        r & 4) {
            try {
                Wr(3, e, e.return),
                is(3, e)
            } catch (y) {
                oe(e, e.return, y)
            }
            try {
                Wr(5, e, e.return)
            } catch (y) {
                oe(e, e.return, y)
            }
        }
        break;
    case 1:
        nt(t, e),
        ct(e),
        r & 512 && n !== null && Qn(n, n.return);
        break;
    case 5:
        if (nt(t, e),
        ct(e),
        r & 512 && n !== null && Qn(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Zr(o, "")
            } catch (y) {
                oe(e, e.return, y)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , s = n !== null ? n.memoizedProps : i
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && i.type === "radio" && i.name != null && qf(o, i),
                    Nl(l, s);
                    var u = Nl(l, i);
                    for (s = 0; s < a.length; s += 2) {
                        var d = a[s]
                          , c = a[s + 1];
                        d === "style" ? np(o, c) : d === "dangerouslySetInnerHTML" ? ep(o, c) : d === "children" ? Zr(o, c) : Va(o, d, c, u)
                    }
                    switch (l) {
                    case "input":
                        Cl(o, i);
                        break;
                    case "textarea":
                        Zf(o, i);
                        break;
                    case "select":
                        var f = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var g = i.value;
                        g != null ? er(o, !!i.multiple, g, !1) : f !== !!i.multiple && (i.defaultValue != null ? er(o, !!i.multiple, i.defaultValue, !0) : er(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[lo] = i
                } catch (y) {
                    oe(e, e.return, y)
                }
        }
        break;
    case 6:
        if (nt(t, e),
        ct(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(N(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (y) {
                oe(e, e.return, y)
            }
        }
        break;
    case 3:
        if (nt(t, e),
        ct(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                no(t.containerInfo)
            } catch (y) {
                oe(e, e.return, y)
            }
        break;
    case 4:
        nt(t, e),
        ct(e);
        break;
    case 13:
        nt(t, e),
        ct(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (hu = le())),
        r & 4 && qc(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Ce = (u = Ce) || d,
        nt(t, e),
        Ce = u) : nt(t, e),
        ct(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (R = e,
                d = e.child; d !== null; ) {
                    for (c = R = d; R !== null; ) {
                        switch (f = R,
                        g = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Wr(4, f, f.return);
                            break;
                        case 1:
                            Qn(f, f.return);
                            var x = f.stateNode;
                            if (typeof x.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    x.props = t.memoizedProps,
                                    x.state = t.memoizedState,
                                    x.componentWillUnmount()
                                } catch (y) {
                                    oe(r, n, y)
                                }
                            }
                            break;
                        case 5:
                            Qn(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                Jc(c);
                                continue
                            }
                        }
                        g !== null ? (g.return = f,
                        R = g) : Jc(c)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            c = e; ; ) {
                if (c.tag === 5) {
                    if (d === null) {
                        d = c;
                        try {
                            o = c.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = c.stateNode,
                            a = c.memoizedProps.style,
                            s = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = tp("display", s))
                        } catch (y) {
                            oe(e, e.return, y)
                        }
                    }
                } else if (c.tag === 6) {
                    if (d === null)
                        try {
                            c.stateNode.nodeValue = u ? "" : c.memoizedProps
                        } catch (y) {
                            oe(e, e.return, y)
                        }
                } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
                    c.child.return = c,
                    c = c.child;
                    continue
                }
                if (c === e)
                    break e;
                for (; c.sibling === null; ) {
                    if (c.return === null || c.return === e)
                        break e;
                    d === c && (d = null),
                    c = c.return
                }
                d === c && (d = null),
                c.sibling.return = c.return,
                c = c.sibling
            }
        }
        break;
    case 19:
        nt(t, e),
        ct(e),
        r & 4 && qc(e);
        break;
    case 21:
        break;
    default:
        nt(t, e),
        ct(e)
    }
}
function ct(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Nh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(N(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Zr(o, ""),
                r.flags &= -33);
                var i = Xc(e);
                ra(e, i, o);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , l = Xc(e);
                na(e, l, s);
                break;
            default:
                throw Error(N(161))
            }
        } catch (a) {
            oe(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function y0(e, t, n) {
    R = e,
    bh(e)
}
function bh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; R !== null; ) {
        var o = R
          , i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || Go;
            if (!s) {
                var l = o.alternate
                  , a = l !== null && l.memoizedState !== null || Ce;
                l = Go;
                var u = Ce;
                if (Go = s,
                (Ce = a) && !u)
                    for (R = o; R !== null; )
                        s = R,
                        a = s.child,
                        s.tag === 22 && s.memoizedState !== null ? ed(o) : a !== null ? (a.return = s,
                        R = a) : ed(o);
                for (; i !== null; )
                    R = i,
                    bh(i),
                    i = i.sibling;
                R = o,
                Go = l,
                Ce = u
            }
            Zc(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            R = i) : Zc(e)
    }
}
function Zc(e) {
    for (; R !== null; ) {
        var t = R;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ce || is(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ce)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : ot(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && _c(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            _c(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var c = d.dehydrated;
                                    c !== null && no(c)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(N(163))
                    }
                Ce || t.flags & 512 && ta(t)
            } catch (f) {
                oe(t, t.return, f)
            }
        }
        if (t === e) {
            R = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            R = n;
            break
        }
        R = t.return
    }
}
function Jc(e) {
    for (; R !== null; ) {
        var t = R;
        if (t === e) {
            R = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            R = n;
            break
        }
        R = t.return
    }
}
function ed(e) {
    for (; R !== null; ) {
        var t = R;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    is(4, t)
                } catch (a) {
                    oe(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        oe(t, o, a)
                    }
                }
                var i = t.return;
                try {
                    ta(t)
                } catch (a) {
                    oe(t, i, a)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    ta(t)
                } catch (a) {
                    oe(t, s, a)
                }
            }
        } catch (a) {
            oe(t, t.return, a)
        }
        if (t === e) {
            R = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            R = l;
            break
        }
        R = t.return
    }
}
var x0 = Math.ceil
  , Vi = bt.ReactCurrentDispatcher
  , fu = bt.ReactCurrentOwner
  , Je = bt.ReactCurrentBatchConfig
  , U = 0
  , me = null
  , ue = null
  , ve = 0
  , Fe = 0
  , Yn = on(0)
  , de = 0
  , ho = null
  , kn = 0
  , ss = 0
  , pu = 0
  , Hr = null
  , Me = null
  , hu = 0
  , fr = 1 / 0
  , vt = null
  , _i = !1
  , oa = null
  , Qt = null
  , Ko = !1
  , Bt = null
  , Ii = 0
  , Gr = 0
  , ia = null
  , di = -1
  , fi = 0;
function Ne() {
    return U & 6 ? le() : di !== -1 ? di : di = le()
}
function Yt(e) {
    return e.mode & 1 ? U & 2 && ve !== 0 ? ve & -ve : n0.transition !== null ? (fi === 0 && (fi = hp()),
    fi) : (e = W,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Sp(e.type)),
    e) : 1
}
function at(e, t, n, r) {
    if (50 < Gr)
        throw Gr = 0,
        ia = null,
        Error(N(185));
    Co(e, n, r),
    (!(U & 2) || e !== me) && (e === me && (!(U & 2) && (ss |= n),
    de === 4 && Ft(e, ve)),
    Ve(e, r),
    n === 1 && U === 0 && !(t.mode & 1) && (fr = le() + 500,
    ns && sn()))
}
function Ve(e, t) {
    var n = e.callbackNode;
    ny(e, t);
    var r = wi(e, e === me ? ve : 0);
    if (r === 0)
        n !== null && uc(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && uc(n),
        t === 1)
            e.tag === 0 ? t0(td.bind(null, e)) : zp(td.bind(null, e)),
            qy(function() {
                !(U & 6) && sn()
            }),
            n = null;
        else {
            switch (mp(r)) {
            case 1:
                n = za;
                break;
            case 4:
                n = fp;
                break;
            case 16:
                n = xi;
                break;
            case 536870912:
                n = pp;
                break;
            default:
                n = xi
            }
            n = Oh(n, Mh.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Mh(e, t) {
    if (di = -1,
    fi = 0,
    U & 6)
        throw Error(N(327));
    var n = e.callbackNode;
    if (ir() && e.callbackNode !== n)
        return null;
    var r = wi(e, e === me ? ve : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Oi(e, r);
    else {
        t = r;
        var o = U;
        U |= 2;
        var i = Lh();
        (me !== e || ve !== t) && (vt = null,
        fr = le() + 500,
        wn(e, t));
        do
            try {
                C0();
                break
            } catch (l) {
                Ah(e, l)
            }
        while (1);
        Ja(),
        Vi.current = i,
        U = o,
        ue !== null ? t = 0 : (me = null,
        ve = 0,
        t = de)
    }
    if (t !== 0) {
        if (t === 2 && (o = Al(e),
        o !== 0 && (r = o,
        t = sa(e, o))),
        t === 1)
            throw n = ho,
            wn(e, 0),
            Ft(e, r),
            Ve(e, le()),
            n;
        if (t === 6)
            Ft(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !w0(o) && (t = Oi(e, r),
            t === 2 && (i = Al(e),
            i !== 0 && (r = i,
            t = sa(e, i))),
            t === 1))
                throw n = ho,
                wn(e, 0),
                Ft(e, r),
                Ve(e, le()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(N(345));
            case 2:
                fn(e, Me, vt);
                break;
            case 3:
                if (Ft(e, r),
                (r & 130023424) === r && (t = hu + 500 - le(),
                10 < t)) {
                    if (wi(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Ne(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = zl(fn.bind(null, e, Me, vt), t);
                    break
                }
                fn(e, Me, vt);
                break;
            case 4:
                if (Ft(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var s = 31 - lt(r);
                    i = 1 << s,
                    s = t[s],
                    s > o && (o = s),
                    r &= ~i
                }
                if (r = o,
                r = le() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * x0(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = zl(fn.bind(null, e, Me, vt), r);
                    break
                }
                fn(e, Me, vt);
                break;
            case 5:
                fn(e, Me, vt);
                break;
            default:
                throw Error(N(329))
            }
        }
    }
    return Ve(e, le()),
    e.callbackNode === n ? Mh.bind(null, e) : null
}
function sa(e, t) {
    var n = Hr;
    return e.current.memoizedState.isDehydrated && (wn(e, t).flags |= 256),
    e = Oi(e, t),
    e !== 2 && (t = Me,
    Me = n,
    t !== null && la(t)),
    e
}
function la(e) {
    Me === null ? Me = e : Me.push.apply(Me, e)
}
function w0(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!ut(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Ft(e, t) {
    for (t &= ~pu,
    t &= ~ss,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - lt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function td(e) {
    if (U & 6)
        throw Error(N(327));
    ir();
    var t = wi(e, 0);
    if (!(t & 1))
        return Ve(e, le()),
        null;
    var n = Oi(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Al(e);
        r !== 0 && (t = r,
        n = sa(e, r))
    }
    if (n === 1)
        throw n = ho,
        wn(e, 0),
        Ft(e, t),
        Ve(e, le()),
        n;
    if (n === 6)
        throw Error(N(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    fn(e, Me, vt),
    Ve(e, le()),
    null
}
function mu(e, t) {
    var n = U;
    U |= 1;
    try {
        return e(t)
    } finally {
        U = n,
        U === 0 && (fr = le() + 500,
        ns && sn())
    }
}
function Nn(e) {
    Bt !== null && Bt.tag === 0 && !(U & 6) && ir();
    var t = U;
    U |= 1;
    var n = Je.transition
      , r = W;
    try {
        if (Je.transition = null,
        W = 1,
        e)
            return e()
    } finally {
        W = r,
        Je.transition = n,
        U = t,
        !(U & 6) && sn()
    }
}
function gu() {
    Fe = Yn.current,
    Y(Yn)
}
function wn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Xy(n)),
    ue !== null)
        for (n = ue.return; n !== null; ) {
            var r = n;
            switch (Xa(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Ti();
                break;
            case 3:
                cr(),
                Y(Le),
                Y(Pe),
                iu();
                break;
            case 5:
                ou(r);
                break;
            case 4:
                cr();
                break;
            case 13:
                Y(ee);
                break;
            case 19:
                Y(ee);
                break;
            case 10:
                eu(r.type._context);
                break;
            case 22:
            case 23:
                gu()
            }
            n = n.return
        }
    if (me = e,
    ue = e = Xt(e.current, null),
    ve = Fe = t,
    de = 0,
    ho = null,
    pu = ss = kn = 0,
    Me = Hr = null,
    gn !== null) {
        for (t = 0; t < gn.length; t++)
            if (n = gn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o,
                    r.next = s
                }
                n.pending = r
            }
        gn = null
    }
    return e
}
function Ah(e, t) {
    do {
        var n = ue;
        try {
            if (Ja(),
            ai.current = Di,
            Li) {
                for (var r = ne.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                Li = !1
            }
            if (Tn = 0,
            pe = ce = ne = null,
            $r = !1,
            co = 0,
            fu.current = null,
            n === null || n.return === null) {
                de = 1,
                ho = t,
                ue = null;
                break
            }
            e: {
                var i = e
                  , s = n.return
                  , l = n
                  , a = t;
                if (t = ve,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , d = l
                      , c = d.tag;
                    if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                        var f = d.alternate;
                        f ? (d.updateQueue = f.updateQueue,
                        d.memoizedState = f.memoizedState,
                        d.lanes = f.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var g = Uc(s);
                    if (g !== null) {
                        g.flags &= -257,
                        $c(g, s, l, i, t),
                        g.mode & 1 && Bc(i, u, t),
                        t = g,
                        a = u;
                        var x = t.updateQueue;
                        if (x === null) {
                            var y = new Set;
                            y.add(a),
                            t.updateQueue = y
                        } else
                            x.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Bc(i, u, t),
                            vu();
                            break e
                        }
                        a = Error(N(426))
                    }
                } else if (Z && l.mode & 1) {
                    var S = Uc(s);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                        $c(S, s, l, i, t),
                        qa(dr(a, l));
                        break e
                    }
                }
                i = a = dr(a, l),
                de !== 4 && (de = 2),
                Hr === null ? Hr = [i] : Hr.push(i),
                i = s;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var m = mh(i, a, t);
                        Vc(i, m);
                        break e;
                    case 1:
                        l = a;
                        var p = i.type
                          , h = i.stateNode;
                        if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Qt === null || !Qt.has(h)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var C = gh(i, l, t);
                            Vc(i, C);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            Vh(n)
        } catch (P) {
            t = P,
            ue === n && n !== null && (ue = n = n.return);
            continue
        }
        break
    } while (1)
}
function Lh() {
    var e = Vi.current;
    return Vi.current = Di,
    e === null ? Di : e
}
function vu() {
    (de === 0 || de === 3 || de === 2) && (de = 4),
    me === null || !(kn & 268435455) && !(ss & 268435455) || Ft(me, ve)
}
function Oi(e, t) {
    var n = U;
    U |= 2;
    var r = Lh();
    (me !== e || ve !== t) && (vt = null,
    wn(e, t));
    do
        try {
            S0();
            break
        } catch (o) {
            Ah(e, o)
        }
    while (1);
    if (Ja(),
    U = n,
    Vi.current = r,
    ue !== null)
        throw Error(N(261));
    return me = null,
    ve = 0,
    de
}
function S0() {
    for (; ue !== null; )
        Dh(ue)
}
function C0() {
    for (; ue !== null && !Kv(); )
        Dh(ue)
}
function Dh(e) {
    var t = Ih(e.alternate, e, Fe);
    e.memoizedProps = e.pendingProps,
    t === null ? Vh(e) : ue = t,
    fu.current = null
}
function Vh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = m0(n, t),
            n !== null) {
                n.flags &= 32767,
                ue = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                de = 6,
                ue = null;
                return
            }
        } else if (n = h0(n, t, Fe),
        n !== null) {
            ue = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ue = t;
            return
        }
        ue = t = e
    } while (t !== null);
    de === 0 && (de = 5)
}
function fn(e, t, n) {
    var r = W
      , o = Je.transition;
    try {
        Je.transition = null,
        W = 1,
        P0(e, t, n, r)
    } finally {
        Je.transition = o,
        W = r
    }
    return null
}
function P0(e, t, n, r) {
    do
        ir();
    while (Bt !== null);
    if (U & 6)
        throw Error(N(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(N(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (ry(e, i),
    e === me && (ue = me = null,
    ve = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ko || (Ko = !0,
    Oh(xi, function() {
        return ir(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = Je.transition,
        Je.transition = null;
        var s = W;
        W = 1;
        var l = U;
        U |= 4,
        fu.current = null,
        v0(e, n),
        Rh(n, e),
        $y(Ol),
        Si = !!Il,
        Ol = Il = null,
        e.current = n,
        y0(n),
        Qv(),
        U = l,
        W = s,
        Je.transition = i
    } else
        e.current = n;
    if (Ko && (Ko = !1,
    Bt = e,
    Ii = o),
    i = e.pendingLanes,
    i === 0 && (Qt = null),
    qv(n.stateNode),
    Ve(e, le()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (_i)
        throw _i = !1,
        e = oa,
        oa = null,
        e;
    return Ii & 1 && e.tag !== 0 && ir(),
    i = e.pendingLanes,
    i & 1 ? e === ia ? Gr++ : (Gr = 0,
    ia = e) : Gr = 0,
    sn(),
    null
}
function ir() {
    if (Bt !== null) {
        var e = mp(Ii)
          , t = Je.transition
          , n = W;
        try {
            if (Je.transition = null,
            W = 16 > e ? 16 : e,
            Bt === null)
                var r = !1;
            else {
                if (e = Bt,
                Bt = null,
                Ii = 0,
                U & 6)
                    throw Error(N(331));
                var o = U;
                for (U |= 4,
                R = e.current; R !== null; ) {
                    var i = R
                      , s = i.child;
                    if (R.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (R = u; R !== null; ) {
                                    var d = R;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Wr(8, d, i)
                                    }
                                    var c = d.child;
                                    if (c !== null)
                                        c.return = d,
                                        R = c;
                                    else
                                        for (; R !== null; ) {
                                            d = R;
                                            var f = d.sibling
                                              , g = d.return;
                                            if (kh(d),
                                            d === u) {
                                                R = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = g,
                                                R = f;
                                                break
                                            }
                                            R = g
                                        }
                                }
                            }
                            var x = i.alternate;
                            if (x !== null) {
                                var y = x.child;
                                if (y !== null) {
                                    x.child = null;
                                    do {
                                        var S = y.sibling;
                                        y.sibling = null,
                                        y = S
                                    } while (y !== null)
                                }
                            }
                            R = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                        R = s;
                    else
                        e: for (; R !== null; ) {
                            if (i = R,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Wr(9, i, i.return)
                                }
                            var m = i.sibling;
                            if (m !== null) {
                                m.return = i.return,
                                R = m;
                                break e
                            }
                            R = i.return
                        }
                }
                var p = e.current;
                for (R = p; R !== null; ) {
                    s = R;
                    var h = s.child;
                    if (s.subtreeFlags & 2064 && h !== null)
                        h.return = s,
                        R = h;
                    else
                        e: for (s = p; R !== null; ) {
                            if (l = R,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        is(9, l)
                                    }
                                } catch (P) {
                                    oe(l, l.return, P)
                                }
                            if (l === s) {
                                R = null;
                                break e
                            }
                            var C = l.sibling;
                            if (C !== null) {
                                C.return = l.return,
                                R = C;
                                break e
                            }
                            R = l.return
                        }
                }
                if (U = o,
                sn(),
                pt && typeof pt.onPostCommitFiberRoot == "function")
                    try {
                        pt.onPostCommitFiberRoot(qi, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            W = n,
            Je.transition = t
        }
    }
    return !1
}
function nd(e, t, n) {
    t = dr(n, t),
    t = mh(e, t, 1),
    e = Kt(e, t, 1),
    t = Ne(),
    e !== null && (Co(e, 1, t),
    Ve(e, t))
}
function oe(e, t, n) {
    if (e.tag === 3)
        nd(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                nd(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Qt === null || !Qt.has(r))) {
                    e = dr(n, e),
                    e = gh(t, e, 1),
                    t = Kt(t, e, 1),
                    e = Ne(),
                    t !== null && (Co(t, 1, e),
                    Ve(t, e));
                    break
                }
            }
            t = t.return
        }
}
function E0(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ne(),
    e.pingedLanes |= e.suspendedLanes & n,
    me === e && (ve & n) === n && (de === 4 || de === 3 && (ve & 130023424) === ve && 500 > le() - hu ? wn(e, 0) : pu |= n),
    Ve(e, t)
}
function _h(e, t) {
    t === 0 && (e.mode & 1 ? (t = Io,
    Io <<= 1,
    !(Io & 130023424) && (Io = 4194304)) : t = 1);
    var n = Ne();
    e = Nt(e, t),
    e !== null && (Co(e, t, n),
    Ve(e, n))
}
function T0(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    _h(e, n)
}
function k0(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(N(314))
    }
    r !== null && r.delete(t),
    _h(e, n)
}
var Ih;
Ih = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Le.current)
            Ae = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ae = !1,
                p0(e, t, n);
            Ae = !!(e.flags & 131072)
        }
    else
        Ae = !1,
        Z && t.flags & 1048576 && Bp(t, ji, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        ci(e, t),
        e = t.pendingProps;
        var o = lr(t, Pe.current);
        or(t, n),
        o = lu(null, t, r, e, o, n);
        var i = au();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        De(r) ? (i = !0,
        ki(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        nu(t),
        o.updater = os,
        t.stateNode = o,
        o._reactInternals = t,
        Kl(t, r, e, n),
        t = Xl(null, t, r, !0, i, n)) : (t.tag = 0,
        Z && i && Ya(t),
        ke(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (ci(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = j0(r),
            e = ot(r, e),
            o) {
            case 0:
                t = Yl(null, t, r, e, n);
                break e;
            case 1:
                t = Gc(null, t, r, e, n);
                break e;
            case 11:
                t = Wc(null, t, r, e, n);
                break e;
            case 14:
                t = Hc(null, t, r, ot(r.type, e), n);
                break e
            }
            throw Error(N(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ot(r, o),
        Yl(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ot(r, o),
        Gc(e, t, r, o, n);
    case 3:
        e: {
            if (wh(t),
            e === null)
                throw Error(N(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            Kp(e, t),
            Mi(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = dr(Error(N(423)), t),
                    t = Kc(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = dr(Error(N(424)), t),
                    t = Kc(e, t, r, n, o);
                    break e
                } else
                    for (Be = Gt(t.stateNode.containerInfo.firstChild),
                    Ue = t,
                    Z = !0,
                    st = null,
                    n = Hp(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (ar(),
                r === o) {
                    t = jt(e, t, n);
                    break e
                }
                ke(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Qp(t),
        e === null && Wl(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        s = o.children,
        Fl(r, o) ? s = null : i !== null && Fl(r, i) && (t.flags |= 32),
        xh(e, t),
        ke(e, t, s, n),
        t.child;
    case 6:
        return e === null && Wl(t),
        null;
    case 13:
        return Sh(e, t, n);
    case 4:
        return ru(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = ur(t, null, r, n) : ke(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ot(r, o),
        Wc(e, t, r, o, n);
    case 7:
        return ke(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ke(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ke(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            s = o.value,
            G(Ri, r._currentValue),
            r._currentValue = s,
            i !== null)
                if (ut(i.value, s)) {
                    if (i.children === o.children && !Le.current) {
                        t = jt(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var l = i.dependencies;
                        if (l !== null) {
                            s = i.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (i.tag === 1) {
                                        a = Ct(-1, n & -n),
                                        a.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? a.next = a : (a.next = d.next,
                                            d.next = a),
                                            u.pending = a
                                        }
                                    }
                                    i.lanes |= n,
                                    a = i.alternate,
                                    a !== null && (a.lanes |= n),
                                    Hl(i.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (i.tag === 10)
                            s = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return,
                            s === null)
                                throw Error(N(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            Hl(s, n, t),
                            s = i.sibling
                        } else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (i = s.sibling,
                                i !== null) {
                                    i.return = s.return,
                                    s = i;
                                    break
                                }
                                s = s.return
                            }
                        i = s
                    }
            ke(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        or(t, n),
        o = et(o),
        r = r(o),
        t.flags |= 1,
        ke(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = ot(r, t.pendingProps),
        o = ot(r.type, o),
        Hc(e, t, r, o, n);
    case 15:
        return vh(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ot(r, o),
        ci(e, t),
        t.tag = 1,
        De(r) ? (e = !0,
        ki(t)) : e = !1,
        or(t, n),
        hh(t, r, o),
        Kl(t, r, o, n),
        Xl(null, t, r, !0, e, n);
    case 19:
        return Ch(e, t, n);
    case 22:
        return yh(e, t, n)
    }
    throw Error(N(156, t.tag))
}
;
function Oh(e, t) {
    return dp(e, t)
}
function N0(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function qe(e, t, n, r) {
    return new N0(e,t,n,r)
}
function yu(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function j0(e) {
    if (typeof e == "function")
        return yu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Ia)
            return 11;
        if (e === Oa)
            return 14
    }
    return 2
}
function Xt(e, t) {
    var n = e.alternate;
    return n === null ? (n = qe(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function pi(e, t, n, r, o, i) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        yu(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case Fn:
            return Sn(n.children, o, i, t);
        case _a:
            s = 8,
            o |= 8;
            break;
        case vl:
            return e = qe(12, n, t, o | 2),
            e.elementType = vl,
            e.lanes = i,
            e;
        case yl:
            return e = qe(13, n, t, o),
            e.elementType = yl,
            e.lanes = i,
            e;
        case xl:
            return e = qe(19, n, t, o),
            e.elementType = xl,
            e.lanes = i,
            e;
        case Qf:
            return ls(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Gf:
                    s = 10;
                    break e;
                case Kf:
                    s = 9;
                    break e;
                case Ia:
                    s = 11;
                    break e;
                case Oa:
                    s = 14;
                    break e;
                case Vt:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(N(130, e == null ? e : typeof e, ""))
        }
    return t = qe(s, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function Sn(e, t, n, r) {
    return e = qe(7, e, r, t),
    e.lanes = n,
    e
}
function ls(e, t, n, r) {
    return e = qe(22, e, r, t),
    e.elementType = Qf,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function qs(e, t, n) {
    return e = qe(6, e, null, t),
    e.lanes = n,
    e
}
function Zs(e, t, n) {
    return t = qe(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function R0(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = As(0),
    this.expirationTimes = As(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = As(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function xu(e, t, n, r, o, i, s, l, a) {
    return e = new R0(e,t,n,l,a),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = qe(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    nu(i),
    e
}
function b0(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: On,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Fh(e) {
    if (!e)
        return en;
    e = e._reactInternals;
    e: {
        if (Mn(e) !== e || e.tag !== 1)
            throw Error(N(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (De(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(N(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (De(n))
            return Fp(e, n, t)
    }
    return t
}
function zh(e, t, n, r, o, i, s, l, a) {
    return e = xu(n, r, !0, e, o, i, s, l, a),
    e.context = Fh(null),
    n = e.current,
    r = Ne(),
    o = Yt(n),
    i = Ct(r, o),
    i.callback = t ?? null,
    Kt(n, i, o),
    e.current.lanes = o,
    Co(e, o, r),
    Ve(e, r),
    e
}
function as(e, t, n, r) {
    var o = t.current
      , i = Ne()
      , s = Yt(o);
    return n = Fh(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Ct(i, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Kt(o, t, s),
    e !== null && (at(e, o, s, i),
    li(e, o, s)),
    s
}
function Fi(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function rd(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function wu(e, t) {
    rd(e, t),
    (e = e.alternate) && rd(e, t)
}
function M0() {
    return null
}
var Bh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Su(e) {
    this._internalRoot = e
}
us.prototype.render = Su.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(N(409));
    as(e, t, null, null)
}
;
us.prototype.unmount = Su.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Nn(function() {
            as(null, e, null, null)
        }),
        t[kt] = null
    }
}
;
function us(e) {
    this._internalRoot = e
}
us.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = yp();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++)
            ;
        Ot.splice(n, 0, e),
        n === 0 && wp(e)
    }
}
;
function Cu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function cs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function od() {}
function A0(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = Fi(s);
                i.call(u)
            }
        }
        var s = zh(t, r, e, 0, null, !1, !1, "", od);
        return e._reactRootContainer = s,
        e[kt] = s.current,
        io(e.nodeType === 8 ? e.parentNode : e),
        Nn(),
        s
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = Fi(a);
            l.call(u)
        }
    }
    var a = xu(e, 0, !1, null, null, !1, !1, "", od);
    return e._reactRootContainer = a,
    e[kt] = a.current,
    io(e.nodeType === 8 ? e.parentNode : e),
    Nn(function() {
        as(t, a, n, r)
    }),
    a
}
function ds(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var a = Fi(s);
                l.call(a)
            }
        }
        as(t, s, e, o)
    } else
        s = A0(n, t, e, o, r);
    return Fi(s)
}
gp = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Dr(t.pendingLanes);
            n !== 0 && (Ba(t, n | 1),
            Ve(t, le()),
            !(U & 6) && (fr = le() + 500,
            sn()))
        }
        break;
    case 13:
        Nn(function() {
            var r = Nt(e, 1);
            if (r !== null) {
                var o = Ne();
                at(r, e, 1, o)
            }
        }),
        wu(e, 1)
    }
}
;
Ua = function(e) {
    if (e.tag === 13) {
        var t = Nt(e, 134217728);
        if (t !== null) {
            var n = Ne();
            at(t, e, 134217728, n)
        }
        wu(e, 134217728)
    }
}
;
vp = function(e) {
    if (e.tag === 13) {
        var t = Yt(e)
          , n = Nt(e, t);
        if (n !== null) {
            var r = Ne();
            at(n, e, t, r)
        }
        wu(e, t)
    }
}
;
yp = function() {
    return W
}
;
xp = function(e, t) {
    var n = W;
    try {
        return W = e,
        t()
    } finally {
        W = n
    }
}
;
Rl = function(e, t, n) {
    switch (t) {
    case "input":
        if (Cl(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = ts(r);
                    if (!o)
                        throw Error(N(90));
                    Xf(r),
                    Cl(r, o)
                }
            }
        }
        break;
    case "textarea":
        Zf(e, n);
        break;
    case "select":
        t = n.value,
        t != null && er(e, !!n.multiple, t, !1)
    }
}
;
ip = mu;
sp = Nn;
var L0 = {
    usingClientEntryPoint: !1,
    Events: [Eo, $n, ts, rp, op, mu]
}
  , Nr = {
    findFiberByHostInstance: mn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , D0 = {
    bundleType: Nr.bundleType,
    version: Nr.version,
    rendererPackageName: Nr.rendererPackageName,
    rendererConfig: Nr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: bt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = up(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Nr.findFiberByHostInstance || M0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qo.isDisabled && Qo.supportsFiber)
        try {
            qi = Qo.inject(D0),
            pt = Qo
        } catch {}
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L0;
He.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Cu(t))
        throw Error(N(200));
    return b0(e, t, null, n)
}
;
He.createRoot = function(e, t) {
    if (!Cu(e))
        throw Error(N(299));
    var n = !1
      , r = ""
      , o = Bh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = xu(e, 1, !1, null, null, n, !1, r, o),
    e[kt] = t.current,
    io(e.nodeType === 8 ? e.parentNode : e),
    new Su(t)
}
;
He.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","),
        Error(N(268, e)));
    return e = up(t),
    e = e === null ? null : e.stateNode,
    e
}
;
He.flushSync = function(e) {
    return Nn(e)
}
;
He.hydrate = function(e, t, n) {
    if (!cs(t))
        throw Error(N(200));
    return ds(null, e, t, !0, n)
}
;
He.hydrateRoot = function(e, t, n) {
    if (!Cu(e))
        throw Error(N(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , s = Bh;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = zh(t, null, e, 1, n ?? null, o, !1, i, s),
    e[kt] = t.current,
    io(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new us(t)
}
;
He.render = function(e, t, n) {
    if (!cs(t))
        throw Error(N(200));
    return ds(null, e, t, !1, n)
}
;
He.unmountComponentAtNode = function(e) {
    if (!cs(e))
        throw Error(N(40));
    return e._reactRootContainer ? (Nn(function() {
        ds(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[kt] = null
        })
    }),
    !0) : !1
}
;
He.unstable_batchedUpdates = mu;
He.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!cs(n))
        throw Error(N(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(N(38));
    return ds(e, t, n, !1, r)
}
;
He.version = "18.3.1-next-f1338f8080-20240426";
function Uh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uh)
        } catch (e) {
            console.error(e)
        }
}
Uh(),
Uf.exports = He;
var fs = Uf.exports;
const V0 = Rf(fs);
var id = fs;
ml.createRoot = id.createRoot,
ml.hydrateRoot = id.hydrateRoot;
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function mo() {
    return mo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    mo.apply(this, arguments)
}
var Ut;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Ut || (Ut = {}));
const sd = "popstate";
function _0(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: i, search: s, hash: l} = r.location;
        return aa("", {
            pathname: i,
            search: s,
            hash: l
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : Wh(o)
    }
    return O0(t, n, null, e)
}
function fe(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function $h(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function I0() {
    return Math.random().toString(36).substr(2, 8)
}
function ld(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function aa(e, t, n, r) {
    return n === void 0 && (n = null),
    mo({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? yr(t) : t, {
        state: n,
        key: t && t.key || r || I0()
    })
}
function Wh(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function yr(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function O0(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: i=!1} = r
      , s = o.history
      , l = Ut.Pop
      , a = null
      , u = d();
    u == null && (u = 0,
    s.replaceState(mo({}, s.state, {
        idx: u
    }), ""));
    function d() {
        return (s.state || {
            idx: null
        }).idx
    }
    function c() {
        l = Ut.Pop;
        let S = d()
          , m = S == null ? null : S - u;
        u = S,
        a && a({
            action: l,
            location: y.location,
            delta: m
        })
    }
    function f(S, m) {
        l = Ut.Push;
        let p = aa(y.location, S, m);
        n && n(p, S),
        u = d() + 1;
        let h = ld(p, u)
          , C = y.createHref(p);
        try {
            s.pushState(h, "", C)
        } catch (P) {
            if (P instanceof DOMException && P.name === "DataCloneError")
                throw P;
            o.location.assign(C)
        }
        i && a && a({
            action: l,
            location: y.location,
            delta: 1
        })
    }
    function g(S, m) {
        l = Ut.Replace;
        let p = aa(y.location, S, m);
        n && n(p, S),
        u = d();
        let h = ld(p, u)
          , C = y.createHref(p);
        s.replaceState(h, "", C),
        i && a && a({
            action: l,
            location: y.location,
            delta: 0
        })
    }
    function x(S) {
        let m = o.location.origin !== "null" ? o.location.origin : o.location.href
          , p = typeof S == "string" ? S : Wh(S);
        return p = p.replace(/ $/, "%20"),
        fe(m, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,m)
    }
    let y = {
        get action() {
            return l
        },
        get location() {
            return e(o, s)
        },
        listen(S) {
            if (a)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(sd, c),
            a = S,
            () => {
                o.removeEventListener(sd, c),
                a = null
            }
        },
        createHref(S) {
            return t(o, S)
        },
        createURL: x,
        encodeLocation(S) {
            let m = x(S);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: f,
        replace: g,
        go(S) {
            return s.go(S)
        }
    };
    return y
}
var ad;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(ad || (ad = {}));
function F0(e, t, n) {
    return n === void 0 && (n = "/"),
    z0(e, t, n, !1)
}
function z0(e, t, n, r) {
    let o = typeof t == "string" ? yr(t) : t
      , i = Kh(o.pathname || "/", n);
    if (i == null)
        return null;
    let s = Hh(e);
    B0(s);
    let l = null;
    for (let a = 0; l == null && a < s.length; ++a) {
        let u = Z0(i);
        l = X0(s[a], u, r)
    }
    return l
}
function Hh(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (i, s, l) => {
        let a = {
            relativePath: l === void 0 ? i.path || "" : l,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        a.relativePath.startsWith("/") && (fe(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        a.relativePath = a.relativePath.slice(r.length));
        let u = Cn([r, a.relativePath])
          , d = n.concat(a);
        i.children && i.children.length > 0 && (fe(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Hh(i.children, t, d, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: Q0(u, i.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (i, s) => {
        var l;
        if (i.path === "" || !((l = i.path) != null && l.includes("?")))
            o(i, s);
        else
            for (let a of Gh(i.path))
                o(i, s, a)
    }
    ),
    t
}
function Gh(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [i, ""] : [i];
    let s = Gh(r.join("/"))
      , l = [];
    return l.push(...s.map(a => a === "" ? i : [i, a].join("/"))),
    o && l.push(...s),
    l.map(a => e.startsWith("/") && a === "" ? "/" : a)
}
function B0(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : Y0(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const U0 = /^:[\w-]+$/
  , $0 = 3
  , W0 = 2
  , H0 = 1
  , G0 = 10
  , K0 = -2
  , ud = e => e === "*";
function Q0(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(ud) && (r += K0),
    t && (r += W0),
    n.filter(o => !ud(o)).reduce( (o, i) => o + (U0.test(i) ? $0 : i === "" ? H0 : G0), r)
}
function Y0(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function X0(e, t, n) {
    n === void 0 && (n = !1);
    let {routesMeta: r} = e
      , o = {}
      , i = "/"
      , s = [];
    for (let l = 0; l < r.length; ++l) {
        let a = r[l]
          , u = l === r.length - 1
          , d = i === "/" ? t : t.slice(i.length) || "/"
          , c = cd({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: u
        }, d)
          , f = a.route;
        if (!c && u && n && !r[r.length - 1].route.index && (c = cd({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: !1
        }, d)),
        !c)
            return null;
        Object.assign(o, c.params),
        s.push({
            params: o,
            pathname: Cn([i, c.pathname]),
            pathnameBase: ox(Cn([i, c.pathnameBase])),
            route: f
        }),
        c.pathnameBase !== "/" && (i = Cn([i, c.pathnameBase]))
    }
    return s
}
function cd(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = q0(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let i = o[0]
      , s = i.replace(/(.)\/+$/, "$1")
      , l = o.slice(1);
    return {
        params: r.reduce( (u, d, c) => {
            let {paramName: f, isOptional: g} = d;
            if (f === "*") {
                let y = l[c] || "";
                s = i.slice(0, i.length - y.length).replace(/(.)\/+$/, "$1")
            }
            const x = l[c];
            return g && !x ? u[f] = void 0 : u[f] = (x || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}
function q0(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    $h(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, a) => (r.push({
        paramName: l,
        isOptional: a != null
    }),
    a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function Z0(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return $h(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Kh(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function J0(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: o=""} = typeof e == "string" ? yr(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : ex(n, t) : t,
        search: ix(r),
        hash: sx(o)
    }
}
function ex(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Js(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function tx(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function nx(e, t) {
    let n = tx(e);
    return t ? n.map( (r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function rx(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = yr(e) : (o = mo({}, e),
    fe(!o.pathname || !o.pathname.includes("?"), Js("?", "pathname", "search", o)),
    fe(!o.pathname || !o.pathname.includes("#"), Js("#", "pathname", "hash", o)),
    fe(!o.search || !o.search.includes("#"), Js("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "", s = i ? "/" : o.pathname, l;
    if (s == null)
        l = n;
    else {
        let c = t.length - 1;
        if (!r && s.startsWith("..")) {
            let f = s.split("/");
            for (; f[0] === ".."; )
                f.shift(),
                c -= 1;
            o.pathname = f.join("/")
        }
        l = c >= 0 ? t[c] : "/"
    }
    let a = J0(o, l)
      , u = s && s !== "/" && s.endsWith("/")
      , d = (i || s === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (u || d) && (a.pathname += "/"),
    a
}
const Cn = e => e.join("/").replace(/\/\/+/g, "/")
  , ox = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , ix = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , sx = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function lx(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Qh = ["post", "put", "patch", "delete"];
new Set(Qh);
const ax = ["get", ...Qh];
new Set(ax);
/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function go() {
    return go = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    go.apply(this, arguments)
}
const Pu = w.createContext(null)
  , ux = w.createContext(null)
  , ps = w.createContext(null)
  , hs = w.createContext(null)
  , xr = w.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Yh = w.createContext(null);
function ms() {
    return w.useContext(hs) != null
}
function Xh() {
    return ms() || fe(!1),
    w.useContext(hs).location
}
function qh(e) {
    w.useContext(ps).static || w.useLayoutEffect(e)
}
function gs() {
    let {isDataRoute: e} = w.useContext(xr);
    return e ? Cx() : cx()
}
function cx() {
    ms() || fe(!1);
    let e = w.useContext(Pu)
      , {basename: t, future: n, navigator: r} = w.useContext(ps)
      , {matches: o} = w.useContext(xr)
      , {pathname: i} = Xh()
      , s = JSON.stringify(nx(o, n.v7_relativeSplatPath))
      , l = w.useRef(!1);
    return qh( () => {
        l.current = !0
    }
    ),
    w.useCallback(function(u, d) {
        if (d === void 0 && (d = {}),
        !l.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let c = rx(u, JSON.parse(s), i, d.relative === "path");
        e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : Cn([t, c.pathname])),
        (d.replace ? r.replace : r.push)(c, d.state, d)
    }, [t, r, s, i, e])
}
function dx(e, t) {
    return fx(e, t)
}
function fx(e, t, n, r) {
    ms() || fe(!1);
    let {navigator: o, static: i} = w.useContext(ps)
      , {matches: s} = w.useContext(xr)
      , l = s[s.length - 1]
      , a = l ? l.params : {};
    l && l.pathname;
    let u = l ? l.pathnameBase : "/";
    l && l.route;
    let d = Xh(), c;
    if (t) {
        var f;
        let m = typeof t == "string" ? yr(t) : t;
        u === "/" || (f = m.pathname) != null && f.startsWith(u) || fe(!1),
        c = m
    } else
        c = d;
    let g = c.pathname || "/"
      , x = g;
    if (u !== "/") {
        let m = u.replace(/^\//, "").split("/");
        x = "/" + g.replace(/^\//, "").split("/").slice(m.length).join("/")
    }
    let y = !i && n && n.matches && n.matches.length > 0 ? n.matches : F0(e, {
        pathname: x
    })
      , S = vx(y && y.map(m => Object.assign({}, m, {
        params: Object.assign({}, a, m.params),
        pathname: Cn([u, o.encodeLocation ? o.encodeLocation(m.pathname).pathname : m.pathname]),
        pathnameBase: m.pathnameBase === "/" ? u : Cn([u, o.encodeLocation ? o.encodeLocation(m.pathnameBase).pathname : m.pathnameBase])
    })), s, n, r);
    return t && S ? w.createElement(hs.Provider, {
        value: {
            location: go({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Ut.Pop
        }
    }, S) : S
}
function px() {
    let e = Sx()
      , t = lx(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    }
      , i = null;
    return w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? w.createElement("pre", {
        style: o
    }, n) : null, i)
}
const hx = w.createElement(px, null);
class mx extends w.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? w.createElement(xr.Provider, {
            value: this.props.routeContext
        }, w.createElement(Yh.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function gx(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = w.useContext(Pu);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(xr.Provider, {
        value: t
    }, r)
}
function vx(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
      , l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let d = s.findIndex(c => c.route.id && (l == null ? void 0 : l[c.route.id]) !== void 0);
        d >= 0 || fe(!1),
        s = s.slice(0, Math.min(s.length, d + 1))
    }
    let a = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < s.length; d++) {
            let c = s[d];
            if ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = d),
            c.route.id) {
                let {loaderData: f, errors: g} = n
                  , x = c.route.loader && f[c.route.id] === void 0 && (!g || g[c.route.id] === void 0);
                if (c.route.lazy || x) {
                    a = !0,
                    u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (d, c, f) => {
        let g, x = !1, y = null, S = null;
        n && (g = l && c.route.id ? l[c.route.id] : void 0,
        y = c.route.errorElement || hx,
        a && (u < 0 && f === 0 ? (Px("route-fallback", !1),
        x = !0,
        S = null) : u === f && (x = !0,
        S = c.route.hydrateFallbackElement || null)));
        let m = t.concat(s.slice(0, f + 1))
          , p = () => {
            let h;
            return g ? h = y : x ? h = S : c.route.Component ? h = w.createElement(c.route.Component, null) : c.route.element ? h = c.route.element : h = d,
            w.createElement(gx, {
                match: c,
                routeContext: {
                    outlet: d,
                    matches: m,
                    isDataRoute: n != null
                },
                children: h
            })
        }
        ;
        return n && (c.route.ErrorBoundary || c.route.errorElement || f === 0) ? w.createElement(mx, {
            location: n.location,
            revalidation: n.revalidation,
            component: y,
            error: g,
            children: p(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : p()
    }
    , null)
}
var Zh = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(Zh || {})
  , zi = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(zi || {});
function yx(e) {
    let t = w.useContext(Pu);
    return t || fe(!1),
    t
}
function xx(e) {
    let t = w.useContext(ux);
    return t || fe(!1),
    t
}
function wx(e) {
    let t = w.useContext(xr);
    return t || fe(!1),
    t
}
function Jh(e) {
    let t = wx()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || fe(!1),
    n.route.id
}
function Sx() {
    var e;
    let t = w.useContext(Yh)
      , n = xx(zi.UseRouteError)
      , r = Jh(zi.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function Cx() {
    let {router: e} = yx(Zh.UseNavigateStable)
      , t = Jh(zi.UseNavigateStable)
      , n = w.useRef(!1);
    return qh( () => {
        n.current = !0
    }
    ),
    w.useCallback(function(o, i) {
        i === void 0 && (i = {}),
        n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, go({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
const dd = {};
function Px(e, t, n) {
    !t && !dd[e] && (dd[e] = !0)
}
function Ex(e, t) {
    e == null || e.v7_startTransition,
    (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 && (!t || t.v7_relativeSplatPath),
    t && (t.v7_fetcherPersist,
    t.v7_normalizeFormMethod,
    t.v7_partialHydration,
    t.v7_skipActionErrorRevalidation)
}
function _r(e) {
    fe(!1)
}
function Tx(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=Ut.Pop, navigator: i, static: s=!1, future: l} = e;
    ms() && fe(!1);
    let a = t.replace(/^\/*/, "/")
      , u = w.useMemo( () => ({
        basename: a,
        navigator: i,
        static: s,
        future: go({
            v7_relativeSplatPath: !1
        }, l)
    }), [a, l, i, s]);
    typeof r == "string" && (r = yr(r));
    let {pathname: d="/", search: c="", hash: f="", state: g=null, key: x="default"} = r
      , y = w.useMemo( () => {
        let S = Kh(d, a);
        return S == null ? null : {
            location: {
                pathname: S,
                search: c,
                hash: f,
                state: g,
                key: x
            },
            navigationType: o
        }
    }
    , [a, d, c, f, g, x, o]);
    return y == null ? null : w.createElement(ps.Provider, {
        value: u
    }, w.createElement(hs.Provider, {
        children: n,
        value: y
    }))
}
function kx(e) {
    let {children: t, location: n} = e;
    return dx(ua(t), n)
}
new Promise( () => {}
);
function ua(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return w.Children.forEach(e, (r, o) => {
        if (!w.isValidElement(r))
            return;
        let i = [...t, o];
        if (r.type === w.Fragment) {
            n.push.apply(n, ua(r.props.children, i));
            return
        }
        r.type !== _r && fe(!1),
        !r.props.index || !r.props.children || fe(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = ua(r.props.children, i)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Nx = "6";
try {
    window.__reactRouterVersion = Nx
} catch {}
const jx = "startTransition"
  , fd = zf[jx];
function Rx(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , i = w.useRef();
    i.current == null && (i.current = _0({
        window: o,
        v5Compat: !0
    }));
    let s = i.current
      , [l,a] = w.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: u} = r || {}
      , d = w.useCallback(c => {
        u && fd ? fd( () => a(c)) : a(c)
    }
    , [a, u]);
    return w.useLayoutEffect( () => s.listen(d), [s, d]),
    w.useEffect( () => Ex(r), [r]),
    w.createElement(Tx, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s,
        future: r
    })
}
var pd;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(pd || (pd = {}));
var hd;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(hd || (hd = {}));
const em = w.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
})
  , vs = w.createContext({})
  , Eu = w.createContext(null)
  , ys = typeof document < "u"
  , bx = ys ? w.useLayoutEffect : w.useEffect
  , tm = w.createContext({
    strict: !1
})
  , Tu = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
  , Mx = "framerAppearId"
  , nm = "data-" + Tu(Mx);
function Ax(e, t, n, r) {
    const {visualElement: o} = w.useContext(vs)
      , i = w.useContext(tm)
      , s = w.useContext(Eu)
      , l = w.useContext(em).reducedMotion
      , a = w.useRef();
    r = r || i.renderer,
    !a.current && r && (a.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const u = a.current;
    w.useInsertionEffect( () => {
        u && u.update(n, s)
    }
    );
    const d = w.useRef(!!(n[nm] && !window.HandoffComplete));
    return bx( () => {
        u && (u.render(),
        d.current && u.animationState && u.animationState.animateChanges())
    }
    ),
    w.useEffect( () => {
        u && (u.updateFeatures(),
        !d.current && u.animationState && u.animationState.animateChanges(),
        d.current && (d.current = !1,
        window.HandoffComplete = !0))
    }
    ),
    u
}
function Xn(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function Lx(e, t, n) {
    return w.useCallback(r => {
        r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Xn(n) && (n.current = r))
    }
    , [t])
}
function vo(e) {
    return typeof e == "string" || Array.isArray(e)
}
function xs(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const ku = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Nu = ["initial", ...ku];
function ws(e) {
    return xs(e.animate) || Nu.some(t => vo(e[t]))
}
function rm(e) {
    return !!(ws(e) || e.variants)
}
function Dx(e, t) {
    if (ws(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || vo(n) ? n : void 0,
            animate: vo(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function Vx(e) {
    const {initial: t, animate: n} = Dx(e, w.useContext(vs));
    return w.useMemo( () => ({
        initial: t,
        animate: n
    }), [md(t), md(n)])
}
function md(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const gd = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , yo = {};
for (const e in gd)
    yo[e] = {
        isEnabled: t => gd[e].some(n => !!t[n])
    };
function _x(e) {
    for (const t in e)
        yo[t] = {
            ...yo[t],
            ...e[t]
        }
}
const om = w.createContext({})
  , im = w.createContext({})
  , Ix = Symbol.for("motionComponentSymbol");
function Ox({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o}) {
    e && _x(e);
    function i(l, a) {
        let u;
        const d = {
            ...w.useContext(em),
            ...l,
            layoutId: Fx(l)
        }
          , {isStatic: c} = d
          , f = Vx(l)
          , g = r(l, c);
        if (!c && ys) {
            f.visualElement = Ax(o, g, d, t);
            const x = w.useContext(im)
              , y = w.useContext(tm).strict;
            f.visualElement && (u = f.visualElement.loadFeatures(d, y, e, x))
        }
        return w.createElement(vs.Provider, {
            value: f
        }, u && f.visualElement ? w.createElement(u, {
            visualElement: f.visualElement,
            ...d
        }) : null, n(o, l, Lx(g, f.visualElement, a), g, c, f.visualElement))
    }
    const s = w.forwardRef(i);
    return s[Ix] = o,
    s
}
function Fx({layoutId: e}) {
    const t = w.useContext(om).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function zx(e) {
    function t(r, o={}) {
        return Ox(e(r, o))
    }
    if (typeof Proxy > "u")
        return t;
    const n = new Map;
    return new Proxy(t,{
        get: (r, o) => (n.has(o) || n.set(o, t(o)),
        n.get(o))
    })
}
const Bx = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function ju(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(Bx.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const Bi = {};
function Ux(e) {
    Object.assign(Bi, e)
}
const ko = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , An = new Set(ko);
function sm(e, {layout: t, layoutId: n}) {
    return An.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Bi[e] || e === "opacity")
}
const _e = e => !!(e && e.getVelocity)
  , $x = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , Wx = ko.length;
function Hx(e, {enableHardwareAcceleration: t=!0, allowTransformNone: n=!0}, r, o) {
    let i = "";
    for (let s = 0; s < Wx; s++) {
        const l = ko[s];
        if (e[l] !== void 0) {
            const a = $x[l] || l;
            i += `${a}(${e[l]}) `
        }
    }
    return t && !e.z && (i += "translateZ(0)"),
    i = i.trim(),
    o ? i = o(e, r ? "" : i) : n && r && (i = "none"),
    i
}
const lm = e => t => typeof t == "string" && t.startsWith(e)
  , am = lm("--")
  , ca = lm("var(--")
  , Gx = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
  , Kx = (e, t) => t && typeof e == "number" ? t.transform(e) : e
  , tn = (e, t, n) => Math.min(Math.max(n, e), t)
  , Ln = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , Kr = {
    ...Ln,
    transform: e => tn(0, 1, e)
}
  , Yo = {
    ...Ln,
    default: 1
}
  , Qr = e => Math.round(e * 1e5) / 1e5
  , Ss = /(-)?([\d]*\.?[\d])+/g
  , um = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , Qx = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function No(e) {
    return typeof e == "string"
}
const jo = e => ({
    test: t => No(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , Dt = jo("deg")
  , mt = jo("%")
  , _ = jo("px")
  , Yx = jo("vh")
  , Xx = jo("vw")
  , vd = {
    ...mt,
    parse: e => mt.parse(e) / 100,
    transform: e => mt.transform(e * 100)
}
  , yd = {
    ...Ln,
    transform: Math.round
}
  , cm = {
    borderWidth: _,
    borderTopWidth: _,
    borderRightWidth: _,
    borderBottomWidth: _,
    borderLeftWidth: _,
    borderRadius: _,
    radius: _,
    borderTopLeftRadius: _,
    borderTopRightRadius: _,
    borderBottomRightRadius: _,
    borderBottomLeftRadius: _,
    width: _,
    maxWidth: _,
    height: _,
    maxHeight: _,
    size: _,
    top: _,
    right: _,
    bottom: _,
    left: _,
    padding: _,
    paddingTop: _,
    paddingRight: _,
    paddingBottom: _,
    paddingLeft: _,
    margin: _,
    marginTop: _,
    marginRight: _,
    marginBottom: _,
    marginLeft: _,
    rotate: Dt,
    rotateX: Dt,
    rotateY: Dt,
    rotateZ: Dt,
    scale: Yo,
    scaleX: Yo,
    scaleY: Yo,
    scaleZ: Yo,
    skew: Dt,
    skewX: Dt,
    skewY: Dt,
    distance: _,
    translateX: _,
    translateY: _,
    translateZ: _,
    x: _,
    y: _,
    z: _,
    perspective: _,
    transformPerspective: _,
    opacity: Kr,
    originX: vd,
    originY: vd,
    originZ: _,
    zIndex: yd,
    fillOpacity: Kr,
    strokeOpacity: Kr,
    numOctaves: yd
};
function Ru(e, t, n, r) {
    const {style: o, vars: i, transform: s, transformOrigin: l} = e;
    let a = !1
      , u = !1
      , d = !0;
    for (const c in t) {
        const f = t[c];
        if (am(c)) {
            i[c] = f;
            continue
        }
        const g = cm[c]
          , x = Kx(f, g);
        if (An.has(c)) {
            if (a = !0,
            s[c] = x,
            !d)
                continue;
            f !== (g.default || 0) && (d = !1)
        } else
            c.startsWith("origin") ? (u = !0,
            l[c] = x) : o[c] = x
    }
    if (t.transform || (a || r ? o.transform = Hx(e.transform, n, d, r) : o.transform && (o.transform = "none")),
    u) {
        const {originX: c="50%", originY: f="50%", originZ: g=0} = l;
        o.transformOrigin = `${c} ${f} ${g}`
    }
}
const bu = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function dm(e, t, n) {
    for (const r in t)
        !_e(t[r]) && !sm(r, n) && (e[r] = t[r])
}
function qx({transformTemplate: e}, t, n) {
    return w.useMemo( () => {
        const r = bu();
        return Ru(r, t, {
            enableHardwareAcceleration: !n
        }, e),
        Object.assign({}, r.vars, r.style)
    }
    , [t])
}
function Zx(e, t, n) {
    const r = e.style || {}
      , o = {};
    return dm(o, r, e),
    Object.assign(o, qx(e, t, n)),
    e.transformValues ? e.transformValues(o) : o
}
function Jx(e, t, n) {
    const r = {}
      , o = Zx(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1,
    o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
    o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
    r.style = o,
    r
}
const e1 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Ui(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || e1.has(e)
}
let fm = e => !Ui(e);
function t1(e) {
    e && (fm = t => t.startsWith("on") ? !Ui(t) : e(t))
}
try {
    t1(require("@emotion/is-prop-valid").default)
} catch {}
function n1(e, t, n) {
    const r = {};
    for (const o in e)
        o === "values" && typeof e.values == "object" || (fm(o) || n === !0 && Ui(o) || !t && !Ui(o) || e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
    return r
}
function xd(e, t, n) {
    return typeof e == "string" ? e : _.transform(t + n * e)
}
function r1(e, t, n) {
    const r = xd(t, e.x, e.width)
      , o = xd(n, e.y, e.height);
    return `${r} ${o}`
}
const o1 = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , i1 = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function s1(e, t, n=1, r=0, o=!0) {
    e.pathLength = 1;
    const i = o ? o1 : i1;
    e[i.offset] = _.transform(-r);
    const s = _.transform(t)
      , l = _.transform(n);
    e[i.array] = `${s} ${l}`
}
function Mu(e, {attrX: t, attrY: n, attrScale: r, originX: o, originY: i, pathLength: s, pathSpacing: l=1, pathOffset: a=0, ...u}, d, c, f) {
    if (Ru(e, u, d, f),
    c) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: g, style: x, dimensions: y} = e;
    g.transform && (y && (x.transform = g.transform),
    delete g.transform),
    y && (o !== void 0 || i !== void 0 || x.transform) && (x.transformOrigin = r1(y, o !== void 0 ? o : .5, i !== void 0 ? i : .5)),
    t !== void 0 && (g.x = t),
    n !== void 0 && (g.y = n),
    r !== void 0 && (g.scale = r),
    s !== void 0 && s1(g, s, l, a, !1)
}
const pm = () => ({
    ...bu(),
    attrs: {}
})
  , Au = e => typeof e == "string" && e.toLowerCase() === "svg";
function l1(e, t, n, r) {
    const o = w.useMemo( () => {
        const i = pm();
        return Mu(i, t, {
            enableHardwareAcceleration: !1
        }, Au(r), e.transformTemplate),
        {
            ...i.attrs,
            style: {
                ...i.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const i = {};
        dm(i, e.style, e),
        o.style = {
            ...i,
            ...o.style
        }
    }
    return o
}
function a1(e=!1) {
    return (n, r, o, {latestValues: i}, s) => {
        const a = (ju(n) ? l1 : Jx)(r, i, s, n)
          , d = {
            ...n1(r, typeof n == "string", e),
            ...a,
            ref: o
        }
          , {children: c} = r
          , f = w.useMemo( () => _e(c) ? c.get() : c, [c]);
        return w.createElement(n, {
            ...d,
            children: f
        })
    }
}
function hm(e, {style: t, vars: n}, r, o) {
    Object.assign(e.style, t, o && o.getProjectionStyles(r));
    for (const i in n)
        e.style.setProperty(i, n[i])
}
const mm = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function gm(e, t, n, r) {
    hm(e, t, void 0, r);
    for (const o in t.attrs)
        e.setAttribute(mm.has(o) ? o : Tu(o), t.attrs[o])
}
function Lu(e, t) {
    const {style: n} = e
      , r = {};
    for (const o in n)
        (_e(n[o]) || t.style && _e(t.style[o]) || sm(o, e)) && (r[o] = n[o]);
    return r
}
function vm(e, t) {
    const n = Lu(e, t);
    for (const r in e)
        if (_e(e[r]) || _e(t[r])) {
            const o = ko.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
            n[o] = e[r]
        }
    return n
}
function Du(e, t, n, r={}, o={}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    t
}
function u1(e) {
    const t = w.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const $i = e => Array.isArray(e)
  , c1 = e => !!(e && typeof e == "object" && e.mix && e.toValue)
  , d1 = e => $i(e) ? e[e.length - 1] || 0 : e;
function hi(e) {
    const t = _e(e) ? e.get() : e;
    return c1(t) ? t.toValue() : t
}
function f1({scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n}, r, o, i) {
    const s = {
        latestValues: p1(r, o, i, e),
        renderState: t()
    };
    return n && (s.mount = l => n(r, l, s)),
    s
}
const ym = e => (t, n) => {
    const r = w.useContext(vs)
      , o = w.useContext(Eu)
      , i = () => f1(e, t, r, o);
    return n ? i() : u1(i)
}
;
function p1(e, t, n, r) {
    const o = {}
      , i = r(e, {});
    for (const f in i)
        o[f] = hi(i[f]);
    let {initial: s, animate: l} = e;
    const a = ws(e)
      , u = rm(e);
    t && u && !a && e.inherit !== !1 && (s === void 0 && (s = t.initial),
    l === void 0 && (l = t.animate));
    let d = n ? n.initial === !1 : !1;
    d = d || s === !1;
    const c = d ? l : s;
    return c && typeof c != "boolean" && !xs(c) && (Array.isArray(c) ? c : [c]).forEach(g => {
        const x = Du(e, g);
        if (!x)
            return;
        const {transitionEnd: y, transition: S, ...m} = x;
        for (const p in m) {
            let h = m[p];
            if (Array.isArray(h)) {
                const C = d ? h.length - 1 : 0;
                h = h[C]
            }
            h !== null && (o[p] = h)
        }
        for (const p in y)
            o[p] = y[p]
    }
    ),
    o
}
const ie = e => e;
class wd {
    constructor() {
        this.order = [],
        this.scheduled = new Set
    }
    add(t) {
        if (!this.scheduled.has(t))
            return this.scheduled.add(t),
            this.order.push(t),
            !0
    }
    remove(t) {
        const n = this.order.indexOf(t);
        n !== -1 && (this.order.splice(n, 1),
        this.scheduled.delete(t))
    }
    clear() {
        this.order.length = 0,
        this.scheduled.clear()
    }
}
function h1(e) {
    let t = new wd
      , n = new wd
      , r = 0
      , o = !1
      , i = !1;
    const s = new WeakSet
      , l = {
        schedule: (a, u=!1, d=!1) => {
            const c = d && o
              , f = c ? t : n;
            return u && s.add(a),
            f.add(a) && c && o && (r = t.order.length),
            a
        }
        ,
        cancel: a => {
            n.remove(a),
            s.delete(a)
        }
        ,
        process: a => {
            if (o) {
                i = !0;
                return
            }
            if (o = !0,
            [t,n] = [n, t],
            n.clear(),
            r = t.order.length,
            r)
                for (let u = 0; u < r; u++) {
                    const d = t.order[u];
                    d(a),
                    s.has(d) && (l.schedule(d),
                    e())
                }
            o = !1,
            i && (i = !1,
            l.process(a))
        }
    };
    return l
}
const Xo = ["prepare", "read", "update", "preRender", "render", "postRender"]
  , m1 = 40;
function g1(e, t) {
    let n = !1
      , r = !0;
    const o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , i = Xo.reduce( (c, f) => (c[f] = h1( () => n = !0),
    c), {})
      , s = c => i[c].process(o)
      , l = () => {
        const c = performance.now();
        n = !1,
        o.delta = r ? 1e3 / 60 : Math.max(Math.min(c - o.timestamp, m1), 1),
        o.timestamp = c,
        o.isProcessing = !0,
        Xo.forEach(s),
        o.isProcessing = !1,
        n && t && (r = !1,
        e(l))
    }
      , a = () => {
        n = !0,
        r = !0,
        o.isProcessing || e(l)
    }
    ;
    return {
        schedule: Xo.reduce( (c, f) => {
            const g = i[f];
            return c[f] = (x, y=!1, S=!1) => (n || a(),
            g.schedule(x, y, S)),
            c
        }
        , {}),
        cancel: c => Xo.forEach(f => i[f].cancel(c)),
        state: o,
        steps: i
    }
}
const {schedule: X, cancel: Rt, state: Se, steps: el} = g1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ie, !0)
  , v1 = {
    useVisualState: ym({
        scrapeMotionValuesFromProps: vm,
        createRenderState: pm,
        onMount: (e, t, {renderState: n, latestValues: r}) => {
            X.read( () => {
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            X.render( () => {
                Mu(n, r, {
                    enableHardwareAcceleration: !1
                }, Au(t.tagName), e.transformTemplate),
                gm(t, n)
            }
            )
        }
    })
}
  , y1 = {
    useVisualState: ym({
        scrapeMotionValuesFromProps: Lu,
        createRenderState: bu
    })
};
function x1(e, {forwardMotionProps: t=!1}, n, r) {
    return {
        ...ju(e) ? v1 : y1,
        preloadedFeatures: n,
        useRender: a1(t),
        createVisualElement: r,
        Component: e
    }
}
function St(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
const xm = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Cs(e, t="page") {
    return {
        point: {
            x: e[t + "X"],
            y: e[t + "Y"]
        }
    }
}
const w1 = e => t => xm(t) && e(t, Cs(t));
function Pt(e, t, n, r) {
    return St(e, t, w1(n), r)
}
const S1 = (e, t) => n => t(e(n))
  , qt = (...e) => e.reduce(S1);
function wm(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        }
        ;
        return t === null ? (t = e,
        n) : !1
    }
}
const Sd = wm("dragHorizontal")
  , Cd = wm("dragVertical");
function Sm(e) {
    let t = !1;
    if (e === "y")
        t = Cd();
    else if (e === "x")
        t = Sd();
    else {
        const n = Sd()
          , r = Cd();
        n && r ? t = () => {
            n(),
            r()
        }
        : (n && n(),
        r && r())
    }
    return t
}
function Cm() {
    const e = Sm(!0);
    return e ? (e(),
    !1) : !0
}
class ln {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
function Pd(e, t) {
    const n = "pointer" + (t ? "enter" : "leave")
      , r = "onHover" + (t ? "Start" : "End")
      , o = (i, s) => {
        if (i.pointerType === "touch" || Cm())
            return;
        const l = e.getProps();
        e.animationState && l.whileHover && e.animationState.setActive("whileHover", t),
        l[r] && X.update( () => l[r](i, s))
    }
    ;
    return Pt(e.current, n, o, {
        passive: !e.getProps()[r]
    })
}
class C1 extends ln {
    mount() {
        this.unmount = qt(Pd(this.node, !0), Pd(this.node, !1))
    }
    unmount() {}
}
class P1 extends ln {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = qt(St(this.node.current, "focus", () => this.onFocus()), St(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const Pm = (e, t) => t ? e === t ? !0 : Pm(e, t.parentElement) : !1;
function tl(e, t) {
    if (!t)
        return;
    const n = new PointerEvent("pointer" + e);
    t(n, Cs(n))
}
class E1 extends ln {
    constructor() {
        super(...arguments),
        this.removeStartListeners = ie,
        this.removeEndListeners = ie,
        this.removeAccessibleListeners = ie,
        this.startPointerPress = (t, n) => {
            if (this.isPressing)
                return;
            this.removeEndListeners();
            const r = this.node.getProps()
              , i = Pt(window, "pointerup", (l, a) => {
                if (!this.checkPressEnd())
                    return;
                const {onTap: u, onTapCancel: d, globalTapTarget: c} = this.node.getProps();
                X.update( () => {
                    !c && !Pm(this.node.current, l.target) ? d && d(l, a) : u && u(l, a)
                }
                )
            }
            , {
                passive: !(r.onTap || r.onPointerUp)
            })
              , s = Pt(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
                passive: !(r.onTapCancel || r.onPointerCancel)
            });
            this.removeEndListeners = qt(i, s),
            this.startPress(t, n)
        }
        ,
        this.startAccessiblePress = () => {
            const t = i => {
                if (i.key !== "Enter" || this.isPressing)
                    return;
                const s = l => {
                    l.key !== "Enter" || !this.checkPressEnd() || tl("up", (a, u) => {
                        const {onTap: d} = this.node.getProps();
                        d && X.update( () => d(a, u))
                    }
                    )
                }
                ;
                this.removeEndListeners(),
                this.removeEndListeners = St(this.node.current, "keyup", s),
                tl("down", (l, a) => {
                    this.startPress(l, a)
                }
                )
            }
              , n = St(this.node.current, "keydown", t)
              , r = () => {
                this.isPressing && tl("cancel", (i, s) => this.cancelPress(i, s))
            }
              , o = St(this.node.current, "blur", r);
            this.removeAccessibleListeners = qt(n, o)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {onTapStart: r, whileTap: o} = this.node.getProps();
        o && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
        r && X.update( () => r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
        this.isPressing = !1,
        this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
        !Cm()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd())
            return;
        const {onTapCancel: r} = this.node.getProps();
        r && X.update( () => r(t, n))
    }
    mount() {
        const t = this.node.getProps()
          , n = Pt(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(t.onTapStart || t.onPointerStart)
        })
          , r = St(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = qt(n, r)
    }
    unmount() {
        this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
}
const da = new WeakMap
  , nl = new WeakMap
  , T1 = e => {
    const t = da.get(e.target);
    t && t(e)
}
  , k1 = e => {
    e.forEach(T1)
}
;
function N1({root: e, ...t}) {
    const n = e || document;
    nl.has(n) || nl.set(n, {});
    const r = nl.get(n)
      , o = JSON.stringify(t);
    return r[o] || (r[o] = new IntersectionObserver(k1,{
        root: e,
        ...t
    })),
    r[o]
}
function j1(e, t, n) {
    const r = N1(t);
    return da.set(e, n),
    r.observe(e),
    () => {
        da.delete(e),
        r.unobserve(e)
    }
}
const R1 = {
    some: 0,
    all: 1
};
class b1 extends ln {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: o="some", once: i} = t
          , s = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof o == "number" ? o : R1[o]
        }
          , l = a => {
            const {isIntersecting: u} = a;
            if (this.isInView === u || (this.isInView = u,
            i && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: d, onViewportLeave: c} = this.node.getProps()
              , f = u ? d : c;
            f && f(a)
        }
        ;
        return j1(this.node.current, s, l)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(M1(t, n)) && this.startObserver()
    }
    unmount() {}
}
function M1({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const A1 = {
    inView: {
        Feature: b1
    },
    tap: {
        Feature: E1
    },
    focus: {
        Feature: P1
    },
    hover: {
        Feature: C1
    }
};
function Em(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function L1(e) {
    const t = {};
    return e.values.forEach( (n, r) => t[r] = n.get()),
    t
}
function D1(e) {
    const t = {};
    return e.values.forEach( (n, r) => t[r] = n.getVelocity()),
    t
}
function Ps(e, t, n) {
    const r = e.getProps();
    return Du(r, t, n !== void 0 ? n : r.custom, L1(e), D1(e))
}
let V1 = ie
  , Vu = ie;
const Zt = e => e * 1e3
  , Et = e => e / 1e3
  , _1 = {
    current: !1
}
  , Tm = e => Array.isArray(e) && typeof e[0] == "number";
function km(e) {
    return !!(!e || typeof e == "string" && Nm[e] || Tm(e) || Array.isArray(e) && e.every(km))
}
const Ir = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Nm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ir([0, .65, .55, 1]),
    circOut: Ir([.55, 0, 1, .45]),
    backIn: Ir([.31, .01, .66, -.59]),
    backOut: Ir([.33, 1.53, .69, .99])
};
function jm(e) {
    if (e)
        return Tm(e) ? Ir(e) : Array.isArray(e) ? e.map(jm) : Nm[e]
}
function I1(e, t, n, {delay: r=0, duration: o, repeat: i=0, repeatType: s="loop", ease: l, times: a}={}) {
    const u = {
        [t]: n
    };
    a && (u.offset = a);
    const d = jm(l);
    return Array.isArray(d) && (u.easing = d),
    e.animate(u, {
        delay: r,
        duration: o,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: i + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}
function O1(e, {repeat: t, repeatType: n="loop"}) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r]
}
const Rm = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , F1 = 1e-7
  , z1 = 12;
function B1(e, t, n, r, o) {
    let i, s, l = 0;
    do
        s = t + (n - t) / 2,
        i = Rm(s, r, o) - e,
        i > 0 ? n = s : t = s;
    while (Math.abs(i) > F1 && ++l < z1);
    return s
}
function Ro(e, t, n, r) {
    if (e === t && n === r)
        return ie;
    const o = i => B1(i, 0, 1, e, n);
    return i => i === 0 || i === 1 ? i : Rm(o(i), t, r)
}
const U1 = Ro(.42, 0, 1, 1)
  , $1 = Ro(0, 0, .58, 1)
  , bm = Ro(.42, 0, .58, 1)
  , W1 = e => Array.isArray(e) && typeof e[0] != "number"
  , Mm = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Am = e => t => 1 - e(1 - t)
  , _u = e => 1 - Math.sin(Math.acos(e))
  , Lm = Am(_u)
  , H1 = Mm(_u)
  , Dm = Ro(.33, 1.53, .69, .99)
  , Iu = Am(Dm)
  , G1 = Mm(Iu)
  , K1 = e => (e *= 2) < 1 ? .5 * Iu(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Q1 = {
    linear: ie,
    easeIn: U1,
    easeInOut: bm,
    easeOut: $1,
    circIn: _u,
    circInOut: H1,
    circOut: Lm,
    backIn: Iu,
    backInOut: G1,
    backOut: Dm,
    anticipate: K1
}
  , Ed = e => {
    if (Array.isArray(e)) {
        Vu(e.length === 4);
        const [t,n,r,o] = e;
        return Ro(t, n, r, o)
    } else if (typeof e == "string")
        return Q1[e];
    return e
}
  , Ou = (e, t) => n => !!(No(n) && Qx.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
  , Vm = (e, t, n) => r => {
    if (!No(r))
        return r;
    const [o,i,s,l] = r.match(Ss);
    return {
        [e]: parseFloat(o),
        [t]: parseFloat(i),
        [n]: parseFloat(s),
        alpha: l !== void 0 ? parseFloat(l) : 1
    }
}
  , Y1 = e => tn(0, 255, e)
  , rl = {
    ...Ln,
    transform: e => Math.round(Y1(e))
}
  , yn = {
    test: Ou("rgb", "red"),
    parse: Vm("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + rl.transform(e) + ", " + rl.transform(t) + ", " + rl.transform(n) + ", " + Qr(Kr.transform(r)) + ")"
};
function X1(e) {
    let t = ""
      , n = ""
      , r = ""
      , o = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    o = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    o = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    o += o),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const fa = {
    test: Ou("#"),
    parse: X1,
    transform: yn.transform
}
  , qn = {
    test: Ou("hsl", "hue"),
    parse: Vm("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + mt.transform(Qr(t)) + ", " + mt.transform(Qr(n)) + ", " + Qr(Kr.transform(r)) + ")"
}
  , Ee = {
    test: e => yn.test(e) || fa.test(e) || qn.test(e),
    parse: e => yn.test(e) ? yn.parse(e) : qn.test(e) ? qn.parse(e) : fa.parse(e),
    transform: e => No(e) ? e : e.hasOwnProperty("red") ? yn.transform(e) : qn.transform(e)
}
  , te = (e, t, n) => -n * e + n * t + e;
function ol(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function q1({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let o = 0
      , i = 0
      , s = 0;
    if (!t)
        o = i = s = n;
    else {
        const l = n < .5 ? n * (1 + t) : n + t - n * t
          , a = 2 * n - l;
        o = ol(a, l, e + 1 / 3),
        i = ol(a, l, e),
        s = ol(a, l, e - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(i * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
const il = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r))
}
  , Z1 = [fa, yn, qn]
  , J1 = e => Z1.find(t => t.test(e));
function Td(e) {
    const t = J1(e);
    let n = t.parse(e);
    return t === qn && (n = q1(n)),
    n
}
const _m = (e, t) => {
    const n = Td(e)
      , r = Td(t)
      , o = {
        ...n
    };
    return i => (o.red = il(n.red, r.red, i),
    o.green = il(n.green, r.green, i),
    o.blue = il(n.blue, r.blue, i),
    o.alpha = te(n.alpha, r.alpha, i),
    yn.transform(o))
}
;
function ew(e) {
    var t, n;
    return isNaN(e) && No(e) && (((t = e.match(Ss)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(um)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Im = {
    regex: Gx,
    countKey: "Vars",
    token: "${v}",
    parse: ie
}
  , Om = {
    regex: um,
    countKey: "Colors",
    token: "${c}",
    parse: Ee.parse
}
  , Fm = {
    regex: Ss,
    countKey: "Numbers",
    token: "${n}",
    parse: Ln.parse
};
function sl(e, {regex: t, countKey: n, token: r, parse: o}) {
    const i = e.tokenised.match(t);
    i && (e["num" + n] = i.length,
    e.tokenised = e.tokenised.replace(t, r),
    e.values.push(...i.map(o)))
}
function Wi(e) {
    const t = e.toString()
      , n = {
        value: t,
        tokenised: t,
        values: [],
        numVars: 0,
        numColors: 0,
        numNumbers: 0
    };
    return n.value.includes("var(--") && sl(n, Im),
    sl(n, Om),
    sl(n, Fm),
    n
}
function zm(e) {
    return Wi(e).values
}
function Bm(e) {
    const {values: t, numColors: n, numVars: r, tokenised: o} = Wi(e)
      , i = t.length;
    return s => {
        let l = o;
        for (let a = 0; a < i; a++)
            a < r ? l = l.replace(Im.token, s[a]) : a < r + n ? l = l.replace(Om.token, Ee.transform(s[a])) : l = l.replace(Fm.token, Qr(s[a]));
        return l
    }
}
const tw = e => typeof e == "number" ? 0 : e;
function nw(e) {
    const t = zm(e);
    return Bm(e)(t.map(tw))
}
const nn = {
    test: ew,
    parse: zm,
    createTransformer: Bm,
    getAnimatableNone: nw
}
  , Um = (e, t) => n => `${n > 0 ? t : e}`;
function $m(e, t) {
    return typeof e == "number" ? n => te(e, t, n) : Ee.test(e) ? _m(e, t) : e.startsWith("var(") ? Um(e, t) : Hm(e, t)
}
const Wm = (e, t) => {
    const n = [...e]
      , r = n.length
      , o = e.map( (i, s) => $m(i, t[s]));
    return i => {
        for (let s = 0; s < r; s++)
            n[s] = o[s](i);
        return n
    }
}
  , rw = (e, t) => {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const o in n)
        e[o] !== void 0 && t[o] !== void 0 && (r[o] = $m(e[o], t[o]));
    return o => {
        for (const i in r)
            n[i] = r[i](o);
        return n
    }
}
  , Hm = (e, t) => {
    const n = nn.createTransformer(t)
      , r = Wi(e)
      , o = Wi(t);
    return r.numVars === o.numVars && r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? qt(Wm(r.values, o.values), n) : Um(e, t)
}
  , xo = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , kd = (e, t) => n => te(e, t, n);
function ow(e) {
    return typeof e == "number" ? kd : typeof e == "string" ? Ee.test(e) ? _m : Hm : Array.isArray(e) ? Wm : typeof e == "object" ? rw : kd
}
function iw(e, t, n) {
    const r = []
      , o = n || ow(e[0])
      , i = e.length - 1;
    for (let s = 0; s < i; s++) {
        let l = o(e[s], e[s + 1]);
        if (t) {
            const a = Array.isArray(t) ? t[s] || ie : t;
            l = qt(a, l)
        }
        r.push(l)
    }
    return r
}
function Gm(e, t, {clamp: n=!0, ease: r, mixer: o}={}) {
    const i = e.length;
    if (Vu(i === t.length),
    i === 1)
        return () => t[0];
    e[0] > e[i - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const s = iw(t, r, o)
      , l = s.length
      , a = u => {
        let d = 0;
        if (l > 1)
            for (; d < e.length - 2 && !(u < e[d + 1]); d++)
                ;
        const c = xo(e[d], e[d + 1], u);
        return s[d](c)
    }
    ;
    return n ? u => a(tn(e[0], e[i - 1], u)) : a
}
function sw(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const o = xo(0, t, r);
        e.push(te(n, 1, o))
    }
}
function lw(e) {
    const t = [0];
    return sw(t, e.length - 1),
    t
}
function aw(e, t) {
    return e.map(n => n * t)
}
function uw(e, t) {
    return e.map( () => t || bm).splice(0, e.length - 1)
}
function Hi({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const o = W1(r) ? r.map(Ed) : Ed(r)
      , i = {
        done: !1,
        value: t[0]
    }
      , s = aw(n && n.length === t.length ? n : lw(t), e)
      , l = Gm(s, t, {
        ease: Array.isArray(o) ? o : uw(t, o)
    });
    return {
        calculatedDuration: e,
        next: a => (i.value = l(a),
        i.done = a >= e,
        i)
    }
}
function Km(e, t) {
    return t ? e * (1e3 / t) : 0
}
const cw = 5;
function Qm(e, t, n) {
    const r = Math.max(t - cw, 0);
    return Km(n - e(r), t - r)
}
const ll = .001
  , dw = .01
  , Nd = 10
  , fw = .05
  , pw = 1;
function hw({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
    let o, i;
    V1(e <= Zt(Nd));
    let s = 1 - t;
    s = tn(fw, pw, s),
    e = tn(dw, Nd, Et(e)),
    s < 1 ? (o = u => {
        const d = u * s
          , c = d * e
          , f = d - n
          , g = pa(u, s)
          , x = Math.exp(-c);
        return ll - f / g * x
    }
    ,
    i = u => {
        const c = u * s * e
          , f = c * n + n
          , g = Math.pow(s, 2) * Math.pow(u, 2) * e
          , x = Math.exp(-c)
          , y = pa(Math.pow(u, 2), s);
        return (-o(u) + ll > 0 ? -1 : 1) * ((f - g) * x) / y
    }
    ) : (o = u => {
        const d = Math.exp(-u * e)
          , c = (u - n) * e + 1;
        return -ll + d * c
    }
    ,
    i = u => {
        const d = Math.exp(-u * e)
          , c = (n - u) * (e * e);
        return d * c
    }
    );
    const l = 5 / e
      , a = gw(o, i, l);
    if (e = Zt(e),
    isNaN(a))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        const u = Math.pow(a, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const mw = 12;
function gw(e, t, n) {
    let r = n;
    for (let o = 1; o < mw; o++)
        r = r - e(r) / t(r);
    return r
}
function pa(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const vw = ["duration", "bounce"]
  , yw = ["stiffness", "damping", "mass"];
function jd(e, t) {
    return t.some(n => e[n] !== void 0)
}
function xw(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!jd(e, yw) && jd(e, vw)) {
        const n = hw(e);
        t = {
            ...t,
            ...n,
            mass: 1
        },
        t.isResolvedFromDuration = !0
    }
    return t
}
function Ym({keyframes: e, restDelta: t, restSpeed: n, ...r}) {
    const o = e[0]
      , i = e[e.length - 1]
      , s = {
        done: !1,
        value: o
    }
      , {stiffness: l, damping: a, mass: u, duration: d, velocity: c, isResolvedFromDuration: f} = xw({
        ...r,
        velocity: -Et(r.velocity || 0)
    })
      , g = c || 0
      , x = a / (2 * Math.sqrt(l * u))
      , y = i - o
      , S = Et(Math.sqrt(l / u))
      , m = Math.abs(y) < 5;
    n || (n = m ? .01 : 2),
    t || (t = m ? .005 : .5);
    let p;
    if (x < 1) {
        const h = pa(S, x);
        p = C => {
            const P = Math.exp(-x * S * C);
            return i - P * ((g + x * S * y) / h * Math.sin(h * C) + y * Math.cos(h * C))
        }
    } else if (x === 1)
        p = h => i - Math.exp(-S * h) * (y + (g + S * y) * h);
    else {
        const h = S * Math.sqrt(x * x - 1);
        p = C => {
            const P = Math.exp(-x * S * C)
              , T = Math.min(h * C, 300);
            return i - P * ((g + x * S * y) * Math.sinh(T) + h * y * Math.cosh(T)) / h
        }
    }
    return {
        calculatedDuration: f && d || null,
        next: h => {
            const C = p(h);
            if (f)
                s.done = h >= d;
            else {
                let P = g;
                h !== 0 && (x < 1 ? P = Qm(p, h, C) : P = 0);
                const T = Math.abs(P) <= n
                  , E = Math.abs(i - C) <= t;
                s.done = T && E
            }
            return s.value = s.done ? i : C,
            s
        }
    }
}
function Rd({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: o=10, bounceStiffness: i=500, modifyTarget: s, min: l, max: a, restDelta: u=.5, restSpeed: d}) {
    const c = e[0]
      , f = {
        done: !1,
        value: c
    }
      , g = k => l !== void 0 && k < l || a !== void 0 && k > a
      , x = k => l === void 0 ? a : a === void 0 || Math.abs(l - k) < Math.abs(a - k) ? l : a;
    let y = n * t;
    const S = c + y
      , m = s === void 0 ? S : s(S);
    m !== S && (y = m - c);
    const p = k => -y * Math.exp(-k / r)
      , h = k => m + p(k)
      , C = k => {
        const A = p(k)
          , L = h(k);
        f.done = Math.abs(A) <= u,
        f.value = f.done ? m : L
    }
    ;
    let P, T;
    const E = k => {
        g(f.value) && (P = k,
        T = Ym({
            keyframes: [f.value, x(f.value)],
            velocity: Qm(h, k, f.value),
            damping: o,
            stiffness: i,
            restDelta: u,
            restSpeed: d
        }))
    }
    ;
    return E(0),
    {
        calculatedDuration: null,
        next: k => {
            let A = !1;
            return !T && P === void 0 && (A = !0,
            C(k),
            E(k)),
            P !== void 0 && k > P ? T.next(k - P) : (!A && C(k),
            f)
        }
    }
}
const ww = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: () => X.update(t, !0),
        stop: () => Rt(t),
        now: () => Se.isProcessing ? Se.timestamp : performance.now()
    }
}
  , bd = 2e4;
function Md(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < bd; )
        t += n,
        r = e.next(t);
    return t >= bd ? 1 / 0 : t
}
const Sw = {
    decay: Rd,
    inertia: Rd,
    tween: Hi,
    keyframes: Hi,
    spring: Ym
};
function Gi({autoplay: e=!0, delay: t=0, driver: n=ww, keyframes: r, type: o="keyframes", repeat: i=0, repeatDelay: s=0, repeatType: l="loop", onPlay: a, onStop: u, onComplete: d, onUpdate: c, ...f}) {
    let g = 1, x = !1, y, S;
    const m = () => {
        S = new Promise(D => {
            y = D
        }
        )
    }
    ;
    m();
    let p;
    const h = Sw[o] || Hi;
    let C;
    h !== Hi && typeof r[0] != "number" && (C = Gm([0, 100], r, {
        clamp: !1
    }),
    r = [0, 100]);
    const P = h({
        ...f,
        keyframes: r
    });
    let T;
    l === "mirror" && (T = h({
        ...f,
        keyframes: [...r].reverse(),
        velocity: -(f.velocity || 0)
    }));
    let E = "idle"
      , k = null
      , A = null
      , L = null;
    P.calculatedDuration === null && i && (P.calculatedDuration = Md(P));
    const {calculatedDuration: $} = P;
    let V = 1 / 0
      , J = 1 / 0;
    $ !== null && (V = $ + s,
    J = V * (i + 1) - s);
    let b = 0;
    const q = D => {
        if (A === null)
            return;
        g > 0 && (A = Math.min(A, D)),
        g < 0 && (A = Math.min(D - J / g, A)),
        k !== null ? b = k : b = Math.round(D - A) * g;
        const B = b - t * (g >= 0 ? 1 : -1)
          , H = g >= 0 ? B < 0 : B > J;
        b = Math.max(B, 0),
        E === "finished" && k === null && (b = J);
        let Ie = b
          , _n = P;
        if (i) {
            const ks = Math.min(b, J) / V;
            let Mo = Math.floor(ks)
              , un = ks % 1;
            !un && ks >= 1 && (un = 1),
            un === 1 && Mo--,
            Mo = Math.min(Mo, i + 1),
            !!(Mo % 2) && (l === "reverse" ? (un = 1 - un,
            s && (un -= s / V)) : l === "mirror" && (_n = T)),
            Ie = tn(0, 1, un) * V
        }
        const Oe = H ? {
            done: !1,
            value: r[0]
        } : _n.next(Ie);
        C && (Oe.value = C(Oe.value));
        let {done: an} = Oe;
        !H && $ !== null && (an = g >= 0 ? b >= J : b <= 0);
        const av = k === null && (E === "finished" || E === "running" && an);
        return c && c(Oe.value),
        av && j(),
        Oe
    }
      , z = () => {
        p && p.stop(),
        p = void 0
    }
      , se = () => {
        E = "idle",
        z(),
        y(),
        m(),
        A = L = null
    }
      , j = () => {
        E = "finished",
        d && d(),
        z(),
        y()
    }
      , M = () => {
        if (x)
            return;
        p || (p = n(q));
        const D = p.now();
        a && a(),
        k !== null ? A = D - k : (!A || E === "finished") && (A = D),
        E === "finished" && m(),
        L = A,
        k = null,
        E = "running",
        p.start()
    }
    ;
    e && M();
    const I = {
        then(D, B) {
            return S.then(D, B)
        },
        get time() {
            return Et(b)
        },
        set time(D) {
            D = Zt(D),
            b = D,
            k !== null || !p || g === 0 ? k = D : A = p.now() - D / g
        },
        get duration() {
            const D = P.calculatedDuration === null ? Md(P) : P.calculatedDuration;
            return Et(D)
        },
        get speed() {
            return g
        },
        set speed(D) {
            D === g || !p || (g = D,
            I.time = Et(b))
        },
        get state() {
            return E
        },
        play: M,
        pause: () => {
            E = "paused",
            k = b
        }
        ,
        stop: () => {
            x = !0,
            E !== "idle" && (E = "idle",
            u && u(),
            se())
        }
        ,
        cancel: () => {
            L !== null && q(L),
            se()
        }
        ,
        complete: () => {
            E = "finished"
        }
        ,
        sample: D => (A = 0,
        q(D))
    };
    return I
}
function Cw(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const Pw = Cw( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , Ew = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
  , qo = 10
  , Tw = 2e4
  , kw = (e, t) => t.type === "spring" || e === "backgroundColor" || !km(t.ease);
function Nw(e, t, {onUpdate: n, onComplete: r, ...o}) {
    if (!(Pw() && Ew.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
        return !1;
    let s = !1, l, a, u = !1;
    const d = () => {
        a = new Promise(h => {
            l = h
        }
        )
    }
    ;
    d();
    let {keyframes: c, duration: f=300, ease: g, times: x} = o;
    if (kw(t, o)) {
        const h = Gi({
            ...o,
            repeat: 0,
            delay: 0
        });
        let C = {
            done: !1,
            value: c[0]
        };
        const P = [];
        let T = 0;
        for (; !C.done && T < Tw; )
            C = h.sample(T),
            P.push(C.value),
            T += qo;
        x = void 0,
        c = P,
        f = T - qo,
        g = "linear"
    }
    const y = I1(e.owner.current, t, c, {
        ...o,
        duration: f,
        ease: g,
        times: x
    })
      , S = () => {
        u = !1,
        y.cancel()
    }
      , m = () => {
        u = !0,
        X.update(S),
        l(),
        d()
    }
    ;
    return y.onfinish = () => {
        u || (e.set(O1(c, o)),
        r && r(),
        m())
    }
    ,
    {
        then(h, C) {
            return a.then(h, C)
        },
        attachTimeline(h) {
            return y.timeline = h,
            y.onfinish = null,
            ie
        },
        get time() {
            return Et(y.currentTime || 0)
        },
        set time(h) {
            y.currentTime = Zt(h)
        },
        get speed() {
            return y.playbackRate
        },
        set speed(h) {
            y.playbackRate = h
        },
        get duration() {
            return Et(f)
        },
        play: () => {
            s || (y.play(),
            Rt(S))
        }
        ,
        pause: () => y.pause(),
        stop: () => {
            if (s = !0,
            y.playState === "idle")
                return;
            const {currentTime: h} = y;
            if (h) {
                const C = Gi({
                    ...o,
                    autoplay: !1
                });
                e.setWithVelocity(C.sample(h - qo).value, C.sample(h).value, qo)
            }
            m()
        }
        ,
        complete: () => {
            u || y.finish()
        }
        ,
        cancel: m
    }
}
function jw({keyframes: e, delay: t, onUpdate: n, onComplete: r}) {
    const o = () => (n && n(e[e.length - 1]),
    r && r(),
    {
        time: 0,
        speed: 1,
        duration: 0,
        play: ie,
        pause: ie,
        stop: ie,
        then: i => (i(),
        Promise.resolve()),
        cancel: ie,
        complete: ie
    });
    return t ? Gi({
        keyframes: [0, 1],
        duration: 0,
        delay: t,
        onComplete: o
    }) : o()
}
const Rw = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , bw = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , Mw = {
    type: "keyframes",
    duration: .8
}
  , Aw = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , Lw = (e, {keyframes: t}) => t.length > 2 ? Mw : An.has(e) ? e.startsWith("scale") ? bw(t[1]) : Rw : Aw
  , ha = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (nn.test(t) || t === "0") && !t.startsWith("url("))
  , Dw = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Vw(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Ss) || [];
    if (!r)
        return e;
    const o = n.replace(r, "");
    let i = Dw.has(t) ? 1 : 0;
    return r !== n && (i *= 100),
    t + "(" + i + o + ")"
}
const _w = /([a-z-]*)\(.*?\)/g
  , ma = {
    ...nn,
    getAnimatableNone: e => {
        const t = e.match(_w);
        return t ? t.map(Vw).join(" ") : e
    }
}
  , Iw = {
    ...cm,
    color: Ee,
    backgroundColor: Ee,
    outlineColor: Ee,
    fill: Ee,
    stroke: Ee,
    borderColor: Ee,
    borderTopColor: Ee,
    borderRightColor: Ee,
    borderBottomColor: Ee,
    borderLeftColor: Ee,
    filter: ma,
    WebkitFilter: ma
}
  , Fu = e => Iw[e];
function Xm(e, t) {
    let n = Fu(e);
    return n !== ma && (n = nn),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const qm = e => /^0[^.\s]+$/.test(e);
function Ow(e) {
    if (typeof e == "number")
        return e === 0;
    if (e !== null)
        return e === "none" || e === "0" || qm(e)
}
function Fw(e, t, n, r) {
    const o = ha(t, n);
    let i;
    Array.isArray(n) ? i = [...n] : i = [null, n];
    const s = r.from !== void 0 ? r.from : e.get();
    let l;
    const a = [];
    for (let u = 0; u < i.length; u++)
        i[u] === null && (i[u] = u === 0 ? s : i[u - 1]),
        Ow(i[u]) && a.push(u),
        typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (l = i[u]);
    if (o && a.length && l)
        for (let u = 0; u < a.length; u++) {
            const d = a[u];
            i[d] = Xm(t, l)
        }
    return i
}
function zw({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: s, repeatDelay: l, from: a, elapsed: u, ...d}) {
    return !!Object.keys(d).length
}
function zu(e, t) {
    return e[t] || e.default || e
}
const Bw = {
    skipAnimations: !1
}
  , Bu = (e, t, n, r={}) => o => {
    const i = zu(r, e) || {}
      , s = i.delay || r.delay || 0;
    let {elapsed: l=0} = r;
    l = l - Zt(s);
    const a = Fw(t, e, n, i)
      , u = a[0]
      , d = a[a.length - 1]
      , c = ha(e, u)
      , f = ha(e, d);
    let g = {
        keyframes: a,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...i,
        delay: -l,
        onUpdate: x => {
            t.set(x),
            i.onUpdate && i.onUpdate(x)
        }
        ,
        onComplete: () => {
            o(),
            i.onComplete && i.onComplete()
        }
    };
    if (zw(i) || (g = {
        ...g,
        ...Lw(e, g)
    }),
    g.duration && (g.duration = Zt(g.duration)),
    g.repeatDelay && (g.repeatDelay = Zt(g.repeatDelay)),
    !c || !f || _1.current || i.type === !1 || Bw.skipAnimations)
        return jw(g);
    if (!r.isHandoff && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
        const x = Nw(t, e, g);
        if (x)
            return x
    }
    return Gi(g)
}
;
function Ki(e) {
    return !!(_e(e) && e.add)
}
const Zm = e => /^\-?\d*\.?\d+$/.test(e);
function Uu(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function $u(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class Wu {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Uu(this.subscriptions, t),
        () => $u(this.subscriptions, t)
    }
    notify(t, n, r) {
        const o = this.subscriptions.length;
        if (o)
            if (o === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let i = 0; i < o; i++) {
                    const s = this.subscriptions[i];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Uw = e => !isNaN(parseFloat(e));
class $w {
    constructor(t, n={}) {
        this.version = "10.18.0",
        this.timeDelta = 0,
        this.lastUpdated = 0,
        this.canTrackVelocity = !1,
        this.events = {},
        this.updateAndNotify = (r, o=!0) => {
            this.prev = this.current,
            this.current = r;
            const {delta: i, timestamp: s} = Se;
            this.lastUpdated !== s && (this.timeDelta = i,
            this.lastUpdated = s,
            X.postRender(this.scheduleVelocityCheck)),
            this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
            o && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.scheduleVelocityCheck = () => X.postRender(this.velocityCheck),
        this.velocityCheck = ({timestamp: r}) => {
            r !== this.lastUpdated && (this.prev = this.current,
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
        }
        ,
        this.hasAnimated = !1,
        this.prev = this.current = t,
        this.canTrackVelocity = Uw(this.current),
        this.owner = n.owner
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Wu);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            X.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = t,
        this.timeDelta = r
    }
    jump(t) {
        this.updateAndNotify(t),
        this.prev = t,
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? Km(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function pr(e, t) {
    return new $w(e,t)
}
const Jm = e => t => t.test(e)
  , Ww = {
    test: e => e === "auto",
    parse: e => e
}
  , eg = [Ln, _, mt, Dt, Xx, Yx, Ww]
  , jr = e => eg.find(Jm(e))
  , Hw = [...eg, Ee, nn]
  , Gw = e => Hw.find(Jm(e));
function Kw(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, pr(n))
}
function Qw(e, t) {
    const n = Ps(e, t);
    let {transitionEnd: r={}, transition: o={}, ...i} = n ? e.makeTargetAnimatable(n, !1) : {};
    i = {
        ...i,
        ...r
    };
    for (const s in i) {
        const l = d1(i[s]);
        Kw(e, s, l)
    }
}
function Yw(e, t, n) {
    var r, o;
    const i = Object.keys(t).filter(l => !e.hasValue(l))
      , s = i.length;
    if (s)
        for (let l = 0; l < s; l++) {
            const a = i[l]
              , u = t[a];
            let d = null;
            Array.isArray(u) && (d = u[0]),
            d === null && (d = (o = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !== null && o !== void 0 ? o : t[a]),
            d != null && (typeof d == "string" && (Zm(d) || qm(d)) ? d = parseFloat(d) : !Gw(d) && nn.test(u) && (d = Xm(a, u)),
            e.addValue(a, pr(d, {
                owner: e
            })),
            n[a] === void 0 && (n[a] = d),
            d !== null && e.setBaseTarget(a, d))
        }
}
function Xw(e, t) {
    return t ? (t[e] || t.default || t).from : void 0
}
function qw(e, t, n) {
    const r = {};
    for (const o in e) {
        const i = Xw(o, t);
        if (i !== void 0)
            r[o] = i;
        else {
            const s = n.getValue(o);
            s && (r[o] = s.get())
        }
    }
    return r
}
function Zw({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function Jw(e, t) {
    const n = e.get();
    if (Array.isArray(t)) {
        for (let r = 0; r < t.length; r++)
            if (t[r] !== n)
                return !0
    } else
        return n !== t
}
function tg(e, t, {delay: n=0, transitionOverride: r, type: o}={}) {
    let {transition: i=e.getDefaultTransition(), transitionEnd: s, ...l} = e.makeTargetAnimatable(t);
    const a = e.getValue("willChange");
    r && (i = r);
    const u = []
      , d = o && e.animationState && e.animationState.getState()[o];
    for (const c in l) {
        const f = e.getValue(c)
          , g = l[c];
        if (!f || g === void 0 || d && Zw(d, c))
            continue;
        const x = {
            delay: n,
            elapsed: 0,
            ...zu(i || {}, c)
        };
        if (window.HandoffAppearAnimations) {
            const m = e.getProps()[nm];
            if (m) {
                const p = window.HandoffAppearAnimations(m, c, f, X);
                p !== null && (x.elapsed = p,
                x.isHandoff = !0)
            }
        }
        let y = !x.isHandoff && !Jw(f, g);
        if (x.type === "spring" && (f.getVelocity() || x.velocity) && (y = !1),
        f.animation && (y = !1),
        y)
            continue;
        f.start(Bu(c, f, g, e.shouldReduceMotion && An.has(c) ? {
            type: !1
        } : x));
        const S = f.animation;
        Ki(a) && (a.add(c),
        S.then( () => a.remove(c))),
        u.push(S)
    }
    return s && Promise.all(u).then( () => {
        s && Qw(e, s)
    }
    ),
    u
}
function ga(e, t, n={}) {
    const r = Ps(e, t, n.custom);
    let {transition: o=e.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (o = n.transitionOverride);
    const i = r ? () => Promise.all(tg(e, r, n)) : () => Promise.resolve()
      , s = e.variantChildren && e.variantChildren.size ? (a=0) => {
        const {delayChildren: u=0, staggerChildren: d, staggerDirection: c} = o;
        return eS(e, t, u + a, d, c, n)
    }
    : () => Promise.resolve()
      , {when: l} = o;
    if (l) {
        const [a,u] = l === "beforeChildren" ? [i, s] : [s, i];
        return a().then( () => u())
    } else
        return Promise.all([i(), s(n.delay)])
}
function eS(e, t, n=0, r=0, o=1, i) {
    const s = []
      , l = (e.variantChildren.size - 1) * r
      , a = o === 1 ? (u=0) => u * r : (u=0) => l - u * r;
    return Array.from(e.variantChildren).sort(tS).forEach( (u, d) => {
        u.notify("AnimationStart", t),
        s.push(ga(u, t, {
            ...i,
            delay: n + a(d)
        }).then( () => u.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(s)
}
function tS(e, t) {
    return e.sortNodePosition(t)
}
function nS(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const o = t.map(i => ga(e, i, n));
        r = Promise.all(o)
    } else if (typeof t == "string")
        r = ga(e, t, n);
    else {
        const o = typeof t == "function" ? Ps(e, t, n.custom) : t;
        r = Promise.all(tg(e, o, n))
    }
    return r.then( () => e.notify("AnimationComplete", t))
}
const rS = [...ku].reverse()
  , oS = ku.length;
function iS(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => nS(e, n, r)))
}
function sS(e) {
    let t = iS(e);
    const n = aS();
    let r = !0;
    const o = (a, u) => {
        const d = Ps(e, u);
        if (d) {
            const {transition: c, transitionEnd: f, ...g} = d;
            a = {
                ...a,
                ...g,
                ...f
            }
        }
        return a
    }
    ;
    function i(a) {
        t = a(e)
    }
    function s(a, u) {
        const d = e.getProps()
          , c = e.getVariantContext(!0) || {}
          , f = []
          , g = new Set;
        let x = {}
          , y = 1 / 0;
        for (let m = 0; m < oS; m++) {
            const p = rS[m]
              , h = n[p]
              , C = d[p] !== void 0 ? d[p] : c[p]
              , P = vo(C)
              , T = p === u ? h.isActive : null;
            T === !1 && (y = m);
            let E = C === c[p] && C !== d[p] && P;
            if (E && r && e.manuallyAnimateOnMount && (E = !1),
            h.protectedKeys = {
                ...x
            },
            !h.isActive && T === null || !C && !h.prevProp || xs(C) || typeof C == "boolean")
                continue;
            let A = lS(h.prevProp, C) || p === u && h.isActive && !E && P || m > y && P
              , L = !1;
            const $ = Array.isArray(C) ? C : [C];
            let V = $.reduce(o, {});
            T === !1 && (V = {});
            const {prevResolvedValues: J={}} = h
              , b = {
                ...J,
                ...V
            }
              , q = z => {
                A = !0,
                g.has(z) && (L = !0,
                g.delete(z)),
                h.needsAnimating[z] = !0
            }
            ;
            for (const z in b) {
                const se = V[z]
                  , j = J[z];
                if (x.hasOwnProperty(z))
                    continue;
                let M = !1;
                $i(se) && $i(j) ? M = !Em(se, j) : M = se !== j,
                M ? se !== void 0 ? q(z) : g.add(z) : se !== void 0 && g.has(z) ? q(z) : h.protectedKeys[z] = !0
            }
            h.prevProp = C,
            h.prevResolvedValues = V,
            h.isActive && (x = {
                ...x,
                ...V
            }),
            r && e.blockInitialAnimation && (A = !1),
            A && (!E || L) && f.push(...$.map(z => ({
                animation: z,
                options: {
                    type: p,
                    ...a
                }
            })))
        }
        if (g.size) {
            const m = {};
            g.forEach(p => {
                const h = e.getBaseTarget(p);
                h !== void 0 && (m[p] = h)
            }
            ),
            f.push({
                animation: m
            })
        }
        let S = !!f.length;
        return r && (d.initial === !1 || d.initial === d.animate) && !e.manuallyAnimateOnMount && (S = !1),
        r = !1,
        S ? t(f) : Promise.resolve()
    }
    function l(a, u, d) {
        var c;
        if (n[a].isActive === u)
            return Promise.resolve();
        (c = e.variantChildren) === null || c === void 0 || c.forEach(g => {
            var x;
            return (x = g.animationState) === null || x === void 0 ? void 0 : x.setActive(a, u)
        }
        ),
        n[a].isActive = u;
        const f = s(d, a);
        for (const g in n)
            n[g].protectedKeys = {};
        return f
    }
    return {
        animateChanges: s,
        setActive: l,
        setAnimateFunction: i,
        getState: () => n
    }
}
function lS(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Em(t, e) : !1
}
function cn(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function aS() {
    return {
        animate: cn(!0),
        whileInView: cn(),
        whileHover: cn(),
        whileTap: cn(),
        whileDrag: cn(),
        whileFocus: cn(),
        exit: cn()
    }
}
class uS extends ln {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = sS(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        this.unmount(),
        xs(t) && (this.unmount = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let cS = 0;
class dS extends ln {
    constructor() {
        super(...arguments),
        this.id = cS++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n, custom: r} = this.node.presenceContext
          , {isPresent: o} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === o)
            return;
        const i = this.node.animationState.setActive("exit", !t, {
            custom: r ?? this.node.getProps().custom
        });
        n && !t && i.then( () => n(this.id))
    }
    mount() {
        const {register: t} = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const fS = {
    animation: {
        Feature: uS
    },
    exit: {
        Feature: dS
    }
}
  , Ad = (e, t) => Math.abs(e - t);
function pS(e, t) {
    const n = Ad(e.x, t.x)
      , r = Ad(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class ng {
    constructor(t, n, {transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const c = ul(this.lastMoveEventInfo, this.history)
              , f = this.startEvent !== null
              , g = pS(c.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!f && !g)
                return;
            const {point: x} = c
              , {timestamp: y} = Se;
            this.history.push({
                ...x,
                timestamp: y
            });
            const {onStart: S, onMove: m} = this.handlers;
            f || (S && S(this.lastMoveEvent, c),
            this.startEvent = this.lastMoveEvent),
            m && m(this.lastMoveEvent, c)
        }
        ,
        this.handlePointerMove = (c, f) => {
            this.lastMoveEvent = c,
            this.lastMoveEventInfo = al(f, this.transformPagePoint),
            X.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (c, f) => {
            this.end();
            const {onEnd: g, onSessionEnd: x, resumeAnimation: y} = this.handlers;
            if (this.dragSnapToOrigin && y && y(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const S = ul(c.type === "pointercancel" ? this.lastMoveEventInfo : al(f, this.transformPagePoint), this.history);
            this.startEvent && g && g(c, S),
            x && x(c, S)
        }
        ,
        !xm(t))
            return;
        this.dragSnapToOrigin = i,
        this.handlers = n,
        this.transformPagePoint = r,
        this.contextWindow = o || window;
        const s = Cs(t)
          , l = al(s, this.transformPagePoint)
          , {point: a} = l
          , {timestamp: u} = Se;
        this.history = [{
            ...a,
            timestamp: u
        }];
        const {onSessionStart: d} = n;
        d && d(t, ul(l, this.history)),
        this.removeListeners = qt(Pt(this.contextWindow, "pointermove", this.handlePointerMove), Pt(this.contextWindow, "pointerup", this.handlePointerUp), Pt(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Rt(this.updatePoint)
    }
}
function al(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function Ld(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function ul({point: e}, t) {
    return {
        point: e,
        delta: Ld(e, rg(t)),
        offset: Ld(e, hS(t)),
        velocity: mS(t, .1)
    }
}
function hS(e) {
    return e[0]
}
function rg(e) {
    return e[e.length - 1]
}
function mS(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const o = rg(e);
    for (; n >= 0 && (r = e[n],
    !(o.timestamp - r.timestamp > Zt(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const i = Et(o.timestamp - r.timestamp);
    if (i === 0)
        return {
            x: 0,
            y: 0
        };
    const s = {
        x: (o.x - r.x) / i,
        y: (o.y - r.y) / i
    };
    return s.x === 1 / 0 && (s.x = 0),
    s.y === 1 / 0 && (s.y = 0),
    s
}
function We(e) {
    return e.max - e.min
}
function va(e, t=0, n=.01) {
    return Math.abs(e - t) <= n
}
function Dd(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = te(t.min, t.max, e.origin),
    e.scale = We(n) / We(t),
    (va(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    e.translate = te(n.min, n.max, e.origin) - e.originPoint,
    (va(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function Yr(e, t, n, r) {
    Dd(e.x, t.x, n.x, r ? r.originX : void 0),
    Dd(e.y, t.y, n.y, r ? r.originY : void 0)
}
function Vd(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + We(t)
}
function gS(e, t, n) {
    Vd(e.x, t.x, n.x),
    Vd(e.y, t.y, n.y)
}
function _d(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + We(t)
}
function Xr(e, t, n) {
    _d(e.x, t.x, n.x),
    _d(e.y, t.y, n.y)
}
function vS(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? te(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? te(n, e, r.max) : Math.min(e, n)),
    e
}
function Id(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function yS(e, {top: t, left: n, bottom: r, right: o}) {
    return {
        x: Id(e.x, n, o),
        y: Id(e.y, t, r)
    }
}
function Od(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function xS(e, t) {
    return {
        x: Od(e.x, t.x),
        y: Od(e.y, t.y)
    }
}
function wS(e, t) {
    let n = .5;
    const r = We(e)
      , o = We(t);
    return o > r ? n = xo(t.min, t.max - r, e.min) : r > o && (n = xo(e.min, e.max - o, t.min)),
    tn(0, 1, n)
}
function SS(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const ya = .35;
function CS(e=ya) {
    return e === !1 ? e = 0 : e === !0 && (e = ya),
    {
        x: Fd(e, "left", "right"),
        y: Fd(e, "top", "bottom")
    }
}
function Fd(e, t, n) {
    return {
        min: zd(e, t),
        max: zd(e, n)
    }
}
function zd(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const Bd = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Zn = () => ({
    x: Bd(),
    y: Bd()
})
  , Ud = () => ({
    min: 0,
    max: 0
})
  , ae = () => ({
    x: Ud(),
    y: Ud()
});
function Qe(e) {
    return [e("x"), e("y")]
}
function og({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function PS({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function ES(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function cl(e) {
    return e === void 0 || e === 1
}
function xa({scale: e, scaleX: t, scaleY: n}) {
    return !cl(e) || !cl(t) || !cl(n)
}
function pn(e) {
    return xa(e) || ig(e) || e.z || e.rotate || e.rotateX || e.rotateY
}
function ig(e) {
    return $d(e.x) || $d(e.y)
}
function $d(e) {
    return e && e !== "0%"
}
function Qi(e, t, n) {
    const r = e - n
      , o = t * r;
    return n + o
}
function Wd(e, t, n, r, o) {
    return o !== void 0 && (e = Qi(e, o, r)),
    Qi(e, n, r) + t
}
function wa(e, t=0, n=1, r, o) {
    e.min = Wd(e.min, t, n, r, o),
    e.max = Wd(e.max, t, n, r, o)
}
function sg(e, {x: t, y: n}) {
    wa(e.x, t.translate, t.scale, t.originPoint),
    wa(e.y, n.translate, n.scale, n.originPoint)
}
function TS(e, t, n, r=!1) {
    const o = n.length;
    if (!o)
        return;
    t.x = t.y = 1;
    let i, s;
    for (let l = 0; l < o; l++) {
        i = n[l],
        s = i.projectionDelta;
        const a = i.instance;
        a && a.style && a.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && Jn(e, {
            x: -i.scroll.offset.x,
            y: -i.scroll.offset.y
        }),
        s && (t.x *= s.x.scale,
        t.y *= s.y.scale,
        sg(e, s)),
        r && pn(i.latestValues) && Jn(e, i.latestValues))
    }
    t.x = Hd(t.x),
    t.y = Hd(t.y)
}
function Hd(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}
function It(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function Gd(e, t, [n,r,o]) {
    const i = t[o] !== void 0 ? t[o] : .5
      , s = te(e.min, e.max, i);
    wa(e, t[n], t[r], s, t.scale)
}
const kS = ["x", "scaleX", "originX"]
  , NS = ["y", "scaleY", "originY"];
function Jn(e, t) {
    Gd(e.x, t, kS),
    Gd(e.y, t, NS)
}
function lg(e, t) {
    return og(ES(e.getBoundingClientRect(), t))
}
function jS(e, t, n) {
    const r = lg(e, n)
      , {scroll: o} = t;
    return o && (It(r.x, o.offset.x),
    It(r.y, o.offset.y)),
    r
}
const ag = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , RS = new WeakMap;
class bS {
    constructor(t) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = ae(),
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const o = d => {
            const {dragSnapToOrigin: c} = this.getProps();
            c ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(Cs(d, "page").point)
        }
          , i = (d, c) => {
            const {drag: f, dragPropagation: g, onDragStart: x} = this.getProps();
            if (f && !g && (this.openGlobalLock && this.openGlobalLock(),
            this.openGlobalLock = Sm(f),
            !this.openGlobalLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Qe(S => {
                let m = this.getAxisMotionValue(S).get() || 0;
                if (mt.test(m)) {
                    const {projection: p} = this.visualElement;
                    if (p && p.layout) {
                        const h = p.layout.layoutBox[S];
                        h && (m = We(h) * (parseFloat(m) / 100))
                    }
                }
                this.originPoint[S] = m
            }
            ),
            x && X.update( () => x(d, c), !1, !0);
            const {animationState: y} = this.visualElement;
            y && y.setActive("whileDrag", !0)
        }
          , s = (d, c) => {
            const {dragPropagation: f, dragDirectionLock: g, onDirectionLock: x, onDrag: y} = this.getProps();
            if (!f && !this.openGlobalLock)
                return;
            const {offset: S} = c;
            if (g && this.currentDirection === null) {
                this.currentDirection = MS(S),
                this.currentDirection !== null && x && x(this.currentDirection);
                return
            }
            this.updateAxis("x", c.point, S),
            this.updateAxis("y", c.point, S),
            this.visualElement.render(),
            y && y(d, c)
        }
          , l = (d, c) => this.stop(d, c)
          , a = () => Qe(d => {
            var c;
            return this.getAnimationState(d) === "paused" && ((c = this.getAxisMotionValue(d).animation) === null || c === void 0 ? void 0 : c.play())
        }
        )
          , {dragSnapToOrigin: u} = this.getProps();
        this.panSession = new ng(t,{
            onSessionStart: o,
            onStart: i,
            onMove: s,
            onSessionEnd: l,
            resumeAnimation: a
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: ag(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: o} = n;
        this.startAnimation(o);
        const {onDragEnd: i} = this.getProps();
        i && X.update( () => i(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {drag: o} = this.getProps();
        if (!r || !Zo(t, o, this.currentDirection))
            return;
        const i = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = vS(s, this.constraints[t], this.elastic[t])),
        i.set(s)
    }
    resolveConstraints() {
        var t;
        const {dragConstraints: n, dragElastic: r} = this.getProps()
          , o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
          , i = this.constraints;
        n && Xn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = yS(o.layoutBox, n) : this.constraints = !1,
        this.elastic = CS(r),
        i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Qe(s => {
            this.getAxisMotionValue(s) && (this.constraints[s] = SS(o.layoutBox[s], this.constraints[s]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !Xn(t))
            return !1;
        const r = t.current
          , {projection: o} = this.visualElement;
        if (!o || !o.layout)
            return !1;
        const i = jS(r, o.root, this.visualElement.getTransformPagePoint());
        let s = xS(o.layout.layoutBox, i);
        if (n) {
            const l = n(PS(s));
            this.hasMutatedConstraints = !!l,
            l && (s = og(l))
        }
        return s
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: s, onDragTransitionEnd: l} = this.getProps()
          , a = this.constraints || {}
          , u = Qe(d => {
            if (!Zo(d, n, this.currentDirection))
                return;
            let c = a && a[d] || {};
            s && (c = {
                min: 0,
                max: 0
            });
            const f = o ? 200 : 1e6
              , g = o ? 40 : 1e7
              , x = {
                type: "inertia",
                velocity: r ? t[d] : 0,
                bounceStiffness: f,
                bounceDamping: g,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...c
            };
            return this.startAxisValueAnimation(d, x)
        }
        );
        return Promise.all(u).then(l)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(Bu(t, r, 0, n))
    }
    stopAnimation() {
        Qe(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        Qe(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = "_drag" + t.toUpperCase()
          , r = this.visualElement.getProps()
          , o = r[n];
        return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Qe(n => {
            const {drag: r} = this.getProps();
            if (!Zo(n, r, this.currentDirection))
                return;
            const {projection: o} = this.visualElement
              , i = this.getAxisMotionValue(n);
            if (o && o.layout) {
                const {min: s, max: l} = o.layout.layoutBox[n];
                i.set(t[n] - te(s, l, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!Xn(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const o = {
            x: 0,
            y: 0
        };
        Qe(s => {
            const l = this.getAxisMotionValue(s);
            if (l) {
                const a = l.get();
                o[s] = wS({
                    min: a,
                    max: a
                }, this.constraints[s])
            }
        }
        );
        const {transformTemplate: i} = this.visualElement.getProps();
        this.visualElement.current.style.transform = i ? i({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        Qe(s => {
            if (!Zo(s, t, null))
                return;
            const l = this.getAxisMotionValue(s)
              , {min: a, max: u} = this.constraints[s];
            l.set(te(a, u, o[s]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        RS.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = Pt(t, "pointerdown", a => {
            const {drag: u, dragListener: d=!0} = this.getProps();
            u && d && this.start(a)
        }
        )
          , r = () => {
            const {dragConstraints: a} = this.getProps();
            Xn(a) && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: o} = this.visualElement
          , i = o.addEventListener("measure", r);
        o && !o.layout && (o.root && o.root.updateScroll(),
        o.updateLayout()),
        r();
        const s = St(window, "resize", () => this.scalePositionWithinConstraints())
          , l = o.addEventListener("didUpdate", ({delta: a, hasLayoutChanged: u}) => {
            this.isDragging && u && (Qe(d => {
                const c = this.getAxisMotionValue(d);
                c && (this.originPoint[d] += a[d].translate,
                c.set(c.get() + a[d].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            s(),
            n(),
            i(),
            l && l()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: o=!1, dragConstraints: i=!1, dragElastic: s=ya, dragMomentum: l=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: o,
            dragConstraints: i,
            dragElastic: s,
            dragMomentum: l
        }
    }
}
function Zo(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function MS(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class AS extends ln {
    constructor(t) {
        super(t),
        this.removeGroupControls = ie,
        this.removeListeners = ie,
        this.controls = new bS(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || ie
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const Kd = e => (t, n) => {
    e && X.update( () => e(t, n))
}
;
class LS extends ln {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = ie
    }
    onPointerDown(t) {
        this.session = new ng(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: ag(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o} = this.node.getProps();
        return {
            onSessionStart: Kd(t),
            onStart: Kd(n),
            onMove: r,
            onEnd: (i, s) => {
                delete this.session,
                o && X.update( () => o(i, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Pt(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
function DS() {
    const e = w.useContext(Eu);
    if (e === null)
        return [!0, null];
    const {isPresent: t, onExitComplete: n, register: r} = e
      , o = w.useId();
    return w.useEffect( () => r(o), []),
    !t && n ? [!1, () => n && n(o)] : [!0]
}
const mi = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function Qd(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Rr = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (_.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = Qd(e, t.target.x)
          , r = Qd(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , VS = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , o = nn.parse(e);
        if (o.length > 5)
            return r;
        const i = nn.createTransformer(e)
          , s = typeof o[0] != "number" ? 1 : 0
          , l = n.x.scale * t.x
          , a = n.y.scale * t.y;
        o[0 + s] /= l,
        o[1 + s] /= a;
        const u = te(l, a, .5);
        return typeof o[2 + s] == "number" && (o[2 + s] /= u),
        typeof o[3 + s] == "number" && (o[3 + s] /= u),
        i(o)
    }
};
class _S extends he.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o} = this.props
          , {projection: i} = t;
        Ux(IS),
        i && (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove()
        })),
        mi.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: o, isPresent: i} = this.props
          , s = r.projection;
        return s && (s.isPresent = i,
        o || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(),
        t.isPresent !== i && (i ? s.promote() : s.relegate() || X.postRender( () => {
            const l = s.getStack();
            (!l || !l.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        queueMicrotask( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: o} = t;
        o && (o.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(o),
        r && r.deregister && r.deregister(o))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function ug(e) {
    const [t,n] = DS()
      , r = w.useContext(om);
    return he.createElement(_S, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: w.useContext(im),
        isPresent: t,
        safeToRemove: n
    })
}
const IS = {
    borderRadius: {
        ...Rr,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Rr,
    borderTopRightRadius: Rr,
    borderBottomLeftRadius: Rr,
    borderBottomRightRadius: Rr,
    boxShadow: VS
}
  , cg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , OS = cg.length
  , Yd = e => typeof e == "string" ? parseFloat(e) : e
  , Xd = e => typeof e == "number" || _.test(e);
function FS(e, t, n, r, o, i) {
    o ? (e.opacity = te(0, n.opacity !== void 0 ? n.opacity : 1, zS(r)),
    e.opacityExit = te(t.opacity !== void 0 ? t.opacity : 1, 0, BS(r))) : i && (e.opacity = te(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < OS; s++) {
        const l = `border${cg[s]}Radius`;
        let a = qd(t, l)
          , u = qd(n, l);
        if (a === void 0 && u === void 0)
            continue;
        a || (a = 0),
        u || (u = 0),
        a === 0 || u === 0 || Xd(a) === Xd(u) ? (e[l] = Math.max(te(Yd(a), Yd(u), r), 0),
        (mt.test(u) || mt.test(a)) && (e[l] += "%")) : e[l] = u
    }
    (t.rotate || n.rotate) && (e.rotate = te(t.rotate || 0, n.rotate || 0, r))
}
function qd(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const zS = dg(0, .5, Lm)
  , BS = dg(.5, .95, ie);
function dg(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(xo(e, t, r))
}
function Zd(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Ke(e, t) {
    Zd(e.x, t.x),
    Zd(e.y, t.y)
}
function Jd(e, t, n, r, o) {
    return e -= t,
    e = Qi(e, 1 / n, r),
    o !== void 0 && (e = Qi(e, 1 / o, r)),
    e
}
function US(e, t=0, n=1, r=.5, o, i=e, s=e) {
    if (mt.test(t) && (t = parseFloat(t),
    t = te(s.min, s.max, t / 100) - s.min),
    typeof t != "number")
        return;
    let l = te(i.min, i.max, r);
    e === i && (l -= t),
    e.min = Jd(e.min, t, n, l, o),
    e.max = Jd(e.max, t, n, l, o)
}
function ef(e, t, [n,r,o], i, s) {
    US(e, t[n], t[r], t[o], t.scale, i, s)
}
const $S = ["x", "scaleX", "originX"]
  , WS = ["y", "scaleY", "originY"];
function tf(e, t, n, r) {
    ef(e.x, t, $S, n ? n.x : void 0, r ? r.x : void 0),
    ef(e.y, t, WS, n ? n.y : void 0, r ? r.y : void 0)
}
function nf(e) {
    return e.translate === 0 && e.scale === 1
}
function fg(e) {
    return nf(e.x) && nf(e.y)
}
function HS(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
function pg(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
}
function rf(e) {
    return We(e.x) / We(e.y)
}
class GS {
    constructor() {
        this.members = []
    }
    add(t) {
        Uu(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if ($u(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(o => t === o);
        if (n === 0)
            return !1;
        let r;
        for (let o = n; o >= 0; o--) {
            const i = this.members[o];
            if (i.isPresent !== !1) {
                r = i;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = r,
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: o} = t.options;
            o === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function of(e, t, n) {
    let r = "";
    const o = e.x.translate / t.x
      , i = e.y.translate / t.y;
    if ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {rotate: a, rotateX: u, rotateY: d} = n;
        a && (r += `rotate(${a}deg) `),
        u && (r += `rotateX(${u}deg) `),
        d && (r += `rotateY(${d}deg) `)
    }
    const s = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`),
    r || "none"
}
const KS = (e, t) => e.depth - t.depth;
class QS {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        Uu(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        $u(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(KS),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function YS(e, t) {
    const n = performance.now()
      , r = ({timestamp: o}) => {
        const i = o - n;
        i >= t && (Rt(r),
        e(i - t))
    }
    ;
    return X.read(r, !0),
    () => Rt(r)
}
function XS(e) {
    window.MotionDebug && window.MotionDebug.record(e)
}
function qS(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
function ZS(e, t, n) {
    const r = _e(e) ? e : pr(e);
    return r.start(Bu("", r, t, n)),
    r.animation
}
const sf = ["", "X", "Y", "Z"]
  , JS = {
    visibility: "hidden"
}
  , lf = 1e3;
let eC = 0;
const hn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
function hg({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o}) {
    return class {
        constructor(s={}, l=t == null ? void 0 : t()) {
            this.id = eC++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                hn.totalNodes = hn.resolvedTargetDeltas = hn.recalculatedProjection = 0,
                this.nodes.forEach(rC),
                this.nodes.forEach(aC),
                this.nodes.forEach(uC),
                this.nodes.forEach(oC),
                XS(hn)
            }
            ,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = s,
            this.root = l ? l.root || l : this,
            this.path = l ? [...l.path, l] : [],
            this.parent = l,
            this.depth = l ? l.depth + 1 : 0;
            for (let a = 0; a < this.path.length; a++)
                this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new QS)
        }
        addEventListener(s, l) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Wu),
            this.eventHandlers.get(s).add(l)
        }
        notifyListeners(s, ...l) {
            const a = this.eventHandlers.get(s);
            a && a.notify(...l)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s, l=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = qS(s),
            this.instance = s;
            const {layoutId: a, layout: u, visualElement: d} = this.options;
            if (d && !d.current && d.mount(s),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            l && (u || a) && (this.isLayoutDirty = !0),
            e) {
                let c;
                const f = () => this.root.updateBlockedByResize = !1;
                e(s, () => {
                    this.root.updateBlockedByResize = !0,
                    c && c(),
                    c = YS(f, 250),
                    mi.hasAnimatedSinceResize && (mi.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(uf))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && d && (a || u) && this.addEventListener("didUpdate", ({delta: c, hasLayoutChanged: f, hasRelativeTargetChanged: g, layout: x}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const y = this.options.transition || d.getDefaultTransition() || hC
                  , {onLayoutAnimationStart: S, onLayoutAnimationComplete: m} = d.getProps()
                  , p = !this.targetLayout || !pg(this.targetLayout, x) || g
                  , h = !f && g;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || h || f && (p || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(c, h);
                    const C = {
                        ...zu(y, "layout"),
                        onPlay: S,
                        onComplete: m
                    };
                    (d.shouldReduceMotion || this.options.layoutRoot) && (C.delay = 0,
                    C.type = !1),
                    this.startAnimation(C)
                } else
                    f || uf(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = x
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            Rt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(cC),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: s} = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let d = 0; d < this.path.length; d++) {
                const c = this.path[d];
                c.shouldResetTransform = !0,
                c.updateScroll("snapshot"),
                c.options.layoutRoot && c.willUpdate(!1)
            }
            const {layoutId: l, layout: a} = this.options;
            if (l === void 0 && !a)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(af);
                return
            }
            this.isUpdating || this.nodes.forEach(sC),
            this.isUpdating = !1,
            this.nodes.forEach(lC),
            this.nodes.forEach(tC),
            this.nodes.forEach(nC),
            this.clearAllSnapshots();
            const l = performance.now();
            Se.delta = tn(0, 1e3 / 60, l - Se.timestamp),
            Se.timestamp = l,
            Se.isProcessing = !0,
            el.update.process(Se),
            el.preRender.process(Se),
            el.render.process(Se),
            Se.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            queueMicrotask( () => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(iC),
            this.sharedNodes.forEach(dC)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            X.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            X.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let a = 0; a < this.path.length; a++)
                    this.path[a].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = ae(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: l} = this.options;
            l && l.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s="measure") {
            let l = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (l = !1),
            l && (this.scroll = {
                animationId: this.root.animationId,
                phase: s,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!o)
                return;
            const s = this.isLayoutDirty || this.shouldResetTransform
              , l = this.projectionDelta && !fg(this.projectionDelta)
              , a = this.getTransformTemplate()
              , u = a ? a(this.latestValues, "") : void 0
              , d = u !== this.prevTransformTemplateValue;
            s && (l || pn(this.latestValues) || d) && (o(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(s=!0) {
            const l = this.measurePageBox();
            let a = this.removeElementScroll(l);
            return s && (a = this.removeTransform(a)),
            mC(a),
            {
                animationId: this.root.animationId,
                measuredBox: l,
                layoutBox: a,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {visualElement: s} = this.options;
            if (!s)
                return ae();
            const l = s.measureViewportBox()
              , {scroll: a} = this.root;
            return a && (It(l.x, a.offset.x),
            It(l.y, a.offset.y)),
            l
        }
        removeElementScroll(s) {
            const l = ae();
            Ke(l, s);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a]
                  , {scroll: d, options: c} = u;
                if (u !== this.root && d && c.layoutScroll) {
                    if (d.isRoot) {
                        Ke(l, s);
                        const {scroll: f} = this.root;
                        f && (It(l.x, -f.offset.x),
                        It(l.y, -f.offset.y))
                    }
                    It(l.x, d.offset.x),
                    It(l.y, d.offset.y)
                }
            }
            return l
        }
        applyTransform(s, l=!1) {
            const a = ae();
            Ke(a, s);
            for (let u = 0; u < this.path.length; u++) {
                const d = this.path[u];
                !l && d.options.layoutScroll && d.scroll && d !== d.root && Jn(a, {
                    x: -d.scroll.offset.x,
                    y: -d.scroll.offset.y
                }),
                pn(d.latestValues) && Jn(a, d.latestValues)
            }
            return pn(this.latestValues) && Jn(a, this.latestValues),
            a
        }
        removeTransform(s) {
            const l = ae();
            Ke(l, s);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a];
                if (!u.instance || !pn(u.latestValues))
                    continue;
                xa(u.latestValues) && u.updateSnapshot();
                const d = ae()
                  , c = u.measurePageBox();
                Ke(d, c),
                tf(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d)
            }
            return pn(this.latestValues) && tf(l, this.latestValues),
            l
        }
        setTargetDelta(s) {
            this.targetDelta = s,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Se.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s=!1) {
            var l;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== a;
            if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget))
                return;
            const {layout: c, layoutId: f} = this.options;
            if (!(!this.layout || !(c || f))) {
                if (this.resolvedRelativeTargetAt = Se.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const g = this.getClosestProjectingParent();
                    g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = ae(),
                    this.relativeTargetOrigin = ae(),
                    Xr(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox),
                    Ke(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = ae(),
                    this.targetWithTransforms = ae()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    gS(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ke(this.target, this.layout.layoutBox),
                    sg(this.target, this.targetDelta)) : Ke(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const g = this.getClosestProjectingParent();
                        g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = ae(),
                        this.relativeTargetOrigin = ae(),
                        Xr(this.relativeTargetOrigin, this.target, g.target),
                        Ke(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    hn.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || xa(this.parent.latestValues) || ig(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s;
            const l = this.getLead()
              , a = !!this.resumingFrom || this !== l;
            let u = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
            this.resolvedRelativeTargetAt === Se.timestamp && (u = !1),
            u)
                return;
            const {layout: d, layoutId: c} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(d || c))
                return;
            Ke(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x
              , g = this.treeScale.y;
            TS(this.layoutCorrected, this.treeScale, this.path, a),
            l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox);
            const {target: x} = l;
            if (!x) {
                this.projectionTransform && (this.projectionDelta = Zn(),
                this.projectionTransform = "none",
                this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = Zn(),
            this.projectionDeltaWithTransform = Zn());
            const y = this.projectionTransform;
            Yr(this.projectionDelta, this.layoutCorrected, x, this.latestValues),
            this.projectionTransform = of(this.projectionDelta, this.treeScale),
            (this.projectionTransform !== y || this.treeScale.x !== f || this.treeScale.y !== g) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", x)),
            hn.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s=!0) {
            if (this.options.scheduleRender && this.options.scheduleRender(),
            s) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(s, l=!1) {
            const a = this.snapshot
              , u = a ? a.latestValues : {}
              , d = {
                ...this.latestValues
            }
              , c = Zn();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !l;
            const f = ae()
              , g = a ? a.source : void 0
              , x = this.layout ? this.layout.source : void 0
              , y = g !== x
              , S = this.getStack()
              , m = !S || S.members.length <= 1
              , p = !!(y && !m && this.options.crossfade === !0 && !this.path.some(pC));
            this.animationProgress = 0;
            let h;
            this.mixTargetDelta = C => {
                const P = C / 1e3;
                cf(c.x, s.x, P),
                cf(c.y, s.y, P),
                this.setTargetDelta(c),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Xr(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                fC(this.relativeTarget, this.relativeTargetOrigin, f, P),
                h && HS(this.relativeTarget, h) && (this.isProjectionDirty = !1),
                h || (h = ae()),
                Ke(h, this.relativeTarget)),
                y && (this.animationValues = d,
                FS(d, u, this.latestValues, P, p, m)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = P
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Rt(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = X.update( () => {
                mi.hasAnimatedSinceResize = !0,
                this.currentAnimation = ZS(0, lf, {
                    ...s,
                    onUpdate: l => {
                        this.mixTargetDelta(l),
                        s.onUpdate && s.onUpdate(l)
                    }
                    ,
                    onComplete: () => {
                        s.onComplete && s.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(lf),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {targetWithTransforms: l, target: a, layout: u, latestValues: d} = s;
            if (!(!l || !a || !u)) {
                if (this !== s && this.layout && u && mg(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    a = this.target || ae();
                    const c = We(this.layout.layoutBox.x);
                    a.x.min = s.target.x.min,
                    a.x.max = a.x.min + c;
                    const f = We(this.layout.layoutBox.y);
                    a.y.min = s.target.y.min,
                    a.y.max = a.y.min + f
                }
                Ke(l, a),
                Jn(l, d),
                Yr(this.projectionDeltaWithTransform, this.layoutCorrected, l, d)
            }
        }
        registerSharedNode(s, l) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new GS),
            this.sharedNodes.get(s).add(l);
            const u = l.options.initialPromotionConfig;
            l.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            const {layoutId: l} = this.options;
            return l ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            const {layoutId: l} = this.options;
            return l ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            const {layoutId: s} = this.options;
            if (s)
                return this.root.sharedNodes.get(s)
        }
        promote({needsReset: s, transition: l, preserveFollowOpacity: a}={}) {
            const u = this.getStack();
            u && u.promote(this, a),
            s && (this.projectionDelta = void 0,
            this.needsReset = !0),
            l && this.setOptions({
                transition: l
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetRotation() {
            const {visualElement: s} = this.options;
            if (!s)
                return;
            let l = !1;
            const {latestValues: a} = s;
            if ((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0),
            !l)
                return;
            const u = {};
            for (let d = 0; d < sf.length; d++) {
                const c = "rotate" + sf[d];
                a[c] && (u[c] = a[c],
                s.setStaticValue(c, 0))
            }
            s.render();
            for (const d in u)
                s.setStaticValue(d, u[d]);
            s.scheduleRender()
        }
        getProjectionStyles(s) {
            var l, a;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return JS;
            const u = {
                visibility: ""
            }
              , d = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                u.opacity = "",
                u.pointerEvents = hi(s == null ? void 0 : s.pointerEvents) || "",
                u.transform = d ? d(this.latestValues, "") : "none",
                u;
            const c = this.getLead();
            if (!this.projectionDelta || !this.layout || !c.target) {
                const y = {};
                return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                y.pointerEvents = hi(s == null ? void 0 : s.pointerEvents) || ""),
                this.hasProjected && !pn(this.latestValues) && (y.transform = d ? d({}, "") : "none",
                this.hasProjected = !1),
                y
            }
            const f = c.animationValues || c.latestValues;
            this.applyTransformsToTarget(),
            u.transform = of(this.projectionDeltaWithTransform, this.treeScale, f),
            d && (u.transform = d(f, u.transform));
            const {x: g, y: x} = this.projectionDelta;
            u.transformOrigin = `${g.origin * 100}% ${x.origin * 100}% 0`,
            c.animationValues ? u.opacity = c === this ? (a = (l = f.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = c === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
            for (const y in Bi) {
                if (f[y] === void 0)
                    continue;
                const {correct: S, applyTo: m} = Bi[y]
                  , p = u.transform === "none" ? f[y] : S(f[y], c);
                if (m) {
                    const h = m.length;
                    for (let C = 0; C < h; C++)
                        u[m[C]] = p
                } else
                    u[y] = p
            }
            return this.options.layoutId && (u.pointerEvents = c === this ? hi(s == null ? void 0 : s.pointerEvents) || "" : "none"),
            u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var l;
                return (l = s.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
            }
            ),
            this.root.nodes.forEach(af),
            this.root.sharedNodes.clear()
        }
    }
}
function tC(e) {
    e.updateLayout()
}
function nC(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: o} = e.layout
          , {animationType: i} = e.options
          , s = n.source !== e.layout.source;
        i === "size" ? Qe(c => {
            const f = s ? n.measuredBox[c] : n.layoutBox[c]
              , g = We(f);
            f.min = r[c].min,
            f.max = f.min + g
        }
        ) : mg(i, n.layoutBox, r) && Qe(c => {
            const f = s ? n.measuredBox[c] : n.layoutBox[c]
              , g = We(r[c]);
            f.max = f.min + g,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[c].max = e.relativeTarget[c].min + g)
        }
        );
        const l = Zn();
        Yr(l, r, n.layoutBox);
        const a = Zn();
        s ? Yr(a, e.applyTransform(o, !0), n.measuredBox) : Yr(a, r, n.layoutBox);
        const u = !fg(l);
        let d = !1;
        if (!e.resumeFrom) {
            const c = e.getClosestProjectingParent();
            if (c && !c.resumeFrom) {
                const {snapshot: f, layout: g} = c;
                if (f && g) {
                    const x = ae();
                    Xr(x, n.layoutBox, f.layoutBox);
                    const y = ae();
                    Xr(y, r, g.layoutBox),
                    pg(x, y) || (d = !0),
                    c.options.layoutRoot && (e.relativeTarget = y,
                    e.relativeTargetOrigin = x,
                    e.relativeParent = c)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: a,
            layoutDelta: l,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: d
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function rC(e) {
    hn.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function oC(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function iC(e) {
    e.clearSnapshot()
}
function af(e) {
    e.clearMeasurements()
}
function sC(e) {
    e.isLayoutDirty = !1
}
function lC(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function uf(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function aC(e) {
    e.resolveTargetDelta()
}
function uC(e) {
    e.calcProjection()
}
function cC(e) {
    e.resetRotation()
}
function dC(e) {
    e.removeLeadSnapshot()
}
function cf(e, t, n) {
    e.translate = te(t.translate, 0, n),
    e.scale = te(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function df(e, t, n, r) {
    e.min = te(t.min, n.min, r),
    e.max = te(t.max, n.max, r)
}
function fC(e, t, n, r) {
    df(e.x, t.x, n.x, r),
    df(e.y, t.y, n.y, r)
}
function pC(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const hC = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , ff = e => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e)
  , pf = ff("applewebkit/") && !ff("chrome/") ? Math.round : ie;
function hf(e) {
    e.min = pf(e.min),
    e.max = pf(e.max)
}
function mC(e) {
    hf(e.x),
    hf(e.y)
}
function mg(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !va(rf(t), rf(n), .2)
}
const gC = hg({
    attachResizeListener: (e, t) => St(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , dl = {
    current: void 0
}
  , gg = hg({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!dl.current) {
            const e = new gC({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            dl.current = e
        }
        return dl.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , vC = {
    pan: {
        Feature: LS
    },
    drag: {
        Feature: AS,
        ProjectionNode: gg,
        MeasureLayout: ug
    }
}
  , yC = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function xC(e) {
    const t = yC.exec(e);
    if (!t)
        return [, ];
    const [,n,r] = t;
    return [n, r]
}
function Sa(e, t, n=1) {
    const [r,o] = xC(e);
    if (!r)
        return;
    const i = window.getComputedStyle(t).getPropertyValue(r);
    if (i) {
        const s = i.trim();
        return Zm(s) ? parseFloat(s) : s
    } else
        return ca(o) ? Sa(o, t, n + 1) : o
}
function wC(e, {...t}, n) {
    const r = e.current;
    if (!(r instanceof Element))
        return {
            target: t,
            transitionEnd: n
        };
    n && (n = {
        ...n
    }),
    e.values.forEach(o => {
        const i = o.get();
        if (!ca(i))
            return;
        const s = Sa(i, r);
        s && o.set(s)
    }
    );
    for (const o in t) {
        const i = t[o];
        if (!ca(i))
            continue;
        const s = Sa(i, r);
        s && (t[o] = s,
        n || (n = {}),
        n[o] === void 0 && (n[o] = i))
    }
    return {
        target: t,
        transitionEnd: n
    }
}
const SC = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , vg = e => SC.has(e)
  , CC = e => Object.keys(e).some(vg)
  , mf = e => e === Ln || e === _
  , gf = (e, t) => parseFloat(e.split(", ")[t])
  , vf = (e, t) => (n, {transform: r}) => {
    if (r === "none" || !r)
        return 0;
    const o = r.match(/^matrix3d\((.+)\)$/);
    if (o)
        return gf(o[1], t);
    {
        const i = r.match(/^matrix\((.+)\)$/);
        return i ? gf(i[1], e) : 0
    }
}
  , PC = new Set(["x", "y", "z"])
  , EC = ko.filter(e => !PC.has(e));
function TC(e) {
    const t = [];
    return EC.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t.length && e.render(),
    t
}
const hr = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: vf(4, 13),
    y: vf(5, 14)
};
hr.translateX = hr.x;
hr.translateY = hr.y;
const kC = (e, t, n) => {
    const r = t.measureViewportBox()
      , o = t.current
      , i = getComputedStyle(o)
      , {display: s} = i
      , l = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
    n.forEach(u => {
        l[u] = hr[u](r, i)
    }
    ),
    t.render();
    const a = t.measureViewportBox();
    return n.forEach(u => {
        const d = t.getValue(u);
        d && d.jump(l[u]),
        e[u] = hr[u](a, i)
    }
    ),
    e
}
  , NC = (e, t, n={}, r={}) => {
    t = {
        ...t
    },
    r = {
        ...r
    };
    const o = Object.keys(t).filter(vg);
    let i = []
      , s = !1;
    const l = [];
    if (o.forEach(a => {
        const u = e.getValue(a);
        if (!e.hasValue(a))
            return;
        let d = n[a]
          , c = jr(d);
        const f = t[a];
        let g;
        if ($i(f)) {
            const x = f.length
              , y = f[0] === null ? 1 : 0;
            d = f[y],
            c = jr(d);
            for (let S = y; S < x && f[S] !== null; S++)
                g ? Vu(jr(f[S]) === g) : g = jr(f[S])
        } else
            g = jr(f);
        if (c !== g)
            if (mf(c) && mf(g)) {
                const x = u.get();
                typeof x == "string" && u.set(parseFloat(x)),
                typeof f == "string" ? t[a] = parseFloat(f) : Array.isArray(f) && g === _ && (t[a] = f.map(parseFloat))
            } else
                c != null && c.transform && (g != null && g.transform) && (d === 0 || f === 0) ? d === 0 ? u.set(g.transform(d)) : t[a] = c.transform(f) : (s || (i = TC(e),
                s = !0),
                l.push(a),
                r[a] = r[a] !== void 0 ? r[a] : t[a],
                u.jump(f))
    }
    ),
    l.length) {
        const a = l.indexOf("height") >= 0 ? window.pageYOffset : null
          , u = kC(t, e, l);
        return i.length && i.forEach( ([d,c]) => {
            e.getValue(d).set(c)
        }
        ),
        e.render(),
        ys && a !== null && window.scrollTo({
            top: a
        }),
        {
            target: u,
            transitionEnd: r
        }
    } else
        return {
            target: t,
            transitionEnd: r
        }
}
;
function jC(e, t, n, r) {
    return CC(t) ? NC(e, t, n, r) : {
        target: t,
        transitionEnd: r
    }
}
const RC = (e, t, n, r) => {
    const o = wC(e, t, r);
    return t = o.target,
    r = o.transitionEnd,
    jC(e, t, n, r)
}
  , Ca = {
    current: null
}
  , yg = {
    current: !1
};
function bC() {
    if (yg.current = !0,
    !!ys)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => Ca.current = e.matches;
            e.addListener(t),
            t()
        } else
            Ca.current = !1
}
function MC(e, t, n) {
    const {willChange: r} = t;
    for (const o in t) {
        const i = t[o]
          , s = n[o];
        if (_e(i))
            e.addValue(o, i),
            Ki(r) && r.add(o);
        else if (_e(s))
            e.addValue(o, pr(i, {
                owner: e
            })),
            Ki(r) && r.remove(o);
        else if (s !== i)
            if (e.hasValue(o)) {
                const l = e.getValue(o);
                !l.hasAnimated && l.set(i)
            } else {
                const l = e.getStaticValue(o);
                e.addValue(o, pr(l !== void 0 ? l : i, {
                    owner: e
                }))
            }
    }
    for (const o in n)
        t[o] === void 0 && e.removeValue(o);
    return t
}
const yf = new WeakMap
  , xg = Object.keys(yo)
  , AC = xg.length
  , xf = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
  , LC = Nu.length;
class DC {
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: o, visualState: i}, s={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.scheduleRender = () => X.render(this.render, !1, !0);
        const {latestValues: l, renderState: a} = i;
        this.latestValues = l,
        this.baseTarget = {
            ...l
        },
        this.initialValues = n.initial ? {
            ...l
        } : {},
        this.renderState = a,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = o,
        this.options = s,
        this.isControllingVariants = ws(n),
        this.isVariantNode = rm(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: u, ...d} = this.scrapeMotionValuesFromProps(n, {});
        for (const c in d) {
            const f = d[c];
            l[c] !== void 0 && _e(f) && (f.set(l[c], !1),
            Ki(u) && u.add(c))
        }
    }
    scrapeMotionValuesFromProps(t, n) {
        return {}
    }
    mount(t) {
        this.current = t,
        yf.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, r) => this.bindToMotionValue(r, n)),
        yg.current || bC(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ca.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        yf.delete(this.current),
        this.projection && this.projection.unmount(),
        Rt(this.notifyUpdate),
        Rt(this.render),
        this.valueSubscriptions.forEach(t => t()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features)
            this.features[t].unmount();
        this.current = null
    }
    bindToMotionValue(t, n) {
        const r = An.has(t)
          , o = n.on("change", s => {
            this.latestValues[t] = s,
            this.props.onUpdate && X.update(this.notifyUpdate, !1, !0),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , i = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, () => {
            o(),
            i()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    loadFeatures({children: t, ...n}, r, o, i) {
        let s, l;
        for (let a = 0; a < AC; a++) {
            const u = xg[a]
              , {isEnabled: d, Feature: c, ProjectionNode: f, MeasureLayout: g} = yo[u];
            f && (s = f),
            d(n) && (!this.features[u] && c && (this.features[u] = new c(this)),
            g && (l = g))
        }
        if ((this.type === "html" || this.type === "svg") && !this.projection && s) {
            this.projection = new s(this.latestValues,this.parent && this.parent.projection);
            const {layoutId: a, layout: u, drag: d, dragConstraints: c, layoutScroll: f, layoutRoot: g} = n;
            this.projection.setOptions({
                layoutId: a,
                layout: u,
                alwaysMeasureLayout: !!d || c && Xn(c),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof u == "string" ? u : "both",
                initialPromotionConfig: i,
                layoutScroll: f,
                layoutRoot: g
            })
        }
        return l
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update() : (n.mount(),
            n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ae()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    makeTargetAnimatable(t, n=!0) {
        return this.makeTargetAnimatableFromInstance(t, this.props, n)
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < xf.length; r++) {
            const o = xf[r];
            this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](),
            delete this.propEventSubscriptions[o]);
            const i = t["on" + o];
            i && (this.propEventSubscriptions[o] = this.on(o, i))
        }
        this.prevMotionValues = MC(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(t=!1) {
        if (t)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial),
            r
        }
        const n = {};
        for (let r = 0; r < LC; r++) {
            const o = Nu[r]
              , i = this.props[o];
            (vo(i) || i === !1) && (n[o] = i)
        }
        return n
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        n !== this.values.get(t) && (this.removeValue(t),
        this.bindToMotionValue(t, n)),
        this.values.set(t, n),
        this.latestValues[t] = n.get()
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = pr(n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t) {
        var n;
        return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options)
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {initial: r} = this.props
          , o = typeof r == "string" || typeof r == "object" ? (n = Du(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
        if (r && o !== void 0)
            return o;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !_e(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Wu),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class wg extends DC {
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    makeTargetAnimatableFromInstance({transition: t, transitionEnd: n, ...r}, {transformValues: o}, i) {
        let s = qw(r, t || {}, this);
        if (o && (n && (n = o(n)),
        r && (r = o(r)),
        s && (s = o(s))),
        i) {
            Yw(this, r, s);
            const l = RC(this, r, s, n);
            n = l.transitionEnd,
            r = l.target
        }
        return {
            transition: t,
            transitionEnd: n,
            ...r
        }
    }
}
function VC(e) {
    return window.getComputedStyle(e)
}
class _C extends wg {
    constructor() {
        super(...arguments),
        this.type = "html"
    }
    readValueFromInstance(t, n) {
        if (An.has(n)) {
            const r = Fu(n);
            return r && r.default || 0
        } else {
            const r = VC(t)
              , o = (am(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof o == "string" ? o.trim() : o
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return lg(t, n)
    }
    build(t, n, r, o) {
        Ru(t, n, r, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n) {
        return Lu(t, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        _e(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
    renderInstance(t, n, r, o) {
        hm(t, n, r, o)
    }
}
class IC extends wg {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (An.has(n)) {
            const r = Fu(n);
            return r && r.default || 0
        }
        return n = mm.has(n) ? n : Tu(n),
        t.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return ae()
    }
    scrapeMotionValuesFromProps(t, n) {
        return vm(t, n)
    }
    build(t, n, r, o) {
        Mu(t, n, r, this.isSVGTag, o.transformTemplate)
    }
    renderInstance(t, n, r, o) {
        gm(t, n, r, o)
    }
    mount(t) {
        this.isSVGTag = Au(t.tagName),
        super.mount(t)
    }
}
const OC = (e, t) => ju(e) ? new IC(t,{
    enableHardwareAcceleration: !1
}) : new _C(t,{
    enableHardwareAcceleration: !0
})
  , FC = {
    layout: {
        ProjectionNode: gg,
        MeasureLayout: ug
    }
}
  , zC = {
    ...fS,
    ...A1,
    ...vC,
    ...FC
}
  , be = zx( (e, t) => x1(e, t, zC, OC));
function Sg(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = Sg(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function Cg() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = Sg(e)) && (r && (r += " "),
        r += t);
    return r
}
function BC() {
    for (var e = 0, t, n, r = ""; e < arguments.length; )
        (t = arguments[e++]) && (n = Pg(t)) && (r && (r += " "),
        r += n);
    return r
}
function Pg(e) {
    if (typeof e == "string")
        return e;
    for (var t, n = "", r = 0; r < e.length; r++)
        e[r] && (t = Pg(e[r])) && (n && (n += " "),
        n += t);
    return n
}
var Hu = "-";
function UC(e) {
    var t = WC(e)
      , n = e.conflictingClassGroups
      , r = e.conflictingClassGroupModifiers
      , o = r === void 0 ? {} : r;
    function i(l) {
        var a = l.split(Hu);
        return a[0] === "" && a.length !== 1 && a.shift(),
        Eg(a, t) || $C(l)
    }
    function s(l, a) {
        var u = n[l] || [];
        return a && o[l] ? [].concat(u, o[l]) : u
    }
    return {
        getClassGroupId: i,
        getConflictingClassGroupIds: s
    }
}
function Eg(e, t) {
    var s;
    if (e.length === 0)
        return t.classGroupId;
    var n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? Eg(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length !== 0) {
        var i = e.join(Hu);
        return (s = t.validators.find(function(l) {
            var a = l.validator;
            return a(i)
        })) == null ? void 0 : s.classGroupId
    }
}
var wf = /^\[(.+)\]$/;
function $C(e) {
    if (wf.test(e)) {
        var t = wf.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
function WC(e) {
    var t = e.theme
      , n = e.prefix
      , r = {
        nextPart: new Map,
        validators: []
    }
      , o = GC(Object.entries(e.classGroups), n);
    return o.forEach(function(i) {
        var s = i[0]
          , l = i[1];
        Pa(l, r, s, t)
    }),
    r
}
function Pa(e, t, n, r) {
    e.forEach(function(o) {
        if (typeof o == "string") {
            var i = o === "" ? t : Sf(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (HC(o)) {
                Pa(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach(function(s) {
            var l = s[0]
              , a = s[1];
            Pa(a, Sf(t, l), n, r)
        })
    })
}
function Sf(e, t) {
    var n = e;
    return t.split(Hu).forEach(function(r) {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }),
    n
}
function HC(e) {
    return e.isThemeGetter
}
function GC(e, t) {
    return t ? e.map(function(n) {
        var r = n[0]
          , o = n[1]
          , i = o.map(function(s) {
            return typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(function(l) {
                var a = l[0]
                  , u = l[1];
                return [t + a, u]
            })) : s
        });
        return [r, i]
    }) : e
}
function KC(e) {
    if (e < 1)
        return {
            get: function() {},
            set: function() {}
        };
    var t = 0
      , n = new Map
      , r = new Map;
    function o(i, s) {
        n.set(i, s),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    return {
        get: function(s) {
            var l = n.get(s);
            if (l !== void 0)
                return l;
            if ((l = r.get(s)) !== void 0)
                return o(s, l),
                l
        },
        set: function(s, l) {
            n.has(s) ? n.set(s, l) : o(s, l)
        }
    }
}
var Tg = "!";
function QC(e) {
    var t = e.separator || ":"
      , n = t.length === 1
      , r = t[0]
      , o = t.length;
    return function(s) {
        for (var l = [], a = 0, u = 0, d, c = 0; c < s.length; c++) {
            var f = s[c];
            if (a === 0) {
                if (f === r && (n || s.slice(c, c + o) === t)) {
                    l.push(s.slice(u, c)),
                    u = c + o;
                    continue
                }
                if (f === "/") {
                    d = c;
                    continue
                }
            }
            f === "[" ? a++ : f === "]" && a--
        }
        var g = l.length === 0 ? s : s.substring(u)
          , x = g.startsWith(Tg)
          , y = x ? g.substring(1) : g
          , S = d && d > u ? d - u : void 0;
        return {
            modifiers: l,
            hasImportantModifier: x,
            baseClassName: y,
            maybePostfixModifierPosition: S
        }
    }
}
function YC(e) {
    if (e.length <= 1)
        return e;
    var t = []
      , n = [];
    return e.forEach(function(r) {
        var o = r[0] === "[";
        o ? (t.push.apply(t, n.sort().concat([r])),
        n = []) : n.push(r)
    }),
    t.push.apply(t, n.sort()),
    t
}
function XC(e) {
    return {
        cache: KC(e.cacheSize),
        splitModifiers: QC(e),
        ...UC(e)
    }
}
var qC = /\s+/;
function ZC(e, t) {
    var n = t.splitModifiers
      , r = t.getClassGroupId
      , o = t.getConflictingClassGroupIds
      , i = new Set;
    return e.trim().split(qC).map(function(s) {
        var l = n(s)
          , a = l.modifiers
          , u = l.hasImportantModifier
          , d = l.baseClassName
          , c = l.maybePostfixModifierPosition
          , f = r(c ? d.substring(0, c) : d)
          , g = !!c;
        if (!f) {
            if (!c)
                return {
                    isTailwindClass: !1,
                    originalClassName: s
                };
            if (f = r(d),
            !f)
                return {
                    isTailwindClass: !1,
                    originalClassName: s
                };
            g = !1
        }
        var x = YC(a).join(":")
          , y = u ? x + Tg : x;
        return {
            isTailwindClass: !0,
            modifierId: y,
            classGroupId: f,
            originalClassName: s,
            hasPostfixModifier: g
        }
    }).reverse().filter(function(s) {
        if (!s.isTailwindClass)
            return !0;
        var l = s.modifierId
          , a = s.classGroupId
          , u = s.hasPostfixModifier
          , d = l + a;
        return i.has(d) ? !1 : (i.add(d),
        o(a, u).forEach(function(c) {
            return i.add(l + c)
        }),
        !0)
    }).reverse().map(function(s) {
        return s.originalClassName
    }).join(" ")
}
function JC() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    var r, o, i, s = l;
    function l(u) {
        var d = t[0]
          , c = t.slice(1)
          , f = c.reduce(function(g, x) {
            return x(g)
        }, d());
        return r = XC(f),
        o = r.cache.get,
        i = r.cache.set,
        s = a,
        a(u)
    }
    function a(u) {
        var d = o(u);
        if (d)
            return d;
        var c = ZC(u, r);
        return i(u, c),
        c
    }
    return function() {
        return s(BC.apply(null, arguments))
    }
}
function K(e) {
    var t = function(r) {
        return r[e] || []
    };
    return t.isThemeGetter = !0,
    t
}
var kg = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , eP = /^\d+\/\d+$/
  , tP = new Set(["px", "full", "screen"])
  , nP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , rP = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , oP = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function rt(e) {
    return xn(e) || tP.has(e) || eP.test(e) || Ea(e)
}
function Ea(e) {
    return Dn(e, "length", cP)
}
function iP(e) {
    return Dn(e, "size", Ng)
}
function sP(e) {
    return Dn(e, "position", Ng)
}
function lP(e) {
    return Dn(e, "url", dP)
}
function Jo(e) {
    return Dn(e, "number", xn)
}
function xn(e) {
    return !Number.isNaN(Number(e))
}
function aP(e) {
    return e.endsWith("%") && xn(e.slice(0, -1))
}
function br(e) {
    return Cf(e) || Dn(e, "number", Cf)
}
function F(e) {
    return kg.test(e)
}
function Mr() {
    return !0
}
function Lt(e) {
    return nP.test(e)
}
function uP(e) {
    return Dn(e, "", fP)
}
function Dn(e, t, n) {
    var r = kg.exec(e);
    return r ? r[1] ? r[1] === t : n(r[2]) : !1
}
function cP(e) {
    return rP.test(e)
}
function Ng() {
    return !1
}
function dP(e) {
    return e.startsWith("url(")
}
function Cf(e) {
    return Number.isInteger(Number(e))
}
function fP(e) {
    return oP.test(e)
}
function pP() {
    var e = K("colors")
      , t = K("spacing")
      , n = K("blur")
      , r = K("brightness")
      , o = K("borderColor")
      , i = K("borderRadius")
      , s = K("borderSpacing")
      , l = K("borderWidth")
      , a = K("contrast")
      , u = K("grayscale")
      , d = K("hueRotate")
      , c = K("invert")
      , f = K("gap")
      , g = K("gradientColorStops")
      , x = K("gradientColorStopPositions")
      , y = K("inset")
      , S = K("margin")
      , m = K("opacity")
      , p = K("padding")
      , h = K("saturate")
      , C = K("scale")
      , P = K("sepia")
      , T = K("skew")
      , E = K("space")
      , k = K("translate")
      , A = function() {
        return ["auto", "contain", "none"]
    }
      , L = function() {
        return ["auto", "hidden", "clip", "visible", "scroll"]
    }
      , $ = function() {
        return ["auto", F, t]
    }
      , V = function() {
        return [F, t]
    }
      , J = function() {
        return ["", rt]
    }
      , b = function() {
        return ["auto", xn, F]
    }
      , q = function() {
        return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
    }
      , z = function() {
        return ["solid", "dashed", "dotted", "double", "none"]
    }
      , se = function() {
        return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
    }
      , j = function() {
        return ["start", "end", "center", "between", "around", "evenly", "stretch"]
    }
      , M = function() {
        return ["", "0", F]
    }
      , I = function() {
        return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
    }
      , D = function() {
        return [xn, Jo]
    }
      , B = function() {
        return [xn, F]
    };
    return {
        cacheSize: 500,
        theme: {
            colors: [Mr],
            spacing: [rt],
            blur: ["none", "", Lt, F],
            brightness: D(),
            borderColor: [e],
            borderRadius: ["none", "", "full", Lt, F],
            borderSpacing: V(),
            borderWidth: J(),
            contrast: D(),
            grayscale: M(),
            hueRotate: B(),
            invert: M(),
            gap: V(),
            gradientColorStops: [e],
            gradientColorStopPositions: [aP, Ea],
            inset: $(),
            margin: $(),
            opacity: D(),
            padding: V(),
            saturate: D(),
            scale: D(),
            sepia: M(),
            skew: B(),
            space: V(),
            translate: V()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", F]
            }],
            container: ["container"],
            columns: [{
                columns: [Lt]
            }],
            "break-after": [{
                "break-after": I()
            }],
            "break-before": [{
                "break-before": I()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [].concat(q(), [F])
            }],
            overflow: [{
                overflow: L()
            }],
            "overflow-x": [{
                "overflow-x": L()
            }],
            "overflow-y": [{
                "overflow-y": L()
            }],
            overscroll: [{
                overscroll: A()
            }],
            "overscroll-x": [{
                "overscroll-x": A()
            }],
            "overscroll-y": [{
                "overscroll-y": A()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [y]
            }],
            "inset-x": [{
                "inset-x": [y]
            }],
            "inset-y": [{
                "inset-y": [y]
            }],
            start: [{
                start: [y]
            }],
            end: [{
                end: [y]
            }],
            top: [{
                top: [y]
            }],
            right: [{
                right: [y]
            }],
            bottom: [{
                bottom: [y]
            }],
            left: [{
                left: [y]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", br]
            }],
            basis: [{
                basis: $()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", F]
            }],
            grow: [{
                grow: M()
            }],
            shrink: [{
                shrink: M()
            }],
            order: [{
                order: ["first", "last", "none", br]
            }],
            "grid-cols": [{
                "grid-cols": [Mr]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", br]
                }, F]
            }],
            "col-start": [{
                "col-start": b()
            }],
            "col-end": [{
                "col-end": b()
            }],
            "grid-rows": [{
                "grid-rows": [Mr]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [br]
                }, F]
            }],
            "row-start": [{
                "row-start": b()
            }],
            "row-end": [{
                "row-end": b()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", F]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", F]
            }],
            gap: [{
                gap: [f]
            }],
            "gap-x": [{
                "gap-x": [f]
            }],
            "gap-y": [{
                "gap-y": [f]
            }],
            "justify-content": [{
                justify: ["normal"].concat(j())
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal"].concat(j(), ["baseline"])
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [].concat(j(), ["baseline"])
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [p]
            }],
            px: [{
                px: [p]
            }],
            py: [{
                py: [p]
            }],
            ps: [{
                ps: [p]
            }],
            pe: [{
                pe: [p]
            }],
            pt: [{
                pt: [p]
            }],
            pr: [{
                pr: [p]
            }],
            pb: [{
                pb: [p]
            }],
            pl: [{
                pl: [p]
            }],
            m: [{
                m: [S]
            }],
            mx: [{
                mx: [S]
            }],
            my: [{
                my: [S]
            }],
            ms: [{
                ms: [S]
            }],
            me: [{
                me: [S]
            }],
            mt: [{
                mt: [S]
            }],
            mr: [{
                mr: [S]
            }],
            mb: [{
                mb: [S]
            }],
            ml: [{
                ml: [S]
            }],
            "space-x": [{
                "space-x": [E]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [E]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", F, t]
            }],
            "min-w": [{
                "min-w": ["min", "max", "fit", F, rt]
            }],
            "max-w": [{
                "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
                    screen: [Lt]
                }, Lt, F]
            }],
            h: [{
                h: [F, t, "auto", "min", "max", "fit"]
            }],
            "min-h": [{
                "min-h": ["min", "max", "fit", F, rt]
            }],
            "max-h": [{
                "max-h": [F, t, "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", Lt, Ea]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Jo]
            }],
            "font-family": [{
                font: [Mr]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", F]
            }],
            "line-clamp": [{
                "line-clamp": ["none", xn, Jo]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", F, rt]
            }],
            "list-image": [{
                "list-image": ["none", F]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", F]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [m]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [m]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [].concat(z(), ["wavy"])
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", rt]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", F, rt]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            indent: [{
                indent: V()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", F]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", F]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [m]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [].concat(q(), [sP])
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", iP]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, lP]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [x]
            }],
            "gradient-via-pos": [{
                via: [x]
            }],
            "gradient-to-pos": [{
                to: [x]
            }],
            "gradient-from": [{
                from: [g]
            }],
            "gradient-via": [{
                via: [g]
            }],
            "gradient-to": [{
                to: [g]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [l]
            }],
            "border-w-x": [{
                "border-x": [l]
            }],
            "border-w-y": [{
                "border-y": [l]
            }],
            "border-w-s": [{
                "border-s": [l]
            }],
            "border-w-e": [{
                "border-e": [l]
            }],
            "border-w-t": [{
                "border-t": [l]
            }],
            "border-w-r": [{
                "border-r": [l]
            }],
            "border-w-b": [{
                "border-b": [l]
            }],
            "border-w-l": [{
                "border-l": [l]
            }],
            "border-opacity": [{
                "border-opacity": [m]
            }],
            "border-style": [{
                border: [].concat(z(), ["hidden"])
            }],
            "divide-x": [{
                "divide-x": [l]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [l]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [m]
            }],
            "divide-style": [{
                divide: z()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: [""].concat(z())
            }],
            "outline-offset": [{
                "outline-offset": [F, rt]
            }],
            "outline-w": [{
                outline: [rt]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: J()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [m]
            }],
            "ring-offset-w": [{
                "ring-offset": [rt]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", Lt, uP]
            }],
            "shadow-color": [{
                shadow: [Mr]
            }],
            opacity: [{
                opacity: [m]
            }],
            "mix-blend": [{
                "mix-blend": se()
            }],
            "bg-blend": [{
                "bg-blend": se()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [a]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", Lt, F]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [c]
            }],
            saturate: [{
                saturate: [h]
            }],
            sepia: [{
                sepia: [P]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [a]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [c]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [m]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [h]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [P]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", F]
            }],
            duration: [{
                duration: B()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", F]
            }],
            delay: [{
                delay: B()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", F]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [C]
            }],
            "scale-x": [{
                "scale-x": [C]
            }],
            "scale-y": [{
                "scale-y": [C]
            }],
            rotate: [{
                rotate: [br, F]
            }],
            "translate-x": [{
                "translate-x": [k]
            }],
            "translate-y": [{
                "translate-y": [k]
            }],
            "skew-x": [{
                "skew-x": [T]
            }],
            "skew-y": [{
                "skew-y": [T]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", F]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: ["appearance-none"],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", F]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": V()
            }],
            "scroll-mx": [{
                "scroll-mx": V()
            }],
            "scroll-my": [{
                "scroll-my": V()
            }],
            "scroll-ms": [{
                "scroll-ms": V()
            }],
            "scroll-me": [{
                "scroll-me": V()
            }],
            "scroll-mt": [{
                "scroll-mt": V()
            }],
            "scroll-mr": [{
                "scroll-mr": V()
            }],
            "scroll-mb": [{
                "scroll-mb": V()
            }],
            "scroll-ml": [{
                "scroll-ml": V()
            }],
            "scroll-p": [{
                "scroll-p": V()
            }],
            "scroll-px": [{
                "scroll-px": V()
            }],
            "scroll-py": [{
                "scroll-py": V()
            }],
            "scroll-ps": [{
                "scroll-ps": V()
            }],
            "scroll-pe": [{
                "scroll-pe": V()
            }],
            "scroll-pt": [{
                "scroll-pt": V()
            }],
            "scroll-pr": [{
                "scroll-pr": V()
            }],
            "scroll-pb": [{
                "scroll-pb": V()
            }],
            "scroll-pl": [{
                "scroll-pl": V()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "pinch-zoom", "manipulation", {
                    pan: ["x", "left", "right", "y", "up", "down"]
                }]
            }],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", F]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [rt, Jo]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
var hP = JC(pP);
function Vn(...e) {
    return hP(Cg(e))
}
function Pf(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function jg(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const i = Pf(o, t);
            return !n && typeof i == "function" && (n = !0),
            i
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const i = r[o];
                    typeof i == "function" ? i() : Pf(e[o], null)
                }
            }
    }
}
function jn(...e) {
    return w.useCallback(jg(...e), e)
}
function Yi(e) {
    const t = gP(e)
      , n = w.forwardRef( (r, o) => {
        const {children: i, ...s} = r
          , l = w.Children.toArray(i)
          , a = l.find(yP);
        if (a) {
            const u = a.props.children
              , d = l.map(c => c === a ? w.Children.count(u) > 1 ? w.Children.only(null) : w.isValidElement(u) ? u.props.children : null : c);
            return v.jsx(t, {
                ...s,
                ref: o,
                children: w.isValidElement(u) ? w.cloneElement(u, void 0, d) : null
            })
        }
        return v.jsx(t, {
            ...s,
            ref: o,
            children: i
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var mP = Yi("Slot");
function gP(e) {
    const t = w.forwardRef( (n, r) => {
        const {children: o, ...i} = n;
        if (w.isValidElement(o)) {
            const s = wP(o)
              , l = xP(i, o.props);
            return o.type !== w.Fragment && (l.ref = r ? jg(r, s) : s),
            w.cloneElement(o, l)
        }
        return w.Children.count(o) > 1 ? w.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var vP = Symbol("radix.slottable");
function yP(e) {
    return w.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === vP
}
function xP(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
            i(...l),
            o(...l)
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function wP(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
const Ef = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Tf = Cg
  , Rg = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return Tf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: i} = t
      , s = Object.keys(o).map(u => {
        const d = n == null ? void 0 : n[u]
          , c = i == null ? void 0 : i[u];
        if (d === null)
            return null;
        const f = Ef(d) || Ef(c);
        return o[u][f]
    }
    )
      , l = n && Object.entries(n).reduce( (u, d) => {
        let[c,f] = d;
        return f === void 0 || (u[c] = f),
        u
    }
    , {})
      , a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, d) => {
        let {class: c, className: f, ...g} = d;
        return Object.entries(g).every(x => {
            let[y,S] = x;
            return Array.isArray(S) ? S.includes({
                ...i,
                ...l
            }[y]) : {
                ...i,
                ...l
            }[y] === S
        }
        ) ? [...u, c, f] : u
    }
    , []);
    return Tf(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
  , SP = Rg("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , Ze = he.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, i) => {
    const s = r ? mP : "button";
    return v.jsx(s, {
        className: Vn(SP({
            variant: t,
            size: n,
            className: e
        })),
        ref: i,
        ...o
    })
}
);
Ze.displayName = "Button";
function ze(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function bg(e, t=[]) {
    let n = [];
    function r(i, s) {
        const l = w.createContext(s)
          , a = n.length;
        n = [...n, s];
        const u = c => {
            var m;
            const {scope: f, children: g, ...x} = c
              , y = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[a]) || l
              , S = w.useMemo( () => x, Object.values(x));
            return v.jsx(y.Provider, {
                value: S,
                children: g
            })
        }
        ;
        u.displayName = i + "Provider";
        function d(c, f) {
            var y;
            const g = ((y = f == null ? void 0 : f[e]) == null ? void 0 : y[a]) || l
              , x = w.useContext(g);
            if (x)
                return x;
            if (s !== void 0)
                return s;
            throw new Error(`\`${c}\` must be used within \`${i}\``)
        }
        return [u, d]
    }
    const o = () => {
        const i = n.map(s => w.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return w.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, CP(o, ...t)]
}
function CP(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (l, {useScope: a, scopeName: u}) => {
                const c = a(i)[`__scope${u}`];
                return {
                    ...l,
                    ...c
                }
            }
            , {});
            return w.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function PP(e) {
    const t = e + "CollectionProvider"
      , [n,r] = bg(t)
      , [o,i] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , s = y => {
        const {scope: S, children: m} = y
          , p = he.useRef(null)
          , h = he.useRef(new Map).current;
        return v.jsx(o, {
            scope: S,
            itemMap: h,
            collectionRef: p,
            children: m
        })
    }
    ;
    s.displayName = t;
    const l = e + "CollectionSlot"
      , a = Yi(l)
      , u = he.forwardRef( (y, S) => {
        const {scope: m, children: p} = y
          , h = i(l, m)
          , C = jn(S, h.collectionRef);
        return v.jsx(a, {
            ref: C,
            children: p
        })
    }
    );
    u.displayName = l;
    const d = e + "CollectionItemSlot"
      , c = "data-radix-collection-item"
      , f = Yi(d)
      , g = he.forwardRef( (y, S) => {
        const {scope: m, children: p, ...h} = y
          , C = he.useRef(null)
          , P = jn(S, C)
          , T = i(d, m);
        return he.useEffect( () => (T.itemMap.set(C, {
            ref: C,
            ...h
        }),
        () => void T.itemMap.delete(C))),
        v.jsx(f, {
            [c]: "",
            ref: P,
            children: p
        })
    }
    );
    g.displayName = d;
    function x(y) {
        const S = i(e + "CollectionConsumer", y);
        return he.useCallback( () => {
            const p = S.collectionRef.current;
            if (!p)
                return [];
            const h = Array.from(p.querySelectorAll(`[${c}]`));
            return Array.from(S.itemMap.values()).sort( (T, E) => h.indexOf(T.ref.current) - h.indexOf(E.ref.current))
        }
        , [S.collectionRef, S.itemMap])
    }
    return [{
        Provider: s,
        Slot: u,
        ItemSlot: g
    }, x, r]
}
var EP = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , gt = EP.reduce( (e, t) => {
    const n = Yi(`Primitive.${t}`)
      , r = w.forwardRef( (o, i) => {
        const {asChild: s, ...l} = o
          , a = s ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        v.jsx(a, {
            ...l,
            ref: i
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function Mg(e, t) {
    e && fs.flushSync( () => e.dispatchEvent(t))
}
function Rn(e) {
    const t = w.useRef(e);
    return w.useEffect( () => {
        t.current = e
    }
    ),
    w.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function TP(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Rn(e);
    w.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var kP = "DismissableLayer", Ta = "dismissableLayer.update", NP = "dismissableLayer.pointerDownOutside", jP = "dismissableLayer.focusOutside", kf, Ag = w.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Lg = w.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: l, ...a} = e
      , u = w.useContext(Ag)
      , [d,c] = w.useState(null)
      , f = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,g] = w.useState({})
      , x = jn(t, E => c(E))
      , y = Array.from(u.layers)
      , [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , m = y.indexOf(S)
      , p = d ? y.indexOf(d) : -1
      , h = u.layersWithOutsidePointerEventsDisabled.size > 0
      , C = p >= m
      , P = bP(E => {
        const k = E.target
          , A = [...u.branches].some(L => L.contains(k));
        !C || A || (o == null || o(E),
        s == null || s(E),
        E.defaultPrevented || l == null || l())
    }
    , f)
      , T = MP(E => {
        const k = E.target;
        [...u.branches].some(L => L.contains(k)) || (i == null || i(E),
        s == null || s(E),
        E.defaultPrevented || l == null || l())
    }
    , f);
    return TP(E => {
        p === u.layers.size - 1 && (r == null || r(E),
        !E.defaultPrevented && l && (E.preventDefault(),
        l()))
    }
    , f),
    w.useEffect( () => {
        if (d)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (kf = f.body.style.pointerEvents,
            f.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            Nf(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = kf)
            }
    }
    , [d, f, n, u]),
    w.useEffect( () => () => {
        d && (u.layers.delete(d),
        u.layersWithOutsidePointerEventsDisabled.delete(d),
        Nf())
    }
    , [d, u]),
    w.useEffect( () => {
        const E = () => g({});
        return document.addEventListener(Ta, E),
        () => document.removeEventListener(Ta, E)
    }
    , []),
    v.jsx(gt.div, {
        ...a,
        ref: x,
        style: {
            pointerEvents: h ? C ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: ze(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: ze(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: ze(e.onPointerDownCapture, P.onPointerDownCapture)
    })
}
);
Lg.displayName = kP;
var RP = "DismissableLayerBranch"
  , Dg = w.forwardRef( (e, t) => {
    const n = w.useContext(Ag)
      , r = w.useRef(null)
      , o = jn(t, r);
    return w.useEffect( () => {
        const i = r.current;
        if (i)
            return n.branches.add(i),
            () => {
                n.branches.delete(i)
            }
    }
    , [n.branches]),
    v.jsx(gt.div, {
        ...e,
        ref: o
    })
}
);
Dg.displayName = RP;
function bP(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Rn(e)
      , r = w.useRef(!1)
      , o = w.useRef( () => {}
    );
    return w.useEffect( () => {
        const i = l => {
            if (l.target && !r.current) {
                let a = function() {
                    Vg(NP, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: l
                };
                l.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = a,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : a()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , s = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(s),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function MP(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Rn(e)
      , r = w.useRef(!1);
    return w.useEffect( () => {
        const o = i => {
            i.target && !r.current && Vg(jP, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function Nf() {
    const e = new CustomEvent(Ta);
    document.dispatchEvent(e)
}
function Vg(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Mg(o, i) : o.dispatchEvent(i)
}
var AP = Lg
  , LP = Dg
  , wo = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {}
  , DP = "Portal"
  , _g = w.forwardRef( (e, t) => {
    var l;
    const {container: n, ...r} = e
      , [o,i] = w.useState(!1);
    wo( () => i(!0), []);
    const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return s ? V0.createPortal(v.jsx(gt.div, {
        ...r,
        ref: t
    }), s) : null
}
);
_g.displayName = DP;
function VP(e, t) {
    return w.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Ig = e => {
    const {present: t, children: n} = e
      , r = _P(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : w.Children.only(n)
      , i = jn(r.ref, IP(o));
    return typeof n == "function" || r.isPresent ? w.cloneElement(o, {
        ref: i
    }) : null
}
;
Ig.displayName = "Presence";
function _P(e) {
    const [t,n] = w.useState()
      , r = w.useRef(null)
      , o = w.useRef(e)
      , i = w.useRef("none")
      , s = e ? "mounted" : "unmounted"
      , [l,a] = VP(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return w.useEffect( () => {
        const u = ei(r.current);
        i.current = l === "mounted" ? u : "none"
    }
    , [l]),
    wo( () => {
        const u = r.current
          , d = o.current;
        if (d !== e) {
            const f = i.current
              , g = ei(u);
            e ? a("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(d && f !== g ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, a]),
    wo( () => {
        if (t) {
            let u;
            const d = t.ownerDocument.defaultView ?? window
              , c = g => {
                const y = ei(r.current).includes(g.animationName);
                if (g.target === t && y && (a("ANIMATION_END"),
                !o.current)) {
                    const S = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = d.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S)
                    }
                    )
                }
            }
              , f = g => {
                g.target === t && (i.current = ei(r.current))
            }
            ;
            return t.addEventListener("animationstart", f),
            t.addEventListener("animationcancel", c),
            t.addEventListener("animationend", c),
            () => {
                d.clearTimeout(u),
                t.removeEventListener("animationstart", f),
                t.removeEventListener("animationcancel", c),
                t.removeEventListener("animationend", c)
            }
        } else
            a("ANIMATION_END")
    }
    , [t, a]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: w.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function ei(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function IP(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var OP = zf[" useInsertionEffect ".trim().toString()] || wo;
function FP({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,i,s] = zP({
        defaultProp: t,
        onChange: n
    })
      , l = e !== void 0
      , a = l ? e : o;
    {
        const d = w.useRef(e !== void 0);
        w.useEffect( () => {
            const c = d.current;
            c !== l && console.warn(`${r} is changing from ${c ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            d.current = l
        }
        , [l, r])
    }
    const u = w.useCallback(d => {
        var c;
        if (l) {
            const f = BP(d) ? d(e) : d;
            f !== e && ((c = s.current) == null || c.call(s, f))
        } else
            i(d)
    }
    , [l, e, i, s]);
    return [a, u]
}
function zP({defaultProp: e, onChange: t}) {
    const [n,r] = w.useState(e)
      , o = w.useRef(n)
      , i = w.useRef(t);
    return OP( () => {
        i.current = t
    }
    , [t]),
    w.useEffect( () => {
        var s;
        o.current !== n && ((s = i.current) == null || s.call(i, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, i]
}
function BP(e) {
    return typeof e == "function"
}
var UP = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , $P = "VisuallyHidden"
  , Gu = w.forwardRef( (e, t) => v.jsx(gt.span, {
    ...e,
    ref: t,
    style: {
        ...UP,
        ...e.style
    }
}));
Gu.displayName = $P;
var Ku = "ToastProvider"
  , [Qu,WP,HP] = PP("Toast")
  , [Og,bE] = bg("Toast", [HP])
  , [GP,Es] = Og(Ku)
  , Fg = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: i=50, children: s} = e
      , [l,a] = w.useState(null)
      , [u,d] = w.useState(0)
      , c = w.useRef(!1)
      , f = w.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Ku}\`. Expected non-empty \`string\`.`),
    v.jsx(Qu.Provider, {
        scope: t,
        children: v.jsx(GP, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: i,
            toastCount: u,
            viewport: l,
            onViewportChange: a,
            onToastAdd: w.useCallback( () => d(g => g + 1), []),
            onToastRemove: w.useCallback( () => d(g => g - 1), []),
            isFocusedToastEscapeKeyDownRef: c,
            isClosePausedRef: f,
            children: s
        })
    })
}
;
Fg.displayName = Ku;
var zg = "ToastViewport"
  , KP = ["F8"]
  , ka = "toast.viewportPause"
  , Na = "toast.viewportResume"
  , Bg = w.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=KP, label: o="Notifications ({hotkey})", ...i} = e
      , s = Es(zg, n)
      , l = WP(n)
      , a = w.useRef(null)
      , u = w.useRef(null)
      , d = w.useRef(null)
      , c = w.useRef(null)
      , f = jn(t, c, s.onViewportChange)
      , g = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , x = s.toastCount > 0;
    w.useEffect( () => {
        const S = m => {
            var h;
            r.length !== 0 && r.every(C => m[C] || m.code === C) && ((h = c.current) == null || h.focus())
        }
        ;
        return document.addEventListener("keydown", S),
        () => document.removeEventListener("keydown", S)
    }
    , [r]),
    w.useEffect( () => {
        const S = a.current
          , m = c.current;
        if (x && S && m) {
            const p = () => {
                if (!s.isClosePausedRef.current) {
                    const T = new CustomEvent(ka);
                    m.dispatchEvent(T),
                    s.isClosePausedRef.current = !0
                }
            }
              , h = () => {
                if (s.isClosePausedRef.current) {
                    const T = new CustomEvent(Na);
                    m.dispatchEvent(T),
                    s.isClosePausedRef.current = !1
                }
            }
              , C = T => {
                !S.contains(T.relatedTarget) && h()
            }
              , P = () => {
                S.contains(document.activeElement) || h()
            }
            ;
            return S.addEventListener("focusin", p),
            S.addEventListener("focusout", C),
            S.addEventListener("pointermove", p),
            S.addEventListener("pointerleave", P),
            window.addEventListener("blur", p),
            window.addEventListener("focus", h),
            () => {
                S.removeEventListener("focusin", p),
                S.removeEventListener("focusout", C),
                S.removeEventListener("pointermove", p),
                S.removeEventListener("pointerleave", P),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", h)
            }
        }
    }
    , [x, s.isClosePausedRef]);
    const y = w.useCallback( ({tabbingDirection: S}) => {
        const p = l().map(h => {
            const C = h.ref.current
              , P = [C, ...sE(C)];
            return S === "forwards" ? P : P.reverse()
        }
        );
        return (S === "forwards" ? p.reverse() : p).flat()
    }
    , [l]);
    return w.useEffect( () => {
        const S = c.current;
        if (S) {
            const m = p => {
                var P, T, E;
                const h = p.altKey || p.ctrlKey || p.metaKey;
                if (p.key === "Tab" && !h) {
                    const k = document.activeElement
                      , A = p.shiftKey;
                    if (p.target === S && A) {
                        (P = u.current) == null || P.focus();
                        return
                    }
                    const V = y({
                        tabbingDirection: A ? "backwards" : "forwards"
                    })
                      , J = V.findIndex(b => b === k);
                    fl(V.slice(J + 1)) ? p.preventDefault() : A ? (T = u.current) == null || T.focus() : (E = d.current) == null || E.focus()
                }
            }
            ;
            return S.addEventListener("keydown", m),
            () => S.removeEventListener("keydown", m)
        }
    }
    , [l, y]),
    v.jsxs(LP, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", g),
        tabIndex: -1,
        style: {
            pointerEvents: x ? void 0 : "none"
        },
        children: [x && v.jsx(ja, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const S = y({
                    tabbingDirection: "forwards"
                });
                fl(S)
            }
        }), v.jsx(Qu.Slot, {
            scope: n,
            children: v.jsx(gt.ol, {
                tabIndex: -1,
                ...i,
                ref: f
            })
        }), x && v.jsx(ja, {
            ref: d,
            onFocusFromOutsideViewport: () => {
                const S = y({
                    tabbingDirection: "backwards"
                });
                fl(S)
            }
        })]
    })
}
);
Bg.displayName = zg;
var Ug = "ToastFocusProxy"
  , ja = w.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , i = Es(Ug, n);
    return v.jsx(Gu, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: s => {
            var u;
            const l = s.relatedTarget;
            !((u = i.viewport) != null && u.contains(l)) && r()
        }
    })
}
);
ja.displayName = Ug;
var bo = "Toast"
  , QP = "toast.swipeStart"
  , YP = "toast.swipeMove"
  , XP = "toast.swipeCancel"
  , qP = "toast.swipeEnd"
  , $g = w.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s} = e
      , [l,a] = FP({
        prop: r,
        defaultProp: o ?? !0,
        onChange: i,
        caller: bo
    });
    return v.jsx(Ig, {
        present: n || l,
        children: v.jsx(eE, {
            open: l,
            ...s,
            ref: t,
            onClose: () => a(!1),
            onPause: Rn(e.onPause),
            onResume: Rn(e.onResume),
            onSwipeStart: ze(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: ze(e.onSwipeMove, u => {
                const {x: d, y: c} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${c}px`)
            }
            ),
            onSwipeCancel: ze(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: ze(e.onSwipeEnd, u => {
                const {x: d, y: c} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${c}px`),
                a(!1)
            }
            )
        })
    })
}
);
$g.displayName = bo;
var [ZP,JP] = Og(bo, {
    onClose() {}
})
  , eE = w.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: i, onClose: s, onEscapeKeyDown: l, onPause: a, onResume: u, onSwipeStart: d, onSwipeMove: c, onSwipeCancel: f, onSwipeEnd: g, ...x} = e
      , y = Es(bo, n)
      , [S,m] = w.useState(null)
      , p = jn(t, b => m(b))
      , h = w.useRef(null)
      , C = w.useRef(null)
      , P = o || y.duration
      , T = w.useRef(0)
      , E = w.useRef(P)
      , k = w.useRef(0)
      , {onToastAdd: A, onToastRemove: L} = y
      , $ = Rn( () => {
        var q;
        (S == null ? void 0 : S.contains(document.activeElement)) && ((q = y.viewport) == null || q.focus()),
        s()
    }
    )
      , V = w.useCallback(b => {
        !b || b === 1 / 0 || (window.clearTimeout(k.current),
        T.current = new Date().getTime(),
        k.current = window.setTimeout($, b))
    }
    , [$]);
    w.useEffect( () => {
        const b = y.viewport;
        if (b) {
            const q = () => {
                V(E.current),
                u == null || u()
            }
              , z = () => {
                const se = new Date().getTime() - T.current;
                E.current = E.current - se,
                window.clearTimeout(k.current),
                a == null || a()
            }
            ;
            return b.addEventListener(ka, z),
            b.addEventListener(Na, q),
            () => {
                b.removeEventListener(ka, z),
                b.removeEventListener(Na, q)
            }
        }
    }
    , [y.viewport, P, a, u, V]),
    w.useEffect( () => {
        i && !y.isClosePausedRef.current && V(P)
    }
    , [i, P, y.isClosePausedRef, V]),
    w.useEffect( () => (A(),
    () => L()), [A, L]);
    const J = w.useMemo( () => S ? Xg(S) : null, [S]);
    return y.viewport ? v.jsxs(v.Fragment, {
        children: [J && v.jsx(tE, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: J
        }), v.jsx(ZP, {
            scope: n,
            onClose: $,
            children: fs.createPortal(v.jsx(Qu.ItemSlot, {
                scope: n,
                children: v.jsx(AP, {
                    asChild: !0,
                    onEscapeKeyDown: ze(l, () => {
                        y.isFocusedToastEscapeKeyDownRef.current || $(),
                        y.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: v.jsx(gt.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": y.swipeDirection,
                        ...x,
                        ref: p,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: ze(e.onKeyDown, b => {
                            b.key === "Escape" && (l == null || l(b.nativeEvent),
                            b.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = !0,
                            $()))
                        }
                        ),
                        onPointerDown: ze(e.onPointerDown, b => {
                            b.button === 0 && (h.current = {
                                x: b.clientX,
                                y: b.clientY
                            })
                        }
                        ),
                        onPointerMove: ze(e.onPointerMove, b => {
                            if (!h.current)
                                return;
                            const q = b.clientX - h.current.x
                              , z = b.clientY - h.current.y
                              , se = !!C.current
                              , j = ["left", "right"].includes(y.swipeDirection)
                              , M = ["left", "up"].includes(y.swipeDirection) ? Math.min : Math.max
                              , I = j ? M(0, q) : 0
                              , D = j ? 0 : M(0, z)
                              , B = b.pointerType === "touch" ? 10 : 2
                              , H = {
                                x: I,
                                y: D
                            }
                              , Ie = {
                                originalEvent: b,
                                delta: H
                            };
                            se ? (C.current = H,
                            ti(YP, c, Ie, {
                                discrete: !1
                            })) : jf(H, y.swipeDirection, B) ? (C.current = H,
                            ti(QP, d, Ie, {
                                discrete: !1
                            }),
                            b.target.setPointerCapture(b.pointerId)) : (Math.abs(q) > B || Math.abs(z) > B) && (h.current = null)
                        }
                        ),
                        onPointerUp: ze(e.onPointerUp, b => {
                            const q = C.current
                              , z = b.target;
                            if (z.hasPointerCapture(b.pointerId) && z.releasePointerCapture(b.pointerId),
                            C.current = null,
                            h.current = null,
                            q) {
                                const se = b.currentTarget
                                  , j = {
                                    originalEvent: b,
                                    delta: q
                                };
                                jf(q, y.swipeDirection, y.swipeThreshold) ? ti(qP, g, j, {
                                    discrete: !0
                                }) : ti(XP, f, j, {
                                    discrete: !0
                                }),
                                se.addEventListener("click", M => M.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), y.viewport)
        })]
    }) : null
}
)
  , tE = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = Es(bo, t)
      , [i,s] = w.useState(!1)
      , [l,a] = w.useState(!1);
    return oE( () => s(!0)),
    w.useEffect( () => {
        const u = window.setTimeout( () => a(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    l ? null : v.jsx(_g, {
        asChild: !0,
        children: v.jsx(Gu, {
            ...r,
            children: i && v.jsxs(v.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , nE = "ToastTitle"
  , Wg = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return v.jsx(gt.div, {
        ...r,
        ref: t
    })
}
);
Wg.displayName = nE;
var rE = "ToastDescription"
  , Hg = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return v.jsx(gt.div, {
        ...r,
        ref: t
    })
}
);
Hg.displayName = rE;
var Gg = "ToastAction"
  , Kg = w.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? v.jsx(Yg, {
        altText: n,
        asChild: !0,
        children: v.jsx(Yu, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Gg}\`. Expected non-empty \`string\`.`),
    null)
}
);
Kg.displayName = Gg;
var Qg = "ToastClose"
  , Yu = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = JP(Qg, n);
    return v.jsx(Yg, {
        asChild: !0,
        children: v.jsx(gt.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: ze(e.onClick, o.onClose)
        })
    })
}
);
Yu.displayName = Qg;
var Yg = w.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return v.jsx(gt.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function Xg(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        iE(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...Xg(r))
        }
    }
    ),
    t
}
function ti(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , i = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Mg(o, i) : o.dispatchEvent(i)
}
var jf = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
}
;
function oE(e= () => {}
) {
    const t = Rn(e);
    wo( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function iE(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function sE(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function fl(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var lE = Fg
  , qg = Bg
  , Zg = $g
  , Jg = Wg
  , ev = Hg
  , tv = Kg
  , nv = Yu
  , aE = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const uE = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Mt = (e, t) => {
    const n = w.forwardRef( ({color: r="currentColor", size: o=24, strokeWidth: i=2, absoluteStrokeWidth: s, children: l, ...a}, u) => w.createElement("svg", {
        ref: u,
        ...aE,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(i) * 24 / Number(o) : i,
        className: `lucide lucide-${uE(e)}`,
        ...a
    }, [...t.map( ([d,c]) => w.createElement(d, c)), ...(Array.isArray(l) ? l : [l]) || []]));
    return n.displayName = `${e}`,
    n
}
  , Xu = Mt("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]])
  , cE = Mt("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]])
  , dE = Mt("Building2", [["path", {
    d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
    key: "1b4qmf"
}], ["path", {
    d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
    key: "i71pzd"
}], ["path", {
    d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
    key: "10jefs"
}], ["path", {
    d: "M10 6h4",
    key: "1itunk"
}], ["path", {
    d: "M10 10h4",
    key: "tcdvrf"
}], ["path", {
    d: "M10 14h4",
    key: "kelpxr"
}], ["path", {
    d: "M10 18h4",
    key: "1ulq68"
}]])
  , fE = Mt("Droplets", [["path", {
    d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
    key: "1ptgy4"
}], ["path", {
    d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
    key: "1sl1rz"
}]])
  , pE = Mt("Info", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 16v-4",
    key: "1dtifu"
}], ["path", {
    d: "M12 8h.01",
    key: "e9boi3"
}]])
  , hE = Mt("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]])
  , pl = Mt("User", [["path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
    key: "975kel"
}], ["circle", {
    cx: "12",
    cy: "7",
    r: "4",
    key: "17ys0d"
}]])
  , mE = Mt("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]])
  , gE = Mt("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , vE = lE
  , rv = he.forwardRef( ({className: e, ...t}, n) => v.jsx(qg, {
    ref: n,
    className: Vn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
rv.displayName = qg.displayName;
const yE = Rg("data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full", {
    variants: {
        variant: {
            default: "bg-background border",
            destructive: "group destructive border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , ov = he.forwardRef( ({className: e, variant: t, ...n}, r) => v.jsx(Zg, {
    ref: r,
    className: Vn(yE({
        variant: t
    }), e),
    ...n
}));
ov.displayName = Zg.displayName;
const xE = he.forwardRef( ({className: e, ...t}, n) => v.jsx(tv, {
    ref: n,
    className: Vn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-destructive/30 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
xE.displayName = tv.displayName;
const iv = he.forwardRef( ({className: e, ...t}, n) => v.jsx(nv, {
    ref: n,
    className: Vn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: v.jsx(gE, {
        className: "h-4 w-4"
    })
}));
iv.displayName = nv.displayName;
const sv = he.forwardRef( ({className: e, ...t}, n) => v.jsx(Jg, {
    ref: n,
    className: Vn("text-sm font-semibold", e),
    ...t
}));
sv.displayName = Jg.displayName;
const lv = he.forwardRef( ({className: e, ...t}, n) => v.jsx(ev, {
    ref: n,
    className: Vn("text-sm opacity-90", e),
    ...t
}));
lv.displayName = ev.displayName;
const wE = 1;
let hl = 0;
function SE() {
    return hl = (hl + 1) % Number.MAX_VALUE,
    hl.toString()
}
const Te = {
    state: {
        toasts: []
    },
    listeners: [],
    getState: () => Te.state,
    setState: e => {
        typeof e == "function" ? Te.state = e(Te.state) : Te.state = {
            ...Te.state,
            ...e
        },
        Te.listeners.forEach(t => t(Te.state))
    }
    ,
    subscribe: e => (Te.listeners.push(e),
    () => {
        Te.listeners = Te.listeners.filter(t => t !== e)
    }
    )
}
  , CE = ({...e}) => {
    const t = SE()
      , n = o => Te.setState(i => ({
        ...i,
        toasts: i.toasts.map(s => s.id === t ? {
            ...s,
            ...o
        } : s)
    }))
      , r = () => Te.setState(o => ({
        ...o,
        toasts: o.toasts.filter(i => i.id !== t)
    }));
    return Te.setState(o => ({
        ...o,
        toasts: [{
            ...e,
            id: t,
            dismiss: r
        }, ...o.toasts].slice(0, wE)
    })),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
;
function Ts() {
    const [e,t] = w.useState(Te.getState());
    return w.useEffect( () => Te.subscribe(r => {
        t(r)
    }
    ), []),
    w.useEffect( () => {
        const n = [];
        return e.toasts.forEach(r => {
            if (r.duration === 1 / 0)
                return;
            const o = setTimeout( () => {
                r.dismiss()
            }
            , r.duration || 5e3);
            n.push(o)
        }
        ),
        () => {
            n.forEach(r => clearTimeout(r))
        }
    }
    , [e.toasts]),
    {
        toast: CE,
        toasts: e.toasts
    }
}
function PE() {
    const {toasts: e} = Ts();
    return v.jsxs(vE, {
        children: [e.map( ({id: t, title: n, description: r, action: o, ...i}) => v.jsxs(ov, {
            ...i,
            children: [v.jsxs("div", {
                className: "grid gap-1",
                children: [n && v.jsx(sv, {
                    children: n
                }), r && v.jsx(lv, {
                    children: r
                })]
            }), o, v.jsx(iv, {})]
        }, t)), v.jsx(rv, {})]
    })
}
function EE() {
    const e = gs();
    return v.jsx("div", {
        className: "min-h-screen bg-white",
        children: v.jsxs("div", {
            className: "container mx-auto px-4 py-20",
            children: [v.jsxs(Ze, {
                variant: "ghost",
                onClick: () => e("/"),
                className: "mb-8",
                children: [v.jsx(Xu, {
                    className: "mr-2 h-4 w-4"
                }), " Back to Home"]
            }), v.jsxs(be.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                children: [v.jsx("h1", {
                    className: "text-4xl font-bold mb-8",
                    children: "Get Started with Bottlr Studios"
                }), v.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-8",
                    children: [v.jsxs("div", {
                        className: "bg-gray-50 p-8 rounded-xl",
                        children: [v.jsx("h2", {
                            className: "text-2xl font-bold mb-4",
                            children: "For Businesses"
                        }), v.jsx("p", {
                            className: "text-gray-600 mb-6",
                            children: "Transform your brand presence with custom-branded water bottles. Perfect for hotels, restaurants, and corporate events."
                        }), v.jsx(Ze, {
                            size: "lg",
                            className: "w-full",
                            onClick: () => e("/business-inquiry"),
                            children: "Business Inquiry"
                        })]
                    }), v.jsxs("div", {
                        className: "bg-gray-50 p-8 rounded-xl",
                        children: [v.jsx("h2", {
                            className: "text-2xl font-bold mb-4",
                            children: "For Events"
                        }), v.jsx("p", {
                            className: "text-gray-600 mb-6",
                            children: "Looking for sponsored water bottles for your next event? Let's make it happen."
                        }), v.jsx(Ze, {
                            size: "lg",
                            className: "w-full",
                            onClick: () => e("/event-inquiry"),
                            children: "Event Partnership"
                        })]
                    })]
                }), v.jsxs("div", {
                    className: "mt-12 bg-primary/5 p-8 rounded-xl",
                    children: [v.jsx("h2", {
                        className: "text-2xl font-bold mb-4",
                        children: "How It Works"
                    }), v.jsxs("div", {
                        className: "grid md:grid-cols-3 gap-8",
                        children: [v.jsxs("div", {
                            children: [v.jsx("div", {
                                className: "text-3xl font-bold text-primary mb-2",
                                children: "01"
                            }), v.jsx("h3", {
                                className: "text-xl font-bold mb-2",
                                children: "Consultation"
                            }), v.jsx("p", {
                                className: "text-gray-600",
                                children: "Schedule a call with our team to discuss your needs."
                            })]
                        }), v.jsxs("div", {
                            children: [v.jsx("div", {
                                className: "text-3xl font-bold text-primary mb-2",
                                children: "02"
                            }), v.jsx("h3", {
                                className: "text-xl font-bold mb-2",
                                children: "Design"
                            }), v.jsx("p", {
                                className: "text-gray-600",
                                children: "Our designers create your custom bottle design."
                            })]
                        }), v.jsxs("div", {
                            children: [v.jsx("div", {
                                className: "text-3xl font-bold text-primary mb-2",
                                children: "03"
                            }), v.jsx("h3", {
                                className: "text-xl font-bold mb-2",
                                children: "Delivery"
                            }), v.jsx("p", {
                                className: "text-gray-600",
                                children: "Receive your branded bottles ready for distribution."
                            })]
                        })]
                    })]
                })]
            })]
        })
    })
}
function TE() {
    const e = gs()
      , {toast: t} = Ts()
      , n = r => {
        r.preventDefault(),
        t({
            title: "Inquiry Submitted!",
            description: "We'll get back to you within 24 hours."
        }),
        e("/get-started")
    }
    ;
    return v.jsx("div", {
        className: "min-h-screen bg-white",
        children: v.jsxs("div", {
            className: "container mx-auto px-4 py-20",
            children: [v.jsxs(Ze, {
                variant: "ghost",
                onClick: () => e("/get-started"),
                className: "mb-8",
                children: [v.jsx(Xu, {
                    className: "mr-2 h-4 w-4"
                }), " Back to Get Started"]
            }), v.jsxs(be.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "max-w-2xl mx-auto",
                children: [v.jsx("h1", {
                    className: "text-4xl font-bold mb-8",
                    children: "Business Inquiry"
                }), v.jsxs("form", {
                    onSubmit: n,
                    className: "space-y-6",
                    children: [v.jsxs("div", {
                        children: [v.jsx("label", {
                            className: "block text-sm font-medium mb-2",
                            children: "Company Name"
                        }), v.jsx("input", {
                            type: "text",
                            required: !0,
                            className: "w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                        })]
                    }), v.jsxs("div", {
                        children: [v.jsx("label", {
                            className: "block text-sm font-medium mb-2",
                            children: "Contact Person"
                        }), v.jsx("input", {
                            type: "text",
                            required: !0,
                            className: "w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                        })]
                    }), v.jsxs("div", {
                        children: [v.jsx("label", {
                            className: "block text-sm font-medium mb-2",
                            children: "Email"
                        }), v.jsx("input", {
                            type: "email",
                            required: !0,
                            className: "w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                        })]
                    }), v.jsxs("div", {
                        children: [v.jsx("label", {
                            className: "block text-sm font-medium mb-2",
                            children: "Phone"
                        }), v.jsx("input", {
                            type: "tel",
                            required: !0,
                            className: "w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                        })]
                    }), v.jsxs("div", {
                        children: [v.jsx("label", {
                            className: "block text-sm font-medium mb-2",
                            children: "Estimated Monthly Bottle Requirement"
                        }), v.jsxs("select", {
                            className: "w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary",
                            required: !0,
                            children: [v.jsx("option", {
                                value: "",
                                children: "Select range"
                            }), v.jsx("option", {
                                value: "100-500",
                                children: "100-500"
                            }), v.jsx("option", {
                                value: "501-1000",
                                children: "501-1000"
                            }), v.jsx("option", {
                                value: "1001-5000",
                                children: "1001-5000"
                            }), v.jsx("option", {
                                value: "5000+",
                                children: "5000+"
                            })]
                        })]
                    }), v.jsxs("div", {
                        children: [v.jsx("label", {
                            className: "block text-sm font-medium mb-2",
                            children: "Additional Requirements"
                        }), v.jsx("textarea", {
                            rows: "4",
                            className: "w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                        })]
                    }), v.jsx(Ze, {
                        type: "submit",
                        size: "lg",
                        className: "w-full",
                        children: "Submit Inquiry"
                    })]
                })]
            })]
        })
    })
}
function kE() {
    const e = gs()
      , {toast: t} = Ts()
      , n = r => {
        r.preventDefault(),
        t({
            title: "Event Inquiry Submitted!",
            description: "We'll get back to you within 24 hours."
        }),
        e("/get-started")
    }
    ;
    return v.jsx("div", {
        className: "min-h-screen bg-white",
        children: v.jsxs("div", {
            className: "container mx-auto px-4 py-20",
            children: [v.jsxs(Ze, {
                variant: "ghost",
                onClick: () => e("/get-started"),
                className: "mb-8",
                children: [v.jsx(Xu, {
                    className: "mr-2 h-4 w-4"
                }), " Back to Get Started"]
            }), v.jsxs(be.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "max-w-2xl mx-auto",
                children: [v.jsx("h1", {
                    className: "text-4xl font-bold mb-8",
                    children: "Event Partnership Inquiry"
                }), v.jsxs("form", {
                    onSubmit: n,
                    className: "space-y-6",
                    children: [v.jsxs("div", {
                        children: [v.jsx("label", {
                            className: "block text-sm font-medium mb-2",
                            children: "Event Name"
                        }), v.jsx("input", {
                            type: "text",
                            required: !0,
                            className: "w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                        })]
                    }), v.jsxs("div", {
                        children: [v.jsx("label", {
                            className: "block text-sm font-medium mb-2",
                            children: "Event Date"
                        }), v.jsx("input", {
                            type: "date",
                            required: !0,
                            className: "w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                        })]
                    }), v.jsxs("div", {
                        children: [v.jsx("label", {
                            className: "block text-sm font-medium mb-2",
                            children: "Expected Attendance"
                        }), v.jsx("input", {
                            type: "number",
                            required: !0,
                            className: "w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                        })]
                    }), v.jsxs("div", {
                        children: [v.jsx("label", {
                            className: "block text-sm font-medium mb-2",
                            children: "Event Location"
                        }), v.jsx("input", {
                            type: "text",
                            required: !0,
                            className: "w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                        })]
                    }), v.jsxs("div", {
                        children: [v.jsx("label", {
                            className: "block text-sm font-medium mb-2",
                            children: "Contact Person"
                        }), v.jsx("input", {
                            type: "text",
                            required: !0,
                            className: "w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                        })]
                    }), v.jsxs("div", {
                        children: [v.jsx("label", {
                            className: "block text-sm font-medium mb-2",
                            children: "Email"
                        }), v.jsx("input", {
                            type: "email",
                            required: !0,
                            className: "w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                        })]
                    }), v.jsxs("div", {
                        children: [v.jsx("label", {
                            className: "block text-sm font-medium mb-2",
                            children: "Phone"
                        }), v.jsx("input", {
                            type: "tel",
                            required: !0,
                            className: "w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                        })]
                    }), v.jsxs("div", {
                        children: [v.jsx("label", {
                            className: "block text-sm font-medium mb-2",
                            children: "Additional Information"
                        }), v.jsx("textarea", {
                            rows: "4",
                            className: "w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                        })]
                    }), v.jsx(Ze, {
                        type: "submit",
                        size: "lg",
                        className: "w-full",
                        children: "Submit Inquiry"
                    })]
                })]
            })]
        })
    })
}
function NE() {
    const {toast: e} = Ts()
      , t = gs()
      , n = () => {
        e({
            title: "Message sent!",
            description: "We'll get back to you shortly."
        })
    }
      , r = i => {
        const s = document.getElementById(i);
        s && s.scrollIntoView({
            behavior: "smooth"
        })
    }
      , o = () => v.jsxs("div", {
        className: "min-h-screen bg-white",
        children: [v.jsx(PE, {}), v.jsx("nav", {
            className: "fixed w-full z-50 bg-white/80 backdrop-blur-md border-b",
            children: v.jsxs("div", {
                className: "container mx-auto px-4 py-2 flex items-center justify-between",
                children: [v.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [v.jsx("img", {
                        src: "https://i.ibb.co/4R9YnVJS/Bottle.png",
                        alt: "Bottlr Studios Logo",
                        className: "h-16 w-auto object-contain"
                    }), v.jsx("span", {
                        className: "text-primary font-bold text-xl",
                        children: "Bottlr Studios"
                    })]
                }), v.jsxs("div", {
                    className: "hidden md:flex items-center gap-8",
                    children: [v.jsx("a", {
                        href: "#services",
                        className: "text-gray-600 hover:text-primary transition-colors",
                        children: "Services"
                    }), v.jsx("button", {
                        onClick: () => r("about"),
                        className: "text-gray-600 hover:text-primary transition-colors",
                        children: "About"
                    }), v.jsx("a", {
                        href: "#contact",
                        className: "text-gray-600 hover:text-primary transition-colors",
                        children: "Contact"
                    }), v.jsx(Ze, {
                        onClick: () => t("/get-started"),
                        children: "Get Started"
                    })]
                })]
            })
        }), v.jsx("section", {
            className: "hero-gradient pt-32 pb-20",
            children: v.jsx("div", {
                className: "container mx-auto px-4",
                children: v.jsxs("div", {
                    className: "flex flex-col md:flex-row items-center gap-12",
                    children: [v.jsxs(be.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6
                        },
                        className: "flex-1 text-white",
                        children: [v.jsx("h1", {
                            className: "text-5xl md:text-6xl font-bold mb-6",
                            children: "Pure Bottled Perfection"
                        }), v.jsx("p", {
                            className: "text-xl mb-8 text-gray-100",
                            children: "Custom branded water bottles for hotels, restaurants, and events. Make your mark with every sip."
                        }), v.jsxs("div", {
                            className: "flex gap-4",
                            children: [v.jsxs(Ze, {
                                size: "lg",
                                className: "bg-white text-primary hover:bg-gray-100",
                                onClick: () => t("/get-started"),
                                children: ["Get Started ", v.jsx(cE, {
                                    className: "ml-2 h-5 w-5"
                                })]
                            }), v.jsx(Ze, {
                                size: "lg",
                                variant: "outline",
                                className: "border-white text-white hover:bg-white/10",
                                onClick: () => r("about"),
                                children: "Learn More"
                            })]
                        })]
                    }), v.jsx(be.div, {
                        initial: {
                            opacity: 0,
                            scale: .8
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: .6,
                            delay: .2
                        },
                        className: "flex-1",
                        children: v.jsx("img", {
                            alt: "Custom branded water bottles",
                            className: "w-full rounded-lg shadow-2xl",
                            src: "https://images.unsplash.com/photo-1688964418454-5a57803c00fb"
                        })
                    })]
                })
            })
        }), v.jsx("section", {
            id: "about",
            className: "py-20 bg-gray-50",
            children: v.jsx("div", {
                className: "container mx-auto px-4",
                children: v.jsxs(be.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6
                    },
                    viewport: {
                        once: !0
                    },
                    className: "max-w-4xl mx-auto",
                    children: [v.jsxs("div", {
                        className: "text-center mb-12",
                        children: [v.jsx(pE, {
                            className: "h-12 w-12 text-primary mx-auto mb-4"
                        }), v.jsx("h2", {
                            className: "text-4xl font-bold mb-6",
                            children: "About Bottlr Studios"
                        }), v.jsx("p", {
                            className: "text-xl text-gray-600 mb-8",
                            children: "A branch of VibeKraft Marketing Pvt Ltd, dedicated to revolutionizing branded water bottle solutions."
                        })]
                    }), v.jsxs("div", {
                        className: "grid md:grid-cols-2 gap-8",
                        children: [v.jsxs(be.div, {
                            whileHover: {
                                scale: 1.05
                            },
                            className: "bg-white p-6 rounded-xl shadow-lg",
                            children: [v.jsx("h3", {
                                className: "text-xl font-bold mb-4",
                                children: "Our Mission"
                            }), v.jsx("p", {
                                className: "text-gray-600",
                                children: "To provide innovative and sustainable branded water bottle solutions that help businesses make a lasting impression while promoting hydration and environmental responsibility."
                            })]
                        }), v.jsxs(be.div, {
                            whileHover: {
                                scale: 1.05
                            },
                            className: "bg-white p-6 rounded-xl shadow-lg",
                            children: [v.jsx("h3", {
                                className: "text-xl font-bold mb-4",
                                children: "Our Vision"
                            }), v.jsx("p", {
                                className: "text-gray-600",
                                children: "To become the leading provider of custom branded water bottles, setting new standards in quality, design, and environmental consciousness."
                            })]
                        })]
                    }), v.jsxs("div", {
                        className: "mt-16",
                        children: [v.jsx("h3", {
                            className: "text-3xl font-bold text-center mb-12",
                            children: "Meet Our Co-founders"
                        }), v.jsxs("div", {
                            className: "grid md:grid-cols-3 gap-8",
                            children: [v.jsxs(be.div, {
                                whileHover: {
                                    y: -10
                                },
                                className: "bg-white p-6 rounded-xl shadow-lg text-center",
                                children: [v.jsx("div", {
                                    className: "w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4",
                                    children: v.jsx(pl, {
                                        className: "h-12 w-12 text-primary"
                                    })
                                }), v.jsx("h4", {
                                    className: "text-xl font-bold mb-2",
                                    children: "Amarjeet Pattnaik"
                                }), v.jsx("p", {
                                    className: "text-gray-600",
                                    children: "Co-founder & CEO"
                                })]
                            }), v.jsxs(be.div, {
                                whileHover: {
                                    y: -10
                                },
                                className: "bg-white p-6 rounded-xl shadow-lg text-center",
                                children: [v.jsx("div", {
                                    className: "w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4",
                                    children: v.jsx(pl, {
                                        className: "h-12 w-12 text-primary"
                                    })
                                }), v.jsx("h4", {
                                    className: "text-xl font-bold mb-2",
                                    children: "Swoyam Pattanaik"
                                }), v.jsx("p", {
                                    className: "text-gray-600",
                                    children: "Co-founder & COO"
                                })]
                            }), v.jsxs(be.div, {
                                whileHover: {
                                    y: -10
                                },
                                className: "bg-white p-6 rounded-xl shadow-lg text-center",
                                children: [v.jsx("div", {
                                    className: "w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4",
                                    children: v.jsx(pl, {
                                        className: "h-12 w-12 text-primary"
                                    })
                                }), v.jsx("h4", {
                                    className: "text-xl font-bold mb-2",
                                    children: "Saswat Kumar Nayak"
                                }), v.jsx("p", {
                                    className: "text-gray-600",
                                    children: "Co-founder & CTO"
                                })]
                            })]
                        })]
                    }), v.jsxs("div", {
                        className: "mt-12 text-center",
                        children: [v.jsx("img", {
                            alt: "Team working on bottle designs",
                            className: "rounded-xl shadow-2xl mb-8 mx-auto",
                            src: "https://images.unsplash.com/photo-1695561069981-2f7d29027785"
                        }), v.jsx("p", {
                            className: "text-gray-600",
                            children: "With years of experience in marketing and branding, our team understands the power of making every touchpoint count. Our water bottles aren't just containers – they're marketing tools that keep your brand flowing."
                        })]
                    })]
                })
            })
        }), v.jsx("section", {
            id: "services",
            className: "py-20",
            children: v.jsxs("div", {
                className: "container mx-auto px-4",
                children: [v.jsx("h2", {
                    className: "text-4xl font-bold text-center mb-12",
                    children: "Our Services"
                }), v.jsxs("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: [v.jsxs(be.div, {
                        whileHover: {
                            y: -10
                        },
                        className: "p-6 rounded-xl border bg-white shadow-lg",
                        children: [v.jsx(fE, {
                            className: "h-12 w-12 text-secondary mb-4"
                        }), v.jsx("h3", {
                            className: "text-xl font-bold mb-2",
                            children: "Custom Branding"
                        }), v.jsx("p", {
                            className: "text-gray-600",
                            children: "Premium water bottles with your brand's unique identity."
                        })]
                    }), v.jsxs(be.div, {
                        whileHover: {
                            y: -10
                        },
                        className: "p-6 rounded-xl border bg-white shadow-lg",
                        children: [v.jsx(dE, {
                            className: "h-12 w-12 text-secondary mb-4"
                        }), v.jsx("h3", {
                            className: "text-xl font-bold mb-2",
                            children: "Corporate Solutions"
                        }), v.jsx("p", {
                            className: "text-gray-600",
                            children: "Bulk orders for hotels, restaurants, and businesses."
                        })]
                    }), v.jsxs(be.div, {
                        whileHover: {
                            y: -10
                        },
                        className: "p-6 rounded-xl border bg-white shadow-lg",
                        children: [v.jsx(mE, {
                            className: "h-12 w-12 text-secondary mb-4"
                        }), v.jsx("h3", {
                            className: "text-xl font-bold mb-2",
                            children: "Event Distribution"
                        }), v.jsx("p", {
                            className: "text-gray-600",
                            children: "Sponsored water bottles for events and gatherings."
                        })]
                    })]
                })]
            })
        }), v.jsx("section", {
            id: "contact",
            className: "py-20 bg-gray-50",
            children: v.jsx("div", {
                className: "container mx-auto px-4",
                children: v.jsxs("div", {
                    className: "max-w-2xl mx-auto text-center",
                    children: [v.jsx("h2", {
                        className: "text-4xl font-bold mb-8",
                        children: "Get In Touch"
                    }), v.jsx("p", {
                        className: "text-gray-600 mb-8",
                        children: "Ready to elevate your brand with custom water bottles? Contact us today!"
                    }), v.jsxs("div", {
                        className: "flex flex-col gap-4",
                        children: [v.jsx("input", {
                            type: "email",
                            placeholder: "Enter your email",
                            className: "px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                        }), v.jsx("textarea", {
                            placeholder: "Your message",
                            rows: "4",
                            className: "px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                        }), v.jsxs(Ze, {
                            size: "lg",
                            className: "w-full",
                            onClick: n,
                            children: ["Send Message ", v.jsx(hE, {
                                className: "ml-2 h-5 w-5"
                            })]
                        })]
                    })]
                })
            })
        }), v.jsx("footer", {
            className: "bg-primary text-white py-12",
            children: v.jsxs("div", {
                className: "container mx-auto px-4",
                children: [v.jsxs("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: [v.jsxs("div", {
                        children: [v.jsx("h3", {
                            className: "text-xl font-bold mb-4",
                            children: "Bottlr Studios"
                        }), v.jsx("p", {
                            className: "text-gray-300",
                            children: "A branch of VibeKraft Marketing Pvt Ltd"
                        })]
                    }), v.jsxs("div", {
                        children: [v.jsx("h3", {
                            className: "text-xl font-bold mb-4",
                            children: "Quick Links"
                        }), v.jsxs("ul", {
                            className: "space-y-2",
                            children: [v.jsx("li", {
                                children: v.jsx("a", {
                                    href: "#services",
                                    className: "text-gray-300 hover:text-white",
                                    children: "Services"
                                })
                            }), v.jsx("li", {
                                children: v.jsx("button", {
                                    onClick: () => r("about"),
                                    className: "text-gray-300 hover:text-white",
                                    children: "About"
                                })
                            }), v.jsx("li", {
                                children: v.jsx("a", {
                                    href: "#contact",
                                    className: "text-gray-300 hover:text-white",
                                    children: "Contact"
                                })
                            })]
                        })]
                    }), v.jsxs("div", {
                        children: [v.jsx("h3", {
                            className: "text-xl font-bold mb-4",
                            children: "Contact"
                        }), v.jsxs("p", {
                            className: "text-gray-300",
                            children: ["Email: info@bottlrstudios.com", v.jsx("br", {}), "Phone: +1 (555) 123-4567"]
                        })]
                    })]
                }), v.jsx("div", {
                    className: "border-t border-white/10 mt-8 pt-8 text-center",
                    children: v.jsxs("p", {
                        className: "text-gray-300",
                        children: ["© ", new Date().getFullYear(), " Bottlr Studios. All rights reserved."]
                    })
                })]
            })
        })]
    });
    return v.jsxs(kx, {
        children: [v.jsx(_r, {
            path: "/",
            element: v.jsx(o, {})
        }), v.jsx(_r, {
            path: "/get-started",
            element: v.jsx(EE, {})
        }), v.jsx(_r, {
            path: "/business-inquiry",
            element: v.jsx(TE, {})
        }), v.jsx(_r, {
            path: "/event-inquiry",
            element: v.jsx(kE, {})
        })]
    })
}
ml.createRoot(document.getElementById("root")).render(v.jsx(he.StrictMode, {
    children: v.jsx(Rx, {
        children: v.jsx(NE, {})
    })
}));
