webpackHotUpdate("cms",{

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: Navigation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Logo */ "./src/components/Logo.js");
/* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Nav.css */ "./src/components/Nav.css");
/* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Nav_css__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/app/yellowcake/src/components/Nav.js",
    _this3 = undefined;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







var Navigation = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(Navigation, _Component);

  function Navigation() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      active: false,
      activeSubNav: false,
      currentPath: false
    };

    _this.componentDidMount = function () {
      return _this.setState({
        currentPath: _this.props.location.pathname
      });
    };

    _this.handleMenuToggle = function () {
      return _this.setState({
        active: !_this.state.active
      });
    };

    _this.handleLinkClick = function () {
      return _this.state.active && _this.handleMenuToggle();
    };

    _this.toggleSubNav = function (subNav) {
      return _this.setState({
        activeSubNav: _this.state.activeSubNav === subNav ? false : subNav
      });
    };

    return _this;
  }

  var _proto = Navigation.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var active = this.state.active,
        subNav = this.props.subNav,
        NavLink = function NavLink(_ref) {
      var to = _ref.to,
          className = _ref.className,
          children = _ref.children,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["to", "className", "children"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_7__["Link"], Object.assign({
        to: to,
        className: "NavLink " + (to === _this2.state.currentPath ? 'active' : '') + " " + className,
        onClick: _this2.handleLinkClick
      }, props, {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }
      }), children);
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
      className: "Nav " + (active ? 'Nav-active' : ''),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "Nav--Container container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      to: "/",
      onClick: this.handleLinkClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "Nav--Links",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLink, {
      to: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }, "\u30C8\u30C3\u30D7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLink, {
      to: "/components/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, "\u3054\u5229\u7528\u306B\u3064\u3044\u3066"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "Nav--Group " + (this.state.activeSubNav === 'posts' ? 'active' : ''),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
      className: "NavLink Nav--GroupParent " + (this.props.location.pathname.includes('posts') || this.props.location.pathname.includes('blog') || this.props.location.pathname.includes('post-categories') ? 'active' : ''),
      onClick: function onClick() {
        return _this2.toggleSubNav('posts');
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    }, "Blog", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "Nav--GroupLinks",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLink, {
      to: "/blog/",
      className: "Nav--GroupLink",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 19
      }
    }, "All Posts"), subNav.posts.map(function (link, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLink, {
        to: link.slug,
        key: 'posts-subnav-link-' + index,
        className: "Nav--GroupLink",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }
      }, link.title);
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLink, {
      to: "/default/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }, "Default"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLink, {
      to: "/contact/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
      className: "Button-blank Nav--MenuButton",
      onClick: this.handleMenuToggle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }
    }, active ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_8__["X"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 23
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_8__["Menu"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 31
      }
    }))));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var _default = function _default(_ref2) {
  var subNav = _ref2.subNav;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_6__["Location"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 3
    }
  }, function (route) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Navigation, Object.assign({
      subNav: subNav
    }, route, {
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 23
      }
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Navigation, "Navigation", "/app/yellowcake/src/components/Nav.js");
  reactHotLoader.register(_default, "default", "/app/yellowcake/src/components/Nav.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.f7344459fb46a7c4d8f4.hot-update.js.map