(this.webpackJsonpInvmogul=this.webpackJsonpInvmogul||[]).push([[43],{1045:function(t,e,s){"use strict";s.r(e);var n=s(17),c=s(9),r=(s(1234),s(371)),a=s(1218),i=s(1214),l=s(15),o=s(0),d=s(72),u=s(141),j=(s(374),s(233)),b=s(105),h=s(77),f=s(57),O=s(43),g=s(62),p=s(194),x=s(1274),S=s(125),D=s(285),m=s.n(D),T=s(2),L=["classes"],C={fetchAllProducts:b.d,fetchAllNSTransactions:h.e,fetchAllTCTransactions:O.e,fetchAllCSTransactions:f.e,fetchAllTransactionDetails:h.d,fetchAllCSTransactionDetails:f.d,fetchAllTCTransactionDetails:O.d,fetchAllExpenses:p.d,fetchAllCompanyData:S.d},A=Object(d.b)((function(t){return{productsList:t.products.list,creditSalesList:t.creditSale.list,tcTransactionsList:t.trucks_cadetes.list,nSTransactionDeatail:t.cash.list,salesList:t.cashSale.list,cSaleDetailsList:t.credit.list,tcTransDetailsList:t.trucks.list,expensesList:t.expenses.list,companyDataList:t.companyData.list}}),C)(Object(l.a)((function(t){return{root:{"& .MuiTableCell-head":{fontSize:"0.95rem"}},paper:{margin:t.spacing(-8.9),padding:t.spacing(6)},grid:{paddingLeft:t.spacing(2)},td:{textIndent:"50px"},tr:{backgroundColor:"primary",color:"white"}}}))((function(t){var e=t.classes,s=Object(c.a)(t,L),n=Object(o.useRef)();return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(m.a,{trigger:function(){return Object(T.jsx)(g.a.Button,{text:"Print",variant:"outlined",className:e.newButton})},content:function(){return n.current}}),Object(T.jsx)("div",{children:Object(T.jsxs)("div",{ref:n,className:"p-5",children:[Object(T.jsxs)("header",{children:[Object(T.jsxs)("div",{className:"logo",children:[Object(T.jsx)("img",{src:s.companyDataList[0].logo,alt:"generic business logo",height:100,width:100,style:{marginTop:50}}),Object(T.jsx)("h5",{children:s.companyDataList[0].name})]}),Object(T.jsxs)("div",{className:"invoiceNbr",children:["PROFIT AND LOSS",Object(T.jsx)("br",{}),Object(T.jsxs)("h5",{children:[" For the period: ",s.dateR]})]})]}),Object(T.jsx)("section",{children:Object(T.jsxs)("table",{class:"table  .table-responsive{-sm|-md|-lg|-xl|-xxl} table-bordered table-hover table-sm table-striped",children:[Object(T.jsx)("thead",{class:"table-dark",children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{scope:"col"}),Object(T.jsx)("th",{scope:"col",children:"Amount"})]})}),Object(T.jsxs)("tbody",{children:[Object(T.jsx)("tr",{children:Object(T.jsx)("th",{scope:"col",children:"INCOME"})}),Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{className:e.td,children:"Sales"}),Object(T.jsx)("td",{children:s.plList[0].Sales})]}),Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{className:e.td,children:"TOTAL INCOME"}),Object(T.jsx)("td",{children:s.plList[0].TotalIncome})]}),Object(T.jsx)("tr",{children:Object(T.jsx)("th",{children:"COST OF GOODS SOLD"})}),Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{className:e.td,children:"Cost"}),Object(T.jsx)("td",{children:s.plList[0].Cost})]}),Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"GROSS PROFIT"}),Object(T.jsx)("td",{children:s.plList[0].GrossProfit})]}),Object(T.jsx)("tr",{children:Object(T.jsx)("th",{children:"EXPENSES"})}),s.expD.map((function(t,s){return Object(T.jsxs)("tr",{hover:!0,children:[Object(T.jsx)("td",{className:e.td,children:t.name}),Object(T.jsx)("td",{children:t.amount})]},s)})),Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{className:e.td,children:"TOTAL EXPENSES"}),Object(T.jsx)("td",{children:s.plList[0].Expenses})]}),Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"NET PROFIT(lOSS)"}),Object(T.jsx)("td",{children:s.plList[0].NetProfit})]})]})]})})]})})]})}))),v=["classes"],y={fetchAllProducts:b.d,fetchAllNSTransactions:h.e,fetchAllTCTransactions:O.e,fetchAllCSTransactions:f.e,fetchAllTransactionDetails:h.d,fetchAllCSTransactionDetails:f.d,fetchAllTCTransactionDetails:O.d,fetchAllExpenses:p.d,fetchAllCompanyData:S.d};e.default=Object(d.b)((function(t){return{productsList:t.products.list,creditSalesList:t.creditSale.list,tcTransactionsList:t.trucks_cadetes.list,nSTransactionDeatail:t.cash.list,salesList:t.cashSale.list,cSaleDetailsList:t.credit.list,tcTransDetailsList:t.trucks.list,expensesList:t.expenses.list,companyDataList:t.companyData.list}}),y)(Object(l.a)((function(t){return{root:{"& .MuiTableCell-head":{fontSize:"0.95rem"}},paper:{margin:t.spacing(-8.9),padding:t.spacing(6)},grid:{paddingLeft:t.spacing(2)},td:{textIndent:"50px"},tr:{backgroundColor:"primary",color:"white"}}}))((function(t){var e=t.classes,s=Object(c.a)(t,v),l=(Object(u.useToasts)().addToast,Object(o.useState)(0)),d=Object(n.a)(l,2),b=d[0],h=d[1],f=Object(o.useState)(!1),O=Object(n.a)(f,2),p=O[0],S=O[1],m=Object(o.useState)([{}]),L=Object(n.a)(m,2),C=L[0],y=L[1],w=Object(o.useState)([]),E=Object(n.a)(w,2),N=(E[0],E[1]),P=Object(o.useState)([]),I=Object(n.a)(P,2),F=I[0],M=I[1],R=Object(o.useState)(null),k=Object(n.a)(R,2),Y=k[0],B=k[1],G=Object(o.useState)(""),q=Object(n.a)(G,2),z=q[0],J=q[1],X=Object(o.useState)(!1),_=Object(n.a)(X,2),H=_[0],K=_[1],Q=Object(o.useRef)(),U="",V=new Date,W=String(V.getDate()).padStart(2,"0"),Z=String(V.getMonth()+1).padStart(2,"0"),$=V.getFullYear();V=$+"-"+Z+"-"+W,Object(o.useEffect)((function(){s.fetchAllProducts(),s.fetchAllNSTransactions(),s.fetchAllTCTransactions(),s.fetchAllCSTransactions(),s.fetchAllTransactionDetails(),s.fetchAllCSTransactionDetails(),s.fetchAllTCTransactionDetails(),s.fetchAllExpenses(),s.fetchAllCompanyData()}),[]);new Date(new Date((new Date).getFullYear(),(new Date).getMonth(),W)),new Date(new Date((new Date).getFullYear(),(new Date).getMonth()+1,W)),new Date(new Date((new Date).getFullYear(),(new Date).getMonth(),8));var tt=new Date(new Date((new Date).getFullYear(),(new Date).getMonth(),W));Object(D.useReactToPrint)({content:function(){return Q.current}});return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(r.a,{className:e.paper,elevation:3,children:Object(T.jsxs)(a.a,{container:!0,children:[Object(T.jsxs)(a.a,{item:!0,xs:12,children:[Object(T.jsxs)(i.a,{children:[Object(T.jsx)(x.a,{placeholder:"Enter Date Range",max:tt,format:"yyyy-MM-dd",start:"Year",date:"Year",change:function(t){U=t.text,B(U)}}),Object(T.jsx)(g.a.Button,{text:"Load ",variant:"outlined",className:e.newButton,onClick:function(){!function(){try{var t=s.salesList.filter((function(t){return t.dateIn.toString().substring(0,10)>=Y.toString().substring(0,10)&&t.dateIn.toString().substring(0,10)<=Y.toString().substring(13,23)})),e=0,n="";t.forEach((function(t){n=t.transCode,s.nSTransactionDeatail.filter((function(t){return t.transCode==n})).forEach((function(t){var n=t.productId,c=s.productsList.find((function(t){return t.productId==n}));e+=c.buyingPrice*t.quantity}))})),N(e);var c=t.reduce((function(t,e){return t+e.totalPrice}),0),r=t.reduce((function(t,e){return t+e.gDeposit}),0),a=s.creditSalesList.filter((function(t){return t.datePaid.toString().substring(0,10)>=Y.toString().substring(0,10)&&t.datePaid.toString().substring(0,10)<=Y.toString().substring(13,23)})),i=0,l="";a.forEach((function(t){l=t.transCode,s.cSaleDetailsList.filter((function(t){return t.transCode==l})).forEach((function(t){var e=t.productId,n=s.productsList.find((function(t){return t.productId==e}));i+=n.buyingPrice*t.quantity}))}));var o=a.reduce((function(t,e){return t+e.totalPrice}),0),d=a.reduce((function(t,e){return t+e.gDeposit}),0),u=s.tcTransactionsList.filter((function(t){return t.returnDate.toString().substring(0,10)>=Y.toString().substring(0,10)&&t.returnDate.toString().substring(0,10)<=Y.toString().substring(13,23)})),j=0,b="";u.forEach((function(t){b=t.transCode,s.tcTransDetailsList.filter((function(t){return t.transCode==b})).forEach((function(t){var e=t.productId,n=s.productsList.find((function(t){return t.productId==e}));j+=n.buyingPrice*t.quantity}))}));var h=u.reduce((function(t,e){return t+e.totalPrice}),0),f=u.reduce((function(t,e){return t+e.gDeposit}),0),O=c+o+h,g=e+i+j,p=r+d+f,x=O,S=x-g,D=s.expensesList.filter((function(t){return t.date.toString().substring(0,10)>=Y.toString().substring(0,10)&&t.date.toString().substring(0,10)<=Y.toString().substring(13,23)})).reduce((function(t,e){return t+e.amount}),0);y([{Sales:O,Cost:g,GrossProfit:S,Expenses:D,NetProfit:S-D,Deposits:p,TotalIncome:x}]);var m=s.expensesList.filter((function(t){return t.date>=Y.toString().substring(0,10)&&t.date.toString().substring(0,10)<=Y.toString().substring(13,23)}));M(m),J(s.companyDataList)}catch(T){}}(),K(!0)}})]}),Object(T.jsx)(i.a,{})]}),Object(T.jsx)(a.a,{}),Object(T.jsx)(a.a,{item:!0,xs:12,children:Object(T.jsx)("div",{children:!0===H&&Object(T.jsx)(A,{currentId:b,setCurrentId:h,plList:C,setPlList:y,expD:F,setExpD:M,dateR:Y,setDateR:B,compD:z,setCompD:J})})})]})}),Object(T.jsx)(j.a,{title:"Are you sure you want to delete this record?",subTitle:"This operation can't be reversed",confirmDialog:p,setConfirmDialog:S})]})})))},1234:function(t,e,s){}}]);
//# sourceMappingURL=43.0eb128dd.chunk.js.map