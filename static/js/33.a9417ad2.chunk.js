(this.webpackJsonpInvmogul=this.webpackJsonpInvmogul||[]).push([[33,60],{1040:function(e,t,a){"use strict";a.r(t);var c=a(17),s=a(9),n=a(371),r=a(1214),i=a(1215),l=a(1217),o=a(952),d=a(953),u=a(15),j=a(0),b=a(145),x=a(974),f=a(72),m=a(378),O=a(62),p=a(1216),h=a(964),v=a.n(h),N=a(374),g=a(1226),T=a.n(g),y=a(647),C=a(379),L=a.n(C),I=a(965),S=a.n(I),w=a(141),A=a(236),z=a(233),M=a(2),P=["classes"],E=[{id:"taxId",label:"Tax Id"},{id:"taxName",label:"Tax Name"},{id:"rate",label:"Rate"},{id:"Actions",label:"Actions",disableSorting:!0}],D={fetchAllTaxes:b.d,DeleteTax:b.b};t.default=Object(f.b)((function(e){return{taxList:e.tax.list}}),D)(Object(u.a)((function(e){return{paper:{margin:e.spacing(-8.9),padding:e.spacing(6)},searchInput:{width:"75%"},newButton:{position:"absolute",right:"10px "}}}))((function(e){var t=e.classes,a=Object(s.a)(e,P),u=Object(j.useState)({fn:function(e){return e}}),b=Object(c.a)(u,2),f=b[0],h=b[1],g=Object(j.useState)(!1),C=Object(c.a)(g,2),I=C[0],D=C[1],F=Object(j.useState)(0),k=Object(c.a)(F,2),H=k[0],R=k[1],_=Object(w.useToasts)().addToast,B=Object(j.useState)({isOpen:!1,message:"",type:""}),V=B.notify,q=B.setNotify,J=Object(j.useState)(!1),W=Object(c.a)(J,2),G=W[0],K=W[1],Q=Object(j.useState)(!1),U=Object(c.a)(Q,2),X=(U[0],U[1],function(){_("Record was deleted succesffuly",{appearance:"error"}),_("Record was deleted succesffuly",{appearance:"error"}),_("Record was deleted succesffuly",{appearance:"error"})});Object(j.useEffect)((function(){a.fetchAllTaxes()}),[]);var Y=Object(m.a)(a.taxList,E,f),Z=Y.TblContainer,$=Y.TblHead,ee=Y.TblPagination,te=Y.recordsAfterPagingAndSorting;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(N.a,{title:"Tax List",icon:Object(M.jsx)(T.a,{fontSize:"large"})}),",",Object(M.jsxs)(n.a,{className:t.paper,elevation:3,children:[Object(M.jsxs)(r.a,{children:[Object(M.jsx)(O.a.Input,{className:t.searchInput,label:"Search for Tax",InputProps:{startAdornment:Object(M.jsx)(i.a,{position:"start",children:Object(M.jsx)(p.a,{})})},onChange:function(e){var t=e.target;h({fn:function(e){return""==t.value?e:e.filter((function(e){return e.taxId.toLowerCase().includes(t.value.toLowerCase())+e.taxName.toLowerCase().includes(t.value.toLowerCase())+e.rate.toString().toLowerCase().includes(t.value.toLowerCase())}))}})}}),Object(M.jsx)(O.a.Button,{text:"Add New",variant:"outlined",startIcon:Object(M.jsx)(v.a,{}),className:t.newButton,onClick:function(){D(!0),R(0)}})]}),Object(M.jsxs)("table",{class:"table .table-responsive{-sm|-md|-lg|-xl|-xxl} table-hover ",children:[Object(M.jsx)("thead",{}),Object(M.jsx)("tbody",{children:Object(M.jsxs)(Z,{children:[Object(M.jsx)($,{}),Object(M.jsx)(l.a,{children:te().map((function(e,t){return Object(M.jsxs)(o.a,{hover:!0,children:[Object(M.jsx)(d.a,{children:e.taxId}),Object(M.jsx)(d.a,{children:e.taxName}),Object(M.jsxs)(d.a,{children:[e.rate,"%"]}),Object(M.jsxs)(d.a,{children:[Object(M.jsx)(O.a.ActionButton,{color:"primary",onClick:function(){!function(e){R(e),D(!0)}(e.id)},children:Object(M.jsx)(L.a,{fontSize:"small"})}),Object(M.jsx)(O.a.ActionButton,{color:"secondary",onClick:function(){K(!0),K({onConfirm:function(){var t;t=e.id,a.DeleteTax(t,X),K(!1)}})},children:Object(M.jsx)(S.a,{fontSize:"small"})})]})]},t)}))})]})})]}),Object(M.jsx)(ee,{})]}),Object(M.jsx)(y.a,{title:"Category Form",openPopup:I,setOpenPopup:D,children:Object(M.jsx)(x.default,{currentId:H,setCurrentId:R,openPopup:I,setOpenPopup:D,addorEdit:function(e,t){D(!1),q({isOpen:!0,message:"Submitted Successfully",type:"Success"})}})}),Object(M.jsx)(A.a,{notify:V,setNotify:q}),Object(M.jsx)(z.a,{title:"Are you sure you want to delete this record?",subTitle:"This operation can't be reversed",confirmDialog:G,setConfirmDialog:K})]})})))},1226:function(e,t,a){"use strict";var c=a(165),s=a(166);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(0)),r=(0,c(a(167)).default)(n.createElement(n.Fragment,null,n.createElement("circle",{cx:"17.5",cy:"17.5",r:"2.5",opacity:".3"}),n.createElement("path",{d:"M5 15.5h4v4H5zm7-9.66L10.07 9h3.86z",opacity:".3"}),n.createElement("path",{d:"M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM11 13.5H3v8h8v-8zm-2 6H5v-4h4v4z"})),"CategoryTwoTone");t.default=r},964:function(e,t,a){"use strict";var c=a(165),s=a(166);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(0)),r=(0,c(a(167)).default)(n.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=r},965:function(e,t,a){"use strict";var c=a(165),s=a(166);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(0)),r=(0,c(a(167)).default)(n.createElement("path",{d:"M6 21h12V7H6v14zm2.46-9.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4h-3.5z"}),"DeleteForeverSharp");t.default=r},974:function(e,t,a){"use strict";a.r(t);var c=a(17),s=a(4),n=a(9),r=a(0),i=a(1206),l=a(15),o=a(235),d=a(72),u=a(145),j=a(141),b=(a(646),a(196),a(2)),x=["classes"],f={taxName:"",rate:""},m={createTax:u.c,fetchAllTaxes:u.d,DeleteTax:u.b,updateTax:u.e};t.default=Object(d.b)((function(e){return{taxList:e.tax.list}}),m)(Object(l.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),minWidth:230}},formControl:{margin:e.spacing(1),minWidth:230},smMargin:{margin:e.spacing(1)}}}))((function(e){var t=e.classes,a=Object(n.a)(e,x),l=Object(j.useToasts)().addToast,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=Object(s.a)({},h);if("taxName"in e&&(t.taxName=e.taxName?"":"This field is required"),"rate"in e&&(t.rate=e.rate?"":"This field is required"),v(Object(s.a)({},t)),e==O)return Object.values(t).every((function(e){return""==e}))},u=Object(o.a)(f,d,a.setCurrentId),m=Object(c.a)(u,6),O=m[0],p=m[1],h=m[2],v=m[3],N=m[4],g=m[5];return Object(r.useEffect)((function(){0!=a.currentId&&p(Object(s.a)({},a.taxList.find((function(e){return e.id==a.currentId})))),v({}),a.fetchAllTaxes()}),[a.currentId]),Object(b.jsx)("section",{className:"content",children:Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsxs)("div",{className:"card card-primary",children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsxs)("h4",{className:"card-title",children:["Add Tax ",Object(b.jsx)("small",{children:" "})]})}),Object(b.jsxs)("form",{id:"quickForm",autoComplete:"off",noValidate:!0,className:t.root,onSubmit:function(e){if(e.preventDefault(),d()){var t=function(){l("Tax  saved succeffuly",{appearance:"success"}),l("Tax  saved succeffuly",{appearance:"success"}),l("Tax  saved succeffuly",{appearance:"success"}),a.fetchAllDeposit(),g(),1==a.openPopup&&a.setOpenPopup(!1)};0==a.currentId?a.createTax({taxName:O.taxName,rate:parseFloat(O.rate)},t):a.updateTax(a.currentId,{taxName:O.taxName,rate:parseFloat(O.rate)},t)}},children:[Object(b.jsx)(i.a,Object(s.a)({className:"form-ctr",name:"taxName",label:"Tax Name",value:O.taxName,onChange:N},h.taxName&&{error:!0,helperText:h.taxName})),Object(b.jsx)(i.a,Object(s.a)({className:"form-ctr",name:"rate",label:"Rate%",value:O.rate,onChange:N},h.rate&&{error:!0,helperText:h.rate})),Object(b.jsx)("div",{className:"card-footer",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"}),Object(b.jsx)("button",{variant:"contained",className:"btn btn-secondary",onClick:g,style:{marginLeft:3},children:"Reset"})]})})]})]})}),Object(b.jsx)("div",{className:"col-md-6"})]})})})})))}}]);
//# sourceMappingURL=33.a9417ad2.chunk.js.map