(window.webpackJsonp = window.webpackJsonp || []).push([[81], {
    79: function(e, r, o) {
        "use strict";
        o.r(r),
        o.d(r, "default", (function() {
            return n
        }
        ));
        var t = o(0)
          , a = o(4);
        function s(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var r = 0, o = new Array(e.length); r < e.length; r++)
                        o[r] = e[r];
                    return o
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                    return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        function u(e, r) {
            for (var o = 0; o < r.length; o++) {
                var t = r[o];
                t.enumerable = t.enumerable || !1,
                t.configurable = !0,
                "value"in t && (t.writable = !0),
                Object.defineProperty(e, t.key, t)
            }
        }
        var n = function() {
            function e() {
                !function(e, r) {
                    if (!(e instanceof r))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.hasMoved = !1,
                this.data = {
                    wrapper: document.querySelector(".mouse-cursor-wrapper"),
                    text: document.querySelector(".mouse-cursor-wrapper .text"),
                    loopID: -1,
                    ease: .4,
                    isBigCursor: !1,
                    growSections: [],
                    mouseValues: {
                        mouseX: window.innerWidth / 2,
                        mouseY: window.innerHeight / 2,
                        currentX: window.innerWidth / 2,
                        currentXShadowTop: window.innerWidth / 2,
                        currentXShadowBottom: window.innerWidth / 2,
                        currentY: window.innerHeight / 2,
                        currentYShadowTop: window.innerHeight / 2,
                        currentYShadowBottom: window.innerHeight / 2,
                        targetX: window.innerWidth / 2,
                        targetY: window.innerHeight / 2,
                        dist: 50,
                        fx: {
                            diff: 0,
                            acc: 0,
                            velo: 0,
                            scale: 0
                        }
                    }
                },
                this.bindAll(),
                this.init(),
                t.b.set(this.data.wrapper, {
                    opacity: 0
                })
            }
            var r, o, n;
            return r = e,
            (o = [{
                key: "bindAll",
                value: function() {
                    var e = this;
                    ["loop", "onMouseMove"].forEach((function(r) {
                        return e[r] = e[r].bind(e)
                    }
                    ))
                }
            }, {
                key: "init",
                value: function() {
                    this.addListeners(),
                    this.loop(),
                    this.animation()
                }
            }, {
                key: "getSections",
                value: function() {
                    var e = this;
                    e.reset(),
                    e.animation(),
                    s(document.querySelectorAll("[data-mouse-cursor]")).forEach((function(r) {
                        var o = {};
                        o.elem = r,
                        r.dataset.mouseCursorText && (o.text = r.dataset.mouseCursorText),
                        e.data.growSections.push(o)
                    }
                    )),
                    e.data.growSections.map((function(r) {
                        r.elem.addEventListener("mouseenter", (function() {
                            r.elem.classList.contains("black-cursor") && document.querySelector(".mouse-cursor-wrapper").classList.add("black-version"),
                            (r.elem.classList.contains("is-draggable") || r.elem.classList.contains("is-hover")) && (document.querySelector("body").classList.add("js-custom-cursor"),
                            e.data.isBigCursor = !0,
                            t.b.to([".mouse-cursor-wrapper .outer", ".mouse-cursor-wrapper .shadow-top", ".mouse-cursor-wrapper .shadow-bottom"], .25, {
                                scale: 6.5,
                                ease: "power1.inOut"
                            }),
                            r.text && (e.data.text.innerHTML = r.text)),
                            document.querySelector(".mouse-cursor-wrapper").style.backgroundColor = "transparent",
                            document.querySelector(".mouse-cursor-wrapper").style.mixBlendMode = "normal"
                        }
                        )),
                        r.elem.addEventListener("mouseleave", (function() {
                            e.data.isBigCursor = !1,
                            r.elem.classList.contains("black-cursor") && document.querySelector(".mouse-cursor-wrapper").classList.remove("black-version"),
                            (r.elem.classList.contains("is-draggable") || r.elem.classList.contains("is-hover")) && (document.querySelector("body").classList.remove("js-custom-cursor"),
                            t.b.to([".mouse-cursor-wrapper .outer", ".mouse-cursor-wrapper .shadow-top", ".mouse-cursor-wrapper .shadow-bottom"], .25, {
                                scale: 1,
                                ease: "power1.inOut"
                            }),
                            r.text && (e.data.text.innerHTML = ""),
                            document.querySelector(".mouse-cursor-wrapper").style.backgroundColor = "#000000",
                            document.querySelector(".mouse-cursor-wrapper").style.mixBlendMode = "difference")
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "animation",
                value: function() {
                    var e = this;
                    s(document.querySelectorAll("[data-grow-cursor]")).forEach((function(r) {
                        r.addEventListener("mouseenter", (function() {
                            t.b.to([".mouse-cursor-wrapper .outer", ".mouse-cursor-wrapper .shadow-top", ".mouse-cursor-wrapper .shadow-bottom"], .25, {
                                scale: 2.4,
                                ease: "power1.inOut"
                            }),
                            t.b.set(".mouse-cursor-wrapper .text-wrapper", {
                                opacity: 0
                            }),
                            document.querySelector(".mouse-cursor-wrapper").style.backgroundColor = "#000000",
                            document.querySelector(".mouse-cursor-wrapper").style.mixBlendMode = "difference"
                        }
                        )),
                        r.addEventListener("mouseleave", (function() {
                            e.data.isBigCursor ? (t.b.to([".mouse-cursor-wrapper .outer", ".mouse-cursor-wrapper .shadow-top", ".mouse-cursor-wrapper .shadow-bottom"], .25, {
                                scale: 6.5,
                                ease: "power1.inOut"
                            }),
                            document.querySelector(".mouse-cursor-wrapper").style.backgroundColor = "transparent",
                            document.querySelector(".mouse-cursor-wrapper").style.mixBlendMode = "normal") : t.b.to([".mouse-cursor-wrapper .outer", ".mouse-cursor-wrapper .shadow-top", ".mouse-cursor-wrapper .shadow-bottom"], .25, {
                                scale: 1,
                                ease: "power1.inOut"
                            }),
                            t.b.set(".mouse-cursor-wrapper .text-wrapper", {
                                opacity: 1
                            })
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "forceResetCursor",
                value: function() {
                    this.data.isBigCursor = !1,
                    t.b.to([".mouse-cursor-wrapper .outer", ".mouse-cursor-wrapper .shadow-top", ".mouse-cursor-wrapper .shadow-bottom"], .25, {
                        scale: 1,
                        ease: "power1.inOut"
                    }),
                    document.querySelector(".mouse-cursor-wrapper").style.backgroundColor = "#000000",
                    document.querySelector(".mouse-cursor-wrapper").style.mixBlendMode = "difference"
                }
            }, {
                key: "reset",
                value: function() {
                    this.data.growSections = []
                }
            }, {
                key: "loop",
                value: function() {
                    var e = this;
                    e.data.mouseValues.currentX = a.e.lerp(e.data.mouseValues.currentX, e.data.mouseValues.targetX, e.data.ease),
                    e.data.mouseValues.currentXShadowTop = a.e.lerp(e.data.mouseValues.currentXShadowTop, e.data.mouseValues.targetX, .3),
                    e.data.mouseValues.currentXShadowBottom = a.e.lerp(e.data.mouseValues.currentXShadowBottom, e.data.mouseValues.targetX, .25),
                    e.data.mouseValues.currentY = a.e.lerp(e.data.mouseValues.currentY, e.data.mouseValues.targetY, e.data.ease),
                    e.data.mouseValues.currentYShadowTop = a.e.lerp(e.data.mouseValues.currentYShadowTop, e.data.mouseValues.targetY, .3),
                    e.data.mouseValues.currentYShadowBottom = a.e.lerp(e.data.mouseValues.currentYShadowBottom, e.data.mouseValues.targetY, .25),
                    t.b.set(".mouse-cursor-wrapper .outer", {
                        x: e.data.mouseValues.currentX,
                        y: e.data.mouseValues.currentY
                    }),
                    t.b.set(".mouse-cursor-wrapper .text-wrapper", {
                        x: e.data.mouseValues.currentX,
                        y: e.data.mouseValues.currentY
                    }),
                    t.b.set(".mouse-cursor-wrapper .shadow-top", {
                        x: e.data.mouseValues.currentXShadowTop,
                        y: e.data.mouseValues.currentYShadowBottom
                    }),
                    t.b.set(".mouse-cursor-wrapper .shadow-bottom", {
                        x: e.data.mouseValues.currentXShadowBottom,
                        y: e.data.mouseValues.currentYShadowBottom
                    }),
                    e.data.loopID = requestAnimationFrame((function() {
                        return e.loop()
                    }
                    ))
                }
            }, {
                key: "onMouseMove",
                value: function() {
                    this.hasMoved || (t.b.to(this.data.wrapper, {
                        duration: .25,
                        opacity: 1
                    }),
                    this.hasMoved = !0),
                    this.data.mouseValues.mouseX = event.clientX,
                    this.data.mouseValues.mouseY = event.clientY,
                    this.data.mouseValues.targetX = event.clientX - 10,
                    this.data.mouseValues.targetY = event.clientY
                }
            }, {
                key: "addListeners",
                value: function() {
                    window.addEventListener("mousemove", this.onMouseMove)
                }
            }, {
                key: "removeListeners",
                value: function() {
                    window.removeEventListener("mousemove", this.onMouseMove),
                    cancelAnimationFrame(this.data.loopID)
                }
            }, {
                key: "kill",
                value: function() {
                    this.removeListeners()
                }
            }]) && u(r.prototype, o),
            n && u(r, n),
            e
        }()
    }
}]);
