(this["webpackJsonpyp-course-3-react"]=this["webpackJsonpyp-course-3-react"]||[]).push([[0],{10:function(e,t,a){e.exports={Header:"Header_Header__1RXtm",Logo:"Header_Logo__1y6iM"}},11:function(e,t,a){e.exports={Form:"Form_Form__NfI1g",Avatar:"Form_Avatar__2Qv3w",Edit:"Form_Edit__3Z2U3",Add:"Form_Add__2n7i5"}},12:function(e,t,a){e.exports={Loader:"Loader_Loader__1o6az",Loading:"Loader_Loading__ilHvx"}},14:function(e,t,a){e.exports={Input:"Input_Input__3galt"}},25:function(e,t,a){e.exports={Layout:"Layout_Layout___NCF3"}},26:function(e,t,a){e.exports=a.p+"static/media/logo.9d0e3a93.svg"},27:function(e,t,a){e.exports={CardList:"CardList_CardList__ObVva"}},29:function(e,t,a){e.exports=a.p+"static/media/close.a3e3d9bd.svg"},33:function(e,t,a){e.exports={Error:"Error_Error__G3SfO"}},36:function(e,t,a){e.exports=a(61)},4:function(e,t,a){e.exports={Modal:"Modal_Modal__2rg7I",Avatar:"Modal_Avatar__3rHoX",Edit:"Modal_Edit__2m57v",Add:"Modal_Add__3IdWO",Image:"Modal_Image__20o_P",Content:"Modal_Content__2tw2Y",ContentImage:"Modal_ContentImage__3GDk9",Close:"Modal_Close__1fHRY",Title:"Modal_Title__2AT0U"}},41:function(e,t,a){},5:function(e,t,a){e.exports={Profile:"Profile_Profile__LwgDE",Info:"Profile_Info__3CEvt",Data:"Profile_Data___tewO",Job:"Profile_Job__3Xbsn",Name:"Profile_Name__3cpTr",Avatar:"Profile_Avatar__1WcQA"}},6:function(e,t,a){e.exports={Card:"Card_Card__9JkoW",Image:"Card_Image__Anzn4",Description:"Card_Description__cYGvp",Name:"Card_Name__1pebI",Like:"Card_Like__12zW9",LikeCounter:"Card_LikeCounter__30_L6"}},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),c=(a(41),Object(n.createContext)()),i=a(25),u=a.n(i);var s=function(e){var t=e.children;return r.a.createElement("div",{className:u.a.Layout},t)},d=a(10),m=a.n(d),_=a(26),f=a.n(_);var v=function(){return r.a.createElement("header",{className:m.a.Header},r.a.createElement("img",{src:f.a,alt:"Logo",className:m.a.Logo}))},p=a(5),g=a.n(p),b=a(8),E=a.n(b),h=function(e){var t=e.onClick,a=e.type,n=e.disabled,o=e.activateLike,l=e.showDeleteIcon,c=e.children,i=[E.a.Button,E.a[a]];return n&&i.push(E.a.Disabled),o&&i.push(E.a.ActiveLikeIcon),l&&i.push(E.a.DisplayBlock),r.a.createElement("button",{onClick:t,className:i.join(" "),name:"button",disabled:n},c)};var O=function(){var e=Object(n.useContext)(c),t=e.userInfo,a=e.toggleModal,o={backgroundImage:"url('".concat(t.avatar,"')")};return r.a.createElement("div",{className:g.a.Profile},r.a.createElement("div",{className:g.a.Info},r.a.createElement("div",{onClick:a,className:g.a.Avatar,style:o}),r.a.createElement("div",{className:g.a.Data},r.a.createElement("h1",{className:g.a.Name},t.name),r.a.createElement("p",{className:g.a.Job},t.about),r.a.createElement(h,{onClick:a,type:"Edit"},"edit")),r.a.createElement(h,{onClick:a,type:"Add"},"+")))},C=a(27),I=a.n(C),A=a(1),y=a(7),j=a(6),L=a.n(j),k=a(28),M=a.n(k).a.create({baseURL:"https://praktikum.tk/cohort8",headers:{authorization:"7563ceef-3fab-429e-abe8-149027f36882","Content-Type":"application/json"}});var D=function(e){var t=e.children,a=Object(n.useState)({showDeleteIcon:!1,activateLike:!1,likeCounter:null}),o=Object(y.a)(a,2),l=o[0],i=o[1],u=Object(n.useContext)(c),s=u.myId,d=u.toggleModal,m=u.removeCard;Object(n.useEffect)((function(){t.owner._id===s&&i((function(e){return Object(A.a)(Object(A.a)({},e),{},{showDeleteIcon:!0})})),t.likes.forEach((function(e){e._id===s&&i((function(e){return Object(A.a)(Object(A.a)({},e),{},{activateLike:!0})}))})),i((function(e){return Object(A.a)(Object(A.a)({},e),{},{likeCounter:t.likes.length})}))}),[]);var _={backgroundImage:"url('".concat(t.link,"')")};return r.a.createElement("div",{className:L.a.Card,data:t._id},r.a.createElement("div",{onClick:d,className:L.a.Image,style:_},r.a.createElement(h,{onClick:function(e){return m(e,t._id)},type:"DeleteIcon",showDeleteIcon:l.showDeleteIcon})),r.a.createElement("div",{className:L.a.Description},r.a.createElement("h3",{className:L.a.Name},t.name),r.a.createElement("div",{className:L.a.Like},r.a.createElement(h,{onClick:function(e){return function(e){var t=e.target.closest(".Card_Card__9JkoW").getAttribute("data");e.target.closest(".Button_LikeIcon__DXYuT").classList.contains("Button_ActiveLikeIcon__Sjrf-")?M.delete("/cards/like/".concat(t)).then((function(){return i((function(e){return Object(A.a)(Object(A.a)({},e),{},{activateLike:!1,likeCounter:e.likeCounter-1})}))})).catch((function(e){return console.log(e)})):M.put("/cards/like/".concat(t)).then((function(){return i((function(e){return Object(A.a)(Object(A.a)({},e),{},{activateLike:!0,likeCounter:e.likeCounter+1})}))})).catch((function(e){return console.log(e)}))}(e)},type:"LikeIcon",activateLike:l.activateLike}),r.a.createElement("span",{className:L.a.LikeCounter},l.likeCounter))))};var N=function(){var e=Object(n.useContext)(c).initialCards;return r.a.createElement("div",{className:I.a.CardList},e.map((function(e){return r.a.createElement(D,{key:e._id},e)})))},T=a(4),x=a.n(T),F=a(29),w=a.n(F),P=a(11),B=a.n(P),V=function(e){var t=e.onSubmit,a=e.type,n=e.name,o=e.style,l=e.children,c=[B.a.Form,B.a[a]];return r.a.createElement("form",{onSubmit:t,className:c.join(" "),name:n,style:o,noValidate:!0},l)},R=Object(n.createContext)();var S=function(){var e=Object(n.useContext)(c),t=e.userInfo,a=e.typeModal,o=e.openImage,l=e.updateData,i=e.toggleModal,u=Object(n.useContext)(R),s=u.configModal,d=u.isFormValid,m=u.setConfig,_=u.renderInputs;Object(n.useEffect)((function(){"Edit"===a?m(a,t):m(a)}),[]);var f=[x.a.Modal,x.a[a]];return r.a.createElement("div",{className:f.join(" ")},r.a.createElement("div",{className:"Image"===a?(x.a.Content,x.a.ContentImage):x.a.Content,style:"Image"===a?o:null},r.a.createElement("img",{onClick:i,src:w.a,alt:"Close",className:x.a.Close}),r.a.createElement("h3",{className:x.a.Title,style:"Image"===a?{display:"none"}:null},s.nameModal),r.a.createElement(V,{onSubmit:l,type:s.typeForm,name:s.nameFrom,style:"Image"===a?{display:"none"}:null},_(),r.a.createElement(h,{type:"Popup",disabled:!d},s.nameButton))))},U=a(12),W=a.n(U),H=function(){return r.a.createElement("div",{className:W.a.Loader},r.a.createElement("div",{className:W.a.Loading},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},G=a(30),J=a(31),q=a(35),Y=a(34),X=function(e){Object(q.a)(a,e);var t=Object(Y.a)(a);function a(){var e;Object(G.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).el=document.createElement("div"),e}return Object(J.a)(a,[{key:"componentDidMount",value:function(){document.body.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.el)}},{key:"render",value:function(){return l.a.createPortal(this.props.children,this.el)}}]),a}(r.a.Component);var z,Q,Z=function(){var e=Object(n.useContext)(c),t=e.loading,a=e.showModal,o=e.initialData,l=e.setModal;return Object(n.useEffect)((function(){o()}),[]),r.a.createElement(s,null,r.a.createElement(v,null),t?r.a.createElement(H,null):r.a.createElement("main",{onClick:function(e){return l(e)}},r.a.createElement(O,null),r.a.createElement(N,null)),a?r.a.createElement(X,null,r.a.createElement(S,null)):null)},$=a(13),K=a.n($),ee=a(32),te=a(2),ae=(z={},Object(te.a)(z,"INITIAL_DATA",(function(e,t){return Object(A.a)(Object(A.a)({},e),{},{loading:!1,userInfo:t.userInfo,initialCards:t.initialCards})})),Object(te.a)(z,"TOGGLE_MODAL",(function(e){return Object(A.a)(Object(A.a)({},e),{},{showModal:!e.showModal})})),Object(te.a)(z,"SET_MODAL",(function(e,t){return Object(A.a)(Object(A.a)({},e),{},{typeModal:t.typeModal,openImage:t.openImage})})),Object(te.a)(z,"AVATAR_UPDATE",(function(e,t){return Object(A.a)(Object(A.a)({},e),{},{userInfo:t.userInfo})})),Object(te.a)(z,"INFO_UPDATE",(function(e,t){return Object(A.a)(Object(A.a)({},e),{},{userInfo:t.userInfo})})),Object(te.a)(z,"CARDS_UPDATE",(function(e,t){return Object(A.a)(Object(A.a)({},e),{},{initialCards:t.initialCards})})),Object(te.a)(z,"REMOVE_CARD",(function(e,t){return Object(A.a)(Object(A.a)({},e),{},{initialCards:t.initialCards})})),Object(te.a)(z,"DEFAULT",(function(e){return e})),z),ne=function(e,t){return(ae[t.type]||ae.DEFAULT)(e,t)},re=function(e){var t=e.children,a=Object(n.useReducer)(ne,{loading:!0,showModal:!1,myId:"24ee49f7ef633fcc99f70066",userInfo:{},initialCards:[],typeModal:null,openImage:null}),o=Object(y.a)(a,2),l=o[0],i=o[1],u=function(){var e=Object(ee.a)(K.a.mark((function e(){var t,a,n,r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.get("/users/me/");case 2:return t=e.sent,e.next=5,M.get("/cards/");case 5:for(a=e.sent,n=[],r=0;a.data.length>r;r++)a.data[r].owner._id===l.myId&&n.push(a.data[r]);i({type:"INITIAL_DATA",userInfo:t.data,initialCards:n});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){i({type:"TOGGLE_MODAL"})},d=l.loading,m=l.showModal,_=l.myId,f=l.userInfo,v=l.initialCards,p=l.typeModal,g=l.openImage;return r.a.createElement(c.Provider,{value:{loading:d,showModal:m,myId:_,userInfo:f,initialCards:v,typeModal:p,openImage:g,initialData:u,toggleModal:s,setModal:function(e){if(e.target.closest(".Profile_Avatar__1WcQA")&&i({type:"SET_MODAL",typeModal:"Avatar"}),e.target.closest(".Button_Edit__3kaWS")&&i({type:"SET_MODAL",typeModal:"Edit"}),e.target.closest(".Button_Add__1hNMN")&&i({type:"SET_MODAL",typeModal:"Add"}),e.target.closest(".Card_Image__Anzn4")){var t={backgroundImage:e.target.style.backgroundImage};i({type:"SET_MODAL",typeModal:"Image",openImage:t})}},updateData:function(e){e.preventDefault();var t=e.target,a=t.elements.button;e.target.closest(".Form_Avatar__2Qv3w")&&new Promise((function(e){a.textContent="\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",e(M.patch("/users/me/avatar/",{avatar:t.elements.link.value}))})).then((function(){return i({type:"AVATAR_UPDATE",userInfo:Object(A.a)(Object(A.a)({},l.userInfo),{},{avatar:t.elements.link.value})})})).then((function(){return s()})).catch((function(e){return console.log(e)}));e.target.closest(".Form_Edit__3Z2U3")&&new Promise((function(e){a.textContent="\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",e(M.patch("/users/me/",{name:t.elements.name.value,about:t.elements.info.value}))})).then((function(){return i({type:"INFO_UPDATE",userInfo:Object(A.a)(Object(A.a)({},l.userInfo),{},{name:t.elements.name.value,about:t.elements.info.value})})})).then((function(){return s()})).catch((function(e){return console.log(e)}));e.target.closest(".Form_Add__2n7i5")&&new Promise((function(e){a.textContent="\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",e(M.post("/cards/",{name:t.elements.name.value,link:t.elements.link.value}))})).then((function(e){return i({type:"CARDS_UPDATE",initialCards:l.initialCards.concat(e.data)})})).then((function(){return s()})).catch((function(e){return console.log(e)}))},removeCard:function(e,t){e.stopPropagation();var a=v.filter((function(e){return e._id!==t}));M.delete("/cards/".concat(t,"/")).then((function(){return i({type:"REMOVE_CARD",initialCards:a})})).catch((function(e){return console.log(e)}))}}},t)},oe=function(e){return e.children},le=a(14),ce=a.n(le),ie=function(e){var t=e.onChange,a=e.value,n=e.type,o=e.name,l=e.placeholder,c=e.valid,i=e.validation,u=[ce.a.Input];return c||u.push(ce.a.invalid),r.a.createElement("input",{onChange:t,className:u.join(" "),value:a,type:n,name:o,placeholder:l,minLength:i.minLength,maxLength:i.maxLength,required:!0})},ue=a(33),se=a.n(ue),de=function(e){var t=e.errorMessage;return r.a.createElement("span",{className:se.a.Error},t)},me=a(15),_e=a.n(me);function fe(e,t){return Object(A.a)(Object(A.a)({},e),{},{touched:!1,validation:t,valid:pe(e.value,t),errorMessage:ge(e.value,t,!1)})}function ve(e){var t=!0;for(var a in e)e.hasOwnProperty(a)&&(t=e[a].valid&&t);return t}function pe(e,t){if(!t)return!0;var a=!0;return t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.url&&(a=_e.a.url(e)&&a),a}function ge(e,t,a){return a?0===e.length?"\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":e.length<t.minLength?"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0442 2 \u0434\u043e 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432":!_e.a.url(e)&&"\u0417\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0430":""}var be=(Q={},Object(te.a)(Q,"AVATAR_MODAL",(function(e){return Object(A.a)(Object(A.a)({},e),{},{configModal:{nameModal:"\u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",typeForm:"Avatar",nameFrom:"avatar",nameButton:"\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},formControls:{avatar:fe({value:"",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440"},{url:!0,required:!0})}})})),Object(te.a)(Q,"EDIT_MODAL",(function(e,t){return Object(A.a)(Object(A.a)({},e),{},{configModal:{nameModal:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",typeForm:"Edit",nameFrom:"edit",nameButton:"\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},formControls:{name:fe({value:t.userInfo.name,type:"text",name:"name",placeholder:"\u0418\u043c\u044f"},{minLength:2,maxLength:30,required:!0}),info:fe({value:t.userInfo.about,type:"text",name:"info",placeholder:"\u041e \u0441\u0435\u0431\u0435"},{minLength:2,maxLength:30,required:!0})}})})),Object(te.a)(Q,"ADD_MODAL",(function(e){return Object(A.a)(Object(A.a)({},e),{},{configModal:{nameModal:"\u043d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",typeForm:"Add",nameFrom:"add",nameButton:"+"},formControls:{name:fe({value:"",type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},{minLength:2,maxLength:30,required:!0}),link:fe({value:"",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"},{url:!0,required:!0})}})})),Object(te.a)(Q,"VALIDATE_FORM",(function(e){return Object(A.a)(Object(A.a)({},e),{},{isFormValid:ve(e.formControls)})})),Object(te.a)(Q,"INPUT_CHANGE",(function(e,t){return Object(A.a)(Object(A.a)({},e),{},{formControls:t.formControls,isFormValid:t.isFormValid})})),Object(te.a)(Q,"DEFAULT",(function(e){return e})),Q),Ee=function(e,t){return(be[t.type]||be.DEFAULT)(e,t)},he=function(e){var t=e.children,a=Object(n.useReducer)(Ee,{configModal:{},formControls:{},isFormValid:!1}),o=Object(y.a)(a,2),l=o[0],c=o[1],i=l.configModal,u=l.formControls,s=l.isFormValid;return r.a.createElement(R.Provider,{value:{configModal:i,formControls:u,isFormValid:s,setConfig:function(e,t){"Avatar"===e&&(c({type:"AVATAR_MODAL"}),c({type:"VALIDATE_FORM"})),"Edit"===e&&(c({type:"EDIT_MODAL",userInfo:t}),c({type:"VALIDATE_FORM"})),"Add"===e&&(c({type:"ADD_MODAL"}),c({type:"VALIDATE_FORM"}))},renderInputs:function(){return Object.keys(l.formControls).map((function(e,t){var a=l.formControls[e];return r.a.createElement(oe,{key:t+1},r.a.createElement(ie,{onChange:function(t){return function(e,t){var a=Object(A.a)({},l.formControls),n=Object(A.a)({},a[t]);n.value=e.target.value,n.touched=!0,n.valid=pe(n.value,n.validation),n.errorMessage=ge(n.value,n.validation,n.touched),a[t]=n;var r=ve(a);c({type:"INPUT_CHANGE",formControls:a,isFormValid:r})}(t,e)},value:a.value,type:a.type,name:a.name,placeholder:a.placeholder,valid:a.valid,validation:a.validation}),a.valid?null:r.a.createElement(de,{errorMessage:a.errorMessage}))}))}}},t)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=r.a.createElement(re,null,r.a.createElement(he,null,r.a.createElement(Z,null)));l.a.render(Oe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports={Button:"Button_Button__2W87Y",Edit:"Button_Edit__3kaWS",Add:"Button_Add__1hNMN",Popup:"Button_Popup__1JS-c",DeleteIcon:"Button_DeleteIcon__2XiYb",LikeIcon:"Button_LikeIcon__DXYuT",ActiveLikeIcon:"Button_ActiveLikeIcon__Sjrf-",Disabled:"Button_Disabled__gbnJI",DisplayBlock:"Button_DisplayBlock__1ectN"}}},[[36,1,2]]]);
//# sourceMappingURL=main.7dd4c451.chunk.js.map