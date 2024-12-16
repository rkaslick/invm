(this.webpackJsonpInvmogul=this.webpackJsonpInvmogul||[]).push([[24],{1022:function(e,t,a){"use strict";a.r(t);var c=a(17),n=a(9),r=a(371),s=a(1214),i=a(1215),o=a(1217),l=a(952),d=a(953),u=a(15),j=a(0),b=a(196),f=a(1244),p=a(72),O=a(378),m=a(62),h=a(1216),v=a(964),g=a.n(v),x=a(374),y=a(1226),C=a.n(y),N=a(647),L=a(379),w=a.n(L),A=a(965),I=a.n(A),T=a(141),z=a(236),S=a(233),M=a(2),P=["classes"],E=[{id:"name",label:"Category Name"},{id:"description",label:"Description"},{id:"Actions",label:"Actions",disableSorting:!0}],k={fetchAllCategory:b.d,deleteCategory:b.b};t.default=Object(p.b)((function(e){return{categoryList:e.category.list}}),k)(Object(u.a)((function(e){return{paper:{margin:e.spacing(-8.9),padding:e.spacing(6)},searchInput:{width:"75%"},newButton:{position:"absolute",right:"10px "}}}))((function(e){var t=e.classes,a=Object(n.a)(e,P),u=Object(j.useState)({fn:function(e){return e}}),b=Object(c.a)(u,2),p=b[0],v=b[1],y=Object(j.useState)(!1),L=Object(c.a)(y,2),A=L[0],k=L[1],H=Object(j.useState)(0),D=Object(c.a)(H,2),F=D[0],_=D[1],B=Object(T.useToasts)().addToast,R=Object(j.useState)({isOpen:!1,message:"",type:""}),V=R.notify,q=R.setNotify,J=Object(j.useState)(!1),W=Object(c.a)(J,2),G=W[0],K=W[1],Q=Object(j.useState)(!1),U=Object(c.a)(Q,2),X=(U[0],U[1],function(){B("Record was deleted succesffuly",{appearance:"error"}),B("Record was deleted succesffuly",{appearance:"error"}),B("Record was deleted succesffuly",{appearance:"error"})});Object(j.useEffect)((function(){a.fetchAllCategory()}),[]);var Y=Object(O.a)(a.categoryList,E,p),Z=Y.TblContainer,$=Y.TblHead,ee=Y.TblPagination,te=Y.recordsAfterPagingAndSorting;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(x.a,{title:"Category List",icon:Object(M.jsx)(C.a,{fontSize:"large"})}),",",Object(M.jsxs)(r.a,{className:t.paper,elevation:3,children:[Object(M.jsxs)(s.a,{children:[Object(M.jsx)(m.a.Input,{className:t.searchInput,label:"Search for categories",InputProps:{startAdornment:Object(M.jsx)(i.a,{position:"start",children:Object(M.jsx)(h.a,{})})},onChange:function(e){var t=e.target;v({fn:function(e){return""==t.value?e:e.filter((function(e){return e.name.toLowerCase().includes(t.value.toLowerCase())+e.description.toLowerCase().includes(t.value.toLowerCase())}))}})}}),Object(M.jsx)(m.a.Button,{text:"Add New",variant:"outlined",startIcon:Object(M.jsx)(g.a,{}),className:t.newButton,onClick:function(){k(!0),_(0)}})]}),Object(M.jsxs)("table",{class:"table .table-responsive{-sm|-md|-lg|-xl|-xxl} table-hover ",children:[Object(M.jsx)("thead",{}),Object(M.jsx)("tbody",{children:Object(M.jsxs)(Z,{children:[Object(M.jsx)($,{}),Object(M.jsx)(o.a,{children:te().map((function(e,t){return Object(M.jsxs)(l.a,{hover:!0,children:[Object(M.jsx)(d.a,{children:e.name}),Object(M.jsx)(d.a,{children:e.description}),Object(M.jsxs)(d.a,{children:[Object(M.jsx)(m.a.ActionButton,{color:"primary",onClick:function(){!function(e){_(e),k(!0)}(e.id)},children:Object(M.jsx)(w.a,{fontSize:"small"})}),Object(M.jsx)(m.a.ActionButton,{color:"secondary",onClick:function(){K(!0),K({onConfirm:function(){var t;t=e.id,a.deleteCategory(t,X),K(!1)}})},children:Object(M.jsx)(I.a,{fontSize:"small"})})]})]},t)}))})]})})]}),Object(M.jsx)(ee,{})]}),Object(M.jsx)(N.a,{title:"Category Form",openPopup:A,setOpenPopup:k,children:Object(M.jsx)(f.a,{currentId:F,setCurrentId:_,setOpenPopup:k})}),Object(M.jsx)(z.a,{notify:V,setNotify:q}),Object(M.jsx)(S.a,{title:"Are you sure you want to delete this record?",subTitle:"This operation can't be reversed",confirmDialog:G,setConfirmDialog:K})]})})))},1226:function(e,t,a){"use strict";var c=a(165),n=a(166);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),s=(0,c(a(167)).default)(r.createElement(r.Fragment,null,r.createElement("circle",{cx:"17.5",cy:"17.5",r:"2.5",opacity:".3"}),r.createElement("path",{d:"M5 15.5h4v4H5zm7-9.66L10.07 9h3.86z",opacity:".3"}),r.createElement("path",{d:"M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM11 13.5H3v8h8v-8zm-2 6H5v-4h4v4z"})),"CategoryTwoTone");t.default=s},1244:function(e,t,a){"use strict";var c=a(17),n=a(4),r=a(9),s=a(0),i=a(1206),o=a(15),l=a(235),d=a(72),u=a(196),j=(a(142),a(141)),b=(a(646),a(2)),f=["classes"],p={name:"",description:"",storeId:2},O={createCateg:u.c,updateCateg:u.e,fetchAllCategs:u.d};t.a=Object(d.b)((function(e){return{categoryList:e.category.list,storesList:e.stores.list}}),O)(Object(o.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),minWidth:230}},formControl:{margin:e.spacing(1),minWidth:230},smMargin:{margin:e.spacing(1)}}}))((function(e){var t=e.classes,a=Object(r.a)(e,f),o=Object(j.useToasts)().addToast,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=Object(n.a)({},v);if("name"in e&&(t.name=e.name?"":"This field is required"),"description"in e&&(t.description=e.description?"":"This field is required"),g(Object(n.a)({},t)),e==m)return Object.values(t).every((function(e){return""==e}))},u=Object(l.a)(p,d,a.setCurrentId),O=Object(c.a)(u,6),m=O[0],h=O[1],v=O[2],g=O[3],x=O[4],y=O[5];return Object(s.useEffect)((function(){0!=a.currentId&&h(Object(n.a)({},a.categoryList.find((function(e){return e.id==a.currentId})))),g({}),a.fetchAllCategs()}),[a.currentId]),Object(b.jsx)("section",{className:"content",children:Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsxs)("div",{className:"card card-primary",children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsxs)("h4",{className:"card-title",children:["Add Categories ",Object(b.jsx)("small",{children:" "})]})}),Object(b.jsxs)("form",{id:"quickForm",autoComplete:"off",noValidate:!0,className:t.root,onSubmit:function(e){if(e.preventDefault(),d()){var t=function(){o("Category data saved succeffuly",{appearance:"success"}),o("Category data saved succeffuly",{appearance:"success"}),o("Category data saved succeffuly",{appearance:"success"}),a.fetchAllCategs(),y()};0==a.currentId?a.createCateg(m,t):a.updateCateg(a.currentId,m,t),1==a.openPopup&&a.setOpenPopup(!1)}},children:[Object(b.jsx)(i.a,Object(n.a)({className:"form-ctr",id:"standard-basic",type:"text",name:"name",label:"Category Name",value:m.name,onChange:x},v.name&&{error:!0,helperText:v.name})),Object(b.jsx)(i.a,Object(n.a)({className:"form-ctr",name:"description",label:"Description",value:m.description,onChange:x},v.description&&{error:!0,helperText:v.description})),Object(b.jsx)("div",{className:"card-footer",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"}),Object(b.jsx)("button",{variant:"contained",className:"btn btn-secondary",onClick:y,style:{marginLeft:3},children:"Reset"})]})})]})]})}),Object(b.jsx)("div",{className:"col-md-6"})]})})})})))},964:function(e,t,a){"use strict";var c=a(165),n=a(166);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),s=(0,c(a(167)).default)(r.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=s},965:function(e,t,a){"use strict";var c=a(165),n=a(166);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),s=(0,c(a(167)).default)(r.createElement("path",{d:"M6 21h12V7H6v14zm2.46-9.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4h-3.5z"}),"DeleteForeverSharp");t.default=s}}]);
//# sourceMappingURL=24.e70ecf0a.chunk.js.map