webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject,
  _this = undefined,
  _jsxFileName = "C:\\web\\MyPortfolio\\nodebird2\\front\\components\\PostCard.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom: 20px;\n"])));
_c = StyledDiv;
var PostCard = function PostCard(_ref) {
  _s();
  var post = _ref.post;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
    liked = _useState[0],
    setLiked = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
    commentFormOpened = _useState2[0],
    setCommentFormOpened = _useState2[1];
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    var _state$user$me;
    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });

  // const { me } = useSelector((state) => state.user);
  // const id = me?.id;

  // 게시글 구현하기 13분부터

  return __jsx(StyledDiv, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 34
      }
    }),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["RetweetOutlined"], {
      key: "retweet",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartOutlined"], {
      key: "heart",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["MessageOutlined"], {
      key: "comment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      key: "more",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"].Group, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 15
        }
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "danger",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 19
        }
      }, "\uC2E0\uACE0")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }))],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 19
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: post.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  })));
};
_s(PostCard, "jl0v4CYAMSMd8SVe4SymEl8Ql2U=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});
_c2 = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);
var _c, _c2;
$RefreshReg$(_c, "StyledDiv");
$RefreshReg$(_c2, "PostCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJTdHlsZWREaXYiLCJzdHlsZWQiLCJkaXYiLCJfdGVtcGxhdGVPYmplY3QiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwiX2MiLCJQb3N0Q2FyZCIsIl9yZWYiLCJfcyIsInBvc3QiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsImxpa2VkIiwic2V0TGlrZWQiLCJfdXNlU3RhdGUyIiwiY29tbWVudEZvcm1PcGVuZWQiLCJzZXRDb21tZW50Rm9ybU9wZW5lZCIsImlkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIl9zdGF0ZSR1c2VyJG1lIiwidXNlciIsIm1lIiwiX19qc3giLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiQ2FyZCIsImNvdmVyIiwiSW1hZ2VzIiwiUG9zdEltYWdlcyIsImltYWdlcyIsImFjdGlvbnMiLCJSZXR3ZWV0T3V0bGluZWQiLCJrZXkiLCJIZWFydE91dGxpbmVkIiwiTWVzc2FnZU91dGxpbmVkIiwiUG9wb3ZlciIsImNvbnRlbnQiLCJCdXR0b24iLCJHcm91cCIsIlVzZXIiLCJSZWFjdCIsIkZyYWdtZW50IiwidHlwZSIsIkVsbGlwc2lzT3V0bGluZWQiLCJNZXRhIiwiYXZhdGFyIiwiQXZhdGFyIiwibmlja25hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiX2MyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJjcmVhdGVkQXQiLCJDb21tZW50cyIsImFycmF5T2YiLCJpc1JlcXVpcmVkIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDYjtBQUNMO0FBT1I7QUFDZTtBQUNKO0FBQ0M7QUFFdkMsSUFBTUEsU0FBUyxHQUFH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LENBQ0csQ0FHRyxDQUFDO0FBRWhCLENBQUM7QUFBQ3RCLEVBQUEsQ0EvQ0lGLFFBQVE7RUFBQSxRQUdEWSx1REFBVztBQUFBO0FBQUFzQyxHQUFBLEdBSGxCbEQsUUFBUTtBQWlEZEEsUUFBUSxDQUFDbUQsU0FBUyxHQUFHO0VBQ25CaEQsSUFBSSxFQUFFaUQsaURBQVMsQ0FBQ0MsS0FBSyxDQUFDO0lBQ3BCMUMsRUFBRSxFQUFFeUMsaURBQVMsQ0FBQ0UsTUFBTTtJQUNwQmYsSUFBSSxFQUFFYSxpREFBUyxDQUFDRyxNQUFNO0lBQ3RCbkIsT0FBTyxFQUFFZ0IsaURBQVMsQ0FBQ0csTUFBTTtJQUN6QkMsU0FBUyxFQUFFSixpREFBUyxDQUFDRyxNQUFNO0lBQzNCRSxRQUFRLEVBQUVMLGlEQUFTLENBQUNNLE9BQU8sQ0FBQ04saURBQVMsQ0FBQ0csTUFBTSxDQUFDO0lBQzdDNUIsTUFBTSxFQUFFeUIsaURBQVMsQ0FBQ00sT0FBTyxDQUFDTixpREFBUyxDQUFDRyxNQUFNO0VBQzVDLENBQUMsQ0FBQyxDQUFDSTtBQUNMLENBQUM7QUFFYzNELHVFQUFRLEVBQUM7QUFBQSxJQUFBRCxFQUFBLEVBQUFtRCxHQUFBO0FBQUFVLFlBQUEsQ0FBQTdELEVBQUE7QUFBQTZELFlBQUEsQ0FBQVYsR0FBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMGExMjQwNGJkZGVlZjZlZDRiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIENhcmQsIFBvcG92ZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQge1xyXG4gIEVsbGlwc2lzT3V0bGluZWQsXHJcbiAgSGVhcnRPdXRsaW5lZCxcclxuICBNZXNzYWdlT3V0bGluZWQsXHJcbiAgUmV0d2VldE91dGxpbmVkLFxyXG4gIEhlYXJ0VHdvVG9uZSxcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSBcIi4vUG9zdEltYWdlc1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgU3R5bGVkRGl2ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBbbGlrZWQsIHNldExpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG5cclxuICAvLyBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIC8vIGNvbnN0IGlkID0gbWU/LmlkO1xyXG5cclxuICAvLyDqsozsi5zquIAg6rWs7ZiE7ZWY6riwIDEz67aE67aA7YSwXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkRGl2PlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiAvPixcclxuICAgICAgICAgIDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgLz4sXHJcbiAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiAvPixcclxuICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgIGtleT1cIm1vcmVcIlxyXG4gICAgICAgICAgICBjb250ZW50PXtcclxuICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkYW5nZXJcIj7sgq3soJw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPC9Qb3BvdmVyPixcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmNvbnRlbnR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICB7LyogPENvbW1lbnRGb3JtIC8+XHJcbiAgICAgIDxDb21tZW50cyAvPiAqL31cclxuICAgIDwvU3R5bGVkRGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBDb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==