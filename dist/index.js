import se, { createContext as ie, useState as O, useMemo as V, useCallback as B, useEffect as ce, useContext as le } from "react";
import { GoogleGenAI as ue, mcpToTool as me } from "@google/genai";
import { useMcpClient as de } from "@mcp-b/react-webmcp";
var z = { exports: {} }, S = {};
var X;
function pe() {
  if (X) return S;
  X = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.fragment");
  function m(h, c, i) {
    var d = null;
    if (i !== void 0 && (d = "" + i), c.key !== void 0 && (d = "" + c.key), "key" in c) {
      i = {};
      for (var p in c)
        p !== "key" && (i[p] = c[p]);
    } else i = c;
    return c = i.ref, {
      $$typeof: n,
      type: h,
      key: d,
      ref: c !== void 0 ? c : null,
      props: i
    };
  }
  return S.Fragment = l, S.jsx = m, S.jsxs = m, S;
}
var P = {};
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
        case A:
          return "SuspenseList";
        case te:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case x:
            return "Portal";
          case j:
            return e.displayName || "Context";
          case T:
            return (e._context.displayName || "Context") + ".Consumer";
          case R:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case re:
            return r = e.displayName || null, r !== null ? r : n(e.type) || "Memo";
          case W:
            r = e._payload, e = e._init;
            try {
              return n(e(r));
            } catch {
            }
        }
      return null;
    }
    function l(e) {
      return "" + e;
    }
    function m(e) {
      try {
        l(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var o = r.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), l(e);
      }
    }
    function h(e) {
      if (e === v) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === W)
        return "<...>";
      try {
        var r = n(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = $.A;
      return e === null ? null : e.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (G.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, r) {
      function o() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function y() {
      var e = n(this.type);
      return L[e] || (L[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function _(e, r, o, a, M, I) {
      var s = o.ref;
      return e = {
        $$typeof: E,
        type: e,
        key: r,
        props: o,
        _owner: a
      }, (s !== void 0 ? s : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: y
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
        value: M
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function g(e, r, o, a, M, I) {
      var s = r.children;
      if (s !== void 0)
        if (a)
          if (oe(s)) {
            for (a = 0; a < s.length; a++)
              b(s[a]);
            Object.freeze && Object.freeze(s);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(s);
      if (G.call(r, "key")) {
        s = n(e);
        var C = Object.keys(r).filter(function(ae) {
          return ae !== "key";
        });
        a = 0 < C.length ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}", J[s + a] || (C = 0 < C.length ? "{" + C.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          s,
          C,
          s
        ), J[s + a] = !0);
      }
      if (s = null, o !== void 0 && (m(o), s = "" + o), d(r) && (m(r.key), s = "" + r.key), "key" in r) {
        o = {};
        for (var D in r)
          D !== "key" && (o[D] = r[D]);
      } else o = r;
      return s && p(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), _(
        e,
        s,
        o,
        c(),
        M,
        I
      );
    }
    function b(e) {
      f(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === W && (e._payload.status === "fulfilled" ? f(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function f(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    var w = se, E = /* @__PURE__ */ Symbol.for("react.transitional.element"), x = /* @__PURE__ */ Symbol.for("react.portal"), v = /* @__PURE__ */ Symbol.for("react.fragment"), k = /* @__PURE__ */ Symbol.for("react.strict_mode"), u = /* @__PURE__ */ Symbol.for("react.profiler"), T = /* @__PURE__ */ Symbol.for("react.consumer"), j = /* @__PURE__ */ Symbol.for("react.context"), R = /* @__PURE__ */ Symbol.for("react.forward_ref"), N = /* @__PURE__ */ Symbol.for("react.suspense"), A = /* @__PURE__ */ Symbol.for("react.suspense_list"), re = /* @__PURE__ */ Symbol.for("react.memo"), W = /* @__PURE__ */ Symbol.for("react.lazy"), te = /* @__PURE__ */ Symbol.for("react.activity"), ne = /* @__PURE__ */ Symbol.for("react.client.reference"), $ = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = Object.prototype.hasOwnProperty, oe = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var F, L = {}, U = w.react_stack_bottom_frame.bind(
      w,
      i
    )(), q = Y(h(i)), J = {};
    P.Fragment = v, P.jsx = function(e, r, o) {
      var a = 1e4 > $.recentlyCreatedOwnerStacks++;
      return g(
        e,
        r,
        o,
        !1,
        a ? Error("react-stack-top-frame") : U,
        a ? Y(h(e)) : q
      );
    }, P.jsxs = function(e, r, o) {
      var a = 1e4 > $.recentlyCreatedOwnerStacks++;
      return g(
        e,
        r,
        o,
        !0,
        a ? Error("react-stack-top-frame") : U,
        a ? Y(h(e)) : q
      );
    };
  })()), P;
}
var Z;
function fe() {
  return Z || (Z = 1, process.env.NODE_ENV === "production" ? z.exports = pe() : z.exports = be()), z.exports;
}
var t = fe();
const we = ".webmcp-widget-shell{pointer-events:none;position:fixed;width:min(380px,calc(100vw - 1.25rem));z-index:50;display:flex;flex-direction:column;align-items:flex-end;gap:.55rem}.webmcp-size-sm{width:min(320px,calc(100vw - 1.25rem))}.webmcp-size-md{width:min(380px,calc(100vw - 1.25rem))}.webmcp-size-lg{width:min(460px,calc(100vw - 1.25rem))}.webmcp-bottom-right{left:auto;top:auto;right:.75rem;bottom:.75rem}.webmcp-bottom-left{right:auto;top:auto;left:.75rem;bottom:.75rem}.webmcp-top-right{left:auto;bottom:auto;right:.75rem;top:.75rem}.webmcp-top-left{right:auto;bottom:auto;left:.75rem;top:.75rem}.webmcp-bottom-center{left:50%;bottom:.75rem;transform:translate(-50%);align-items:center}.webmcp-card{pointer-events:auto;border-radius:.9rem;border:1px solid color-mix(in oklab,#334155 65%,transparent);background:linear-gradient(180deg,#0f172a,#020617);box-shadow:0 12px 40px color-mix(in oklab,#020617 70%,transparent);color:#e2e8f0;display:flex;flex-direction:column;max-height:28rem;overflow:hidden}.webmcp-panel{width:100%;transition:opacity .18s ease,transform .18s ease;transform-origin:bottom right}.webmcp-panel-open{opacity:1;transform:translateY(0) scale(1)}.webmcp-panel-closed{opacity:0;transform:translateY(10px) scale(.97);pointer-events:none;visibility:hidden}.webmcp-launcher{pointer-events:auto;width:2.95rem;height:2.95rem;border-radius:9999px;border:1px solid color-mix(in oklab,#38bdf8 40%,#1e293b);background:linear-gradient(180deg,#0ea5e9,#0284c7);color:#082f49;display:inline-flex;align-items:center;justify-content:center;box-shadow:0 12px 30px color-mix(in oklab,#0369a1 45%,transparent)}.webmcp-launcher:hover{filter:brightness(1.05)}.webmcp-launcher-icon{width:1.25rem;height:1.25rem}.webmcp-header{border-bottom:1px solid #1e293b;display:flex;justify-content:space-between;gap:.75rem;align-items:center;padding:.625rem .75rem;font-size:.75rem}.webmcp-header-actions{display:inline-flex;align-items:center;gap:.375rem;color:#94a3b8}.webmcp-minimize{border:1px solid #334155;background:#0b1220;color:#cbd5e1;width:1.35rem;height:1.35rem;border-radius:.4rem;font-size:.95rem;line-height:1;font-weight:700;padding:0;display:inline-flex;align-items:center;justify-content:center;cursor:pointer}.webmcp-minimize:hover{background:#172135}.webmcp-minimize-icon{width:.8rem;height:.8rem;display:block}.webmcp-dot{width:.5rem;height:.5rem;border-radius:9999px;background:#34d399}.webmcp-dot.pulse{animation:webmcp-pulse 1.2s infinite}.webmcp-messages{min-height:10rem;overflow-y:auto;display:flex;flex-direction:column;gap:.45rem;padding:.7rem}.webmcp-empty{margin:0;color:#64748b;font-size:.75rem}.webmcp-message-row{display:flex}.webmcp-bubble{font-size:.75rem;line-height:1.3;max-width:84%;border-radius:.65rem;padding:.4rem .55rem;white-space:pre-wrap}.webmcp-bubble.user{margin-left:auto;background:#0ea5e9;color:#020617}.webmcp-bubble.bot{margin-right:auto;background:#1e293b;color:#f8fafc}.webmcp-error{margin:0;color:#fda4af;font-size:.75rem}.webmcp-input-row{border-top:1px solid #1e293b;display:flex;gap:.4rem;padding:.6rem}.webmcp-input{flex:1;border-radius:.6rem;border:1px solid #334155;background:#0b1220;color:#f8fafc;font-size:.75rem;padding:.45rem .5rem}.webmcp-input::placeholder{color:#64748b}.webmcp-input:focus{outline:2px solid color-mix(in oklab,#38bdf8 55%,transparent);outline-offset:1px}.webmcp-send,.webmcp-clear{border-radius:.6rem;font-size:.72rem;border:none;padding:.44rem .62rem;cursor:pointer}.webmcp-send{background:#0ea5e9;color:#020617}.webmcp-send:disabled{opacity:.65;cursor:not-allowed}.webmcp-clear{background:#1e293b;color:#e2e8f0}@keyframes webmcp-pulse{0%,to{transform:scale(1);opacity:1}50%{transform:scale(.75);opacity:.6}}@media(max-width:640px){.webmcp-widget-shell{left:.5rem;right:.5rem;bottom:.5rem;top:auto;width:auto;align-items:stretch}.webmcp-card{max-height:55vh}.webmcp-launcher{align-self:flex-end}}", ee = ie(null), Q = "webmcp-chat-default-styles";
function he() {
  if (typeof document > "u" || document.getElementById(Q)) return;
  const n = document.createElement("style");
  n.id = Q, n.textContent = we, document.head.appendChild(n);
}
he();
const ge = "You are an assistant running inside a web app with WebMCP tools. When the user asks to inspect or modify app state, use available tools whenever possible. Never claim an action succeeded unless the tool call actually succeeded.";
function K(n, l) {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role: n,
    text: l
  };
}
function xe() {
  return /* @__PURE__ */ t.jsxs(
    "svg",
    {
      "aria-hidden": "true",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "webmcp-launcher-icon",
      children: [
        /* @__PURE__ */ t.jsx(
          "path",
          {
            d: "M4 8.5C4 6.01 6.01 4 8.5 4h7C17.99 4 20 6.01 20 8.5v4C20 14.99 17.99 17 15.5 17H9.8L6 20v-3.6C4.84 15.55 4 14.15 4 12.5v-4Z",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ t.jsx(
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
  return /* @__PURE__ */ t.jsx(
    "svg",
    {
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "webmcp-minimize-icon",
      children: /* @__PURE__ */ t.jsx("path", { d: "M3 8h10", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" })
    }
  );
}
function ke({
  apiKey: n,
  model: l = "gemini-2.5-flash",
  systemPrompt: m = ge,
  initialMessages: h = [],
  children: c
}) {
  const { client: i } = de(), [d, p] = O(h), [y, _] = O(!1), [g, b] = O(null), f = V(() => n ? new ue({ apiKey: n }) : null, [n]), w = B(
    async (v) => {
      const k = v?.trim();
      if (!k) return;
      if (!n) {
        b("Missing apiKey. Pass your Gemini API key to the widget.");
        return;
      }
      if (!f || !i) {
        b("Gemini or WebMCP client is not ready yet.");
        return;
      }
      b(null);
      const u = K("user", k), T = [...d, u];
      p(T), _(!0);
      try {
        const j = T.map((A) => `${A.role === "user" ? "User" : "Assistant"}: ${A.text}`).join(`
`), N = ((await f.models.generateContent({
          model: l,
          contents: `${m}

${j}`,
          config: {
            tools: [me(i)]
          }
        })).text || "").trim() || "(No response)";
        p((A) => [...A, K("assistant", N)]);
      } catch (j) {
        const R = j instanceof Error ? j.message : "Failed to get a response from Gemini.";
        b(R);
      } finally {
        _(!1);
      }
    },
    [f, n, i, d, l, m]
  ), E = B(() => {
    p([]), b(null);
  }, []), x = V(
    () => ({
      messages: d,
      isThinking: y,
      error: g,
      sendMessage: w,
      clearMessages: E,
      model: l,
      systemPrompt: m
    }),
    [d, y, g, w, E, l, m]
  );
  return /* @__PURE__ */ t.jsx(ee.Provider, { value: x, children: c });
}
function Ee() {
  const n = le(ee);
  if (!n)
    throw new Error(
      "useGeminiWebMcpAgent must be used inside GeminiWebMcpAgentProvider."
    );
  return n;
}
function ye({
  className: n = "",
  title: l = "Chat Assistant",
  placeholder: m = "Ask the assistant to read or update app state...",
  emptyState: h = "No messages yet. Ask me to use your WebMCP tools.",
  sendLabel: c = "Send",
  clearLabel: i = "Clear",
  showClearButton: d = !0,
  onMinimize: p,
  minimizeLabel: y = "Minimize assistant",
  showMinimizeButton: _ = !0
}) {
  const { messages: g, isThinking: b, error: f, sendMessage: w, clearMessages: E } = Ee(), [x, v] = O("");
  async function k(u) {
    if (u.preventDefault(), !x.trim()) return;
    const T = x;
    v(""), await w(T);
  }
  return /* @__PURE__ */ t.jsxs("section", { className: `webmcp-card ${n}`.trim(), children: [
    /* @__PURE__ */ t.jsxs("header", { className: "webmcp-header", children: [
      /* @__PURE__ */ t.jsx("strong", { children: l }),
      /* @__PURE__ */ t.jsxs("div", { className: "webmcp-header-actions", children: [
        /* @__PURE__ */ t.jsx("span", { className: b ? "webmcp-dot pulse" : "webmcp-dot" }),
        /* @__PURE__ */ t.jsx("span", { children: b ? "Thinking..." : "Ready" }),
        _ && p ? /* @__PURE__ */ t.jsx(
          "button",
          {
            type: "button",
            onClick: p,
            className: "webmcp-minimize",
            "aria-label": y,
            children: /* @__PURE__ */ t.jsx(ve, {})
          }
        ) : null
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "webmcp-messages", children: [
      g.length === 0 && /* @__PURE__ */ t.jsx("p", { className: "webmcp-empty", children: h }),
      g.map((u) => /* @__PURE__ */ t.jsx("div", { className: "webmcp-message-row", children: /* @__PURE__ */ t.jsx(
        "div",
        {
          className: u.role === "user" ? "webmcp-bubble user" : "webmcp-bubble bot",
          children: u.text
        }
      ) }, u.id)),
      f && /* @__PURE__ */ t.jsx("p", { className: "webmcp-error", children: f })
    ] }),
    /* @__PURE__ */ t.jsxs("form", { onSubmit: k, className: "webmcp-input-row", children: [
      /* @__PURE__ */ t.jsx(
        "input",
        {
          value: x,
          onChange: (u) => v(u.target.value),
          placeholder: m,
          className: "webmcp-input"
        }
      ),
      /* @__PURE__ */ t.jsx("button", { type: "submit", disabled: b, className: "webmcp-send", children: c }),
      d ? /* @__PURE__ */ t.jsx("button", { type: "button", onClick: E, className: "webmcp-clear", children: i }) : null
    ] })
  ] });
}
function Re({
  apiKey: n,
  model: l,
  systemPrompt: m,
  className: h,
  panelClassName: c,
  chatClassName: i,
  launcherClassName: d,
  launcherIcon: p,
  launcherLabel: y = "Open assistant",
  closeLauncherLabel: _ = "Close assistant",
  minimizeLabel: g = "Minimize assistant",
  showMinimizeButton: b = !0,
  showLauncher: f = !0,
  defaultOpen: w = !1,
  position: E = "bottom-right",
  size: x = "md",
  ...v
}) {
  const [k, u] = O(w);
  ce(() => {
    u(w);
  }, [w]);
  const T = x === "sm" ? "webmcp-size-sm" : x === "lg" ? "webmcp-size-lg" : "webmcp-size-md", j = [
    "webmcp-widget-shell",
    `webmcp-${E}`,
    T,
    h || ""
  ].join(" ").trim(), R = [
    "webmcp-panel",
    k || !f ? "webmcp-panel-open" : "webmcp-panel-closed",
    c || ""
  ].join(" ").trim();
  return /* @__PURE__ */ t.jsx(
    ke,
    {
      apiKey: n,
      model: l,
      systemPrompt: m,
      children: /* @__PURE__ */ t.jsxs("div", { className: j, children: [
        f ? /* @__PURE__ */ t.jsx(
          "button",
          {
            type: "button",
            onClick: () => u((N) => !N),
            className: `webmcp-launcher ${d || ""}`.trim(),
            "aria-expanded": k,
            "aria-label": k ? _ : y,
            children: p || /* @__PURE__ */ t.jsx(xe, {})
          }
        ) : null,
        /* @__PURE__ */ t.jsx("div", { className: R, children: /* @__PURE__ */ t.jsx(
          ye,
          {
            className: i,
            onMinimize: f ? () => u(!1) : void 0,
            minimizeLabel: g,
            showMinimizeButton: b && f,
            ...v
          }
        ) })
      ] })
    }
  );
}
export {
  ge as DEFAULT_SYSTEM_PROMPT,
  ke as GeminiWebMcpAgentProvider,
  ye as GeminiWebMcpChat,
  Re as WebMcpChatWidget,
  Re as default,
  Ee as useGeminiWebMcpAgent
};
