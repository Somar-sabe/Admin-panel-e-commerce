"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[lng]/(MainLayout)/layout",{

/***/ "(app-pages-browser)/./src/Layout/Sidebar/MenuData.js":
/*!****************************************!*\
  !*** ./src/Layout/Sidebar/MenuData.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_RiArticleLine_RiCoinsLine_RiContactsLine_RiCoupon2Line_RiCurrencyFill_RiExchangeDollarFill_RiHomeLine_RiImageLine_RiListUnordered_RiPagesLine_RiPercentLine_RiQuestionnaireLine_RiRefund2Line_RiSettings3Line_RiStore2Line_RiStore3Line_RiTruckLine_RiWalletLine_RiWindowLine_react_icons_ri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=RiArticleLine,RiCoinsLine,RiContactsLine,RiCoupon2Line,RiCurrencyFill,RiExchangeDollarFill,RiHomeLine,RiImageLine,RiListUnordered,RiPagesLine,RiPercentLine,RiQuestionnaireLine,RiRefund2Line,RiSettings3Line,RiStore2Line,RiStore3Line,RiTruckLine,RiWalletLine,RiWindowLine!=!react-icons/ri */ \"(app-pages-browser)/./node_modules/react-icons/ri/index.esm.js\");\n\n\nconst MENUITEMS = [\n    {\n        title: \"Dashboard\",\n        displayTitle: \"Dashboard\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RiArticleLine_RiCoinsLine_RiContactsLine_RiCoupon2Line_RiCurrencyFill_RiExchangeDollarFill_RiHomeLine_RiImageLine_RiListUnordered_RiPagesLine_RiPercentLine_RiQuestionnaireLine_RiRefund2Line_RiSettings3Line_RiStore2Line_RiStore3Line_RiTruckLine_RiWalletLine_RiWindowLine_react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiHomeLine, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\marke\\\\Downloads\\\\Admin-panel-e-commerce\\\\fastkart-admin\\\\src\\\\Layout\\\\Sidebar\\\\MenuData.js\",\n            lineNumber: 7,\n            columnNumber: 11\n        }, undefined),\n        path: \"/dashboard\",\n        type: \"link\"\n    },\n    {\n        title: \"Users\",\n        displayTitle: \"Users\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RiArticleLine_RiCoinsLine_RiContactsLine_RiCoupon2Line_RiCurrencyFill_RiExchangeDollarFill_RiHomeLine_RiImageLine_RiListUnordered_RiPagesLine_RiPercentLine_RiQuestionnaireLine_RiRefund2Line_RiSettings3Line_RiStore2Line_RiStore3Line_RiTruckLine_RiWalletLine_RiWindowLine_react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiContactsLine, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\marke\\\\Downloads\\\\Admin-panel-e-commerce\\\\fastkart-admin\\\\src\\\\Layout\\\\Sidebar\\\\MenuData.js\",\n            lineNumber: 14,\n            columnNumber: 11\n        }, undefined),\n        type: \"sub\",\n        children: [\n            {\n                title: \"AddUser\",\n                path: \"/user/create\",\n                displayTitle: \"AddUser\",\n                permission: [\n                    \"user.create\"\n                ]\n            },\n            {\n                title: \"AllUsers\",\n                path: \"/user\",\n                displayTitle: \"AllUsers\",\n                permission: [\n                    \"user.index\"\n                ]\n            },\n            {\n                title: \"Role\",\n                path: \"/role\",\n                displayTitle: \"Role\",\n                permission: [\n                    \"role.index\"\n                ]\n            }\n        ]\n    },\n    {\n        title: \"Products\",\n        displayTitle: \"Products\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RiArticleLine_RiCoinsLine_RiContactsLine_RiCoupon2Line_RiCurrencyFill_RiExchangeDollarFill_RiHomeLine_RiImageLine_RiListUnordered_RiPagesLine_RiPercentLine_RiQuestionnaireLine_RiRefund2Line_RiSettings3Line_RiStore2Line_RiStore3Line_RiTruckLine_RiWalletLine_RiWindowLine_react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiStore3Line, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\marke\\\\Downloads\\\\Admin-panel-e-commerce\\\\fastkart-admin\\\\src\\\\Layout\\\\Sidebar\\\\MenuData.js\",\n            lineNumber: 25,\n            columnNumber: 11\n        }, undefined),\n        type: \"sub\",\n        children: [\n            {\n                title: \"AddProduct\",\n                path: \"/product/create\",\n                displayTitle: \"Add Product\",\n                permission: [\n                    \"product.create\"\n                ]\n            },\n            {\n                title: \"AllProducts\",\n                path: \"/product\",\n                displayTitle: \"All Product\",\n                badgeType: \"badge bg-warning text-dark ml-3\",\n                badgeValue: 0,\n                permission: [\n                    \"product.create\"\n                ]\n            },\n            {\n                title: \"Attributes\",\n                path: \"/attribute\",\n                displayTitle: \"All Attributes\",\n                permission: [\n                    \"attribute.index\",\n                    \"attribute.create\"\n                ]\n            },\n            {\n                title: \"Categories\",\n                path: \"/category\",\n                displayTitle: \"Categories\",\n                permission: [\n                    \"category.index\"\n                ]\n            },\n            {\n                title: \"Tags\",\n                path: \"/tag\",\n                displayTitle: \"All Tag\",\n                permission: [\n                    \"tag.index\",\n                    \"tag.create\"\n                ]\n            },\n            {\n                title: \"Q&A\",\n                path: \"/qna\",\n                displayTitle: \"All Tag\",\n                permission: [\n                    \"question_and_answer.index\",\n                    \"question_and_answer.create\"\n                ]\n            }\n        ]\n    },\n    {\n        title: \"Stores\",\n        displayTitle: \"Store\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RiArticleLine_RiCoinsLine_RiContactsLine_RiCoupon2Line_RiCurrencyFill_RiExchangeDollarFill_RiHomeLine_RiImageLine_RiListUnordered_RiPagesLine_RiPercentLine_RiQuestionnaireLine_RiRefund2Line_RiSettings3Line_RiStore2Line_RiStore3Line_RiTruckLine_RiWalletLine_RiWindowLine_react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiStore2Line, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\marke\\\\Downloads\\\\Admin-panel-e-commerce\\\\fastkart-admin\\\\src\\\\Layout\\\\Sidebar\\\\MenuData.js\",\n            lineNumber: 39,\n            columnNumber: 11\n        }, undefined),\n        type: \"sub\",\n        children: [\n            {\n                title: \"AddStore\",\n                path: \"/store/create\",\n                displayTitle: \"Add Store\",\n                permission: [\n                    \"store.create\"\n                ]\n            },\n            {\n                title: \"AllStores\",\n                path: \"/store\",\n                displayTitle: \"All Stores\",\n                badgeType: \"badge bg-warning text-dark ml-3\",\n                badgeValue: 0,\n                permission: [\n                    \"store.index\"\n                ]\n            },\n            {\n                title: \"Wallet\",\n                path: \"/vendor_wallet\",\n                displayTitle: \"Wallets\",\n                permission: [\n                    \"vendor_wallet.index\"\n                ]\n            },\n            {\n                title: \"CommissionHistory\",\n                path: \"/commission_history\",\n                displayTitle: \"Commission History\",\n                permission: [\n                    \"commission_history.index\"\n                ]\n            },\n            {\n                title: \"PaymentDetails\",\n                path: \"/payment_account\",\n                displayTitle: \"Payment Details\",\n                permission: [\n                    \"payment_account.create\"\n                ]\n            },\n            {\n                title: \"Withdrawal\",\n                displayTitle: \"Withdrawal\",\n                path: \"/withdraw_request\",\n                badgeType: \"badge bg-warning text-dark ml-3\",\n                badgeValue: 0,\n                permission: [\n                    \"withdraw_request.index\"\n                ]\n            }\n        ]\n    },\n    {\n        title: \"Orders\",\n        displayTitle: \"Orders\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RiArticleLine_RiCoinsLine_RiContactsLine_RiCoupon2Line_RiCurrencyFill_RiExchangeDollarFill_RiHomeLine_RiImageLine_RiListUnordered_RiPagesLine_RiPercentLine_RiQuestionnaireLine_RiRefund2Line_RiSettings3Line_RiStore2Line_RiStore3Line_RiTruckLine_RiWalletLine_RiWindowLine_react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiListUnordered, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\marke\\\\Downloads\\\\Admin-panel-e-commerce\\\\fastkart-admin\\\\src\\\\Layout\\\\Sidebar\\\\MenuData.js\",\n            lineNumber: 53,\n            columnNumber: 11\n        }, undefined),\n        type: \"sub\",\n        children: [\n            {\n                title: \"AllOrders\",\n                path: \"/order\",\n                displayTitle: \"All Orders\",\n                permission: [\n                    \"order.index\"\n                ]\n            },\n            {\n                title: \"CreateOrder\",\n                path: \"/order/create\",\n                displayTitle: \"Create Order\",\n                permission: [\n                    \"order.create\"\n                ]\n            }\n        ]\n    },\n    {\n        title: \"Media\",\n        displayTitle: \"Media\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RiArticleLine_RiCoinsLine_RiContactsLine_RiCoupon2Line_RiCurrencyFill_RiExchangeDollarFill_RiHomeLine_RiImageLine_RiListUnordered_RiPagesLine_RiPercentLine_RiQuestionnaireLine_RiRefund2Line_RiSettings3Line_RiStore2Line_RiStore3Line_RiTruckLine_RiWalletLine_RiWindowLine_react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiImageLine, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\marke\\\\Downloads\\\\Admin-panel-e-commerce\\\\fastkart-admin\\\\src\\\\Layout\\\\Sidebar\\\\MenuData.js\",\n            lineNumber: 62,\n            columnNumber: 11\n        }, undefined),\n        path: \"/attachment\",\n        permission: [\n            \"attachment.index\",\n            \"attachment.create\"\n        ],\n        type: \"link\"\n    },\n    {\n        title: \"Blog\",\n        displayTitle: \"Blog\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RiArticleLine_RiCoinsLine_RiContactsLine_RiCoupon2Line_RiCurrencyFill_RiExchangeDollarFill_RiHomeLine_RiImageLine_RiListUnordered_RiPagesLine_RiPercentLine_RiQuestionnaireLine_RiRefund2Line_RiSettings3Line_RiStore2Line_RiStore3Line_RiTruckLine_RiWalletLine_RiWindowLine_react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiArticleLine, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\marke\\\\Downloads\\\\Admin-panel-e-commerce\\\\fastkart-admin\\\\src\\\\Layout\\\\Sidebar\\\\MenuData.js\",\n            lineNumber: 70,\n            columnNumber: 11\n        }, undefined),\n        type: \"sub\",\n        children: [\n            {\n                title: \"AllBlogs\",\n                path: \"/blog\",\n                displayTitle: \"All Blog\",\n                permission: [\n                    \"blog.index\"\n                ]\n            },\n            {\n                title: \"Categories\",\n                path: \"/blog/category\",\n                displayTitle: \"Category\",\n                permission: [\n                    \"category.index\",\n                    \"category.create\"\n                ]\n            },\n            {\n                title: \"Tags\",\n                path: \"/blog/tag\",\n                displayTitle: \"Tags\",\n                permission: [\n                    \"tag.index\",\n                    \"tag.create\"\n                ]\n            }\n        ]\n    },\n    {\n        title: \"Reviews\",\n        displayTitle: \"Reviews\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RiArticleLine_RiCoinsLine_RiContactsLine_RiCoupon2Line_RiCurrencyFill_RiExchangeDollarFill_RiHomeLine_RiImageLine_RiListUnordered_RiPagesLine_RiPercentLine_RiQuestionnaireLine_RiRefund2Line_RiSettings3Line_RiStore2Line_RiStore3Line_RiTruckLine_RiWalletLine_RiWindowLine_react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiRefund2Line, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\marke\\\\Downloads\\\\Admin-panel-e-commerce\\\\fastkart-admin\\\\src\\\\Layout\\\\Sidebar\\\\MenuData.js\",\n            lineNumber: 83,\n            columnNumber: 11\n        }, undefined),\n        path: \"/review\",\n        permission: [\n            \"review.index\"\n        ],\n        type: \"link\"\n    },\n    {\n        title: \"FAQ's\",\n        displayTitle: \"FAQ's\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RiArticleLine_RiCoinsLine_RiContactsLine_RiCoupon2Line_RiCurrencyFill_RiExchangeDollarFill_RiHomeLine_RiImageLine_RiListUnordered_RiPagesLine_RiPercentLine_RiQuestionnaireLine_RiRefund2Line_RiSettings3Line_RiStore2Line_RiStore3Line_RiTruckLine_RiWalletLine_RiWindowLine_react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiQuestionnaireLine, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\marke\\\\Downloads\\\\Admin-panel-e-commerce\\\\fastkart-admin\\\\src\\\\Layout\\\\Sidebar\\\\MenuData.js\",\n            lineNumber: 91,\n            columnNumber: 11\n        }, undefined),\n        path: \"/faq\",\n        permission: [\n            \"faq.index\"\n        ],\n        type: \"link\"\n    },\n    {\n        title: \"StoreFront\",\n        displayTitle: \"Store Front\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RiArticleLine_RiCoinsLine_RiContactsLine_RiCoupon2Line_RiCurrencyFill_RiExchangeDollarFill_RiHomeLine_RiImageLine_RiListUnordered_RiPagesLine_RiPercentLine_RiQuestionnaireLine_RiRefund2Line_RiSettings3Line_RiStore2Line_RiStore3Line_RiTruckLine_RiWalletLine_RiWindowLine_react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiWindowLine, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\marke\\\\Downloads\\\\Admin-panel-e-commerce\\\\fastkart-admin\\\\src\\\\Layout\\\\Sidebar\\\\MenuData.js\",\n            lineNumber: 99,\n            columnNumber: 11\n        }, undefined),\n        type: \"sub\",\n        children: [\n            {\n                title: \"Themes\",\n                path: \"/theme\",\n                displayTitle: \"Theme\",\n                permission: [\n                    \"theme.index\"\n                ]\n            },\n            {\n                title: \"ThemeOptions\",\n                path: \"/theme_option\",\n                displayTitle: \"Theme Option\",\n                permission: [\n                    \"theme_option.index\"\n                ]\n            }\n        ]\n    },\n    {\n        title: \"Settings\",\n        displayTitle: \"Settings\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RiArticleLine_RiCoinsLine_RiContactsLine_RiCoupon2Line_RiCurrencyFill_RiExchangeDollarFill_RiHomeLine_RiImageLine_RiListUnordered_RiPagesLine_RiPercentLine_RiQuestionnaireLine_RiRefund2Line_RiSettings3Line_RiStore2Line_RiStore3Line_RiTruckLine_RiWalletLine_RiWindowLine_react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiSettings3Line, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\marke\\\\Downloads\\\\Admin-panel-e-commerce\\\\fastkart-admin\\\\src\\\\Layout\\\\Sidebar\\\\MenuData.js\",\n            lineNumber: 109,\n            columnNumber: 11\n        }, undefined),\n        path: \"/setting\",\n        permission: [\n            \"setting.index\"\n        ],\n        type: \"link\"\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (MENUITEMS);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9MYXlvdXQvU2lkZWJhci9NZW51RGF0YS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWlVO0FBRWpVLE1BQU1tQixZQUFZO0lBQ2hCO1FBQ0VDLE9BQU87UUFDUEMsY0FBYztRQUNkQyxvQkFBTSw4REFBQ2hCLDJWQUFVQTs7Ozs7UUFDakJpQixNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VKLE9BQU87UUFDUEMsY0FBYztRQUNkQyxvQkFBTSw4REFBQ3BCLCtWQUFjQTs7Ozs7UUFDckJzQixNQUFNO1FBQ05DLFVBQVU7WUFDUjtnQkFBRUwsT0FBTztnQkFBV0csTUFBTTtnQkFBZ0JGLGNBQWM7Z0JBQVdLLFlBQVk7b0JBQUM7aUJBQWM7WUFBQztZQUMvRjtnQkFBRU4sT0FBTztnQkFBWUcsTUFBTTtnQkFBU0YsY0FBYztnQkFBWUssWUFBWTtvQkFBQztpQkFBYTtZQUFDO1lBQ3pGO2dCQUFFTixPQUFPO2dCQUFRRyxNQUFNO2dCQUFTRixjQUFjO2dCQUFRSyxZQUFZO29CQUFDO2lCQUFhO1lBQUM7U0FDbEY7SUFDSDtJQUNBO1FBQ0VOLE9BQU87UUFDUEMsY0FBYztRQUNkQyxvQkFBTSw4REFBQ1AsNlZBQVlBOzs7OztRQUNuQlMsTUFBTTtRQUNOQyxVQUFVO1lBQ1I7Z0JBQUVMLE9BQU87Z0JBQWNHLE1BQU07Z0JBQW1CRixjQUFjO2dCQUFlSyxZQUFZO29CQUFDO2lCQUFpQjtZQUFDO1lBQzVHO2dCQUFFTixPQUFPO2dCQUFlRyxNQUFNO2dCQUFZRixjQUFjO2dCQUFlTSxXQUFXO2dCQUFtQ0MsWUFBWTtnQkFBR0YsWUFBWTtvQkFBQztpQkFBaUI7WUFBQztZQUNuSztnQkFBRU4sT0FBTztnQkFBY0csTUFBTTtnQkFBY0YsY0FBYztnQkFBa0JLLFlBQVk7b0JBQUM7b0JBQW1CO2lCQUFtQjtZQUFDO1lBQy9IO2dCQUFFTixPQUFPO2dCQUFjRyxNQUFNO2dCQUFhRixjQUFjO2dCQUFjSyxZQUFZO29CQUFDO2lC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QUVOLE9BQU87Z0JBQWdCRyxNQUFNO2dCQUFpQkYsY0FBYztnQkFBZ0JLLFlBQVk7b0JBQUM7aUJBQXFCO1lBQUU7U0FDbkg7SUFDSDtJQUNBO1FBQ0VOLE9BQU87UUFDUEMsY0FBYztRQUNkQyxvQkFBTSw4REFBQ1QsZ1dBQWVBOzs7OztRQUN0QlUsTUFBTTtRQUNORyxZQUFZO1lBQUM7U0FBZ0I7UUFDN0JGLE1BQU07SUFDUjtDQUNEO0FBRUQsK0RBQWVMLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0xheW91dC9TaWRlYmFyL01lbnVEYXRhLmpzP2I0ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmlBcnRpY2xlTGluZSwgUmlDb2luc0xpbmUsIFJpQ29udGFjdHNMaW5lLCBSaUNvdXBvbjJMaW5lLCBSaUN1cnJlbmN5RmlsbCwgUmlFeGNoYW5nZURvbGxhckZpbGwsIFJpSG9tZUxpbmUsIFJpSW1hZ2VMaW5lLCBSaUxpc3RVbm9yZGVyZWQsIFJpUGFnZXNMaW5lLCBSaVBlcmNlbnRMaW5lLCBSaVF1ZXN0aW9ubmFpcmVMaW5lLCBSaVJlZnVuZDJMaW5lLCBSaVNldHRpbmdzM0xpbmUsIFJpU3RvcmUyTGluZSwgUmlTdG9yZTNMaW5lLCBSaVRydWNrTGluZSwgUmlXYWxsZXRMaW5lLCBSaVdpbmRvd0xpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcblxuY29uc3QgTUVOVUlURU1TID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRGFzaGJvYXJkXCIsXG4gICAgZGlzcGxheVRpdGxlOiBcIkRhc2hib2FyZFwiLFxuICAgIGljb246IDxSaUhvbWVMaW5lIC8+LFxuICAgIHBhdGg6IFwiL2Rhc2hib2FyZFwiLFxuICAgIHR5cGU6IFwibGlua1wiXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJVc2Vyc1wiLFxuICAgIGRpc3BsYXlUaXRsZTogXCJVc2Vyc1wiLFxuICAgIGljb246IDxSaUNvbnRhY3RzTGluZSAvPixcbiAgICB0eXBlOiBcInN1YlwiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IHRpdGxlOiBcIkFkZFVzZXJcIiwgcGF0aDogXCIvdXNlci9jcmVhdGVcIiwgZGlzcGxheVRpdGxlOiBcIkFkZFVzZXJcIiwgcGVybWlzc2lvbjogW1widXNlci5jcmVhdGVcIl0gfSxcbiAgICAgIHsgdGl0bGU6IFwiQWxsVXNlcnNcIiwgcGF0aDogXCIvdXNlclwiLCBkaXNwbGF5VGl0bGU6IFwiQWxsVXNlcnNcIiwgcGVybWlzc2lvbjogW1widXNlci5pbmRleFwiXSB9LFxuICAgICAgeyB0aXRsZTogXCJSb2xlXCIsIHBhdGg6IFwiL3JvbGVcIiwgZGlzcGxheVRpdGxlOiBcIlJvbGVcIiwgcGVybWlzc2lvbjogW1wicm9sZS5pbmRleFwiXSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQcm9kdWN0c1wiLFxuICAgIGRpc3BsYXlUaXRsZTogXCJQcm9kdWN0c1wiLFxuICAgIGljb246IDxSaVN0b3JlM0xpbmUgLz4sXG4gICAgdHlwZTogXCJzdWJcIixcbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyB0aXRsZTogXCJBZGRQcm9kdWN0XCIsIHBhdGg6IFwiL3Byb2R1Y3QvY3JlYXRlXCIsIGRpc3BsYXlUaXRsZTogXCJBZGQgUHJvZHVjdFwiLCBwZXJtaXNzaW9uOiBbXCJwcm9kdWN0LmNyZWF0ZVwiXSB9LFxuICAgICAgeyB0aXRsZTogXCJBbGxQcm9kdWN0c1wiLCBwYXRoOiBcIi9wcm9kdWN0XCIsIGRpc3BsYXlUaXRsZTogXCJBbGwgUHJvZHVjdFwiLCBiYWRnZVR5cGU6ICdiYWRnZSBiZy13YXJuaW5nIHRleHQtZGFyayBtbC0zJywgYmFkZ2VWYWx1ZTogMCwgcGVybWlzc2lvbjogW1wicHJvZHVjdC5jcmVhdGVcIl0gfSxcbiAgICAgIHsgdGl0bGU6IFwiQXR0cmlidXRlc1wiLCBwYXRoOiBcIi9hdHRyaWJ1dGVcIiwgZGlzcGxheVRpdGxlOiBcIkFsbCBBdHRyaWJ1dGVzXCIsIHBlcm1pc3Npb246IFtcImF0dHJpYnV0ZS5pbmRleFwiLCBcImF0dHJpYnV0ZS5jcmVhdGVcIl0gfSxcbiAgICAgIHsgdGl0bGU6IFwiQ2F0ZWdvcmllc1wiLCBwYXRoOiBcIi9jYXRlZ29yeVwiLCBkaXNwbGF5VGl0bGU6IFwiQ2F0ZWdvcmllc1wiLCBwZXJtaXNzaW9uOiBbXCJjYXRlZ29yeS5pbmRleFwiXSB9LFxuICAgICAgeyB0aXRsZTogXCJUYWdzXCIsIHBhdGg6IFwiL3RhZ1wiLCBkaXNwbGF5VGl0bGU6IFwiQWxsIFRhZ1wiLCBwZXJtaXNzaW9uOiBbXCJ0YWcuaW5kZXhcIiwgXCJ0YWcuY3JlYXRlXCJdIH0sXG4gICAgICB7IHRpdGxlOiBcIlEmQVwiLCBwYXRoOiBcIi9xbmFcIiwgZGlzcGxheVRpdGxlOiBcIkFsbCBUYWdcIiwgcGVybWlzc2lvbjogW1wicXVlc3Rpb25fYW5kX2Fuc3dlci5pbmRleFwiLCBcInF1ZXN0aW9uX2FuZF9hbnN3ZXIuY3JlYXRlXCJdIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlN0b3Jlc1wiLFxuICAgIGRpc3BsYXlUaXRsZTogXCJTdG9yZVwiLFxuICAgIGljb246IDxSaVN0b3JlMkxpbmUgLz4sXG4gICAgdHlwZTogXCJzdWJcIixcbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyB0aXRsZTogXCJBZGRTdG9yZVwiLCBwYXRoOiBcIi9zdG9yZS9jcmVhdGVcIiwgZGlzcGxheVRpdGxlOiBcIkFkZCBTdG9yZVwiLCBwZXJtaXNzaW9uOiBbXCJzdG9yZS5jcmVhdGVcIl0gfSxcbiAgICAgIHsgdGl0bGU6IFwiQWxsU3RvcmVzXCIsIHBhdGg6IFwiL3N0b3JlXCIsIGRpc3BsYXlUaXRsZTogXCJBbGwgU3RvcmVzXCIsIGJhZGdlVHlwZTogJ2JhZGdlIGJnLXdhcm5pbmcgdGV4dC1kYXJrIG1sLTMnLCBiYWRnZVZhbHVlOiAwLCBwZXJtaXNzaW9uOiBbXCJzdG9yZS5pbmRleFwiXSB9LFxuICAgICAgeyB0aXRsZTogXCJXYWxsZXRcIiwgcGF0aDogXCIvdmVuZG9yX3dhbGxldFwiLCBkaXNwbGF5VGl0bGU6IFwiV2FsbGV0c1wiLCBwZXJtaXNzaW9uOiBbXCJ2ZW5kb3Jfd2FsbGV0LmluZGV4XCJdIH0sXG4gICAgICB7IHRpdGxlOiBcIkNvbW1pc3Npb25IaXN0b3J5XCIsIHBhdGg6IFwiL2NvbW1pc3Npb25faGlzdG9yeVwiLCBkaXNwbGF5VGl0bGU6IFwiQ29tbWlzc2lvbiBIaXN0b3J5XCIsIHBlcm1pc3Npb246IFtcImNvbW1pc3Npb25faGlzdG9yeS5pbmRleFwiXSB9LFxuICAgICAgeyB0aXRsZTogXCJQYXltZW50RGV0YWlsc1wiLCBwYXRoOiBcIi9wYXltZW50X2FjY291bnRcIiwgZGlzcGxheVRpdGxlOiBcIlBheW1lbnQgRGV0YWlsc1wiLCBwZXJtaXNzaW9uOiBbXCJwYXltZW50X2FjY291bnQuY3JlYXRlXCJdIH0sXG4gICAgICB7IHRpdGxlOiBcIldpdGhkcmF3YWxcIiwgZGlzcGxheVRpdGxlOiBcIldpdGhkcmF3YWxcIiwgcGF0aDogXCIvd2l0aGRyYXdfcmVxdWVzdFwiLCBiYWRnZVR5cGU6ICdiYWRnZSBiZy13YXJuaW5nIHRleHQtZGFyayBtbC0zJywgYmFkZ2VWYWx1ZTogMCwgcGVybWlzc2lvbjogW1wid2l0aGRyYXdfcmVxdWVzdC5pbmRleFwiXSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJPcmRlcnNcIixcbiAgICBkaXNwbGF5VGl0bGU6IFwiT3JkZXJzXCIsXG4gICAgaWNvbjogPFJpTGlzdFVub3JkZXJlZCAvPixcbiAgICB0eXBlOiBcInN1YlwiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IHRpdGxlOiBcIkFsbE9yZGVyc1wiLCBwYXRoOiBcIi9vcmRlclwiLCBkaXNwbGF5VGl0bGU6IFwiQWxsIE9yZGVyc1wiLCBwZXJtaXNzaW9uOiBbXCJvcmRlci5pbmRleFwiXSB9LFxuICAgICAgeyB0aXRsZTogXCJDcmVhdGVPcmRlclwiLCBwYXRoOiBcIi9vcmRlci9jcmVhdGVcIiwgZGlzcGxheVRpdGxlOiBcIkNyZWF0ZSBPcmRlclwiLCBwZXJtaXNzaW9uOiBbXCJvcmRlci5jcmVhdGVcIl0gfV0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNZWRpYVwiLFxuICAgIGRpc3BsYXlUaXRsZTogXCJNZWRpYVwiLFxuICAgIGljb246IDxSaUltYWdlTGluZSAvPixcbiAgICBwYXRoOiBcIi9hdHRhY2htZW50XCIsXG4gICAgcGVybWlzc2lvbjogW1wiYXR0YWNobWVudC5pbmRleFwiLCBcImF0dGFjaG1lbnQuY3JlYXRlXCJdLFxuICAgIHR5cGU6IFwibGlua1wiXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJCbG9nXCIsXG4gICAgZGlzcGxheVRpdGxlOiBcIkJsb2dcIixcbiAgICBpY29uOiA8UmlBcnRpY2xlTGluZSAvPixcbiAgICB0eXBlOiBcInN1YlwiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IHRpdGxlOiBcIkFsbEJsb2dzXCIsIHBhdGg6IFwiL2Jsb2dcIiwgZGlzcGxheVRpdGxlOiBcIkFsbCBCbG9nXCIsIHBlcm1pc3Npb246IFtcImJsb2cuaW5kZXhcIl0sIH0sXG4gICAgICB7IHRpdGxlOiBcIkNhdGVnb3JpZXNcIiwgcGF0aDogXCIvYmxvZy9jYXRlZ29yeVwiLCBkaXNwbGF5VGl0bGU6IFwiQ2F0ZWdvcnlcIiwgcGVybWlzc2lvbjogW1wiY2F0ZWdvcnkuaW5kZXhcIiwgXCJjYXRlZ29yeS5jcmVhdGVcIl0sIH0sXG4gICAgICB7IHRpdGxlOiBcIlRhZ3NcIiwgcGF0aDogXCIvYmxvZy90YWdcIiwgZGlzcGxheVRpdGxlOiBcIlRhZ3NcIiwgcGVybWlzc2lvbjogW1widGFnLmluZGV4XCIsIFwidGFnLmNyZWF0ZVwiXSB9LFxuICAgIF0sXG4gIH0sXG5cblxuICB7XG4gICAgdGl0bGU6IFwiUmV2aWV3c1wiLFxuICAgIGRpc3BsYXlUaXRsZTogXCJSZXZpZXdzXCIsXG4gICAgaWNvbjogPFJpUmVmdW5kMkxpbmUgLz4sXG4gICAgcGF0aDogXCIvcmV2aWV3XCIsXG4gICAgcGVybWlzc2lvbjogW1wicmV2aWV3LmluZGV4XCJdLFxuICAgIHR5cGU6IFwibGlua1wiXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJGQVEnc1wiLFxuICAgIGRpc3BsYXlUaXRsZTogXCJGQVEnc1wiLFxuICAgIGljb246IDxSaVF1ZXN0aW9ubmFpcmVMaW5lIC8+LFxuICAgIHBhdGg6IFwiL2ZhcVwiLFxuICAgIHBlcm1pc3Npb246IFtcImZhcS5pbmRleFwiXSxcbiAgICB0eXBlOiBcImxpbmtcIlxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiU3RvcmVGcm9udFwiLFxuICAgIGRpc3BsYXlUaXRsZTogXCJTdG9yZSBGcm9udFwiLFxuICAgIGljb246IDxSaVdpbmRvd0xpbmUgLz4sXG4gICAgdHlwZTogXCJzdWJcIixcbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyB0aXRsZTogXCJUaGVtZXNcIiwgcGF0aDogXCIvdGhlbWVcIiwgZGlzcGxheVRpdGxlOiBcIlRoZW1lXCIsIHBlcm1pc3Npb246IFtcInRoZW1lLmluZGV4XCJdLCB9LFxuICAgICAgeyB0aXRsZTogXCJUaGVtZU9wdGlvbnNcIiwgcGF0aDogXCIvdGhlbWVfb3B0aW9uXCIsIGRpc3BsYXlUaXRsZTogXCJUaGVtZSBPcHRpb25cIiwgcGVybWlzc2lvbjogW1widGhlbWVfb3B0aW9uLmluZGV4XCJdLCB9XG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlNldHRpbmdzXCIsXG4gICAgZGlzcGxheVRpdGxlOiBcIlNldHRpbmdzXCIsXG4gICAgaWNvbjogPFJpU2V0dGluZ3MzTGluZSAvPixcbiAgICBwYXRoOiBcIi9zZXR0aW5nXCIsXG4gICAgcGVybWlzc2lvbjogW1wic2V0dGluZy5pbmRleFwiXSxcbiAgICB0eXBlOiBcImxpbmtcIlxuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBNRU5VSVRFTVM7XG4iXSwibmFtZXMiOlsiUmlBcnRpY2xlTGluZSIsIlJpQ29pbnNMaW5lIiwiUmlDb250YWN0c0xpbmUiLCJSaUNvdXBvbjJMaW5lIiwiUmlDdXJyZW5jeUZpbGwiLCJSaUV4Y2hhbmdlRG9sbGFyRmlsbCIsIlJpSG9tZUxpbmUiLCJSaUltYWdlTGluZSIsIlJpTGlzdFVub3JkZXJlZCIsIlJpUGFnZXNMaW5lIiwiUmlQZXJjZW50TGluZSIsIlJpUXVlc3Rpb25uYWlyZUxpbmUiLCJSaVJlZnVuZDJMaW5lIiwiUmlTZXR0aW5nczNMaW5lIiwiUmlTdG9yZTJMaW5lIiwiUmlTdG9yZTNMaW5lIiwiUmlUcnVja0xpbmUiLCJSaVdhbGxldExpbmUiLCJSaVdpbmRvd0xpbmUiLCJNRU5VSVRFTVMiLCJ0aXRsZSIsImRpc3BsYXlUaXRsZSIsImljb24iLCJwYXRoIiwidHlwZSIsImNoaWxkcmVuIiwicGVybWlzc2lvbiIsImJhZGdlVHlwZSIsImJhZGdlVmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Layout/Sidebar/MenuData.js\n"));

/***/ })

});