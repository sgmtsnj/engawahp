webpackHotUpdate("cms",{

/***/ "./src/components/BlogSearch.js":
false,

/***/ "./src/components/PostCategoriesNav.css":
false,

/***/ "./src/components/PostCategoriesNav.js":
false,

/***/ "./src/templates/BlogIndex.js":
/*!************************************!*\
  !*** ./src/templates/BlogIndex.js ***!
  \************************************/
/*! exports provided: byDate, byCategory, BlogIndexTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "byDate", function() { return byDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "byCategory", function() { return byCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogIndexTemplate", function() { return BlogIndexTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PageHeader */ "./src/components/PageHeader.js");
/* harmony import */ var _components_PostSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PostSection */ "./src/components/PostSection.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");






var _this = undefined,
    _jsxFileName = "/app/yellowcake/src/templates/BlogIndex.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





 //import PostCategoriesNav from '../components/PostCategoriesNav'


/**
 * Filter posts by date. Feature dates will be fitered
 * When used, make sure you run a cronejob each day to show schaduled content. See docs
 *
 * @param {posts} object
 */

var byDate = function byDate(posts) {
  var now = Date.now();
  return posts.filter(function (post) {
    return Date.parse(post.date) <= now;
  });
};
/**
 * filter posts by category.
 *
 * @param {posts} object
 * @param {title} string
 * @param {contentType} string
 */

var byCategory = function byCategory(posts, title, contentType) {
  var isCategory = contentType === 'postCategories';

  var byCategory = function byCategory(post) {
    return post.categories && post.categories.filter(function (cat) {
      return cat.category === title;
    }).length;
  };

  return isCategory ? posts.filter(byCategory) : posts;
}; // Export Template for use in CMS preview

var BlogIndexTemplate = function BlogIndexTemplate(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      featuredImage = _ref.featuredImage,
      _ref$posts = _ref.posts,
      posts = _ref$posts === void 0 ? [] : _ref$posts,
      _ref$postCategories = _ref.postCategories,
      postCategories = _ref$postCategories === void 0 ? [] : _ref$postCategories,
      _ref$enableSearch = _ref.enableSearch,
      enableSearch = _ref$enableSearch === void 0 ? true : _ref$enableSearch,
      contentType = _ref.contentType;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_6__["Location"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 3
    }
  }, function (_ref2) {
    var location = _ref2.location;
    var filteredPosts = posts && !!posts.length ? byCategory(byDate(posts), title, contentType) : [];
    var queryObj = location.search.replace('?', '');
    queryObj = qs__WEBPACK_IMPORTED_MODULE_7___default.a.parse(queryObj);

    if (enableSearch && queryObj.s) {
      var searchTerm = queryObj.s.toLowerCase();
      filteredPosts = filteredPosts.filter(function (post) {
        return post.frontmatter.title.toLowerCase().includes(searchTerm);
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
      className: "Blog",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_PageHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: title,
      subtitle: subtitle,
      backgroundImage: featuredImage,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }
    }), !!postCategories.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
      className: "section thin",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 15
      }
    })), !!posts.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
      className: "section",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_PostSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
      posts: filteredPosts,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }
    }))));
  });
}; // Export Default BlogIndex for front-end

var BlogIndex = function BlogIndex(_ref3) {
  var _ref3$data = _ref3.data,
      page = _ref3$data.page,
      posts = _ref3$data.posts,
      postCategories = _ref3$data.postCategories;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    meta: page.frontmatter.meta || false,
    title: page.frontmatter.title || false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(BlogIndexTemplate, Object.assign({}, page, page.fields, page.frontmatter, {
    posts: posts.edges.map(function (post) {
      return Object.assign({}, post.node, post.node.frontmatter, post.node.fields);
    }),
    postCategories: postCategories.edges.map(function (post) {
      return Object.assign({}, post.node, post.node.frontmatter, post.node.fields);
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  })));
};

var _default = BlogIndex;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "3121249010";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(byDate, "byDate", "/app/yellowcake/src/templates/BlogIndex.js");
  reactHotLoader.register(byCategory, "byCategory", "/app/yellowcake/src/templates/BlogIndex.js");
  reactHotLoader.register(BlogIndexTemplate, "BlogIndexTemplate", "/app/yellowcake/src/templates/BlogIndex.js");
  reactHotLoader.register(BlogIndex, "BlogIndex", "/app/yellowcake/src/templates/BlogIndex.js");
  reactHotLoader.register(pageQuery, "pageQuery", "/app/yellowcake/src/templates/BlogIndex.js");
  reactHotLoader.register(_default, "default", "/app/yellowcake/src/templates/BlogIndex.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 18:
false

})
//# sourceMappingURL=cms.8e95c9f1e1bff602162b.hot-update.js.map