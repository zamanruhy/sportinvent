const sharedConfig = {};
const $$EVENTS = "_$DX_DELEGATE";
function delegateEvents(eventNames, document2 = window.document) {
  const e2 = document2[$$EVENTS] || (document2[$$EVENTS] = /* @__PURE__ */ new Set());
  for (let i2 = 0, l2 = eventNames.length; i2 < l2; i2++) {
    const name = eventNames[i2];
    if (!e2.has(name)) {
      e2.add(name);
      document2.addEventListener(name, eventHandler);
    }
  }
}
function eventHandler(e2) {
  const key = `$$${e2.type}`;
  let node = e2.composedPath && e2.composedPath()[0] || e2.target;
  if (e2.target !== node) {
    Object.defineProperty(e2, "target", {
      configurable: true,
      value: node
    });
  }
  Object.defineProperty(e2, "currentTarget", {
    configurable: true,
    get() {
      return node || document;
    }
  });
  if (sharedConfig.registry && !sharedConfig.done) {
    sharedConfig.done = true;
    document.querySelectorAll("[id^=pl-]").forEach((elem) => elem.remove());
  }
  while (node !== null) {
    const handler = node[key];
    if (handler && !node.disabled) {
      const data = node[`${key}Data`];
      data !== void 0 ? handler.call(node, data, e2) : handler.call(node, e2);
      if (e2.cancelBubble)
        return;
    }
    node = node.host && node.host !== node && node.host instanceof Node ? node.host : node.parentNode;
  }
}
var n = function() {
  return n = Object.assign || function(n2) {
    for (var t2, i2 = 1, e2 = arguments.length; i2 < e2; i2++)
      for (var r2 in t2 = arguments[i2])
        Object.prototype.hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
    return n2;
  }, n.apply(this, arguments);
};
function t(n2, t2, i2) {
  if (i2 || 2 === arguments.length)
    for (var e2, r2 = 0, a2 = t2.length; r2 < a2; r2++)
      !e2 && r2 in t2 || (e2 || (e2 = Array.prototype.slice.call(t2, 0, r2)), e2[r2] = t2[r2]);
  return n2.concat(e2 || Array.prototype.slice.call(t2));
}
function i(n2) {
  return Array.prototype.slice.call(n2);
}
function e(n2, t2) {
  var i2 = Math.floor(n2);
  return i2 === t2 || i2 + 1 === t2 ? n2 : t2;
}
function r() {
  return Date.now();
}
function a(n2, t2, i2) {
  if (t2 = "data-keen-slider-" + t2, null === i2)
    return n2.removeAttribute(t2);
  n2.setAttribute(t2, i2 || "");
}
function o(n2, t2) {
  return t2 = t2 || document, "function" == typeof n2 && (n2 = n2(t2)), Array.isArray(n2) ? n2 : "string" == typeof n2 ? i(t2.querySelectorAll(n2)) : n2 instanceof HTMLElement ? [n2] : n2 instanceof NodeList ? i(n2) : [];
}
function u(n2) {
  n2.raw && (n2 = n2.raw), n2.cancelable && !n2.defaultPrevented && n2.preventDefault();
}
function s(n2) {
  n2.raw && (n2 = n2.raw), n2.stopPropagation && n2.stopPropagation();
}
function c() {
  var n2 = [];
  return { add: function(t2, i2, e2, r2) {
    t2.addListener ? t2.addListener(e2) : t2.addEventListener(i2, e2, r2), n2.push([t2, i2, e2, r2]);
  }, input: function(n3, t2, i2, e2) {
    this.add(n3, t2, function(n4) {
      return function(t3) {
        t3.nativeEvent && (t3 = t3.nativeEvent);
        var i3 = t3.changedTouches || [], e3 = t3.targetTouches || [], r2 = t3.detail && t3.detail.x ? t3.detail : null;
        return n4({ id: r2 ? r2.identifier ? r2.identifier : "i" : e3[0] ? e3[0] ? e3[0].identifier : "e" : "d", idChanged: r2 ? r2.identifier ? r2.identifier : "i" : i3[0] ? i3[0] ? i3[0].identifier : "e" : "d", raw: t3, x: r2 && r2.x ? r2.x : e3[0] ? e3[0].screenX : r2 ? r2.x : t3.pageX, y: r2 && r2.y ? r2.y : e3[0] ? e3[0].screenY : r2 ? r2.y : t3.pageY });
      };
    }(i2), e2);
  }, purge: function() {
    n2.forEach(function(n3) {
      n3[0].removeListener ? n3[0].removeListener(n3[2]) : n3[0].removeEventListener(n3[1], n3[2], n3[3]);
    }), n2 = [];
  } };
}
function d(n2, t2, i2) {
  return Math.min(Math.max(n2, t2), i2);
}
function l(n2) {
  return (n2 > 0 ? 1 : 0) - (n2 < 0 ? 1 : 0) || +n2;
}
function f(n2) {
  var t2 = n2.getBoundingClientRect();
  return { height: e(t2.height, n2.offsetHeight), width: e(t2.width, n2.offsetWidth) };
}
function p(n2, t2, i2, e2) {
  var r2 = n2 && n2[t2];
  return null == r2 ? i2 : e2 && "function" == typeof r2 ? r2() : r2;
}
function v(n2) {
  return Math.round(1e6 * n2) / 1e6;
}
function h(n2) {
  var t2, i2, e2, r2, a2, o2;
  function u2(t3) {
    o2 || (o2 = t3), s2(true);
    var a3 = t3 - o2;
    a3 > e2 && (a3 = e2);
    var l3 = r2[i2];
    if (l3[3] < a3)
      return i2++, u2(t3);
    var f2 = l3[2], p2 = l3[4], v2 = l3[0], h2 = l3[1] * (0, l3[5])(0 === p2 ? 1 : (a3 - f2) / p2);
    if (h2 && n2.track.to(v2 + h2), a3 < e2)
      return d2();
    o2 = null, s2(false), c2(null), n2.emit("animationEnded");
  }
  function s2(n3) {
    t2.active = n3;
  }
  function c2(n3) {
    t2.targetIdx = n3;
  }
  function d2() {
    var n3;
    n3 = u2, a2 = window.requestAnimationFrame(n3);
  }
  function l2() {
    var t3;
    t3 = a2, window.cancelAnimationFrame(t3), s2(false), c2(null), o2 && n2.emit("animationStopped"), o2 = null;
  }
  return t2 = { active: false, start: function(t3) {
    if (l2(), n2.track.details) {
      var a3 = 0, o3 = n2.track.details.position;
      i2 = 0, e2 = 0, r2 = t3.map(function(n3) {
        var t4, i3 = o3, r3 = null !== (t4 = n3.earlyExit) && void 0 !== t4 ? t4 : n3.duration, u3 = n3.easing, s3 = n3.distance * u3(r3 / n3.duration) || 0;
        o3 += s3;
        var c3 = e2;
        return e2 += r3, a3 += s3, [i3, n3.distance, c3, e2, n3.duration, u3];
      }), c2(n2.track.distToIdx(a3)), d2(), n2.emit("animationStarted");
    }
  }, stop: l2, targetIdx: null };
}
function m(n2) {
  var i2, e2, a2, o2, u2, s2, c2, f2, h2, m2, g2, b2, x2, k2, y2 = 1 / 0, w = [], M = null, T = 0;
  function C(n3) {
    _(T + n3);
  }
  function E(n3) {
    var t2 = z(T + n3).abs;
    return D(t2) ? t2 : null;
  }
  function z(n3) {
    var i3 = Math.floor(Math.abs(v(n3 / e2))), r2 = v((n3 % e2 + e2) % e2);
    r2 === e2 && (r2 = 0);
    var a3 = l(n3), o3 = c2.indexOf(t([], c2, true).reduce(function(n4, t2) {
      return Math.abs(t2 - r2) < Math.abs(n4 - r2) ? t2 : n4;
    })), u3 = o3;
    return a3 < 0 && i3++, o3 === s2 && (u3 = 0, i3 += a3 > 0 ? 1 : -1), { abs: u3 + i3 * s2 * a3, origin: o3, rel: u3 };
  }
  function I(n3, t2, i3) {
    var e3;
    if (t2 || !S())
      return A(n3, i3);
    if (!D(n3))
      return null;
    var r2 = z(null != i3 ? i3 : T), a3 = r2.abs, o3 = n3 - r2.rel, u3 = a3 + o3;
    e3 = A(u3);
    var c3 = A(u3 - s2 * l(o3));
    return (null !== c3 && Math.abs(c3) < Math.abs(e3) || null === e3) && (e3 = c3), v(e3);
  }
  function A(n3, t2) {
    if (null == t2 && (t2 = v(T)), !D(n3) || null === n3)
      return null;
    n3 = Math.round(n3);
    var i3 = z(t2), r2 = i3.abs, a3 = i3.rel, o3 = i3.origin, u3 = O(n3), d2 = (t2 % e2 + e2) % e2, l2 = c2[o3], f3 = Math.floor((n3 - (r2 - a3)) / s2) * e2;
    return v(l2 - d2 - l2 + c2[u3] + f3 + (o3 === s2 ? e2 : 0));
  }
  function D(n3) {
    return L(n3) === n3;
  }
  function L(n3) {
    return d(n3, h2, m2);
  }
  function S() {
    return o2.loop;
  }
  function O(n3) {
    return (n3 % s2 + s2) % s2;
  }
  function _(t2) {
    var i3;
    i3 = t2 - T, w.push({ distance: i3, timestamp: r() }), w.length > 6 && (w = w.slice(-6)), T = v(t2);
    var e3 = H().abs;
    if (e3 !== M) {
      var a3 = null !== M;
      M = e3, a3 && n2.emit("slideChanged");
    }
  }
  function H(t2) {
    var r2 = t2 ? null : function() {
      if (s2) {
        var n3 = S(), t3 = n3 ? (T % e2 + e2) % e2 : T, i3 = (n3 ? T % e2 : T) - u2[0][2], r3 = 0 - (i3 < 0 && n3 ? e2 - Math.abs(i3) : i3), c3 = 0, d2 = z(T), f3 = d2.abs, p2 = d2.rel, v2 = u2[p2][2], y3 = u2.map(function(t4, i4) {
          var a3 = r3 + c3;
          (a3 < 0 - t4[0] || a3 > 1) && (a3 += (Math.abs(a3) > e2 - 1 && n3 ? e2 : 0) * l(-a3));
          var u3 = i4 - p2, d3 = l(u3), h3 = u3 + f3;
          n3 && (-1 === d3 && a3 > v2 && (h3 += s2), 1 === d3 && a3 < v2 && (h3 -= s2), null !== g2 && h3 < g2 && (a3 += e2), null !== b2 && h3 > b2 && (a3 -= e2));
          var m3 = a3 + t4[0] + t4[1], x3 = Math.max(a3 >= 0 && m3 <= 1 ? 1 : m3 < 0 || a3 > 1 ? 0 : a3 < 0 ? Math.min(1, (t4[0] + a3) / t4[0]) : (1 - a3) / t4[0], 0);
          return c3 += t4[0] + t4[1], { abs: h3, distance: o2.rtl ? -1 * a3 + 1 - t4[0] : a3, portion: x3, size: t4[0] };
        });
        return f3 = L(f3), p2 = O(f3), { abs: L(f3), length: a2, max: k2, maxIdx: m2, min: x2, minIdx: h2, position: T, progress: n3 ? t3 / e2 : T / a2, rel: p2, slides: y3, slidesLength: e2 };
      }
    }();
    return i2.details = r2, n2.emit("detailsChanged"), r2;
  }
  return i2 = { absToRel: O, add: C, details: null, distToIdx: E, idxToDist: I, init: function(t2) {
    if (function() {
      if (o2 = n2.options, u2 = (o2.trackConfig || []).map(function(n3) {
        return [p(n3, "size", 1), p(n3, "spacing", 0), p(n3, "origin", 0)];
      }), s2 = u2.length) {
        e2 = v(u2.reduce(function(n3, t4) {
          return n3 + t4[0] + t4[1];
        }, 0));
        var t3, i4 = s2 - 1;
        a2 = v(e2 + u2[0][2] - u2[i4][0] - u2[i4][2] - u2[i4][1]), c2 = u2.reduce(function(n3, i5) {
          if (!n3)
            return [0];
          var e3 = u2[n3.length - 1], r2 = n3[n3.length - 1] + (e3[0] + e3[2]) + e3[1];
          return r2 -= i5[2], n3[n3.length - 1] > r2 && (r2 = n3[n3.length - 1]), r2 = v(r2), n3.push(r2), (!t3 || t3 < r2) && (f2 = n3.length - 1), t3 = r2, n3;
        }, null), 0 === a2 && (f2 = 0), c2.push(v(e2));
      }
    }(), !s2)
      return H(true);
    var i3;
    !function() {
      var t3 = n2.options.range, i4 = n2.options.loop;
      g2 = h2 = i4 ? p(i4, "min", -1 / 0) : 0, b2 = m2 = i4 ? p(i4, "max", y2) : f2;
      var e3 = p(t3, "min", null), r2 = p(t3, "max", null);
      e3 && (h2 = e3), r2 && (m2 = r2), x2 = h2 === -1 / 0 ? h2 : n2.track.idxToDist(h2 || 0, true, 0), k2 = m2 === y2 ? m2 : I(m2, true, 0), null === r2 && (b2 = m2), p(t3, "align", false) && m2 !== y2 && 0 === u2[O(m2)][2] && (k2 -= 1 - u2[O(m2)][0], m2 = E(k2 - T)), x2 = v(x2), k2 = v(k2);
    }(), i3 = t2, Number(i3) === i3 ? C(A(L(t2))) : H();
  }, to: _, velocity: function() {
    var n3 = r(), t2 = w.reduce(function(t3, i3) {
      var e3 = i3.distance, r2 = i3.timestamp;
      return n3 - r2 > 200 || (l(e3) !== l(t3.distance) && t3.distance && (t3 = { distance: 0, lastTimestamp: 0, time: 0 }), t3.time && (t3.distance += e3), t3.lastTimestamp && (t3.time += r2 - t3.lastTimestamp), t3.lastTimestamp = r2), t3;
    }, { distance: 0, lastTimestamp: 0, time: 0 });
    return t2.distance / t2.time || 0;
  } };
}
function g(n2) {
  var t2, i2, e2, r2, a2, o2, u2, s2;
  function c2(n3) {
    return 2 * n3;
  }
  function f2(n3) {
    return d(n3, u2, s2);
  }
  function p2(n3) {
    return 1 - Math.pow(1 - n3, 3);
  }
  function v2() {
    return e2 ? n2.track.velocity() : 0;
  }
  function h2() {
    b2();
    var t3 = "free-snap" === n2.options.mode, i3 = n2.track, e3 = v2();
    r2 = l(e3);
    var u3 = n2.track.details, s3 = [];
    if (e3 || !t3) {
      var d2 = m2(e3), h3 = d2.dist, g3 = d2.dur;
      if (g3 = c2(g3), h3 *= r2, t3) {
        var x2 = i3.idxToDist(i3.distToIdx(h3), true);
        x2 && (h3 = x2);
      }
      s3.push({ distance: h3, duration: g3, easing: p2 });
      var k2 = u3.position, y2 = k2 + h3;
      if (y2 < a2 || y2 > o2) {
        var w = y2 < a2 ? a2 - k2 : o2 - k2, M = 0, T = e3;
        if (l(w) === r2) {
          var C = Math.min(Math.abs(w) / Math.abs(h3), 1), E = function(n3) {
            return 1 - Math.pow(1 - n3, 1 / 3);
          }(C) * g3;
          s3[0].earlyExit = E, T = e3 * (1 - C);
        } else
          s3[0].earlyExit = 0, M += w;
        var z = m2(T, 100), I = z.dist * r2;
        n2.options.rubberband && (s3.push({ distance: I, duration: c2(z.dur), easing: p2 }), s3.push({ distance: -I + M, duration: 500, easing: p2 }));
      }
      n2.animator.start(s3);
    } else
      n2.moveToIdx(f2(u3.abs), true, { duration: 500, easing: function(n3) {
        return 1 + --n3 * n3 * n3 * n3 * n3;
      } });
  }
  function m2(n3, t3) {
    void 0 === t3 && (t3 = 1e3);
    var i3 = 147e-9 + (n3 = Math.abs(n3)) / t3;
    return { dist: Math.pow(n3, 2) / i3, dur: n3 / i3 };
  }
  function g2() {
    var t3 = n2.track.details;
    t3 && (a2 = t3.min, o2 = t3.max, u2 = t3.minIdx, s2 = t3.maxIdx);
  }
  function b2() {
    n2.animator.stop();
  }
  n2.on("updated", g2), n2.on("optionsChanged", g2), n2.on("created", g2), n2.on("dragStarted", function() {
    e2 = false, b2(), t2 = i2 = n2.track.details.abs;
  }), n2.on("dragChecked", function() {
    e2 = true;
  }), n2.on("dragEnded", function() {
    var e3 = n2.options.mode;
    "snap" === e3 && function() {
      var e4 = n2.track, r3 = n2.track.details, u3 = r3.position, s3 = l(v2());
      (u3 > o2 || u3 < a2) && (s3 = 0);
      var c3 = t2 + s3;
      0 === r3.slides[e4.absToRel(c3)].portion && (c3 -= s3), t2 !== i2 && (c3 = i2), l(e4.idxToDist(c3, true)) !== s3 && (c3 += s3), c3 = f2(c3);
      var d2 = e4.idxToDist(c3, true);
      n2.animator.start([{ distance: d2, duration: 500, easing: function(n3) {
        return 1 + --n3 * n3 * n3 * n3 * n3;
      } }]);
    }(), "free" !== e3 && "free-snap" !== e3 || h2();
  }), n2.on("dragged", function() {
    i2 = n2.track.details.abs;
  });
}
function b(n2) {
  var t2, i2, e2, r2, a2, f2, p2, v2, h2, m2, g2, b2, x2, k2, y2, w, M, T, C = c();
  function E(t3) {
    if (f2 && v2 === t3.id) {
      var o2 = D(t3);
      if (h2) {
        if (!A(t3))
          return I(t3);
        m2 = o2, h2 = false, n2.emit("dragChecked");
      }
      if (w)
        return m2 = o2;
      u(t3);
      var c2 = function(t4) {
        if (M === -1 / 0 && T === 1 / 0)
          return t4;
        var e3 = n2.track.details, o3 = e3.length, u2 = e3.position, s2 = d(t4, M - u2, T - u2);
        if (0 === o3)
          return 0;
        if (!n2.options.rubberband)
          return s2;
        if (u2 <= T && u2 >= M)
          return t4;
        if (u2 < M && i2 > 0 || u2 > T && i2 < 0)
          return t4;
        var c3 = (u2 < M ? u2 - M : u2 - T) / o3, l2 = r2 * o3, f3 = Math.abs(c3 * l2), p3 = Math.max(0, 1 - f3 / a2 * 2);
        return p3 * p3 * t4;
      }(p2(m2 - o2) / r2 * e2);
      i2 = l(c2);
      var x3 = n2.track.details.position;
      (x3 > M && x3 < T || x3 === M && i2 > 0 || x3 === T && i2 < 0) && s(t3), g2 += c2, !b2 && Math.abs(g2 * r2) > 5 && (b2 = true), n2.track.add(c2), m2 = o2, n2.emit("dragged");
    }
  }
  function z(t3) {
    !f2 && n2.track.details && n2.track.details.length && (g2 = 0, f2 = true, b2 = false, h2 = true, v2 = t3.id, A(t3), m2 = D(t3), n2.emit("dragStarted"));
  }
  function I(t3) {
    f2 && v2 === t3.idChanged && (f2 = false, n2.emit("dragEnded"));
  }
  function A(n3) {
    var t3 = L(), i3 = t3 ? n3.y : n3.x, e3 = t3 ? n3.x : n3.y, r3 = void 0 !== x2 && void 0 !== k2 && Math.abs(k2 - e3) <= Math.abs(x2 - i3);
    return x2 = i3, k2 = e3, r3;
  }
  function D(n3) {
    return L() ? n3.y : n3.x;
  }
  function L() {
    return n2.options.vertical;
  }
  function S() {
    r2 = n2.size, a2 = L() ? window.innerHeight : window.innerWidth;
    var t3 = n2.track.details;
    t3 && (M = t3.min, T = t3.max);
  }
  function O(n3) {
    b2 && (s(n3), u(n3));
  }
  function _() {
    if (C.purge(), n2.options.drag && !n2.options.disabled) {
      var i3;
      i3 = n2.options.dragSpeed || 1, p2 = "function" == typeof i3 ? i3 : function(n3) {
        return n3 * i3;
      }, e2 = n2.options.rtl ? -1 : 1, S(), t2 = n2.container, function() {
        var n3 = "data-keen-slider-clickable";
        o("[".concat(n3, "]:not([").concat(n3, "=false])"), t2).map(function(n4) {
          C.add(n4, "dragstart", s), C.add(n4, "mousedown", s), C.add(n4, "touchstart", s);
        });
      }(), C.add(t2, "dragstart", function(n3) {
        u(n3);
      }), C.add(t2, "click", O, { capture: true }), C.input(t2, "ksDragStart", z), C.input(t2, "ksDrag", E), C.input(t2, "ksDragEnd", I), C.input(t2, "mousedown", z), C.input(t2, "mousemove", E), C.input(t2, "mouseleave", I), C.input(t2, "mouseup", I), C.input(t2, "touchstart", z, { passive: true }), C.input(t2, "touchmove", E, { passive: false }), C.input(t2, "touchend", I), C.input(t2, "touchcancel", I), C.add(window, "wheel", function(n3) {
        f2 && u(n3);
      });
      var r3 = "data-keen-slider-scrollable";
      o("[".concat(r3, "]:not([").concat(r3, "=false])"), n2.container).map(function(n3) {
        return function(n4) {
          var t3;
          C.input(n4, "touchstart", function(n5) {
            t3 = D(n5), w = true, y2 = true;
          }, { passive: true }), C.input(n4, "touchmove", function(i4) {
            var e3 = L(), r4 = e3 ? n4.scrollHeight - n4.clientHeight : n4.scrollWidth - n4.clientWidth, a3 = t3 - D(i4), o2 = e3 ? n4.scrollTop : n4.scrollLeft, s2 = e3 && "scroll" === n4.style.overflowY || !e3 && "scroll" === n4.style.overflowX;
            if (t3 = D(i4), (a3 < 0 && o2 > 0 || a3 > 0 && o2 < r4) && y2 && s2)
              return w = true;
            y2 = false, u(i4), w = false;
          }), C.input(n4, "touchend", function() {
            w = false;
          });
        }(n3);
      });
    }
  }
  n2.on("updated", S), n2.on("optionsChanged", _), n2.on("created", _), n2.on("destroyed", C.purge);
}
function x(n2) {
  var t2, i2, e2 = null;
  function r2(t3, i3, e3) {
    n2.animator.active ? o2(t3, i3, e3) : requestAnimationFrame(function() {
      return o2(t3, i3, e3);
    });
  }
  function a2() {
    r2(false, false, i2);
  }
  function o2(i3, r3, a3) {
    var o3 = 0, u3 = n2.size, d3 = n2.track.details;
    if (d3 && t2) {
      var l3 = d3.slides;
      t2.forEach(function(n3, t3) {
        if (i3)
          !e2 && r3 && s2(n3, null, a3), c2(n3, null, a3);
        else {
          if (!l3[t3])
            return;
          var d4 = l3[t3].size * u3;
          !e2 && r3 && s2(n3, d4, a3), c2(n3, l3[t3].distance * u3 - o3, a3), o3 += d4;
        }
      });
    }
  }
  function u2(t3) {
    return "performance" === n2.options.renderMode ? Math.round(t3) : t3;
  }
  function s2(n3, t3, i3) {
    var e3 = i3 ? "height" : "width";
    null !== t3 && (t3 = u2(t3) + "px"), n3.style["min-" + e3] = t3, n3.style["max-" + e3] = t3;
  }
  function c2(n3, t3, i3) {
    if (null !== t3) {
      t3 = u2(t3);
      var e3 = i3 ? t3 : 0;
      t3 = "translate3d(".concat(i3 ? 0 : t3, "px, ").concat(e3, "px, 0)");
    }
    n3.style.transform = t3, n3.style["-webkit-transform"] = t3;
  }
  function d2() {
    t2 && (o2(true, true, i2), t2 = null), n2.on("detailsChanged", a2, true);
  }
  function l2() {
    r2(false, true, i2);
  }
  function f2() {
    d2(), i2 = n2.options.vertical, n2.options.disabled || "custom" === n2.options.renderMode || (e2 = "auto" === p(n2.options.slides, "perView", null), n2.on("detailsChanged", a2), (t2 = n2.slides).length && l2());
  }
  n2.on("created", f2), n2.on("optionsChanged", f2), n2.on("beforeOptionsChanged", function() {
    d2();
  }), n2.on("updated", l2), n2.on("destroyed", d2);
}
function k(t2, i2) {
  return function(e2) {
    var r2, u2, s2, d2, v2, h2 = c();
    function m2(n2) {
      var t3;
      a(e2.container, "reverse", "rtl" !== (t3 = e2.container, window.getComputedStyle(t3, null).getPropertyValue("direction")) || n2 ? null : ""), a(e2.container, "v", e2.options.vertical && !n2 ? "" : null), a(e2.container, "disabled", e2.options.disabled && !n2 ? "" : null);
    }
    function g2() {
      b2() && M();
    }
    function b2() {
      var t3 = null;
      if (d2.forEach(function(n2) {
        n2.matches && (t3 = n2.__media);
      }), t3 === r2)
        return false;
      r2 || e2.emit("beforeOptionsChanged"), r2 = t3;
      var i3 = t3 ? s2.breakpoints[t3] : s2;
      return e2.options = n(n({}, s2), i3), m2(), I(), A(), C(), true;
    }
    function x2(n2) {
      var t3 = f(n2);
      return (e2.options.vertical ? t3.height : t3.width) / e2.size || 1;
    }
    function k2() {
      return e2.options.trackConfig.length;
    }
    function y2(t3) {
      for (var a2 in r2 = false, s2 = n(n({}, i2), t3), h2.purge(), u2 = e2.size, d2 = [], s2.breakpoints || []) {
        var o2 = window.matchMedia(a2);
        o2.__media = a2, d2.push(o2), h2.add(o2, "change", g2);
      }
      h2.add(window, "orientationchange", z), h2.add(window, "resize", E), b2();
    }
    function w(n2) {
      e2.animator.stop();
      var t3 = e2.track.details;
      e2.track.init(null != n2 ? n2 : t3 ? t3.abs : 0);
    }
    function M(n2) {
      w(n2), e2.emit("optionsChanged");
    }
    function T(n2, t3) {
      if (n2)
        return y2(n2), void M(t3);
      I(), A();
      var i3 = k2();
      C(), k2() !== i3 ? M(t3) : w(t3), e2.emit("updated");
    }
    function C() {
      var n2 = e2.options.slides;
      if ("function" == typeof n2)
        return e2.options.trackConfig = n2(e2.size, e2.slides);
      for (var t3 = e2.slides, i3 = t3.length, r3 = "number" == typeof n2 ? n2 : p(n2, "number", i3, true), a2 = [], o2 = p(n2, "perView", 1, true), u3 = p(n2, "spacing", 0, true) / e2.size || 0, s3 = "auto" === o2 ? u3 : u3 / o2, c2 = p(n2, "origin", "auto"), d3 = 0, l2 = 0; l2 < r3; l2++) {
        var f2 = "auto" === o2 ? x2(t3[l2]) : 1 / o2 - u3 + s3, v3 = "center" === c2 ? 0.5 - f2 / 2 : "auto" === c2 ? 0 : c2;
        a2.push({ origin: v3, size: f2, spacing: u3 }), d3 += f2;
      }
      if (d3 += u3 * (r3 - 1), "auto" === c2 && !e2.options.loop && 1 !== o2) {
        var h3 = 0;
        a2.map(function(n3) {
          var t4 = d3 - h3;
          return h3 += n3.size + u3, t4 >= 1 || (n3.origin = 1 - t4 - (d3 > 1 ? 0 : 1 - d3)), n3;
        });
      }
      e2.options.trackConfig = a2;
    }
    function E() {
      I();
      var n2 = e2.size;
      e2.options.disabled || n2 === u2 || (u2 = n2, T());
    }
    function z() {
      E(), setTimeout(E, 500), setTimeout(E, 2e3);
    }
    function I() {
      var n2 = f(e2.container);
      e2.size = (e2.options.vertical ? n2.height : n2.width) || 1;
    }
    function A() {
      e2.slides = o(e2.options.selector, e2.container);
    }
    e2.container = (v2 = o(t2, document)).length ? v2[0] : null, e2.destroy = function() {
      h2.purge(), e2.emit("destroyed"), m2(true);
    }, e2.prev = function() {
      e2.moveToIdx(e2.track.details.abs - 1, true);
    }, e2.next = function() {
      e2.moveToIdx(e2.track.details.abs + 1, true);
    }, e2.update = T, y2(e2.options);
  };
}
var y = function(n2, i2, e2) {
  try {
    return function(n3, t2) {
      var i3, e3 = {};
      return i3 = { emit: function(n4) {
        e3[n4] && e3[n4].forEach(function(n5) {
          n5(i3);
        });
        var t3 = i3.options && i3.options[n4];
        t3 && t3(i3);
      }, moveToIdx: function(n4, t3, e4) {
        var r2 = i3.track.idxToDist(n4, t3);
        if (r2) {
          var a2 = i3.options.defaultAnimation;
          i3.animator.start([{ distance: r2, duration: p(e4 || a2, "duration", 500), easing: p(e4 || a2, "easing", function(n5) {
            return 1 + --n5 * n5 * n5 * n5 * n5;
          }) }]);
        }
      }, on: function(n4, t3, i4) {
        void 0 === i4 && (i4 = false), e3[n4] || (e3[n4] = []);
        var r2 = e3[n4].indexOf(t3);
        r2 > -1 ? i4 && delete e3[n4][r2] : i4 || e3[n4].push(t3);
      }, options: n3 }, function() {
        if (i3.track = m(i3), i3.animator = h(i3), t2)
          for (var n4 = 0, e4 = t2; n4 < e4.length; n4++)
            (0, e4[n4])(i3);
        i3.track.init(i3.options.initial || 0), i3.emit("created");
      }(), i3;
    }(i2, t([k(n2, { drag: true, mode: "snap", renderMode: "precision", rubberband: true, selector: ".keen-slider__slide" }), x, b, g], e2 || [], true));
  } catch (n3) {
    console.error(n3);
  }
};
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
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
function _getPrototypeOf(o2) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf(o2);
}
function _setPrototypeOf(o2, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
    o3.__proto__ = p3;
    return o3;
  };
  return _setPrototypeOf(o2, p2);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null)
      break;
  }
  return object;
}
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get2(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base)
        return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}
function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set2(target2, property2, value2, receiver2) {
      var base = _superPropBase(target2, property2);
      var desc;
      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property2);
        if (desc.set) {
          desc.set.call(receiver2, value2);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }
      desc = Object.getOwnPropertyDescriptor(receiver2, property2);
      if (desc) {
        if (!desc.writable) {
          return false;
        }
        desc.value = value2;
        Object.defineProperty(receiver2, property2, desc);
      } else {
        _defineProperty(receiver2, property2, value2);
      }
      return true;
    };
  }
  return set(target, property, value, receiver);
}
function _set(target, property, value, receiver, isStrict) {
  var s2 = set(target, property, value, receiver || target);
  if (!s2 && isStrict) {
    throw new Error("failed to set property");
  }
  return value;
}
function _slicedToArray(arr, i2) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o2, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
    arr2[i2] = arr[i2];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var ChangeDetails = /* @__PURE__ */ function() {
  function ChangeDetails2(details) {
    _classCallCheck(this, ChangeDetails2);
    Object.assign(this, {
      inserted: "",
      rawInserted: "",
      skip: false,
      tailShift: 0
    }, details);
  }
  _createClass(ChangeDetails2, [{
    key: "aggregate",
    value: function aggregate(details) {
      this.rawInserted += details.rawInserted;
      this.skip = this.skip || details.skip;
      this.inserted += details.inserted;
      this.tailShift += details.tailShift;
      return this;
    }
  }, {
    key: "offset",
    get: function get() {
      return this.tailShift + this.inserted.length;
    }
  }]);
  return ChangeDetails2;
}();
function isString(str) {
  return typeof str === "string" || str instanceof String;
}
var DIRECTION = {
  NONE: "NONE",
  LEFT: "LEFT",
  FORCE_LEFT: "FORCE_LEFT",
  RIGHT: "RIGHT",
  FORCE_RIGHT: "FORCE_RIGHT"
};
function forceDirection(direction) {
  switch (direction) {
    case DIRECTION.LEFT:
      return DIRECTION.FORCE_LEFT;
    case DIRECTION.RIGHT:
      return DIRECTION.FORCE_RIGHT;
    default:
      return direction;
  }
}
function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
}
function normalizePrepare(prep) {
  return Array.isArray(prep) ? prep : [prep, new ChangeDetails()];
}
function objectIncludes(b2, a2) {
  if (a2 === b2)
    return true;
  var arrA = Array.isArray(a2), arrB = Array.isArray(b2), i2;
  if (arrA && arrB) {
    if (a2.length != b2.length)
      return false;
    for (i2 = 0; i2 < a2.length; i2++) {
      if (!objectIncludes(a2[i2], b2[i2]))
        return false;
    }
    return true;
  }
  if (arrA != arrB)
    return false;
  if (a2 && b2 && _typeof(a2) === "object" && _typeof(b2) === "object") {
    var dateA = a2 instanceof Date, dateB = b2 instanceof Date;
    if (dateA && dateB)
      return a2.getTime() == b2.getTime();
    if (dateA != dateB)
      return false;
    var regexpA = a2 instanceof RegExp, regexpB = b2 instanceof RegExp;
    if (regexpA && regexpB)
      return a2.toString() == b2.toString();
    if (regexpA != regexpB)
      return false;
    var keys = Object.keys(a2);
    for (i2 = 0; i2 < keys.length; i2++) {
      if (!Object.prototype.hasOwnProperty.call(b2, keys[i2]))
        return false;
    }
    for (i2 = 0; i2 < keys.length; i2++) {
      if (!objectIncludes(b2[keys[i2]], a2[keys[i2]]))
        return false;
    }
    return true;
  } else if (a2 && b2 && typeof a2 === "function" && typeof b2 === "function") {
    return a2.toString() === b2.toString();
  }
  return false;
}
var ActionDetails = /* @__PURE__ */ function() {
  function ActionDetails2(value, cursorPos, oldValue, oldSelection) {
    _classCallCheck(this, ActionDetails2);
    this.value = value;
    this.cursorPos = cursorPos;
    this.oldValue = oldValue;
    this.oldSelection = oldSelection;
    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
      --this.oldSelection.start;
    }
  }
  _createClass(ActionDetails2, [{
    key: "startChangePos",
    get: function get() {
      return Math.min(this.cursorPos, this.oldSelection.start);
    }
  }, {
    key: "insertedCount",
    get: function get() {
      return this.cursorPos - this.startChangePos;
    }
  }, {
    key: "inserted",
    get: function get() {
      return this.value.substr(this.startChangePos, this.insertedCount);
    }
  }, {
    key: "removedCount",
    get: function get() {
      return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0);
    }
  }, {
    key: "removed",
    get: function get() {
      return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
  }, {
    key: "head",
    get: function get() {
      return this.value.substring(0, this.startChangePos);
    }
  }, {
    key: "tail",
    get: function get() {
      return this.value.substring(this.startChangePos + this.insertedCount);
    }
  }, {
    key: "removeDirection",
    get: function get() {
      if (!this.removedCount || this.insertedCount)
        return DIRECTION.NONE;
      return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? DIRECTION.RIGHT : DIRECTION.LEFT;
    }
  }]);
  return ActionDetails2;
}();
var ContinuousTailDetails = /* @__PURE__ */ function() {
  function ContinuousTailDetails2() {
    var value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    var from = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var stop = arguments.length > 2 ? arguments[2] : void 0;
    _classCallCheck(this, ContinuousTailDetails2);
    this.value = value;
    this.from = from;
    this.stop = stop;
  }
  _createClass(ContinuousTailDetails2, [{
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }, {
    key: "extend",
    value: function extend(tail) {
      this.value += String(tail);
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      return masked.append(this.toString(), {
        tail: true
      }).aggregate(masked._appendPlaceholder());
    }
  }, {
    key: "state",
    get: function get() {
      return {
        value: this.value,
        from: this.from,
        stop: this.stop
      };
    },
    set: function set2(state) {
      Object.assign(this, state);
    }
  }, {
    key: "unshift",
    value: function unshift(beforePos) {
      if (!this.value.length || beforePos != null && this.from >= beforePos)
        return "";
      var shiftChar = this.value[0];
      this.value = this.value.slice(1);
      return shiftChar;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (!this.value.length)
        return "";
      var shiftChar = this.value[this.value.length - 1];
      this.value = this.value.slice(0, -1);
      return shiftChar;
    }
  }]);
  return ContinuousTailDetails2;
}();
function IMask(el) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return new IMask.InputMask(el, opts);
}
var Masked = /* @__PURE__ */ function() {
  function Masked2(opts) {
    _classCallCheck(this, Masked2);
    this._value = "";
    this._update(Object.assign({}, Masked2.DEFAULTS, opts));
    this.isInitialized = true;
  }
  _createClass(Masked2, [{
    key: "updateOptions",
    value: function updateOptions(opts) {
      if (!Object.keys(opts).length)
        return;
      this.withValueRefresh(this._update.bind(this, opts));
    }
  }, {
    key: "_update",
    value: function _update(opts) {
      Object.assign(this, opts);
    }
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this.value
      };
    },
    set: function set2(state) {
      this._value = state._value;
    }
  }, {
    key: "reset",
    value: function reset() {
      this._value = "";
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set2(value) {
      this.resolve(value);
    }
  }, {
    key: "resolve",
    value: function resolve(value) {
      this.reset();
      this.append(value, {
        input: true
      }, "");
      this.doCommit();
      return this.value;
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.value;
    },
    set: function set2(value) {
      this.reset();
      this.append(value, {}, "");
      this.doCommit();
    }
  }, {
    key: "typedValue",
    get: function get() {
      return this.doParse(this.value);
    },
    set: function set2(value) {
      this.value = this.doFormat(value);
    }
  }, {
    key: "rawInputValue",
    get: function get() {
      return this.extractInput(0, this.value.length, {
        raw: true
      });
    },
    set: function set2(value) {
      this.reset();
      this.append(value, {
        raw: true
      }, "");
      this.doCommit();
    }
  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }, {
    key: "isFilled",
    get: function get() {
      return this.isComplete;
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      return cursorPos;
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      return this.value.slice(fromPos, toPos);
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
    }
  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (isString(tail))
        tail = new ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }
  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      if (!ch)
        return new ChangeDetails();
      this._value += ch;
      return new ChangeDetails({
        inserted: ch,
        rawInserted: ch
      });
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var checkTail = arguments.length > 2 ? arguments[2] : void 0;
      var consistentState = this.state;
      var details;
      var _normalizePrepare = normalizePrepare(this.doPrepare(ch, flags));
      var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);
      ch = _normalizePrepare2[0];
      details = _normalizePrepare2[1];
      details = details.aggregate(this._appendCharRaw(ch, flags));
      if (details.inserted) {
        var consistentTail;
        var appended = this.doValidate(flags) !== false;
        if (appended && checkTail != null) {
          var beforeTailState = this.state;
          if (this.overwrite === true) {
            consistentTail = checkTail.state;
            checkTail.unshift(this.value.length);
          }
          var tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted === checkTail.toString();
          if (!(appended && tailDetails.inserted) && this.overwrite === "shift") {
            this.state = beforeTailState;
            consistentTail = checkTail.state;
            checkTail.shift();
            tailDetails = this.appendTail(checkTail);
            appended = tailDetails.rawInserted === checkTail.toString();
          }
          if (appended && tailDetails.inserted)
            this.state = beforeTailState;
        }
        if (!appended) {
          details = new ChangeDetails();
          this.state = consistentState;
          if (checkTail && consistentTail)
            checkTail.state = consistentTail;
        }
      }
      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      return new ChangeDetails();
    }
  }, {
    key: "_appendEager",
    value: function _appendEager() {
      return new ChangeDetails();
    }
  }, {
    key: "append",
    value: function append(str, flags, tail) {
      if (!isString(str))
        throw new Error("value should be string");
      var details = new ChangeDetails();
      var checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
      if (flags && flags.tail)
        flags._beforeTailState = this.state;
      for (var ci = 0; ci < str.length; ++ci) {
        details.aggregate(this._appendChar(str[ci], flags, checkTail));
      }
      if (checkTail != null) {
        details.tailShift += this.appendTail(checkTail).tailShift;
      }
      if (this.eager && flags !== null && flags !== void 0 && flags.input && str) {
        details.aggregate(this._appendEager());
      }
      return details;
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
      return new ChangeDetails();
    }
  }, {
    key: "withValueRefresh",
    value: function withValueRefresh(fn) {
      if (this._refreshing || !this.isInitialized)
        return fn();
      this._refreshing = true;
      var rawInput = this.rawInputValue;
      var value = this.value;
      var ret = fn();
      this.rawInputValue = rawInput;
      if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
        this.append(value.slice(this.value.length), {}, "");
      }
      delete this._refreshing;
      return ret;
    }
  }, {
    key: "runIsolated",
    value: function runIsolated(fn) {
      if (this._isolated || !this.isInitialized)
        return fn(this);
      this._isolated = true;
      var state = this.state;
      var ret = fn(this);
      this.state = state;
      delete this._isolated;
      return ret;
    }
  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.prepare ? this.prepare(str, this, flags) : str;
    }
  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.commit)
        this.commit(this.value, this);
    }
  }, {
    key: "doFormat",
    value: function doFormat(value) {
      return this.format ? this.format(value, this) : value;
    }
  }, {
    key: "doParse",
    value: function doParse(str) {
      return this.parse ? this.parse(str, this) : str;
    }
  }, {
    key: "splice",
    value: function splice(start, deleteCount, inserted, removeDirection) {
      var tailPos = start + deleteCount;
      var tail = this.extractTail(tailPos);
      var oldRawValue;
      if (this.eager) {
        removeDirection = forceDirection(removeDirection);
        oldRawValue = this.extractInput(0, tailPos, {
          raw: true
        });
      }
      var startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !this.eager ? DIRECTION.NONE : removeDirection);
      var details = new ChangeDetails({
        tailShift: startChangePos - start
      }).aggregate(this.remove(startChangePos));
      if (this.eager && removeDirection !== DIRECTION.NONE && oldRawValue === this.rawInputValue) {
        if (removeDirection === DIRECTION.FORCE_LEFT) {
          var valLength;
          while (oldRawValue === this.rawInputValue && (valLength = this.value.length)) {
            details.aggregate(new ChangeDetails({
              tailShift: -1
            })).aggregate(this.remove(valLength - 1));
          }
        } else if (removeDirection === DIRECTION.FORCE_RIGHT) {
          tail.unshift();
        }
      }
      return details.aggregate(this.append(inserted, {
        input: true
      }, tail));
    }
  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return this.mask === mask;
    }
  }]);
  return Masked2;
}();
Masked.DEFAULTS = {
  format: function format(v2) {
    return v2;
  },
  parse: function parse(v2) {
    return v2;
  }
};
IMask.Masked = Masked;
function maskedClass(mask) {
  if (mask == null) {
    throw new Error("mask property should be defined");
  }
  if (mask instanceof RegExp)
    return IMask.MaskedRegExp;
  if (isString(mask))
    return IMask.MaskedPattern;
  if (mask instanceof Date || mask === Date)
    return IMask.MaskedDate;
  if (mask instanceof Number || typeof mask === "number" || mask === Number)
    return IMask.MaskedNumber;
  if (Array.isArray(mask) || mask === Array)
    return IMask.MaskedDynamic;
  if (IMask.Masked && mask.prototype instanceof IMask.Masked)
    return mask;
  if (mask instanceof IMask.Masked)
    return mask.constructor;
  if (mask instanceof Function)
    return IMask.MaskedFunction;
  console.warn("Mask not found for mask", mask);
  return IMask.Masked;
}
function createMask(opts) {
  if (IMask.Masked && opts instanceof IMask.Masked)
    return opts;
  opts = Object.assign({}, opts);
  var mask = opts.mask;
  if (IMask.Masked && mask instanceof IMask.Masked)
    return mask;
  var MaskedClass = maskedClass(mask);
  if (!MaskedClass)
    throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
  return new MaskedClass(opts);
}
IMask.createMask = createMask;
var _excluded$4 = ["mask"];
var DEFAULT_INPUT_DEFINITIONS = {
  "0": /\d/,
  "a": /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  "*": /./
};
var PatternInputDefinition = /* @__PURE__ */ function() {
  function PatternInputDefinition2(opts) {
    _classCallCheck(this, PatternInputDefinition2);
    var mask = opts.mask, blockOpts = _objectWithoutProperties(opts, _excluded$4);
    this.masked = createMask({
      mask
    });
    Object.assign(this, blockOpts);
  }
  _createClass(PatternInputDefinition2, [{
    key: "reset",
    value: function reset() {
      this.isFilled = false;
      this.masked.reset();
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      if (fromPos === 0 && toPos >= 1) {
        this.isFilled = false;
        return this.masked.remove(fromPos, toPos);
      }
      return new ChangeDetails();
    }
  }, {
    key: "value",
    get: function get() {
      return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "");
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.masked.unmaskedValue;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return Boolean(this.masked.value) || this.isOptional;
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (this.isFilled)
        return new ChangeDetails();
      var state = this.masked.state;
      var details = this.masked._appendChar(ch, flags);
      if (details.inserted && this.doValidate(flags) === false) {
        details.inserted = details.rawInserted = "";
        this.masked.state = state;
      }
      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
        details.inserted = this.placeholderChar;
      }
      details.skip = !details.inserted && !this.isOptional;
      this.isFilled = Boolean(details.inserted);
      return details;
    }
  }, {
    key: "append",
    value: function append() {
      var _this$masked;
      return (_this$masked = this.masked).append.apply(_this$masked, arguments);
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new ChangeDetails();
      if (this.isFilled || this.isOptional)
        return details;
      this.isFilled = true;
      details.inserted = this.placeholderChar;
      return details;
    }
  }, {
    key: "_appendEager",
    value: function _appendEager() {
      return new ChangeDetails();
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$masked2;
      return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
    }
  }, {
    key: "appendTail",
    value: function appendTail() {
      var _this$masked3;
      return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : void 0;
      return this.masked.extractInput(fromPos, toPos, flags);
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this.value.length;
      var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return this.isComplete ? boundPos : minPos;
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
          return this.isComplete ? boundPos : maxPos;
        case DIRECTION.NONE:
        default:
          return boundPos;
      }
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this$masked4, _this$parent;
      return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      this.masked.doCommit();
    }
  }, {
    key: "state",
    get: function get() {
      return {
        masked: this.masked.state,
        isFilled: this.isFilled
      };
    },
    set: function set2(state) {
      this.masked.state = state.masked;
      this.isFilled = state.isFilled;
    }
  }]);
  return PatternInputDefinition2;
}();
var PatternFixedDefinition = /* @__PURE__ */ function() {
  function PatternFixedDefinition2(opts) {
    _classCallCheck(this, PatternFixedDefinition2);
    Object.assign(this, opts);
    this._value = "";
    this.isFixed = true;
  }
  _createClass(PatternFixedDefinition2, [{
    key: "value",
    get: function get() {
      return this._value;
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.isUnmasking ? this.value : "";
    }
  }, {
    key: "reset",
    value: function reset() {
      this._isRawInput = false;
      this._value = "";
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._value.length;
      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
      if (!this._value)
        this._isRawInput = false;
      return new ChangeDetails();
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this._value.length;
      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return minPos;
        case DIRECTION.NONE:
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
        default:
          return maxPos;
      }
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._value.length;
      var flags = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || "";
    }
  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }, {
    key: "isFilled",
    get: function get() {
      return Boolean(this._value);
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var details = new ChangeDetails();
      if (this._value)
        return details;
      var appended = this.char === ch;
      var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !this.eager && !flags.tail;
      if (isResolved)
        details.rawInserted = this.char;
      this._value = details.inserted = this.char;
      this._isRawInput = isResolved && (flags.raw || flags.input);
      return details;
    }
  }, {
    key: "_appendEager",
    value: function _appendEager() {
      return this._appendChar(this.char);
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new ChangeDetails();
      if (this._value)
        return details;
      this._value = details.inserted = this.char;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      return new ContinuousTailDetails("");
    }
  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (isString(tail))
        tail = new ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }
  }, {
    key: "append",
    value: function append(str, flags, tail) {
      var details = this._appendChar(str[0], flags);
      if (tail != null) {
        details.tailShift += this.appendTail(tail).tailShift;
      }
      return details;
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
    }
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this._value,
        _isRawInput: this._isRawInput
      };
    },
    set: function set2(state) {
      Object.assign(this, state);
    }
  }]);
  return PatternFixedDefinition2;
}();
var _excluded$3 = ["chunks"];
var ChunksTailDetails = /* @__PURE__ */ function() {
  function ChunksTailDetails2() {
    var chunks = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var from = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    _classCallCheck(this, ChunksTailDetails2);
    this.chunks = chunks;
    this.from = from;
  }
  _createClass(ChunksTailDetails2, [{
    key: "toString",
    value: function toString() {
      return this.chunks.map(String).join("");
    }
  }, {
    key: "extend",
    value: function extend(tailChunk) {
      if (!String(tailChunk))
        return;
      if (isString(tailChunk))
        tailChunk = new ContinuousTailDetails(String(tailChunk));
      var lastChunk = this.chunks[this.chunks.length - 1];
      var extendLast = lastChunk && (lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && tailChunk.from === lastChunk.from + lastChunk.toString().length;
      if (tailChunk instanceof ContinuousTailDetails) {
        if (extendLast) {
          lastChunk.extend(tailChunk.toString());
        } else {
          this.chunks.push(tailChunk);
        }
      } else if (tailChunk instanceof ChunksTailDetails2) {
        if (tailChunk.stop == null) {
          var firstTailChunk;
          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
            firstTailChunk = tailChunk.chunks.shift();
            firstTailChunk.from += tailChunk.from;
            this.extend(firstTailChunk);
          }
        }
        if (tailChunk.toString()) {
          tailChunk.stop = tailChunk.blockIndex;
          this.chunks.push(tailChunk);
        }
      }
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      if (!(masked instanceof IMask.MaskedPattern)) {
        var tail = new ContinuousTailDetails(this.toString());
        return tail.appendTo(masked);
      }
      var details = new ChangeDetails();
      for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
        var chunk = this.chunks[ci];
        var lastBlockIter = masked._mapPosToBlock(masked.value.length);
        var stop = chunk.stop;
        var chunkBlock = void 0;
        if (stop != null && (!lastBlockIter || lastBlockIter.index <= stop)) {
          if (chunk instanceof ChunksTailDetails2 || masked._stops.indexOf(stop) >= 0) {
            details.aggregate(masked._appendPlaceholder(stop));
          }
          chunkBlock = chunk instanceof ChunksTailDetails2 && masked._blocks[stop];
        }
        if (chunkBlock) {
          var tailDetails = chunkBlock.appendTail(chunk);
          tailDetails.skip = false;
          details.aggregate(tailDetails);
          masked._value += tailDetails.inserted;
          var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
          if (remainChars)
            details.aggregate(masked.append(remainChars, {
              tail: true
            }));
        } else {
          details.aggregate(masked.append(chunk.toString(), {
            tail: true
          }));
        }
      }
      return details;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        chunks: this.chunks.map(function(c2) {
          return c2.state;
        }),
        from: this.from,
        stop: this.stop,
        blockIndex: this.blockIndex
      };
    },
    set: function set2(state) {
      var chunks = state.chunks, props = _objectWithoutProperties(state, _excluded$3);
      Object.assign(this, props);
      this.chunks = chunks.map(function(cstate) {
        var chunk = "chunks" in cstate ? new ChunksTailDetails2() : new ContinuousTailDetails();
        chunk.state = cstate;
        return chunk;
      });
    }
  }, {
    key: "unshift",
    value: function unshift(beforePos) {
      if (!this.chunks.length || beforePos != null && this.from >= beforePos)
        return "";
      var chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
      var ci = 0;
      while (ci < this.chunks.length) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.unshift(chunkShiftPos);
        if (chunk.toString()) {
          if (!shiftChar)
            break;
          ++ci;
        } else {
          this.chunks.splice(ci, 1);
        }
        if (shiftChar)
          return shiftChar;
      }
      return "";
    }
  }, {
    key: "shift",
    value: function shift() {
      if (!this.chunks.length)
        return "";
      var ci = this.chunks.length - 1;
      while (0 <= ci) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.shift();
        if (chunk.toString()) {
          if (!shiftChar)
            break;
          --ci;
        } else {
          this.chunks.splice(ci, 1);
        }
        if (shiftChar)
          return shiftChar;
      }
      return "";
    }
  }]);
  return ChunksTailDetails2;
}();
var PatternCursor = /* @__PURE__ */ function() {
  function PatternCursor2(masked, pos) {
    _classCallCheck(this, PatternCursor2);
    this.masked = masked;
    this._log = [];
    var _ref = masked._mapPosToBlock(pos) || (pos < 0 ? {
      index: 0,
      offset: 0
    } : {
      index: this.masked._blocks.length,
      offset: 0
    }), offset = _ref.offset, index = _ref.index;
    this.offset = offset;
    this.index = index;
    this.ok = false;
  }
  _createClass(PatternCursor2, [{
    key: "block",
    get: function get() {
      return this.masked._blocks[this.index];
    }
  }, {
    key: "pos",
    get: function get() {
      return this.masked._blockStartPos(this.index) + this.offset;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        index: this.index,
        offset: this.offset,
        ok: this.ok
      };
    },
    set: function set2(s2) {
      Object.assign(this, s2);
    }
  }, {
    key: "pushState",
    value: function pushState() {
      this._log.push(this.state);
    }
  }, {
    key: "popState",
    value: function popState() {
      var s2 = this._log.pop();
      this.state = s2;
      return s2;
    }
  }, {
    key: "bindBlock",
    value: function bindBlock() {
      if (this.block)
        return;
      if (this.index < 0) {
        this.index = 0;
        this.offset = 0;
      }
      if (this.index >= this.masked._blocks.length) {
        this.index = this.masked._blocks.length - 1;
        this.offset = this.block.value.length;
      }
    }
  }, {
    key: "_pushLeft",
    value: function _pushLeft(fn) {
      this.pushState();
      for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) === null || _this$block === void 0 ? void 0 : _this$block.value.length) || 0) {
        var _this$block;
        if (fn())
          return this.ok = true;
      }
      return this.ok = false;
    }
  }, {
    key: "_pushRight",
    value: function _pushRight(fn) {
      this.pushState();
      for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
        if (fn())
          return this.ok = true;
      }
      return this.ok = false;
    }
  }, {
    key: "pushLeftBeforeFilled",
    value: function pushLeftBeforeFilled() {
      var _this = this;
      return this._pushLeft(function() {
        if (_this.block.isFixed || !_this.block.value)
          return;
        _this.offset = _this.block.nearestInputPos(_this.offset, DIRECTION.FORCE_LEFT);
        if (_this.offset !== 0)
          return true;
      });
    }
  }, {
    key: "pushLeftBeforeInput",
    value: function pushLeftBeforeInput() {
      var _this2 = this;
      return this._pushLeft(function() {
        if (_this2.block.isFixed)
          return;
        _this2.offset = _this2.block.nearestInputPos(_this2.offset, DIRECTION.LEFT);
        return true;
      });
    }
  }, {
    key: "pushLeftBeforeRequired",
    value: function pushLeftBeforeRequired() {
      var _this3 = this;
      return this._pushLeft(function() {
        if (_this3.block.isFixed || _this3.block.isOptional && !_this3.block.value)
          return;
        _this3.offset = _this3.block.nearestInputPos(_this3.offset, DIRECTION.LEFT);
        return true;
      });
    }
  }, {
    key: "pushRightBeforeFilled",
    value: function pushRightBeforeFilled() {
      var _this4 = this;
      return this._pushRight(function() {
        if (_this4.block.isFixed || !_this4.block.value)
          return;
        _this4.offset = _this4.block.nearestInputPos(_this4.offset, DIRECTION.FORCE_RIGHT);
        if (_this4.offset !== _this4.block.value.length)
          return true;
      });
    }
  }, {
    key: "pushRightBeforeInput",
    value: function pushRightBeforeInput() {
      var _this5 = this;
      return this._pushRight(function() {
        if (_this5.block.isFixed)
          return;
        _this5.offset = _this5.block.nearestInputPos(_this5.offset, DIRECTION.NONE);
        return true;
      });
    }
  }, {
    key: "pushRightBeforeRequired",
    value: function pushRightBeforeRequired() {
      var _this6 = this;
      return this._pushRight(function() {
        if (_this6.block.isFixed || _this6.block.isOptional && !_this6.block.value)
          return;
        _this6.offset = _this6.block.nearestInputPos(_this6.offset, DIRECTION.NONE);
        return true;
      });
    }
  }]);
  return PatternCursor2;
}();
var MaskedRegExp = /* @__PURE__ */ function(_Masked) {
  _inherits(MaskedRegExp2, _Masked);
  var _super = _createSuper(MaskedRegExp2);
  function MaskedRegExp2() {
    _classCallCheck(this, MaskedRegExp2);
    return _super.apply(this, arguments);
  }
  _createClass(MaskedRegExp2, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask)
        opts.validate = function(value) {
          return value.search(opts.mask) >= 0;
        };
      _get(_getPrototypeOf(MaskedRegExp2.prototype), "_update", this).call(this, opts);
    }
  }]);
  return MaskedRegExp2;
}(Masked);
IMask.MaskedRegExp = MaskedRegExp;
var _excluded$2 = ["_blocks"];
var MaskedPattern = /* @__PURE__ */ function(_Masked) {
  _inherits(MaskedPattern2, _Masked);
  var _super = _createSuper(MaskedPattern2);
  function MaskedPattern2() {
    var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck(this, MaskedPattern2);
    opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
    return _super.call(this, Object.assign({}, MaskedPattern2.DEFAULTS, opts));
  }
  _createClass(MaskedPattern2, [{
    key: "_update",
    value: function _update() {
      var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      opts.definitions = Object.assign({}, this.definitions, opts.definitions);
      _get(_getPrototypeOf(MaskedPattern2.prototype), "_update", this).call(this, opts);
      this._rebuildMask();
    }
  }, {
    key: "_rebuildMask",
    value: function _rebuildMask() {
      var _this = this;
      var defs = this.definitions;
      this._blocks = [];
      this._stops = [];
      this._maskedBlocks = {};
      var pattern = this.mask;
      if (!pattern || !defs)
        return;
      var unmaskingBlock = false;
      var optionalBlock = false;
      for (var i2 = 0; i2 < pattern.length; ++i2) {
        if (this.blocks) {
          var _ret = function() {
            var p2 = pattern.slice(i2);
            var bNames = Object.keys(_this.blocks).filter(function(bName2) {
              return p2.indexOf(bName2) === 0;
            });
            bNames.sort(function(a2, b2) {
              return b2.length - a2.length;
            });
            var bName = bNames[0];
            if (bName) {
              var maskedBlock = createMask(Object.assign({
                parent: _this,
                lazy: _this.lazy,
                eager: _this.eager,
                placeholderChar: _this.placeholderChar,
                overwrite: _this.overwrite
              }, _this.blocks[bName]));
              if (maskedBlock) {
                _this._blocks.push(maskedBlock);
                if (!_this._maskedBlocks[bName])
                  _this._maskedBlocks[bName] = [];
                _this._maskedBlocks[bName].push(_this._blocks.length - 1);
              }
              i2 += bName.length - 1;
              return "continue";
            }
          }();
          if (_ret === "continue")
            continue;
        }
        var char = pattern[i2];
        var isInput = char in defs;
        if (char === MaskedPattern2.STOP_CHAR) {
          this._stops.push(this._blocks.length);
          continue;
        }
        if (char === "{" || char === "}") {
          unmaskingBlock = !unmaskingBlock;
          continue;
        }
        if (char === "[" || char === "]") {
          optionalBlock = !optionalBlock;
          continue;
        }
        if (char === MaskedPattern2.ESCAPE_CHAR) {
          ++i2;
          char = pattern[i2];
          if (!char)
            break;
          isInput = false;
        }
        var def = isInput ? new PatternInputDefinition({
          parent: this,
          lazy: this.lazy,
          eager: this.eager,
          placeholderChar: this.placeholderChar,
          mask: defs[char],
          isOptional: optionalBlock
        }) : new PatternFixedDefinition({
          char,
          eager: this.eager,
          isUnmasking: unmaskingBlock
        });
        this._blocks.push(def);
      }
    }
  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, _get(_getPrototypeOf(MaskedPattern2.prototype), "state", this), {
        _blocks: this._blocks.map(function(b2) {
          return b2.state;
        })
      });
    },
    set: function set2(state) {
      var _blocks = state._blocks, maskedState = _objectWithoutProperties(state, _excluded$2);
      this._blocks.forEach(function(b2, bi) {
        return b2.state = _blocks[bi];
      });
      _set(_getPrototypeOf(MaskedPattern2.prototype), "state", maskedState, this, true);
    }
  }, {
    key: "reset",
    value: function reset() {
      _get(_getPrototypeOf(MaskedPattern2.prototype), "reset", this).call(this);
      this._blocks.forEach(function(b2) {
        return b2.reset();
      });
    }
  }, {
    key: "isComplete",
    get: function get() {
      return this._blocks.every(function(b2) {
        return b2.isComplete;
      });
    }
  }, {
    key: "isFilled",
    get: function get() {
      return this._blocks.every(function(b2) {
        return b2.isFilled;
      });
    }
  }, {
    key: "isFixed",
    get: function get() {
      return this._blocks.every(function(b2) {
        return b2.isFixed;
      });
    }
  }, {
    key: "isOptional",
    get: function get() {
      return this._blocks.every(function(b2) {
        return b2.isOptional;
      });
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      this._blocks.forEach(function(b2) {
        return b2.doCommit();
      });
      _get(_getPrototypeOf(MaskedPattern2.prototype), "doCommit", this).call(this);
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._blocks.reduce(function(str, b2) {
        return str += b2.unmaskedValue;
      }, "");
    },
    set: function set2(unmaskedValue) {
      _set(_getPrototypeOf(MaskedPattern2.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
  }, {
    key: "value",
    get: function get() {
      return this._blocks.reduce(function(str, b2) {
        return str += b2.value;
      }, "");
    },
    set: function set2(value) {
      _set(_getPrototypeOf(MaskedPattern2.prototype), "value", value, this, true);
    }
  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      return _get(_getPrototypeOf(MaskedPattern2.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
    }
  }, {
    key: "_appendEager",
    value: function _appendEager() {
      var _this$_mapPosToBlock;
      var details = new ChangeDetails();
      var startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) === null || _this$_mapPosToBlock === void 0 ? void 0 : _this$_mapPosToBlock.index;
      if (startBlockIndex == null)
        return details;
      if (this._blocks[startBlockIndex].isFilled)
        ++startBlockIndex;
      for (var bi = startBlockIndex; bi < this._blocks.length; ++bi) {
        var d2 = this._blocks[bi]._appendEager();
        if (!d2.inserted)
          break;
        details.aggregate(d2);
      }
      return details;
    }
  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var blockIter = this._mapPosToBlock(this.value.length);
      var details = new ChangeDetails();
      if (!blockIter)
        return details;
      for (var bi = blockIter.index; ; ++bi) {
        var _flags$_beforeTailSta;
        var _block = this._blocks[bi];
        if (!_block)
          break;
        var blockDetails = _block._appendChar(ch, Object.assign({}, flags, {
          _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : _flags$_beforeTailSta._blocks[bi]
        }));
        var skip = blockDetails.skip;
        details.aggregate(blockDetails);
        if (skip || blockDetails.rawInserted)
          break;
      }
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this2 = this;
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var chunkTail = new ChunksTailDetails();
      if (fromPos === toPos)
        return chunkTail;
      this._forEachBlocksInRange(fromPos, toPos, function(b2, bi, bFromPos, bToPos) {
        var blockChunk = b2.extractTail(bFromPos, bToPos);
        blockChunk.stop = _this2._findStopBefore(bi);
        blockChunk.from = _this2._blockStartPos(bi);
        if (blockChunk instanceof ChunksTailDetails)
          blockChunk.blockIndex = bi;
        chunkTail.extend(blockChunk);
      });
      return chunkTail;
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (fromPos === toPos)
        return "";
      var input = "";
      this._forEachBlocksInRange(fromPos, toPos, function(b2, _, fromPos2, toPos2) {
        input += b2.extractInput(fromPos2, toPos2, flags);
      });
      return input;
    }
  }, {
    key: "_findStopBefore",
    value: function _findStopBefore(blockIndex) {
      var stopBefore;
      for (var si = 0; si < this._stops.length; ++si) {
        var stop = this._stops[si];
        if (stop <= blockIndex)
          stopBefore = stop;
        else
          break;
      }
      return stopBefore;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder(toBlockIndex) {
      var _this3 = this;
      var details = new ChangeDetails();
      if (this.lazy && toBlockIndex == null)
        return details;
      var startBlockIter = this._mapPosToBlock(this.value.length);
      if (!startBlockIter)
        return details;
      var startBlockIndex = startBlockIter.index;
      var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function(b2) {
        if (!b2.lazy || toBlockIndex != null) {
          var args = b2._blocks != null ? [b2._blocks.length] : [];
          var bDetails = b2._appendPlaceholder.apply(b2, args);
          _this3._value += bDetails.inserted;
          details.aggregate(bDetails);
        }
      });
      return details;
    }
  }, {
    key: "_mapPosToBlock",
    value: function _mapPosToBlock(pos) {
      var accVal = "";
      for (var bi = 0; bi < this._blocks.length; ++bi) {
        var _block2 = this._blocks[bi];
        var blockStartPos = accVal.length;
        accVal += _block2.value;
        if (pos <= accVal.length) {
          return {
            index: bi,
            offset: pos - blockStartPos
          };
        }
      }
    }
  }, {
    key: "_blockStartPos",
    value: function _blockStartPos(blockIndex) {
      return this._blocks.slice(0, blockIndex).reduce(function(pos, b2) {
        return pos += b2.value.length;
      }, 0);
    }
  }, {
    key: "_forEachBlocksInRange",
    value: function _forEachBlocksInRange(fromPos) {
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var fn = arguments.length > 2 ? arguments[2] : void 0;
      var fromBlockIter = this._mapPosToBlock(fromPos);
      if (fromBlockIter) {
        var toBlockIter = this._mapPosToBlock(toPos);
        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
        var fromBlockStartPos = fromBlockIter.offset;
        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
        if (toBlockIter && !isSameBlock) {
          for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
          }
          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
        }
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var removeDetails = _get(_getPrototypeOf(MaskedPattern2.prototype), "remove", this).call(this, fromPos, toPos);
      this._forEachBlocksInRange(fromPos, toPos, function(b2, _, bFromPos, bToPos) {
        removeDetails.aggregate(b2.remove(bFromPos, bToPos));
      });
      return removeDetails;
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DIRECTION.NONE;
      if (!this._blocks.length)
        return 0;
      var cursor = new PatternCursor(this, cursorPos);
      if (direction === DIRECTION.NONE) {
        if (cursor.pushRightBeforeInput())
          return cursor.pos;
        cursor.popState();
        if (cursor.pushLeftBeforeInput())
          return cursor.pos;
        return this.value.length;
      }
      if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
        if (direction === DIRECTION.LEFT) {
          cursor.pushRightBeforeFilled();
          if (cursor.ok && cursor.pos === cursorPos)
            return cursorPos;
          cursor.popState();
        }
        cursor.pushLeftBeforeInput();
        cursor.pushLeftBeforeRequired();
        cursor.pushLeftBeforeFilled();
        if (direction === DIRECTION.LEFT) {
          cursor.pushRightBeforeInput();
          cursor.pushRightBeforeRequired();
          if (cursor.ok && cursor.pos <= cursorPos)
            return cursor.pos;
          cursor.popState();
          if (cursor.ok && cursor.pos <= cursorPos)
            return cursor.pos;
          cursor.popState();
        }
        if (cursor.ok)
          return cursor.pos;
        if (direction === DIRECTION.FORCE_LEFT)
          return 0;
        cursor.popState();
        if (cursor.ok)
          return cursor.pos;
        cursor.popState();
        if (cursor.ok)
          return cursor.pos;
        return 0;
      }
      if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
        cursor.pushRightBeforeInput();
        cursor.pushRightBeforeRequired();
        if (cursor.pushRightBeforeFilled())
          return cursor.pos;
        if (direction === DIRECTION.FORCE_RIGHT)
          return this.value.length;
        cursor.popState();
        if (cursor.ok)
          return cursor.pos;
        cursor.popState();
        if (cursor.ok)
          return cursor.pos;
        return this.nearestInputPos(cursorPos, DIRECTION.LEFT);
      }
      return cursorPos;
    }
  }, {
    key: "maskedBlock",
    value: function maskedBlock(name) {
      return this.maskedBlocks(name)[0];
    }
  }, {
    key: "maskedBlocks",
    value: function maskedBlocks(name) {
      var _this4 = this;
      var indices = this._maskedBlocks[name];
      if (!indices)
        return [];
      return indices.map(function(gi) {
        return _this4._blocks[gi];
      });
    }
  }]);
  return MaskedPattern2;
}(Masked);
MaskedPattern.DEFAULTS = {
  lazy: true,
  placeholderChar: "_"
};
MaskedPattern.STOP_CHAR = "`";
MaskedPattern.ESCAPE_CHAR = "\\";
MaskedPattern.InputDefinition = PatternInputDefinition;
MaskedPattern.FixedDefinition = PatternFixedDefinition;
IMask.MaskedPattern = MaskedPattern;
var MaskedRange = /* @__PURE__ */ function(_MaskedPattern) {
  _inherits(MaskedRange2, _MaskedPattern);
  var _super = _createSuper(MaskedRange2);
  function MaskedRange2() {
    _classCallCheck(this, MaskedRange2);
    return _super.apply(this, arguments);
  }
  _createClass(MaskedRange2, [{
    key: "_matchFrom",
    get: function get() {
      return this.maxLength - String(this.from).length;
    }
  }, {
    key: "_update",
    value: function _update(opts) {
      opts = Object.assign({
        to: this.to || 0,
        from: this.from || 0,
        maxLength: this.maxLength || 0
      }, opts);
      var maxLength = String(opts.to).length;
      if (opts.maxLength != null)
        maxLength = Math.max(maxLength, opts.maxLength);
      opts.maxLength = maxLength;
      var fromStr = String(opts.from).padStart(maxLength, "0");
      var toStr = String(opts.to).padStart(maxLength, "0");
      var sameCharsCount = 0;
      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
        ++sameCharsCount;
      }
      opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, "\\0") + "0".repeat(maxLength - sameCharsCount);
      _get(_getPrototypeOf(MaskedRange2.prototype), "_update", this).call(this, opts);
    }
  }, {
    key: "isComplete",
    get: function get() {
      return _get(_getPrototypeOf(MaskedRange2.prototype), "isComplete", this) && Boolean(this.value);
    }
  }, {
    key: "boundaries",
    value: function boundaries(str) {
      var minstr = "";
      var maxstr = "";
      var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [], _ref2 = _slicedToArray(_ref, 3), placeholder = _ref2[1], num = _ref2[2];
      if (num) {
        minstr = "0".repeat(placeholder.length) + num;
        maxstr = "9".repeat(placeholder.length) + num;
      }
      minstr = minstr.padEnd(this.maxLength, "0");
      maxstr = maxstr.padEnd(this.maxLength, "9");
      return [minstr, maxstr];
    }
  }, {
    key: "doPrepare",
    value: function doPrepare(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var details;
      var _normalizePrepare = normalizePrepare(_get(_getPrototypeOf(MaskedRange2.prototype), "doPrepare", this).call(this, ch.replace(/\D/g, ""), flags));
      var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);
      ch = _normalizePrepare2[0];
      details = _normalizePrepare2[1];
      if (!this.autofix || !ch)
        return ch;
      var fromStr = String(this.from).padStart(this.maxLength, "0");
      var toStr = String(this.to).padStart(this.maxLength, "0");
      var nextVal = this.value + ch;
      if (nextVal.length > this.maxLength)
        return "";
      var _this$boundaries = this.boundaries(nextVal), _this$boundaries2 = _slicedToArray(_this$boundaries, 2), minstr = _this$boundaries2[0], maxstr = _this$boundaries2[1];
      if (Number(maxstr) < this.from)
        return fromStr[nextVal.length - 1];
      if (Number(minstr) > this.to) {
        if (this.autofix === "pad" && nextVal.length < this.maxLength) {
          return ["", details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))];
        }
        return toStr[nextVal.length - 1];
      }
      return ch;
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;
      var str = this.value;
      var firstNonZero = str.search(/[^0]/);
      if (firstNonZero === -1 && str.length <= this._matchFrom)
        return true;
      var _this$boundaries3 = this.boundaries(str), _this$boundaries4 = _slicedToArray(_this$boundaries3, 2), minstr = _this$boundaries4[0], maxstr = _this$boundaries4[1];
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange2.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);
  return MaskedRange2;
}(MaskedPattern);
IMask.MaskedRange = MaskedRange;
var MaskedDate = /* @__PURE__ */ function(_MaskedPattern) {
  _inherits(MaskedDate2, _MaskedPattern);
  var _super = _createSuper(MaskedDate2);
  function MaskedDate2(opts) {
    _classCallCheck(this, MaskedDate2);
    return _super.call(this, Object.assign({}, MaskedDate2.DEFAULTS, opts));
  }
  _createClass(MaskedDate2, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask === Date)
        delete opts.mask;
      if (opts.pattern)
        opts.mask = opts.pattern;
      var blocks = opts.blocks;
      opts.blocks = Object.assign({}, MaskedDate2.GET_DEFAULT_BLOCKS());
      if (opts.min)
        opts.blocks.Y.from = opts.min.getFullYear();
      if (opts.max)
        opts.blocks.Y.to = opts.max.getFullYear();
      if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
        opts.blocks.m.from = opts.min.getMonth() + 1;
        opts.blocks.m.to = opts.max.getMonth() + 1;
        if (opts.blocks.m.from === opts.blocks.m.to) {
          opts.blocks.d.from = opts.min.getDate();
          opts.blocks.d.to = opts.max.getDate();
        }
      }
      Object.assign(opts.blocks, this.blocks, blocks);
      Object.keys(opts.blocks).forEach(function(bk) {
        var b2 = opts.blocks[bk];
        if (!("autofix" in b2) && "autofix" in opts)
          b2.autofix = opts.autofix;
      });
      _get(_getPrototypeOf(MaskedDate2.prototype), "_update", this).call(this, opts);
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;
      var date = this.date;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return (_get2 = _get(_getPrototypeOf(MaskedDate2.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }
  }, {
    key: "isDateExist",
    value: function isDateExist(str) {
      return this.format(this.parse(str, this), this).indexOf(str) >= 0;
    }
  }, {
    key: "date",
    get: function get() {
      return this.typedValue;
    },
    set: function set2(date) {
      this.typedValue = date;
    }
  }, {
    key: "typedValue",
    get: function get() {
      return this.isComplete ? _get(_getPrototypeOf(MaskedDate2.prototype), "typedValue", this) : null;
    },
    set: function set2(value) {
      _set(_getPrototypeOf(MaskedDate2.prototype), "typedValue", value, this, true);
    }
  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return mask === Date || _get(_getPrototypeOf(MaskedDate2.prototype), "maskEquals", this).call(this, mask);
    }
  }]);
  return MaskedDate2;
}(MaskedPattern);
MaskedDate.DEFAULTS = {
  pattern: "d{.}`m{.}`Y",
  format: function format2(date) {
    if (!date)
      return "";
    var day = String(date.getDate()).padStart(2, "0");
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var year = date.getFullYear();
    return [day, month, year].join(".");
  },
  parse: function parse2(str) {
    var _str$split = str.split("."), _str$split2 = _slicedToArray(_str$split, 3), day = _str$split2[0], month = _str$split2[1], year = _str$split2[2];
    return new Date(year, month - 1, day);
  }
};
MaskedDate.GET_DEFAULT_BLOCKS = function() {
  return {
    d: {
      mask: MaskedRange,
      from: 1,
      to: 31,
      maxLength: 2
    },
    m: {
      mask: MaskedRange,
      from: 1,
      to: 12,
      maxLength: 2
    },
    Y: {
      mask: MaskedRange,
      from: 1900,
      to: 9999
    }
  };
};
IMask.MaskedDate = MaskedDate;
var MaskElement = /* @__PURE__ */ function() {
  function MaskElement2() {
    _classCallCheck(this, MaskElement2);
  }
  _createClass(MaskElement2, [{
    key: "selectionStart",
    get: function get() {
      var start;
      try {
        start = this._unsafeSelectionStart;
      } catch (e2) {
      }
      return start != null ? start : this.value.length;
    }
  }, {
    key: "selectionEnd",
    get: function get() {
      var end;
      try {
        end = this._unsafeSelectionEnd;
      } catch (e2) {
      }
      return end != null ? end : this.value.length;
    }
  }, {
    key: "select",
    value: function select(start, end) {
      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd)
        return;
      try {
        this._unsafeSelect(start, end);
      } catch (e2) {
      }
    }
  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
    }
  }, {
    key: "isActive",
    get: function get() {
      return false;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
    }
  }]);
  return MaskElement2;
}();
IMask.MaskElement = MaskElement;
var HTMLMaskElement = /* @__PURE__ */ function(_MaskElement) {
  _inherits(HTMLMaskElement2, _MaskElement);
  var _super = _createSuper(HTMLMaskElement2);
  function HTMLMaskElement2(input) {
    var _this;
    _classCallCheck(this, HTMLMaskElement2);
    _this = _super.call(this);
    _this.input = input;
    _this._handlers = {};
    return _this;
  }
  _createClass(HTMLMaskElement2, [{
    key: "rootElement",
    get: function get() {
      var _this$input$getRootNo, _this$input$getRootNo2, _this$input;
      return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) === null || _this$input$getRootNo2 === void 0 ? void 0 : _this$input$getRootNo2.call(_this$input)) !== null && _this$input$getRootNo !== void 0 ? _this$input$getRootNo : document;
    }
  }, {
    key: "isActive",
    get: function get() {
      return this.input === this.rootElement.activeElement;
    }
  }, {
    key: "_unsafeSelectionStart",
    get: function get() {
      return this.input.selectionStart;
    }
  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      return this.input.selectionEnd;
    }
  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      this.input.setSelectionRange(start, end);
    }
  }, {
    key: "value",
    get: function get() {
      return this.input.value;
    },
    set: function set2(value) {
      this.input.value = value;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {
      var _this2 = this;
      Object.keys(handlers).forEach(function(event) {
        return _this2._toggleEventHandler(HTMLMaskElement2.EVENTS_MAP[event], handlers[event]);
      });
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      var _this3 = this;
      Object.keys(this._handlers).forEach(function(event) {
        return _this3._toggleEventHandler(event);
      });
    }
  }, {
    key: "_toggleEventHandler",
    value: function _toggleEventHandler(event, handler) {
      if (this._handlers[event]) {
        this.input.removeEventListener(event, this._handlers[event]);
        delete this._handlers[event];
      }
      if (handler) {
        this.input.addEventListener(event, handler);
        this._handlers[event] = handler;
      }
    }
  }]);
  return HTMLMaskElement2;
}(MaskElement);
HTMLMaskElement.EVENTS_MAP = {
  selectionChange: "keydown",
  input: "input",
  drop: "drop",
  click: "click",
  focus: "focus",
  commit: "blur"
};
IMask.HTMLMaskElement = HTMLMaskElement;
var HTMLContenteditableMaskElement = /* @__PURE__ */ function(_HTMLMaskElement) {
  _inherits(HTMLContenteditableMaskElement2, _HTMLMaskElement);
  var _super = _createSuper(HTMLContenteditableMaskElement2);
  function HTMLContenteditableMaskElement2() {
    _classCallCheck(this, HTMLContenteditableMaskElement2);
    return _super.apply(this, arguments);
  }
  _createClass(HTMLContenteditableMaskElement2, [{
    key: "_unsafeSelectionStart",
    get: function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      var anchorOffset = selection && selection.anchorOffset;
      var focusOffset = selection && selection.focusOffset;
      if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
        return anchorOffset;
      }
      return focusOffset;
    }
  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      var anchorOffset = selection && selection.anchorOffset;
      var focusOffset = selection && selection.focusOffset;
      if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
        return anchorOffset;
      }
      return focusOffset;
    }
  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      if (!this.rootElement.createRange)
        return;
      var range = this.rootElement.createRange();
      range.setStart(this.input.firstChild || this.input, start);
      range.setEnd(this.input.lastChild || this.input, end);
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }, {
    key: "value",
    get: function get() {
      return this.input.textContent;
    },
    set: function set2(value) {
      this.input.textContent = value;
    }
  }]);
  return HTMLContenteditableMaskElement2;
}(HTMLMaskElement);
IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
var _excluded$1 = ["mask"];
var InputMask = /* @__PURE__ */ function() {
  function InputMask2(el, opts) {
    _classCallCheck(this, InputMask2);
    this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== "INPUT" && el.tagName !== "TEXTAREA" ? new HTMLContenteditableMaskElement(el) : new HTMLMaskElement(el);
    this.masked = createMask(opts);
    this._listeners = {};
    this._value = "";
    this._unmaskedValue = "";
    this._saveSelection = this._saveSelection.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onClick = this._onClick.bind(this);
    this.alignCursor = this.alignCursor.bind(this);
    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
    this._bindEvents();
    this.updateValue();
    this._onChange();
  }
  _createClass(InputMask2, [{
    key: "mask",
    get: function get() {
      return this.masked.mask;
    },
    set: function set2(mask) {
      if (this.maskEquals(mask))
        return;
      if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
        this.masked.updateOptions({
          mask
        });
        return;
      }
      var masked = createMask({
        mask
      });
      masked.unmaskedValue = this.masked.unmaskedValue;
      this.masked = masked;
    }
  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      var _this$masked;
      return mask == null || ((_this$masked = this.masked) === null || _this$masked === void 0 ? void 0 : _this$masked.maskEquals(mask));
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set2(str) {
      this.masked.value = str;
      this.updateControl();
      this.alignCursor();
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._unmaskedValue;
    },
    set: function set2(str) {
      this.masked.unmaskedValue = str;
      this.updateControl();
      this.alignCursor();
    }
  }, {
    key: "typedValue",
    get: function get() {
      return this.masked.typedValue;
    },
    set: function set2(val) {
      this.masked.typedValue = val;
      this.updateControl();
      this.alignCursor();
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.el.bindEvents({
        selectionChange: this._saveSelection,
        input: this._onInput,
        drop: this._onDrop,
        click: this._onClick,
        focus: this._onFocus,
        commit: this._onChange
      });
    }
  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      if (this.el)
        this.el.unbindEvents();
    }
  }, {
    key: "_fireEvent",
    value: function _fireEvent(ev) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var listeners = this._listeners[ev];
      if (!listeners)
        return;
      listeners.forEach(function(l2) {
        return l2.apply(void 0, args);
      });
    }
  }, {
    key: "selectionStart",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }
  }, {
    key: "cursorPos",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    },
    set: function set2(pos) {
      if (!this.el || !this.el.isActive)
        return;
      this.el.select(pos, pos);
      this._saveSelection();
    }
  }, {
    key: "_saveSelection",
    value: function _saveSelection() {
      if (this.value !== this.el.value) {
        console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.");
      }
      this._selection = {
        start: this.selectionStart,
        end: this.cursorPos
      };
    }
  }, {
    key: "updateValue",
    value: function updateValue() {
      this.masked.value = this.el.value;
      this._value = this.masked.value;
    }
  }, {
    key: "updateControl",
    value: function updateControl() {
      var newUnmaskedValue = this.masked.unmaskedValue;
      var newValue = this.masked.value;
      var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
      this._unmaskedValue = newUnmaskedValue;
      this._value = newValue;
      if (this.el.value !== newValue)
        this.el.value = newValue;
      if (isChanged)
        this._fireChangeEvents();
    }
  }, {
    key: "updateOptions",
    value: function updateOptions(opts) {
      var mask = opts.mask, restOpts = _objectWithoutProperties(opts, _excluded$1);
      var updateMask = !this.maskEquals(mask);
      var updateOpts = !objectIncludes(this.masked, restOpts);
      if (updateMask)
        this.mask = mask;
      if (updateOpts)
        this.masked.updateOptions(restOpts);
      if (updateMask || updateOpts)
        this.updateControl();
    }
  }, {
    key: "updateCursor",
    value: function updateCursor(cursorPos) {
      if (cursorPos == null)
        return;
      this.cursorPos = cursorPos;
      this._delayUpdateCursor(cursorPos);
    }
  }, {
    key: "_delayUpdateCursor",
    value: function _delayUpdateCursor(cursorPos) {
      var _this = this;
      this._abortUpdateCursor();
      this._changingCursorPos = cursorPos;
      this._cursorChanging = setTimeout(function() {
        if (!_this.el)
          return;
        _this.cursorPos = _this._changingCursorPos;
        _this._abortUpdateCursor();
      }, 10);
    }
  }, {
    key: "_fireChangeEvents",
    value: function _fireChangeEvents() {
      this._fireEvent("accept", this._inputEvent);
      if (this.masked.isComplete)
        this._fireEvent("complete", this._inputEvent);
    }
  }, {
    key: "_abortUpdateCursor",
    value: function _abortUpdateCursor() {
      if (this._cursorChanging) {
        clearTimeout(this._cursorChanging);
        delete this._cursorChanging;
      }
    }
  }, {
    key: "alignCursor",
    value: function alignCursor() {
      this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT));
    }
  }, {
    key: "alignCursorFriendly",
    value: function alignCursorFriendly() {
      if (this.selectionStart !== this.cursorPos)
        return;
      this.alignCursor();
    }
  }, {
    key: "on",
    value: function on(ev, handler) {
      if (!this._listeners[ev])
        this._listeners[ev] = [];
      this._listeners[ev].push(handler);
      return this;
    }
  }, {
    key: "off",
    value: function off(ev, handler) {
      if (!this._listeners[ev])
        return this;
      if (!handler) {
        delete this._listeners[ev];
        return this;
      }
      var hIndex = this._listeners[ev].indexOf(handler);
      if (hIndex >= 0)
        this._listeners[ev].splice(hIndex, 1);
      return this;
    }
  }, {
    key: "_onInput",
    value: function _onInput(e2) {
      this._inputEvent = e2;
      this._abortUpdateCursor();
      if (!this._selection)
        return this.updateValue();
      var details = new ActionDetails(
        this.el.value,
        this.cursorPos,
        this.value,
        this._selection
      );
      var oldRawValue = this.masked.rawInputValue;
      var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset;
      var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
      var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
      if (removeDirection !== DIRECTION.NONE)
        cursorPos = this.masked.nearestInputPos(cursorPos, DIRECTION.NONE);
      this.updateControl();
      this.updateCursor(cursorPos);
      delete this._inputEvent;
    }
  }, {
    key: "_onChange",
    value: function _onChange() {
      if (this.value !== this.el.value) {
        this.updateValue();
      }
      this.masked.doCommit();
      this.updateControl();
      this._saveSelection();
    }
  }, {
    key: "_onDrop",
    value: function _onDrop(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
  }, {
    key: "_onFocus",
    value: function _onFocus(ev) {
      this.alignCursorFriendly();
    }
  }, {
    key: "_onClick",
    value: function _onClick(ev) {
      this.alignCursorFriendly();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._unbindEvents();
      this._listeners.length = 0;
      delete this.el;
    }
  }]);
  return InputMask2;
}();
IMask.InputMask = InputMask;
var MaskedEnum = /* @__PURE__ */ function(_MaskedPattern) {
  _inherits(MaskedEnum2, _MaskedPattern);
  var _super = _createSuper(MaskedEnum2);
  function MaskedEnum2() {
    _classCallCheck(this, MaskedEnum2);
    return _super.apply(this, arguments);
  }
  _createClass(MaskedEnum2, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.enum)
        opts.mask = "*".repeat(opts.enum[0].length);
      _get(_getPrototypeOf(MaskedEnum2.prototype), "_update", this).call(this, opts);
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this = this, _get2;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return this.enum.some(function(e2) {
        return e2.indexOf(_this.unmaskedValue) >= 0;
      }) && (_get2 = _get(_getPrototypeOf(MaskedEnum2.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);
  return MaskedEnum2;
}(MaskedPattern);
IMask.MaskedEnum = MaskedEnum;
var MaskedNumber = /* @__PURE__ */ function(_Masked) {
  _inherits(MaskedNumber2, _Masked);
  var _super = _createSuper(MaskedNumber2);
  function MaskedNumber2(opts) {
    _classCallCheck(this, MaskedNumber2);
    return _super.call(this, Object.assign({}, MaskedNumber2.DEFAULTS, opts));
  }
  _createClass(MaskedNumber2, [{
    key: "_update",
    value: function _update(opts) {
      _get(_getPrototypeOf(MaskedNumber2.prototype), "_update", this).call(this, opts);
      this._updateRegExps();
    }
  }, {
    key: "_updateRegExps",
    value: function _updateRegExps() {
      var start = "^" + (this.allowNegative ? "[+|\\-]?" : "");
      var midInput = "(0|([1-9]+\\d*))?";
      var mid = "\\d*";
      var end = (this.scale ? "(" + escapeRegExp(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
      this._numberRegExpInput = new RegExp(start + midInput + end);
      this._numberRegExp = new RegExp(start + mid + end);
      this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(escapeRegExp).join("") + "]", "g");
      this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), "g");
    }
  }, {
    key: "_removeThousandsSeparators",
    value: function _removeThousandsSeparators(value) {
      return value.replace(this._thousandsSeparatorRegExp, "");
    }
  }, {
    key: "_insertThousandsSeparators",
    value: function _insertThousandsSeparators(value) {
      var parts = value.split(this.radix);
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
      return parts.join(this.radix);
    }
  }, {
    key: "doPrepare",
    value: function doPrepare(ch) {
      var _get2;
      ch = ch.replace(this._mapToRadixRegExp, this.radix);
      var noSepCh = this._removeThousandsSeparators(ch);
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var _normalizePrepare = normalizePrepare((_get2 = _get(_getPrototypeOf(MaskedNumber2.prototype), "doPrepare", this)).call.apply(_get2, [this, noSepCh].concat(args))), _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2), prepCh = _normalizePrepare2[0], details = _normalizePrepare2[1];
      if (ch && !noSepCh)
        details.skip = true;
      return [prepCh, details];
    }
  }, {
    key: "_separatorsCount",
    value: function _separatorsCount(to) {
      var extendOnSeparators = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var count = 0;
      for (var pos = 0; pos < to; ++pos) {
        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
          ++count;
          if (extendOnSeparators)
            to += this.thousandsSeparator.length;
        }
      }
      return count;
    }
  }, {
    key: "_separatorsCountFromSlice",
    value: function _separatorsCountFromSlice() {
      var slice = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._value;
      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : void 0;
      var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);
      var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);
      fromPos = _this$_adjustRangeWit2[0];
      toPos = _this$_adjustRangeWit2[1];
      return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber2.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
    }
  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!this.thousandsSeparator)
        return _get(_getPrototypeOf(MaskedNumber2.prototype), "_appendCharRaw", this).call(this, ch, flags);
      var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
      var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
      this._value = this._removeThousandsSeparators(this.value);
      var appendDetails = _get(_getPrototypeOf(MaskedNumber2.prototype), "_appendCharRaw", this).call(this, ch, flags);
      this._value = this._insertThousandsSeparators(this._value);
      var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
      appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
      return appendDetails;
    }
  }, {
    key: "_findSeparatorAround",
    value: function _findSeparatorAround(pos) {
      if (this.thousandsSeparator) {
        var searchFrom = pos - this.thousandsSeparator.length + 1;
        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
        if (separatorPos <= pos)
          return separatorPos;
      }
      return -1;
    }
  }, {
    key: "_adjustRangeWithSeparators",
    value: function _adjustRangeWithSeparators(from, to) {
      var separatorAroundFromPos = this._findSeparatorAround(from);
      if (separatorAroundFromPos >= 0)
        from = separatorAroundFromPos;
      var separatorAroundToPos = this._findSeparatorAround(to);
      if (separatorAroundToPos >= 0)
        to = separatorAroundToPos + this.thousandsSeparator.length;
      return [from, to];
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);
      var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);
      fromPos = _this$_adjustRangeWit4[0];
      toPos = _this$_adjustRangeWit4[1];
      var valueBeforePos = this.value.slice(0, fromPos);
      var valueAfterPos = this.value.slice(toPos);
      var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
      return new ChangeDetails({
        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
      });
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      if (!this.thousandsSeparator)
        return cursorPos;
      switch (direction) {
        case DIRECTION.NONE:
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT: {
          var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
          if (separatorAtLeftPos >= 0) {
            var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
            if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
              return separatorAtLeftPos;
            }
          }
          break;
        }
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT: {
          var separatorAtRightPos = this._findSeparatorAround(cursorPos);
          if (separatorAtRightPos >= 0) {
            return separatorAtRightPos + this.thousandsSeparator.length;
          }
        }
      }
      return cursorPos;
    }
  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp;
      var valid = regexp.test(this._removeThousandsSeparators(this.value));
      if (valid) {
        var number = this.number;
        valid = valid && !isNaN(number) && (this.min == null || this.min >= 0 || this.min <= this.number) && (this.max == null || this.max <= 0 || this.number <= this.max);
      }
      return valid && _get(_getPrototypeOf(MaskedNumber2.prototype), "doValidate", this).call(this, flags);
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.value) {
        var number = this.number;
        var validnum = number;
        if (this.min != null)
          validnum = Math.max(validnum, this.min);
        if (this.max != null)
          validnum = Math.min(validnum, this.max);
        if (validnum !== number)
          this.unmaskedValue = String(validnum);
        var formatted = this.value;
        if (this.normalizeZeros)
          formatted = this._normalizeZeros(formatted);
        if (this.padFractionalZeros && this.scale > 0)
          formatted = this._padFractionalZeros(formatted);
        this._value = formatted;
      }
      _get(_getPrototypeOf(MaskedNumber2.prototype), "doCommit", this).call(this);
    }
  }, {
    key: "_normalizeZeros",
    value: function _normalizeZeros(value) {
      var parts = this._removeThousandsSeparators(value).split(this.radix);
      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function(match, sign, zeros, num) {
        return sign + num;
      });
      if (value.length && !/\d$/.test(parts[0]))
        parts[0] = parts[0] + "0";
      if (parts.length > 1) {
        parts[1] = parts[1].replace(/0*$/, "");
        if (!parts[1].length)
          parts.length = 1;
      }
      return this._insertThousandsSeparators(parts.join(this.radix));
    }
  }, {
    key: "_padFractionalZeros",
    value: function _padFractionalZeros(value) {
      if (!value)
        return value;
      var parts = value.split(this.radix);
      if (parts.length < 2)
        parts.push("");
      parts[1] = parts[1].padEnd(this.scale, "0");
      return parts.join(this.radix);
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, ".");
    },
    set: function set2(unmaskedValue) {
      _set(_getPrototypeOf(MaskedNumber2.prototype), "unmaskedValue", unmaskedValue.replace(".", this.radix), this, true);
    }
  }, {
    key: "typedValue",
    get: function get() {
      return Number(this.unmaskedValue);
    },
    set: function set2(n2) {
      _set(_getPrototypeOf(MaskedNumber2.prototype), "unmaskedValue", String(n2), this, true);
    }
  }, {
    key: "number",
    get: function get() {
      return this.typedValue;
    },
    set: function set2(number) {
      this.typedValue = number;
    }
  }, {
    key: "allowNegative",
    get: function get() {
      return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
  }]);
  return MaskedNumber2;
}(Masked);
MaskedNumber.DEFAULTS = {
  radix: ",",
  thousandsSeparator: "",
  mapToRadix: ["."],
  scale: 2,
  signed: false,
  normalizeZeros: true,
  padFractionalZeros: false
};
IMask.MaskedNumber = MaskedNumber;
var MaskedFunction = /* @__PURE__ */ function(_Masked) {
  _inherits(MaskedFunction2, _Masked);
  var _super = _createSuper(MaskedFunction2);
  function MaskedFunction2() {
    _classCallCheck(this, MaskedFunction2);
    return _super.apply(this, arguments);
  }
  _createClass(MaskedFunction2, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask)
        opts.validate = opts.mask;
      _get(_getPrototypeOf(MaskedFunction2.prototype), "_update", this).call(this, opts);
    }
  }]);
  return MaskedFunction2;
}(Masked);
IMask.MaskedFunction = MaskedFunction;
var _excluded = ["compiledMasks", "currentMaskRef", "currentMask"];
var MaskedDynamic = /* @__PURE__ */ function(_Masked) {
  _inherits(MaskedDynamic2, _Masked);
  var _super = _createSuper(MaskedDynamic2);
  function MaskedDynamic2(opts) {
    var _this;
    _classCallCheck(this, MaskedDynamic2);
    _this = _super.call(this, Object.assign({}, MaskedDynamic2.DEFAULTS, opts));
    _this.currentMask = null;
    return _this;
  }
  _createClass(MaskedDynamic2, [{
    key: "_update",
    value: function _update(opts) {
      _get(_getPrototypeOf(MaskedDynamic2.prototype), "_update", this).call(this, opts);
      if ("mask" in opts) {
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function(m2) {
          return createMask(m2);
        }) : [];
      }
    }
  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var details = this._applyDispatch(ch, flags);
      if (this.currentMask) {
        details.aggregate(this.currentMask._appendChar(ch, flags));
      }
      return details;
    }
  }, {
    key: "_applyDispatch",
    value: function _applyDispatch() {
      var appended = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
      var inputValue = this.rawInputValue;
      var insertValue = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._rawInputValue : inputValue;
      var tailValue = inputValue.slice(insertValue.length);
      var prevMask = this.currentMask;
      var details = new ChangeDetails();
      var prevMaskState = prevMask && prevMask.state;
      this.currentMask = this.doDispatch(appended, Object.assign({}, flags));
      if (this.currentMask) {
        if (this.currentMask !== prevMask) {
          this.currentMask.reset();
          if (insertValue) {
            var d2 = this.currentMask.append(insertValue, {
              raw: true
            });
            details.tailShift = d2.inserted.length - prevValueBeforeTail.length;
          }
          if (tailValue) {
            details.tailShift += this.currentMask.append(tailValue, {
              raw: true,
              tail: true
            }).tailShift;
          }
        } else {
          this.currentMask.state = prevMaskState;
        }
      }
      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = this._applyDispatch.apply(this, arguments);
      if (this.currentMask) {
        details.aggregate(this.currentMask._appendPlaceholder());
      }
      return details;
    }
  }, {
    key: "_appendEager",
    value: function _appendEager() {
      var details = this._applyDispatch.apply(this, arguments);
      if (this.currentMask) {
        details.aggregate(this.currentMask._appendEager());
      }
      return details;
    }
  }, {
    key: "doDispatch",
    value: function doDispatch(appended) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.dispatch(appended, this, flags);
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2, _this$currentMask;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return (_get2 = _get(_getPrototypeOf(MaskedDynamic2.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask = this.currentMask).doValidate.apply(_this$currentMask, args));
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this$currentMask2;
      (_this$currentMask2 = this.currentMask) === null || _this$currentMask2 === void 0 ? void 0 : _this$currentMask2.reset();
      this.compiledMasks.forEach(function(m2) {
        return m2.reset();
      });
    }
  }, {
    key: "value",
    get: function get() {
      return this.currentMask ? this.currentMask.value : "";
    },
    set: function set2(value) {
      _set(_getPrototypeOf(MaskedDynamic2.prototype), "value", value, this, true);
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.unmaskedValue : "";
    },
    set: function set2(unmaskedValue) {
      _set(_getPrototypeOf(MaskedDynamic2.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
  }, {
    key: "typedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.typedValue : "";
    },
    set: function set2(value) {
      var unmaskedValue = String(value);
      if (this.currentMask) {
        this.currentMask.typedValue = value;
        unmaskedValue = this.currentMask.unmaskedValue;
      }
      this.unmaskedValue = unmaskedValue;
    }
  }, {
    key: "isComplete",
    get: function get() {
      var _this$currentMask3;
      return Boolean((_this$currentMask3 = this.currentMask) === null || _this$currentMask3 === void 0 ? void 0 : _this$currentMask3.isComplete);
    }
  }, {
    key: "isFilled",
    get: function get() {
      var _this$currentMask4;
      return Boolean((_this$currentMask4 = this.currentMask) === null || _this$currentMask4 === void 0 ? void 0 : _this$currentMask4.isFilled);
    }
  }, {
    key: "remove",
    value: function remove() {
      var details = new ChangeDetails();
      if (this.currentMask) {
        var _this$currentMask5;
        details.aggregate((_this$currentMask5 = this.currentMask).remove.apply(_this$currentMask5, arguments)).aggregate(this._applyDispatch());
      }
      return details;
    }
  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic2.prototype), "state", this), {
        _rawInputValue: this.rawInputValue,
        compiledMasks: this.compiledMasks.map(function(m2) {
          return m2.state;
        }),
        currentMaskRef: this.currentMask,
        currentMask: this.currentMask && this.currentMask.state
      });
    },
    set: function set2(state) {
      var compiledMasks = state.compiledMasks, currentMaskRef = state.currentMaskRef, currentMask = state.currentMask, maskedState = _objectWithoutProperties(state, _excluded);
      this.compiledMasks.forEach(function(m2, mi) {
        return m2.state = compiledMasks[mi];
      });
      if (currentMaskRef != null) {
        this.currentMask = currentMaskRef;
        this.currentMask.state = currentMask;
      }
      _set(_getPrototypeOf(MaskedDynamic2.prototype), "state", maskedState, this, true);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var _this$currentMask6;
      return this.currentMask ? (_this$currentMask6 = this.currentMask).extractInput.apply(_this$currentMask6, arguments) : "";
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$currentMask7, _get3;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return this.currentMask ? (_this$currentMask7 = this.currentMask).extractTail.apply(_this$currentMask7, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic2.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.currentMask)
        this.currentMask.doCommit();
      _get(_getPrototypeOf(MaskedDynamic2.prototype), "doCommit", this).call(this);
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos() {
      var _this$currentMask8, _get4;
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return this.currentMask ? (_this$currentMask8 = this.currentMask).nearestInputPos.apply(_this$currentMask8, args) : (_get4 = _get(_getPrototypeOf(MaskedDynamic2.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
    }
  }, {
    key: "overwrite",
    get: function get() {
      return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(MaskedDynamic2.prototype), "overwrite", this);
    },
    set: function set2(overwrite) {
      console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
    }
  }, {
    key: "eager",
    get: function get() {
      return this.currentMask ? this.currentMask.eager : _get(_getPrototypeOf(MaskedDynamic2.prototype), "eager", this);
    },
    set: function set2(eager) {
      console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
    }
  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return Array.isArray(mask) && this.compiledMasks.every(function(m2, mi) {
        var _mask$mi;
        return m2.maskEquals((_mask$mi = mask[mi]) === null || _mask$mi === void 0 ? void 0 : _mask$mi.mask);
      });
    }
  }]);
  return MaskedDynamic2;
}(Masked);
MaskedDynamic.DEFAULTS = {
  dispatch: function dispatch(appended, masked, flags) {
    if (!masked.compiledMasks.length)
      return;
    var inputValue = masked.rawInputValue;
    var inputs = masked.compiledMasks.map(function(m2, index) {
      m2.reset();
      m2.append(inputValue, {
        raw: true
      });
      m2.append(appended, flags);
      var weight = m2.rawInputValue.length;
      return {
        weight,
        index
      };
    });
    inputs.sort(function(i1, i2) {
      return i2.weight - i1.weight;
    });
    return masked.compiledMasks[inputs[0].index];
  }
};
IMask.MaskedDynamic = MaskedDynamic;
var PIPE_TYPE = {
  MASKED: "value",
  UNMASKED: "unmaskedValue",
  TYPED: "typedValue"
};
function createPipe(mask) {
  var from = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : PIPE_TYPE.MASKED;
  var to = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : PIPE_TYPE.MASKED;
  var masked = createMask(mask);
  return function(value) {
    return masked.runIsolated(function(m2) {
      m2[from] = value;
      return m2[to];
    });
  };
}
function pipe(value) {
  for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    pipeArgs[_key - 1] = arguments[_key];
  }
  return createPipe.apply(void 0, pipeArgs)(value);
}
IMask.PIPE_TYPE = PIPE_TYPE;
IMask.createPipe = createPipe;
IMask.pipe = pipe;
try {
  globalThis.IMask = IMask;
} catch (e2) {
}
export {
  delegateEvents as d,
  y
};
