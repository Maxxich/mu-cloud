"use strict";(self.webpackChunkmu_cloud=self.webpackChunkmu_cloud||[]).push([[9268],{"./src/feature/SignUp/ui/SignUp.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,EmailError:()=>EmailError,Loading:()=>Loading,NameError:()=>NameError,PasswordEmpty:()=>PasswordEmpty,PasswordsNotEqualsEmpty:()=>PasswordsNotEqualsEmpty,RequestError:()=>RequestError,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Loading$parameters,_Loading$parameters2,_NameError$parameters,_NameError$parameters2,_PasswordEmpty$parame,_PasswordEmpty$parame2,_PasswordsNotEqualsEm,_PasswordsNotEqualsEm2,_RequestError$paramet,_RequestError$paramet2,_EmailError$parameter,_EmailError$parameter2,C_Users_Desktop_mu_cloud_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_shared_config_storybook_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/config/storybook/StoreDecorator/StoreDecorator.tsx");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,C_Users_Desktop_mu_cloud_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"feature/SignUp",component:__webpack_require__("./src/feature/SignUp/ui/SignUp.tsx").M,parameters:{layout:"centered",nextAuthMock:{session:"unknown"}},argTypes:{onClick:{action:"clicked"}},tags:["autodocs"]};var args={},Default={args};Default.decorators=[(0,_shared_config_storybook_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_1__.l)({signup:{email:"example@email.ru",name:"Maxich",password:"00001111",passwordConfirm:"00001111",status:"idle",validationErrors:{}}})];var Loading={args};Loading.decorators=[(0,_shared_config_storybook_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_1__.l)({signup:{email:"example@email.ru",name:"Maxich",password:"00001111",passwordConfirm:"00001111",status:"loading",validationErrors:{}}})];var NameError={args};NameError.decorators=[(0,_shared_config_storybook_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_1__.l)({signup:{email:"example@email.ru",name:"",password:"00001111",passwordConfirm:"00001111",status:"idle",validationErrors:{name:{empty:!0}}}})];var PasswordEmpty={args};PasswordEmpty.decorators=[(0,_shared_config_storybook_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_1__.l)({signup:{email:"example@email.ru",name:"Maxich",password:"",passwordConfirm:"00001111",status:"idle",validationErrors:{password:{empty:!0}}}})];var PasswordsNotEqualsEmpty={args};PasswordsNotEqualsEmpty.decorators=[(0,_shared_config_storybook_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_1__.l)({signup:{email:"example@email.ru",name:"Maxich",password:"0012",passwordConfirm:"00001111",status:"idle",validationErrors:{passwordConfirm:{notEqualsToPassword:!0}}}})];var RequestError={args};RequestError.decorators=[(0,_shared_config_storybook_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_1__.l)({signup:{email:"example@email.ru",name:"Maxich",password:"00001111",passwordConfirm:"00001111",status:"error",requestError:"Сервер недоступен",validationErrors:{}}})];var EmailError={args};EmailError.decorators=[(0,_shared_config_storybook_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_1__.l)({signup:{email:"",name:"Maxich",password:"00001111",passwordConfirm:"00001111",status:"idle",validationErrors:{email:{empty:!0}}}})],Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Loading.parameters=_objectSpread(_objectSpread({},Loading.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Loading$parameters=Loading.parameters)||void 0===_Loading$parameters?void 0:_Loading$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args\n}"},null===(_Loading$parameters2=Loading.parameters)||void 0===_Loading$parameters2||null===(_Loading$parameters2=_Loading$parameters2.docs)||void 0===_Loading$parameters2?void 0:_Loading$parameters2.source)})}),NameError.parameters=_objectSpread(_objectSpread({},NameError.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_NameError$parameters=NameError.parameters)||void 0===_NameError$parameters?void 0:_NameError$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args\n}"},null===(_NameError$parameters2=NameError.parameters)||void 0===_NameError$parameters2||null===(_NameError$parameters2=_NameError$parameters2.docs)||void 0===_NameError$parameters2?void 0:_NameError$parameters2.source)})}),PasswordEmpty.parameters=_objectSpread(_objectSpread({},PasswordEmpty.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_PasswordEmpty$parame=PasswordEmpty.parameters)||void 0===_PasswordEmpty$parame?void 0:_PasswordEmpty$parame.docs),{},{source:_objectSpread({originalSource:"{\n  args\n}"},null===(_PasswordEmpty$parame2=PasswordEmpty.parameters)||void 0===_PasswordEmpty$parame2||null===(_PasswordEmpty$parame2=_PasswordEmpty$parame2.docs)||void 0===_PasswordEmpty$parame2?void 0:_PasswordEmpty$parame2.source)})}),PasswordsNotEqualsEmpty.parameters=_objectSpread(_objectSpread({},PasswordsNotEqualsEmpty.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_PasswordsNotEqualsEm=PasswordsNotEqualsEmpty.parameters)||void 0===_PasswordsNotEqualsEm?void 0:_PasswordsNotEqualsEm.docs),{},{source:_objectSpread({originalSource:"{\n  args\n}"},null===(_PasswordsNotEqualsEm2=PasswordsNotEqualsEmpty.parameters)||void 0===_PasswordsNotEqualsEm2||null===(_PasswordsNotEqualsEm2=_PasswordsNotEqualsEm2.docs)||void 0===_PasswordsNotEqualsEm2?void 0:_PasswordsNotEqualsEm2.source)})}),RequestError.parameters=_objectSpread(_objectSpread({},RequestError.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_RequestError$paramet=RequestError.parameters)||void 0===_RequestError$paramet?void 0:_RequestError$paramet.docs),{},{source:_objectSpread({originalSource:"{\n  args\n}"},null===(_RequestError$paramet2=RequestError.parameters)||void 0===_RequestError$paramet2||null===(_RequestError$paramet2=_RequestError$paramet2.docs)||void 0===_RequestError$paramet2?void 0:_RequestError$paramet2.source)})}),EmailError.parameters=_objectSpread(_objectSpread({},EmailError.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_EmailError$parameter=EmailError.parameters)||void 0===_EmailError$parameter?void 0:_EmailError$parameter.docs),{},{source:_objectSpread({originalSource:"{\n  args\n}"},null===(_EmailError$parameter2=EmailError.parameters)||void 0===_EmailError$parameter2||null===(_EmailError$parameter2=_EmailError$parameter2.docs)||void 0===_EmailError$parameter2?void 0:_EmailError$parameter2.source)})})}}]);