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
            console.log("GUardando en dataGot", dataGot);
            setPokemonData(dataGot);

          case 5:
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
          lineNumber: 49,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
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
            lineNumber: 53,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
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
            lineNumber: 56,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: _styles_Login_scss__WEBPACK_IMPORTED_MODULE_5___default.a.InputContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            type: "submit",
            children: "Ingresar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, _this);
};

_s(LoginComponent, "tCBrxNIjAO1lykgPbqt0tbIJJys=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvTG9naW5TcG90aWZ5L2NvbXBvbmVudHMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkxvZ2luQ29tcG9uZW50IiwidXNlU3RhdGUiLCJ1c2VyIiwicGFzc3dvcmQiLCJjcmVkZW50aWFsIiwic2V0Q3JlZGVudGlhbCIsInBva2Vtb25EYXRhIiwic2V0UG9rZW1vbkRhdGEiLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwiZGF0YUdvdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJzdHlsZXMiLCJNYWluIiwiTG9nb0NvbnRhaW5lciIsIkJvZHlDb250YWluZXIiLCJJbnB1dENvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUFBLGtCQUVXQyxzREFBUSxDQUFDO0FBQ3pDQyxRQUFJLEVBQUUsRUFEbUM7QUFFekNDLFlBQVEsRUFBRTtBQUYrQixHQUFELENBRm5CO0FBQUEsTUFFbEJDLFVBRmtCO0FBQUEsTUFFTkMsYUFGTTs7QUFBQSxtQkFPYUosc0RBQVEsRUFQckI7QUFBQSxNQU9sQkssV0FQa0I7QUFBQSxNQU9MQyxjQVBLOztBQVN6QkMseURBQVMsc1JBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDZ0JDLE9BQU8sRUFEdkI7O0FBQUE7QUFDQUMsbUJBREE7QUFFTkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaLEVBQW9DRixPQUFwQztBQUNBSCwwQkFBYyxDQUFDRyxPQUFELENBQWQ7O0FBSE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQUlOLEVBSk0sQ0FBVDs7QUFNQSxNQUFNRCxPQUFPLEdBQUksU0FBWEEsT0FBVyxHQUFNO0FBQ25CLFFBQU1JLElBQUksR0FBSUMsNENBQUssQ0FBQztBQUNoQkMsWUFBTSxFQUFFLEtBRFE7QUFFaEJDLFNBQUcsRUFBRTtBQUZXLEtBQUQsQ0FBTCxDQUdYQyxJQUhXLENBR04sVUFBQUMsUUFBUSxFQUFJO0FBQ2hCLGFBQU9BLFFBQVA7QUFDSCxLQUxhLENBQWQ7QUFNQSxXQUFPTCxJQUFQO0FBQ0gsR0FSRDs7QUFhQSxNQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDeEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNILEdBRkQ7O0FBR0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsUUFBaUM7QUFBQSw2QkFBOUJDLE1BQThCO0FBQUEsUUFBcEJDLEtBQW9CLGdCQUFwQkEsS0FBb0I7QUFBQSxRQUFiQyxJQUFhLGdCQUFiQSxJQUFhO0FBRWxEcEIsaUJBQWEsQ0FBQyxVQUFBRCxVQUFVO0FBQUEsNkNBQ2pCQSxVQURpQixnSkFFbkJxQixJQUZtQixFQUVaRCxLQUZZO0FBQUEsS0FBWCxDQUFiO0FBTUgsR0FSRDs7QUFVQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUUseURBQU0sQ0FBQ0MsSUFBdkI7QUFBQSwyQkFDSTtBQUFNLGNBQVEsRUFBRVIsWUFBaEI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVPLHlEQUFNLENBQUNFLGFBQXZCO0FBQUEsK0JBQ0k7QUFBSyxhQUFHLEVBQUMsbUJBQVQ7QUFBNkIsYUFBRyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUFLLGlCQUFTLEVBQUVGLHlEQUFNLENBQUNHLGFBQXZCO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFFSCx5REFBTSxDQUFDSSxjQUF2QjtBQUFBLGlDQUNJO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLG9CQUFRLEVBQUVSLFlBQTdCO0FBQTJDLHVCQUFXLEVBQUMsU0FBdkQ7QUFBaUUsZ0JBQUksRUFBQztBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUlJO0FBQUssbUJBQVMsRUFBRUkseURBQU0sQ0FBQ0ksY0FBdkI7QUFBQSxpQ0FDSTtBQUFPLGdCQUFJLEVBQUMsVUFBWjtBQUF1QixvQkFBUSxFQUFFUixZQUFqQztBQUErQyx1QkFBVyxFQUFDLGVBQTNEO0FBQXdFLGdCQUFJLEVBQUM7QUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosZUFPSTtBQUFLLG1CQUFTLEVBQUVJLHlEQUFNLENBQUNJLGNBQXZCO0FBQUEsaUNBQ0k7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXNCSCxDQS9ERDs7R0FBTTlCLGM7O0tBQUFBLGM7QUFpRVNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjI3ZTRlYmZmMTQ4MDVkY2I1YWYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Mb2dpbi5zY3NzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmNvbnN0IExvZ2luQ29tcG9uZW50ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjcmVkZW50aWFsLCBzZXRDcmVkZW50aWFsXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VyOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IFtwb2tlbW9uRGF0YSwgc2V0UG9rZW1vbkRhdGFdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYygpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhR290ID0gYXdhaXQgZ2V0RGF0YSgpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHVWFyZGFuZG8gZW4gZGF0YUdvdFwiLCBkYXRhR290KTtcclxuICAgICAgICBzZXRQb2tlbW9uRGF0YShkYXRhR290KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9ICAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9ICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi9waWthY2h1J1xyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgdmFsdWUsIG5hbWUgfSB9KSA9PiB7XHJcblxyXG4gICAgICAgIHNldENyZWRlbnRpYWwoY3JlZGVudGlhbCA9PiAoe1xyXG4gICAgICAgICAgICAuLi5jcmVkZW50aWFsLFxyXG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlXHJcblxyXG4gICAgICAgIH0pKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWFpbn0+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Mb2dvQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nb2cucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Cb2R5Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLklucHV0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJ1c2VyXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJVc3VhcmlvXCIgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJDb250cmFzZcOxYVwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5ncmVzYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkNvbXBvbmVudFxyXG4iXSwic291cmNlUm9vdCI6IiJ9