(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/elements/basic/Collapse.jsx":
/*!************************************************!*\
  !*** ./components/elements/basic/Collapse.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\asdf\\Downloads\\Archive (1)\\supro-react\\components\\elements\\basic\\Collapse.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-env browser */

/**
 * All debug logs are removed on build
 */
 // using let instead of const,
// experimenting with ES2015 bundle which gets a bit smaller when using let over const.

let COLLAPSED = 'collapsed';
let COLLAPSING = 'collapsing';
let EXPANDING = 'expanding';
let EXPANDED = 'expanded';
let defaultClassName = 'collapse-css-transition';
let defaultElementType = 'div';
let defaultCollapseHeight = '0px';
/**
 *
 * @param {function} callback
 */

function nextFrame(callback) {
  requestAnimationFrame(function () {
    //setTimeout(callback, 0); // NOT used because can be jumpy if click-spamming.
    requestAnimationFrame(callback); // This is used.
  });
}

function SPCollapse(_ref) {
  let {
    children,
    transition,
    style,
    render,
    elementType = defaultElementType,
    isOpen,
    collapseHeight = defaultCollapseHeight,
    onInit,
    onChange,
    className = defaultClassName,
    addState,
    noAnim,
    overflowOnExpanded
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "transition", "style", "render", "elementType", "isOpen", "collapseHeight", "onInit", "onChange", "className", "addState", "noAnim", "overflowOnExpanded"]);

  let getCollapsedVisibility = () => collapseHeight === '0px' ? 'hidden' : '';

  let {
    0: __,
    1: forceUpdate
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_ => _ + 1, 0);
  let elementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  let {
    0: callbackTick,
    1: setCallbackTick
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // Avoiding setState to control when stuff are updated.
  // Might not be needed.

  let state = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
    collapse: isOpen ? EXPANDED : COLLAPSED,
    style: {
      height: isOpen ? '' : collapseHeight,
      visibility: isOpen ? '' : getCollapsedVisibility()
    }
  }).current;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // Invoke callback when data are updated, use Effect to sync state.
    callbackTick && onCallback(onChange);
  }, [callbackTick]);
  /**
   *
   * @param {function} callback
   */

  let onCallback = (callback, params = {}) => {
    if (callback) {
      callback(_objectSpread({
        state: state.collapse,
        style: state.style
      }, params));
    }
  };

  function setCollapsed() {
    if (!elementRef.current) return; // might be redundant
    // Update state

    state.collapse = COLLAPSED;
    state.style = {
      height: collapseHeight,
      visibility: getCollapsedVisibility()
    };
    forceUpdate();
    setTimeout(() => setCallbackTick(Date.now), 0); // callback and re-render
  }

  function setCollapsing() {
    if (!elementRef.current) return; // might be redundant

    if (noAnim) {
      return setCollapsed();
    } // Update state


    state.collapse = COLLAPSING;
    state.style = {
      height: getElementHeight(),
      visibility: ''
    };
    forceUpdate();
    nextFrame(() => {
      if (!elementRef.current) return;
      if (state.collapse !== COLLAPSING) return;
      state.style = {
        height: collapseHeight,
        visibility: ''
      }; //forceUpdate();

      setCallbackTick(Date.now); // callback and re-render
    });
  }

  function setExpanding() {
    if (!elementRef.current) return; // might be redundant

    if (noAnim) {
      return setExpanded();
    } // Updatetate


    state.collapse = EXPANDING;
    nextFrame(() => {
      if (!elementRef.current) return; // might be redundant

      if (state.collapse !== EXPANDING) return;
      state.style = {
        height: getElementHeight(),
        visibility: ''
      }; // forceUpdate();

      setCallbackTick(Date.now); // callback and re-render
    });
  }

  function setExpanded() {
    if (!elementRef.current) return; // might be redundant
    // Update state

    state.collapse = EXPANDED;
    state.style = {
      height: '',
      visibility: ''
    };
    forceUpdate();
    setTimeout(() => setCallbackTick(Date.now), 0); // callback and re-render
  }

  function getElementHeight() {
    // @ts-ignore
    return `${elementRef.current.scrollHeight}px`;
  }

  function onTransitionEnd({
    target,
    propertyName
  }) {
    if (target === elementRef.current && propertyName === 'height') {
      let styleHeight = target.style.height;

      switch (state.collapse) {
        case EXPANDING:
          if (styleHeight === '' || styleHeight === collapseHeight) // This is stale, a newer event has happened before this could execute
            console.warn(`onTransitionEnd height unexpected ${styleHeight}`, 'ignore setExpanded');else setExpanded();
          break;

        case COLLAPSING:
          if (styleHeight === '' || styleHeight !== collapseHeight) // This is stale, a newer event has happened before this could execute
            console.warn(`onTransitionEnd height unexpected ${styleHeight}`, 'ignore setCollapsed');else setCollapsed();
          break;

        default:
          console.warn('Ignored in onTransitionEnd', state.collapse);
      }
    }
  } // getDerivedStateFromProps


  let didOpen = state.collapse === EXPANDED || state.collapse === EXPANDING;
  if (!didOpen && isOpen) setExpanding();
  if (didOpen && !isOpen) setCollapsing(); // END getDerivedStateFromProps

  let overflow = state.collapse === EXPANDED && overflowOnExpanded ? '' : 'hidden';

  let computedStyle = _objectSpread(_objectSpread({
    overflow,
    transition
  }, style), state.style);

  let ElementType = elementType;
  let callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(node => {
    if (node) {
      elementRef.current = node;
      onCallback(onInit, {
        node
      });
    }
  }, [elementType]);
  let collapseClassName = addState ? `${className} --c-${state.collapse}` : className;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ElementType, _objectSpread(_objectSpread({
    ref: callbackRef,
    style: computedStyle,
    onTransitionEnd: onTransitionEnd,
    className: collapseClassName
  }, rest), {}, {
    children: typeof children === 'function' ? children(state.collapse) : typeof render === 'function' ? render(state.collapse) : children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 222,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SPCollapse);

/***/ }),

/***/ "./components/elements/basic/Logo.js":
/*!*******************************************!*\
  !*** ./components/elements/basic/Logo.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\asdf\\Downloads\\Archive (1)\\supro-react\\components\\elements\\basic\\Logo.js";



const Logo = ({
  url = '/',
  light
}) => {
  if (light) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "ps-logo",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/static/img/logo-white.png",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined);
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "ps-logo",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/static/img/logo.svg",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/layouts/MasterLayout.jsx":
/*!*********************************************!*\
  !*** ./components/layouts/MasterLayout.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layouts_modules_ModuleCustomHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/layouts/modules/ModuleCustomHead */ "./components/layouts/modules/ModuleCustomHead.jsx");
/* harmony import */ var _components_shared_mobiles_HeaderMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/mobiles/HeaderMobile */ "./components/shared/mobiles/HeaderMobile.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_cart_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/store/cart/action */ "./store/cart/action.js");
/* harmony import */ var _components_shared_drawers_DrawerDefault__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/shared/drawers/DrawerDefault */ "./components/shared/drawers/DrawerDefault.jsx");
/* harmony import */ var _components_shared_drawers_modules_ModuleDrawerOverlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/shared/drawers/modules/ModuleDrawerOverlay */ "./components/shared/drawers/modules/ModuleDrawerOverlay.jsx");
/* harmony import */ var _components_shared_drawers_modules_ModuleDrawerShopOverlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/components/shared/drawers/modules/ModuleDrawerShopOverlay */ "./components/shared/drawers/modules/ModuleDrawerShopOverlay.jsx");
/* harmony import */ var _store_wishlist_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/store/wishlist/action */ "./store/wishlist/action.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _store_app_action__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/store/app/action */ "./store/app/action.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "C:\\Users\\asdf\\Downloads\\Archive (1)\\supro-react\\components\\layouts\\MasterLayout.jsx";














const MasterLayout = ({
  children
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const handleComplete = () => {
      dispatch((0,_store_app_action__WEBPACK_IMPORTED_MODULE_12__.toggleDrawer)(false));
    };

    dispatch((0,_store_cart_action__WEBPACK_IMPORTED_MODULE_6__.getCart)());
    dispatch((0,_store_wishlist_action__WEBPACK_IMPORTED_MODULE_10__.getWishlistList)());
    router.events.on('routeChangeStart', handleComplete);
    setTimeout(function () {
      document.getElementById('__next').classList.add('ps-loaded');
    }, 100);
    return () => {
      router.events.off('routeChangeStart', handleComplete);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "ps-app-root",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_mobiles_HeaderMobile__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_modules_ModuleCustomHead__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "loader-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "loader-section section-left"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "loader-section section-right"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_drawers_DrawerDefault__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_drawers_modules_ModuleDrawerOverlay__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_drawers_modules_ModuleDrawerShopOverlay__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.BackTop, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "ps-btn--backtop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "icon-arrow-up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)()(MasterLayout));

/***/ }),

/***/ "./components/layouts/modules/ModuleCustomHead.jsx":
/*!*********************************************************!*\
  !*** ./components/layouts/modules/ModuleCustomHead.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\asdf\\Downloads\\Archive (1)\\supro-react\\components\\layouts\\modules\\ModuleCustomHead.jsx";



const ModuleCustomHead = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
    children: "Supro - Minimalist eCommerce React Template"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
    rel: "shortcut icon",
    href: "/static/img/favi.png"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    charSet: "utf-8"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    name: "viewport",
    content: "width=device-width"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    name: "description",
    content: "Supro - Minimalist eCommerce React Template"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    name: "keywords",
    content: "react template"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
    rel: "stylesheet",
    href: "/static/fonts/Linearicons/Font/demo-files/demo.css"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
    rel: "stylesheet",
    href: "/static/fonts/font-awesome/css/font-awesome.min.css"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/bootstrap.min.css"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (ModuleCustomHead);

/***/ }),

/***/ "./components/shared/drawers/DrawerDefault.jsx":
/*!*****************************************************!*\
  !*** ./components/shared/drawers/DrawerDefault.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_app_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/app/action */ "./store/app/action.js");
/* harmony import */ var _components_shared_drawers_modules_ModuleDrawerMenuSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/drawers/modules/ModuleDrawerMenuSidebar */ "./components/shared/drawers/modules/ModuleDrawerMenuSidebar.jsx");

var _jsxFileName = "C:\\Users\\asdf\\Downloads\\Archive (1)\\supro-react\\components\\shared\\drawers\\DrawerDefault.jsx";





const DrawerDefault = ({
  isDrawerShow
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  function handleClose() {
    dispatch((0,_store_app_action__WEBPACK_IMPORTED_MODULE_3__.toggleDrawer)(false));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `ps-drawer ${isDrawerShow ? 'active' : ''}`,
    ref: ref,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ps-drawer__header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "ps-drawer__close",
        onClick: e => handleClose(),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "icon-cross"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ps-drawer__wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_drawers_modules_ModuleDrawerMenuSidebar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(state => state.app)(DrawerDefault));

/***/ }),

/***/ "./components/shared/drawers/modules/ModuleDrawerMenuSidebar.jsx":
/*!***********************************************************************!*\
  !*** ./components/shared/drawers/modules/ModuleDrawerMenuSidebar.jsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_shared_menus_MenuAccordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/shared/menus/MenuAccordion */ "./components/shared/menus/MenuAccordion.jsx");
/* harmony import */ var _public_static_data_menu_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/public/static/data/menu.json */ "./public/static/data/menu.json");

var _jsxFileName = "C:\\Users\\asdf\\Downloads\\Archive (1)\\supro-react\\components\\shared\\drawers\\modules\\ModuleDrawerMenuSidebar.jsx";




const ModuleDrawerMenuSidebar = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "ps-navigation--sidebar",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ps-navigation__top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_menus_MenuAccordion__WEBPACK_IMPORTED_MODULE_2__.default, {
        data: _public_static_data_menu_json__WEBPACK_IMPORTED_MODULE_3__.main_menu,
        classes: "menu menu--accordion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("figure", {
      className: "ps-navigation__bottom",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("figcaption", {
        children: "Contact Us"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "69 Halsey St, Ny 10002, New York, United States support.center@unero.co (0091) 8547 632521"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ModuleDrawerMenuSidebar);

/***/ }),

/***/ "./components/shared/drawers/modules/ModuleDrawerOverlay.jsx":
/*!*******************************************************************!*\
  !*** ./components/shared/drawers/modules/ModuleDrawerOverlay.jsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\asdf\\Downloads\\Archive (1)\\supro-react\\components\\shared\\drawers\\modules\\ModuleDrawerOverlay.jsx";



const ModuleDrawerOverlay = ({
  isDrawerShow
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `ps-site-overlay ${isDrawerShow ? 'active' : ''}`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(state => state.app)(ModuleDrawerOverlay));

/***/ }),

/***/ "./components/shared/drawers/modules/ModuleDrawerShopOverlay.jsx":
/*!***********************************************************************!*\
  !*** ./components/shared/drawers/modules/ModuleDrawerShopOverlay.jsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\asdf\\Downloads\\Archive (1)\\supro-react\\components\\shared\\drawers\\modules\\ModuleDrawerShopOverlay.jsx";



const ModuleDrawerShopOverlay = ({
  isFilter
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `ps-site-overlay ${isFilter ? 'active' : ''}`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(state => state.shop)(ModuleDrawerShopOverlay));

/***/ }),

/***/ "./components/shared/headers/modules/ModuleHeaderActions.js":
/*!******************************************************************!*\
  !*** ./components/shared/headers/modules/ModuleHeaderActions.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_app_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/store/app/action */ "./store/app/action.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utilities_ecomerce_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/utilities/ecomerce-helpers */ "./utilities/ecomerce-helpers.js");

var _jsxFileName = "C:\\Users\\asdf\\Downloads\\Archive (1)\\supro-react\\components\\shared\\headers\\modules\\ModuleHeaderActions.js";






const ModuleHeaderActions = ({
  cart
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    0: cartTotal,
    1: setCartTotal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const cartItems = (0,_utilities_ecomerce_helpers__WEBPACK_IMPORTED_MODULE_5__.getCartItemsFromCookies)();

  function handleOpenDrawer(e) {
    e.preventDefault();
    dispatch((0,_store_app_action__WEBPACK_IMPORTED_MODULE_2__.toggleDrawer)(true));
  }

  function handleCaculateCartAmount() {
    if (cartItems) {
      setCartTotal(cartItems.items.length);
      return cartItems.items.length;
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    handleCaculateCartAmount();
  }, [cartItems]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "header__actions",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: "/auth/login",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "header__user",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "icon-user"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: "/shop/wishlist",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "header__favorite",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "icon-heart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: "/shop/shopping-cart",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "header__cart ps-toggle--sidebar",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "icon-cart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: cartTotal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      className: "header__menu-toggle ps-toggle--sidebar",
      href: "#navigation-mobile",
      onClick: e => handleOpenDrawer(e),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: "icon-menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(state => state.cart)(ModuleHeaderActions));

/***/ }),

/***/ "./components/shared/menus/MenuAccordion.jsx":
/*!***************************************************!*\
  !*** ./components/shared/menus/MenuAccordion.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_elements_basic_Collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/elements/basic/Collapse */ "./components/elements/basic/Collapse.jsx");

var _jsxFileName = "C:\\Users\\asdf\\Downloads\\Archive (1)\\supro-react\\components\\shared\\menus\\MenuAccordion.jsx";




const MenuAccordion = ({
  data,
  classes = 'menu'
}) => {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  const handleToggleAccordion = index => {
    if (index !== isOpen) {
      setIsOpen(index);
    } else {
      setIsOpen(null);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    className: classes,
    children: data.map(item => {
      if (item.subMenu) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: `menu__item menu__item--has-children ${isOpen === item.id || item.active === true ? 'active' : ''}`,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "menu__toggle",
            onClick: e => handleToggleAccordion(item.id),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "menu__text",
              children: item.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "feather icon icon-chevron-down menu__icon--down"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_basic_Collapse__WEBPACK_IMPORTED_MODULE_3__.default, {
            elementType: "div",
            isOpen: item.id === isOpen || item.active === true ? true : false,
            "aria-hidden": isOpen ? 'false' : 'true',
            className: "sub-menu-wrapper",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuAccordion, {
              data: item.subMenu,
              classes: "sub-menu"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 29
          }, undefined)]
        }, item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 25
        }, undefined);
      } else if (item.megaContent) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: `menu__item menu__item--has-children has-mega-menu ${isOpen === item.id || item.active === true ? 'active' : ''}`,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "menu__toggle",
            onClick: e => handleToggleAccordion(item.id),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "menu__text",
              children: item.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "feather icon icon-chevron-down menu__icon--down"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_basic_Collapse__WEBPACK_IMPORTED_MODULE_3__.default, {
            elementType: "div",
            isOpen: item.id === isOpen || item.active === true ? true : false,
            "aria-hidden": isOpen ? 'false' : 'true',
            className: "sub-menu-wrapper",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuAccordion, {
              data: item.megaContent,
              classes: "sub-menu"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 29
          }, undefined)]
        }, item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }, undefined);
      } else if (item.megaItems) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: `menu__item menu__item--has-children ${isOpen === item.id || item.active === true ? 'active' : ''}`,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "menu__toggle",
            onClick: e => handleToggleAccordion(item.id),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "menu__text",
              children: item.heading
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "feather icon icon-chevron-down menu__icon--down"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_basic_Collapse__WEBPACK_IMPORTED_MODULE_3__.default, {
            elementType: "div",
            isOpen: item.id === isOpen || item.active === true ? true : false,
            "aria-hidden": isOpen ? 'false' : 'true',
            className: "sub-menu-wrapper",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuAccordion, {
              data: item.megaItems,
              classes: "sub-menu"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 29
          }, undefined)]
        }, item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 25
        }, undefined);
      } else {
        if (item.title) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "menu__title",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: item.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 33
            }, undefined)
          }, item.id, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 29
          }, undefined);
        } else {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "menu__item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: item.url,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "menu__text",
                  children: item.text
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 41
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 33
            }, undefined)
          }, item.text, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 29
          }, undefined);
        }
      }
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MenuAccordion);

/***/ }),

/***/ "./components/shared/mobiles/HeaderMobile.jsx":
/*!****************************************************!*\
  !*** ./components/shared/mobiles/HeaderMobile.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_elements_basic_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/elements/basic/Logo */ "./components/elements/basic/Logo.js");
/* harmony import */ var _store_app_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/app/action */ "./store/app/action.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utilities_common_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/utilities/common-helpers */ "./utilities/common-helpers.js");
/* harmony import */ var _components_shared_headers_modules_ModuleHeaderActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/shared/headers/modules/ModuleHeaderActions */ "./components/shared/headers/modules/ModuleHeaderActions.js");

var _jsxFileName = "C:\\Users\\asdf\\Downloads\\Archive (1)\\supro-react\\components\\shared\\mobiles\\HeaderMobile.jsx";







const HeaderMobile = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (false) {}
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: "header header--mobile",
    "data-sticky": "true",
    id: "header-sticky-mobile",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header__left",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_basic_Logo__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header__right",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "header__container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "header__search-mini",
          href: "#",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "icon-magnifier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_headers_modules_ModuleHeaderActions__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderMobile);

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var _components_layouts_MasterLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/layouts/MasterLayout */ "./components/layouts/MasterLayout.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_dist_antd_compact_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/dist/antd.compact.min.css */ "./node_modules/antd/dist/antd.compact.min.css");
/* harmony import */ var antd_dist_antd_compact_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_compact_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _scss_home_default_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/scss/home-default.scss */ "./scss/home-default.scss");
/* harmony import */ var _scss_home_default_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scss_home_default_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _scss_home_boxed_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/scss/home-boxed.scss */ "./scss/home-boxed.scss");
/* harmony import */ var _scss_home_boxed_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_scss_home_boxed_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _scss_home_classic_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/scss/home-classic.scss */ "./scss/home-classic.scss");
/* harmony import */ var _scss_home_classic_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_scss_home_classic_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _scss_home_categories_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/scss/home-categories.scss */ "./scss/home-categories.scss");
/* harmony import */ var _scss_home_categories_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_scss_home_categories_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _scss_home_best_selling_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/scss/home-best-selling.scss */ "./scss/home-best-selling.scss");
/* harmony import */ var _scss_home_best_selling_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_scss_home_best_selling_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _scss_home_moderm_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/scss/home-moderm.scss */ "./scss/home-moderm.scss");
/* harmony import */ var _scss_home_moderm_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_scss_home_moderm_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _scss_home_simple_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/scss/home-simple.scss */ "./scss/home-simple.scss");
/* harmony import */ var _scss_home_simple_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_scss_home_simple_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _scss_supro_react_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~/scss/supro-react.scss */ "./scss/supro-react.scss");
/* harmony import */ var _scss_supro_react_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_scss_supro_react_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_17__);

var _jsxFileName = "C:\\Users\\asdf\\Downloads\\Archive (1)\\supro-react\\pages\\_app.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















function App({
  Component,
  pageProps
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_17__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setTimeout(function () {
      document.getElementById('__next').classList.add('ps-loaded');
    }, 100);
  });

  const getLayout = Component.getLayout || (page => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_MasterLayout__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: page
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 43
  }, this));

  return getLayout( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_cookie__WEBPACK_IMPORTED_MODULE_5__.CookiesProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this));
}

/* harmony default export */ __webpack_exports__["default"] = (_store_store__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(App));

/***/ }),

/***/ "./repositories/ProductRepository.js":
/*!*******************************************!*\
  !*** ./repositories/ProductRepository.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTotalRecords": function() { return /* binding */ getTotalRecords; },
/* harmony export */   "getProductsByIds": function() { return /* binding */ getProductsByIds; }
/* harmony export */ });
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./repositories/Repository.js");

async function getTotalRecords() {
  const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__.default.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__.baseUrlProduct}/products/count`).then(response => {
    return response.data;
  }).catch(error => ({
    error: JSON.stringify(error)
  }));
  return reponse;
}
async function getProductsByIds(payload) {
  const endPoint = `${_Repository__WEBPACK_IMPORTED_MODULE_0__.baseUrlProduct}/products?${payload}`;
  const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__.default.get(endPoint).then(response => {
    return {
      items: response.data,
      totalItems: response.data.length
    };
  }).catch(error => ({
    error: JSON.stringify(error)
  }));
  return reponse;
}

class ProductRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getProducts(params) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__.default.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__.baseUrlProduct}/products?${(0,_Repository__WEBPACK_IMPORTED_MODULE_0__.serializeQuery)(params)}`).then(response => {
      return {
        items: response.data,
        totalItems: response.data.length
      };
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsById(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__.default.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__.baseUrlProduct}/products/${payload}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductCategories() {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__.default.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__.baseUrlProduct}/product-categories`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getPrductCategoryBySlug(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__.default.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__.baseUrlProduct}/product-categories?slug=${payload}`).then(response => {
      if (response.data && response.data.length > 0) {
        return {
          data: response.data[0],
          products: response.data[0].products
        };
      } else {
        return null;
      }
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

  async getProductsByPriceRange(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__.default.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__.baseUrlProduct}/products?${(0,_Repository__WEBPACK_IMPORTED_MODULE_0__.serializeQuery)(payload)}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new ProductRepository());

/***/ }),

/***/ "./repositories/Repository.js":
/*!************************************!*\
  !*** ./repositories/Repository.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wp": function() { return /* binding */ wp; },
/* harmony export */   "baseUrlProduct": function() { return /* binding */ baseUrlProduct; },
/* harmony export */   "customHeaders": function() { return /* binding */ customHeaders; },
/* harmony export */   "baseUrl": function() { return /* binding */ baseUrl; },
/* harmony export */   "serializeQuery": function() { return /* binding */ serializeQuery; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseDomain = "http://localhost:13370";
const wp = "https://wp.nouhtml5.com";
const baseUrlProduct = "http://localhost:13370";
const customHeaders = {
  Accept: "application/json"
};
const baseUrl = `${baseDomain}`;
/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseUrl,
  headers: customHeaders
}));
const serializeQuery = query => {
  return Object.keys(query).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`).join("&");
};

/***/ }),

/***/ "./store/app/action.js":
/*!*****************************!*\
  !*** ./store/app/action.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionTypes": function() { return /* binding */ actionTypes; },
/* harmony export */   "toggleSearchBox": function() { return /* binding */ toggleSearchBox; },
/* harmony export */   "toggleSearchBoxSuccess": function() { return /* binding */ toggleSearchBoxSuccess; },
/* harmony export */   "toggleDrawer": function() { return /* binding */ toggleDrawer; },
/* harmony export */   "toggleDrawerSuccess": function() { return /* binding */ toggleDrawerSuccess; }
/* harmony export */ });
const actionTypes = {
  TOGGLE_SEARCHBOX: 'TOGGLE_SEARCHBOX',
  TOGGLE_SEARCHBOX_SUCCESS: 'TOGGLE_SEARCHBOX_SUCCESS',
  TOGGLE_DRAWER: 'TOGGLE_DRAWER',
  TOGGLE_DRAWER_SUCCESS: 'TOGGLE_DRAWER_SUCCESS'
};
function toggleSearchBox(payload) {
  return {
    type: actionTypes.TOGGLE_SEARCHBOX,
    payload
  };
}
function toggleSearchBoxSuccess(payload) {
  return {
    type: actionTypes.TOGGLE_SEARCHBOX_SUCCESS,
    payload
  };
}
function toggleDrawer(payload) {
  return {
    type: actionTypes.TOGGLE_DRAWER,
    payload
  };
}
function toggleDrawerSuccess(payload) {
  return {
    type: actionTypes.TOGGLE_DRAWER_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/app/reducer.js":
/*!******************************!*\
  !*** ./store/app/reducer.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; }
/* harmony export */ });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/app/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  isSearchBoxShow: false,
  isDrawerShow: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__.actionTypes.TOGGLE_SEARCHBOX_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isSearchBoxShow: action.payload
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__.actionTypes.TOGGLE_DRAWER_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isDrawerShow: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/app/saga.js":
/*!***************************!*\
  !*** ./store/app/saga.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rootSaga; }
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! es6-promise */ "es6-promise");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_app_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/store/app/action */ "./store/app/action.js");



(0,es6_promise__WEBPACK_IMPORTED_MODULE_1__.polyfill)();

function* toggleSearchBoxSaga({
  payload
}) {
  try {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_store_app_action__WEBPACK_IMPORTED_MODULE_2__.toggleSearchBoxSuccess)(payload));
  } catch (err) {
    console.log(err);
  }
}

function* toggleDrawerSaga({
  payload
}) {
  try {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_store_app_action__WEBPACK_IMPORTED_MODULE_2__.toggleDrawerSuccess)(payload));
  } catch (err) {
    console.log(err);
  }
}

function* rootSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_store_app_action__WEBPACK_IMPORTED_MODULE_2__.actionTypes.TOGGLE_SEARCHBOX, toggleSearchBoxSaga)]);
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_store_app_action__WEBPACK_IMPORTED_MODULE_2__.actionTypes.TOGGLE_DRAWER, toggleDrawerSaga)]);
}

/***/ }),

/***/ "./store/cart/action.js":
/*!******************************!*\
  !*** ./store/cart/action.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionTypes": function() { return /* binding */ actionTypes; },
/* harmony export */   "getCart": function() { return /* binding */ getCart; },
/* harmony export */   "getCartSuccess": function() { return /* binding */ getCartSuccess; },
/* harmony export */   "getCartError": function() { return /* binding */ getCartError; },
/* harmony export */   "addItem": function() { return /* binding */ addItem; },
/* harmony export */   "removeItem": function() { return /* binding */ removeItem; },
/* harmony export */   "increaseItemQty": function() { return /* binding */ increaseItemQty; },
/* harmony export */   "decreaseItemQty": function() { return /* binding */ decreaseItemQty; },
/* harmony export */   "updateCartSuccess": function() { return /* binding */ updateCartSuccess; },
/* harmony export */   "updateCartError": function() { return /* binding */ updateCartError; }
/* harmony export */ });
const actionTypes = {
  GET_CART: 'GET_CART',
  GET_CART_SUCCESS: 'GET_CART_SUCCESS',
  GET_CART_ERROR: 'GET_CART_ERROR',
  GET_CART_TOTAL_QUANTITY: 'GET_CART_TOTAL_QUANTITY',
  GET_CART_TOTAL_QUANTITY_SUCCESS: 'GET_CART_TOTAL_QUANTITY_SUCCESS',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_CART: 'CLEAR_CART',
  CLEAR_CART_SUCCESS: 'CLEAR_CART_SUCCESS',
  CLEAR_CART_ERROR: 'CLEAR_CART_ERROR',
  INCREASE_QTY: 'INCREASE_QTY',
  INCREASE_QTY_SUCCESS: 'INCREASE_QTY_SUCCESS',
  INCREASE_QTY_ERROR: 'INCREASE_QTY_ERROR',
  DECREASE_QTY: 'DECREASE_QTY',
  UPDATE_CART: 'UPDATE_CART',
  UPDATE_CART_SUCCESS: 'UPDATE_CART_SUCCESS',
  UPDATE_CART_ERROR: 'UPDATE_CART_ERROR'
};
function getCart() {
  return {
    type: actionTypes.GET_CART
  };
}
function getCartSuccess() {
  return {
    type: actionTypes.GET_CART_SUCCESS
  };
}
function getCartError(error) {
  return {
    type: actionTypes.GET_CART_ERROR,
    error
  };
}
function addItem(product) {
  return {
    type: actionTypes.ADD_ITEM,
    product
  };
}
function removeItem(product) {
  return {
    type: actionTypes.REMOVE_ITEM,
    product
  };
}
function increaseItemQty(product) {
  return {
    type: actionTypes.INCREASE_QTY,
    product
  };
}
function decreaseItemQty(product) {
  return {
    type: actionTypes.DECREASE_QTY,
    product
  };
}
function updateCartSuccess(payload) {
  return {
    type: actionTypes.UPDATE_CART_SUCCESS,
    payload
  };
}
function updateCartError(payload) {
  return {
    type: actionTypes.UPDATE_CART_ERROR,
    payload
  };
}

/***/ }),

/***/ "./store/cart/reducer.js":
/*!*******************************!*\
  !*** ./store/cart/reducer.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initCart": function() { return /* binding */ initCart; }
/* harmony export */ });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/cart/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initCart = {
  cart: null
};

function reducer(state = initCart, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__.actionTypes.GET_CART_SUCCESS:
      return _objectSpread({}, state);

    case _action__WEBPACK_IMPORTED_MODULE_0__.actionTypes.UPDATE_CART_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: action.payload
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__.actionTypes.CLEAR_CART_SUCCESS:
      return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, state), {
        cartItems: action.payload.cartItems
      }), {
        amount: action.payload.amount
      }), {
        cartTotal: action.payload.cartTotal
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__.actionTypes.GET_CART_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__.actionTypes.UPDATE_CART_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/cart/saga.js":
/*!****************************!*\
  !*** ./store/cart/saga.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rootSaga; }
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./store/cart/action.js");
/* harmony import */ var _utilities_ecomerce_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utilities/ecomerce-helpers */ "./utilities/ecomerce-helpers.js");





const modalSuccess = type => {
  antd__WEBPACK_IMPORTED_MODULE_1__.notification[type]({
    message: 'Success',
    description: 'This product has been added to your cart!',
    duration: 1
  });
};

const modalWarning = type => {
  antd__WEBPACK_IMPORTED_MODULE_1__.notification[type]({
    message: 'Remove A Item',
    description: 'This product has been removed from your cart!',
    duration: 1
  });
};

function* getCartSaga() {
  try {
    const cartItems = (0,_utilities_ecomerce_helpers__WEBPACK_IMPORTED_MODULE_3__.getCartItemsFromCookies)();
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.updateCartSuccess)(cartItems));
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.getCartError)(err));
  }
}

function* addItemSaga(payload) {
  try {
    const {
      product
    } = payload;
    const cartItems = (0,_utilities_ecomerce_helpers__WEBPACK_IMPORTED_MODULE_3__.addItemToCartHelper)(product);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.updateCartSuccess)(cartItems));
    modalSuccess('success');
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.getCartError)(err));
  }
}

function* removeItemSaga(payload) {
  try {
    const {
      product
    } = payload;
    const cartItems = (0,_utilities_ecomerce_helpers__WEBPACK_IMPORTED_MODULE_3__.removeCartItemHelper)(product);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.updateCartSuccess)(cartItems));
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.getCartError)(err));
  }
}

function* increaseQtySaga(payload) {
  try {
    const {
      product
    } = payload;
    const cartItems = (0,_utilities_ecomerce_helpers__WEBPACK_IMPORTED_MODULE_3__.increaseQtyCartItemHelper)(product);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.updateCartSuccess)(cartItems));
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.getCartError)(err));
  }
}

function* decreaseItemQtySaga(payload) {
  try {
    const {
      product
    } = payload;
    const cartItems = (0,_utilities_ecomerce_helpers__WEBPACK_IMPORTED_MODULE_3__.decreaseQtyCartItemHelper)(product);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.updateCartSuccess)(cartItems));
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.getCartError)(err));
  }
}

function* clearCartSaga() {
  try {
    const emptyCart = {
      cartItems: null
    };
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.updateCartSuccess)(emptyCart));
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.updateCartError)(err));
  }
}

function* rootSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_action__WEBPACK_IMPORTED_MODULE_2__.actionTypes.GET_CART, getCartSaga)]);
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_action__WEBPACK_IMPORTED_MODULE_2__.actionTypes.ADD_ITEM, addItemSaga)]);
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_action__WEBPACK_IMPORTED_MODULE_2__.actionTypes.REMOVE_ITEM, removeItemSaga)]);
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_action__WEBPACK_IMPORTED_MODULE_2__.actionTypes.INCREASE_QTY, increaseQtySaga)]);
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_action__WEBPACK_IMPORTED_MODULE_2__.actionTypes.DECREASE_QTY, decreaseItemQtySaga)]);
}

/***/ }),

/***/ "./store/compare/action.js":
/*!*********************************!*\
  !*** ./store/compare/action.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionTypes": function() { return /* binding */ actionTypes; },
/* harmony export */   "getCompareList": function() { return /* binding */ getCompareList; },
/* harmony export */   "getCompareListSuccess": function() { return /* binding */ getCompareListSuccess; },
/* harmony export */   "addItemToCompare": function() { return /* binding */ addItemToCompare; },
/* harmony export */   "removeCompareItem": function() { return /* binding */ removeCompareItem; },
/* harmony export */   "clearCompare": function() { return /* binding */ clearCompare; },
/* harmony export */   "updateCompareListSuccess": function() { return /* binding */ updateCompareListSuccess; }
/* harmony export */ });
const actionTypes = {
  GET_COMPARE_LIST: 'GET_COMPARE_LIST',
  GET_COMPARE_LIST_SUCCESS: 'GET_COMPARE_LIST_SUCCESS',
  GET_COMPARE_LIST_ERROR: 'GET_COMPARE_LIST_ERROR',
  ADD_ITEM_COMPARE: 'ADD_ITEM_COMPARE',
  REMOVE_ITEM_COMPARE: 'REMOVE_ITEM_COMPARE',
  UPDATE_COMPARE_LIST: 'UPDATE_COMPARE_LIST',
  UPDATE_COMPARE_LIST_SUCCESS: 'UPDATE_COMPARE_LIST_SUCCESS',
  UPDATE_COMPARE_LIST_ERROR: 'UPDATE_COMPARE_LIST_ERROR',
  CLEAR_COMPARE_LIST: 'CLEAR_COMPARE_LIST'
};
function getCompareList() {
  return {
    type: actionTypes.GET_COMPARE_LIST
  };
}
function getCompareListSuccess(data) {
  return {
    type: actionTypes.GET_COMPARE_LIST_SUCCESS,
    data
  };
}
function addItemToCompare(product) {
  return {
    type: actionTypes.ADD_ITEM_COMPARE,
    product
  };
}
function removeCompareItem(product) {
  return {
    type: actionTypes.REMOVE_ITEM_COMPARE,
    product
  };
}
function clearCompare() {
  return {
    type: actionTypes.CLEAR_CART
  };
}
function updateCompareListSuccess(payload) {
  return {
    type: actionTypes.UPDATE_COMPARE_LIST_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/compare/reducer.js":
/*!**********************************!*\
  !*** ./store/compare/reducer.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initCart": function() { return /* binding */ initCart; }
/* harmony export */ });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/compare/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initCart = {
  compareItems: [],
  compareTotal: 0
};

function reducer(state = initCart, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__.actionTypes.GET_COMPARE_LIST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        cart: action.data
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__.actionTypes.UPDATE_COMPARE_LIST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        compareItems: action.payload.compareItems,
        compareTotal: action.payload.compareTotal
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__.actionTypes.GET_COMPARE_LIST_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/compare/saga.js":
/*!*******************************!*\
  !*** ./store/compare/saga.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rootSaga; }
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./store/compare/action.js");




const modalSuccess = type => {
  antd__WEBPACK_IMPORTED_MODULE_1__.notification[type]({
    message: 'Added to compare list!',
    description: 'This product has been added to compare list!'
  });
};

const modalWarning = type => {
  antd__WEBPACK_IMPORTED_MODULE_1__.notification[type]({
    message: 'Removed to compare list',
    description: 'This product has been removed from compare list!'
  });
};

function* getCompareListSaga() {
  try {
    const localCompareList = JSON.parse(localStorage.getItem('persist:martfury')).cart;
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.getCompareListSuccess)(localCompareList));
  } catch (err) {
    console.log(err);
  }
}

function* addItemSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localCompare = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).compare);
    let existItem = localCompare.compareItems.find(item => item.id === product.id);

    if (!existItem) {
      product.quantity = 1;
      localCompare.compareItems.push(product);
      localCompare.compareTotal++;
      yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.updateCompareListSuccess)(localCompare));
    }
  } catch (err) {
    console.log(err);
  }
}

function* removeItemSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localCompare = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).compare);
    let index = localCompare.compareItems.indexOf(product);
    localCompare.compareTotal = localCompare.compareTotal - 1;
    localCompare.compareItems.splice(index, 1);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.updateCompareListSuccess)(localCompare));
    modalWarning('warning');
  } catch (err) {
    console.log(err);
  }
}

function* clearCompareListSaga() {
  try {
    const emptyCart = {
      compareItems: [],
      compareTotal: 0
    };
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.updateCompareListSuccess)(emptyCart));
  } catch (err) {
    console.log(err);
  }
}

function* rootSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_action__WEBPACK_IMPORTED_MODULE_2__.actionTypes.GET_COMPARE_LIST, getCompareListSaga)]);
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_action__WEBPACK_IMPORTED_MODULE_2__.actionTypes.ADD_ITEM_COMPARE, addItemSaga)]);
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_action__WEBPACK_IMPORTED_MODULE_2__.actionTypes.REMOVE_ITEM_COMPARE, removeItemSaga)]);
}

/***/ }),

/***/ "./store/rootReducer.js":
/*!******************************!*\
  !*** ./store/rootReducer.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cart_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart/reducer */ "./store/cart/reducer.js");
/* harmony import */ var _compare_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compare/reducer */ "./store/compare/reducer.js");
/* harmony import */ var _wishlist_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlist/reducer */ "./store/wishlist/reducer.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/reducer */ "./store/app/reducer.js");
/* harmony import */ var _shop_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop/reducer */ "./store/shop/reducer.js");






/* harmony default export */ __webpack_exports__["default"] = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  cart: _cart_reducer__WEBPACK_IMPORTED_MODULE_1__.default,
  compare: _compare_reducer__WEBPACK_IMPORTED_MODULE_2__.default,
  wishlist: _wishlist_reducer__WEBPACK_IMPORTED_MODULE_3__.default,
  app: _app_reducer__WEBPACK_IMPORTED_MODULE_4__.default,
  shop: _shop_reducer__WEBPACK_IMPORTED_MODULE_5__.default
}));

/***/ }),

/***/ "./store/rootSaga.js":
/*!***************************!*\
  !*** ./store/rootSaga.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rootSaga; }
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cart_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart/saga */ "./store/cart/saga.js");
/* harmony import */ var _compare_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compare/saga */ "./store/compare/saga.js");
/* harmony import */ var _wishlist_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlist/saga */ "./store/wishlist/saga.js");
/* harmony import */ var _app_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/saga */ "./store/app/saga.js");
/* harmony import */ var _shop_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop/saga */ "./store/shop/saga.js");






function* rootSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,_cart_saga__WEBPACK_IMPORTED_MODULE_1__.default)(), (0,_compare_saga__WEBPACK_IMPORTED_MODULE_2__.default)(), (0,_wishlist_saga__WEBPACK_IMPORTED_MODULE_3__.default)(), (0,_app_saga__WEBPACK_IMPORTED_MODULE_4__.default)(), (0,_shop_saga__WEBPACK_IMPORTED_MODULE_5__.default)()]);
}

/***/ }),

/***/ "./store/shop/action.js":
/*!******************************!*\
  !*** ./store/shop/action.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionTypes": function() { return /* binding */ actionTypes; },
/* harmony export */   "changeShopGridView": function() { return /* binding */ changeShopGridView; },
/* harmony export */   "changeShopGridViewSuccess": function() { return /* binding */ changeShopGridViewSuccess; },
/* harmony export */   "toggleShopFilter": function() { return /* binding */ toggleShopFilter; },
/* harmony export */   "toggleShopFilterSuccess": function() { return /* binding */ toggleShopFilterSuccess; }
/* harmony export */ });
const actionTypes = {
  CHANGE_SHOP_GRID_VIEW: 'CHANGE_SHOP_GRID_VIEW',
  CHANGE_SHOP_GRID_VIEW_SUCCESS: 'CHANGE_SHOP_GRID_VIEW_SUCCESS',
  TOGGLE_SHOP_FILTER: 'TOGGLE_SHOP_FILTER',
  TOGGLE_SHOP_FILTER_SUCCESS: 'TOGGLE_SHOP_FILTER_SUCCESS'
};
function changeShopGridView(payload) {
  return {
    type: actionTypes.CHANGE_SHOP_GRID_VIEW,
    payload
  };
}
function changeShopGridViewSuccess(payload) {
  return {
    type: actionTypes.CHANGE_SHOP_GRID_VIEW_SUCCESS,
    payload
  };
}
function toggleShopFilter(payload) {
  return {
    type: actionTypes.TOGGLE_SHOP_FILTER,
    payload
  };
}
function toggleShopFilterSuccess(payload) {
  return {
    type: actionTypes.TOGGLE_SHOP_FILTER_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/shop/reducer.js":
/*!*******************************!*\
  !*** ./store/shop/reducer.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; }
/* harmony export */ });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/shop/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  isGridView: true,
  isFilter: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__.actionTypes.CHANGE_SHOP_GRID_VIEW_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isGridView: action.payload
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__.actionTypes.TOGGLE_SHOP_FILTER_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFilter: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/shop/saga.js":
/*!****************************!*\
  !*** ./store/shop/saga.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rootSaga; }
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! es6-promise */ "es6-promise");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_shop_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/store/shop/action */ "./store/shop/action.js");




(0,es6_promise__WEBPACK_IMPORTED_MODULE_1__.polyfill)();

function* handleToggleViewModeSaga({
  payload
}) {
  try {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_store_shop_action__WEBPACK_IMPORTED_MODULE_2__.changeShopGridViewSuccess)(payload));
  } catch (err) {
    console.log(err);
  }
}

function* handleToggleShopFilterSaga({
  payload
}) {
  try {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_store_shop_action__WEBPACK_IMPORTED_MODULE_2__.toggleShopFilterSuccess)(payload));
  } catch (err) {
    console.log(err);
  }
}

function* rootSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_store_shop_action__WEBPACK_IMPORTED_MODULE_2__.actionTypes.CHANGE_SHOP_GRID_VIEW, handleToggleViewModeSaga), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_store_shop_action__WEBPACK_IMPORTED_MODULE_2__.actionTypes.TOGGLE_SHOP_FILTER, handleToggleShopFilterSaga)]);
}

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeStore": function() { return /* binding */ makeStore; },
/* harmony export */   "wrapper": function() { return /* binding */ wrapper; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rootReducer */ "./store/rootReducer.js");
/* harmony import */ var _rootSaga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rootSaga */ "./store/rootSaga.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);






const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware));
  }

  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware);
};

const makeStore = context => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_rootReducer__WEBPACK_IMPORTED_MODULE_2__.default, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(_rootSaga__WEBPACK_IMPORTED_MODULE_3__.default);
  return store;
};
const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__.createWrapper)(makeStore, {
  debug: false
});

/***/ }),

/***/ "./store/wishlist/action.js":
/*!**********************************!*\
  !*** ./store/wishlist/action.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionTypes": function() { return /* binding */ actionTypes; },
/* harmony export */   "getWishlistList": function() { return /* binding */ getWishlistList; },
/* harmony export */   "getWishlistListSuccess": function() { return /* binding */ getWishlistListSuccess; },
/* harmony export */   "addItemToWishlist": function() { return /* binding */ addItemToWishlist; },
/* harmony export */   "removeWishlistItem": function() { return /* binding */ removeWishlistItem; },
/* harmony export */   "clearWishlist": function() { return /* binding */ clearWishlist; },
/* harmony export */   "updateWishlistListSuccess": function() { return /* binding */ updateWishlistListSuccess; }
/* harmony export */ });
const actionTypes = {
  GET_WISHLIST_LIST: 'GET_WISHLIST_LIST',
  GET_WISHLIST_LIST_SUCCESS: 'GET_WISHLIST_LIST_SUCCESS',
  GET_WISHLIST_LIST_ERROR: 'GET_WISHLIST_LIST_ERROR',
  ADD_ITEM_WISHLISH: 'ADD_ITEM_WISHLISH',
  REMOVE_ITEM_WISHLISH: 'REMOVE_ITEM_WISHLISH',
  UPDATE_WISHLISH_LIST: 'UPDATE_WISHLISH_LIST',
  UPDATE_WISHLISH_LIST_SUCCESS: 'UPDATE_WISHLISH_LIST_SUCCESS',
  CLEAR_WISHLISH_LIST: 'CLEAR_WISHLISH_LIST'
};
function getWishlistList() {
  return {
    type: actionTypes.GET_WISHLIST_LIST
  };
}
function getWishlistListSuccess(payload) {
  return {
    type: actionTypes.GET_WISHLIST_LIST_SUCCESS,
    payload
  };
}
function addItemToWishlist(product) {
  return {
    type: actionTypes.ADD_ITEM_WISHLISH,
    product
  };
}
function removeWishlistItem(product) {
  return {
    type: actionTypes.REMOVE_ITEM_WISHLISH,
    product
  };
}
function clearWishlist() {
  return {
    type: actionTypes.CLEAR_CART
  };
}
function updateWishlistListSuccess(payload) {
  return {
    type: actionTypes.UPDATE_WISHLISH_LIST_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/wishlist/reducer.js":
/*!***********************************!*\
  !*** ./store/wishlist/reducer.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initState": function() { return /* binding */ initState; }
/* harmony export */ });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/wishlist/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  wishlist: null
};

function reducer(state = initState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__.actionTypes.GET_WISHLIST_LIST_SUCCESS:
      return _objectSpread({}, state);

    case _action__WEBPACK_IMPORTED_MODULE_0__.actionTypes.UPDATE_WISHLISH_LIST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        wishlist: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/wishlist/saga.js":
/*!********************************!*\
  !*** ./store/wishlist/saga.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rootSaga; }
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./store/wishlist/action.js");
/* harmony import */ var _utilities_ecomerce_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utilities/ecomerce-helpers */ "./utilities/ecomerce-helpers.js");





const modalSuccess = type => {
  antd__WEBPACK_IMPORTED_MODULE_1__.notification[type]({
    message: 'Added to wishlisht!',
    description: 'This product has been added to wishlist!'
  });
};

const modalWarning = type => {
  antd__WEBPACK_IMPORTED_MODULE_1__.notification[type]({
    message: 'Removed from wishlist',
    description: 'This product has been removed from wishlist!'
  });
};

function* getWishlistListSaga() {
  try {
    const items = (0,_utilities_ecomerce_helpers__WEBPACK_IMPORTED_MODULE_3__.getWishListFromCookies)();
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.updateWishlistListSuccess)(items));
  } catch (err) {
    console.log(err);
  }
}

function* addItemToWishlistSaga({
  product
}) {
  try {
    const wishlistItems = (0,_utilities_ecomerce_helpers__WEBPACK_IMPORTED_MODULE_3__.addItemToWishlistHelper)(product);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.updateWishlistListSuccess)(wishlistItems));
    modalSuccess('success');
  } catch (err) {
    console.log(err);
  }
}

function* removeItemWishlistSaga({
  product
}) {
  try {
    const wishlistItems = (0,_utilities_ecomerce_helpers__WEBPACK_IMPORTED_MODULE_3__.removeItemFromWishlist)(product);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.updateWishlistListSuccess)(wishlistItems));
    modalWarning('warning');
  } catch (err) {
    console.log(err);
  }
}

function* clearWishlistListSaga() {
  try {
    const emptyCart = {
      wishlistItems: [],
      wishlistTotal: 0
    };
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.updateWishlistListSuccess)(emptyCart));
  } catch (err) {
    console.log(err);
  }
}

function* rootSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_action__WEBPACK_IMPORTED_MODULE_2__.actionTypes.GET_WISHLIST_LIST, getWishlistListSaga)]);
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_action__WEBPACK_IMPORTED_MODULE_2__.actionTypes.ADD_ITEM_WISHLISH, addItemToWishlistSaga)]);
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_action__WEBPACK_IMPORTED_MODULE_2__.actionTypes.REMOVE_ITEM_WISHLISH, removeItemWishlistSaga)]);
}

/***/ }),

/***/ "./utilities/common-helpers.js":
/*!*************************************!*\
  !*** ./utilities/common-helpers.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stickyHeader": function() { return /* binding */ stickyHeader; },
/* harmony export */   "stickyHeaderModile": function() { return /* binding */ stickyHeaderModile; },
/* harmony export */   "generateTempArray": function() { return /* binding */ generateTempArray; }
/* harmony export */ });
/*
 * React template helpers
 * Author: Nouthemes
 * Developed: diaryforlife
 * */
const stickyHeader = () => {
  let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const header = document.getElementById('header-sticky');

  if (header !== null) {
    if (number >= 300) {
      header.classList.add('header--sticky');
    } else {
      header.classList.remove('header--sticky');
    }
  }
};
const stickyHeaderModile = () => {
  let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const header = document.getElementById('header-sticky-mobile');

  if (header !== null) {
    if (number >= 300) {
      header.classList.add('header--sticky');
    } else {
      header.classList.remove('header--sticky');
    }
  }
};
const generateTempArray = maxItems => {
  let result = [];

  for (let i = 0; i < maxItems; i++) {
    result.push(i);
  }

  return result;
};

/***/ }),

/***/ "./utilities/ecomerce-helpers.js":
/*!***************************************!*\
  !*** ./utilities/ecomerce-helpers.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateAmount": function() { return /* binding */ calculateAmount; },
/* harmony export */   "getCartItemsFromCookies": function() { return /* binding */ getCartItemsFromCookies; },
/* harmony export */   "getWishListFromCookies": function() { return /* binding */ getWishListFromCookies; },
/* harmony export */   "getCartItemsHelper": function() { return /* binding */ getCartItemsHelper; },
/* harmony export */   "getWishListItemsHelper": function() { return /* binding */ getWishListItemsHelper; },
/* harmony export */   "updateCartToCookies": function() { return /* binding */ updateCartToCookies; },
/* harmony export */   "updateWishlistToCookies": function() { return /* binding */ updateWishlistToCookies; },
/* harmony export */   "addItemToCartHelper": function() { return /* binding */ addItemToCartHelper; },
/* harmony export */   "addItemToWishlistHelper": function() { return /* binding */ addItemToWishlistHelper; },
/* harmony export */   "increaseQtyCartItemHelper": function() { return /* binding */ increaseQtyCartItemHelper; },
/* harmony export */   "decreaseQtyCartItemHelper": function() { return /* binding */ decreaseQtyCartItemHelper; },
/* harmony export */   "removeCartItemHelper": function() { return /* binding */ removeCartItemHelper; },
/* harmony export */   "removeItemFromWishlist": function() { return /* binding */ removeItemFromWishlist; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/repositories/ProductRepository */ "./repositories/ProductRepository.js");
/*
 * React template helpers
 * Author: Nouthemes
 * Developed: diaryforlife
 * */



function calculateAmount(obj) {
  return Object.values(obj).reduce((acc, {
    quantity,
    price
  }) => acc + quantity * price, 0).toFixed(2);
}
function getCartItemsFromCookies() {
  const cartItems = js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('cart');

  if (cartItems) {
    return JSON.parse(cartItems);
  } else {
    return null;
  }
}
function getWishListFromCookies() {
  const items = js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('wishlist');

  if (items) {
    return JSON.parse(items);
  } else {
    return null;
  }
}
async function getCartItemsHelper(cart) {
  let cartItems;

  if (cart && cart.items.length > 0) {
    let queries = '';
    cart.items.forEach(item => {
      if (queries === '') {
        queries = `id_in=${item.id}`;
      } else {
        queries = queries + `&id_in=${item.id}`;
      }
    });
    const products = await (0,_repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__.getProductsByIds)(queries);

    if (products && products.items.length > 0) {
      cartItems = products.items;
      cart.items.forEach((item, index) => {
        if (item.id === cartItems[index].id) {
          cartItems[index].quantity = item.quantity;
        }
      });
    }

    return {
      items: cartItems
    };
  } else {
    return {
      items: []
    };
  }
}
async function getWishListItemsHelper(payload) {
  let wishlistItems;

  if (payload && payload.length > 0) {
    let queries = '';
    payload.forEach(item => {
      if (queries === '') {
        queries = `id_in=${item}`;
      } else {
        queries = queries + `&id_in=${item}`;
      }
    });
    const products = await (0,_repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__.getProductsByIds)(queries);

    if (products && products.items.length > 0) {
      wishlistItems = products.items;
    }

    return wishlistItems;
  } else {
    return null;
  }
}
function updateCartToCookies(payload) {
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default().set('cart', payload, {
    path: '/',
    expires: 24 * 7
  });
}
function updateWishlistToCookies(payload) {
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default().set('wishlist', payload, {
    path: '/',
    expires: 24 * 7
  });
}
function addItemToCartHelper(product) {
  let cart;
  let cookieCart = getCartItemsFromCookies();

  if (cookieCart) {
    cart = cookieCart;
    const existItem = cart.items.find(item => item.id === product.id);

    if (existItem) {
      existItem.quantity += product.quantity;
    } else {
      /* if (!product.quantity) {
          product.quantity = 1;
      }*/
      cart.items.push(product);
    }
  } else {
    cart = {
      items: []
    };
    cart.items.push(product);
  }

  updateCartToCookies(cart);
  return cart;
}
function addItemToWishlistHelper(payload) {
  let wishlist = [];
  let cookieWishlist = getWishListFromCookies();

  if (cookieWishlist) {
    wishlist = cookieWishlist;
    const existItem = wishlist.find(item => item === payload);

    if (existItem === undefined) {
      wishlist.push(payload);
    }
  } else {
    wishlist.push(payload);
  }

  updateWishlistToCookies(wishlist);
  return wishlist;
}
function increaseQtyCartItemHelper(product) {
  let cart;
  let cookieCart = getCartItemsFromCookies();

  if (cookieCart) {
    cart = cookieCart;
    const selectedItem = cart.items.find(item => item.id === product.id);

    if (selectedItem) {
      selectedItem.quantity = selectedItem.quantity + 1;
    }

    updateCartToCookies(cart);
    return cart;
  }
}
function decreaseQtyCartItemHelper(product) {
  let cart;
  let cookieCart = getCartItemsFromCookies();

  if (cookieCart) {
    cart = cookieCart;
    const selectedItem = cart.items.find(item => item.id === product.id);

    if (selectedItem) {
      selectedItem.quantity = selectedItem.quantity - 1;
    }

    updateCartToCookies(cart);
    return cart;
  }
}
function removeCartItemHelper(product) {
  let cart;
  let cookieCart = getCartItemsFromCookies();

  if (cookieCart) {
    cart = cookieCart;
    const index = cart.items.findIndex(item => item.id === product.id);
    cart.items.splice(index, 1);
    updateCartToCookies(cart);
    return cart;
  }
}
function removeItemFromWishlist(payload) {
  let wishlist = [];
  let cookieWishlist = getWishListFromCookies();

  if (cookieWishlist) {
    wishlist = cookieWishlist;
    const index = wishlist.findIndex(item => item === payload);
    console.log({
      index
    });
    wishlist.splice(index, 1);
    console.log({
      wishlist
    });
    updateWishlistToCookies(wishlist);
    return wishlist;
  }
}

/***/ }),

/***/ "./scss/home-best-selling.scss":
/*!*************************************!*\
  !*** ./scss/home-best-selling.scss ***!
  \*************************************/
/***/ (function() {



/***/ }),

/***/ "./scss/home-boxed.scss":
/*!******************************!*\
  !*** ./scss/home-boxed.scss ***!
  \******************************/
/***/ (function() {



/***/ }),

/***/ "./scss/home-categories.scss":
/*!***********************************!*\
  !*** ./scss/home-categories.scss ***!
  \***********************************/
/***/ (function() {



/***/ }),

/***/ "./scss/home-classic.scss":
/*!********************************!*\
  !*** ./scss/home-classic.scss ***!
  \********************************/
/***/ (function() {



/***/ }),

/***/ "./scss/home-default.scss":
/*!********************************!*\
  !*** ./scss/home-default.scss ***!
  \********************************/
/***/ (function() {



/***/ }),

/***/ "./scss/home-moderm.scss":
/*!*******************************!*\
  !*** ./scss/home-moderm.scss ***!
  \*******************************/
/***/ (function() {



/***/ }),

/***/ "./scss/home-simple.scss":
/*!*******************************!*\
  !*** ./scss/home-simple.scss ***!
  \*******************************/
/***/ (function() {



/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ (function() {



/***/ }),

/***/ "./scss/supro-react.scss":
/*!*******************************!*\
  !*** ./scss/supro-react.scss ***!
  \*******************************/
/***/ (function() {



/***/ }),

/***/ "./public/static/data/menu.json":
/*!**************************************!*\
  !*** ./public/static/data/menu.json ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"main_menu":[{"id":"1","text":"Home","url":"/shop","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu","mega":"true","megaContent":[{"id":"1","heading":"Column 1","megaItems":[{"text":"Home Default","url":"/"},{"text":"Home Best Selling","url":"/home/home-best-selling"},{"text":"Home Moderm","url":"/home/home-moderm"},{"text":"Home Fullwidth","url":"/home/home-fullwidth"}]},{"id":"2","heading":"Column 2","megaItems":[{"text":"Home Categories","url":"/home/home-categories"},{"text":"Home Simple","url":"/home/home-simple"},{"text":"Home Classic","url":"/home/home-classic"}]}]},{"id":"2","text":"Shop","url":"/shop","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu","mega":"true","megaContent":[{"id":"1","heading":"Shop Pages","megaItems":[{"text":"Shop Default","url":"/shop"},{"text":"Shop Sidebar","url":"/shop/shop-sidebar"},{"text":"Shop Categories","url":"/shop/shop-categories"},{"text":"Shop Fullwidth","url":"/shop/shop-fullwidth"},{"text":"Shop Banner","url":"/shop/shop-banner"}]},{"id":"2","heading":"Product Layouts","megaItems":[{"text":"Default","url":"/product/2"},{"text":"With Background","url":"/product/with-background/2"},{"text":"Gallery Thumbnail","url":"/product/gallery-thumbnail/2"},{"text":"With Sidebar","url":"/product/with-sidebar/2"}]},{"id":"3","heading":"Product Pages","megaItems":[{"text":"Simple","url":"/"},{"text":"On Sale","url":"/"}]},{"id":"4","heading":"Ecommerce Pages","megaItems":[{"id":"1","text":"Shopping Cart","url":"/shop/shopping-cart"},{"id":"2","text":"Checkout","url":"/shop/checkout"},{"id":"3","text":"Wishlist","url":"/shop/wishlist"}]}]},{"id":"4","text":"Blogs","url":"/blog","current":"shop","extraClass":"menu-item-has-children dropdown","subClass":"sub-menu","subMenu":[{"text":"Grid","url":"/blog"},{"text":"Listing","url":"/blog/blog-list"},{"text":"With Sidebar","url":"/blog/blog-sidebar"},{"text":"Post Detail","url":"/post/these-glittery-sneakers-will-make-you-want-to-ditch-your-holiday-heels"}]},{"id":"5","text":"Pages","url":"/pages/about-us","current":"shop","extraClass":"menu-item-has-children dropdown","subClass":"sub-menu","subMenu":[{"text":"About Us","url":"/pages/about-us"},{"text":"FAQs","url":"/pages/faqs"},{"text":"My Account","url":"/auth/login"},{"text":"Order Tracking","url":"/pages/order-tracking"}]},{"text":"Contact","url":"/pages/contact-us"}]}');

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("antd");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "es6-promise":
/*!******************************!*\
  !*** external "es6-promise" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("es6-promise");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "object-assign":
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("object-assign");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-cookie");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga");;

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga/effects");;

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/server");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_dist_pages__document_js","vendors-node_modules_antd_dist_antd_compact_min_css-node_modules_slick-carousel_slick_slick_c-763fa3"], function() { return __webpack_exec__("./pages/_app.jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXByb19yZWFjdC8uL2NvbXBvbmVudHMvZWxlbWVudHMvYmFzaWMvQ29sbGFwc2UuanN4Iiwid2VicGFjazovL3N1cHJvX3JlYWN0Ly4vY29tcG9uZW50cy9lbGVtZW50cy9iYXNpYy9Mb2dvLmpzIiwid2VicGFjazovL3N1cHJvX3JlYWN0Ly4vY29tcG9uZW50cy9sYXlvdXRzL01hc3RlckxheW91dC5qc3giLCJ3ZWJwYWNrOi8vc3Vwcm9fcmVhY3QvLi9jb21wb25lbnRzL2xheW91dHMvbW9kdWxlcy9Nb2R1bGVDdXN0b21IZWFkLmpzeCIsIndlYnBhY2s6Ly9zdXByb19yZWFjdC8uL2NvbXBvbmVudHMvc2hhcmVkL2RyYXdlcnMvRHJhd2VyRGVmYXVsdC5qc3giLCJ3ZWJwYWNrOi8vc3Vwcm9fcmVhY3QvLi9jb21wb25lbnRzL3NoYXJlZC9kcmF3ZXJzL21vZHVsZXMvTW9kdWxlRHJhd2VyTWVudVNpZGViYXIuanN4Iiwid2VicGFjazovL3N1cHJvX3JlYWN0Ly4vY29tcG9uZW50cy9zaGFyZWQvZHJhd2Vycy9tb2R1bGVzL01vZHVsZURyYXdlck92ZXJsYXkuanN4Iiwid2VicGFjazovL3N1cHJvX3JlYWN0Ly4vY29tcG9uZW50cy9zaGFyZWQvZHJhd2Vycy9tb2R1bGVzL01vZHVsZURyYXdlclNob3BPdmVybGF5LmpzeCIsIndlYnBhY2s6Ly9zdXByb19yZWFjdC8uL2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvbW9kdWxlcy9Nb2R1bGVIZWFkZXJBY3Rpb25zLmpzIiwid2VicGFjazovL3N1cHJvX3JlYWN0Ly4vY29tcG9uZW50cy9zaGFyZWQvbWVudXMvTWVudUFjY29yZGlvbi5qc3giLCJ3ZWJwYWNrOi8vc3Vwcm9fcmVhY3QvLi9jb21wb25lbnRzL3NoYXJlZC9tb2JpbGVzL0hlYWRlck1vYmlsZS5qc3giLCJ3ZWJwYWNrOi8vc3Vwcm9fcmVhY3QvLi9wYWdlcy9fYXBwLmpzeCIsIndlYnBhY2s6Ly9zdXByb19yZWFjdC8uL3JlcG9zaXRvcmllcy9Qcm9kdWN0UmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly9zdXByb19yZWFjdC8uL3JlcG9zaXRvcmllcy9SZXBvc2l0b3J5LmpzIiwid2VicGFjazovL3N1cHJvX3JlYWN0Ly4vc3RvcmUvYXBwL2FjdGlvbi5qcyIsIndlYnBhY2s6Ly9zdXByb19yZWFjdC8uL3N0b3JlL2FwcC9yZWR1Y2VyLmpzIiwid2VicGFjazovL3N1cHJvX3JlYWN0Ly4vc3RvcmUvYXBwL3NhZ2EuanMiLCJ3ZWJwYWNrOi8vc3Vwcm9fcmVhY3QvLi9zdG9yZS9jYXJ0L2FjdGlvbi5qcyIsIndlYnBhY2s6Ly9zdXByb19yZWFjdC8uL3N0b3JlL2NhcnQvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9zdXByb19yZWFjdC8uL3N0b3JlL2NhcnQvc2FnYS5qcyIsIndlYnBhY2s6Ly9zdXByb19yZWFjdC8uL3N0b3JlL2NvbXBhcmUvYWN0aW9uLmpzIiwid2VicGFjazovL3N1cHJvX3JlYWN0Ly4vc3RvcmUvY29tcGFyZS9yZWR1Y2VyLmpzIiwid2VicGFjazovL3N1cHJvX3JlYWN0Ly4vc3RvcmUvY29tcGFyZS9zYWdhLmpzIiwid2VicGFjazovL3N1cHJvX3JlYWN0Ly4vc3RvcmUvcm9vdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vc3Vwcm9fcmVhY3QvLi9zdG9yZS9yb290U2FnYS5qcyIsIndlYnBhY2s6Ly9zdXByb19yZWFjdC8uL3N0b3JlL3Nob3AvYWN0aW9uLmpzIiwid2VicGFjazovL3N1cHJvX3JlYWN0Ly4vc3RvcmUvc2hvcC9yZWR1Y2VyLmpzIiwid2VicGFjazovL3N1cHJvX3JlYWN0Ly4vc3RvcmUvc2hvcC9zYWdhLmpzIiwid2VicGFjazovL3N1cHJvX3JlYWN0Ly4vc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vc3Vwcm9fcmVhY3QvLi9zdG9yZS93aXNobGlzdC9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vc3Vwcm9fcmVhY3QvLi9zdG9yZS93aXNobGlzdC9yZWR1Y2VyLmpzIiwid2VicGFjazovL3N1cHJvX3JlYWN0Ly4vc3RvcmUvd2lzaGxpc3Qvc2FnYS5qcyIsIndlYnBhY2s6Ly9zdXByb19yZWFjdC8uL3V0aWxpdGllcy9jb21tb24taGVscGVycy5qcyIsIndlYnBhY2s6Ly9zdXByb19yZWFjdC8uL3V0aWxpdGllcy9lY29tZXJjZS1oZWxwZXJzLmpzIiwid2VicGFjazovL3N1cHJvX3JlYWN0L2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovL3N1cHJvX3JlYWN0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9zdXByb19yZWFjdC9leHRlcm5hbCBcImVzNi1wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vc3Vwcm9fcmVhY3QvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9zdXByb19yZWFjdC9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovL3N1cHJvX3JlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly9zdXByb19yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dC5qc1wiIiwid2VicGFjazovL3N1cHJvX3JlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3N1cHJvX3JlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3N1cHJvX3JlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3N1cHJvX3JlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL3N1cHJvX3JlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiIiwid2VicGFjazovL3N1cHJvX3JlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiIiwid2VicGFjazovL3N1cHJvX3JlYWN0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vc3Vwcm9fcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3N1cHJvX3JlYWN0L2V4dGVybmFsIFwib2JqZWN0LWFzc2lnblwiIiwid2VicGFjazovL3N1cHJvX3JlYWN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zdXByb19yZWFjdC9leHRlcm5hbCBcInJlYWN0LWNvb2tpZVwiIiwid2VicGFjazovL3N1cHJvX3JlYWN0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9zdXByb19yZWFjdC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vc3Vwcm9fcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9zdXByb19yZWFjdC9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vc3Vwcm9fcmVhY3QvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly9zdXByb19yZWFjdC9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly9zdXByb19yZWFjdC9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovL3N1cHJvX3JlYWN0L2V4dGVybmFsIFwic3R5bGVkLWpzeC9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly9zdXByb19yZWFjdC9pZ25vcmVkfEM6XFxVc2Vyc1xcYXNkZlxcRG93bmxvYWRzXFxBcmNoaXZlICgxKVxcc3Vwcm8tcmVhY3RcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJDT0xMQVBTRUQiLCJDT0xMQVBTSU5HIiwiRVhQQU5ESU5HIiwiRVhQQU5ERUQiLCJkZWZhdWx0Q2xhc3NOYW1lIiwiZGVmYXVsdEVsZW1lbnRUeXBlIiwiZGVmYXVsdENvbGxhcHNlSGVpZ2h0IiwibmV4dEZyYW1lIiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJTUENvbGxhcHNlIiwiY2hpbGRyZW4iLCJ0cmFuc2l0aW9uIiwic3R5bGUiLCJyZW5kZXIiLCJlbGVtZW50VHlwZSIsImlzT3BlbiIsImNvbGxhcHNlSGVpZ2h0Iiwib25Jbml0Iiwib25DaGFuZ2UiLCJjbGFzc05hbWUiLCJhZGRTdGF0ZSIsIm5vQW5pbSIsIm92ZXJmbG93T25FeHBhbmRlZCIsInJlc3QiLCJnZXRDb2xsYXBzZWRWaXNpYmlsaXR5IiwiX18iLCJmb3JjZVVwZGF0ZSIsInVzZVJlZHVjZXIiLCJfIiwiZWxlbWVudFJlZiIsInVzZVJlZiIsImNhbGxiYWNrVGljayIsInNldENhbGxiYWNrVGljayIsInVzZVN0YXRlIiwic3RhdGUiLCJjb2xsYXBzZSIsImhlaWdodCIsInZpc2liaWxpdHkiLCJjdXJyZW50IiwidXNlRWZmZWN0Iiwib25DYWxsYmFjayIsInBhcmFtcyIsInNldENvbGxhcHNlZCIsInNldFRpbWVvdXQiLCJEYXRlIiwibm93Iiwic2V0Q29sbGFwc2luZyIsImdldEVsZW1lbnRIZWlnaHQiLCJzZXRFeHBhbmRpbmciLCJzZXRFeHBhbmRlZCIsInNjcm9sbEhlaWdodCIsIm9uVHJhbnNpdGlvbkVuZCIsInRhcmdldCIsInByb3BlcnR5TmFtZSIsInN0eWxlSGVpZ2h0IiwiY29uc29sZSIsIndhcm4iLCJkaWRPcGVuIiwib3ZlcmZsb3ciLCJjb21wdXRlZFN0eWxlIiwiRWxlbWVudFR5cGUiLCJjYWxsYmFja1JlZiIsInVzZUNhbGxiYWNrIiwibm9kZSIsImNvbGxhcHNlQ2xhc3NOYW1lIiwiTG9nbyIsInVybCIsImxpZ2h0IiwiTWFzdGVyTGF5b3V0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNvbXBsZXRlIiwidG9nZ2xlRHJhd2VyIiwiZ2V0Q2FydCIsImdldFdpc2hsaXN0TGlzdCIsImV2ZW50cyIsIm9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsIm9mZiIsImNvbm5lY3QiLCJNb2R1bGVDdXN0b21IZWFkIiwiRHJhd2VyRGVmYXVsdCIsImlzRHJhd2VyU2hvdyIsInJlZiIsImhhbmRsZUNsb3NlIiwiZSIsImFwcCIsIk1vZHVsZURyYXdlck1lbnVTaWRlYmFyIiwibWFpbl9tZW51IiwiTW9kdWxlRHJhd2VyT3ZlcmxheSIsIk1vZHVsZURyYXdlclNob3BPdmVybGF5IiwiaXNGaWx0ZXIiLCJzaG9wIiwiTW9kdWxlSGVhZGVyQWN0aW9ucyIsImNhcnQiLCJjYXJ0VG90YWwiLCJzZXRDYXJ0VG90YWwiLCJjYXJ0SXRlbXMiLCJnZXRDYXJ0SXRlbXNGcm9tQ29va2llcyIsImhhbmRsZU9wZW5EcmF3ZXIiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNhY3VsYXRlQ2FydEFtb3VudCIsIml0ZW1zIiwibGVuZ3RoIiwiTWVudUFjY29yZGlvbiIsImRhdGEiLCJjbGFzc2VzIiwic2V0SXNPcGVuIiwiaGFuZGxlVG9nZ2xlQWNjb3JkaW9uIiwiaW5kZXgiLCJtYXAiLCJpdGVtIiwic3ViTWVudSIsImlkIiwiYWN0aXZlIiwidGV4dCIsIm1lZ2FDb250ZW50IiwibWVnYUl0ZW1zIiwiaGVhZGluZyIsInRpdGxlIiwiSGVhZGVyTW9iaWxlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0TGF5b3V0IiwicGFnZSIsIndyYXBwZXIiLCJnZXRUb3RhbFJlY29yZHMiLCJyZXBvbnNlIiwiUmVwb3NpdG9yeSIsImJhc2VVcmxQcm9kdWN0IiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRQcm9kdWN0c0J5SWRzIiwicGF5bG9hZCIsImVuZFBvaW50IiwidG90YWxJdGVtcyIsIlByb2R1Y3RSZXBvc2l0b3J5IiwiY29uc3RydWN0b3IiLCJnZXRQcm9kdWN0cyIsInNlcmlhbGl6ZVF1ZXJ5IiwiZ2V0UHJvZHVjdHNCeUlkIiwiZ2V0UHJvZHVjdENhdGVnb3JpZXMiLCJnZXRQcmR1Y3RDYXRlZ29yeUJ5U2x1ZyIsInByb2R1Y3RzIiwibG9nIiwiZ2V0UHJvZHVjdHNCeVByaWNlUmFuZ2UiLCJiYXNlRG9tYWluIiwid3AiLCJjdXN0b21IZWFkZXJzIiwiQWNjZXB0IiwiYmFzZVVybCIsImF4aW9zIiwiaGVhZGVycyIsInF1ZXJ5IiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJhY3Rpb25UeXBlcyIsIlRPR0dMRV9TRUFSQ0hCT1giLCJUT0dHTEVfU0VBUkNIQk9YX1NVQ0NFU1MiLCJUT0dHTEVfRFJBV0VSIiwiVE9HR0xFX0RSQVdFUl9TVUNDRVNTIiwidG9nZ2xlU2VhcmNoQm94IiwidHlwZSIsInRvZ2dsZVNlYXJjaEJveFN1Y2Nlc3MiLCJ0b2dnbGVEcmF3ZXJTdWNjZXNzIiwiaW5pdGlhbFN0YXRlIiwiaXNTZWFyY2hCb3hTaG93IiwicmVkdWNlciIsImFjdGlvbiIsInBvbHlmaWxsIiwidG9nZ2xlU2VhcmNoQm94U2FnYSIsInB1dCIsImVyciIsInRvZ2dsZURyYXdlclNhZ2EiLCJyb290U2FnYSIsImFsbCIsInRha2VFdmVyeSIsIkdFVF9DQVJUIiwiR0VUX0NBUlRfU1VDQ0VTUyIsIkdFVF9DQVJUX0VSUk9SIiwiR0VUX0NBUlRfVE9UQUxfUVVBTlRJVFkiLCJHRVRfQ0FSVF9UT1RBTF9RVUFOVElUWV9TVUNDRVNTIiwiQUREX0lURU0iLCJSRU1PVkVfSVRFTSIsIkNMRUFSX0NBUlQiLCJDTEVBUl9DQVJUX1NVQ0NFU1MiLCJDTEVBUl9DQVJUX0VSUk9SIiwiSU5DUkVBU0VfUVRZIiwiSU5DUkVBU0VfUVRZX1NVQ0NFU1MiLCJJTkNSRUFTRV9RVFlfRVJST1IiLCJERUNSRUFTRV9RVFkiLCJVUERBVEVfQ0FSVCIsIlVQREFURV9DQVJUX1NVQ0NFU1MiLCJVUERBVEVfQ0FSVF9FUlJPUiIsImdldENhcnRTdWNjZXNzIiwiZ2V0Q2FydEVycm9yIiwiYWRkSXRlbSIsInByb2R1Y3QiLCJyZW1vdmVJdGVtIiwiaW5jcmVhc2VJdGVtUXR5IiwiZGVjcmVhc2VJdGVtUXR5IiwidXBkYXRlQ2FydFN1Y2Nlc3MiLCJ1cGRhdGVDYXJ0RXJyb3IiLCJpbml0Q2FydCIsImFtb3VudCIsIm1vZGFsU3VjY2VzcyIsIm5vdGlmaWNhdGlvbiIsIm1lc3NhZ2UiLCJkZXNjcmlwdGlvbiIsImR1cmF0aW9uIiwibW9kYWxXYXJuaW5nIiwiZ2V0Q2FydFNhZ2EiLCJhZGRJdGVtU2FnYSIsImFkZEl0ZW1Ub0NhcnRIZWxwZXIiLCJyZW1vdmVJdGVtU2FnYSIsInJlbW92ZUNhcnRJdGVtSGVscGVyIiwiaW5jcmVhc2VRdHlTYWdhIiwiaW5jcmVhc2VRdHlDYXJ0SXRlbUhlbHBlciIsImRlY3JlYXNlSXRlbVF0eVNhZ2EiLCJkZWNyZWFzZVF0eUNhcnRJdGVtSGVscGVyIiwiY2xlYXJDYXJ0U2FnYSIsImVtcHR5Q2FydCIsIkdFVF9DT01QQVJFX0xJU1QiLCJHRVRfQ09NUEFSRV9MSVNUX1NVQ0NFU1MiLCJHRVRfQ09NUEFSRV9MSVNUX0VSUk9SIiwiQUREX0lURU1fQ09NUEFSRSIsIlJFTU9WRV9JVEVNX0NPTVBBUkUiLCJVUERBVEVfQ09NUEFSRV9MSVNUIiwiVVBEQVRFX0NPTVBBUkVfTElTVF9TVUNDRVNTIiwiVVBEQVRFX0NPTVBBUkVfTElTVF9FUlJPUiIsIkNMRUFSX0NPTVBBUkVfTElTVCIsImdldENvbXBhcmVMaXN0IiwiZ2V0Q29tcGFyZUxpc3RTdWNjZXNzIiwiYWRkSXRlbVRvQ29tcGFyZSIsInJlbW92ZUNvbXBhcmVJdGVtIiwiY2xlYXJDb21wYXJlIiwidXBkYXRlQ29tcGFyZUxpc3RTdWNjZXNzIiwiY29tcGFyZUl0ZW1zIiwiY29tcGFyZVRvdGFsIiwiZ2V0Q29tcGFyZUxpc3RTYWdhIiwibG9jYWxDb21wYXJlTGlzdCIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2FsQ29tcGFyZSIsImNvbXBhcmUiLCJleGlzdEl0ZW0iLCJmaW5kIiwicXVhbnRpdHkiLCJwdXNoIiwiaW5kZXhPZiIsInNwbGljZSIsImNsZWFyQ29tcGFyZUxpc3RTYWdhIiwiY29tYmluZVJlZHVjZXJzIiwid2lzaGxpc3QiLCJDYXJ0U2FnYSIsIkNvbXBhcmVTYWdhIiwiV2lzaGxpc3RTYWdhIiwiQXBwU2FnYSIsIlNob3BTYWdhIiwiQ0hBTkdFX1NIT1BfR1JJRF9WSUVXIiwiQ0hBTkdFX1NIT1BfR1JJRF9WSUVXX1NVQ0NFU1MiLCJUT0dHTEVfU0hPUF9GSUxURVIiLCJUT0dHTEVfU0hPUF9GSUxURVJfU1VDQ0VTUyIsImNoYW5nZVNob3BHcmlkVmlldyIsImNoYW5nZVNob3BHcmlkVmlld1N1Y2Nlc3MiLCJ0b2dnbGVTaG9wRmlsdGVyIiwidG9nZ2xlU2hvcEZpbHRlclN1Y2Nlc3MiLCJpc0dyaWRWaWV3IiwiaGFuZGxlVG9nZ2xlVmlld01vZGVTYWdhIiwiaGFuZGxlVG9nZ2xlU2hvcEZpbHRlclNhZ2EiLCJiaW5kTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwicmVxdWlyZSIsImFwcGx5TWlkZGxld2FyZSIsIm1ha2VTdG9yZSIsImNvbnRleHQiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJvb3RSZWR1Y2VyIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJHRVRfV0lTSExJU1RfTElTVCIsIkdFVF9XSVNITElTVF9MSVNUX1NVQ0NFU1MiLCJHRVRfV0lTSExJU1RfTElTVF9FUlJPUiIsIkFERF9JVEVNX1dJU0hMSVNIIiwiUkVNT1ZFX0lURU1fV0lTSExJU0giLCJVUERBVEVfV0lTSExJU0hfTElTVCIsIlVQREFURV9XSVNITElTSF9MSVNUX1NVQ0NFU1MiLCJDTEVBUl9XSVNITElTSF9MSVNUIiwiZ2V0V2lzaGxpc3RMaXN0U3VjY2VzcyIsImFkZEl0ZW1Ub1dpc2hsaXN0IiwicmVtb3ZlV2lzaGxpc3RJdGVtIiwiY2xlYXJXaXNobGlzdCIsInVwZGF0ZVdpc2hsaXN0TGlzdFN1Y2Nlc3MiLCJpbml0U3RhdGUiLCJnZXRXaXNobGlzdExpc3RTYWdhIiwiZ2V0V2lzaExpc3RGcm9tQ29va2llcyIsImFkZEl0ZW1Ub1dpc2hsaXN0U2FnYSIsIndpc2hsaXN0SXRlbXMiLCJhZGRJdGVtVG9XaXNobGlzdEhlbHBlciIsInJlbW92ZUl0ZW1XaXNobGlzdFNhZ2EiLCJyZW1vdmVJdGVtRnJvbVdpc2hsaXN0IiwiY2xlYXJXaXNobGlzdExpc3RTYWdhIiwid2lzaGxpc3RUb3RhbCIsInN0aWNreUhlYWRlciIsIm51bWJlciIsIndpbmRvdyIsInBhZ2VYT2Zmc2V0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiYm9keSIsImhlYWRlciIsInJlbW92ZSIsInN0aWNreUhlYWRlck1vZGlsZSIsImdlbmVyYXRlVGVtcEFycmF5IiwibWF4SXRlbXMiLCJyZXN1bHQiLCJpIiwiY2FsY3VsYXRlQW1vdW50Iiwib2JqIiwidmFsdWVzIiwicmVkdWNlIiwiYWNjIiwicHJpY2UiLCJ0b0ZpeGVkIiwiY29va2llcyIsImdldENhcnRJdGVtc0hlbHBlciIsInF1ZXJpZXMiLCJmb3JFYWNoIiwiZ2V0V2lzaExpc3RJdGVtc0hlbHBlciIsInVwZGF0ZUNhcnRUb0Nvb2tpZXMiLCJwYXRoIiwiZXhwaXJlcyIsInVwZGF0ZVdpc2hsaXN0VG9Db29raWVzIiwiY29va2llQ2FydCIsImNvb2tpZVdpc2hsaXN0IiwidW5kZWZpbmVkIiwic2VsZWN0ZWRJdGVtIiwiZmluZEluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7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SyxHQUFHeUosUUFBUSxDQUFDMEYsU0FBVCxDQUFvQmpQLElBQUQsSUFBVUEsSUFBSSxLQUFLMkIsT0FBdEMsQ0FBZDtBQUNBeEYsV0FBTyxDQUFDbUcsR0FBUixDQUFZO0FBQUV4QztBQUFGLEtBQVo7QUFDQXlKLFlBQVEsQ0FBQ0gsTUFBVCxDQUFnQnRKLEtBQWhCLEVBQXVCLENBQXZCO0FBQ0EzRCxXQUFPLENBQUNtRyxHQUFSLENBQVk7QUFBRWlIO0FBQUYsS0FBWjtBQUNBcUYsMkJBQXVCLENBQUNyRixRQUFELENBQXZCO0FBQ0EsV0FBT0EsUUFBUDtBQUNIO0FBQ0osQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNMRCxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw0RTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vKipcbiAqIEFsbCBkZWJ1ZyBsb2dzIGFyZSByZW1vdmVkIG9uIGJ1aWxkXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5cbi8vIHVzaW5nIGxldCBpbnN0ZWFkIG9mIGNvbnN0LFxuLy8gZXhwZXJpbWVudGluZyB3aXRoIEVTMjAxNSBidW5kbGUgd2hpY2ggZ2V0cyBhIGJpdCBzbWFsbGVyIHdoZW4gdXNpbmcgbGV0IG92ZXIgY29uc3QuXG5sZXQgQ09MTEFQU0VEID0gJ2NvbGxhcHNlZCc7XG5sZXQgQ09MTEFQU0lORyA9ICdjb2xsYXBzaW5nJztcbmxldCBFWFBBTkRJTkcgPSAnZXhwYW5kaW5nJztcbmxldCBFWFBBTkRFRCA9ICdleHBhbmRlZCc7XG5cbmxldCBkZWZhdWx0Q2xhc3NOYW1lID0gJ2NvbGxhcHNlLWNzcy10cmFuc2l0aW9uJztcbmxldCBkZWZhdWx0RWxlbWVudFR5cGUgPSAnZGl2JztcbmxldCBkZWZhdWx0Q29sbGFwc2VIZWlnaHQgPSAnMHB4JztcblxuLyoqXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZnVuY3Rpb24gbmV4dEZyYW1lKGNhbGxiYWNrKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9zZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTsgLy8gTk9UIHVzZWQgYmVjYXVzZSBjYW4gYmUganVtcHkgaWYgY2xpY2stc3BhbW1pbmcuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7IC8vIFRoaXMgaXMgdXNlZC5cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gU1BDb2xsYXBzZSh7XG4gICAgY2hpbGRyZW4sXG4gICAgdHJhbnNpdGlvbixcbiAgICBzdHlsZSxcbiAgICByZW5kZXIsXG4gICAgZWxlbWVudFR5cGUgPSBkZWZhdWx0RWxlbWVudFR5cGUsXG4gICAgaXNPcGVuLFxuICAgIGNvbGxhcHNlSGVpZ2h0ID0gZGVmYXVsdENvbGxhcHNlSGVpZ2h0LFxuICAgIG9uSW5pdCxcbiAgICBvbkNoYW5nZSxcbiAgICBjbGFzc05hbWUgPSBkZWZhdWx0Q2xhc3NOYW1lLFxuICAgIGFkZFN0YXRlLFxuICAgIG5vQW5pbSxcbiAgICBvdmVyZmxvd09uRXhwYW5kZWQsXG4gICAgLi4ucmVzdFxufSkge1xuICAgIGxldCBnZXRDb2xsYXBzZWRWaXNpYmlsaXR5ID0gKCkgPT4gKGNvbGxhcHNlSGVpZ2h0ID09PSAnMHB4JyA/ICdoaWRkZW4nIDogJycpO1xuXG4gICAgbGV0IFtfXywgZm9yY2VVcGRhdGVdID0gdXNlUmVkdWNlcigoXykgPT4gXyArIDEsIDApO1xuXG4gICAgbGV0IGVsZW1lbnRSZWYgPSB1c2VSZWYoKTtcbiAgICBsZXQgW2NhbGxiYWNrVGljaywgc2V0Q2FsbGJhY2tUaWNrXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgLy8gQXZvaWRpbmcgc2V0U3RhdGUgdG8gY29udHJvbCB3aGVuIHN0dWZmIGFyZSB1cGRhdGVkLlxuICAgIC8vIE1pZ2h0IG5vdCBiZSBuZWVkZWQuXG4gICAgbGV0IHN0YXRlID0gdXNlUmVmKHtcbiAgICAgICAgY29sbGFwc2U6IGlzT3BlbiA/IEVYUEFOREVEIDogQ09MTEFQU0VELFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgaGVpZ2h0OiBpc09wZW4gPyAnJyA6IGNvbGxhcHNlSGVpZ2h0LFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaXNPcGVuID8gJycgOiBnZXRDb2xsYXBzZWRWaXNpYmlsaXR5KCksXG4gICAgICAgIH0sXG4gICAgfSkuY3VycmVudDtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIEludm9rZSBjYWxsYmFjayB3aGVuIGRhdGEgYXJlIHVwZGF0ZWQsIHVzZSBFZmZlY3QgdG8gc3luYyBzdGF0ZS5cbiAgICAgICAgY2FsbGJhY2tUaWNrICYmIG9uQ2FsbGJhY2sob25DaGFuZ2UpO1xuICAgIH0sIFtjYWxsYmFja1RpY2tdKTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBsZXQgb25DYWxsYmFjayA9IChjYWxsYmFjaywgcGFyYW1zID0ge30pID0+IHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayh7IHN0YXRlOiBzdGF0ZS5jb2xsYXBzZSwgc3R5bGU6IHN0YXRlLnN0eWxlLCAuLi5wYXJhbXMgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2V0Q29sbGFwc2VkKCkge1xuICAgICAgICBpZiAoIWVsZW1lbnRSZWYuY3VycmVudCkgcmV0dXJuOyAvLyBtaWdodCBiZSByZWR1bmRhbnRcblxuICAgICAgICAvLyBVcGRhdGUgc3RhdGVcbiAgICAgICAgc3RhdGUuY29sbGFwc2UgPSBDT0xMQVBTRUQ7XG5cbiAgICAgICAgc3RhdGUuc3R5bGUgPSB7XG4gICAgICAgICAgICBoZWlnaHQ6IGNvbGxhcHNlSGVpZ2h0LFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogZ2V0Q29sbGFwc2VkVmlzaWJpbGl0eSgpLFxuICAgICAgICB9O1xuICAgICAgICBmb3JjZVVwZGF0ZSgpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q2FsbGJhY2tUaWNrKERhdGUubm93KSwgMCk7IC8vIGNhbGxiYWNrIGFuZCByZS1yZW5kZXJcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDb2xsYXBzaW5nKCkge1xuICAgICAgICBpZiAoIWVsZW1lbnRSZWYuY3VycmVudCkgcmV0dXJuOyAvLyBtaWdodCBiZSByZWR1bmRhbnRcblxuICAgICAgICBpZiAobm9BbmltKSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0Q29sbGFwc2VkKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgc3RhdGVcbiAgICAgICAgc3RhdGUuY29sbGFwc2UgPSBDT0xMQVBTSU5HO1xuXG4gICAgICAgIHN0YXRlLnN0eWxlID0ge1xuICAgICAgICAgICAgaGVpZ2h0OiBnZXRFbGVtZW50SGVpZ2h0KCksXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiAnJyxcbiAgICAgICAgfTtcbiAgICAgICAgZm9yY2VVcGRhdGUoKTtcblxuICAgICAgICBuZXh0RnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50UmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5jb2xsYXBzZSAhPT0gQ09MTEFQU0lORykgcmV0dXJuO1xuXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNvbGxhcHNlSGVpZ2h0LFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICcnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vZm9yY2VVcGRhdGUoKTtcblxuICAgICAgICAgICAgc2V0Q2FsbGJhY2tUaWNrKERhdGUubm93KTsgLy8gY2FsbGJhY2sgYW5kIHJlLXJlbmRlclxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRFeHBhbmRpbmcoKSB7XG4gICAgICAgIGlmICghZWxlbWVudFJlZi5jdXJyZW50KSByZXR1cm47IC8vIG1pZ2h0IGJlIHJlZHVuZGFudFxuXG4gICAgICAgIGlmIChub0FuaW0pIHtcbiAgICAgICAgICAgIHJldHVybiBzZXRFeHBhbmRlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRldGF0ZVxuICAgICAgICBzdGF0ZS5jb2xsYXBzZSA9IEVYUEFORElORztcblxuICAgICAgICBuZXh0RnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50UmVmLmN1cnJlbnQpIHJldHVybjsgLy8gbWlnaHQgYmUgcmVkdW5kYW50XG4gICAgICAgICAgICBpZiAoc3RhdGUuY29sbGFwc2UgIT09IEVYUEFORElORykgcmV0dXJuO1xuXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGdldEVsZW1lbnRIZWlnaHQoKSxcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAnJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBmb3JjZVVwZGF0ZSgpO1xuXG4gICAgICAgICAgICBzZXRDYWxsYmFja1RpY2soRGF0ZS5ub3cpOyAvLyBjYWxsYmFjayBhbmQgcmUtcmVuZGVyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEV4cGFuZGVkKCkge1xuICAgICAgICBpZiAoIWVsZW1lbnRSZWYuY3VycmVudCkgcmV0dXJuOyAvLyBtaWdodCBiZSByZWR1bmRhbnRcblxuICAgICAgICAvLyBVcGRhdGUgc3RhdGVcbiAgICAgICAgc3RhdGUuY29sbGFwc2UgPSBFWFBBTkRFRDtcblxuICAgICAgICBzdGF0ZS5zdHlsZSA9IHtcbiAgICAgICAgICAgIGhlaWdodDogJycsXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiAnJyxcbiAgICAgICAgfTtcbiAgICAgICAgZm9yY2VVcGRhdGUoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldENhbGxiYWNrVGljayhEYXRlLm5vdyksIDApOyAvLyBjYWxsYmFjayBhbmQgcmUtcmVuZGVyXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RWxlbWVudEhlaWdodCgpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gYCR7ZWxlbWVudFJlZi5jdXJyZW50LnNjcm9sbEhlaWdodH1weGA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKHsgdGFyZ2V0LCBwcm9wZXJ0eU5hbWUgfSkge1xuICAgICAgICBpZiAodGFyZ2V0ID09PSBlbGVtZW50UmVmLmN1cnJlbnQgJiYgcHJvcGVydHlOYW1lID09PSAnaGVpZ2h0Jykge1xuICAgICAgICAgICAgbGV0IHN0eWxlSGVpZ2h0ID0gdGFyZ2V0LnN0eWxlLmhlaWdodDtcblxuICAgICAgICAgICAgc3dpdGNoIChzdGF0ZS5jb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgRVhQQU5ESU5HOlxuICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVIZWlnaHQgPT09ICcnIHx8IHN0eWxlSGVpZ2h0ID09PSBjb2xsYXBzZUhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgc3RhbGUsIGEgbmV3ZXIgZXZlbnQgaGFzIGhhcHBlbmVkIGJlZm9yZSB0aGlzIGNvdWxkIGV4ZWN1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihgb25UcmFuc2l0aW9uRW5kIGhlaWdodCB1bmV4cGVjdGVkICR7c3R5bGVIZWlnaHR9YCwgJ2lnbm9yZSBzZXRFeHBhbmRlZCcpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHNldEV4cGFuZGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQ09MTEFQU0lORzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlSGVpZ2h0ID09PSAnJyB8fCBzdHlsZUhlaWdodCAhPT0gY29sbGFwc2VIZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHN0YWxlLCBhIG5ld2VyIGV2ZW50IGhhcyBoYXBwZW5lZCBiZWZvcmUgdGhpcyBjb3VsZCBleGVjdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYG9uVHJhbnNpdGlvbkVuZCBoZWlnaHQgdW5leHBlY3RlZCAke3N0eWxlSGVpZ2h0fWAsICdpZ25vcmUgc2V0Q29sbGFwc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Ugc2V0Q29sbGFwc2VkKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignSWdub3JlZCBpbiBvblRyYW5zaXRpb25FbmQnLCBzdGF0ZS5jb2xsYXBzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICBsZXQgZGlkT3BlbiA9IHN0YXRlLmNvbGxhcHNlID09PSBFWFBBTkRFRCB8fCBzdGF0ZS5jb2xsYXBzZSA9PT0gRVhQQU5ESU5HO1xuXG4gICAgaWYgKCFkaWRPcGVuICYmIGlzT3Blbikgc2V0RXhwYW5kaW5nKCk7XG5cbiAgICBpZiAoZGlkT3BlbiAmJiAhaXNPcGVuKSBzZXRDb2xsYXBzaW5nKCk7XG4gICAgLy8gRU5EIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuXG4gICAgbGV0IG92ZXJmbG93ID0gc3RhdGUuY29sbGFwc2UgPT09IEVYUEFOREVEICYmIG92ZXJmbG93T25FeHBhbmRlZCA/ICcnIDogJ2hpZGRlbic7XG5cbiAgICBsZXQgY29tcHV0ZWRTdHlsZSA9IHtcbiAgICAgICAgb3ZlcmZsb3csXG4gICAgICAgIHRyYW5zaXRpb24sXG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICAuLi5zdGF0ZS5zdHlsZSxcbiAgICB9O1xuICAgIGxldCBFbGVtZW50VHlwZSA9IGVsZW1lbnRUeXBlO1xuXG4gICAgbGV0IGNhbGxiYWNrUmVmID0gdXNlQ2FsbGJhY2soXG4gICAgICAgIChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRSZWYuY3VycmVudCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgb25DYWxsYmFjayhvbkluaXQsIHsgbm9kZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW2VsZW1lbnRUeXBlXVxuICAgICk7XG5cbiAgICBsZXQgY29sbGFwc2VDbGFzc05hbWUgPSBhZGRTdGF0ZSA/IGAke2NsYXNzTmFtZX0gLS1jLSR7c3RhdGUuY29sbGFwc2V9YCA6IGNsYXNzTmFtZTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxFbGVtZW50VHlwZVxuICAgICAgICAgICAgcmVmPXtjYWxsYmFja1JlZn1cbiAgICAgICAgICAgIHN0eWxlPXtjb21wdXRlZFN0eWxlfVxuICAgICAgICAgICAgb25UcmFuc2l0aW9uRW5kPXtvblRyYW5zaXRpb25FbmR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NvbGxhcHNlQ2xhc3NOYW1lfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICAgIHt0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/IGNoaWxkcmVuKHN0YXRlLmNvbGxhcHNlKVxuICAgICAgICAgICAgICAgIDogdHlwZW9mIHJlbmRlciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgID8gcmVuZGVyKHN0YXRlLmNvbGxhcHNlKVxuICAgICAgICAgICAgICAgIDogY2hpbGRyZW59XG4gICAgICAgIDwvRWxlbWVudFR5cGU+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU1BDb2xsYXBzZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBMb2dvID0gKHsgdXJsID0gJy8nLCBsaWdodCB9KSA9PiB7XG4gICAgaWYgKGxpZ2h0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGluayBocmVmPXt1cmx9PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBzLWxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZy9sb2dvLXdoaXRlLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGluayBocmVmPXt1cmx9PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBzLWxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZy9sb2dvLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ287XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQmFja1RvcCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IE1vZHVsZUN1c3RvbUhlYWQgZnJvbSAnfi9jb21wb25lbnRzL2xheW91dHMvbW9kdWxlcy9Nb2R1bGVDdXN0b21IZWFkJztcbmltcG9ydCBIZWFkZXJNb2JpbGUgZnJvbSAnfi9jb21wb25lbnRzL3NoYXJlZC9tb2JpbGVzL0hlYWRlck1vYmlsZSc7XG5pbXBvcnQgeyBjb25uZWN0LCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGdldENhcnQgfSBmcm9tICd+L3N0b3JlL2NhcnQvYWN0aW9uJztcbmltcG9ydCBEcmF3ZXJEZWZhdWx0IGZyb20gJ34vY29tcG9uZW50cy9zaGFyZWQvZHJhd2Vycy9EcmF3ZXJEZWZhdWx0JztcbmltcG9ydCBNb2R1bGVEcmF3ZXJPdmVybGF5IGZyb20gJ34vY29tcG9uZW50cy9zaGFyZWQvZHJhd2Vycy9tb2R1bGVzL01vZHVsZURyYXdlck92ZXJsYXknO1xuaW1wb3J0IE1vZHVsZURyYXdlclNob3BPdmVybGF5IGZyb20gJ34vY29tcG9uZW50cy9zaGFyZWQvZHJhd2Vycy9tb2R1bGVzL01vZHVsZURyYXdlclNob3BPdmVybGF5JztcbmltcG9ydCB7IGdldFdpc2hsaXN0TGlzdCB9IGZyb20gJ34vc3RvcmUvd2lzaGxpc3QvYWN0aW9uJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHRvZ2dsZURyYXdlciB9IGZyb20gJ34vc3RvcmUvYXBwL2FjdGlvbic7XG5pbXBvcnQgeyBIdG1sIH0gZnJvbSAnbmV4dC9kb2N1bWVudCc7XG5cbmNvbnN0IE1hc3RlckxheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh0b2dnbGVEcmF3ZXIoZmFsc2UpKTtcbiAgICAgICAgfTtcbiAgICAgICAgZGlzcGF0Y2goZ2V0Q2FydCgpKTtcbiAgICAgICAgZGlzcGF0Y2goZ2V0V2lzaGxpc3RMaXN0KCkpO1xuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlQ29tcGxldGUpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX25leHQnKS5jbGFzc0xpc3QuYWRkKCdwcy1sb2FkZWQnKTtcbiAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVDb21wbGV0ZSk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1hcHAtcm9vdFwiPlxuICAgICAgICAgICAgPEhlYWRlck1vYmlsZSAvPlxuICAgICAgICAgICAgPE1vZHVsZUN1c3RvbUhlYWQgLz5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2FkZXItd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLXNlY3Rpb24gc2VjdGlvbi1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItc2VjdGlvbiBzZWN0aW9uLXJpZ2h0XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPERyYXdlckRlZmF1bHQgLz5cbiAgICAgICAgICAgIDxNb2R1bGVEcmF3ZXJPdmVybGF5IC8+XG4gICAgICAgICAgICA8TW9kdWxlRHJhd2VyU2hvcE92ZXJsYXkgLz5cbiAgICAgICAgICAgIDxCYWNrVG9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHMtYnRuLS1iYWNrdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tYXJyb3ctdXBcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L0JhY2tUb3A+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoTWFzdGVyTGF5b3V0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBNb2R1bGVDdXN0b21IZWFkID0gKCkgPT4gKFxuICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U3Vwcm8gLSBNaW5pbWFsaXN0IGVDb21tZXJjZSBSZWFjdCBUZW1wbGF0ZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL3N0YXRpYy9pbWcvZmF2aS5wbmdcIiAvPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJTdXBybyAtIE1pbmltYWxpc3QgZUNvbW1lcmNlIFJlYWN0IFRlbXBsYXRlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cInJlYWN0IHRlbXBsYXRlXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaHJlZj1cIi9zdGF0aWMvZm9udHMvTGluZWFyaWNvbnMvRm9udC9kZW1vLWZpbGVzL2RlbW8uY3NzXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiL3N0YXRpYy9mb250cy9mb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgICAgaHJlZj1cIi9zdGF0aWMvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgLz5cbiAgICA8L0hlYWQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVDdXN0b21IZWFkO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdG9nZ2xlRHJhd2VyIH0gZnJvbSAnfi9zdG9yZS9hcHAvYWN0aW9uJztcbmltcG9ydCBNb2R1bGVEcmF3ZXJNZW51U2lkZWJhciBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL2RyYXdlcnMvbW9kdWxlcy9Nb2R1bGVEcmF3ZXJNZW51U2lkZWJhcic7XG5cbmNvbnN0IERyYXdlckRlZmF1bHQgPSAoeyBpc0RyYXdlclNob3cgfSkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xvc2UoKSB7XG4gICAgICAgIGRpc3BhdGNoKHRvZ2dsZURyYXdlcihmYWxzZSkpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHMtZHJhd2VyICR7aXNEcmF3ZXJTaG93ID8gJ2FjdGl2ZScgOiAnJ31gfSByZWY9e3JlZn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWRyYXdlcl9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1kcmF3ZXJfX2Nsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsb3NlKCl9PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWNyb3NzXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWRyYXdlcl9fd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxNb2R1bGVEcmF3ZXJNZW51U2lkZWJhciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KChzdGF0ZSkgPT4gc3RhdGUuYXBwKShEcmF3ZXJEZWZhdWx0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVudUFjY29yZGlvbiBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL21lbnVzL01lbnVBY2NvcmRpb24nO1xuaW1wb3J0IHsgbWFpbl9tZW51IH0gZnJvbSAnfi9wdWJsaWMvc3RhdGljL2RhdGEvbWVudS5qc29uJztcblxuY29uc3QgTW9kdWxlRHJhd2VyTWVudVNpZGViYXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHMtbmF2aWdhdGlvbi0tc2lkZWJhclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1uYXZpZ2F0aW9uX190b3BcIj5cbiAgICAgICAgICAgICAgICA8TWVudUFjY29yZGlvblxuICAgICAgICAgICAgICAgICAgICBkYXRhPXttYWluX21lbnV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9XCJtZW51IG1lbnUtLWFjY29yZGlvblwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcy1uYXZpZ2F0aW9uX19ib3R0b21cIj5cbiAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj5Db250YWN0IFVzPC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA2OSBIYWxzZXkgU3QsIE55IDEwMDAyLCBOZXcgWW9yaywgVW5pdGVkIFN0YXRlc1xuICAgICAgICAgICAgICAgICAgICBzdXBwb3J0LmNlbnRlckB1bmVyby5jbyAoMDA5MSkgODU0NyA2MzI1MjFcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVEcmF3ZXJNZW51U2lkZWJhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBNb2R1bGVEcmF3ZXJPdmVybGF5ID0gKHsgaXNEcmF3ZXJTaG93IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Bwcy1zaXRlLW92ZXJsYXkgJHtpc0RyYXdlclNob3cgPyAnYWN0aXZlJyA6ICcnfWB9PjwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KChzdGF0ZSkgPT4gc3RhdGUuYXBwKShNb2R1bGVEcmF3ZXJPdmVybGF5KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBNb2R1bGVEcmF3ZXJTaG9wT3ZlcmxheSA9ICh7IGlzRmlsdGVyIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBzLXNpdGUtb3ZlcmxheSAke2lzRmlsdGVyID8gJ2FjdGl2ZScgOiAnJ31gfT48L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlLnNob3ApKE1vZHVsZURyYXdlclNob3BPdmVybGF5KTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdG9nZ2xlRHJhd2VyIH0gZnJvbSAnfi9zdG9yZS9hcHAvYWN0aW9uJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHsgZ2V0Q2FydEl0ZW1zRnJvbUNvb2tpZXMgfSBmcm9tICd+L3V0aWxpdGllcy9lY29tZXJjZS1oZWxwZXJzJztcblxuY29uc3QgTW9kdWxlSGVhZGVyQWN0aW9ucyA9ICh7IGNhcnQgfSkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBbY2FydFRvdGFsLCBzZXRDYXJ0VG90YWxdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgY2FydEl0ZW1zID0gZ2V0Q2FydEl0ZW1zRnJvbUNvb2tpZXMoKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZU9wZW5EcmF3ZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKHRvZ2dsZURyYXdlcih0cnVlKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2FjdWxhdGVDYXJ0QW1vdW50KCkge1xuICAgICAgICBpZiAoY2FydEl0ZW1zKSB7XG4gICAgICAgICAgICBzZXRDYXJ0VG90YWwoY2FydEl0ZW1zLml0ZW1zLmxlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm4gY2FydEl0ZW1zLml0ZW1zLmxlbmd0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGhhbmRsZUNhY3VsYXRlQ2FydEFtb3VudCgpO1xuICAgIH0sIFtjYXJ0SXRlbXNdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19hY3Rpb25zXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvbG9naW5cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkZXJfX3VzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi11c2VyXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcC93aXNobGlzdFwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRlcl9fZmF2b3JpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1oZWFydFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcC9zaG9wcGluZy1jYXJ0XCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGVyX19jYXJ0IHBzLXRvZ2dsZS0tc2lkZWJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWNhcnRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntjYXJ0VG90YWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXJfX21lbnUtdG9nZ2xlIHBzLXRvZ2dsZS0tc2lkZWJhclwiXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNuYXZpZ2F0aW9uLW1vYmlsZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZU9wZW5EcmF3ZXIoZSl9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbWVudVwiPjwvaT5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0KShNb2R1bGVIZWFkZXJBY3Rpb25zKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgU1BDb2xsYXBzZSBmcm9tICd+L2NvbXBvbmVudHMvZWxlbWVudHMvYmFzaWMvQ29sbGFwc2UnO1xuXG5jb25zdCBNZW51QWNjb3JkaW9uID0gKHsgZGF0YSwgY2xhc3NlcyA9ICdtZW51JyB9KSA9PiB7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZUFjY29yZGlvbiA9IChpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggIT09IGlzT3Blbikge1xuICAgICAgICAgICAgc2V0SXNPcGVuKGluZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldElzT3BlbihudWxsKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnN1Yk1lbnUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1lbnVfX2l0ZW0gbWVudV9faXRlbS0taGFzLWNoaWxkcmVuICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9PT0gaXRlbS5pZCB8fCBpdGVtLmFjdGl2ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYWN0aXZlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51X190b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlVG9nZ2xlQWNjb3JkaW9uKGl0ZW0uaWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVudV9fdGV4dFwiPntpdGVtLnRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmZWF0aGVyIGljb24gaWNvbi1jaGV2cm9uLWRvd24gbWVudV9faWNvbi0tZG93blwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTUENvbGxhcHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlPVwiZGl2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaWQgPT09IGlzT3BlbiB8fCBpdGVtLmFjdGl2ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17aXNPcGVuID8gJ2ZhbHNlJyA6ICd0cnVlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ViLW1lbnUtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUFjY29yZGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17aXRlbS5zdWJNZW51fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz1cInN1Yi1tZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NQQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5tZWdhQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWVudV9faXRlbSBtZW51X19pdGVtLS1oYXMtY2hpbGRyZW4gaGFzLW1lZ2EtbWVudSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc09wZW4gPT09IGl0ZW0uaWQgfHwgaXRlbS5hY3RpdmUgPT09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2FjdGl2ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudV9fdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZVRvZ2dsZUFjY29yZGlvbihpdGVtLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lbnVfX3RleHRcIj57aXRlbS50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmVhdGhlciBpY29uIGljb24tY2hldnJvbi1kb3duIG1lbnVfX2ljb24tLWRvd25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U1BDb2xsYXBzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZT1cImRpdlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3Blbj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlkID09PSBpc09wZW4gfHwgaXRlbS5hY3RpdmUgPT09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e2lzT3BlbiA/ICdmYWxzZScgOiAndHJ1ZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1Yi1tZW51LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVBY2NvcmRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2l0ZW0ubWVnYUNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPVwic3ViLW1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU1BDb2xsYXBzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLm1lZ2FJdGVtcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWVudV9faXRlbSBtZW51X19pdGVtLS1oYXMtY2hpbGRyZW4gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuID09PSBpdGVtLmlkIHx8IGl0ZW0uYWN0aXZlID09PSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdhY3RpdmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnVfX3RvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVUb2dnbGVBY2NvcmRpb24oaXRlbS5pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZW51X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5oZWFkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZlYXRoZXIgaWNvbiBpY29uLWNoZXZyb24tZG93biBtZW51X19pY29uLS1kb3duXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNQQ29sbGFwc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU9XCJkaXZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc09wZW49e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pZCA9PT0gaXNPcGVuIHx8IGl0ZW0uYWN0aXZlID09PSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXtpc09wZW4gPyAnZmFsc2UnIDogJ3RydWUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWItbWVudS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51QWNjb3JkaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtpdGVtLm1lZ2FJdGVtc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9XCJzdWItbWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TUENvbGxhcHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudV9fdGl0bGVcIiBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS50ZXh0fSBjbGFzc05hbWU9XCJtZW51X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0udXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lbnVfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51QWNjb3JkaW9uO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2dvIGZyb20gJ34vY29tcG9uZW50cy9lbGVtZW50cy9iYXNpYy9Mb2dvJztcbmltcG9ydCB7IHRvZ2dsZURyYXdlciB9IGZyb20gJ34vc3RvcmUvYXBwL2FjdGlvbic7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHN0aWNreUhlYWRlck1vZGlsZSB9IGZyb20gJ34vdXRpbGl0aWVzL2NvbW1vbi1oZWxwZXJzJztcbmltcG9ydCBNb2R1bGVIZWFkZXJBY3Rpb25zIGZyb20gJ34vY29tcG9uZW50cy9zaGFyZWQvaGVhZGVycy9tb2R1bGVzL01vZHVsZUhlYWRlckFjdGlvbnMnO1xuXG5jb25zdCBIZWFkZXJNb2JpbGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN0aWNreUhlYWRlck1vZGlsZSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyIGhlYWRlci0tbW9iaWxlXCJcbiAgICAgICAgICAgIGRhdGEtc3RpY2t5PVwidHJ1ZVwiXG4gICAgICAgICAgICBpZD1cImhlYWRlci1zdGlja3ktbW9iaWxlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3JpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkZXJfX3NlYXJjaC1taW5pXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbWFnbmlmaWVyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPE1vZHVsZUhlYWRlckFjdGlvbnMgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyTW9iaWxlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSc7XG5pbXBvcnQgTWFzdGVyTGF5b3V0IGZyb20gJ34vY29tcG9uZW50cy9sYXlvdXRzL01hc3RlckxheW91dCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBDb29raWVzUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jb21wYWN0Lm1pbi5jc3MnO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MnO1xuaW1wb3J0ICd+L3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJ34vc2Nzcy9ob21lLWRlZmF1bHQuc2Nzcyc7XG5pbXBvcnQgJ34vc2Nzcy9ob21lLWJveGVkLnNjc3MnO1xuaW1wb3J0ICd+L3Njc3MvaG9tZS1jbGFzc2ljLnNjc3MnO1xuaW1wb3J0ICd+L3Njc3MvaG9tZS1jYXRlZ29yaWVzLnNjc3MnO1xuaW1wb3J0ICd+L3Njc3MvaG9tZS1iZXN0LXNlbGxpbmcuc2Nzcyc7XG5pbXBvcnQgJ34vc2Nzcy9ob21lLW1vZGVybS5zY3NzJztcbmltcG9ydCAnfi9zY3NzL2hvbWUtc2ltcGxlLnNjc3MnO1xuaW1wb3J0ICd+L3Njc3Mvc3Vwcm8tcmVhY3Quc2Nzcyc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fbmV4dCcpLmNsYXNzTGlzdC5hZGQoJ3BzLWxvYWRlZCcpO1xuICAgICAgICB9LCAxMDApO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZ2V0TGF5b3V0ID1cbiAgICAgICAgQ29tcG9uZW50LmdldExheW91dCB8fCAoKHBhZ2UpID0+IDxNYXN0ZXJMYXlvdXQgY2hpbGRyZW49e3BhZ2V9IC8+KTtcbiAgICByZXR1cm4gZ2V0TGF5b3V0KFxuICAgICAgICA8Q29va2llc1Byb3ZpZGVyPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0Nvb2tpZXNQcm92aWRlcj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApO1xuIiwiaW1wb3J0IFJlcG9zaXRvcnksIHsgYmFzZVVybFByb2R1Y3QsIHNlcmlhbGl6ZVF1ZXJ5IH0gZnJvbSAnLi9SZXBvc2l0b3J5JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvdGFsUmVjb3JkcygpIHtcbiAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoYCR7YmFzZVVybFByb2R1Y3R9L3Byb2R1Y3RzL2NvdW50YClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XG4gICAgcmV0dXJuIHJlcG9uc2U7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0J5SWRzKHBheWxvYWQpIHtcbiAgICBjb25zdCBlbmRQb2ludCA9IGAke2Jhc2VVcmxQcm9kdWN0fS9wcm9kdWN0cz8ke3BheWxvYWR9YDtcbiAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoZW5kUG9pbnQpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpdGVtczogcmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgICAgICB0b3RhbEl0ZW1zOiByZXNwb25zZS5kYXRhLmxlbmd0aCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pXG5cbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XG4gICAgcmV0dXJuIHJlcG9uc2U7XG59XG5cbmNsYXNzIFByb2R1Y3RSZXBvc2l0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHJvZHVjdHMocGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChcbiAgICAgICAgICAgIGAke2Jhc2VVcmxQcm9kdWN0fS9wcm9kdWN0cz8ke3NlcmlhbGl6ZVF1ZXJ5KHBhcmFtcyl9YFxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogcmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgdG90YWxJdGVtczogcmVzcG9uc2UuZGF0YS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xuICAgICAgICByZXR1cm4gcmVwb25zZTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQcm9kdWN0c0J5SWQocGF5bG9hZCkge1xuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoXG4gICAgICAgICAgICBgJHtiYXNlVXJsUHJvZHVjdH0vcHJvZHVjdHMvJHtwYXlsb2FkfWBcbiAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XG4gICAgICAgIHJldHVybiByZXBvbnNlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFByb2R1Y3RDYXRlZ29yaWVzKCkge1xuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoXG4gICAgICAgICAgICBgJHtiYXNlVXJsUHJvZHVjdH0vcHJvZHVjdC1jYXRlZ29yaWVzYFxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiAoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH0pKTtcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHJkdWN0Q2F0ZWdvcnlCeVNsdWcocGF5bG9hZCkge1xuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoXG4gICAgICAgICAgICBgJHtiYXNlVXJsUHJvZHVjdH0vcHJvZHVjdC1jYXRlZ29yaWVzP3NsdWc9JHtwYXlsb2FkfWBcbiAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHJlc3BvbnNlLmRhdGFbMF0ucHJvZHVjdHMsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXBvbnNlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFByb2R1Y3RzQnlQcmljZVJhbmdlKHBheWxvYWQpIHtcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KFxuICAgICAgICAgICAgYCR7YmFzZVVybFByb2R1Y3R9L3Byb2R1Y3RzPyR7c2VyaWFsaXplUXVlcnkocGF5bG9hZCl9YFxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiAoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH0pKTtcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJvZHVjdFJlcG9zaXRvcnkoKTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmNvbnN0IGJhc2VEb21haW4gPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNzBcIjtcbmV4cG9ydCBjb25zdCB3cCA9IFwiaHR0cHM6Ly93cC5ub3VodG1sNS5jb21cIjtcbmV4cG9ydCBjb25zdCBiYXNlVXJsUHJvZHVjdCA9IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3MFwiO1xuXG5leHBvcnQgY29uc3QgY3VzdG9tSGVhZGVycyA9IHtcbiAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbn07XG5cbmV4cG9ydCBjb25zdCBiYXNlVXJsID0gYCR7YmFzZURvbWFpbn1gO1xuXG5leHBvcnQgZGVmYXVsdCBheGlvcy5jcmVhdGUoe1xuICBiYXNlVXJsLFxuICBoZWFkZXJzOiBjdXN0b21IZWFkZXJzLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzZXJpYWxpemVRdWVyeSA9IChxdWVyeSkgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMocXVlcnkpXG4gICAgLm1hcChcbiAgICAgIChrZXkpID0+IGAke2VuY29kZVVSSUNvbXBvbmVudChrZXkpfT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeVtrZXldKX1gXG4gICAgKVxuICAgIC5qb2luKFwiJlwiKTtcbn07XG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XG4gICAgVE9HR0xFX1NFQVJDSEJPWDogJ1RPR0dMRV9TRUFSQ0hCT1gnLFxuICAgIFRPR0dMRV9TRUFSQ0hCT1hfU1VDQ0VTUzogJ1RPR0dMRV9TRUFSQ0hCT1hfU1VDQ0VTUycsXG5cbiAgICBUT0dHTEVfRFJBV0VSOiAnVE9HR0xFX0RSQVdFUicsXG4gICAgVE9HR0xFX0RSQVdFUl9TVUNDRVNTOiAnVE9HR0xFX0RSQVdFUl9TVUNDRVNTJyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVTZWFyY2hCb3gocGF5bG9hZCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlRPR0dMRV9TRUFSQ0hCT1gsIHBheWxvYWQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVNlYXJjaEJveFN1Y2Nlc3MocGF5bG9hZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlRPR0dMRV9TRUFSQ0hCT1hfU1VDQ0VTUyxcbiAgICAgICAgcGF5bG9hZCxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRHJhd2VyKHBheWxvYWQpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5UT0dHTEVfRFJBV0VSLCBwYXlsb2FkIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVEcmF3ZXJTdWNjZXNzKHBheWxvYWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5UT0dHTEVfRFJBV0VSX1NVQ0NFU1MsXG4gICAgICAgIHBheWxvYWQsXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGlzU2VhcmNoQm94U2hvdzogZmFsc2UsXG4gICAgaXNEcmF3ZXJTaG93OiBmYWxzZSxcbn07XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5UT0dHTEVfU0VBUkNIQk9YX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzU2VhcmNoQm94U2hvdzogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLlRPR0dMRV9EUkFXRVJfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNEcmF3ZXJTaG93OiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiaW1wb3J0IHsgYWxsLCBwdXQsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBwb2x5ZmlsbCB9IGZyb20gJ2VzNi1wcm9taXNlJztcbmltcG9ydCB7XG4gICAgYWN0aW9uVHlwZXMsXG4gICAgdG9nZ2xlRHJhd2VyU3VjY2VzcyxcbiAgICB0b2dnbGVTZWFyY2hCb3hTdWNjZXNzLFxufSBmcm9tICd+L3N0b3JlL2FwcC9hY3Rpb24nO1xuXG5wb2x5ZmlsbCgpO1xuXG5mdW5jdGlvbiogdG9nZ2xlU2VhcmNoQm94U2FnYSh7IHBheWxvYWQgfSkge1xuICAgIHRyeSB7XG4gICAgICAgIHlpZWxkIHB1dCh0b2dnbGVTZWFyY2hCb3hTdWNjZXNzKHBheWxvYWQpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uKiB0b2dnbGVEcmF3ZXJTYWdhKHsgcGF5bG9hZCB9KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgeWllbGQgcHV0KHRvZ2dsZURyYXdlclN1Y2Nlc3MocGF5bG9hZCkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLlRPR0dMRV9TRUFSQ0hCT1gsIHRvZ2dsZVNlYXJjaEJveFNhZ2EpXSk7XG4gICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuVE9HR0xFX0RSQVdFUiwgdG9nZ2xlRHJhd2VyU2FnYSldKTtcbn1cbiIsImV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcbiAgICBHRVRfQ0FSVDogJ0dFVF9DQVJUJyxcbiAgICBHRVRfQ0FSVF9TVUNDRVNTOiAnR0VUX0NBUlRfU1VDQ0VTUycsXG4gICAgR0VUX0NBUlRfRVJST1I6ICdHRVRfQ0FSVF9FUlJPUicsXG5cbiAgICBHRVRfQ0FSVF9UT1RBTF9RVUFOVElUWTogJ0dFVF9DQVJUX1RPVEFMX1FVQU5USVRZJyxcbiAgICBHRVRfQ0FSVF9UT1RBTF9RVUFOVElUWV9TVUNDRVNTOiAnR0VUX0NBUlRfVE9UQUxfUVVBTlRJVFlfU1VDQ0VTUycsXG5cbiAgICBBRERfSVRFTTogJ0FERF9JVEVNJyxcbiAgICBSRU1PVkVfSVRFTTogJ1JFTU9WRV9JVEVNJyxcblxuICAgIENMRUFSX0NBUlQ6ICdDTEVBUl9DQVJUJyxcbiAgICBDTEVBUl9DQVJUX1NVQ0NFU1M6ICdDTEVBUl9DQVJUX1NVQ0NFU1MnLFxuICAgIENMRUFSX0NBUlRfRVJST1I6ICdDTEVBUl9DQVJUX0VSUk9SJyxcblxuICAgIElOQ1JFQVNFX1FUWTogJ0lOQ1JFQVNFX1FUWScsXG4gICAgSU5DUkVBU0VfUVRZX1NVQ0NFU1M6ICdJTkNSRUFTRV9RVFlfU1VDQ0VTUycsXG4gICAgSU5DUkVBU0VfUVRZX0VSUk9SOiAnSU5DUkVBU0VfUVRZX0VSUk9SJyxcblxuICAgIERFQ1JFQVNFX1FUWTogJ0RFQ1JFQVNFX1FUWScsXG4gICAgVVBEQVRFX0NBUlQ6ICdVUERBVEVfQ0FSVCcsXG5cbiAgICBVUERBVEVfQ0FSVF9TVUNDRVNTOiAnVVBEQVRFX0NBUlRfU1VDQ0VTUycsXG4gICAgVVBEQVRFX0NBUlRfRVJST1I6ICdVUERBVEVfQ0FSVF9FUlJPUicsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FydCgpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQ0FSVCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FydFN1Y2Nlc3MoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0NBUlRfU1VDQ0VTUyxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FydEVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0NBUlRfRVJST1IsXG4gICAgICAgIGVycm9yLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRJdGVtKHByb2R1Y3QpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5BRERfSVRFTSwgcHJvZHVjdCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSXRlbShwcm9kdWN0KSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUkVNT1ZFX0lURU0sIHByb2R1Y3QgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluY3JlYXNlSXRlbVF0eShwcm9kdWN0KSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuSU5DUkVBU0VfUVRZLCBwcm9kdWN0IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNyZWFzZUl0ZW1RdHkocHJvZHVjdCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkRFQ1JFQVNFX1FUWSwgcHJvZHVjdCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2FydFN1Y2Nlc3MocGF5bG9hZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlVQREFURV9DQVJUX1NVQ0NFU1MsXG4gICAgICAgIHBheWxvYWQsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNhcnRFcnJvcihwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuVVBEQVRFX0NBUlRfRVJST1IsXG4gICAgICAgIHBheWxvYWQsXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaW5pdENhcnQgPSB7XG4gICAgY2FydDogbnVsbCxcbn07XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0Q2FydCwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkdFVF9DQVJUX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5VUERBVEVfQ0FSVF9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjYXJ0OiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuQ0xFQVJfQ0FSVF9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi57IGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydEl0ZW1zIH0sXG4gICAgICAgICAgICAgICAgLi4ueyBhbW91bnQ6IGFjdGlvbi5wYXlsb2FkLmFtb3VudCB9LFxuICAgICAgICAgICAgICAgIC4uLnsgY2FydFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0VG90YWwgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuR0VUX0NBUlRfRVJST1I6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIC4uLnsgZXJyb3I6IGFjdGlvbi5lcnJvciB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5VUERBVEVfQ0FSVF9FUlJPUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4ueyBlcnJvcjogYWN0aW9uLmVycm9yIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImltcG9ydCB7IGFsbCwgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQge1xuICAgIGFjdGlvblR5cGVzLFxuICAgIGdldENhcnRFcnJvcixcbiAgICB1cGRhdGVDYXJ0U3VjY2VzcyxcbiAgICB1cGRhdGVDYXJ0RXJyb3IsXG59IGZyb20gJy4vYWN0aW9uJztcbmltcG9ydCB7XG4gICAgYWRkSXRlbVRvQ2FydEhlbHBlcixcbiAgICBkZWNyZWFzZVF0eUNhcnRJdGVtSGVscGVyLFxuICAgIGdldENhcnRJdGVtc0Zyb21Db29raWVzLFxuICAgIGluY3JlYXNlUXR5Q2FydEl0ZW1IZWxwZXIsXG4gICAgcmVtb3ZlQ2FydEl0ZW1IZWxwZXIsXG59IGZyb20gJ34vdXRpbGl0aWVzL2Vjb21lcmNlLWhlbHBlcnMnO1xuXG5jb25zdCBtb2RhbFN1Y2Nlc3MgPSAodHlwZSkgPT4ge1xuICAgIG5vdGlmaWNhdGlvblt0eXBlXSh7XG4gICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIHByb2R1Y3QgaGFzIGJlZW4gYWRkZWQgdG8geW91ciBjYXJ0IScsXG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgIH0pO1xufTtcbmNvbnN0IG1vZGFsV2FybmluZyA9ICh0eXBlKSA9PiB7XG4gICAgbm90aWZpY2F0aW9uW3R5cGVdKHtcbiAgICAgICAgbWVzc2FnZTogJ1JlbW92ZSBBIEl0ZW0nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgcHJvZHVjdCBoYXMgYmVlbiByZW1vdmVkIGZyb20geW91ciBjYXJ0IScsXG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgIH0pO1xufTtcblxuZnVuY3Rpb24qIGdldENhcnRTYWdhKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IGdldENhcnRJdGVtc0Zyb21Db29raWVzKCk7XG4gICAgICAgIHlpZWxkIHB1dCh1cGRhdGVDYXJ0U3VjY2VzcyhjYXJ0SXRlbXMpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgeWllbGQgcHV0KGdldENhcnRFcnJvcihlcnIpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uKiBhZGRJdGVtU2FnYShwYXlsb2FkKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBwcm9kdWN0IH0gPSBwYXlsb2FkO1xuICAgICAgICBjb25zdCBjYXJ0SXRlbXMgPSBhZGRJdGVtVG9DYXJ0SGVscGVyKHByb2R1Y3QpO1xuICAgICAgICB5aWVsZCBwdXQodXBkYXRlQ2FydFN1Y2Nlc3MoY2FydEl0ZW1zKSk7XG4gICAgICAgIG1vZGFsU3VjY2Vzcygnc3VjY2VzcycpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB5aWVsZCBwdXQoZ2V0Q2FydEVycm9yKGVycikpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24qIHJlbW92ZUl0ZW1TYWdhKHBheWxvYWQpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IHByb2R1Y3QgfSA9IHBheWxvYWQ7XG5cbiAgICAgICAgY29uc3QgY2FydEl0ZW1zID0gcmVtb3ZlQ2FydEl0ZW1IZWxwZXIocHJvZHVjdCk7XG4gICAgICAgIHlpZWxkIHB1dCh1cGRhdGVDYXJ0U3VjY2VzcyhjYXJ0SXRlbXMpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgeWllbGQgcHV0KGdldENhcnRFcnJvcihlcnIpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uKiBpbmNyZWFzZVF0eVNhZ2EocGF5bG9hZCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgcHJvZHVjdCB9ID0gcGF5bG9hZDtcbiAgICAgICAgY29uc3QgY2FydEl0ZW1zID0gaW5jcmVhc2VRdHlDYXJ0SXRlbUhlbHBlcihwcm9kdWN0KTtcbiAgICAgICAgeWllbGQgcHV0KHVwZGF0ZUNhcnRTdWNjZXNzKGNhcnRJdGVtcykpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB5aWVsZCBwdXQoZ2V0Q2FydEVycm9yKGVycikpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24qIGRlY3JlYXNlSXRlbVF0eVNhZ2EocGF5bG9hZCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgcHJvZHVjdCB9ID0gcGF5bG9hZDtcbiAgICAgICAgY29uc3QgY2FydEl0ZW1zID0gZGVjcmVhc2VRdHlDYXJ0SXRlbUhlbHBlcihwcm9kdWN0KTtcbiAgICAgICAgeWllbGQgcHV0KHVwZGF0ZUNhcnRTdWNjZXNzKGNhcnRJdGVtcykpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB5aWVsZCBwdXQoZ2V0Q2FydEVycm9yKGVycikpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24qIGNsZWFyQ2FydFNhZ2EoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZW1wdHlDYXJ0ID0ge1xuICAgICAgICAgICAgY2FydEl0ZW1zOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgICB5aWVsZCBwdXQodXBkYXRlQ2FydFN1Y2Nlc3MoZW1wdHlDYXJ0KSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHlpZWxkIHB1dCh1cGRhdGVDYXJ0RXJyb3IoZXJyKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuR0VUX0NBUlQsIGdldENhcnRTYWdhKV0pO1xuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkFERF9JVEVNLCBhZGRJdGVtU2FnYSldKTtcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5SRU1PVkVfSVRFTSwgcmVtb3ZlSXRlbVNhZ2EpXSk7XG4gICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuSU5DUkVBU0VfUVRZLCBpbmNyZWFzZVF0eVNhZ2EpXSk7XG4gICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuREVDUkVBU0VfUVRZLCBkZWNyZWFzZUl0ZW1RdHlTYWdhKV0pO1xufVxuIiwiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xuICAgIEdFVF9DT01QQVJFX0xJU1Q6ICdHRVRfQ09NUEFSRV9MSVNUJyxcbiAgICBHRVRfQ09NUEFSRV9MSVNUX1NVQ0NFU1M6ICdHRVRfQ09NUEFSRV9MSVNUX1NVQ0NFU1MnLFxuICAgIEdFVF9DT01QQVJFX0xJU1RfRVJST1I6ICdHRVRfQ09NUEFSRV9MSVNUX0VSUk9SJyxcblxuICAgIEFERF9JVEVNX0NPTVBBUkU6ICdBRERfSVRFTV9DT01QQVJFJyxcbiAgICBSRU1PVkVfSVRFTV9DT01QQVJFOiAnUkVNT1ZFX0lURU1fQ09NUEFSRScsXG5cbiAgICBVUERBVEVfQ09NUEFSRV9MSVNUOiAnVVBEQVRFX0NPTVBBUkVfTElTVCcsXG4gICAgVVBEQVRFX0NPTVBBUkVfTElTVF9TVUNDRVNTOiAnVVBEQVRFX0NPTVBBUkVfTElTVF9TVUNDRVNTJyxcbiAgICBVUERBVEVfQ09NUEFSRV9MSVNUX0VSUk9SOiAnVVBEQVRFX0NPTVBBUkVfTElTVF9FUlJPUicsXG5cbiAgICBDTEVBUl9DT01QQVJFX0xJU1Q6ICdDTEVBUl9DT01QQVJFX0xJU1QnLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXBhcmVMaXN0KCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9DT01QQVJFX0xJU1QgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXBhcmVMaXN0U3VjY2VzcyhkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0NPTVBBUkVfTElTVF9TVUNDRVNTLFxuICAgICAgICBkYXRhLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRJdGVtVG9Db21wYXJlKHByb2R1Y3QpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5BRERfSVRFTV9DT01QQVJFLCBwcm9kdWN0IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDb21wYXJlSXRlbShwcm9kdWN0KSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUkVNT1ZFX0lURU1fQ09NUEFSRSwgcHJvZHVjdCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDb21wYXJlKCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkNMRUFSX0NBUlQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNvbXBhcmVMaXN0U3VjY2VzcyhwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuVVBEQVRFX0NPTVBBUkVfTElTVF9TVUNDRVNTLFxuICAgICAgICBwYXlsb2FkLFxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGluaXRDYXJ0ID0ge1xuICAgIGNvbXBhcmVJdGVtczogW10sXG4gICAgY29tcGFyZVRvdGFsOiAwLFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRDYXJ0LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuR0VUX0NPTVBBUkVfTElTVF9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi57IGNhcnQ6IGFjdGlvbi5kYXRhIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLlVQREFURV9DT01QQVJFX0xJU1RfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICAgICAgICBjb21wYXJlSXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNvbXBhcmVJdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGFyZVRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jb21wYXJlVG90YWwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuR0VUX0NPTVBBUkVfTElTVF9FUlJPUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4ueyBlcnJvcjogYWN0aW9uLmVycm9yIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImltcG9ydCB7IGFsbCwgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQge1xuICAgIGFjdGlvblR5cGVzLFxuICAgIGdldENvbXBhcmVMaXN0U3VjY2VzcyxcbiAgICB1cGRhdGVDb21wYXJlTGlzdFN1Y2Nlc3MsXG4gICAgYWRkSXRlbVN1Y2Nlc3MsXG59IGZyb20gJy4vYWN0aW9uJztcblxuY29uc3QgbW9kYWxTdWNjZXNzID0gdHlwZSA9PiB7XG4gICAgbm90aWZpY2F0aW9uW3R5cGVdKHtcbiAgICAgICAgbWVzc2FnZTogJ0FkZGVkIHRvIGNvbXBhcmUgbGlzdCEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgcHJvZHVjdCBoYXMgYmVlbiBhZGRlZCB0byBjb21wYXJlIGxpc3QhJyxcbiAgICB9KTtcbn07XG5cbmNvbnN0IG1vZGFsV2FybmluZyA9IHR5cGUgPT4ge1xuICAgIG5vdGlmaWNhdGlvblt0eXBlXSh7XG4gICAgICAgIG1lc3NhZ2U6ICdSZW1vdmVkIHRvIGNvbXBhcmUgbGlzdCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBwcm9kdWN0IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSBjb21wYXJlIGxpc3QhJyxcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uKiBnZXRDb21wYXJlTGlzdFNhZ2EoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbG9jYWxDb21wYXJlTGlzdCA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVyc2lzdDptYXJ0ZnVyeScpXG4gICAgICAgICkuY2FydDtcbiAgICAgICAgeWllbGQgcHV0KGdldENvbXBhcmVMaXN0U3VjY2Vzcyhsb2NhbENvbXBhcmVMaXN0KSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogYWRkSXRlbVNhZ2EocGF5bG9hZCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgcHJvZHVjdCB9ID0gcGF5bG9hZDtcbiAgICAgICAgbGV0IGxvY2FsQ29tcGFyZSA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwZXJzaXN0Om1hcnRmdXJ5JykpLmNvbXBhcmVcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgZXhpc3RJdGVtID0gbG9jYWxDb21wYXJlLmNvbXBhcmVJdGVtcy5maW5kKFxuICAgICAgICAgICAgaXRlbSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFleGlzdEl0ZW0pIHtcbiAgICAgICAgICAgIHByb2R1Y3QucXVhbnRpdHkgPSAxO1xuICAgICAgICAgICAgbG9jYWxDb21wYXJlLmNvbXBhcmVJdGVtcy5wdXNoKHByb2R1Y3QpO1xuICAgICAgICAgICAgbG9jYWxDb21wYXJlLmNvbXBhcmVUb3RhbCsrO1xuICAgICAgICAgICAgeWllbGQgcHV0KHVwZGF0ZUNvbXBhcmVMaXN0U3VjY2Vzcyhsb2NhbENvbXBhcmUpKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24qIHJlbW92ZUl0ZW1TYWdhKHBheWxvYWQpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IHByb2R1Y3QgfSA9IHBheWxvYWQ7XG4gICAgICAgIGxldCBsb2NhbENvbXBhcmUgPSBKU09OLnBhcnNlKFxuICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVyc2lzdDptYXJ0ZnVyeScpKS5jb21wYXJlXG4gICAgICAgICk7XG4gICAgICAgIGxldCBpbmRleCA9IGxvY2FsQ29tcGFyZS5jb21wYXJlSXRlbXMuaW5kZXhPZihwcm9kdWN0KTtcbiAgICAgICAgbG9jYWxDb21wYXJlLmNvbXBhcmVUb3RhbCA9IGxvY2FsQ29tcGFyZS5jb21wYXJlVG90YWwgLSAxO1xuICAgICAgICBsb2NhbENvbXBhcmUuY29tcGFyZUl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHlpZWxkIHB1dCh1cGRhdGVDb21wYXJlTGlzdFN1Y2Nlc3MobG9jYWxDb21wYXJlKSk7XG4gICAgICAgIG1vZGFsV2FybmluZygnd2FybmluZycpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24qIGNsZWFyQ29tcGFyZUxpc3RTYWdhKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGVtcHR5Q2FydCA9IHtcbiAgICAgICAgICAgIGNvbXBhcmVJdGVtczogW10sXG4gICAgICAgICAgICBjb21wYXJlVG90YWw6IDAsXG4gICAgICAgIH07XG4gICAgICAgIHlpZWxkIHB1dCh1cGRhdGVDb21wYXJlTGlzdFN1Y2Nlc3MoZW1wdHlDYXJ0KSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuR0VUX0NPTVBBUkVfTElTVCwgZ2V0Q29tcGFyZUxpc3RTYWdhKV0pO1xuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkFERF9JVEVNX0NPTVBBUkUsIGFkZEl0ZW1TYWdhKV0pO1xuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLlJFTU9WRV9JVEVNX0NPTVBBUkUsIHJlbW92ZUl0ZW1TYWdhKV0pO1xufVxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGNhcnQgZnJvbSAnLi9jYXJ0L3JlZHVjZXInO1xuaW1wb3J0IGNvbXBhcmUgZnJvbSAnLi9jb21wYXJlL3JlZHVjZXInO1xuaW1wb3J0IHdpc2hsaXN0IGZyb20gJy4vd2lzaGxpc3QvcmVkdWNlcic7XG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwL3JlZHVjZXInO1xuaW1wb3J0IHNob3AgZnJvbSAnLi9zaG9wL3JlZHVjZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGNhcnQsXG4gICAgY29tcGFyZSxcbiAgICB3aXNobGlzdCxcbiAgICBhcHAsXG4gICAgc2hvcCxcbn0pO1xuIiwiaW1wb3J0IHsgYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCBDYXJ0U2FnYSBmcm9tICcuL2NhcnQvc2FnYSc7XG5pbXBvcnQgQ29tcGFyZVNhZ2EgZnJvbSAnLi9jb21wYXJlL3NhZ2EnO1xuaW1wb3J0IFdpc2hsaXN0U2FnYSBmcm9tICcuL3dpc2hsaXN0L3NhZ2EnO1xuaW1wb3J0IEFwcFNhZ2EgZnJvbSAnLi9hcHAvc2FnYSc7XG5pbXBvcnQgU2hvcFNhZ2EgZnJvbSAnLi9zaG9wL3NhZ2EnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gICAgeWllbGQgYWxsKFtcbiAgICAgICAgQ2FydFNhZ2EoKSxcbiAgICAgICAgQ29tcGFyZVNhZ2EoKSxcbiAgICAgICAgV2lzaGxpc3RTYWdhKCksXG4gICAgICAgIEFwcFNhZ2EoKSxcbiAgICAgICAgU2hvcFNhZ2EoKSxcbiAgICBdKTtcbn1cbiIsImV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcbiAgICBDSEFOR0VfU0hPUF9HUklEX1ZJRVc6ICdDSEFOR0VfU0hPUF9HUklEX1ZJRVcnLFxuICAgIENIQU5HRV9TSE9QX0dSSURfVklFV19TVUNDRVNTOiAnQ0hBTkdFX1NIT1BfR1JJRF9WSUVXX1NVQ0NFU1MnLFxuICAgIFRPR0dMRV9TSE9QX0ZJTFRFUjogJ1RPR0dMRV9TSE9QX0ZJTFRFUicsXG4gICAgVE9HR0xFX1NIT1BfRklMVEVSX1NVQ0NFU1M6ICdUT0dHTEVfU0hPUF9GSUxURVJfU1VDQ0VTUycsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlU2hvcEdyaWRWaWV3KHBheWxvYWQpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5DSEFOR0VfU0hPUF9HUklEX1ZJRVcsIHBheWxvYWQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVNob3BHcmlkVmlld1N1Y2Nlc3MocGF5bG9hZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkNIQU5HRV9TSE9QX0dSSURfVklFV19TVUNDRVNTLFxuICAgICAgICBwYXlsb2FkLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVTaG9wRmlsdGVyKHBheWxvYWQpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5UT0dHTEVfU0hPUF9GSUxURVIsIHBheWxvYWQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVNob3BGaWx0ZXJTdWNjZXNzKHBheWxvYWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5UT0dHTEVfU0hPUF9GSUxURVJfU1VDQ0VTUyxcbiAgICAgICAgcGF5bG9hZCxcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgYWN0aW9uVHlwZXMgfSBmcm9tICcuL2FjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgaXNHcmlkVmlldzogdHJ1ZSxcbiAgICBpc0ZpbHRlcjogZmFsc2UsXG59O1xuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuQ0hBTkdFX1NIT1BfR1JJRF9WSUVXX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzR3JpZFZpZXc6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5UT0dHTEVfU0hPUF9GSUxURVJfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNGaWx0ZXI6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImltcG9ydCB7IGFsbCwgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgcG9seWZpbGwgfSBmcm9tICdlczYtcHJvbWlzZSc7XG5pbXBvcnQgeyBhY3Rpb25UeXBlcywgdG9nZ2xlU2hvcEZpbHRlclN1Y2Nlc3MgfSBmcm9tICd+L3N0b3JlL3Nob3AvYWN0aW9uJztcbmltcG9ydCB7IGNoYW5nZVNob3BHcmlkVmlld1N1Y2Nlc3MgfSBmcm9tICd+L3N0b3JlL3Nob3AvYWN0aW9uJztcblxucG9seWZpbGwoKTtcblxuZnVuY3Rpb24qIGhhbmRsZVRvZ2dsZVZpZXdNb2RlU2FnYSh7IHBheWxvYWQgfSkge1xuICAgIHRyeSB7XG4gICAgICAgIHlpZWxkIHB1dChjaGFuZ2VTaG9wR3JpZFZpZXdTdWNjZXNzKHBheWxvYWQpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uKiBoYW5kbGVUb2dnbGVTaG9wRmlsdGVyU2FnYSh7IHBheWxvYWQgfSkge1xuICAgIHRyeSB7XG4gICAgICAgIHlpZWxkIHB1dCh0b2dnbGVTaG9wRmlsdGVyU3VjY2VzcyhwYXlsb2FkKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gICAgeWllbGQgYWxsKFtcbiAgICAgICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkNIQU5HRV9TSE9QX0dSSURfVklFVywgaGFuZGxlVG9nZ2xlVmlld01vZGVTYWdhKSxcbiAgICAgICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLlRPR0dMRV9TSE9QX0ZJTFRFUiwgaGFuZGxlVG9nZ2xlU2hvcEZpbHRlclNhZ2EpLFxuICAgIF0pO1xufVxuIiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3Jvb3RSZWR1Y2VyJztcbmltcG9ydCByb290U2FnYSBmcm9tICcuL3Jvb3RTYWdhJztcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuXG5jb25zdCBiaW5kTWlkZGxld2FyZSA9IChtaWRkbGV3YXJlKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gPSByZXF1aXJlKCdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYWtlU3RvcmUgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBiaW5kTWlkZGxld2FyZShbc2FnYU1pZGRsZXdhcmVdKSk7XG5cbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XG5cbiAgICByZXR1cm4gc3RvcmU7XG59O1xuXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7IGRlYnVnOiBmYWxzZSB9KTtcbiIsImV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcbiAgICBHRVRfV0lTSExJU1RfTElTVDogJ0dFVF9XSVNITElTVF9MSVNUJyxcbiAgICBHRVRfV0lTSExJU1RfTElTVF9TVUNDRVNTOiAnR0VUX1dJU0hMSVNUX0xJU1RfU1VDQ0VTUycsXG4gICAgR0VUX1dJU0hMSVNUX0xJU1RfRVJST1I6ICdHRVRfV0lTSExJU1RfTElTVF9FUlJPUicsXG5cbiAgICBBRERfSVRFTV9XSVNITElTSDogJ0FERF9JVEVNX1dJU0hMSVNIJyxcbiAgICBSRU1PVkVfSVRFTV9XSVNITElTSDogJ1JFTU9WRV9JVEVNX1dJU0hMSVNIJyxcblxuICAgIFVQREFURV9XSVNITElTSF9MSVNUOiAnVVBEQVRFX1dJU0hMSVNIX0xJU1QnLFxuICAgIFVQREFURV9XSVNITElTSF9MSVNUX1NVQ0NFU1M6ICdVUERBVEVfV0lTSExJU0hfTElTVF9TVUNDRVNTJyxcblxuICAgIENMRUFSX1dJU0hMSVNIX0xJU1Q6ICdDTEVBUl9XSVNITElTSF9MSVNUJyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXaXNobGlzdExpc3QoKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuR0VUX1dJU0hMSVNUX0xJU1QgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdpc2hsaXN0TGlzdFN1Y2Nlc3MocGF5bG9hZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkdFVF9XSVNITElTVF9MSVNUX1NVQ0NFU1MsXG4gICAgICAgIHBheWxvYWQsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEl0ZW1Ub1dpc2hsaXN0KHByb2R1Y3QpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5BRERfSVRFTV9XSVNITElTSCwgcHJvZHVjdCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlV2lzaGxpc3RJdGVtKHByb2R1Y3QpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5SRU1PVkVfSVRFTV9XSVNITElTSCwgcHJvZHVjdCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJXaXNobGlzdCgpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5DTEVBUl9DQVJUIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVXaXNobGlzdExpc3RTdWNjZXNzKHBheWxvYWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5VUERBVEVfV0lTSExJU0hfTElTVF9TVUNDRVNTLFxuICAgICAgICBwYXlsb2FkLFxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgICB3aXNobGlzdDogbnVsbCxcbn07XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5HRVRfV0lTSExJU1RfTElTVF9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuVVBEQVRFX1dJU0hMSVNIX0xJU1RfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgd2lzaGxpc3Q6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJpbXBvcnQgeyBhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgYWN0aW9uVHlwZXMsIHVwZGF0ZVdpc2hsaXN0TGlzdFN1Y2Nlc3MgfSBmcm9tICcuL2FjdGlvbic7XG5pbXBvcnQge1xuICAgIGFkZEl0ZW1Ub1dpc2hsaXN0SGVscGVyLFxuICAgIGdldFdpc2hMaXN0RnJvbUNvb2tpZXMsXG4gICAgcmVtb3ZlQ2FydEl0ZW1IZWxwZXIsXG4gICAgcmVtb3ZlSXRlbUZyb21XaXNobGlzdCxcbn0gZnJvbSAnfi91dGlsaXRpZXMvZWNvbWVyY2UtaGVscGVycyc7XG5cbmNvbnN0IG1vZGFsU3VjY2VzcyA9ICh0eXBlKSA9PiB7XG4gICAgbm90aWZpY2F0aW9uW3R5cGVdKHtcbiAgICAgICAgbWVzc2FnZTogJ0FkZGVkIHRvIHdpc2hsaXNodCEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgcHJvZHVjdCBoYXMgYmVlbiBhZGRlZCB0byB3aXNobGlzdCEnLFxuICAgIH0pO1xufTtcblxuY29uc3QgbW9kYWxXYXJuaW5nID0gKHR5cGUpID0+IHtcbiAgICBub3RpZmljYXRpb25bdHlwZV0oe1xuICAgICAgICBtZXNzYWdlOiAnUmVtb3ZlZCBmcm9tIHdpc2hsaXN0JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIHByb2R1Y3QgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHdpc2hsaXN0IScsXG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiogZ2V0V2lzaGxpc3RMaXN0U2FnYSgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IGdldFdpc2hMaXN0RnJvbUNvb2tpZXMoKTtcbiAgICAgICAgeWllbGQgcHV0KHVwZGF0ZVdpc2hsaXN0TGlzdFN1Y2Nlc3MoaXRlbXMpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uKiBhZGRJdGVtVG9XaXNobGlzdFNhZ2EoeyBwcm9kdWN0IH0pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB3aXNobGlzdEl0ZW1zID0gYWRkSXRlbVRvV2lzaGxpc3RIZWxwZXIocHJvZHVjdCk7XG4gICAgICAgIHlpZWxkIHB1dCh1cGRhdGVXaXNobGlzdExpc3RTdWNjZXNzKHdpc2hsaXN0SXRlbXMpKTtcbiAgICAgICAgbW9kYWxTdWNjZXNzKCdzdWNjZXNzJyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogcmVtb3ZlSXRlbVdpc2hsaXN0U2FnYSh7IHByb2R1Y3QgfSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHdpc2hsaXN0SXRlbXMgPSByZW1vdmVJdGVtRnJvbVdpc2hsaXN0KHByb2R1Y3QpO1xuICAgICAgICB5aWVsZCBwdXQodXBkYXRlV2lzaGxpc3RMaXN0U3VjY2Vzcyh3aXNobGlzdEl0ZW1zKSk7XG4gICAgICAgIG1vZGFsV2FybmluZygnd2FybmluZycpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24qIGNsZWFyV2lzaGxpc3RMaXN0U2FnYSgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBlbXB0eUNhcnQgPSB7XG4gICAgICAgICAgICB3aXNobGlzdEl0ZW1zOiBbXSxcbiAgICAgICAgICAgIHdpc2hsaXN0VG90YWw6IDAsXG4gICAgICAgIH07XG4gICAgICAgIHlpZWxkIHB1dCh1cGRhdGVXaXNobGlzdExpc3RTdWNjZXNzKGVtcHR5Q2FydCkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9XSVNITElTVF9MSVNULCBnZXRXaXNobGlzdExpc3RTYWdhKV0pO1xuICAgIHlpZWxkIGFsbChbXG4gICAgICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5BRERfSVRFTV9XSVNITElTSCwgYWRkSXRlbVRvV2lzaGxpc3RTYWdhKSxcbiAgICBdKTtcbiAgICB5aWVsZCBhbGwoW1xuICAgICAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuUkVNT1ZFX0lURU1fV0lTSExJU0gsIHJlbW92ZUl0ZW1XaXNobGlzdFNhZ2EpLFxuICAgIF0pO1xufVxuIiwiLypcbiAqIFJlYWN0IHRlbXBsYXRlIGhlbHBlcnNcbiAqIEF1dGhvcjogTm91dGhlbWVzXG4gKiBEZXZlbG9wZWQ6IGRpYXJ5Zm9ybGlmZVxuICogKi9cblxuZXhwb3J0IGNvbnN0IHN0aWNreUhlYWRlciA9ICgpID0+IHtcbiAgICBsZXQgbnVtYmVyID1cbiAgICAgICAgd2luZG93LnBhZ2VYT2Zmc2V0IHx8XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHxcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHxcbiAgICAgICAgMDtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLXN0aWNreScpO1xuICAgIGlmIChoZWFkZXIgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKG51bWJlciA+PSAzMDApIHtcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItLXN0aWNreScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci0tc3RpY2t5Jyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc3RpY2t5SGVhZGVyTW9kaWxlID0gKCkgPT4ge1xuICAgIGxldCBudW1iZXIgPVxuICAgICAgICB3aW5kb3cucGFnZVhPZmZzZXQgfHxcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fFxuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fFxuICAgICAgICAwO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItc3RpY2t5LW1vYmlsZScpO1xuICAgIGlmIChoZWFkZXIgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKG51bWJlciA+PSAzMDApIHtcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItLXN0aWNreScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci0tc3RpY2t5Jyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVUZW1wQXJyYXkgPSAobWF4SXRlbXMpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heEl0ZW1zOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLypcbiAqIFJlYWN0IHRlbXBsYXRlIGhlbHBlcnNcbiAqIEF1dGhvcjogTm91dGhlbWVzXG4gKiBEZXZlbG9wZWQ6IGRpYXJ5Zm9ybGlmZVxuICogKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgeyBnZXRQcm9kdWN0c0J5SWRzIH0gZnJvbSAnfi9yZXBvc2l0b3JpZXMvUHJvZHVjdFJlcG9zaXRvcnknO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQW1vdW50KG9iaikge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKG9iailcbiAgICAgICAgLnJlZHVjZSgoYWNjLCB7IHF1YW50aXR5LCBwcmljZSB9KSA9PiBhY2MgKyBxdWFudGl0eSAqIHByaWNlLCAwKVxuICAgICAgICAudG9GaXhlZCgyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhcnRJdGVtc0Zyb21Db29raWVzKCkge1xuICAgIGNvbnN0IGNhcnRJdGVtcyA9IGNvb2tpZXMuZ2V0KCdjYXJ0Jyk7XG4gICAgaWYgKGNhcnRJdGVtcykge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShjYXJ0SXRlbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdpc2hMaXN0RnJvbUNvb2tpZXMoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBjb29raWVzLmdldCgnd2lzaGxpc3QnKTtcbiAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoaXRlbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhcnRJdGVtc0hlbHBlcihjYXJ0KSB7XG4gICAgbGV0IGNhcnRJdGVtcztcbiAgICBpZiAoY2FydCAmJiBjYXJ0Lml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IHF1ZXJpZXMgPSAnJztcbiAgICAgICAgY2FydC5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAocXVlcmllcyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBxdWVyaWVzID0gYGlkX2luPSR7aXRlbS5pZH1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyaWVzID0gcXVlcmllcyArIGAmaWRfaW49JHtpdGVtLmlkfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGdldFByb2R1Y3RzQnlJZHMocXVlcmllcyk7XG4gICAgICAgIGlmIChwcm9kdWN0cyAmJiBwcm9kdWN0cy5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjYXJ0SXRlbXMgPSBwcm9kdWN0cy5pdGVtcztcbiAgICAgICAgICAgIGNhcnQuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gY2FydEl0ZW1zW2luZGV4XS5pZCkge1xuICAgICAgICAgICAgICAgICAgICBjYXJ0SXRlbXNbaW5kZXhdLnF1YW50aXR5ID0gaXRlbS5xdWFudGl0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXRlbXM6IGNhcnRJdGVtcyxcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpc2hMaXN0SXRlbXNIZWxwZXIocGF5bG9hZCkge1xuICAgIGxldCB3aXNobGlzdEl0ZW1zO1xuICAgIGlmIChwYXlsb2FkICYmIHBheWxvYWQubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgcXVlcmllcyA9ICcnO1xuICAgICAgICBwYXlsb2FkLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChxdWVyaWVzID09PSAnJykge1xuICAgICAgICAgICAgICAgIHF1ZXJpZXMgPSBgaWRfaW49JHtpdGVtfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXJpZXMgPSBxdWVyaWVzICsgYCZpZF9pbj0ke2l0ZW19YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZ2V0UHJvZHVjdHNCeUlkcyhxdWVyaWVzKTtcbiAgICAgICAgaWYgKHByb2R1Y3RzICYmIHByb2R1Y3RzLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHdpc2hsaXN0SXRlbXMgPSBwcm9kdWN0cy5pdGVtcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2lzaGxpc3RJdGVtcztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDYXJ0VG9Db29raWVzKHBheWxvYWQpIHtcbiAgICBjb29raWVzLnNldCgnY2FydCcsIHBheWxvYWQsIHsgcGF0aDogJy8nLCBleHBpcmVzOiAyNCAqIDcgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVXaXNobGlzdFRvQ29va2llcyhwYXlsb2FkKSB7XG4gICAgY29va2llcy5zZXQoJ3dpc2hsaXN0JywgcGF5bG9hZCwgeyBwYXRoOiAnLycsIGV4cGlyZXM6IDI0ICogNyB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEl0ZW1Ub0NhcnRIZWxwZXIocHJvZHVjdCkge1xuICAgIGxldCBjYXJ0O1xuICAgIGxldCBjb29raWVDYXJ0ID0gZ2V0Q2FydEl0ZW1zRnJvbUNvb2tpZXMoKTtcbiAgICBpZiAoY29va2llQ2FydCkge1xuICAgICAgICBjYXJ0ID0gY29va2llQ2FydDtcbiAgICAgICAgY29uc3QgZXhpc3RJdGVtID0gY2FydC5pdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkKTtcbiAgICAgICAgaWYgKGV4aXN0SXRlbSkge1xuICAgICAgICAgICAgZXhpc3RJdGVtLnF1YW50aXR5ICs9IHByb2R1Y3QucXVhbnRpdHk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKiBpZiAoIXByb2R1Y3QucXVhbnRpdHkpIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnF1YW50aXR5ID0gMTtcbiAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgY2FydC5pdGVtcy5wdXNoKHByb2R1Y3QpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2FydCA9IHtcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgY2FydC5pdGVtcy5wdXNoKHByb2R1Y3QpO1xuICAgIH1cbiAgICB1cGRhdGVDYXJ0VG9Db29raWVzKGNhcnQpO1xuICAgIHJldHVybiBjYXJ0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSXRlbVRvV2lzaGxpc3RIZWxwZXIocGF5bG9hZCkge1xuICAgIGxldCB3aXNobGlzdCA9IFtdO1xuICAgIGxldCBjb29raWVXaXNobGlzdCA9IGdldFdpc2hMaXN0RnJvbUNvb2tpZXMoKTtcbiAgICBpZiAoY29va2llV2lzaGxpc3QpIHtcbiAgICAgICAgd2lzaGxpc3QgPSBjb29raWVXaXNobGlzdDtcbiAgICAgICAgY29uc3QgZXhpc3RJdGVtID0gd2lzaGxpc3QuZmluZCgoaXRlbSkgPT4gaXRlbSA9PT0gcGF5bG9hZCk7XG4gICAgICAgIGlmIChleGlzdEl0ZW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2lzaGxpc3QucHVzaChwYXlsb2FkKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpc2hsaXN0LnB1c2gocGF5bG9hZCk7XG4gICAgfVxuICAgIHVwZGF0ZVdpc2hsaXN0VG9Db29raWVzKHdpc2hsaXN0KTtcbiAgICByZXR1cm4gd2lzaGxpc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNyZWFzZVF0eUNhcnRJdGVtSGVscGVyKHByb2R1Y3QpIHtcbiAgICBsZXQgY2FydDtcbiAgICBsZXQgY29va2llQ2FydCA9IGdldENhcnRJdGVtc0Zyb21Db29raWVzKCk7XG4gICAgaWYgKGNvb2tpZUNhcnQpIHtcbiAgICAgICAgY2FydCA9IGNvb2tpZUNhcnQ7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IGNhcnQuaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLnF1YW50aXR5ID0gc2VsZWN0ZWRJdGVtLnF1YW50aXR5ICsgMTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVDYXJ0VG9Db29raWVzKGNhcnQpO1xuICAgICAgICByZXR1cm4gY2FydDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNyZWFzZVF0eUNhcnRJdGVtSGVscGVyKHByb2R1Y3QpIHtcbiAgICBsZXQgY2FydDtcbiAgICBsZXQgY29va2llQ2FydCA9IGdldENhcnRJdGVtc0Zyb21Db29raWVzKCk7XG4gICAgaWYgKGNvb2tpZUNhcnQpIHtcbiAgICAgICAgY2FydCA9IGNvb2tpZUNhcnQ7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IGNhcnQuaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLnF1YW50aXR5ID0gc2VsZWN0ZWRJdGVtLnF1YW50aXR5IC0gMTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVDYXJ0VG9Db29raWVzKGNhcnQpO1xuICAgICAgICByZXR1cm4gY2FydDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDYXJ0SXRlbUhlbHBlcihwcm9kdWN0KSB7XG4gICAgbGV0IGNhcnQ7XG4gICAgbGV0IGNvb2tpZUNhcnQgPSBnZXRDYXJ0SXRlbXNGcm9tQ29va2llcygpO1xuICAgIGlmIChjb29raWVDYXJ0KSB7XG4gICAgICAgIGNhcnQgPSBjb29raWVDYXJ0O1xuICAgICAgICBjb25zdCBpbmRleCA9IGNhcnQuaXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkKTtcbiAgICAgICAgY2FydC5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB1cGRhdGVDYXJ0VG9Db29raWVzKGNhcnQpO1xuICAgICAgICByZXR1cm4gY2FydDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJdGVtRnJvbVdpc2hsaXN0KHBheWxvYWQpIHtcbiAgICBsZXQgd2lzaGxpc3QgPSBbXTtcbiAgICBsZXQgY29va2llV2lzaGxpc3QgPSBnZXRXaXNoTGlzdEZyb21Db29raWVzKCk7XG4gICAgaWYgKGNvb2tpZVdpc2hsaXN0KSB7XG4gICAgICAgIHdpc2hsaXN0ID0gY29va2llV2lzaGxpc3Q7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gd2lzaGxpc3QuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtID09PSBwYXlsb2FkKTtcbiAgICAgICAgY29uc29sZS5sb2coeyBpbmRleCB9KTtcbiAgICAgICAgd2lzaGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgY29uc29sZS5sb2coeyB3aXNobGlzdCB9KTtcbiAgICAgICAgdXBkYXRlV2lzaGxpc3RUb0Nvb2tpZXMod2lzaGxpc3QpO1xuICAgICAgICByZXR1cm4gd2lzaGxpc3Q7XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVzNi1wcm9taXNlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zZXJ2ZXJcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=