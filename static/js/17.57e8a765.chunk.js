(this.webpackJsonpInvmogul=this.webpackJsonpInvmogul||[]).push([[17],{1228:function(e,t,a){"use strict";var r=a(3),s=a(9),i=a(0),l=(a(195),a(11)),c=a(24),o=a(29),d=a(15);a(1213).a.styles;var n=i.forwardRef((function(e,t){var a=e.children,o=e.classes,d=e.className,n=e.color,u=void 0===n?"default":n,b=e.component,m=void 0===b?"div":b,j=e.disabled,p=void 0!==j&&j,h=e.disableElevation,f=void 0!==h&&h,v=e.disableFocusRipple,O=void 0!==v&&v,x=e.disableRipple,g=void 0!==x&&x,N=e.fullWidth,y=void 0!==N&&N,C=e.orientation,T=void 0===C?"horizontal":C,L=e.size,w=void 0===L?"medium":L,I=e.variant,R=void 0===I?"outlined":I,S=Object(s.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"]),P=Object(l.a)(o.grouped,o["grouped".concat(Object(c.a)(T))],o["grouped".concat(Object(c.a)(R))],o["grouped".concat(Object(c.a)(R)).concat(Object(c.a)(T))],o["grouped".concat(Object(c.a)(R)).concat("default"!==u?Object(c.a)(u):"")],p&&o.disabled);return i.createElement(m,Object(r.a)({role:"group",className:Object(l.a)(o.root,d,y&&o.fullWidth,f&&o.disableElevation,"contained"===R&&o.contained,"vertical"===T&&o.vertical),ref:t},S),i.Children.map(a,(function(e){return i.isValidElement(e)?i.cloneElement(e,{className:Object(l.a)(P,e.props.className),color:e.props.color||u,disabled:e.props.disabled||p,disableElevation:e.props.disableElevation||f,disableFocusRipple:O,disableRipple:g,fullWidth:y,size:e.props.size||w,variant:e.props.variant||R}):null})))}));t.a=Object(d.a)((function(e){return{root:{display:"inline-flex",borderRadius:e.shape.borderRadius},contained:{boxShadow:e.shadows[2]},disableElevation:{boxShadow:"none"},disabled:{},fullWidth:{width:"100%"},vertical:{flexDirection:"column"},grouped:{minWidth:40},groupedHorizontal:{"&:not(:first-child)":{borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{borderTopRightRadius:0,borderTopLeftRadius:0},"&:not(:last-child)":{borderBottomRightRadius:0,borderBottomLeftRadius:0}},groupedText:{},groupedTextHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextPrimary:{"&:not(:last-child)":{borderColor:Object(o.a)(e.palette.primary.main,.5)}},groupedTextSecondary:{"&:not(:last-child)":{borderColor:Object(o.a)(e.palette.secondary.main,.5)}},groupedOutlined:{},groupedOutlinedHorizontal:{"&:not(:first-child)":{marginLeft:-1},"&:not(:last-child)":{borderRightColor:"transparent"}},groupedOutlinedVertical:{"&:not(:first-child)":{marginTop:-1},"&:not(:last-child)":{borderBottomColor:"transparent"}},groupedOutlinedPrimary:{"&:hover":{borderColor:e.palette.primary.main}},groupedOutlinedSecondary:{"&:hover":{borderColor:e.palette.secondary.main}},groupedContained:{boxShadow:"none"},groupedContainedHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderRight:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderBottom:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedPrimary:{"&:not(:last-child)":{borderColor:e.palette.primary.dark}},groupedContainedSecondary:{"&:not(:last-child)":{borderColor:e.palette.secondary.dark}}}}),{name:"MuiButtonGroup"})(n)},1231:function(e,t,a){"use strict";var r=a(165),s=a(166);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(a(0)),l=(0,r(a(167)).default)(i.createElement("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAddSharp");t.default=l},1237:function(e,t,a){"use strict";var r=a(17),s=a(4),i=a(9),l=a(0),c=a(1206),o=a(945),d=a(946),n=a(956),u=a(1225),b=a(949),m=a(15),j=a(235),p=a(72),h=a(112),f=(a(142),a(144)),v=a(141),O=(a(646),a(1215)),x=a(286),g=a.n(x),N=a(2),y=["classes"],C={fName:"",sName:"",lName:"",mobile:"",email:"",address:"",uName:"",password:"",userLevelId:"",cPswd:""},T={createStaff:h.c,updateStaff:h.g,fetchAllUserLevel:f.d,fetchAllInvestors:h.f};t.a=Object(p.b)((function(e){return{investorsList:e.addStaff.list,userLevelList:e.userLevel.list}}),T)(Object(m.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),minWidth:230}},formControl:{margin:e.spacing(1),minWidth:230},smMargin:{margin:e.spacing(1)}}}))((function(e){var t=e.classes,a=Object(i.a)(e,y),m=Object(v.useToasts)().addToast,p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=Object(s.a)({},L);if("fName"in e&&(t.fName=e.fName?"":"This field is required"),"sName"in e&&(t.sName=e.sName?"":"This field is required"),"lName"in e&&(t.lName=e.lName?"":"This field is required"),"email"in e&&" "!=t.email&&(t.email=/^&|.+@.+..+/.test(e.email)?"":"Email is not valid"),"mobile"in e&&(t.mobile=e.mobile?"":"This field is required"),"address"in e&&(t.address=e.address?"":"This field is required"),"userLevelId"in e&&(t.userLevelId=e.userLevelId?"":"This field is required"),"storeId"in e&&(t.storeId=e.storeId?"":"This field is required"),"uName"in e&&(t.uName=e.uName?"":"This field is required"),"password"in e&&(t.password=e.password?"":"This field is required"),"cPswd"in e&&(t.cPswd=e.cPswd?"":"This field is required"),w(Object(s.a)({},t)),e==x)return Object.values(t).every((function(e){return""==e}))},h=Object(j.a)(C,p,a.setCurrentId),f=Object(r.a)(h,6),x=f[0],T=f[1],L=f[2],w=f[3],I=f[4],R=f[5];return Object(l.useEffect)((function(){0!=a.currentId&&T(Object(s.a)({},a.investorsList.find((function(e){return e.id==a.currentId})))),w({}),a.fetchAllUserLevel()}),[a.currentId]),Object(N.jsx)("section",{className:"content",children:Object(N.jsx)("div",{className:"container-fluid",children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-md-12",children:Object(N.jsxs)("div",{className:"card card-primary",children:[Object(N.jsx)("div",{className:"card-header",children:Object(N.jsxs)("h4",{className:"card-title",children:["Add Investor ",Object(N.jsx)("small",{children:"+ Credentials "})]})}),Object(N.jsxs)("form",{id:"quickForm",autoComplete:"off",noValidate:!0,className:t.root,onSubmit:function(e){if(e.preventDefault(),p()){var t=function(){R(),m("Staff data saved succeffuly",{appearance:"success"}),m("Staff data saved succeffuly",{appearance:"success"}),m("Staff data saved succeffuly",{appearance:"success"}),a.fetchAllInvestors()};0==a.currentId?a.createStaff(x,t):a.updateStaff(a.currentId,x,t),1==a.openPopup&&a.setOpenPopup(!1)}},children:[Object(N.jsx)(c.a,Object(s.a)({className:"form-ctr",id:"input-with-icon-textfield",variant:"outlined",type:"text",name:"fName",label:"First Name",InputLabelProps:{startAdornment:Object(N.jsx)(O.a,{position:"start",children:Object(N.jsx)(g.a,{})})},value:x.fName,onChange:I},L.fName&&{error:!0,helperText:L.fName})),Object(N.jsx)(c.a,Object(s.a)({className:"form-ctr",name:"sName",label:"Second Name",value:x.sName,onChange:I,variant:"outlined"},L.sName&&{error:!0,helperText:L.sName})),Object(N.jsx)(c.a,Object(s.a)({className:"form-ctr",name:"lName",label:"Last Name",value:x.lName,onChange:I,variant:"outlined"},L.lName&&{error:!0,helperText:L.lName})),Object(N.jsx)(c.a,Object(s.a)({className:"form-ctr",name:"email",label:"Email",type:"email",value:x.email,onChange:I,variant:"outlined"},L.email&&{error:!0,helperText:L.email})),Object(N.jsx)(c.a,Object(s.a)({className:"form-ctr",name:"mobile",label:"Mobile",value:x.mobile,onChange:I,variant:"outlined"},L.mobile&&{error:!0,helperText:L.Mobile})),Object(N.jsx)(c.a,Object(s.a)({className:"form-ctr",name:"address",label:"Address",value:x.address,onChange:I,variant:"outlined"},L.address&&{error:!0,helperText:L.address})),Object(N.jsxs)(o.a,Object(s.a)(Object(s.a)({className:t.formControl},L.userLevelId&&{error:!0}),{},{children:[Object(N.jsx)(d.a,{children:"Access Level"}),Object(N.jsxs)(n.a,{className:"form-ctr",name:"userLevelId",label:"Access Level",value:x.userLevelId,onChange:I,variant:"outlined",children:[Object(N.jsx)(u.a,{value:"",children:"Select Access Level"}),a.userLevelList.map((function(e,t){return Object(N.jsx)(u.a,{value:e.id,children:e.level})}))]}),L.userLevelId&&Object(N.jsx)(b.a,{children:L.userLevelId})]})),Object(N.jsx)(c.a,Object(s.a)({className:"form-ctr",name:"uName",label:"User Name",value:x.uName,onChange:I,variant:"outlined"},L.uName&&{error:!0,helperText:L.uName})),Object(N.jsx)(c.a,Object(s.a)({className:"form-ctr",name:"password",label:"Password",type:"password",value:x.password,onChange:I,variant:"outlined"},L.password&&{error:!0,helperText:L.password})),Object(N.jsx)(c.a,Object(s.a)({className:"form-ctr",name:"cPswd",label:"Confirm Password",type:"password",value:x.cPswd,onChange:I,variant:"outlined"},L.cPswd&&{error:!0,helperText:L.cPswd})),Object(N.jsx)("div",{className:"card-footer",children:Object(N.jsxs)("div",{children:[Object(N.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"}),Object(N.jsx)("button",{variant:"contained",className:"btn btn-secondary",onClick:R,style:{marginLeft:3},children:"Reset"})]})})]})]})}),Object(N.jsx)("div",{className:"col-md-6"})]})})})})))},644:function(e,t,a){"use strict";var r=a(165),s=a(166);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(a(0)),l=(0,r(a(167)).default)(i.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=l},645:function(e,t,a){"use strict";var r=a(165),s=a(166);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(a(0)),l=(0,r(a(167)).default)(i.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=l},977:function(e,t,a){"use strict";a.r(t);var r=a(17),s=a(9),i=a(371),l=a(1228),c=a(1213),o=a(15),d=a(0),n=a(72),u=a(112),b=a(1237),m=a(645),j=a.n(m),p=a(644),h=a.n(p),f=a(141),v=a(374),O=a(1231),x=a.n(O),g=a(233),N=a(2),y=["classes"],C={fetchAllInvestors:u.f,deleteStaff:u.b};t.default=Object(n.b)((function(e){return{investorsList:e.addStaff.list}}),C)(Object(o.a)((function(e){return{root:{"& .MuiTableCell-head":{fontSize:"0.95rem"}},paper:{margin:e.spacing(-8.9),padding:e.spacing(6)},grid:{paddingLeft:e.spacing(2)}}}))((function(e){var t=e.classes,a=Object(s.a)(e,y),o=Object(f.useToasts)().addToast,n=Object(d.useState)(0),u=Object(r.a)(n,2),m=u[0],p=u[1],O=Object(d.useState)(!1),C=Object(r.a)(O,2),T=C[0],L=C[1];Object(d.useEffect)((function(){a.fetchAllInvestors()}),[]);var w=function(){o("Record was deleted succesffuly",{appearance:"error"}),o("Record was deleted succesffuly",{appearance:"error"}),o("Record was deleted succesffuly",{appearance:"error"})};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(v.a,{title:"Investors",icon:Object(N.jsx)(x.a,{fontSize:"large"})}),",",Object(N.jsxs)(i.a,{className:t.paper,elevation:3,children:[Object(N.jsx)(b.a,{currentId:m,setCurrentId:p}),Object(N.jsx)("div",{className:t.grid,children:Object(N.jsxs)("table",{class:"table  .table-responsive{-sm|-md|-lg|-xl|-xxl} table-bordered table-hover table-sm table-striped",children:[Object(N.jsx)("thead",{class:"thead-dark",children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{scope:"col",children:"Id"}),Object(N.jsx)("th",{scope:"col",children:"Name"}),Object(N.jsx)("th",{scope:"col",children:"Email"}),Object(N.jsx)("th",{scope:"col",children:"Mobile"}),Object(N.jsx)("th",{scope:"col",children:"Address"}),Object(N.jsx)("th",{scope:"col",children:"Access Level"}),Object(N.jsx)("th",{scope:"col",children:"User Name"}),Object(N.jsx)("th",{})]})}),Object(N.jsx)("tbody",{children:a.investorsList.map((function(e,t){return Object(N.jsxs)("tr",{hover:!0,children:[Object(N.jsx)("td",{children:e.id}),Object(N.jsx)("td",{children:e.fName+" "+e.sName+" "+e.lName}),Object(N.jsx)("td",{children:e.email}),Object(N.jsx)("td",{children:e.mobile}),Object(N.jsx)("td",{children:e.address}),Object(N.jsx)("td",{children:e.userLevel}),Object(N.jsx)("td",{children:e.uName}),Object(N.jsx)("td",{children:Object(N.jsxs)(l.a,{variant:"text",children:[Object(N.jsx)(c.a,{children:Object(N.jsx)(j.a,{color:"primary",onClick:function(){p(e.id)}})}),Object(N.jsx)(c.a,{children:Object(N.jsx)(h.a,{color:"Secondary",onClick:function(){L(!0),L({onConfirm:function(){var t;t=e.id,a.deleteStaff(t,w),L(!1)}})}})})]})})]},t)}))})]})})]}),Object(N.jsx)(g.a,{title:"Are you sure you want to delete this record?",subTitle:"This operation can't be reversed",confirmDialog:T,setConfirmDialog:L})]})})))}}]);
//# sourceMappingURL=17.57e8a765.chunk.js.map