/*! For license information please see shared-ui-Dialog-Dialog-stories.b95e8ed5.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkmu_cloud=self.webpackChunkmu_cloud||[]).push([[6258],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/shared/ui/Dialog/Dialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,C_Users_Desktop_mu_cloud_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Dialog__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/ui/Dialog/Dialog.ts"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/ui/Button/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,C_Users_Desktop_mu_cloud_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"shared/Dialog",component:_Dialog__WEBPACK_IMPORTED_MODULE_2__.V.Wrapper,parameters:{loki:{skip:!0}},render:function render(args){return __jsx(_Dialog__WEBPACK_IMPORTED_MODULE_2__.V.Wrapper,args,__jsx(_Dialog__WEBPACK_IMPORTED_MODULE_2__.V.Panel,null,__jsx(_Dialog__WEBPACK_IMPORTED_MODULE_2__.V.Title,null,"Dialog tite"),__jsx(_Dialog__WEBPACK_IMPORTED_MODULE_2__.V.Description,null,"Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order."),__jsx(_Dialog__WEBPACK_IMPORTED_MODULE_2__.V.ButtonsGroup,null,__jsx(_Button__WEBPACK_IMPORTED_MODULE_3__.z,null,"Cancel"),__jsx(_Button__WEBPACK_IMPORTED_MODULE_3__.z,null,"Ok"))))}};var Default={args:{open:!0,onClose:function onClose(){}}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  // @ts-ignore\n  args: {\n    open: true,\n    onClose: () => {}\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/shared/ui/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>Button});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.Z,options);const Button_Button_module=Button_module.Z&&Button_module.Z.locals?Button_module.Z.locals:void 0;var _excluded=["children","fullwidth","variant","className","addonLeft","addonRight","size"],__jsx=react.createElement,Button=(0,react.memo)((0,react.forwardRef)((function(_ref,ref){var children=_ref.children,fullwidth=_ref.fullwidth,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,className=_ref.className,addonLeft=_ref.addonLeft,addonRight=_ref.addonRight,_ref$size=_ref.size,size=void 0===_ref$size?"m":_ref$size,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),mods=(0,defineProperty.Z)({},Button_Button_module.fullwidth,fullwidth);return __jsx("button",(0,esm_extends.Z)({className:classnames_default()(Button_Button_module.Button,mods,Button_Button_module[size],Button_Button_module[variant],className)},rest,{ref}),__jsx("div",{className:Button_Button_module.addon},addonLeft),children,__jsx("div",{className:Button_Button_module.addon},addonRight))})));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{fullwidth:{defaultValue:null,description:"",name:"fullwidth",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"green"'},{value:'"default"'},{value:'"danger"'}]}},addonRight:{defaultValue:null,description:"",name:"addonRight",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},addonLeft:{defaultValue:null,description:"",name:"addonLeft",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'},{value:'"xl"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLButtonElement>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/shared/ui/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/Button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.z});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/ui/Button/Button.tsx")},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Button_Button__WZ_9_{display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:10px;gap:11px;padding:11px 26px;transition:all .1s linear 0s;background:var(--button-bg-color);color:var(--button-text-color)}.Button_Button__WZ_9_:active{transform:scale(0.95)}.Button_Button__WZ_9_ svg{fill:var(--button-text-color)}.Button_Button__WZ_9_:hover{background:var(--button-bg-color-hovered)}.Button_Button__WZ_9_:focus{outline:var(--button-outline-color-focused) solid 2px}.Button_danger__zC5zE{background:var(--button-bg-color-danger);color:var(--button-text-color-danger)}.Button_danger__zC5zE:hover{background:var(--button-bg-color-danger-hovered)}.Button_danger__zC5zE svg{fill:var(--button-text-color-danger)}.Button_danger__zC5zE:focus{outline:var(--button-outline-color-danger-focused) solid 2px}.Button_green__k9v8F{background:var(--button-bg-color-green);color:var(--button-text-color-green)}.Button_green__k9v8F:hover{background:var(--button-bg-color-green-hovered)}.Button_green__k9v8F svg{fill:var(--button-text-color-green)}.Button_green__k9v8F:focus{outline:var(--button-outline-color-green-focused) solid 2px}.Button_Button__WZ_9_:disabled{cursor:default;background:var(--button-bg-color-disabled);color:var(--button-text-color-disabled)}.Button_Button__WZ_9_:disabled svg{fill:var(--button-text-color-disabled)}.Button_Button__WZ_9_:disabled.Button_green__k9v8F{background:var(--button-bg-color-green-disabled);color:var(--button-text-color-green-disabled)}.Button_Button__WZ_9_:disabled.Button_green__k9v8F svg{fill:var(--button-text-color-green-disabled)}.Button_Button__WZ_9_:disabled.Button_danger__zC5zE{background:var(--button-bg-color-danger-disabled);color:var(--button-text-color-danger-disabled)}.Button_Button__WZ_9_:disabled.Button_danger__zC5zE svg{fill:var(--button-text-color-danger-disabled)}.Button_Button__WZ_9_:disabled:active{transform:none}.Button_fullwidth__Bwb9s{width:100%}.Button_fullwidth__Bwb9s:active{opacity:.9;transform:scale(0.98)}.Button_fullwidth__Bwb9s:active:disabled{opacity:1}.Button_m__6_e99{font-size:12px;line-height:15px}.Button_m__6_e99 svg{height:15px;width:15px}.Button_l__mlos7{font-size:24px;line-height:32px}.Button_l__mlos7 svg{height:32px;width:32px}.Button_xl__tVJ8W{font-size:32px;line-height:40px}.Button_xl__tVJ8W svg{height:40px;width:40px}.Button_addon__NGf5R{display:flex}","",{version:3,sources:["webpack://./src/shared/ui/Button/Button.module.scss"],names:[],mappings:"AAAA,sBACI,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,cAAA,CACA,kBAAA,CACA,QAAA,CACA,iBAAA,CACA,4BAAA,CACA,iCAAA,CACA,8BAAA,CAEA,6BACI,qBAAA,CAGJ,0BACI,6BAAA,CAGJ,4BACI,yCAAA,CAGJ,4BACI,qDAAA,CAIR,sBACI,wCAAA,CACA,qCAAA,CAEA,4BACI,gDAAA,CAGJ,0BACI,oCAAA,CAGJ,4BACI,4DAAA,CAIR,qBACI,uCAAA,CACA,oCAAA,CAEA,2BACI,+CAAA,CAGJ,yBACI,mCAAA,CAGJ,2BACI,2DAAA,CAIR,+BACI,cAAA,CACA,0CAAA,CACA,uCAAA,CAEA,mCACI,sCAAA,CAGJ,mDACI,gDAAA,CACA,6CAAA,CAEA,uDACI,4CAAA,CAIR,oDACI,iDAAA,CACA,8CAAA,CAEA,wDACI,6CAAA,CAIR,sCACI,cAAA,CAIR,yBACI,UAAA,CAEA,gCACI,UAAA,CACA,qBAAA,CAEA,yCACI,SAAA,CAKZ,iBACI,cAAA,CACA,gBAAA,CAEA,qBACI,WAAA,CACA,UAAA,CAIR,iBACI,cAAA,CACA,gBAAA,CAEA,qBACI,WAAA,CACA,UAAA,CAIR,kBACI,cAAA,CACA,gBAAA,CAEA,sBACI,WAAA,CACA,UAAA,CAIR,qBACI,YAAA",sourcesContent:[".Button {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    border-radius: 10px;\r\n    gap:11px;\r\n    padding: 11px 26px;\r\n    transition: all 0.1s linear 0s;\r\n    background: var(--button-bg-color);\r\n    color: var(--button-text-color);\r\n\r\n    &:active {\r\n        transform: scale(0.95);\r\n    }    \r\n\r\n    & svg {\r\n        fill: var(--button-text-color);\r\n    }\r\n\r\n    &:hover {\r\n        background: var(--button-bg-color-hovered);\r\n    }\r\n\r\n    &:focus {\r\n        outline: var(--button-outline-color-focused) solid 2px;\r\n    }\r\n}\r\n\r\n.danger {\r\n    background: var(--button-bg-color-danger);\r\n    color: var(--button-text-color-danger);\r\n\r\n    &:hover {\r\n        background: var(--button-bg-color-danger-hovered);\r\n    }\r\n\r\n    & svg {\r\n        fill: var(--button-text-color-danger);\r\n    }\r\n\r\n    &:focus {\r\n        outline: var(--button-outline-color-danger-focused) solid 2px;\r\n    }\r\n}\r\n\r\n.green {\r\n    background: var(--button-bg-color-green);\r\n    color: var(--button-text-color-green);\r\n\r\n    &:hover {\r\n        background: var(--button-bg-color-green-hovered);\r\n    }\r\n\r\n    & svg {\r\n        fill: var(--button-text-color-green);\r\n    }\r\n\r\n    &:focus {\r\n        outline: var(--button-outline-color-green-focused) solid 2px;\r\n    }\r\n}\r\n\r\n.Button:disabled {\r\n    cursor: default;\r\n    background: var(--button-bg-color-disabled);\r\n    color: var(--button-text-color-disabled);\r\n\r\n    & svg {\r\n        fill: var(--button-text-color-disabled);\r\n    }\r\n\r\n    &.green {\r\n        background: var(--button-bg-color-green-disabled);\r\n        color: var(--button-text-color-green-disabled);\r\n\r\n        & svg {\r\n            fill: var(--button-text-color-green-disabled);\r\n        }\r\n    }\r\n\r\n    &.danger {\r\n        background: var(--button-bg-color-danger-disabled);\r\n        color: var(--button-text-color-danger-disabled);\r\n\r\n        & svg {\r\n            fill: var(--button-text-color-danger-disabled);\r\n        }\r\n    }\r\n\r\n    &:active {\r\n        transform: none;\r\n    }\r\n}\r\n\r\n.fullwidth {\r\n    width: 100%;\r\n\r\n    &:active {\r\n        opacity: 0.9;\r\n        transform: scale(0.98);\r\n\r\n        &:disabled {\r\n            opacity: 1;\r\n        }\r\n    }  \r\n}\r\n\r\n.m {\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n\r\n    & svg {\r\n        height: 15px;\r\n        width: 15px;\r\n    }\r\n}\r\n\r\n.l {\r\n    font-size: 24px;\r\n    line-height: 32px;\r\n\r\n    & svg {\r\n        height: 32px;\r\n        width: 32px;\r\n    }\r\n}\r\n\r\n.xl {\r\n    font-size: 32px;\r\n    line-height: 40px;\r\n\r\n    & svg {\r\n        height: 40px;\r\n        width: 40px;\r\n    }\r\n}\r\n\r\n.addon {\r\n    display: flex;\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Button:"Button_Button__WZ_9_",danger:"Button_danger__zC5zE",green:"Button_green__k9v8F",fullwidth:"Button_fullwidth__Bwb9s",m:"Button_m__6_e99",l:"Button_l__mlos7",xl:"Button_xl__tVJ8W",addon:"Button_addon__NGf5R"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);