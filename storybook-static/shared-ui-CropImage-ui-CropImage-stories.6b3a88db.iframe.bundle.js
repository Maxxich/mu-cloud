"use strict";(self.webpackChunkmu_cloud=self.webpackChunkmu_cloud||[]).push([[9217],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/shared/assets/images/neon.jpeg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/neon.2d755c22.jpeg",height:3796,width:3144,blurDataURL:"static/media/neon.2d755c22.jpeg"}},"./src/shared/ui/CropImage/ui/CropImage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,C_Users_Desktop_mu_cloud_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_shared_assets_images_neon_jpeg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/assets/images/neon.jpeg");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,C_Users_Desktop_mu_cloud_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"shared/CropImage",component:__webpack_require__("./src/shared/ui/CropImage/ui/CropImage.tsx").N};var Default={args:{aspectRatio:2,cancelButtonText:"Cancel",info:"Crop image",minHeight:700,minWidth:700,submitButtonText:"Crop",title:"Cropper",imageFileURL:_shared_assets_images_neon_jpeg__WEBPACK_IMPORTED_MODULE_1__.Z.src}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    aspectRatio: 2 / 1,\n    cancelButtonText: 'Cancel',\n    info: 'Crop image',\n    minHeight: 700,\n    minWidth: 700,\n    submitButtonText: 'Crop',\n    title: 'Cropper',\n    imageFileURL: Image.src\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/shared/ui/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.Z,options);const Button_Button_module=Button_module.Z&&Button_module.Z.locals?Button_module.Z.locals:void 0;var _excluded=["children","fullwidth","variant","className","addonLeft","addonRight","size"],__jsx=react.createElement,Button=(0,react.memo)((0,react.forwardRef)((function(_ref,ref){var children=_ref.children,fullwidth=_ref.fullwidth,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,className=_ref.className,addonLeft=_ref.addonLeft,addonRight=_ref.addonRight,_ref$size=_ref.size,size=void 0===_ref$size?"m":_ref$size,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),mods=(0,defineProperty.Z)({},Button_Button_module.fullwidth,fullwidth);return __jsx("button",(0,esm_extends.Z)({className:classnames_default()(Button_Button_module.Button,mods,Button_Button_module[size],Button_Button_module[variant],className)},rest,{ref}),__jsx("div",{className:Button_Button_module.addon},addonLeft),children,__jsx("div",{className:Button_Button_module.addon},addonRight))})));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{fullwidth:{defaultValue:null,description:"",name:"fullwidth",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"green"'},{value:'"default"'},{value:'"danger"'}]}},addonRight:{defaultValue:null,description:"",name:"addonRight",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},addonLeft:{defaultValue:null,description:"",name:"addonLeft",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'},{value:'"xl"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"MutableRefObject<HTMLElement>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/shared/ui/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/Button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.z});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/ui/Button/Button.tsx")},"./src/shared/ui/CropImage/ui/CropImage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>CropImage});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),react_cropper_es=__webpack_require__("./node_modules/react-cropper/dist/react-cropper.es.js"),lib=(__webpack_require__("./node_modules/cropperjs/dist/cropper.css"),__webpack_require__("./node_modules/react-device-detect/dist/lib.js")),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react_responsive=__webpack_require__("./node_modules/react-responsive/dist/react-responsive.js"),Button=__webpack_require__("./src/shared/ui/Button/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CropImage_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/CropImage/ui/CropImage.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CropImage_module.Z,options);const ui_CropImage_module=CropImage_module.Z&&CropImage_module.Z.locals?CropImage_module.Z.locals:void 0;var style=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/shared/ui/CropImage/ui/style.css"),style_options={};style_options.styleTagTransform=styleTagTransform_default(),style_options.setAttributes=setAttributesWithoutAttributes_default(),style_options.insert=insertBySelector_default().bind(null,"head"),style_options.domAPI=styleDomAPI_default(),style_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(style.Z,style_options);style.Z&&style.Z.locals&&style.Z.locals;var __jsx=react.createElement,CropImage=(0,react.memo)((function(_ref){var minHeight=_ref.minHeight,minWidth=_ref.minWidth,onSuccess=_ref.onSuccess,onCancel=_ref.onCancel,cancelButtonText=_ref.cancelButtonText,submitButtonText=_ref.submitButtonText,info=_ref.info,imageFileURL=_ref.imageFileURL,aspectRatio=_ref.aspectRatio,testId=_ref.testId,continueButtonTestId=_ref.continueButtonTestId,cropperRef=(0,react.useRef)(null),_useState=(0,react.useState)(null),error=_useState[0],setError=_useState[1],_useState2=(0,react.useState)(),height=_useState2[0],setHeight=_useState2[1],cropperContainerRef=(0,react.useRef)(),onError=function onError(message){return setError(message)},onClick=(0,react.useCallback)((function(e){var _cropperRef$current,cropper=null===(_cropperRef$current=cropperRef.current)||void 0===_cropperRef$current?void 0:_cropperRef$current.cropper,width=null==cropper?void 0:cropper.getCroppedCanvas().width,height=null==cropper?void 0:cropper.getCroppedCanvas().height;return height&&width?Math.ceil(width)<minWidth?onError("width error"):Math.ceil(height)<minHeight?onError("height error"):void(null==cropper||cropper.getCroppedCanvas().toBlob((function(blob){blob&&onSuccess(new File([blob],"image.png",{type:"image/png"}))}))):onError("width or height error")}),[minHeight,minWidth,onSuccess]),_useState3=(0,react.useState)(0),key=_useState3[0],setKey=_useState3[1],isLandscape=(0,react_responsive.useMediaQuery)({query:"(orientation: landscape)"});(0,react.useEffect)((function(){setKey((function(prev){return prev+1}))}),[isLandscape]),(0,react.useEffect)((function(){return window.onresize=function resizeCb(){setHeight(window.innerHeight)},function(){window.onresize=null}}),[]);var mods=(0,defineProperty.Z)({},ui_CropImage_module.container_mobile,lib.tq);return __jsx("div",{className:classnames_default()(ui_CropImage_module.wrapper),style:{height},"data-testid":testId},__jsx("div",{className:classnames_default()(ui_CropImage_module.container,mods)},__jsx("div",{className:ui_CropImage_module.cropper_wrapper,ref:cropperContainerRef},imageFileURL&&cropperContainerRef.current?__jsx(react_cropper_es.Z,{key,src:imageFileURL,className:error?"danger":"",ref:cropperRef,scalable:!1,style:{height:cropperContainerRef.current.clientHeight,width:cropperContainerRef.current.clientWidth},zoomTo:.1,initialAspectRatio:aspectRatio,aspectRatio,preview:".img-preview",viewMode:1,responsive:!0,minCropBoxHeight:10,crop:function crop(e){Math.ceil(e.detail.width)<minWidth||Math.ceil(e.detail.height)<minHeight?setError("Minimal resolution should be ".concat(minWidth,":").concat(minHeight)):setError(null)},minCropBoxWidth:10,background:!1,dragMode:"move",autoCropArea:isLandscape?.6:1,checkOrientation:!0,cropBoxResizable:!1,cropBoxMovable:!1,toggleDragModeOnDblclick:!1,guides:!1,center:!1}):__jsx("div",null,"Ошибка")),__jsx("p",{className:ui_CropImage_module.info},info),error&&__jsx("p",{className:ui_CropImage_module.error_message},error),__jsx("div",{className:ui_CropImage_module.buttons},__jsx(Button.z,{onClick:onCancel},cancelButtonText),__jsx(Button.z,{onClick,disabled:Boolean(error),variant:"green","data-testid":continueButtonTestId},submitButtonText))))}));CropImage.displayName="CropImage";try{CropImage.displayName="CropImage",CropImage.__docgenInfo={description:"",displayName:"CropImage",props:{minWidth:{defaultValue:null,description:"",name:"minWidth",required:!0,type:{name:"number"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!0,type:{name:"number"}},onSuccess:{defaultValue:null,description:"",name:"onSuccess",required:!0,type:{name:"(file: File) => void"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!0,type:{name:"(e: SyntheticEvent<Element, Event>) => void"}},cancelButtonText:{defaultValue:null,description:"",name:"cancelButtonText",required:!0,type:{name:"string"}},submitButtonText:{defaultValue:null,description:"",name:"submitButtonText",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},info:{defaultValue:null,description:"",name:"info",required:!0,type:{name:"string"}},imageFileURL:{defaultValue:null,description:"",name:"imageFileURL",required:!1,type:{name:"string"}},aspectRatio:{defaultValue:null,description:"",name:"aspectRatio",required:!0,type:{name:"number"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},continueButtonTestId:{defaultValue:null,description:"",name:"continueButtonTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/CropImage/ui/CropImage.tsx#CropImage"]={docgenInfo:CropImage.__docgenInfo,name:"CropImage",path:"src/shared/ui/CropImage/ui/CropImage.tsx#CropImage"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Button_Button__WZ_9_{display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:10px;gap:11px;padding:11px 26px;transition:all .1s linear 0s;background:var(--button-bg-color);color:var(--button-text-color)}.Button_Button__WZ_9_:active{transform:scale(0.95)}.Button_Button__WZ_9_ svg{fill:var(--button-text-color)}.Button_Button__WZ_9_:hover{background:var(--button-bg-color-hovered)}.Button_Button__WZ_9_:focus{outline:var(--button-outline-color-focused) solid 2px}.Button_danger__zC5zE{background:var(--button-bg-color-danger);color:var(--button-text-color-danger)}.Button_danger__zC5zE:hover{background:var(--button-bg-color-danger-hovered)}.Button_danger__zC5zE svg{fill:var(--button-text-color-danger)}.Button_danger__zC5zE:focus{outline:var(--button-outline-color-danger-focused) solid 2px}.Button_green__k9v8F{background:var(--button-bg-color-green);color:var(--button-text-color-green)}.Button_green__k9v8F:hover{background:var(--button-bg-color-green-hovered)}.Button_green__k9v8F svg{fill:var(--button-text-color-green)}.Button_green__k9v8F:focus{outline:var(--button-outline-color-green-focused) solid 2px}.Button_Button__WZ_9_:disabled{cursor:default;background:var(--button-bg-color-disabled);color:var(--button-text-color-disabled)}.Button_Button__WZ_9_:disabled svg{fill:var(--button-text-color-disabled)}.Button_Button__WZ_9_:disabled.Button_green__k9v8F{background:var(--button-bg-color-green-disabled);color:var(--button-text-color-green-disabled)}.Button_Button__WZ_9_:disabled.Button_green__k9v8F svg{fill:var(--button-text-color-green-disabled)}.Button_Button__WZ_9_:disabled.Button_danger__zC5zE{background:var(--button-bg-color-danger-disabled);color:var(--button-text-color-danger-disabled)}.Button_Button__WZ_9_:disabled.Button_danger__zC5zE svg{fill:var(--button-text-color-danger-disabled)}.Button_Button__WZ_9_:disabled:active{transform:none}.Button_fullwidth__Bwb9s{width:100%}.Button_fullwidth__Bwb9s:active{opacity:.9;transform:scale(0.98)}.Button_fullwidth__Bwb9s:active:disabled{opacity:1}.Button_m__6_e99{font-size:12px;line-height:15px}.Button_m__6_e99 svg{height:15px;width:15px}.Button_l__mlos7{font-size:24px;line-height:32px}.Button_l__mlos7 svg{height:32px;width:32px}.Button_xl__tVJ8W{font-size:32px;line-height:40px}.Button_xl__tVJ8W svg{height:40px;width:40px}.Button_addon__NGf5R{display:flex}","",{version:3,sources:["webpack://./src/shared/ui/Button/Button.module.scss"],names:[],mappings:"AAAA,sBACI,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,cAAA,CACA,kBAAA,CACA,QAAA,CACA,iBAAA,CACA,4BAAA,CACA,iCAAA,CACA,8BAAA,CAEA,6BACI,qBAAA,CAGJ,0BACI,6BAAA,CAGJ,4BACI,yCAAA,CAGJ,4BACI,qDAAA,CAIR,sBACI,wCAAA,CACA,qCAAA,CAEA,4BACI,gDAAA,CAGJ,0BACI,oCAAA,CAGJ,4BACI,4DAAA,CAIR,qBACI,uCAAA,CACA,oCAAA,CAEA,2BACI,+CAAA,CAGJ,yBACI,mCAAA,CAGJ,2BACI,2DAAA,CAIR,+BACI,cAAA,CACA,0CAAA,CACA,uCAAA,CAEA,mCACI,sCAAA,CAGJ,mDACI,gDAAA,CACA,6CAAA,CAEA,uDACI,4CAAA,CAIR,oDACI,iDAAA,CACA,8CAAA,CAEA,wDACI,6CAAA,CAIR,sCACI,cAAA,CAIR,yBACI,UAAA,CAEA,gCACI,UAAA,CACA,qBAAA,CAEA,yCACI,SAAA,CAKZ,iBACI,cAAA,CACA,gBAAA,CAEA,qBACI,WAAA,CACA,UAAA,CAIR,iBACI,cAAA,CACA,gBAAA,CAEA,qBACI,WAAA,CACA,UAAA,CAIR,kBACI,cAAA,CACA,gBAAA,CAEA,sBACI,WAAA,CACA,UAAA,CAIR,qBACI,YAAA",sourcesContent:[".Button {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    border-radius: 10px;\r\n    gap:11px;\r\n    padding: 11px 26px;\r\n    transition: all 0.1s linear 0s;\r\n    background: var(--button-bg-color);\r\n    color: var(--button-text-color);\r\n\r\n    &:active {\r\n        transform: scale(0.95);\r\n    }    \r\n\r\n    & svg {\r\n        fill: var(--button-text-color);\r\n    }\r\n\r\n    &:hover {\r\n        background: var(--button-bg-color-hovered);\r\n    }\r\n\r\n    &:focus {\r\n        outline: var(--button-outline-color-focused) solid 2px;\r\n    }\r\n}\r\n\r\n.danger {\r\n    background: var(--button-bg-color-danger);\r\n    color: var(--button-text-color-danger);\r\n\r\n    &:hover {\r\n        background: var(--button-bg-color-danger-hovered);\r\n    }\r\n\r\n    & svg {\r\n        fill: var(--button-text-color-danger);\r\n    }\r\n\r\n    &:focus {\r\n        outline: var(--button-outline-color-danger-focused) solid 2px;\r\n    }\r\n}\r\n\r\n.green {\r\n    background: var(--button-bg-color-green);\r\n    color: var(--button-text-color-green);\r\n\r\n    &:hover {\r\n        background: var(--button-bg-color-green-hovered);\r\n    }\r\n\r\n    & svg {\r\n        fill: var(--button-text-color-green);\r\n    }\r\n\r\n    &:focus {\r\n        outline: var(--button-outline-color-green-focused) solid 2px;\r\n    }\r\n}\r\n\r\n.Button:disabled {\r\n    cursor: default;\r\n    background: var(--button-bg-color-disabled);\r\n    color: var(--button-text-color-disabled);\r\n\r\n    & svg {\r\n        fill: var(--button-text-color-disabled);\r\n    }\r\n\r\n    &.green {\r\n        background: var(--button-bg-color-green-disabled);\r\n        color: var(--button-text-color-green-disabled);\r\n\r\n        & svg {\r\n            fill: var(--button-text-color-green-disabled);\r\n        }\r\n    }\r\n\r\n    &.danger {\r\n        background: var(--button-bg-color-danger-disabled);\r\n        color: var(--button-text-color-danger-disabled);\r\n\r\n        & svg {\r\n            fill: var(--button-text-color-danger-disabled);\r\n        }\r\n    }\r\n\r\n    &:active {\r\n        transform: none;\r\n    }\r\n}\r\n\r\n.fullwidth {\r\n    width: 100%;\r\n\r\n    &:active {\r\n        opacity: 0.9;\r\n        transform: scale(0.98);\r\n\r\n        &:disabled {\r\n            opacity: 1;\r\n        }\r\n    }  \r\n}\r\n\r\n.m {\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n\r\n    & svg {\r\n        height: 15px;\r\n        width: 15px;\r\n    }\r\n}\r\n\r\n.l {\r\n    font-size: 24px;\r\n    line-height: 32px;\r\n\r\n    & svg {\r\n        height: 32px;\r\n        width: 32px;\r\n    }\r\n}\r\n\r\n.xl {\r\n    font-size: 32px;\r\n    line-height: 40px;\r\n\r\n    & svg {\r\n        height: 40px;\r\n        width: 40px;\r\n    }\r\n}\r\n\r\n.addon {\r\n    display: flex;\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Button:"Button_Button__WZ_9_",danger:"Button_danger__zC5zE",green:"Button_green__k9v8F",fullwidth:"Button_fullwidth__Bwb9s",m:"Button_m__6_e99",l:"Button_l__mlos7",xl:"Button_xl__tVJ8W",addon:"Button_addon__NGf5R"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/CropImage/ui/CropImage.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".CropImage_wrapper__Wbg_u{position:fixed;inset:0;z-index:1;width:100vw;overflow:hidden;background:#010101;padding:7px}.CropImage_container__BqRwc{position:relative;height:100%;width:100%;margin:0 auto;display:flex;overflow:hidden;z-index:1;flex-direction:column;align-items:center}.CropImage_container_mobile___dyeh{padding-bottom:20px;padding-top:20px;max-width:1280px}.CropImage_error_message__3NMEa{position:fixed;bottom:70px;left:50%;transform:translateX(-50%);color:var(--danger-color);font-size:14px;line-height:18px;text-align:center;max-width:90%}.CropImage_info__fVdko{position:fixed;top:70px;left:50%;transform:translateX(-50%);color:var(--secondary-color);font-size:14px;line-height:18px;text-align:center;max-width:90%}.CropImage_cropper_wrapper__DhO9L{flex:1 1 auto;background:#010101;z-index:-1;width:100%}.CropImage_buttons__Skc6d{display:flex;gap:10px}","",{version:3,sources:["webpack://./src/shared/ui/CropImage/ui/CropImage.module.scss"],names:[],mappings:"AAAA,0BACI,cAAA,CACA,OAAA,CACA,SAAA,CACA,WAAA,CACA,eAAA,CACA,kBAAA,CACA,WAAA,CAGJ,4BACI,iBAAA,CACA,WAAA,CACA,UAAA,CACA,aAAA,CACA,YAAA,CACA,eAAA,CACA,SAAA,CACA,qBAAA,CACA,kBAAA,CAGJ,mCACI,mBAAA,CACA,gBAAA,CACA,gBAAA,CAGJ,gCACI,cAAA,CACA,WAAA,CACA,QAAA,CACA,0BAAA,CACA,yBAAA,CACA,cAAA,CACA,gBAAA,CACA,iBAAA,CACA,aAAA,CAGJ,uBACI,cAAA,CACA,QAAA,CACA,QAAA,CACA,0BAAA,CACA,4BAAA,CACA,cAAA,CACA,gBAAA,CACA,iBAAA,CACA,aAAA,CAGJ,kCACI,aAAA,CACA,kBAAA,CACA,UAAA,CACA,UAAA,CAGJ,0BACI,YAAA,CACA,QAAA",sourcesContent:[".wrapper {\r\n    position:fixed;\r\n    inset: 0;\r\n    z-index:1;\r\n    width: 100vw;\r\n    overflow: hidden;\r\n    background: rgb(1 1 1);\r\n    padding: 7px;\r\n}\r\n  \r\n.container {\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    overflow: hidden;\r\n    z-index: 1;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n  \r\n.container_mobile {\r\n    padding-bottom: 20px;\r\n    padding-top: 20px;\r\n    max-width: 1280px;\r\n}\r\n  \r\n.error_message {\r\n    position: fixed;\r\n    bottom: 70px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    color: var(--danger-color);\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n    text-align: center;\r\n    max-width: 90%;\r\n}\r\n\r\n.info {\r\n    position: fixed;\r\n    top: 70px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    color: var(--secondary-color);\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n    text-align: center;\r\n    max-width: 90%;\r\n}\r\n  \r\n.cropper_wrapper {\r\n    flex: 1 1 auto;\r\n    background: rgb(1 1 1);\r\n    z-index: -1;\r\n    width: 100%;\r\n}\r\n  \r\n.buttons {\r\n    display: flex;\r\n    gap: 10px;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrapper:"CropImage_wrapper__Wbg_u",container:"CropImage_container__BqRwc",container_mobile:"CropImage_container_mobile___dyeh",error_message:"CropImage_error_message__3NMEa",info:"CropImage_info__fVdko",cropper_wrapper:"CropImage_cropper_wrapper__DhO9L",buttons:"CropImage_buttons__Skc6d"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/shared/ui/CropImage/ui/style.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".cropper-view-box{\n    outline: 1px solid #fff;\n    outline-color:  #fff;\n  }\n\n  .cropper-face{\n   background: none; \n  }\n\n  .danger .cropper-face {\n    background: #fa1515; \n   }\n\n  .danger .cropper-view-box{\n    outline: 1px solid red;\n    outline-color:  red;\n  }\n  \n  .cropper-container img{\n    position: relative;\n    z-index: -1;\n  }","",{version:3,sources:["webpack://./src/shared/ui/CropImage/ui/style.css"],names:[],mappings:"AAAA;IACI,uBAAuB;IACvB,oBAAoB;EACtB;;EAEA;GACC,gBAAgB;EACjB;;EAEA;IACE,mBAAmB;GACpB;;EAED;IACE,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;IAClB,WAAW;EACb",sourcesContent:[".cropper-view-box{\r\n    outline: 1px solid #fff;\r\n    outline-color:  #fff;\r\n  }\r\n\r\n  .cropper-face{\r\n   background: none; \r\n  }\r\n\r\n  .danger .cropper-face {\r\n    background: #fa1515; \r\n   }\r\n\r\n  .danger .cropper-view-box{\r\n    outline: 1px solid red;\r\n    outline-color:  red;\r\n  }\r\n  \r\n  .cropper-container img{\r\n    position: relative;\r\n    z-index: -1;\r\n  }"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);