webpackHotUpdate_N_E("pages/example",{

/***/ "./frontend/Layout/components/index.jsx":
/*!**********************************************!*\
  !*** ./frontend/Layout/components/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Layout_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Layout.scss */ "./frontend/Layout/styles/Layout.scss");
/* harmony import */ var _styles_Layout_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\demis\\Desktop\\PROYECTO\\frontend\\Layout\\components\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();




var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var handelOpen = function handelOpen() {
    console.log("opening or closing");
    setIsOpen(!isOpen);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Layout_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Layout_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Header,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Layout_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LogoContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/images/logo.png",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Layout_scss__WEBPACK_IMPORTED_MODULE_2___default.a.UserContainer,
        children: "user"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Layout_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Body,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "".concat(_styles_Layout_scss__WEBPACK_IMPORTED_MODULE_2___default.a.NavBar, " ").concat(isOpen && _styles_Layout_scss__WEBPACK_IMPORTED_MODULE_2___default.a.NavBarOpen),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: handelOpen,
          children: isOpen ? "C" : "O"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "".concat(_styles_Layout_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Container, " ").concat(isOpen && _styles_Layout_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ContainerOpen),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Layout_scss__WEBPACK_IMPORTED_MODULE_2___default.a.HeaderContainer,
          children: "HEADER"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Layout_scss__WEBPACK_IMPORTED_MODULE_2___default.a.BodyContainer,
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, _this);
};

_s(Layout, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvTGF5b3V0L2NvbXBvbmVudHMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJoYW5kZWxPcGVuIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsIk1haW4iLCJIZWFkZXIiLCJMb2dvQ29udGFpbmVyIiwiVXNlckNvbnRhaW5lciIsIkJvZHkiLCJOYXZCYXIiLCJOYXZCYXJPcGVuIiwiQ29udGFpbmVyIiwiQ29udGFpbmVyT3BlbiIsIkhlYWRlckNvbnRhaW5lciIsIkJvZHlDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDREMsc0RBQVEsQ0FBQyxLQUFELENBRFA7QUFBQSxNQUN0QkMsTUFEc0I7QUFBQSxNQUNkQyxTQURjOztBQUU3QixNQUFNQyxVQUFVLEdBQUMsU0FBWEEsVUFBVyxHQUFJO0FBQ2pCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBSCxhQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFUO0FBQ0gsR0FIRDs7QUFNQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUssMERBQU0sQ0FBQ0MsSUFBdkI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUQsMERBQU0sQ0FBQ0UsTUFBdkI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVGLDBEQUFNLENBQUNHLGFBQXZCO0FBQUEsK0JBQ0k7QUFBSyxhQUFHLEVBQUMsa0JBQVQ7QUFBNEIsYUFBRyxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUFLLGlCQUFTLEVBQUVILDBEQUFNLENBQUNJLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFTSTtBQUFLLGVBQVMsRUFBRUosMERBQU0sQ0FBQ0ssSUFBdkI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLFlBQUtMLDBEQUFNLENBQUNNLE1BQVosY0FBc0JYLE1BQU0sSUFBRUssMERBQU0sQ0FBQ08sVUFBckMsQ0FBZDtBQUFBLCtCQUNJO0FBQVEsaUJBQU8sRUFBRVYsVUFBakI7QUFBQSxvQkFDS0YsTUFBTSxHQUFDLEdBQUQsR0FBSztBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBT0k7QUFBSyxpQkFBUyxZQUFLSywwREFBTSxDQUFDUSxTQUFaLGNBQXlCYixNQUFNLElBQUVLLDBEQUFNLENBQUNTLGFBQXhDLENBQWQ7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUVULDBEQUFNLENBQUNVLGVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUk7QUFBSyxtQkFBUyxFQUFFViwwREFBTSxDQUFDVyxhQUF2QjtBQUFBLG9CQUNLbEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNEJILENBcENEOztHQUFNRCxNOztLQUFBQSxNO0FBc0NTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leGFtcGxlLjc4NmQ0MzZmZmZlZTUyYTJmODA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTGF5b3V0LnNjc3MnXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGhhbmRlbE9wZW49KCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9wZW5pbmcgb3IgY2xvc2luZ1wiKTtcclxuICAgICAgICBzZXRJc09wZW4oIWlzT3BlbilcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1haW59PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkxvZ29Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVXNlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlclxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkJvZHl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5OYXZCYXJ9ICR7aXNPcGVuJiZzdHlsZXMuTmF2QmFyT3Blbn1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRlbE9wZW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNPcGVuP1wiQ1wiOlwiT1wifVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5Db250YWluZXJ9ICR7aXNPcGVuJiZzdHlsZXMuQ29udGFpbmVyT3Blbn1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhFQURFUlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQm9keUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=