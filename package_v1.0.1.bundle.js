var e = {
    d: (r, o) => {
      for (var n in o)
        e.o(o, n) &&
          !e.o(r, n) &&
          Object.defineProperty(r, n, { enumerable: !0, get: o[n] });
    },
    o: (e, r) => Object.prototype.hasOwnProperty.call(e, r),
  },
  r = {};
function o() {
  return "Hello from my package!";
}
e.d(r, { n: () => o });
var n = r.n;
export { n as myFunction };
