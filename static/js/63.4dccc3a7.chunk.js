(this.webpackJsonpInvmogul=this.webpackJsonpInvmogul||[]).push([[63],{971:function(e,t,c){"use strict";c.r(t);var a=c(4),s=c(17),r=c(9),i=c(0),n=c(1206),o=c(15),l=c(235),d=c(72),u=c(123),b=c(141),j=(c(646),c(382),c(381)),h=c(2),m=["classes"],p={regNo:"",description:""},f={createVehicle:u.c,updateVehicle:u.e,fetchAllVehicles:u.d};t.default=Object(d.b)((function(e){return{vehiclesList:e.vehicles.list}}),f)(Object(o.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),minWidth:230}},formControl:{margin:e.spacing(1),minWidth:230},smMargin:{margin:e.spacing(1)}}}))((function(e){var t=e.classes,c=Object(r.a)(e,m),o=Object(b.useToasts)().addToast,d=Object(i.useState)(!1),u=Object(s.a)(d,2),f=(u[0],u[1],Object(i.useState)(!1)),O=Object(s.a)(f,2),v=O[0],g=O[1],N=Object(i.useState)(""),x=Object(s.a)(N,2),y=x[0],V=x[1],I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=Object(a.a)({},S);if("regNo"in e&&(t.regNo=e.regNo?"":"This field is required"),"description"in e&&(t.description=e.description?"":"This field is required"),k(Object(a.a)({},t)),e==w)return Object.values(t).every((function(e){return""==e}))},C=Object(l.a)(p,I,c.setCurrentId),T=Object(s.a)(C,6),w=T[0],P=T[1],S=T[2],k=T[3],A=T[4],D=T[5];return Object(i.useEffect)((function(){0!=c.currentId&&P(Object(a.a)({},c.vehiclesList.find((function(e){return e.regNo==c.currentId})))),k({}),c.fetchAllVehicles()}),[c.currentId]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("section",{className:"content",children:Object(h.jsx)("div",{className:"container-fluid",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsxs)("div",{className:"card card-primary",children:[Object(h.jsx)("div",{className:"card-header",children:Object(h.jsxs)("h4",{className:"card-title",children:["Add Vehicles ",Object(h.jsx)("small",{children:" "})]})}),Object(h.jsxs)("form",{id:"quickForm",autoComplete:"off",noValidate:!0,className:t.root,onSubmit:function(e){if(e.preventDefault(),I()){var t=function(){o("Vehicle data saved succeffuly",{appearance:"success"}),o("Vehicle data saved succeffuly",{appearance:"success"}),o("Vehicle data saved succeffuly",{appearance:"success"}),c.fetchAllVehicles(),D()};0==c.currentId?c.createVehicle(w,t):w.regNo==c.currentId?c.updateVehicle(c.currentId,w,t):(console.log("No Plate cannot be updated. It may be associated with Many transactions"),V("Vehicle No.Plate cannot be updated. It may be associated with Many transactions."),g(!0),g({onConfirm:function(){}}),D()),1==c.openPopup&&c.setOpenPopup(!1)}},children:[Object(h.jsx)(n.a,Object(a.a)({className:"form-ctr",id:"standard-basic",type:"text",name:"regNo",label:"Number Plate",value:w.regNo,onChange:A},S.regNo&&{error:!0,helperText:S.regNo})),Object(h.jsx)(n.a,Object(a.a)({className:"form-ctr",name:"description",label:"Description",value:w.description,onChange:A},S.description&&{error:!0,helperText:S.description})),Object(h.jsx)("div",{className:"card-footer",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"}),Object(h.jsx)("button",{variant:"contained",className:"btn btn-secondary",onClick:D,style:{marginLeft:3},children:"Reset"})]})})]})]})}),Object(h.jsx)("div",{className:"col-md-6"})]})})}),Object(h.jsx)(j.a,{title:y,errorDialog:v,setErrorDialog:g})]})})))}}]);
//# sourceMappingURL=63.4dccc3a7.chunk.js.map