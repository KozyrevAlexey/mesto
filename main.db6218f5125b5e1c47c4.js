(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formSelector=e.formSelector,this._form=r,this._buttonSubmint=this._form.querySelector(this._submitButtonSelector)}var r,n;return r=t,(n=[{key:"enableValidation",value:function(){this._addInputListners()}},{key:"_showInputError",value:function(t){var e=this._form.querySelector("#".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),t.classList.add(this._errorClass),e.textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector("#".concat(t.id,"-error"));t.classList.remove(this._errorClass),t.classList.remove(this._inputErrorClass),e.textContent=""}},{key:"_handleFormInput",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_toggleButton",value:function(){this._isFormValid=this._form.checkValidity(),this._buttonSubmint.disabled=!this._isFormValid,this._buttonSubmint.classList.toggle(this._inactiveButtonClass,!this._isFormValid)}},{key:"_addInputListners",value:function(){var t=this;this._toggleButton(),this._inputList=this._form.querySelectorAll(this._inputSelector),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._handleFormInput(e),t._toggleButton()}))}))}},{key:"clearValidationForm",value:function(){var t=this;this._toggleButton(),this._inputList.forEach((function(e){t._hideInputError(e)}))}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e){var r=e.data,n=e.userId,o=e.templateSelector,i=e.handleCardClick,u=e.handleCardDelete,a=e.handleCardLike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=r.name,this._link=r.link,this.dataLikes=r.likes,this.idCard=r._id,this._idUserCard=r.owner._id,this._likesCounter=r.likes.length,this._templateSelector=o,this._handleCardClick=i,this._handleCardDelete=u,this._handleCardLike=a,this._userId=n}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this.cardElement=this._getTemplate(),this._cardElementTitle=this.cardElement.querySelector(".element__title"),this._cardElementPhoto=this.cardElement.querySelector(".element__img"),this._cardElementLike=this.cardElement.querySelector(".element__button"),this._cardElementDel=this.cardElement.querySelector(".element__basket"),this._cardElementLikesCount=this.cardElement.querySelector(".element__span"),this._cardElementTitle.textContent=this._name,this._cardElementPhoto.src=this._link,this._cardElementPhoto.alt=this._name,this._cardElementLikesCount=this._likesCounter,this._idUserCard!==this._userId&&this._cardElementDel.remove(),this._setEventListeners(),this.cardElement}},{key:"_likeCard",value:function(){this._cardElementLike.classList.toggle("element__button_active")}},{key:"_setEventListeners",value:function(){var t=this;this._cardElementLike.addEventListener("click",(function(){return t._handleCardLike(t)})),this._cardElementDel.addEventListener("click",(function(){return t._handleCardDelete(t)})),this._cardElementPhoto.addEventListener("click",(function(){return t._handleCardClick()}))}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var l=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderItems",value:function(t,e){var r=this;t.forEach((function(t){r._renderer(t,e)}))}},{key:"addItem",value:function(t){this._container.append(t)}},{key:"prependItem",value:function(t){this._container.prepend(t)}}])&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,p(n.key),n)}}function f(t,e,r){return(e=p(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(e)?e:String(e)}var y=function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"_handleEscClosePopup",(function(t){"Escape"===t.key&&r.close()})),f(this,"_handleOverlayClosePopup",(function(t){t.target===t.currentTarget&&r.close()})),this._popup=document.querySelector(e),this._buttonClose=this._popup.querySelector(".popup__button-close"),this._buttonSubmit=this._popup.querySelector(".popup__button-submit")}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClosePopup)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClosePopup)}},{key:"renderPreloader",value:function(t,e){this._buttonSubmit&&(t?(this.defaulText=this._buttonSubmit.textContent,this._buttonSubmit.textContent=e):this._buttonSubmit.textContent=this.defaulText)}},{key:"setEventListeners",value:function(){var t=this;this._buttonClose.addEventListener("click",(function(){t.close()})),this._popup.addEventListener("mousedown",this._handleOverlayClosePopup)}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===h(o)?o:String(o)),n)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},d.apply(this,arguments)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(n);if(o){var r=v(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._imgCard=e._popup.querySelector(".popup__img"),e._nameCard=e._popup.querySelector(".popup__name"),e}return e=u,(r=[{key:"open",value:function(t){d(v(u.prototype),"open",this).call(this),this._imgCard.src=t.link,this._imgCard.alt=t.name,this._nameCard.textContent=t.name}}])&&b(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,P(n.key),n)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},w.apply(this,arguments)}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function E(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}function P(t){var e=function(t,e){if("object"!==S(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===S(e)?e:String(e)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(n);if(o){var r=C(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return E(t)}(this,t)});function u(t,e){var r,n,o,a,l=e.submitCallback;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),n=E(r=i.call(this,t)),a=function(t){r._inputList.forEach((function(e,r){e.value=Object.values(t)[r]}))},(o=P(o="setInputValues"))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a,r._submitCallback=l,r._formSubmit=r._popup.querySelector(".popup__form"),r._inputList=Array.from(r._formSubmit.querySelectorAll(".popup__input")),r._buttonSubmit=r._formSubmit.querySelector(".popup__button-submit"),r}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._inputsValues={},this._inputList.forEach((function(e){t._inputsValues[e.name]=e.value})),this._inputsValues}},{key:"close",value:function(){this._formSubmit.reset(),w(C(u.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;w(C(u.prototype),"setEventListeners",this).call(this),this._formSubmit.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback(t._getInputValues()),t.close()}))}}])&&g(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function L(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},I.apply(this,arguments)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(n);if(o){var r=R(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r,n=e.submitCallback;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._submitCallback=n,r}return e=u,(r=[{key:"open",value:function(t){var e=t.idCard,r=t.cardElement;I(R(u.prototype),"open",this).call(this),this.id=e,this.card=r}},{key:"setEventListeners",value:function(){var t=this;I(R(u.prototype),"setEventListeners",this).call(this),this._buttonSubmit.addEventListener("click",(function(){t._submitCallback(t)}))}}])&&L(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function U(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===A(o)?o:String(o)),n)}var o}var x=function(){function t(e){var r=e.selectorUserName,n=e.selectorUserJob,o=e.selectorUserAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(r),this._profileJob=document.querySelector(n),this._profileAvatar=document.querySelector(o)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileJob.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about;this._profileName.textContent=e,this._profileJob.textContent=r}},{key:"setUserAvatar",value:function(t){this._profileAvatar.src=t.avatar}}])&&U(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function V(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===B(o)?o:String(o)),n)}var o}var D=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers,this._authorization=e.headers.authorization}var e,r;return e=t,(r=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Упс.... Что-то пошло не так! Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization}}).then((function(e){return t._checkResponse(e)}))}},{key:"addNewCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return e._checkResponse(t)}))}},{key:"getUserInfoApi",value:function(){var t=this;return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._authorization}}).then((function(e){return t._checkResponse(e)}))}},{key:"setUserInfoApi",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return e._checkResponse(t)}))}},{key:"setUserAvatar",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then((function(t){return e._checkResponse(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}}])&&V(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var F=new D({url:"https://mesto.nomoreparties.co/v1/cohort-62",headers:{"Content-Type":"application/json",authorization:"433d83bc-6b8b-4de8-9d1d-be42c9389f4e"}});Promise.all([F.getUserInfoApi(),F.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return N(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?N(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];J=o._id,Q.setUserInfo(o),Q.setUserAvatar(o),M.renderItems(i,J)}));var J,z=new _(".popup_type_image"),H=function(t,e){return new i({data:t,userId:e,templateSelector:".template-card",handleCardDelete:function(t){tt.open(t)},handleCardClick:function(){z.open(t)}}).generateCard()},M=new l({renderer:function(t,e){M.addItem(H(t,e))}},".elements"),$=document.querySelector(".profile__edit-buton"),G=document.querySelector(".profile__add-button"),K=document.querySelector(".profile__avatar"),Q=new x({selectorUserName:".profile-info__title",selectorUserJob:".profile-info__intro",selectorUserAvatar:".profile__img"}),W=new O(".popup_type_profile",{submitCallback:function(t){W.renderPreloader(!0,"Загрузка..."),F.setUserInfoApi(t).then((function(t){Q.setUserInfo(t),W.close()})).finally((function(){W.renderPreloader(!1)}))}});$.addEventListener("click",(function(){W.open(),W.setInputValues(Q.getUserInfo()),et["form-profile"].clearValidationForm()}));var X=new O(".popup_type_place",{submitCallback:function(t){X.renderPreloader(!0,"Сохранение..."),F.addNewCard(t).then((function(t){M.prependItem(H(t,J)),X.close()})).finally((function(){X.renderPreloader(!1)}))}});G.addEventListener("click",(function(){X.open(),et["form-place"].clearValidationForm()}));var Y=new O(".popup_type_avatar",{submitCallback:function(t){Y.renderPreloader(!0,"Загрузка..."),F.setUserAvatar(t).then((function(t){Q.setUserAvatar(t),Y.close()})).finally((function(){Y.renderPreloader(!1)}))}});K.addEventListener("click",(function(){Y.open(),et["form-avatar"].clearValidationForm()}));var Z,tt=new q(".popup_type_delete",{submitCallback:function(t){var e=t.id,r=t.card;tt.renderPreloader(!0,"Удаление..."),F.deleteCard(e).then((function(){r.remove(),r=null,tt.close()})).finally((function(){Y.renderPreloader(!1)}))}}),et={};Z={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(Z.formSelector)).forEach((function(t){var e=new r(Z,t),n=t.getAttribute("name");et[n]=e,e.enableValidation()})),z.setEventListeners(),W.setEventListeners(),X.setEventListeners(),Y.setEventListeners(),tt.setEventListeners()})();