webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");


var _templateObject,
  _templateObject2,
  _this = undefined,
  _jsxFileName = "C:\\web\\MyPortfolio\\nodebird2\\front\\components\\CommentForm.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







var StyledForm = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item)(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  position: relative;\n  margin: 0;\n"])));
_c = StyledForm;
var StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  position: absolute;\n  right: 0;\n  bottom: -40px;\n  z-index: 1;\n"])));
_c2 = StyledButton;
var CommentForm = function CommentForm(_ref) {
  _s();
  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    var _state$user$me;
    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
      return state.post;
    }),
    addCommentDone = _useSelector.addCommentDone;
  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])(""),
    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
    commentText = _useInput2[0],
    onChangeCommentText = _useInput2[1],
    setCommentText = _useInput2[2];
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (addCommentDone) {
      setCommentText("");
    }
  });
  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["ADD_COMMENT_REQUEST"],
      data: {
        content: commentText,
        postId: post.id,
        userId: id
      }
    });
  }, [commentText, id]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onFinish: onSubmitComment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(StyledForm, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
    value: commentText,
    onChange: onChangeCommentText,
    rows: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }), __jsx(StyledButton, {
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "\uC090\uC57D"))));
};
_s(CommentForm, "mM6CS628luhUq9CAqU3Lfmbq6g4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"]];
});
_c3 = CommentForm;
CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);
var _c, _c2, _c3;
$RefreshReg$(_c, "StyledForm");
$RefreshReg$(_c2, "StyledButton");
$RefreshReg$(_c3, "CommentForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJTdHlsZWRGb3JtIiwic3R5bGVkIiwiRm9ybSIsIkl0ZW0iLCJfdGVtcGxhdGVPYmplY3QiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwiX2MiLCJTdHlsZWRCdXR0b24iLCJCdXR0b24iLCJfdGVtcGxhdGVPYmplY3QyIiwiX2MyIiwiQ29tbWVudEZvcm0iLCJfcmVmIiwiX3MiLCJwb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImlkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIl9zdGF0ZSR1c2VyJG1lIiwidXNlciIsIm1lIiwiX3VzZVNlbGVjdG9yIiwiYWRkQ29tbWVudERvbmUiLCJfdXNlSW5wdXQiLCJ1c2VJbnB1dCIsIl91c2VJbnB1dDIiLCJfc2xpY2VkVG9BcnJheSIsImNvbW1lbnRUZXh0Iiwib25DaGFuZ2VDb21tZW50VGV4dCIsInNldENvbW1lbnRUZXh0IiwidXNlRWZmZWN0Iiwib25TdWJtaXRDb21tZW50IiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsImRhdGEiLCJjb250ZW50IiwicG9zdElkIiwidXNlcklkIiwiX19qc3giLCJSZWFjdCIsIkZyYWdtZW50Iiwib25GaW5pc2giLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiSW5wdXQiLCJUZXh0QXJlYSIsInZhbHVlIiwib25DaGFuZ2UiLCJyb3dzIiwiaHRtbFR5cGUiLCJfYzMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDVztBQUNiO0FBQ047QUFDb0I7QUFDaEI7QUFDZ0I7QUFF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QztBQUFDdEMsRUFBQSxDQW5DSUYsV0FBVztFQUFBLFFBQ0VLLHVEQUFXLEVBQ2pCRSx1REFBVyxFQUNLQSx1REFBVyxFQUNxQlEsdURBQVE7QUFBQTtBQUFBZ0MsR0FBQSxHQUovRC9DLFdBQVc7QUFxQ2pCQSxXQUFXLENBQUNnRCxTQUFTLEdBQUc7RUFDdEI3QyxJQUFJLEVBQUU4QyxpREFBUyxDQUFDQyxNQUFNLENBQUNDO0FBQ3pCLENBQUM7QUFFY25ELDBFQUFXLEVBQUM7QUFBQSxJQUFBTCxFQUFBLEVBQUFJLEdBQUEsRUFBQWdELEdBQUE7QUFBQUssWUFBQSxDQUFBekQsRUFBQTtBQUFBeUQsWUFBQSxDQUFBckQsR0FBQTtBQUFBcUQsWUFBQSxDQUFBTCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRhYjlkMGEwZDE3Mzk2ZjcwYmFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBBRERfQ09NTUVOVF9SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuXHJcbmNvbnN0IFN0eWxlZEZvcm0gPSBzdHlsZWQoRm9ybS5JdGVtKWBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogLTQwcHg7XHJcbiAgei1pbmRleDogMTtcclxuYDtcclxuXHJcbmNvbnN0IENvbW1lbnRGb3JtID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XHJcbiAgY29uc3QgeyBhZGRDb21tZW50RG9uZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCBbY29tbWVudFRleHQsIG9uQ2hhbmdlQ29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZUlucHV0KFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFkZENvbW1lbnREb25lKSB7XHJcbiAgICAgIHNldENvbW1lbnRUZXh0KFwiXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdENvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgY29udGVudDogY29tbWVudFRleHQsIHBvc3RJZDogcG9zdC5pZCwgdXNlcklkOiBpZCB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW2NvbW1lbnRUZXh0LCBpZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Q29tbWVudH0+XHJcbiAgICAgICAgPFN0eWxlZEZvcm0+XHJcbiAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRUZXh0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb21tZW50VGV4dH1cclxuICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U3R5bGVkQnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAg7IKQ7JW9XHJcbiAgICAgICAgICA8L1N0eWxlZEJ1dHRvbj5cclxuICAgICAgICA8L1N0eWxlZEZvcm0+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Db21tZW50Rm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=