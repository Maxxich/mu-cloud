"use strict";(self.webpackChunkmu_cloud=self.webpackChunkmu_cloud||[]).push([[2944],{"./src/feature/Track/ui/TrackBanner/TrackBanner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Desktop:()=>Desktop,Mobile:()=>Mobile,default:()=>TrackBanner_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),StoreDecorator=__webpack_require__("./src/shared/config/storybook/StoreDecorator/StoreDecorator.tsx"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),BannerSwiper=__webpack_require__("./src/shared/ui/BannerSwiper/index.ts"),TrackCard=__webpack_require__("./src/feature/Track/ui/TrackCard/TrackCard.tsx"),__jsx=react.createElement,TrackBanner=function TrackBanner(_ref){var tracks=_ref.tracks,className=_ref.className,isMobile=_ref.isMobile,showIsDeleted=_ref.showIsDeleted;return __jsx(BannerSwiper.$,{isMobile,rows:3,className},tracks.map((function(t){return __jsx(TrackCard.G,{track:t,tracks,key:t.id,isMobile,showIsDeleted})})))};TrackBanner.displayName="TrackBanner",TrackBanner.__docgenInfo={description:"",methods:[],displayName:"TrackBanner"};try{TrackBanner.displayName="TrackBanner",TrackBanner.__docgenInfo={description:"",displayName:"TrackBanner",props:{tracks:{defaultValue:null,description:"",name:"tracks",required:!0,type:{name:"Track[]"}},isMobile:{defaultValue:null,description:"",name:"isMobile",required:!0,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},showIsDeleted:{defaultValue:null,description:"",name:"showIsDeleted",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/feature/Track/ui/TrackBanner/TrackBanner.tsx#TrackBanner"]={docgenInfo:TrackBanner.__docgenInfo,name:"TrackBanner",path:"src/feature/Track/ui/TrackBanner/TrackBanner.tsx#TrackBanner"})}catch(__react_docgen_typescript_loader_error){}var _Desktop$parameters,_Desktop$parameters2,_Mobile$parameters,_Mobile$parameters2,tracks=__webpack_require__("./src/feature/Track/ui/helpers/tracks.tsx");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const TrackBanner_stories={title:"feature/Track/TrackBanner",component:TrackBanner,parameters:{layout:"centered",nextAuthMock:{session:"authenticated"},loki:{skip:!0}},tags:["autodocs"]};var args={tracks:tracks.R,isMobile:!1},Desktop={args:_objectSpread({},args)};Desktop.decorators=[(0,StoreDecorator.l)({player:{list:[],currentTrackId:void 0,currentTrackTime:void 0,currentTrackTimeLenght:void 0,isPaused:!0}})];var Mobile={args:_objectSpread(_objectSpread({},args),{},{isMobile:!0})};Mobile.decorators=[(0,StoreDecorator.l)({player:{list:[],currentTrackId:void 0,currentTrackTime:void 0,currentTrackTimeLenght:void 0,isPaused:!0}})],Desktop.parameters=_objectSpread(_objectSpread({},Desktop.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Desktop$parameters=Desktop.parameters)||void 0===_Desktop$parameters?void 0:_Desktop$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    ...args\n  }\n}"},null===(_Desktop$parameters2=Desktop.parameters)||void 0===_Desktop$parameters2||null===(_Desktop$parameters2=_Desktop$parameters2.docs)||void 0===_Desktop$parameters2?void 0:_Desktop$parameters2.source)})}),Mobile.parameters=_objectSpread(_objectSpread({},Mobile.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Mobile$parameters=Mobile.parameters)||void 0===_Mobile$parameters?void 0:_Mobile$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    ...args,\n    isMobile: true\n  }\n}"},null===(_Mobile$parameters2=Mobile.parameters)||void 0===_Mobile$parameters2||null===(_Mobile$parameters2=_Mobile$parameters2.docs)||void 0===_Mobile$parameters2?void 0:_Mobile$parameters2.source)})})},"./src/feature/Track/ui/TrackCard/TrackCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>TrackCard});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),_entity_player__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/entity/player/index.ts"),_global_providers_StoreProvider_config_store__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/global/providers/StoreProvider/config/store.ts"),_components_Mobile_TrackCardMobile__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/feature/Track/ui/TrackCard/components/Mobile/TrackCardMobile.tsx"),_components_Desktop_TrackCardDesktop__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/feature/Track/ui/TrackCard/components/Desktop/TrackCardDesktop.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,TrackCard=function TrackCard(_ref){var track=_ref.track,tracks=_ref.tracks,width=_ref.width,isMobile=_ref.isMobile,showIsDeleted=_ref.showIsDeleted,activeInMenu=_ref.activeInMenu,isPaused=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.v9)(_entity_player__WEBPACK_IMPORTED_MODULE_2__.a5),playlist=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.v9)(_entity_player__WEBPACK_IMPORTED_MODULE_2__.A5),selectedTrackId=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.v9)(_entity_player__WEBPACK_IMPORTED_MODULE_2__.Zh),dispatch=(0,_global_providers_StoreProvider_config_store__WEBPACK_IMPORTED_MODULE_3__.T)(),onToggleTrack=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(id){if(id===selectedTrackId&&JSON.stringify(playlist)===JSON.stringify(tracks))return dispatch(_entity_player__WEBPACK_IMPORTED_MODULE_2__.i9.togglePause());dispatch(_entity_player__WEBPACK_IMPORTED_MODULE_2__.i9.overwriteList({list:tracks,startsWithId:id}))}),[dispatch,tracks,playlist,selectedTrackId]);return isMobile?__jsx(_components_Mobile_TrackCardMobile__WEBPACK_IMPORTED_MODULE_4__.q,{author:track.owners[0].name,author_href:"/users/"+track.owners[0].adress,duration:track.duration,id:track.id,image_src:track.picture_source.square_small,isPaused,isSelected:selectedTrackId===track.id,onToggleTrack,primary_name:track.name,track_href:"/tracks/"+track.id,track_src:track.audio_src,secondary_name:track.name_secondary,width,showIsDeleted}):__jsx(_components_Desktop_TrackCardDesktop__WEBPACK_IMPORTED_MODULE_5__.S,{author:track.owners[0].name,author_href:"/users/"+track.owners[0].adress,duration:track.duration,id:track.id,image_src:track.picture_source.square_small,isPaused,isSelected:selectedTrackId===track.id,onToggleTrack,primary_name:track.name,track_href:"/tracks/"+track.id,track_src:track.audio_src,secondary_name:track.name_secondary,width,showIsDeleted,activeInMenu})};TrackCard.displayName="TrackCard",TrackCard.__docgenInfo={description:"",methods:[],displayName:"TrackCard"};try{TrackCard.displayName="TrackCard",TrackCard.__docgenInfo={description:"",displayName:"TrackCard",props:{track:{defaultValue:null,description:"",name:"track",required:!0,type:{name:"Track"}},tracks:{defaultValue:null,description:"",name:"tracks",required:!0,type:{name:"Track[]"}},isMobile:{defaultValue:null,description:"",name:"isMobile",required:!0,type:{name:"boolean"}},showIsDeleted:{defaultValue:null,description:"",name:"showIsDeleted",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"full"'},{value:'"adaptive"'}]}},activeInMenu:{defaultValue:null,description:"",name:"activeInMenu",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/feature/Track/ui/TrackCard/TrackCard.tsx#TrackCard"]={docgenInfo:TrackCard.__docgenInfo,name:"TrackCard",path:"src/feature/Track/ui/TrackCard/TrackCard.tsx#TrackCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/feature/Track/ui/helpers/tracks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>tracks});var _shared_assets_images_images_jpg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/assets/images/images.jpg"),user={adress:"@maxich",id:1,name:"Maxich",picture_source:{big:_shared_assets_images_images_jpg__WEBPACK_IMPORTED_MODULE_0__.Z.src,medium:_shared_assets_images_images_jpg__WEBPACK_IMPORTED_MODULE_0__.Z.src,small:_shared_assets_images_images_jpg__WEBPACK_IMPORTED_MODULE_0__.Z.src}},track={audio_src:_shared_assets_images_images_jpg__WEBPACK_IMPORTED_MODULE_0__.Z.src,duration:123,feates:[],id:1,name:"Alive",owners:[user],picture_source:{square:_shared_assets_images_images_jpg__WEBPACK_IMPORTED_MODULE_0__.Z.src,square_medium:_shared_assets_images_images_jpg__WEBPACK_IMPORTED_MODULE_0__.Z.src,square_small:_shared_assets_images_images_jpg__WEBPACK_IMPORTED_MODULE_0__.Z.src,wide:_shared_assets_images_images_jpg__WEBPACK_IMPORTED_MODULE_0__.Z.src},color:void 0,name_secondary:"Jaiden Stylez"},tracks=[track,track,track,track,track,track,track,track,track,track,track,track,track,track,track,track,track]},"./src/shared/ui/BannerSwiper/BannerSwiper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>BannerSwiper});var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react_spring_web_modern=__webpack_require__("./node_modules/@react-spring/web/dist/react-spring_web.modern.mjs"),use_gesture_react_esm=__webpack_require__("./node_modules/@use-gesture/react/dist/use-gesture-react.esm.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),mapOverflowToClass={hidden:"overflow-hidden",visible:"overflow-visible"},injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),BannerSwiper_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/BannerSwiper/BannerSwiper.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(BannerSwiper_module.Z,options);const BannerSwiper_BannerSwiper_module=BannerSwiper_module.Z&&BannerSwiper_module.Z.locals?BannerSwiper_module.Z.locals:void 0;var _path,__jsx=react.createElement,BannerSwiperMobile=function BannerSwiperMobile(_ref){for(var children=_ref.children,_ref$rows=_ref.rows,rows=void 0===_ref$rows?1:_ref$rows,_ref$overflow=_ref.overflow,overflow=void 0===_ref$overflow?"hidden":_ref$overflow,className=_ref.className,_useSpring=(0,react_spring_web_modern.q_)((function(){return{x:0}})),_useSpring2=(0,slicedToArray.Z)(_useSpring,2),x=_useSpring2[0].x,api=_useSpring2[1],ref=(0,react.useRef)(),containerRef=(0,react.useRef)(),bind=(0,use_gesture_react_esm.useDrag)((function(_ref2){var ox=(0,slicedToArray.Z)(_ref2.offset,1)[0];if(null!=ref&&ref.current&&null!=containerRef&&containerRef.current&&!(ref.current.offsetWidth<=containerRef.current.offsetWidth)){var avaliableDragOffset=-ref.current.offsetWidth+containerRef.current.offsetWidth;ox>0?api.start({x:0,immediate:!0}):ox<avaliableDragOffset?api.start({x:avaliableDragOffset,immediate:!0}):api.start({x:ox,immediate:!0})}}),{pointer:{touch:!0}}),arrayOfArrays=[],i=0;i<children.length;i+=rows)arrayOfArrays.push(children.slice(i,i+rows));var containerClasses=classnames_default()(BannerSwiper_BannerSwiper_module.container,BannerSwiper_BannerSwiper_module[mapOverflowToClass[overflow]],className);return __jsx("div",{className:containerClasses,ref:containerRef},__jsx(react_spring_web_modern.q.div,(0,esm_extends.Z)({},bind(),{ref,style:{x},className:BannerSwiper_BannerSwiper_module.swiper}),arrayOfArrays.map((function(array,i){return __jsx("div",{key:i},array.map((function(element){return element})))}))))};BannerSwiperMobile.displayName="BannerSwiperMobile",BannerSwiperMobile.__docgenInfo={description:"",methods:[],displayName:"BannerSwiperMobile",props:{rows:{defaultValue:{value:"1",computed:!1},required:!1},overflow:{defaultValue:{value:"'hidden'",computed:!1},required:!1}}};try{BannerSwiperMobile.displayName="BannerSwiperMobile",BannerSwiperMobile.__docgenInfo={description:"",displayName:"BannerSwiperMobile",props:{rows:{defaultValue:{value:"1"},description:"",name:"rows",required:!1,type:{name:"enum",value:[{value:"1"},{value:"3"}]}},overflow:{defaultValue:{value:"hidden"},description:"",name:"overflow",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"visible"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/BannerSwiper/components/mobile/BannerSwiperMobile.tsx#BannerSwiperMobile"]={docgenInfo:BannerSwiperMobile.__docgenInfo,name:"BannerSwiperMobile",path:"src/shared/ui/BannerSwiper/components/mobile/BannerSwiperMobile.tsx#BannerSwiperMobile"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const ArrowBottom=function SvgArrowBottom(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},props),_path||(_path=react.createElement("path",{d:"M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"})))};var config_scrollCoef=.8,BannerSwiperDesktop_jsx=react.createElement,BannerSwiperDesktop=(0,react.memo)((function(_ref){var children=_ref.children,_ref$rows=_ref.rows,rows=void 0===_ref$rows?1:_ref$rows,_ref$overflow=_ref.overflow,overflow=void 0===_ref$overflow?"hidden":_ref$overflow,className=_ref.className,_useState=(0,react.useState)(!0),isStart=_useState[0],setIsStart=_useState[1],_useState2=(0,react.useState)(!1),isEnd=_useState2[0],setIsEnd=_useState2[1],_useSpring=(0,react_spring_web_modern.q_)((function(){return{x:0}})),_useSpring2=(0,slicedToArray.Z)(_useSpring,2),x=_useSpring2[0].x,api=_useSpring2[1],ref=(0,react.useRef)(),containerRef=(0,react.useRef)();(0,react.useEffect)((function(){var handler=function handler(){checkEdges(x.get())};return setTimeout(handler,0),window.addEventListener("resize",handler),function(){return window.removeEventListener("resize",handler)}}));for(var checkEdges=function checkEdges(targetX){if(null!=ref&&ref.current&&null!=containerRef&&containerRef.current){if(ref.current.offsetWidth<=containerRef.current.offsetWidth)return isStart||setIsStart(!0),void(isEnd||setIsEnd(!0));var viewPortWidth=containerRef.current.offsetWidth,leftEdgeX=targetX,rightEdgeX=targetX+ref.current.offsetWidth;leftEdgeX<0?isStart&&setIsStart(!1):isStart||setIsStart(!0),rightEdgeX>viewPortWidth?isEnd&&setIsEnd(!1):isEnd||setIsEnd(!0)}},arrayOfArrays=[],i=0;i<children.length;i+=rows)arrayOfArrays.push(children.slice(i,i+rows));var containerClasses=classnames_default()(BannerSwiper_BannerSwiper_module.container,BannerSwiper_BannerSwiper_module[mapOverflowToClass[overflow]],className);return BannerSwiperDesktop_jsx("div",{className:containerClasses,ref:containerRef},BannerSwiperDesktop_jsx(react_spring_web_modern.q.div,{ref,style:{x},className:BannerSwiper_BannerSwiper_module.swiper},arrayOfArrays.map((function(array,i){return BannerSwiperDesktop_jsx("div",{key:i},array.map((function(element){return element})))}))),!isStart&&BannerSwiperDesktop_jsx("button",{className:BannerSwiper_BannerSwiper_module.prev,onClick:function onPrevius(){if(null!=ref&&ref.current&&null!=containerRef&&containerRef.current){var scrollWidth=containerRef.current.offsetWidth*config_scrollCoef;ref.current.offsetWidth<=containerRef.current.offsetWidth||(x.get()+scrollWidth>=0?(api.start({x:0}),checkEdges(0)):(api.start({x:x.get()+scrollWidth}),checkEdges(x.get()+scrollWidth)))}}},BannerSwiperDesktop_jsx(ArrowBottom,null)),!isEnd&&BannerSwiperDesktop_jsx("button",{className:BannerSwiper_BannerSwiper_module.next,onClick:function onNext(){if(null!=ref&&ref.current&&null!=containerRef&&containerRef.current){var scrollWidth=containerRef.current.offsetWidth*config_scrollCoef,avaliableDragOffset=-ref.current.offsetWidth+containerRef.current.offsetWidth;ref.current.offsetWidth<=containerRef.current.offsetWidth||(x.get()-scrollWidth<=avaliableDragOffset?(api.start({x:avaliableDragOffset}),checkEdges(avaliableDragOffset)):(api.start({x:x.get()-scrollWidth}),checkEdges(x.get()-scrollWidth)))}}},BannerSwiperDesktop_jsx(ArrowBottom,null)))}));BannerSwiperDesktop.displayName="BannerSwiperDesktop";try{BannerSwiperDesktop.displayName="BannerSwiperDesktop",BannerSwiperDesktop.__docgenInfo={description:"",displayName:"BannerSwiperDesktop",props:{rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"enum",value:[{value:"1"},{value:"3"}]}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"visible"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/BannerSwiper/components/desktop/BannerSwiperDesktop.tsx#BannerSwiperDesktop"]={docgenInfo:BannerSwiperDesktop.__docgenInfo,name:"BannerSwiperDesktop",path:"src/shared/ui/BannerSwiper/components/desktop/BannerSwiperDesktop.tsx#BannerSwiperDesktop"})}catch(__react_docgen_typescript_loader_error){}var _excluded=["children","isMobile"],BannerSwiper_jsx=react.createElement,BannerSwiper=function BannerSwiper(_ref){var children=_ref.children,isMobile=_ref.isMobile,rest=(0,objectWithoutProperties.Z)(_ref,_excluded);return BannerSwiper_jsx(isMobile?BannerSwiperMobile:BannerSwiperDesktop,rest,children)};BannerSwiper.displayName="BannerSwiper",BannerSwiper.__docgenInfo={description:"",methods:[],displayName:"BannerSwiper"};try{BannerSwiper.displayName="BannerSwiper",BannerSwiper.__docgenInfo={description:"",displayName:"BannerSwiper",props:{rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"enum",value:[{value:"1"},{value:"3"}]}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"visible"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isMobile:{defaultValue:null,description:"",name:"isMobile",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/BannerSwiper/BannerSwiper.tsx#BannerSwiper"]={docgenInfo:BannerSwiper.__docgenInfo,name:"BannerSwiper",path:"src/shared/ui/BannerSwiper/BannerSwiper.tsx#BannerSwiper"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/BannerSwiper/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>_BannerSwiper__WEBPACK_IMPORTED_MODULE_0__.$});var _BannerSwiper__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/ui/BannerSwiper/BannerSwiper.tsx")},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/BannerSwiper/BannerSwiper.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.BannerSwiper_swiper__1SRYM{width:fit-content;display:flex;align-items:flex-start;touch-action:"none"}.BannerSwiper_container__xSesk{width:100%;position:relative}.BannerSwiper_overflow-hidden__IHqMg{overflow-x:hidden}.BannerSwiper_overflow-visible__3VYLN{overflow-x:visible}.BannerSwiper_prev__WN75K,.BannerSwiper_next__g1eOA{position:absolute;top:50%;transform:translateY(-50%);cursor:pointer;border-radius:50%;overflow:hidden;padding:0;display:flex;align-items:center;justify-content:space-around;height:30px;width:30px;transition:all .3s ease 0s}.BannerSwiper_prev__WN75K>svg,.BannerSwiper_next__g1eOA>svg{fill:#fff;height:25px;width:25px}.BannerSwiper_prev__WN75K:hover:enabled,.BannerSwiper_next__g1eOA:hover:enabled{background-color:rgba(255,255,255,.137254902)}.BannerSwiper_prev__WN75K:active:enabled,.BannerSwiper_next__g1eOA:active:enabled{background-color:rgba(255,255,255,.4392156863);transform:translateY(-50%) scale(0.95)}.BannerSwiper_prev__WN75K:disabled>svg,.BannerSwiper_next__g1eOA:disabled>svg{fill:rgba(255,255,255,.1764705882)}.BannerSwiper_prev__WN75K{left:0}.BannerSwiper_prev__WN75K>svg{transform:rotate(90deg)}.BannerSwiper_next__g1eOA{right:0}.BannerSwiper_next__g1eOA>svg{transform:rotate(-90deg)}',"",{version:3,sources:["webpack://./src/shared/ui/BannerSwiper/BannerSwiper.module.scss"],names:[],mappings:"AAAA,4BACI,iBAAA,CACA,YAAA,CACA,sBAAA,CACA,mBAAA,CAGJ,+BACI,UAAA,CACA,iBAAA,CAGJ,qCACI,iBAAA,CAGJ,sCACI,kBAAA,CAGJ,oDAEI,iBAAA,CACA,OAAA,CACA,0BAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,SAAA,CACA,YAAA,CACA,kBAAA,CACA,4BAAA,CACA,WAAA,CACA,UAAA,CACA,0BAAA,CAEA,4DACI,SAAA,CACA,WAAA,CACA,UAAA,CAGJ,gFACI,6CAAA,CAGJ,kFACI,8CAAA,CACA,sCAAA,CAGJ,8EACI,kCAAA,CAIR,0BACI,MAAA,CAEA,8BACI,uBAAA,CAIR,0BACI,OAAA,CAEA,8BACI,wBAAA",sourcesContent:[".swiper {\r\n    width: fit-content;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    touch-action: 'none';\r\n}\r\n\r\n.container {\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.overflow-hidden{\r\n    overflow-x: hidden;\r\n}\r\n\r\n.overflow-visible{\r\n    overflow-x: visible;\r\n}\r\n\r\n.prev,\r\n.next {\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    cursor: pointer;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    height: 30px;\r\n    width: 30px;\r\n    transition: all 0.3s ease 0s;\r\n\r\n    & > svg {\r\n        fill: #fff;\r\n        height: 25px;\r\n        width: 25px;\r\n    }\r\n\r\n    &:hover:enabled {\r\n        background-color: #ffffff23;\r\n    }\r\n\r\n    &:active:enabled {\r\n        background-color: #ffffff70;\r\n        transform: translateY(-50%) scale(0.95);\r\n    }\r\n\r\n    &:disabled > svg  {\r\n        fill: #ffffff2d;\r\n    }\r\n}\r\n\r\n.prev {\r\n    left: 0;\r\n\r\n    & > svg {\r\n        transform: rotate(90deg);\r\n    }\r\n}\r\n\r\n.next {\r\n    right: 0;\r\n\r\n    & > svg {\r\n        transform: rotate(-90deg);\r\n    }\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={swiper:"BannerSwiper_swiper__1SRYM",container:"BannerSwiper_container__xSesk","overflow-hidden":"BannerSwiper_overflow-hidden__IHqMg","overflow-visible":"BannerSwiper_overflow-visible__3VYLN",prev:"BannerSwiper_prev__WN75K",next:"BannerSwiper_next__g1eOA"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);