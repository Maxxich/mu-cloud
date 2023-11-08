"use strict";(self.webpackChunkmu_cloud=self.webpackChunkmu_cloud||[]).push([[1413],{"./src/shared/assets/images/neon.jpeg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/neon.2d755c22.jpeg",height:3796,width:3144,blurDataURL:"static/media/neon.2d755c22.jpeg"}},"./src/widgets/UserHeader/ui/UserHeader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Desktop:()=>Desktop,Mobile:()=>Mobile,default:()=>UserHeader_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),neon=__webpack_require__("./src/shared/assets/images/neon.jpeg"),StoreDecorator=__webpack_require__("./src/shared/config/storybook/StoreDecorator/StoreDecorator.tsx"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);function getNoun(number,one,two,five){var n=Math.abs(number);return(n%=100)>=5&&n<=20?five:1===(n%=10)?one:n>=2&&n<=4?two:five}var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),MobileHeader_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/widgets/UserHeader/ui/Mobile/MobileHeader.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(MobileHeader_module.Z,options);const Mobile_MobileHeader_module=MobileHeader_module.Z&&MobileHeader_module.Z.locals?MobileHeader_module.Z.locals:void 0;var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),next_auth_react=__webpack_require__("./node_modules/next-auth/react/index.js"),user=__webpack_require__("./src/entity/user/index.ts"),Button=__webpack_require__("./src/shared/ui/Button/index.ts"),RequireAuthDialog=__webpack_require__("./src/shared/ui/RequireAuthDialog/index.ts"),__jsx=react.createElement,Subscribe=function Subscribe(_ref){var className=_ref.className,id=_ref.id,session=(0,next_auth_react.useSession)(),_userRtkApi$useCheckS=user.Tk.useCheckSubscribeQuery({id}),subscribed=_userRtkApi$useCheckS.data,isError=_userRtkApi$useCheckS.isError,_userRtkApi$useCreate=user.Tk.useCreateSubscribeMutation(),triggerCreate=(0,slicedToArray.Z)(_userRtkApi$useCreate,1)[0],_userRtkApi$useRemove=user.Tk.useRemoveSubscribeMutation(),triggerRemove=(0,slicedToArray.Z)(_userRtkApi$useRemove,1)[0],_useState=(0,react.useState)(!1),isOpen=_useState[0],setIsOpen=_useState[1],onClick=(0,react.useCallback)((function(){if("authenticated"!==session.status)return setIsOpen(!0);isError||(subscribed?triggerRemove({id}):triggerCreate({id}))}),[triggerRemove,triggerCreate,isError,subscribed,id,session]),text=subscribed?"Вы подписаны":"Подписаться";return __jsx(react.Fragment,null,__jsx(Button.z,{className,onClick},text),__jsx(RequireAuthDialog._,{open:isOpen,onClose:function onClose(){setIsOpen(!1)}}))};Subscribe.__docgenInfo={description:"",methods:[],displayName:"Subscribe"};try{Subscribe.displayName="Subscribe",Subscribe.__docgenInfo={description:"",displayName:"Subscribe",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/UserHeader/ui/Subscribe.tsx#Subscribe"]={docgenInfo:Subscribe.__docgenInfo,name:"Subscribe",path:"src/widgets/UserHeader/ui/Subscribe.tsx#Subscribe"})}catch(__react_docgen_typescript_loader_error){}var MobileHeaderMobile_jsx=react.createElement,UserHeaderMobile=function UserHeaderMobile(_ref){var user=_ref.user,totalTracks=_ref.totalTracks,listeningCount=_ref.listeningCount,viewerId=_ref.viewerId,url=user.picture_source.big,nameMods=(0,defineProperty.Z)({},Mobile_MobileHeader_module.with_button,viewerId!==user.id);return MobileHeaderMobile_jsx("header",null,MobileHeaderMobile_jsx("div",{className:Mobile_MobileHeader_module.image_block},MobileHeaderMobile_jsx(next_image.Z,{src:url,alt:"picture",blurDataURL:url,placeholder:"blur",fill:!0,objectFit:"cover",className:Mobile_MobileHeader_module.center_image}),MobileHeaderMobile_jsx("div",{className:classnames_default()(Mobile_MobileHeader_module.name,nameMods)},user.name),viewerId!==user.id&&MobileHeaderMobile_jsx(Subscribe,{className:Mobile_MobileHeader_module.button,id:user.id})),MobileHeaderMobile_jsx("div",{className:Mobile_MobileHeader_module.subtitle},user.adress," ",listeningCount," ",getNoun(listeningCount,"прослушивание","прослушивания","прослушиваний")," ",totalTracks," ",getNoun(totalTracks,"трек","трека","треков")))};UserHeaderMobile.displayName="UserHeaderMobile",UserHeaderMobile.__docgenInfo={description:"",methods:[],displayName:"UserHeaderMobile"};try{UserHeaderMobile.displayName="UserHeaderMobile",UserHeaderMobile.__docgenInfo={description:"",displayName:"UserHeaderMobile",props:{user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"User"}},totalTracks:{defaultValue:null,description:"",name:"totalTracks",required:!0,type:{name:"number"}},listeningCount:{defaultValue:null,description:"",name:"listeningCount",required:!0,type:{name:"number"}},viewerId:{defaultValue:null,description:"",name:"viewerId",required:!0,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/UserHeader/ui/Mobile/MobileHeaderMobile.tsx#UserHeaderMobile"]={docgenInfo:UserHeaderMobile.__docgenInfo,name:"UserHeaderMobile",path:"src/widgets/UserHeader/ui/Mobile/MobileHeaderMobile.tsx#UserHeaderMobile"})}catch(__react_docgen_typescript_loader_error){}var lib=__webpack_require__("./node_modules/react-device-detect/dist/lib.js"),UserHeader_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/widgets/UserHeader/ui/Desktop/UserHeader.module.scss"),UserHeader_module_options={};UserHeader_module_options.styleTagTransform=styleTagTransform_default(),UserHeader_module_options.setAttributes=setAttributesWithoutAttributes_default(),UserHeader_module_options.insert=insertBySelector_default().bind(null,"head"),UserHeader_module_options.domAPI=styleDomAPI_default(),UserHeader_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(UserHeader_module.Z,UserHeader_module_options);const Desktop_UserHeader_module=UserHeader_module.Z&&UserHeader_module.Z.locals?UserHeader_module.Z.locals:void 0;var UserHeaderDesktop_jsx=react.createElement,UserHeaderDesktop=function UserHeaderDesktop(_ref){var user=_ref.user,totalTracks=_ref.totalTracks,listeningCount=_ref.listeningCount,viewerId=_ref.viewerId,mods=(0,defineProperty.Z)({},Desktop_UserHeader_module.desktop,!lib.tq),classes=classnames_default()(Desktop_UserHeader_module.header,mods),url=user.picture_source.big;return UserHeaderDesktop_jsx("header",{className:classes},UserHeaderDesktop_jsx(next_image.Z,{src:url,alt:"picture",blurDataURL:url,placeholder:"blur",height:200,width:200,className:Desktop_UserHeader_module.center_image}),UserHeaderDesktop_jsx("div",{className:Desktop_UserHeader_module.info},UserHeaderDesktop_jsx("h1",{className:Desktop_UserHeader_module.name},user.name),UserHeaderDesktop_jsx("div",{className:Desktop_UserHeader_module.subtitle},user.adress," ",listeningCount," ",getNoun(listeningCount,"прослушивание","прослушивания","прослушиваний")," ",totalTracks," ",getNoun(totalTracks,"трек","трека","треков"))),viewerId!==user.id&&UserHeaderDesktop_jsx(Subscribe,{className:Desktop_UserHeader_module.button,id:user.id}))};UserHeaderDesktop.displayName="UserHeaderDesktop",UserHeaderDesktop.__docgenInfo={description:"",methods:[],displayName:"UserHeaderDesktop"};try{UserHeaderDesktop.displayName="UserHeaderDesktop",UserHeaderDesktop.__docgenInfo={description:"",displayName:"UserHeaderDesktop",props:{user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"User"}},totalTracks:{defaultValue:null,description:"",name:"totalTracks",required:!0,type:{name:"number"}},listeningCount:{defaultValue:null,description:"",name:"listeningCount",required:!0,type:{name:"number"}},viewerId:{defaultValue:null,description:"",name:"viewerId",required:!0,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/UserHeader/ui/Desktop/UserHeaderDesktop.tsx#UserHeaderDesktop"]={docgenInfo:UserHeaderDesktop.__docgenInfo,name:"UserHeaderDesktop",path:"src/widgets/UserHeader/ui/Desktop/UserHeaderDesktop.tsx#UserHeaderDesktop"})}catch(__react_docgen_typescript_loader_error){}var _Desktop$parameters,_Desktop$parameters2,_Mobile$parameters,_Mobile$parameters2,_excluded=["isMobile"],UserHeader_jsx=react.createElement,UserHeader=function UserHeader(_ref){var isMobile=_ref.isMobile,rest=(0,objectWithoutProperties.Z)(_ref,_excluded);return UserHeader_jsx(isMobile?UserHeaderMobile:UserHeaderDesktop,rest)};UserHeader.displayName="UserHeader",UserHeader.__docgenInfo={description:"",methods:[],displayName:"UserHeader"};try{UserHeader.displayName="UserHeader",UserHeader.__docgenInfo={description:"",displayName:"UserHeader",props:{user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"User"}},totalTracks:{defaultValue:null,description:"",name:"totalTracks",required:!0,type:{name:"number"}},listeningCount:{defaultValue:null,description:"",name:"listeningCount",required:!0,type:{name:"number"}},viewerId:{defaultValue:null,description:"",name:"viewerId",required:!0,type:{name:"number | undefined"}},isMobile:{defaultValue:null,description:"",name:"isMobile",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/UserHeader/ui/UserHeader.tsx#UserHeader"]={docgenInfo:UserHeader.__docgenInfo,name:"UserHeader",path:"src/widgets/UserHeader/ui/UserHeader.tsx#UserHeader"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const UserHeader_stories={title:"widgets/UserHeader",component:UserHeader,parameters:{layout:"centered",loki:{skip:!0}},decorators:[(0,StoreDecorator.l)({})],tags:["autodocs"]};var args={isMobile:!1,listeningCount:21231,totalTracks:23,user:{adress:"@maxich",id:1,name:"Maxich",picture_source:{big:neon.Z.src,medium:neon.Z.src,small:neon.Z.src}},viewerId:2},Desktop={args},Mobile={args:_objectSpread(_objectSpread({},args),{},{isMobile:!0})};Desktop.parameters=_objectSpread(_objectSpread({},Desktop.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Desktop$parameters=Desktop.parameters)||void 0===_Desktop$parameters?void 0:_Desktop$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args\n}"},null===(_Desktop$parameters2=Desktop.parameters)||void 0===_Desktop$parameters2||null===(_Desktop$parameters2=_Desktop$parameters2.docs)||void 0===_Desktop$parameters2?void 0:_Desktop$parameters2.source)})}),Mobile.parameters=_objectSpread(_objectSpread({},Mobile.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Mobile$parameters=Mobile.parameters)||void 0===_Mobile$parameters?void 0:_Mobile$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    ...args,\n    isMobile: true\n  }\n}"},null===(_Mobile$parameters2=Mobile.parameters)||void 0===_Mobile$parameters2||null===(_Mobile$parameters2=_Mobile$parameters2.docs)||void 0===_Mobile$parameters2?void 0:_Mobile$parameters2.source)})})},"./src/entity/user/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Tk:()=>userRtkApi});__webpack_require__("./src/entity/user/ui/UserCard/UserCard.tsx"),__webpack_require__("./src/entity/user/ui/UserCardSkeleton/UserCardSkeleton.tsx"),__webpack_require__("./src/entity/user/ui/UserBanner/UserBanner.tsx"),__webpack_require__("./src/entity/user/ui/UserBannerSkeleton/UserBannerSkeleton.tsx"),__webpack_require__("./src/entity/user/ui/UserList/UserList.tsx"),__webpack_require__("./src/entity/user/ui/UserListSkeleton/UserListSkeleton.tsx"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),__webpack_require__("./src/shared/const/backendUrl.ts"),__webpack_require__("./src/shared/lib/helpers/createUrlSearchParams/createUrlSearchParams.ts"),__webpack_require__("./src/entity/user/lib/createUserImageSrc.ts");var userRtkApi=__webpack_require__("./src/shared/api/index.ts").p.injectEndpoints({endpoints:function endpoints(builder){return{createSubscribe:builder.mutation({query:function query(_ref){var id=_ref.id;return{url:"/user-private/sub/".concat(id),method:"POST"}},invalidatesTags:["subscribe"]}),removeSubscribe:builder.mutation({query:function query(_ref2){var id=_ref2.id;return{url:"/user-private/sub/".concat(id),method:"DELETE"}},invalidatesTags:["subscribe"]}),checkSubscribe:builder.query({query:function query(_ref3){var id=_ref3.id;return"/user-private/sub/".concat(id)},providesTags:["subscribe"]}),sendEmailConfirmation:builder.mutation({query:function query(){return{url:"/auth-private/confirm/link",method:"GET"}}})}},overrideExisting:!0})},"./src/entity/user/lib/createUserImageSrc.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>createUserImagesSrc});var _shared_const_avatarPlaceholders__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/const/avatarPlaceholders.ts"),createUserImagesSrc=function createUserImagesSrc(user){return{big:user.picture_source.big?user.picture_source.big:_shared_const_avatarPlaceholders__WEBPACK_IMPORTED_MODULE_0__.k,medium:user.picture_source.medium?user.picture_source.medium:_shared_const_avatarPlaceholders__WEBPACK_IMPORTED_MODULE_0__.k,small:user.picture_source.small?user.picture_source.small:_shared_const_avatarPlaceholders__WEBPACK_IMPORTED_MODULE_0__.k}}},"./src/entity/user/ui/UserBanner/UserBanner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>UserBanner});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_shared_ui_BannerSwiper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/ui/BannerSwiper/index.ts"),_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/entity/user/ui/UserCard/UserCard.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,UserBanner=function UserBanner(_ref){var users=_ref.users,className=_ref.className,isMobile=_ref.isMobile;return __jsx(_shared_ui_BannerSwiper__WEBPACK_IMPORTED_MODULE_1__.$,{className,isMobile},users.map((function(u){return __jsx(_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_2__.O,{href:"/users/".concat(u.adress),image_src:u.picture_source.small,name:u.name,variant:"column",key:u.id})})))};UserBanner.displayName="UserBanner",UserBanner.__docgenInfo={description:"",methods:[],displayName:"UserBanner"};try{UserBanner.displayName="UserBanner",UserBanner.__docgenInfo={description:"",displayName:"UserBanner",props:{users:{defaultValue:null,description:"",name:"users",required:!0,type:{name:"User[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isMobile:{defaultValue:null,description:"",name:"isMobile",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/entity/user/ui/UserBanner/UserBanner.tsx#UserBanner"]={docgenInfo:UserBanner.__docgenInfo,name:"UserBanner",path:"src/entity/user/ui/UserBanner/UserBanner.tsx#UserBanner"})}catch(__react_docgen_typescript_loader_error){}},"./src/entity/user/ui/UserListSkeleton/UserListSkeleton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>UserListSkeleton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_UserList_UserList_module_scss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/entity/user/ui/UserList/UserList.module.scss"),_UserCardSkeleton_UserCardSkeleton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/entity/user/ui/UserCardSkeleton/UserCardSkeleton.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,UserListSkeleton=function UserListSkeleton(_ref){for(var itemsCount=_ref.itemsCount,items=[],i=0;i<itemsCount;i++)items.push(i);return __jsx("div",{className:_UserList_UserList_module_scss__WEBPACK_IMPORTED_MODULE_1__.Z.container},items.map((function(u){return __jsx(_UserCardSkeleton_UserCardSkeleton__WEBPACK_IMPORTED_MODULE_2__.U,{variant:"row",width:"adaptive",key:u})})))};UserListSkeleton.displayName="UserListSkeleton",UserListSkeleton.__docgenInfo={description:"",methods:[],displayName:"UserListSkeleton"};try{UserListSkeleton.displayName="UserListSkeleton",UserListSkeleton.__docgenInfo={description:"",displayName:"UserListSkeleton",props:{itemsCount:{defaultValue:null,description:"",name:"itemsCount",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/entity/user/ui/UserListSkeleton/UserListSkeleton.tsx#UserListSkeleton"]={docgenInfo:UserListSkeleton.__docgenInfo,name:"UserListSkeleton",path:"src/entity/user/ui/UserListSkeleton/UserListSkeleton.tsx#UserListSkeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/entity/user/ui/UserList/UserList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>UserList});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_UserList_module_scss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/entity/user/ui/UserList/UserList.module.scss"),_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/entity/user/ui/UserCard/UserCard.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,UserList=function UserList(_ref){var users=_ref.users;return __jsx("div",{className:_UserList_module_scss__WEBPACK_IMPORTED_MODULE_1__.Z.container},users.map((function(u){return __jsx(_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_2__.O,{href:"/users/".concat(u.adress),image_src:u.picture_source.small,name:u.name,variant:"row",width:"adaptive",key:u.id})})))};UserList.displayName="UserList",UserList.__docgenInfo={description:"",methods:[],displayName:"UserList"};try{UserList.displayName="UserList",UserList.__docgenInfo={description:"",displayName:"UserList",props:{users:{defaultValue:null,description:"",name:"users",required:!0,type:{name:"User[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/entity/user/ui/UserList/UserList.tsx#UserList"]={docgenInfo:UserList.__docgenInfo,name:"UserList",path:"src/entity/user/ui/UserList/UserList.tsx#UserList"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/lib/helpers/createUrlSearchParams/createUrlSearchParams.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function createUrlSearchParams(params){var recordParams={},keys=Object.keys(params);for(var i in keys){var param=params[keys[i]];param&&(recordParams[keys[i]]=param.toString())}return new URLSearchParams(recordParams).toString()}__webpack_require__.d(__webpack_exports__,{o:()=>createUrlSearchParams})},"./src/shared/ui/Dialog/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>_Dialog__WEBPACK_IMPORTED_MODULE_0__.V});var _Dialog__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/ui/Dialog/Dialog.ts")},"./src/shared/ui/RequireAuthDialog/RequireAuthDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>RequireAuthDialog});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_navigation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/navigation.js"),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/ui/Button/index.ts"),_Dialog__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/ui/Dialog/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,RequireAuthDialog=function RequireAuthDialog(_ref){var onClose=_ref.onClose,open=_ref.open,initialFocus=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),router=(0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();return __jsx(_Dialog__WEBPACK_IMPORTED_MODULE_3__.V.Wrapper,{onClose,open,initialFocus},__jsx(_Dialog__WEBPACK_IMPORTED_MODULE_3__.V.Panel,null,__jsx(_Dialog__WEBPACK_IMPORTED_MODULE_3__.V.Title,null,"Добавить к себе"),__jsx(_Dialog__WEBPACK_IMPORTED_MODULE_3__.V.Description,null,"Для данного действия требуется выполнить вход"),__jsx(_Dialog__WEBPACK_IMPORTED_MODULE_3__.V.ButtonsGroup,null,__jsx(_Button__WEBPACK_IMPORTED_MODULE_2__.z,{onClick:function onCancel(){onClose(!1)}},"Отмена"),__jsx(_Button__WEBPACK_IMPORTED_MODULE_2__.z,{ref:initialFocus,onClick:function onSign(){onClose(!0),router.push("/signin")}},"Войти"))))};RequireAuthDialog.displayName="RequireAuthDialog",RequireAuthDialog.__docgenInfo={description:"",methods:[],displayName:"RequireAuthDialog"};try{RequireAuthDialog.displayName="RequireAuthDialog",RequireAuthDialog.__docgenInfo={description:"",displayName:"RequireAuthDialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(value: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/RequireAuthDialog/RequireAuthDialog.tsx#RequireAuthDialog"]={docgenInfo:RequireAuthDialog.__docgenInfo,name:"RequireAuthDialog",path:"src/shared/ui/RequireAuthDialog/RequireAuthDialog.tsx#RequireAuthDialog"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/RequireAuthDialog/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>_RequireAuthDialog__WEBPACK_IMPORTED_MODULE_0__._});var _RequireAuthDialog__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/ui/RequireAuthDialog/RequireAuthDialog.tsx")},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/entity/user/ui/UserList/UserList.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".UserList_container__yYs79{display:flex;align-items:center;flex-wrap:wrap}","",{version:3,sources:["webpack://./src/entity/user/ui/UserList/UserList.module.scss"],names:[],mappings:"AAAA,2BACI,YAAA,CACA,kBAAA,CACA,cAAA",sourcesContent:[".container {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"UserList_container__yYs79"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/widgets/UserHeader/ui/Desktop/UserHeader.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".UserHeader_header__3mBZH{width:100%;display:flex;align-items:center;justify-content:flex-start;gap:20px}.UserHeader_background__sYhfq{object-fit:cover;filter:blur(10px)}.UserHeader_center_image__C8_uX{min-width:200px;border-radius:18px;overflow:hidden;background-color:var(--skeleton-animation-color-start)}.UserHeader_info__1PKrZ{display:flex;align-items:flex-start;flex-direction:column;flex:1 1 auto;overflow:hidden}.UserHeader_name__4SYt_{font-size:30px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%}.UserHeader_subtitle__1_IAe{font-size:16px;color:var(--secondary-color);text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%}.UserHeader_subtitle__1_IAe{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.UserHeader_button__lM0aI{margin-left:auto}","",{version:3,sources:["webpack://./src/widgets/UserHeader/ui/Desktop/UserHeader.module.scss"],names:[],mappings:"AAAA,0BACI,UAAA,CACA,YAAA,CACA,kBAAA,CACA,0BAAA,CACA,QAAA,CAGJ,8BACI,gBAAA,CACA,iBAAA,CAGJ,gCACI,eAAA,CACA,kBAAA,CACA,eAAA,CACA,sDAAA,CAGJ,wBACI,YAAA,CACA,sBAAA,CACA,qBAAA,CACA,aAAA,CACA,eAAA,CAGJ,wBACI,cAAA,CACA,sBAAA,CACA,eAAA,CACA,kBAAA,CACA,UAAA,CAGJ,4BACI,cAAA,CACA,4BAAA,CACA,sBAAA,CACA,eAAA,CACA,kBAAA,CACA,UAAA,CAGJ,4BACI,kBAAA,CACA,sBAAA,CACA,eAAA,CAGJ,0BACI,gBAAA",sourcesContent:[".header {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    gap: 20px;\r\n}\r\n\r\n.background {\r\n    object-fit: cover;\r\n    filter: blur(10px); \r\n}\r\n\r\n.center_image {\r\n    min-width: 200px;\r\n    border-radius: 18px;\r\n    overflow: hidden;\r\n    background-color: var(--skeleton-animation-color-start);\r\n}\r\n\r\n.info {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n    flex: 1 1 auto;\r\n    overflow: hidden;\r\n}\r\n\r\n.name {\r\n    font-size: 30px;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    width: 100%;\r\n}\r\n\r\n.subtitle {\r\n    font-size: 16px;\r\n    color: var(--secondary-color);\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    width: 100%;\r\n}\r\n\r\n.subtitle {\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n}\r\n\r\n.button {\r\n    margin-left: auto;\r\n}\r\n\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={header:"UserHeader_header__3mBZH",background:"UserHeader_background__sYhfq",center_image:"UserHeader_center_image__C8_uX",info:"UserHeader_info__1PKrZ",name:"UserHeader_name__4SYt_",subtitle:"UserHeader_subtitle__1_IAe",button:"UserHeader_button__lM0aI"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/widgets/UserHeader/ui/Mobile/MobileHeader.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".MobileHeader_image_block__ggyoz{position:relative;height:375px;width:100vw;margin:0 -15px 10px}.MobileHeader_center_image__Xi_df{border-bottom-left-radius:18px;border-bottom-right-radius:18px;overflow:hidden;position:fixed;background-color:var(--skeleton-animation-color-start)}.MobileHeader_name__iUJd7{position:absolute;bottom:15px;left:15px;font-size:25px;font-weight:700}.MobileHeader_with_button__PmzpZ{bottom:55px}.MobileHeader_subtitle__aSKGl{font-size:16px;color:var(--secondary-color);text-overflow:ellipsis;overflow:hidden;width:100%}.MobileHeader_button__sh9Pb{position:absolute;bottom:15px;left:15px}","",{version:3,sources:["webpack://./src/widgets/UserHeader/ui/Mobile/MobileHeader.module.scss"],names:[],mappings:"AAAA,iCACI,iBAAA,CACA,YAAA,CACA,WAAA,CACA,mBAAA,CAGJ,kCACI,8BAAA,CACA,+BAAA,CACA,eAAA,CACA,cAAA,CACA,sDAAA,CAGJ,0BACI,iBAAA,CACA,WAAA,CACA,SAAA,CACA,cAAA,CACA,eAAA,CAGJ,iCACI,WAAA,CAGJ,8BACI,cAAA,CACA,4BAAA,CACA,sBAAA,CACA,eAAA,CACA,UAAA,CAGJ,4BACI,iBAAA,CACA,WAAA,CACA,SAAA",sourcesContent:[".image_block {\r\n    position: relative;\r\n    height: 375px;\r\n    width: 100vw;\r\n    margin: 0 -15px 10px;\r\n}\r\n\r\n.center_image {\r\n    border-bottom-left-radius: 18px;\r\n    border-bottom-right-radius: 18px;\r\n    overflow: hidden;\r\n    position: fixed;\r\n    background-color: var(--skeleton-animation-color-start);\r\n}\r\n\r\n.name {\r\n    position: absolute;\r\n    bottom: 15px;\r\n    left: 15px;\r\n    font-size: 25px;\r\n    font-weight: 700;\r\n}\r\n\r\n.with_button {\r\n    bottom: 55px;\r\n}\r\n\r\n.subtitle {\r\n    font-size: 16px;\r\n    color: var(--secondary-color);\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    width: 100%;\r\n}\r\n\r\n.button {\r\n    position: absolute;\r\n    bottom: 15px;\r\n    left: 15px;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={image_block:"MobileHeader_image_block__ggyoz",center_image:"MobileHeader_center_image__Xi_df",name:"MobileHeader_name__iUJd7",with_button:"MobileHeader_with_button__PmzpZ",subtitle:"MobileHeader_subtitle__aSKGl",button:"MobileHeader_button__sh9Pb"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/entity/user/ui/UserList/UserList.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_UserList_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/entity/user/ui/UserList/UserList.module.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_UserList_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_UserList_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_UserList_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_UserList_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0}}]);