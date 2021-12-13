(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{31:function(e,t,n){},42:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(33),r=n.n(i),s=(n(42),n(3)),o=n(4),l=n(6),h=n(5),j=(n(31),n(16)),d=n(53),u=n(54),b=n(19),O=n(2),m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={isOpen:!1},a.toggle=a.toggle.bind(Object(j.a)(a)),a}return Object(o.a)(n,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return Object(O.jsx)(d.a,{color:"dark",dark:!0,expand:"md",children:Object(O.jsx)(u.a,{tag:b.b,to:"/",children:"Home"})})}}]),n}(a.Component),p=n(55),x=n(56),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(m,{}),Object(O.jsxs)(p.a,{fluid:!0,children:[Object(O.jsx)(x.a,{color:"link",children:Object(O.jsx)(b.b,{to:"/clients",children:"Clients"})}),Object(O.jsx)(x.a,{color:"link",children:Object(O.jsx)(b.b,{to:"/data",children:"Clients Chart"})})]})]})}}]),n}(a.Component),v=f,g=n(11),y=n(21),C=n.n(y),k=n(15),w=n(25),D=n(57),S=n(58),A=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={clients:[]},a.remove=a.remove.bind(Object(j.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/clients").then((function(e){return e.json()})).then((function(t){return e.setState({clients:t})}))}},{key:"remove",value:function(){var e=Object(w.a)(C.a.mark((function e(t){var n=this;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/clients/".concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(){var e=Object(k.a)(n.state.clients).filter((function(e){return e.id!==t}));n.setState({clients:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.clients.map((function(t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{style:{whiteSpace:"nowrap"},children:t.name}),Object(O.jsx)("td",{children:t.email}),Object(O.jsx)("td",{children:Number(t.amount.toFixed(2))}),Object(O.jsxs)("td",{children:[Number(t.discount.toFixed(2)),"%"]}),Object(O.jsx)("td",{children:t.billingDate}),Object(O.jsx)("td",{children:Object(O.jsxs)(D.a,{children:[Object(O.jsx)(x.a,{size:"sm",color:"primary",tag:b.b,to:"/clients/"+t.id,children:"Edit"}),Object(O.jsx)(x.a,{size:"sm",color:"danger",onClick:function(){return e.remove(t.id)},children:"Delete"})]})})]},t.id)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)(m,{}),Object(O.jsxs)(p.a,{fluid:!0,children:[Object(O.jsx)("div",{className:"float-right",children:Object(O.jsx)(x.a,{color:"success",tag:b.b,to:"/clients/new",children:"Add Client"})}),Object(O.jsx)("h3",{children:"Clients"}),Object(O.jsxs)(S.a,{className:"mt-4",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{width:"25%",children:"Name"}),Object(O.jsx)("th",{width:"20%",children:"Email"}),Object(O.jsx)("th",{width:"15%",children:"Amount"}),Object(O.jsx)("th",{width:"15%",children:"Discount"}),Object(O.jsx)("th",{width:"15%",children:"Billing Date"}),Object(O.jsx)("th",{width:"15%",children:"Actions"})]})}),Object(O.jsx)("tbody",{children:t})]})]})]})}}]),n}(a.Component),T=A,E=n(22),F=n(59),N=n(60),P=n(61),L=n(62),B=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).emptyItem={name:"",email:""},a.state={item:a.emptyItem},a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(w.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"===this.props.match.params.id){e.next=7;break}return e.next=3,fetch("/clients/".concat(this.props.match.params.id));case 3:return e.next=5,e.sent.json();case 5:t=e.sent,this.setState({item:t});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var t=e.target,n=t.value,a=t.name,c=Object(E.a)({},this.state.item);c[a]=n,this.setState({item:c})}},{key:"handleSubmit",value:function(){var e=Object(w.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=this.state.item,e.next=4,fetch("/clients"+(n.id?"/"+n.id:""),{method:n.id?"PUT":"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 4:this.props.history.push("/clients");case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.item,t=Object(O.jsx)("h2",{children:e.id?"Edit Client":"Add Client"});return Object(O.jsxs)("div",{children:[Object(O.jsx)(m,{}),Object(O.jsxs)(p.a,{children:[t,Object(O.jsxs)(F.a,{onSubmit:this.handleSubmit,children:[Object(O.jsxs)(N.a,{children:[Object(O.jsx)(P.a,{for:"name",children:"Name"}),Object(O.jsx)(L.a,{type:"text",name:"name",id:"name",value:e.name||"",onChange:this.handleChange,autoComplete:"name"})]}),Object(O.jsxs)(N.a,{children:[Object(O.jsx)(P.a,{for:"email",children:"Email"}),Object(O.jsx)(L.a,{type:"text",name:"email",id:"email",value:e.email||"",onChange:this.handleChange,autoComplete:"email"})]}),Object(O.jsxs)(N.a,{children:[Object(O.jsx)(P.a,{for:"amount",children:"Amount"}),Object(O.jsx)(L.a,{type:"text",name:"amount",id:"amount",value:e.amount||"",onChange:this.handleChange,autoComplete:"amount"})]}),Object(O.jsxs)(N.a,{children:[Object(O.jsx)(P.a,{for:"discount",children:"Discount"}),Object(O.jsx)(L.a,{type:"text",name:"discount",id:"discount",value:e.discount||"",onChange:this.handleChange,autoComplete:"discount"})]}),Object(O.jsxs)(N.a,{children:[Object(O.jsx)(P.a,{for:"billingDate",children:"Billing Date"}),Object(O.jsx)("input",{type:"date",name:"billingDate",id:"billingDate",value:e.billingDate||"",onChange:this.handleChange,placeholder:"dd/mm/yyyy",min:"1997-01-01",max:"2030-12-31"})]}),Object(O.jsxs)(N.a,{children:[Object(O.jsx)(x.a,{color:"primary",type:"submit",children:"Save"})," ",Object(O.jsx)(x.a,{color:"secondary",tag:b.b,to:"/clients",children:"Cancel"})]})]})]})]})}}]),n}(a.Component),I=Object(g.f)(B),M=n(36),V=(n(52),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={stockData:[]},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/data").then((function(e){return e.json()})).then((function(t){return e.setState({stockData:t})}))}},{key:"render",value:function(){var e=this.state.stockData,t=[];t.push(["Year","Open","Close","Low","High"]);for(var n=e.map((function(e){var t=e.date.split("-");return[new Date(t[1]+"/"+t[2]+"/"+t[0]).getFullYear().toString(),e.open,e.close,e.low,e.high]})),a=0;a<n.length;a++)t.push(n[a]);return console.log(t),Object(O.jsx)(M.a,{width:"100%",height:"600px",chartType:"Line",loader:Object(O.jsx)("div",{children:"Loading Chart"}),data:t,options:{chart:{title:"Yearly Tesla Stock Chart",subtitle:"in Percentage(%)"},vAxis:{title:"Stock Prices(%)",minValue:0,maxValue:100},hAxis:{title:"Years",minValue:2e3,maxValue:2050}},rootProps:{"data-testid":"3"}})}}]),n}(c.a.Component));n(26);var Y=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(b.a,{children:Object(O.jsxs)(g.c,{children:[Object(O.jsx)(g.a,{path:"/",exact:!0,component:v}),Object(O.jsx)(g.a,{path:"/clients",exact:!0,component:T}),Object(O.jsx)(g.a,{path:"/clients/:id",component:I}),Object(O.jsx)(g.a,{path:"/data",exact:!0,component:V})]})})}}]),n}(a.Component),J=Y,z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};n(50);r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(J,{})}),document.getElementById("root")),z()}},[[51,1,2]]]);
//# sourceMappingURL=main.4f41de85.chunk.js.map