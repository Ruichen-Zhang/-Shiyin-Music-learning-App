(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/navigation/WoDe/exam_list/xunlian"],{

/***/ 164:
/*!************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/拾音/ShiYin/main.js?{"page":"pages%2Fnavigation%2FWoDe%2Fexam_list%2Fxunlian"} ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);

__webpack_require__(/*! @dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 6);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _xunlian = _interopRequireDefault(__webpack_require__(/*! ./pages/navigation/WoDe/exam_list/xunlian.vue */ 165));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_xunlian.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 165:
/*!*************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/拾音/ShiYin/pages/navigation/WoDe/exam_list/xunlian.vue ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _xunlian_vue_vue_type_template_id_8390ad34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xunlian.vue?vue&type=template&id=8390ad34& */ 166);
/* harmony import */ var _xunlian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xunlian.vue?vue&type=script&lang=js& */ 168);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _xunlian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _xunlian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _xunlian_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xunlian.vue?vue&type=style&index=0&lang=css& */ 170);
/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);

var renderjs





/* normalize component */

var component = Object(_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _xunlian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _xunlian_vue_vue_type_template_id_8390ad34___WEBPACK_IMPORTED_MODULE_0__["render"],
  _xunlian_vue_vue_type_template_id_8390ad34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _xunlian_vue_vue_type_template_id_8390ad34___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/navigation/WoDe/exam_list/xunlian.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 166:
/*!********************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/拾音/ShiYin/pages/navigation/WoDe/exam_list/xunlian.vue?vue&type=template&id=8390ad34& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xunlian_vue_vue_type_template_id_8390ad34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./xunlian.vue?vue&type=template&id=8390ad34& */ 167);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xunlian_vue_vue_type_template_id_8390ad34___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xunlian_vue_vue_type_template_id_8390ad34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xunlian_vue_vue_type_template_id_8390ad34___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xunlian_vue_vue_type_template_id_8390ad34___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 167:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Lenovo/Desktop/拾音/ShiYin/pages/navigation/WoDe/exam_list/xunlian.vue?vue&type=template&id=8390ad34& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 168:
/*!**************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/拾音/ShiYin/pages/navigation/WoDe/exam_list/xunlian.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xunlian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./xunlian.vue?vue&type=script&lang=js& */ 169);
/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xunlian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xunlian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xunlian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xunlian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xunlian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 169:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Lenovo/Desktop/拾音/ShiYin/pages/navigation/WoDe/exam_list/xunlian.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var innerAudioContext = null;var _default =
{
  data: function data() {
    return {
      data: '',
      now: 0,
      height: {
        shang: 0,
        xia: 0,
        all: 0,
        bai: 0,
        windows: 0 },

      width: {
        hei: 0,
        bai: 0,
        all: 0,
        windows: 0,
        wuxianpu: 0,
        gap: 0,
        jindu: 0 },

      heikuai: [{ name: 'g', select: false, value: 1, zimu: 'g', top: 14 }, { name: 'a', select: false, value: 3, zimu: 'a', top: 13 },
      { name: 'b', select: false, value: 5, top: 12, zimu: 'b' }, { name: 'c1', select: false, value: 6, top: 11, zimu: 'c', shuzi: '1' },
      { name: 'd1', select: false, value: 8, top: 10, zimu: 'd', shuzi: 1 }, { name: 'e1', select: false, value: 10, top: 9, zimu: 'e', shuzi: 1 },
      { name: 'f1', select: false, value: 11, zimu: 'f', shuzi: 1, top: 8 }, { name: 'g1', select: false, value: 13, zimu: 'g', shuzi: 1, top: 7 },
      { name: 'a1', select: false, value: 15, zimu: 'a', shuzi: 1, top: 6 }, { name: 'b1', select: false, value: 17, top: 5, zimu: 'b', shuzi: 1 },
      { name: 'c2', select: false, value: 18, zimu: 'c', shuzi: 2, top: 4 }, { name: 'd2', select: false, value: 20, zimu: 'd', shuzi: 2, top: 3 },
      { name: 'e2', select: false, value: 22, top: 2, zimu: 'e', shuzi: 2 }, { name: 'f2', select: false, value: 23, zimu: 'f', shuzi: 2, top: 1 },
      { name: 'g2', select: false, value: 25, zimu: 'g', shuzi: 2, top: 0 }],
      baikuai: [{ name: 'ba', left: 0, select: false, value: 2, top: 13, zimu: 'a' }, { name: 'bb', left: 1, select: false, value: 4, top: 12, zimu: 'b' },
      { name: 'bd1', left: 3, select: false, value: 7, zimu: 'd', shuzi: 1, top: 10 }, { name: 'be1', left: 4, select: false, value: 9, zimu: 'e', shuzi: 1, top: 9 },
      { name: 'bg1', left: 6, select: false, value: 12, top: 7, zimu: 'g', shuzi: 1 }, { name: 'ba1', left: 7, select: false, value: 14, top: 6, zimu: 'a', shuzi: 1 },
      { name: 'bb1', left: 8, select: false, value: 16, top: 5, zimu: 'b', shuzi: 1 }, { name: 'bd2', left: 10, select: false, value: 19, top: 3, zimu: 'd', shuzi: 2 },
      { name: 'be2', left: 11, select: false, value: 21, top: 2, zimu: 'e', shuzi: 2 }, { name: 'bg2', left: 13, select: false, value: 24, top: 0, zimu: 'g', shuzi: 2 }],
      test: '',
      start: false,
      wuxianpu_url: '/static/wuxianpu.png',
      wuxianpu_a: '/static/wuxianpu_a.png',
      storage_wrong_dian: [[], [[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []]],
      all_dian: [[], [], [], [], []],
      wrong_dian: [[], [], [], [], []],
      storage_dian: [[], [[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []]],
      video1: '../../../static/music/3.mp3',
      area_select: 0,
      type: 1,
      now_dian: {
        area: -1,
        pos: -1,
        type: '' },

      sum_dian: 0,
      voice_percentage: 0.00,
      finall_res: {
        zhengque_per: 0,
        right: 0,
        wrong: 0,
        ans: [],
        zuoda: [],
        result: [] },

      show_ans: true,
      start_time: 0,
      end_time: 0,
      cost_time: 0,
      diff: '',
      diff_name: '',
      countdown: 300,
      end: false,
      now_type: 1 };

  },
  onLoad: function onLoad() {



  },
  onUnload: function onUnload() {



  },
  mounted: function mounted() {
    innerAudioContext = uni.createInnerAudioContext();
    this.data = uni.getStorageSync('exam_list_chuancan');
    this.data.array = this.data.ans.split(",");
    this.diff_name = this.data.diff;
    this.storage_dian = JSON.parse(this.data.all_dian);
    this.all_dian = this.storage_dian[1];
    this.queding_tijiao();

    this.height.windows = uni.getSystemInfoSync().screenHeight;
    this.width.windows = uni.getSystemInfoSync().screenWidth;

    if (this.height.windows > this.width.windows) {
      var temp = this.height.windows;
      this.height.windows = this.width.windows;
      this.width.windows = temp;
    }

    this.height.shang = this.height.windows * 0.5;
    this.height.xia = this.height.windows * 0.5;
    this.height.all = this.height.windows;
    this.height.bai = this.height.xia * 0.6;
    this.height.pop = this.height.windows * 0.6;

    this.width.all = this.width.windows;
    this.width.hei = (this.width.windows - 14) / 15;
    this.width.bai = this.width.hei * 0.7;
    this.width.wuxianpu = (this.width.windows - 40) / 5;
    this.width.gap = this.width.wuxianpu / 5;
    this.width.wuxianpuall = this.width.windows - 15;
    this.width.pop = this.width.windows * 0.5;
  },
  onBackPress: function onBackPress(e) {
    console.log(e);
    innerAudioContext.pause();
    innerAudioContext.destroy();
  },
  methods: {
    change_type: function change_type(now) {
      console.log(this.data);
      this.storage_dian[this.now_type] = this.all_dian;
      this.now_type = now;
      this.type = now;
      this.area_select = 0;
      this.all_dian = this.storage_dian[now];
      if (this.show_ans) {
        this.wrong_dian = this.storage_wrong_dian[now];
      }

    },
    cuowu_xiangqing: function cuowu_xiangqing() {
      this.show_ans = true;
      this.change_type(1);
      this.$refs.result.close();

    },
    close_pop: function close_pop() {
      // innerAudioContext.pause();
      innerAudioContext.destroy();
      uni.navigateBack();

    },
    getjiangyin_byvalue: function getjiangyin_byvalue(e) {
      var top = -1;
      for (var i = 0; i < this.heikuai.length && top == -1; i++) {
        if (this.heikuai[i].value == e) top = this.heikuai[i].top;}
      if (top == -1) return true;else
      return false;
    },
    gettop_byvalue: function gettop_byvalue(e) {
      var top = -1;
      for (var i = 0; i < this.heikuai.length && top == -1; i++) {
        if (this.heikuai[i].value == e) top = this.heikuai[i].top;}
      for (var i = 0; i < this.baikuai.length && top == -1; i++) {
        if (this.baikuai[i].value == e) top = this.baikuai[i].top;}
      var height_view = top;
      if (top < 11) {
        height_view = top * 4.15;
      } else
      if (top == 11) {
        height_view = 54.2;
      } else {
        height_view = 66.2 + (top - 12) * 4.15;
      }
      return height_view;
    },
    queding_tijiao: function queding_tijiao() {
      console.log('end');

      var data = { ans: this.data.array, zuoda: this.storage_dian, right: 0, wrong: 0, empty: 0, zhengqulv: 0.00, all_cnt: this.data.array.length, grade: 0 };
      var ind = 0;
      // 3曾循环
      for (var i = 1; i < data.zuoda.length; i++) {
        // console.log('i'+i);
        // 5曾循环，每个区域
        for (var j = 0; j < data.zuoda[i].length; j++) {
          var wrong = false;
          // i层循环，有可能为空
          for (var k = 0; k < data.zuoda[i][j].length; k++) {
            // console.log('k'+k);
            if (data.zuoda[i][j][k].value == data.ans[ind]) {
              data.right++;
              if (i == 1) data.grade += 5;else
              if (i == 2) data.grade += 3;else
              data.grade += 2;
            } else {
              data.wrong++;
              wrong = true;
            }
            ind++;
          }
          // 空的
          data.empty += i - data.zuoda[i][j].length;
          ind += i - data.zuoda[i][j].length;
          // 错了或者未答，加正确答案的显示
          if (wrong || i - data.zuoda[i][j].length > 0) {
            // 回到之前的ind
            var temp_i = ind - i;
            for (var k = 0; k < i; k++) {
              this.storage_wrong_dian[i][j].push({ value: data.ans[k + temp_i], top: this.gettop_byvalue(data.ans[k + temp_i]), jiangyin: this.getjiangyin_byvalue(data.ans[k + temp_i]) });}
          }
        }
      }
      // 计算正确率
      data.zhengque_per = data.right / data.all_cnt;
      this.finall_res = data;
      this.wrong_dian = this.storage_wrong_dian[1];

    },
    change_dian: function change_dian(s, index, ind) {
      console.log('选中！');
      this.area_select = index;
      this.now_dian.pos = ind;
      this.now_dian.area = index;
      this.now_dian.type = s;
    },
    change_area: function change_area(index) {
      this.area_select = index;
      if (this.area_select != this.now_dian.area) {
        this.now_dian.area = -1;
        this.now_dian.pos = -1;
      }
    },
    adddian_click: function adddian_click(top, value, is_jiangyin) {
      var height_view = top;
      if (top < 11) {
        height_view = top * 4.15;
      } else
      if (top == 11) {
        this.wuxianpu_url = this.wuxianpu_a;
        height_view = 54.2;
      } else {
        height_view = 66.2 + (top - 12) * 4.15;
      }
      if (this.all_dian[this.area_select].length == this.type) {
        delete this.all_dian[this.area_select];
        this.all_dian[this.area_select] = [];
      }
      this.all_dian[this.area_select].push({ show: true, top: height_view, id: this.sum_dian, value: value, jiangyin: is_jiangyin });
      this.sum_dian++;
    },
    baikuai_start: function baikuai_start(e) {
      var that = this;
      console.log(e);
      console.log(this.baikuai[e].name + 'top:' + this.baikuai[e].top);
      this.baikuai[e].select = true;

      setTimeout(function closebaikuai() {
        that.baikuai[e].select = false;
      }, 250);
      //加点
      this.adddian_click(this.baikuai[e].top, this.baikuai[e].value, true);

    },
    start_exam: function start_exam() {var _this = this;
      var that = this;

      innerAudioContext.sessionCategory = "ambient";
      this.start = true;
      var play_biao = true;
      this.countdown = 300;
      innerAudioContext.autoplay = true;
      console.log(this.music + this.data.music_link);
      innerAudioContext.src = this.music_url + this.data.music_link;
      setInterval(function xunhuan() {
        if (that.countdown > 0)
        that.countdown -= 1;
        if (that.start == true) {
          that.width.jindu += 1 / 90;
          if (300 - that.countdown == 1) {
            that.change_type(1);
          } else if (300 - that.countdown == 30) {
            that.change_type(2);
          } else if (300 - that.countdown == 60) {
            that.change_type(3);
          }
        }
      }, 1000);
      innerAudioContext.play(function () {

      });
      innerAudioContext.onEnded(function () {
        _this.start = false;
        _this.end = true;
      });

    },
    hei_start: function hei_start(e) {
      var that = this;
      var lie = e.changedTouches[0].clientX / this.width.hei;
      var lie_int = parseInt(lie);
      this.heikuai[lie_int].select = true;

      //加点
      this.adddian_click(this.heikuai[lie_int].top, this.heikuai[lie_int].value, false);
      setTimeout(function closexiaoguo() {
        that.heikuai[lie_int].select = false;
      }, 250);

    },
    hei_move: function hei_move(e) {
      var that = this;
      var lie = e.changedTouches[0].clientX / this.width.hei;
      var lie_int = parseInt(lie);
      if (this.heikuai[lie_int].select == false) {
        this.heikuai[lie_int].select = true;
        //加点
        this.adddian_click(this.heikuai[lie_int].top, this.heikuai[lie_int].value, false);

        setTimeout(function closexiaoguo() {
          that.heikuai[lie_int].select = false;
        }, 250);
      }

    },
    hei_end: function hei_end(e) {
      var lie = e.changedTouches[0].clientX / this.width.hei;
      var lie_int = parseInt(lie);
      this.heikuai[lie_int].select = false;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 170:
/*!**********************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/拾音/ShiYin/pages/navigation/WoDe/exam_list/xunlian.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xunlian_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./xunlian.vue?vue&type=style&index=0&lang=css& */ 171);
/* harmony import */ var _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xunlian_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xunlian_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xunlian_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xunlian_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_tengxun_HBuilderX_3_4_7_20220422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xunlian_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 171:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Lenovo/Desktop/拾音/ShiYin/pages/navigation/WoDe/exam_list/xunlian.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[164,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/navigation/WoDe/exam_list/xunlian.js.map