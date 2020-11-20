webpackHotUpdate_N_E("pages/login",{

/***/ "./frontend/LoginSpotify/components/index.jsx":
/*!****************************************************!*\
  !*** ./frontend/LoginSpotify/components/index.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_demis_Desktop_PROYECTO_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_demis_Desktop_PROYECTO_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_demis_Desktop_PROYECTO_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_demis_Desktop_PROYECTO_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_demis_Desktop_PROYECTO_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Login_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Login.scss */ "./frontend/LoginSpotify/styles/Login.scss");
/* harmony import */ var _styles_Login_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\demis\\Desktop\\PROYECTO\\frontend\\LoginSpotify\\components\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_demis_Desktop_PROYECTO_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var LoginComponent = function LoginComponent() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    user: "",
    password: ""
  }),
      credential = _useState[0],
      setCredential = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      pokemonData = _useState2[0],
      setPokemonData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(3213),
      variable = _useState3[0],
      setVariable = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])( /*#__PURE__*/Object(C_Users_demis_Desktop_PROYECTO_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_demis_Desktop_PROYECTO_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var dataGot;
    return C_Users_demis_Desktop_PROYECTO_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getData();

          case 2:
            dataGot = _context.sent;
            setPokemonData(dataGot);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  var getData = function getData() {
    var data = axios__WEBPACK_IMPORTED_MODULE_6___default()({
      method: 'get',
      url: 'https://pokeapi.co/api/v2/pokemon/pikachu'
    }).then(function (response) {
      return response;
    });
    return data;
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
  };

  var handleChange = function handleChange(_ref2) {
    var _ref2$target = _ref2.target,
        value = _ref2$target.value,
        name = _ref2$target.name;
    setCredential(function (credential) {
      return _objectSpread(_objectSpread({}, credential), {}, Object(C_Users_demis_Desktop_PROYECTO_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value));
    });
  };

  console.log("datos obtenidos", pokemonData);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: _styles_Login_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Main,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: _styles_Login_scss__WEBPACK_IMPORTED_MODULE_5___default.a.LogoContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
          src: "/images/logog.png",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: _styles_Login_scss__WEBPACK_IMPORTED_MODULE_5___default.a.BodyContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: _styles_Login_scss__WEBPACK_IMPORTED_MODULE_5___default.a.InputContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            name: "user",
            onChange: handleChange,
            placeholder: "Usuario",
            type: "text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: _styles_Login_scss__WEBPACK_IMPORTED_MODULE_5___default.a.InputContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            name: "password",
            onChange: handleChange,
            placeholder: "Contrase\xF1a",
            type: "password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: _styles_Login_scss__WEBPACK_IMPORTED_MODULE_5___default.a.InputContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            type: "submit",
            children: "Ingresar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, _this);
};

_s(LoginComponent, "JgIVMCZ0pfxQnbl4AKElEFcx5oE=");

_c = LoginComponent;
/* harmony default export */ __webpack_exports__["default"] = (LoginComponent);

var _c;

$RefreshReg$(_c, "LoginComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvTG9naW5TcG90aWZ5L2NvbXBvbmVudHMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkxvZ2luQ29tcG9uZW50IiwidXNlU3RhdGUiLCJ1c2VyIiwicGFzc3dvcmQiLCJjcmVkZW50aWFsIiwic2V0Q3JlZGVudGlhbCIsInBva2Vtb25EYXRhIiwic2V0UG9rZW1vbkRhdGEiLCJ2YXJpYWJsZSIsInNldFZhcmlhYmxlIiwidXNlRWZmZWN0IiwiZ2V0RGF0YSIsImRhdGFHb3QiLCJkYXRhIiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiTWFpbiIsIkxvZ29Db250YWluZXIiLCJCb2R5Q29udGFpbmVyIiwiSW5wdXRDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFFV0Msc0RBQVEsQ0FBQztBQUN6Q0MsUUFBSSxFQUFFLEVBRG1DO0FBRXpDQyxZQUFRLEVBQUU7QUFGK0IsR0FBRCxDQUZuQjtBQUFBLE1BRWxCQyxVQUZrQjtBQUFBLE1BRU5DLGFBRk07O0FBQUEsbUJBT2FKLHNEQUFRLEVBUHJCO0FBQUEsTUFPbEJLLFdBUGtCO0FBQUEsTUFPTEMsY0FQSzs7QUFBQSxtQkFTT04sc0RBQVEsQ0FBQyxJQUFELENBVGY7QUFBQSxNQVNsQk8sUUFUa0I7QUFBQSxNQVNSQyxXQVRROztBQVd6QkMseURBQVMsc1JBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDZ0JDLE9BQU8sRUFEdkI7O0FBQUE7QUFDQUMsbUJBREE7QUFHTkwsMEJBQWMsQ0FBQ0ssT0FBRCxDQUFkOztBQUhNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFJTixFQUpNLENBQVQ7O0FBTUEsTUFBTUQsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQixRQUFNRSxJQUFJLEdBQUdDLDRDQUFLLENBQUM7QUFDZkMsWUFBTSxFQUFFLEtBRE87QUFFZkMsU0FBRyxFQUFFO0FBRlUsS0FBRCxDQUFMLENBR1ZDLElBSFUsQ0FHTCxVQUFBQyxRQUFRLEVBQUk7QUFDaEIsYUFBT0EsUUFBUDtBQUNILEtBTFksQ0FBYjtBQU1BLFdBQU9MLElBQVA7QUFDSCxHQVJEOztBQWFBLE1BQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUN4QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0gsR0FGRDs7QUFHQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxRQUFpQztBQUFBLDZCQUE5QkMsTUFBOEI7QUFBQSxRQUFwQkMsS0FBb0IsZ0JBQXBCQSxLQUFvQjtBQUFBLFFBQWJDLElBQWEsZ0JBQWJBLElBQWE7QUFFbERwQixpQkFBYSxDQUFDLFVBQUFELFVBQVU7QUFBQSw2Q0FDakJBLFVBRGlCLGdKQUVuQnFCLElBRm1CLEVBRVpELEtBRlk7QUFBQSxLQUFYLENBQWI7QUFNSCxHQVJEOztBQVNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQnJCLFdBQS9CO0FBQ0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUVzQix5REFBTSxDQUFDQyxJQUF2QjtBQUFBLDJCQUNJO0FBQU0sY0FBUSxFQUFFVixZQUFoQjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRVMseURBQU0sQ0FBQ0UsYUFBdkI7QUFBQSwrQkFDSTtBQUFLLGFBQUcsRUFBQyxtQkFBVDtBQUE2QixhQUFHLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJO0FBQUssaUJBQVMsRUFBRUYseURBQU0sQ0FBQ0csYUFBdkI7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUVILHlEQUFNLENBQUNJLGNBQXZCO0FBQUEsaUNBQ0k7QUFBTyxnQkFBSSxFQUFDLE1BQVo7QUFBbUIsb0JBQVEsRUFBRVYsWUFBN0I7QUFBMkMsdUJBQVcsRUFBQyxTQUF2RDtBQUFpRSxnQkFBSSxFQUFDO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUk7QUFBSyxtQkFBUyxFQUFFTSx5REFBTSxDQUFDSSxjQUF2QjtBQUFBLGlDQUNJO0FBQU8sZ0JBQUksRUFBQyxVQUFaO0FBQXVCLG9CQUFRLEVBQUVWLFlBQWpDO0FBQStDLHVCQUFXLEVBQUMsZUFBM0Q7QUFBd0UsZ0JBQUksRUFBQztBQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQU9JO0FBQUssbUJBQVMsRUFBRU0seURBQU0sQ0FBQ0ksY0FBdkI7QUFBQSxpQ0FDSTtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBc0JILENBakVEOztHQUFNaEMsYzs7S0FBQUEsYztBQW1FU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMGFjMDJjMzk1MmE0NTVkZGExZjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0xvZ2luLnNjc3MnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuY29uc3QgTG9naW5Db21wb25lbnQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2NyZWRlbnRpYWwsIHNldENyZWRlbnRpYWxdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXI6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCJcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgW3Bva2Vtb25EYXRhLCBzZXRQb2tlbW9uRGF0YV0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgY29uc3QgW3ZhcmlhYmxlLCBzZXRWYXJpYWJsZV0gPSB1c2VTdGF0ZSgzMjEzKVxyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YUdvdCA9IGF3YWl0IGdldERhdGEoKVxyXG5cclxuICAgICAgICBzZXRQb2tlbW9uRGF0YShkYXRhR290KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vcGlrYWNodSdcclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IHZhbHVlLCBuYW1lIH0gfSkgPT4ge1xyXG5cclxuICAgICAgICBzZXRDcmVkZW50aWFsKGNyZWRlbnRpYWwgPT4gKHtcclxuICAgICAgICAgICAgLi4uY3JlZGVudGlhbCxcclxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxyXG5cclxuICAgICAgICB9KSlcclxuXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcImRhdG9zIG9idGVuaWRvc1wiLCBwb2tlbW9uRGF0YSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWFpbn0+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Mb2dvQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nb2cucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Cb2R5Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLklucHV0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJ1c2VyXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJVc3VhcmlvXCIgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJDb250cmFzZcOxYVwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5ncmVzYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkNvbXBvbmVudFxyXG4iXSwic291cmNlUm9vdCI6IiJ9