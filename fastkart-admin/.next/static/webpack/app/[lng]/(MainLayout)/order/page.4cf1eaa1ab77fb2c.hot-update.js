/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[lng]/(MainLayout)/order/page",{

/***/ "(app-pages-browser)/./src/Components/Orders/AllOrdersTable.js":
/*!*************************************************!*\
  !*** ./src/Components/Orders/AllOrdersTable.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
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
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./src/app/[lng]/(MainLayout)/order/page.js":
/*!**************************************************!*\
  !*** ./src/app/[lng]/(MainLayout)/order/page.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"(app-pages-browser)/./node_modules/reactstrap/esm/Col.js\");\n/* harmony import */ var _Components_Orders_AllOrdersTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Orders/AllOrdersTable */ \"(app-pages-browser)/./src/Components/Orders/AllOrdersTable.js\");\n/* harmony import */ var _Components_Orders_AllOrdersTable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Components_Orders_AllOrdersTable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Utils_AxiosUtils_API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Utils/AxiosUtils/API */ \"(app-pages-browser)/./src/Utils/AxiosUtils/API.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Order = ()=>{\n    _s();\n    const [isCheck, setIsCheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        sm: \"12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Components_Orders_AllOrdersTable__WEBPACK_IMPORTED_MODULE_2___default()), {\n            url: _Utils_AxiosUtils_API__WEBPACK_IMPORTED_MODULE_3__.OrderAPI,\n            dateRange: true,\n            moduleName: \"Order\",\n            isCheck: isCheck,\n            setIsCheck: setIsCheck\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\marke\\\\Downloads\\\\Admin-panel-e-commerce\\\\fastkart-admin\\\\src\\\\app\\\\[lng]\\\\(MainLayout)\\\\order\\\\page.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\marke\\\\Downloads\\\\Admin-panel-e-commerce\\\\fastkart-admin\\\\src\\\\app\\\\[lng]\\\\(MainLayout)\\\\order\\\\page.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Order, \"DbRf9GC86zN9niQKovQ5+XWRyTk=\");\n_c = Order;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Order);\nvar _c;\n$RefreshReg$(_c, \"Order\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvW2xuZ10vKE1haW5MYXlvdXQpL29yZGVyL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN3QztBQUNQO0FBQytCO0FBQ2Q7QUFFbEQsTUFBTUssUUFBUTs7SUFDWixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUN6QyxxQkFDRSw4REFBQ0Msa0RBQUdBO1FBQUNNLElBQUc7a0JBQ04sNEVBQUNMLDBFQUFjQTtZQUFDTSxLQUFLTCwyREFBUUE7WUFBRU0sV0FBVztZQUFNQyxZQUFXO1lBQVFMLFNBQVNBO1lBQVNDLFlBQVlBOzs7Ozs7Ozs7OztBQUd2RztHQVBNRjtLQUFBQTtBQVNOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvW2xuZ10vKE1haW5MYXlvdXQpL29yZGVyL3BhZ2UuanM/M2RiOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29sIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBBbGxPcmRlcnNUYWJsZSBmcm9tIFwiQC9Db21wb25lbnRzL09yZGVycy9BbGxPcmRlcnNUYWJsZVwiO1xuaW1wb3J0IHsgT3JkZXJBUEkgfSBmcm9tIFwiQC9VdGlscy9BeGlvc1V0aWxzL0FQSVwiO1xuXG5jb25zdCBPcmRlciA9ICgpID0+IHtcbiAgY29uc3QgW2lzQ2hlY2ssIHNldElzQ2hlY2tdID0gdXNlU3RhdGUoW10pO1xuICByZXR1cm4gKFxuICAgIDxDb2wgc209XCIxMlwiPlxuICAgICAgPEFsbE9yZGVyc1RhYmxlIHVybD17T3JkZXJBUEl9IGRhdGVSYW5nZT17dHJ1ZX0gbW9kdWxlTmFtZT1cIk9yZGVyXCIgaXNDaGVjaz17aXNDaGVja30gc2V0SXNDaGVjaz17c2V0SXNDaGVja30gLz5cbiAgICA8L0NvbD5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgT3JkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbCIsIkFsbE9yZGVyc1RhYmxlIiwiT3JkZXJBUEkiLCJPcmRlciIsImlzQ2hlY2siLCJzZXRJc0NoZWNrIiwic20iLCJ1cmwiLCJkYXRlUmFuZ2UiLCJtb2R1bGVOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/[lng]/(MainLayout)/order/page.js\n"));

/***/ })

});