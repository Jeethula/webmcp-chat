import ae, { createContext as se, useState as P, useMemo as V, useCallback as B, useEffect as le, useContext as ce } from "react";
import { GoogleGenAI as ue, mcpToTool as de } from "@google/genai";
import { useMcpClient as me } from "@mcp-b/react-webmcp";
var O = { exports: {} }, A = {};
var X;
function pe() {
  if (X) return A;
  X = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(g, l, s) {
    var m = null;
    if (s !== void 0 && (m = "" + s), l.key !== void 0 && (m = "" + l.key), "key" in l) {
      s = {};
      for (var p in l)
        p !== "key" && (s[p] = l[p]);
    } else s = l;
    return l = s.ref, {
      $$typeof: n,
      type: g,
      key: m,
      ref: l !== void 0 ? l : null,
      props: s
    };
  }
  return A.Fragment = c, A.jsx = d, A.jsxs = d, A;
}
var M = {};
var H;
function be() {
  return H || (H = 1, process.env.NODE_ENV !== "production" && (function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ne ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case v:
          return "Fragment";
        case u:
          return "Profiler";
        case k:
          return "StrictMode";
        case N:
          return "Suspense";
        case C:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case x:
            return "Portal";
          case R:
            return e.displayName || "Context";
          case j:
            return (e._context.displayName || "Context") + ".Consumer";
          case T:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case te:
            return t = e.displayName || null, t !== null ? t : n(e.type) || "Memo";
          case I:
            t = e._payload, e = e._init;
            try {
              return n(e(t));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function d(e) {
      try {
        c(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var o = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          i
        ), c(e);
      }
    }
    function g(e) {
      if (e === v) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === I)
        return "<...>";
      try {
        var t = n(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var e = W.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (F.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, t) {
      function o() {
        L || (L = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function E() {
      var e = n(this.type);
      return G[e] || (G[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function _(e, t, o, i, z, Y) {
      var a = o.ref;
      return e = {
        $$typeof: y,
        type: e,
        key: t,
        props: o,
        _owner: i
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: E
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function w(e, t, o, i, z, Y) {
      var a = t.children;
      if (a !== void 0)
        if (i)
          if (oe(a)) {
            for (i = 0; i < a.length; i++)
              b(a[i]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(a);
      if (F.call(t, "key")) {
        a = n(e);
        var S = Object.keys(t).filter(function(ie) {
          return ie !== "key";
        });
        i = 0 < S.length ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}", J[a + i] || (S = 0 < S.length ? "{" + S.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          a,
          S,
          a
        ), J[a + i] = !0);
      }
      if (a = null, o !== void 0 && (d(o), a = "" + o), m(t) && (d(t.key), a = "" + t.key), "key" in t) {
        o = {};
        for (var D in t)
          D !== "key" && (o[D] = t[D]);
      } else o = t;
      return a && p(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), _(
        e,
        a,
        o,
        l(),
        z,
        Y
      );
    }
    function b(e) {
      f(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === I && (e._payload.status === "fulfilled" ? f(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function f(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    var h = ae, y = /* @__PURE__ */ Symbol.for("react.transitional.element"), x = /* @__PURE__ */ Symbol.for("react.portal"), v = /* @__PURE__ */ Symbol.for("react.fragment"), k = /* @__PURE__ */ Symbol.for("react.strict_mode"), u = /* @__PURE__ */ Symbol.for("react.profiler"), j = /* @__PURE__ */ Symbol.for("react.consumer"), R = /* @__PURE__ */ Symbol.for("react.context"), T = /* @__PURE__ */ Symbol.for("react.forward_ref"), N = /* @__PURE__ */ Symbol.for("react.suspense"), C = /* @__PURE__ */ Symbol.for("react.suspense_list"), te = /* @__PURE__ */ Symbol.for("react.memo"), I = /* @__PURE__ */ Symbol.for("react.lazy"), re = /* @__PURE__ */ Symbol.for("react.activity"), ne = /* @__PURE__ */ Symbol.for("react.client.reference"), W = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, oe = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var L, G = {}, U = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), q = $(g(s)), J = {};
    M.Fragment = v, M.jsx = function(e, t, o) {
      var i = 1e4 > W.recentlyCreatedOwnerStacks++;
      return w(
        e,
        t,
        o,
        !1,
        i ? Error("react-stack-top-frame") : U,
        i ? $(g(e)) : q
      );
    }, M.jsxs = function(e, t, o) {
      var i = 1e4 > W.recentlyCreatedOwnerStacks++;
      return w(
        e,
        t,
        o,
        !0,
        i ? Error("react-stack-top-frame") : U,
        i ? $(g(e)) : q
      );
    };
  })()), M;
}
var Z;
function fe() {
  return Z || (Z = 1, process.env.NODE_ENV === "production" ? O.exports = pe() : O.exports = be()), O.exports;
}
var r = fe();
const he = '@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.contents{display:contents}}.webmcp-widget-shell{pointer-events:none;z-index:50;flex-direction:column;align-items:flex-end;gap:.55rem;width:min(380px,100vw - 1.25rem);display:flex;position:fixed}.webmcp-size-sm{width:min(320px,100vw - 1.25rem)}.webmcp-size-md{width:min(380px,100vw - 1.25rem)}.webmcp-size-lg{width:min(460px,100vw - 1.25rem)}.webmcp-bottom-right{inset:auto .75rem .75rem auto}.webmcp-bottom-left{inset:auto auto .75rem .75rem}.webmcp-top-right{inset:.75rem .75rem auto auto}.webmcp-top-left{inset:.75rem auto auto .75rem}.webmcp-bottom-center{align-items:center;bottom:.75rem;left:50%;transform:translate(-50%)}.webmcp-card{pointer-events:auto;color:#e2e8f0;background:linear-gradient(#0f172a,#020617);border:1px solid oklab(37.1696% -.00861713 -.0381965/.65);border-radius:.9rem;flex-direction:column;max-height:28rem;display:flex;overflow:hidden;box-shadow:0 12px 40px #020617b3}.webmcp-panel{transform-origin:100% 100%;width:100%;transition:opacity .18s,transform .18s}.webmcp-panel-open{opacity:1;transform:translateY(0)scale(1)}.webmcp-panel-closed{opacity:0;pointer-events:none;visibility:hidden;transform:translateY(10px)scale(.97)}.webmcp-launcher{pointer-events:auto;color:#082f49;background:linear-gradient(#0ea5e9,#0284c7);border:1px solid oklab(46.9102% -.0375473 -.0659772);border-radius:9999px;justify-content:center;align-items:center;width:2.95rem;height:2.95rem;display:inline-flex;box-shadow:0 12px 30px #0369a173}.webmcp-launcher:hover{filter:brightness(1.05)}.webmcp-launcher-icon{width:1.25rem;height:1.25rem}.webmcp-header{border-bottom:1px solid #1e293b;justify-content:space-between;align-items:center;gap:.75rem;padding:.625rem .75rem;font-size:.75rem;display:flex}.webmcp-header-actions{color:#94a3b8;align-items:center;gap:.375rem;display:inline-flex}.webmcp-minimize{color:#cbd5e1;cursor:pointer;background:#0b1220;border:1px solid #334155;border-radius:.4rem;justify-content:center;align-items:center;width:1.35rem;height:1.35rem;padding:0;font-size:.95rem;font-weight:700;line-height:1;display:inline-flex}.webmcp-minimize:hover{background:#172135}.webmcp-minimize-icon{width:.8rem;height:.8rem;display:block}.webmcp-dot{background:#34d399;border-radius:9999px;width:.5rem;height:.5rem}.webmcp-dot.pulse{animation:1.2s infinite webmcp-pulse}.webmcp-messages{flex-direction:column;gap:.45rem;min-height:10rem;padding:.7rem;display:flex;overflow-y:auto}.webmcp-empty{color:#64748b;margin:0;font-size:.75rem}.webmcp-message-row{display:flex}.webmcp-bubble{white-space:pre-wrap;border-radius:.65rem;max-width:84%;padding:.4rem .55rem;font-size:.75rem;line-height:1.3}.webmcp-bubble.user{color:#020617;background:#0ea5e9;margin-left:auto}.webmcp-bubble.bot{color:#f8fafc;background:#1e293b;margin-right:auto}.webmcp-error{color:#fda4af;margin:0;font-size:.75rem}.webmcp-input-row{border-top:1px solid #1e293b;gap:.4rem;padding:.6rem;display:flex}.webmcp-input{color:#f8fafc;background:#0b1220;border:1px solid #334155;border-radius:.6rem;flex:1;padding:.45rem .5rem;font-size:.75rem}.webmcp-input::placeholder{color:#64748b}.webmcp-input:focus{outline-offset:1px;outline:2px solid oklab(75.3513% -.0842999 -.110505/.55)}.webmcp-send,.webmcp-clear{cursor:pointer;border:none;border-radius:.6rem;padding:.44rem .62rem;font-size:.72rem}.webmcp-send{color:#020617;background:#0ea5e9}.webmcp-send:disabled{opacity:.65;cursor:not-allowed}.webmcp-clear{color:#e2e8f0;background:#1e293b}@keyframes webmcp-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(.75)}}@media(max-width:640px){.webmcp-widget-shell{align-items:stretch;width:auto;inset:auto .5rem .5rem}.webmcp-card{max-height:55vh}.webmcp-launcher{align-self:flex-end}}', ee = se(null), Q = "webmcp-chat-default-styles";
function ge() {
  if (typeof document > "u" || document.getElementById(Q)) return;
  const n = document.createElement("style");
  n.id = Q, n.textContent = he, document.head.appendChild(n);
}
ge();
const we = "You are an assistant running inside a web app with WebMCP tools. When the user asks to inspect or modify app state, use available tools whenever possible. Never claim an action succeeded unless the tool call actually succeeded.";
function K(n, c) {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role: n,
    text: c
  };
}
function xe() {
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      "aria-hidden": "true",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "webmcp-launcher-icon",
      children: [
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: "M4 8.5C4 6.01 6.01 4 8.5 4h7C17.99 4 20 6.01 20 8.5v4C20 14.99 17.99 17 15.5 17H9.8L6 20v-3.6C4.84 15.55 4 14.15 4 12.5v-4Z",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: "M8 9.5h8M8 12.5h5",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
}
function ve() {
  return /* @__PURE__ */ r.jsx(
    "svg",
    {
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "webmcp-minimize-icon",
      children: /* @__PURE__ */ r.jsx("path", { d: "M3 8h10", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" })
    }
  );
}
function ke({
  apiKey: n,
  model: c = "gemini-2.5-flash",
  systemPrompt: d = we,
  initialMessages: g = [],
  children: l
}) {
  const { client: s } = me(), [m, p] = P(g), [E, _] = P(!1), [w, b] = P(null), f = V(() => n ? new ue({ apiKey: n }) : null, [n]), h = B(
    async (v) => {
      const k = v?.trim();
      if (!k) return;
      if (!n) {
        b("Missing apiKey. Pass your Gemini API key to the widget.");
        return;
      }
      if (!f || !s) {
        b("Gemini or WebMCP client is not ready yet.");
        return;
      }
      b(null);
      const u = K("user", k), j = [...m, u];
      p(j), _(!0);
      try {
        const R = j.map((C) => `${C.role === "user" ? "User" : "Assistant"}: ${C.text}`).join(`
`), N = ((await f.models.generateContent({
          model: c,
          contents: `${d}

${R}`,
          config: {
            tools: [de(s)]
          }
        })).text || "").trim() || "(No response)";
        p((C) => [...C, K("assistant", N)]);
      } catch (R) {
        const T = R instanceof Error ? R.message : "Failed to get a response from Gemini.";
        b(T);
      } finally {
        _(!1);
      }
    },
    [f, n, s, m, c, d]
  ), y = B(() => {
    p([]), b(null);
  }, []), x = V(
    () => ({
      messages: m,
      isThinking: E,
      error: w,
      sendMessage: h,
      clearMessages: y,
      model: c,
      systemPrompt: d
    }),
    [m, E, w, h, y, c, d]
  );
  return /* @__PURE__ */ r.jsx(ee.Provider, { value: x, children: l });
}
function ye() {
  const n = ce(ee);
  if (!n)
    throw new Error(
      "useGeminiWebMcpAgent must be used inside GeminiWebMcpAgentProvider."
    );
  return n;
}
function Ee({
  className: n = "",
  title: c = "Chat Assistant",
  placeholder: d = "Ask the assistant to read or update app state...",
  emptyState: g = "No messages yet. Ask me to use your WebMCP tools.",
  sendLabel: l = "Send",
  clearLabel: s = "Clear",
  showClearButton: m = !0,
  onMinimize: p,
  minimizeLabel: E = "Minimize assistant",
  showMinimizeButton: _ = !0
}) {
  const { messages: w, isThinking: b, error: f, sendMessage: h, clearMessages: y } = ye(), [x, v] = P("");
  async function k(u) {
    if (u.preventDefault(), !x.trim()) return;
    const j = x;
    v(""), await h(j);
  }
  return /* @__PURE__ */ r.jsxs("section", { className: `webmcp-card ${n}`.trim(), children: [
    /* @__PURE__ */ r.jsxs("header", { className: "webmcp-header", children: [
      /* @__PURE__ */ r.jsx("strong", { children: c }),
      /* @__PURE__ */ r.jsxs("div", { className: "webmcp-header-actions", children: [
        /* @__PURE__ */ r.jsx("span", { className: b ? "webmcp-dot pulse" : "webmcp-dot" }),
        /* @__PURE__ */ r.jsx("span", { children: b ? "Thinking..." : "Ready" }),
        _ && p ? /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            onClick: p,
            className: "webmcp-minimize",
            "aria-label": E,
            children: /* @__PURE__ */ r.jsx(ve, {})
          }
        ) : null
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "webmcp-messages", children: [
      w.length === 0 && /* @__PURE__ */ r.jsx("p", { className: "webmcp-empty", children: g }),
      w.map((u) => /* @__PURE__ */ r.jsx("div", { className: "webmcp-message-row", children: /* @__PURE__ */ r.jsx(
        "div",
        {
          className: u.role === "user" ? "webmcp-bubble user" : "webmcp-bubble bot",
          children: u.text
        }
      ) }, u.id)),
      f && /* @__PURE__ */ r.jsx("p", { className: "webmcp-error", children: f })
    ] }),
    /* @__PURE__ */ r.jsxs("form", { onSubmit: k, className: "webmcp-input-row", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          value: x,
          onChange: (u) => v(u.target.value),
          placeholder: d,
          className: "webmcp-input"
        }
      ),
      /* @__PURE__ */ r.jsx("button", { type: "submit", disabled: b, className: "webmcp-send", children: l }),
      m ? /* @__PURE__ */ r.jsx("button", { type: "button", onClick: y, className: "webmcp-clear", children: s }) : null
    ] })
  ] });
}
function Te({
  apiKey: n,
  model: c,
  systemPrompt: d,
  className: g,
  panelClassName: l,
  chatClassName: s,
  launcherClassName: m,
  launcherIcon: p,
  launcherLabel: E = "Open assistant",
  closeLauncherLabel: _ = "Close assistant",
  minimizeLabel: w = "Minimize assistant",
  showMinimizeButton: b = !0,
  showLauncher: f = !0,
  defaultOpen: h = !1,
  position: y = "bottom-right",
  size: x = "md",
  ...v
}) {
  const [k, u] = P(h);
  le(() => {
    u(h);
  }, [h]);
  const j = x === "sm" ? "webmcp-size-sm" : x === "lg" ? "webmcp-size-lg" : "webmcp-size-md", R = [
    "webmcp-widget-shell",
    `webmcp-${y}`,
    j,
    g || ""
  ].join(" ").trim(), T = [
    "webmcp-panel",
    k || !f ? "webmcp-panel-open" : "webmcp-panel-closed",
    l || ""
  ].join(" ").trim();
  return /* @__PURE__ */ r.jsx(
    ke,
    {
      apiKey: n,
      model: c,
      systemPrompt: d,
      children: /* @__PURE__ */ r.jsxs("div", { className: R, children: [
        f ? /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            onClick: () => u((N) => !N),
            className: `webmcp-launcher ${m || ""}`.trim(),
            "aria-expanded": k,
            "aria-label": k ? _ : E,
            children: p || /* @__PURE__ */ r.jsx(xe, {})
          }
        ) : null,
        /* @__PURE__ */ r.jsx("div", { className: T, children: /* @__PURE__ */ r.jsx(
          Ee,
          {
            className: s,
            onMinimize: f ? () => u(!1) : void 0,
            minimizeLabel: w,
            showMinimizeButton: b && f,
            ...v
          }
        ) })
      ] })
    }
  );
}
export {
  we as DEFAULT_SYSTEM_PROMPT,
  ke as GeminiWebMcpAgentProvider,
  Ee as GeminiWebMcpChat,
  Te as WebMcpChatWidget,
  Te as default,
  ye as useGeminiWebMcpAgent
};
