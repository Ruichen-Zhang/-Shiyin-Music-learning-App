"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/拾音/ShiYin/main.js?{"page":"pages%2Fnavigation%2FShouYe%2Fvideo%2Fvideo"} ***!
  \********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_navigation_ShouYe_video_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/navigation/ShouYe/video/video.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_navigation_ShouYe_video_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_navigation_ShouYe_video_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/navigation/ShouYe/video/video'\n        _pages_navigation_ShouYe_video_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_navigation_ShouYe_video_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBZ0Y7QUFDaEYsUUFBUSw2RkFBRztBQUNYLFFBQVEsNkZBQUc7QUFDWCxRQUFRLDZGQUFHO0FBQ1gsZ0JBQWdCLDZGQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9uYXZpZ2F0aW9uL1Nob3VZZS92aWRlby92aWRlby5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9uYXZpZ2F0aW9uL1Nob3VZZS92aWRlby92aWRlbydcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*********************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/拾音/ShiYin/main.js?{"type":"appStyle"} ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*********************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/拾音/ShiYin/App.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Lenovo/Desktop/拾音/ShiYin/App.vue?vue&type=style&index=0&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": [
    {
      "fontFamily": "xingkai",
      "src": "url('~@/static/xingkai.ttf')"
    }
  ],
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */
/*!**********************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/拾音/ShiYin/pages/navigation/ShouYe/video/video.nvue?mpType=page ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _video_nvue_vue_type_template_id_70200306_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.nvue?vue&type=template&id=70200306&mpType=page */ 6);\n/* harmony import */ var _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.nvue?vue&type=script&lang=js&mpType=page */ 24);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 26).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 26).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _video_nvue_vue_type_template_id_70200306_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _video_nvue_vue_type_template_id_70200306_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"41645162\",\n  false,\n  _video_nvue_vue_type_template_id_70200306_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/navigation/ShouYe/video/video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ3dNO0FBQ3hNLGdCQUFnQixnTkFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcwMjAwMzA2Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUU6XFxcXHRlbmd4dW5cXFxcSEJ1aWxkZXJYLjMuNC43LjIwMjIwNDIyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI0MTY0NTE2MlwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9uYXZpZ2F0aW9uL1Nob3VZZS92aWRlby92aWRlby5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!****************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/拾音/ShiYin/pages/navigation/ShouYe/video/video.nvue?vue&type=template&id=70200306&mpType=page ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_70200306_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=template&id=70200306&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_70200306_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_70200306_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_70200306_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_70200306_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Lenovo/Desktop/拾音/ShiYin/pages/navigation/ShouYe/video/video.nvue?vue&type=template&id=70200306&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup: __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 8)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        { staticClass: ["container"] },
        [
          _c(
            "view",
            {
              style:
                "width: " +
                _vm.windowWidth +
                "px; height: " +
                _vm.boxStyle.height +
                "px;"
            },
            [
              _c(
                "list",
                {
                  ref: "listBox",
                  attrs: {
                    loadmoreoffset: _vm.wHeight * 3,
                    showScrollbar: false,
                    pagingEnabled: true,
                    scrollable: true
                  },
                  on: { loadmore: _vm.getData, scroll: _vm.scrolls }
                },
                [
                  _c(
                    "refresh",
                    {
                      staticClass: ["refresh"],
                      attrs: { display: _vm.refreshing ? "show" : "hide" },
                      on: {
                        refresh: _vm.onrefresh,
                        pullingdown: _vm.onpullingdown
                      }
                    },
                    [
                      _c(
                        "loading",
                        { staticStyle: { backgroundColor: "#FFFFFF" } },
                        [
                          _c("u-image", {
                            style:
                              "width: 80upx; height: 40upx; margin-top: 80upx; margin-bottom: 30upx; margin-left: " +
                              (_vm.windowWidth - 200) +
                              "px;",
                            attrs: { src: "/static/video/img/index/logins.gif" }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._l(_vm.dataList, function(item, i) {
                    return _c(
                      "cell",
                      { key: i, appendAsTree: true, attrs: { append: "tree" } },
                      [
                        _c(
                          "div",
                          {
                            style:
                              "width: " +
                              _vm.windowWidth +
                              "px; height: " +
                              _vm.boxStyle.height +
                              "px;",
                            on: {
                              disappear: function($event) {
                                _vm.stop()
                              }
                            }
                          },
                          [
                            Math.abs(_vm.k - i) <= 1
                              ? _c(
                                  "view",
                                  [
                                    _c(
                                      "view",
                                      { staticClass: ["root"] },
                                      [
                                        _c("u-video", {
                                          ref: "item" + i,
                                          refInFor: true,
                                          style: _vm.boxStyle,
                                          attrs: {
                                            id: item._id,
                                            loop: true,
                                            src: item.src,
                                            muted: item.isplay,
                                            enableProgressGesture: false,
                                            pageGesture: false,
                                            controls: false,
                                            httpCache: true,
                                            showLoading: false,
                                            showFullscreenBtn: false,
                                            showCenterPlayBtn: false,
                                            objectFit: _vm.object_fit
                                          },
                                          on: {
                                            play: function($event) {
                                              _vm.playIngs(i)
                                            },
                                            timeupdate: function($event) {
                                              _vm.timeupdate($event, i)
                                            }
                                          }
                                        }),
                                        !item.playIng
                                          ? _c("u-image", {
                                              style:
                                                "width: " +
                                                _vm.windowWidth +
                                                "px; height: " +
                                                (_vm.wHeight -
                                                  _vm.deleteHeight) +
                                                "px; position: absolute;",
                                              attrs: {
                                                src:
                                                  item.src +
                                                  "?x-oss-process=video/snapshot,t_100,f_jpg",
                                                mode: _vm.mode
                                              }
                                            })
                                          : _vm._e()
                                      ],
                                      1
                                    ),
                                    _c(
                                      "view",
                                      {
                                        staticClass: ["videoHover"],
                                        style: _vm.boxStyle,
                                        on: {
                                          click: function($event) {
                                            _vm.tapVideoHover(
                                              item.state,
                                              $event
                                            )
                                          },
                                          touchstart: _vm.touchstartHover
                                        }
                                      },
                                      [
                                        item.state == "pause"
                                          ? _c("u-image", {
                                              staticClass: ["playState"],
                                              attrs: {
                                                src:
                                                  "/static/video/img/index/play.png"
                                              }
                                            })
                                          : _vm._e()
                                      ],
                                      1
                                    ),
                                    _c(
                                      "view",
                                      { staticClass: ["userInfo"] },
                                      [
                                        item.isShowProgressBarTime == false
                                          ? _c("u-image", {
                                              staticClass: ["userAvatar"],
                                              attrs: {
                                                src: item.href,
                                                mode: "aspectFill"
                                              },
                                              on: { click: _vm.tozuozhe }
                                            })
                                          : _vm._e(),
                                        item.isShowProgressBarTime == false
                                          ? _c(
                                              "view",
                                              {
                                                staticStyle: {
                                                  opacity: "0.9",
                                                  marginTop: "17px"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    _vm.cLike(item.like)
                                                  }
                                                }
                                              },
                                              [
                                                item.like
                                                  ? _c("u-image", {
                                                      staticStyle: {
                                                        width: "40px",
                                                        height: "40px",
                                                        position: "absolute",
                                                        right: "6px"
                                                      },
                                                      attrs: {
                                                        src:
                                                          "/static/video/img/index/xin.png"
                                                      }
                                                    })
                                                  : _vm._e(),
                                                !item.like
                                                  ? _c("u-image", {
                                                      staticStyle: {
                                                        width: "40px",
                                                        height: "40px",
                                                        position: "absolute",
                                                        right: "6px"
                                                      },
                                                      attrs: {
                                                        src:
                                                          "/static/video/img/index/xin-2.png"
                                                      }
                                                    })
                                                  : _vm._e(),
                                                _c(
                                                  "u-text",
                                                  {
                                                    class: {
                                                      likeNumActive: item.like
                                                    },
                                                    staticStyle: {
                                                      color: "#FFFFFF",
                                                      marginTop: "5px",
                                                      fontSize: "14px",
                                                      textAlign: "center",
                                                      marginTop: "40px",
                                                      fontWeight: "bold"
                                                    },
                                                    appendAsTree: true,
                                                    attrs: { append: "tree" }
                                                  },
                                                  [_vm._v(_vm._s(item.like_n))]
                                                )
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        item.isShowProgressBarTime == false
                                          ? _c(
                                              "view",
                                              {
                                                staticClass: ["comment"],
                                                staticStyle: {
                                                  opacity: "0.9",
                                                  marginTop: "17px"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    _vm.toComment(i)
                                                  }
                                                }
                                              },
                                              [
                                                _c("u-image", {
                                                  staticStyle: {
                                                    width: "35px",
                                                    height: "35px",
                                                    position: "absolute",
                                                    right: "7px"
                                                  },
                                                  attrs: {
                                                    src:
                                                      "/static/video/img/index/liaotian-2.png"
                                                  }
                                                }),
                                                _c(
                                                  "u-text",
                                                  {
                                                    staticStyle: {
                                                      color: "#FFFFFF",
                                                      marginTop: "5px",
                                                      fontSize: "14px",
                                                      fontWeight: "bold",
                                                      textAlign: "center",
                                                      marginTop: "40px"
                                                    },
                                                    appendAsTree: true,
                                                    attrs: { append: "tree" }
                                                  },
                                                  [_vm._v(_vm._s(item.sms_n))]
                                                )
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        item.isShowProgressBarTime == false
                                          ? _c(
                                              "view",
                                              {
                                                staticStyle: {
                                                  opacity: "0.9",
                                                  marginTop: "17px"
                                                },
                                                on: { click: _vm.share }
                                              },
                                              [
                                                _c("u-image", {
                                                  staticStyle: {
                                                    width: "40px",
                                                    height: "40px",
                                                    position: "absolute",
                                                    right: "5px"
                                                  },
                                                  attrs: {
                                                    src:
                                                      "/static/video/img/index/share-fill.png"
                                                  }
                                                }),
                                                _c(
                                                  "u-text",
                                                  {
                                                    staticStyle: {
                                                      color: "#FFFFFF",
                                                      marginTop: "5px",
                                                      fontSize: "14px",
                                                      textAlign: "center",
                                                      fontWeight: "bold",
                                                      marginTop: "40px"
                                                    },
                                                    appendAsTree: true,
                                                    attrs: { append: "tree" }
                                                  },
                                                  [_vm._v("分享")]
                                                )
                                              ],
                                              1
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    ),
                                    _vm.dataList.length !== 0 &&
                                    _vm.dataList[_vm.k].isShowProgressBarTime ==
                                      false
                                      ? _c(
                                          "view",
                                          { staticClass: ["content"] },
                                          [
                                            _c(
                                              "u-text",
                                              {
                                                staticClass: ["userName"],
                                                style:
                                                  "width: " +
                                                  (_vm.windowWidth - 90) +
                                                  "px;",
                                                appendAsTree: true,
                                                attrs: { append: "tree" }
                                              },
                                              [_vm._v(_vm._s(item.title))]
                                            ),
                                            _c(
                                              "u-text",
                                              {
                                                staticClass: ["words"],
                                                style:
                                                  "width: " +
                                                  (_vm.windowWidth - 90) +
                                                  "px;",
                                                appendAsTree: true,
                                                attrs: { append: "tree" }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(item.msg) +
                                                    "-" +
                                                    _vm._s(_vm.k + 1)
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    item.isShowimage == true
                                      ? _c("u-image", {
                                          style:
                                            "width: 120upx; height: 160upx; border-radius: 10upx; position: absolute; bottom: " +
                                            (_vm.ProgressBarBottom + 160) +
                                            "upx; left: " +
                                            (_vm.currentPositions - 15) +
                                            "px;",
                                          attrs: {
                                            src:
                                              item.src +
                                              "?x-oss-process=video/snapshot,t_" +
                                              _vm.currenttimes +
                                              "000,f_jpg",
                                            mode: "aspectFill"
                                          }
                                        })
                                      : _vm._e()
                                  ],
                                  1
                                )
                              : _vm._e()
                          ]
                        )
                      ]
                    )
                  })
                ],
                2
              ),
              _vm.dataList.length !== 0 &&
              _vm.dataList[_vm.k].isShowProgressBarTime == true
                ? _c(
                    "view",
                    {
                      style:
                        "position: absolute; bottom: " +
                        (_vm.ProgressBarBottom + this.windowWidth * 0.2) / 2 +
                        "px; left: " +
                        (_vm.windowWidth * 2 - this.windowWidth * 1.35) / 2 +
                        "px;"
                    },
                    [
                      _c(
                        "u-text",
                        {
                          staticStyle: {
                            fontSize: "22px",
                            fontWeight: "bold",
                            color: "#F1F1F1"
                          },
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.changeTime) +
                              " / " +
                              _vm._s(_vm.videoTimes)
                          )
                        ]
                      )
                    ]
                  )
                : _vm._e(),
              _vm.isDragging == false
                ? _c(
                    "view",
                    {
                      staticStyle: {
                        position: "absolute",
                        bottom: "0",
                        left: "0"
                      },
                      on: {
                        touchmove: _vm.touchmove,
                        touchend: _vm.touchend,
                        touchstart: _vm.touchstart
                      }
                    },
                    [
                      _c(
                        "u-text",
                        {
                          style:
                            "width: " + _vm.windowWidth + "px; opacity: 0;",
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [_vm._v(".")]
                      ),
                      _c("view", {
                        style:
                          "width: " +
                          _vm.windowWidth +
                          "px; height: 4upx; background-color: #C8C7CC; position: absolute; bottom: " +
                          _vm.ProgressBarBottom +
                          "upx; opacity: " +
                          _vm.ProgressBarOpacity +
                          ";"
                      }),
                      _vm.dataList.length !== 0 &&
                      _vm.dataList[_vm.k].isShowProgressBarTime == false
                        ? _c("view", {
                            style:
                              "width: " +
                              _vm.currentPosition +
                              "px; height: 4upx; background-color: #FFFFFF; position: absolute; bottom: " +
                              _vm.ProgressBarBottom +
                              "upx; left: 0; opacity: " +
                              (_vm.ProgressBarOpacity - 0.1) +
                              ";"
                          })
                        : _vm._e(),
                      _vm.dataList.length !== 0 &&
                      _vm.dataList[_vm.k].isShowProgressBarTime == true
                        ? _c("view", {
                            style:
                              "width: " +
                              _vm.currentPositions +
                              "px; height: 8upx; background-color: #FFFFFF; position: absolute; bottom: " +
                              _vm.ProgressBarBottom +
                              "upx; left: 0; opacity: " +
                              (_vm.ProgressBarOpacity + 0.05) +
                              ";"
                          })
                        : _vm._e(),
                      _vm.dataList.length !== 0 &&
                      _vm.dataList[_vm.k].isShowProgressBarTime == false
                        ? _c("view", {
                            style:
                              "width: 4px; height: 4px; background-color: #FFFFFF; border-radius: 10px; position: absolute; bottom: " +
                              (_vm.ProgressBarBottom - 2) +
                              "upx; left: " +
                              _vm.currentPosition +
                              "px; opacity: " +
                              _vm.ProgressBarOpacity +
                              ";"
                          })
                        : _vm._e(),
                      _vm.dataList.length !== 0 &&
                      _vm.dataList[_vm.k].isShowProgressBarTime == true
                        ? _c("view", {
                            style:
                              "width: " +
                              _vm.dotWidth +
                              "px; height: " +
                              _vm.dotWidth +
                              "px; background-color: #FFFFFF; border-radius: 10px; position: absolute; bottom: " +
                              (_vm.ProgressBarBottom - 5) +
                              "upx; left: " +
                              (_vm.currentPositions - 5) +
                              "px; opacity: " +
                              _vm.ProgressBarOpacity +
                              ";"
                          })
                        : _vm._e()
                    ]
                  )
                : _vm._e()
            ]
          ),
          _c(
            "uni-popup",
            {
              ref: "pinglun",
              attrs: { type: "bottom" },
              on: { touchmove: _vm.moveHandle }
            },
            [
              _c(
                "view",
                {
                  style:
                    "width: " +
                    _vm.windowWidth +
                    "px; height: " +
                    _vm.boxStyle.height / _vm.heightNum +
                    "px; background-color: #242424; border-top-left-radius: 10px; border-top-right-radius: 10px;"
                },
                [
                  _c("douyin-scrollview", {
                    attrs: {
                      Width: _vm.windowWidth,
                      Height: _vm.boxStyle.height / 1.23,
                      deleteIOSHeight: 36,
                      deleteAndroidHeight: 15
                    },
                    on: { closeScrollview: _vm.closeScrollview }
                  })
                ],
                1
              )
            ]
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!**************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/拾音/ShiYin/uni_modules/uni-popup/components/uni-popup/uni-popup.vue ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=template&id=7c43d41b& */ 9);\n/* harmony import */ var _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=script&lang=js& */ 20);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-popup.vue?vue&type=style&index=0&lang=scss& */ 22).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-popup.vue?vue&type=style&index=0&lang=scss& */ 22).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"e6d5dff4\",\n  false,\n  _uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-popup/components/uni-popup/uni-popup.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0g7QUFDdEg7QUFDNkQ7QUFDTDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDJEQUFtRDtBQUN2RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMkRBQW1EO0FBQzVHOztBQUVBOztBQUVBO0FBQ3dNO0FBQ3hNLGdCQUFnQixnTkFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdjNDNkNDFiJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFFOlxcXFx0ZW5neHVuXFxcXEhCdWlsZGVyWC4zLjQuNy4yMDIyMDQyMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiZTZkNWRmZjRcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvdW5pLXBvcHVwL2NvbXBvbmVudHMvdW5pLXBvcHVwL3VuaS1wb3B1cC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/拾音/ShiYin/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=template&id=7c43d41b& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=template&id=7c43d41b& */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Lenovo/Desktop/拾音/ShiYin/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=template&id=7c43d41b& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniTransition: __webpack_require__(/*! @/uni_modules/uni-transition/components/uni-transition/uni-transition.vue */ 11)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.showPopup
    ? _c(
        "view",
        {
          staticClass: ["uni-popup"],
          class: [_vm.popupstyle, _vm.isDesktop ? "fixforpc-z-index" : ""]
        },
        [
          _c(
            "view",
            { on: { touchstart: _vm.touchstart } },
            [
              _vm.maskShow
                ? _c("uni-transition", {
                    key: "1",
                    attrs: {
                      name: "mask",
                      modeClass: "fade",
                      styles: _vm.maskClass,
                      duration: _vm.duration,
                      show: _vm.showTrans
                    },
                    on: { click: _vm.onTap }
                  })
                : _vm._e(),
              _c(
                "uni-transition",
                {
                  key: "2",
                  attrs: {
                    modeClass: _vm.ani,
                    name: "content",
                    styles: _vm.transClass,
                    duration: _vm.duration,
                    show: _vm.showTrans
                  },
                  on: { click: _vm.onTap }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: ["uni-popup__wrapper"],
                      class: [_vm.popupstyle],
                      style: { backgroundColor: _vm.bg },
                      on: { click: _vm.clear }
                    },
                    [_vm._t("default")],
                    2
                  )
                ]
              )
            ],
            1
          )
        ]
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!*****************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/拾音/ShiYin/uni_modules/uni-transition/components/uni-transition/uni-transition.vue ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=template&id=6369f8c4& */ 12);\n/* harmony import */ var _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=script&lang=js& */ 14);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      \n}\n\n/* normalize component */\n\nvar component = Object(_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"bcb5ce5a\",\n  false,\n  _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-transition/components/uni-transition/uni-transition.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDd007QUFDeE0sZ0JBQWdCLGdOQUFVO0FBQzFCLEVBQUUsb0ZBQU07QUFDUixFQUFFLHlGQUFNO0FBQ1IsRUFBRSxrR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2RkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjM2OWY4YzQmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIFxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUU6XFxcXHRlbmd4dW5cXFxcSEJ1aWxkZXJYLjMuNC43LjIwMjIwNDIyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCJiY2I1Y2U1YVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmlfbW9kdWxlcy91bmktdHJhbnNpdGlvbi9jb21wb25lbnRzL3VuaS10cmFuc2l0aW9uL3VuaS10cmFuc2l0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/拾音/ShiYin/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=template&id=6369f8c4& ***!
  \************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=template&id=6369f8c4& */ 13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 13 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Lenovo/Desktop/拾音/ShiYin/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=template&id=6369f8c4& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isShow
    ? _c(
        "view",
        {
          ref: "ani",
          class: _vm.customClass,
          style: _vm.transformStyles,
          attrs: { animation: _vm.animationData },
          on: { click: _vm.onClick }
        },
        [_vm._t("default")],
        2
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 14 */
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/拾音/ShiYin/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=script&lang=js& */ 15);\n/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFoQixDQUFnQiwyakJBQUcsRUFBQyIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcdGVuZ3h1blxcXFxIQnVpbGRlclguMy40LjcuMjAyMjA0MjJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRTpcXFxcdGVuZ3h1blxcXFxIQnVpbGRlclguMy40LjcuMjAyMjA0MjJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFFOlxcXFx0ZW5neHVuXFxcXEhCdWlsZGVyWC4zLjQuNy4yMDIyMDQyMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRTpcXFxcdGVuZ3h1blxcXFxIQnVpbGRlclguMy40LjcuMjAyMjA0MjJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRTpcXFxcdGVuZ3h1blxcXFxIQnVpbGRlclguMy40LjcuMjAyMjA0MjJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFFOlxcXFx0ZW5neHVuXFxcXEhCdWlsZGVyWC4zLjQuNy4yMDIyMDQyMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Lenovo/Desktop/拾音/ShiYin/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\nvar _createAnimation = __webpack_require__(/*! ./createAnimation */ 17);function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n/**\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * Transition 过渡动画\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @description 简单过渡动画组件\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @tutorial https://ext.dcloud.net.cn/plugin?id=985\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @property {Boolean} show = [false|true] 控制组件显示或隐藏\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @property {Array|String} modeClass = [fade|slide-top|slide-right|slide-bottom|slide-left|zoom-in|zoom-out] 过渡动画类型\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *  @value fade 渐隐渐出过渡\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *  @value slide-top 由上至下过渡\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *  @value slide-right 由右至左过渡\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *  @value slide-bottom 由下至上过渡\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *  @value slide-left 由左至右过渡\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *  @value zoom-in 由小到大过渡\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *  @value zoom-out 由大到小过渡\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @property {Number} duration 过渡动画持续时间\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @property {Object} styles 组件样式，同 css 样式，注意带’-‘连接符的属性需要使用小驼峰写法如：`backgroundColor:red`\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */var _default2 =\n{\n  name: 'uniTransition',\n  emits: ['click', 'change'],\n  props: {\n    show: {\n      type: Boolean,\n      default: false },\n\n    modeClass: {\n      type: [Array, String],\n      default: function _default() {\n        return 'fade';\n      } },\n\n    duration: {\n      type: Number,\n      default: 300 },\n\n    styles: {\n      type: Object,\n      default: function _default() {\n        return {};\n      } },\n\n    customClass: {\n      type: String,\n      default: '' } },\n\n\n  data: function data() {\n    return {\n      isShow: false,\n      transform: '',\n      opacity: 1,\n      animationData: {},\n      durationTime: 300,\n      config: {} };\n\n  },\n  watch: {\n    show: {\n      handler: function handler(newVal) {\n        if (newVal) {\n          this.open();\n        } else {\n          // 避免上来就执行 close,导致动画错乱\n          if (this.isShow) {\n            this.close();\n          }\n        }\n      },\n      immediate: true } },\n\n\n  computed: {\n    // 生成样式数据\n    stylesObject: function stylesObject() {\n      var styles = _objectSpread(_objectSpread({},\n      this.styles), {}, {\n        'transition-duration': this.duration / 1000 + 's' });\n\n      var transform = '';\n      for (var i in styles) {\n        var line = this.toLine(i);\n        transform += line + ':' + styles[i] + ';';\n      }\n      return transform;\n    },\n    // 初始化动画条件\n    transformStyles: function transformStyles() {\n      return 'transform:' + this.transform + ';' + 'opacity:' + this.opacity + ';' + this.stylesObject;\n    } },\n\n  created: function created() {\n    // 动画默认配置\n    this.config = {\n      duration: this.duration,\n      timingFunction: 'ease',\n      transformOrigin: '50% 50%',\n      delay: 0 };\n\n    this.durationTime = this.duration;\n  },\n  methods: {\n    /**\r\n              *  ref 触发 初始化动画\r\n              */\n    init: function init() {var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      if (obj.duration) {\n        this.durationTime = obj.duration;\n      }\n      this.animation = (0, _createAnimation.createAnimation)(Object.assign(this.config, obj), this);\n    },\n    /**\r\n        * 点击组件触发回调\r\n        */\n    onClick: function onClick() {\n      this.$emit('click', {\n        detail: this.isShow });\n\n    },\n    /**\r\n        * ref 触发 动画分组\r\n        * @param {Object} obj\r\n        */\n    step: function step(obj) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      if (!this.animation) return;\n      for (var i in obj) {\n        try {\n          if (typeof obj[i] === 'object') {var _this$animation;\n            (_this$animation = this.animation)[i].apply(_this$animation, _toConsumableArray(obj[i]));\n          } else {\n            this.animation[i](obj[i]);\n          }\n        } catch (e) {\n          __f__(\"error\", \"\\u65B9\\u6CD5 \".concat(i, \" \\u4E0D\\u5B58\\u5728\"), \" at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139\");\n        }\n      }\n      this.animation.step(config);\n      return this;\n    },\n    /**\r\n        *  ref 触发 执行动画\r\n        */\n    run: function run(fn) {\n      if (!this.animation) return;\n      this.animation.run(fn);\n    },\n    // 开始过度动画\n    open: function open() {var _this = this;\n      clearTimeout(this.timer);\n      this.transform = '';\n      this.isShow = true;var _this$styleInit =\n      this.styleInit(false),opacity = _this$styleInit.opacity,transform = _this$styleInit.transform;\n      if (typeof opacity !== 'undefined') {\n        this.opacity = opacity;\n      }\n      this.transform = transform;\n      // 确保动态样式已经生效后，执行动画，如果不加 nextTick ，会导致 wx 动画执行异常\n      this.$nextTick(function () {\n        // TODO 定时器保证动画完全执行，目前有些问题，后面会取消定时器\n        _this.timer = setTimeout(function () {\n          _this.animation = (0, _createAnimation.createAnimation)(_this.config, _this);\n          _this.tranfromInit(false).step();\n          _this.animation.run();\n          _this.$emit('change', {\n            detail: _this.isShow });\n\n        }, 20);\n      });\n    },\n    // 关闭过度动画\n    close: function close(type) {var _this2 = this;\n      if (!this.animation) return;\n      this.tranfromInit(true).\n      step().\n      run(function () {\n        _this2.isShow = false;\n        _this2.animationData = null;\n        _this2.animation = null;var _this2$styleInit =\n        _this2.styleInit(false),opacity = _this2$styleInit.opacity,transform = _this2$styleInit.transform;\n        _this2.opacity = opacity || 1;\n        _this2.transform = transform;\n        _this2.$emit('change', {\n          detail: _this2.isShow });\n\n      });\n    },\n    // 处理动画开始前的默认样式\n    styleInit: function styleInit(type) {var _this3 = this;\n      var styles = {\n        transform: '' };\n\n      var buildStyle = function buildStyle(type, mode) {\n        if (mode === 'fade') {\n          styles.opacity = _this3.animationType(type)[mode];\n        } else {\n          styles.transform += _this3.animationType(type)[mode] + ' ';\n        }\n      };\n      if (typeof this.modeClass === 'string') {\n        buildStyle(type, this.modeClass);\n      } else {\n        this.modeClass.forEach(function (mode) {\n          buildStyle(type, mode);\n        });\n      }\n      return styles;\n    },\n    // 处理内置组合动画\n    tranfromInit: function tranfromInit(type) {var _this4 = this;\n      var buildTranfrom = function buildTranfrom(type, mode) {\n        var aniNum = null;\n        if (mode === 'fade') {\n          aniNum = type ? 0 : 1;\n        } else {\n          aniNum = type ? '-100%' : '0';\n          if (mode === 'zoom-in') {\n            aniNum = type ? 0.8 : 1;\n          }\n          if (mode === 'zoom-out') {\n            aniNum = type ? 1.2 : 1;\n          }\n          if (mode === 'slide-right') {\n            aniNum = type ? '100%' : '0';\n          }\n          if (mode === 'slide-bottom') {\n            aniNum = type ? '100%' : '0';\n          }\n        }\n        _this4.animation[_this4.animationMode()[mode]](aniNum);\n      };\n      if (typeof this.modeClass === 'string') {\n        buildTranfrom(type, this.modeClass);\n      } else {\n        this.modeClass.forEach(function (mode) {\n          buildTranfrom(type, mode);\n        });\n      }\n\n      return this.animation;\n    },\n    animationType: function animationType(type) {\n      return {\n        fade: type ? 1 : 0,\n        'slide-top': \"translateY(\".concat(type ? '0' : '-100%', \")\"),\n        'slide-right': \"translateX(\".concat(type ? '0' : '100%', \")\"),\n        'slide-bottom': \"translateY(\".concat(type ? '0' : '100%', \")\"),\n        'slide-left': \"translateX(\".concat(type ? '0' : '-100%', \")\"),\n        'zoom-in': \"scaleX(\".concat(type ? 1 : 0.8, \") scaleY(\").concat(type ? 1 : 0.8, \")\"),\n        'zoom-out': \"scaleX(\".concat(type ? 1 : 1.2, \") scaleY(\").concat(type ? 1 : 1.2, \")\") };\n\n    },\n    // 内置动画类型与实际动画对应字典\n    animationMode: function animationMode() {\n      return {\n        fade: 'opacity',\n        'slide-top': 'translateY',\n        'slide-right': 'translateX',\n        'slide-bottom': 'translateY',\n        'slide-left': 'translateX',\n        'zoom-in': 'scale',\n        'zoom-out': 'scale' };\n\n    },\n    // 驼峰转中横线\n    toLine: function toLine(name) {\n      return name.replace(/([A-Z])/g, '-$1').toLowerCase();\n    } } };exports.default = _default2;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 16)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXRyYW5zaXRpb24vY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSx3RTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBLHVCQURBO0FBRUEsNEJBRkE7QUFHQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQSxFQURBOztBQUtBO0FBQ0EsMkJBREE7QUFFQSxhQUZBLHNCQUVBO0FBQ0E7QUFDQSxPQUpBLEVBTEE7O0FBV0E7QUFDQSxrQkFEQTtBQUVBLGtCQUZBLEVBWEE7O0FBZUE7QUFDQSxrQkFEQTtBQUVBLGFBRkEsc0JBRUE7QUFDQTtBQUNBLE9BSkEsRUFmQTs7QUFxQkE7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBckJBLEVBSEE7OztBQTZCQSxNQTdCQSxrQkE2QkE7QUFDQTtBQUNBLG1CQURBO0FBRUEsbUJBRkE7QUFHQSxnQkFIQTtBQUlBLHVCQUpBO0FBS0EsdUJBTEE7QUFNQSxnQkFOQTs7QUFRQSxHQXRDQTtBQXVDQTtBQUNBO0FBQ0EsYUFEQSxtQkFDQSxNQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BVkE7QUFXQSxxQkFYQSxFQURBLEVBdkNBOzs7QUFzREE7QUFDQTtBQUNBLGdCQUZBLDBCQUVBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLHlEQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBYkE7QUFjQTtBQUNBLG1CQWZBLDZCQWVBO0FBQ0E7QUFDQSxLQWpCQSxFQXREQTs7QUF5RUEsU0F6RUEscUJBeUVBO0FBQ0E7QUFDQTtBQUNBLDZCQURBO0FBRUEsNEJBRkE7QUFHQSxnQ0FIQTtBQUlBLGNBSkE7O0FBTUE7QUFDQSxHQWxGQTtBQW1GQTtBQUNBOzs7QUFHQSxRQUpBLGtCQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVRBO0FBVUE7OztBQUdBLFdBYkEscUJBYUE7QUFDQTtBQUNBLDJCQURBOztBQUdBLEtBakJBO0FBa0JBOzs7O0FBSUEsUUF0QkEsZ0JBc0JBLEdBdEJBLEVBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxTQU5BLENBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FyQ0E7QUFzQ0E7OztBQUdBLE9BekNBLGVBeUNBLEVBekNBLEVBeUNBO0FBQ0E7QUFDQTtBQUNBLEtBNUNBO0FBNkNBO0FBQ0EsUUE5Q0Esa0JBOENBO0FBQ0E7QUFDQTtBQUNBLHlCQUhBO0FBSUEsMkJBSkEsQ0FJQSxPQUpBLG1CQUlBLE9BSkEsQ0FJQSxTQUpBLG1CQUlBLFNBSkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FEQTs7QUFHQSxTQVBBLEVBT0EsRUFQQTtBQVFBLE9BVkE7QUFXQSxLQW5FQTtBQW9FQTtBQUNBLFNBckVBLGlCQXFFQSxJQXJFQSxFQXFFQTtBQUNBO0FBQ0E7QUFDQSxVQURBO0FBRUEsU0FGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUhBO0FBSUEsK0JBSkEsQ0FJQSxPQUpBLG9CQUlBLE9BSkEsQ0FJQSxTQUpBLG9CQUlBLFNBSkE7QUFLQTtBQUNBO0FBQ0E7QUFDQSwrQkFEQTs7QUFHQSxPQVpBO0FBYUEsS0FwRkE7QUFxRkE7QUFDQSxhQXRGQSxxQkFzRkEsSUF0RkEsRUFzRkE7QUFDQTtBQUNBLHFCQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxPQU5BO0FBT0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0E7QUFDQTtBQUNBLEtBekdBO0FBMEdBO0FBQ0EsZ0JBM0dBLHdCQTJHQSxJQTNHQSxFQTJHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FwQkE7QUFxQkE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0E7O0FBRUE7QUFDQSxLQTFJQTtBQTJJQSxpQkEzSUEseUJBMklBLElBM0lBLEVBMklBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLG9FQUZBO0FBR0EscUVBSEE7QUFJQSxzRUFKQTtBQUtBLHFFQUxBO0FBTUEsNEZBTkE7QUFPQSw2RkFQQTs7QUFTQSxLQXJKQTtBQXNKQTtBQUNBLGlCQXZKQSwyQkF1SkE7QUFDQTtBQUNBLHVCQURBO0FBRUEsaUNBRkE7QUFHQSxtQ0FIQTtBQUlBLG9DQUpBO0FBS0Esa0NBTEE7QUFNQSwwQkFOQTtBQU9BLDJCQVBBOztBQVNBLEtBaktBO0FBa0tBO0FBQ0EsVUFuS0Esa0JBbUtBLElBbktBLEVBbUtBO0FBQ0E7QUFDQSxLQXJLQSxFQW5GQSxFIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IHYtaWY9XCJpc1Nob3dcIiByZWY9XCJhbmlcIiA6YW5pbWF0aW9uPVwiYW5pbWF0aW9uRGF0YVwiIDpjbGFzcz1cImN1c3RvbUNsYXNzXCIgOnN0eWxlPVwidHJhbnNmb3JtU3R5bGVzXCIgQGNsaWNrPVwib25DbGlja1wiPjxzbG90Pjwvc2xvdD48L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2NyZWF0ZUFuaW1hdGlvbidcclxuXHJcbi8qKlxyXG4gKiBUcmFuc2l0aW9uIOi/h+a4oeWKqOeUu1xyXG4gKiBAZGVzY3JpcHRpb24g566A5Y2V6L+H5rih5Yqo55S757uE5Lu2XHJcbiAqIEB0dXRvcmlhbCBodHRwczovL2V4dC5kY2xvdWQubmV0LmNuL3BsdWdpbj9pZD05ODVcclxuICogQHByb3BlcnR5IHtCb29sZWFufSBzaG93ID0gW2ZhbHNlfHRydWVdIOaOp+WItue7hOS7tuaYvuekuuaIlumakOiXj1xyXG4gKiBAcHJvcGVydHkge0FycmF5fFN0cmluZ30gbW9kZUNsYXNzID0gW2ZhZGV8c2xpZGUtdG9wfHNsaWRlLXJpZ2h0fHNsaWRlLWJvdHRvbXxzbGlkZS1sZWZ0fHpvb20taW58em9vbS1vdXRdIOi/h+a4oeWKqOeUu+exu+Wei1xyXG4gKiAgQHZhbHVlIGZhZGUg5riQ6ZqQ5riQ5Ye66L+H5rihXHJcbiAqICBAdmFsdWUgc2xpZGUtdG9wIOeUseS4iuiHs+S4i+i/h+a4oVxyXG4gKiAgQHZhbHVlIHNsaWRlLXJpZ2h0IOeUseWPs+iHs+W3pui/h+a4oVxyXG4gKiAgQHZhbHVlIHNsaWRlLWJvdHRvbSDnlLHkuIvoh7PkuIrov4fmuKFcclxuICogIEB2YWx1ZSBzbGlkZS1sZWZ0IOeUseW3puiHs+WPs+i/h+a4oVxyXG4gKiAgQHZhbHVlIHpvb20taW4g55Sx5bCP5Yiw5aSn6L+H5rihXHJcbiAqICBAdmFsdWUgem9vbS1vdXQg55Sx5aSn5Yiw5bCP6L+H5rihXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBkdXJhdGlvbiDov4fmuKHliqjnlLvmjIHnu63ml7bpl7RcclxuICogQHByb3BlcnR5IHtPYmplY3R9IHN0eWxlcyDnu4Tku7bmoLflvI/vvIzlkIwgY3NzIOagt+W8j++8jOazqOaEj+W4puKAmS3igJjov57mjqXnrKbnmoTlsZ7mgKfpnIDopoHkvb/nlKjlsI/pqbzls7Dlhpnms5XlpoLvvJpgYmFja2dyb3VuZENvbG9yOnJlZGBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAndW5pVHJhbnNpdGlvbicsXHJcblx0ZW1pdHM6WydjbGljaycsJ2NoYW5nZSddLFxyXG5cdHByb3BzOiB7XHJcblx0XHRzaG93OiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0bW9kZUNsYXNzOiB7XHJcblx0XHRcdHR5cGU6IFtBcnJheSwgU3RyaW5nXSxcclxuXHRcdFx0ZGVmYXVsdCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gJ2ZhZGUnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkdXJhdGlvbjoge1xyXG5cdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdGRlZmF1bHQ6IDMwMFxyXG5cdFx0fSxcclxuXHRcdHN0eWxlczoge1xyXG5cdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdGRlZmF1bHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHt9XHJcblx0XHRcdH1cclxuXHRcdH0sXG5cdFx0Y3VzdG9tQ2xhc3M6e1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogJydcblx0XHR9XHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0aXNTaG93OiBmYWxzZSxcclxuXHRcdFx0dHJhbnNmb3JtOiAnJyxcclxuXHRcdFx0b3BhY2l0eTogMSxcclxuXHRcdFx0YW5pbWF0aW9uRGF0YToge30sXHJcblx0XHRcdGR1cmF0aW9uVGltZTogMzAwLFxyXG5cdFx0XHRjb25maWc6IHt9XHJcblx0XHR9XHJcblx0fSxcclxuXHR3YXRjaDoge1xyXG5cdFx0c2hvdzoge1xyXG5cdFx0XHRoYW5kbGVyKG5ld1ZhbCkge1xyXG5cdFx0XHRcdGlmIChuZXdWYWwpIHtcclxuXHRcdFx0XHRcdHRoaXMub3BlbigpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIOmBv+WFjeS4iuadpeWwseaJp+ihjCBjbG9zZSzlr7zoh7TliqjnlLvplJnkubFcclxuXHRcdFx0XHRcdGlmICh0aGlzLmlzU2hvdykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNsb3NlKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdC8vIOeUn+aIkOagt+W8j+aVsOaNrlxyXG5cdFx0c3R5bGVzT2JqZWN0KCkge1xyXG5cdFx0XHRsZXQgc3R5bGVzID0ge1xyXG5cdFx0XHRcdC4uLnRoaXMuc3R5bGVzLFxyXG5cdFx0XHRcdCd0cmFuc2l0aW9uLWR1cmF0aW9uJzogdGhpcy5kdXJhdGlvbiAvIDEwMDAgKyAncydcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgdHJhbnNmb3JtID0gJydcclxuXHRcdFx0Zm9yIChsZXQgaSBpbiBzdHlsZXMpIHtcclxuXHRcdFx0XHRsZXQgbGluZSA9IHRoaXMudG9MaW5lKGkpXHJcblx0XHRcdFx0dHJhbnNmb3JtICs9IGxpbmUgKyAnOicgKyBzdHlsZXNbaV0gKyAnOydcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdHJhbnNmb3JtXHJcblx0XHR9LFxyXG5cdFx0Ly8g5Yid5aeL5YyW5Yqo55S75p2h5Lu2XHJcblx0XHR0cmFuc2Zvcm1TdHlsZXMoKSB7XHJcblx0XHRcdHJldHVybiAndHJhbnNmb3JtOicgKyB0aGlzLnRyYW5zZm9ybSArICc7JyArICdvcGFjaXR5OicgKyB0aGlzLm9wYWNpdHkgKyAnOycgKyB0aGlzLnN0eWxlc09iamVjdFxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdC8vIOWKqOeUu+m7mOiupOmFjee9rlxyXG5cdFx0dGhpcy5jb25maWcgPSB7XHJcblx0XHRcdGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLFxyXG5cdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnLFxyXG5cdFx0XHR0cmFuc2Zvcm1PcmlnaW46ICc1MCUgNTAlJyxcclxuXHRcdFx0ZGVsYXk6IDBcclxuXHRcdH1cclxuXHRcdHRoaXMuZHVyYXRpb25UaW1lID0gdGhpcy5kdXJhdGlvblxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0LyoqXHJcblx0XHQgKiAgcmVmIOinpuWPkSDliJ3lp4vljJbliqjnlLtcclxuXHRcdCAqL1xyXG5cdFx0aW5pdChvYmogPSB7fSkge1xyXG5cdFx0XHRpZiAob2JqLmR1cmF0aW9uKSB7XHJcblx0XHRcdFx0dGhpcy5kdXJhdGlvblRpbWUgPSBvYmouZHVyYXRpb25cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbihPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBvYmopLHRoaXMpXHJcblx0XHR9LFxyXG5cdFx0LyoqXHJcblx0XHQgKiDngrnlh7vnu4Tku7bop6blj5Hlm57osINcclxuXHRcdCAqL1xyXG5cdFx0b25DbGljaygpIHtcclxuXHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snLCB7XHJcblx0XHRcdFx0ZGV0YWlsOiB0aGlzLmlzU2hvd1xyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdC8qKlxyXG5cdFx0ICogcmVmIOinpuWPkSDliqjnlLvliIbnu4RcclxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcclxuXHRcdCAqL1xyXG5cdFx0c3RlcChvYmosIGNvbmZpZyA9IHt9KSB7XHJcblx0XHRcdGlmICghdGhpcy5hbmltYXRpb24pIHJldHVyblxuXHRcdFx0Zm9yIChsZXQgaSBpbiBvYmopIHtcclxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmKHR5cGVvZiBvYmpbaV0gPT09ICdvYmplY3QnKXtcblx0XHRcdFx0XHRcdHRoaXMuYW5pbWF0aW9uW2ldKC4uLm9ialtpXSlcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHRoaXMuYW5pbWF0aW9uW2ldKG9ialtpXSlcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihg5pa55rOVICR7aX0g5LiN5a2Y5ZyoYClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5hbmltYXRpb24uc3RlcChjb25maWcpXG5cdFx0XHRyZXR1cm4gdGhpc1xyXG5cdFx0fSxcclxuXHRcdC8qKlxyXG5cdFx0ICogIHJlZiDop6blj5Eg5omn6KGM5Yqo55S7XHJcblx0XHQgKi9cclxuXHRcdHJ1bihmbikge1xyXG5cdFx0XHRpZiAoIXRoaXMuYW5pbWF0aW9uKSByZXR1cm5cclxuXHRcdFx0dGhpcy5hbmltYXRpb24ucnVuKGZuKVxyXG5cdFx0fSxcclxuXHRcdC8vIOW8gOWni+i/h+W6puWKqOeUu1xyXG5cdFx0b3BlbigpIHtcclxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXHJcblx0XHRcdHRoaXMudHJhbnNmb3JtID0gJydcclxuXHRcdFx0dGhpcy5pc1Nob3cgPSB0cnVlXHJcblx0XHRcdGxldCB7IG9wYWNpdHksIHRyYW5zZm9ybSB9ID0gdGhpcy5zdHlsZUluaXQoZmFsc2UpXHJcblx0XHRcdGlmICh0eXBlb2Ygb3BhY2l0eSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHR0aGlzLm9wYWNpdHkgPSBvcGFjaXR5XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cclxuXHRcdFx0Ly8g56Gu5L+d5Yqo5oCB5qC35byP5bey57uP55Sf5pWI5ZCO77yM5omn6KGM5Yqo55S777yM5aaC5p6c5LiN5YqgIG5leHRUaWNrIO+8jOS8muWvvOiHtCB3eCDliqjnlLvmiafooYzlvILluLhcclxuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdC8vIFRPRE8g5a6a5pe25Zmo5L+d6K+B5Yqo55S75a6M5YWo5omn6KGM77yM55uu5YmN5pyJ5Lqb6Zeu6aKY77yM5ZCO6Z2i5Lya5Y+W5raI5a6a5pe25ZmoXHJcblx0XHRcdFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5hbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24odGhpcy5jb25maWcsIHRoaXMpXHJcblx0XHRcdFx0XHR0aGlzLnRyYW5mcm9tSW5pdChmYWxzZSkuc3RlcCgpXHJcblx0XHRcdFx0XHR0aGlzLmFuaW1hdGlvbi5ydW4oKVxyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xyXG5cdFx0XHRcdFx0XHRkZXRhaWw6IHRoaXMuaXNTaG93XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0sIDIwKVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdC8vIOWFs+mXrei/h+W6puWKqOeUu1xyXG5cdFx0Y2xvc2UodHlwZSkge1xyXG5cdFx0XHRpZiAoIXRoaXMuYW5pbWF0aW9uKSByZXR1cm5cclxuXHRcdFx0dGhpcy50cmFuZnJvbUluaXQodHJ1ZSlcclxuXHRcdFx0XHQuc3RlcCgpXHJcblx0XHRcdFx0LnJ1bigoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmlzU2hvdyA9IGZhbHNlXHJcblx0XHRcdFx0XHR0aGlzLmFuaW1hdGlvbkRhdGEgPSBudWxsXHJcblx0XHRcdFx0XHR0aGlzLmFuaW1hdGlvbiA9IG51bGxcclxuXHRcdFx0XHRcdGxldCB7IG9wYWNpdHksIHRyYW5zZm9ybSB9ID0gdGhpcy5zdHlsZUluaXQoZmFsc2UpXHJcblx0XHRcdFx0XHR0aGlzLm9wYWNpdHkgPSBvcGFjaXR5IHx8IDFcclxuXHRcdFx0XHRcdHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtXHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XHJcblx0XHRcdFx0XHRcdGRldGFpbDogdGhpcy5pc1Nob3dcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHQvLyDlpITnkIbliqjnlLvlvIDlp4vliY3nmoTpu5jorqTmoLflvI9cclxuXHRcdHN0eWxlSW5pdCh0eXBlKSB7XHJcblx0XHRcdGxldCBzdHlsZXMgPSB7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiAnJ1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBidWlsZFN0eWxlID0gKHR5cGUsIG1vZGUpID0+IHtcclxuXHRcdFx0XHRpZiAobW9kZSA9PT0gJ2ZhZGUnKSB7XHJcblx0XHRcdFx0XHRzdHlsZXMub3BhY2l0eSA9IHRoaXMuYW5pbWF0aW9uVHlwZSh0eXBlKVttb2RlXVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzdHlsZXMudHJhbnNmb3JtICs9IHRoaXMuYW5pbWF0aW9uVHlwZSh0eXBlKVttb2RlXSArICcgJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMubW9kZUNsYXNzID09PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdGJ1aWxkU3R5bGUodHlwZSwgdGhpcy5tb2RlQ2xhc3MpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5tb2RlQ2xhc3MuZm9yRWFjaChtb2RlID0+IHtcclxuXHRcdFx0XHRcdGJ1aWxkU3R5bGUodHlwZSwgbW9kZSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBzdHlsZXNcclxuXHRcdH0sXHJcblx0XHQvLyDlpITnkIblhoXnva7nu4TlkIjliqjnlLtcclxuXHRcdHRyYW5mcm9tSW5pdCh0eXBlKSB7XHJcblx0XHRcdGxldCBidWlsZFRyYW5mcm9tID0gKHR5cGUsIG1vZGUpID0+IHtcclxuXHRcdFx0XHRsZXQgYW5pTnVtID0gbnVsbFxyXG5cdFx0XHRcdGlmIChtb2RlID09PSAnZmFkZScpIHtcclxuXHRcdFx0XHRcdGFuaU51bSA9IHR5cGUgPyAwIDogMVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRhbmlOdW0gPSB0eXBlID8gJy0xMDAlJyA6ICcwJ1xyXG5cdFx0XHRcdFx0aWYgKG1vZGUgPT09ICd6b29tLWluJykge1xyXG5cdFx0XHRcdFx0XHRhbmlOdW0gPSB0eXBlID8gMC44IDogMVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKG1vZGUgPT09ICd6b29tLW91dCcpIHtcclxuXHRcdFx0XHRcdFx0YW5pTnVtID0gdHlwZSA/IDEuMiA6IDFcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChtb2RlID09PSAnc2xpZGUtcmlnaHQnKSB7XHJcblx0XHRcdFx0XHRcdGFuaU51bSA9IHR5cGUgPyAnMTAwJScgOiAnMCdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChtb2RlID09PSAnc2xpZGUtYm90dG9tJykge1xyXG5cdFx0XHRcdFx0XHRhbmlOdW0gPSB0eXBlID8gJzEwMCUnIDogJzAnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuYW5pbWF0aW9uW3RoaXMuYW5pbWF0aW9uTW9kZSgpW21vZGVdXShhbmlOdW0pXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLm1vZGVDbGFzcyA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0XHRidWlsZFRyYW5mcm9tKHR5cGUsIHRoaXMubW9kZUNsYXNzKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMubW9kZUNsYXNzLmZvckVhY2gobW9kZSA9PiB7XHJcblx0XHRcdFx0XHRidWlsZFRyYW5mcm9tKHR5cGUsIG1vZGUpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXMuYW5pbWF0aW9uXHJcblx0XHR9LFxyXG5cdFx0YW5pbWF0aW9uVHlwZSh0eXBlKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZmFkZTogdHlwZSA/IDEgOiAwLFxyXG5cdFx0XHRcdCdzbGlkZS10b3AnOiBgdHJhbnNsYXRlWSgke3R5cGUgPyAnMCcgOiAnLTEwMCUnfSlgLFxyXG5cdFx0XHRcdCdzbGlkZS1yaWdodCc6IGB0cmFuc2xhdGVYKCR7dHlwZSA/ICcwJyA6ICcxMDAlJ30pYCxcclxuXHRcdFx0XHQnc2xpZGUtYm90dG9tJzogYHRyYW5zbGF0ZVkoJHt0eXBlID8gJzAnIDogJzEwMCUnfSlgLFxyXG5cdFx0XHRcdCdzbGlkZS1sZWZ0JzogYHRyYW5zbGF0ZVgoJHt0eXBlID8gJzAnIDogJy0xMDAlJ30pYCxcclxuXHRcdFx0XHQnem9vbS1pbic6IGBzY2FsZVgoJHt0eXBlID8gMSA6IDAuOH0pIHNjYWxlWSgke3R5cGUgPyAxIDogMC44fSlgLFxyXG5cdFx0XHRcdCd6b29tLW91dCc6IGBzY2FsZVgoJHt0eXBlID8gMSA6IDEuMn0pIHNjYWxlWSgke3R5cGUgPyAxIDogMS4yfSlgXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvLyDlhoXnva7liqjnlLvnsbvlnovkuI7lrp7pmYXliqjnlLvlr7nlupTlrZflhbhcclxuXHRcdGFuaW1hdGlvbk1vZGUoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZmFkZTogJ29wYWNpdHknLFxyXG5cdFx0XHRcdCdzbGlkZS10b3AnOiAndHJhbnNsYXRlWScsXHJcblx0XHRcdFx0J3NsaWRlLXJpZ2h0JzogJ3RyYW5zbGF0ZVgnLFxyXG5cdFx0XHRcdCdzbGlkZS1ib3R0b20nOiAndHJhbnNsYXRlWScsXHJcblx0XHRcdFx0J3NsaWRlLWxlZnQnOiAndHJhbnNsYXRlWCcsXHJcblx0XHRcdFx0J3pvb20taW4nOiAnc2NhbGUnLFxyXG5cdFx0XHRcdCd6b29tLW91dCc6ICdzY2FsZSdcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8vIOmpvOWzsOi9rOS4reaoque6v1xyXG5cdFx0dG9MaW5lKG5hbWUpIHtcclxuXHRcdFx0cmV0dXJuIG5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCAnLSQxJykudG9Mb3dlckNhc2UoKVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 17 */
/*!*****************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/拾音/ShiYin/uni_modules/uni-transition/components/uni-transition/createAnimation.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.createAnimation = createAnimation;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} // const defaultOption = {\n// \tduration: 300,\n// \ttimingFunction: 'linear',\n// \tdelay: 0,\n// \ttransformOrigin: '50% 50% 0'\n// }\n\nvar nvueAnimation = __webpack_provided_uni_dot_requireNativePlugin('animation');var\n\nMPAnimation = /*#__PURE__*/function () {\n  function MPAnimation(options, _this) {_classCallCheck(this, MPAnimation);\n    this.options = options;\n    this.animation = uni.createAnimation(options);\n    this.currentStepAnimates = {};\n    this.next = 0;\n    this.$ = _this;\n\n  }_createClass(MPAnimation, [{ key: \"_nvuePushAnimates\", value: function _nvuePushAnimates(\n\n    type, args) {\n      var aniObj = this.currentStepAnimates[this.next];\n      var styles = {};\n      if (!aniObj) {\n        styles = {\n          styles: {},\n          config: {} };\n\n      } else {\n        styles = aniObj;\n      }\n      if (animateTypes1.includes(type)) {\n        if (!styles.styles.transform) {\n          styles.styles.transform = '';\n        }\n        var unit = '';\n        if (type === 'rotate') {\n          unit = 'deg';\n        }\n        styles.styles.transform += \"\".concat(type, \"(\").concat(args + unit, \") \");\n      } else {\n        styles.styles[type] = \"\".concat(args);\n      }\n      this.currentStepAnimates[this.next] = styles;\n    } }, { key: \"_animateRun\", value: function _animateRun()\n    {var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var ref = this.$.$refs['ani'].ref;\n      if (!ref) return;\n      return new Promise(function (resolve, reject) {\n        nvueAnimation.transition(ref, _objectSpread({\n          styles: styles },\n        config),\n        function (res) {\n          resolve();\n        });\n      });\n    } }, { key: \"_nvueNextAnimate\", value: function _nvueNextAnimate(\n\n    animates) {var _this2 = this;var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var fn = arguments.length > 2 ? arguments[2] : undefined;\n      var obj = animates[step];\n      if (obj) {var\n\n        styles =\n\n        obj.styles,config = obj.config;\n        this._animateRun(styles, config).then(function () {\n          step += 1;\n          _this2._nvueNextAnimate(animates, step, fn);\n        });\n      } else {\n        this.currentStepAnimates = {};\n        typeof fn === 'function' && fn();\n        this.isEnd = true;\n      }\n    } }, { key: \"step\", value: function step()\n\n    {var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n\n\n\n      this.currentStepAnimates[this.next].config = Object.assign({}, this.options, config);\n      this.currentStepAnimates[this.next].styles.transformOrigin = this.currentStepAnimates[this.next].config.transformOrigin;\n      this.next++;\n\n      return this;\n    } }, { key: \"run\", value: function run(\n\n    fn) {\n\n\n\n\n\n\n\n      this.isEnd = false;\n      var ref = this.$.$refs['ani'] && this.$.$refs['ani'].ref;\n      if (!ref) return;\n      this._nvueNextAnimate(this.currentStepAnimates, 0, fn);\n      this.next = 0;\n\n    } }]);return MPAnimation;}();\n\n\n\nvar animateTypes1 = ['matrix', 'matrix3d', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scale3d',\n'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'translate', 'translate3d', 'translateX', 'translateY',\n'translateZ'];\n\nvar animateTypes2 = ['opacity', 'backgroundColor'];\nvar animateTypes3 = ['width', 'height', 'left', 'right', 'top', 'bottom'];\nanimateTypes1.concat(animateTypes2, animateTypes3).forEach(function (type) {\n  MPAnimation.prototype[type] = function () {for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}\n\n\n\n\n    this._nvuePushAnimates(type, args);\n\n    return this;\n  };\n});\n\nfunction createAnimation(option, _this) {\n  if (!_this) return;\n  clearTimeout(_this.timer);\n  return new MPAnimation(option, _this);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXRyYW5zaXRpb24vY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi9jcmVhdGVBbmltYXRpb24uanMiXSwibmFtZXMiOlsibnZ1ZUFuaW1hdGlvbiIsInVuaSIsIk1QQW5pbWF0aW9uIiwib3B0aW9ucyIsIl90aGlzIiwiYW5pbWF0aW9uIiwiY3JlYXRlQW5pbWF0aW9uIiwiY3VycmVudFN0ZXBBbmltYXRlcyIsIm5leHQiLCIkIiwidHlwZSIsImFyZ3MiLCJhbmlPYmoiLCJzdHlsZXMiLCJjb25maWciLCJhbmltYXRlVHlwZXMxIiwiaW5jbHVkZXMiLCJ0cmFuc2Zvcm0iLCJ1bml0IiwicmVmIiwiJHJlZnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRyYW5zaXRpb24iLCJyZXMiLCJhbmltYXRlcyIsInN0ZXAiLCJmbiIsIm9iaiIsIl9hbmltYXRlUnVuIiwidGhlbiIsIl9udnVlTmV4dEFuaW1hdGUiLCJpc0VuZCIsIk9iamVjdCIsImFzc2lnbiIsInRyYW5zZm9ybU9yaWdpbiIsImFuaW1hdGVUeXBlczIiLCJhbmltYXRlVHlwZXMzIiwiY29uY2F0IiwiZm9yRWFjaCIsInByb3RvdHlwZSIsIl9udnVlUHVzaEFuaW1hdGVzIiwib3B0aW9uIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiXSwibWFwcGluZ3MiOiJ1M0RBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBR0MsOENBQUEsQ0FBd0IsV0FBeEIsQ0FBdEIsQzs7QUFFTUMsVztBQUNMLHVCQUFZQyxPQUFaLEVBQXFCQyxLQUFyQixFQUE0QjtBQUMzQixTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLRSxTQUFMLEdBQWlCSixHQUFHLENBQUNLLGVBQUosQ0FBb0JILE9BQXBCLENBQWpCO0FBQ0EsU0FBS0ksbUJBQUwsR0FBMkIsRUFBM0I7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNBLFNBQUtDLENBQUwsR0FBU0wsS0FBVDs7QUFFQSxHOztBQUVpQk0sUSxFQUFNQyxJLEVBQU07QUFDN0IsVUFBSUMsTUFBTSxHQUFHLEtBQUtMLG1CQUFMLENBQXlCLEtBQUtDLElBQTlCLENBQWI7QUFDQSxVQUFJSyxNQUFNLEdBQUcsRUFBYjtBQUNBLFVBQUksQ0FBQ0QsTUFBTCxFQUFhO0FBQ1pDLGNBQU0sR0FBRztBQUNSQSxnQkFBTSxFQUFFLEVBREE7QUFFUkMsZ0JBQU0sRUFBRSxFQUZBLEVBQVQ7O0FBSUEsT0FMRCxNQUtPO0FBQ05ELGNBQU0sR0FBR0QsTUFBVDtBQUNBO0FBQ0QsVUFBSUcsYUFBYSxDQUFDQyxRQUFkLENBQXVCTixJQUF2QixDQUFKLEVBQWtDO0FBQ2pDLFlBQUksQ0FBQ0csTUFBTSxDQUFDQSxNQUFQLENBQWNJLFNBQW5CLEVBQThCO0FBQzdCSixnQkFBTSxDQUFDQSxNQUFQLENBQWNJLFNBQWQsR0FBMEIsRUFBMUI7QUFDQTtBQUNELFlBQUlDLElBQUksR0FBRyxFQUFYO0FBQ0EsWUFBR1IsSUFBSSxLQUFLLFFBQVosRUFBcUI7QUFDcEJRLGNBQUksR0FBRyxLQUFQO0FBQ0E7QUFDREwsY0FBTSxDQUFDQSxNQUFQLENBQWNJLFNBQWQsY0FBOEJQLElBQTlCLGNBQXNDQyxJQUFJLEdBQUNPLElBQTNDO0FBQ0EsT0FURCxNQVNPO0FBQ05MLGNBQU0sQ0FBQ0EsTUFBUCxDQUFjSCxJQUFkLGNBQXlCQyxJQUF6QjtBQUNBO0FBQ0QsV0FBS0osbUJBQUwsQ0FBeUIsS0FBS0MsSUFBOUIsSUFBc0NLLE1BQXRDO0FBQ0EsSztBQUNxQyxTQUExQkEsTUFBMEIsdUVBQWpCLEVBQWlCLEtBQWJDLE1BQWEsdUVBQUosRUFBSTtBQUNyQyxVQUFJSyxHQUFHLEdBQUcsS0FBS1YsQ0FBTCxDQUFPVyxLQUFQLENBQWEsS0FBYixFQUFvQkQsR0FBOUI7QUFDQSxVQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNWLGFBQU8sSUFBSUUsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN2Q3ZCLHFCQUFhLENBQUN3QixVQUFkLENBQXlCTCxHQUF6QjtBQUNDTixnQkFBTSxFQUFOQSxNQUREO0FBRUlDLGNBRko7QUFHRyxrQkFBQVcsR0FBRyxFQUFJO0FBQ1RILGlCQUFPO0FBQ1AsU0FMRDtBQU1BLE9BUE0sQ0FBUDtBQVFBLEs7O0FBRWdCSSxZLEVBQXdCLHVCQUFkQyxJQUFjLHVFQUFQLENBQU8sS0FBSkMsRUFBSTtBQUN4QyxVQUFJQyxHQUFHLEdBQUdILFFBQVEsQ0FBQ0MsSUFBRCxDQUFsQjtBQUNBLFVBQUlFLEdBQUosRUFBUzs7QUFFUGhCLGNBRk87O0FBSUpnQixXQUpJLENBRVBoQixNQUZPLENBR1BDLE1BSE8sR0FJSmUsR0FKSSxDQUdQZixNQUhPO0FBS1IsYUFBS2dCLFdBQUwsQ0FBaUJqQixNQUFqQixFQUF5QkMsTUFBekIsRUFBaUNpQixJQUFqQyxDQUFzQyxZQUFNO0FBQzNDSixjQUFJLElBQUksQ0FBUjtBQUNBLGdCQUFJLENBQUNLLGdCQUFMLENBQXNCTixRQUF0QixFQUFnQ0MsSUFBaEMsRUFBc0NDLEVBQXRDO0FBQ0EsU0FIRDtBQUlBLE9BVEQsTUFTTztBQUNOLGFBQUtyQixtQkFBTCxHQUEyQixFQUEzQjtBQUNBLGVBQU9xQixFQUFQLEtBQWMsVUFBZCxJQUE0QkEsRUFBRSxFQUE5QjtBQUNBLGFBQUtLLEtBQUwsR0FBYSxJQUFiO0FBQ0E7QUFDRCxLOztBQUVpQixTQUFibkIsTUFBYSx1RUFBSixFQUFJOzs7OztBQUtqQixXQUFLUCxtQkFBTCxDQUF5QixLQUFLQyxJQUE5QixFQUFvQ00sTUFBcEMsR0FBNkNvQixNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUtoQyxPQUF2QixFQUFnQ1csTUFBaEMsQ0FBN0M7QUFDQSxXQUFLUCxtQkFBTCxDQUF5QixLQUFLQyxJQUE5QixFQUFvQ0ssTUFBcEMsQ0FBMkN1QixlQUEzQyxHQUE2RCxLQUFLN0IsbUJBQUwsQ0FBeUIsS0FBS0MsSUFBOUIsRUFBb0NNLE1BQXBDLENBQTJDc0IsZUFBeEc7QUFDQSxXQUFLNUIsSUFBTDs7QUFFQSxhQUFPLElBQVA7QUFDQSxLOztBQUVHb0IsTSxFQUFJOzs7Ozs7OztBQVFQLFdBQUtLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsVUFBSWQsR0FBRyxHQUFHLEtBQUtWLENBQUwsQ0FBT1csS0FBUCxDQUFhLEtBQWIsS0FBdUIsS0FBS1gsQ0FBTCxDQUFPVyxLQUFQLENBQWEsS0FBYixFQUFvQkQsR0FBckQ7QUFDQSxVQUFHLENBQUNBLEdBQUosRUFBUztBQUNULFdBQUthLGdCQUFMLENBQXNCLEtBQUt6QixtQkFBM0IsRUFBZ0QsQ0FBaEQsRUFBbURxQixFQUFuRDtBQUNBLFdBQUtwQixJQUFMLEdBQVksQ0FBWjs7QUFFQSxLOzs7O0FBSUYsSUFBTU8sYUFBYSxHQUFHLENBQUMsUUFBRCxFQUFXLFVBQVgsRUFBdUIsUUFBdkIsRUFBaUMsVUFBakMsRUFBNkMsU0FBN0MsRUFBd0QsU0FBeEQsRUFBbUUsU0FBbkUsRUFBOEUsT0FBOUUsRUFBdUYsU0FBdkY7QUFDckIsUUFEcUIsRUFDWCxRQURXLEVBQ0QsUUFEQyxFQUNTLE1BRFQsRUFDaUIsT0FEakIsRUFDMEIsT0FEMUIsRUFDbUMsV0FEbkMsRUFDZ0QsYUFEaEQsRUFDK0QsWUFEL0QsRUFDNkUsWUFEN0U7QUFFckIsWUFGcUIsQ0FBdEI7O0FBSUEsSUFBTXNCLGFBQWEsR0FBRyxDQUFDLFNBQUQsRUFBWSxpQkFBWixDQUF0QjtBQUNBLElBQU1DLGFBQWEsR0FBRyxDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLE1BQXBCLEVBQTRCLE9BQTVCLEVBQXFDLEtBQXJDLEVBQTRDLFFBQTVDLENBQXRCO0FBQ0F2QixhQUFhLENBQUN3QixNQUFkLENBQXFCRixhQUFyQixFQUFvQ0MsYUFBcEMsRUFBbURFLE9BQW5ELENBQTJELFVBQUE5QixJQUFJLEVBQUk7QUFDbEVSLGFBQVcsQ0FBQ3VDLFNBQVosQ0FBc0IvQixJQUF0QixJQUE4QixZQUFrQixtQ0FBTkMsSUFBTSxvREFBTkEsSUFBTTs7Ozs7QUFLL0MsU0FBSytCLGlCQUFMLENBQXVCaEMsSUFBdkIsRUFBNkJDLElBQTdCOztBQUVBLFdBQU8sSUFBUDtBQUNBLEdBUkQ7QUFTQSxDQVZEOztBQVlPLFNBQVNMLGVBQVQsQ0FBeUJxQyxNQUF6QixFQUFpQ3ZDLEtBQWpDLEVBQXdDO0FBQzlDLE1BQUcsQ0FBQ0EsS0FBSixFQUFXO0FBQ1h3QyxjQUFZLENBQUN4QyxLQUFLLENBQUN5QyxLQUFQLENBQVo7QUFDQSxTQUFPLElBQUkzQyxXQUFKLENBQWdCeUMsTUFBaEIsRUFBd0J2QyxLQUF4QixDQUFQO0FBQ0EsQyIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGRlZmF1bHRPcHRpb24gPSB7XHJcbi8vIFx0ZHVyYXRpb246IDMwMCxcclxuLy8gXHR0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXHJcbi8vIFx0ZGVsYXk6IDAsXHJcbi8vIFx0dHJhbnNmb3JtT3JpZ2luOiAnNTAlIDUwJSAwJ1xyXG4vLyB9XHJcblxyXG5jb25zdCBudnVlQW5pbWF0aW9uID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ2FuaW1hdGlvbicpXHJcblxyXG5jbGFzcyBNUEFuaW1hdGlvbiB7XHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucywgX3RoaXMpIHtcclxuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcclxuXHRcdHRoaXMuYW5pbWF0aW9uID0gdW5pLmNyZWF0ZUFuaW1hdGlvbihvcHRpb25zKVxyXG5cdFx0dGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzID0ge31cclxuXHRcdHRoaXMubmV4dCA9IDBcclxuXHRcdHRoaXMuJCA9IF90aGlzXHJcblxyXG5cdH1cclxuXHJcblx0X252dWVQdXNoQW5pbWF0ZXModHlwZSwgYXJncykge1xyXG5cdFx0bGV0IGFuaU9iaiA9IHRoaXMuY3VycmVudFN0ZXBBbmltYXRlc1t0aGlzLm5leHRdXHJcblx0XHRsZXQgc3R5bGVzID0ge31cclxuXHRcdGlmICghYW5pT2JqKSB7XHJcblx0XHRcdHN0eWxlcyA9IHtcclxuXHRcdFx0XHRzdHlsZXM6IHt9LFxyXG5cdFx0XHRcdGNvbmZpZzoge31cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVzID0gYW5pT2JqXHJcblx0XHR9XHJcblx0XHRpZiAoYW5pbWF0ZVR5cGVzMS5pbmNsdWRlcyh0eXBlKSkge1xyXG5cdFx0XHRpZiAoIXN0eWxlcy5zdHlsZXMudHJhbnNmb3JtKSB7XHJcblx0XHRcdFx0c3R5bGVzLnN0eWxlcy50cmFuc2Zvcm0gPSAnJ1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCB1bml0ID0gJydcclxuXHRcdFx0aWYodHlwZSA9PT0gJ3JvdGF0ZScpe1xyXG5cdFx0XHRcdHVuaXQgPSAnZGVnJ1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlcy5zdHlsZXMudHJhbnNmb3JtICs9IGAke3R5cGV9KCR7YXJncyt1bml0fSkgYFxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVzLnN0eWxlc1t0eXBlXSA9IGAke2FyZ3N9YFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzW3RoaXMubmV4dF0gPSBzdHlsZXNcclxuXHR9XHJcblx0X2FuaW1hdGVSdW4oc3R5bGVzID0ge30sIGNvbmZpZyA9IHt9KSB7XHJcblx0XHRsZXQgcmVmID0gdGhpcy4kLiRyZWZzWydhbmknXS5yZWZcclxuXHRcdGlmICghcmVmKSByZXR1cm5cclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdG52dWVBbmltYXRpb24udHJhbnNpdGlvbihyZWYsIHtcclxuXHRcdFx0XHRzdHlsZXMsXHJcblx0XHRcdFx0Li4uY29uZmlnXHJcblx0XHRcdH0sIHJlcyA9PiB7XHJcblx0XHRcdFx0cmVzb2x2ZSgpXHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0X252dWVOZXh0QW5pbWF0ZShhbmltYXRlcywgc3RlcCA9IDAsIGZuKSB7XHJcblx0XHRsZXQgb2JqID0gYW5pbWF0ZXNbc3RlcF1cclxuXHRcdGlmIChvYmopIHtcclxuXHRcdFx0bGV0IHtcclxuXHRcdFx0XHRzdHlsZXMsXHJcblx0XHRcdFx0Y29uZmlnXHJcblx0XHRcdH0gPSBvYmpcclxuXHRcdFx0dGhpcy5fYW5pbWF0ZVJ1bihzdHlsZXMsIGNvbmZpZykudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0c3RlcCArPSAxXHJcblx0XHRcdFx0dGhpcy5fbnZ1ZU5leHRBbmltYXRlKGFuaW1hdGVzLCBzdGVwLCBmbilcclxuXHRcdFx0fSlcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY3VycmVudFN0ZXBBbmltYXRlcyA9IHt9XHJcblx0XHRcdHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiBmbigpXHJcblx0XHRcdHRoaXMuaXNFbmQgPSB0cnVlXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGVwKGNvbmZpZyA9IHt9KSB7XHJcblxyXG5cclxuXHJcblxyXG5cdFx0dGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzW3RoaXMubmV4dF0uY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCBjb25maWcpXHJcblx0XHR0aGlzLmN1cnJlbnRTdGVwQW5pbWF0ZXNbdGhpcy5uZXh0XS5zdHlsZXMudHJhbnNmb3JtT3JpZ2luID0gdGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzW3RoaXMubmV4dF0uY29uZmlnLnRyYW5zZm9ybU9yaWdpblxyXG5cdFx0dGhpcy5uZXh0KytcclxuXHJcblx0XHRyZXR1cm4gdGhpc1xyXG5cdH1cclxuXHJcblx0cnVuKGZuKSB7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdFx0dGhpcy5pc0VuZCA9IGZhbHNlXHJcblx0XHRsZXQgcmVmID0gdGhpcy4kLiRyZWZzWydhbmknXSAmJiB0aGlzLiQuJHJlZnNbJ2FuaSddLnJlZlxyXG5cdFx0aWYoIXJlZikgcmV0dXJuXHJcblx0XHR0aGlzLl9udnVlTmV4dEFuaW1hdGUodGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzLCAwLCBmbilcclxuXHRcdHRoaXMubmV4dCA9IDBcclxuXHJcblx0fVxyXG59XHJcblxyXG5cclxuY29uc3QgYW5pbWF0ZVR5cGVzMSA9IFsnbWF0cml4JywgJ21hdHJpeDNkJywgJ3JvdGF0ZScsICdyb3RhdGUzZCcsICdyb3RhdGVYJywgJ3JvdGF0ZVknLCAncm90YXRlWicsICdzY2FsZScsICdzY2FsZTNkJyxcclxuXHQnc2NhbGVYJywgJ3NjYWxlWScsICdzY2FsZVonLCAnc2tldycsICdza2V3WCcsICdza2V3WScsICd0cmFuc2xhdGUnLCAndHJhbnNsYXRlM2QnLCAndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJyxcclxuXHQndHJhbnNsYXRlWidcclxuXVxyXG5jb25zdCBhbmltYXRlVHlwZXMyID0gWydvcGFjaXR5JywgJ2JhY2tncm91bmRDb2xvciddXHJcbmNvbnN0IGFuaW1hdGVUeXBlczMgPSBbJ3dpZHRoJywgJ2hlaWdodCcsICdsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXVxyXG5hbmltYXRlVHlwZXMxLmNvbmNhdChhbmltYXRlVHlwZXMyLCBhbmltYXRlVHlwZXMzKS5mb3JFYWNoKHR5cGUgPT4ge1xyXG5cdE1QQW5pbWF0aW9uLnByb3RvdHlwZVt0eXBlXSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcclxuXHJcblxyXG5cclxuXHJcblx0XHR0aGlzLl9udnVlUHVzaEFuaW1hdGVzKHR5cGUsIGFyZ3MpXHJcblxyXG5cdFx0cmV0dXJuIHRoaXNcclxuXHR9XHJcbn0pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5pbWF0aW9uKG9wdGlvbiwgX3RoaXMpIHtcclxuXHRpZighX3RoaXMpIHJldHVyblxyXG5cdGNsZWFyVGltZW91dChfdGhpcy50aW1lcilcclxuXHRyZXR1cm4gbmV3IE1QQW5pbWF0aW9uKG9wdGlvbiwgX3RoaXMpXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = requireNativePlugin;function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 19 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 20 */
/*!***************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/拾音/ShiYin/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=script&lang=js& */ 21);\n/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdoQixDQUFnQixzakJBQUcsRUFBQyIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcdGVuZ3h1blxcXFxIQnVpbGRlclguMy40LjcuMjAyMjA0MjJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRTpcXFxcdGVuZ3h1blxcXFxIQnVpbGRlclguMy40LjcuMjAyMjA0MjJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFFOlxcXFx0ZW5neHVuXFxcXEhCdWlsZGVyWC4zLjQuNy4yMDIyMDQyMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUU6XFxcXHRlbmd4dW5cXFxcSEJ1aWxkZXJYLjMuNC43LjIwMjIwNDIyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUU6XFxcXHRlbmd4dW5cXFxcSEJ1aWxkZXJYLjMuNC43LjIwMjIwNDIyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRTpcXFxcdGVuZ3h1blxcXFxIQnVpbGRlclguMy40LjcuMjAyMjA0MjJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Lenovo/Desktop/拾音/ShiYin/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n/**\n * PopUp 弹出层\n * @description 弹出层组件，为了解决遮罩弹层的问题\n * @tutorial https://ext.dcloud.net.cn/plugin?id=329\n * @property {String} type = [top|center|bottom|left|right|message|dialog|share] 弹出方式\n * \t@value top 顶部弹出\n * \t@value center 中间弹出\n * \t@value bottom 底部弹出\n * \t@value left\t\t左侧弹出\n * \t@value right  右侧弹出\n * \t@value message 消息提示\n * \t@value dialog 对话框\n * \t@value share 底部分享示例\n * @property {Boolean} animation = [true|false] 是否开启动画\n * @property {Boolean} maskClick = [true|false] 蒙版点击是否关闭弹窗(废弃)\n * @property {Boolean} isMaskClick = [true|false] 蒙版点击是否关闭弹窗\n * @property {String}  backgroundColor 主窗口背景色\n * @property {String}  maskBackgroundColor 蒙版颜色\n * @property {Boolean} safeArea\t\t   是否适配底部安全区\n * @event {Function} change 打开关闭弹窗触发，e={show: false}\n * @event {Function} maskClick 点击遮罩触发\n */var _default =\n\n{\n  name: 'uniPopup',\n  components: {},\n\n\n\n\n  emits: ['change', 'maskClick'],\n  props: {\n    // 开启动画\n    animation: {\n      type: Boolean,\n      default: true },\n\n    // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层\n    // message: 消息提示 ; dialog : 对话框\n    type: {\n      type: String,\n      default: 'center' },\n\n    // maskClick\n    isMaskClick: {\n      type: Boolean,\n      default: null },\n\n    // TODO 2 个版本后废弃属性 ，使用 isMaskClick\n    maskClick: {\n      type: Boolean,\n      default: null },\n\n    backgroundColor: {\n      type: String,\n      default: 'none' },\n\n    safeArea: {\n      type: Boolean,\n      default: true },\n\n    maskBackgroundColor: {\n      type: String,\n      default: 'rgba(0, 0, 0, 0.4)' } },\n\n\n\n  watch: {\n    /**\n            * 监听type类型\n            */\n    type: {\n      handler: function handler(type) {\n        if (!this.config[type]) return;\n        this[this.config[type]](true);\n      },\n      immediate: true },\n\n    isDesktop: {\n      handler: function handler(newVal) {\n        if (!this.config[newVal]) return;\n        this[this.config[this.type]](true);\n      },\n      immediate: true },\n\n    /**\n                          * 监听遮罩是否可点击\n                          * @param {Object} val\n                          */\n    maskClick: {\n      handler: function handler(val) {\n        this.mkclick = val;\n      },\n      immediate: true },\n\n    isMaskClick: {\n      handler: function handler(val) {\n        this.mkclick = val;\n      },\n      immediate: true },\n\n    // H5 下禁止底部滚动\n    showPopup: function showPopup(show) {\n\n\n\n\n    } },\n\n  data: function data() {\n    return {\n      duration: 300,\n      ani: [],\n      showPopup: false,\n      showTrans: false,\n      popupWidth: 0,\n      popupHeight: 0,\n      config: {\n        top: 'top',\n        bottom: 'bottom',\n        center: 'center',\n        left: 'left',\n        right: 'right',\n        message: 'top',\n        dialog: 'center',\n        share: 'bottom' },\n\n      maskClass: {\n        position: 'fixed',\n        bottom: 0,\n        top: 0,\n        left: 0,\n        right: 0,\n        backgroundColor: 'rgba(0, 0, 0, 0.4)' },\n\n      transClass: {\n        position: 'fixed',\n        left: 0,\n        right: 0 },\n\n      maskShow: true,\n      mkclick: true,\n      popupstyle: this.isDesktop ? 'fixforpc-top' : 'top' };\n\n  },\n  computed: {\n    isDesktop: function isDesktop() {\n      return this.popupWidth >= 500 && this.popupHeight >= 500;\n    },\n    bg: function bg() {\n      if (this.backgroundColor === '' || this.backgroundColor === 'none') {\n        return 'transparent';\n      }\n      return this.backgroundColor;\n    } },\n\n  mounted: function mounted() {var _this = this;\n    var fixSize = function fixSize() {var _uni$getSystemInfoSyn =\n\n\n\n\n\n\n\n      uni.getSystemInfoSync(),windowWidth = _uni$getSystemInfoSyn.windowWidth,windowHeight = _uni$getSystemInfoSyn.windowHeight,windowTop = _uni$getSystemInfoSyn.windowTop,safeArea = _uni$getSystemInfoSyn.safeArea,screenHeight = _uni$getSystemInfoSyn.screenHeight,safeAreaInsets = _uni$getSystemInfoSyn.safeAreaInsets;\n      _this.popupWidth = windowWidth;\n      _this.popupHeight = windowHeight + (windowTop || 0);\n      // TODO fix by mehaotian 是否适配底部安全区 ,目前微信ios 、和 app ios 计算有差异，需要框架修复\n      if (safeArea && _this.safeArea) {\n\n\n\n\n        _this.safeAreaInsets = safeAreaInsets.bottom;\n\n      } else {\n        _this.safeAreaInsets = 0;\n      }\n    };\n    fixSize();\n\n\n\n\n\n\n  },\n\n  // TODO vue2\n  destroyed: function destroyed() {\n    this.setH5Visible();\n  },\n\n\n\n\n\n\n\n  created: function created() {\n    // this.mkclick =  this.isMaskClick || this.maskClick\n    if (this.isMaskClick === null && this.maskClick === null) {\n      this.mkclick = true;\n    } else {\n      this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;\n    }\n    if (this.animation) {\n      this.duration = 300;\n    } else {\n      this.duration = 0;\n    }\n    // TODO 处理 message 组件生命周期异常的问题\n    this.messageChild = null;\n    // TODO 解决头条冒泡的问题\n    this.clearPropagation = false;\n    this.maskClass.backgroundColor = this.maskBackgroundColor;\n  },\n  methods: {\n    setH5Visible: function setH5Visible() {\n\n\n\n\n    },\n    /**\n        * 公用方法，不显示遮罩层\n        */\n    closeMask: function closeMask() {\n      this.maskShow = false;\n    },\n    /**\n        * 公用方法，遮罩层禁止点击\n        */\n    disableMask: function disableMask() {\n      this.mkclick = false;\n    },\n    // TODO nvue 取消冒泡\n    clear: function clear(e) {\n\n\n\n      this.clearPropagation = true;\n    },\n\n    open: function open(direction) {\n      // fix by mehaotian 处理快速打开关闭的情况\n      if (this.showPopup) {\n        clearTimeout(this.timer);\n        this.showPopup = false;\n      }\n      var innerType = ['top', 'center', 'bottom', 'left', 'right', 'message', 'dialog', 'share'];\n      if (!(direction && innerType.indexOf(direction) !== -1)) {\n        direction = this.type;\n      }\n      if (!this.config[direction]) {\n        __f__(\"error\", '缺少类型：', direction, \" at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:280\");\n        return;\n      }\n      this[this.config[direction]]();\n      this.$emit('change', {\n        show: true,\n        type: direction });\n\n    },\n    close: function close(type) {var _this2 = this;\n      this.showTrans = false;\n      this.$emit('change', {\n        show: false,\n        type: this.type });\n\n      clearTimeout(this.timer);\n      // // 自定义关闭事件\n      // this.customOpen && this.customClose()\n      this.timer = setTimeout(function () {\n        _this2.showPopup = false;\n      }, 300);\n    },\n    // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容\n    touchstart: function touchstart() {\n      this.clearPropagation = false;\n    },\n\n    onTap: function onTap() {\n      if (this.clearPropagation) {\n        // fix by mehaotian 兼容 nvue\n        this.clearPropagation = false;\n        return;\n      }\n      this.$emit('maskClick');\n      if (!this.mkclick) return;\n      this.close();\n    },\n    /**\n        * 顶部弹出样式处理\n        */\n    top: function top(type) {var _this3 = this;\n      this.popupstyle = this.isDesktop ? 'fixforpc-top' : 'top';\n      this.ani = ['slide-top'];\n      this.transClass = {\n        position: 'fixed',\n        left: 0,\n        right: 0,\n        backgroundColor: this.bg };\n\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n      this.$nextTick(function () {\n        if (_this3.messageChild && _this3.type === 'message') {\n          _this3.messageChild.timerClose();\n        }\n      });\n    },\n    /**\n        * 底部弹出样式处理\n        */\n    bottom: function bottom(type) {\n      this.popupstyle = 'bottom';\n      this.ani = ['slide-bottom'];\n      this.transClass = {\n        position: 'fixed',\n        left: 0,\n        right: 0,\n        bottom: 0,\n        paddingBottom: this.safeAreaInsets + 'px',\n        backgroundColor: this.bg };\n\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    },\n    /**\n        * 中间弹出样式处理\n        */\n    center: function center(type) {\n      this.popupstyle = 'center';\n      this.ani = ['zoom-out', 'fade'];\n      this.transClass = {\n        position: 'fixed',\n\n\n\n\n        bottom: 0,\n        left: 0,\n        right: 0,\n        top: 0,\n        justifyContent: 'center',\n        alignItems: 'center' };\n\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    },\n    left: function left(type) {\n      this.popupstyle = 'left';\n      this.ani = ['slide-left'];\n      this.transClass = {\n        position: 'fixed',\n        left: 0,\n        bottom: 0,\n        top: 0,\n        backgroundColor: this.bg };\n\n\n\n\n\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    },\n    right: function right(type) {\n      this.popupstyle = 'right';\n      this.ani = ['slide-right'];\n      this.transClass = {\n        position: 'fixed',\n        bottom: 0,\n        right: 0,\n        top: 0,\n        backgroundColor: this.bg };\n\n\n\n\n\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 16)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXBvcHVwL2NvbXBvbmVudHMvdW5pLXBvcHVwL3VuaS1wb3B1cC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQTs7Ozs7QUFPQSxnQ0FQQTtBQVFBO0FBQ0E7QUFDQTtBQUNBLG1CQURBO0FBRUEsbUJBRkEsRUFGQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLHVCQUZBLEVBUkE7O0FBWUE7QUFDQTtBQUNBLG1CQURBO0FBRUEsbUJBRkEsRUFiQTs7QUFpQkE7QUFDQTtBQUNBLG1CQURBO0FBRUEsbUJBRkEsRUFsQkE7O0FBc0JBO0FBQ0Esa0JBREE7QUFFQSxxQkFGQSxFQXRCQTs7QUEwQkE7QUFDQSxtQkFEQTtBQUVBLG1CQUZBLEVBMUJBOztBQThCQTtBQUNBLGtCQURBO0FBRUEsbUNBRkEsRUE5QkEsRUFSQTs7OztBQTRDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7QUFLQSxxQkFMQSxFQUpBOztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQTtBQUtBLHFCQUxBLEVBWEE7O0FBa0JBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsT0FIQTtBQUlBLHFCQUpBLEVBdEJBOztBQTRCQTtBQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUEscUJBSkEsRUE1QkE7O0FBa0NBO0FBQ0EsYUFuQ0EscUJBbUNBLElBbkNBLEVBbUNBOzs7OztBQUtBLEtBeENBLEVBNUNBOztBQXNGQSxNQXRGQSxrQkFzRkE7QUFDQTtBQUNBLG1CQURBO0FBRUEsYUFGQTtBQUdBLHNCQUhBO0FBSUEsc0JBSkE7QUFLQSxtQkFMQTtBQU1BLG9CQU5BO0FBT0E7QUFDQSxrQkFEQTtBQUVBLHdCQUZBO0FBR0Esd0JBSEE7QUFJQSxvQkFKQTtBQUtBLHNCQUxBO0FBTUEsc0JBTkE7QUFPQSx3QkFQQTtBQVFBLHVCQVJBLEVBUEE7O0FBaUJBO0FBQ0EseUJBREE7QUFFQSxpQkFGQTtBQUdBLGNBSEE7QUFJQSxlQUpBO0FBS0EsZ0JBTEE7QUFNQSw2Q0FOQSxFQWpCQTs7QUF5QkE7QUFDQSx5QkFEQTtBQUVBLGVBRkE7QUFHQSxnQkFIQSxFQXpCQTs7QUE4QkEsb0JBOUJBO0FBK0JBLG1CQS9CQTtBQWdDQSx5REFoQ0E7O0FBa0NBLEdBekhBO0FBMEhBO0FBQ0EsYUFEQSx1QkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLE1BSkEsZ0JBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBVEEsRUExSEE7O0FBcUlBLFNBcklBLHFCQXFJQTtBQUNBOzs7Ozs7OztBQVFBLDZCQVJBLENBRUEsV0FGQSx5QkFFQSxXQUZBLENBR0EsWUFIQSx5QkFHQSxZQUhBLENBSUEsU0FKQSx5QkFJQSxTQUpBLENBS0EsUUFMQSx5QkFLQSxRQUxBLENBTUEsWUFOQSx5QkFNQSxZQU5BLENBT0EsY0FQQSx5QkFPQSxjQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUEsT0FQQSxNQU9BO0FBQ0E7QUFDQTtBQUNBLEtBdEJBO0FBdUJBOzs7Ozs7O0FBT0EsR0FwS0E7O0FBc0tBO0FBQ0EsV0F2S0EsdUJBdUtBO0FBQ0E7QUFDQSxHQXpLQTs7Ozs7Ozs7QUFpTEEsU0FqTEEscUJBaUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBbE1BO0FBbU1BO0FBQ0EsZ0JBREEsMEJBQ0E7Ozs7O0FBS0EsS0FOQTtBQU9BOzs7QUFHQSxhQVZBLHVCQVVBO0FBQ0E7QUFDQSxLQVpBO0FBYUE7OztBQUdBLGVBaEJBLHlCQWdCQTtBQUNBO0FBQ0EsS0FsQkE7QUFtQkE7QUFDQSxTQXBCQSxpQkFvQkEsQ0FwQkEsRUFvQkE7Ozs7QUFJQTtBQUNBLEtBekJBOztBQTJCQSxRQTNCQSxnQkEyQkEsU0EzQkEsRUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLHVCQUZBOztBQUlBLEtBOUNBO0FBK0NBLFNBL0NBLGlCQStDQSxJQS9DQSxFQStDQTtBQUNBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLHVCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsR0FGQTtBQUdBLEtBM0RBO0FBNERBO0FBQ0EsY0E3REEsd0JBNkRBO0FBQ0E7QUFDQSxLQS9EQTs7QUFpRUEsU0FqRUEsbUJBaUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBMUVBO0FBMkVBOzs7QUFHQSxPQTlFQSxlQThFQSxJQTlFQSxFQThFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUEsZUFGQTtBQUdBLGdCQUhBO0FBSUEsZ0NBSkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7QUFLQSxLQWhHQTtBQWlHQTs7O0FBR0EsVUFwR0Esa0JBb0dBLElBcEdBLEVBb0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBREE7QUFFQSxlQUZBO0FBR0EsZ0JBSEE7QUFJQSxpQkFKQTtBQUtBLGlEQUxBO0FBTUEsZ0NBTkE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQW5IQTtBQW9IQTs7O0FBR0EsVUF2SEEsa0JBdUhBLElBdkhBLEVBdUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBREE7Ozs7O0FBTUEsaUJBTkE7QUFPQSxlQVBBO0FBUUEsZ0JBUkE7QUFTQSxjQVRBO0FBVUEsZ0NBVkE7QUFXQSw0QkFYQTs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBM0lBO0FBNElBLFFBNUlBLGdCQTRJQSxJQTVJQSxFQTRJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUEsZUFGQTtBQUdBLGlCQUhBO0FBSUEsY0FKQTtBQUtBLGdDQUxBOzs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBOUpBO0FBK0pBLFNBL0pBLGlCQStKQSxJQS9KQSxFQStKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUEsaUJBRkE7QUFHQSxnQkFIQTtBQUlBLGNBSkE7QUFLQSxnQ0FMQTs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWpMQSxFQW5NQSxFIiwiZmlsZSI6IjIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IHYtaWY9XCJzaG93UG9wdXBcIiBjbGFzcz1cInVuaS1wb3B1cFwiIDpjbGFzcz1cIltwb3B1cHN0eWxlLCBpc0Rlc2t0b3AgPyAnZml4Zm9ycGMtei1pbmRleCcgOiAnJ11cIj5cclxuXHRcdDx2aWV3IEB0b3VjaHN0YXJ0PVwidG91Y2hzdGFydFwiPlxyXG5cdFx0XHQ8dW5pLXRyYW5zaXRpb24ga2V5PVwiMVwiIHYtaWY9XCJtYXNrU2hvd1wiIG5hbWU9XCJtYXNrXCIgbW9kZS1jbGFzcz1cImZhZGVcIiA6c3R5bGVzPVwibWFza0NsYXNzXCJcclxuXHRcdFx0XHQ6ZHVyYXRpb249XCJkdXJhdGlvblwiIDpzaG93PVwic2hvd1RyYW5zXCIgQGNsaWNrPVwib25UYXBcIiAvPlxyXG5cdFx0XHQ8dW5pLXRyYW5zaXRpb24ga2V5PVwiMlwiIDptb2RlLWNsYXNzPVwiYW5pXCIgbmFtZT1cImNvbnRlbnRcIiA6c3R5bGVzPVwidHJhbnNDbGFzc1wiIDpkdXJhdGlvbj1cImR1cmF0aW9uXCJcclxuXHRcdFx0XHQ6c2hvdz1cInNob3dUcmFuc1wiIEBjbGljaz1cIm9uVGFwXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktcG9wdXBfX3dyYXBwZXJcIiA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogYmcgfVwiIDpjbGFzcz1cIltwb3B1cHN0eWxlXVwiIEBjbGljaz1cImNsZWFyXCI+XHJcblx0XHRcdFx0XHQ8c2xvdCAvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC91bmktdHJhbnNpdGlvbj5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0gI2lmZGVmIEg1IC0tPlxyXG5cdFx0PGtleXByZXNzIHYtaWY9XCJtYXNrU2hvd1wiIEBlc2M9XCJvblRhcFwiIC8+XHJcblx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdC8vICNpZmRlZiBINVxyXG5cdGltcG9ydCBrZXlwcmVzcyBmcm9tICcuL2tleXByZXNzLmpzJ1xyXG5cdC8vICNlbmRpZlxyXG5cclxuXHQvKipcclxuXHQgKiBQb3BVcCDlvLnlh7rlsYJcclxuXHQgKiBAZGVzY3JpcHRpb24g5by55Ye65bGC57uE5Lu277yM5Li65LqG6Kej5Yaz6YGu572p5by55bGC55qE6Zeu6aKYXHJcblx0ICogQHR1dG9yaWFsIGh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vcGx1Z2luP2lkPTMyOVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0eXBlID0gW3RvcHxjZW50ZXJ8Ym90dG9tfGxlZnR8cmlnaHR8bWVzc2FnZXxkaWFsb2d8c2hhcmVdIOW8ueWHuuaWueW8j1xyXG5cdCAqIFx0QHZhbHVlIHRvcCDpobbpg6jlvLnlh7pcclxuXHQgKiBcdEB2YWx1ZSBjZW50ZXIg5Lit6Ze05by55Ye6XHJcblx0ICogXHRAdmFsdWUgYm90dG9tIOW6lemDqOW8ueWHulxyXG5cdCAqIFx0QHZhbHVlIGxlZnRcdFx05bem5L6n5by55Ye6XHJcblx0ICogXHRAdmFsdWUgcmlnaHQgIOWPs+S+p+W8ueWHulxyXG5cdCAqIFx0QHZhbHVlIG1lc3NhZ2Ug5raI5oGv5o+Q56S6XHJcblx0ICogXHRAdmFsdWUgZGlhbG9nIOWvueivneahhlxyXG5cdCAqIFx0QHZhbHVlIHNoYXJlIOW6lemDqOWIhuS6q+ekuuS+i1xyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYW5pbWF0aW9uID0gW3RydWV8ZmFsc2VdIOaYr+WQpuW8gOWQr+WKqOeUu1xyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gbWFza0NsaWNrID0gW3RydWV8ZmFsc2VdIOiSmeeJiOeCueWHu+aYr+WQpuWFs+mXreW8ueeqlyjlup/lvIMpXHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBpc01hc2tDbGljayA9IFt0cnVlfGZhbHNlXSDokpnniYjngrnlh7vmmK/lkKblhbPpl63lvLnnqpdcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gIGJhY2tncm91bmRDb2xvciDkuLvnqpflj6Pog4zmma/oibJcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gIG1hc2tCYWNrZ3JvdW5kQ29sb3Ig6JKZ54mI6aKc6ImyXHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBzYWZlQXJlYVx0XHQgICDmmK/lkKbpgILphY3lupXpg6jlronlhajljLpcclxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBjaGFuZ2Ug5omT5byA5YWz6Zet5by556qX6Kem5Y+R77yMZT17c2hvdzogZmFsc2V9XHJcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gbWFza0NsaWNrIOeCueWHu+mBrue9qeinpuWPkVxyXG5cdCAqL1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAndW5pUG9wdXAnLFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHQvLyAjaWZkZWYgSDVcclxuXHRcdFx0a2V5cHJlc3NcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHR9LFxyXG5cdFx0ZW1pdHM6IFsnY2hhbmdlJywgJ21hc2tDbGljayddLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0Ly8g5byA5ZCv5Yqo55S7XHJcblx0XHRcdGFuaW1hdGlvbjoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlvLnlh7rlsYLnsbvlnovvvIzlj6/pgInlgLzvvIx0b3A6IOmhtumDqOW8ueWHuuWxgu+8m2JvdHRvbe+8muW6lemDqOW8ueWHuuWxgu+8m2NlbnRlcu+8muWFqOWxj+W8ueWHuuWxglxyXG5cdFx0XHQvLyBtZXNzYWdlOiDmtojmga/mj5DnpLogOyBkaWFsb2cgOiDlr7nor53moYZcclxuXHRcdFx0dHlwZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnY2VudGVyJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBtYXNrQ2xpY2tcclxuXHRcdFx0aXNNYXNrQ2xpY2s6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IG51bGxcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gVE9ETyAyIOS4queJiOacrOWQjuW6n+W8g+WxnuaApyDvvIzkvb/nlKggaXNNYXNrQ2xpY2tcclxuXHRcdFx0bWFza0NsaWNrOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiBudWxsXHJcblx0XHRcdH0sXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnbm9uZSdcclxuXHRcdFx0fSxcclxuXHRcdFx0c2FmZUFyZWE6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0bWFza0JhY2tncm91bmRDb2xvcjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAncmdiYSgwLCAwLCAwLCAwLjQpJ1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHQvKipcclxuXHRcdFx0ICog55uR5ZCsdHlwZeexu+Wei1xyXG5cdFx0XHQgKi9cclxuXHRcdFx0dHlwZToge1xyXG5cdFx0XHRcdGhhbmRsZXI6IGZ1bmN0aW9uKHR5cGUpIHtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5jb25maWdbdHlwZV0pIHJldHVyblxyXG5cdFx0XHRcdFx0dGhpc1t0aGlzLmNvbmZpZ1t0eXBlXV0odHJ1ZSlcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpc0Rlc2t0b3A6IHtcclxuXHRcdFx0XHRoYW5kbGVyOiBmdW5jdGlvbihuZXdWYWwpIHtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5jb25maWdbbmV3VmFsXSkgcmV0dXJuXHJcblx0XHRcdFx0XHR0aGlzW3RoaXMuY29uZmlnW3RoaXMudHlwZV1dKHRydWUpXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRpbW1lZGlhdGU6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIOebkeWQrOmBrue9qeaYr+WQpuWPr+eCueWHu1xyXG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdH0gdmFsXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRtYXNrQ2xpY2s6IHtcclxuXHRcdFx0XHRoYW5kbGVyOiBmdW5jdGlvbih2YWwpIHtcclxuXHRcdFx0XHRcdHRoaXMubWtjbGljayA9IHZhbFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0aW1tZWRpYXRlOiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdGlzTWFza0NsaWNrOiB7XHJcblx0XHRcdFx0aGFuZGxlcjogZnVuY3Rpb24odmFsKSB7XHJcblx0XHRcdFx0XHR0aGlzLm1rY2xpY2sgPSB2YWxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBINSDkuIvnpoHmraLlupXpg6jmu5rliqhcclxuXHRcdFx0c2hvd1BvcHVwKHNob3cpIHtcclxuXHRcdFx0XHQvLyAjaWZkZWYgSDVcclxuXHRcdFx0XHQvLyBmaXggYnkgbWVoYW90aWFuIOWkhOeQhiBoNSDmu5rliqjnqb/pgI/nmoTpl67pophcclxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gc2hvdyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGR1cmF0aW9uOiAzMDAsXHJcblx0XHRcdFx0YW5pOiBbXSxcclxuXHRcdFx0XHRzaG93UG9wdXA6IGZhbHNlLFxyXG5cdFx0XHRcdHNob3dUcmFuczogZmFsc2UsXHJcblx0XHRcdFx0cG9wdXBXaWR0aDogMCxcclxuXHRcdFx0XHRwb3B1cEhlaWdodDogMCxcclxuXHRcdFx0XHRjb25maWc6IHtcclxuXHRcdFx0XHRcdHRvcDogJ3RvcCcsXHJcblx0XHRcdFx0XHRib3R0b206ICdib3R0b20nLFxyXG5cdFx0XHRcdFx0Y2VudGVyOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdGxlZnQ6ICdsZWZ0JyxcclxuXHRcdFx0XHRcdHJpZ2h0OiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogJ3RvcCcsXHJcblx0XHRcdFx0XHRkaWFsb2c6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0c2hhcmU6ICdib3R0b20nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtYXNrQ2xhc3M6IHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiAwLFxyXG5cdFx0XHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRcdFx0bGVmdDogMCxcclxuXHRcdFx0XHRcdHJpZ2h0OiAwLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjQpJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0dHJhbnNDbGFzczoge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXHJcblx0XHRcdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IDBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG1hc2tTaG93OiB0cnVlLFxyXG5cdFx0XHRcdG1rY2xpY2s6IHRydWUsXHJcblx0XHRcdFx0cG9wdXBzdHlsZTogdGhpcy5pc0Rlc2t0b3AgPyAnZml4Zm9ycGMtdG9wJyA6ICd0b3AnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRpc0Rlc2t0b3AoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMucG9wdXBXaWR0aCA+PSA1MDAgJiYgdGhpcy5wb3B1cEhlaWdodCA+PSA1MDBcclxuXHRcdFx0fSxcclxuXHRcdFx0YmcoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuYmFja2dyb3VuZENvbG9yID09PSAnJyB8fCB0aGlzLmJhY2tncm91bmRDb2xvciA9PT0gJ25vbmUnKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJ3RyYW5zcGFyZW50J1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3JcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdGNvbnN0IGZpeFNpemUgPSAoKSA9PiB7XHJcblx0XHRcdFx0Y29uc3Qge1xyXG5cdFx0XHRcdFx0d2luZG93V2lkdGgsXHJcblx0XHRcdFx0XHR3aW5kb3dIZWlnaHQsXHJcblx0XHRcdFx0XHR3aW5kb3dUb3AsXHJcblx0XHRcdFx0XHRzYWZlQXJlYSxcclxuXHRcdFx0XHRcdHNjcmVlbkhlaWdodCxcclxuXHRcdFx0XHRcdHNhZmVBcmVhSW5zZXRzXHJcblx0XHRcdFx0fSA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcblx0XHRcdFx0dGhpcy5wb3B1cFdpZHRoID0gd2luZG93V2lkdGhcclxuXHRcdFx0XHR0aGlzLnBvcHVwSGVpZ2h0ID0gd2luZG93SGVpZ2h0ICsgKHdpbmRvd1RvcCB8fCAwKVxyXG5cdFx0XHRcdC8vIFRPRE8gZml4IGJ5IG1laGFvdGlhbiDmmK/lkKbpgILphY3lupXpg6jlronlhajljLogLOebruWJjeW+ruS/oWlvcyDjgIHlkowgYXBwIGlvcyDorqHnrpfmnInlt67lvILvvIzpnIDopoHmoYbmnrbkv67lpI1cclxuXHRcdFx0XHRpZiAoc2FmZUFyZWEgJiYgdGhpcy5zYWZlQXJlYSkge1xyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIE1QLVdFSVhJTlxyXG5cdFx0XHRcdFx0dGhpcy5zYWZlQXJlYUluc2V0cyA9IHNjcmVlbkhlaWdodCAtIHNhZmVBcmVhLmJvdHRvbVxyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHQvLyAjaWZuZGVmIE1QLVdFSVhJTlxyXG5cdFx0XHRcdFx0dGhpcy5zYWZlQXJlYUluc2V0cyA9IHNhZmVBcmVhSW5zZXRzLmJvdHRvbVxyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuc2FmZUFyZWFJbnNldHMgPSAwXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGZpeFNpemUoKVxyXG5cdFx0XHQvLyAjaWZkZWYgSDVcclxuXHRcdFx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZpeFNpemUpXHJcblx0XHRcdC8vIHRoaXMuJG9uY2UoJ2hvb2s6YmVmb3JlRGVzdHJveScsICgpID0+IHtcclxuXHRcdFx0Ly8gXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZml4U2l6ZSlcclxuXHRcdFx0Ly8gfSlcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHR9LFxyXG5cdFx0Ly8gI2lmbmRlZiBWVUUzXHJcblx0XHQvLyBUT0RPIHZ1ZTJcclxuXHRcdGRlc3Ryb3llZCgpIHtcclxuXHRcdFx0dGhpcy5zZXRINVZpc2libGUoKVxyXG5cdFx0fSxcclxuXHRcdC8vICNlbmRpZlxyXG5cdFx0Ly8gI2lmZGVmIFZVRTNcclxuXHRcdC8vIFRPRE8gdnVlM1xyXG5cdFx0dW5tb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLnNldEg1VmlzaWJsZSgpXHJcblx0XHR9LFxyXG5cdFx0Ly8gI2VuZGlmXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHQvLyB0aGlzLm1rY2xpY2sgPSAgdGhpcy5pc01hc2tDbGljayB8fCB0aGlzLm1hc2tDbGlja1xyXG5cdFx0XHRpZiAodGhpcy5pc01hc2tDbGljayA9PT0gbnVsbCAmJiB0aGlzLm1hc2tDbGljayA9PT0gbnVsbCkge1xyXG5cdFx0XHRcdHRoaXMubWtjbGljayA9IHRydWVcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLm1rY2xpY2sgPSB0aGlzLmlzTWFza0NsaWNrICE9PSBudWxsID8gdGhpcy5pc01hc2tDbGljayA6IHRoaXMubWFza0NsaWNrXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuYW5pbWF0aW9uKSB7XHJcblx0XHRcdFx0dGhpcy5kdXJhdGlvbiA9IDMwMFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZHVyYXRpb24gPSAwXHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gVE9ETyDlpITnkIYgbWVzc2FnZSDnu4Tku7bnlJ/lkb3lkajmnJ/lvILluLjnmoTpl67pophcclxuXHRcdFx0dGhpcy5tZXNzYWdlQ2hpbGQgPSBudWxsXHJcblx0XHRcdC8vIFRPRE8g6Kej5Yaz5aS05p2h5YaS5rOh55qE6Zeu6aKYXHJcblx0XHRcdHRoaXMuY2xlYXJQcm9wYWdhdGlvbiA9IGZhbHNlXHJcblx0XHRcdHRoaXMubWFza0NsYXNzLmJhY2tncm91bmRDb2xvciA9IHRoaXMubWFza0JhY2tncm91bmRDb2xvclxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0c2V0SDVWaXNpYmxlKCkge1xyXG5cdFx0XHRcdC8vICNpZmRlZiBINVxyXG5cdFx0XHRcdC8vIGZpeCBieSBtZWhhb3RpYW4g5aSE55CGIGg1IOa7muWKqOepv+mAj+eahOmXrumimFxyXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSdcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0fSxcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIOWFrOeUqOaWueazle+8jOS4jeaYvuekuumBrue9qeWxglxyXG5cdFx0XHQgKi9cclxuXHRcdFx0Y2xvc2VNYXNrKCkge1xyXG5cdFx0XHRcdHRoaXMubWFza1Nob3cgPSBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICog5YWs55So5pa55rOV77yM6YGu572p5bGC56aB5q2i54K55Ye7XHJcblx0XHRcdCAqL1xyXG5cdFx0XHRkaXNhYmxlTWFzaygpIHtcclxuXHRcdFx0XHR0aGlzLm1rY2xpY2sgPSBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBUT0RPIG52dWUg5Y+W5raI5YaS5rOhXHJcblx0XHRcdGNsZWFyKGUpIHtcclxuXHRcdFx0XHQvLyAjaWZuZGVmIEFQUC1OVlVFXHJcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdHRoaXMuY2xlYXJQcm9wYWdhdGlvbiA9IHRydWVcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdG9wZW4oZGlyZWN0aW9uKSB7XHJcblx0XHRcdFx0Ly8gZml4IGJ5IG1laGFvdGlhbiDlpITnkIblv6vpgJ/miZPlvIDlhbPpl63nmoTmg4XlhrVcclxuXHRcdFx0XHRpZiAodGhpcy5zaG93UG9wdXApIHtcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxyXG5cdFx0XHRcdFx0dGhpcy5zaG93UG9wdXAgPSBmYWxzZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgaW5uZXJUeXBlID0gWyd0b3AnLCAnY2VudGVyJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0JywgJ21lc3NhZ2UnLCAnZGlhbG9nJywgJ3NoYXJlJ11cclxuXHRcdFx0XHRpZiAoIShkaXJlY3Rpb24gJiYgaW5uZXJUeXBlLmluZGV4T2YoZGlyZWN0aW9uKSAhPT0gLTEpKSB7XHJcblx0XHRcdFx0XHRkaXJlY3Rpb24gPSB0aGlzLnR5cGVcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCF0aGlzLmNvbmZpZ1tkaXJlY3Rpb25dKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCfnvLrlsJHnsbvlnovvvJonLCBkaXJlY3Rpb24pXHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpc1t0aGlzLmNvbmZpZ1tkaXJlY3Rpb25dXSgpXHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xyXG5cdFx0XHRcdFx0c2hvdzogdHJ1ZSxcclxuXHRcdFx0XHRcdHR5cGU6IGRpcmVjdGlvblxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGNsb3NlKHR5cGUpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dUcmFucyA9IGZhbHNlXHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xyXG5cdFx0XHRcdFx0c2hvdzogZmFsc2UsXHJcblx0XHRcdFx0XHR0eXBlOiB0aGlzLnR5cGVcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxyXG5cdFx0XHRcdC8vIC8vIOiHquWumuS5ieWFs+mXreS6i+S7tlxyXG5cdFx0XHRcdC8vIHRoaXMuY3VzdG9tT3BlbiAmJiB0aGlzLmN1c3RvbUNsb3NlKClcclxuXHRcdFx0XHR0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnNob3dQb3B1cCA9IGZhbHNlXHJcblx0XHRcdFx0fSwgMzAwKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBUT0RPIOWkhOeQhuWGkuazoeS6i+S7tu+8jOWktOadoeeahOWGkuazoeS6i+S7tuaciemXrumimCDvvIzlhYjov5nmoLflhbzlrrlcclxuXHRcdFx0dG91Y2hzdGFydCgpIHtcclxuXHRcdFx0XHR0aGlzLmNsZWFyUHJvcGFnYXRpb24gPSBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0b25UYXAoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY2xlYXJQcm9wYWdhdGlvbikge1xyXG5cdFx0XHRcdFx0Ly8gZml4IGJ5IG1laGFvdGlhbiDlhbzlrrkgbnZ1ZVxyXG5cdFx0XHRcdFx0dGhpcy5jbGVhclByb3BhZ2F0aW9uID0gZmFsc2VcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdtYXNrQ2xpY2snKVxyXG5cdFx0XHRcdGlmICghdGhpcy5ta2NsaWNrKSByZXR1cm5cclxuXHRcdFx0XHR0aGlzLmNsb3NlKClcclxuXHRcdFx0fSxcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIOmhtumDqOW8ueWHuuagt+W8j+WkhOeQhlxyXG5cdFx0XHQgKi9cclxuXHRcdFx0dG9wKHR5cGUpIHtcclxuXHRcdFx0XHR0aGlzLnBvcHVwc3R5bGUgPSB0aGlzLmlzRGVza3RvcCA/ICdmaXhmb3JwYy10b3AnIDogJ3RvcCdcclxuXHRcdFx0XHR0aGlzLmFuaSA9IFsnc2xpZGUtdG9wJ11cclxuXHRcdFx0XHR0aGlzLnRyYW5zQ2xhc3MgPSB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcclxuXHRcdFx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdFx0XHRyaWdodDogMCxcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhpcy5iZ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBUT0RPIOWFvOWuuSB0eXBlIOWxnuaApyDvvIzlkI7nu63kvJrlup/lvINcclxuXHRcdFx0XHRpZiAodHlwZSkgcmV0dXJuXHJcblx0XHRcdFx0dGhpcy5zaG93UG9wdXAgPSB0cnVlXHJcblx0XHRcdFx0dGhpcy5zaG93VHJhbnMgPSB0cnVlXHJcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMubWVzc2FnZUNoaWxkICYmIHRoaXMudHlwZSA9PT0gJ21lc3NhZ2UnKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubWVzc2FnZUNoaWxkLnRpbWVyQ2xvc2UoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiDlupXpg6jlvLnlh7rmoLflvI/lpITnkIZcclxuXHRcdFx0ICovXHJcblx0XHRcdGJvdHRvbSh0eXBlKSB7XHJcblx0XHRcdFx0dGhpcy5wb3B1cHN0eWxlID0gJ2JvdHRvbSdcclxuXHRcdFx0XHR0aGlzLmFuaSA9IFsnc2xpZGUtYm90dG9tJ11cclxuXHRcdFx0XHR0aGlzLnRyYW5zQ2xhc3MgPSB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcclxuXHRcdFx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdFx0XHRyaWdodDogMCxcclxuXHRcdFx0XHRcdGJvdHRvbTogMCxcclxuXHRcdFx0XHRcdHBhZGRpbmdCb3R0b206IHRoaXMuc2FmZUFyZWFJbnNldHMgKyAncHgnLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLmJnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIFRPRE8g5YW85a65IHR5cGUg5bGe5oCnIO+8jOWQjue7reS8muW6n+W8g1xyXG5cdFx0XHRcdGlmICh0eXBlKSByZXR1cm5cclxuXHRcdFx0XHR0aGlzLnNob3dQb3B1cCA9IHRydWVcclxuXHRcdFx0XHR0aGlzLnNob3dUcmFucyA9IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIOS4remXtOW8ueWHuuagt+W8j+WkhOeQhlxyXG5cdFx0XHQgKi9cclxuXHRcdFx0Y2VudGVyKHR5cGUpIHtcclxuXHRcdFx0XHR0aGlzLnBvcHVwc3R5bGUgPSAnY2VudGVyJ1xyXG5cdFx0XHRcdHRoaXMuYW5pID0gWyd6b29tLW91dCcsICdmYWRlJ11cclxuXHRcdFx0XHR0aGlzLnRyYW5zQ2xhc3MgPSB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcclxuXHRcdFx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG5cdFx0XHRcdFx0LyogI2VuZGlmICovXHJcblx0XHRcdFx0XHRib3R0b206IDAsXHJcblx0XHRcdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IDAsXHJcblx0XHRcdFx0XHR0b3A6IDAsXHJcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBUT0RPIOWFvOWuuSB0eXBlIOWxnuaApyDvvIzlkI7nu63kvJrlup/lvINcclxuXHRcdFx0XHRpZiAodHlwZSkgcmV0dXJuXHJcblx0XHRcdFx0dGhpcy5zaG93UG9wdXAgPSB0cnVlXHJcblx0XHRcdFx0dGhpcy5zaG93VHJhbnMgPSB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdGxlZnQodHlwZSkge1xyXG5cdFx0XHRcdHRoaXMucG9wdXBzdHlsZSA9ICdsZWZ0J1xyXG5cdFx0XHRcdHRoaXMuYW5pID0gWydzbGlkZS1sZWZ0J11cclxuXHRcdFx0XHR0aGlzLnRyYW5zQ2xhc3MgPSB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcclxuXHRcdFx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdFx0XHRib3R0b206IDAsXHJcblx0XHRcdFx0XHR0b3A6IDAsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmcsXHJcblx0XHRcdFx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xyXG5cdFx0XHRcdFx0LyogI2VuZGlmICovXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIFRPRE8g5YW85a65IHR5cGUg5bGe5oCnIO+8jOWQjue7reS8muW6n+W8g1xyXG5cdFx0XHRcdGlmICh0eXBlKSByZXR1cm5cclxuXHRcdFx0XHR0aGlzLnNob3dQb3B1cCA9IHRydWVcclxuXHRcdFx0XHR0aGlzLnNob3dUcmFucyA9IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0cmlnaHQodHlwZSkge1xyXG5cdFx0XHRcdHRoaXMucG9wdXBzdHlsZSA9ICdyaWdodCdcclxuXHRcdFx0XHR0aGlzLmFuaSA9IFsnc2xpZGUtcmlnaHQnXVxyXG5cdFx0XHRcdHRoaXMudHJhbnNDbGFzcyA9IHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiAwLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IDAsXHJcblx0XHRcdFx0XHR0b3A6IDAsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmcsXHJcblx0XHRcdFx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xyXG5cdFx0XHRcdFx0LyogI2VuZGlmICovXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIFRPRE8g5YW85a65IHR5cGUg5bGe5oCnIO+8jOWQjue7reS8muW6n+W8g1xyXG5cdFx0XHRcdGlmICh0eXBlKSByZXR1cm5cclxuXHRcdFx0XHR0aGlzLnNob3dQb3B1cCA9IHRydWVcclxuXHRcdFx0XHR0aGlzLnNob3dUcmFucyA9IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cdC51bmktcG9wdXAge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ei1pbmRleDogOTk7XHJcblxyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHQmLnRvcCxcclxuXHRcdCYubGVmdCxcclxuXHRcdCYucmlnaHQge1xyXG5cdFx0XHQvKiAjaWZkZWYgSDUgKi9cclxuXHRcdFx0dG9wOiB2YXIoLS13aW5kb3ctdG9wKTtcclxuXHRcdFx0LyogI2VuZGlmICovXHJcblx0XHRcdC8qICNpZm5kZWYgSDUgKi9cclxuXHRcdFx0dG9wOiAwO1xyXG5cdFx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdH1cclxuXHJcblx0XHQudW5pLXBvcHVwX193cmFwcGVyIHtcclxuXHRcdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0LyogI2VuZGlmICovXHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblx0XHRcdC8qIGlwaG9uZXgg562J5a6J5YWo5Yy66K6+572u77yM5bqV6YOo5a6J5YWo5Yy66YCC6YWNICovXHJcblx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdFx0Ly8gcGFkZGluZy1ib3R0b206IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xyXG5cdFx0XHQvLyBwYWRkaW5nLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xyXG5cdFx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdFx0Ji5sZWZ0LFxyXG5cdFx0XHQmLnJpZ2h0IHtcclxuXHRcdFx0XHQvKiAjaWZkZWYgSDUgKi9cclxuXHRcdFx0XHRwYWRkaW5nLXRvcDogdmFyKC0td2luZG93LXRvcCk7XHJcblx0XHRcdFx0LyogI2VuZGlmICovXHJcblx0XHRcdFx0LyogI2lmbmRlZiBINSAqL1xyXG5cdFx0XHRcdHBhZGRpbmctdG9wOiAwO1xyXG5cdFx0XHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5maXhmb3JwYy16LWluZGV4IHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdHotaW5kZXg6IDk5OTtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHJcblx0LmZpeGZvcnBjLXRvcCB7XHJcblx0XHR0b3A6IDA7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!************************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/拾音/ShiYin/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=style&index=0&lang=scss& */ 23);
/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 23 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Lenovo/Desktop/拾音/ShiYin/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".uni-popup": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        16
      ]
    },
    ".top": {
      "top": [
        0,
        0,
        1,
        17
      ]
    },
    ".left": {
      "top": [
        0,
        0,
        1,
        17
      ]
    },
    ".right": {
      "top": [
        0,
        0,
        1,
        17
      ]
    }
  },
  ".uni-popup__wrapper": {
    ".uni-popup ": {
      "position": [
        "relative",
        0,
        1,
        18
      ]
    },
    ".uni-popup .left": {
      "paddingTop": [
        0,
        0,
        2,
        19
      ],
      "flex": [
        1,
        0,
        2,
        19
      ]
    },
    ".uni-popup .right": {
      "paddingTop": [
        0,
        0,
        2,
        19
      ],
      "flex": [
        1,
        0,
        2,
        19
      ]
    }
  },
  ".fixforpc-top": {
    "": {
      "top": [
        0,
        0,
        0,
        20
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 24 */
/*!**********************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/拾音/ShiYin/pages/navigation/ShouYe/video/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=script&lang=js&mpType=page */ 25);\n/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdoQixDQUFnQiw4akJBQUcsRUFBQyIsImZpbGUiOiIyNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcdGVuZ3h1blxcXFxIQnVpbGRlclguMy40LjcuMjAyMjA0MjJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRTpcXFxcdGVuZ3h1blxcXFxIQnVpbGRlclguMy40LjcuMjAyMjA0MjJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFFOlxcXFx0ZW5neHVuXFxcXEhCdWlsZGVyWC4zLjQuNy4yMDIyMDQyMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRTpcXFxcdGVuZ3h1blxcXFxIQnVpbGRlclguMy40LjcuMjAyMjA0MjJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRTpcXFxcdGVuZ3h1blxcXFxIQnVpbGRlclguMy40LjcuMjAyMjA0MjJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFFOlxcXFx0ZW5neHVuXFxcXEhCdWlsZGVyWC4zLjQuNy4yMDIyMDQyMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Lenovo/Desktop/拾音/ShiYin/pages/navigation/ShouYe/video/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__, __webpack_provided_uni_dot_requireNativePlugin) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n// import userList from './data.js'//这个是假数据\n/*\n引入评论组件\n*/\n// import douyinScrollview from '@/components/douyin-scrollview/douyin-scrollview.nvue'\nvar _default =\n\n\n{\n  data: function data() {\n    return {\n      //下面打🌟号的是必须要的基础字段\n      //下面打💗号的是拥有滑动条的必须字段\n      dataList: [], //用于数据循环的列表🌟💗\n      wHeight: 0, //获取的屏幕高度🌟💗\n      boxStyle: { //视频，图片封面样式🌟💗\n        'height': 0,\n        'width': 0 },\n\n      k: 0, //默认为0🌟💗\n      playIngIds: [], //正在播放的视频id列队，列队用于处理滑动过快导致的跳频问题🌟💗\n      ready: false, //可忽略\n      isDragging: false, //false代表停止滑动🌟💗\n      refreshing: true, //用于下拉刷新🌟💗\n      windowWidth: 0, //获取屏幕宽度🌟💗\n      windowHeight: 0,\n      dex: [0, 0], //用于判断是上滑还是下滑，第一个存旧值，第二个存新值【目前在1.0.7已经废弃】\n      currents: 0, //用于左右滑动，0代表视频界面，1代表右滑界面🌟💗\n      platform: '', //用于获取操作系统：ios、android🌟💗\n      playIng: false, //用于视频初始化时是否播放，默认不播放🌟💗\n      videoTime: '', //视频总时长，这个主要用来截取时间数值💗\n      videoTimes: '', //视频时长，用这个来获取时间值，例如：00:30这个时间值💗\n      changeTime: '', //显示滑动进度条时变化的时间💗\n      isShowimage: false, //是否显示封面【1.0.4已废弃，但是意思需要记住】\n      currenttimes: 0, //当前时间💗\n      isShowProgressBarTime: false, //是否拖动进度条，如果拖动（true）则显示进度条时间，否则不显示（false）【1.0.4已废弃，但是意思需要记住】\n      ProgressBarOpacity: 0.7, //进度条不拖动时的默认值，就是透明的💗\n      dotWidth: 0, //播放的小圆点，默认没有💗\n      deleteHeight: 0, //测试高度🌟💗\n      percent: 0, //百分小数💗\n      currentPosition: 0, //滑块当前位置💗//2.0已弃用，现已用于后端参数\n      currentPositions: 0, //滑块当前位置的副本💗//2.0已弃用，现已用于后端参数\n      newTime: 0, //跟手滑动后的最新时间💗\n      timeNumber: 0, //🌟💗\n      ProgressBarBottom: 20, //进度条离底部的距离💗\n      object_fit: 'contain', //视频样式默认包含🌟💗\n      mode: 'aspectFit', //图片封面样式🌟💗\n      timeout: \"\", //🌟用来阻止 setTimeout()方法\n      voice: \"\", //🌟用来阻止 setTimeout()方法\n      oldVideo: \"\",\n\n      isAutoplay: false, //是否开启自动播放(默认不开启)\n      autoplayText: \"开启自动播放\",\n      timers: \"\",\n\n      // 引入评论 - 参数\n      heightNum: 1.18,\n\n      // 双击点赞参数\n      touchNum: 0,\n      aixinLeft: 0,\n      aixinTop: 0,\n      isShowAixin: false,\n      Rotate: 0 };\n\n  },\n  watch: {\n    k: function k(_k, old_k) {var _this = this; //监听 k 值的变化，可以控制视频的播放与暂停\n      __f__(\"log\", _k, \" at pages/navigation/ShouYe/video/video.nvue:223\");\n      this.dataList[old_k].state = 'stop'; //如果是被滑走的视频，就停止播放\n      this.dataList[old_k].playIng = false; //如果视频暂停，就加载封面\n      this.dataList[old_k].isplay = true;\n      uni.createVideoContext(this.dataList[old_k]._id, this).play();\n      clearTimeout(this.oldVideo);\n      this.oldVideo = setTimeout(function () {\n        uni.createVideoContext(_this.dataList[old_k]._id, _this).seek(0);\n        uni.createVideoContext(_this.dataList[old_k]._id, _this).pause();\n        __f__(\"log\", '预留第' + (old_k + 1) + '个视频：' + _this.dataList[old_k]._id, \" at pages/navigation/ShouYe/video/video.nvue:232\");\n      }, 500);\n      // 2.0版本已经去掉了下面这一句，视频不用暂停，只需要把声音禁止就行\n      // uni.createVideoContext(this.dataList[old_k]._id + '' + old_k,this).stop()//如果视频暂停，那么旧视频停止，这里的this.dataList[old_k]._id + '' + old_k，后面加 old_k 是为了每一个视频的 id 值不同，这样就可以大程度的避免串音问题\n      uni.createVideoContext(this.dataList[_k]._id, this).play();\n      __f__(\"log\", '已经暂停 --> 第' + (old_k + 1) + '个视频～', \" at pages/navigation/ShouYe/video/video.nvue:237\"); //提示\n      clearTimeout(this.voice);\n      this.voice = setTimeout(function () {\n        _this.dataList[_k].isplay = false;\n      }, 300);\n      setTimeout(function () {\n        _this.dataList[_k].playIng = true;\n      }, 850);\n      //【2.0版本更新内容】- start\n      var p = _k;\n      ++p;\n      setTimeout(function () {\n        uni.createVideoContext(_this.dataList[p]._id, _this).play();\n      }, 20);\n      clearTimeout(this.timeout);\n      this.timeout = setTimeout(function () {\n        uni.createVideoContext(_this.dataList[p]._id, _this).seek(0);\n        uni.createVideoContext(_this.dataList[p]._id, _this).pause();\n        __f__(\"log\", '预加载第' + (p + 1) + '个视频：' + _this.dataList[p]._id, \" at pages/navigation/ShouYe/video/video.nvue:255\");\n      }, 1500);\n      //【2.0版本更新内容】- end\n    } },\n\n  onShow: function onShow() {\n    __f__(\"log\", '回到前台', \" at pages/navigation/ShouYe/video/video.nvue:261\");\n    if (this.dataList.length !== 0) {\n      this.dataList[this.k].state = 'play';\n      uni.createVideoContext(this.dataList[this.k]._id, this).play();\n    }\n  },\n  onHide: function onHide() {\n    this.dataList[this.k].state = 'pause'; //界面隐藏也要停止播放视频\n    uni.createVideoContext(this.dataList[this.k]._id, this).pause(); //暂停以后继续播放\n    __f__(\"log\", '到后台', \" at pages/navigation/ShouYe/video/video.nvue:270\");\n  },\n  onLoad: function onLoad() {\n    this.platform = uni.getSystemInfoSync().platform;\n    var model = uni.getSystemInfoSync().model;\n    if (this.platform == 'ios' && (model !== 'iPhone6' || model !== 'iPhone6s' || model !== 'iPhone7' || model !== 'iPhone8')) {\n      this.deleteHeight = 32; //有 tabbar的 修改这里可以改变视频高度\n\n      /*\n      引入评论参数\n      */\n\n      this.heightNum = 1.27;\n    } else {\n      this.deleteHeight = 0;\n      /*\n                             引入评论参数\n                             */\n      this.heightNum = 1.18;\n    }\n\n    this.windowWidth = uni.getSystemInfoSync().screenWidth; //获取屏幕宽度\n    this.boxStyle.width = this.windowWidth + 'px'; //给宽度加px\n    this.wHeight = uni.getSystemInfoSync().screenHeight; //获取屏幕高度\n    this.boxStyle.height = this.wHeight - this.deleteHeight; //改变视频高度\n    this.get(); //这一步，加载视频数据\n  },\n  onReady: function onReady() {\n  },\n  methods: {\n    autoPlay: function autoPlay() {\n      this.isAutoplay = !this.isAutoplay;\n      if (!this.isAutoplay) {\n        this.autoplayText = \"开启自动播放\";\n        uni.showToast({\n          title: \"关闭自动播放\",\n          icon: 'none',\n          duration: 3000 });\n\n      } else {\n        this.autoplayText = \"关闭自动播放\";\n        uni.showToast({\n          title: \"开启自动播放\",\n          icon: 'none',\n          duration: 3000 });\n\n      }\n    },\n    getData: function getData() {var _this2 = this;\n      // 这里就是数据加载完以后再向后端发送数据的地方\n\n      uni.request({\n        url: 'https://bdb24c6d-8c19-4f80-8e7e-c9c9f037f131.bspapp.com/video',\n        method: 'POST',\n        data: {\n          info: 'get_video' },\n\n        success: function success(res) {\n          var msg = res.data.data;\n          for (var i = 0; i < msg.length; i++) {\n            _this2.dataList.push(msg[i]);\n          }\n        } });\n\n    },\n    touchstart: function touchstart(event) {\n      this.dataList[this.k].isShowimage = true; //刚触摸的时候就要显示预览视频图片了\n      this.dataList[this.k].isShowProgressBarTime = true; //显示时间线\n      this.ProgressBarOpacity = 1; //让滑块显示起来更明显一点\n      this.dotWidth = 10; //让点显示起来更明显一点\n    },\n    touchend: function touchend() {//当手松开后，跳到最新时间\n      uni.createVideoContext(this.dataList[this.k]._id, this).seek(this.newTime);\n      if (this.dataList[this.k].state == 'pause') {\n        this.dataList[this.k].state = 'play';\n        uni.createVideoContext(this.dataList[this.k]._id, this).play();\n      }\n      this.dataList[this.k].isShowProgressBarTime = false; //触摸结束后，隐藏时间线\n      this.dataList[this.k].isShowimage = false; //触摸结束后，隐藏时间预览\n      this.ProgressBarOpacity = 0.5; //隐藏起来进度条，不那么明显了\n      this.dotWidth = 0; //隐藏起来进度条，不那么明显了\n    },\n    touchmove: function touchmove(event) {//当手移动滑块时，计算位置、百分小数、新的时间\n      var msg = [];\n      if (this.videoTime !== '') {\n        msg = this.videoTime.split(':');\n      }\n      var timeNumber = Number(msg[0]) * 60 + Number(msg[1]);\n      this.currentPositions = event.changedTouches[0].screenX;\n      this.percent = this.currentPositions / this.windowWidth;\n      this.newTime = this.percent * timeNumber;\n      this.currenttimes = parseInt(this.newTime);\n      var theTime = this.newTime;\n      var middle = 0; // 分\n      if (theTime > 60) {\n        middle = parseInt(theTime / 60);\n        theTime = parseInt(theTime % 60);\n      }\n      this.changeTime = \"\".concat(Math.round(middle) > 9 ? Math.round(middle) : '0' + Math.round(middle), \":\").concat(Math.round(theTime) > 9 ? Math.round(theTime) : '0' + Math.round(theTime));\n    },\n    timeupdate: function timeupdate(event, index) {var _this3 = this; //计算滑块当前位置，计算当前百分小数\n      // console.log(index)\n      if (index == this.k) {\n        // console.log(event)\n        var currenttime = event.detail.currentTime;\n        this.timeNumber = Math.round(event.detail.duration);\n        this.getTime();\n        this.percent = currenttime / this.timeNumber;\n        this.currentPosition = this.windowWidth * this.percent;\n        var theTime = currenttime;\n        var middle = 0; // 分\n        if (theTime > 60) {\n          middle = parseInt(theTime / 60);\n          theTime = parseInt(theTime % 60);\n        }\n        this.changeTime = \"\".concat(Math.round(middle) > 9 ? Math.round(middle) : '0' + Math.round(middle), \":\").concat(Math.round(theTime) > 9 ? Math.round(theTime) : '0' + Math.round(theTime));\n        //自动切换视频\n        if (this.isAutoplay) {//true,代表自动播放\n          if (Math.round(currenttime) == this.timeNumber - 1) {\n            var dom = __webpack_provided_uni_dot_requireNativePlugin('dom');\n            var doms = 'item' + (this.k + 1);\n            setTimeout(function () {\n              var el = _this3.$refs[doms][0];\n              dom.scrollToElement(el, {\n                offset: 0,\n                animated: true });\n\n            }, 500);\n          }\n        }\n      }\n    },\n    getTime: function getTime() {//得到时间函数\n      this.videoTime = this.formatSeconds(this.timeNumber);\n      // console.log(that.videoTime)\n      var msg = [];\n      if (this.videoTime !== '') {\n        msg = this.videoTime.split(':');\n      }\n      this.videoTimes = \"\".concat(msg[0] > 9 ? msg[0] : '0' + msg[0], \":\").concat(msg[1] > 9 ? msg[1] : '0' + msg[1]);\n    },\n    formatSeconds: function formatSeconds(value) {//获取时间函数\n      var theTime = parseInt(value); // 秒\n      var middle = 0; // 分\n      if (theTime > 60) {\n        middle = parseInt(theTime / 60);\n        theTime = parseInt(theTime % 60);\n      }\n      return \"\".concat(middle > 9 ? middle : middle, \":\").concat(theTime > 9 ? theTime : theTime);\n    },\n    playIngs: function playIngs(index) {\n      //\n    },\n    moreVideo: function moreVideo(index) {\n\n    },\n    toVideo: function toVideo(index) {\n\n    },\n    erweima: function erweima() {\n\n    },\n    tozuozhe: function tozuozhe() {\n      this.currents = 1; //点击头像以后就会切换\n    },\n    stop: function stop() {\n      // console.log('stop')\n    },\n    scrolls: function scrolls(event) {var _this4 = this;\n      this.isDragging = event.isDragging;\n      if (!event.isDragging) {//isDragging：判断用户是不是在滑动，滑动：true，停止滑动：false。我们要用户停止滑动时才给 k 赋值，这样就可以避免很多麻烦\n        var i = Math.round(Math.abs(event.contentOffset.y) / (this.wHeight - this.deleteHeight + 1)); //先用绝对值取出滑动的距离，然后除以屏幕高度，取一个整，就知道你现在滑动到哪一个视频了\n        if (i !== this.k) {//这里加判断是因为这个方法会执行很多次，会造成重复请求，所以这里写一个限制\n          if (uni.getSystemInfoSync().platform == 'ios') {\n            this.k = i; //判断了用户没有滑动，确认了用户的确是在看这个视频，然后就赋值啦\n            this.dataList[this.k].state = 'play';\n            __f__(\"log\", '正在播放 --> 第' + (this.k + 1) + '个视频～', \" at pages/navigation/ShouYe/video/video.nvue:446\");\n          } else {\n            clearTimeout(this.timers);\n            this.timers = setTimeout(function () {\n              _this4.k = i; //判断了用户没有滑动，确认了用户的确是在看这个视频，然后就赋值啦\n              _this4.dataList[_this4.k].state = 'play';\n              __f__(\"log\", '正在播放 --> 第' + (_this4.k + 1) + '个视频～', \" at pages/navigation/ShouYe/video/video.nvue:452\");\n            }, 80);\n          }\n        }\n      }\n    },\n    get: function get() {var _this5 = this;\n      uni.request({\n        url: 'http://120.24.238.88:8146/getvideo',\n        method: 'GET',\n        success: function success(res) {\n\n\n\n          __f__(\"log\", res, \" at pages/navigation/ShouYe/video/video.nvue:466\");\n          var msg = res.data;\n          // console.log(msg)\n          _this5.dataList = msg;\n          _this5.dataList[0] = uni.getStorageSync('video_chuancan');\n          _this5.dataList[0].state = \"play\";\n          setTimeout(function () {\n            //这里的延迟是为了避免执行时间太快而直接跳过执行的 bug\n            uni.createVideoContext(_this5.dataList[0]._id, _this5).seek(0);\n            uni.createVideoContext(_this5.dataList[0]._id, _this5).play();\n          }, 200);\n\n          _this5.dataList[0].isplay = false;\n          setTimeout(function () {\n            _this5.dataList[0].playIng = true;\n          }, 500);\n          var p = 0;\n          setTimeout(function () {\n            ++p;\n            uni.createVideoContext(_this5.dataList[p]._id, _this5).play();\n            setTimeout(function () {\n              uni.createVideoContext(_this5.dataList[p]._id, _this5).seek(0);\n              uni.createVideoContext(_this5.dataList[p]._id, _this5).pause();\n              __f__(\"log\", '预加载第' + (p + 1) + '个视频：' + _this5.dataList[p]._id, \" at pages/navigation/ShouYe/video/video.nvue:489\");\n            }, 2000);\n          }, 50);\n        } });\n\n      // 这个方法主要就是用来第一次进入视频播放时用来处理的\n      // this.dataList = userList;//这个就是赋值加载视频啦\n      uni.request({\n        url: 'https://bdb24c6d-8c19-4f80-8e7e-c9c9f037f131.bspapp.com/video',\n        method: 'POST',\n        data: {\n          info: 'get_video' },\n\n        success: function success(res) {\n\n        } });\n\n    },\n    onpullingdown: function onpullingdown() {\n      // console.log('正在下拉刷新，此时手还在触摸没有松开')\n      this.refreshing = true;\n    },\n    onrefresh: function onrefresh() {var _this6 = this;\n      // console.log('下拉刷新完毕，此时手松开了')\n      setTimeout(function () {\n        _this6.refreshing = false;\n      }, 1000);\n    },\n    // 双击点赞效果\n    touchstartHover: function touchstartHover(event) {var _this7 = this;\n      if (this.touchNum >= 1) {\n        // console.log('双击 -- X坐标：'+ event.touches[0].screenX);\n        // console.log('双击 -- Y坐标：'+ event.touches[0].screenY);\n        this.aixinLeft = event.touches[0].screenX - 50;\n        this.aixinTop = event.touches[0].screenY - 50;\n        this.isShowAixin = true;\n        var max = 40;var min = -40;\n        this.Rotate = Math.floor(Math.random() * (max - min + 1)) + min;\n        setTimeout(function () {\n          _this7.isShowAixin = false;\n        }, 700);\n        this.onTabItemTaps();\n      }\n    },\n    //点击播放&&暂停\n    tapVideoHover: function tapVideoHover(state, event) {var _this8 = this;\n      this.dataList[this.k].isShowimage = false;\n      this.dataList[this.k].isShowProgressBarTime = false;\n      this.ProgressBarOpacity = 0.5;\n      this.dotWidth = 0;\n      __f__(\"log\", 'state--', state, \" at pages/navigation/ShouYe/video/video.nvue:539\");\n      // 1.启用双击点赞 --- start\n      this.touchNum++;\n      setTimeout(function () {\n        if (_this8.touchNum == 1) {\n          if (state == 'play' || state == 'continue') {\n            _this8.dataList[_this8.k].state = 'pause';\n          } else {\n            _this8.dataList[_this8.k].state = 'continue';\n          }\n          if (_this8.dataList[_this8.k].state == 'continue') {\n            uni.createVideoContext(_this8.dataList[_this8.k]._id, _this8).play(); //暂停以后继续播放\n          }\n          if (_this8.dataList[_this8.k].state == 'pause') {\n            uni.createVideoContext(_this8.dataList[_this8.k]._id, _this8).pause(); //暂停以后继续播放\n          }\n        }\n        if (_this8.touchNum >= 2) {\n          _this8.doubleLike();\n        }\n        _this8.touchNum = 0;\n      }, 200);\n      // --------------- ending\n      // 2. 不启用双击点赞 start\n      // if(state=='play'||state=='continue'){\n      // \tthis.dataList[this.k].state = 'pause';\n      // }else{\n      // \tthis.dataList[this.k].state = 'continue';\n      // }\n      // if(this.dataList[this.k].state == 'continue'){\n      // \tuni.createVideoContext(this.dataList[this.k]._id,this).play();//暂停以后继续播放\n      // }\n      // if(this.dataList[this.k].state == 'pause'){\n      // \tuni.createVideoContext(this.dataList[this.k]._id,this).pause();//暂停以后继续播放\n      // }\n      // --------------- ending\n    },\n    doubleLike: function doubleLike() {\n      if (this.dataList[this.k].like == false) {\n        this.dataList[this.k].like_n += 1;\n        this.dataList[this.k].like = true;\n      }\n      /*\n        点赞\n        */\n    },\n    toComment: function toComment(index) {\n\n      uni.showToast({\n        title: '加载中...',\n        icon: 'none',\n        position: 'bottom',\n        duration: 300 });\n\n      uni.setStorageSync(\"videoID\", this.dataList[index]._id);\n      this.$refs.pinglun.open('bottom');\n    },\n    share: function share() {\n      uni.showToast({\n        title: '分享',\n        icon: 'none' });\n\n    },\n    wxh5Video: function wxh5Video() {\n      uni.navigateTo({\n        url: '../wxh5previewVideo/wxh5previewVideo' });\n\n    },\n    previewVideo: function previewVideo() {\n      uni.navigateTo({\n        url: '../previewVideo/previewVideo' });\n\n    },\n    toTwoVideo: function toTwoVideo() {\n      uni.navigateTo({\n        url: '../new_index/new_index' });\n\n    },\n    tolistVideo: function tolistVideo() {\n      uni.navigateTo({\n        url: '../nvueSwiper/nvueSwiper' });\n\n    },\n    cLike: function cLike(sss) {\n      this.dataList[this.k].like = !this.dataList[this.k].like;\n      var video = this.dataList[this.k];\n      sss ? video.like_n -= 1 : video.like_n += 1;\n      /*\n                                                   点赞\n                                                   */\n    },\n    moveHandle: function moveHandle() {},\n    closeScrollview: function closeScrollview() {\n      // 点击评论里面的叉叉，就会关闭评论\n      this.$refs.pinglun.close();\n    },\n    onTabItemTaps: function onTabItemTaps() {\n\n      if (uni.getSystemInfoSync().platform == \"ios\") {\n        var UIImpactFeedbackGenerator = plus.ios.importClass('UIImpactFeedbackGenerator');\n        var impact = new UIImpactFeedbackGenerator();\n        impact.prepare();\n        impact.init(1);\n        impact.impactOccurred();\n      }\n      if (uni.getSystemInfoSync().platform == \"android\") {\n        uni.vibrateShort({\n          success: function success() {\n            __f__(\"log\", '点击震动', \" at pages/navigation/ShouYe/video/video.nvue:647\");\n          } });\n\n      }\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 16)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbmF2aWdhdGlvbi9TaG91WWUvdmlkZW8vdmlkZW8ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEpBO0FBQ0E7OztBQUdBOzs7O0FBSUE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBSEEsRUFHQTtBQUNBLGdCQUpBLEVBSUE7QUFDQTtBQUNBLG1CQURBO0FBRUEsa0JBRkEsRUFMQTs7QUFTQSxVQVRBLEVBU0E7QUFDQSxvQkFWQSxFQVVBO0FBQ0Esa0JBWEEsRUFXQTtBQUNBLHVCQVpBLEVBWUE7QUFDQSxzQkFiQSxFQWFBO0FBQ0Esb0JBZEEsRUFjQTtBQUNBLHFCQWZBO0FBZ0JBLGlCQWhCQSxFQWdCQTtBQUNBLGlCQWpCQSxFQWlCQTtBQUNBLGtCQWxCQSxFQWtCQTtBQUNBLG9CQW5CQSxFQW1CQTtBQUNBLG1CQXBCQSxFQW9CQTtBQUNBLG9CQXJCQSxFQXFCQTtBQUNBLG9CQXRCQSxFQXNCQTtBQUNBLHdCQXZCQSxFQXVCQTtBQUNBLHFCQXhCQSxFQXdCQTtBQUNBLGtDQXpCQSxFQXlCQTtBQUNBLDZCQTFCQSxFQTBCQTtBQUNBLGlCQTNCQSxFQTJCQTtBQUNBLHFCQTVCQSxFQTRCQTtBQUNBLGdCQTdCQSxFQTZCQTtBQUNBLHdCQTlCQSxFQThCQTtBQUNBLHlCQS9CQSxFQStCQTtBQUNBLGdCQWhDQSxFQWdDQTtBQUNBLG1CQWpDQSxFQWlDQTtBQUNBLDJCQWxDQSxFQWtDQTtBQUNBLDJCQW5DQSxFQW1DQTtBQUNBLHVCQXBDQSxFQW9DQTtBQUNBLGlCQXJDQSxFQXFDQTtBQUNBLGVBdENBLEVBc0NBO0FBQ0Esa0JBdkNBOztBQXlDQSx1QkF6Q0EsRUF5Q0E7QUFDQSw0QkExQ0E7QUEyQ0EsZ0JBM0NBOztBQTZDQTtBQUNBLHFCQTlDQTs7QUFnREE7QUFDQSxpQkFqREE7QUFrREEsa0JBbERBO0FBbURBLGlCQW5EQTtBQW9EQSx3QkFwREE7QUFxREEsZUFyREE7O0FBdURBLEdBekRBO0FBMERBO0FBQ0EsS0FEQSxhQUNBLEVBREEsRUFDQSxLQURBLEVBQ0E7QUFDQTtBQUNBLDBDQUZBLENBRUE7QUFDQSwyQ0FIQSxDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLEVBSUEsR0FKQTtBQUtBO0FBQ0E7QUFDQTtBQUNBLDRHQWZBLENBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsR0FGQTtBQUdBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsR0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsRUFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLEVBSUEsSUFKQTtBQUtBO0FBQ0EsS0FyQ0EsRUExREE7O0FBaUdBLFFBakdBLG9CQWlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXZHQTtBQXdHQSxRQXhHQSxvQkF3R0E7QUFDQSwwQ0FEQSxDQUNBO0FBQ0Esb0VBRkEsQ0FFQTtBQUNBO0FBQ0EsR0E1R0E7QUE2R0EsUUE3R0Esb0JBNkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBREEsQ0FDQTs7QUFFQTs7OztBQUlBO0FBQ0EsS0FSQSxNQVFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQSwyREFuQkEsQ0FtQkE7QUFDQSxrREFwQkEsQ0FvQkE7QUFDQSx3REFyQkEsQ0FxQkE7QUFDQSw0REF0QkEsQ0FzQkE7QUFDQSxlQXZCQSxDQXVCQTtBQUNBLEdBcklBO0FBc0lBLFNBdElBLHFCQXNJQTtBQUNBLEdBdklBO0FBd0lBO0FBQ0EsWUFEQSxzQkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBREE7QUFFQSxzQkFGQTtBQUdBLHdCQUhBOztBQUtBLE9BUEEsTUFPQTtBQUNBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBLHNCQUZBO0FBR0Esd0JBSEE7O0FBS0E7QUFDQSxLQWxCQTtBQW1CQSxXQW5CQSxxQkFtQkE7QUFDQTs7QUFFQTtBQUNBLDRFQURBO0FBRUEsc0JBRkE7QUFHQTtBQUNBLDJCQURBLEVBSEE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBWEE7O0FBYUEsS0FuQ0E7QUFvQ0EsY0FwQ0Esc0JBb0NBLEtBcENBLEVBb0NBO0FBQ0EsK0NBREEsQ0FDQTtBQUNBLHlEQUZBLENBRUE7QUFDQSxrQ0FIQSxDQUdBO0FBQ0EseUJBSkEsQ0FJQTtBQUNBLEtBekNBO0FBMENBLFlBMUNBLHNCQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFOQSxDQU1BO0FBQ0EsZ0RBUEEsQ0FPQTtBQUNBLG9DQVJBLENBUUE7QUFDQSx3QkFUQSxDQVNBO0FBQ0EsS0FwREE7QUFxREEsYUFyREEscUJBcURBLEtBckRBLEVBcURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFYQSxDQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdEVBO0FBdUVBLGNBdkVBLHNCQXVFQSxLQXZFQSxFQXVFQSxLQXZFQSxFQXVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQVJBLENBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUEsOEJBRkE7O0FBSUEsYUFOQSxFQU1BLEdBTkE7QUFPQTtBQUNBO0FBQ0E7QUFDQSxLQXRHQTtBQXVHQSxXQXZHQSxxQkF1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBL0dBO0FBZ0hBLGlCQWhIQSx5QkFnSEEsS0FoSEEsRUFnSEE7QUFDQSxvQ0FEQSxDQUNBO0FBQ0EscUJBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXhIQTtBQXlIQSxZQXpIQSxvQkF5SEEsS0F6SEEsRUF5SEE7QUFDQTtBQUNBLEtBM0hBO0FBNEhBLGFBNUhBLHFCQTRIQSxLQTVIQSxFQTRIQTs7QUFFQSxLQTlIQTtBQStIQSxXQS9IQSxtQkErSEEsS0EvSEEsRUErSEE7O0FBRUEsS0FqSUE7QUFrSUEsV0FsSUEscUJBa0lBOztBQUVBLEtBcElBO0FBcUlBLFlBcklBLHNCQXFJQTtBQUNBLHdCQURBLENBQ0E7QUFDQSxLQXZJQTtBQXdJQSxRQXhJQSxrQkF3SUE7QUFDQTtBQUNBLEtBMUlBO0FBMklBLFdBM0lBLG1CQTJJQSxLQTNJQSxFQTJJQTtBQUNBO0FBQ0E7QUFDQSxxR0FEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBLDJCQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFKQSxFQUlBLEVBSkE7QUFLQTtBQUNBO0FBQ0E7QUFDQSxLQTlKQTtBQStKQSxPQS9KQSxpQkErSkE7QUFDQTtBQUNBLGlEQURBO0FBRUEscUJBRkE7QUFHQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FKQSxFQUlBLEdBSkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0EsV0FGQSxFQUVBLEdBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFKQSxFQUlBLElBSkE7QUFLQSxXQVJBLEVBUUEsRUFSQTtBQVNBLFNBakNBOztBQW1DQTtBQUNBO0FBQ0E7QUFDQSw0RUFEQTtBQUVBLHNCQUZBO0FBR0E7QUFDQSwyQkFEQSxFQUhBOztBQU1BOztBQUVBLFNBUkE7O0FBVUEsS0EvTUE7QUFnTkEsaUJBaE5BLDJCQWdOQTtBQUNBO0FBQ0E7QUFDQSxLQW5OQTtBQW9OQSxhQXBOQSx1QkFvTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsSUFGQTtBQUdBLEtBek5BO0FBME5BO0FBQ0EsbUJBM05BLDJCQTJOQSxLQTNOQSxFQTJOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxFQUVBLEdBRkE7QUFHQTtBQUNBO0FBQ0EsS0F6T0E7QUEwT0E7QUFDQSxpQkEzT0EseUJBMk9BLEtBM09BLEVBMk9BLEtBM09BLEVBMk9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BbEJBLEVBa0JBLEdBbEJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXBSQTtBQXFSQSxjQXJSQSx3QkFxUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxLQTdSQTtBQThSQSxhQTlSQSxxQkE4UkEsS0E5UkEsRUE4UkE7O0FBRUE7QUFDQSx1QkFEQTtBQUVBLG9CQUZBO0FBR0EsMEJBSEE7QUFJQSxxQkFKQTs7QUFNQTtBQUNBO0FBQ0EsS0F4U0E7QUF5U0EsU0F6U0EsbUJBeVNBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLG9CQUZBOztBQUlBLEtBOVNBO0FBK1NBLGFBL1NBLHVCQStTQTtBQUNBO0FBQ0EsbURBREE7O0FBR0EsS0FuVEE7QUFvVEEsZ0JBcFRBLDBCQW9UQTtBQUNBO0FBQ0EsMkNBREE7O0FBR0EsS0F4VEE7QUF5VEEsY0F6VEEsd0JBeVRBO0FBQ0E7QUFDQSxxQ0FEQTs7QUFHQSxLQTdUQTtBQThUQSxlQTlUQSx5QkE4VEE7QUFDQTtBQUNBLHVDQURBOztBQUdBLEtBbFVBO0FBbVVBLFNBblVBLGlCQW1VQSxHQW5VQSxFQW1VQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxLQTFVQTtBQTJVQSxjQTNVQSx3QkEyVUEsRUEzVUE7QUE0VUEsbUJBNVVBLDZCQTRVQTtBQUNBO0FBQ0E7QUFDQSxLQS9VQTtBQWdWQSxpQkFoVkEsMkJBZ1ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUhBOztBQUtBOztBQUVBLEtBaldBLEVBeElBLEUiLCJmaWxlIjoiMjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcblx0XHRcclxuXHRcdDx2aWV3IDpzdHlsZT1cIid3aWR0aDogJysgd2luZG93V2lkdGggKydweDsgaGVpZ2h0OiAnKyBib3hTdHlsZS5oZWlnaHQgKydweDsnXCI+XG5cdFx0XG5cdFx0XHQ8IS0tIFxuXHRcdFx0IDEu6L+Z6YeM55qEIHN3aXBlciDkuI3mmK/nlKjmnaXmjqfliLbop4bpopHmu5HliqjnmoTvvIzogIzmmK/nlKjmnaXmjqfliLblt6blj7Pmu5HliqjnmoTvvIzlpoLmnpzkuI3pnIDopoHnmoTlj6/ku6XmlLnmiJAgdmlld1xuXHRcdFx0IFxuXHRcdFx0IDIu5Li65LqGIOinhumikeaXoOmZkOWKoOi9ve+8jOW3sue7j+aKiiAyMSDooYznmoQgYXBwZWFyIOWOu+aOieS6hu+8jOWKoOS4iuS6hiBsb2FkbW9yZSDmlrnms5XvvIjnrKwxMOihjO+8iVxuXHRcdFx0IFxuXHRcdFx0IDMu55Sx5LqO5pa55rOV5q+U6L6D5aSa77yM5Y+v5Lul6YeH5Y+W5LiL6Z2i55qE5pa55byP5p+l55yL5Luj56CB77yaXG5cdFx0XHQg77yIMe+8iU1hY++8muaMieS9jyBvcHRpb24g6ZSu77yM54S25ZCO54K55Ye75pa55rOV5ZCN77yM5Y2z5Y+v6Lez6L2s5Yiw5pa55rOVXG5cdFx0XHQg77yIMu+8iXdpbmRvd3PvvJrmjInkvY8gQWx0IOmUru+8jOeEtuWQjum8oOagh+W3puWHu++8jOWNs+WPr+i3s+i9rOWIsOaWueazlVxuXHRcdFx0IC0tPlxuXHRcdFx0PGxpc3QgQGxvYWRtb3JlPVwiZ2V0RGF0YVwiIEBzY3JvbGw9XCJzY3JvbGxzXCIgOmxvYWRtb3Jlb2Zmc2V0PVwid0hlaWdodCozXCIgOnNob3ctc2Nyb2xsYmFyPVwiZmFsc2VcIiByZWY9XCJsaXN0Qm94XCIgOnBhZ2luZ0VuYWJsZWQ9XCJ0cnVlXCIgOnNjcm9sbGFibGU9XCJ0cnVlXCI+XG5cdFx0XHRcdDwhLS0g5Yi35paw5qih5Z2XIC0tPlxuXHRcdFx0XHQ8cmVmcmVzaCBjbGFzcz1cInJlZnJlc2hcIiBAcmVmcmVzaD1cIm9ucmVmcmVzaFwiIEBwdWxsaW5nZG93bj1cIm9ucHVsbGluZ2Rvd25cIiA6ZGlzcGxheT1cInJlZnJlc2hpbmcgPyAnc2hvdycgOiAnaGlkZSdcIj5cblx0XHRcdFx0XHQ8bG9hZGluZyBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XCI+XG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiQC9zdGF0aWMvdmlkZW8vaW1nL2luZGV4L2xvZ2lucy5naWZcIiA6c3R5bGU9XCInd2lkdGg6IDgwdXB4OyBoZWlnaHQ6IDQwdXB4OyBtYXJnaW4tdG9wOiA4MHVweDsgbWFyZ2luLWJvdHRvbTogMzB1cHg7IG1hcmdpbi1sZWZ0OiAnKyAod2luZG93V2lkdGggLSAyMDApICsncHg7J1wiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0PC9sb2FkaW5nPlxuXHRcdFx0XHQ8L3JlZnJlc2g+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8IS0tIOW+queOr+aVsOaNriAtLT5cblx0XHRcdFx0PGNlbGwgdi1mb3I9XCIoaXRlbSxpKSBpbiBkYXRhTGlzdFwiIDprZXk9XCJpXCI+XG5cdFx0XHRcdFx0PCEtLSDnlKhkaXbmiorop4bpopHmqKHnu4TlpZfotbfmnaUgLS0+XG5cdFx0XHRcdFx0PGRpdiA6c3R5bGU9XCInd2lkdGg6ICcrIHdpbmRvd1dpZHRoICsncHg7IGhlaWdodDogJysgYm94U3R5bGUuaGVpZ2h0ICsncHg7J1wiIEBkaXNhcHBlYXI9XCJzdG9wKClcIj5cblx0XHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJNYXRoLmFicyhrLWkpPD0xXCI+XG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicm9vdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdDx2aWRlb1xuXHRcdFx0XHRcdFx0XHRcdFx0OnJlZj1cIidpdGVtJytpXCJcblx0XHRcdFx0XHRcdFx0XHRcdDppZD1cIml0ZW0uX2lkXCJcblx0XHRcdFx0XHRcdFx0XHRcdDpsb29wPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6c3JjPVwiaXRlbS5zcmNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Om11dGVkPVwiaXRlbS5pc3BsYXlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0QHBsYXk9XCJwbGF5SW5ncyhpKVwiXHRcblx0XHRcdFx0XHRcdFx0XHRcdDplbmFibGUtcHJvZ3Jlc3MtZ2VzdHVyZT1cImZhbHNlXCJcblx0XHRcdFx0XHRcdFx0XHRcdDpwYWdlLWdlc3R1cmU9XCJmYWxzZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6Y29udHJvbHM9XCJmYWxzZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6aHR0cC1jYWNoZT1cInRydWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0OnNob3ctbG9hZGluZz1cImZhbHNlXCJcblx0XHRcdFx0XHRcdFx0XHRcdDpzaG93LWZ1bGxzY3JlZW4tYnRuPVwiZmFsc2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0OnNob3ctY2VudGVyLXBsYXktYnRuPVwiZmFsc2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0OnN0eWxlPVwiYm94U3R5bGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Om9iamVjdC1maXQ9XCJvYmplY3RfZml0XCJcblx0XHRcdFx0XHRcdFx0XHRcdEB0aW1ldXBkYXRlPVwidGltZXVwZGF0ZSgkZXZlbnQsaSlcIlxuXHRcdFx0XHRcdFx0XHRcdD48L3ZpZGVvPlxuXHRcdFx0XHRcdFx0XHRcdDwhLS0g6L+Z6YeM5piv5bCB6Z2iIC0tPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZVxuXHRcdFx0XHRcdFx0XHRcdHYtaWY9XCIhaXRlbS5wbGF5SW5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdDpzcmM9XCJpdGVtLnNyYysnP3gtb3NzLXByb2Nlc3M9dmlkZW8vc25hcHNob3QsdF8xMDAsZl9qcGcnXCIgXG5cdFx0XHRcdFx0XHRcdFx0XHQ6bW9kZT1cIm1vZGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0OnN0eWxlPVwiJ3dpZHRoOiAnKyB3aW5kb3dXaWR0aCArJ3B4OyBoZWlnaHQ6ICcrICh3SGVpZ2h0IC0gZGVsZXRlSGVpZ2h0KSArJ3B4OyBwb3NpdGlvbjogYWJzb2x1dGU7J1wiXG5cdFx0XHRcdFx0XHRcdFx0PjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHRcdFx0PCEtLSBcblx0XHRcdFx0XHRcdFx0XHRtb2RlOiDlm77niYfoo4HliarjgIHnvKnmlL7nmoTmqKHlvI9cblx0XHRcdFx0XHRcdFx0XHRtb2RlIOaciSAxNCDnp43mqKHlvI/vvIzlhbbkuK0gNSDnp43mmK/nvKnmlL7mqKHlvI/vvIw5IOenjeaYr+ijgeWJquaooeW8j+OAglxuXHRcdFx0XHRcdFx0XHRcdGh0dHBzOi8vdW5pYXBwLmRjbG91ZC5pby9jb21wb25lbnQvaW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHQgLS0+XG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0PCEtLSDnm7TmjqXnlKggdmlldyDlsLHooYzkuobvvIzkuIDmoLfmmK/lj6/ku6Xopobnm5bljp/nlJ/nu4Tku7bnmoQgLS0+XG5cdFx0XHRcdFx0XHRcdDwhLS0g6L+Z5Liq5piv5pqC5YGc5pe25Ye6546w55qE5Zu+5qCHIC0tPlxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZpZGVvSG92ZXJcIiBAY2xpY2s9XCJ0YXBWaWRlb0hvdmVyKGl0ZW0uc3RhdGUsJGV2ZW50KVwiIEB0b3VjaHN0YXJ0PVwidG91Y2hzdGFydEhvdmVyXCIgOnN0eWxlPVwiYm94U3R5bGVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cIml0ZW0uc3RhdGU9PSdwYXVzZSdcIiBjbGFzcz1cInBsYXlTdGF0ZVwiIHNyYz1cIkAvc3RhdGljL3ZpZGVvL2ltZy9pbmRleC9wbGF5LnBuZ1wiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VySW5mb1wiPlxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gMS7lpLTlg48gLS0+XG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCJpdGVtLmlzU2hvd1Byb2dyZXNzQmFyVGltZSA9PSBmYWxzZVwiIEBjbGljaz1cInRvenVvemhlXCIgY2xhc3M9XCJ1c2VyQXZhdGFyXCIgOnNyYz1cIml0ZW0uaHJlZlwiIG1vZGU9XCJhc3BlY3RGaWxsXCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdFx0XHQ8IS0tIDIu54K56LWeIC0tPlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJpdGVtLmlzU2hvd1Byb2dyZXNzQmFyVGltZSA9PSBmYWxzZVwiIEBjbGljaz1cImNMaWtlKGl0ZW0ubGlrZSk7XCIgc3R5bGU9XCJvcGFjaXR5OiAwLjk7IG1hcmdpbi10b3A6IDE3cHg7XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cIml0ZW0ubGlrZVwiIHNyYz1cIkAvc3RhdGljL3ZpZGVvL2ltZy9pbmRleC94aW4ucG5nXCIgc3R5bGU9XCJ3aWR0aDogNDBweDsgaGVpZ2h0OiA0MHB4OyBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiA2cHg7XCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiIWl0ZW0ubGlrZVwiIHNyYz1cIkAvc3RhdGljL3ZpZGVvL2ltZy9pbmRleC94aW4tMi5wbmdcIiBzdHlsZT1cIndpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDZweDtcIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjogI0ZGRkZGRjsgbWFyZ2luLXRvcDogNXB4OyBmb250LXNpemU6IDE0cHg7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLXRvcDogNDBweDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCIgOmNsYXNzPVwieydsaWtlTnVtQWN0aXZlJzppdGVtLmxpa2V9XCI+e3tpdGVtLmxpa2Vfbn19PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0XHQ8IS0tIDMu6K+E6K66IC0tPlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJpdGVtLmlzU2hvd1Byb2dyZXNzQmFyVGltZSA9PSBmYWxzZVwiIGNsYXNzPVwiY29tbWVudFwiIEBjbGljaz1cInRvQ29tbWVudChpKVwiIHN0eWxlPVwib3BhY2l0eTogMC45OyBtYXJnaW4tdG9wOiAxN3B4O1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIkAvc3RhdGljL3ZpZGVvL2ltZy9pbmRleC9saWFvdGlhbi0yLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDM1cHg7IGhlaWdodDogMzVweDsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogN3B4O1wiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImNvbG9yOiAjRkZGRkZGOyBtYXJnaW4tdG9wOiA1cHg7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLXRvcDogNDBweDtcIj57e2l0ZW0uc21zX259fTwvdGV4dD5cblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdFx0PCEtLSA0LuWIhuS6qyAtLT5cblx0XHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiaXRlbS5pc1Nob3dQcm9ncmVzc0JhclRpbWUgPT0gZmFsc2VcIiBAY2xpY2s9XCJzaGFyZVwiIHN0eWxlPVwib3BhY2l0eTogMC45OyBtYXJnaW4tdG9wOiAxN3B4O1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIkAvc3RhdGljL3ZpZGVvL2ltZy9pbmRleC9zaGFyZS1maWxsLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogNXB4O1wiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImNvbG9yOiAjRkZGRkZGOyBtYXJnaW4tdG9wOiA1cHg7IGZvbnQtc2l6ZTogMTRweDsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXdlaWdodDogYm9sZDsgbWFyZ2luLXRvcDogNDBweDtcIj7liIbkuqs8L3RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdDwhLS0g5pyA5bqV5LiL55qE5paH5a2X6YOo5YiGIC0tPlxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIiB2LWlmPVwiZGF0YUxpc3QubGVuZ3RoICE9PSAwICYmIGRhdGFMaXN0W2tdLmlzU2hvd1Byb2dyZXNzQmFyVGltZSA9PSBmYWxzZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidXNlck5hbWVcIiA6c3R5bGU9XCInd2lkdGg6ICcrICh3aW5kb3dXaWR0aCAtIDkwKSArJ3B4OydcIj57e2l0ZW0udGl0bGV9fTwvdGV4dD48IS0tIGk9e3tpfX0gLS0+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ3b3Jkc1wiIDpzdHlsZT1cIid3aWR0aDogJysgKHdpbmRvd1dpZHRoIC0gOTApICsncHg7J1wiPnt7aXRlbS5tc2d9fS17e2srMX19PC90ZXh0PjwhLS0gaz17e2t9fSAtLT5cblx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XHQ8IS0tIDEu6KeG6aKR6aKE6KeI5pe255qE5Zu+54mH77yMY3VycmVudHRpbWVz77ya5bCx5piv6I635Y+W5b2T5YmN5ruR5Z2X55qE5pe26Ze054K577yM5aaC5p6c5LiN6ZyA6KaB77yM5Y+v5Lul5rOo6YeK5o6JIC0tPlxuXHRcdFx0XHRcdFx0XHQ8IS0tIDIu5aaC5p6c5L2/55So5LiL6Z2i55qE6KeG6aKR6aKE6KeI55qE6K+d6KaB5rOo5oSP55qE5piv6KeG6aKR6ZO+5o6l5pyA5aW95piv6Zi/6YeM5LqR5LiK55qE77yM5Zug5Li6XG5cdFx0XHRcdFx0XHRcdFx0XHRodHRwczovL3h4eHh4eHh4eC5tcDQ/eC1vc3MtcHJvY2Vzcz12aWRlby9zbmFwc2hvdCx0XzEwMDAsZl9qcGdcblx0XHRcdFx0XHRcdFx0XHRcdOi/meS4quaYr+mYv+mHjOS6keeahOS4nOilv++8jOiHs+S6juWFtuS7lueahOinhumikeaIquW4p+aIkei/mOayoeacieivlei/h+OAglxuXHRcdFx0XHRcdFx0XHRcdFx0LS0+XG5cdFx0XHRcdFx0XHRcdDwhLS0gMy7pmL/ph4zkupHop4bpopHmiKrluKflnLDlnYDvvJpodHRwczovL2hlbHAuYWxpeXVuLmNvbS9kb2N1bWVudF9kZXRhaWwvNjQ1NTUuaHRtbCAtLT5cblx0XHRcdFx0XHRcdFx0PGltYWdlXG5cdFx0XHRcdFx0XHRcdHYtaWY9XCJpdGVtLmlzU2hvd2ltYWdlID09IHRydWVcIlxuXHRcdFx0XHRcdFx0XHRcdDpzcmM9XCJpdGVtLnNyYysnP3gtb3NzLXByb2Nlc3M9dmlkZW8vc25hcHNob3QsdF8nKyBjdXJyZW50dGltZXMgKycwMDAsZl9qcGcnXCIgXG5cdFx0XHRcdFx0XHRcdFx0bW9kZT1cImFzcGVjdEZpbGxcIlxuXHRcdFx0XHRcdFx0XHRcdDpzdHlsZT1cIid3aWR0aDogMTIwdXB4OyBoZWlnaHQ6IDE2MHVweDsgYm9yZGVyLXJhZGl1czogMTB1cHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAnKyAoUHJvZ3Jlc3NCYXJCb3R0b20gKyAxNjApICsndXB4OyBsZWZ0OiAnKyAoY3VycmVudFBvc2l0aW9ucyAtIDE1KSArJ3B4OydcIlxuXHRcdFx0XHRcdFx0XHQ+PC9pbWFnZT5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9jZWxsPlxuXHRcdFx0PC9saXN0PlxuXHRcdFx0PCEtLSAxLuazqOaEj++8mui/m+W6puadoei/meexu+aLluaLveeahOS4nOilv+S4jeiDveaUvui/m2Jsb2NrXFxjZWxs6L+Z5Lqb5b6q546v5L2T5Lit55qE77yM6KaB5LiN54S2dG91Y2htb3Zl5pa55rOV5Lya5o2V5o2J5pyJ6K+vIC0tPlxuXHRcdFx0PHZpZXcgdi1pZj1cImRhdGFMaXN0Lmxlbmd0aCAhPT0gMCAmJiBkYXRhTGlzdFtrXS5pc1Nob3dQcm9ncmVzc0JhclRpbWUgPT0gdHJ1ZVwiIDpzdHlsZT1cIidwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogJysgKFByb2dyZXNzQmFyQm90dG9tICsgdGhpcy53aW5kb3dXaWR0aCowLjIpLzIgKydweDsgbGVmdDogJysgKHdpbmRvd1dpZHRoKjIgLSB0aGlzLndpbmRvd1dpZHRoKjEuMzUpLzIgKydweDsnXCI+XG5cdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAyMnB4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICNGMUYxRjE7XCI+e3tjaGFuZ2VUaW1lfX0gLyB7e3ZpZGVvVGltZXN9fTwvdGV4dD5cblx0XHRcdDwvdmlldz5cblx0XHRcdDwhLS0g6L+Z6YeM5bCx5piv6L+b5bqm5p2h5LqG77ya57qv5omL5bel6L+b5bqm5p2h77yM6LCD5pW05L2N572u55qE6K+d5bCx5oqK5LuW5Lus55qEIGJvdHRvbSDmlLnmiJDkuIDkuIvlsLHooYzkuoYgLS0+XG5cdFx0XHQ8dmlldyB2LWlmPVwiaXNEcmFnZ2luZyA9PSBmYWxzZVwiIEB0b3VjaG1vdmU9XCJ0b3VjaG1vdmVcIiBAdG91Y2hlbmQ9XCJ0b3VjaGVuZFwiIEB0b3VjaHN0YXJ0PVwidG91Y2hzdGFydFwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDA7IGxlZnQ6IDA7XCI+XG5cdFx0XHRcdDwhLS0gMS7ov5nkuIDmraXlv4XpobvliqDvvIzkuLrkuobpgILphY3kvY7nq6/mnLrlnosgLS0+XG5cdFx0XHRcdDx0ZXh0IDpzdHlsZT1cIid3aWR0aDogJysgd2luZG93V2lkdGggKydweDsgb3BhY2l0eTogMDsnXCI+LjwvdGV4dD5cblx0XHRcdFx0PCEtLSAyLui/meaYr+acquWKoOi9veeahOaXtueahOWPs+i+ueeahOeBsOiJsumDqOWIhiAtLT5cblx0XHRcdFx0PHZpZXcgOnN0eWxlPVwiJ3dpZHRoOiAnKyB3aW5kb3dXaWR0aCArJ3B4OyBoZWlnaHQ6IDR1cHg7IGJhY2tncm91bmQtY29sb3I6ICNDOEM3Q0M7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAnKyBQcm9ncmVzc0JhckJvdHRvbSArJ3VweDsgb3BhY2l0eTogJysgUHJvZ3Jlc3NCYXJPcGFjaXR5ICsnOydcIj48L3ZpZXc+XG5cdFx0XHRcdDwhLS0gMy7ov5nph4zmiJHph4fnlKjnmoTliIbnprvlvI/lip7ms5XvvJrlsLHmmK/orqnmu5HliqjmoLflvI/lkozkuI3mu5HliqjnmoTmoLflvI/liIblvIDvvIzov5nmoLfnm7jkupLkuI3lubLmibDvvIzlj6/ku6Xpgb/lhY3ov5vluqbmnaHpl6rliqjnmoTpl67popggLS0+XG5cdFx0XHRcdDwhLS0gNC7ms6jmhI/vvJppc1Nob3dQcm9ncmVzc0JhclRpbWUg5Yqg5YWl5LqG6L+U5Zue5pWw5o2u5LitIC0tPlxuXHRcdFx0XHQ8dmlldyB2LWlmPVwiZGF0YUxpc3QubGVuZ3RoICE9PSAwICYmIGRhdGFMaXN0W2tdLmlzU2hvd1Byb2dyZXNzQmFyVGltZSA9PSBmYWxzZVwiIDpzdHlsZT1cIid3aWR0aDogJysgKGN1cnJlbnRQb3NpdGlvbikgKydweDsgaGVpZ2h0OiA0dXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogJysgUHJvZ3Jlc3NCYXJCb3R0b20gKyd1cHg7IGxlZnQ6IDA7IG9wYWNpdHk6ICcrIChQcm9ncmVzc0Jhck9wYWNpdHkgLSAwLjEpICsnOydcIj48L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJkYXRhTGlzdC5sZW5ndGggIT09IDAgJiYgZGF0YUxpc3Rba10uaXNTaG93UHJvZ3Jlc3NCYXJUaW1lID09IHRydWVcIiA6c3R5bGU9XCInd2lkdGg6ICcrIChjdXJyZW50UG9zaXRpb25zKSArJ3B4OyBoZWlnaHQ6IDh1cHg7IGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAnKyBQcm9ncmVzc0JhckJvdHRvbSArJ3VweDsgbGVmdDogMDsgb3BhY2l0eTogJysgKFByb2dyZXNzQmFyT3BhY2l0eSArIDAuMDUpICsnOydcIj48L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJkYXRhTGlzdC5sZW5ndGggIT09IDAgJiYgZGF0YUxpc3Rba10uaXNTaG93UHJvZ3Jlc3NCYXJUaW1lID09IGZhbHNlXCIgOnN0eWxlPVwiJ3dpZHRoOiA0cHg7IGhlaWdodDogNHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyBib3JkZXItcmFkaXVzOiAxMHB4OyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogJysgKFByb2dyZXNzQmFyQm90dG9tIC0gMikgKyd1cHg7IGxlZnQ6ICcrIChjdXJyZW50UG9zaXRpb24pICsncHg7IG9wYWNpdHk6ICcrIFByb2dyZXNzQmFyT3BhY2l0eSArJzsnXCI+PC92aWV3PlxuXHRcdFx0XHQ8dmlldyB2LWlmPVwiZGF0YUxpc3QubGVuZ3RoICE9PSAwICYmIGRhdGFMaXN0W2tdLmlzU2hvd1Byb2dyZXNzQmFyVGltZSA9PSB0cnVlXCIgOnN0eWxlPVwiJ3dpZHRoOiAnKyBkb3RXaWR0aCArJ3B4OyBoZWlnaHQ6ICcrIGRvdFdpZHRoICsncHg7IGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IGJvcmRlci1yYWRpdXM6IDEwcHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAnKyAoUHJvZ3Jlc3NCYXJCb3R0b20gLSA1KSArJ3VweDsgbGVmdDogJysgKGN1cnJlbnRQb3NpdGlvbnMgLSA1KSArJ3B4OyBvcGFjaXR5OiAnKyBQcm9ncmVzc0Jhck9wYWNpdHkgKyc7J1wiPjwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdFx0PCEtLVxuXHRcdFxuXHRcdOivt+WJjeW+gCBkb3V5aW4tc2Nyb2xsdmlldy5udnVlIOaWh+S7tuafpeeci1xuXHRcdFxuXHRcdOW3sue7j+WFqOmDqOazqOmHilxuXHRcdFxuXHRcdCDov5nph4zlsLHmmK/lvJXlhaXor4Torrrmj5Lku7Zcblx0XHQgXG5cdFx0IFxuXHRcdCAtLT5cblx0XHQ8dW5pLXBvcHVwIHR5cGU9XCJib3R0b21cIiByZWY9XCJwaW5nbHVuXCIgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ9XCJtb3ZlSGFuZGxlXCI+XG5cdFx0XHQ8dmlldyA6c3R5bGU9XCInd2lkdGg6ICcrIHdpbmRvd1dpZHRoICsncHg7IGhlaWdodDogJysgKGJveFN0eWxlLmhlaWdodC9oZWlnaHROdW0pICsncHg7IGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjQ7IGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7IGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4OydcIj5cblx0XHRcdFx0PCEtLSBcblx0XHRcdFx0IOazqOaEj++8mlxuXHRcdFx0XHQgZGVsZXRlSU9TSGVpZ2h0XG5cdFx0XHRcdCBkZWxldGVBbmRyb2lkSGVpZ2h0XG5cdFx0XHRcdCDov5nkuKTkuKrlj4LmlbDnlKjkuo7mjqfliLbor4TorrrnrYnnmoTpq5jluqZcblx0XHRcdFx0IC0tPlxuXHRcdFx0XHQ8ZG91eWluLXNjcm9sbHZpZXdcblx0XHRcdFx0OldpZHRoPVwid2luZG93V2lkdGhcIlxuXHRcdFx0XHQ6SGVpZ2h0PVwiKGJveFN0eWxlLmhlaWdodC8xLjIzKVwiXG5cdFx0XHRcdDpkZWxldGVJT1NIZWlnaHQ9XCIzNlwiXG5cdFx0XHRcdDpkZWxldGVBbmRyb2lkSGVpZ2h0PVwiMTVcIlxuXHRcdFx0XHRAY2xvc2VTY3JvbGx2aWV3PVwiY2xvc2VTY3JvbGx2aWV3XCJcblx0XHRcdFx0PjwvZG91eWluLXNjcm9sbHZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC91bmktcG9wdXA+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXHQvLyBpbXBvcnQgdXNlckxpc3QgZnJvbSAnLi9kYXRhLmpzJy8v6L+Z5Liq5piv5YGH5pWw5o2uXG5cdC8qXG5cdOW8leWFpeivhOiuuue7hOS7tlxuXHQqLyBcblx0Ly8gaW1wb3J0IGRvdXlpblNjcm9sbHZpZXcgZnJvbSAnQC9jb21wb25lbnRzL2RvdXlpbi1zY3JvbGx2aWV3L2RvdXlpbi1zY3JvbGx2aWV3Lm52dWUnXG5cdFxyXG5cdFxuXHRcblx0ZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Ly/kuIvpnaLmiZPwn4yf5Y+355qE5piv5b+F6aG76KaB55qE5Z+656GA5a2X5q61XG5cdFx0XHRcdC8v5LiL6Z2i5omT8J+Sl+WPt+eahOaYr+aLpeaciea7keWKqOadoeeahOW/hemhu+Wtl+autVxuXHRcdFx0XHRkYXRhTGlzdDpbXSwvL+eUqOS6juaVsOaNruW+queOr+eahOWIl+ihqPCfjJ/wn5KXXG5cdFx0XHRcdHdIZWlnaHQ6MCwvL+iOt+WPlueahOWxj+W5lemrmOW6pvCfjJ/wn5KXXG5cdFx0XHRcdGJveFN0eWxlOnsvL+inhumike+8jOWbvueJh+Wwgemdouagt+W8j/CfjJ/wn5KXXG5cdFx0XHRcdFx0J2hlaWdodCc6IDAsXG5cdFx0XHRcdFx0J3dpZHRoJzogMCxcblx0XHRcdFx0fSxcblx0XHRcdFx0azowLC8v6buY6K6k5Li6MPCfjJ/wn5KXXG5cdFx0XHRcdHBsYXlJbmdJZHM6W10sLy/mraPlnKjmkq3mlL7nmoTop4bpopFpZOWIl+mYn++8jOWIl+mYn+eUqOS6juWkhOeQhua7keWKqOi/h+W/q+WvvOiHtOeahOi3s+mikemXrumimPCfjJ/wn5KXXG5cdFx0XHRcdHJlYWR5OmZhbHNlLC8v5Y+v5b+955WlXG5cdFx0XHRcdGlzRHJhZ2dpbmc6IGZhbHNlLC8vZmFsc2Xku6PooajlgZzmraLmu5Hliqjwn4yf8J+Sl1xuXHRcdFx0XHRyZWZyZXNoaW5nOiB0cnVlLC8v55So5LqO5LiL5ouJ5Yi35paw8J+Mn/Cfkpdcblx0XHRcdFx0d2luZG93V2lkdGg6IDAsLy/ojrflj5blsY/luZXlrr3luqbwn4yf8J+Sl1xuXHRcdFx0XHR3aW5kb3dIZWlnaHQ6IDAsXG5cdFx0XHRcdGRleDogWzAsMF0sLy/nlKjkuo7liKTmlq3mmK/kuIrmu5Hov5jmmK/kuIvmu5HvvIznrKzkuIDkuKrlrZjml6flgLzvvIznrKzkuozkuKrlrZjmlrDlgLzjgJDnm67liY3lnKgxLjAuN+W3sue7j+W6n+W8g+OAkVxuXHRcdFx0XHRjdXJyZW50czogMCwvL+eUqOS6juW3puWPs+a7keWKqO+8jDDku6Pooajop4bpopHnlYzpnaLvvIwx5Luj6KGo5Y+z5ruR55WM6Z2i8J+Mn/Cfkpdcblx0XHRcdFx0cGxhdGZvcm06ICcnLC8v55So5LqO6I635Y+W5pON5L2c57O757uf77yaaW9z44CBYW5kcm9pZPCfjJ/wn5KXXG5cdFx0XHRcdHBsYXlJbmc6IGZhbHNlLC8v55So5LqO6KeG6aKR5Yid5aeL5YyW5pe25piv5ZCm5pKt5pS+77yM6buY6K6k5LiN5pKt5pS+8J+Mn/Cfkpdcblx0XHRcdFx0dmlkZW9UaW1lOiAnJywvL+inhumikeaAu+aXtumVv++8jOi/meS4quS4u+imgeeUqOadpeaIquWPluaXtumXtOaVsOWAvPCfkpdcblx0XHRcdFx0dmlkZW9UaW1lczogJycsLy/op4bpopHml7bplb/vvIznlKjov5nkuKrmnaXojrflj5bml7bpl7TlgLzvvIzkvovlpoLvvJowMDozMOi/meS4quaXtumXtOWAvPCfkpdcblx0XHRcdFx0Y2hhbmdlVGltZTogJycsLy/mmL7npLrmu5Hliqjov5vluqbmnaHml7blj5jljJbnmoTml7bpl7Twn5KXXG5cdFx0XHRcdGlzU2hvd2ltYWdlOiBmYWxzZSwvL+aYr+WQpuaYvuekuuWwgemdouOAkDEuMC405bey5bqf5byD77yM5L2G5piv5oSP5oCd6ZyA6KaB6K6w5L2P44CRXG5cdFx0XHRcdGN1cnJlbnR0aW1lczogMCwvL+W9k+WJjeaXtumXtPCfkpdcblx0XHRcdFx0aXNTaG93UHJvZ3Jlc3NCYXJUaW1lOiBmYWxzZSwvL+aYr+WQpuaLluWKqOi/m+W6puadoe+8jOWmguaenOaLluWKqO+8iHRydWXvvInliJnmmL7npLrov5vluqbmnaHml7bpl7TvvIzlkKbliJnkuI3mmL7npLrvvIhmYWxzZe+8ieOAkDEuMC405bey5bqf5byD77yM5L2G5piv5oSP5oCd6ZyA6KaB6K6w5L2P44CRXG5cdFx0XHRcdFByb2dyZXNzQmFyT3BhY2l0eTogMC43LC8v6L+b5bqm5p2h5LiN5ouW5Yqo5pe255qE6buY6K6k5YC877yM5bCx5piv6YCP5piO55qE8J+Sl1xuXHRcdFx0XHRkb3RXaWR0aDogMCwvL+aSreaUvueahOWwj+WchueCue+8jOm7mOiupOayoeacifCfkpdcblx0XHRcdFx0ZGVsZXRlSGVpZ2h0OiAwLC8v5rWL6K+V6auY5bqm8J+Mn/Cfkpdcblx0XHRcdFx0cGVyY2VudDogMCwvL+eZvuWIhuWwj+aVsPCfkpdcblx0XHRcdFx0Y3VycmVudFBvc2l0aW9uOiAwLC8v5ruR5Z2X5b2T5YmN5L2N572u8J+Sly8vMi4w5bey5byD55So77yM546w5bey55So5LqO5ZCO56uv5Y+C5pWwXG5cdFx0XHRcdGN1cnJlbnRQb3NpdGlvbnM6IDAsLy/mu5HlnZflvZPliY3kvY3nva7nmoTlia/mnKzwn5KXLy8yLjDlt7LlvIPnlKjvvIznjrDlt7LnlKjkuo7lkI7nq6/lj4LmlbBcblx0XHRcdFx0bmV3VGltZTogMCwvL+i3n+aJi+a7keWKqOWQjueahOacgOaWsOaXtumXtPCfkpdcblx0XHRcdFx0dGltZU51bWJlcjogMCwvL/CfjJ/wn5KXXG5cdFx0XHRcdFByb2dyZXNzQmFyQm90dG9tOiAyMCwvL+i/m+W6puadoeemu+W6lemDqOeahOi3neemu/Cfkpdcblx0XHRcdFx0b2JqZWN0X2ZpdDogJ2NvbnRhaW4nLC8v6KeG6aKR5qC35byP6buY6K6k5YyF5ZCr8J+Mn/Cfkpdcblx0XHRcdFx0bW9kZTogJ2FzcGVjdEZpdCcsLy/lm77niYflsIHpnaLmoLflvI/wn4yf8J+Sl1xuXHRcdFx0XHR0aW1lb3V0OiBcIlwiLC8v8J+Mn+eUqOadpemYu+atoiBzZXRUaW1lb3V0KCnmlrnms5Vcblx0XHRcdFx0dm9pY2U6IFwiXCIsLy/wn4yf55So5p2l6Zi75q2iIHNldFRpbWVvdXQoKeaWueazlVxuXHRcdFx0XHRvbGRWaWRlbzogXCJcIixcblx0XHRcdFx0XG5cdFx0XHRcdGlzQXV0b3BsYXk6IGZhbHNlLC8v5piv5ZCm5byA5ZCv6Ieq5Yqo5pKt5pS+KOm7mOiupOS4jeW8gOWQrylcblx0XHRcdFx0YXV0b3BsYXlUZXh0OiBcIuW8gOWQr+iHquWKqOaSreaUvlwiLFxuXHRcdFx0XHR0aW1lcnM6IFwiXCIsXG5cdFx0XHRcdFxuXHRcdFx0XHQvLyDlvJXlhaXor4TorrogLSDlj4LmlbBcblx0XHRcdFx0aGVpZ2h0TnVtOiAxLjE4LFxuXHRcdFx0XHRcblx0XHRcdFx0Ly8g5Y+M5Ye754K56LWe5Y+C5pWwXG5cdFx0XHRcdHRvdWNoTnVtOiAwLFxuXHRcdFx0XHRhaXhpbkxlZnQ6IDAsXG5cdFx0XHRcdGFpeGluVG9wOiAwLFxuXHRcdFx0XHRpc1Nob3dBaXhpbjogZmFsc2UsXG5cdFx0XHRcdFJvdGF0ZTogMFxuXHRcdFx0fVxuICAgICAgICB9LFxuXHRcdHdhdGNoOntcblx0XHRcdGsoayxvbGRfayl7Ly/nm5HlkKwgayDlgLznmoTlj5jljJbvvIzlj6/ku6XmjqfliLbop4bpopHnmoTmkq3mlL7kuI7mmoLlgZxcblx0XHRcdFx0Y29uc29sZS5sb2coaylcblx0XHRcdFx0dGhpcy5kYXRhTGlzdFtvbGRfa10uc3RhdGUgPSAnc3RvcCcvL+WmguaenOaYr+iiq+a7kei1sOeahOinhumike+8jOWwseWBnOatouaSreaUvlxuXHRcdFx0XHR0aGlzLmRhdGFMaXN0W29sZF9rXS5wbGF5SW5nID0gZmFsc2UvL+WmguaenOinhumikeaaguWBnO+8jOWwseWKoOi9veWwgemdolxuXHRcdFx0XHR0aGlzLmRhdGFMaXN0W29sZF9rXS5pc3BsYXkgPSB0cnVlXG5cdFx0XHRcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQodGhpcy5kYXRhTGlzdFtvbGRfa10uX2lkLHRoaXMpLnBsYXkoKVxuXHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy5vbGRWaWRlbylcblx0XHRcdFx0dGhpcy5vbGRWaWRlbyA9IHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3Rbb2xkX2tdLl9pZCx0aGlzKS5zZWVrKDApXG5cdFx0XHRcdFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dCh0aGlzLmRhdGFMaXN0W29sZF9rXS5faWQsdGhpcykucGF1c2UoKVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfpooTnlZnnrKwnICsgKG9sZF9rICsgMSkgKyAn5Liq6KeG6aKR77yaJyArIHRoaXMuZGF0YUxpc3Rbb2xkX2tdLl9pZClcblx0XHRcdFx0fSw1MDApXG5cdFx0XHRcdC8vIDIuMOeJiOacrOW3sue7j+WOu+aOieS6huS4i+mdoui/meS4gOWPpe+8jOinhumikeS4jeeUqOaaguWBnO+8jOWPqumcgOimgeaKiuWjsOmfs+emgeatouWwseihjFxuXHRcdFx0XHQvLyB1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3Rbb2xkX2tdLl9pZCArICcnICsgb2xkX2ssdGhpcykuc3RvcCgpLy/lpoLmnpzop4bpopHmmoLlgZzvvIzpgqPkuYjml6fop4bpopHlgZzmraLvvIzov5nph4znmoR0aGlzLmRhdGFMaXN0W29sZF9rXS5faWQgKyAnJyArIG9sZF9r77yM5ZCO6Z2i5YqgIG9sZF9rIOaYr+S4uuS6huavj+S4gOS4quinhumikeeahCBpZCDlgLzkuI3lkIzvvIzov5nmoLflsLHlj6/ku6XlpKfnqIvluqbnmoTpgb/lhY3kuLLpn7Ppl67pophcblx0XHRcdFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dCh0aGlzLmRhdGFMaXN0W2tdLl9pZCx0aGlzKS5wbGF5KCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCflt7Lnu4/mmoLlgZwgLS0+IOesrCcgKyAob2xkX2sgKyAxKSArICfkuKrop4bpopHvvZ4nKS8v5o+Q56S6XG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnZvaWNlKVxuXHRcdFx0XHR0aGlzLnZvaWNlID0gc2V0VGltZW91dCgoKT0+e1xuXHRcdFx0XHRcdHRoaXMuZGF0YUxpc3Rba10uaXNwbGF5ID0gZmFsc2Vcblx0XHRcdFx0fSwzMDApXG5cdFx0XHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdFx0XHR0aGlzLmRhdGFMaXN0W2tdLnBsYXlJbmcgPSB0cnVlXG5cdFx0XHRcdH0sODUwKVxuXHRcdFx0XHQvL+OAkDIuMOeJiOacrOabtOaWsOWGheWuueOAkS0gc3RhcnRcblx0XHRcdFx0dmFyIHAgPSBrXG5cdFx0XHRcdCsrcFxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHRcdFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dCh0aGlzLmRhdGFMaXN0W3BdLl9pZCx0aGlzKS5wbGF5KClcblx0XHRcdFx0fSwyMClcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dClcblx0XHRcdFx0dGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKT0+e1xuXHRcdFx0XHRcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQodGhpcy5kYXRhTGlzdFtwXS5faWQsdGhpcykuc2VlaygwKVxuXHRcdFx0XHRcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQodGhpcy5kYXRhTGlzdFtwXS5faWQsdGhpcykucGF1c2UoKVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfpooTliqDovb3nrKwnICsgKHAgKyAxKSArICfkuKrop4bpopHvvJonICsgdGhpcy5kYXRhTGlzdFtwXS5faWQpXG5cdFx0XHRcdH0sMTUwMClcblx0XHRcdFx0Ly/jgJAyLjDniYjmnKzmm7TmlrDlhoXlrrnjgJEtIGVuZFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25TaG93KCl7XG5cdFx0XHRjb25zb2xlLmxvZygn5Zue5Yiw5YmN5Y+wJyk7XG5cdFx0XHRpZih0aGlzLmRhdGFMaXN0Lmxlbmd0aCAhPT0gMCl7XG5cdFx0XHRcdHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5zdGF0ZSA9ICdwbGF5Jztcblx0XHRcdFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dCh0aGlzLmRhdGFMaXN0W3RoaXMua10uX2lkLHRoaXMpLnBsYXkoKVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25IaWRlKCl7XG5cdFx0XHR0aGlzLmRhdGFMaXN0W3RoaXMua10uc3RhdGUgPSAncGF1c2UnOy8v55WM6Z2i6ZqQ6JeP5Lmf6KaB5YGc5q2i5pKt5pS+6KeG6aKRXG5cdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5faWQsdGhpcykucGF1c2UoKTsvL+aaguWBnOS7peWQjue7p+e7reaSreaUvlxuXHRcdFx0Y29uc29sZS5sb2coJ+WIsOWQjuWPsCcpO1xuXHRcdH0sXG5cdFx0b25Mb2FkKCl7XG5cdFx0XHR0aGlzLnBsYXRmb3JtID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm1cblx0XHRcdHZhciBtb2RlbCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLm1vZGVsXG5cdFx0XHRpZih0aGlzLnBsYXRmb3JtID09ICdpb3MnICYmIChtb2RlbCAhPT0gJ2lQaG9uZTYnIHx8IG1vZGVsICE9PSAnaVBob25lNnMnIHx8IG1vZGVsICE9PSAnaVBob25lNycgfHwgbW9kZWwgIT09ICdpUGhvbmU4Jykpe1xuXHRcdFx0XHR0aGlzLmRlbGV0ZUhlaWdodCA9IDMyLy/mnIkgdGFiYmFy55qEIOS/ruaUuei/memHjOWPr+S7peaUueWPmOinhumikemrmOW6plxuXHRcdFx0XHRcblx0XHRcdFx0IC8qXG5cdFx0XHRcdCDlvJXlhaXor4Torrrlj4LmlbBcblx0XHRcdFx0ICovXG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLmhlaWdodE51bSA9IDEuMjdcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZGVsZXRlSGVpZ2h0ID0gMFxuXHRcdFx0XHQvKlxuXHRcdFx0XHTlvJXlhaXor4Torrrlj4LmlbBcblx0XHRcdFx0Ki9cblx0XHRcdFx0dGhpcy5oZWlnaHROdW0gPSAxLjE4XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHRoaXMud2luZG93V2lkdGggPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zY3JlZW5XaWR0aC8v6I635Y+W5bGP5bmV5a695bqmXG5cdFx0XHR0aGlzLmJveFN0eWxlLndpZHRoID0gdGhpcy53aW5kb3dXaWR0aCArICdweCcvL+e7meWuveW6puWKoHB4XG5cdFx0XHR0aGlzLndIZWlnaHQgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zY3JlZW5IZWlnaHQ7Ly/ojrflj5blsY/luZXpq5jluqZcblx0XHRcdHRoaXMuYm94U3R5bGUuaGVpZ2h0ID0gdGhpcy53SGVpZ2h0IC0gdGhpcy5kZWxldGVIZWlnaHQ7Ly/mlLnlj5jop4bpopHpq5jluqZcblx0XHRcdHRoaXMuZ2V0KCkvL+i/meS4gOatpe+8jOWKoOi9veinhumikeaVsOaNrlxuXHRcdH0sXG5cdFx0b25SZWFkeSgpIHtcblx0XHR9LFxuICAgICAgICBtZXRob2RzOiB7XG5cdFx0XHRhdXRvUGxheSgpeyBcblx0XHRcdFx0dGhpcy5pc0F1dG9wbGF5ID0gIXRoaXMuaXNBdXRvcGxheTtcblx0XHRcdFx0aWYoIXRoaXMuaXNBdXRvcGxheSl7XG5cdFx0XHRcdFx0dGhpcy5hdXRvcGxheVRleHQgPSBcIuW8gOWQr+iHquWKqOaSreaUvlwiXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTogXCLlhbPpl63oh6rliqjmkq3mlL5cIixcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmF1dG9wbGF5VGV4dCA9IFwi5YWz6Zet6Ieq5Yqo5pKt5pS+XCJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdHRpdGxlOiBcIuW8gOWQr+iHquWKqOaSreaUvlwiLFxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Z2V0RGF0YSgpe1xuXHRcdFx0XHQvLyDov5nph4zlsLHmmK/mlbDmja7liqDovb3lrozku6XlkI7lho3lkJHlkI7nq6/lj5HpgIHmlbDmja7nmoTlnLDmlrlcclxuXHRcdFx0XHRcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdHVybDogJ2h0dHBzOi8vYmRiMjRjNmQtOGMxOS00ZjgwLThlN2UtYzljOWYwMzdmMTMxLmJzcGFwcC5jb20vdmlkZW8nLFxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRcdGRhdGE6e1xuXHRcdFx0XHRcdFx0aW5mbzogJ2dldF92aWRlbydcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHRcdFx0XHRcdHZhciBtc2cgPSByZXMuZGF0YS5kYXRhXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG1zZy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmRhdGFMaXN0LnB1c2gobXNnW2ldKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHR0b3VjaHN0YXJ0KGV2ZW50KXtcblx0XHRcdFx0dGhpcy5kYXRhTGlzdFt0aGlzLmtdLmlzU2hvd2ltYWdlID0gdHJ1ZSAvL+WImuinpuaRuOeahOaXtuWAmeWwseimgeaYvuekuumihOiniOinhumikeWbvueJh+S6hlxuXHRcdFx0XHR0aGlzLmRhdGFMaXN0W3RoaXMua10uaXNTaG93UHJvZ3Jlc3NCYXJUaW1lID0gdHJ1ZSAvL+aYvuekuuaXtumXtOe6v1xuXHRcdFx0XHR0aGlzLlByb2dyZXNzQmFyT3BhY2l0eSA9IDEgLy/orqnmu5HlnZfmmL7npLrotbfmnaXmm7TmmI7mmL7kuIDngrlcblx0XHRcdFx0dGhpcy5kb3RXaWR0aCA9IDEwIC8v6K6p54K55pi+56S66LW35p2l5pu05piO5pi+5LiA54K5XG5cdFx0XHR9LFxuXHRcdFx0dG91Y2hlbmQoKXsvL+W9k+aJi+advuW8gOWQju+8jOi3s+WIsOacgOaWsOaXtumXtFxuXHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5faWQsdGhpcykuc2Vlayh0aGlzLm5ld1RpbWUpXG5cdFx0XHRcdGlmKHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5zdGF0ZSA9PSAncGF1c2UnKXtcblx0XHRcdFx0XHR0aGlzLmRhdGFMaXN0W3RoaXMua10uc3RhdGUgPSAncGxheSdcblx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5faWQsdGhpcykucGxheSgpXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5kYXRhTGlzdFt0aGlzLmtdLmlzU2hvd1Byb2dyZXNzQmFyVGltZSA9IGZhbHNlIC8v6Kem5pG457uT5p2f5ZCO77yM6ZqQ6JeP5pe26Ze057q/XG5cdFx0XHRcdHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5pc1Nob3dpbWFnZSA9IGZhbHNlIC8v6Kem5pG457uT5p2f5ZCO77yM6ZqQ6JeP5pe26Ze06aKE6KeIXG5cdFx0XHRcdHRoaXMuUHJvZ3Jlc3NCYXJPcGFjaXR5ID0gMC41IC8v6ZqQ6JeP6LW35p2l6L+b5bqm5p2h77yM5LiN6YKj5LmI5piO5pi+5LqGXG5cdFx0XHRcdHRoaXMuZG90V2lkdGggPSAwIC8v6ZqQ6JeP6LW35p2l6L+b5bqm5p2h77yM5LiN6YKj5LmI5piO5pi+5LqGXG5cdFx0XHR9LFxuXHRcdFx0dG91Y2htb3ZlKGV2ZW50KXsvL+W9k+aJi+enu+WKqOa7keWdl+aXtu+8jOiuoeeul+S9jee9ruOAgeeZvuWIhuWwj+aVsOOAgeaWsOeahOaXtumXtFxuXHRcdFx0XHR2YXIgbXNnID0gW11cblx0XHRcdFx0aWYodGhpcy52aWRlb1RpbWUgIT09ICcnKXtcblx0XHRcdFx0XHRtc2cgPSB0aGlzLnZpZGVvVGltZS5zcGxpdCgnOicpXG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIHRpbWVOdW1iZXIgPSBOdW1iZXIobXNnWzBdKSo2MCArIE51bWJlcihtc2dbMV0pXG5cdFx0XHRcdHRoaXMuY3VycmVudFBvc2l0aW9ucyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblhcblx0XHRcdFx0dGhpcy5wZXJjZW50ID0gdGhpcy5jdXJyZW50UG9zaXRpb25zIC8gdGhpcy53aW5kb3dXaWR0aFxuXHRcdFx0XHR0aGlzLm5ld1RpbWUgPSB0aGlzLnBlcmNlbnQqdGltZU51bWJlciBcblx0XHRcdFx0dGhpcy5jdXJyZW50dGltZXMgPSBwYXJzZUludCh0aGlzLm5ld1RpbWUpXG5cdFx0XHRcdGxldCB0aGVUaW1lID0gdGhpcy5uZXdUaW1lXG5cdFx0XHRcdGxldCBtaWRkbGUgPSAwOy8vIOWIhlxuXHRcdFx0XHRpZih0aGVUaW1lID4gNjApIHtcblx0XHRcdFx0XHRtaWRkbGUgPSBwYXJzZUludCh0aGVUaW1lLzYwKTtcblx0XHRcdFx0XHR0aGVUaW1lID0gcGFyc2VJbnQodGhlVGltZSU2MCk7XHRcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmNoYW5nZVRpbWUgPSBgJHtNYXRoLnJvdW5kKG1pZGRsZSk+OT9NYXRoLnJvdW5kKG1pZGRsZSk6JzAnK01hdGgucm91bmQobWlkZGxlKX06JHtNYXRoLnJvdW5kKHRoZVRpbWUpPjk/TWF0aC5yb3VuZCh0aGVUaW1lKTonMCcrTWF0aC5yb3VuZCh0aGVUaW1lKX1gXG5cdFx0XHR9LFxuXHRcdFx0dGltZXVwZGF0ZShldmVudCxpbmRleCl7Ly/orqHnrpfmu5HlnZflvZPliY3kvY3nva7vvIzorqHnrpflvZPliY3nmb7liIblsI/mlbBcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coaW5kZXgpXG5cdFx0XHRcdGlmKGluZGV4ID09IHRoaXMuayl7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZXZlbnQpXG5cdFx0XHRcdFx0dmFyIGN1cnJlbnR0aW1lID0gZXZlbnQuZGV0YWlsLmN1cnJlbnRUaW1lXG5cdFx0XHRcdFx0dGhpcy50aW1lTnVtYmVyID0gTWF0aC5yb3VuZChldmVudC5kZXRhaWwuZHVyYXRpb24pXG5cdFx0XHRcdFx0dGhpcy5nZXRUaW1lKClcblx0XHRcdFx0XHR0aGlzLnBlcmNlbnQgPSBjdXJyZW50dGltZS90aGlzLnRpbWVOdW1iZXJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRQb3NpdGlvbiA9IHRoaXMud2luZG93V2lkdGgqdGhpcy5wZXJjZW50XG5cdFx0XHRcdFx0bGV0IHRoZVRpbWUgPSBjdXJyZW50dGltZVxuXHRcdFx0XHRcdGxldCBtaWRkbGUgPSAwOy8vIOWIhlxuXHRcdFx0XHRcdGlmKHRoZVRpbWUgPiA2MCkge1xuXHRcdFx0XHRcdFx0bWlkZGxlID0gcGFyc2VJbnQodGhlVGltZS82MCk7XG5cdFx0XHRcdFx0XHR0aGVUaW1lID0gcGFyc2VJbnQodGhlVGltZSU2MCk7XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VUaW1lID0gYCR7TWF0aC5yb3VuZChtaWRkbGUpPjk/TWF0aC5yb3VuZChtaWRkbGUpOicwJytNYXRoLnJvdW5kKG1pZGRsZSl9OiR7TWF0aC5yb3VuZCh0aGVUaW1lKT45P01hdGgucm91bmQodGhlVGltZSk6JzAnK01hdGgucm91bmQodGhlVGltZSl9YFxuXHRcdFx0XHRcdC8v6Ieq5Yqo5YiH5o2i6KeG6aKRXG5cdFx0XHRcdFx0aWYodGhpcy5pc0F1dG9wbGF5KXsvL3RydWUs5Luj6KGo6Ieq5Yqo5pKt5pS+XG5cdFx0XHRcdFx0XHRpZihNYXRoLnJvdW5kKGN1cnJlbnR0aW1lKSA9PSB0aGlzLnRpbWVOdW1iZXIgLSAxKXtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZG9tID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ2RvbScpXG5cdFx0XHRcdFx0XHRcdGxldCBkb21zID0gJ2l0ZW0nKyh0aGlzLmsrMSlcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0XHRcdFx0XHRcdGxldCBlbCA9IHRoaXMuJHJlZnNbZG9tc11bMF1cblx0XHRcdFx0XHRcdFx0XHRkb20uc2Nyb2xsVG9FbGVtZW50KGVsLHtcblx0XHRcdFx0XHRcdFx0XHRcdG9mZnNldDogMCxcblx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVkOiB0cnVlXG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0fSw1MDApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Z2V0VGltZSgpey8v5b6X5Yiw5pe26Ze05Ye95pWwXG5cdFx0XHRcdHRoaXMudmlkZW9UaW1lID0gdGhpcy5mb3JtYXRTZWNvbmRzKHRoaXMudGltZU51bWJlcik7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoYXQudmlkZW9UaW1lKVxuXHRcdFx0XHR2YXIgbXNnID0gW11cblx0XHRcdFx0aWYodGhpcy52aWRlb1RpbWUgIT09ICcnKXtcblx0XHRcdFx0XHRtc2cgPSB0aGlzLnZpZGVvVGltZS5zcGxpdCgnOicpXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy52aWRlb1RpbWVzID0gYCR7bXNnWzBdPjk/bXNnWzBdOicwJyttc2dbMF19OiR7bXNnWzFdPjk/bXNnWzFdOicwJyttc2dbMV19YDtcblx0XHRcdH0sXG5cdFx0XHRmb3JtYXRTZWNvbmRzKHZhbHVlKSB7Ly/ojrflj5bml7bpl7Tlh73mlbBcblx0XHRcdFx0bGV0IHRoZVRpbWUgPSBwYXJzZUludCh2YWx1ZSk7Ly8g56eSXG5cdFx0XHRcdGxldCBtaWRkbGU9IDA7Ly8g5YiGXG5cdFx0XHRcdGlmKHRoZVRpbWUgPiA2MCkge1xuXHRcdFx0XHRcdG1pZGRsZT0gcGFyc2VJbnQodGhlVGltZS82MCk7XG5cdFx0XHRcdFx0dGhlVGltZSA9IHBhcnNlSW50KHRoZVRpbWUlNjApO1x0XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGAke21pZGRsZT45P21pZGRsZTptaWRkbGV9OiR7dGhlVGltZT45P3RoZVRpbWU6dGhlVGltZX1gO1xuXHRcdFx0fSxcblx0XHRcdHBsYXlJbmdzKGluZGV4KSB7XG5cdFx0XHRcdC8vXG5cdFx0XHR9LFxuXHRcdFx0bW9yZVZpZGVvKGluZGV4KXtcblx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdFx0dG9WaWRlbyhpbmRleCl7XG5cdFx0XHRcdFxuXHRcdFx0fSxcblx0XHRcdGVyd2VpbWEoKXtcblx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdFx0dG96dW96aGUoKXtcblx0XHRcdFx0dGhpcy5jdXJyZW50cyA9IDEvL+eCueWHu+WktOWDj+S7peWQjuWwseS8muWIh+aNolxuXHRcdFx0fSxcblx0XHRcdHN0b3AoKXtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3N0b3AnKVxuXHRcdFx0fSxcblx0XHRcdHNjcm9sbHMgKGV2ZW50KSB7XG5cdFx0XHRcdHRoaXMuaXNEcmFnZ2luZyA9IGV2ZW50LmlzRHJhZ2dpbmdcblx0XHRcdFx0aWYgKCFldmVudC5pc0RyYWdnaW5nKSB7Ly9pc0RyYWdnaW5n77ya5Yik5pat55So5oi35piv5LiN5piv5Zyo5ruR5Yqo77yM5ruR5Yqo77yadHJ1Ze+8jOWBnOatoua7keWKqO+8mmZhbHNl44CC5oiR5Lus6KaB55So5oi35YGc5q2i5ruR5Yqo5pe25omN57uZIGsg6LWL5YC877yM6L+Z5qC35bCx5Y+v5Lul6YG/5YWN5b6I5aSa6bq754OmXG5cdFx0XHRcdFx0dmFyIGkgPSBNYXRoLnJvdW5kKE1hdGguYWJzKGV2ZW50LmNvbnRlbnRPZmZzZXQueSkgLyAodGhpcy53SGVpZ2h0IC0gdGhpcy5kZWxldGVIZWlnaHQgKyAxKSkvL+WFiOeUqOe7neWvueWAvOWPluWHuua7keWKqOeahOi3neemu++8jOeEtuWQjumZpOS7peWxj+W5lemrmOW6pu+8jOWPluS4gOS4quaVtO+8jOWwseefpemBk+S9oOeOsOWcqOa7keWKqOWIsOWTquS4gOS4quinhumikeS6hlxuXHRcdFx0XHRcdGlmKGkgIT09IHRoaXMuayl7Ly/ov5nph4zliqDliKTmlq3mmK/lm6DkuLrov5nkuKrmlrnms5XkvJrmiafooYzlvojlpJrmrKHvvIzkvJrpgKDmiJDph43lpI3or7fmsYLvvIzmiYDku6Xov5nph4zlhpnkuIDkuKrpmZDliLZcblx0XHRcdFx0XHRcdGlmKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09ICdpb3MnKXtcblx0XHRcdFx0XHRcdFx0dGhpcy5rID0gaS8v5Yik5pat5LqG55So5oi35rKh5pyJ5ruR5Yqo77yM56Gu6K6k5LqG55So5oi355qE56Gu5piv5Zyo55yL6L+Z5Liq6KeG6aKR77yM54S25ZCO5bCx6LWL5YC85ZWmXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5zdGF0ZSA9ICdwbGF5J1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5q2j5Zyo5pKt5pS+IC0tPiDnrKwnICsgKHRoaXMuayArIDEpICsgJ+S4quinhumike+9nicpXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lcnMpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRpbWVycyA9IHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmsgPSBpLy/liKTmlq3kuobnlKjmiLfmsqHmnInmu5HliqjvvIznoa7orqTkuobnlKjmiLfnmoTnoa7mmK/lnKjnnIvov5nkuKrop4bpopHvvIznhLblkI7lsLHotYvlgLzllaZcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRhdGFMaXN0W3RoaXMua10uc3RhdGUgPSAncGxheSdcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5q2j5Zyo5pKt5pS+IC0tPiDnrKwnICsgKHRoaXMuayArIDEpICsgJ+S4quinhumike+9nicpXG5cdFx0XHRcdFx0XHRcdH0sODApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Z2V0KCl7XHJcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOidodHRwOi8vMTIwLjI0LjIzOC44ODo4MTQ2L2dldHZpZGVvJyxcclxuXHRcdFx0XHRcdG1ldGhvZDonR0VUJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRcdFx0dmFyIG1zZyA9IHJlcy5kYXRhXHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKG1zZylcclxuXHRcdFx0XHRcdFx0dGhpcy5kYXRhTGlzdCA9IG1zZ1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFMaXN0WzBdID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd2aWRlb19jaHVhbmNhbicpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFMaXN0WzBdLnN0YXRlID0gXCJwbGF5XCI7XHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRcdFx0XHQvL+i/memHjOeahOW7tui/n+aYr+S4uuS6humBv+WFjeaJp+ihjOaXtumXtOWkquW/q+iAjOebtOaOpei3s+i/h+aJp+ihjOeahCBidWdcclxuXHRcdFx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3RbMF0uX2lkLHRoaXMpLnNlZWsoMClcclxuXHRcdFx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3RbMF0uX2lkLHRoaXMpLnBsYXkoKVxyXG5cdFx0XHRcdFx0XHR9LDIwMClcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHRoaXMuZGF0YUxpc3RbMF0uaXNwbGF5ID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGF0YUxpc3RbMF0ucGxheUluZyA9IHRydWVcclxuXHRcdFx0XHRcdFx0fSw1MDApXHJcblx0XHRcdFx0XHRcdHZhciBwID0gMFxyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0XHRcdFx0KytwXHJcblx0XHRcdFx0XHRcdFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dCh0aGlzLmRhdGFMaXN0W3BdLl9pZCx0aGlzKS5wbGF5KClcclxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3RbcF0uX2lkLHRoaXMpLnNlZWsoMClcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQodGhpcy5kYXRhTGlzdFtwXS5faWQsdGhpcykucGF1c2UoKVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+mihOWKoOi9veesrCcgKyAocCArIDEpICsgJ+S4quinhumike+8micgKyB0aGlzLmRhdGFMaXN0W3BdLl9pZClcclxuXHRcdFx0XHRcdFx0XHR9LDIwMDApXHJcblx0XHRcdFx0XHRcdH0sNTApXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcblx0XHRcdFx0Ly8g6L+Z5Liq5pa55rOV5Li76KaB5bCx5piv55So5p2l56ys5LiA5qyh6L+b5YWl6KeG6aKR5pKt5pS+5pe255So5p2l5aSE55CG55qEXG5cdFx0XHRcdC8vIHRoaXMuZGF0YUxpc3QgPSB1c2VyTGlzdDsvL+i/meS4quWwseaYr+i1i+WAvOWKoOi9veinhumikeWVplxuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0dXJsOiAnaHR0cHM6Ly9iZGIyNGM2ZC04YzE5LTRmODAtOGU3ZS1jOWM5ZjAzN2YxMzEuYnNwYXBwLmNvbS92aWRlbycsXG5cdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdFx0ZGF0YTp7XG5cdFx0XHRcdFx0XHRpbmZvOiAnZ2V0X3ZpZGVvJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0b25wdWxsaW5nZG93bigpe1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygn5q2j5Zyo5LiL5ouJ5Yi35paw77yM5q2k5pe25omL6L+Y5Zyo6Kem5pG45rKh5pyJ5p2+5byAJylcblx0XHRcdFx0dGhpcy5yZWZyZXNoaW5nID0gdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdG9ucmVmcmVzaCgpe1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygn5LiL5ouJ5Yi35paw5a6M5q+V77yM5q2k5pe25omL5p2+5byA5LqGJylcblx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0XHRcdHRoaXMucmVmcmVzaGluZyA9IGZhbHNlXG5cdFx0XHRcdH0sMTAwMClcblx0XHRcdH0sXG5cdFx0XHQvLyDlj4zlh7vngrnotZ7mlYjmnpxcblx0XHRcdHRvdWNoc3RhcnRIb3ZlcihldmVudCl7XG5cdFx0XHRcdGlmKHRoaXMudG91Y2hOdW0gPj0gMSl7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ+WPjOWHuyAtLSBY5Z2Q5qCH77yaJysgZXZlbnQudG91Y2hlc1swXS5zY3JlZW5YKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygn5Y+M5Ye7IC0tIFnlnZDmoIfvvJonKyBldmVudC50b3VjaGVzWzBdLnNjcmVlblkpO1xuXHRcdFx0XHRcdHRoaXMuYWl4aW5MZWZ0ID0gZXZlbnQudG91Y2hlc1swXS5zY3JlZW5YIC0gNTA7XG5cdFx0XHRcdFx0dGhpcy5haXhpblRvcCA9ICBldmVudC50b3VjaGVzWzBdLnNjcmVlblkgLSA1MDtcblx0XHRcdFx0XHR0aGlzLmlzU2hvd0FpeGluID0gdHJ1ZTtcblx0XHRcdFx0XHRsZXQgbWF4ID0gNDA7IGxldCBtaW4gPSAtNDA7XG5cdFx0XHRcdFx0dGhpcy5Sb3RhdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdFx0XHRcdHRoaXMuaXNTaG93QWl4aW4gPSBmYWxzZTtcblx0XHRcdFx0XHR9LDcwMClcblx0XHRcdFx0XHR0aGlzLm9uVGFiSXRlbVRhcHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC8v54K55Ye75pKt5pS+JibmmoLlgZxcblx0XHRcdHRhcFZpZGVvSG92ZXIoc3RhdGUsZXZlbnQpe1xuXHRcdFx0XHR0aGlzLmRhdGFMaXN0W3RoaXMua10uaXNTaG93aW1hZ2UgPSBmYWxzZVxuXHRcdFx0XHR0aGlzLmRhdGFMaXN0W3RoaXMua10uaXNTaG93UHJvZ3Jlc3NCYXJUaW1lID0gZmFsc2Vcblx0XHRcdFx0dGhpcy5Qcm9ncmVzc0Jhck9wYWNpdHkgPSAwLjVcblx0XHRcdFx0dGhpcy5kb3RXaWR0aCA9IDBcblx0XHRcdFx0Y29uc29sZS5sb2coJ3N0YXRlLS0nLHN0YXRlKTtcblx0XHRcdFx0Ly8gMS7lkK/nlKjlj4zlh7vngrnotZ4gLS0tIHN0YXJ0XG5cdFx0XHRcdHRoaXMudG91Y2hOdW0rKztcblx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0XHRcdGlmKHRoaXMudG91Y2hOdW0gPT0gMSl7XG5cdFx0XHRcdFx0XHRpZihzdGF0ZT09J3BsYXknfHxzdGF0ZT09J2NvbnRpbnVlJyl7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5zdGF0ZSA9ICdwYXVzZSc7XG5cdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhTGlzdFt0aGlzLmtdLnN0YXRlID0gJ2NvbnRpbnVlJztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmKHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5zdGF0ZSA9PSAnY29udGludWUnKXtcblx0XHRcdFx0XHRcdFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dCh0aGlzLmRhdGFMaXN0W3RoaXMua10uX2lkLHRoaXMpLnBsYXkoKTsvL+aaguWBnOS7peWQjue7p+e7reaSreaUvlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYodGhpcy5kYXRhTGlzdFt0aGlzLmtdLnN0YXRlID09ICdwYXVzZScpe1xuXHRcdFx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5faWQsdGhpcykucGF1c2UoKTsvL+aaguWBnOS7peWQjue7p+e7reaSreaUvlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZih0aGlzLnRvdWNoTnVtID49IDIpe1xuXHRcdFx0XHRcdFx0dGhpcy5kb3VibGVMaWtlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMudG91Y2hOdW0gPSAwO1xuXHRcdFx0XHR9LDIwMClcblx0XHRcdFx0Ly8gLS0tLS0tLS0tLS0tLS0tIGVuZGluZ1xuXHRcdFx0XHQvLyAyLiDkuI3lkK/nlKjlj4zlh7vngrnotZ4gc3RhcnRcblx0XHRcdFx0Ly8gaWYoc3RhdGU9PSdwbGF5J3x8c3RhdGU9PSdjb250aW51ZScpe1xuXHRcdFx0XHQvLyBcdHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5zdGF0ZSA9ICdwYXVzZSc7XG5cdFx0XHRcdC8vIH1lbHNle1xuXHRcdFx0XHQvLyBcdHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5zdGF0ZSA9ICdjb250aW51ZSc7XG5cdFx0XHRcdC8vIH1cblx0XHRcdFx0Ly8gaWYodGhpcy5kYXRhTGlzdFt0aGlzLmtdLnN0YXRlID09ICdjb250aW51ZScpe1xuXHRcdFx0XHQvLyBcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQodGhpcy5kYXRhTGlzdFt0aGlzLmtdLl9pZCx0aGlzKS5wbGF5KCk7Ly/mmoLlgZzku6XlkI7nu6fnu63mkq3mlL5cblx0XHRcdFx0Ly8gfVxuXHRcdFx0XHQvLyBpZih0aGlzLmRhdGFMaXN0W3RoaXMua10uc3RhdGUgPT0gJ3BhdXNlJyl7XG5cdFx0XHRcdC8vIFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dCh0aGlzLmRhdGFMaXN0W3RoaXMua10uX2lkLHRoaXMpLnBhdXNlKCk7Ly/mmoLlgZzku6XlkI7nu6fnu63mkq3mlL5cblx0XHRcdFx0Ly8gfVxuXHRcdFx0XHQvLyAtLS0tLS0tLS0tLS0tLS0gZW5kaW5nXG5cdFx0XHR9LFxuXHRcdFx0ZG91YmxlTGlrZSgpe1xuXHRcdFx0XHRpZih0aGlzLmRhdGFMaXN0W3RoaXMua10ubGlrZSA9PSBmYWxzZSl7XG5cdFx0XHRcdFx0dGhpcy5kYXRhTGlzdFt0aGlzLmtdLmxpa2VfbiArPSAxO1xuXHRcdFx0XHRcdHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5saWtlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvKlxuXHRcdFx0XHTngrnotZ5cblx0XHRcdFx0Ki9cblx0XHRcdH0sXG5cdFx0XHR0b0NvbW1lbnQoaW5kZXgpe1xuXHRcdFx0XHRcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0dGl0bGU6ICfliqDovb3kuK0uLi4nLFxuXHRcdFx0XHRcdGljb246ICdub25lJyxcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2JvdHRvbScsXG5cdFx0XHRcdFx0ZHVyYXRpb246IDMwMFxuXHRcdFx0XHR9KVxuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJ2aWRlb0lEXCIsdGhpcy5kYXRhTGlzdFtpbmRleF0uX2lkKTtcblx0XHRcdFx0dGhpcy4kcmVmcy5waW5nbHVuLm9wZW4oJ2JvdHRvbScpXG5cdFx0XHR9LFxuXHRcdFx0c2hhcmUoKXtcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0dGl0bGU6ICfliIbkuqsnLFxuXHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdHd4aDVWaWRlbygpe1xuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0dXJsOiAnLi4vd3hoNXByZXZpZXdWaWRlby93eGg1cHJldmlld1ZpZGVvJ1xuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdHByZXZpZXdWaWRlbygpe1xuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0dXJsOiAnLi4vcHJldmlld1ZpZGVvL3ByZXZpZXdWaWRlbydcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHR0b1R3b1ZpZGVvKCl7XG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHR1cmw6ICcuLi9uZXdfaW5kZXgvbmV3X2luZGV4J1xuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdHRvbGlzdFZpZGVvKCl7XG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHR1cmw6ICcuLi9udnVlU3dpcGVyL252dWVTd2lwZXInXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0Y0xpa2Uoc3NzKXtcblx0XHRcdFx0dGhpcy5kYXRhTGlzdFt0aGlzLmtdLmxpa2UgPSAhdGhpcy5kYXRhTGlzdFt0aGlzLmtdLmxpa2Vcblx0XHRcdFx0Y29uc3QgdmlkZW8gPSB0aGlzLmRhdGFMaXN0W3RoaXMua107XG5cdFx0XHRcdHNzcz92aWRlby5saWtlX24gLT0gMTp2aWRlby5saWtlX24gKz0gMTtcblx0XHRcdFx0Lypcblx0XHRcdFx054K56LWeXG5cdFx0XHRcdCovXG5cdFx0XHR9LFxuXHRcdFx0bW92ZUhhbmRsZSgpe30sXG5cdFx0XHRjbG9zZVNjcm9sbHZpZXcoKXtcblx0XHRcdFx0Ly8g54K55Ye76K+E6K666YeM6Z2i55qE5Y+J5Y+J77yM5bCx5Lya5YWz6Zet6K+E6K66XG5cdFx0XHRcdHRoaXMuJHJlZnMucGluZ2x1bi5jbG9zZSgpO1xuXHRcdFx0fSxcblx0XHRcdG9uVGFiSXRlbVRhcHMoKSB7XG5cdFx0XHQgICAgLy8gI2lmZGVmIEFQUC1QTFVTXG5cdFx0XHQgICAgaWYgKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09IFwiaW9zXCIpIHtcblx0XHRcdCAgICAgICAgbGV0IFVJSW1wYWN0RmVlZGJhY2tHZW5lcmF0b3IgPSBwbHVzLmlvcy5pbXBvcnRDbGFzcygnVUlJbXBhY3RGZWVkYmFja0dlbmVyYXRvcicpO1xuXHRcdFx0ICAgICAgICBsZXQgaW1wYWN0ID0gbmV3IFVJSW1wYWN0RmVlZGJhY2tHZW5lcmF0b3IoKTtcblx0XHRcdCAgICAgICAgaW1wYWN0LnByZXBhcmUoKTtcblx0XHRcdCAgICAgICAgaW1wYWN0LmluaXQoMSk7XG5cdFx0XHQgICAgICAgIGltcGFjdC5pbXBhY3RPY2N1cnJlZCgpO1xuXHRcdFx0ICAgIH1cblx0XHRcdCAgICBpZiAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gXCJhbmRyb2lkXCIpIHtcblx0XHRcdCAgICAgICAgdW5pLnZpYnJhdGVTaG9ydCh7XG5cdFx0XHQgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHQgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eCueWHu+mch+WKqCcpO1xuXHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0ICAgICAgICB9KTtcblx0XHRcdCAgICB9XG5cdFx0XHQgICAgLy8gI2VuZGlmXG5cdFx0XHR9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbjxzdHlsZT5cblx0LmNvbnRhaW5lciB7YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDt9XG4gICAgLml0ZW0ge1xuXHRcdC8qIHdpZHRoIDogNzUwcnB4OyAqL1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR9XG5cdC52aWRlb0hvdmVye1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMDtcblx0XHRmbGV4OiAxO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFxuXHRcdC8qIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuXHRcdGJvcmRlci1jb2xvcjogI0RENTI0RDtcblx0XHRib3JkZXItd2lkdGg6IDFweDsgKi9cblx0fVxuXHQucGxheVN0YXRle1xuXHRcdHdpZHRoOiAgMTYwcnB4O1xuXHRcdGhlaWdodDogMTYwcnB4O1xuXHRcdG9wYWNpdHk6IDAuMjtcblx0fVxuXHQudXNlckluZm97XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGJvdHRvbToxMTBweDtcblx0XHRyaWdodDogMTBweDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFxuXHR9XG5cdC51c2VyQXZhdGFye1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwMCU7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xuXHRcdGJvcmRlci13aWR0aDogMnB4O1xuXHRcdGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcblx0fVxuXHQudXNlckF2YXRhcntcblx0XHR3aWR0aCA6IDEwMHJweDtcblx0XHRoZWlnaHQ6IDEwMHJweDtcblx0fVxuXHQubGlrZUljbywuc2hhcmVJY28sLmNvbW1lbnRJY297XG5cdFx0d2lkdGggOiA2MHJweDtcblx0XHRoZWlnaHQ6IDYwcnB4O1xuXHRcdG1hcmdpbi10b3A6IDE1cHg7XG5cdH1cblx0Lmxpa2VOdW0sLmNvbW1lbnROdW0sLnNoYXJlVGV4e1xuXHRcdGNvbG9yOiAjZmZmZmZmO1xuXHRcdGZvbnQtc2l6ZTogMzBycHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdG1hcmdpbjogNXB4O1xuXHR9XG5cdC5saWtlTnVtQWN0aXZle1xuXHRcdGNvbG9yOiByZWQ7XG5cdH1cblx0LmNvbnRlbnR7XG5cdCAgd2lkdGg6IDcyMHJweDtcblx0ICB6LWluZGV4OiA5OTtcblx0ICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgYm90dG9tOiAzMHB4O1xuXHQgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuXHQgIHBhZGRpbmc6IDE1cnB4O1xuXHQgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdCAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHQgIGNvbG9yOiAjZmZmZmZmO1xuXHR9XG5cdC51c2VyTmFtZSB7XG5cdCAgZm9udC1zaXplOiAzMHJweDtcblx0ICBjb2xvcjogI2ZmZmZmZjtcblx0ICBtYXJnaW4tdG9wOiA4MHVweDtcblx0fVxuXHQud29yZHMge1xuXHQgIG1hcmdpbi10b3A6IDEwcnB4O1xuXHQgIGZvbnQtc2l6ZTogMzBycHg7XG5cdCAgY29sb3I6ICNmZmZmZmY7XG5cdH1cblx0LnJvb3R7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcblx0fVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!******************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/拾音/ShiYin/pages/navigation/ShouYe/video/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 27);
/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 27 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Lenovo/Desktop/拾音/ShiYin/pages/navigation/ShouYe/video/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "": {
      "backgroundColor": [
        "#000000",
        0,
        0,
        0
      ]
    }
  },
  ".item": {
    "": {
      "backgroundColor": [
        "#000000",
        0,
        0,
        1
      ],
      "position": [
        "relative",
        0,
        0,
        1
      ]
    }
  },
  ".videoHover": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        2
      ],
      "top": [
        0,
        0,
        0,
        2
      ],
      "left": [
        0,
        0,
        0,
        2
      ],
      "flex": [
        1,
        0,
        0,
        2
      ],
      "backgroundColor": [
        "rgba(0,0,0,0.1)",
        0,
        0,
        2
      ],
      "justifyContent": [
        "center",
        0,
        0,
        2
      ],
      "alignItems": [
        "center",
        0,
        0,
        2
      ]
    }
  },
  ".playState": {
    "": {
      "width": [
        "160rpx",
        0,
        0,
        3
      ],
      "height": [
        "160rpx",
        0,
        0,
        3
      ],
      "opacity": [
        0.2,
        0,
        0,
        3
      ]
    }
  },
  ".userInfo": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        4
      ],
      "bottom": [
        "110",
        0,
        0,
        4
      ],
      "right": [
        "10",
        0,
        0,
        4
      ],
      "flexDirection": [
        "column",
        0,
        0,
        4
      ]
    }
  },
  ".userAvatar": {
    "": {
      "borderRadius": [
        500,
        0,
        0,
        5
      ],
      "marginBottom": [
        "15",
        0,
        0,
        5
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        5
      ],
      "borderWidth": [
        "2",
        0,
        0,
        5
      ],
      "borderColor": [
        "#ffffff",
        0,
        0,
        5
      ],
      "width": [
        "100rpx",
        0,
        0,
        6
      ],
      "height": [
        "100rpx",
        0,
        0,
        6
      ]
    }
  },
  ".likeIco": {
    "": {
      "width": [
        "60rpx",
        0,
        0,
        7
      ],
      "height": [
        "60rpx",
        0,
        0,
        7
      ],
      "marginTop": [
        "15",
        0,
        0,
        7
      ]
    }
  },
  ".shareIco": {
    "": {
      "width": [
        "60rpx",
        0,
        0,
        7
      ],
      "height": [
        "60rpx",
        0,
        0,
        7
      ],
      "marginTop": [
        "15",
        0,
        0,
        7
      ]
    }
  },
  ".commentIco": {
    "": {
      "width": [
        "60rpx",
        0,
        0,
        7
      ],
      "height": [
        "60rpx",
        0,
        0,
        7
      ],
      "marginTop": [
        "15",
        0,
        0,
        7
      ]
    }
  },
  ".likeNum": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        8
      ],
      "fontSize": [
        "30rpx",
        0,
        0,
        8
      ],
      "textAlign": [
        "center",
        0,
        0,
        8
      ],
      "marginTop": [
        "5",
        0,
        0,
        8
      ],
      "marginRight": [
        "5",
        0,
        0,
        8
      ],
      "marginBottom": [
        "5",
        0,
        0,
        8
      ],
      "marginLeft": [
        "5",
        0,
        0,
        8
      ]
    }
  },
  ".commentNum": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        8
      ],
      "fontSize": [
        "30rpx",
        0,
        0,
        8
      ],
      "textAlign": [
        "center",
        0,
        0,
        8
      ],
      "marginTop": [
        "5",
        0,
        0,
        8
      ],
      "marginRight": [
        "5",
        0,
        0,
        8
      ],
      "marginBottom": [
        "5",
        0,
        0,
        8
      ],
      "marginLeft": [
        "5",
        0,
        0,
        8
      ]
    }
  },
  ".shareTex": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        8
      ],
      "fontSize": [
        "30rpx",
        0,
        0,
        8
      ],
      "textAlign": [
        "center",
        0,
        0,
        8
      ],
      "marginTop": [
        "5",
        0,
        0,
        8
      ],
      "marginRight": [
        "5",
        0,
        0,
        8
      ],
      "marginBottom": [
        "5",
        0,
        0,
        8
      ],
      "marginLeft": [
        "5",
        0,
        0,
        8
      ]
    }
  },
  ".likeNumActive": {
    "": {
      "color": [
        "#FF0000",
        0,
        0,
        9
      ]
    }
  },
  ".content": {
    "": {
      "width": [
        "720rpx",
        0,
        0,
        10
      ],
      "zIndex": [
        99,
        0,
        0,
        10
      ],
      "position": [
        "absolute",
        0,
        0,
        10
      ],
      "bottom": [
        "30",
        0,
        0,
        10
      ],
      "paddingTop": [
        "15rpx",
        0,
        0,
        10
      ],
      "paddingRight": [
        "15rpx",
        0,
        0,
        10
      ],
      "paddingBottom": [
        "15rpx",
        0,
        0,
        10
      ],
      "paddingLeft": [
        "15rpx",
        0,
        0,
        10
      ],
      "flexDirection": [
        "column",
        0,
        0,
        10
      ],
      "justifyContent": [
        "flex-start",
        0,
        0,
        10
      ],
      "color": [
        "#ffffff",
        0,
        0,
        10
      ]
    }
  },
  ".userName": {
    "": {
      "fontSize": [
        "30rpx",
        0,
        0,
        11
      ],
      "color": [
        "#ffffff",
        0,
        0,
        11
      ],
      "marginTop": [
        "80upx",
        0,
        0,
        11
      ]
    }
  },
  ".words": {
    "": {
      "marginTop": [
        "10rpx",
        0,
        0,
        12
      ],
      "fontSize": [
        "30rpx",
        0,
        0,
        12
      ],
      "color": [
        "#ffffff",
        0,
        0,
        12
      ]
    }
  },
  ".root": {
    "": {
      "backgroundColor": [
        "#000000",
        0,
        0,
        13
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);