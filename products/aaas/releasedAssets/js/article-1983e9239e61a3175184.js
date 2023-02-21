(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    369: function (e, t) {},
    639: function (e, t, a) {
      var i = a(50);
      e.exports = function template(e) {
        var t,
          a = "",
          o = {},
          r = e || {};
        return (
          function (e, r, s) {
            var n,
              c = {
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
            (c = e.assign({}, c, {
              back: { srText: "data-sr-back", icon: "icon-figure-in-text-1" },
              close: { text: "data-text-close", icon: "icon-arrow-left" },
            })),
              (n = ["back-to-original", "zoom", "download", "share", "info"]),
              (o.renderLinkContents = t =
                function pug_interp(e) {
                  this && this.block, this && this.attributes;
                  var t = c[e];
                  t.srText &&
                    (a =
                      a +
                      '<span class="sr-only"' +
                      i.attr("data-sr", e, !0, !0) +
                      "></span>"),
                    t.icon &&
                      (a =
                        a +
                        "<i" +
                        i.attr("class", i.classes([t.icon], [!0]), !1, !0) +
                        ' aria-hidden="true"></i>'),
                    t.text &&
                      (a =
                        a +
                        "<span" +
                        i.attr("data-text", e, !0, !0) +
                        "></span>");
                }),
              (o.renderLink = t =
                function pug_interp(e, t) {
                  var r = this && this.block;
                  this && this.attributes;
                  t.href || (t.href = "#"),
                    (a =
                      a +
                      "<a" +
                      i.attrs(i.merge([{ "data-title": i.escape(e) }, t]), !0) +
                      ">"),
                    o.renderLinkContents(e),
                    r && r && r(),
                    (a += "</a>");
                }),
              (o["back-to-original"] = t =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  o.renderLink("back", { class: "fv__back-to-original" });
                }),
              (o["close-button"] = t =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  o.renderLink("closeAlt", { class: "fv__close" });
                }),
              (o.download = t =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  o.renderLink("download", { class: "fv__download" });
                }),
              (o.info = t =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  o.renderLink("info", { class: "fv__open-info" });
                }),
              (o.share = t =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  o.renderLink("share", { class: "fv__share" });
                }),
              (o.zoom = t =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  o.renderLink.call(
                    {
                      block: function block() {
                        a =
                          a +
                          "<i" +
                          i.attr(
                            "class",
                            i.classes([c.zoom.iconIn], [!0]),
                            !1,
                            !0
                          ) +
                          ' aria-hidden="true"></i><i' +
                          i.attr(
                            "class",
                            i.classes([c.zoom.iconOut], [!0]),
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
              (o.toolbar = t =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  (a +=
                    '<div class="fv__toolbar"><a class="fv__close fv__toolbar__close" href="#">'),
                    o.renderLinkContents("close"),
                    (a +=
                      '</a><div class="fv__toolbar__info"></div><div class="fv__toolbar__holster">'),
                    function () {
                      var e = n;
                      if ("number" == typeof e.length)
                        for (var t = 0, a = e.length; t < a; t++) {
                          o[e[t]]();
                        }
                      else {
                        a = 0;
                        for (var t in e) {
                          a++, o[e[t]]();
                        }
                      }
                    }.call(this),
                    (a += "</div></div>");
                }),
              (o.slideshow = t =
                function pug_interp() {
                  this && this.block, this && this.attributes;
                  (a += '<div class="fv__slideshow__owl">'),
                    function () {
                      var e = r;
                      if ("number" == typeof e.length)
                        for (var o = 0, s = e.length; o < s; o++) {
                          var n = e[o];
                          a =
                            a +
                            '<figure class="fv__slideshow__item"' +
                            i.attr("id", n.id, !0, !0) +
                            i.attr("data-key", o, !0, !0) +
                            ">" +
                            // "undefined" is created inside here
                            (null == (t = n.content) ? "" : t) +
                            "</figure>";
                        }
                      else {
                        s = 0;
                        for (var o in e) {
                          s++;
                          n = e[o];
                          a =
                            a +
                            '<figure class="fv__slideshow__item"' +
                            i.attr("id", n.id, !0, !0) +
                            i.attr("data-key", o, !0, !0) +
                            ">" +
                            (null == (t = n.content) ? "" : t) +
                            //this is the title and subtitle of the table
                            "</figure>";
                        }
                      }
                    }.call(this),
                    (a += "</div>");
                }),
              (o.tongue = t =
                function _pug_interp() {
                  this && this.block, this && this.attributes;
                  a =
                    a +
                    '<a class="fv__slideshowNav__tongue" href="#"><i class="icon-arrow-down"></i><span' +
                    i.attr("data-text", "nav-".concat(s), !0, !0) +
                    "></span></a>";
                }),
              (o.slideshowNav = t =
                function _pug_interp() {
                  this && this.block, this && this.attributes;
                  (a += '<div class="fv__slideshowNav__owl">'),
                    function () {
                      var e = r;
                      if ("number" == typeof e.length)
                        for (var o = 0, n = e.length; o < n; o++) {
                          var c = e[o];
                          switch (
                            ((a =
                              a +
                              '<div class="fv__navItem"' +
                              i.attr("data-key", o, !0, !0) +
                              ' tabindex="0">'),
                            s)
                          ) {
                            case "figures":
                              a =
                                a +
                                '<div class="fv__navItem__cover fv__fit">' +
                                (null == (t = c.content) ? "" : t) +
                                "</div>";
                              break;
                            case "tables":
                              a +=
                                '<div class="fv__navItem__cover"><i class="icon-table"></i></div>';
                              break;
                            case "others":
                              a +=
                                '<div class="fv__navItem__cover"><i class="icon-digital-object"></i></div>';
                          }
                          a =
                            a +
                            '<div class="fv__navItem__title">' +
                            (null == (t = c.title) ? "" : t) +
                            "</div></div>";
                        }
                      else {
                        n = 0;
                        for (var o in e) {
                          n++;
                          c = e[o];
                          switch (
                            ((a =
                              a +
                              '<div class="fv__navItem"' +
                              i.attr("data-key", o, !0, !0) +
                              ' tabindex="0">'),
                            s)
                          ) {
                            case "figures":
                              a =
                                a +
                                '<div class="fv__navItem__cover fv__fit">' +
                                (null == (t = c.content) ? "" : t) +
                                "</div>";
                              break;
                            case "tables":
                              a +=
                                '<div class="fv__navItem__cover"><i class="icon-table"></i></div>';
                              break;
                            case "others":
                              a +=
                                '<div class="fv__navItem__cover"><i class="icon-digital-object"></i></div>';
                          }
                          a =
                            a +
                            '<div class="fv__navItem__title">' +
                            (null == (t = c.title) ? "" : t) +
                            "</div></div>";
                        }
                      }
                    }.call(this),
                    (a += "</div>");
                }),
              (o.goToDirectory = t =
                function _pug_interp2() {
                  this && this.block, this && this.attributes;
                  (a +=
                    '<a class="fv__slideshowNav__back btn btn-primary" href="#">'),
                    o.renderLinkContents("viewall"),
                    (a += "</a>");
                }),
              (a =
                a +
                "<div" +
                i.attr(
                  "class",
                  i.classes(["fv__lightbox", "fv__lightbox--" + s], [!1, !0]),
                  !1,
                  !0
                ) +
                ' id="fv__lightbox"' +
                i.attr("data-type", s, !0, !0) +
                ">"),
              r &&
                (o.toolbar(),
                (a += '<div class="fv__slideshow"><div class="owl-nav"></div>'),
                o.slideshow(),
                (a += '</div><div class="fv__slideshowNav js--hidden">'),
                o.tongue(),
                o.slideshowNav(),
                o.goToDirectory(),
                (a += "</div>")),
              (a += "</div>");
          }.call(
            this,
            "Object" in r ? r.Object : " " != typeof Object ? Object : void 0,
            "slides" in r ? r.slides : " " != typeof slides ? slides : void 0,
            "type" in r ? r.type : " " != typeof type ? type : void 0
          ),
          a
        );
      };
    },
    650: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a(164),
        o = a(12),
        r = a.n(o),
        s = a(30);
      function ownKeys(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, i);
        }
        return a;
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys(Object(a), !0).forEach(function (t) {
                r()(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : ownKeys(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      var n = function aaasCloneFromBody(e) {
          return _objectSpread(
            _objectSpread({}, s.a.cloneFromBody[e]),
            {},
            {
              links: _objectSpread(
                _objectSpread({}, s.a.cloneFromBody[e].links),
                {},
                { openAll: { enable: !1 } }
              ),
              renderingSettings: _objectSpread(
                _objectSpread({}, s.a.cloneFromBody[e].renderingSettings),
                {},
                { openInViewerFromFigure: !0 }
              ),
            }
          );
        },
        c = _objectSpread(
          _objectSpread({}, s.a),
          {},
          {
            articlePageHeader: _objectSpread(
              _objectSpread({}, s.a.articlePageHeader),
              {},
              { boundingClientSelector: '[data-extent="frontmatter"] h1' }
            ),
            cloneFromBody: _objectSpread(
              _objectSpread({}, s.a.cloneFromBody),
              {},
              {
                figures: _objectSpread(
                  _objectSpread({}, n("figures")),
                  {},
                  {
                    preventFor: _objectSpread(
                      _objectSpread({}, s.a.cloneFromBody.figures.preventFor),
                      {},
                      { enabled: !0 }
                    ),
                  }
                ),
                otherMedia: n("otherMedia"),
                tables: n("tables"),
              }
            ),
            collapsible: _objectSpread(
              _objectSpread({}, s.a.collapsible),
              {},
              {
                figures: _objectSpread(
                  _objectSpread({}, s.a.collapsible.figures),
                  {},
                  {
                    enabled: !0,
                    height: "248px",
                    wrap: ".figure-wrap figcaption",
                  }
                ),
                tables: _objectSpread(
                  _objectSpread({}, s.a.collapsible.tables),
                  {},
                  { wrap: ".table-wrap table" }
                ),
                coreProducts: _objectSpread(
                  _objectSpread({}, s.a.collapsible.coreProducts),
                  {},
                  { enabled: !0 }
                ),
              }
            ),
            collateral: _objectSpread(
              _objectSpread({}, s.a.collateral),
              {},
              { navMargin: { left: 16, top: 16, right: 16 } }
            ),
            enhancements: _objectSpread(
              _objectSpread({}, s.a.enhancements),
              {},
              { openInViewerFromBodyLinks: { images: !0, tables: !0 } }
            ),
            figureViewer: _objectSpread(
              _objectSpread({}, s.a.figureViewer),
              {},
              { enableDownloadPanel: !0, topInfoData: "data.articleTitle" }
            ),
            sectionsNavbar: _objectSpread(
              _objectSpread({}, s.a.sectionsNavbar),
              {},
              {
                eLettersId: "elettersSection",
                overlappingPivot: 1600,
                scrollIndicator: !1,
              }
            ),
            stickyHeader: _objectSpread(
              _objectSpread({}, s.a.stickyHeader),
              {},
              {
                breadcrumbs: !0,
                selectors: _objectSpread(
                  _objectSpread({}, s.a.stickyHeader.selectors),
                  {},
                  {
                    articleBreadcrumbs: ".breadcrumbs",
                    menu: "#mainNavbar .navbar-toggler",
                  }
                ),
              }
            ),
            mathJax: _objectSpread(
              _objectSpread({}, s.a.mathJax),
              {},
              {
                config: _objectSpread(
                  _objectSpread({}, s.a.mathJax.config),
                  {},
                  {
                    menuSettings: { zoom: "Click", zscale: "150%" },
                    styles: {
                      ".math-formula *": { "font-size": "2rem" },
                      ".inline-formula *": { "font-size": "1rem" },
                      ".math-formula ": { "text-align": "right" },
                      ".math-formula .equationTd, .display-formula .equation": {
                        display: "block",
                        "text-align": "center",
                      },
                      ".display-formula .MathJax_Display": {
                        display: "inline !important",
                      },
                    },
                  }
                ),
              }
            ),
          }
        );
      function templates_ownKeys(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, i);
        }
        return a;
      }
      function templates_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? templates_ownKeys(Object(a), !0).forEach(function (t) {
                r()(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : templates_ownKeys(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      var l = templates_objectSpread(
        templates_objectSpread({}, a(320).a),
        {},
        { fvLightbox: a(639) }
      );
      Object(i.c)({
        ArticleStore: i.a,
        ArticleView: i.b,
        config: c,
        templates: l,
      });
    },
  },
]);
//# sourceMappingURL=article-1983e9239e61a3175184.js.map
