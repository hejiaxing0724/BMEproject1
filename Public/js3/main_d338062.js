var require, define;
!
function(r) {
    function e(r, e) {
        var u = n[r] || {},
            o = u.pkg ? i[u.pkg].url : u.url || r,
            p = a[r] || (a[r] = []);
        if (p.push(e), !(o in f)) {
            f[o] = !0;
            var s = document.createElement("script");
            s.type = "text/javascript", s.src = o, t.appendChild(s)
        }
    }
    var n, i, t = document.getElementsByTagName("head")[0],
        a = {},
        u = {},
        o = {},
        f = {};
    define = function(r, e) {
        u[r] = e;
        var n = a[r];
        if (n) {
            for (var i = n.length - 1; i >= 0; --i) n[i]();
            delete a[r]
        }
    }, require = function(r) {
        r = require.alias(r);
        var e = o[r];
        if (e) return e.exports;
        var n = u[r];
        if (!n) throw Error("Cannot find module `" + r + "`");
        e = o[r] = {
            exports: {}
        };
        var i = "function" == typeof n ? n.apply(e, [require, e.exports, e]) : n;
        return i && (e.exports = i), e.exports
    }, require.async = function(i, t) {
        function a(r) {
            for (var i = r.length - 1; i >= 0; --i) {
                var t = r[i];
                if (!(t in u || t in p)) {
                    p[t] = !0, s++, e(t, o);
                    var f = n[t];
                    f && "deps" in f && a(f.deps)
                }
            }
        }
        function o() {
            if (0 == s--) {
                var e, n = [];
                for (e = i.length - 1; e >= 0; --e) n[e] = require(i[e]);
                t && t.apply(r, n)
            }
        }
        "string" == typeof i && (i = [i]);
        for (var f = i.length - 1; f >= 0; --f) i[f] = require.alias(i[f]);
        var p = {},
            s = 0;
        a(i), o()
    }, require.resourceMap = function(r) {
        n = r.res || {}, i = r.pkg || {}
    }, require.alias = function(r) {
        return r
    }, define.amd = {
        jQuery: !0,
        version: "1.0.0"
    }
}(this);;
!
function(e, t) {
    function n(e) {
        var t = e.length,
            n = ut.type(e);
        return ut.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function r(e) {
        var t = Nt[e] = {};
        return ut.each(e.match(ct) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    function i(e, n, r, i) {
        if (ut.acceptData(e)) {
            var o, a, s = ut.expando,
                u = "string" == typeof n,
                l = e.nodeType,
                c = l ? ut.cache : e,
                f = l ? e[s] : e[s] && s;
            if (f && c[f] && (i || c[f].data) || !u || r !== t) return f || (l ? e[s] = f = Z.pop() || ut.guid++ : f = s), c[f] || (c[f] = {}, l || (c[f].toJSON = ut.noop)), ("object" == typeof n || "function" == typeof n) && (i ? c[f] = ut.extend(c[f], n) : c[f].data = ut.extend(c[f].data, n)), o = c[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[ut.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[ut.camelCase(n)])) : a = o, a
        }
    }
    function o(e, t, n) {
        if (ut.acceptData(e)) {
            var r, i, o, a = e.nodeType,
                u = a ? ut.cache : e,
                l = a ? e[ut.expando] : ut.expando;
            if (u[l]) {
                if (t && (o = n ? u[l] : u[l].data)) {
                    ut.isArray(t) ? t = t.concat(ut.map(t, ut.camelCase)) : t in o ? t = [t] : (t = ut.camelCase(t), t = t in o ? [t] : t.split(" "));
                    for (r = 0, i = t.length; i > r; r++) delete o[t[r]];
                    if (!(n ? s : ut.isEmptyObject)(o)) return
                }(n || (delete u[l].data, s(u[l]))) && (a ? ut.cleanData([e], !0) : ut.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null)
            }
        }
    }
    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(kt, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : Ct.test(r) ? ut.parseJSON(r) : r
                } catch (o) {}
                ut.data(e, n, r)
            } else r = t
        }
        return r
    }
    function s(e) {
        var t;
        for (t in e) if (("data" !== t || !ut.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    function u() {
        return !0
    }
    function l() {
        return !1
    }
    function c(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function f(e, t, n) {
        if (t = t || 0, ut.isFunction(t)) return ut.grep(e, function(e, r) {
            var i = !! t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return ut.grep(e, function(e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = ut.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if (It.test(t)) return ut.filter(t, r, !n);
            t = ut.filter(t, r)
        }
        return ut.grep(e, function(e) {
            return ut.inArray(e, t) >= 0 === n
        })
    }
    function p(e) {
        var t = Ut.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }
    function d(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function h(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }
    function g(e) {
        var t = on.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ut._data(n, "globalEval", !t || ut._data(t[r], "globalEval"))
    }
    function y(e, t) {
        if (1 === t.nodeType && ut.hasData(e)) {
            var n, r, i, o = ut._data(e),
                a = ut._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) for (r = 0, i = s[n].length; i > r; r++) ut.event.add(t, n, s[n][r])
            }
            a.data && (a.data = ut.extend({}, a.data))
        }
    }
    function v(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ut.support.noCloneEvent && t[ut.expando]) {
                i = ut._data(t);
                for (r in i.events) ut.removeEvent(t, r, i.handle);
                t.removeAttribute(ut.expando)
            }
            "script" === n && t.text !== e.text ? (h(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ut.support.html5Clone && e.innerHTML && !ut.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function b(e, n) {
        var r, i, o = 0,
            a = typeof e.getElementsByTagName !== V ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== V ? e.querySelectorAll(n || "*") : t;
        if (!a) for (a = [], r = e.childNodes || e; null != (i = r[o]); o++)!n || ut.nodeName(i, n) ? a.push(i) : ut.merge(a, b(i, n));
        return n === t || n && ut.nodeName(e, n) ? ut.merge([e], a) : a
    }
    function x(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked)
    }
    function w(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = kn.length; i--;) if (t = kn[i] + n, t in e) return t;
        return r
    }
    function T(e, t) {
        return e = t || e, "none" === ut.css(e, "display") || !ut.contains(e.ownerDocument, e)
    }
    function N(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ut._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && T(r) && (o[a] = ut._data(r, "olddisplay", S(r.nodeName)))) : o[a] || (i = T(r), (n && "none" !== n || !i) && ut._data(r, "olddisplay", i ? n : ut.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    function C(e, t, n) {
        var r = vn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += ut.css(e, n + Cn[o], !0, i)), r ? ("content" === n && (a -= ut.css(e, "padding" + Cn[o], !0, i)), "margin" !== n && (a -= ut.css(e, "border" + Cn[o] + "Width", !0, i))) : (a += ut.css(e, "padding" + Cn[o], !0, i), "padding" !== n && (a += ut.css(e, "border" + Cn[o] + "Width", !0, i)));
        return a
    }
    function E(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = fn(e),
            a = ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = pn(e, t, o), (0 > i || null == i) && (i = e.style[t]), bn.test(i)) return i;
            r = a && (ut.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }
    function S(e) {
        var t = Y,
            n = wn[e];
        return n || (n = A(e, t), "none" !== n && n || (cn = (cn || ut("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = A(e, t), cn.detach()), wn[e] = n), n
    }
    function A(e, t) {
        var n = ut(t.createElement(e)).appendTo(t.body),
            r = ut.css(n[0], "display");
        return n.remove(), r
    }
    function j(e, t, n, r) {
        var i;
        if (ut.isArray(t)) ut.each(t, function(t, i) {
            n || Sn.test(e) ? r(e, i) : j(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== ut.type(t)) r(e, t);
        else for (i in t) j(e + "[" + i + "]", t[i], n, r)
    }
    function D(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(ct) || [];
            if (ut.isFunction(n)) for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function L(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, ut.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            a = e === zn;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function H(e, n) {
        var r, i, o = ut.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && ut.extend(!0, e, r), e
    }
    function q(e, n, r) {
        var i, o, a, s, u = e.contents,
            l = e.dataTypes,
            c = e.responseFields;
        for (s in c) s in r && (n[c[s]] = r[s]);
        for (;
        "*" === l[0];) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o) for (s in u) if (u[s] && u[s].test(o)) {
            l.unshift(s);
            break
        }
        if (l[0] in r) a = l[0];
        else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : void 0
    }
    function M(e, t) {
        var n, r, i, o, a = {},
            s = 0,
            u = e.dataTypes.slice(),
            l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]) for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
        for (; r = u[++s];) if ("*" !== r) {
            if ("*" !== l && l !== r) {
                if (i = a[l + " " + r] || a["* " + r], !i) for (n in a) if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                    i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
                    break
                }
                if (i !== !0) if (i && e["throws"]) t = i(t);
                else try {
                    t = i(t)
                } catch (c) {
                    return {
                        state: "parsererror",
                        error: i ? c : "No conversion from " + l + " to " + r
                    }
                }
            }
            l = r
        }
        return {
            state: "success",
            data: t
        }
    }
    function _() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function F() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function O() {
        return setTimeout(function() {
            Zn = t
        }), Zn = ut.now()
    }
    function B(e, t) {
        ut.each(t, function(t, n) {
            for (var r = (or[t] || []).concat(or["*"]), i = 0, o = r.length; o > i; i++) if (r[i].call(e, t, n)) return
        })
    }
    function P(e, t, n) {
        var r, i, o = 0,
            a = ir.length,
            s = ut.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = Zn || O(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: ut.extend({}, t),
                opts: ut.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Zn || O(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = ut.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (R(c, l.opts.specialEasing); a > o; o++) if (r = ir[o].call(l, e, c, l.opts)) return r;
        return B(l, c), ut.isFunction(l.opts.start) && l.opts.start.call(e, l), ut.fx.timer(ut.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function R(e, t) {
        var n, r, i, o, a;
        for (i in e) if (r = ut.camelCase(i), o = t[r], n = e[i], ut.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = ut.cssHooks[r], a && "expand" in a) {
            n = a.expand(n), delete e[r];
            for (i in n) i in e || (e[i] = n[i], t[i] = o)
        } else t[r] = o
    }
    function W(e, t, n) {
        var r, i, o, a, s, u, l, c, f, p = this,
            d = e.style,
            h = {},
            g = [],
            m = e.nodeType && T(e);
        n.queue || (c = ut._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, f = c.empty.fire, c.empty.fire = function() {
            c.unqueued || f()
        }), c.unqueued++, p.always(function() {
            p.always(function() {
                c.unqueued--, ut.queue(e, "fx").length || c.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ut.css(e, "display") && "none" === ut.css(e, "float") && (ut.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ut.support.shrinkWrapBlocks || p.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (i in t) if (a = t[i], tr.exec(a)) {
            if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue;
            g.push(i)
        }
        if (o = g.length) {
            s = ut._data(e, "fxshow") || ut._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? ut(e).show() : p.done(function() {
                ut(e).hide()
            }), p.done(function() {
                var t;
                ut._removeData(e, "fxshow");
                for (t in h) ut.style(e, t, h[t])
            });
            for (i = 0; o > i; i++) r = g[i], l = p.createTween(r, m ? s[r] : 0), h[r] = s[r] || ut.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function $(e, t, n, r, i) {
        return new $.prototype.init(e, t, n, r, i)
    }
    function I(e, t) {
        var n, r = {
            height: e
        },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Cn[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    function z(e) {
        return ut.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var X, U, V = typeof t,
        Y = e.document,
        J = e.location,
        G = e.jQuery,
        Q = e.$,
        K = {},
        Z = [],
        et = "1.9.1",
        tt = Z.concat,
        nt = Z.push,
        rt = Z.slice,
        it = Z.indexOf,
        ot = K.toString,
        at = K.hasOwnProperty,
        st = et.trim,
        ut = function(e, t) {
            return new ut.fn.init(e, t, U)
        },
        lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ct = /\S+/g,
        ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        pt = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ht = /^[\],:{}\s]*$/,
        gt = /(?:^|:|,)(?:\s*\[)+/g,
        mt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        yt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        vt = /^-ms-/,
        bt = /-([\da-z])/gi,
        xt = function(e, t) {
            return t.toUpperCase()
        },
        wt = function(e) {
            (Y.addEventListener || "load" === e.type || "complete" === Y.readyState) && (Tt(), ut.ready())
        },
        Tt = function() {
            Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", wt, !1), e.removeEventListener("load", wt, !1)) : (Y.detachEvent("onreadystatechange", wt), e.detachEvent("onload", wt))
        };
    ut.fn = ut.prototype = {
        jquery: et,
        constructor: ut,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : pt.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof ut ? n[0] : n, ut.merge(this, ut.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : Y, !0)), dt.test(i[1]) && ut.isPlainObject(n)) for (i in n) ut.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = Y.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = Y, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ut.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ut.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return rt.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = ut.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return ut.each(this, e, t)
        },
        ready: function(e) {
            return ut.ready.promise().done(e), this
        },
        slice: function() {
            return this.pushStack(rt.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(ut.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: nt,
        sort: [].sort,
        splice: [].splice
    }, ut.fn.init.prototype = ut.fn, ut.extend = ut.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
            u = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || ut.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++) if (null != (o = arguments[u])) for (i in o) e = s[i], r = o[i], s !== r && (c && r && (ut.isPlainObject(r) || (n = ut.isArray(r))) ? (n ? (n = !1, a = e && ut.isArray(e) ? e : []) : a = e && ut.isPlainObject(e) ? e : {}, s[i] = ut.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, ut.extend({
        noConflict: function(t) {
            return e.$ === ut && (e.$ = Q), t && e.jQuery === ut && (e.jQuery = G), ut
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ut.readyWait++ : ut.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--ut.readyWait : !ut.isReady) {
                if (!Y.body) return setTimeout(ut.ready);
                ut.isReady = !0, e !== !0 && --ut.readyWait > 0 || (X.resolveWith(Y, [ut]), ut.fn.trigger && ut(Y).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === ut.type(e)
        },
        isArray: Array.isArray ||
        function(e) {
            return "array" === ut.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? K[ot.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            if (!e || "object" !== ut.type(e) || e.nodeType || ut.isWindow(e)) return !1;
            try {
                if (e.constructor && !at.call(e, "constructor") && !at.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || at.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || Y;
            var r = dt.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = ut.buildFragment([e], t, i), i && ut(i).remove(), ut.merge([], r.childNodes))
        },
        parseJSON: function(t) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = ut.trim(t), t && ht.test(t.replace(mt, "@").replace(yt, "]").replace(gt, ""))) ? new Function("return " + t)() : void ut.error("Invalid JSON: " + t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ut.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && ut.trim(t) && (e.execScript ||
            function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(vt, "ms-").replace(bt, xt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s) for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else for (o in e) if (i = t.apply(e[o], r), i === !1) break
            } else if (s) for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
            return e
        },
        trim: st && !st.call("﻿ ") ?
        function(e) {
            return null == e ? "" : st.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(ft, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ut.merge(r, "string" == typeof e ? [e] : e) : nt.call(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (it) return it.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];
            else for (; n[o] !== t;) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !! n; a > o; o++) r = !! t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e),
                u = [];
            if (s) for (; a > o; o++) i = t(e[o], o, r), null != i && (u[u.length] = i);
            else for (o in e) i = t(e[o], o, r), null != i && (u[u.length] = i);
            return tt.apply([], u)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), ut.isFunction(e) ? (r = rt.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(rt.call(arguments)))
            }, i.guid = e.guid = e.guid || ut.guid++, i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var u = 0,
                l = e.length,
                c = null == r;
            if ("object" === ut.type(r)) {
                o = !0;
                for (u in r) ut.access(e, n, u, r[u], !0, a, s)
            } else if (i !== t && (o = !0, ut.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                return c.call(ut(e), n)
            })), n)) for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
            return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        }
    }), ut.ready.promise = function(t) {
        if (!X) if (X = ut.Deferred(), "complete" === Y.readyState) setTimeout(ut.ready);
        else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", wt, !1), e.addEventListener("load", wt, !1);
        else {
            Y.attachEvent("onreadystatechange", wt), e.attachEvent("onload", wt);
            var n = !1;
            try {
                n = null == e.frameElement && Y.documentElement
            } catch (r) {}
            n && n.doScroll && !
            function i() {
                if (!ut.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    Tt(), ut.ready()
                }
            }()
        }
        return X.promise(t)
    }, ut.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        K["[object " + t + "]"] = t.toLowerCase()
    }), U = ut(Y);
    var Nt = {};
    ut.Callbacks = function(e) {
        e = "string" == typeof e ? Nt[e] || r(e) : ut.extend({}, e);
        var n, i, o, a, s, u, l = [],
            c = !e.once && [],
            f = function(t) {
                for (i = e.memory && t, o = !0, s = u || 0, u = 0, a = l.length, n = !0; l && a > s; s++) if (l[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    i = !1;
                    break
                }
                n = !1, l && (c ? c.length && f(c.shift()) : i ? l = [] : p.disable())
            },
            p = {
                add: function() {
                    if (l) {
                        var t = l.length;
                        !
                        function r(t) {
                            ut.each(t, function(t, n) {
                                var i = ut.type(n);
                                "function" === i ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), n ? a = l.length : i && (u = t, f(i))
                    }
                    return this
                },
                remove: function() {
                    return l && ut.each(arguments, function(e, t) {
                        for (var r;
                        (r = ut.inArray(t, l, r)) > -1;) l.splice(r, 1), n && (a >= r && a--, s >= r && s--)
                    }), this
                },
                has: function(e) {
                    return e ? ut.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], this
                },
                disable: function() {
                    return l = c = i = t, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = t, i || p.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !l || o && !c || (n ? c.push(t) : f(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return p
    }, ut.extend({
        Deferred: function(e) {
            var t = [
                ["resolve", "done", ut.Callbacks("once memory"), "resolved"],
                ["reject", "fail", ut.Callbacks("once memory"), "rejected"],
                ["notify", "progress", ut.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ut.Deferred(function(n) {
                            ut.each(t, function(t, o) {
                                var a = o[0],
                                    s = ut.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && ut.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ut.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, ut.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = rt.call(arguments),
                a = o.length,
                s = 1 !== a || e && ut.isFunction(e.promise) ? a : 0,
                u = 1 === s ? e : ut.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? rt.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && ut.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    }), ut.support = function() {
        var t, n, r, i, o, a, s, u, l, c, f = Y.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*"), r = f.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        o = Y.createElement("select"), s = o.appendChild(Y.createElement("option")), i = f.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute: "t" !== f.className,
            leadingWhitespace: 3 === f.firstChild.nodeType,
            tbody: !f.getElementsByTagName("tbody").length,
            htmlSerialize: !! f.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !! r.style.cssFloat,
            checkOn: !! i.value,
            optSelected: s.selected,
            enctype: !! Y.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === Y.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete f.test
        } catch (p) {
            t.deleteExpando = !1
        }
        i = Y.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = Y.createDocumentFragment(), a.appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, f.attachEvent && (f.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), f.cloneNode(!0).click());
        for (c in {
            submit: !0,
            change: !0,
            focusin: !0
        }) f.setAttribute(u = "on" + c, "t"), t[c + "Bubbles"] = u in e || f.attributes[u].expando === !1;
        return f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === f.style.backgroundClip, ut(function() {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = Y.getElementsByTagName("body")[0];
            a && (n = Y.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = f.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === f.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {
                width: "4px"
            }).width, r = f.appendChild(Y.createElement("div")), r.style.cssText = f.style.cssText = o, r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof f.style.zoom !== V && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = f = i = r = null)
        }), n = o = a = s = r = i = null, t
    }();
    var Ct = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        kt = /([A-Z])/g;
    ut.extend({
        cache: {},
        expando: "jQuery" + (et + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? ut.cache[e[ut.expando]] : e[ut.expando], !! e && !s(e)
        },
        data: function(e, t, n) {
            return i(e, t, n)
        },
        removeData: function(e, t) {
            return o(e, t)
        },
        _data: function(e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return o(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && ut.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), ut.fn.extend({
        data: function(e, n) {
            var r, i, o = this[0],
                s = 0,
                u = null;
            if (e === t) {
                if (this.length && (u = ut.data(o), 1 === o.nodeType && !ut._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; s < r.length; s++) i = r[s].name, i.indexOf("data-") || (i = ut.camelCase(i.slice(5)), a(o, i, u[i]));
                    ut._data(o, "parsedAttrs", !0)
                }
                return u
            }
            return "object" == typeof e ? this.each(function() {
                ut.data(this, e)
            }) : ut.access(this, function(n) {
                return n === t ? o ? a(o, e, ut.data(o, e)) : null : void this.each(function() {
                    ut.data(this, e, n)
                })
            }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ut.removeData(this, e)
            })
        }
    }), ut.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ut._data(e, t), n && (!r || ut.isArray(n) ? r = ut._data(e, t, ut.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ut.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ut._queueHooks(e, t),
                a = function() {
                    ut.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ut._data(e, n) || ut._data(e, n, {
                empty: ut.Callbacks("once memory").add(function() {
                    ut._removeData(e, t + "queue"), ut._removeData(e, n)
                })
            })
        }
    }), ut.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? ut.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = ut.queue(this, e, n);
                ut._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ut.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ut.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = ut.fx ? ut.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                o = ut.Deferred(),
                a = this,
                s = this.length,
                u = function() {
                    --i || o.resolveWith(a, [a])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = ut._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var Et, St, At = /[\t\r\n]/g,
        jt = /\r/g,
        Dt = /^(?:input|select|textarea|button|object)$/i,
        Lt = /^(?:a|area)$/i,
        Ht = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        qt = /^(?:checked|selected)$/i,
        Mt = ut.support.getSetAttribute,
        _t = ut.support.input;
    ut.fn.extend({
        attr: function(e, t) {
            return ut.access(this, ut.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ut.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return ut.access(this, ut.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = ut.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                u = "string" == typeof e && e;
            if (ut.isFunction(e)) return this.each(function(t) {
                ut(this).addClass(e.call(this, t, this.className))
            });
            if (u) for (t = (e || "").match(ct) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : " ")) {
                for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                n.className = ut.trim(r)
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (ut.isFunction(e)) return this.each(function(t) {
                ut(this).removeClass(e.call(this, t, this.className))
            });
            if (u) for (t = (e || "").match(ct) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : "")) {
                for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                n.className = e ? ut.trim(r) : ""
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return this.each(ut.isFunction(e) ?
            function(n) {
                ut(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n) for (var i, o = 0, a = ut(this), s = t, u = e.match(ct) || []; i = u[o++];) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i);
                else(n === V || "boolean" === n) && (this.className && ut._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ut._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(At, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = ut.isFunction(e), this.each(function(n) {
                    var o, a = ut(this);
                    1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ut.isArray(o) && (o = ut.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), r = ut.valHooks[this.type] || ut.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = ut.valHooks[o.type] || ut.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(jt, "") : null == n ? "" : n)
            }
        }
    }), ut.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++) if (n = r[u], !(!n.selected && u !== i || (ut.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ut.nodeName(n.parentNode, "optgroup"))) {
                        if (t = ut(n).val(), o) return t;
                        a.push(t)
                    }
                    return a
                },
                set: function(e, t) {
                    var n = ut.makeArray(t);
                    return ut(e).find("option").each(function() {
                        this.selected = ut.inArray(ut(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attr: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === V ? ut.prop(e, n, r) : (o = 1 !== s || !ut.isXMLDoc(e), o && (n = n.toLowerCase(), i = ut.attrHooks[n] || (Ht.test(n) ? St : Et)), r === t ? i && o && "get" in i && null !== (a = i.get(e, n)) ? a : (typeof e.getAttribute !== V && (a = e.getAttribute(n)), null == a ? t : a) : null !== r ? i && o && "set" in i && (a = i.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : void ut.removeAttr(e, n))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(ct);
            if (o && 1 === e.nodeType) for (; n = o[i++];) r = ut.propFix[n] || n, Ht.test(n) ? !Mt && qt.test(n) ? e[ut.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : ut.attr(e, n, ""), e.removeAttribute(Mt ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ut.support.radioValue && "radio" === t && ut.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !ut.isXMLDoc(e), a && (n = ut.propFix[n] || n, o = ut.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : Dt.test(e.nodeName) || Lt.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), St = {
        get: function(e, n) {
            var r = ut.prop(e, n),
                i = "boolean" == typeof r && e.getAttribute(n),
                o = "boolean" == typeof r ? _t && Mt ? null != i : qt.test(n) ? e[ut.camelCase("default-" + n)] : !! i : e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            return t === !1 ? ut.removeAttr(e, n) : _t && Mt || !qt.test(n) ? e.setAttribute(!Mt && ut.propFix[n] || n, n) : e[ut.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, _t && Mt || (ut.attrHooks.value = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return ut.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
        },
        set: function(e, t, n) {
            return ut.nodeName(e, "input") ? void(e.defaultValue = t) : Et && Et.set(e, t, n)
        }
    }), Mt || (Et = ut.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
        },
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, ut.attrHooks.contenteditable = {
        get: Et.get,
        set: function(e, t, n) {
            Et.set(e, "" === t ? !1 : t, n)
        }
    }, ut.each(["width", "height"], function(e, t) {
        ut.attrHooks[t] = ut.extend(ut.attrHooks[t], {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        })
    })), ut.support.hrefNormalized || (ut.each(["href", "src", "width", "height"], function(e, n) {
        ut.attrHooks[n] = ut.extend(ut.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t : r
            }
        })
    }), ut.each(["href", "src"], function(e, t) {
        ut.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    })), ut.support.style || (ut.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), ut.support.optSelected || (ut.propHooks.selected = ut.extend(ut.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), ut.support.enctype || (ut.propFix.enctype = "encoding"), ut.support.checkOn || ut.each(["radio", "checkbox"], function() {
        ut.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), ut.each(["radio", "checkbox"], function() {
        ut.valHooks[this] = ut.extend(ut.valHooks[this], {
            set: function(e, t) {
                return ut.isArray(t) ? e.checked = ut.inArray(ut(e).val(), t) >= 0 : void 0
            }
        })
    });
    var Ft = /^(?:input|select|textarea)$/i,
        Ot = /^key/,
        Bt = /^(?:mouse|contextmenu)|click/,
        Pt = /^(?:focusinfocus|focusoutblur)$/,
        Rt = /^([^.]*)(?:\.(.+)|)$/;
    ut.event = {
        global: {},
        add: function(e, n, r, i, o) {
            var a, s, u, l, c, f, p, d, h, g, m, y = ut._data(e);
            if (y) {
                for (r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = ut.guid++), (s = y.events) || (s = y.events = {}), (f = y.handle) || (f = y.handle = function(e) {
                    return typeof ut === V || e && ut.event.triggered === e.type ? t : ut.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(ct) || [""], u = n.length; u--;) a = Rt.exec(n[u]) || [], h = m = a[1], g = (a[2] || "").split(".").sort(), c = ut.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = ut.event.special[h] || {}, p = ut.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && ut.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, l), (d = s[h]) || (d = s[h] = [], d.delegateCount = 0, c.setup && c.setup.call(e, i, g, f) !== !1 || (e.addEventListener ? e.addEventListener(h, f, !1) : e.attachEvent && e.attachEvent("on" + h, f))), c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), ut.event.global[h] = !0;
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = ut.hasData(e) && ut._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(ct) || [""], l = t.length; l--;) if (s = Rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    for (f = ut.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = c[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--;) a = p[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
                    u && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ut.removeEvent(e, d, m.handle), delete c[d])
                } else for (d in c) ut.event.remove(e, d + t[l], n, r, !0);
                ut.isEmptyObject(c) && (delete m.handle, ut._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var a, s, u, l, c, f, p, d = [i || Y],
                h = at.call(n, "type") ? n.type : n,
                g = at.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || Y, 3 !== i.nodeType && 8 !== i.nodeType && !Pt.test(h + ut.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), s = h.indexOf(":") < 0 && "on" + h, n = n[ut.expando] ? n : new ut.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ut.makeArray(r, [n]), c = ut.event.special[h] || {}, o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                if (!o && !c.noBubble && !ut.isWindow(i)) {
                    for (l = c.delegateType || h, Pt.test(l + h) || (u = u.parentNode); u; u = u.parentNode) d.push(u), f = u;
                    f === (i.ownerDocument || Y) && d.push(f.defaultView || f.parentWindow || e)
                }
                for (p = 0;
                (u = d[p++]) && !n.isPropagationStopped();) n.type = p > 1 ? l : c.bindType || h, a = (ut._data(u, "events") || {})[n.type] && ut._data(u, "handle"), a && a.apply(u, r), a = s && u[s], a && ut.acceptData(u) && a.apply && a.apply(u, r) === !1 && n.preventDefault();
                if (n.type = h, !(o || n.isDefaultPrevented() || c._default && c._default.apply(i.ownerDocument, r) !== !1 || "click" === h && ut.nodeName(i, "a") || !ut.acceptData(i) || !s || !i[h] || ut.isWindow(i))) {
                    f = i[s], f && (i[s] = null), ut.event.triggered = h;
                    try {
                        i[h]()
                    } catch (m) {}
                    ut.event.triggered = t, f && (i[s] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = ut.event.fix(e);
            var n, r, i, o, a, s = [],
                u = rt.call(arguments),
                l = (ut._data(this, "events") || {})[e.type] || [],
                c = ut.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = ut.event.handlers.call(this, e, l), n = 0;
                (o = s[n++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, a = 0;
                (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((ut.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
                u = n.delegateCount,
                l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? ut(r, this).index(l) >= 0 : ut.find(r, this, null, [l]).length), o[r] && o.push(i);
                o.length && s.push({
                    elem: l,
                    handlers: o
                })
            }
            return u < n.length && s.push({
                elem: this,
                handlers: n.slice(u)
            }), s
        },
        fix: function(e) {
            if (e[ut.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Bt.test(i) ? this.mouseHooks : Ot.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ut.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, a = n.button,
                    s = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || Y, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function() {
                    return ut.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }
            },
            focus: {
                trigger: function() {
                    if (this !== Y.activeElement && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === Y.activeElement && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = ut.extend(new ut.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ut.event.trigger(i, null, t) : ut.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ut.removeEvent = Y.removeEventListener ?
    function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === V && (e[r] = null), e.detachEvent(r, n))
    }, ut.Event = function(e, t) {
        return this instanceof ut.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u : l) : this.type = e, t && ut.extend(this, t), this.timeStamp = e && e.timeStamp || ut.now(), void(this[ut.expando] = !0)) : new ut.Event(e, t)
    }, ut.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = u, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = u, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = u, this.stopPropagation()
        }
    }, ut.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        ut.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !ut.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ut.support.submitBubbles || (ut.event.special.submit = {
        setup: function() {
            return ut.nodeName(this, "form") ? !1 : void ut.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    r = ut.nodeName(n, "input") || ut.nodeName(n, "button") ? n.form : t;
                r && !ut._data(r, "submitBubbles") && (ut.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), ut._data(r, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ut.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return ut.nodeName(this, "form") ? !1 : void ut.event.remove(this, "._submit")
        }
    }), ut.support.changeBubbles || (ut.event.special.change = {
        setup: function() {
            return Ft.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ut.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ut.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ut.event.simulate("change", this, e, !0)
            })), !1) : void ut.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ft.test(t.nodeName) && !ut._data(t, "changeBubbles") && (ut.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ut.event.simulate("change", this.parentNode, e, !0)
                }), ut._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return ut.event.remove(this, "._change"), !Ft.test(this.nodeName)
        }
    }), ut.support.focusinBubbles || ut.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0,
            r = function(e) {
                ut.event.simulate(t, e.target, ut.event.fix(e), !0)
            };
        ut.event.special[t] = {
            setup: function() {
                0 === n++ && Y.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && Y.removeEventListener(e, r, !0)
            }
        }
    }), ut.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = l;
            else if (!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return ut().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = ut.guid++)), this.each(function() {
                ut.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ut(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = l), this.each(function() {
                ut.event.remove(this, e, r, n)
            })
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function(e, t) {
            return this.each(function() {
                ut.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? ut.event.trigger(e, t, n, !0) : void 0
        }
    }), function(e, t) {
        function n(e) {
            return ht.test(e + "")
        }
        function r() {
            var e, t = [];
            return e = function(n, r) {
                return t.push(n += " ") > C.cacheLength && delete e[t.shift()], e[n] = r
            }
        }
        function i(e) {
            return e[P] = !0, e
        }
        function o(e) {
            var t = L.createElement("div");
            try {
                return e(t)
            } catch (n) {
                return !1
            } finally {
                t = null
            }
        }
        function a(e, t, n, r) {
            var i, o, a, s, u, l, c, d, h, g;
            if ((t ? t.ownerDocument || t : R) !== L && D(t), t = t || L, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (!q && !r) {
                if (i = gt.exec(e)) if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode) return n;
                        if (o.id === a) return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && O(t, o) && o.id === a) return n.push(o), n
                } else {
                    if (i[2]) return Q.apply(n, K.call(t.getElementsByTagName(e), 0)), n;
                    if ((a = i[3]) && W.getByClassName && t.getElementsByClassName) return Q.apply(n, K.call(t.getElementsByClassName(a), 0)), n
                }
                if (W.qsa && !M.test(e)) {
                    if (c = !0, d = P, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = f(e), (c = t.getAttribute("id")) ? d = c.replace(vt, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + p(l[u]);
                        h = dt.test(e) && t.parentNode || t, g = l.join(",")
                    }
                    if (g) try {
                        return Q.apply(n, K.call(h.querySelectorAll(g), 0)), n
                    } catch (m) {} finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return x(e.replace(at, "$1"), t, n, r)
        }
        function s(e, t) {
            var n = t && e,
                r = n && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function c(e) {
            return i(function(t) {
                return t = +t, i(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function f(e, t) {
            var n, r, i, o, s, u, l, c = X[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, u = [], l = C.preFilter; s;) {
                (!n || (r = st.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(i = [])), n = !1, (r = lt.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(at, " ")
                }), s = s.slice(n.length));
                for (o in C.filter)!(r = pt[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? a.error(e) : X(e, u).slice(0)
        }
        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }
        function d(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = I++;
            return t.first ?
            function(t, n, o) {
                for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, a) {
                var s, u, l, c = $ + " " + o;
                if (a) {
                    for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else for (; t = t[r];) if (1 === t.nodeType || i) if (l = t[P] || (t[P] = {}), (u = l[r]) && u[0] === c) {
                    if ((s = u[1]) === !0 || s === N) return s === !0
                } else if (u = l[r] = [c], u[1] = e(t, n, a) || N, u[1] === !0) return !0
            }
        }
        function h(e) {
            return e.length > 1 ?
            function(t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }
        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }
        function m(e, t, n, r, o, a) {
            return r && !r[P] && (r = m(r)), o && !o[P] && (o = m(o, a)), i(function(i, a, s, u) {
                var l, c, f, p = [],
                    d = [],
                    h = a.length,
                    m = i || b(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? m : g(m, p, e, s, u),
                    v = n ? o || (i ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r) for (l = g(v, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = v.length; c--;)(f = v[c]) && l.push(y[c] = f);
                            o(null, v = [], l, u)
                        }
                        for (c = v.length; c--;)(f = v[c]) && (l = o ? Z.call(i, f) : p[c]) > -1 && (i[l] = !(a[l] = f))
                    }
                } else v = g(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, u) : Q.apply(a, v)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = d(function(e) {
                return e === t
            }, a, !0), l = d(function(e) {
                return Z.call(t, e) > -1
            }, a, !0), c = [function(e, n, r) {
                return !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
            }]; i > s; s++) if (n = C.relative[e[s].type]) c = [d(h(c), n)];
            else {
                if (n = C.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                    for (r = ++s; i > r && !C.relative[e[r].type]; r++);
                    return m(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1)).replace(at, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                }
                c.push(n)
            }
            return h(c)
        }
        function v(e, t) {
            var n = 0,
                r = t.length > 0,
                o = e.length > 0,
                s = function(i, s, u, l, c) {
                    var f, p, d, h = [],
                        m = 0,
                        y = "0",
                        v = i && [],
                        b = null != c,
                        x = j,
                        w = i || o && C.find.TAG("*", c && s.parentNode || s),
                        T = $ += null == x ? 1 : Math.random() || .1;
                    for (b && (j = s !== L && s, N = n); null != (f = w[y]); y++) {
                        if (o && f) {
                            for (p = 0; d = e[p++];) if (d(f, s, u)) {
                                l.push(f);
                                break
                            }
                            b && ($ = T, N = ++n)
                        }
                        r && ((f = !d && f) && m--, i && v.push(f))
                    }
                    if (m += y, r && y !== m) {
                        for (p = 0; d = t[p++];) d(v, h, s, u);
                        if (i) {
                            if (m > 0) for (; y--;) v[y] || h[y] || (h[y] = G.call(l));
                            h = g(h)
                        }
                        Q.apply(l, h), b && !i && h.length > 0 && m + t.length > 1 && a.uniqueSort(l)
                    }
                    return b && ($ = T, j = x), v
                };
            return r ? i(s) : s
        }
        function b(e, t, n) {
            for (var r = 0, i = t.length; i > r; r++) a(e, t[r], n);
            return n
        }
        function x(e, t, n, r) {
            var i, o, a, s, u, l = f(e);
            if (!r && 1 === l.length) {
                if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !q && C.relative[o[1].type]) {
                    if (t = C.find.ID(a.matches[0].replace(xt, wt), t)[0], !t) return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = pt.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !C.relative[s = a.type]);) if ((u = C.find[s]) && (r = u(a.matches[0].replace(xt, wt), dt.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(i, 1), e = r.length && p(o), !e) return Q.apply(n, K.call(r, 0)), n;
                    break
                }
            }
            return S(e, l)(r, t, q, n, dt.test(e)), n
        }
        function w() {}
        var T, N, C, k, E, S, A, j, D, L, H, q, M, _, F, O, B, P = "sizzle" + -new Date,
            R = e.document,
            W = {},
            $ = 0,
            I = 0,
            z = r(),
            X = r(),
            U = r(),
            V = typeof t,
            Y = 1 << 31,
            J = [],
            G = J.pop,
            Q = J.push,
            K = J.slice,
            Z = J.indexOf ||
        function(e) {
            for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
            return -1
        }, et = "[\\x20\\t\\r\\n\\f]", tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", nt = tt.replace("w", "w#"), rt = "([*^$|!~]?=)", it = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + rt + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]", ot = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + it.replace(3, 8) + ")*)|.*)\\)|)", at = new RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"), st = new RegExp("^" + et + "*," + et + "*"), lt = new RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"), ct = new RegExp(ot), ft = new RegExp("^" + nt + "$"), pt = {
            ID: new RegExp("^#(" + tt + ")"),
            CLASS: new RegExp("^\\.(" + tt + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"),
            TAG: new RegExp("^(" + tt.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + it),
            PSEUDO: new RegExp("^" + ot),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
            needsContext: new RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
        }, dt = /[\x20\t\r\n\f]*[+~]/, ht = /^[^{]+\{\s*\[native code/, gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, mt = /^(?:input|select|textarea|button)$/i, yt = /^h\d$/i, vt = /'|\\/g, bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, wt = function(e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        };
        try {
            K.call(R.documentElement.childNodes, 0)[0].nodeType
        } catch (Tt) {
            K = function(e) {
                for (var t, n = []; t = this[e++];) n.push(t);
                return n
            }
        }
        E = a.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, D = a.setDocument = function(e) {
            var r = e ? e.ownerDocument || e : R;
            return r !== L && 9 === r.nodeType && r.documentElement ? (L = r, H = r.documentElement, q = E(r), W.tagNameNoComments = o(function(e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), W.attributes = o(function(e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), W.getByClassName = o(function(e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }), W.getByName = o(function(e) {
                e.id = P + 0, e.innerHTML = "<a name='" + P + "'></a><div name='" + P + "'></div>", H.insertBefore(e, H.firstChild);
                var t = r.getElementsByName && r.getElementsByName(P).length === 2 + r.getElementsByName(P + 0).length;
                return W.getIdNotName = !r.getElementById(P), H.removeChild(e), t
            }), C.attrHandle = o(function(e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== V && "#" === e.firstChild.getAttribute("href")
            }) ? {} : {
                href: function(e) {
                    return e.getAttribute("href", 2)
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            }, W.getIdNotName ? (C.find.ID = function(e, t) {
                if (typeof t.getElementById !== V && !q) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, C.filter.ID = function(e) {
                var t = e.replace(xt, wt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (C.find.ID = function(e, n) {
                if (typeof n.getElementById !== V && !q) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== V && r.getAttributeNode("id").value === e ? [r] : t : []
                }
            }, C.filter.ID = function(e) {
                var t = e.replace(xt, wt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = W.tagNameNoComments ?
            function(e, t) {
                return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, C.find.NAME = W.getByName &&
            function(e, t) {
                return typeof t.getElementsByName !== V ? t.getElementsByName(name) : void 0
            }, C.find.CLASS = W.getByClassName &&
            function(e, t) {
                return typeof t.getElementsByClassName === V || q ? void 0 : t.getElementsByClassName(e)
            }, _ = [], M = [":focus"], (W.qsa = n(r.querySelectorAll)) && (o(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || M.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || M.push(":checked")
            }), o(function(e) {
                e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && M.push("[*^$]=" + et + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
            })), (W.matchesSelector = n(F = H.matchesSelector || H.mozMatchesSelector || H.webkitMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(e) {
                W.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), _.push("!=", ot)
            }), M = new RegExp(M.join("|")), _ = new RegExp(_.join("|")), O = n(H.contains) || H.compareDocumentPosition ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, B = H.compareDocumentPosition ?
            function(e, t) {
                var n;
                return e === t ? (A = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || O(R, e) ? -1 : t === r || O(R, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function(e, t) {
                var n, i = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    u = [e],
                    l = [t];
                if (e === t) return A = !0, 0;
                if (!o || !a) return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : 0;
                if (o === a) return s(e, t);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; u[i] === l[i];) i++;
                return i ? s(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
            }, A = !1, [0, 0].sort(B), W.detectDuplicates = A, L) : L
        }, a.matches = function(e, t) {
            return a(e, null, null, t)
        }, a.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== L && D(e), t = t.replace(bt, "='$1']"), !(!W.matchesSelector || q || _ && _.test(t) || M.test(t))) try {
                var n = F.call(e, t);
                if (n || W.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (r) {}
            return a(t, L, null, [e]).length > 0
        }, a.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && D(e), O(e, t)
        }, a.attr = function(e, t) {
            var n;
            return (e.ownerDocument || e) !== L && D(e), q || (t = t.toLowerCase()), (n = C.attrHandle[t]) ? n(e) : q || W.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
        }, a.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, a.uniqueSort = function(e) {
            var t, n = [],
                r = 1,
                i = 0;
            if (A = !W.detectDuplicates, e.sort(B), A) {
                for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return e
        }, k = a.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r]; r++) n += k(t);
            return n
        }, C = a.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pt,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xt, wt), e[3] = (e[4] || e[5] || "").replace(xt, wt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return pt.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ct.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    return "*" === e ?
                    function() {
                        return !0
                    } : (e = e.replace(xt, wt).toLowerCase(), function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && z(e, function(e) {
                        return t.test(e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = a.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ?
                    function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            v = !u && !s;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];) if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                for (c = m[P] || (m[P] = {}), l = c[e] || [], d = l[0] === $ && l[1], p = l[0] === $ && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();) if (1 === f.nodeType && ++p && f === t) {
                                    c[e] = [$, d, p];
                                    break
                                }
                            } else if (v && (l = (t[P] || (t[P] = {}))[e]) && l[0] === $) p = l[1];
                            else for (;
                            (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++p || (v && ((f[P] || (f[P] = {}))[e] = [$, p]), f !== t)););
                            return p -= i, p === r || p % r === 0 && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                    return r[P] ? r(t) : r.length > 1 ? (n = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                        for (var i, o = r(e, t), a = o.length; a--;) i = Z.call(e, o[a]), e[i] = !(n[i] = o[a])
                    }) : function(e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = S(e.replace(at, "$1"));
                    return r[P] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(t) {
                        return a(e, t).length > 0
                    }
                }),
                contains: i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return ft.test(e || "") || a.error("unsupported lang: " + e), e = e.replace(xt, wt).toLowerCase(), function(t) {
                        var n;
                        do
                        if (n = q ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !! e.checked || "option" === t && !! e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0
                },
                parent: function(e) {
                    return !C.pseudos.empty(e)
                },
                header: function(e) {
                    return yt.test(e.nodeName)
                },
                input: function(e) {
                    return mt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        };
        for (T in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) C.pseudos[T] = u(T);
        for (T in {
            submit: !0,
            reset: !0
        }) C.pseudos[T] = l(T);
        S = a.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = U[e + " "];
            if (!o) {
                for (t || (t = f(e)), n = t.length; n--;) o = y(t[n]), o[P] ? r.push(o) : i.push(o);
                o = U(e, v(i, r))
            }
            return o
        }, C.pseudos.nth = C.pseudos.eq, C.filters = w.prototype = C.pseudos, C.setFilters = new w, D(), a.attr = ut.attr, ut.find = a, ut.expr = a.selectors, ut.expr[":"] = ut.expr.pseudos, ut.unique = a.uniqueSort, ut.text = a.getText, ut.isXMLDoc = a.isXML, ut.contains = a.contains
    }(e);
    var Wt = /Until$/,
        $t = /^(?:parents|prev(?:Until|All))/,
        It = /^.[^:#\[\.,]*$/,
        zt = ut.expr.match.needsContext,
        Xt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ut.fn.extend({
        find: function(e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) return r = this, this.pushStack(ut(e).filter(function() {
                for (t = 0; i > t; t++) if (ut.contains(r[t], this)) return !0
            }));
            for (n = [], t = 0; i > t; t++) ut.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? ut.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
        },
        has: function(e) {
            var t, n = ut(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) if (ut.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(f(this, e, !1))
        },
        filter: function(e) {
            return this.pushStack(f(this, e, !0))
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? zt.test(e) ? ut(e, this.context).index(this[0]) >= 0 : ut.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = zt.test(e) || "string" != typeof e ? ut(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                if (a ? a.index(n) > -1 : ut.find.matchesSelector(n, e)) {
                    o.push(n);
                    break
                }
                n = n.parentNode
            }
            return this.pushStack(o.length > 1 ? ut.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ut.inArray(this[0], ut(e)) : ut.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? ut(e, t) : ut.makeArray(e && e.nodeType ? [e] : e),
                r = ut.merge(this.get(), n);
            return this.pushStack(ut.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ut.fn.andSelf = ut.fn.addBack, ut.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ut.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ut.dir(e, "parentNode", n)
        },
        next: function(e) {
            return c(e, "nextSibling")
        },
        prev: function(e) {
            return c(e, "previousSibling")
        },
        nextAll: function(e) {
            return ut.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ut.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ut.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ut.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ut.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ut.sibling(e.firstChild)
        },
        contents: function(e) {
            return ut.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ut.merge([], e.childNodes)
        }
    }, function(e, t) {
        ut.fn[e] = function(n, r) {
            var i = ut.map(this, t, n);
            return Wt.test(e) || (r = n), r && "string" == typeof r && (i = ut.filter(r, i)), i = this.length > 1 && !Xt[e] ? ut.unique(i) : i, this.length > 1 && $t.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), ut.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? ut.find.matchesSelector(t[0], e) ? [t[0]] : [] : ut.find.matches(e, t)
        },
        dir: function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ut(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Vt = / jQuery\d+="(?:null|\d+)"/g,
        Yt = new RegExp("<(?:" + Ut + ")[\\s/>]", "i"),
        Jt = /^\s+/,
        Gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Qt = /<([\w:]+)/,
        Kt = /<tbody/i,
        Zt = /<|&#?\w+;/,
        en = /<(?:script|style|link)/i,
        tn = /^(?:checkbox|radio)$/i,
        nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rn = /^$|\/(?:java|ecma)script/i,
        on = /^true\/(.*)/,
        an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        sn = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ut.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        un = p(Y),
        ln = un.appendChild(Y.createElement("div"));
    sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, ut.fn.extend({
        text: function(e) {
            return ut.access(this, function(e) {
                return e === t ? ut.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (ut.isFunction(e)) return this.each(function(t) {
                ut(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ut(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(ut.isFunction(e) ?
            function(t) {
                ut(this).wrapInner(e.call(this, t))
            } : function() {
                var t = ut(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ut.isFunction(e);
            return this.each(function(n) {
                ut(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = 0; null != (n = this[r]); r++)(!e || ut.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || ut.cleanData(b(n)), n.parentNode && (t && ut.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n)));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ut.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ut.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return ut.clone(this, e, t)
            })
        },
        html: function(e) {
            return ut.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Vt, "") : t;
                if (!("string" != typeof e || en.test(e) || !ut.support.htmlSerialize && Yt.test(e) || !ut.support.leadingWhitespace && Jt.test(e) || sn[(Qt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Gt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (ut.cleanData(b(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            var t = ut.isFunction(e);
            return t || "string" == typeof e || (e = ut(e).not(this).detach()), this.domManip([e], !0, function(e) {
                var t = this.nextSibling,
                    n = this.parentNode;
                n && (ut(this).remove(), n.insertBefore(e, t))
            })
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            e = tt.apply([], e);
            var i, o, a, s, u, l, c = 0,
                f = this.length,
                p = this,
                m = f - 1,
                y = e[0],
                v = ut.isFunction(y);
            if (v || !(1 >= f || "string" != typeof y || ut.support.checkClone) && nn.test(y)) return this.each(function(i) {
                var o = p.eq(i);
                v && (e[0] = y.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
            });
            if (f && (l = ut.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                for (n = n && ut.nodeName(i, "tr"), s = ut.map(b(l, "script"), h), a = s.length; f > c; c++) o = l, c !== m && (o = ut.clone(o, !0, !0), a && ut.merge(s, b(o, "script"))), r.call(n && ut.nodeName(this[c], "table") ? d(this[c], "tbody") : this[c], o, c);
                if (a) for (u = s[s.length - 1].ownerDocument, ut.map(s, g), c = 0; a > c; c++) o = s[c], rn.test(o.type || "") && !ut._data(o, "globalEval") && ut.contains(u, o) && (o.src ? ut.ajax({
                    url: o.src,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                }) : ut.globalEval((o.text || o.textContent || o.innerHTML || "").replace(an, "")));
                l = i = null
            }
            return this
        }
    }), ut.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ut.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = ut(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ut(o[r])[t](n), nt.apply(i, n.get());
            return this.pushStack(i)
        }
    }), ut.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = ut.contains(e.ownerDocument, e);
            if (ut.support.html5Clone || ut.isXMLDoc(e) || !Yt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ln.innerHTML = e.outerHTML, ln.removeChild(o = ln.firstChild)), !(ut.support.noCloneEvent && ut.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ut.isXMLDoc(e))) for (r = b(o), s = b(e), a = 0; null != (i = s[a]); ++a) r[a] && v(i, r[a]);
            if (t) if (n) for (s = s || b(e), r = r || b(o), a = 0; null != (i = s[a]); a++) y(i, r[a]);
            else y(e, o);
            return r = b(o, "script"), r.length > 0 && m(r, !u && b(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c, f = e.length, d = p(t), h = [], g = 0; f > g; g++) if (o = e[g], o || 0 === o) if ("object" === ut.type(o)) ut.merge(h, o.nodeType ? [o] : o);
            else if (Zt.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), u = (Qt.exec(o) || ["", ""])[1].toLowerCase(), c = sn[u] || sn._default, s.innerHTML = c[1] + o.replace(Gt, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!ut.support.leadingWhitespace && Jt.test(o) && h.push(t.createTextNode(Jt.exec(o)[0])), !ut.support.tbody) for (o = "table" !== u || Kt.test(o) ? "<table>" !== c[1] || Kt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) ut.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (ut.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = d.lastChild
            } else h.push(t.createTextNode(o));
            for (s && d.removeChild(s), ut.support.appendChecked || ut.grep(b(h, "input"), x), g = 0; o = h[g++];) if ((!r || -1 === ut.inArray(o, r)) && (a = ut.contains(o.ownerDocument, o), s = b(d.appendChild(o), "script"), a && m(s), n)) for (i = 0; o = s[i++];) rn.test(o.type || "") && n.push(o);
            return s = null, d
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = ut.expando, u = ut.cache, l = ut.support.deleteExpando, c = ut.event.special; null != (n = e[a]); a++) if ((t || ut.acceptData(n)) && (i = n[s], o = i && u[i])) {
                if (o.events) for (r in o.events) c[r] ? ut.event.remove(n, r) : ut.removeEvent(n, r, o.handle);
                u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== V ? n.removeAttribute(s) : n[s] = null, Z.push(i))
            }
        }
    });
    var cn, fn, pn, dn = /alpha\([^)]*\)/i,
        hn = /opacity\s*=\s*([^)]*)/,
        gn = /^(top|right|bottom|left)$/,
        mn = /^(none|table(?!-c[ea]).+)/,
        yn = /^margin/,
        vn = new RegExp("^(" + lt + ")(.*)$", "i"),
        bn = new RegExp("^(" + lt + ")(?!px)[a-z%]+$", "i"),
        xn = new RegExp("^([+-])=(" + lt + ")", "i"),
        wn = {
            BODY: "block"
        },
        Tn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Nn = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Cn = ["Top", "Right", "Bottom", "Left"],
        kn = ["Webkit", "O", "Moz", "ms"];
    ut.fn.extend({
        css: function(e, n) {
            return ut.access(this, function(e, n, r) {
                var i, o, a = {},
                    s = 0;
                if (ut.isArray(n)) {
                    for (o = fn(e), i = n.length; i > s; s++) a[n[s]] = ut.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? ut.style(e, n, r) : ut.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return N(this, !0)
        },
        hide: function() {
            return N(this)
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : T(this)) ? ut(this).show() : ut(this).hide()
            })
        }
    }), ut.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = pn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ut.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = ut.camelCase(n),
                    l = e.style;
                if (n = ut.cssProps[u] || (ut.cssProps[u] = w(l, u)), s = ut.cssHooks[n] || ut.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                if (a = typeof r, "string" === a && (o = xn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ut.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ut.cssNumber[u] || (r += "px"), ut.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r
                } catch (c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, u = ut.camelCase(n);
            return n = ut.cssProps[u] || (ut.cssProps[u] = w(e.style, u)), s = ut.cssHooks[n] || ut.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = pn(e, n, i)), "normal" === a && n in Nn && (a = Nn[n]), "" === r || r ? (o = parseFloat(a), r === !0 || ut.isNumeric(o) ? o || 0 : a) : a
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), e.getComputedStyle ? (fn = function(t) {
        return e.getComputedStyle(t, null)
    }, pn = function(e, n, r) {
        var i, o, a, s = r || fn(e),
            u = s ? s.getPropertyValue(n) || s[n] : t,
            l = e.style;
        return s && ("" !== u || ut.contains(e.ownerDocument, e) || (u = ut.style(e, n)), bn.test(u) && yn.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
    }) : Y.documentElement.currentStyle && (fn = function(e) {
        return e.currentStyle
    }, pn = function(e, n, r) {
        var i, o, a, s = r || fn(e),
            u = s ? s[n] : t,
            l = e.style;
        return null == u && l && l[n] && (u = l[n]), bn.test(u) && !gn.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
    }), ut.each(["height", "width"], function(e, t) {
        ut.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? 0 === e.offsetWidth && mn.test(ut.css(e, "display")) ? ut.swap(e, Tn, function() {
                    return E(e, t, r)
                }) : E(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && fn(e);
                return C(e, n, r ? k(e, t, r, ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ut.support.opacity || (ut.cssHooks.opacity = {
        get: function(e, t) {
            return hn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = ut.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ut.trim(o.replace(dn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = dn.test(o) ? o.replace(dn, i) : o + " " + i)
        }
    }), ut(function() {
        ut.support.reliableMarginRight || (ut.cssHooks.marginRight = {
            get: function(e, t) {
                return t ? ut.swap(e, {
                    display: "inline-block"
                }, pn, [e, "marginRight"]) : void 0
            }
        }), !ut.support.pixelPosition && ut.fn.position && ut.each(["top", "left"], function(e, t) {
            ut.cssHooks[t] = {
                get: function(e, n) {
                    return n ? (n = pn(e, t), bn.test(n) ? ut(e).position()[t] + "px" : n) : void 0
                }
            }
        })
    }), ut.expr && ut.expr.filters && (ut.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ut.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ut.css(e, "display"))
    }, ut.expr.filters.visible = function(e) {
        return !ut.expr.filters.hidden(e)
    }), ut.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ut.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Cn[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, yn.test(e) || (ut.cssHooks[e + t].set = C)
    });
    var En = /%20/g,
        Sn = /\[\]$/,
        An = /\r?\n/g,
        jn = /^(?:submit|button|image|reset|file)$/i,
        Dn = /^(?:input|select|textarea|keygen)/i;
    ut.fn.extend({
        serialize: function() {
            return ut.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ut.prop(this, "elements");
                return e ? ut.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ut(this).is(":disabled") && Dn.test(this.nodeName) && !jn.test(e) && (this.checked || !tn.test(e))
            }).map(function(e, t) {
                var n = ut(this).val();
                return null == n ? null : ut.isArray(n) ? ut.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(An, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(An, "\r\n")
                }
            }).get()
        }
    }), ut.param = function(e, n) {
        var r, i = [],
            o = function(e, t) {
                t = ut.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = ut.ajaxSettings && ut.ajaxSettings.traditional), ut.isArray(e) || e.jquery && !ut.isPlainObject(e)) ut.each(e, function() {
            o(this.name, this.value)
        });
        else for (r in e) j(r, e[r], n, o);
        return i.join("&").replace(En, "+")
    }, ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ut.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ut.fn.hover = function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var Ln, Hn, qn = ut.now(),
        Mn = /\?/,
        _n = /#.*$/,
        Fn = /([?&])_=[^&]*/,
        On = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Bn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Pn = /^(?:GET|HEAD)$/,
        Rn = /^\/\//,
        Wn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        $n = ut.fn.load,
        In = {},
        zn = {},
        Xn = "*/".concat("*");
    try {
        Hn = J.href
    } catch (Un) {
        Hn = Y.createElement("a"), Hn.href = "", Hn = Hn.href
    }
    Ln = Wn.exec(Hn.toLowerCase()) || [], ut.fn.load = function(e, n, r) {
        if ("string" != typeof e && $n) return $n.apply(this, arguments);
        var i, o, a, s = this,
            u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), ut.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ut.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, s.html(i ? ut("<div>").append(ut.parseHTML(e)).find(i) : e)
        }).complete(r &&
        function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, ut.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ut.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ut.each(["get", "post"], function(e, n) {
        ut[n] = function(e, r, i, o) {
            return ut.isFunction(r) && (o = o || i, i = r, r = t), ut.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), ut.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Hn,
            type: "GET",
            isLocal: Bn.test(Ln[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": ut.parseJSON,
                "text xml": ut.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? H(H(e, ut.ajaxSettings), t) : H(ut.ajaxSettings, e)
        },
        ajaxPrefilter: D(In),
        ajaxTransport: D(zn),
        ajax: function(e, n) {
            function r(e, n, r, i) {
                var o, f, v, b, w, N = n;
                2 !== x && (x = 2, u && clearTimeout(u), c = t, s = i || "", T.readyState = e > 0 ? 4 : 0, r && (b = q(p, T, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ut.lastModified[a] = w), w = T.getResponseHeader("etag"), w && (ut.etag[a] = w)), 204 === e ? (o = !0, N = "nocontent") : 304 === e ? (o = !0, N = "notmodified") : (o = M(p, b), N = o.state, f = o.data, v = o.error, o = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || N) + "", o ? g.resolveWith(d, [f, N, T]) : g.rejectWith(d, [T, N, v]), T.statusCode(y), y = t, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, p, o ? f : v]), m.fireWith(d, [T, N]), l && (h.trigger("ajaxComplete", [T, p]), --ut.active || ut.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, u, l, c, f, p = ut.ajaxSetup({}, n),
                d = p.context || p,
                h = p.context && (d.nodeType || d.jquery) ? ut(d) : ut.event,
                g = ut.Deferred(),
                m = ut.Callbacks("once memory"),
                y = p.statusCode || {},
                v = {},
                b = {},
                x = 0,
                w = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!f) for (f = {}; t = On.exec(s);) f[t[1].toLowerCase()] = t[2];
                            t = f[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e) if (2 > x) for (t in e) y[t] = [y[t], e[t]];
                        else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return c && c.abort(t), r(0, t), this
                    }
                };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || Hn) + "").replace(_n, "").replace(Rn, Ln[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ut.trim(p.dataType || "*").toLowerCase().match(ct) || [""], null == p.crossDomain && (i = Wn.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === Ln[1] && i[2] === Ln[2] && (i[3] || ("http:" === i[1] ? 80 : 443)) == (Ln[3] || ("http:" === Ln[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = ut.param(p.data, p.traditional)), L(In, p, n, T), 2 === x) return T;
            l = p.global, l && 0 === ut.active++ && ut.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Pn.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Mn.test(a) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Fn.test(a) ? a.replace(Fn, "$1_=" + qn++) : a + (Mn.test(a) ? "&" : "?") + "_=" + qn++)), p.ifModified && (ut.lastModified[a] && T.setRequestHeader("If-Modified-Since", ut.lastModified[a]), ut.etag[a] && T.setRequestHeader("If-None-Match", ut.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : p.accepts["*"]);
            for (o in p.headers) T.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === x)) return T.abort();
            w = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            }) T[o](p[o]);
            if (c = L(zn, p, n, T)) {
                T.readyState = 1, l && h.trigger("ajaxSend", [T, p]), p.async && p.timeout > 0 && (u = setTimeout(function() {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, c.send(v, r)
                } catch (N) {
                    if (!(2 > x)) throw N;
                    r(-1, N)
                }
            } else r(-1, "No Transport");
            return T
        },
        getScript: function(e, n) {
            return ut.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return ut.get(e, t, n, "json")
        }
    }), ut.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ut.globalEval(e), e
            }
        }
    }), ut.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ut.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = Y.head || ut("head")[0] || Y.documentElement;
            return {
                send: function(t, i) {
                    n = Y.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Vn = [],
        Yn = /(=)\?(?=&|$)|\?\?/;
    ut.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Vn.pop() || ut.expando + "_" + qn++;
            return this[e] = !0, e
        }
    }), ut.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (Yn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Yn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ut.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Yn, "$1" + o) : n.jsonp !== !1 && (n.url += (Mn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || ut.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Vn.push(o)), s && ut.isFunction(a) && a(s[0]), s = a = t
        }), "script") : void 0
    });
    var Jn, Gn, Qn = 0,
        Kn = e.ActiveXObject &&
    function() {
        var e;
        for (e in Jn) Jn[e](t, !0)
    };
    ut.ajaxSettings.xhr = e.ActiveXObject ?
    function() {
        return !this.isLocal && _() || F()
    } : _, Gn = ut.ajaxSettings.xhr(), ut.support.cors = !! Gn && "withCredentials" in Gn, Gn = ut.support.ajax = !! Gn, Gn && ut.ajaxTransport(function(n) {
        if (!n.crossDomain || ut.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s])
                    } catch (l) {}
                    u.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, l, c, f;
                        try {
                            if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = ut.noop, Kn && delete Jn[a]), i) 4 !== u.readyState && u.abort();
                            else {
                                f = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (f.text = u.responseText);
                                try {
                                    c = u.statusText
                                } catch (p) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                            }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        f && o(s, c, f, l)
                    }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Qn, Kn && (Jn || (Jn = {}, ut(e).unload(Kn)), Jn[a] = r), u.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Zn, er, tr = /^(?:toggle|show|hide)$/,
        nr = new RegExp("^(?:([+-])=|)(" + lt + ")([a-z%]*)$", "i"),
        rr = /queueHooks$/,
        ir = [W],
        or = {
            "*": [function(e, t) {
                var n, r, i = this.createTween(e, t),
                    o = nr.exec(t),
                    a = i.cur(),
                    s = +a || 0,
                    u = 1,
                    l = 20;
                if (o) {
                    if (n = +o[2], r = o[3] || (ut.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                        s = ut.css(i.elem, e, !0) || n || 1;
                        do u = u || ".5", s /= u, ut.style(i.elem, e, s + r);
                        while (u !== (u = i.cur() / a) && 1 !== u && --l)
                    }
                    i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
                }
                return i
            }]
        };
    ut.Animation = ut.extend(P, {
        tweener: function(e, t) {
            ut.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], or[n] = or[n] || [], or[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? ir.unshift(e) : ir.push(e)
        }
    }), ut.Tween = $, $.prototype = {
        constructor: $,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ut.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = $.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ut.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
        }
    }, $.prototype.init.prototype = $.prototype, $.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ut.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                ut.fx.step[e.prop] ? ut.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ut.cssProps[e.prop]] || ut.cssHooks[e.prop]) ? ut.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ut.each(["toggle", "show", "hide"], function(e, t) {
        var n = ut.fn[t];
        ut.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, r, i)
        }
    }), ut.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(T).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = ut.isEmptyObject(e),
                o = ut.speed(t, n, r),
                a = function() {
                    var t = P(this, ut.extend({}, e), o);
                    a.finish = function() {
                        t.stop(!0)
                    }, (i || ut._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(r)
                };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = ut.timers,
                    a = ut._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else for (n in a) a[n] && a[n].stop && rr.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && ut.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = ut._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = ut.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, ut.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), ut.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        ut.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), ut.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ut.extend({}, e) : {
            complete: n || !n && t || ut.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ut.isFunction(t) && t
        };
        return r.duration = ut.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ut.fx.speeds ? ut.fx.speeds[r.duration] : ut.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            ut.isFunction(r.old) && r.old.call(this), r.queue && ut.dequeue(this, r.queue)
        }, r
    }, ut.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ut.timers = [], ut.fx = $.prototype.init, ut.fx.tick = function() {
        var e, n = ut.timers,
            r = 0;
        for (Zn = ut.now(); r < n.length; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || ut.fx.stop(), Zn = t
    }, ut.fx.timer = function(e) {
        e() && ut.timers.push(e) && ut.fx.start()
    }, ut.fx.interval = 13, ut.fx.start = function() {
        er || (er = setInterval(ut.fx.tick, ut.fx.interval))
    }, ut.fx.stop = function() {
        clearInterval(er), er = null
    }, ut.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ut.fx.step = {}, ut.expr && ut.expr.filters && (ut.expr.filters.animated = function(e) {
        return ut.grep(ut.timers, function(t) {
            return e === t.elem
        }).length
    }), ut.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            ut.offset.setOffset(this, e, t)
        });
        var n, r, i = {
            top: 0,
            left: 0
        },
            o = this[0],
            a = o && o.ownerDocument;
        if (a) return n = a.documentElement, ut.contains(n, o) ? (typeof o.getBoundingClientRect !== V && (i = o.getBoundingClientRect()), r = z(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i
    }, ut.offset = {
        setOffset: function(e, t, n) {
            var r = ut.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = ut(e),
                s = a.offset(),
                u = ut.css(e, "top"),
                l = ut.css(e, "left"),
                c = ("absolute" === r || "fixed" === r) && ut.inArray("auto", [u, l]) > -1,
                f = {},
                p = {};
            c ? (p = a.position(), i = p.top, o = p.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0), ut.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f)
        }
    }, ut.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                },
                    r = this[0];
                return "fixed" === ut.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ut.nodeName(e[0], "html") || (n = e.offset()), n.top += ut.css(e[0], "borderTopWidth", !0), n.left += ut.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ut.css(r, "marginTop", !0),
                    left: t.left - n.left - ut.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Y.documentElement; e && !ut.nodeName(e, "html") && "static" === ut.css(e, "position");) e = e.offsetParent;
                return e || Y.documentElement
            })
        }
    }), ut.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        ut.fn[e] = function(i) {
            return ut.access(this, function(e, i, o) {
                var a = z(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : void(a ? a.scrollTo(r ? ut(a).scrollLeft() : o, r ? o : ut(a).scrollTop()) : e[i] = o)
            }, e, i, arguments.length, null)
        }
    }), ut.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        ut.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            ut.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return ut.access(this, function(n, r, i) {
                    var o;
                    return ut.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ut.css(n, r, s) : ut.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), e.jQuery = e.$ = ut, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return ut
    })
}(window);;
if (!window.define && !window.require) {
    var define, require;
    !
    function(e) {
        function t(e, t) {
            var r = i[e] || {},
                s = r.pkg ? o[r.pkg].url : r.url || e,
                d = a[e] || (a[e] = []);
            if (d.push(t), !(s in l)) {
                l[s] = !0;
                var c = document.createElement("script");
                c.type = "text/javascript", c.src = s, n.appendChild(c)
            }
        }
        var i, o, n = document.getElementsByTagName("head")[0],
            a = {},
            r = {},
            s = {},
            l = {};
        define = function(e, t) {
            r[e] = t;
            var i = a[e];
            if (i) {
                for (var o = i.length - 1; o >= 0; --o) i[o]();
                delete a[e]
            }
        }, require = function(e) {
            e = require.alias(e);
            var t = s[e];
            if (t) return t.exports;
            var i = r[e];
            if (!i) throw Error("Cannot find module `" + e + "`");
            t = s[e] = {
                exports: {}
            };
            var o = "function" == typeof i ? i.apply(t, [require, t.exports, t]) : i;
            return o && (t.exports = o), t.exports
        }, require.async = function(o, n) {
            function a(e) {
                for (var o = e.length - 1; o >= 0; --o) {
                    var n = e[o];
                    if (!(n in r || n in d)) {
                        d[n] = !0, c++, t(n, s);
                        var l = i[n];
                        l && "deps" in l && a(l.deps)
                    }
                }
            }
            function s() {
                if (0 == c--) {
                    var t, i = [];
                    for (t = o.length - 1; t >= 0; --t) i[t] = require(o[t]);
                    n && n.apply(e, i)
                }
            }
            "string" == typeof o && (o = [o]);
            for (var l = o.length - 1; l >= 0; --l) o[l] = require.alias(o[l]);
            var d = {},
                c = 0;
            a(o), s()
        }, require.resourceMap = function(e) {
            i = e.res || {}, o = e.pkg || {}
        }, require.alias = function(e) {
            return e
        }, define.amd = {
            jQuery: !0,
            version: "1.0.0"
        }
    }(this)
}
define("jsmod/main", function(e, t, i) {
    var o, n, a, r = $("script[src*='jsmod.js']");
    if (r.length > 0) {
        a = /(^|&|\\?|#)config=([^&#]*)/;
        try {
            o = a.exec(r.prop("src"))[2]
        } catch (s) {
            o = void 0
        }
    }
    window.__jsmodConfig && (o = window.__jsmodConfig), function() {
        var e = {};
        n = function t(i, o) {
            var n = /\W/.test(i) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + i.replace(/[\r\t\n]/g, " ").split("<%").join("  ").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split(" ").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : e[i] = e[i] || t(document.getElementById(i).innerHTML);
            return o ? n(o) : n
        }
    }(), i.exports = {
        version: "1.0.0",
        config: o,
        template: n,
        ie6: /msie 6/i.test(navigator.userAgent)
    }
}), define("jsmod/ui/carousel", function(e, t, i) {
    var o, n;
    o = e("jsmod/main"), n = {
        count: 1,
        interval: 0,
        current: 0,
        isVertical: !1
    };
    var a = function(e, t) {
            var i = this;
            i.$element = $(e), i.option = $.extend({}, n, t), i.total = i.option.htmls.length, i.direction = "left", i.liStyle = 'style="float:left;"', i.init()
        };
    $.extend(a.prototype, {
        init: function() {
            var e, t, i, n, a = this,
                r = a.option;
            1 == r.count && (r.htmls.push(r.htmls[0]), r.htmls.unshift(r.htmls[a.total - 1])), r.isVertical && (a.direction = "top", a.liStyle = ""), a.$list = $('<ul style="position: absolute; top: 0;" class="mod-carousel"></ul>').addClass(a.option.className), a.$element.css("position", "relative").css("overflow", "hidden").append(a.$list), $.each(r.htmls, function(e, t) {
                var i;
                1 == r.count && (e -= 1), i = $("<li " + a.liStyle + ' class="mod-carousel-item"></li>').attr("data-index", e).html(t).appendTo(a.$list), o.ie6 && i.css("overflow", "hidden")
            }), a.option.isVertical ? (i = a.getItem(0).outerHeight(!0) - a.getItem(0).height(), n = parseFloat((a.$element.height() / r.count).toFixed(2) - i), a.itemWidth = n + i, a.$element.find(".mod-carousel-item").css("height", n), a.$list.css("height", a.itemWidth * r.htmls.length)) : (e = a.getItem(0).outerWidth(!0) - a.getItem(0).width(), t = parseFloat((a.$element.width() / r.count).toFixed(2) - e), a.itemWidth = t + e, a.$element.find(".mod-carousel-item").css("width", t), a.$list.css("width", a.itemWidth * r.htmls.length)), a.cur(r.current)
        },
        pre: function(e, t) {
            return this.cur(this.index - 1, e, t)
        },
        next: function(e, t) {
            return this.cur(this.index + 1, e, t)
        },
        cur: function(e, t, i) {
            var o, n, a, r = this,
                s = r.option;
            if (s.count > 1 && 0 > e && (e = 0), s.count > 1 && e > r.total - 1 && (e = r.total - 1), s.count > 1) {
                if (s.isVertical) {
                    if (e - 1 >= r.total - r.option.count) return;
                    n = e * r.itemWidth
                } else o = Math.round(s.count / 2 - .001), a = e * r.itemWidth, n = a - o * r.itemWidth > 0 ? a - o * r.itemWidth : 0, n > 0 && n + r.itemWidth * r.option.count > r.total * r.itemWidth && (n = r.total * r.itemWidth - r.itemWidth * r.option.count);
                return n = r.total <= r.option.count ? 0 : n, r.go(-n, function() {
                    t && t(r.index)
                }), r.setCur(e, i)
            }
            return e == r.total ? (n = (r.total + 1) * r.itemWidth, r.cloneTo(0, r.total), r.go(-n, function() {
                r.$list.css(r.direction, -r.itemWidth), t && t(r.index)
            }), r.setCur(0, i)) : -1 == e ? (n = 0, r.cloneTo(r.total - 1, -1), r.go(-n, function() {
                r.$list.css(r.direction, -((r.total - 1 + 1) * r.itemWidth)), t && t(r.index)
            }), r.setCur(r.total - 1, i)) : (n = (e + 1) * r.itemWidth, r.go(-n, function() {
                t && t(r.index)
            }), r.setCur(e, i))
        },
        setCur: function(e, t) {
            var i, o = this;
            return t || (void 0 !== o.index && o.getItem(o.index).removeClass("mod-carousel-item-cur"), o.index = e, o.getItem(o.index).addClass("mod-carousel-item-cur")), i = $.Event("active", {
                index: e
            }), $(o).trigger(i), e
        },
        cloneTo: function(e, t) {
            var i, o, n = this;
            i = n.getItem(e), o = n.getItem(t), o.html(i.html())
        },
        go: function(e, t) {
            var i = void 0 === this.index ? 0 : 300,
                o = {};
            o[this.direction] = e, this.$list.animate(o, i, function() {
                t && t()
            })
        },
        getItem: function(e) {
            return this.$element.find("[data-index=" + e + "]")
        },
        getElement: function() {
            return this.$element
        },
        getCurIndex: function() {
            return this.index
        },
        destroy: function() {
            this.$list.remove(), this.$list = null
        }
    }), i.exports = a
}), function(e) {
    function t(e) {
        return e && e.constructor === Number ? e + "px" : e
    }
    e.fn.bgiframe = /msie 6\.0/i.test(navigator.userAgent) ?
    function(i) {
        i = e.extend({
            top: "auto",
            left: "auto",
            width: "auto",
            height: "auto",
            opacity: !0,
            src: "javascript:false;"
        }, i);
        var o = '<iframe class="bgiframe"frameborder="0"tabindex="-1"src="' + i.src + '"style="display:block;position:absolute;z-index:-1;' + (i.opacity !== !1 ? "filter:Alpha(Opacity='0');" : "") + "top:" + ("auto" == i.top ? "expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+'px')" : t(i.top)) + ";left:" + ("auto" == i.left ? "expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+'px')" : t(i.left)) + ";width:" + ("auto" == i.width ? "expression(this.parentNode.offsetWidth+'px')" : t(i.width)) + ";height:" + ("auto" == i.height ? "expression(this.parentNode.offsetHeight+'px')" : t(i.height)) + ';"/>';
        return this.each(function() {
            0 === e(this).children("iframe.bgiframe").length && this.insertBefore(document.createElement(o), this.firstChild)
        })
    } : function() {
        return this
    }, e.fn.bgIframe = e.fn.bgiframe
}(jQuery), define("jsmod/ui/dialog", function(e, t, i) {
    var o, n;
    o = e("jsmod/main"), n = {
        backgroundColor: "#FFF"
    };
    var a = function(e) {
            var t = this;
            t.option = $.extend({}, n, e), t.init()
        };
    a.opacity = .7, a.resetFrame = function() {
        var e = $(".mod-dialog-frame");
        0 == e.length && (o.ie6 ? (a.frame = $('<div class="mod-dialog-frame" style="overflow:auto; overflow-x:hidden; display:none; position: absolute; left:0; top: 0; right:0; bottom: 0; z-index: 1000;">').appendTo("body"), a.frame.css("width", $(window).width()), a.frame.css("height", $(window).height()), a.frame.bgiframe()) : a.frame = $('<div class="mod-dialog-frame" style="overflow:auto; display:none; position: fixed; left:0; top: 0; right:0; bottom: 0; z-index: 1000;"></div>').appendTo("body"), a.setOpacity()), o.ie6 && a.frame.css("top", $("html").scrollTop()), e.find(".mod-dialog-wrap").length > 0 && e.find(".mod-dialog-wrap").detach()
    }, a.disableKeyEvent = function() {
        $(document).off("keydown.dialog"), a.keyEvent = !1
    }, a.enableKeyEvent = function() {
        a.keyEvent || ($(document).on("keydown.dialog", function(e) {
            27 == e.keyCode && (a._instance && a._instance.hide({
                fade: !0
            }), $(a._instance).trigger("pressesc"))
        }), a.keyEvent = !0)
    }, a.reset = function() {
        a.enableKeyEvent(), a.setOpacity(.7)
    }, a.resetEvent || ($(window).on("resize.dialog", function() {
        a._instance && "none" != a.frame.css("display") && (o.ie6 && (a.frame.css("width", $(window).width()), a.frame.css("height", $(window).height()), a.frame.css("top", $("html").scrollTop())), a._instance.adjuestPosition())
    }), a.resetEvent = !0), a.enableKeyEvent(), a.setOpacity = function(e) {
        var t;
        void 0 !== e && (a.opacity = e), t = parseInt(255 * a.opacity).toString(16), "0" == t && (t = "00"), a.frame && (a.frame.css("filter", "progid:DXImageTransform.Microsoft.gradient(startColorstr=#" + t + "000000,endColorstr=#" + t + "000000"), o.ie6 || a.frame.css("background-color", "rgba(0, 0, 0," + a.opacity + ")"))
    }, $.extend(a.prototype, {
        init: function() {
            var e, t = this;
            e = $(t.option.html), t.content = $('<div style="overflow:hidden; position: absolute;" class="mod-dialog-wrap"></div>').append(e), t.option.backgroundColor && t.content.css("background-color", t.option.backgroundColor), a.resetFrame(), t.setBox(), a.frame.append(t.content)
        },
        setBox: function(e) {
            var t = this;
            $.extend(t.option, e), t.option.width && t.content.css("width", t.option.width), t.option.height && t.content.css("height", t.option.height), "none" != a.frame.css("display") && t.adjuestPosition()
        },
        show: function(e) {
            var t = this;
            e = e || {}, $("html").css("overflow", "visible"), $("body").css("overflow", "hidden"), a.resetFrame(), a.frame.show(), e.fade ? t.content.hide().appendTo(a.frame).fadeIn("fast") : a.frame.append(t.content), t.adjuestPosition(), a._instance = t
        },
        hide: function(e) {
            e = e || {}, $("html").css("overflow", ""), $("body").css("overflow", ""), e.fade ? a.frame.fadeOut("fast") : a.frame.hide()
        },
        adjuestPosition: function() {
            var e, t, i, o, n, r, s = this,
                l = s.option.offset || {};
            e = a.frame.height(), t = a.frame.width(), i = s.content.height(), o = s.content.width(), n = e / 2 - i / 2 + (l.top || 0), r = t / 2 - o / 2 + (l.left || 0), n = 0 > n ? 0 : n, r = 0 > r ? 0 : r, s.content.css("top", n), s.content.css("left", r)
        },
        getElement: function() {
            return this.content
        },
        destroy: function() {
            this.hide(), this.content.remove(), this.content = null
        }
    }), i.exports = a
}), define("jsmod/ui/fixElement", function(e, t, i) {
    var o, n;
    n = e("jsmod/main"), o = {
        targetType: "top",
        zIndex: 1e3,
        fixed: !1,
        preventResize: !1,
        appendInBody: !1
    };
    var a = function(e, t) {
            var i = this;
            i._isHide = !1, i._element = $(e), i.option = $.extend({}, o, t), i.option.target && (i.target = $(i.option.target), i.$target = $(i.option.target)), i._element.css("z-Index", i.option.zIndex), i.redraw(), t.preventShow ? i.hide() : i.show(), t.preventResize || (i.resizeCb = function() {
                i.resizing || (i.redrawTimer = setTimeout(function() {
                    i.redraw(), i.resizing = !1
                }, 0)), i.resizing = !0
            }, $(window).on("resize.fixElement", i.resizeCb))
        };
    $.extend(a.prototype, {
        fix: function(e, t, i) {
            var o = this,
                a = o._element;
            $.extend(o.option, {
                fixed: t,
                offset: $.extend({}, i),
                position: $.extend({}, e)
            }), i && (e.top += i.top || 0, e.left += i.left || 0), 0 == a.parent("body").length && a.detach().appendTo(document.body), t && !n.ie6 ? (a.css("position", "fixed"), "none" == a.css("display") ? a.show().offset(e).hide() : a.offset(e)) : (a.css("position", "absolute"), n.ie6 && t ? (a.get(0).style.cssText += ";_top: expression(eval(document.documentElement.scrollTop + " + e.top + "))", a.get(0).style.cssText += ";_left: expression(eval(document.documentElement.scrollLeft + " + e.left + "))") : (a.css("position", "absolute"), "none" == a.css("display") ? a.show().offset(e).hide() : a.offset(e)))
        },
        fixTo: function(e, t, i) {
            var o, n, a, r, s, l, d = this,
                c = d._element;
            switch (s = function(e, t, i) {
                if (void 0 !== t && "left" != t && "right" != t && "center" != t) throw new RangeError("second targetType error");
                if ("left" == t && (e.left -= o.width / 2), "right" == t && (e.left += o.width / 2), void 0 !== i && "left" != i && "right" != i && "center" != i) throw new RangeError("third targetType error");
                return "left" == i && (e.left -= n.width / 2), "right" == i && (e.left += n.width / 2), e
            }, l = function(e, t, i) {
                if (void 0 !== t && "bottom" != t && "top" != t && "center" != t) throw new RangeError("second targetType error");
                if ("bottom" == t && (e.top += o.height / 2), "top" == t && (e.top -= o.height / 2), void 0 !== i && "bottom" != i && "top" != i && "center" != i) throw new RangeError("third targetType error");
                return "bottom" == i && (e.top += n.height / 2), "top" == i && (e.top -= n.height / 2), e
            }, $.extend(d.option, {
                target: e,
                targetType: t,
                offset: $.extend({}, i)
            }), d.option.target && (d.target = $(e), d.$target = $(d.option.target)), t = t || d.option.targetType, r = t.split(","), r = $.map(r, function(e) {
                return $.trim(e)
            }), d.option.appendInBody ? c.css("position", "absolute").detach().appendTo(document.body) : c.css("position", "absolute").detach().insertAfter($(e).parent()), o = d.getBounds(e), n = d.getRect(c), r[0]) {
            case "top":
                a = {
                    top: o.top - n.height,
                    left: o.left + o.width / 2 - n.width / 2
                }, s(a, r[1], r[2]);
                break;
            case "right":
                a = {
                    top: o.top + o.height / 2 - n.height / 2,
                    left: o.left + o.width
                }, l(a, r[1], r[2]);
                break;
            case "bottom":
                a = {
                    top: o.top + o.height,
                    left: o.left + o.width / 2 - n.width / 2
                }, s(a, r[1], r[2]);
                break;
            case "left":
                a = {
                    top: o.top + o.height / 2 - n.height / 2,
                    left: o.left - n.width
                }, l(a, r[1], r[2]);
                break;
            case "center":
                a = {
                    top: o.top + o.height / 2 - n.height / 2,
                    left: o.left + o.width / 2 - n.width / 2
                }
            }
            i && (a.top += i.top || 0, a.left += i.left || 0), "none" == c.css("display") ? c.show().offset(a).hide() : c.offset(a)
        },
        getRect: function(e) {
            return {
                width: $(e).outerWidth(),
                height: $(e).outerHeight()
            }
        },
        getBounds: function(e) {
            return $.extend({}, this.getRect(e), $(e).offset())
        },
        redraw: function(e) {
            var t = this,
                i = t.option;
            return e && (t._element.remove(), t._element = $(e), t._element.css("z-Index", t.option.zIndex)), t._isHide ? t._element.hide() : t._element.show(), i.target ? void t.fixTo(i.target, i.targetType, i.offset) : i.position ? void t.fix(i.position, i.fixed, i.offset) : void 0
        },
        show: function(e) {
            var t, i = this,
                o = i.option,
                e = e || {};
            o.target && i.fixTo(o.target, o.targetType, o.offset), o.position && i.fix(o.position, o.fixed, o.offset), e.fade ? this._element.hide().fadeIn("fast") : this._element.show(), this._isHide = !1, t = $.Event("shown"), $(this).trigger(t)
        },
        hide: function(e) {
            var t, e = e || {};
            e.fade ? this._element.fadeOut("fast") : this._element.hide(), this._isHide = !0, t = $.Event("hidden"), $(this).trigger(t)
        },
        toggle: function(e) {
            this._isHide ? this.show(e) : this.hide(e)
        },
        destroy: function() {
            this._element.remove(), this._element = null, !this.option.preventResize && this.resizeCb && ($(window).off("resize.fixElement", this.resizeCb), this.redrawTimer && clearTimeout(this.redrawTimer))
        },
        getElement: function() {
            return this._element
        },
        getDisplay: function() {
            return !this._isHide
        }
    }), i.exports = a
}), define("jsmod/ui/fixElement/dropDown", function(e, t, i) {
    var o, n, a;
    o = {
        targetType: "bottom",
        preventShow: !0,
        keyPressShow: !0,
        syncInput: !0
    }, a = e("jsmod/main"), n = e("jsmod/ui/fixElement");
    var r = function(e, t) {
            var i = this;
            i.option = $.extend({}, o, t), i.items = e, i.element = i.generateList(), n.apply(i, [i.element, i.option]), $(i).on("hidden", function() {
                var e = i._element.find(".mod-dropdown-item-cur");
                e.length > 0 && e.removeClass("mod-dropdown-item-cur")
            }), $(i).on("shown", function() {
                var e = i._element.find(".mod-dropdown-item-cur");
                e.length > 0 && e.removeClass("mod-dropdown-item-cur")
            })
        };
    $.extend(r.prototype, {}, n.prototype), r.prototype.constructor = r, $.extend(r.prototype, {
        generateList: function() {
            var e = this,
                t = e.option,
                i = e.items,
                o = [];
            return 0 == i.length ? '<div class="mod-dropdown-empty"></div>' : (o.push('<ul class="mod-dropdown ' + (t.className || "") + '">'), $.each(i, function(e, i) {
                var n;
                n = t.fun && $.isFunction(t.fun) ? t.fun(e, i) : i, o.push('<li class="mod-dropdown-item" data-value="' + n.value + '" data-key="' + n.key + '">' + (n.html || n.value) + "</li>")
            }), o.push("</ul>"), o.join(""))
        },
        resetItems: function(e) {
            var t, i = this;
            i.items = e || i.items, t = i.generateList(), i.redraw(t)
        },
        active: function(e) {
            var t = this;
            t._element.find("li.mod-dropdown-item:eq(" + e + ")").trigger("click")
        },
        getItem: function(e) {
            var t = this;
            return t._element.find("li.mod-dropdown-item:eq(" + e + ")")
        },
        redraw: function(e, t) {
            var i = this;
            i.undelegateEvents(), n.prototype.redraw.apply(this, [e, t]), i.delegatesEvents()
        },
        delegatesEvents: function() {
            var e = this;
            $(e._element).delegate("li.mod-dropdown-item", "click.dropdown", function(t) {
                var i, o = $(this).data("key"),
                    n = $(this).data("value");
                e.activedItem && e.activedItem.removeClass("mod-dropdown-item-active"), e.activedItem = $(this).addClass("mod-dropdown-item-active"), i = $.Event("selectitem", {
                    key: o,
                    value: n,
                    element: this,
                    index: $.inArray(this, $(e._element).find("li.mod-dropdown-item"))
                }), $(e).trigger(i, [{
                    key: o,
                    value: n,
                    element: this,
                    index: $.inArray(this, $(e._element).find("li.mod-dropdown-item"))
                }]), i.isDefaultPrevented() && t.preventDefault(), i.preventDropDownHide || e.hide()
            }), e.target && "INPUT" == $(e.target).prop("nodeName") && $(e.target).on("keydown.dropdown", function(t) {
                var i, o, n, a;
                return e._isHide ? void(38 != t.keyCode && 40 != t.keyCode || !e.option.keyPressShow || e.show()) : (38 == t.keyCode && (e.move("up"), t.preventDefault()), 40 == t.keyCode && (e.move("down"), t.preventDefault()), void(13 == t.keyCode && (i = e._element.find(".mod-dropdown-item-cur"), i.length > 0 && (e.activedItem && e.activedItem.removeClass("mod-dropdown-item-active"), n = $(i).data("key"), a = $(i).data("value"), e.activedItem = $(i).addClass("mod-dropdown-item-active"), o = $.Event("selectitem", {
                    key: n,
                    value: a,
                    element: i.get(0)
                }), $(e).trigger(o, [{
                    key: n,
                    value: a,
                    element: i.get(0)
                }]), o.isDefaultPrevented() && t.preventDefault(), o.preventDropDownHide || e.hide()), t.preventDefault())))
            }), a.ie6 && ($(e._element).delegate("li.mod-dropdown-item", "mouseenter.dropdown", function() {
                $(this).addClass("mod-dropdown-item-hover")
            }), $(e._element).delegate("li.mod-dropdown-item", "mouseleave.dropdown", function() {
                $(this).removeClass("mod-dropdown-item-hover")
            }))
        },
        move: function(e) {
            var t, i, o, n, a, r, s = this,
                l = s._element;
            0 != s.items.length && (n = $(l).find("li"), o = n.length, t = $(l).find(".mod-dropdown-item-cur"), i = $.inArray(t.get(0), n), -1 != i ? ("up" == e && (a = 0 > i - 1 ? o - 1 : i - 1), "down" == e && (a = i + 1 >= o ? 0 : i + 1)) : a = "up" == e ? o - 1 : 0, r = n.eq(a), t.length > 0 && t.removeClass("mod-dropdown-item-cur"), r.addClass("mod-dropdown-item-cur"), $(s).trigger("moveto", [{
                key: r.data("key"),
                value: r.data("value"),
                toCur: r
            }]), s.option.syncInput && $(s.target).val(r.data("value")))
        },
        undelegateEvents: function() {
            var e = this;
            e._element && ($(e._element).undelegate("li.mod-dropdown-item", "click.dropdown"), a.ie6 && (e._element.undelegate("li.mod-dropdown-item", "mouseenter.dropdown"), e._element.undelegate("li.mod-dropdown-item", "mouseleave.dropdown"))), $(e.target).off("keydown.dropdown")
        },
        destroy: function() {
            this.undelegateEvents(), n.prototype.destroy.call(this)
        }
    }), i.exports = r
}), define("jsmod/ui/fixElement/dropDown/select", function(e, t, i) {
    var o, n;
    n = e("jsmod/ui/fixElement/dropDown"), o = {
        targetType: "bottom",
        noInput: "",
        keyPressShow: !0,
        syncInput: !0,
        otherClickHide: !0,
        trigger: "click"
    };
    var a = function(e, t) {
            var i = this;
            i.$seed = $(t.seed), n.apply(this, [e, $.extend({}, o, t)]), i.initEvents()
        };
    $.extend(a.prototype, {}, n.prototype), a.prototype.constructor = a, $.extend(a.prototype, {
        initEvents: function() {
            var e = this;
            $(e).on("selectitem", function(t) {
                e.$target.val(t.value)
            }), "click" == e.option.trigger && e.$seed.on("click.select", function() {
                e.hideTimer && clearTimeout(e.hideTimer), e.toggle(), e.getDisplay() && e.$target.focus()
            }), "click" == e.option.trigger && e.option.otherClickHide && (e.mouseDownCb = function(t) {
                0 == $(t.target).parents(".mod-dropdown").length && t.target != e.$target.get(0) && t.target != e.getElement().get(0) && (e.hideTimer = setTimeout(function() {
                    e.hide()
                }, 200))
            }, $("body").on("mousedown.select", e.mouseDownCb))
        },
        destroy: function() {
            var e = this;
            e.$seed.off("click.select"), e.hideTimer && clearTimeout(e.hideTimer), e.option.otherClickHide && $("body").off("mousedown.select", e.mouseDownCb), n.prototype.destroy.call(e)
        }
    }), i.exports = a
}), define("jsmod/ui/fixElement/dropDown/suggestion", function(e, t, i) {
    var o, n;
    o = e("jsmod/ui/fixElement/dropDown"), n = {
        targetType: "bottom",
        noInput: "",
        keyPressShow: !1,
        syncInput: !0,
        blurHide: !0
    };
    var a = function(e) {
            var e, t = this;
            t.option = e = $.extend({}, n, e), t.cacheDfds = {}, o.apply(t, [
                [], e]), e.noInput && $(t._element).html(e.noInput), t.initKeyPress(), t.initFocus()
        };
    $.extend(a.prototype, {}, o.prototype), a.prototype.constructor = a, $.extend(a.prototype, {
        initFocus: function() {
            var e = this,
                t = e.option;
            t.noInput && $(e.target).focus(function() {
                "" == $(this).val() && (e.resetItems([]), e._element.html(t.noInput), e.show())
            }), $(e.target).blur(function() {
                t.blurHide && setTimeout(function() {
                    e.hide()
                }, 200)
            })
        },
        initKeyPress: function() {
            var e = this,
                t = e.option;
            $(e.target).on("keyup.suggestion", function(i) {
                var o = $(this).val();
                13 != i.keyCode && (38 == i.keyCode || 40 == i.keyCode && !e._isHide || (o = $.trim(o), "" == o ? (e.resetItems([]), t.noInput && $(e._element).html(t.noInput), e.show()) : e.getData(o), e.lastVal = o))
            })
        },
        getData: function(e) {
            var t, i, o, n = this,
                a = n.option;
            i = a.sendData && a.sendData(e), t = n.cacheDfds[$.param(i)], t || (o = $.isFunction(a.url) ? a.url(e) : a.url, t = $.ajax({
                url: o,
                data: i,
                dataType: a.jsonpOption ? "jsonp" : "json",
                jsonp: a.jsonpOption && a.jsonpOption.jsonp ? a.jsonpOption.jsonp : void 0,
                jsonpCallback: a.jsonpOption && a.jsonpOption.jsonpCallback ? a.jsonpOption.jsonpCallback : void 0
            }).promise(), n.cacheDfds[$.param(i)] = t), t.done(function(e) {
                data = a.handleData(e), data && n.showDropDown(data)
            })
        },
        showDropDown: function(e) {
            var t = this;
            t.resetItems(e), t.show()
        }
    }), i.exports = a
}), define("jsmod/ui/fixElement/tip", function(e, t, i) {
    var o, n, a = e("jsmod/ui/fixElement");
    n = {
        trigger: "hover",
        targetType: "top",
        leavePreventHide: !0,
        otherClickHide: !0,
        preventSelfClickHide: !1,
        appendInBody: !1,
        delay: {
            show: 300,
            hide: 300
        }
    }, o = e("jsmod/main");
    var r = function(e) {
            var e, t = this;
            t.option = e = $.extend({}, n, e), t.mouseenterCb = function(e) {
                t.showTip(e)
            }, t.mouseleaveCb = function(e) {
                t.hideTip(e)
            }, t.clickCb = function(e) {
                setTimeout(function() {
                    var i;
                    t.option.preventSelfClickHide ? (i = t.getFixElement(e.data.$target), i && !i.getDisplay() && t.toggleTip(e)) : t.toggleTip(e)
                }, 100)
            }, $(e.targets).each(function() {
                t.bindEvent(this)
            }), "click" == e.trigger && e.otherClickHide && t.otherClickEvent()
        };
    $.extend(r.prototype, {
        bindEvent: function(e) {
            var t = this,
                i = t.option;
            t.openedFixElements = [], "hover" == i.trigger && ($(e).on("mouseenter.tip", null, {
                $target: $(e)
            }, t.mouseenterCb), $(e).on("mouseleave.tip", null, {
                $target: $(e)
            }, t.mouseleaveCb)), "click" == i.trigger && $(e).on("click.tip", null, {
                $target: $(e)
            }, t.clickCb), t.createFixElement(e)
        },
        otherClickEvent: function() {
            var e = this;
            e.mousedownCb = function(t) {
                var i = "baidu" == o.config ? "module" : "mod-tip";
                0 == $(t.target).parents("." + i).length && e.hideAllTips(t)
            }, $("body").on("mousedown.tip", e.mousedownCb)
        },
        hideAllTips: function(e) {
            var t = this,
                i = t.openedFixElements.slice(0);
            $.each(i, function() {
                var i;
                (!e || this.$target.get(0) != e.target && !$.contains(this.$target.get(0), e.target)) && (i = $.Event(), i.data = {
                    $target: this.target
                }, t.toggleTip(i, this.target))
            })
        },
        clearTimer: function(e, t) {
            var i = $(e).data(t + "-timer");
            i && clearTimeout(i)
        },
        getTipHTML: function(e, t, i, n) {
            return "baidu" == o.config ? [n ? "" : '<div class="module ' + (i || "") + '">', e ? '<div class="module-hd">' + e + "</div>" : "", t ? '<div class="module-bd">' + t + "</div>" : "", n ? "" : "</div>"].join("") : [n ? "" : '<div class="mod-tip ' + (i || "") + '">', e ? '<div class="mod-tip-hd">' + e + "</div>" : "", t ? '<div class="mod-tip-bd">' + t + "</div>" : "", n ? "" : "</div>"].join("")
        },
        createFixElement: function(e) {
            var t, i, o, n = this,
                i = n.option,
                r = $(e).data("title") || i.title,
                s = $(e).data("content") || i.content,
                l = $(e).data("offset") || i.offset,
                d = $(e).data("target-type") || i.targetType,
                c = i.appendInBody;
            return r || s ? (t = n.getTipHTML(r, s, i.className), i = {
                target: e,
                targetType: d,
                offset: l,
                preventShow: !0,
                appendInBody: c
            }, o = new a(t, i), $(e).data("tip", o), o) : !1
        },
        toggle: function(e) {
            var t = $.Event();
            t.data = {
                $target: $(e)
            }, this.toggleTip(t)
        },
        show: function(e) {
            var t = this,
                i = $.Event();
            i.data = {
                $target: $(e)
            }, t.showTip(i), $(e).data("shown", !0)
        },
        hide: function(e) {
            var t = this,
                i = $.Event();
            i.data = {
                $target: $(e)
            }, t.hideTip(i), $(e).data("shown", !1)
        },
        toggleTip: function(e) {
            var t = this,
                i = e.data.$target;
            i.data("shown") ? (t.hideTip(e), i.data("shown", !1)) : (t.showTip(e), i.data("shown", !0))
        },
        getFixElement: function(e) {
            return $(e).data("tip")
        },
        showTip: function(e) {
            var t, i, o, n = this,
                a = n.option,
                r = e.data.$target;
            return n.clearTimer(r, "hide"), (t = n.getFixElement(r)) ? ("hover" == a.trigger && a.delay && a.delay.show ? (i = setTimeout(function() {
                n.showTipCore(r)
            }, a.delay.show), r.data("show-timer", i), o = $.Event("showtimer", {
                target: r,
                timer: i
            }), $(n).trigger(o, [{
                target: r,
                timer: i
            }])) : n.showTipCore(r), !1) : void 0
        },
        showTipCore: function(e) {
            var t, i = this,
                o = i.openedFixElements,
                n = i.getFixElement(e);
            n.show(), -1 == $.inArray(n, o) && o.push(n), t = $.Event("shown", {
                target: e
            }), $(i).trigger(t, [{
                target: e
            }])
        },
        hideTip: function(e) {
            var t, i, o, n = this,
                a = n.option,
                r = e.data.$target;
            return n.clearTimer(r, "show"), (t = n.getFixElement(r)) ? ("hover" == a.trigger && a.delay && a.delay.show ? (i = setTimeout(function() {
                n.hideTipCore(r)
            }, a.delay.hide), r.data("hide-timer", i), a.leavePreventHide && !t.leavePreventHide && (t.leavePreventHide = !0, t._element.hover(function() {
                n.clearTimer(r, "hide")
            }, function() {
                n.hideTip(e)
            })), o = $.Event("hidetimer", {
                target: r,
                timer: i
            }), $(n).trigger(o, [{
                target: r,
                timer: i
            }])) : n.hideTipCore(r), !1) : void 0
        },
        hideTipCore: function(e) {
            var t, i, o = this,
                n = o.openedFixElements,
                a = $(e).data("tip");
            a.hide(), (t = $.inArray(a, n)) > -1 && n.splice(t, 1), i = $.Event("hidden", {
                target: e
            }), $(o).trigger(i, {
                target: e
            })
        },
        resetTip: function(e, t) {
            var i, o = this,
                n = $(e).data("tip");
            if (n && (t.title || t.content)) {
                var i = o.getTipHTML(t.title, t.content, o.option.className, !0);
                n.getElement().html(i), n.redraw(), $.extend(o.option, {
                    title: t.title,
                    content: t.content
                })
            }
        },
        destroy: function() {
            var e = this;
            e.mousedownCb && $("body").off("mousedown.tip", e.mousedownCb), $(e.option.targets).each(function() {
                e.clearTimer(this, "show"), e.clearTimer(this, "hide"), "hover" == e.option.trigger && (e.mouseenterCb && $(this).off("mouseenter.tip", e.mouseenterCb), e.mouseleaveCb && $(this).off("mouseleave.tip", e.mouseleaveCb)), "click" == e.option.trigger && e.clickCb && $(this).off("click.tip", e.clickCb), $(this).removeData("shown"), e.getFixElement(this) && e.getFixElement(this).destroy()
            })
        }
    }), i.exports = r
}), define("jsmod/ui/pagination", function(e, t, i) {
    var o, n;
    o = e("jsmod/main"), n = {
        currentPage: 0,
        maxShowPage: 10,
        textLabel: ["首页", "上一页", "下一页", "尾页"],
        pageLabel: "{#0}",
        preventInitEvent: !1
    };
    var a = function(e, t) {
            var i = this;
            i.element = $(e), i.option = $.extend({}, n, t), i.generatePage()
        };
    a.Counst = {}, a.Counst.PAGE_TPL = '<div class="mod-page"><% for (var i = 0; i < renderDatas.length; i++) { %><a href="javascript:void(0);" <% if (renderDatas[i].page !== undefined) { %> data-page="<%= renderDatas[i].page %>" <% } %> class="mod-page-item <%= renderDatas[i].className %>"><%= renderDatas[i].label %></a><% } %></div>', "baidu" == o.config && (a.Counst.PAGE_TPL = '<div class="page"><% for (var i = 0; i < renderDatas.length; i++) { %><a href="javascript:void(0);" <% if (renderDatas[i].page !== undefined) { %> data-page="<%= renderDatas[i].page %>" <% } %> class="page-item <%= renderDatas[i].className %>"><%= renderDatas[i].label %></a><% } %></div>'), $.extend(a.prototype, {
        generatePage: function() {
            var e = this,
                t = e.option;
            e.generateEvents(), t.pageCount < t.maxShowPage && (t.maxShowPage = t.pageCount), t.preventInitEvent ? e.setPage(t.currentPage) : setTimeout(function() {
                e.setPage(t.currentPage)
            }, 0)
        },
        setPage: function(e) {
            var t, i, o = this;
            t = o.getHTML(o.getRenderDatas(e)), o.element.html(t), i = $.Event("page", {
                page: o.currentPage
            }), $(o).trigger(i, [{
                page: o.currentPage
            }])
        },
        generateEvents: function() {
            {
                var e = this,
                    t = e.element;
                e.option
            }
            t.delegate("[data-page]", "click.page", function() {
                var t = $(this).data("page");
                return $.isNumeric(t) ? e.setPage(t) : "+" == t ? e.setPage(e.currentPage + 1) : "-" == t && e.setPage(e.currentPage - 1), !1
            })
        },
        destory: function() {
            this.element.undelegate("click.page"), this.element.html("")
        },
        destroy: function() {
            this.destory()
        },
        getHTML: function(e) {
            var t;
            return t = o.template(a.Counst.PAGE_TPL, {
                renderDatas: e
            })
        },
        getRenderDatas: function(e) {
            var t, i, n, a, r = this,
                s = r.option,
                l = [];
            for (e = parseInt(e), e = 0 > e ? 0 : e, e = e > s.pageCount - 1 ? s.pageCount - 1 : e, flag = parseInt(s.maxShowPage / 3), t = 0 > e - flag ? 0 : e - flag, n = 0 > e - flag ? Math.abs(e - flag) : 0, i = e + (s.maxShowPage - flag) - 1 > s.pageCount - 1 ? s.pageCount - 1 : e + (s.maxShowPage - flag) - 1, a = e + (s.maxShowPage - flag) - 1 > s.pageCount - 1 ? Math.abs(e + (s.maxShowPage - flag) - 1 - (s.pageCount - 1)) : 0, t -= a, i += n, 0 != e ? $.each(s.textLabel.slice(0, 2), function(e, t) {
                0 == e && t && l.push({
                    className: "baidu" == o.config ? "page-item-first" : "mod-page-item-first",
                    label: t,
                    page: 0
                }), 1 == e && t && l.push({
                    className: "baidu" == o.config ? "page-item-prev" : "mod-page-item-prev",
                    label: t,
                    page: "-"
                })
            }) : s.showAll && $.each(s.textLabel.slice(0, 2), function(e, t) {
                0 == e && t && l.push({
                    className: "baidu" == o.config ? "page-item-first" : "mod-page-item-first-disable",
                    label: t,
                    page: ""
                }), 1 == e && t && l.push({
                    className: "baidu" == o.config ? "page-item-prev" : "mod-page-item-prev-disable",
                    label: t,
                    page: ""
                })
            }), t; i >= t; t++) l.push({
                className: t == e ? "baidu" == o.config ? "page-item-active" : "mod-page-item-active" : "",
                label: $.isFunction(s.pageLabel) ? s.pageLabel(t) : s.pageLabel.replace(/{#0}/g, t + 1),
                page: t
            });
            return e != s.pageCount - 1 ? $.each(s.textLabel.slice(2, 4), function(e, t) {
                0 == e && t && l.push({
                    className: "baidu" == o.config ? "page-item-next" : "mod-page-item-next",
                    label: t,
                    page: "+"
                }), 1 == e && t && l.push({
                    className: "baidu" == o.config ? "page-item-last" : "mod-page-item-last",
                    label: t,
                    page: s.pageCount - 1
                })
            }) : s.showAll && $.each(s.textLabel.slice(2, 4), function(e, t) {
                0 == e && t && l.push({
                    className: "baidu" == o.config ? "page-item-next" : "mod-page-item-next-disable",
                    label: t,
                    page: ""
                }), 1 == e && t && l.push({
                    className: "baidu" == o.config ? "page-item-last" : "mod-page-item-last-disable",
                    label: t,
                    page: ""
                })
            }), r.currentPage = e, l
        }
    }), i.exports = a
}), function(e) {
    function t(t) {
        var r = t || window.event,
            s = l.call(arguments, 1),
            d = 0,
            c = 0,
            h = 0,
            p = 0;
        if (t = e.event.fix(r), t.type = "mousewheel", "detail" in r && (h = -1 * r.detail), "wheelDelta" in r && (h = r.wheelDelta), "wheelDeltaY" in r && (h = r.wheelDeltaY), "wheelDeltaX" in r && (c = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (c = -1 * h, h = 0), d = 0 === h ? c : h, "deltaY" in r && (h = -1 * r.deltaY, d = h), "deltaX" in r && (c = r.deltaX, 0 === h && (d = -1 * c)), 0 !== h || 0 !== c) {
            if (1 === r.deltaMode) {
                var u = e.data(this, "mousewheel-line-height");
                d *= u, h *= u, c *= u
            } else if (2 === r.deltaMode) {
                var m = e.data(this, "mousewheel-page-height");
                d *= m, h *= m, c *= m
            }
            return p = Math.max(Math.abs(h), Math.abs(c)), (!a || a > p) && (a = p, o(r, p) && (a /= 40)), o(r, p) && (d /= 40, c /= 40, h /= 40), d = Math[d >= 1 ? "floor" : "ceil"](d / a), c = Math[c >= 1 ? "floor" : "ceil"](c / a), h = Math[h >= 1 ? "floor" : "ceil"](h / a), t.deltaX = c, t.deltaY = h, t.deltaFactor = a, t.deltaMode = 0, s.unshift(t, d, c, h), n && clearTimeout(n), n = setTimeout(i, 200), (e.event.dispatch || e.event.handle).apply(this, s)
        }
    }
    function i() {
        a = null
    }
    function o(e, t) {
        return c.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
    }
    var n, a, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        l = Array.prototype.slice;
    if (e.event.fixHooks) for (var d = r.length; d;) e.event.fixHooks[r[--d]] = e.event.mouseHooks;
    var c = e.event.special.mousewheel = {
        version: "3.1.9",
        setup: function() {
            if (this.addEventListener) for (var i = s.length; i;) this.addEventListener(s[--i], t, !1);
            else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", c.getLineHeight(this)), e.data(this, "mousewheel-page-height", c.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener) for (var e = s.length; e;) this.removeEventListener(s[--e], t, !1);
            else this.onmousewheel = null
        },
        getLineHeight: function(t) {
            return parseInt(e(t)["offsetParent" in e.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
        },
        getPageHeight: function(t) {
            return e(t).height()
        },
        settings: {
            adjustOldDeltas: !0
        }
    };
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}(jQuery), define("jsmod/ui/scrollbar", function(e, t, i) {
    var o, n;
    n = e("jsmod/main"), o = {
        offsetRight: 1,
        interval: 50,
        autoHide: !1,
        scrollbarNodeStyle: {
            background: "#666",
            "border-radius": "3px",
            opacity: "0.8",
            width: "3px",
            border: "1px solid #444"
        },
        scrollbarNodeHoverStyle: {
            background: "#333"
        }
    };
    var a = function(e, t) {
            var i = this;
            if (i.$element = $(e), i.option = $.extend({}, o, t), 1 != i.$element.children().length) throw new Error("container must have nur one child");
            i.$child = i.$element.children().eq(0), i.init()
        };
    $.extend(a.prototype, {
        init: function() {
            var e = this,
                t = e.option;
            e.$element.css("overflow", "hidden").css("position", "relative"), e.$child.css("position", "relative").css("top", 0), e.$scrollElement = $(['<div style="cursor: pointer; top: 0; position: absolute; display: none;" class="mod-scrollbar">', '<div style="position: absolute; left: 0;" class="mod-scrollbar-node"></div>', "</div>"].join("")).css("right", t.offsetRight), t.className && e.$scrollElement.adClass(t.className), e.$scrollElement.appendTo(e.$element), e.$scrollNode = e.$scrollElement.find(".mod-scrollbar-node").css(t.scrollbarNodeStyle), e.$scrollElement.width(e.$scrollNode.outerWidth(!0)), e.resetBar(), e.bindEvent(), e.intervalTimer = setInterval(function() {
                (e.childHeight != e.$child.outerHeight(!0) || e.height != e.$element.height()) && e.resetBar()
            }, 500)
        },
        resetBar: function(e) {
            var t, i, o, n, a = this;
            a.childHeight = t = a.$child.outerHeight(!0), a.innerHeight = i = a.$element.innerHeight(), a.height = o = a.$element.height(), t > o ? (a.$scrollElement.fadeIn("fast"), e || (a.nodeHeight = o / t * i - (a.$scrollNode.outerHeight(!0) - a.$scrollNode.height()), a.$scrollNode.height() ? a.$scrollNode.animate({
                height: a.nodeHeight
            }, "fast", function() {
                a.nodeOuterHeight = a.$scrollNode.outerHeight(!0)
            }) : a.$scrollNode.height(a.nodeHeight), a.nodeOuterHeight = a.nodeHeight, n = parseInt(a.$child.css("top").replace("px", "")), Math.abs(n) + a.height > a.childHeight && (n = -a.childHeight + a.height, a.$child.css("top", n)), a.$scrollElement.animate({
                top: Math.abs(n) / a.childHeight * a.innerHeight
            }, "fast"))) : (a.$child.css("top", "0px"), a.$scrollElement.css("top", "0px").fadeOut(300))
        },
        scroll: function(e, t) {
            var i, o = this;
            t = void 0 === t ? !0 : t, "top" == e || "bottom" == e ? i = "top" == e ? 0 : o.childHeight - o.height : $.isNumeric(e) ? i = parseInt(e) : $(e).length > 0 && $.contains(o.$child.get(0), $(e).get(0)) && (i = o.getTop($(e))), void 0 !== i && (i = i + o.height > o.childHeight ? o.childHeight - o.height : i, t ? (o.$child.animate({
                top: -i
            }, "fast"), o.$scrollElement.animate({
                top: Math.abs(i) / o.childHeight * o.innerHeight
            }, "fast")) : (o.$child.css("top", -i), o.$scrollElement.css("top", Math.abs(i) / o.childHeight * o.innerHeight)))
        },
        getTop: function(e) {
            var t, i = this;
            return t = function(e) {
                return e.offsetParent().get(0) != i.$child.get(0) ? e.position().top + t(e.offsetParent()) : e.position().top
            }, t(e) + parseInt(i.$element.css("paddingTop").replace("px", ""))
        },
        bindEvent: function() {
            var e, t = this;
            t.seed = e = +new Date, t.$element.on("mousewheel.scrollbar", function(e, i) {
                var o, n = parseInt(t.$child.css("top").replace("px", ""));
                "none" != t.$scrollElement.css("display") && (o = i > 0 ? n + t.option.interval > 0 ? 0 : n + t.option.interval : n - t.option.interval < -t.childHeight + t.height ? -t.childHeight + t.height : n - t.option.interval, t.scroll(Math.abs(o), !1), e.preventDefault())
            }), t.$scrollElement.on("mouseenter.scrollbar", function() {
                t.$scrollNode.css(t.option.scrollbarNodeHoverStyle)
            }), t.$scrollElement.on("mouseleave.scrollbar", function() {
                !t.$scrollElement.data("dragging") && t.$scrollNode.css(t.option.scrollbarNodeStyle)
            }), $(document).on("mousemove.scrollbar." + e, function(e) {
                var i, o, n;
                if (t.$scrollElement.data("dragging")) {
                    var o, i, a = t.$element.offset().top + parseInt(t.$element.css("borderTopWidth").replace("px", "")),
                        r = a + t.$element.innerHeight();
                    o = e.pageY - t.$scrollElement.data("startY"), i = a >= o ? 0 : o + t.nodeOuterHeight >= r ? t.innerHeight - t.nodeOuterHeight : o - a, n = -(i * t.childHeight / t.innerHeight), t.$child.css("top", n), t.$scrollElement.css("top", i), e.preventDefault()
                }
            }), t.$scrollElement.on("mousedown.scrollbar", function(e) {
                t.$scrollElement.data("dragging") || t.$scrollElement.data("startY", e.offsetY || e.originalEvent.layerY).data("dragging", !0), e.preventDefault()
            }), $(document).on("mouseup.scrollbar." + e, function(e) {
                t.$scrollElement.data("dragging") && (t.$scrollElement.data("dragging", !1), t.$scrollElement.trigger("mouseleave")), e.preventDefault()
            }), t.option.autoHide && (t.$element.on("mouseenter.scrollbar", function() {
                t.hideTimer && clearTimeout(t.hideTimer), t.resetBar(!0)
            }), t.$element.on("mouseleave.scrollbar", function() {
                t.hideTimer && clearTimeout(t.hideTimer), t.hideTimer = setTimeout(function() {
                    t.$scrollElement.fadeOut("fast")
                }, 1e3)
            }))
        },
        destroy: function() {
            var e = this;
            clearInterval(e.intervalTimer), e.hideTimer && clearTimeout(e.hideTimer), $(document).off("mouseup.scrollbar." + e.seed), $(document).off("mousemove.scrollbar." + e.seed), e.$element.off("mouseenter.scrollbar"), e.$element.off("mouseleave.scrollbar"), e.$element.off("mousewheel.scrollbar"), e.$scrollElement.remove()
        }
    }), i.exports = a
}), define("jsmod/ui/tab", function(e, t, i) {
    var o, n, a;
    o = e("jsmod/main"), n = {
        trigger: "click",
        preventInitEvent: !1,
        delay: 200
    }, a = "baidu" == o.config ? {
        tabItem: "tab-item",
        tabItemActive: "tab-item-active"
    } : {
        tabItem: "mod-tab-item",
        tabItemActive: "mod-tab-item-active"
    };
    var r = function(e, t) {
            var i = this;
            i.element = $(e), i.option = $.extend({}, n, t), i.init()
        };
    $.extend(r.prototype, {
        init: function() {
            var e, t = this,
                i = t.element;
            t.option.className && i.addClass(t.option.className), t.tabs = i.find("." + a.tabItem), e = 1 == t.tabs.filter("." + a.tabItemActive).length ? t.tabs.filter("." + a.tabItemActive) : t.tabs.first(), t.generateEvents(), t.option.preventInitEvent ? t.active(e) : setTimeout(function() {
                t.active(e)
            })
        },
        active: function(e) {
            var t, i, o, n = this;
            n.activedTab && $(n.activedTab).get(0) == $(e).get(0) && (i = !0), n.clearTabs(), $(e).data("target") && (t = $($(e).data("target")).show()), n.activedTab && $(n.activedTab).removeClass(a.tabItemActive), n.activedTab = $(e).addClass(a.tabItemActive), o = $.Event("tab", {
                tab: n.activedTab,
                same: i
            }), $(n).trigger(o, [{
                tab: n.activedTab,
                same: i
            }])
        },
        clearTabs: function() {
            var e = this.tabs;
            this.activedTab && $(this.activedTab).removeClass(a.tabItemActive), this.activedTab = null, e.each(function() {
                var e;
                (e = $(this).data("target")) && $(e).hide()
            })
        },
        generateEvents: function() {
            var e = this,
                t = e.element,
                i = "hover" == e.option.trigger ? "mouseenter" : "click";
            "mouseenter" == i && e.option.delay ? (t.delegate("." + a.tabItem, "mouseenter.tab", function() {
                var t = this;
                e.clearShowTimer(), e.showTimer = setTimeout(function() {
                    e.active(t)
                }, e.option.delay)
            }), t.delegate("." + a.tabItem, "mouseleave.tab", function() {
                e.clearShowTimer()
            })) : t.delegate("." + a.tabItem, i + ".tab", function() {
                return e.active(this), !1
            })
        },
        clearShowTimer: function() {
            this.showTimer && clearTimeout(this.showTimer)
        },
        destroy: function() {
            var e = this,
                t = e.element,
                i = "hover" == e.option.trigger ? "mouseenter" : "click";
            "mouseenter" == i && e.option.delay ? (t.undelegate("." + a.tabItem, "mouseenter.tab"), t.undelegate("." + a.tabItem, "mouseleave.tab")) : t.undelegate("." + a.tabItem, i + ".tab"), e.clearShowTimer(), e.element = null
        }
    }), i.exports = r
}), define("jsmod/ui/treeView", function(e, t, i) {
    var o = {
        isToggleElement: !0
    },
        n = function(e, t) {
            var i = this;
            i.option = $.extend({}, o, t), i.datas = $.isArray(e) ? e : [e], i.content = $(i.option.content), i.render(), i.delegateEvents()
        };
    $.extend(n.prototype, {
        render: function() {
            var e, t, i = this;
            e = function(t, o) {
                var n, a;
                return n = $('<li class="treeview-node"></li>').html(i.option.getText ? i.option.getText(o) : o.text), t.append(n), o.children && 0 != o.children.length ? (a = $('<ul style="display:none;" class="treeview-list-fahter"></ul>').appendTo(n), n.addClass("treeview-node-father"), i.option.isToggleElement && n.prepend('<span class="treeview-toggle">'), o.expanded && i.expand(n), void $.each(o.children, function() {
                    e(a, this)
                })) : void n.addClass("treevie-leaf")
            }, t = $('<ul class="treeview-list-root"></ul>').appendTo(i.content), $.each(i.datas, function() {
                e(t, this)
            })
        },
        expand: function(e, t) {
            var i = this,
                o = t ? "fast" : 0;
            e.hasClass("treeview-node-father") && (e.children(".treeview-list-fahter").slideDown(o), e.addClass("treeview-node-father-expanded"), e.children(".treeview-toggle").addClass("treeview-toggle-expanded"), $(i).trigger("expanded", [{
                node: e
            }]))
        },
        contract: function(e, t) {
            var i = this,
                o = t ? "fast" : 0;
            e.hasClass("treeview-node-father-expanded") && (e.children(".treeview-list-fahter").slideUp(o), e.removeClass("treeview-node-father-expanded"), e.children(".treeview-toggle-expanded").removeClass("treeview-toggle-expanded"), $(i).trigger("contracted", [{
                node: e
            }]))
        },
        delegateEvents: function() {
            var e = this;
            e.content.delegate(".treeview-node", "click", function(t) {
                var i = $(this);
                return e.option.isToggleElement && !$(t.target).hasClass("treeview-toggle") ? void t.stopPropagation() : (i.hasClass("treeview-node-father") && (i.hasClass("treeview-node-father-expanded") ? e.contract(i, !0) : e.expand(i, !0)), void t.stopPropagation())
            })
        }
    }), i.exports = n
});;
(function() {
    var n = this,
        t = n._,
        r = {},
        e = Array.prototype,
        u = Object.prototype,
        i = Function.prototype,
        a = e.push,
        o = e.slice,
        c = e.concat,
        l = (e.unshift, u.toString),
        f = u.hasOwnProperty,
        s = e.forEach,
        p = e.map,
        h = e.reduce,
        v = e.reduceRight,
        g = e.filter,
        m = e.every,
        d = e.some,
        y = e.indexOf,
        b = e.lastIndexOf,
        x = Array.isArray,
        _ = Object.keys,
        j = i.bind,
        w = function(n) {
            return n instanceof w ? n : this instanceof w ? void(this._wrapped = n) : new w(n)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = w), exports._ = w) : n._ = w, w.VERSION = "1.4.2";
    var O = w.each = w.forEach = function(n, t, e) {
            if (null != n) if (s && n.forEach === s) n.forEach(t, e);
            else if (n.length === +n.length) {
                for (var u = 0, i = n.length; i > u; u++) if (t.call(e, n[u], u, n) === r) return
            } else for (var a in n) if (w.has(n, a) && t.call(e, n[a], a, n) === r) return
        };
    w.map = w.collect = function(n, t, r) {
        var e = [];
        return null == n ? e : p && n.map === p ? n.map(t, r) : (O(n, function(n, u, i) {
            e[e.length] = t.call(r, n, u, i)
        }), e)
    }, w.reduce = w.foldl = w.inject = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), h && n.reduce === h) return e && (t = w.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
        if (O(n, function(n, i, a) {
            u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
        }), !u) throw new TypeError("Reduce of empty array with no initial value");
        return r
    }, w.reduceRight = w.foldr = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), v && n.reduceRight === v) return e && (t = w.bind(t, e)), arguments.length > 2 ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = n.length;
        if (i !== +i) {
            var a = w.keys(n);
            i = a.length
        }
        if (O(n, function(o, c, l) {
            c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0)
        }), !u) throw new TypeError("Reduce of empty array with no initial value");
        return r
    }, w.find = w.detect = function(n, t, r) {
        var e;
        return E(n, function(n, u, i) {
            return t.call(r, n, u, i) ? (e = n, !0) : void 0
        }), e
    }, w.filter = w.select = function(n, t, r) {
        var e = [];
        return null == n ? e : g && n.filter === g ? n.filter(t, r) : (O(n, function(n, u, i) {
            t.call(r, n, u, i) && (e[e.length] = n)
        }), e)
    }, w.reject = function(n, t, r) {
        var e = [];
        return null == n ? e : (O(n, function(n, u, i) {
            t.call(r, n, u, i) || (e[e.length] = n)
        }), e)
    }, w.every = w.all = function(n, t, e) {
        t || (t = w.identity);
        var u = !0;
        return null == n ? u : m && n.every === m ? n.every(t, e) : (O(n, function(n, i, a) {
            return (u = u && t.call(e, n, i, a)) ? void 0 : r
        }), !! u)
    };
    var E = w.some = w.any = function(n, t, e) {
            t || (t = w.identity);
            var u = !1;
            return null == n ? u : d && n.some === d ? n.some(t, e) : (O(n, function(n, i, a) {
                return u || (u = t.call(e, n, i, a)) ? r : void 0
            }), !! u)
        };
    w.contains = w.include = function(n, t) {
        var r = !1;
        return null == n ? r : y && n.indexOf === y ? -1 != n.indexOf(t) : r = E(n, function(n) {
            return n === t
        })
    }, w.invoke = function(n, t) {
        var r = o.call(arguments, 2);
        return w.map(n, function(n) {
            return (w.isFunction(t) ? t : n[t]).apply(n, r)
        })
    }, w.pluck = function(n, t) {
        return w.map(n, function(n) {
            return n[t]
        })
    }, w.where = function(n, t) {
        return w.isEmpty(t) ? [] : w.filter(n, function(n) {
            for (var r in t) if (t[r] !== n[r]) return !1;
            return !0
        })
    }, w.max = function(n, t, r) {
        if (!t && w.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.max.apply(Math, n);
        if (!t && w.isEmpty(n)) return -1 / 0;
        var e = {
            computed: -1 / 0
        };
        return O(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a >= e.computed && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, w.min = function(n, t, r) {
        if (!t && w.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.min.apply(Math, n);
        if (!t && w.isEmpty(n)) return 1 / 0;
        var e = {
            computed: 1 / 0
        };
        return O(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a < e.computed && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, w.shuffle = function(n) {
        var t, r = 0,
            e = [];
        return O(n, function(n) {
            t = w.random(r++), e[r - 1] = e[t], e[t] = n
        }), e
    };
    var A = function(n) {
            return w.isFunction(n) ? n : function(t) {
                return t[n]
            }
        };
    w.sortBy = function(n, t, r) {
        var e = A(t);
        return w.pluck(w.map(n, function(n, t, u) {
            return {
                value: n,
                index: t,
                criteria: e.call(r, n, t, u)
            }
        }).sort(function(n, t) {
            var r = n.criteria,
                e = t.criteria;
            if (r !== e) {
                if (r > e || void 0 === r) return 1;
                if (e > r || void 0 === e) return -1
            }
            return n.index < t.index ? -1 : 1
        }), "value")
    };
    var k = function(n, t, r, e) {
            var u = {},
                i = A(t);
            return O(n, function(t, a) {
                var o = i.call(r, t, a, n);
                e(u, o, t)
            }), u
        };
    w.groupBy = function(n, t, r) {
        return k(n, t, r, function(n, t, r) {
            (w.has(n, t) ? n[t] : n[t] = []).push(r)
        })
    }, w.countBy = function(n, t, r) {
        return k(n, t, r, function(n, t) {
            w.has(n, t) || (n[t] = 0), n[t]++
        })
    }, w.sortedIndex = function(n, t, r, e) {
        r = null == r ? w.identity : A(r);
        for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
            var o = i + a >>> 1;
            r.call(e, n[o]) < u ? i = o + 1 : a = o
        }
        return i
    }, w.toArray = function(n) {
        return n ? n.length === +n.length ? o.call(n) : w.values(n) : []
    }, w.size = function(n) {
        return n.length === +n.length ? n.length : w.keys(n).length
    }, w.first = w.head = w.take = function(n, t, r) {
        return null == t || r ? n[0] : o.call(n, 0, t)
    }, w.initial = function(n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t))
    }, w.last = function(n, t, r) {
        return null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
    }, w.rest = w.tail = w.drop = function(n, t, r) {
        return o.call(n, null == t || r ? 1 : t)
    }, w.compact = function(n) {
        return w.filter(n, function(n) {
            return !!n
        })
    };
    var F = function(n, t, r) {
            return O(n, function(n) {
                w.isArray(n) ? t ? a.apply(r, n) : F(n, t, r) : r.push(n)
            }), r
        };
    w.flatten = function(n, t) {
        return F(n, t, [])
    }, w.without = function(n) {
        return w.difference(n, o.call(arguments, 1))
    }, w.uniq = w.unique = function(n, t, r, e) {
        var u = r ? w.map(n, r, e) : n,
            i = [],
            a = [];
        return O(u, function(r, e) {
            (t ? e && a[a.length - 1] === r : w.contains(a, r)) || (a.push(r), i.push(n[e]))
        }), i
    }, w.union = function() {
        return w.uniq(c.apply(e, arguments))
    }, w.intersection = function(n) {
        var t = o.call(arguments, 1);
        return w.filter(w.uniq(n), function(n) {
            return w.every(t, function(t) {
                return w.indexOf(t, n) >= 0
            })
        })
    }, w.difference = function(n) {
        var t = c.apply(e, o.call(arguments, 1));
        return w.filter(n, function(n) {
            return !w.contains(t, n)
        })
    }, w.zip = function() {
        for (var n = o.call(arguments), t = w.max(w.pluck(n, "length")), r = new Array(t), e = 0; t > e; e++) r[e] = w.pluck(n, "" + e);
        return r
    }, w.object = function(n, t) {
        for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }, w.indexOf = function(n, t, r) {
        if (null == n) return -1;
        var e = 0,
            u = n.length;
        if (r) {
            if ("number" != typeof r) return e = w.sortedIndex(n, t), n[e] === t ? e : -1;
            e = 0 > r ? Math.max(0, u + r) : r
        }
        if (y && n.indexOf === y) return n.indexOf(t, r);
        for (; u > e; e++) if (n[e] === t) return e;
        return -1
    }, w.lastIndexOf = function(n, t, r) {
        if (null == n) return -1;
        var e = null != r;
        if (b && n.lastIndexOf === b) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for (var u = e ? r : n.length; u--;) if (n[u] === t) return u;
        return -1
    }, w.range = function(n, t, r) {
        arguments.length <= 1 && (t = n || 0, n = 0), r = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u;) i[u++] = n, n += r;
        return i
    };
    var R = function() {};
    w.bind = function(n, t) {
        var r, e;
        if (n.bind === j && j) return j.apply(n, o.call(arguments, 1));
        if (!w.isFunction(n)) throw new TypeError;
        return e = o.call(arguments, 2), r = function() {
            if (!(this instanceof r)) return n.apply(t, e.concat(o.call(arguments)));
            R.prototype = n.prototype;
            var u = new R,
                i = n.apply(u, e.concat(o.call(arguments)));
            return Object(i) === i ? i : u
        }
    }, w.bindAll = function(n) {
        var t = o.call(arguments, 1);
        return 0 == t.length && (t = w.functions(n)), O(t, function(t) {
            n[t] = w.bind(n[t], n)
        }), n
    }, w.memoize = function(n, t) {
        var r = {};
        return t || (t = w.identity), function() {
            var e = t.apply(this, arguments);
            return w.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
        }
    }, w.delay = function(n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, t)
    }, w.defer = function(n) {
        return w.delay.apply(w, [n, 1].concat(o.call(arguments, 1)))
    }, w.throttle = function(n, t) {
        var r, e, u, i, a, o, c = w.debounce(function() {
            a = i = !1
        }, t);
        return function() {
            r = this, e = arguments;
            var l = function() {
                    u = null, a && (o = n.apply(r, e)), c()
                };
            return u || (u = setTimeout(l, t)), i ? a = !0 : (i = !0, o = n.apply(r, e)), c(), o
        }
    }, w.debounce = function(n, t, r) {
        var e, u;
        return function() {
            var i = this,
                a = arguments,
                o = function() {
                    e = null, r || (u = n.apply(i, a))
                },
                c = r && !e;
            return clearTimeout(e), e = setTimeout(o, t), c && (u = n.apply(i, a)), u
        }
    }, w.once = function(n) {
        var t, r = !1;
        return function() {
            return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t)
        }
    }, w.wrap = function(n, t) {
        return function() {
            var r = [n];
            return a.apply(r, arguments), t.apply(this, r)
        }
    }, w.compose = function() {
        var n = arguments;
        return function() {
            for (var t = arguments, r = n.length - 1; r >= 0; r--) t = [n[r].apply(this, t)];
            return t[0]
        }
    }, w.after = function(n, t) {
        return 0 >= n ? t() : function() {
            return --n < 1 ? t.apply(this, arguments) : void 0
        }
    }, w.keys = _ ||
    function(n) {
        if (n !== Object(n)) throw new TypeError("Invalid object");
        var t = [];
        for (var r in n) w.has(n, r) && (t[t.length] = r);
        return t
    }, w.values = function(n) {
        var t = [];
        for (var r in n) w.has(n, r) && t.push(n[r]);
        return t
    }, w.pairs = function(n) {
        var t = [];
        for (var r in n) w.has(n, r) && t.push([r, n[r]]);
        return t
    }, w.invert = function(n) {
        var t = {};
        for (var r in n) w.has(n, r) && (t[n[r]] = r);
        return t
    }, w.functions = w.methods = function(n) {
        var t = [];
        for (var r in n) w.isFunction(n[r]) && t.push(r);
        return t.sort()
    }, w.extend = function(n) {
        return O(o.call(arguments, 1), function(t) {
            for (var r in t) n[r] = t[r]
        }), n
    }, w.pick = function(n) {
        var t = {},
            r = c.apply(e, o.call(arguments, 1));
        return O(r, function(r) {
            r in n && (t[r] = n[r])
        }), t
    }, w.omit = function(n) {
        var t = {},
            r = c.apply(e, o.call(arguments, 1));
        for (var u in n) w.contains(r, u) || (t[u] = n[u]);
        return t
    }, w.defaults = function(n) {
        return O(o.call(arguments, 1), function(t) {
            for (var r in t) null == n[r] && (n[r] = t[r])
        }), n
    }, w.clone = function(n) {
        return w.isObject(n) ? w.isArray(n) ? n.slice() : w.extend({}, n) : n
    }, w.tap = function(n, t) {
        return t(n), n
    };
    var S = function(n, t, r, e) {
            if (n === t) return 0 !== n || 1 / n == 1 / t;
            if (null == n || null == t) return n === t;
            n instanceof w && (n = n._wrapped), t instanceof w && (t = t._wrapped);
            var u = l.call(n);
            if (u != l.call(t)) return !1;
            switch (u) {
            case "[object String]":
                return n == String(t);
            case "[object Number]":
                return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +n == +t;
            case "[object RegExp]":
                return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
            }
            if ("object" != typeof n || "object" != typeof t) return !1;
            for (var i = r.length; i--;) if (r[i] == n) return e[i] == t;
            r.push(n), e.push(t);
            var a = 0,
                o = !0;
            if ("[object Array]" == u) {
                if (a = n.length, o = a == t.length) for (; a-- && (o = S(n[a], t[a], r, e)););
            } else {
                var c = n.constructor,
                    f = t.constructor;
                if (c !== f && !(w.isFunction(c) && c instanceof c && w.isFunction(f) && f instanceof f)) return !1;
                for (var s in n) if (w.has(n, s) && (a++, !(o = w.has(t, s) && S(n[s], t[s], r, e)))) break;
                if (o) {
                    for (s in t) if (w.has(t, s) && !a--) break;
                    o = !a
                }
            }
            return r.pop(), e.pop(), o
        };
    w.isEqual = function(n, t) {
        return S(n, t, [], [])
    }, w.isEmpty = function(n) {
        if (null == n) return !0;
        if (w.isArray(n) || w.isString(n)) return 0 === n.length;
        for (var t in n) if (w.has(n, t)) return !1;
        return !0
    }, w.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }, w.isArray = x ||
    function(n) {
        return "[object Array]" == l.call(n)
    }, w.isObject = function(n) {
        return n === Object(n)
    }, O(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
        w["is" + n] = function(t) {
            return l.call(t) == "[object " + n + "]"
        }
    }), w.isArguments(arguments) || (w.isArguments = function(n) {
        return !(!n || !w.has(n, "callee"))
    }), "function" != typeof / . / && (w.isFunction = function(n) {
        return "function" == typeof n
    }), w.isFinite = function(n) {
        return w.isNumber(n) && isFinite(n)
    }, w.isNaN = function(n) {
        return w.isNumber(n) && n != +n
    }, w.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" == l.call(n)
    }, w.isNull = function(n) {
        return null === n
    }, w.isUndefined = function(n) {
        return void 0 === n
    }, w.has = function(n, t) {
        return f.call(n, t)
    }, w.noConflict = function() {
        return n._ = t, this
    }, w.identity = function(n) {
        return n
    }, w.times = function(n, t, r) {
        for (var e = 0; n > e; e++) t.call(r, e)
    }, w.random = function(n, t) {
        return null == t && (t = n, n = 0), n + (0 | Math.random() * (t - n + 1))
    };
    var I = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    I.unescape = w.invert(I.escape);
    var M = {
        escape: new RegExp("[" + w.keys(I.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + w.keys(I.unescape).join("|") + ")", "g")
    };
    w.each(["escape", "unescape"], function(n) {
        w[n] = function(t) {
            return null == t ? "" : ("" + t).replace(M[n], function(t) {
                return I[n][t]
            })
        }
    }), w.result = function(n, t) {
        if (null == n) return null;
        var r = n[t];
        return w.isFunction(r) ? r.call(n) : r
    }, w.mixin = function(n) {
        O(w.functions(n), function(t) {
            var r = w[t] = n[t];
            w.prototype[t] = function() {
                var n = [this._wrapped];
                return a.apply(n, arguments), z.call(this, r.apply(w, n))
            }
        })
    };
    var T = 0;
    w.uniqueId = function(n) {
        var t = T++;
        return n ? n + t : t
    }, w.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var N = /(.)^/,
        q = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "   ": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        B = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    w.template = function(n, t, r) {
        r = w.defaults({}, r, w.templateSettings);
        var e = new RegExp([(r.escape || N).source, (r.interpolate || N).source, (r.evaluate || N).source].join("|") + "|$", "g"),
            u = 0,
            i = "__p+='";
        n.replace(e, function(t, r, e, a, o) {
            i += n.slice(u, o).replace(B, function(n) {
                return "\\" + q[n]
            }), i += r ? "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : a ? "';\n" + a + "\n__p+='" : "", u = o + t.length
        }), i += "';\n", r.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var a = new Function(r.variable || "obj", "_", i)
        } catch (o) {
            throw o.source = i, o
        }
        if (t) return a(t, w);
        var c = function(n) {
                return a.call(this, n, w)
            };
        return c.source = "function(" + (r.variable || "obj") + "){\n" + i + "}", c
    }, w.chain = function(n) {
        return w(n).chain()
    };
    var z = function(n) {
            return this._chain ? w(n).chain() : n
        };
    w.mixin(w), O(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = e[n];
        w.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], z.call(this, r)
        }
    }), O(["concat", "join", "slice"], function(n) {
        var t = e[n];
        w.prototype[n] = function() {
            return z.call(this, t.apply(this._wrapped, arguments))
        }
    }), w.extend(w.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}).call(this);;
define("wcommon:static/util.js", function(e, t, n) {
    var i = {
        cutString: function(e) {
            var t = {
                $elem: "",
                len: 10
            },
                n = $.extend(t, e);
            n.$elem.each(function() {
                var e, t, i = $(this),
                    s = i.html(),
                    a = s.replace(/[^\x00-\xff]/g, "**").length,
                    r = 2,
                    o = n.len;
                if (a > o) {
                    for (e = 0; e < s.length;) {
                        var c = s.charAt(e),
                            l = c.replace(/[^\x00-\xff]/g, "**").length;
                        if (r += l, !(o >= r)) {
                            t = s.slice(0, e), t += "...";
                            break
                        }
                        e++
                    }
                    i.html(t)
                }
            })
        },
        format: function(e, t) {
            return e.replace(/\{(\w+)\}/g, function(e, n) {
                return "undefined" == typeof t[n] || null == t[n] ? "" : t[n]
            })
        },
        getNoPicUrl: function() {
            return "https://static.waimai.baidu.com/static/wcommon/images/nopic_96d29d1.gif"
        },
        stretchImg: function(e, t, n, s, a) {
            var r = new Image;
            e.onerror = function() {
                this.src = i.getNoPicUrl(), this.style.display = ""
            }, r.onload = function() {
                var i, r, o, c, l = this.width,
                    d = this.height,
                    h = Math.max(t / l, n / d);
                a && (h = Math.min(t / l, n / d)), i = parseInt(h * l, 10) || t, r = parseInt(h * d, 10) || n, e.style.width = i + "px", e.style.height = r + "px", c = parseInt((n - r) / 2, 10), o = parseInt((t - i) / 2, 10), s && $(e).css({
                    "margin-top": c,
                    "margin-left": o
                }), e.style.display = ""
            }, r.src = e.src
        },
        reloadImg: function(e) {
            function t(e) {
                i.css("visibility", "visible").show().attr("src", e)
            }
            var n = this,
                i = e.find("img");
            i = i[0] ? i : e, i.css("visibility", "hidden").hide();
            var s = i.attr("src"),
                a = new Image;
            a.onload = function() {
                t(s)
            }, a.onerror = function() {
                t(n.getNoPicUrl())
            }, a.src = s
        },
        errorImg: function(e) {
            e.src = i.getNoPicUrl()
        },
        getPartnerslink: function(e, t, n) {
            return e && t && n ? t + "&" + $.param($.extend({}, n, {
                from: "inf",
                fun: e
            })) : t || ""
        },
        parseGeo: function(e) {
            if ("string" == typeof e) {
                var t = e.split("|"),
                    n = parseInt(t[0]),
                    i = t[1],
                    s = t[2],
                    a = s.split(";"),
                    r = [];
                switch (n) {
                case 1:
                    r.push(a[0]);
                    break;
                case 2:
                case 3:
                    for (var o = 0; o < a.length - 1; o++) {
                        var c = a[o];
                        if (c.length > 100) c = c.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;"), r.push(c);
                        else {
                            for (var l = [], d = c.split(","), h = 0; h < d.length; h += 2) {
                                var u = d[h],
                                    g = d[h + 1];
                                l.push(u + "," + g)
                            }
                            r.push(l.join(";"))
                        }
                    }
                }
                return r.length <= 1 && (r = r.toString()), {
                    type: n,
                    bound: i,
                    points: r
                }
            }
        },
        getPointByStr: function(e, t) {
            if ("string" == typeof e) {
                var n = e.split(",");
                if (!(n.length < 2)) {
                    var i = new BMap.Pixel(n[0], n[1]),
                        t = t || window.map;
                    return t.getMapType().getProjection().pointToLngLat(i)
                }
            }
        },
        loadJs: function(e, t) {
            var n = document.getElementsByTagName("head")[0],
                i = document.createElement("script");
            i.type = "text/javascript", i.src = e, i.onload = i.onreadystatechange = function() {
                i.onload = i.onreadystatechange = null, t()
            }, n.appendChild(i)
        },
        loadCss: function(e, t) {
            var n = document.getElementsByTagName("head")[0],
                i = document.createElement("link"),
                t = t ||
            function() {};
            i.type = "text/css", i.href = e, i.rel = "stylesheet", n.appendChild(i), "sheet" in i ? (sheet = "sheet", cssRules = "cssRules") : (sheet = "styleSheet", cssRules = "rules");
            var s = setInterval(function() {
                try {
                    i[sheet] && i[sheet][cssRules].length && (clearInterval(s), clearTimeout(a), t())
                } catch (e) {} finally {}
            }, 20),
                a = setTimeout(function() {
                    clearInterval(s), clearTimeout(a), t()
                }, 1e3)
        },
        dateFormat: function(e, t) {
            var n = e,
                i = {
                    "M+": n.getMonth() + 1,
                    "d+": n.getDate(),
                    "h+": n.getHours(),
                    "m+": n.getMinutes(),
                    "s+": n.getSeconds(),
                    "q+": Math.floor((n.getMonth() + 3) / 3),
                    S: n.getMilliseconds()
                };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var s in i) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[s] : ("00" + i[s]).substr(("" + i[s]).length)));
            return t
        },
        jstime: function(e) {
            e ? (this.__start && (this.__time = this.__time || [], this.__time.push(e + ":" + ((new Date).getTime() - this.__start) + "ms")), this.__start = (new Date).getTime()) : alert(this.__time.join("\n"))
        },
        getStrLength: function(e) {
            var t = e.match(/[^\x00-\xff]/gi);
            return e.length + (null == t ? 0 : t.length)
        },
        SubString: function(e, t) {
            var n = /[^\x00-\xff]/g;
            if (e.replace(n, "mm").length <= t) return e;
            for (var i = Math.floor(t / 2), s = i; s < e.length; s++) if (e.substr(0, s).replace(n, "mm").length >= t) return e.substr(0, s);
            return e
        },
        scrollController: function(e, t) {
            var n = $(e)[0].getBoundingClientRect().bottom - Math.min(document.documentElement.clientHeight, document.body.clientHeight),
                i = document.body.scrollTop,
                s = document.documentElement.scrollTop,
                a = 0,
                r = (new Date).getTime(),
                o = 1,
                c = setInterval(function() {
                    var e = (new Date).getTime(),
                        l = Math.min(1, (e - r) / t),
                        d = a + (n - a) * l;
                    document.body.scrollTop = i + d, document.documentElement.scrollTop = s + d, l >= o && (clearInterval(c), document.body.scrollTop = i + n, document.documentElement.scrollTop = s + n)
                }, 15)
        },
        bdshare: function(e, t, n, s) {
            var a = [];
            if (a.push('<span class="bds_more">分享到：</span>'), a.push('<a title="分享到新浪微博" class="bds_tsina" href="#"></a>'), a.push('<a title="分享到QQ空间" class="bds_qzone" href="#"></a>'), a.push('<a title="分享到腾讯微博" class="bds_tqq" href="#"></a>'), a.push('<a title="分享到人人网" class="bds_renren" href="#"></a>'), a.push('<a title="分享到百度空间" href="#" class="bds_hi bdkj"></a>'), a.push('<span class="bds_more">更多</span>'), $("#bdshare").html(a.join("")).addClass("bdshare_t bds_tools get-codes-bdshare hide").attr("data", "{url:'" + e + "'}"), window.bds_config = window.bds_config || {}, window.bds_config.bdText = t, window.bds_config.bdDesc = s ? s : "", window.bds_config.bdPic = n ? n : "http://map.baidu.com/image/newlogo.png", window.bdShare) window.bdShare.fn.init(), $("#bdshare").removeClass("hide");
            else {
                $("#bdshare").append('<script id="bdshare_js" data="type=tools&amp;uid=797188"></script><script id="bdshell_js"></script>');
                var r = function() {
                        setTimeout(function() {
                            window.bdShare && (window.bdShare.fn.init(), $("#bdshare").removeClass("hide"))
                        }, 50)
                    };
                i.loadCss("http://bdimg.share.baidu.com/static/css/bdsstyle.css?cdnversion=" + Math.ceil(new Date / 36e5)), i.loadJs("http://bdimg.share.baidu.com/static/js/logger.js?cdnversion=" + Math.ceil(new Date / 36e5), r), i.loadJs("http://bdimg.share.baidu.com/static/js/bds_s_v2.js?cdnversion=" + Math.ceil(new Date / 36e5), r)
            }
        },
        getNearData: function(e, t, n, i) {
            var s = "/detail?qt=recommend",
                a = [];
            return t ? void $.ajax({
                url: s,
                data: {
                    uid: t || 0,
                    c: i || 0,
                    detail: n || ""
                },
                type: "GET",
                dataType: "json",
                success: function(t) {
                    a = t.data, e(t)
                },
                error: function() {
                    e(a)
                }
            }) : !1
        },
        getParams: function(e) {
            var t, n, i, s = {};
            if (e = e || window.location.href, -1 == e.indexOf("?")) return s;
            for (n = e.slice(e.indexOf("?") + 1).split("&"), i = 0; i < n.length; i++) n[i] && -1 != n[i].indexOf("=") && (t = n[i].split("="), s[t[0]] = -1 != t[1].indexOf("#") ? t[1].slice(0, t[1].indexOf("#")) : t[1]);
            return s
        },
        getParam: function(e, t) {
            return this.getParams(t)[e]
        },
        now: function() {
            return (new Date).getTime()
        },
        getRandomCDN: function() {
            return "http://webmap" + Math.floor(3 * Math.random()) + ".map.bdimg.com"
        },
        thumbnails: function(e) {
            var t, n;
            return e = $.extend({
                width: 100,
                height: 100,
                align: "center,center",
                quality: 80,
                cdn: !0
            }, e), t = e.cdn, delete e.cdn, n = "/maps/services/thumbnails?" + $.param(e), t ? this.getRandomCDN() + n : n
        },
        encodeHTML: function(e) {
            return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
        },
        getQuery: function() {
            if (window.location.search) {
                var e = window.location.search.split("?")[1].split("&"),
                    t = {};
                for (var n in e) {
                    var i = e[n].split("=");
                    t[i[0]] = i[1]
                }
                return t
            }
        }
    };
    n.exports = i
});;
define("wcommon:static/util/Browser.js", function(e, r, o) {
    var i, s, n = function(e) {
            e = e.toLowerCase();
            var r = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: r[1] || "",
                version: r[2] || "0"
            }
        };
    i = n(navigator.userAgent), s = {}, i.browser && (s[i.browser] = !0, s.version = i.version), s.webkit && (s.safari = !0), o.exports = s
});;
define("wcommon:static/util/Template.js", function(n, e, t) {
    function r(n) {
        return ("" + n).replace(c, function(n) {
            return i[n]
        })
    }
    function u(n) {
        return n.replace(v, function(n, e) {
            return s[e]
        })
    }
    function a(n, e) {
        for (var t in e) n[t] = e[t];
        return n
    }
    var o = "<&",
        p = "&>",
        i = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        },
        c = /[&<>"'\/]/g,
        l = {
            evaluate: new RegExp(o + "([\\s\\S]+?)" + p, "g"),
            interpolate: new RegExp(o + "=([\\s\\S]+?)" + p, "g"),
            escape: new RegExp(o + "-([\\s\\S]+?)" + p, "g"),
            interpolateNonEmpty: new RegExp(o + "#([\\s\\S]+?)" + p, "g")
        },
        f = /.^/,
        s = {
            "\\": "\\",
            "'": "'",
            r: "\r",
            n: "\n",
            t: "    ",
            u2028: "\u2028",
            u2029: "\u2029"
        },
        g = /\\|'|\r|\n|\t|\u2028|\u2029/g,
        v = /\\(\\|'|r|n|t|u2028|u2029)/g;
    for (var j in s) s[s[j]] = j;
    t.exports = function(n, e, t) {
        var i, c;
        if ("[object String]" == Object.prototype.toString.call(n)) {
            var v = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
            (i = document.getElementById(n)) && (n = /^(textarea|input)$/i.test(i.nodeName) ? i.value : i.innerHTML), n = n.replace(v, ""), n = n.split("\n")
        }
        if ("[object Array]" == Object.prototype.toString.call(n)) for (var j, x = 0; j = n[x]; x++) {
            var m = [];
            j.replace(l.interpolateNonEmpty, function(n, e) {
                m.push(e)
            }), m.length > 0 && n.splice(x, 1, o + " if (" + m.join("&&") + ") { " + p + j + o + " } " + p)
        }
        n = n.join(""), c = a(c || {}, l);
        var y = "__p.push('" + n.replace(g, function(n) {
            return "\\" + s[n]
        }).replace(c.escape || f, function(n, e) {
            return "'+\n((__t=(" + u(e) + "))==null?'':__.escape(__t))+\n'"
        }).replace(c.interpolate || f, function(n, e) {
            return "'+\n((__t=(" + u(e) + "))==null?'':__t)+\n'"
        }).replace(c.interpolateNonEmpty || f, function(n, e) {
            return "'+\n((__t=(" + u(e) + "))==null?'':__t)+\n'"
        }).replace(c.evaluate || f, function(n, e) {
            return "');\n" + u(e) + "\n__p.push('"
        }) + "');\n";
        c.variable || (y = "with(obj||{}){\n" + y + "}\n"), y = "var __t,__p=[],__j=Array.prototype.join,print=function(){__p.push(__j.call(arguments,''))};\n" + y + "return __p.join('');\n";
        var E = new Function(c.variable || "obj", "__", y),
            b = {
                __escape: r
            };
        if (_.extend(b, t || {}), e) return E(e, b);
        var w = function(n, e) {
                return _.extend(b, e), E.call(this, n, b)
            };
        return w
    }
});;
define("wcommon:static/util/Cookie.js", function(e, n, t) {
    var o = function(e) {
            return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(e)
        },
        i = function(e) {
            if (o(e)) {
                var n = new RegExp("(^| )" + e + "=([^;]*)(;|$)"),
                    t = n.exec(document.cookie);
                if (t) return t[2] || null
            }
            return null
        },
        r = function(e) {
            var n = i(e);
            return "string" == typeof n ? n = decodeURIComponent(n) : null
        },
        u = function(e, n, t) {
            if (o(e)) {
                t = t || {};
                var i = t.expires;
                "number" == typeof t.expires && (i = new Date, i.setTime(i.getTime() + t.expires)), document.cookie = e + "=" + n + (t.path ? "; path=" + t.path : "") + (i ? "; expires=" + i.toGMTString() : "") + (t.domain ? "; domain=" + t.domain : "") + (t.secure ? "; secure" : "")
            }
        },
        c = function(e, n) {
            n = n || {}, n.expires = new Date(0), u(e, "", n)
        },
        f = function(e, n, t) {
            u(e, encodeURIComponent(n), t)
        };
    t.exports = {
        getRaw: i,
        get: r,
        remove: c,
        setRaw: u,
        set: f
    }
});;
define("wcommon:static/util/stat.js", function(t, n, e) {
    function a(t, n, e) {
        return function() {
            t && t.apply(e, arguments), n && n.apply(e, arguments)
        }
    }
    var i = t("wcommon:static/util/Cookie.js");
    e.exports.addNStat = function(t, n) {
        o.addStat(t, n)
    }, e.exports.init = function(t, n, e, a) {
        o.init(t, n, e, a)
    }, e.exports.open = function(t, n) {
        var e;
        n = $.extend({}, n, stat.opts), stat.opts.page && stat.opts.da_trd && "hotel" == stat.opts.da_trd && !/.*(stat_action_path).*/.test(t) && (e = util.getParam("stat_action_path") || "", e ? e += "," + stat.opts.page : e = stat.opts.page, n.stat_action_path = e), t += t.indexOf("?") > -1 ? "&" + $.param(n) : "?" + $.param(n), window.open(t)
    }, e.exports.getOption = function() {
        return $.extend({
            page: o.pagePre
        }, o.opts)
    };
    var r = {
        encode: function(t) {
            var n = [];
            return $.each(t, function(t, e) {
                n.push(t + "=" + encodeURIComponent(e))
            }), n.join("&")
        },
        decode: function(t) {
            if ("string" == typeof t) return decodeURIComponent(t);
            var n = [];
            return $.each(t, function(t, e) {
                n.push(t + "=" + (/%[A-Za-z0-9]{2}/.test(e) ? decodeURIComponent(e) : e))
            }), n.join("&")
        }
    },
        o = {
            opts: {
                resid: 61,
                func: "place",
                da_ver: "2.1.0"
            },
            init: function() {
                "object" == typeof arguments[0] && (this.opts = $.extend(this.opts, arguments[0]), this.pagePre = this.opts.page)
            },
            addStat: function(t, n, e) {
                try {
                    if (t.nodeType) {
                        var a = $(t).attr(d.statArr).split("|");
                        return void this.addStat(a[1], a.length > 2 ? a[2] : $(t).text(), a[0])
                    }
                    var r = $.extend({}, this.opts),
                        o = typeof t;
                    "string" == o ? (t = t.replace(/[\{\}'"]/g, ""), $.each(t.split(","), function(t, n) {
                        var e = n.split(":");
                        2 == e.length && (r[$.trim(e[0])] = $.trim(e[1]))
                    })) : "object" == o && $.extend(r, t), e && (r.da_act = $.trim(e)), r.t = (1e8 * Math.random()).toFixed(0), this.pagePre && (r.da_src = this.pagePre + (r.da_src ? "." + r.da_src : ""));
                    var s = i.getRaw("WMREFER");
                    s && (r.third_party = s, r.da_thirdpar = s), this.sendStat(r)
                } catch (u) {}
            },
            sendStat: function(t) {
                var n = new Image,
                    e = new Image;
                e.onload = e.onerror = n.onload = n.onerror = function() {
                    n = null
                }, e.src = "https://log.waimai.baidu.com/static/transparent.gif?" + r.encode(t)
            }
        },
        s = {
            items: [],
            handle: null,
            addStat: function(t) {
                var n = $(t).attr(d.statArr),
                    e = n.match(/load\|\{?(.*)(da_src:([^,\}]+))(.*)/);
                e && e.length > 0 && (this.items.push(e[3]), this.send())
            },
            stop: function() {
                this.handle && clearTimeout(this.handle)
            },
            send: function() {
                this.stop();
                var t = this;
                t.items && t.items.length && (this.handle = setTimeout(function() {
                    o.addStat({
                        da_src: t.items.join(":"),
                        da_act: "load"
                    }), t.items = []
                }, 2e3))
            }
        },
        d = {
            statArr: "nstat",
            surpportEvent: ["ready", "load", "click", "one", "show", "showone", "hide", "hideone", "mousedown"],
            scanBindEvent: ["ready", "load", "click", "one", "mousedown"],
            handles: {
                mergeEvent: {
                    event: ["load"],
                    handle: function(t) {
                        var n = $(t).attr(d.statArr).split("|");
                        s.addStat(t), n[0] = n[0] + "ed", $(t).attr(d.statArr, n.join("|"))
                    }
                },
                customEvent: {
                    event: ["ready", "showone", "hideone"],
                    handle: function(t) {
                        var n = $(t).attr(d.statArr).split("|");
                        o.addStat(t), n[0] = n[0] + "ed", $(t).attr(d.statArr, n.join("|"))
                    }
                },
                jQueryEvent: {
                    event: ["click", "one"],
                    handle: function(t) {
                        var n = $(t).attr(d.statArr).split("|")[0],
                            e = n + ".nstat";
                        $(t).unbind(e).bind(e, function() {
                            o.addStat(t)
                        });
                        var a = $._data($(t)[0], "events")[n],
                            i = a.pop();
                        a.unshift(i)
                    }
                },
                statusEvent: {
                    event: ["show", "hide"],
                    handle: function(t) {
                        o.addStat(t)
                    }
                }
            },
            getHandle: function(t) {
                for (var n in this.handles) if ($.inArray(t, this.handles[n].event) > -1) return this.handles[n].handle
            },
            init: function(t, n) {
                var e = this.statArr,
                    a = this,
                    i = $(t || "body"),
                    r = function() {
                        var t = $(this).attr(e).split("|")[0];
                        (n || $.inArray(t, a.scanBindEvent) > -1) && $.inArray(t, a.surpportEvent) > -1 && a.getHandle(t)(this)
                    },
                    o = n ? "[" + e + "^='" + n + "']" : "[" + e + "]";
                i.is(o) && r.apply(i[0]), i.find("[" + e + "]").each(r)
            }
        },
        u = {
            fun_proxy: [{
                fun: ["append", "prepend", "before", "after"],
                proxy: function(t) {
                    return function() {
                        return $.each(arguments, function(t, n) {
                            var e = "string" == typeof n ? $.trim(n) : n,
                                a = $(e);
                            d.init(a)
                        }), t.apply(this, arguments)
                    }
                }
            }, {
                fun: ["html", "wrapAll"],
                proxy: function(t) {
                    return function() {
                        var n = t.apply(this, arguments);
                        return d.init($(this)), n
                    }
                }
            }, {
                fun: ["show", "hide"],
                proxy: function(t, n) {
                    return function() {
                        var e = t.apply(this, arguments);
                        return d.init($(this), n), e
                    }
                }
            }, {
                fun: ["attr"],
                proxy: function(t) {
                    return function() {
                        var n = t.apply(this, arguments);
                        return arguments.length >= 2 && d.init($(this)), n
                    }
                }
            }],
            $_fun_proxy: [{
                fun: ["ajax"],
                proxy: function(t) {
                    return function(n) {
                        return n = n || {}, n.beforeSend = a(n.beforeSend, function() {
                            s.stop()
                        }, n), n.complete = a(n.complete, function() {
                            s.send()
                        }, n), t.apply($, arguments)
                    }
                }
            }],
            init: function() {
                var t = this;
                $.each(t.fun_proxy, function(t, n) {
                    $.each(n.fun, function(t, e) {
                        $.fn[e] = n.proxy($.fn[e], e)
                    })
                })
            },
            __init: function() {
                var t = this;
                $.each(t.$_fun_proxy, function(t, n) {
                    $.each(n.fun, function(t, e) {
                        $[e] = n.proxy($[e], e)
                    })
                })
            }
        };
    u.__init(), $(function() {
        u.init(), d.init()
    })
});;
define("wcommon:static/util/DataHelper.js", function(t, n, e) {
    function r(t) {
        this.__data__ = t, _.isObject(t) && _.defaults(this, t)
    }
    _.extend(r, {
        access: function(t, n, e, o) {
            var i;
            return _.isObject(n) ? (o = 1, _.map(n, function(n, e) {
                r.access(t, e, n, o)
            })) : _.isUndefined(e) ? i = r.get.call(t, n) : r.set.call(t, n, e), o ? t : i
        },
        get: function(t) {
            var n, e = this.__data__;
            if (!t) return e;
            n = t.split("."), obj = e;
            for (var r = 0, o = n.length; o > r && obj; r++) obj = obj[n[r]];
            return obj
        },
        set: function(t, n) {
            var e, r = this.__data__;
            e = t.split("."), popkey = e.pop(), o = r;
            for (var i = 0, a = e.length; o && a > i; i++) o = o[e[i]];
            o && (o[popkey] = n)
        }
    }), _.extend(r.prototype, {
        getObject: function() {
            var t = this.prop.apply(this, arguments);
            return _.isObject(t) ? t : {}
        },
        getString: function() {
            var t = this.prop.apply(this, arguments);
            return t ? t.toString() : ""
        },
        getArray: function() {
            var t = this.prop.apply(this, arguments);
            return _.isArray(t) ? t : []
        },
        getNumber: function() {
            var t = this.prop.apply(this, arguments);
            return t ? window.parseFloat(t) : 0 / 0
        },
        prop: function(t, n) {
            return r.access(this, t, n, arguments.length > 1)
        }
    }), e.exports = function(t) {
        return new r(t)
    }
});;
define("wcommon:static/util/HashUtils.js", function(t, s, a) {
    a.exports = {
        sep: "&",
        getParams: function() {
            for (var t = location.hash.substr(1), s = new RegExp("([^=]+)=([^" + this.sep + "]*)" + this.sep + "?", "g"), a = {}, r = null; r = s.exec(t);) a[r[1]] = r[2];
            return a
        },
        setParams: function(t) {
            var s = "";
            for (var a in t) t.hasOwnProperty(a) && (s += a + "=" + t[a] + this.sep);
            location.hash = s.substr(0, s.length - 1)
        },
        getParam: function(t) {
            var s = this.getParams();
            return s[t]
        },
        setParam: function(t, s) {
            var a = this,
                r = a.getParams();
            r[t] = s, a.setParams(r)
        }
    }
});;
var BROWSER = navigator.appName;
window.util = require("wcommon:static/util.js"), window.addNStat = require("wcommon:static/util/stat.js").addNStat, window.urlPrefix = window.location.protocol + "//" + window.location.host, window.PRODUCTION = "waimai.baidu.com" == window.location.host, window.console && console.log && "Microsoft Internet Explorer" != BROWSER ? console._log = console.log : (window.console = {}, console._log = console.log = function() {}), window.PRODUCTION && (console.log = function() {});;
var echo = function(t) {
        console && console.info(t)
    };
!
function(t) {
    function n(t) {
        var n = t.singleton,
            r = function() {
                var t = this,
                    e = arguments;
                if (n) {
                    if (r.singleton) return r.singleton;
                    r.singleton = t
                }
                return t.mixins = {}, i(r.mixins, function(n) {
                    n.prototype.initialize && n.prototype.initialize.apply(t, e), n.prototype.name && (t.mixins[n.prototype.name] = n.prototype)
                }), t.initialize && t.initialize.apply(t, arguments) || t
            },
            s = {};
        return i(c, function(n) {
            a[n](r, t[n], n)
        }), e(t, function(t, n) {
            a[t] || (s[t] = n)
        }), o.call(r.prototype, s), r
    }
    var e = function(n, e, i) {
            for (var o in n) n.hasOwnProperty(o) && e.call(i || t, o, n[o])
        },
        i = Array.prototype.forEach ?
    function(t, n) {
        Array.prototype.forEach.call(t || [], n)
    } : function(t, n) {
        for (var e = 0, i = t && t.length || 0; i > e; e++) n.call(window, t[e], e)
    }, o = function(t, n) {
        e(t, function(t, e) {
            var i = this[t];
            i && n === !0 || (this[t] = e, "function" == typeof e && (e.$name = t, e.$owner = this, i && (e.$prev = i)))
        }, this)
    }, r = function(n) {
        var e = t,
            o = n && n.split(".") || [];
        return i(o, function(t) {
            t && (e = e[t] || (e[t] = {}))
        }), e
    }, s = function() {};
    s.mixin = function(t) {
        return this.mixins.push(t), o.call(this.prototype, t.prototype, !0), this
    }, s.implement = function(t) {
        return o.call(this.prototype, t), this
    }, s.prototype.implement = function(t) {
        return o.call(this, t), this
    }, s.prototype.parent = function() {
        var t = this.parent.caller,
            n = t.$prev;
        if (n) return n.apply(this, arguments);
        throw new Error("can not call parent")
    };
    var a = {
        statics: function(t, n) {
            e(n, function(n, e) {
                t[n] = e
            })
        },
        extend: function(t, n) {
            {
                var n = n || s,
                    i = t.prototype,
                    o = n.prototype;
                t.mixins = []
            }
            n.mixins && t.mixins.push.apply(t.mixins, n.mixins), e(n, function(n, e) {
                t[n] = e
            }), e(o, function(t, n) {
                i[t] = n
            }), t.superclass = i.superclass = n
        },
        mixins: function(t, n) {
            i(n, function(n) {
                t.mixin(n)
            })
        }
    },
        c = ["statics", "extend", "mixins"];
    n.utils = {
        object: {
            each: e
        },
        array: {
            forEach: i
        },
        ns: r
    }, n.define = function(t, e) {
        if (t) {
            var i = t && t.lastIndexOf(".") || -1;
            return r(-1 === i ? null : t.substr(0, i))[t.substr(i + 1)] = new n(e)
        }
        throw new Error("empty class name!")
    }, t.Class = n
}(window), function() {
    Class.define("plugin.Base", {
        statics: {
            main: function(t) {
                var n, e, i = this;
                t = t || {}, t.$root && (n = t.$root, delete t.$root), t.extend = i;
                var e = new Class(t);
                return new e(n)
            }
        },
        initialize: function(t) {
            this.v_setRootNode(t), this.v_bindEvent()
        },
        v_eventBindType: function() {
            return "click focusin focusout change keyup keydown mousedown mouseup mousemove mouseout"
        },
        v_bindEvent: function() {
            var t = this;
            $(t.$root).delegate(t._v_selectot(), t.v_eventBindType(), function(n) {
                var e = $(this);
                $.each(t._v_getSelectorKey(e), function(i, o) {
                    var r = o + "_" + n.type;
                    t[r] && (t.p_defaultEvent(n), t[r].call(t, n, e))
                })
            })
        },
        v_selector: function() {
            return "[id],[name],[data-name]"
        },
        _v_selectot: function() {
            return $.map(this.v_selector().split(","), function(t) {
                return t.split("|")[0]
            }).join(",")
        },
        v_getRootNode: function() {
            return null
        },
        v_setRootNode: function(t) {
            var n = this;
            this.$root = $(t || n.v_getRootNode() || document)
        },
        _v_getSelectorKey: function(t, n) {
            n = n || this.v_selector().split(",");
            for (var e, i, o, r, s = [], a = 0, c = n.length; c > a; a++) i = n[a].split("|"), r = i[0], o = i[1], t.is(r) && (e = r.match(/\[(\w+)\]/), s.push(e && $.inArray(e[1], ["id", "name", "data-name"]) > -1 ? t.attr(e[1]) : o ? o : r.replace(/\./g, "class_").replace(/#/g, "id_").replace(/\[(\w+)\]/g, "attr_$1").replace(/[\W]+/g, "_")));
            return s
        },
        p_defaultEvent: function(t) {
            t.stopPropagation(), $(t.target).is("a") && t.preventDefault()
        },
        find: function(t, n) {
            return $(t, n || this.$root)
        }
    })
}();;
!
function(t) {
    function e(t) {
        return t && t.constructor === Number ? t + "px" : t
    }
    t.fn.bgiframe = /msie 6\.0/i.test(navigator.userAgent) ?
    function(i) {
        i = t.extend({
            top: "auto",
            left: "auto",
            width: "auto",
            height: "auto",
            opacity: !0,
            src: "javascript:false;"
        }, i);
        var r = '<iframe class="bgiframe"frameborder="0"tabindex="-1"src="' + i.src + '"style="display:block;position:absolute;z-index:-1;' + (i.opacity !== !1 ? "filter:Alpha(Opacity='0');" : "") + "top:" + ("auto" == i.top ? "expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+'px')" : e(i.top)) + ";left:" + ("auto" == i.left ? "expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+'px')" : e(i.left)) + ";width:" + ("auto" == i.width ? "expression(this.parentNode.offsetWidth+'px')" : e(i.width)) + ";height:" + ("auto" == i.height ? "expression(this.parentNode.offsetHeight+'px')" : e(i.height)) + ';"/>';
        return this.each(function() {
            0 === t(this).children("iframe.bgiframe").length && this.insertBefore(document.createElement(r), this.firstChild)
        })
    } : function() {
        return this
    }, t.fn.bgIframe = t.fn.bgiframe
}(jQuery);;
(function() {
    !
    function(t) {
        function o(t) {
            return t.top < 0 || l ? "absolute" : "fixed"
        }
        function e() {
            return document.compatMode && "css1compat" == document.compatMode.toLowerCase() ? document.documentElement : document.body
        }
        function n() {
            var t = e();
            return {
                width: Math.max(t.clientWidth, t.scrollWidth),
                height: Math.max(t.clientHeight, t.scrollHeight)
            }
        }
        function i(t, o, e) {
            var n, i = document.compatMode && "css1compat" == document.compatMode.toLowerCase() ? window.top === window.self ? document.documentElement : top.document.documentElement : window.top === window.self ? document.body : top.document.body;
            n = window.top === window.self ? (i.clientHeight - t.outerHeight()) * o + Math.max(document.documentElement.scrollTop, document.body.scrollTop) : (i.clientHeight - t.outerHeight()) * o + Math.max(top.document.documentElement.scrollTop, top.document.body.scrollTop), l || (n = (i.clientHeight - t.outerHeight()) * o);
            var r = t.outerHeight(),
                d = Math.max(document.documentElement.clientHeight, document.body.clientHeight),
                c = n + r;
            c > d && (n = (d - r) * o);
            var e = Math.floor(t.outerWidth() * e);
            return {
                marginLeft: -e,
                top: n
            }
        }
        function r(t) {
            return t
        }
        function d(t) {
            return "xbox" + t
        }
        function c(o) {
            if ("string" == typeof o) return g[o];
            if (o && o.isqbox) return o;
            o = jQuery.event.fix(o || window.event);
            var e = t(o.target).parents(".qbox_content");
            return e.size() > 0 ? g[d(e.data("ind"))] : void 0
        }
        function a(t, e, n) {
            var r = i(t, e, n);
            t.css("position", o(r)), r.top < 0 && (r.top = Math.max(top.document.documentElement.scrollTop, top.document.body.scrollTop) + 10), t.css(r)
        }
        var s = {
            top: .282,
            left: .5,
            fixable: !0,
            modeless: !1
        },
            l = function() {
                var t = !! window.ActiveXObject;
                return t && !window.XMLHttpRequest
            }(),
            u = {
                display: "none",
                position: "fixed",
                zIndex: 1e4,
                top: "0px",
                left: "50%"
            },
            h = {
                display: "none",
                position: "fixed",
                zIndex: 1e4,
                top: "0px",
                left: "0px",
                opacity: .2,
                backgroundColor: "#000",
                height: "100%",
                width: "100%",
                margin: "0px",
                padding: "0px"
            },
            x = 0,
            f = 1e4,
            g = {},
            p = function(o, e, n) {
                this.key = d(n), this.args = e, this.alive = !0, this.binded = !1, this.overlay = t("<div />").addClass("qbox_overlay").css(t.extend({}, h, {
                    zIndex: f + n
                })).appendTo(t(document.body));
                var i = this.content = t("<div />").addClass("qbox_content").css(t.extend({}, u, {
                    zIndex: f + n
                })).appendTo(t(document.body));
                l && (i.css("position", "absolute"), this.overlay.css("position", "absolute")), i.data("ind", n), "string" == typeof o ? i.html(r(o)) : i.append(t(o).show()), g[this.key] = this
            };
        p.prototype = {
            isqbox: 1
        }, t.each(["close", "show", "hide", "trigger", "bind", "unbind", "data"], function(o, e) {
            p.prototype[e] = function() {
                return t.xbox[e].apply(window, [this].concat(Array.prototype.slice.call(arguments || [])))
            }
        }), t.xbox = function(o, e) {
            var n = ++x;
            return e = t.extend(s, e || {}), new p(o || "", e, n)
        }, t.xbox.bind = function(o, e, n) {
            var i = c(o);
            i && i.alive && t(i.content).bind(e + ".xbox." + i.key, n)
        }, t.xbox.unbind = function(o, e, n) {
            var i = c(o);
            i && i.alive && (n ? t(i.content).unbind((e || "") + ".xbox." + i.key, n) : t(i.content).unbind((e || "") + ".xbox." + i.key))
        }, t.xbox.trigger = function(o, e, n) {
            var i = c(o);
            i && i.alive && t(i.content).triggerHandler(e + ".xbox." + i.key, n)
        }, t.xbox.data = function(t, o, e) {
            var n = c(t);
            if (n && n.alive) return n.content.data(o, e)
        }, t.xbox.show = function(o) {
            var e = c(o);
            if (e && e.alive) {
                e.args.modeless || e.overlay.show(), e.content.show(), e.binded || (e.binded = !0, t(window).bind("resize.xbox", function() {
                    e.args.fixable && a(e.content, e.args.top, e.args.left), e.overlay.css(n(!0)), t(e.content).trigger("changePosition", e.content)
                }), t(window).bind("scroll.xbox", function() {
                    e.args.fixable && l && a(e.content, e.args.top, e.args.left), t(e.content).trigger("changePosition", e.content)
                })), e.args.fixable && a(e.content, e.args.top, e.args.left);
                var i = e.args.fixable;
                e.args.fixable = !0, t(window).triggerHandler("resize.xbox"), e.args.fixable = i, t(e.content).trigger("changePosition", e.content), t(e.content).trigger("show", e.content)
            }
        }, t.xbox.hide = function(o) {
            var e = c(o);
            e && e.alive && (t(window).unbind("scroll.xbox"), t(window).unbind("resize.xbox"), e.binded = !1, e.overlay.hide(), e.content.hide(), t(e.content).triggerHandler("hide.xbox." + e.key))
        }, t.xbox.close = function(o) {
            var e = c(o);
            e && e.alive && (t.xbox.hide(e), e.alive = e.binded = !1, e.overlay.remove(), e.content.remove(), delete g[e.key], t(e.content).triggerHandler("close.xbox." + e.key))
        }
    }(jQuery), Class.define("Dialog", {
        extend: plugin.Base,
        initialize: function() {
            this.dialog = $.xbox(this.getHtml()), this.parent(this.dialog.content), this.$root.bgiframe()
        },
        init: function() {
            this.show()
        },
        show: function() {
            this.dialog.show(), this.isHideOverlay && this.dialog.overlay.hide()
        },
        hideOverlay: function() {
            this.isHideOverlay = !0;
            var t = "mousedown.xbox." + this.dialog.key,
                o = this;
            $(document).unbind(t).bind(t, function(t) {
                $.contains(o.$root[0], t.target) || o.hide()
            })
        },
        setPosition: function(t, o, e) {
            this.$root.css("position", "absolute");
            var n = {
                width: $(t).outerWidth(),
                height: $(t).outerHeight() + 10
            },
                i = this;
            e = e || {}, $(this.$root).unbind("changePosition").bind("changePosition", function() {
                var r = $(t).offset(),
                    d = {
                        L: function() {
                            return {
                                left: r.left - i.$root.outerWidth() + n.width + (e.left || 0)
                            }
                        },
                        B: function() {
                            return {
                                top: r.top + n.height + (e.top || 0)
                            }
                        },
                        T: function() {
                            return {
                                top: r.top - i.$root.outerHeight() + (e.top || 0)
                            }
                        },
                        R: function() {
                            return {
                                left: r.left + (e.left || 0)
                            }
                        }
                    },
                    c = {
                        marginLeft: 0
                    };
                $.each(o.split(""), function(t, o) {
                    var e = d[o.toUpperCase()];
                    e && $.extend(c, e())
                }), i.$root.css(c), i.$root.css("position", "absolute")
            })
        },
        close: function() {
            this.dialog.close()
        },
        hide: function() {
            this.dialog.hide()
        },
        getHtml: function() {
            return "<div style='background-color: #ffffff; height: 100px; width: 300px;'>我是弹层</div>"
        }
    })
}).call(this);;
!
function() {
    function t(t) {
        try {
            var i = t.run,
                e = t.itemArr,
                r = t.scrollDirection,
                n = Math.floor(i.bodyWidth / i.itemWidth),
                s = r ? n : -n,
                l = i.startIndex,
                a = i.endIndex;
            l + s > 1 && (l += s, a += s);
            for (var d = l - 1, h = e.length; h > d && a > d; d++) {
                var o = e[d];
                imgD = o.find("img").eq(0), reSrc = imgD.attr("data-src"), reSrc && (imgD.attr("src", reSrc), imgD.attr("data-src", ""))
            }
        } catch (c) {}
    }
    require("wcommon:static/util/Browser.js");
    Class.define("Scroll", {
        extend: plugin.Base,
        v_selector: function() {
            return this.parent() + ",.prev|prev,.next|next"
        },
        initialize: function(t) {
            this.parent(t), this.getWrapHtml(), this.prev = this.find(".prev_disable"), this.next = this.find(".next_disable"), this.items = this.find(".items"), this.body = this.find(".body"), this.itemArr = [], this.$root.addClass("jscroll")
        },
        getWrapHtml: function() {
            this.$root.append('<a class="prev_disable"><span></span></a>').append('<div class="body"><ul class="items"></ul></div>').append('<a class="next_disable" ><span></span></a>')
        },
        getItemTemplate: function() {
            return '<li class="item"><a href="{link}" target="_blank" ><img onload="util.stretchImg(this,156,110,true)" onerror="util.errorImg(this)" src="{url}" /></a><div class="title">{cn_name}</div></li>'
        },
        createItem: function(t, i) {
            return t._index = i + 1, $(util.format(this.getItemTemplate(), t))
        },
        init: function(i) {
            var e = this,
                r = 0;
            $.each(i, function(t, i) {
                var n = e.createItem(i, t);
                e.items.append(n), e.itemArr.push(n), 0 == r && (r = n.outerWidth(!0))
            }), e.run = {
                itemWidth: r,
                itemsWidth: e.itemArr.length * r,
                bodyWidth: e.body.outerWidth(),
                running: !1
            }, e.run.visibleItems = e.run.bodyWidth / e.run.itemWidth, e.items.css({
                width: e.run.itemsWidth,
                left: 0
            }), e.scrolled(), t(e)
        },
        scrolled: function() {
            var t = this.run;
            t.left = parseInt(this.items[0].style.left.replace("px", ""), 10), t.right = t.itemsWidth + t.left - t.bodyWidth, t.prev = t.left + t.bodyWidth, t.prev = t.prev > 0 ? 0 : t.prev, t.next = t.right > t.bodyWidth ? t.left - t.bodyWidth : t.bodyWidth - t.itemsWidth, t.startIndex = -t.left / t.itemWidth + 1, t.endIndex = t.startIndex + t.visibleItems - 1, t.endIndex > this.itemArr.length && (t.endIndex = this.itemArr.length), this.prev.attr("class", t.left < 0 ? "prev" : "prev_disable"), this.next.attr("class", t.right > 0 ? "next" : "next_disable")
        },
        scroll: function(i) {
            var e = this;
            this.run.left != i && (this.run.running = !0, this.items.stop(!0, !1), t(this), this.items.animate({
                left: i
            }, 500, function() {
                e.run.running = !1, e.scrolled()
            }))
        },
        prev_click: function() {
            this.scrollDirection = 0, this.run.running || this.scroll(this.run.prev)
        },
        next_click: function() {
            this.scrollDirection = 1, this.run.running || this.scroll(this.run.next)
        }
    }), $.fn.scroll = function(t) {
        t = t || {}, t.$root = $(this), $(this).data("scroll", Scroll.main(t)), $(this).data("scroll").init(t.items)
    }
}();;
!
function() {
    {
        var i, t = require("jsmod/ui/dialog"),
            e = require("jsmod/ui/carousel");
        require("wcommon:static/util/Template.js")
    }
    i = {
        html: ['<div class="pic-view">', '<a class="pic-view-close" href="javascript:void(0);"></a>', '<div class="pic-view-panel">', '<div class="pic-view-control">', '<a class="pre" href="javascript:void(0);"></a>', '<a class="next" href="javascript:void(0);"></a>', "</div>", '<div class="pic-view-image"></div>', "</div>", '<div class="pic-view-desc desc"></div>', '<div class="pic-view-bottom">', '<a class="next" href="javascript:void(0);"></a>', '<a class="pre" href="javascript:void(0);"></a>', '<div class="pic-view-carousel"></div>', "</div>", "</div>"].join(""),
        height: 600,
        width: 800,
        count: 6
    }, Class.define("PicView", {
        extend: plugin.Base,
        initialize: function(e) {
            var a = this,
                e = e || {};
            a.dialog = new t({
                html: i.html,
                height: i.height,
                width: e.width || i.width,
                offset: {
                    top: -a.getOffset()
                }
            }), a.dialog.getElement().find(".pic-view-close").click(function() {
                a.dialog.hide({
                    fade: !0
                })
            }), a.desc = a.dialog.getElement().find(".pic-view-desc"), a.$root = a.dialog.getElement().find(".pic-view")
        },
        getOffset: function() {
            return $(window).height() - i.height > 100 ? ($(window).height() - i.height) / 2 - 100 : 0
        },
        setDesc: function() {
            this.desc.html('<div class="page"><span class="curPage">' + this.index + "</span>/" + this.dataLength + "</div>")
        },
        setData: function(i) {
            this.data = i, this.dataLength = this.data.length
        },
        createJscroll: function(t) {
            var a = this,
                o = a.dialog.getElement(),
                c = [],
                n = [];
            a.jscroll || ($.each(a.data, function(i, t) {
                var e = t.url ? t.url : this.imgUrl ? util.thumbnails({
                    src: this.imgUrl,
                    width: 314,
                    height: 220
                }) : util.getNoPicUrl();
                c.push(['<div class="item">', '<img src="' + e + '" onload="util.stretchImg(this,100,70,true)" onerror="util.errorImg(this)" />', "</div>"].join("")), n.push(['<div class="item">', '<div class="item-inner"><img data-src="' + this.imgUrl + '" onerror="util.errorImg(this)" /></div>', "</div>"].join(""))
            }), a.jscroll = new e(o.find(".pic-view-carousel"), {
                htmls: c,
                count: i.count,
                current: t
            }), a.currentIndex = t, a.index = t + 1, a.changeBtnStat(a.currentIndex), $(a.jscroll).on("active", function(i) {
                var t;
                a.currentIndex = i.index, a.index = i.index + 1, a.changeBtnStat(a.currentIndex), t = a.banner.getCurIndex(), t != a.jscroll.getCurIndex() && a.banner.cur(a.jscroll.getCurIndex())
            }), a.$root.delegate(".pic-view-bottom .next", "click", function() {
                a.jscroll.cur(a.currentIndex + i.count, void 0, !0)
            }), a.$root.delegate(".pic-view-bottom .pre", "click", function() {
                a.jscroll.cur(a.currentIndex - i.count, void 0, !0)
            }), a.$root.delegate(".pic-view-bottom .mod-carousel-item", "click", function() {
                a.jscroll.cur($(this).data("index"))
            }), a.banner = new e(o.find(".pic-view-image"), {
                htmls: n,
                count: 1,
                current: t
            }), $(a.banner).on("active", function() {
                var i, t;
                i = a.jscroll.getCurIndex(), t = this.getItem(this.getCurIndex()).find("img"), i != this.getCurIndex() && a.jscroll.cur(this.getCurIndex()), t.data("loaded") || (t.one("load.img", function() {
                    t.data("loaded", !0)
                }), t.one("error.img", function() {
                    t.data("loaded", !1), t.off("load.img")
                }), t.prop("src", t.attr("data-src"))), a.setDesc()
            }), $(a.banner).trigger("active"), a.banner.total <= 1 || (a.$root.on("mousemove", ".pic-view-image", function(i) {
                var t;
                t = $(i.target).hasClass("mod-carousel-item") ? i.offsetX || i.originalEvent.layerX : (i.offsetX || i.originalEvent.layerX) + i.target.offsetLeft, t > $(this).width() / 2 ? $(this).removeClass("pic-view-image-left").addClass("pic-view-image-right") : $(this).removeClass("pic-view-image-right").addClass("pic-view-image-left")
            }), a.$root.on("click", ".pic-view-image", function(i) {
                var t;
                t = $(i.target).hasClass("mod-carousel-item") ? i.offsetX || i.originalEvent.layerX : (i.offsetX || i.originalEvent.layerX) + i.target.offsetLeft, t > $(this).width() / 2 ? a.banner.next() : a.banner.pre()
            })))
        },
        changeBtnStat: function() {
            var t = this;
            t.currentIndex + 2 >= t.jscroll.total - 1 || i.count >= t.jscroll.total ? t.$root.find(".pic-view-bottom .next").animate({
                opacity: 0
            }, 200, function() {
                $(this).css("opacity", 1).css("visibility", "hidden")
            }) : t.$root.find(".pic-view-bottom .next").css("visibility", "visible"), t.currentIndex - 3 <= 0 || i.count >= t.jscroll.total ? t.$root.find(".pic-view-bottom .pre").animate({
                opacity: 0
            }, 200, function() {
                $(this).css("opacity", 1).css("visibility", "hidden")
            }) : t.$root.find(".pic-view-bottom .pre").css("visibility", "visible")
        },
        scrollTo: function(i) {
            var t = this;
            t.dialog.show({
                fade: !0
            }), t.jscroll ? t.jscroll.cur(i - 1) : t.createJscroll(i - 1), t.setDesc()
        }
    })
}();;
!
function(e, a, t) {
    function l(e) {
        var a = {},
            l = /^jQuery\d+$/;
        return t.each(e.attributes, function(e, t) {
            t.specified && !l.test(t.name) && (a[t.name] = t.value)
        }), a
    }
    function r(e, l) {
        var r = this,
            o = t(r);
        if (r.value == o.attr("placeholder") && o.hasClass("placeholder")) if (o.data("placeholder-password")) {
            if (o = o.hide().next().show().attr("id", o.removeAttr("id").data("placeholder-id")), e === !0) return o[0].value = l;
            o.focus()
        } else r.value = "", o.removeClass("placeholder"), r == a.activeElement && r.select()
    }
    function o() {
        var e, a = this,
            o = t(a),
            d = this.id;
        if ("" == a.value) {
            if ("password" == a.type) {
                if (!o.data("placeholder-textinput")) {
                    try {
                        e = o.clone().attr({
                            type: "text"
                        })
                    } catch (c) {
                        e = t("<input>").attr(t.extend(l(this), {
                            type: "text"
                        }))
                    }
                    e.removeAttr("name").data({
                        "placeholder-password": o,
                        "placeholder-id": d
                    }).bind("focus.placeholder", r), o.data({
                        "placeholder-textinput": e,
                        "placeholder-id": d
                    }).before(e)
                }
                o = o.removeAttr("id").hide().prev().attr("id", d).show()
            }
            o.addClass("placeholder"), o[0].value = o.attr("placeholder")
        } else o.removeClass("placeholder")
    }
    var d, c, n = "placeholder" in a.createElement("input"),
        i = "placeholder" in a.createElement("textarea"),
        u = t.fn,
        h = t.valHooks,
        p = t.propHooks;
    n && i ? (c = u.placeholder = function() {
        return this
    }, c.input = c.textarea = !0) : (c = u.placeholder = function() {
        var e = this;
        return e.filter((n ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": r,
            "blur.placeholder": o
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
    }, c.input = n, c.textarea = i, d = {
        get: function(e) {
            var a = t(e),
                l = a.data("placeholder-password");
            return l ? l[0].value : a.data("placeholder-enabled") && a.hasClass("placeholder") ? "" : e.value
        },
        set: function(e, l) {
            var d = t(e),
                c = d.data("placeholder-password");
            return c ? c[0].value = l : d.data("placeholder-enabled") ? ("" == l ? (e.value = l, e != a.activeElement && o.call(e)) : d.hasClass("placeholder") ? r.call(e, !0, l) || (e.value = l) : e.value = l, d) : e.value = l
        }
    }, n || (h.input = d, p.value = d), i || (h.textarea = d, p.value = d), t(function() {
        t(a).delegate("form", "submit.placeholder", function() {
            var e = t(".placeholder", this).each(r);
            setTimeout(function() {
                e.each(o)
            }, 10)
        })
    }), t(e).bind("beforeunload.placeholder", function() {
        t(".placeholder").each(function() {
            this.value = ""
        })
    }))
}(this, document, jQuery);;
window.listener = window.listener ||
function() {
    var n = 50,
        t = 25,
        e = {},
        r = [].slice,
        a = {},
        c = function(n, t, r, c) {
            var o = a[n];
            o || (o = a[n] = {}), o[t] = o[t] || [], o[t].push({
                func: r,
                context: c || e
            })
        },
        o = function(n, t, r, a) {
            var o = function() {
                    return e.off(n, t, o), r.apply(a || e, arguments)
                };
            c(n, t, o, a)
        },
        f = function(e, c) {
            if (a[e] && a[e][c] && a[e][c].length) {
                for (var o = a[e][c], f = [], i = o.length; i--;) f.push({
                    handler: o[i],
                    args: r.call(arguments, 1)
                });
                !
                function() {
                    var e = +new Date;
                    do {
                        var r = f.shift(),
                            a = r.handler;
                        try {
                            a.func.apply(a.context, r.args)
                        } catch (c) {}
                    } while (f.length && +new Date - e < n);
                    f.length > 0 && setTimeout(arguments.callee, t)
                }()
            }
        },
        i = function(n, t, r, c) {
            if (c = c || e, a[n] && a[n][t] && a[n][t].length) for (var o, f = a[n][t], i = f.length; i--;) o = f[i], o.func === r && o.context === c && f.splice(i, 1)
        };
    return e.on = c, e.once = o, e.trigger = f, e.off = i, e
}();;
window.WidgetManager = function(n, t) {
    var e = "widget_special_channel",
        i = "widget_initial_type",
        o = {},
        r = function(n) {
            var r = n.el;
            r && (o[r] && console && console.log && console.log("define the same el!"), o[r] = n, t.trigger(e, i, {
                el: r
            }))
        },
        c = function(n, r) {
            if (n) {
                var c = n.split("?"),
                    n = c[0];
                o[n] ? r && r() : t.on(e, i, function(t, e) {
                    var i = e.el;
                    i == n && r && r()
                })
            }
        },
        a = function(n) {
            var t = n.split("?"),
                e = t[0],
                i = o[e];
            return i
        },
        u = function(n) {
            var t = n.split("?"),
                e = t[0],
                i = n.substring(e.length + 1, n.length);
            if (!i) throw Error("missing widget function name.");
            if ("_" == i[0]) throw Error("cannot call widget function which name started with _.");
            return i
        },
        s = function(t) {
            var e = t.url;
            c(e, function() {
                var i = a(e),
                    o = u(e),
                    r = i[o];
                r || t.miss && t.miss(1);
                var c = t.data;
                n.isArray(c) || (c = [c]);
                var s = r.apply(i, c);
                t.success && t.success(s)
            })
        };
    return {
        collect: r,
        communicate: s,
        ready: c
    }
}($, listener), window.Widget = function(n, t, e) {
    function i(n) {
        c(n)
    }
    var o, r = {},
        c = function(t) {
            o.$el = n(o.el), a(), o.init && n.isFunction(o.init) && o.init(t), u()
        },
        a = function() {
            o.$dom = {};
            for (var n, t, e = o.$el.html() || "", i = e.match(/data-node="([^"]*)"/gim) || [], r = i.length - 1; r >= 0; r--) n = i[r], t = n.split("=")[1].replace(/"/g, ""), o.$dom[t] = o.$el.find("[" + n + "]")
        },
        u = function() {
            var t, e, i, r, c = o.events,
                a = o.channels,
                u = /^(\S+)\s*(.*)$/;
            c && c instanceof Object && n.each(c, function(i, c) {
                return n.isFunction(c) || (c = o[c]), c ? (r = i.match(u), t = r[1], e = r[2], void s(t, e, c)) : !0
            }), a && a instanceof Object && n.each(a, function(e, c) {
                return n.isFunction(c) || (c = o[c]), c ? (r = e.match(u), i = r[1], t = r[2], void l(i, t, c)) : !0
            })
        },
        s = function(t, e, i) {
            var r = o.el || "body";
            e ? n(r).on(t, e, n.proxy(i, o)) : n(r).on(t, n.proxy(i, o))
        },
        l = function(e, i, r) {
            t.on(e, i, n.proxy(r, o))
        },
        f = function(n, t) {
            if (t || (t = {}), !n) return t;
            for (var e in n) t[e] || (t[e] = n[e]);
            return t
        };
    return i.extend = function(t) {
        var i = this,
            c = function() {
                return o = this, i.apply(this, arguments)
            },
            a = function() {
                this.constructor = c
            };
        return a.prototype = i.prototype, c.prototype = new a, c.prototype = f(r, c.prototype), a = null, n.extend(c.prototype, t), c.createWidget = function(n) {
            var t = new c(n);
            return e.collect(t), t
        }, c
    }, i.register = function(n, t) {
        r[n] && console && console.log && console.log("register same name widget plugin!"), r[n] = t
    }, i
}($, listener, WidgetManager);