webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
  _jsxFileName = "C:\\web\\MyPortfolio\\nodebird2\\front\\components\\FollowButton.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var FollowButton = function FollowButton(_ref) {
  _s();
  var post = _ref.post;
  var dispatch = useDispatch();
  var _useSelector = useSelector(function (state) {
      return state.user;
    }),
    me = _useSelector.me,
    followLoading = _useSelector.followLoading,
    unfollowLoading = _useSelector.unfollowLoading;
  var isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(function (v) {
    return v.id === post.User.id;
  });
  var onClickButton = useCallback(function () {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_REQUEST"]
      });
    }
  }, [isFollowing]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    loading: followLoading || unfollowLoading,
    onClick: onClickButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, "\uD314\uB85C\uC6B0");
};
_s(FollowButton, "oQRGZ4+MgpAjZ6p1zzrPk3lOofY=", true);
_c = FollowButton;
FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);
var _c;
$RefreshReg$(_c, "FollowButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwiX3JlZiIsIl9zIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJfdXNlU2VsZWN0b3IiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiZm9sbG93TG9hZGluZyIsInVuZm9sbG93TG9hZGluZyIsImlzRm9sbG93aW5nIiwiRm9sbG93aW5ncyIsImZpbmQiLCJ2IiwiaWQiLCJVc2VyIiwib25DbGlja0J1dHRvbiIsInVzZUNhbGxiYWNrIiwidHlwZSIsIlVORk9MTE9XX1JFUVVFU1QiLCJfX2pzeCIsIkJ1dHRvbiIsImxvYWRpbmciLCJvbkNsaWNrIiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl9jIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1M7QUFDTDtBQUNzQjtBQUVwRCxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQUMsSUFBQSxFQUFpQjtFQUFBQyxFQUFBO0VBQUEsSUFBWEMsSUFBSSxHQUFBRixJQUFBLENBQUpFLElBQUk7RUFDMUIsSUFBTUMsUUFBUSxHQUFHQyxXQUFXLENBQUMsQ0FBQztFQUM5QixJQUFBQyxZQUFBLEdBQStDQyxXQUFXLENBQ3hELFVBQUNDLEtBQUs7TUFBQSxPQUFLQSxLQUFLLENBQUNDLElBQUk7SUFBQSxDQUN2QixDQUFDO0lBRk9DLEVBQUUsR0FBQUosWUFBQSxDQUFGSSxFQUFFO0lBQUVDLGFBQWEsR0FBQUwsWUFBQSxDQUFiSyxhQUFhO0lBQUVDLGVBQWUsR0FBQU4sWUFBQSxDQUFmTSxlQUFlO0VBRzFDLElBQU1DLFdBQVcsR0FBR0gsRUFBRSxhQUFGQSxFQUFFLHVCQUFGQSxFQUFFLENBQUVJLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLENBQUM7SUFBQSxPQUFLQSxDQUFDLENBQUNDLEVBQUUsS0FBS2QsSUFBSSxDQUFDZSxJQUFJLENBQUNELEVBQUU7RUFBQSxFQUFDO0VBQ3JFLElBQU1FLGFBQWEsR0FBR0MsV0FBVyxDQUFDLFlBQU07SUFDdEMsSUFBSVAsV0FBVyxFQUFFO01BQ2ZULFFBQVEsQ0FBQztRQUNQaUIsSUFBSSxFQUFFQywrREFBZ0JBO01BQ3hCLENBQUMsQ0FBQztJQUNKO0VBQ0YsQ0FBQyxFQUFFLENBQUNULFdBQVcsQ0FBQyxDQUFDO0VBRWpCLE9BQ0VVLEtBQUEsQ0FBQ0MsMkNBQU07SUFBQ0MsT0FBTyxFQUFFZCxhQUFhLElBQUlDLGVBQWdCO0lBQUNjLE9BQU8sRUFBRVAsYUFBYztJQUFBUSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSx1QkFFbEUsQ0FBQztBQUViLENBQUM7QUFBQy9CLEVBQUEsQ0FuQklGLFlBQVk7QUFBQWtDLEVBQUEsR0FBWmxDLFlBQVk7QUFxQmxCQSxZQUFZLENBQUNtQyxTQUFTLEdBQUc7RUFDdkJoQyxJQUFJLEVBQUVpQyxpREFBUyxDQUFDQyxNQUFNLENBQUNDO0FBQ3pCLENBQUM7QUFFY3RDLDJFQUFZLEVBQUM7QUFBQSxJQUFBa0MsRUFBQTtBQUFBSyxZQUFBLENBQUFMLEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWU0NDUwODIxOTJhNDZkZmJhNjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBVTkZPTExPV19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbmNvbnN0IEZvbGxvd0J1dHRvbiA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG1lLCBmb2xsb3dMb2FkaW5nLCB1bmZvbGxvd0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS51c2VyXHJcbiAgKTtcclxuICBjb25zdCBpc0ZvbGxvd2luZyA9IG1lPy5Gb2xsb3dpbmdzLmZpbmQoKHYpID0+IHYuaWQgPT09IHBvc3QuVXNlci5pZCk7XHJcbiAgY29uc3Qgb25DbGlja0J1dHRvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChpc0ZvbGxvd2luZykge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2lzRm9sbG93aW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uIGxvYWRpbmc9e2ZvbGxvd0xvYWRpbmcgfHwgdW5mb2xsb3dMb2FkaW5nfSBvbkNsaWNrPXtvbkNsaWNrQnV0dG9ufT5cclxuICAgICAg7YyU66Gc7JqwXHJcbiAgICA8L0J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuRm9sbG93QnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dCdXR0b247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=