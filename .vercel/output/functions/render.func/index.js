globalThis.global = globalThis;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/chunks/index.js
function noop() {
}
function assign(tar, src) {
  for (const k in src)
    tar[k] = src[k];
  return tar;
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function set_current_component(component4) {
  current_component = component4;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
function validate_component(component4, name) {
  if (!component4 || !component4.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`);
  }
  return component4;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css) => css.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    Promise.resolve();
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// .svelte-kit/output/server/chunks/index2.js
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
var subscriber_queue;
var init_index2 = __esm({
  ".svelte-kit/output/server/chunks/index2.js"() {
    init_chunks();
    subscriber_queue = [];
  }
});

// .svelte-kit/output/server/chunks/hooks.js
var hooks_exports = {};
var init_hooks = __esm({
  ".svelte-kit/output/server/chunks/hooks.js"() {
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_chunks();
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${slots.default ? slots.default({}) : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  file: () => file,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component, file, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    file = "_app/immutable/components/pages/_layout.svelte-1ed3784c.js";
    imports = ["_app/immutable/components/pages/_layout.svelte-1ed3784c.js", "_app/immutable/chunks/index-846b5d79.js"];
    stylesheets = ["_app/immutable/assets/_layout-38e6842f.css"];
    fonts = [];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error$1
});
function removed_session() {
  throw new Error(
    "stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
  );
}
var getStores, page, Error$1;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_chunks();
    getStores = () => {
      const stores = getContext("__svelte__");
      const readonly_stores = {
        page: {
          subscribe: stores.page.subscribe
        },
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        updated: stores.updated
      };
      Object.defineProperties(readonly_stores, {
        preloading: {
          get() {
            console.error("stores.preloading is deprecated; use stores.navigating instead");
            return {
              subscribe: stores.navigating.subscribe
            };
          },
          enumerable: false
        },
        session: {
          get() {
            removed_session();
            return {};
          },
          enumerable: false
        }
      });
      return readonly_stores;
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
    Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<h1>${escape($page.status)}</h1>

<pre>${escape($page.error.message)}</pre>



${$page.error.frame ? `<pre>${escape($page.error.frame)}</pre>` : ``}
${$page.error.stack ? `<pre>${escape($page.error.stack)}</pre>` : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  file: () => file2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component2, file2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    file2 = "_app/immutable/components/error.svelte-02d713cc.js";
    imports2 = ["_app/immutable/components/error.svelte-02d713cc.js", "_app/immutable/chunks/index-846b5d79.js", "_app/immutable/chunks/singletons-0abf66f8.js", "_app/immutable/chunks/index-2879e7ce.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// node_modules/.pnpm/animejs@3.2.1/node_modules/animejs/lib/anime.es.js
function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}
function stringContains(str, text) {
  return str.indexOf(text) > -1;
}
function applyArguments(func, args) {
  return func.apply(null, args);
}
function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(",").map(function(p) {
    return parseFloat(p);
  }) : [];
}
function spring(string, duration) {
  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], 0.1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], 0.1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], 0.1, 100);
  var velocity = minMax(is.und(params[3]) ? 0 : params[3], 0.1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;
  function solver(t) {
    var progress = duration ? duration * t / 1e3 : t;
    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }
    if (t === 0 || t === 1) {
      return t;
    }
    return 1 - progress;
  }
  function getDuration() {
    var cached = cache.springs[string];
    if (cached) {
      return cached;
    }
    var frame = 1 / 6;
    var elapsed = 0;
    var rest = 0;
    while (true) {
      elapsed += frame;
      if (solver(elapsed) === 1) {
        rest++;
        if (rest >= 16) {
          break;
        }
      } else {
        rest = 0;
      }
    }
    var duration2 = elapsed * frame * 1e3;
    cache.springs[string] = duration2;
    return duration2;
  }
  return duration ? solver : getDuration;
}
function steps(steps2) {
  if (steps2 === void 0)
    steps2 = 10;
  return function(t) {
    return Math.ceil(minMax(t, 1e-6, 1) * steps2) * (1 / steps2);
  };
}
function parseEasings(easing, duration) {
  if (is.fnc(easing)) {
    return easing;
  }
  var name = easing.split("(")[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);
  switch (name) {
    case "spring":
      return spring(easing, duration);
    case "cubicBezier":
      return applyArguments(bezier, args);
    case "steps":
      return applyArguments(steps, args);
    default:
      return applyArguments(ease, args);
  }
}
function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch (e) {
    return;
  }
}
function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];
  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];
      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }
  return result;
}
function flattenArray(arr) {
  return arr.reduce(function(a, b) {
    return a.concat(is.arr(b) ? flattenArray(b) : b);
  }, []);
}
function toArray(o) {
  if (is.arr(o)) {
    return o;
  }
  if (is.str(o)) {
    o = selectString(o) || o;
  }
  if (o instanceof NodeList || o instanceof HTMLCollection) {
    return [].slice.call(o);
  }
  return [o];
}
function arrayContains(arr, val) {
  return arr.some(function(a) {
    return a === val;
  });
}
function cloneObject(o) {
  var clone = {};
  for (var p in o) {
    clone[p] = o[p];
  }
  return clone;
}
function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o1) {
    o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
  }
  return o;
}
function mergeObjects(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o2) {
    o[p] = is.und(o1[p]) ? o2[p] : o1[p];
  }
  return o;
}
function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}
function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function(m, r2, g2, b2) {
    return r2 + r2 + g2 + g2 + b2 + b2;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(" + r + "," + g + "," + b + ",1)";
}
function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s2 = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;
  function hue2rgb(p2, q2, t) {
    if (t < 0) {
      t += 1;
    }
    if (t > 1) {
      t -= 1;
    }
    if (t < 1 / 6) {
      return p2 + (q2 - p2) * 6 * t;
    }
    if (t < 1 / 2) {
      return q2;
    }
    if (t < 2 / 3) {
      return p2 + (q2 - p2) * (2 / 3 - t) * 6;
    }
    return p2;
  }
  var r, g, b;
  if (s2 == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s2) : l + s2 - l * s2;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}
function colorToRgb(val) {
  if (is.rgb(val)) {
    return rgbToRgba(val);
  }
  if (is.hex(val)) {
    return hexToRgba(val);
  }
  if (is.hsl(val)) {
    return hslToRgba(val);
  }
}
function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
  if (split) {
    return split[1];
  }
}
function getTransformUnit(propName) {
  if (stringContains(propName, "translate") || propName === "perspective") {
    return "px";
  }
  if (stringContains(propName, "rotate") || stringContains(propName, "skew")) {
    return "deg";
  }
}
function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) {
    return val;
  }
  return val(animatable.target, animatable.id, animatable.total);
}
function getAttribute(el, prop) {
  return el.getAttribute(prop);
}
function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);
  if (arrayContains([unit, "deg", "rad", "turn"], valueUnit)) {
    return value;
  }
  var cached = cache.CSS[value + unit];
  if (!is.und(cached)) {
    return cached;
  }
  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = "absolute";
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}
function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || "0";
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}
function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || is.svg(el) && el[prop])) {
    return "attribute";
  }
  if (is.dom(el) && arrayContains(validTransforms, prop)) {
    return "transform";
  }
  if (is.dom(el) && (prop !== "transform" && getCSSValue(el, prop))) {
    return "css";
  }
  if (el[prop] != null) {
    return "object";
  }
}
function getElementTransforms(el) {
  if (!is.dom(el)) {
    return;
  }
  var str = el.style.transform || "";
  var reg = /(\w+)\(([^)]*)\)/g;
  var transforms = /* @__PURE__ */ new Map();
  var m;
  while (m = reg.exec(str)) {
    transforms.set(m[1], m[2]);
  }
  return transforms;
}
function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, "scale") ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;
  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms["last"] = propName;
  }
  return unit ? convertPxToUnit(el, value, unit) : value;
}
function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case "transform":
      return getTransformValue(target, propName, animatable, unit);
    case "css":
      return getCSSValue(target, propName, unit);
    case "attribute":
      return getAttribute(target, propName);
    default:
      return target[propName] || 0;
  }
}
function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);
  if (!operator) {
    return to;
  }
  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ""));
  switch (operator[0][0]) {
    case "+":
      return x + y + u;
    case "-":
      return x - y + u;
    case "*":
      return x * y + u;
  }
}
function validateValue(val, unit) {
  if (is.col(val)) {
    return colorToRgb(val);
  }
  if (/\s/g.test(val)) {
    return val;
  }
  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
  if (unit) {
    return unitLess + unit;
  }
  return unitLess;
}
function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, "r");
}
function getRectLength(el) {
  return getAttribute(el, "width") * 2 + getAttribute(el, "height") * 2;
}
function getLineLength(el) {
  return getDistance(
    { x: getAttribute(el, "x1"), y: getAttribute(el, "y1") },
    { x: getAttribute(el, "x2"), y: getAttribute(el, "y2") }
  );
}
function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;
  for (var i = 0; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);
    if (i > 0) {
      totalLength += getDistance(previousPos, currentPos);
    }
    previousPos = currentPos;
  }
  return totalLength;
}
function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
}
function getTotalLength(el) {
  if (el.getTotalLength) {
    return el.getTotalLength();
  }
  switch (el.tagName.toLowerCase()) {
    case "circle":
      return getCircleLength(el);
    case "rect":
      return getRectLength(el);
    case "line":
      return getLineLength(el);
    case "polyline":
      return getPolylineLength(el);
    case "polygon":
      return getPolygonLength(el);
  }
}
function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute("stroke-dasharray", pathLength);
  return pathLength;
}
function getParentSvgEl(el) {
  var parentEl = el.parentNode;
  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) {
      break;
    }
    parentEl = parentEl.parentNode;
  }
  return parentEl;
}
function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, "viewBox");
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(" ") : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[2],
    vH: viewBox[3]
  };
}
function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function(property) {
    return {
      property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    };
  };
}
function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if (offset === void 0)
      offset = 0;
    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }
  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(1);
  var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
  var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
  switch (path.property) {
    case "x":
      return (p.x - svg.x) * scaleX;
    case "y":
      return (p.y - svg.y) * scaleY;
    case "angle":
      return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
}
function decomposeValue(val, unit) {
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;
  var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + "";
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: is.str(val) || unit ? value.split(rgx) : []
  };
}
function parseTargets(targets) {
  var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
  return filterArray(targetsArray, function(item, pos, self) {
    return self.indexOf(item) === pos;
  });
}
function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function(t, i) {
    return { target: t, id: i, total: parsed.length, transforms: { list: getElementTransforms(t) } };
  });
}
function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);
  if (/^spring/.test(settings.easing)) {
    settings.duration = spring(settings.easing);
  }
  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = l === 2 && !is.obj(prop[0]);
    if (!isFromTo) {
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l;
      }
    } else {
      prop = { value: prop };
    }
  }
  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function(v, i) {
    var obj = is.obj(v) && !is.pth(v) ? v : { value: v };
    if (is.und(obj.delay)) {
      obj.delay = !i ? tweenSettings.delay : 0;
    }
    if (is.und(obj.endDelay)) {
      obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0;
    }
    return obj;
  }).map(function(k) {
    return mergeObjects(k, settings);
  });
}
function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function(key2) {
    return Object.keys(key2);
  })), function(p) {
    return is.key(p);
  }).reduce(function(a, b) {
    if (a.indexOf(b) < 0) {
      a.push(b);
    }
    return a;
  }, []);
  var properties = {};
  var loop = function(i2) {
    var propName = propertyNames[i2];
    properties[propName] = keyframes.map(function(key2) {
      var newKey = {};
      for (var p in key2) {
        if (is.key(p)) {
          if (p == propName) {
            newKey.value = key2[p];
          }
        } else {
          newKey[p] = key2[p];
        }
      }
      return newKey;
    });
  };
  for (var i = 0; i < propertyNames.length; i++)
    loop(i);
  return properties;
}
function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;
  if (keyframes) {
    params = mergeObjects(flattenKeyframes(keyframes), params);
  }
  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }
  return properties;
}
function normalizeTweenValues(tween, animatable) {
  var t = {};
  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);
    if (is.arr(value)) {
      value = value.map(function(v) {
        return getFunctionValue(v, animatable);
      });
      if (value.length === 1) {
        value = value[0];
      }
    }
    t[p] = value;
  }
  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}
function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function(t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;
    if (is.und(to)) {
      to = previousValue;
    }
    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
    tween.isColor = is.col(tween.from.original);
    if (tween.isColor) {
      tween.round = 1;
    }
    previousTween = tween;
    return tween;
  });
}
function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function(animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
}
function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);
  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable,
      tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    };
  }
}
function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function(animatable) {
    return properties.map(function(prop) {
      return createAnimation(animatable, prop);
    });
  })), function(a) {
    return !is.und(a);
  });
}
function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var getTlOffset = function(anim) {
    return anim.timelineOffset ? anim.timelineOffset : 0;
  };
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function(anim) {
    return getTlOffset(anim) + anim.duration;
  })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function(anim) {
    return getTlOffset(anim) + anim.delay;
  })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function(anim) {
    return getTlOffset(anim) + anim.duration - anim.endDelay;
  })) : tweenSettings.endDelay;
  return timings;
}
function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id,
    children: [],
    animatables,
    animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
}
function isDocumentHidden() {
  return !!document && document.hidden;
}
function anime(params) {
  if (params === void 0)
    params = {};
  var startTime = 0, lastTime = 0, now = 0;
  var children, childrenLength = 0;
  var resolve = null;
  function makePromise(instance2) {
    var promise2 = window.Promise && new Promise(function(_resolve) {
      return resolve = _resolve;
    });
    instance2.finished = promise2;
    return promise2;
  }
  var instance = createNewInstance(params);
  var promise = makePromise(instance);
  function toggleInstanceDirection() {
    var direction = instance.direction;
    if (direction !== "alternate") {
      instance.direction = direction !== "normal" ? "normal" : "reverse";
    }
    instance.reversed = !instance.reversed;
    children.forEach(function(child) {
      return child.reversed = instance.reversed;
    });
  }
  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }
  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }
  function seekChild(time, child) {
    if (child) {
      child.seek(time - child.timelineOffset);
    }
  }
  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) {
        seekChild(time, children[i]);
      }
    } else {
      for (var i$1 = childrenLength; i$1--; ) {
        seekChild(time, children[i$1]);
      }
    }
  }
  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;
    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength];
      if (tweenLength) {
        tween = filterArray(tweens, function(t) {
          return insTime < t.end;
        })[0] || tween;
      }
      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = void 0;
      for (var n = 0; n < toNumbersLength; n++) {
        var value = void 0;
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        if (!tween.isPath) {
          value = fromNumber + eased * (toNumber - fromNumber);
        } else {
          value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
        }
        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }
        numbers.push(value);
      }
      var stringsLength = strings.length;
      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];
        for (var s2 = 0; s2 < stringsLength; s2++) {
          var a = strings[s2];
          var b = strings[s2 + 1];
          var n$1 = numbers[s2];
          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + " ";
            } else {
              progress += n$1 + b;
            }
          }
        }
      }
      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }
  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) {
      instance[cb](instance);
    }
  }
  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }
  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax(insTime / insDuration * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;
    if (children) {
      syncInstanceChildren(insTime);
    }
    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback("begin");
    }
    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback("loopBegin");
    }
    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }
    if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) {
      setAnimationsProgress(insDuration);
    }
    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback("changeBegin");
      }
      setCallback("change");
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback("changeComplete");
      }
    }
    instance.currentTime = minMax(insTime, 0, insDuration);
    if (instance.began) {
      setCallback("update");
    }
    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();
      if (!instance.remaining) {
        instance.paused = true;
        if (!instance.completed) {
          instance.completed = true;
          setCallback("loopComplete");
          setCallback("complete");
          if (!instance.passThrough && "Promise" in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback("loopComplete");
        instance.loopBegan = false;
        if (instance.direction === "alternate") {
          toggleInstanceDirection();
        }
      }
    }
  }
  instance.reset = function() {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === "reverse";
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;
    for (var i = childrenLength; i--; ) {
      instance.children[i].reset();
    }
    if (instance.reversed && instance.loop !== true || direction === "alternate" && instance.loop === 1) {
      instance.remaining++;
    }
    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  };
  instance._onDocumentVisibility = resetTime;
  instance.set = function(targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };
  instance.tick = function(t) {
    now = t;
    if (!startTime) {
      startTime = now;
    }
    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };
  instance.seek = function(time) {
    setInstanceProgress(adjustTime(time));
  };
  instance.pause = function() {
    instance.paused = true;
    resetTime();
  };
  instance.play = function() {
    if (!instance.paused) {
      return;
    }
    if (instance.completed) {
      instance.reset();
    }
    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    engine();
  };
  instance.reverse = function() {
    toggleInstanceDirection();
    instance.completed = instance.reversed ? false : true;
    resetTime();
  };
  instance.restart = function() {
    instance.reset();
    instance.play();
  };
  instance.remove = function(targets) {
    var targetsArray = parseTargets(targets);
    removeTargetsFromInstance(targetsArray, instance);
  };
  instance.reset();
  if (instance.autoplay) {
    instance.play();
  }
  return instance;
}
function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--; ) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}
function removeTargetsFromInstance(targetsArray, instance) {
  var animations = instance.animations;
  var children = instance.children;
  removeTargetsFromAnimations(targetsArray, animations);
  for (var c = children.length; c--; ) {
    var child = children[c];
    var childAnimations = child.animations;
    removeTargetsFromAnimations(targetsArray, childAnimations);
    if (!childAnimations.length && !child.children.length) {
      children.splice(c, 1);
    }
  }
  if (!animations.length && !children.length) {
    instance.pause();
  }
}
function removeTargetsFromActiveInstances(targets) {
  var targetsArray = parseTargets(targets);
  for (var i = activeInstances.length; i--; ) {
    var instance = activeInstances[i];
    removeTargetsFromInstance(targetsArray, instance);
  }
}
function stagger(val, params) {
  if (params === void 0)
    params = {};
  var direction = params.direction || "normal";
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === "first";
  var fromCenter = fromIndex === "center";
  var fromLast = fromIndex === "last";
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function(el, i, t) {
    if (fromFirst) {
      fromIndex = 0;
    }
    if (fromCenter) {
      fromIndex = (t - 1) / 2;
    }
    if (fromLast) {
      fromIndex = t - 1;
    }
    if (!values.length) {
      for (var index4 = 0; index4 < t; index4++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index4));
        } else {
          var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
          var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
          var toX = index4 % grid[0];
          var toY = Math.floor(index4 / grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          if (axis === "x") {
            value = -distanceX;
          }
          if (axis === "y") {
            value = -distanceY;
          }
          values.push(value);
        }
        maxValue = Math.max.apply(Math, values);
      }
      if (easing) {
        values = values.map(function(val3) {
          return easing(val3 / maxValue) * maxValue;
        });
      }
      if (direction === "reverse") {
        values = values.map(function(val3) {
          return axis ? val3 < 0 ? val3 * -1 : -val3 : Math.abs(maxValue - val3);
        });
      }
    }
    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + spacing * (Math.round(values[i] * 100) / 100) + unit;
  };
}
function timeline(params) {
  if (params === void 0)
    params = {};
  var tl = anime(params);
  tl.duration = 0;
  tl.add = function(instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;
    if (tlIndex > -1) {
      activeInstances.splice(tlIndex, 1);
    }
    function passThrough(ins2) {
      ins2.passThrough = true;
    }
    for (var i = 0; i < children.length; i++) {
      passThrough(children[i]);
    }
    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();
    if (tl.autoplay) {
      tl.play();
    }
    return tl;
  };
  return tl;
}
var defaultInstanceSettings, defaultTweenSettings, validTransforms, cache, is, bezier, penner, setProgressValue, instanceID, activeInstances, engine;
var init_anime_es = __esm({
  "node_modules/.pnpm/animejs@3.2.1/node_modules/animejs/lib/anime.es.js"() {
    defaultInstanceSettings = {
      update: null,
      begin: null,
      loopBegin: null,
      changeBegin: null,
      change: null,
      changeComplete: null,
      loopComplete: null,
      complete: null,
      loop: 1,
      direction: "normal",
      autoplay: true,
      timelineOffset: 0
    };
    defaultTweenSettings = {
      duration: 1e3,
      delay: 0,
      endDelay: 0,
      easing: "easeOutElastic(1, .5)",
      round: 0
    };
    validTransforms = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"];
    cache = {
      CSS: {},
      springs: {}
    };
    is = {
      arr: function(a) {
        return Array.isArray(a);
      },
      obj: function(a) {
        return stringContains(Object.prototype.toString.call(a), "Object");
      },
      pth: function(a) {
        return is.obj(a) && a.hasOwnProperty("totalLength");
      },
      svg: function(a) {
        return a instanceof SVGElement;
      },
      inp: function(a) {
        return a instanceof HTMLInputElement;
      },
      dom: function(a) {
        return a.nodeType || is.svg(a);
      },
      str: function(a) {
        return typeof a === "string";
      },
      fnc: function(a) {
        return typeof a === "function";
      },
      und: function(a) {
        return typeof a === "undefined";
      },
      nil: function(a) {
        return is.und(a) || a === null;
      },
      hex: function(a) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
      },
      rgb: function(a) {
        return /^rgb/.test(a);
      },
      hsl: function(a) {
        return /^hsl/.test(a);
      },
      col: function(a) {
        return is.hex(a) || is.rgb(a) || is.hsl(a);
      },
      key: function(a) {
        return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== "targets" && a !== "keyframes";
      }
    };
    bezier = function() {
      var kSplineTableSize = 11;
      var kSampleStepSize = 1 / (kSplineTableSize - 1);
      function A(aA1, aA2) {
        return 1 - 3 * aA2 + 3 * aA1;
      }
      function B(aA1, aA2) {
        return 3 * aA2 - 6 * aA1;
      }
      function C(aA1) {
        return 3 * aA1;
      }
      function calcBezier(aT, aA1, aA2) {
        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
      }
      function getSlope(aT, aA1, aA2) {
        return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
      }
      function binarySubdivide(aX, aA, aB, mX1, mX2) {
        var currentX, currentT, i = 0;
        do {
          currentT = aA + (aB - aA) / 2;
          currentX = calcBezier(currentT, mX1, mX2) - aX;
          if (currentX > 0) {
            aB = currentT;
          } else {
            aA = currentT;
          }
        } while (Math.abs(currentX) > 1e-7 && ++i < 10);
        return currentT;
      }
      function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
        for (var i = 0; i < 4; ++i) {
          var currentSlope = getSlope(aGuessT, mX1, mX2);
          if (currentSlope === 0) {
            return aGuessT;
          }
          var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
          aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
      }
      function bezier2(mX1, mY1, mX2, mY2) {
        if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
          return;
        }
        var sampleValues = new Float32Array(kSplineTableSize);
        if (mX1 !== mY1 || mX2 !== mY2) {
          for (var i = 0; i < kSplineTableSize; ++i) {
            sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
          }
        }
        function getTForX(aX) {
          var intervalStart = 0;
          var currentSample = 1;
          var lastSample = kSplineTableSize - 1;
          for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
          }
          --currentSample;
          var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
          var guessForT = intervalStart + dist * kSampleStepSize;
          var initialSlope = getSlope(guessForT, mX1, mX2);
          if (initialSlope >= 1e-3) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
          } else if (initialSlope === 0) {
            return guessForT;
          } else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
          }
        }
        return function(x) {
          if (mX1 === mY1 && mX2 === mY2) {
            return x;
          }
          if (x === 0 || x === 1) {
            return x;
          }
          return calcBezier(getTForX(x), mY1, mY2);
        };
      }
      return bezier2;
    }();
    penner = function() {
      var eases = { linear: function() {
        return function(t) {
          return t;
        };
      } };
      var functionEasings = {
        Sine: function() {
          return function(t) {
            return 1 - Math.cos(t * Math.PI / 2);
          };
        },
        Circ: function() {
          return function(t) {
            return 1 - Math.sqrt(1 - t * t);
          };
        },
        Back: function() {
          return function(t) {
            return t * t * (3 * t - 2);
          };
        },
        Bounce: function() {
          return function(t) {
            var pow2, b = 4;
            while (t < ((pow2 = Math.pow(2, --b)) - 1) / 11) {
            }
            return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2);
          };
        },
        Elastic: function(amplitude, period) {
          if (amplitude === void 0)
            amplitude = 1;
          if (period === void 0)
            period = 0.5;
          var a = minMax(amplitude, 1, 10);
          var p = minMax(period, 0.1, 2);
          return function(t) {
            return t === 0 || t === 1 ? t : -a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
          };
        }
      };
      var baseEasings = ["Quad", "Cubic", "Quart", "Quint", "Expo"];
      baseEasings.forEach(function(name, i) {
        functionEasings[name] = function() {
          return function(t) {
            return Math.pow(t, i + 2);
          };
        };
      });
      Object.keys(functionEasings).forEach(function(name) {
        var easeIn = functionEasings[name];
        eases["easeIn" + name] = easeIn;
        eases["easeOut" + name] = function(a, b) {
          return function(t) {
            return 1 - easeIn(a, b)(1 - t);
          };
        };
        eases["easeInOut" + name] = function(a, b) {
          return function(t) {
            return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 1 - easeIn(a, b)(t * -2 + 2) / 2;
          };
        };
        eases["easeOutIn" + name] = function(a, b) {
          return function(t) {
            return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : (easeIn(a, b)(t * 2 - 1) + 1) / 2;
          };
        };
      });
      return eases;
    }();
    setProgressValue = {
      css: function(t, p, v) {
        return t.style[p] = v;
      },
      attribute: function(t, p, v) {
        return t.setAttribute(p, v);
      },
      object: function(t, p, v) {
        return t[p] = v;
      },
      transform: function(t, p, v, transforms, manual) {
        transforms.list.set(p, v);
        if (p === transforms.last || manual) {
          var str = "";
          transforms.list.forEach(function(value, prop) {
            str += prop + "(" + value + ") ";
          });
          t.style.transform = str;
        }
      }
    };
    instanceID = 0;
    activeInstances = [];
    engine = function() {
      var raf;
      function play() {
        if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) {
          raf = requestAnimationFrame(step);
        }
      }
      function step(t) {
        var activeInstancesLength = activeInstances.length;
        var i = 0;
        while (i < activeInstancesLength) {
          var activeInstance = activeInstances[i];
          if (!activeInstance.paused) {
            activeInstance.tick(t);
            i++;
          } else {
            activeInstances.splice(i, 1);
            activeInstancesLength--;
          }
        }
        raf = i > 0 ? requestAnimationFrame(step) : void 0;
      }
      function handleVisibilityChange() {
        if (!anime.suspendWhenDocumentHidden) {
          return;
        }
        if (isDocumentHidden()) {
          raf = cancelAnimationFrame(raf);
        } else {
          activeInstances.forEach(
            function(instance) {
              return instance._onDocumentVisibility();
            }
          );
          engine();
        }
      }
      if (typeof document !== "undefined") {
        document.addEventListener("visibilitychange", handleVisibilityChange);
      }
      return play;
    }();
    anime.version = "3.2.1";
    anime.speed = 1;
    anime.suspendWhenDocumentHidden = true;
    anime.running = activeInstances;
    anime.remove = removeTargetsFromActiveInstances;
    anime.get = getOriginalTargetValue;
    anime.set = setTargetsValue;
    anime.convertPx = convertPxToUnit;
    anime.path = getPath;
    anime.setDashoffset = setDashoffset;
    anime.stagger = stagger;
    anime.timeline = timeline;
    anime.easing = parseEasings;
    anime.penner = penner;
    anime.random = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  }
});

// node_modules/.pnpm/@vanilla-extract+css@1.9.2/node_modules/@vanilla-extract/css/dist/taggedTemplateLiteral-2d2668f5.browser.esm.js
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
var init_taggedTemplateLiteral_2d2668f5_browser_esm = __esm({
  "node_modules/.pnpm/@vanilla-extract+css@1.9.2/node_modules/@vanilla-extract/css/dist/taggedTemplateLiteral-2d2668f5.browser.esm.js"() {
  }
});

// node_modules/.pnpm/outdent@0.8.0/node_modules/outdent/lib-module/index.js
function noop2() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
}
function createWeakMap() {
  if (typeof WeakMap !== "undefined") {
    return /* @__PURE__ */ new WeakMap();
  } else {
    return fakeSetOrMap();
  }
}
function fakeSetOrMap() {
  return {
    add: noop2,
    delete: noop2,
    get: noop2,
    set: noop2,
    has: function(k) {
      return false;
    }
  };
}
function extend(target, source) {
  for (var prop in source) {
    if (has(source, prop)) {
      target[prop] = source[prop];
    }
  }
  return target;
}
function _outdentArray(strings, firstInterpolatedValueSetsIndentationLevel, options) {
  var indentationLevel = 0;
  var match = strings[0].match(reDetectIndentation);
  if (match) {
    indentationLevel = match[1].length;
  }
  var reSource = "(\\r\\n|\\r|\\n).{0," + indentationLevel + "}";
  var reMatchIndent = new RegExp(reSource, "g");
  if (firstInterpolatedValueSetsIndentationLevel) {
    strings = strings.slice(1);
  }
  var newline = options.newline, trimLeadingNewline = options.trimLeadingNewline, trimTrailingNewline = options.trimTrailingNewline;
  var normalizeNewlines = typeof newline === "string";
  var l = strings.length;
  var outdentedStrings = strings.map(function(v, i) {
    v = v.replace(reMatchIndent, "$1");
    if (i === 0 && trimLeadingNewline) {
      v = v.replace(reLeadingNewline, "");
    }
    if (i === l - 1 && trimTrailingNewline) {
      v = v.replace(reTrailingNewline, "");
    }
    if (normalizeNewlines) {
      v = v.replace(/\r\n|\n|\r/g, function(_) {
        return newline;
      });
    }
    return v;
  });
  return outdentedStrings;
}
function concatStringsAndValues(strings, values) {
  var ret = "";
  for (var i = 0, l = strings.length; i < l; i++) {
    ret += strings[i];
    if (i < l - 1) {
      ret += values[i];
    }
  }
  return ret;
}
function isTemplateStringsArray(v) {
  return has(v, "raw") && has(v, "length");
}
function createInstance(options) {
  var arrayAutoIndentCache = createWeakMap();
  var arrayFirstInterpSetsIndentCache = createWeakMap();
  function outdent(stringsOrOptions) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      values[_i - 1] = arguments[_i];
    }
    if (isTemplateStringsArray(stringsOrOptions)) {
      var strings = stringsOrOptions;
      var firstInterpolatedValueSetsIndentationLevel = (values[0] === outdent || values[0] === defaultOutdent) && reOnlyWhitespaceWithAtLeastOneNewline.test(strings[0]) && reStartsWithNewlineOrIsEmpty.test(strings[1]);
      var cache2 = firstInterpolatedValueSetsIndentationLevel ? arrayFirstInterpSetsIndentCache : arrayAutoIndentCache;
      var renderedArray = cache2.get(strings);
      if (!renderedArray) {
        renderedArray = _outdentArray(strings, firstInterpolatedValueSetsIndentationLevel, options);
        cache2.set(strings, renderedArray);
      }
      if (values.length === 0) {
        return renderedArray[0];
      }
      var rendered = concatStringsAndValues(renderedArray, firstInterpolatedValueSetsIndentationLevel ? values.slice(1) : values);
      return rendered;
    } else {
      return createInstance(extend(extend({}, options), stringsOrOptions || {}));
    }
  }
  var fullOutdent = extend(outdent, {
    string: function(str) {
      return _outdentArray([str], false, options)[0];
    }
  });
  return fullOutdent;
}
var hop, has, reLeadingNewline, reTrailingNewline, reStartsWithNewlineOrIsEmpty, reDetectIndentation, reOnlyWhitespaceWithAtLeastOneNewline, defaultOutdent, lib_module_default;
var init_lib_module = __esm({
  "node_modules/.pnpm/outdent@0.8.0/node_modules/outdent/lib-module/index.js"() {
    hop = Object.prototype.hasOwnProperty;
    has = function(obj, prop) {
      return hop.call(obj, prop);
    };
    reLeadingNewline = /^[ \t]*(?:\r\n|\r|\n)/;
    reTrailingNewline = /(?:\r\n|\r|\n)[ \t]*$/;
    reStartsWithNewlineOrIsEmpty = /^(?:[\r\n]|$)/;
    reDetectIndentation = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/;
    reOnlyWhitespaceWithAtLeastOneNewline = /^[ \t]*[\r\n][ \t\r\n]*$/;
    defaultOutdent = createInstance({
      trimLeadingNewline: true,
      trimTrailingNewline: true
    });
    lib_module_default = defaultOutdent;
    if (typeof module !== "undefined") {
      try {
        module.exports = defaultOutdent;
        Object.defineProperty(defaultOutdent, "__esModule", { value: true });
        defaultOutdent.default = defaultOutdent;
        defaultOutdent.outdent = defaultOutdent;
      } catch (e) {
      }
    }
  }
});

// node_modules/.pnpm/@vanilla-extract+css@1.9.2/node_modules/@vanilla-extract/css/adapter/dist/vanilla-extract-css-adapter.browser.esm.js
var mockAdapter, adapterStack, currentAdapter, hasConfiguredAdapter, setAdapterIfNotSet, setAdapter, appendCss, registerClassName, registerComposition, markCompositionUsed, onEndFileScope, getIdentOption;
var init_vanilla_extract_css_adapter_browser_esm = __esm({
  "node_modules/.pnpm/@vanilla-extract+css@1.9.2/node_modules/@vanilla-extract/css/adapter/dist/vanilla-extract-css-adapter.browser.esm.js"() {
    mockAdapter = {
      appendCss: () => {
      },
      registerClassName: () => {
      },
      onEndFileScope: () => {
      },
      registerComposition: () => {
      },
      markCompositionUsed: () => {
      },
      getIdentOption: () => false ? "short" : "debug"
    };
    adapterStack = [mockAdapter];
    currentAdapter = () => {
      if (adapterStack.length < 1) {
        throw new Error("No adapter configured");
      }
      return adapterStack[adapterStack.length - 1];
    };
    hasConfiguredAdapter = false;
    setAdapterIfNotSet = (newAdapter) => {
      if (!hasConfiguredAdapter) {
        setAdapter(newAdapter);
      }
    };
    setAdapter = (newAdapter) => {
      hasConfiguredAdapter = true;
      adapterStack.push(newAdapter);
    };
    appendCss = function appendCss2() {
      return currentAdapter().appendCss(...arguments);
    };
    registerClassName = function registerClassName2() {
      return currentAdapter().registerClassName(...arguments);
    };
    registerComposition = function registerComposition2() {
      return currentAdapter().registerComposition(...arguments);
    };
    markCompositionUsed = function markCompositionUsed2() {
      return currentAdapter().markCompositionUsed(...arguments);
    };
    onEndFileScope = function onEndFileScope2() {
      return currentAdapter().onEndFileScope(...arguments);
    };
    getIdentOption = function getIdentOption2() {
      var adapter = currentAdapter();
      if (!("getIdentOption" in adapter)) {
        return false ? "short" : "debug";
      }
      return adapter.getIdentOption(...arguments);
    };
  }
});

// node_modules/.pnpm/@vanilla-extract+css@1.9.2/node_modules/@vanilla-extract/css/fileScope/dist/vanilla-extract-css-fileScope.browser.esm.js
function setFileScope(filePath, packageName) {
  refCounter = 0;
  fileScopes.unshift({
    filePath,
    packageName
  });
}
function endFileScope() {
  onEndFileScope(getFileScope());
  refCounter = 0;
  fileScopes.splice(0, 1);
}
function getFileScope() {
  if (fileScopes.length === 0) {
    throw new Error(lib_module_default(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        Styles were unable to be assigned to a file. This is generally caused by one of the following:\n\n        - You may have created styles outside of a '.css.ts' context\n        - You may have incorrect configuration. See https://vanilla-extract.style/documentation/getting-started\n      "]))));
  }
  return fileScopes[0];
}
function getAndIncrementRefCounter() {
  return refCounter++;
}
var _templateObject, refCounter, fileScopes;
var init_vanilla_extract_css_fileScope_browser_esm = __esm({
  "node_modules/.pnpm/@vanilla-extract+css@1.9.2/node_modules/@vanilla-extract/css/fileScope/dist/vanilla-extract-css-fileScope.browser.esm.js"() {
    init_taggedTemplateLiteral_2d2668f5_browser_esm();
    init_lib_module();
    init_vanilla_extract_css_adapter_browser_esm();
    refCounter = 0;
    fileScopes = [];
  }
});

// node_modules/.pnpm/@vanilla-extract+css@1.9.2/node_modules/@vanilla-extract/css/functionSerializer/dist/vanilla-extract-css-functionSerializer.browser.esm.js
function addFunctionSerializer(target, recipe2) {
  Object.defineProperty(target, "__recipe__", {
    value: recipe2,
    writable: false
  });
  return target;
}
var init_vanilla_extract_css_functionSerializer_browser_esm = __esm({
  "node_modules/.pnpm/@vanilla-extract+css@1.9.2/node_modules/@vanilla-extract/css/functionSerializer/dist/vanilla-extract-css-functionSerializer.browser.esm.js"() {
  }
});

// node_modules/.pnpm/@vanilla-extract+css@1.9.2/node_modules/@vanilla-extract/css/recipe/dist/vanilla-extract-css-recipe.browser.esm.js
var addRecipe;
var init_vanilla_extract_css_recipe_browser_esm = __esm({
  "node_modules/.pnpm/@vanilla-extract+css@1.9.2/node_modules/@vanilla-extract/css/recipe/dist/vanilla-extract-css-recipe.browser.esm.js"() {
    init_vanilla_extract_css_functionSerializer_browser_esm();
    addRecipe = addFunctionSerializer;
  }
});

// node_modules/.pnpm/@vanilla-extract+css@1.9.2/node_modules/@vanilla-extract/css/injectStyles/dist/vanilla-extract-css-injectStyles.browser.esm.js
var stylesheets3, injectStyles;
var init_vanilla_extract_css_injectStyles_browser_esm = __esm({
  "node_modules/.pnpm/@vanilla-extract+css@1.9.2/node_modules/@vanilla-extract/css/injectStyles/dist/vanilla-extract-css-injectStyles.browser.esm.js"() {
    stylesheets3 = {};
    injectStyles = (_ref) => {
      var {
        fileScope,
        css
      } = _ref;
      var fileScopeId = fileScope.packageName ? [fileScope.packageName, fileScope.filePath].join("/") : fileScope.filePath;
      var stylesheet = stylesheets3[fileScopeId];
      if (!stylesheet) {
        var styleEl = document.createElement("style");
        if (fileScope.packageName) {
          styleEl.setAttribute("data-package", fileScope.packageName);
        }
        styleEl.setAttribute("data-file", fileScope.filePath);
        styleEl.setAttribute("type", "text/css");
        stylesheet = stylesheets3[fileScopeId] = styleEl;
        document.head.appendChild(styleEl);
      }
      stylesheet.innerHTML = css;
    };
  }
});

// node_modules/.pnpm/@vanilla-extract+private@1.0.3/node_modules/@vanilla-extract/private/dist/vanilla-extract-private.esm.js
function getVarName(variable) {
  var matches = variable.match(/^var\((.*)\)$/);
  if (matches) {
    return matches[1];
  }
  return variable;
}
var init_vanilla_extract_private_esm = __esm({
  "node_modules/.pnpm/@vanilla-extract+private@1.0.3/node_modules/@vanilla-extract/private/dist/vanilla-extract-private.esm.js"() {
  }
});

// node_modules/.pnpm/cssesc@3.0.0/node_modules/cssesc/cssesc.js
var require_cssesc = __commonJS({
  "node_modules/.pnpm/cssesc@3.0.0/node_modules/cssesc/cssesc.js"(exports, module2) {
    "use strict";
    var object = {};
    var hasOwnProperty2 = object.hasOwnProperty;
    var merge = function merge2(options, defaults) {
      if (!options) {
        return defaults;
      }
      var result = {};
      for (var key2 in defaults) {
        result[key2] = hasOwnProperty2.call(options, key2) ? options[key2] : defaults[key2];
      }
      return result;
    };
    var regexAnySingleEscape = /[ -,\.\/:-@\[-\^`\{-~]/;
    var regexSingleEscape = /[ -,\.\/:-@\[\]\^`\{-~]/;
    var regexExcessiveSpaces = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g;
    var cssesc3 = function cssesc4(string, options) {
      options = merge(options, cssesc4.options);
      if (options.quotes != "single" && options.quotes != "double") {
        options.quotes = "single";
      }
      var quote = options.quotes == "double" ? '"' : "'";
      var isIdentifier = options.isIdentifier;
      var firstChar = string.charAt(0);
      var output = "";
      var counter = 0;
      var length = string.length;
      while (counter < length) {
        var character = string.charAt(counter++);
        var codePoint = character.charCodeAt();
        var value = void 0;
        if (codePoint < 32 || codePoint > 126) {
          if (codePoint >= 55296 && codePoint <= 56319 && counter < length) {
            var extra = string.charCodeAt(counter++);
            if ((extra & 64512) == 56320) {
              codePoint = ((codePoint & 1023) << 10) + (extra & 1023) + 65536;
            } else {
              counter--;
            }
          }
          value = "\\" + codePoint.toString(16).toUpperCase() + " ";
        } else {
          if (options.escapeEverything) {
            if (regexAnySingleEscape.test(character)) {
              value = "\\" + character;
            } else {
              value = "\\" + codePoint.toString(16).toUpperCase() + " ";
            }
          } else if (/[\t\n\f\r\x0B]/.test(character)) {
            value = "\\" + codePoint.toString(16).toUpperCase() + " ";
          } else if (character == "\\" || !isIdentifier && (character == '"' && quote == character || character == "'" && quote == character) || isIdentifier && regexSingleEscape.test(character)) {
            value = "\\" + character;
          } else {
            value = character;
          }
        }
        output += value;
      }
      if (isIdentifier) {
        if (/^-[-\d]/.test(output)) {
          output = "\\-" + output.slice(1);
        } else if (/\d/.test(firstChar)) {
          output = "\\3" + firstChar + " " + output.slice(1);
        }
      }
      output = output.replace(regexExcessiveSpaces, function($0, $1, $2) {
        if ($1 && $1.length % 2) {
          return $0;
        }
        return ($1 || "") + $2;
      });
      if (!isIdentifier && options.wrap) {
        return quote + output + quote;
      }
      return output;
    };
    cssesc3.options = {
      "escapeEverything": false,
      "isIdentifier": false,
      "quotes": "single",
      "wrap": false
    };
    cssesc3.version = "3.0.0";
    module2.exports = cssesc3;
  }
});

// node_modules/.pnpm/ahocorasick@1.0.2/node_modules/ahocorasick/src/main.js
var require_main = __commonJS({
  "node_modules/.pnpm/ahocorasick@1.0.2/node_modules/ahocorasick/src/main.js"(exports, module2) {
    (function() {
      "use strict";
      var AhoCorasick2 = function(keywords) {
        this._buildTables(keywords);
      };
      AhoCorasick2.prototype._buildTables = function(keywords) {
        var gotoFn = {
          0: {}
        };
        var output = {};
        var state = 0;
        keywords.forEach(function(word) {
          var curr = 0;
          for (var i = 0; i < word.length; i++) {
            var l2 = word[i];
            if (gotoFn[curr] && l2 in gotoFn[curr]) {
              curr = gotoFn[curr][l2];
            } else {
              state++;
              gotoFn[curr][l2] = state;
              gotoFn[state] = {};
              curr = state;
              output[state] = [];
            }
          }
          output[curr].push(word);
        });
        var failure = {};
        var xs = [];
        for (var l in gotoFn[0]) {
          var state = gotoFn[0][l];
          failure[state] = 0;
          xs.push(state);
        }
        while (xs.length) {
          var r = xs.shift();
          for (var l in gotoFn[r]) {
            var s2 = gotoFn[r][l];
            xs.push(s2);
            var state = failure[r];
            while (state > 0 && !(l in gotoFn[state])) {
              state = failure[state];
            }
            if (l in gotoFn[state]) {
              var fs = gotoFn[state][l];
              failure[s2] = fs;
              output[s2] = output[s2].concat(output[fs]);
            } else {
              failure[s2] = 0;
            }
          }
        }
        this.gotoFn = gotoFn;
        this.output = output;
        this.failure = failure;
      };
      AhoCorasick2.prototype.search = function(string) {
        var state = 0;
        var results = [];
        for (var i = 0; i < string.length; i++) {
          var l = string[i];
          while (state > 0 && !(l in this.gotoFn[state])) {
            state = this.failure[state];
          }
          if (!(l in this.gotoFn[state])) {
            continue;
          }
          state = this.gotoFn[state][l];
          if (this.output[state].length) {
            var foundStrs = this.output[state];
            results.push([i, foundStrs]);
          }
        }
        return results;
      };
      if (typeof module2 !== "undefined") {
        module2.exports = AhoCorasick2;
      } else {
        window.AhoCorasick = AhoCorasick2;
      }
    })();
  }
});

// node_modules/.pnpm/css-what@5.1.0/node_modules/css-what/lib/parse.js
var require_parse = __commonJS({
  "node_modules/.pnpm/css-what@5.1.0/node_modules/css-what/lib/parse.js"(exports) {
    "use strict";
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isTraversal = void 0;
    var reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
    var reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
    var actionTypes = /* @__PURE__ */ new Map([
      ["~", "element"],
      ["^", "start"],
      ["$", "end"],
      ["*", "any"],
      ["!", "not"],
      ["|", "hyphen"]
    ]);
    var Traversals = {
      ">": "child",
      "<": "parent",
      "~": "sibling",
      "+": "adjacent"
    };
    var attribSelectors = {
      "#": ["id", "equals"],
      ".": ["class", "element"]
    };
    var unpackPseudos = /* @__PURE__ */ new Set([
      "has",
      "not",
      "matches",
      "is",
      "where",
      "host",
      "host-context"
    ]);
    var traversalNames = new Set(__spreadArray([
      "descendant"
    ], Object.keys(Traversals).map(function(k) {
      return Traversals[k];
    }), true));
    var caseInsensitiveAttributes = /* @__PURE__ */ new Set([
      "accept",
      "accept-charset",
      "align",
      "alink",
      "axis",
      "bgcolor",
      "charset",
      "checked",
      "clear",
      "codetype",
      "color",
      "compact",
      "declare",
      "defer",
      "dir",
      "direction",
      "disabled",
      "enctype",
      "face",
      "frame",
      "hreflang",
      "http-equiv",
      "lang",
      "language",
      "link",
      "media",
      "method",
      "multiple",
      "nohref",
      "noresize",
      "noshade",
      "nowrap",
      "readonly",
      "rel",
      "rev",
      "rules",
      "scope",
      "scrolling",
      "selected",
      "shape",
      "target",
      "text",
      "type",
      "valign",
      "valuetype",
      "vlink"
    ]);
    function isTraversal(selector) {
      return traversalNames.has(selector.type);
    }
    exports.isTraversal = isTraversal;
    var stripQuotesFromPseudos = /* @__PURE__ */ new Set(["contains", "icontains"]);
    var quotes = /* @__PURE__ */ new Set(['"', "'"]);
    function funescape(_, escaped2, escapedWhitespace) {
      var high = parseInt(escaped2, 16) - 65536;
      return high !== high || escapedWhitespace ? escaped2 : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
    }
    function unescapeCSS(str) {
      return str.replace(reEscape, funescape);
    }
    function isWhitespace(c) {
      return c === " " || c === "\n" || c === "	" || c === "\f" || c === "\r";
    }
    function parse3(selector, options) {
      var subselects = [];
      var endIndex = parseSelector(subselects, "" + selector, options, 0);
      if (endIndex < selector.length) {
        throw new Error("Unmatched selector: " + selector.slice(endIndex));
      }
      return subselects;
    }
    exports.default = parse3;
    function parseSelector(subselects, selector, options, selectorIndex) {
      var _a, _b;
      if (options === void 0) {
        options = {};
      }
      var tokens = [];
      var sawWS = false;
      function getName(offset) {
        var match = selector.slice(selectorIndex + offset).match(reName);
        if (!match) {
          throw new Error("Expected name, found " + selector.slice(selectorIndex));
        }
        var name = match[0];
        selectorIndex += offset + name.length;
        return unescapeCSS(name);
      }
      function stripWhitespace(offset) {
        while (isWhitespace(selector.charAt(selectorIndex + offset)))
          offset++;
        selectorIndex += offset;
      }
      function isEscaped(pos) {
        var slashCount = 0;
        while (selector.charAt(--pos) === "\\")
          slashCount++;
        return (slashCount & 1) === 1;
      }
      function ensureNotTraversal() {
        if (tokens.length > 0 && isTraversal(tokens[tokens.length - 1])) {
          throw new Error("Did not expect successive traversals.");
        }
      }
      stripWhitespace(0);
      while (selector !== "") {
        var firstChar = selector.charAt(selectorIndex);
        if (isWhitespace(firstChar)) {
          sawWS = true;
          stripWhitespace(1);
        } else if (firstChar in Traversals) {
          ensureNotTraversal();
          tokens.push({ type: Traversals[firstChar] });
          sawWS = false;
          stripWhitespace(1);
        } else if (firstChar === ",") {
          if (tokens.length === 0) {
            throw new Error("Empty sub-selector");
          }
          subselects.push(tokens);
          tokens = [];
          sawWS = false;
          stripWhitespace(1);
        } else if (selector.startsWith("/*", selectorIndex)) {
          var endIndex = selector.indexOf("*/", selectorIndex + 2);
          if (endIndex < 0) {
            throw new Error("Comment was not terminated");
          }
          selectorIndex = endIndex + 2;
        } else {
          if (sawWS) {
            ensureNotTraversal();
            tokens.push({ type: "descendant" });
            sawWS = false;
          }
          if (firstChar in attribSelectors) {
            var _c = attribSelectors[firstChar], name_1 = _c[0], action = _c[1];
            tokens.push({
              type: "attribute",
              name: name_1,
              action,
              value: getName(1),
              namespace: null,
              ignoreCase: options.xmlMode ? null : false
            });
          } else if (firstChar === "[") {
            stripWhitespace(1);
            var namespace = null;
            if (selector.charAt(selectorIndex) === "|") {
              namespace = "";
              selectorIndex += 1;
            }
            if (selector.startsWith("*|", selectorIndex)) {
              namespace = "*";
              selectorIndex += 2;
            }
            var name_2 = getName(0);
            if (namespace === null && selector.charAt(selectorIndex) === "|" && selector.charAt(selectorIndex + 1) !== "=") {
              namespace = name_2;
              name_2 = getName(1);
            }
            if ((_a = options.lowerCaseAttributeNames) !== null && _a !== void 0 ? _a : !options.xmlMode) {
              name_2 = name_2.toLowerCase();
            }
            stripWhitespace(0);
            var action = "exists";
            var possibleAction = actionTypes.get(selector.charAt(selectorIndex));
            if (possibleAction) {
              action = possibleAction;
              if (selector.charAt(selectorIndex + 1) !== "=") {
                throw new Error("Expected `=`");
              }
              stripWhitespace(2);
            } else if (selector.charAt(selectorIndex) === "=") {
              action = "equals";
              stripWhitespace(1);
            }
            var value = "";
            var ignoreCase = null;
            if (action !== "exists") {
              if (quotes.has(selector.charAt(selectorIndex))) {
                var quote = selector.charAt(selectorIndex);
                var sectionEnd = selectorIndex + 1;
                while (sectionEnd < selector.length && (selector.charAt(sectionEnd) !== quote || isEscaped(sectionEnd))) {
                  sectionEnd += 1;
                }
                if (selector.charAt(sectionEnd) !== quote) {
                  throw new Error("Attribute value didn't end");
                }
                value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
                selectorIndex = sectionEnd + 1;
              } else {
                var valueStart = selectorIndex;
                while (selectorIndex < selector.length && (!isWhitespace(selector.charAt(selectorIndex)) && selector.charAt(selectorIndex) !== "]" || isEscaped(selectorIndex))) {
                  selectorIndex += 1;
                }
                value = unescapeCSS(selector.slice(valueStart, selectorIndex));
              }
              stripWhitespace(0);
              var forceIgnore = selector.charAt(selectorIndex);
              if (forceIgnore === "s" || forceIgnore === "S") {
                ignoreCase = false;
                stripWhitespace(1);
              } else if (forceIgnore === "i" || forceIgnore === "I") {
                ignoreCase = true;
                stripWhitespace(1);
              }
            }
            if (!options.xmlMode) {
              ignoreCase !== null && ignoreCase !== void 0 ? ignoreCase : ignoreCase = caseInsensitiveAttributes.has(name_2);
            }
            if (selector.charAt(selectorIndex) !== "]") {
              throw new Error("Attribute selector didn't terminate");
            }
            selectorIndex += 1;
            var attributeSelector = {
              type: "attribute",
              name: name_2,
              action,
              value,
              namespace,
              ignoreCase
            };
            tokens.push(attributeSelector);
          } else if (firstChar === ":") {
            if (selector.charAt(selectorIndex + 1) === ":") {
              tokens.push({
                type: "pseudo-element",
                name: getName(2).toLowerCase()
              });
              continue;
            }
            var name_3 = getName(1).toLowerCase();
            var data = null;
            if (selector.charAt(selectorIndex) === "(") {
              if (unpackPseudos.has(name_3)) {
                if (quotes.has(selector.charAt(selectorIndex + 1))) {
                  throw new Error("Pseudo-selector " + name_3 + " cannot be quoted");
                }
                data = [];
                selectorIndex = parseSelector(data, selector, options, selectorIndex + 1);
                if (selector.charAt(selectorIndex) !== ")") {
                  throw new Error("Missing closing parenthesis in :" + name_3 + " (" + selector + ")");
                }
                selectorIndex += 1;
              } else {
                selectorIndex += 1;
                var start = selectorIndex;
                var counter = 1;
                for (; counter > 0 && selectorIndex < selector.length; selectorIndex++) {
                  if (selector.charAt(selectorIndex) === "(" && !isEscaped(selectorIndex)) {
                    counter++;
                  } else if (selector.charAt(selectorIndex) === ")" && !isEscaped(selectorIndex)) {
                    counter--;
                  }
                }
                if (counter) {
                  throw new Error("Parenthesis not matched");
                }
                data = selector.slice(start, selectorIndex - 1);
                if (stripQuotesFromPseudos.has(name_3)) {
                  var quot = data.charAt(0);
                  if (quot === data.slice(-1) && quotes.has(quot)) {
                    data = data.slice(1, -1);
                  }
                  data = unescapeCSS(data);
                }
              }
            }
            tokens.push({ type: "pseudo", name: name_3, data });
          } else {
            var namespace = null;
            var name_4 = void 0;
            if (firstChar === "*") {
              selectorIndex += 1;
              name_4 = "*";
            } else if (reName.test(selector.slice(selectorIndex))) {
              if (selector.charAt(selectorIndex) === "|") {
                namespace = "";
                selectorIndex += 1;
              }
              name_4 = getName(0);
            } else {
              if (tokens.length && tokens[tokens.length - 1].type === "descendant") {
                tokens.pop();
              }
              addToken(subselects, tokens);
              return selectorIndex;
            }
            if (selector.charAt(selectorIndex) === "|") {
              namespace = name_4;
              if (selector.charAt(selectorIndex + 1) === "*") {
                name_4 = "*";
                selectorIndex += 2;
              } else {
                name_4 = getName(1);
              }
            }
            if (name_4 === "*") {
              tokens.push({ type: "universal", namespace });
            } else {
              if ((_b = options.lowerCaseTags) !== null && _b !== void 0 ? _b : !options.xmlMode) {
                name_4 = name_4.toLowerCase();
              }
              tokens.push({ type: "tag", name: name_4, namespace });
            }
          }
        }
      }
      addToken(subselects, tokens);
      return selectorIndex;
    }
    function addToken(subselects, tokens) {
      if (subselects.length > 0 && tokens.length === 0) {
        throw new Error("Empty sub-selector");
      }
      subselects.push(tokens);
    }
  }
});

// node_modules/.pnpm/css-what@5.1.0/node_modules/css-what/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/.pnpm/css-what@5.1.0/node_modules/css-what/lib/stringify.js"(exports) {
    "use strict";
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var actionTypes = {
      equals: "",
      element: "~",
      start: "^",
      end: "$",
      any: "*",
      not: "!",
      hyphen: "|"
    };
    var charsToEscape = new Set(__spreadArray(__spreadArray([], Object.keys(actionTypes).map(function(typeKey) {
      return actionTypes[typeKey];
    }).filter(Boolean), true), [
      ":",
      "[",
      "]",
      " ",
      "\\",
      "(",
      ")",
      "'"
    ], false));
    function stringify2(selector) {
      return selector.map(stringifySubselector).join(", ");
    }
    exports.default = stringify2;
    function stringifySubselector(token) {
      return token.map(stringifyToken).join("");
    }
    function stringifyToken(token) {
      switch (token.type) {
        case "child":
          return " > ";
        case "parent":
          return " < ";
        case "sibling":
          return " ~ ";
        case "adjacent":
          return " + ";
        case "descendant":
          return " ";
        case "universal":
          return getNamespace(token.namespace) + "*";
        case "tag":
          return getNamespacedName(token);
        case "pseudo-element":
          return "::" + escapeName(token.name);
        case "pseudo":
          if (token.data === null)
            return ":" + escapeName(token.name);
          if (typeof token.data === "string") {
            return ":" + escapeName(token.name) + "(" + escapeName(token.data) + ")";
          }
          return ":" + escapeName(token.name) + "(" + stringify2(token.data) + ")";
        case "attribute": {
          if (token.name === "id" && token.action === "equals" && !token.ignoreCase && !token.namespace) {
            return "#" + escapeName(token.value);
          }
          if (token.name === "class" && token.action === "element" && !token.ignoreCase && !token.namespace) {
            return "." + escapeName(token.value);
          }
          var name_1 = getNamespacedName(token);
          if (token.action === "exists") {
            return "[" + name_1 + "]";
          }
          return "[" + name_1 + actionTypes[token.action] + "='" + escapeName(token.value) + "'" + (token.ignoreCase ? "i" : token.ignoreCase === false ? "s" : "") + "]";
        }
      }
    }
    function getNamespacedName(token) {
      return "" + getNamespace(token.namespace) + escapeName(token.name);
    }
    function getNamespace(namespace) {
      return namespace !== null ? (namespace === "*" ? "*" : escapeName(namespace)) + "|" : "";
    }
    function escapeName(str) {
      return str.split("").map(function(c) {
        return charsToEscape.has(c) ? "\\" + c : c;
      }).join("");
    }
  }
});

// node_modules/.pnpm/css-what@5.1.0/node_modules/css-what/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/css-what@5.1.0/node_modules/css-what/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stringify = exports.parse = void 0;
    __exportStar(require_parse(), exports);
    var parse_12 = require_parse();
    Object.defineProperty(exports, "parse", { enumerable: true, get: function() {
      return __importDefault(parse_12).default;
    } });
    var stringify_1 = require_stringify();
    Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
      return __importDefault(stringify_1).default;
    } });
  }
});

// node_modules/.pnpm/media-query-parser@2.0.2/node_modules/media-query-parser/dist/media-query-parser.esm.js
function __rest(s2, e) {
  var t = {};
  for (var p in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p) && e.indexOf(p) < 0)
      t[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s2); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i]))
        t[p[i]] = s2[p[i]];
    }
  return t;
}
function __values(o) {
  var s2 = typeof Symbol === "function" && Symbol.iterator, m = s2 && o[s2], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error2) {
    e = { error: error2 };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
var __assign, weirdNewlines, nullOrSurrogates, commentRegex, lexicalAnalysis, consumeString, wouldStartIdentifier, consumeEscape, consumeNumeric, consumeNumber, consumeIdentUnsafe, consumeIdent, consumeUrl, consumeIdentLike, simplifyAST, simplifyMediaQuery, simplifyMediaCondition, createError, toAST, toUnflattenedAST, removeWhitespace, syntacticAnalysis, tokenizeMediaQuery, tokenizeMediaCondition, tokenizeMediaFeature, tokenizeRange;
var init_media_query_parser_esm = __esm({
  "node_modules/.pnpm/media-query-parser@2.0.2/node_modules/media-query-parser/dist/media-query-parser.esm.js"() {
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s2, i = 1, n = arguments.length; i < n; i++) {
          s2 = arguments[i];
          for (var p in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p))
              t[p] = s2[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    weirdNewlines = /(\u000D|\u000C|\u000D\u000A)/g;
    nullOrSurrogates = /[\u0000\uD800-\uDFFF]/g;
    commentRegex = /(\/\*)[\s\S]*?(\*\/)/g;
    lexicalAnalysis = function lexicalAnalysis2(str, index4) {
      if (index4 === void 0) {
        index4 = 0;
      }
      str = str.replace(weirdNewlines, "\n").replace(nullOrSurrogates, "\uFFFD");
      str = str.replace(commentRegex, "");
      var tokens = [];
      for (; index4 < str.length; index4 += 1) {
        var code = str.charCodeAt(index4);
        if (code === 9 || code === 32 || code === 10) {
          var code_1 = str.charCodeAt(++index4);
          while (code_1 === 9 || code_1 === 32 || code_1 === 10) {
            code_1 = str.charCodeAt(++index4);
          }
          index4 -= 1;
          tokens.push({
            type: "<whitespace-token>"
          });
        } else if (code === 34) {
          var result = consumeString(str, index4);
          if (result === null) {
            return null;
          }
          var _a = __read(result, 2), lastIndex = _a[0], value = _a[1];
          tokens.push({
            type: "<string-token>",
            value
          });
          index4 = lastIndex;
        } else if (code === 35) {
          if (index4 + 1 < str.length) {
            var nextCode = str.charCodeAt(index4 + 1);
            if (nextCode === 95 || nextCode >= 65 && nextCode <= 90 || nextCode >= 97 && nextCode <= 122 || nextCode >= 128 || nextCode >= 48 && nextCode <= 57 || nextCode === 92 && index4 + 2 < str.length && str.charCodeAt(index4 + 2) !== 10) {
              var flag = wouldStartIdentifier(str, index4 + 1) ? "id" : "unrestricted";
              var result = consumeIdentUnsafe(str, index4 + 1);
              if (result !== null) {
                var _b = __read(result, 2), lastIndex = _b[0], value = _b[1];
                tokens.push({
                  type: "<hash-token>",
                  value: value.toLowerCase(),
                  flag
                });
                index4 = lastIndex;
                continue;
              }
            }
          }
          tokens.push({
            type: "<delim-token>",
            value: code
          });
        } else if (code === 39) {
          var result = consumeString(str, index4);
          if (result === null) {
            return null;
          }
          var _c = __read(result, 2), lastIndex = _c[0], value = _c[1];
          tokens.push({
            type: "<string-token>",
            value
          });
          index4 = lastIndex;
        } else if (code === 40) {
          tokens.push({
            type: "<(-token>"
          });
        } else if (code === 41) {
          tokens.push({
            type: "<)-token>"
          });
        } else if (code === 43) {
          var plusNumeric = consumeNumeric(str, index4);
          if (plusNumeric === null) {
            tokens.push({
              type: "<delim-token>",
              value: code
            });
          } else {
            var _d = __read(plusNumeric, 2), lastIndex = _d[0], tokenTuple = _d[1];
            if (tokenTuple[0] === "<dimension-token>") {
              tokens.push({
                type: "<dimension-token>",
                value: tokenTuple[1],
                unit: tokenTuple[2].toLowerCase(),
                flag: "number"
              });
            } else if (tokenTuple[0] === "<number-token>") {
              tokens.push({
                type: tokenTuple[0],
                value: tokenTuple[1],
                flag: tokenTuple[2]
              });
            } else {
              tokens.push({
                type: tokenTuple[0],
                value: tokenTuple[1],
                flag: "number"
              });
            }
            index4 = lastIndex;
          }
        } else if (code === 44) {
          tokens.push({
            type: "<comma-token>"
          });
        } else if (code === 45) {
          var minusNumeric = consumeNumeric(str, index4);
          if (minusNumeric !== null) {
            var _e = __read(minusNumeric, 2), lastIndex = _e[0], tokenTuple = _e[1];
            if (tokenTuple[0] === "<dimension-token>") {
              tokens.push({
                type: "<dimension-token>",
                value: tokenTuple[1],
                unit: tokenTuple[2].toLowerCase(),
                flag: "number"
              });
            } else if (tokenTuple[0] === "<number-token>") {
              tokens.push({
                type: tokenTuple[0],
                value: tokenTuple[1],
                flag: tokenTuple[2]
              });
            } else {
              tokens.push({
                type: tokenTuple[0],
                value: tokenTuple[1],
                flag: "number"
              });
            }
            index4 = lastIndex;
            continue;
          }
          if (index4 + 2 < str.length) {
            var nextCode = str.charCodeAt(index4 + 1);
            var nextNextCode = str.charCodeAt(index4 + 2);
            if (nextCode === 45 && nextNextCode === 62) {
              tokens.push({
                type: "<CDC-token>"
              });
              index4 += 2;
              continue;
            }
          }
          var result = consumeIdentLike(str, index4);
          if (result !== null) {
            var _f = __read(result, 3), lastIndex = _f[0], value = _f[1], type = _f[2];
            tokens.push({
              type,
              value
            });
            index4 = lastIndex;
            continue;
          }
          tokens.push({
            type: "<delim-token>",
            value: code
          });
        } else if (code === 46) {
          var minusNumeric = consumeNumeric(str, index4);
          if (minusNumeric === null) {
            tokens.push({
              type: "<delim-token>",
              value: code
            });
          } else {
            var _g = __read(minusNumeric, 2), lastIndex = _g[0], tokenTuple = _g[1];
            if (tokenTuple[0] === "<dimension-token>") {
              tokens.push({
                type: "<dimension-token>",
                value: tokenTuple[1],
                unit: tokenTuple[2].toLowerCase(),
                flag: "number"
              });
            } else if (tokenTuple[0] === "<number-token>") {
              tokens.push({
                type: tokenTuple[0],
                value: tokenTuple[1],
                flag: tokenTuple[2]
              });
            } else {
              tokens.push({
                type: tokenTuple[0],
                value: tokenTuple[1],
                flag: "number"
              });
            }
            index4 = lastIndex;
            continue;
          }
        } else if (code === 58) {
          tokens.push({
            type: "<colon-token>"
          });
        } else if (code === 59) {
          tokens.push({
            type: "<semicolon-token>"
          });
        } else if (code === 60) {
          if (index4 + 3 < str.length) {
            var nextCode = str.charCodeAt(index4 + 1);
            var nextNextCode = str.charCodeAt(index4 + 2);
            var nextNextNextCode = str.charCodeAt(index4 + 3);
            if (nextCode === 33 && nextNextCode === 45 && nextNextNextCode === 45) {
              tokens.push({
                type: "<CDO-token>"
              });
              index4 += 3;
              continue;
            }
          }
          tokens.push({
            type: "<delim-token>",
            value: code
          });
        } else if (code === 64) {
          var result = consumeIdent(str, index4 + 1);
          if (result !== null) {
            var _h = __read(result, 2), lastIndex = _h[0], value = _h[1];
            tokens.push({
              type: "<at-keyword-token>",
              value: value.toLowerCase()
            });
            index4 = lastIndex;
            continue;
          }
          tokens.push({
            type: "<delim-token>",
            value: code
          });
        } else if (code === 91) {
          tokens.push({
            type: "<[-token>"
          });
        } else if (code === 92) {
          var result = consumeEscape(str, index4);
          if (result === null) {
            return null;
          }
          var _j = __read(result, 2), lastIndex = _j[0], value = _j[1];
          str = str.slice(0, index4) + value + str.slice(lastIndex + 1);
          index4 -= 1;
        } else if (code === 93) {
          tokens.push({
            type: "<]-token>"
          });
        } else if (code === 123) {
          tokens.push({
            type: "<{-token>"
          });
        } else if (code === 125) {
          tokens.push({
            type: "<}-token>"
          });
        } else if (code >= 48 && code <= 57) {
          var result = consumeNumeric(str, index4);
          var _k = __read(result, 2), lastIndex = _k[0], tokenTuple = _k[1];
          if (tokenTuple[0] === "<dimension-token>") {
            tokens.push({
              type: "<dimension-token>",
              value: tokenTuple[1],
              unit: tokenTuple[2].toLowerCase(),
              flag: "number"
            });
          } else if (tokenTuple[0] === "<number-token>") {
            tokens.push({
              type: tokenTuple[0],
              value: tokenTuple[1],
              flag: tokenTuple[2]
            });
          } else {
            tokens.push({
              type: tokenTuple[0],
              value: tokenTuple[1],
              flag: "number"
            });
          }
          index4 = lastIndex;
        } else if (code === 95 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code >= 128) {
          var result = consumeIdentLike(str, index4);
          if (result === null) {
            return null;
          }
          var _l = __read(result, 3), lastIndex = _l[0], value = _l[1], type = _l[2];
          tokens.push({
            type,
            value
          });
          index4 = lastIndex;
        } else {
          tokens.push({
            type: "<delim-token>",
            value: code
          });
        }
      }
      tokens.push({
        type: "<EOF-token>"
      });
      return tokens;
    };
    consumeString = function consumeString2(str, index4) {
      if (str.length <= index4 + 1)
        return null;
      var firstCode = str.charCodeAt(index4);
      var charCodes = [];
      for (var i = index4 + 1; i < str.length; i += 1) {
        var code = str.charCodeAt(i);
        if (code === firstCode) {
          return [i, String.fromCharCode.apply(null, charCodes)];
        } else if (code === 92) {
          var result = consumeEscape(str, i);
          if (result === null)
            return null;
          var _a = __read(result, 2), lastIndex = _a[0], charCode = _a[1];
          charCodes.push(charCode);
          i = lastIndex;
        } else if (code === 10) {
          return null;
        } else {
          charCodes.push(code);
        }
      }
      return null;
    };
    wouldStartIdentifier = function wouldStartIdentifier2(str, index4) {
      if (str.length <= index4)
        return false;
      var code = str.charCodeAt(index4);
      if (code === 45) {
        if (str.length <= index4 + 1)
          return false;
        var nextCode = str.charCodeAt(index4 + 1);
        if (nextCode === 45 || nextCode === 95 || nextCode >= 65 && nextCode <= 90 || nextCode >= 97 && nextCode <= 122 || nextCode >= 128) {
          return true;
        } else if (nextCode === 92) {
          if (str.length <= index4 + 2)
            return false;
          var nextNextCode = str.charCodeAt(index4 + 2);
          return nextNextCode !== 10;
        } else {
          return false;
        }
      } else if (code === 95 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code >= 128) {
        return true;
      } else if (code === 92) {
        if (str.length <= index4 + 1)
          return false;
        var nextCode = str.charCodeAt(index4 + 1);
        return nextCode !== 10;
      } else {
        return false;
      }
    };
    consumeEscape = function consumeEscape2(str, index4) {
      if (str.length <= index4 + 1)
        return null;
      if (str.charCodeAt(index4) !== 92)
        return null;
      var code = str.charCodeAt(index4 + 1);
      if (code === 10) {
        return null;
      } else if (code >= 48 && code <= 57 || code >= 65 && code <= 70 || code >= 97 && code <= 102) {
        var hexCharCodes = [code];
        var min = Math.min(index4 + 7, str.length);
        var i = index4 + 2;
        for (; i < min; i += 1) {
          var code_2 = str.charCodeAt(i);
          if (code_2 >= 48 && code_2 <= 57 || code_2 >= 65 && code_2 <= 70 || code_2 >= 97 && code_2 <= 102) {
            hexCharCodes.push(code_2);
          } else {
            break;
          }
        }
        if (i < str.length) {
          var code_3 = str.charCodeAt(i);
          if (code_3 === 9 || code_3 === 32 || code_3 === 10) {
            i += 1;
          }
        }
        return [i - 1, parseInt(String.fromCharCode.apply(null, hexCharCodes), 16)];
      } else {
        return [index4 + 1, code];
      }
    };
    consumeNumeric = function consumeNumeric2(str, index4) {
      var numberResult = consumeNumber(str, index4);
      if (numberResult === null)
        return null;
      var _a = __read(numberResult, 3), numberEndIndex = _a[0], numberValue = _a[1], numberFlag = _a[2];
      var identResult = consumeIdent(str, numberEndIndex + 1);
      if (identResult !== null) {
        var _b = __read(identResult, 2), identEndIndex = _b[0], identValue = _b[1];
        return [identEndIndex, ["<dimension-token>", numberValue, identValue]];
      }
      if (numberEndIndex + 1 < str.length && str.charCodeAt(numberEndIndex + 1) === 37) {
        return [numberEndIndex + 1, ["<percentage-token>", numberValue]];
      }
      return [numberEndIndex, ["<number-token>", numberValue, numberFlag]];
    };
    consumeNumber = function consumeNumber2(str, index4) {
      if (str.length <= index4)
        return null;
      var flag = "integer";
      var numberChars = [];
      var firstCode = str.charCodeAt(index4);
      if (firstCode === 43 || firstCode === 45) {
        index4 += 1;
        if (firstCode === 45)
          numberChars.push(45);
      }
      while (index4 < str.length) {
        var code = str.charCodeAt(index4);
        if (code >= 48 && code <= 57) {
          numberChars.push(code);
          index4 += 1;
        } else {
          break;
        }
      }
      if (index4 + 1 < str.length) {
        var nextCode = str.charCodeAt(index4);
        var nextNextCode = str.charCodeAt(index4 + 1);
        if (nextCode === 46 && nextNextCode >= 48 && nextNextCode <= 57) {
          numberChars.push(nextCode, nextNextCode);
          flag = "number";
          index4 += 2;
          while (index4 < str.length) {
            var code = str.charCodeAt(index4);
            if (code >= 48 && code <= 57) {
              numberChars.push(code);
              index4 += 1;
            } else {
              break;
            }
          }
        }
      }
      if (index4 + 1 < str.length) {
        var nextCode = str.charCodeAt(index4);
        var nextNextCode = str.charCodeAt(index4 + 1);
        var nextNextNextCode = str.charCodeAt(index4 + 2);
        if (nextCode === 69 || nextCode === 101) {
          var nextNextIsDigit = nextNextCode >= 48 && nextNextCode <= 57;
          if (nextNextIsDigit || (nextNextCode === 43 || nextNextCode === 45) && nextNextNextCode >= 48 && nextNextNextCode <= 57) {
            flag = "number";
            if (nextNextIsDigit) {
              numberChars.push(69, nextNextCode);
              index4 += 2;
            } else if (nextNextCode === 45) {
              numberChars.push(69, 45, nextNextNextCode);
              index4 += 3;
            } else {
              numberChars.push(69, nextNextNextCode);
              index4 += 3;
            }
            while (index4 < str.length) {
              var code = str.charCodeAt(index4);
              if (code >= 48 && code <= 57) {
                numberChars.push(code);
                index4 += 1;
              } else {
                break;
              }
            }
          }
        }
      }
      var numberString = String.fromCharCode.apply(null, numberChars);
      var value = flag === "number" ? parseFloat(numberString) : parseInt(numberString);
      if (value === -0)
        value = 0;
      return Number.isNaN(value) ? null : [index4 - 1, value, flag];
    };
    consumeIdentUnsafe = function consumeIdentUnsafe2(str, index4) {
      if (str.length <= index4) {
        return null;
      }
      var identChars = [];
      for (var code = str.charCodeAt(index4); index4 < str.length; code = str.charCodeAt(++index4)) {
        if (code === 45 || code === 95 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code >= 128 || code >= 48 && code <= 57) {
          identChars.push(code);
          continue;
        } else {
          var result = consumeEscape(str, index4);
          if (result !== null) {
            var _a = __read(result, 2), lastIndex = _a[0], code_4 = _a[1];
            identChars.push(code_4);
            index4 = lastIndex;
            continue;
          }
        }
        break;
      }
      return index4 === 0 ? null : [index4 - 1, String.fromCharCode.apply(null, identChars)];
    };
    consumeIdent = function consumeIdent2(str, index4) {
      if (str.length <= index4 || !wouldStartIdentifier(str, index4)) {
        return null;
      }
      var identChars = [];
      for (var code = str.charCodeAt(index4); index4 < str.length; code = str.charCodeAt(++index4)) {
        if (code === 45 || code === 95 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code >= 128 || code >= 48 && code <= 57) {
          identChars.push(code);
          continue;
        } else {
          var result = consumeEscape(str, index4);
          if (result !== null) {
            var _a = __read(result, 2), lastIndex = _a[0], code_5 = _a[1];
            identChars.push(code_5);
            index4 = lastIndex;
            continue;
          }
        }
        break;
      }
      return [index4 - 1, String.fromCharCode.apply(null, identChars)];
    };
    consumeUrl = function consumeUrl2(str, index4) {
      var code = str.charCodeAt(index4);
      while (code === 9 || code === 32 || code === 10) {
        code = str.charCodeAt(++index4);
      }
      var urlChars = [];
      var hasFinishedWord = false;
      while (index4 < str.length) {
        if (code === 41) {
          return [index4, String.fromCharCode.apply(null, urlChars)];
        } else if (code === 34 || code === 39 || code === 40) {
          return null;
        } else if (code === 9 || code === 32 || code === 10) {
          if (!hasFinishedWord && urlChars.length !== 0)
            hasFinishedWord = true;
        } else if (code === 92) {
          var result = consumeEscape(str, index4);
          if (result === null || hasFinishedWord)
            return null;
          var _a = __read(result, 2), lastIndex = _a[0], value = _a[1];
          urlChars.push(value);
          index4 = lastIndex;
        } else {
          if (hasFinishedWord)
            return null;
          urlChars.push(code);
        }
        code = str.charCodeAt(++index4);
      }
      return null;
    };
    consumeIdentLike = function consumeIdentLike2(str, index4) {
      var result = consumeIdent(str, index4);
      if (result === null)
        return null;
      var _a = __read(result, 2), lastIndex = _a[0], value = _a[1];
      if (value.toLowerCase() === "url") {
        if (str.length > lastIndex + 1) {
          var nextCode = str.charCodeAt(lastIndex + 1);
          if (nextCode === 40) {
            for (var offset = 2; lastIndex + offset < str.length; offset += 1) {
              var nextNextCode = str.charCodeAt(lastIndex + offset);
              if (nextNextCode === 34 || nextNextCode === 39) {
                return [lastIndex + 1, value.toLowerCase(), "<function-token>"];
              } else if (nextNextCode !== 9 && nextNextCode !== 32 && nextNextCode !== 10) {
                var result_1 = consumeUrl(str, lastIndex + offset);
                if (result_1 === null)
                  return null;
                var _b = __read(result_1, 2), lastUrlIndex = _b[0], value_1 = _b[1];
                return [lastUrlIndex, value_1, "<url-token>"];
              }
            }
            return [lastIndex + 1, value.toLowerCase(), "<function-token>"];
          }
        }
      } else if (str.length > lastIndex + 1) {
        var nextCode = str.charCodeAt(lastIndex + 1);
        if (nextCode === 40) {
          return [lastIndex + 1, value.toLowerCase(), "<function-token>"];
        }
      }
      return [lastIndex, value.toLowerCase(), "<ident-token>"];
    };
    simplifyAST = function simplifyAST2(ast) {
      for (var i = ast.length - 1; i >= 0; i--) {
        ast[i] = simplifyMediaQuery(ast[i]);
      }
      return ast;
    };
    simplifyMediaQuery = function simplifyMediaQuery2(mediaQuery) {
      if (mediaQuery.mediaCondition === null)
        return mediaQuery;
      var mediaCondition = simplifyMediaCondition(mediaQuery.mediaCondition);
      if (mediaCondition.operator === null && mediaCondition.children.length === 1 && "children" in mediaCondition.children[0]) {
        mediaCondition = mediaCondition.children[0];
      }
      return {
        mediaPrefix: mediaQuery.mediaPrefix,
        mediaType: mediaQuery.mediaType,
        mediaCondition
      };
    };
    simplifyMediaCondition = function simplifyMediaCondition2(mediaCondition) {
      for (var i = mediaCondition.children.length - 1; i >= 0; i--) {
        var unsimplifiedChild = mediaCondition.children[i];
        if (!("context" in unsimplifiedChild)) {
          var child = simplifyMediaCondition2(unsimplifiedChild);
          if (child.operator === null && child.children.length === 1) {
            mediaCondition.children[i] = child.children[0];
          } else if (child.operator === mediaCondition.operator && (child.operator === "and" || child.operator === "or")) {
            var spliceArgs = [i, 1];
            for (var i_1 = 0; i_1 < child.children.length; i_1++) {
              spliceArgs.push(child.children[i_1]);
            }
            mediaCondition.children.splice.apply(mediaCondition.children, spliceArgs);
          }
        }
      }
      return mediaCondition;
    };
    createError = function createError2(message, err) {
      if (err instanceof Error) {
        return new Error("".concat(err.message.trim(), "\n").concat(message.trim()));
      } else {
        return new Error(message.trim());
      }
    };
    toAST = function toAST2(str) {
      return simplifyAST(toUnflattenedAST(str));
    };
    toUnflattenedAST = function toUnflattenedAST2(str) {
      var tokenList = lexicalAnalysis(str.trim());
      if (tokenList === null) {
        throw createError("Failed tokenizing");
      }
      var startIndex = 0;
      var endIndex = tokenList.length - 1;
      if (tokenList[0].type === "<at-keyword-token>" && tokenList[0].value === "media") {
        if (tokenList[1].type !== "<whitespace-token>") {
          throw createError("Expected whitespace after media");
        }
        startIndex = 2;
        for (var i = 2; i < tokenList.length - 1; i++) {
          var token = tokenList[i];
          if (token.type === "<{-token>") {
            endIndex = i;
            break;
          } else if (token.type === "<semicolon-token>") {
            throw createError("Expected '{' in media query but found ';'");
          }
        }
      }
      tokenList = tokenList.slice(startIndex, endIndex);
      return syntacticAnalysis(tokenList);
    };
    removeWhitespace = function removeWhitespace2(tokenList) {
      var newTokenList = [];
      var before = false;
      for (var i = 0; i < tokenList.length; i++) {
        if (tokenList[i].type === "<whitespace-token>") {
          before = true;
          if (newTokenList.length > 0) {
            newTokenList[newTokenList.length - 1].wsAfter = true;
          }
        } else {
          newTokenList.push(__assign(__assign({}, tokenList[i]), {
            wsBefore: before,
            wsAfter: false
          }));
          before = false;
        }
      }
      return newTokenList;
    };
    syntacticAnalysis = function syntacticAnalysis2(tokenList) {
      var e_1, _a;
      var mediaQueryList = [[]];
      for (var i = 0; i < tokenList.length; i++) {
        var token = tokenList[i];
        if (token.type === "<comma-token>") {
          mediaQueryList.push([]);
        } else {
          mediaQueryList[mediaQueryList.length - 1].push(token);
        }
      }
      var mediaQueries = mediaQueryList.map(removeWhitespace);
      if (mediaQueries.length === 1 && mediaQueries[0].length === 0) {
        return [{
          mediaCondition: null,
          mediaPrefix: null,
          mediaType: "all"
        }];
      } else {
        var mediaQueryTokens = mediaQueries.map(function(mediaQueryTokens2) {
          if (mediaQueryTokens2.length === 0) {
            return null;
          } else {
            return tokenizeMediaQuery(mediaQueryTokens2);
          }
        });
        var nonNullMediaQueryTokens = [];
        try {
          for (var mediaQueryTokens_1 = __values(mediaQueryTokens), mediaQueryTokens_1_1 = mediaQueryTokens_1.next(); !mediaQueryTokens_1_1.done; mediaQueryTokens_1_1 = mediaQueryTokens_1.next()) {
            var mediaQueryToken = mediaQueryTokens_1_1.value;
            if (mediaQueryToken !== null) {
              nonNullMediaQueryTokens.push(mediaQueryToken);
            }
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (mediaQueryTokens_1_1 && !mediaQueryTokens_1_1.done && (_a = mediaQueryTokens_1["return"]))
              _a.call(mediaQueryTokens_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        if (nonNullMediaQueryTokens.length === 0) {
          throw createError("No valid media queries");
        }
        return nonNullMediaQueryTokens;
      }
    };
    tokenizeMediaQuery = function tokenizeMediaQuery2(tokens) {
      var firstToken = tokens[0];
      if (firstToken.type === "<(-token>") {
        try {
          return {
            mediaPrefix: null,
            mediaType: "all",
            mediaCondition: tokenizeMediaCondition(tokens, true)
          };
        } catch (err) {
          throw createError("Expected media condition after '('", err);
        }
      } else if (firstToken.type === "<ident-token>") {
        var mediaPrefix = null;
        var mediaType = void 0;
        var value = firstToken.value;
        if (value === "only" || value === "not") {
          mediaPrefix = value;
        }
        var firstIndex = mediaPrefix === null ? 0 : 1;
        if (tokens.length <= firstIndex) {
          throw createError("Expected extra token in media query");
        }
        var firstNonUnaryToken = tokens[firstIndex];
        if (firstNonUnaryToken.type === "<ident-token>") {
          var value_1 = firstNonUnaryToken.value;
          if (value_1 === "all") {
            mediaType = "all";
          } else if (value_1 === "print" || value_1 === "screen") {
            mediaType = value_1;
          } else if (value_1 === "tty" || value_1 === "tv" || value_1 === "projection" || value_1 === "handheld" || value_1 === "braille" || value_1 === "embossed" || value_1 === "aural" || value_1 === "speech") {
            mediaPrefix = mediaPrefix === "not" ? null : "not";
            mediaType = "all";
          } else {
            throw createError("Unknown ident '".concat(value_1, "' in media query"));
          }
        } else if (mediaPrefix === "not" && firstNonUnaryToken.type === "<(-token>") {
          var tokensWithParens = [{
            type: "<(-token>",
            wsBefore: false,
            wsAfter: false
          }];
          tokensWithParens.push.apply(tokensWithParens, tokens);
          tokensWithParens.push({
            type: "<)-token>",
            wsBefore: false,
            wsAfter: false
          });
          try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: tokenizeMediaCondition(tokensWithParens, true)
            };
          } catch (err) {
            throw createError("Expected media condition after '('", err);
          }
        } else {
          throw createError("Invalid media query");
        }
        if (firstIndex + 1 === tokens.length) {
          return {
            mediaPrefix,
            mediaType,
            mediaCondition: null
          };
        } else if (firstIndex + 4 < tokens.length) {
          var secondNonUnaryToken = tokens[firstIndex + 1];
          if (secondNonUnaryToken.type === "<ident-token>" && secondNonUnaryToken.value === "and") {
            try {
              return {
                mediaPrefix,
                mediaType,
                mediaCondition: tokenizeMediaCondition(tokens.slice(firstIndex + 2), false)
              };
            } catch (err) {
              throw createError("Expected media condition after 'and'", err);
            }
          } else {
            throw createError("Expected 'and' after media prefix");
          }
        } else {
          throw createError("Expected media condition after media prefix");
        }
      } else {
        throw createError("Expected media condition or media prefix");
      }
    };
    tokenizeMediaCondition = function tokenizeMediaCondition2(tokens, mayContainOr, previousOperator) {
      if (previousOperator === void 0) {
        previousOperator = null;
      }
      if (tokens.length < 3 || tokens[0].type !== "<(-token>" || tokens[tokens.length - 1].type !== "<)-token>") {
        throw new Error("Invalid media condition");
      }
      var endIndexOfFirstFeature = tokens.length - 1;
      var maxDepth = 0;
      var count = 0;
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        if (token.type === "<(-token>") {
          count += 1;
          maxDepth = Math.max(maxDepth, count);
        } else if (token.type === "<)-token>") {
          count -= 1;
        }
        if (count === 0) {
          endIndexOfFirstFeature = i;
          break;
        }
      }
      if (count !== 0) {
        throw new Error("Mismatched parens\nInvalid media condition");
      }
      var child;
      var featureTokens = tokens.slice(0, endIndexOfFirstFeature + 1);
      if (maxDepth === 1) {
        child = tokenizeMediaFeature(featureTokens);
      } else {
        if (featureTokens[1].type === "<ident-token>" && featureTokens[1].value === "not") {
          child = tokenizeMediaCondition2(featureTokens.slice(2, -1), true, "not");
        } else {
          child = tokenizeMediaCondition2(featureTokens.slice(1, -1), true);
        }
      }
      if (endIndexOfFirstFeature === tokens.length - 1) {
        return {
          operator: previousOperator,
          children: [child]
        };
      } else {
        var nextToken = tokens[endIndexOfFirstFeature + 1];
        if (nextToken.type !== "<ident-token>") {
          throw new Error("Invalid operator\nInvalid media condition");
        } else if (previousOperator !== null && previousOperator !== nextToken.value) {
          throw new Error("'".concat(nextToken.value, "' and '").concat(previousOperator, "' must not be at same level\nInvalid media condition"));
        } else if (nextToken.value === "or" && !mayContainOr) {
          throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
        } else if (nextToken.value !== "and" && nextToken.value !== "or") {
          throw new Error("Invalid operator: '".concat(nextToken.value, "'\nInvalid media condition"));
        }
        var siblings = tokenizeMediaCondition2(tokens.slice(endIndexOfFirstFeature + 2), mayContainOr, nextToken.value);
        return {
          operator: nextToken.value,
          children: [child].concat(siblings.children)
        };
      }
    };
    tokenizeMediaFeature = function tokenizeMediaFeature2(rawTokens) {
      if (rawTokens.length < 3 || rawTokens[0].type !== "<(-token>" || rawTokens[rawTokens.length - 1].type !== "<)-token>") {
        throw new Error("Invalid media feature");
      }
      var tokens = [rawTokens[0]];
      for (var i = 1; i < rawTokens.length; i++) {
        if (i < rawTokens.length - 2) {
          var a = rawTokens[i];
          var b = rawTokens[i + 1];
          var c = rawTokens[i + 2];
          if (a.type === "<number-token>" && a.value > 0 && b.type === "<delim-token>" && b.value === 47 && c.type === "<number-token>" && c.value > 0) {
            tokens.push({
              type: "<ratio-token>",
              numerator: a.value,
              denominator: c.value,
              wsBefore: a.wsBefore,
              wsAfter: c.wsAfter
            });
            i += 2;
            continue;
          }
        }
        tokens.push(rawTokens[i]);
      }
      var nextToken = tokens[1];
      if (nextToken.type === "<ident-token>" && tokens.length === 3) {
        return {
          context: "boolean",
          feature: nextToken.value
        };
      } else if (tokens.length === 5 && tokens[1].type === "<ident-token>" && tokens[2].type === "<colon-token>") {
        var valueToken = tokens[3];
        if (valueToken.type === "<number-token>" || valueToken.type === "<dimension-token>" || valueToken.type === "<ratio-token>" || valueToken.type === "<ident-token>") {
          var feature = tokens[1].value;
          var prefix = null;
          var slice = feature.slice(0, 4);
          if (slice === "min-") {
            prefix = "min";
            feature = feature.slice(4);
          } else if (slice === "max-") {
            prefix = "max";
            feature = feature.slice(4);
          }
          valueToken.wsBefore;
          valueToken.wsAfter;
          var value = __rest(valueToken, ["wsBefore", "wsAfter"]);
          return {
            context: "value",
            prefix,
            feature,
            value
          };
        }
      } else if (tokens.length >= 5) {
        try {
          var range = tokenizeRange(tokens);
          return {
            context: "range",
            feature: range.featureName,
            range
          };
        } catch (err) {
          throw createError("Invalid media feature", err);
        }
      }
      throw new Error("Invalid media feature");
    };
    tokenizeRange = function tokenizeRange2(tokens) {
      var _a, _b, _c, _d;
      if (tokens.length < 5 || tokens[0].type !== "<(-token>" || tokens[tokens.length - 1].type !== "<)-token>") {
        throw new Error("Invalid range");
      }
      var range = {
        leftToken: null,
        leftOp: null,
        featureName: "",
        rightOp: null,
        rightToken: null
      };
      var hasLeft = tokens[1].type === "<number-token>" || tokens[1].type === "<dimension-token>" || tokens[1].type === "<ratio-token>" || tokens[1].type === "<ident-token>" && tokens[1].value === "infinite";
      if (tokens[2].type === "<delim-token>") {
        if (tokens[2].value === 60) {
          if (tokens[3].type === "<delim-token>" && tokens[3].value === 61 && !tokens[3].wsBefore) {
            range[hasLeft ? "leftOp" : "rightOp"] = "<=";
          } else {
            range[hasLeft ? "leftOp" : "rightOp"] = "<";
          }
        } else if (tokens[2].value === 62) {
          if (tokens[3].type === "<delim-token>" && tokens[3].value === 61 && !tokens[3].wsBefore) {
            range[hasLeft ? "leftOp" : "rightOp"] = ">=";
          } else {
            range[hasLeft ? "leftOp" : "rightOp"] = ">";
          }
        } else if (tokens[2].value === 61) {
          range[hasLeft ? "leftOp" : "rightOp"] = "=";
        } else {
          throw new Error("Invalid range");
        }
        if (hasLeft) {
          range.leftToken = tokens[1];
        } else if (tokens[1].type === "<ident-token>") {
          range.featureName = tokens[1].value;
        } else {
          throw new Error("Invalid range");
        }
        var tokenIndexAfterFirstOp = 2 + ((_b = (_a = range[hasLeft ? "leftOp" : "rightOp"]) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0);
        var tokenAfterFirstOp = tokens[tokenIndexAfterFirstOp];
        if (hasLeft) {
          if (tokenAfterFirstOp.type === "<ident-token>") {
            range.featureName = tokenAfterFirstOp.value;
            if (tokens.length >= 7) {
              var secondOpToken = tokens[tokenIndexAfterFirstOp + 1];
              var followingToken = tokens[tokenIndexAfterFirstOp + 2];
              if (secondOpToken.type === "<delim-token>") {
                var charCode = secondOpToken.value;
                if (charCode === 60) {
                  if (followingToken.type === "<delim-token>" && followingToken.value === 61 && !followingToken.wsBefore) {
                    range.rightOp = "<=";
                  } else {
                    range.rightOp = "<";
                  }
                } else if (charCode === 62) {
                  if (followingToken.type === "<delim-token>" && followingToken.value === 61 && !followingToken.wsBefore) {
                    range.rightOp = ">=";
                  } else {
                    range.rightOp = ">";
                  }
                } else {
                  throw new Error("Invalid range");
                }
                var tokenAfterSecondOp = tokens[tokenIndexAfterFirstOp + 1 + ((_d = (_c = range.rightOp) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0)];
                range.rightToken = tokenAfterSecondOp;
              } else {
                throw new Error("Invalid range");
              }
            } else if (tokenIndexAfterFirstOp + 2 !== tokens.length) {
              throw new Error("Invalid range");
            }
          } else {
            throw new Error("Invalid range");
          }
        } else {
          range.rightToken = tokenAfterFirstOp;
        }
        var validRange = null;
        var lt = range.leftToken, leftOp = range.leftOp, featureName = range.featureName, rightOp = range.rightOp, rt = range.rightToken;
        var leftToken = null;
        if (lt !== null) {
          if (lt.type === "<ident-token>") {
            var type = lt.type, value = lt.value;
            if (value === "infinite") {
              leftToken = {
                type,
                value
              };
            }
          } else if (lt.type === "<number-token>" || lt.type === "<dimension-token>" || lt.type === "<ratio-token>") {
            lt.wsBefore;
            lt.wsAfter;
            var ltNoWS = __rest(lt, ["wsBefore", "wsAfter"]);
            leftToken = ltNoWS;
          }
        }
        var rightToken = null;
        if (rt !== null) {
          if (rt.type === "<ident-token>") {
            var type = rt.type, value = rt.value;
            if (value === "infinite") {
              rightToken = {
                type,
                value
              };
            }
          } else if (rt.type === "<number-token>" || rt.type === "<dimension-token>" || rt.type === "<ratio-token>") {
            rt.wsBefore;
            rt.wsAfter;
            var rtNoWS = __rest(rt, ["wsBefore", "wsAfter"]);
            rightToken = rtNoWS;
          }
        }
        if (leftToken !== null && rightToken !== null) {
          if ((leftOp === "<" || leftOp === "<=") && (rightOp === "<" || rightOp === "<=")) {
            validRange = {
              leftToken,
              leftOp,
              featureName,
              rightOp,
              rightToken
            };
          } else if ((leftOp === ">" || leftOp === ">=") && (rightOp === ">" || rightOp === ">=")) {
            validRange = {
              leftToken,
              leftOp,
              featureName,
              rightOp,
              rightToken
            };
          } else {
            throw new Error("Invalid range");
          }
        } else if (leftToken === null && leftOp === null && rightOp !== null && rightToken !== null) {
          validRange = {
            leftToken,
            leftOp,
            featureName,
            rightOp,
            rightToken
          };
        } else if (leftToken !== null && leftOp !== null && rightOp === null && rightToken === null) {
          validRange = {
            leftToken,
            leftOp,
            featureName,
            rightOp,
            rightToken
          };
        }
        return validRange;
      } else {
        throw new Error("Invalid range");
      }
    };
  }
});

// node_modules/.pnpm/@vanilla-extract+css@1.9.2/node_modules/@vanilla-extract/css/dist/transformCss-6fe44699.browser.esm.js
function _defineProperty(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key2] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key2) {
      _defineProperty(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key2, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key2 = sourceKeys[i];
    if (excluded.indexOf(key2) >= 0)
      continue;
    target[key2] = source[key2];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key2, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key2 = sourceSymbolKeys[i];
      if (excluded.indexOf(key2) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key2))
        continue;
      target[key2] = source[key2];
    }
  }
  return target;
}
function forEach(obj, fn) {
  for (var _key in obj) {
    fn(obj[_key], _key);
  }
}
function omit(obj, omitKeys) {
  var result = {};
  for (var _key2 in obj) {
    if (omitKeys.indexOf(_key2) === -1) {
      result[_key2] = obj[_key2];
    }
  }
  return result;
}
function mapKeys(obj, fn) {
  var result = {};
  for (var _key3 in obj) {
    result[fn(obj[_key3], _key3)] = obj[_key3];
  }
  return result;
}
function composeStylesIntoSet(set) {
  for (var _len = arguments.length, classNames = new Array(_len > 1 ? _len - 1 : 0), _key5 = 1; _key5 < _len; _key5++) {
    classNames[_key5 - 1] = arguments[_key5];
  }
  for (var className of classNames) {
    if (className.length === 0) {
      continue;
    }
    if (typeof className === "string") {
      if (className.includes(" ")) {
        composeStylesIntoSet(set, ...className.trim().split(" "));
      } else {
        set.add(className);
      }
    } else if (Array.isArray(className)) {
      composeStylesIntoSet(set, ...className);
    }
  }
}
function dudupeAndJoinClassList(classNames) {
  var set = /* @__PURE__ */ new Set();
  composeStylesIntoSet(set, ...classNames);
  return Array.from(set).join(" ");
}
function escapeRegex(string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function dashify(str) {
  return str.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase();
}
function replaceBetweenIndexes(target, startIndex, endIndex, replacement) {
  var start = target.slice(0, startIndex);
  var end = target.slice(endIndex);
  return "".concat(start).concat(replacement).concat(end);
}
function renderCss(v) {
  var indent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  var rules = [];
  var _loop2 = function _loop22(key3) {
    var value = v[key3];
    if (value && Array.isArray(value)) {
      rules.push(...value.map((v2) => renderCss({
        [key3]: v2
      }, indent)));
    } else if (value && typeof value === "object") {
      var isEmpty2 = Object.keys(value).length === 0;
      if (!isEmpty2) {
        rules.push("".concat(indent).concat(key3, " {\n").concat(renderCss(value, indent + DOUBLE_SPACE), "\n").concat(indent, "}"));
      }
    } else {
      rules.push("".concat(indent).concat(key3.startsWith("--") ? key3 : dashify(key3), ": ").concat(value, ";"));
    }
  };
  for (var key2 of Object.keys(v)) {
    _loop2(key2);
  }
  return rules.join("\n");
}
function transformCss(_ref4) {
  var {
    localClassNames: localClassNames2,
    cssObjs,
    composedClassLists: composedClassLists2
  } = _ref4;
  var stylesheet = new Stylesheet(localClassNames2, composedClassLists2);
  for (var root of cssObjs) {
    stylesheet.processCssObj(root);
  }
  return stylesheet.toCss();
}
var import_cssesc, import_ahocorasick, import_css_what, _templateObject$1, validateSelector, ConditionalRuleset, simplePseudoMap, simplePseudos, simplePseudoLookup, _templateObject2, createMediaQueryError, validateMediaQuery, _excluded, _excluded2, UNITLESS, DOUBLE_SPACE, specialKeys, Stylesheet;
var init_transformCss_6fe44699_browser_esm = __esm({
  "node_modules/.pnpm/@vanilla-extract+css@1.9.2/node_modules/@vanilla-extract/css/dist/transformCss-6fe44699.browser.esm.js"() {
    init_vanilla_extract_private_esm();
    import_cssesc = __toESM(require_cssesc());
    import_ahocorasick = __toESM(require_main());
    init_vanilla_extract_css_adapter_browser_esm();
    init_taggedTemplateLiteral_2d2668f5_browser_esm();
    import_css_what = __toESM(require_lib());
    init_lib_module();
    init_media_query_parser_esm();
    validateSelector = (selector, targetClassName) => {
      var replaceTarget = () => {
        var targetRegex = new RegExp(".".concat(escapeRegex((0, import_cssesc.default)(targetClassName, {
          isIdentifier: true
        }))), "g");
        return selector.replace(targetRegex, "&");
      };
      var selectorParts;
      try {
        selectorParts = (0, import_css_what.parse)(selector);
      } catch (err) {
        throw new Error("Invalid selector: ".concat(replaceTarget()));
      }
      selectorParts.forEach((tokens) => {
        try {
          for (var i = tokens.length - 1; i >= -1; i--) {
            if (!tokens[i]) {
              throw new Error();
            }
            var token = tokens[i];
            if (token.type === "child" || token.type === "parent" || token.type === "sibling" || token.type === "adjacent" || token.type === "descendant") {
              throw new Error();
            }
            if (token.type === "attribute" && token.name === "class" && token.value === targetClassName) {
              return;
            }
          }
        } catch (err) {
          throw new Error(lib_module_default(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n        Invalid selector: ", "\n    \n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n        \n        This is to ensure that each style block only affects the styling of a single class.\n        \n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n        \n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), replaceTarget(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"));
        }
      });
    };
    ConditionalRuleset = class {
      constructor() {
        this.ruleset = /* @__PURE__ */ new Map();
        this.precedenceLookup = /* @__PURE__ */ new Map();
      }
      findOrCreateCondition(conditionQuery) {
        var targetCondition = this.ruleset.get(conditionQuery);
        if (!targetCondition) {
          targetCondition = {
            query: conditionQuery,
            rules: [],
            children: new ConditionalRuleset()
          };
          this.ruleset.set(conditionQuery, targetCondition);
        }
        return targetCondition;
      }
      getConditionalRulesetByPath(conditionPath) {
        var currRuleset = this;
        for (var query of conditionPath) {
          var condition = currRuleset.findOrCreateCondition(query);
          currRuleset = condition.children;
        }
        return currRuleset;
      }
      addRule(rule, conditionQuery, conditionPath) {
        var ruleset = this.getConditionalRulesetByPath(conditionPath);
        var targetCondition = ruleset.findOrCreateCondition(conditionQuery);
        if (!targetCondition) {
          throw new Error("Failed to add conditional rule");
        }
        targetCondition.rules.push(rule);
      }
      addConditionPrecedence(conditionPath, conditionOrder) {
        var ruleset = this.getConditionalRulesetByPath(conditionPath);
        for (var i = 0; i < conditionOrder.length; i++) {
          var _ruleset$precedenceLo;
          var query = conditionOrder[i];
          var conditionPrecedence = (_ruleset$precedenceLo = ruleset.precedenceLookup.get(query)) !== null && _ruleset$precedenceLo !== void 0 ? _ruleset$precedenceLo : /* @__PURE__ */ new Set();
          for (var lowerPrecedenceCondition of conditionOrder.slice(i + 1)) {
            conditionPrecedence.add(lowerPrecedenceCondition);
          }
          ruleset.precedenceLookup.set(query, conditionPrecedence);
        }
      }
      isCompatible(incomingRuleset) {
        for (var [condition, orderPrecedence] of this.precedenceLookup.entries()) {
          for (var lowerPrecedenceCondition of orderPrecedence) {
            var _incomingRuleset$prec;
            if ((_incomingRuleset$prec = incomingRuleset.precedenceLookup.get(lowerPrecedenceCondition)) !== null && _incomingRuleset$prec !== void 0 && _incomingRuleset$prec.has(condition)) {
              return false;
            }
          }
        }
        for (var {
          query,
          children
        } of incomingRuleset.ruleset.values()) {
          var matchingCondition = this.ruleset.get(query);
          if (matchingCondition && !matchingCondition.children.isCompatible(children)) {
            return false;
          }
        }
        return true;
      }
      merge(incomingRuleset) {
        for (var {
          query,
          rules,
          children
        } of incomingRuleset.ruleset.values()) {
          var matchingCondition = this.ruleset.get(query);
          if (matchingCondition) {
            matchingCondition.rules.push(...rules);
            matchingCondition.children.merge(children);
          } else {
            this.ruleset.set(query, {
              query,
              rules,
              children
            });
          }
        }
        for (var [condition, incomingOrderPrecedence] of incomingRuleset.precedenceLookup.entries()) {
          var _this$precedenceLooku;
          var orderPrecedence = (_this$precedenceLooku = this.precedenceLookup.get(condition)) !== null && _this$precedenceLooku !== void 0 ? _this$precedenceLooku : /* @__PURE__ */ new Set();
          this.precedenceLookup.set(condition, /* @__PURE__ */ new Set([...orderPrecedence, ...incomingOrderPrecedence]));
        }
      }
      mergeIfCompatible(incomingRuleset) {
        if (!this.isCompatible(incomingRuleset)) {
          return false;
        }
        this.merge(incomingRuleset);
        return true;
      }
      getSortedRuleset() {
        var _this = this;
        var sortedRuleset = [];
        var _loop = function _loop2(query2, dependents2) {
          var conditionForQuery = _this.ruleset.get(query2);
          if (!conditionForQuery) {
            throw new Error("Can't find condition for ".concat(query2));
          }
          var firstMatchingDependent = sortedRuleset.findIndex((condition) => dependents2.has(condition.query));
          if (firstMatchingDependent > -1) {
            sortedRuleset.splice(firstMatchingDependent, 0, conditionForQuery);
          } else {
            sortedRuleset.push(conditionForQuery);
          }
        };
        for (var [query, dependents] of this.precedenceLookup.entries()) {
          _loop(query, dependents);
        }
        return sortedRuleset;
      }
      renderToArray() {
        var arr = [];
        for (var {
          query,
          rules,
          children
        } of this.getSortedRuleset()) {
          var selectors = {};
          for (var rule of rules) {
            selectors[rule.selector] = rule.rule;
          }
          Object.assign(selectors, ...children.renderToArray());
          arr.push({
            [query]: selectors
          });
        }
        return arr;
      }
    };
    simplePseudoMap = {
      ":-moz-any-link": true,
      ":-moz-full-screen": true,
      ":-moz-placeholder": true,
      ":-moz-read-only": true,
      ":-moz-read-write": true,
      ":-ms-fullscreen": true,
      ":-ms-input-placeholder": true,
      ":-webkit-any-link": true,
      ":-webkit-full-screen": true,
      "::-moz-placeholder": true,
      "::-moz-progress-bar": true,
      "::-moz-range-progress": true,
      "::-moz-range-thumb": true,
      "::-moz-range-track": true,
      "::-moz-selection": true,
      "::-ms-backdrop": true,
      "::-ms-browse": true,
      "::-ms-check": true,
      "::-ms-clear": true,
      "::-ms-fill": true,
      "::-ms-fill-lower": true,
      "::-ms-fill-upper": true,
      "::-ms-reveal": true,
      "::-ms-thumb": true,
      "::-ms-ticks-after": true,
      "::-ms-ticks-before": true,
      "::-ms-tooltip": true,
      "::-ms-track": true,
      "::-ms-value": true,
      "::-webkit-backdrop": true,
      "::-webkit-input-placeholder": true,
      "::-webkit-progress-bar": true,
      "::-webkit-progress-inner-value": true,
      "::-webkit-progress-value": true,
      "::-webkit-resizer": true,
      "::-webkit-scrollbar-button": true,
      "::-webkit-scrollbar-corner": true,
      "::-webkit-scrollbar-thumb": true,
      "::-webkit-scrollbar-track-piece": true,
      "::-webkit-scrollbar-track": true,
      "::-webkit-scrollbar": true,
      "::-webkit-slider-runnable-track": true,
      "::-webkit-slider-thumb": true,
      "::after": true,
      "::backdrop": true,
      "::before": true,
      "::cue": true,
      "::first-letter": true,
      "::first-line": true,
      "::grammar-error": true,
      "::placeholder": true,
      "::selection": true,
      "::spelling-error": true,
      ":active": true,
      ":after": true,
      ":any-link": true,
      ":before": true,
      ":blank": true,
      ":checked": true,
      ":default": true,
      ":defined": true,
      ":disabled": true,
      ":empty": true,
      ":enabled": true,
      ":first": true,
      ":first-child": true,
      ":first-letter": true,
      ":first-line": true,
      ":first-of-type": true,
      ":focus": true,
      ":focus-visible": true,
      ":focus-within": true,
      ":fullscreen": true,
      ":hover": true,
      ":in-range": true,
      ":indeterminate": true,
      ":invalid": true,
      ":last-child": true,
      ":last-of-type": true,
      ":left": true,
      ":link": true,
      ":only-child": true,
      ":only-of-type": true,
      ":optional": true,
      ":out-of-range": true,
      ":placeholder-shown": true,
      ":read-only": true,
      ":read-write": true,
      ":required": true,
      ":right": true,
      ":root": true,
      ":scope": true,
      ":target": true,
      ":valid": true,
      ":visited": true
    };
    simplePseudos = Object.keys(simplePseudoMap);
    simplePseudoLookup = simplePseudoMap;
    createMediaQueryError = (mediaQuery, msg) => new Error(lib_module_default(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), mediaQuery, msg));
    validateMediaQuery = (mediaQuery) => {
      if (mediaQuery === "@media ") {
        throw createMediaQueryError(mediaQuery, "Query is empty");
      }
      try {
        toAST(mediaQuery);
      } catch (e) {
        throw createMediaQueryError(mediaQuery, e.message);
      }
    };
    _excluded = ["vars"];
    _excluded2 = ["content"];
    UNITLESS = {
      animationIterationCount: true,
      borderImage: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexShrink: true,
      fontWeight: true,
      gridArea: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnStart: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowStart: true,
      initialLetter: true,
      lineClamp: true,
      lineHeight: true,
      maxLines: true,
      opacity: true,
      order: true,
      orphans: true,
      scale: true,
      tabSize: true,
      WebkitLineClamp: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      maskBorder: true,
      maskBorderOutset: true,
      maskBorderSlice: true,
      maskBorderWidth: true,
      shapeImageThreshold: true,
      stopOpacity: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    DOUBLE_SPACE = "  ";
    specialKeys = [...simplePseudos, "@media", "@supports", "@container", "selectors"];
    Stylesheet = class {
      constructor(localClassNames2, composedClassLists2) {
        this.rules = [];
        this.conditionalRulesets = [new ConditionalRuleset()];
        this.fontFaceRules = [];
        this.keyframesRules = [];
        this.localClassNamesMap = new Map(localClassNames2.map((localClassName) => [localClassName, localClassName]));
        this.localClassNamesSearch = new import_ahocorasick.default(localClassNames2);
        this.composedClassLists = composedClassLists2.map((_ref) => {
          var {
            identifier,
            classList
          } = _ref;
          return {
            identifier,
            regex: RegExp("(".concat(classList, ")"), "g")
          };
        }).reverse();
      }
      processCssObj(root) {
        if (root.type === "fontFace") {
          this.fontFaceRules.push(root.rule);
          return;
        }
        if (root.type === "keyframes") {
          this.keyframesRules.push(root);
          return;
        }
        var mainRule = omit(root.rule, specialKeys);
        this.addRule({
          selector: root.selector,
          rule: mainRule
        });
        this.currConditionalRuleset = new ConditionalRuleset();
        this.transformMedia(root, root.rule["@media"]);
        this.transformSupports(root, root.rule["@supports"]);
        this.transformContainer(root, root.rule["@container"]);
        this.transformSimplePseudos(root, root.rule);
        this.transformSelectors(root, root.rule);
        var activeConditionalRuleset = this.conditionalRulesets[this.conditionalRulesets.length - 1];
        if (!activeConditionalRuleset.mergeIfCompatible(this.currConditionalRuleset)) {
          this.conditionalRulesets.push(this.currConditionalRuleset);
        }
      }
      addConditionalRule(cssRule, conditions) {
        var rule = this.transformVars(this.transformContent(this.pixelifyProperties(cssRule.rule)));
        var selector = this.transformSelector(cssRule.selector);
        if (!this.currConditionalRuleset) {
          throw new Error("Couldn't add conditional rule");
        }
        var conditionQuery = conditions[conditions.length - 1];
        var parentConditions = conditions.slice(0, conditions.length - 1);
        this.currConditionalRuleset.addRule({
          selector,
          rule
        }, conditionQuery, parentConditions);
      }
      addRule(cssRule) {
        var rule = this.transformVars(this.transformContent(this.pixelifyProperties(cssRule.rule)));
        var selector = this.transformSelector(cssRule.selector);
        this.rules.push({
          selector,
          rule
        });
      }
      pixelifyProperties(cssRule) {
        forEach(cssRule, (value, key2) => {
          if (typeof value === "number" && value !== 0 && !UNITLESS[key2]) {
            cssRule[key2] = "".concat(value, "px");
          }
        });
        return cssRule;
      }
      transformVars(_ref2) {
        var {
          vars
        } = _ref2, rest = _objectWithoutProperties(_ref2, _excluded);
        if (!vars) {
          return rest;
        }
        return _objectSpread2(_objectSpread2({}, mapKeys(vars, (_value, key2) => getVarName(key2))), rest);
      }
      transformContent(_ref3) {
        var {
          content
        } = _ref3, rest = _objectWithoutProperties(_ref3, _excluded2);
        if (typeof content === "undefined") {
          return rest;
        }
        var contentArray = Array.isArray(content) ? content : [content];
        return _objectSpread2({
          content: contentArray.map((value) => value && (value.includes('"') || value.includes("'") || /^([A-Za-z\-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(value)) ? value : '"'.concat(value, '"'))
        }, rest);
      }
      transformClassname(identifier) {
        return ".".concat((0, import_cssesc.default)(identifier, {
          isIdentifier: true
        }));
      }
      transformSelector(selector) {
        var transformedSelector = selector;
        var _loop = function _loop2(identifier2, regex2) {
          transformedSelector = transformedSelector.replace(regex2, () => {
            markCompositionUsed(identifier2);
            return identifier2;
          });
        };
        for (var {
          identifier,
          regex
        } of this.composedClassLists) {
          _loop(identifier, regex);
        }
        if (this.localClassNamesMap.has(transformedSelector)) {
          return this.transformClassname(transformedSelector);
        }
        var results = this.localClassNamesSearch.search(transformedSelector);
        var lastReplaceIndex = transformedSelector.length;
        for (var i = results.length - 1; i >= 0; i--) {
          var [endIndex, [firstMatch]] = results[i];
          var startIndex = endIndex - firstMatch.length + 1;
          if (startIndex >= lastReplaceIndex) {
            continue;
          }
          lastReplaceIndex = startIndex;
          if (transformedSelector[startIndex - 1] !== ".") {
            transformedSelector = replaceBetweenIndexes(transformedSelector, startIndex, endIndex + 1, this.transformClassname(firstMatch));
          }
        }
        return transformedSelector;
      }
      transformSelectors(root, rule, conditions) {
        forEach(rule.selectors, (selectorRule, selector) => {
          if (root.type !== "local") {
            throw new Error("Selectors are not allowed within ".concat(root.type === "global" ? '"globalStyle"' : '"selectors"'));
          }
          var transformedSelector = this.transformSelector(selector.replace(RegExp("&", "g"), root.selector));
          validateSelector(transformedSelector, root.selector);
          var rule2 = {
            selector: transformedSelector,
            rule: omit(selectorRule, specialKeys)
          };
          if (conditions) {
            this.addConditionalRule(rule2, conditions);
          } else {
            this.addRule(rule2);
          }
          var selectorRoot = {
            type: "selector",
            selector: transformedSelector,
            rule: selectorRule
          };
          this.transformSupports(selectorRoot, selectorRule["@supports"], conditions);
          this.transformMedia(selectorRoot, selectorRule["@media"], conditions);
        });
      }
      transformMedia(root, rules) {
        var parentConditions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        if (rules) {
          var _this$currConditional;
          (_this$currConditional = this.currConditionalRuleset) === null || _this$currConditional === void 0 ? void 0 : _this$currConditional.addConditionPrecedence(parentConditions, Object.keys(rules).map((query) => "@media ".concat(query)));
          forEach(rules, (mediaRule, query) => {
            var mediaQuery = "@media ".concat(query);
            validateMediaQuery(mediaQuery);
            var conditions = [...parentConditions, mediaQuery];
            this.addConditionalRule({
              selector: root.selector,
              rule: omit(mediaRule, specialKeys)
            }, conditions);
            if (root.type === "local") {
              this.transformSimplePseudos(root, mediaRule, conditions);
              this.transformSelectors(root, mediaRule, conditions);
            }
            this.transformSupports(root, mediaRule["@supports"], conditions);
            this.transformContainer(root, mediaRule["@container"], conditions);
          });
        }
      }
      transformContainer(root, rules) {
        var parentConditions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        if (rules) {
          var _this$currConditional2;
          (_this$currConditional2 = this.currConditionalRuleset) === null || _this$currConditional2 === void 0 ? void 0 : _this$currConditional2.addConditionPrecedence(parentConditions, Object.keys(rules).map((query) => "@container ".concat(query)));
          forEach(rules, (containerRule, query) => {
            var containerQuery = "@container ".concat(query);
            var conditions = [...parentConditions, containerQuery];
            this.addConditionalRule({
              selector: root.selector,
              rule: omit(containerRule, specialKeys)
            }, conditions);
            if (root.type === "local") {
              this.transformSimplePseudos(root, containerRule, conditions);
              this.transformSelectors(root, containerRule, conditions);
            }
            this.transformSupports(root, containerRule["@supports"], conditions);
            this.transformMedia(root, containerRule["@media"], conditions);
          });
        }
      }
      transformSupports(root, rules) {
        var parentConditions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        if (rules) {
          var _this$currConditional3;
          (_this$currConditional3 = this.currConditionalRuleset) === null || _this$currConditional3 === void 0 ? void 0 : _this$currConditional3.addConditionPrecedence(parentConditions, Object.keys(rules).map((query) => "@supports ".concat(query)));
          forEach(rules, (supportsRule, query) => {
            var conditions = [...parentConditions, "@supports ".concat(query)];
            this.addConditionalRule({
              selector: root.selector,
              rule: omit(supportsRule, specialKeys)
            }, conditions);
            if (root.type === "local") {
              this.transformSimplePseudos(root, supportsRule, conditions);
              this.transformSelectors(root, supportsRule, conditions);
            }
            this.transformMedia(root, supportsRule["@media"], conditions);
            this.transformContainer(root, supportsRule["@container"], conditions);
          });
        }
      }
      transformSimplePseudos(root, rule, conditions) {
        for (var key2 of Object.keys(rule)) {
          if (simplePseudoLookup[key2]) {
            if (root.type !== "local") {
              throw new Error("Simple pseudos are not valid in ".concat(root.type === "global" ? '"globalStyle"' : '"selectors"'));
            }
            if (conditions) {
              this.addConditionalRule({
                selector: "".concat(root.selector).concat(key2),
                rule: rule[key2]
              }, conditions);
            } else {
              this.addRule({
                conditions,
                selector: "".concat(root.selector).concat(key2),
                rule: rule[key2]
              });
            }
          }
        }
      }
      toCss() {
        var css = [];
        for (var fontFaceRule of this.fontFaceRules) {
          css.push(renderCss({
            "@font-face": fontFaceRule
          }));
        }
        for (var keyframe of this.keyframesRules) {
          css.push(renderCss({
            ["@keyframes ".concat(keyframe.name)]: keyframe.rule
          }));
        }
        for (var rule of this.rules) {
          css.push(renderCss({
            [rule.selector]: rule.rule
          }));
        }
        for (var conditionalRuleset of this.conditionalRulesets) {
          for (var conditionalRule of conditionalRuleset.renderToArray()) {
            css.push(renderCss(conditionalRule));
          }
        }
        return css.filter(Boolean);
      }
    };
  }
});

// node_modules/.pnpm/@emotion+hash@0.9.0/node_modules/@emotion/hash/dist/emotion-hash.esm.js
function murmur2(str) {
  var h = 0;
  var k, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
    k ^= k >>> 24;
    h = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  h ^= h >>> 13;
  h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}
var emotion_hash_esm_default;
var init_emotion_hash_esm = __esm({
  "node_modules/.pnpm/@emotion+hash@0.9.0/node_modules/@emotion/hash/dist/emotion-hash.esm.js"() {
    emotion_hash_esm_default = murmur2;
  }
});

// node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/utils.js
var init_utils = __esm({
  "node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/utils.js"() {
  }
});

// node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/diff.js
var init_diff = __esm({
  "node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/diff.js"() {
    init_utils();
  }
});

// node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/added.js
var init_added = __esm({
  "node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/added.js"() {
    init_utils();
  }
});

// node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/deleted.js
var init_deleted = __esm({
  "node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/deleted.js"() {
    init_utils();
  }
});

// node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/updated.js
var init_updated = __esm({
  "node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/updated.js"() {
    init_utils();
  }
});

// node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/detailed.js
var init_detailed = __esm({
  "node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/detailed.js"() {
    init_added();
    init_deleted();
    init_updated();
  }
});

// node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/index.js
var init_mjs = __esm({
  "node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/index.js"() {
    init_diff();
    init_added();
    init_deleted();
    init_updated();
    init_detailed();
  }
});

// node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js"(exports, module2) {
    "use strict";
    module2.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js"(exports, module2) {
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (const key2 of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key2]] = key2;
    }
    var convert = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    module2.exports = convert;
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
    convert.rgb.hsl = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      const delta = max - min;
      let h;
      let s2;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      const l = (min + max) / 2;
      if (max === min) {
        s2 = 0;
      } else if (l <= 0.5) {
        s2 = delta / (max + min);
      } else {
        s2 = delta / (2 - max - min);
      }
      return [h, s2 * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h;
      let s2;
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const v = Math.max(r, g, b);
      const diff = v - Math.min(r, g, b);
      const diffc = function(c) {
        return (v - c) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h = 0;
        s2 = 0;
      } else {
        s2 = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s2 * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r = rgb[0];
      const g = rgb[1];
      let b = rgb[2];
      const h = convert.rgb.hsl(rgb)[0];
      const w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const k = Math.min(1 - r, 1 - g, 1 - b);
      const c = (1 - r - k) / (1 - k) || 0;
      const m = (1 - g - k) / (1 - k) || 0;
      const y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
    }
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Infinity;
      let currentClosestKeyword;
      for (const keyword of Object.keys(cssKeywords)) {
        const value = cssKeywords[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      let r = rgb[0] / 255;
      let g = rgb[1] / 255;
      let b = rgb[2] / 255;
      r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
      g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
      b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
      const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      const h = hsl[0] / 360;
      const s2 = hsl[1] / 100;
      const l = hsl[2] / 100;
      let t2;
      let t3;
      let val;
      if (s2 === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s2);
      } else {
        t2 = l + s2 - l * s2;
      }
      const t1 = 2 * l - t2;
      const rgb = [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h = hsl[0];
      let s2 = hsl[1] / 100;
      let l = hsl[2] / 100;
      let smin = s2;
      const lmin = Math.max(l, 0.01);
      l *= 2;
      s2 *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v = (l + s2) / 2;
      const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s2 / (l + s2);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      const h = hsv[0] / 60;
      const s2 = hsv[1] / 100;
      let v = hsv[2] / 100;
      const hi = Math.floor(h) % 6;
      const f = h - Math.floor(h);
      const p = 255 * v * (1 - s2);
      const q = 255 * v * (1 - s2 * f);
      const t = 255 * v * (1 - s2 * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h = hsv[0];
      const s2 = hsv[1] / 100;
      const v = hsv[2] / 100;
      const vmin = Math.max(v, 0.01);
      let sl;
      let l;
      l = (2 - s2) * v;
      const lmin = (2 - s2) * vmin;
      sl = s2 * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      const h = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i = Math.floor(6 * h);
      const v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      const n = wh + f * (v - wh);
      let r;
      let g;
      let b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c = cmyk[0] / 100;
      const m = cmyk[1] / 100;
      const y = cmyk[2] / 100;
      const k = cmyk[3] / 100;
      const r = 1 - Math.min(1, c * (1 - k) + k);
      const g = 1 - Math.min(1, m * (1 - k) + k);
      const b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      const x = xyz[0] / 100;
      const y = xyz[1] / 100;
      const z = xyz[2] / 100;
      let r;
      let g;
      let b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let x;
      let y;
      let z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      const y2 = y ** 3;
      const x2 = x ** 3;
      const z2 = z ** 3;
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let h;
      const hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      const c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      const l = lch[0];
      const c = lch[1];
      const h = lch[2];
      const hr = h / 360 * 2 * Math.PI;
      const a = c * Math.cos(hr);
      const b = c * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
      const [r, g, b] = args;
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      const r = args[0];
      const g = args[1];
      const b = args[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      let color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      const mult = (~~(args > 50) + 1) * 0.5;
      const r = (color & 1) * mult * 255;
      const g = (color >> 1 & 1) * mult * 255;
      const b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      let rem;
      const r = Math.floor(args / 36) / 5 * 255;
      const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      const b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args) {
      const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map((char) => {
          return char + char;
        }).join("");
      }
      const integer = parseInt(colorString, 16);
      const r = integer >> 16 & 255;
      const g = integer >> 8 & 255;
      const b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const max = Math.max(Math.max(r, g), b);
      const min = Math.min(Math.min(r, g), b);
      const chroma = max - min;
      let grayscale;
      let hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      const s2 = hsl[1] / 100;
      const l = hsl[2] / 100;
      const c = l < 0.5 ? 2 * s2 * l : 2 * s2 * (1 - l);
      let f = 0;
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      const s2 = hsv[1] / 100;
      const v = hsv[2] / 100;
      const c = s2 * v;
      let f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      const h = hcg[0] / 360;
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      const pure = [0, 0, 0];
      const hi = h % 1 * 6;
      const v = hi % 1;
      const w = 1 - v;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      let f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const l = g * (1 - c) + 0.5 * c;
      let s2 = 0;
      if (l > 0 && l < 0.5) {
        s2 = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s2 = c / (2 * (1 - l));
      }
      return [hcg[0], s2 * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      const w = hwb[1] / 100;
      const b = hwb[2] / 100;
      const v = 1 - b;
      const c = v - w;
      let g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      const val = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (val << 16) + (val << 8) + val;
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js
var require_route = __commonJS({
  "node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js"(exports, module2) {
    var conversions = require_conversions();
    function buildGraph() {
      const graph = {};
      const models = Object.keys(conversions);
      for (let len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for (let len = adjacents.length, i = 0; i < len; i++) {
          const adjacent = adjacents[i];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      const path = [graph[toModel].parent, toModel];
      let fn = conversions[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    module2.exports = function(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models = Object.keys(graph);
      for (let len = models.length, i = 0; i < len; i++) {
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js"(exports, module2) {
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        const result = fn(args);
        if (typeof result === "object") {
          for (let len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach((fromModel) => {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      const routes = route(fromModel);
      const routeModels = Object.keys(routes);
      routeModels.forEach((toModel) => {
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module2.exports = convert;
  }
});

// node_modules/.pnpm/ansi-styles@4.3.0/node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "node_modules/.pnpm/ansi-styles@4.3.0/node_modules/ansi-styles/index.js"(exports, module2) {
    "use strict";
    var wrapAnsi16 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${code + offset}m`;
    };
    var wrapAnsi256 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${38 + offset};5;${code}m`;
    };
    var wrapAnsi16m = (fn, offset) => (...args) => {
      const rgb = fn(...args);
      return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    };
    var ansi2ansi = (n) => n;
    var rgb2rgb = (r, g, b) => [r, g, b];
    var setLazyProperty = (object, property, get) => {
      Object.defineProperty(object, property, {
        get: () => {
          const value = get();
          Object.defineProperty(object, property, {
            value,
            enumerable: true,
            configurable: true
          });
          return value;
        },
        enumerable: true,
        configurable: true
      });
    };
    var colorConvert;
    var makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
      if (colorConvert === void 0) {
        colorConvert = require_color_convert();
      }
      const offset = isBackground ? 10 : 0;
      const styles = {};
      for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
        const name = sourceSpace === "ansi16" ? "ansi" : sourceSpace;
        if (sourceSpace === targetSpace) {
          styles[name] = wrap(identity, offset);
        } else if (typeof suite === "object") {
          styles[name] = wrap(suite[targetSpace], offset);
        }
      }
      return styles;
    };
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles.color.gray = styles.color.blackBright;
      styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
      styles.color.grey = styles.color.blackBright;
      styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles)) {
        for (const [styleName, style2] of Object.entries(group)) {
          styles[styleName] = {
            open: `\x1B[${style2[0]}m`,
            close: `\x1B[${style2[1]}m`
          };
          group[styleName] = styles[styleName];
          codes.set(style2[0], style2[1]);
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles, "codes", {
        value: codes,
        enumerable: false
      });
      styles.color.close = "\x1B[39m";
      styles.bgColor.close = "\x1B[49m";
      setLazyProperty(styles.color, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, false));
      setLazyProperty(styles.color, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, false));
      setLazyProperty(styles.color, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, false));
      setLazyProperty(styles.bgColor, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, true));
      setLazyProperty(styles.bgColor, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, true));
      setLazyProperty(styles.bgColor, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, true));
      return styles;
    }
    Object.defineProperty(module2, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// node_modules/.pnpm/supports-color@7.2.0/node_modules/supports-color/browser.js
var require_browser = __commonJS({
  "node_modules/.pnpm/supports-color@7.2.0/node_modules/supports-color/browser.js"(exports, module2) {
    "use strict";
    module2.exports = {
      stdout: false,
      stderr: false
    };
  }
});

// node_modules/.pnpm/chalk@4.1.2/node_modules/chalk/source/util.js
var require_util = __commonJS({
  "node_modules/.pnpm/chalk@4.1.2/node_modules/chalk/source/util.js"(exports, module2) {
    "use strict";
    var stringReplaceAll = (string, substring, replacer) => {
      let index4 = string.indexOf(substring);
      if (index4 === -1) {
        return string;
      }
      const substringLength = substring.length;
      let endIndex = 0;
      let returnValue = "";
      do {
        returnValue += string.substr(endIndex, index4 - endIndex) + substring + replacer;
        endIndex = index4 + substringLength;
        index4 = string.indexOf(substring, endIndex);
      } while (index4 !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    };
    var stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index4) => {
      let endIndex = 0;
      let returnValue = "";
      do {
        const gotCR = string[index4 - 1] === "\r";
        returnValue += string.substr(endIndex, (gotCR ? index4 - 1 : index4) - endIndex) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
        endIndex = index4 + 1;
        index4 = string.indexOf("\n", endIndex);
      } while (index4 !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    };
    module2.exports = {
      stringReplaceAll,
      stringEncaseCRLFWithFirstIndex
    };
  }
});

// node_modules/.pnpm/chalk@4.1.2/node_modules/chalk/source/templates.js
var require_templates = __commonJS({
  "node_modules/.pnpm/chalk@4.1.2/node_modules/chalk/source/templates.js"(exports, module2) {
    "use strict";
    var TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    var ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
    var ESCAPES = /* @__PURE__ */ new Map([
      ["n", "\n"],
      ["r", "\r"],
      ["t", "	"],
      ["b", "\b"],
      ["f", "\f"],
      ["v", "\v"],
      ["0", "\0"],
      ["\\", "\\"],
      ["e", "\x1B"],
      ["a", "\x07"]
    ]);
    function unescape(c) {
      const u = c[0] === "u";
      const bracket = c[1] === "{";
      if (u && !bracket && c.length === 5 || c[0] === "x" && c.length === 3) {
        return String.fromCharCode(parseInt(c.slice(1), 16));
      }
      if (u && bracket) {
        return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
      }
      return ESCAPES.get(c) || c;
    }
    function parseArguments(name, arguments_) {
      const results = [];
      const chunks = arguments_.trim().split(/\s*,\s*/g);
      let matches;
      for (const chunk of chunks) {
        const number = Number(chunk);
        if (!Number.isNaN(number)) {
          results.push(number);
        } else if (matches = chunk.match(STRING_REGEX)) {
          results.push(matches[2].replace(ESCAPE_REGEX, (m, escape2, character) => escape2 ? unescape(escape2) : character));
        } else {
          throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
        }
      }
      return results;
    }
    function parseStyle(style2) {
      STYLE_REGEX.lastIndex = 0;
      const results = [];
      let matches;
      while ((matches = STYLE_REGEX.exec(style2)) !== null) {
        const name = matches[1];
        if (matches[2]) {
          const args = parseArguments(name, matches[2]);
          results.push([name].concat(args));
        } else {
          results.push([name]);
        }
      }
      return results;
    }
    function buildStyle(chalk2, styles) {
      const enabled = {};
      for (const layer of styles) {
        for (const style2 of layer.styles) {
          enabled[style2[0]] = layer.inverse ? null : style2.slice(1);
        }
      }
      let current = chalk2;
      for (const [styleName, styles2] of Object.entries(enabled)) {
        if (!Array.isArray(styles2)) {
          continue;
        }
        if (!(styleName in current)) {
          throw new Error(`Unknown Chalk style: ${styleName}`);
        }
        current = styles2.length > 0 ? current[styleName](...styles2) : current[styleName];
      }
      return current;
    }
    module2.exports = (chalk2, temporary) => {
      const styles = [];
      const chunks = [];
      let chunk = [];
      temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style2, close, character) => {
        if (escapeCharacter) {
          chunk.push(unescape(escapeCharacter));
        } else if (style2) {
          const string = chunk.join("");
          chunk = [];
          chunks.push(styles.length === 0 ? string : buildStyle(chalk2, styles)(string));
          styles.push({ inverse, styles: parseStyle(style2) });
        } else if (close) {
          if (styles.length === 0) {
            throw new Error("Found extraneous } in Chalk template literal");
          }
          chunks.push(buildStyle(chalk2, styles)(chunk.join("")));
          chunk = [];
          styles.pop();
        } else {
          chunk.push(character);
        }
      });
      chunks.push(chunk.join(""));
      if (styles.length > 0) {
        const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
        throw new Error(errMessage);
      }
      return chunks.join("");
    };
  }
});

// node_modules/.pnpm/chalk@4.1.2/node_modules/chalk/source/index.js
var require_source = __commonJS({
  "node_modules/.pnpm/chalk@4.1.2/node_modules/chalk/source/index.js"(exports, module2) {
    "use strict";
    var ansiStyles = require_ansi_styles();
    var { stdout: stdoutColor, stderr: stderrColor } = require_browser();
    var {
      stringReplaceAll,
      stringEncaseCRLFWithFirstIndex
    } = require_util();
    var { isArray } = Array;
    var levelMapping = [
      "ansi",
      "ansi",
      "ansi256",
      "ansi16m"
    ];
    var styles = /* @__PURE__ */ Object.create(null);
    var applyOptions = (object, options = {}) => {
      if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
        throw new Error("The `level` option should be an integer from 0 to 3");
      }
      const colorLevel = stdoutColor ? stdoutColor.level : 0;
      object.level = options.level === void 0 ? colorLevel : options.level;
    };
    var ChalkClass = class {
      constructor(options) {
        return chalkFactory(options);
      }
    };
    var chalkFactory = (options) => {
      const chalk3 = {};
      applyOptions(chalk3, options);
      chalk3.template = (...arguments_) => chalkTag(chalk3.template, ...arguments_);
      Object.setPrototypeOf(chalk3, Chalk.prototype);
      Object.setPrototypeOf(chalk3.template, chalk3);
      chalk3.template.constructor = () => {
        throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
      };
      chalk3.template.Instance = ChalkClass;
      return chalk3.template;
    };
    function Chalk(options) {
      return chalkFactory(options);
    }
    for (const [styleName, style2] of Object.entries(ansiStyles)) {
      styles[styleName] = {
        get() {
          const builder = createBuilder(this, createStyler(style2.open, style2.close, this._styler), this._isEmpty);
          Object.defineProperty(this, styleName, { value: builder });
          return builder;
        }
      };
    }
    styles.visible = {
      get() {
        const builder = createBuilder(this, this._styler, true);
        Object.defineProperty(this, "visible", { value: builder });
        return builder;
      }
    };
    var usedModels = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
    for (const model of usedModels) {
      styles[model] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
            return createBuilder(this, styler, this._isEmpty);
          };
        }
      };
    }
    for (const model of usedModels) {
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles[bgModel] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
            return createBuilder(this, styler, this._isEmpty);
          };
        }
      };
    }
    var proto = Object.defineProperties(() => {
    }, {
      ...styles,
      level: {
        enumerable: true,
        get() {
          return this._generator.level;
        },
        set(level) {
          this._generator.level = level;
        }
      }
    });
    var createStyler = (open, close, parent) => {
      let openAll;
      let closeAll;
      if (parent === void 0) {
        openAll = open;
        closeAll = close;
      } else {
        openAll = parent.openAll + open;
        closeAll = close + parent.closeAll;
      }
      return {
        open,
        close,
        openAll,
        closeAll,
        parent
      };
    };
    var createBuilder = (self, _styler, _isEmpty) => {
      const builder = (...arguments_) => {
        if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
          return applyStyle(builder, chalkTag(builder, ...arguments_));
        }
        return applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
      };
      Object.setPrototypeOf(builder, proto);
      builder._generator = self;
      builder._styler = _styler;
      builder._isEmpty = _isEmpty;
      return builder;
    };
    var applyStyle = (self, string) => {
      if (self.level <= 0 || !string) {
        return self._isEmpty ? "" : string;
      }
      let styler = self._styler;
      if (styler === void 0) {
        return string;
      }
      const { openAll, closeAll } = styler;
      if (string.indexOf("\x1B") !== -1) {
        while (styler !== void 0) {
          string = stringReplaceAll(string, styler.close, styler.open);
          styler = styler.parent;
        }
      }
      const lfIndex = string.indexOf("\n");
      if (lfIndex !== -1) {
        string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
      }
      return openAll + string + closeAll;
    };
    var template;
    var chalkTag = (chalk3, ...strings) => {
      const [firstString] = strings;
      if (!isArray(firstString) || !isArray(firstString.raw)) {
        return strings.join(" ");
      }
      const arguments_ = strings.slice(1);
      const parts = [firstString.raw[0]];
      for (let i = 1; i < firstString.length; i++) {
        parts.push(
          String(arguments_[i - 1]).replace(/[{}\\]/g, "\\$&"),
          String(firstString.raw[i])
        );
      }
      if (template === void 0) {
        template = require_templates();
      }
      return template(chalk3, parts.join(""));
    };
    Object.defineProperties(Chalk.prototype, styles);
    var chalk2 = Chalk();
    chalk2.supportsColor = stdoutColor;
    chalk2.stderr = Chalk({ level: stderrColor ? stderrColor.level : 0 });
    chalk2.stderr.supportsColor = stderrColor;
    module2.exports = chalk2;
  }
});

// node_modules/.pnpm/deepmerge@4.2.2/node_modules/deepmerge/dist/cjs.js
var require_cjs = __commonJS({
  "node_modules/.pnpm/deepmerge@4.2.2/node_modules/deepmerge/dist/cjs.js"(exports, module2) {
    "use strict";
    var isMergeableObject = function isMergeableObject2(value) {
      return isNonNullObject(value) && !isSpecial(value);
    };
    function isNonNullObject(value) {
      return !!value && typeof value === "object";
    }
    function isSpecial(value) {
      var stringValue = Object.prototype.toString.call(value);
      return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
    }
    var canUseSymbol = typeof Symbol === "function" && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
    function isReactElement(value) {
      return value.$$typeof === REACT_ELEMENT_TYPE;
    }
    function emptyTarget(val) {
      return Array.isArray(val) ? [] : {};
    }
    function cloneUnlessOtherwiseSpecified(value, options) {
      return options.clone !== false && options.isMergeableObject(value) ? deepmerge2(emptyTarget(value), value, options) : value;
    }
    function defaultArrayMerge(target, source, options) {
      return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
      });
    }
    function getMergeFunction(key2, options) {
      if (!options.customMerge) {
        return deepmerge2;
      }
      var customMerge = options.customMerge(key2);
      return typeof customMerge === "function" ? customMerge : deepmerge2;
    }
    function getEnumerableOwnPropertySymbols(target) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return target.propertyIsEnumerable(symbol);
      }) : [];
    }
    function getKeys(target) {
      return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
    }
    function propertyIsOnObject(object, property) {
      try {
        return property in object;
      } catch (_) {
        return false;
      }
    }
    function propertyIsUnsafe(target, key2) {
      return propertyIsOnObject(target, key2) && !(Object.hasOwnProperty.call(target, key2) && Object.propertyIsEnumerable.call(target, key2));
    }
    function mergeObject(target, source, options) {
      var destination = {};
      if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key2) {
          destination[key2] = cloneUnlessOtherwiseSpecified(target[key2], options);
        });
      }
      getKeys(source).forEach(function(key2) {
        if (propertyIsUnsafe(target, key2)) {
          return;
        }
        if (propertyIsOnObject(target, key2) && options.isMergeableObject(source[key2])) {
          destination[key2] = getMergeFunction(key2, options)(target[key2], source[key2], options);
        } else {
          destination[key2] = cloneUnlessOtherwiseSpecified(source[key2], options);
        }
      });
      return destination;
    }
    function deepmerge2(target, source, options) {
      options = options || {};
      options.arrayMerge = options.arrayMerge || defaultArrayMerge;
      options.isMergeableObject = options.isMergeableObject || isMergeableObject;
      options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
      var sourceIsArray = Array.isArray(source);
      var targetIsArray = Array.isArray(target);
      var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
      if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
      } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
      } else {
        return mergeObject(target, source, options);
      }
    }
    deepmerge2.all = function deepmergeAll(array2, options) {
      if (!Array.isArray(array2)) {
        throw new Error("first argument should be an array");
      }
      return array2.reduce(function(prev, next) {
        return deepmerge2(prev, next, options);
      }, {});
    };
    var deepmerge_1 = deepmerge2;
    module2.exports = deepmerge_1;
  }
});

// node_modules/.pnpm/@vanilla-extract+css@1.9.2/node_modules/@vanilla-extract/css/dist/vanilla-extract-css.browser.esm.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _wrapRegExp() {
  _wrapRegExp = function(re, groups) {
    return new BabelRegExp(re, void 0, groups);
  };
  var _super = RegExp.prototype, _groups = /* @__PURE__ */ new WeakMap();
  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);
    return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype);
  }
  function buildGroups(result, re) {
    var g = _groups.get(re);
    return Object.keys(g).reduce(function(groups, name) {
      var i = g[name];
      if ("number" == typeof i)
        groups[name] = result[i];
      else {
        for (var k = 0; void 0 === result[i[k]] && k + 1 < i.length; )
          k++;
        groups[name] = result[i[k]];
      }
      return groups;
    }, /* @__PURE__ */ Object.create(null));
  }
  return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function(str) {
    var result = _super.exec.call(this, str);
    return result && (result.groups = buildGroups(result, this)), result;
  }, BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
    if ("string" == typeof substitution) {
      var groups = _groups.get(this);
      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function(_, name) {
        return "$" + groups[name];
      }));
    }
    if ("function" == typeof substitution) {
      var _this = this;
      return _super[Symbol.replace].call(this, str, function() {
        var args = arguments;
        return "object" != typeof args[args.length - 1] && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
      });
    }
    return _super[Symbol.replace].call(this, str, substitution);
  }, _wrapRegExp.apply(this, arguments);
}
function getDevPrefix(_ref) {
  var {
    debugId,
    debugFileName
  } = _ref;
  var parts = debugId ? [debugId.replace(/\s/g, "_")] : [];
  if (debugFileName) {
    var {
      filePath
    } = getFileScope();
    var matches = filePath.match(/* @__PURE__ */ _wrapRegExp(/((?:(?![\/\\])[\s\S])*)?[\/\\]?((?:(?![\/\\])[\s\S])*)\.css\.(ts|js|tsx|jsx|cjs|mjs)$/, {
      dir: 1,
      file: 2
    }));
    if (matches && matches.groups) {
      var {
        dir,
        file: file4
      } = matches.groups;
      parts.unshift(file4 && file4 !== "index" ? file4 : dir);
    }
  }
  return parts.join("_");
}
function generateIdentifier(arg) {
  var {
    debugId,
    debugFileName = true
  } = _objectSpread2(_objectSpread2({}, typeof arg === "string" ? {
    debugId: arg
  } : null), typeof arg === "object" ? arg : null);
  var refCount = getAndIncrementRefCounter().toString(36);
  var {
    filePath,
    packageName
  } = getFileScope();
  var fileScopeHash = emotion_hash_esm_default(packageName ? "".concat(packageName).concat(filePath) : filePath);
  var identifier = "".concat(fileScopeHash).concat(refCount);
  if (getIdentOption() === "debug") {
    var devPrefix = getDevPrefix({
      debugId,
      debugFileName
    });
    if (devPrefix) {
      identifier = "".concat(devPrefix, "__").concat(identifier);
    }
  }
  return identifier.match(/^[0-9]/) ? "_".concat(identifier) : identifier;
}
function composedStyle(rules, debugId) {
  var className = generateIdentifier(debugId);
  registerClassName(className);
  var classList = [];
  var styleRules = [];
  for (var rule of rules) {
    if (typeof rule === "string") {
      classList.push(rule);
    } else {
      styleRules.push(rule);
    }
  }
  var result = className;
  if (classList.length > 0) {
    result = "".concat(className, " ").concat(dudupeAndJoinClassList(classList));
    registerComposition({
      identifier: className,
      classList: result
    });
    if (styleRules.length > 0) {
      markCompositionUsed(className);
    }
  }
  if (styleRules.length > 0) {
    var _rule = import_deepmerge.default.all(styleRules, {
      arrayMerge: (_, sourceArray) => sourceArray
    });
    appendCss({
      type: "local",
      selector: className,
      rule: _rule
    }, getFileScope());
  }
  return result;
}
function style(rule, debugId) {
  if (Array.isArray(rule)) {
    return composedStyle(rule, debugId);
  }
  var className = generateIdentifier(debugId);
  registerClassName(className);
  appendCss({
    type: "local",
    selector: className,
    rule
  }, getFileScope());
  return className;
}
function styleVariants() {
  if (typeof (arguments.length <= 1 ? void 0 : arguments[1]) === "function") {
    var _data = arguments.length <= 0 ? void 0 : arguments[0];
    var _mapData = arguments.length <= 1 ? void 0 : arguments[1];
    var _debugId = arguments.length <= 2 ? void 0 : arguments[2];
    var _classMap = {};
    for (var _key2 in _data) {
      _classMap[_key2] = style(_mapData(_data[_key2], _key2), _debugId ? "".concat(_debugId, "_").concat(_key2) : _key2);
    }
    return _classMap;
  }
  var styleMap = arguments.length <= 0 ? void 0 : arguments[0];
  var debugId = arguments.length <= 1 ? void 0 : arguments[1];
  var classMap = {};
  for (var _key3 in styleMap) {
    classMap[_key3] = style(styleMap[_key3], debugId ? "".concat(debugId, "_").concat(_key3) : _key3);
  }
  return classMap;
}
var import_cssesc2, import_chalk, import_deepmerge, import_ahocorasick2, import_css_what2, localClassNames, composedClassLists, bufferedCSSObjs, browserRuntimeAdapter;
var init_vanilla_extract_css_browser_esm = __esm({
  "node_modules/.pnpm/@vanilla-extract+css@1.9.2/node_modules/@vanilla-extract/css/dist/vanilla-extract-css.browser.esm.js"() {
    init_vanilla_extract_css_injectStyles_browser_esm();
    init_transformCss_6fe44699_browser_esm();
    init_vanilla_extract_css_adapter_browser_esm();
    init_emotion_hash_esm();
    init_vanilla_extract_css_fileScope_browser_esm();
    import_cssesc2 = __toESM(require_cssesc());
    init_mjs();
    import_chalk = __toESM(require_source());
    init_taggedTemplateLiteral_2d2668f5_browser_esm();
    init_lib_module();
    import_deepmerge = __toESM(require_cjs());
    import_ahocorasick2 = __toESM(require_main());
    import_css_what2 = __toESM(require_lib());
    init_media_query_parser_esm();
    localClassNames = /* @__PURE__ */ new Set();
    composedClassLists = [];
    bufferedCSSObjs = [];
    browserRuntimeAdapter = {
      appendCss: (cssObj) => {
        bufferedCSSObjs.push(cssObj);
      },
      registerClassName: (className) => {
        localClassNames.add(className);
      },
      registerComposition: (composition) => {
        composedClassLists.push(composition);
      },
      markCompositionUsed: () => {
      },
      onEndFileScope: (fileScope) => {
        var css = transformCss({
          localClassNames: Array.from(localClassNames),
          composedClassLists,
          cssObjs: bufferedCSSObjs
        }).join("\n");
        injectStyles({
          fileScope,
          css
        });
        bufferedCSSObjs = [];
      },
      getIdentOption: () => false ? "short" : "debug"
    };
    {
      setAdapterIfNotSet(browserRuntimeAdapter);
    }
  }
});

// node_modules/.pnpm/@vanilla-extract+recipes@0.3.0_@vanilla-extract+css@1.9.2/node_modules/@vanilla-extract/recipes/createRuntimeFn/dist/vanilla-extract-recipes-createRuntimeFn.esm.js
function _defineProperty2(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key2] = value;
  }
  return obj;
}
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread22(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), true).forEach(function(key2) {
      _defineProperty2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var shouldApplyCompound, createRuntimeFn;
var init_vanilla_extract_recipes_createRuntimeFn_esm = __esm({
  "node_modules/.pnpm/@vanilla-extract+recipes@0.3.0_@vanilla-extract+css@1.9.2/node_modules/@vanilla-extract/recipes/createRuntimeFn/dist/vanilla-extract-recipes-createRuntimeFn.esm.js"() {
    shouldApplyCompound = (compoundCheck, selections, defaultVariants) => {
      for (var key2 of Object.keys(compoundCheck)) {
        var _selections$key;
        if (compoundCheck[key2] !== ((_selections$key = selections[key2]) !== null && _selections$key !== void 0 ? _selections$key : defaultVariants[key2])) {
          return false;
        }
      }
      return true;
    };
    createRuntimeFn = (config) => (options) => {
      var className = config.defaultClassName;
      var selections = _objectSpread22(_objectSpread22({}, config.defaultVariants), options);
      for (var variantName in selections) {
        var _selections$variantNa;
        var variantSelection = (_selections$variantNa = selections[variantName]) !== null && _selections$variantNa !== void 0 ? _selections$variantNa : config.defaultVariants[variantName];
        if (variantSelection != null) {
          var selection = variantSelection;
          if (typeof selection === "boolean") {
            selection = selection === true ? "true" : "false";
          }
          var selectionClassName = config.variantClassNames[variantName][selection];
          if (selectionClassName) {
            className += " " + selectionClassName;
          }
        }
      }
      for (var [compoundCheck, compoundClassName] of config.compoundVariants) {
        if (shouldApplyCompound(compoundCheck, selections, config.defaultVariants)) {
          className += " " + compoundClassName;
        }
      }
      return className;
    };
  }
});

// node_modules/.pnpm/@vanilla-extract+recipes@0.3.0_@vanilla-extract+css@1.9.2/node_modules/@vanilla-extract/recipes/dist/vanilla-extract-recipes.esm.js
function mapValues(input, fn) {
  var result = {};
  for (var _key in input) {
    result[_key] = fn(input[_key], _key);
  }
  return result;
}
function recipe(options, debugId) {
  var {
    variants = {},
    defaultVariants = {},
    compoundVariants = [],
    base: base2 = ""
  } = options;
  var defaultClassName = typeof base2 === "string" ? base2 : style(base2, debugId);
  var variantClassNames = mapValues(variants, (variantGroup, variantGroupName) => styleVariants(variantGroup, (styleRule) => typeof styleRule === "string" ? [styleRule] : styleRule, debugId ? "".concat(debugId, "_").concat(variantGroupName) : variantGroupName));
  var compounds = [];
  for (var {
    style: theStyle,
    variants: _variants
  } of compoundVariants) {
    compounds.push([_variants, typeof theStyle === "string" ? theStyle : style(theStyle, "".concat(debugId, "_compound_").concat(compounds.length))]);
  }
  var config = {
    defaultClassName,
    variantClassNames,
    defaultVariants,
    compoundVariants: compounds
  };
  return addRecipe(createRuntimeFn(config), {
    importPath: "@vanilla-extract/recipes/createRuntimeFn",
    importName: "createRuntimeFn",
    args: [config]
  });
}
var init_vanilla_extract_recipes_esm = __esm({
  "node_modules/.pnpm/@vanilla-extract+recipes@0.3.0_@vanilla-extract+css@1.9.2/node_modules/@vanilla-extract/recipes/dist/vanilla-extract-recipes.esm.js"() {
    init_vanilla_extract_css_recipe_browser_esm();
    init_vanilla_extract_css_browser_esm();
    init_vanilla_extract_recipes_createRuntimeFn_esm();
  }
});

// node_modules/.pnpm/just-shuffle@4.1.1/node_modules/just-shuffle/index.mjs
var init_just_shuffle = __esm({
  "node_modules/.pnpm/just-shuffle@4.1.1/node_modules/just-shuffle/index.mjs"() {
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function quintOut(t) {
  return --t * t * t * t * t + 1;
}
function __rest2(s2, e) {
  var t = {};
  for (var p in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p) && e.indexOf(p) < 0)
      t[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s2); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i]))
        t[p[i]] = s2[p[i]];
    }
  return t;
}
function crossfade(_a) {
  var { fallback } = _a, defaults = __rest2(_a, ["fallback"]);
  const to_receive = /* @__PURE__ */ new Map();
  const to_send = /* @__PURE__ */ new Map();
  function crossfade2(from, node, params) {
    const { delay = 0, duration = (d2) => Math.sqrt(d2) * 30, easing = cubicOut } = assign(assign({}, defaults), params);
    const to = node.getBoundingClientRect();
    const dx = from.left - to.left;
    const dy = from.top - to.top;
    const dw = from.width / to.width;
    const dh = from.height / to.height;
    const d = Math.sqrt(dx * dx + dy * dy);
    const style2 = getComputedStyle(node);
    const transform = style2.transform === "none" ? "" : style2.transform;
    const opacity = +style2.opacity;
    return {
      delay,
      duration: is_function(duration) ? duration(d) : duration,
      easing,
      css: (t, u) => `
				opacity: ${t * opacity};
				transform-origin: top left;
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
			`
    };
  }
  function transition(items, counterparts, intro) {
    return (node, params) => {
      items.set(params.key, {
        rect: node.getBoundingClientRect()
      });
      return () => {
        if (counterparts.has(params.key)) {
          const { rect } = counterparts.get(params.key);
          counterparts.delete(params.key);
          return crossfade2(rect, node, params);
        }
        items.delete(params.key);
        return fallback && fallback(node, params, intro);
      };
    };
  }
  return [
    transition(to_send, to_receive, false),
    transition(to_receive, to_send, true)
  ];
}
var Card, avatar, button, Temp, Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_chunks();
    init_index2();
    init_anime_es();
    init_vanilla_extract_css_fileScope_browser_esm();
    init_vanilla_extract_recipes_esm();
    init_just_shuffle();
    Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { title = "" } = $$props;
      let { class: classnames = "" } = $$props;
      if ($$props.title === void 0 && $$bindings.title && title !== void 0)
        $$bindings.title(title);
      if ($$props.class === void 0 && $$bindings.class && classnames !== void 0)
        $$bindings.class(classnames);
      return `<div style="${"transform: scale(0);"}" class="${"card transform-origin-bl bg-dark-3/60 p-4 " + escape(classnames || "", true)}">${title.trim() ? `<h3 class="${"font-semibold"}">${escape(title)}</h3>` : ``}
  <p class="${"text-neutral-4"}">${slots.default ? slots.default({}) : ``}</p></div>`;
    });
    avatar = "/_app/immutable/assets/myavatar-a1582e30.png";
    setFileScope("src/lib/styles/Button.css.ts", "sveltekit");
    button = recipe({
      base: ["flex items-center cursor-pointer text-white font-medium rounded-full bg-neutral-7"],
      variants: {
        type: {
          "with-icon": ["[&>div]:mr-1 py-1 px-2 pr-2.4"]
        }
      },
      defaultVariants: {}
    });
    button({ type: "with-icon" });
    endFileScope();
    Temp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let chatBubbleData = [];
      let chatBubblesWrapper;
      let interval;
      let pageWrapper;
      crossfade({
        duration: 600,
        fallback(node) {
          const style2 = getComputedStyle(node);
          const transform = style2.transform === "none" ? "" : style2.transform;
          return {
            duration: 600,
            easing: quintOut,
            css: (t) => `
          opacity: ${t}
          transform: ${transform} scale(${t});
        `
          };
        }
      });
      onDestroy(() => {
        clearInterval(interval);
        chatBubblesWrapper == null ? void 0 : chatBubblesWrapper.removeEventListener("scroll", handleScroll);
      });
      function handleScroll() {
        return;
      }
      return `${$$result.head += `<!-- HEAD_svelte-1e8ld9d_START -->${$$result.title = `<title>Haniel Ubogu / Software Engineer</title>`, ""}<!-- HEAD_svelte-1e8ld9d_END -->`, ""}

<div class="${"h-full w-full overflow-hidden grid relative place-items-center text-white bg-dark-8 font-sans"}"${add_attribute("this", pageWrapper, 0)}><div class="${"absolute bottom-0 h-full w-full max-w-115 mx-auto flex sm:max-h-500px sm:[@media_screen_and_(min-height:500px)]:relative sm:[@media_screen_and_(min-height:500px)]:bottom-initial sm:[@media_screen_and_(min-height:500px)]:min-h-500px sm:[@media_screen_and_(min-height:500px)]:h-60% sm:[@media_screen_and_(min-height:500px)]:max-h-800px"}">
    <div id="${"header"}" class="${"absolute top-0 left-0 w-full h-20% max-h-15 px-3 py-2 flex items-center justify-between backdrop-filter backdrop-blur-6px bg-dark-8/30 z-9999! shadow-[0_4px_30px_rgb(0,0,0,0.1)] shadow-dark-8/28 " + escape(
        "",
        true
      )}"><div class="${"h-full"}">${``}</div>

      <button class="${"py-1 px-2 pr-2.4 ml-auto rounded-full bg-neutral-7 cursor-pointer text-white mt-1 flex items-center font-medium"}">Toggle
      </button></div>

    
    <div class="${"flex flex-col h-full w-fit p-l-3 p-y-3"}">
      <div class="${"text-3xl mt-auto mb-1.5"}">${``}</div>

      ${`<div class="${"w-13 rounded-full overflow-hidden sm:w-15"}"><img class="${"w-full cursor-pointer"}"${add_attribute("src", avatar, 0)} alt="${"Haniel Ubogu's Avatar"}"></div>`}</div>

    
    <div class="${"relative flex-1"}"><div class="${"p-3 pt-16 flex overflow-x-hidden overflow-y-auto h-full f-scrollbar-w-thin f-scrollbar-c-neutral-200/40 scrollbar:w-0.8 scrollbar-track:rounded-2.5 scrollbar-track:bg-neutral-200/2 scrollbar-thumb:rounded-2.5 scrollbar-thumb:bg-neutral-200/8"}"${add_attribute("this", chatBubblesWrapper, 0)}><div class="${"relative mt-auto flex flex-col gap-2 z-1"}">${each(chatBubbleData, ({ title, content, type }, i) => {
        return `<div>${validate_component(Card, "Card").$$render(
          $$result,
          {
            class: type == "half" ? "min-w-fit w-40% rounded-b-32px rounded-tr-32px rounded-tl-lg" : "rounded-bl-lg rounded-t-2xl rounded-br-3xl",
            title
          },
          {},
          {
            default: () => {
              return `<!-- HTML_TAG_START -->${content}<!-- HTML_TAG_END -->
              `;
            }
          }
        )}
            </div>`;
      })}

          
          ${``}</div></div></div></div></div>`;
    });
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$unsubscribe_refresh;
      const refresh = writable(false);
      $$unsubscribe_refresh = subscribe(refresh, (value) => value);
      setContext("refresh", refresh);
      $$unsubscribe_refresh();
      return `${validate_component(Temp, "Temp").$$render($$result, {}, {}, {})}
  `;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  file: () => file3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets4
});
var index3, component3, file3, imports3, stylesheets4, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    index3 = 2;
    component3 = async () => (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    file3 = "_app/immutable/components/pages/_page.svelte-b900a9af.js";
    imports3 = ["_app/immutable/components/pages/_page.svelte-b900a9af.js", "_app/immutable/chunks/index-846b5d79.js", "_app/immutable/chunks/index-2879e7ce.js"];
    stylesheets4 = ["_app/immutable/assets/_page-e8c3ac02.css"];
    fonts3 = [];
  }
});

// .svelte-kit/output/server/index.js
init_chunks();
init_index2();
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { components } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  {
    stores.page.set(page2);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0 }, {}, {
    default: () => {
      return `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1, form }, {}, {})}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0, form }, {}, {})}`}

${``}`;
});
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  var _a;
  const type = ((_a = request.headers.get("content-type")) == null ? void 0 : _a.split(";", 1)[0].trim()) ?? "";
  return types.includes(type);
}
function is_form_content_type(request) {
  return is_content_type(request, "application/x-www-form-urlencoded", "multipart/form-data");
}
var HttpError = class {
  constructor(status, body) {
    this.status = status;
    if (typeof body === "string") {
      this.body = { message: body };
    } else if (body) {
      this.body = body;
    } else {
      this.body = { message: `Error: ${status}` };
    }
  }
  toString() {
    return JSON.stringify(this.body);
  }
};
var Redirect = class {
  constructor(status, location) {
    this.status = status;
    this.location = location;
  }
};
var ActionFailure = class {
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
};
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\u0000",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names$1 = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names$1;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function stringify_string(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
var chars$1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var object_proto_names = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function uneval(value) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive$1(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          const proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== object_proto_names) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive$1(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map(
          (v, i) => i in thing ? stringify2(v) : ""
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (is_primitive(thing)) {
        values.push(stringify_primitive$1(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify2(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify2(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify2(k)}, ${stringify2(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars$1[num % chars$1.length] + name;
    num = ~~(num / chars$1.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c) {
  return escaped[c] || c;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive$1(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;
function stringify(value) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const keys = [];
  let p = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing))
      return indexes.get(thing);
    if (thing === void 0)
      return UNDEFINED;
    if (Number.isNaN(thing))
      return NAN;
    if (thing === Infinity)
      return POSITIVE_INFINITY;
    if (thing === -Infinity)
      return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0)
      return NEGATIVE_ZERO;
    const index22 = p++;
    indexes.set(thing, index22);
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          str = `["Date","${thing.toISOString()}"]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array":
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0)
              str += ",";
            if (i in thing) {
              keys.push(`[${i}]`);
              str += flatten(thing[i]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
          }
          str += "]";
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(`.${key2}`);
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started)
                str += ",";
              started = true;
              keys.push(`.${key2}`);
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index22] = str;
    return index22;
  }
  const index4 = flatten(value);
  if (index4 < 0)
    return `${index4}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive(thing) {
  const type = typeof thing;
  if (type === "string")
    return stringify_string(thing);
  if (thing instanceof String)
    return stringify_string(thing.toString());
  if (thing === void 0)
    return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0)
    return NEGATIVE_ZERO.toString();
  if (type === "bigint")
    return `["BigInt","${thing}"]`;
  return String(thing);
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return error2;
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
var tracked_url_properties = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function make_trackable(url, callback) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    let value = tracked[property];
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return value;
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
  }
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url) {
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
var DATA_SUFFIX = "/__data.json";
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX);
}
function add_data_suffix(pathname) {
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix(pathname) {
  return pathname.slice(0, -DATA_SUFFIX.length);
}
function check_method_names(mod) {
  ["get", "post", "put", "patch", "del"].forEach((m) => {
    if (m in mod) {
      const replacement = m === "del" ? "DELETE" : m.toUpperCase();
      throw Error(
        `Endpoint method "${m}" has changed to "${replacement}". See https://github.com/sveltejs/kit/discussions/5359 for more information.`
      );
    }
  });
}
var GENERIC_ERROR = {
  id: "__error"
};
function method_not_allowed(mod, method) {
  return new Response(`${method} method not allowed`, {
    status: 405,
    headers: {
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = [];
  for (const method in ["GET", "POST", "PUT", "PATCH", "DELETE"]) {
    if (method in mod)
      allowed.push(method);
  }
  if (mod.GET || mod.HEAD)
    allowed.push("HEAD");
  return allowed;
}
function get_option(nodes, option) {
  return nodes.reduce((value, node) => {
    var _a, _b;
    for (const thing of [node == null ? void 0 : node.server, node == null ? void 0 : node.shared]) {
      if (thing && ("router" in thing || "hydrate" in thing)) {
        throw new Error(
          "`export const hydrate` and `export const router` have been replaced with `export const csr`. See https://github.com/sveltejs/kit/pull/6446"
        );
      }
    }
    return ((_a = node == null ? void 0 : node.shared) == null ? void 0 : _a[option]) ?? ((_b = node == null ? void 0 : node.server) == null ? void 0 : _b[option]) ?? value;
  }, void 0);
}
function static_error_page(options, status, message) {
  return new Response(options.error_template({ status, message }), {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, options, error2) {
  error2 = error2 instanceof HttpError ? error2 : coalesce_to_error(error2);
  const status = error2 instanceof HttpError ? error2.status : 500;
  const body = await handle_error_and_jsonify(event, options, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (has_data_suffix(new URL(event.request.url).pathname) || type === "application/json") {
    return new Response(JSON.stringify(body), {
      status,
      headers: { "content-type": "application/json; charset=utf-8" }
    });
  }
  return static_error_page(options, status, body.message);
}
function handle_error_and_jsonify(event, options, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  } else {
    return options.handle_error(error2, event);
  }
}
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
function clarify_devalue_error(event, error2) {
  if (error2.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error2.message} (data${error2.path})`;
  }
  if (error2.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error2.message;
}
function serialize_data_node(node) {
  if (!node)
    return "null";
  if (node.type === "error" || node.type === "skip") {
    return JSON.stringify(node);
  }
  const stringified = stringify(node.data);
  const uses = [];
  if (node.uses.dependencies.size > 0) {
    uses.push(`"dependencies":${JSON.stringify(Array.from(node.uses.dependencies))}`);
  }
  if (node.uses.params.size > 0) {
    uses.push(`"params":${JSON.stringify(Array.from(node.uses.params))}`);
  }
  if (node.uses.parent)
    uses.push(`"parent":1`);
  if (node.uses.route)
    uses.push(`"route":1`);
  if (node.uses.url)
    uses.push(`"url":1`);
  return `{"type":"data","data":${stringified},"uses":{${uses.join(",")}}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
}
async function render_endpoint(event, mod, state) {
  const method = event.request.method;
  check_method_names(mod);
  let handler = mod[method];
  if (!handler && method === "HEAD") {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    if (state.initiator) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    const response = await handler(
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (error2) {
    if (error2 instanceof Redirect) {
      return new Response(void 0, {
        status: error2.status,
        headers: { location: error2.location }
      });
    }
    throw error2;
  }
}
function is_endpoint_request(event) {
  const { method, headers } = event.request;
  if (method === "PUT" || method === "PATCH" || method === "DELETE") {
    return true;
  }
  if (method === "POST" && headers.get("x-sveltekit-action") === "true")
    return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter((val) => val != null);
}
function error(status, message) {
  if (isNaN(status) || status < 400 || status > 599) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  return new HttpError(status, message);
}
function json(data, init2) {
  const headers = new Headers(init2 == null ? void 0 : init2.headers);
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(JSON.stringify(data), {
    ...init2,
    headers
  });
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options, server2) {
  const actions = server2 == null ? void 0 : server2.actions;
  if (!actions) {
    if (server2) {
      maybe_throw_migration_error(server2);
    }
    const no_actions_error = error(405, "POST method not allowed. No actions exist for this page");
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        data: stringify_action_response(data.data, event.route.id)
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        data: stringify_action_response(data, event.route.id)
      });
    }
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return action_json({
        type: "redirect",
        status: error2.status,
        location: error2.location
      });
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options, check_incorrect_fail_use(error2))
      },
      {
        status: error2 instanceof HttpError ? error2.status : 500
      }
    );
  }
}
function check_incorrect_fail_use(error2) {
  return error2 instanceof ActionFailure ? new Error(`Cannot "throw fail()". Use "return fail()"`) : error2;
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event, leaf_node) {
  return leaf_node.server && event.request.method !== "GET" && event.request.method !== "HEAD";
}
async function handle_action_request(event, server2) {
  const actions = server2.actions;
  if (!actions) {
    maybe_throw_migration_error(server2);
    event.setHeaders({
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (data instanceof ActionFailure) {
      return { type: "failure", status: data.status, data: data.data };
    } else {
      return {
        type: "success",
        status: 200,
        data
      };
    }
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return {
        type: "redirect",
        status: error2.status,
        location: error2.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(error2)
    };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      `When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions`
    );
  }
}
async function call_action(event, actions) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new Error(`No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new Error(
      `Actions expect form-encoded data (received ${event.request.headers.get("content-type")}`
    );
  }
  return action(event);
}
function maybe_throw_migration_error(server2) {
  for (const method of ["POST", "PUT", "PATCH", "DELETE"]) {
    if (server2[method]) {
      throw new Error(
        `${method} method no longer allowed in +page.server, use actions instead. See the PR for more info: https://github.com/sveltejs/kit/pull/6469`
      );
    }
  }
}
function uneval_action_response(data, route_id) {
  return try_deserialize(data, uneval, route_id);
}
function stringify_action_response(data, route_id) {
  return try_deserialize(data, stringify, route_id);
}
function try_deserialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e) {
    const error2 = e;
    if ("path" in error2) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error2.message}`;
      if (error2.path !== "")
        message += ` (data.${error2.path})`;
      throw new Error(message);
    }
    throw error2;
  }
}
async function unwrap_promises(object) {
  var _a;
  for (const key2 in object) {
    if (typeof ((_a = object[key2]) == null ? void 0 : _a.then) === "function") {
      return Object.fromEntries(
        await Promise.all(Object.entries(object).map(async ([key3, value]) => [key3, await value]))
      );
    }
  }
  return object;
}
async function load_server_data({ event, state, node, parent }) {
  var _a;
  if (!(node == null ? void 0 : node.server))
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await ((_a = node.server.load) == null ? void 0 : _a.call(null, {
    ...event,
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[key2];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    route: {
      get id() {
        uses.route = true;
        return event.route.id;
      }
    },
    url
  }));
  const data = result ? await unwrap_promises(result) : null;
  return {
    type: "data",
    data,
    uses,
    slash: node.server.trailingSlash
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state,
  resolve_opts,
  csr
}) {
  var _a;
  const server_data_node = await server_data_promise;
  if (!((_a = node == null ? void 0 : node.shared) == null ? void 0 : _a.load)) {
    return (server_data_node == null ? void 0 : server_data_node.data) ?? null;
  }
  const load_event = {
    url: event.url,
    params: event.params,
    data: (server_data_node == null ? void 0 : server_data_node.data) ?? null,
    route: event.route,
    fetch: async (input, init2) => {
      const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
      const response = await event.fetch(input, init2);
      const url = new URL(input instanceof Request ? input.url : input, event.url);
      const same_origin = url.origin === event.url.origin;
      let dependency;
      if (same_origin) {
        if (state.prerendering) {
          dependency = { response, body: null };
          state.prerendering.dependencies.set(url.pathname, dependency);
        }
      } else {
        const mode = input instanceof Request ? input.mode : (init2 == null ? void 0 : init2.mode) ?? "cors";
        if (mode !== "no-cors") {
          const acao = response.headers.get("access-control-allow-origin");
          if (!acao || acao !== event.url.origin && acao !== "*") {
            throw new Error(
              `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
            );
          }
        }
      }
      const proxy = new Proxy(response, {
        get(response2, key2, _receiver) {
          async function text() {
            const body = await response2.text();
            if (!body || typeof body === "string") {
              const status_number = Number(response2.status);
              if (isNaN(status_number)) {
                throw new Error(
                  `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
                );
              }
              fetched.push({
                url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
                method: event.request.method,
                request_body: input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2 == null ? void 0 : init2.body,
                response_body: body,
                response: response2
              });
            }
            if (dependency) {
              dependency.body = body;
            }
            return body;
          }
          if (key2 === "arrayBuffer") {
            return async () => {
              const buffer = await response2.arrayBuffer();
              if (dependency) {
                dependency.body = new Uint8Array(buffer);
              }
              return buffer;
            };
          }
          if (key2 === "text") {
            return text;
          }
          if (key2 === "json") {
            return async () => {
              return JSON.parse(await text());
            };
          }
          return Reflect.get(response2, key2, response2);
        }
      });
      if (csr) {
        const get = response.headers.get;
        response.headers.get = (key2) => {
          const lower = key2.toLowerCase();
          const value = get.call(response.headers, lower);
          if (value && !lower.startsWith("x-sveltekit-")) {
            const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
            if (!included) {
              throw new Error(
                `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${event.route})`
              );
            }
          }
          return value;
        };
      }
      return proxy;
    },
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  };
  Object.defineProperties(load_event, {
    session: {
      get() {
        throw new Error(
          "session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
        );
      },
      enumerable: false
    }
  });
  const data = await node.shared.load.call(null, load_event);
  return data ? unwrap_promises(data) : null;
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder.decode(value);
  }
  return result;
}
function hash(value) {
  let hash2 = 5381;
  if (typeof value === "string") {
    let i = value.length;
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else if (ArrayBuffer.isView(value)) {
    const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
    let i = buffer.length;
    while (i)
      hash2 = hash2 * 33 ^ buffer[--i];
  } else {
    throw new TypeError("value must be a string or TypedArray");
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    if (key2 === "age")
      age = value;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.request_body) {
    attrs.push(`data-hash=${escape_html_attr(hash(fetched.request_body))}`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}</script>`;
}
var s = JSON.stringify;
var encoder = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode$2(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode$2(str) {
  const encoded = encoder.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src, _nonce;
var BaseProvider = class {
  constructor(use_hashes, directives, nonce, dev) {
    __privateAdd(this, _use_hashes, void 0);
    __privateAdd(this, _script_needs_csp, void 0);
    __privateAdd(this, _style_needs_csp, void 0);
    __privateAdd(this, _directives, void 0);
    __privateAdd(this, _script_src, void 0);
    __privateAdd(this, _style_src, void 0);
    __privateAdd(this, _nonce, void 0);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, dev ? { ...directives } : directives);
    const d = __privateGet(this, _directives);
    if (dev) {
      const effective_style_src2 = d["style-src"] || d["default-src"];
      if (effective_style_src2 && !effective_style_src2.includes("unsafe-inline")) {
        d["style-src"] = [...effective_style_src2, "unsafe-inline"];
      }
    }
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !dev && !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = directives[key2];
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  constructor(use_hashes, directives, nonce, dev) {
    var _a, _b;
    super(use_hashes, directives, nonce, dev);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = ((_a = directives["report-to"]) == null ? void 0 : _a.length) ?? 0 > 0;
      const has_report_uri = ((_b = directives["report-uri"]) == null ? void 0 : _b.length) ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  constructor({ mode, directives, reportOnly }, { prerender, dev }) {
    __publicField(this, "nonce", generate_nonce());
    __publicField(this, "csp_provider");
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce, dev);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce, dev);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
var updated = {
  ...readable(false),
  check: () => false
};
async function render_response({
  branch,
  fetched,
  options,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  var _a;
  if (state.prerendering) {
    if (options.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { entry } = options.manifest._;
  const stylesheets5 = new Set(entry.stylesheets);
  const modulepreloads = new Set(entry.imports);
  const fonts4 = new Set(options.manifest._.entry.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = (action_result == null ? void 0 : action_result.type) === "success" || (action_result == null ? void 0 : action_result.type) === "failure" ? action_result.data ?? null : null;
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      components: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data = {};
    for (let i = 0; i < branch.length; i += 1) {
      data = { ...data, ...branch[i].data };
      props[`data_${i}`] = data;
    }
    props.page = {
      error: error2,
      params: event.params,
      route: event.route,
      status,
      url: event.url,
      data,
      form: form_value
    };
    const print_error = (property, replacement) => {
      Object.defineProperty(props.page, property, {
        get: () => {
          throw new Error(`$page.${property} has been replaced by $page.url.${replacement}`);
        }
      });
    };
    print_error("origin", "origin");
    print_error("path", "pathname");
    print_error("query", "searchParams");
    rendered = options.root.render(props);
    for (const { node } of branch) {
      if (node.imports) {
        node.imports.forEach((url) => modulepreloads.add(url));
      }
      if (node.stylesheets) {
        node.stylesheets.forEach((url) => stylesheets5.add(url));
      }
      if (node.fonts) {
        node.fonts.forEach((url) => fonts4.add(url));
      }
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body = rendered.html;
  const csp = new Csp(options.csp, {
    dev: options.dev,
    prerender: !!state.prerendering
  });
  const target = hash(body);
  let assets2;
  if (options.paths.assets) {
    assets2 = options.paths.assets;
  } else if ((_a = state.prerendering) == null ? void 0 : _a.fallback) {
    assets2 = options.paths.base;
  } else {
    const segments = event.url.pathname.slice(options.paths.base.length).split("/").slice(2);
    assets2 = segments.length > 0 ? segments.map(() => "..").join("/") : ".";
  }
  const prefixed = (path) => path.startsWith("/") ? path : `${assets2}/${path}`;
  const serialized = { data: "", form: "null" };
  try {
    serialized.data = `[${branch.map(({ server_data }) => {
      if ((server_data == null ? void 0 : server_data.type) === "data") {
        const data = uneval(server_data.data);
        const uses = [];
        if (server_data.uses.dependencies.size > 0) {
          uses.push(`dependencies:${s(Array.from(server_data.uses.dependencies))}`);
        }
        if (server_data.uses.params.size > 0) {
          uses.push(`params:${s(Array.from(server_data.uses.params))}`);
        }
        if (server_data.uses.parent)
          uses.push(`parent:1`);
        if (server_data.uses.route)
          uses.push(`route:1`);
        if (server_data.uses.url)
          uses.push(`url:1`);
        return `{type:"data",data:${data},uses:{${uses.join(",")}}${server_data.slash ? `,slash:${s(server_data.slash)}` : ""}}`;
      }
      return s(server_data);
    }).join(",")}]`;
  } catch (e) {
    const error3 = e;
    throw new Error(clarify_devalue_error(event, error3));
  }
  if (form_value) {
    serialized.form = uneval_action_response(form_value, event.route.id);
  }
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (options.dev)
      attributes.push(" data-sveltekit");
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets5) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "css", path })) {
      const attributes = [];
      if (csp.style_needs_nonce) {
        attributes.push(`nonce="${csp.nonce}"`);
      }
      if (inline_styles.has(dep)) {
        attributes.push("disabled", 'media="(max-width: 0)"');
      } else {
        const preload_atts = ['rel="preload"', 'as="style"'].concat(attributes);
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
      attributes.unshift('rel="stylesheet"');
      head += `
		<link href="${path}" ${attributes.join(" ")}>`;
    }
  }
  for (const dep of fonts4) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head += `
		<link ${attributes.join(" ")}>`;
    }
  }
  if (page_config.csr) {
    const opts = [
      `env: ${s(options.public_env)}`,
      `paths: ${s(options.paths)}`,
      `target: document.querySelector('[data-sveltekit-hydrate="${target}"]').parentNode`,
      `version: ${s(options.version)}`
    ];
    if (page_config.ssr) {
      const hydrate = [
        `node_ids: [${branch.map(({ node }) => node.index).join(", ")}]`,
        `data: ${serialized.data}`,
        `form: ${serialized.form}`
      ];
      if (status !== 200) {
        hydrate.push(`status: ${status}`);
      }
      if (error2) {
        hydrate.push(`error: ${uneval(error2)}`);
      }
      if (options.embedded) {
        hydrate.push(`params: ${uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      opts.push(`hydrate: {
					${hydrate.join(",\n					")}
				}`);
    }
    const init_app = `
			import { start } from ${s(prefixed(entry.file))};

			start({
				${opts.join(",\n				")}
			});
		`;
    for (const dep of modulepreloads) {
      const path = prefixed(dep);
      if (resolve_opts.preload({ type: "js", path })) {
        link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
        if (state.prerendering) {
          head += `
		<link rel="modulepreload" href="${path}">`;
        }
      }
    }
    const attributes = ['type="module"', `data-sveltekit-hydrate="${target}"`];
    csp.add_script(init_app);
    if (csp.script_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    body += `
		<script ${attributes.join(" ")}>${init_app}</script>`;
  }
  if (page_config.ssr && page_config.csr) {
    body += `
	${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n	")}`;
  }
  if (options.service_worker) {
    const opts = options.dev ? `, { type: 'module' }` : "";
    const init_service_worker = `
			if ('serviceWorker' in navigator) {
				addEventListener('load', function () {
					navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
				});
			}
		`;
    csp.add_script(init_service_worker);
    head += `
		<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}</script>`;
  }
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  }
  head += rendered.head;
  const html = await resolve_opts.transformPageChunk({
    html: options.app_template({ head, body, assets: assets2, nonce: csp.nonce }),
    done: true
  }) || "";
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html",
    etag: `"${hash(html)}"`
  });
  if (!state.prerendering) {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  return new Response(html, {
    status,
    headers
  });
}
async function respond_with_error({ event, options, state, status, error: error2, resolve_opts }) {
  const fetched = [];
  try {
    const branch = [];
    const default_layout = await options.manifest._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    const csr = get_option([default_layout], "csr") ?? true;
    if (ssr) {
      state.initiator = GENERIC_ERROR;
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state,
        csr
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await options.manifest._.nodes[1](),
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options,
      state,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: await handle_error_and_jsonify(event, options, error2),
      branch,
      fetched,
      event,
      resolve_opts
    });
  } catch (error3) {
    if (error3 instanceof Redirect) {
      return redirect_response(error3.status, error3.location);
    }
    return static_error_page(
      options,
      error3 instanceof HttpError ? error3.status : 500,
      (await handle_error_and_jsonify(event, options, error3)).message
    );
  }
}
async function render_page(event, route, page2, options, state, resolve_opts) {
  if (state.initiator === route) {
    return new Response(`Not found: ${event.url.pathname}`, {
      status: 404
    });
  }
  state.initiator = route;
  if (is_action_json_request(event)) {
    const node = await options.manifest._.nodes[page2.leaf]();
    return handle_action_json_request(event, options, node == null ? void 0 : node.server);
  }
  try {
    const nodes = await Promise.all([
      ...page2.layouts.map((n) => n == void 0 ? n : options.manifest._.nodes[n]()),
      options.manifest._.nodes[page2.leaf]()
    ]);
    const leaf_node = nodes.at(-1);
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event, leaf_node)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if ((action_result == null ? void 0 : action_result.type) === "redirect") {
        return redirect_response(303, action_result.location);
      }
      if ((action_result == null ? void 0 : action_result.type) === "error") {
        const error2 = action_result.error;
        status = error2 instanceof HttpError ? error2.status : 500;
      }
      if ((action_result == null ? void 0 : action_result.type) === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node == null ? void 0 : node.server);
    const data_pathname = add_data_suffix(event.url.pathname);
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod && mod.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false) {
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options,
        state,
        resolve_opts
      });
    }
    let branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && (action_result == null ? void 0 : action_result.type) === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent)
                  Object.assign(data, await parent.data);
              }
              return data;
            }
          });
        } catch (e) {
          load_error = e;
          throw load_error;
        }
      });
    });
    const csr = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i],
            state,
            csr
          });
        } catch (e) {
          load_error = e;
          throw load_error;
        }
      });
    });
    for (const p of server_promises)
      p.catch(() => {
      });
    for (const p of load_promises)
      p.catch(() => {
      });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e) {
          const err = normalize_error(e);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state.prerendering.dependencies.set(data_pathname, {
                response: new Response(body),
                body
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error2 = await handle_error_and_jsonify(event, options, err);
          while (i--) {
            if (page2.errors[i]) {
              const index4 = page2.errors[i];
              const node2 = await options.manifest._.nodes[index4]();
              let j = i;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      const body = `{"type":"data","nodes":[${branch.map((node) => serialize_data_node(node == null ? void 0 : node.server_data)).join(",")}]}`;
      state.prerendering.dependencies.set(data_pathname, {
        response: new Response(body),
        body
      });
    }
    return await render_response({
      event,
      options,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: true
      },
      status,
      error: null,
      branch: compact(branch),
      action_result,
      fetched
    });
  } catch (error2) {
    return await respond_with_error({
      event,
      options,
      state,
      status: 500,
      error: error2,
      resolve_opts
    });
  }
}
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  let buffered = "";
  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];
    let value = values[i];
    if (param.chained && param.rest && buffered) {
      value = value ? buffered + "/" + value : buffered;
    }
    buffered = "";
    if (value === void 0) {
      if (param.rest)
        result[param.name] = "";
    } else {
      if (param.matcher && !matchers[param.matcher](value)) {
        if (param.optional && param.chained) {
          let j = values.indexOf(void 0, i);
          if (j === -1) {
            const next = params[i + 1];
            if ((next == null ? void 0 : next.rest) && next.chained) {
              buffered = value;
            } else {
              return;
            }
          }
          while (j >= i) {
            values[j] = values[j - 1];
            j -= 1;
          }
          continue;
        }
        return;
      }
      result[param.name] = value;
    }
  }
  if (buffered)
    return;
  return result;
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
async function render_data(event, route, options, state, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return {
              type: "skip"
            };
          }
          const node = n == void 0 ? n : await options.manifest._.nodes[n]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await functions[j]();
                if (parent) {
                  Object.assign(data, parent.data);
                }
              }
              return data;
            }
          });
        } catch (e) {
          aborted = true;
          throw e;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return {
          type: "skip"
        };
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch(async (error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          return {
            type: "error",
            error: await handle_error_and_jsonify(event, options, error2),
            status: error2 instanceof HttpError ? error2.status : void 0
          };
        })
      )
    );
    try {
      const stubs = nodes.slice(0, length).map(serialize_data_node);
      const json2 = `{"type":"data","nodes":[${stubs.join(",")}]}`;
      return json_response(json2);
    } catch (e) {
      const error2 = e;
      return json_response(JSON.stringify(clarify_devalue_error(event, error2)), 500);
    }
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return redirect_json_response(error2);
    } else {
      return json_response(JSON.stringify(await handle_error_and_jsonify(event, options, error2)));
    }
  }
}
function json_response(json2, status = 200) {
  return new Response(json2, {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect) {
  return json_response(
    JSON.stringify({
      type: "redirect",
      location: redirect.location
    })
  );
}
var parse_1 = parse$1;
var serialize_1 = serialize;
var __toString = Object.prototype.toString;
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse$1(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  var obj = {};
  var opt = options || {};
  var dec = opt.decode || decode$1;
  var index4 = 0;
  while (index4 < str.length) {
    var eqIdx = str.indexOf("=", index4);
    if (eqIdx === -1) {
      break;
    }
    var endIdx = str.indexOf(";", index4);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index4 = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    var key2 = str.slice(index4, eqIdx).trim();
    if (void 0 === obj[key2]) {
      var val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key2] = tryDecode(val, dec);
    }
    index4 = endIdx + 1;
  }
  return obj;
}
function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode$1;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  var value = enc(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }
  var str = name + "=" + value;
  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    var expires = opt.expires;
    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function decode$1(str) {
  return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
}
function encode$1(val) {
  return encodeURIComponent(val);
}
function isDate(val) {
  return __toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e) {
    return str;
  }
}
var cookie_paths = {};
var encode = encodeURIComponent;
var decode = decodeURIComponent;
function get_cookies(request, url, dev, trailing_slash) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = parse_1(header, { decode });
  const normalized_url = normalize_path(url.pathname, trailing_slash);
  const default_path = normalized_url.split("/").slice(0, -1).join("/") || "/";
  if (dev) {
    for (const name of Object.keys(cookie_paths)) {
      cookie_paths[name] = new Set(
        [...cookie_paths[name]].filter(
          (path) => !path_matches(normalized_url, path) || name in initial_cookies
        )
      );
    }
    for (const name in initial_cookies) {
      cookie_paths[name] = cookie_paths[name] ?? /* @__PURE__ */ new Set();
      if (![...cookie_paths[name]].some((path) => path_matches(normalized_url, path))) {
        cookie_paths[name].add(default_path);
      }
    }
  }
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    get(name, opts) {
      const c = new_cookies[name];
      if (c && domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
        return c.value;
      }
      const decoder = (opts == null ? void 0 : opts.decode) || decode;
      const req_cookies = parse_1(header, { decode: decoder });
      const cookie = req_cookies[name];
      if (!dev || cookie) {
        return cookie;
      }
      const paths = /* @__PURE__ */ new Set([...cookie_paths[name] ?? []]);
      if (c) {
        paths.add(c.options.path ?? default_path);
      }
      if (paths.size > 0) {
        console.warn(
          `Cookie with name '${name}' was not found at path '${url.pathname}', but a cookie with that name exists at these paths: '${[...paths].join("', '")}'. Did you mean to set its 'path' to '/' instead?`
        );
      }
    },
    set(name, value, opts = {}) {
      let path = opts.path ?? default_path;
      new_cookies[name] = {
        name,
        value,
        options: {
          ...defaults,
          ...opts,
          path
        }
      };
      if (dev) {
        cookie_paths[name] = cookie_paths[name] ?? /* @__PURE__ */ new Set();
        if (!value) {
          if (!cookie_paths[name].has(path) && cookie_paths[name].size > 0) {
            const paths = `'${Array.from(cookie_paths[name]).join("', '")}'`;
            console.warn(
              `Trying to delete cookie '${name}' at path '${path}', but a cookie with that name only exists at these paths: ${paths}.`
            );
          }
          cookie_paths[name].delete(path);
        } else {
          cookie_paths[name].add(path);
        }
      }
    },
    delete(name, opts = {}) {
      cookies.set(name, "", {
        ...opts,
        maxAge: 0
      });
    },
    serialize(name, value, opts) {
      return serialize_1(name, value, {
        ...defaults,
        ...opts
      });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {};
    for (const name in initial_cookies) {
      combined_cookies[name] = encode(initial_cookies[name]);
    }
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain))
        continue;
      if (!path_matches(destination.pathname, cookie.options.path))
        continue;
      const encoder2 = cookie.options.encode || encode;
      combined_cookies[cookie.name] = encoder2(cookie.value);
    }
    if (header2) {
      const parsed = parse_1(header2, { decode });
      for (const name in parsed) {
        combined_cookies[name] = encode(parsed[name]);
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  return { cookies, new_cookies, get_cookie_header };
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options } = new_cookie;
    headers.append("set-cookie", serialize_1(name, value, options));
  }
}
var setCookie = { exports: {} };
var defaultParseOptions = {
  decodeValues: true,
  map: false,
  silent: false
};
function isNonEmptyString(str) {
  return typeof str === "string" && !!str.trim();
}
function parseString(setCookieValue, options) {
  var parts = setCookieValue.split(";").filter(isNonEmptyString);
  var nameValuePairStr = parts.shift();
  var parsed = parseNameValuePair(nameValuePairStr);
  var name = parsed.name;
  var value = parsed.value;
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  try {
    value = options.decodeValues ? decodeURIComponent(value) : value;
  } catch (e) {
    console.error(
      "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
      e
    );
  }
  var cookie = {
    name,
    value
  };
  parts.forEach(function(part) {
    var sides = part.split("=");
    var key2 = sides.shift().trimLeft().toLowerCase();
    var value2 = sides.join("=");
    if (key2 === "expires") {
      cookie.expires = new Date(value2);
    } else if (key2 === "max-age") {
      cookie.maxAge = parseInt(value2, 10);
    } else if (key2 === "secure") {
      cookie.secure = true;
    } else if (key2 === "httponly") {
      cookie.httpOnly = true;
    } else if (key2 === "samesite") {
      cookie.sameSite = value2;
    } else {
      cookie[key2] = value2;
    }
  });
  return cookie;
}
function parseNameValuePair(nameValuePairStr) {
  var name = "";
  var value = "";
  var nameValueArr = nameValuePairStr.split("=");
  if (nameValueArr.length > 1) {
    name = nameValueArr.shift();
    value = nameValueArr.join("=");
  } else {
    value = nameValuePairStr;
  }
  return { name, value };
}
function parse(input, options) {
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  if (!input) {
    if (!options.map) {
      return [];
    } else {
      return {};
    }
  }
  if (input.headers && input.headers["set-cookie"]) {
    input = input.headers["set-cookie"];
  } else if (input.headers) {
    var sch = input.headers[Object.keys(input.headers).find(function(key2) {
      return key2.toLowerCase() === "set-cookie";
    })];
    if (!sch && input.headers.cookie && !options.silent) {
      console.warn(
        "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
      );
    }
    input = sch;
  }
  if (!Array.isArray(input)) {
    input = [input];
  }
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  if (!options.map) {
    return input.filter(isNonEmptyString).map(function(str) {
      return parseString(str, options);
    });
  } else {
    var cookies = {};
    return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
      var cookie = parseString(str, options);
      cookies2[cookie.name] = cookie;
      return cookies2;
    }, cookies);
  }
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString;
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;
  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }
  function notSpecialChar() {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  }
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}
setCookie.exports = parse;
setCookie.exports.parse = parse;
var parseString_1 = setCookie.exports.parseString = parseString;
var splitCookiesString_1 = setCookie.exports.splitCookiesString = splitCookiesString;
function create_fetch({ event, options, state, get_cookie_header }) {
  return async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    const request_body = init2 == null ? void 0 : init2.body;
    let mode = (info instanceof Request ? info.mode : init2 == null ? void 0 : init2.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2 == null ? void 0 : init2.credentials) ?? "same-origin";
    return await options.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3 == null ? void 0 : init3.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3 == null ? void 0 : init3.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie)
              request.headers.set("cookie", cookie);
          }
          let response2 = await fetch(request);
          if (mode === "no-cors") {
            response2 = new Response("", {
              status: response2.status,
              statusText: response2.statusText,
              headers: response2.headers
            });
          }
          return response2;
        }
        let response;
        const prefix = options.paths.assets || options.paths.base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = options.manifest.assets.has(filename);
        const is_asset_html = options.manifest.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file4 = is_asset ? filename : filename_html;
          if (options.read) {
            const type = is_asset ? options.manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(options.read(file4), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (request_body && typeof request_body !== "string" && !ArrayBuffer.isView(request_body)) {
          throw new Error("Request body must be a string or TypedArray");
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            event.request.headers.get("accept-language")
          );
        }
        response = await respond(request, options, state);
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of splitCookiesString_1(set_cookie)) {
            const { name, value, ...options2 } = parseString_1(str);
            event.cookies.set(
              name,
              value,
              options2
            );
          }
        }
        return response;
      }
    });
  };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
function validator(expected) {
  const set = new Set(expected);
  function validate(module2, route_id) {
    if (!module2)
      return;
    for (const key2 in module2) {
      if (key2[0] !== "_" && !set.has(key2)) {
        const valid = expected.join(", ");
        throw new Error(
          `Invalid export '${key2}'${route_id ? ` in ${route_id}` : ""} (valid exports are ${valid}, or anything with a '_' prefix)`
        );
      }
    }
  }
  return validate;
}
var validate_common_exports = validator([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash"
]);
var validate_page_server_exports = validator([
  "load",
  "prerender",
  "csr",
  "ssr",
  "actions",
  "trailingSlash"
]);
var validate_server_exports = validator([
  "GET",
  "POST",
  "PATCH",
  "PUT",
  "DELETE",
  "prerender",
  "trailingSlash"
]);
var default_transform = ({ html }) => html;
var default_filter = () => false;
var default_preload = ({ type }) => type === "js" || type === "css";
async function respond(request, options, state) {
  var _a, _b, _c, _d;
  let url = new URL(request.url);
  if (options.csrf.check_origin) {
    const forbidden = request.method === "POST" && request.headers.get("origin") !== url.origin && is_form_content_type(request);
    if (forbidden) {
      const csrf_error = error(403, `Cross-site ${request.method} form submissions are forbidden`);
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return new Response(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  let decoded;
  try {
    decoded = decode_pathname(url.pathname);
  } catch {
    return new Response("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (options.paths.base && !((_a = state.prerendering) == null ? void 0 : _a.fallback)) {
    if (!decoded.startsWith(options.paths.base)) {
      return new Response("Not found", { status: 404 });
    }
    decoded = decoded.slice(options.paths.base.length) || "/";
  }
  const is_data_request = has_data_suffix(decoded);
  let invalidated_data_nodes;
  if (is_data_request) {
    decoded = strip_data_suffix(decoded) || "/";
    url.pathname = strip_data_suffix(url.pathname) || "/";
    invalidated_data_nodes = (_b = url.searchParams.get(INVALIDATED_PARAM)) == null ? void 0 : _b.split("_").map(Boolean);
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  if (!((_c = state.prerendering) == null ? void 0 : _c.fallback)) {
    const matchers = await options.manifest._.matchers();
    for (const candidate of options.manifest._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  let trailing_slash = void 0;
  const headers = {};
  const event = {
    cookies: null,
    fetch: null,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-vercel"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    route: { id: (route == null ? void 0 : route.id) ?? null },
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            `Use \`event.cookies.set(name, value, options)\` instead of \`event.setHeaders\` to set cookies`
          );
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request
  };
  const removed = (property, replacement, suffix = "") => ({
    get: () => {
      throw new Error(`event.${property} has been replaced by event.${replacement}` + suffix);
    }
  });
  const details = ". See https://github.com/sveltejs/kit/pull/3384 for details";
  const body_getter = {
    get: () => {
      throw new Error(
        "To access the request body use the text/json/arrayBuffer/formData methods, e.g. `body = await request.json()`" + details
      );
    }
  };
  Object.defineProperties(event, {
    clientAddress: removed("clientAddress", "getClientAddress"),
    method: removed("method", "request.method", details),
    headers: removed("headers", "request.headers", details),
    origin: removed("origin", "url.origin"),
    path: removed("path", "url.pathname"),
    query: removed("query", "url.searchParams"),
    body: body_getter,
    rawBody: body_getter,
    routeId: removed("routeId", "route.id")
  });
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  try {
    if (route && !is_data_request) {
      if (route.page) {
        const nodes = await Promise.all([
          ...route.page.layouts.map((n) => n == void 0 ? n : options.manifest._.nodes[n]()),
          options.manifest._.nodes[route.page.leaf]()
        ]);
        if (false)
          ;
        trailing_slash = get_option(nodes, "trailingSlash");
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash;
        if (false)
          ;
      }
      const normalized = normalize_path(url.pathname, trailing_slash ?? "never");
      if (normalized !== url.pathname && !((_d = state.prerendering) == null ? void 0 : _d.fallback)) {
        return new Response(void 0, {
          status: 301,
          headers: {
            "x-sveltekit-normalize": "1",
            location: (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
          }
        });
      }
    }
    const { cookies, new_cookies, get_cookie_header } = get_cookies(
      request,
      url,
      options.dev,
      trailing_slash ?? "never"
    );
    event.cookies = cookies;
    event.fetch = create_fetch({ event, options, state, get_cookie_header });
    if (state.prerendering && !state.prerendering.fallback)
      disable_search(url);
    const response = await options.hooks.handle({
      event,
      resolve: (event2, opts) => resolve(event2, opts).then((response2) => {
        for (const key2 in headers) {
          const value = headers[key2];
          response2.headers.set(key2, value);
        }
        add_cookies_to_headers(response2.headers, Object.values(new_cookies));
        if (state.prerendering && event2.route.id !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
        }
        return response2;
      }),
      get request() {
        throw new Error("request in handle has been replaced with event" + details);
      }
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value == null ? void 0 : if_none_match_value.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag = response.headers.get("etag");
      if (if_none_match_value === etag) {
        const headers2 = new Headers({ etag });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value)
            headers2.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers2
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(response.status, location));
      }
    }
    return response;
  } catch (error2) {
    if (error2 instanceof Redirect) {
      if (is_data_request) {
        return redirect_json_response(error2);
      } else {
        return redirect_response(error2.status, error2.location);
      }
    }
    return await handle_fatal_error(event, options, error2);
  }
  async function resolve(event2, opts) {
    var _a2;
    try {
      if (opts) {
        if ("transformPage" in opts) {
          throw new Error(
            "transformPage has been replaced by transformPageChunk \u2014 see https://github.com/sveltejs/kit/pull/5657 for more information"
          );
        }
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if ((_a2 = state.prerendering) == null ? void 0 : _a2.fallback) {
        return await render_response({
          event: event2,
          options,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options,
            state,
            invalidated_data_nodes,
            trailing_slash ?? "never"
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else if (route.page) {
          response = await render_page(event2, route, route.page, options, state, resolve_opts);
        } else {
          throw new Error("This should never happen");
        }
        return response;
      }
      if (state.initiator === GENERIC_ERROR) {
        return new Response("Internal Server Error", {
          status: 500
        });
      }
      if (!state.initiator) {
        return await respond_with_error({
          event: event2,
          options,
          state,
          status: 404,
          error: new Error(`Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return new Response("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (error2) {
      return await handle_fatal_error(event2, options, error2);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
var base = "";
var assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
var app_template = ({ head, body, assets: assets2, nonce }) => '<!DOCTYPE html>\r\n<html lang="en">\r\n  <head>\r\n    <meta charset="utf-8" />\r\n    <link rel="icon" href="' + assets2 + '/favicon.png" />\r\n    <meta name="viewport" content="width=device-width" />\r\n    ' + head + '\r\n  </head>\r\n  <body>\r\n    <div style="display: contents">' + body + "</div>\r\n  </body>\r\n</html>\r\n";
var error_template = ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n";
var read = null;
set_paths({ "base": "", "assets": "" });
var Server = class {
  constructor(manifest2) {
    this.options = {
      csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
      csrf: {
        check_origin: true
      },
      dev: false,
      embedded: false,
      handle_error: (error2, event) => {
        return this.options.hooks.handleError({
          error: error2,
          event,
          get request() {
            throw new Error("request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details");
          }
        }) ?? { message: event.route.id != null ? "Internal Error" : "Not Found" };
      },
      hooks: null,
      manifest: manifest2,
      paths: { base, assets },
      public_env: {},
      read,
      root: Root,
      service_worker: false,
      app_template,
      app_template_contains_nonce: false,
      error_template,
      version: "1670890794095"
    };
  }
  async init({ env }) {
    const entries = Object.entries(env);
    Object.fromEntries(entries.filter(([k]) => !k.startsWith("PUBLIC_")));
    const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith("PUBLIC_")));
    this.options.public_env = pub;
    if (!this.options.hooks) {
      const module2 = await Promise.resolve().then(() => (init_hooks(), hooks_exports));
      if (module2.externalFetch) {
        throw new Error("externalFetch has been removed \u2014 use handleFetch instead. See https://github.com/sveltejs/kit/pull/6565 for details");
      }
      this.options.hooks = {
        handle: module2.handle || (({ event, resolve }) => resolve(event)),
        handleError: module2.handleError || (({ error: error2 }) => console.error(error2.stack)),
        handleFetch: module2.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request))
      };
    }
  }
  async respond(request, options = {}) {
    if (!(request instanceof Request)) {
      throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    }
    return respond(request, this.options, options);
  }
};

// .svelte-kit/vercel-tmp/render/manifest.js
var manifest = {
  appDir: "_app",
  appPath: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png"]),
  mimeTypes: { ".png": "image/png" },
  _: {
    entry: { "file": "_app/immutable/start-8cdd2575.js", "imports": ["_app/immutable/start-8cdd2575.js", "_app/immutable/chunks/index-846b5d79.js", "_app/immutable/chunks/singletons-0abf66f8.js", "_app/immutable/chunks/index-2879e7ce.js"], "stylesheets": [], "fonts": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3))
    ],
    routes: [
      {
        id: "/",
        pattern: /^\/$/,
        params: [],
        page: { layouts: [0], errors: [1], leaf: 2 },
        endpoint: null
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};

// .svelte-kit/vercel-tmp/render/edge.js
var server = new Server(manifest);
var initialized = server.init({
  env: process.env
});
var edge_default = async (request) => {
  await initialized;
  return server.respond(request, {
    getClientAddress() {
      return request.headers.get("x-forwarded-for");
    }
  });
};
export {
  edge_default as default
};
//# sourceMappingURL=index.js.map
