webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "이종주"
    },
    content: "첫번째 게시글 #해시태그 #익스프레스",
    Images: [{
      src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726"
    }, {
      src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg"
    }, {
      src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg"
    }],
    Comments: [{
      User: {
        nickname: "nero"
      },
      content: "우와 개정판이 나왔군요~"
    }, {
      User: {
        nickname: "hero"
      },
      content: "얼른 사고 싶어요~"
    }]
  }],
  imagePaths: [],
  // image 업로드 할때 image경로 이곳에
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
var ADD_POST_REQUEST = "ADD_POST_REQUEST";
var ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
var ADD_POST_FAILURE = "ADD_POST_FAILURE";
var ADD_COMMENT_REQUEST = "ADD_POST_REQUEST";
var ADD_COMMENT_SUCCESS = "ADD_POST_SUCCESS";
var ADD_COMMENT_FAILURE = "ADD_POST_FAILURE";
var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};
var dummyPost = function dummyPost(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
    content: data,
    User: {
      id: 1,
      nickname: "주종이"
    },
    Images: [],
    Comments: []
  };
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case ADD_POST_REQUEST:
      console.log("addPostRequestReducers");
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      });
    case ADD_POST_SUCCESS:
      console.log("addPostSuccessReducers");
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        addPostLoading: false,
        addPostDone: true
      });
    case ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostError: action.error
      });
    case ADD_COMMENT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null
      });
    case ADD_COMMENT_SUCCESS:
      // action.data.content, postId, userId
      var postIndex = state.mainPosts.findIndex(function (v) {
        return v.id === action.data.postId;
      });
      var post = _objectSpread({}, state.mainPosts[postIndex]);
      var Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(post.Comments));
      var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts);
      mainPosts[postIndex] = post;
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: mainPosts,
        addCommentLoading: false,
        addCommentDone: true
      });
    case ADD_COMMENT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addCommentError: action.error
      });
    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiX29iamVjdFNwcmVhZCIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImVycm9yIiwicG9zdEluZGV4IiwiZmluZEluZGV4IiwidiIsInBvc3RJZCIsInBvc3QiLCJkdW1teUNvbW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFFdkIsSUFBTUEsWUFBWSxHQUFHO0VBQzFCQyxTQUFTLEVBQUUsQ0FDVDtJQUNFQyxFQUFFLEVBQUUsQ0FBQztJQUNMQyxJQUFJLEVBQUU7TUFDSkQsRUFBRSxFQUFFLENBQUM7TUFDTEUsUUFBUSxFQUFFO0lBQ1osQ0FBQztJQUNEQyxPQUFPLEVBQUUsc0JBQXNCO0lBQy9CQyxNQUFNLEVBQUUsQ0FDTjtNQUNFQyxHQUFHLEVBQUU7SUFDUCxDQUFDLEVB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c3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjUyMmY4Y2I2ODVlYjg1ZWE3MTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiBcIuydtOyiheyjvFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiBcIuyyq+uyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkXCIsXHJcbiAgICAgIEltYWdlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogXCJodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk1OC9ybl92aWV3X0JOMDAxOTU4LmpwZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk5OC9ybl92aWV3X0JOMDAxOTk4LmpwZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIENvbW1lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBuaWNrbmFtZTogXCJuZXJvXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udGVudDogXCLsmrDsmYAg6rCc7KCV7YyQ7J20IOuCmOyZlOq1sOyalH5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgbmlja25hbWU6IFwiaGVyb1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRlbnQ6IFwi7Ja866W4IOyCrOqzoCDsi7bslrTsmpR+XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBpbWFnZVBhdGhzOiBbXSwgLy8gaW1hZ2Ug7JeF66Gc65OcIO2VoOuVjCBpbWFnZeqyveuhnCDsnbTqs7Psl5BcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICBjb250ZW50OiBkYXRhLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6IFwi7KO87KKF7J20XCIsXHJcbiAgfSxcclxuICBJbWFnZXM6IFtdLFxyXG4gIENvbW1lbnRzOiBbXSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYWRkUG9zdFJlcXVlc3RSZWR1Y2Vyc1wiKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRQb3N0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBjb25zb2xlLmxvZyhcImFkZFBvc3RTdWNjZXNzUmVkdWNlcnNcIik7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgYWRkUG9zdERvbmU6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgICAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgIC8vIGFjdGlvbi5kYXRhLmNvbnRlbnQsIHBvc3RJZCwgdXNlcklkXHJcbiAgICAgIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoXHJcbiAgICAgICAgKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICBjb25zdCBDb21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1haW5Qb3N0cyxcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGFkZENvbW1lbnRFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=