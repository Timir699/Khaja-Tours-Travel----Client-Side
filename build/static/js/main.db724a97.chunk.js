(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{59:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},87:function(e,t,c){},89:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(35),a=c.n(r),i=(c(74),c(75),c(58),c(18)),o=c(6),j=c(104),l=c(103),d=c(105),u=c(12),b=c(3),h=Object(n.createContext)(),O=function(e){var t=e.children,c=Object(n.useState)([]),s=Object(u.a)(c,2),r=s[0],a=s[1],i=Object(n.useState)(0),o=Object(u.a)(i,2),j=o[0],l=o[1];return Object(b.jsx)(h.Provider,{value:{allCartProducts:r,setAllCartProducts:a,cartCounter:j,setCartCounter:l},children:t})},m=function(){return Object(n.useContext)(h)},x=(c(77),c(64)),f=c(55),v=(c(78),function(){return Object(b.jsx)("div",{className:"banner text-center",children:Object(b.jsxs)("div",{className:"bg-overlay",children:[Object(b.jsx)("h2",{className:"mb-4",children:"Welcome to Khaja Tours & Travels"}),Object(b.jsx)("button",{type:"button",class:"btn btn-outline-success",children:"Book Here"})]})})}),p=c(14),g=c(32),N=c(61),S=(c(79),function(){return Object(b.jsxs)("div",{className:"about text-success mt-5 container",children:[Object(b.jsx)("h2",{className:"text-center",children:"About Khaja Tours"}),Object(b.jsxs)(l.a,{children:[Object(b.jsx)(N.a,{xs:12,lg:6,children:Object(b.jsx)("div",{className:"main-about mt-5 ",children:Object(b.jsx)("img",{className:"w-100",src:"https://cdn.pixabay.com/photo/2017/12/16/22/22/bora-bora-3023437_1280.jpg",alt:""})})}),Object(b.jsx)(N.a,{xs:12,lg:6,children:Object(b.jsx)("div",{className:"about-content",children:Object(b.jsx)("p",{children:"Khaja travel is an private retailer agency service that provides travel and tourism-related services to the general public on behalf of accommodation or travel suppliers to offer different kinds of travelling packages for each destination."})})})]})]})}),C=Object(n.createContext)(),y=function(e){var t=e.children,c=Object(n.useState)([]),s=Object(u.a)(c,2),r=s[0],a=s[1];return Object(n.useEffect)((function(){fetch("https://frightening-pirate-52052.herokuapp.com/businessPackages").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(b.jsx)(C.Provider,{value:{setDisplayServices:a,displayServices:r},children:t})},k=function(){var e=Object(p.g)(),t=Object(n.useContext)(C).displayServices,c=m(),s=c.allCartProducts,r=c.setAllCartProducts,a=c.cartCounter,u=c.setCartCounter;return Object(b.jsxs)("div",{className:"services",children:[Object(b.jsx)(v,{}),Object(b.jsx)(S,{}),Object(b.jsxs)(j.a,{children:[Object(b.jsx)("h2",{className:"text-center my-5 text-success",children:"Services"}),Object(b.jsxs)(l.a,{children:[null===t||void 0===t?void 0:t.map((function(t){return Object(b.jsxs)("div",{className:"services text-center col-lg-4 col-md-6 col-sm-12 mb-5 p-2 border rounded",children:[Object(b.jsx)("img",{src:t.image,alt:""}),Object(b.jsx)("h4",{className:"mt-3",children:t.name}),Object(b.jsxs)("h4",{children:["$",t.price]}),Object(b.jsxs)(d.a,{as:g.b,to:"/Service/".concat(t._id),variant:"success",children:[Object(b.jsx)(x.a,{className:"mb-1"})," Service Details"]})," ",Object(b.jsxs)(d.a,{onClick:function(){return function(t){fetch("https://frightening-pirate-52052.herokuapp.com/orders",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(Object(o.a)(Object(o.a)({},t),{},{status:"pending"}))}).then((function(e){return console.log(e)})),u(a+1),r([].concat(Object(i.a)(s),[t])),e.push("/Cart"),alert("service added to my orders Successfully")}(t)},variant:"success",children:[Object(b.jsx)(f.a,{className:"mb-1"}),"Get This Service"]})," "]},t.id)})),Object(b.jsx)("h2",{className:"text-center mb-5",children:0===t.length?"Your desired Service Not Found":""})]})]})]})},w=(c(59),c(109)),T=(c(87),function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(p.g)();return Object(b.jsx)("div",{className:"shipping text-center",children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)("h2",{className:"my-3",children:" Shipping Address"}),Object(b.jsxs)(w.a,{onSubmit:function(e){e.preventDefault(),""!==c?r.push("/OrderConfirmed"):alert("please enter Valid Address"),s("")},children:[Object(b.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicEmail",onChange:function(e){return function(e){s(e.target.value),console.log(c)}(e)},children:[Object(b.jsx)(w.a.Label,{children:"Your Full Address Here"}),Object(b.jsx)(w.a.Control,{type:"text",placeholder:"Address",name:"address"})]}),Object(b.jsx)(d.a,{className:"mb-5",variant:"success",type:"submit",children:"Confirm Order"})]})]})})}),P=function(){Object(p.g)();var e=m(),t=e.allCartProducts,c=e.setAllCartProducts,n=e.cartCounter,s=e.setCartCounter,r=t.map((function(e){return e.price})).reduce((function(e,t){return e+t}),0);console.log(r);var a=15*r/100;Math.round(a);return Object(b.jsxs)("div",{className:"cart",children:[Object(b.jsx)(T,{}),Object(b.jsx)(j.a,{children:Object(b.jsx)(l.a,{children:Object(b.jsx)("div",{className:"col-lg-12 ",children:t.map((function(e){return Object(b.jsxs)("div",{className:" text-center d-flex justify-content-around align-items-center my-5",children:[Object(b.jsx)("img",{className:"w-25 h-auto",src:e.image,alt:""}),Object(b.jsx)("p",{className:"w-25",children:e.name}),Object(b.jsxs)("p",{className:"w-25",children:["price $",e.price]}),Object(b.jsx)(d.a,{onClick:function(){return function(e){if(window.confirm("remove item?")){s(n-1);var r=t.filter((function(t){return t!==e}));c(r)}}(e)},variant:"success",children:"Remove"})]},e.id)}))})})})]})},L=c(107),A=c(108),I=c(65),E={apiKey:"AIzaSyDK0tGaRmi-vuvIx6nDdTTaHWftTvclaog",authDomain:"khaja-travels.firebaseapp.com",projectId:"khaja-travels",storageBucket:"khaja-travels.appspot.com",messagingSenderId:"1088880790094",appId:"1:1088880790094:web:b9e3ea0dc03dc5b8aa111f"},D=function(){Object(I.a)(E)},B=c(42);D();var F=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),a=Object(u.a)(r,2),i=a[0],o=a[1],j=Object(n.useState)(""),l=Object(u.a)(j,2),d=l[0],b=l[1],h=Object(n.useState)(!0),O=Object(u.a)(h,2),m=O[0],x=O[1];localStorage.setItem("loading",m);var f=Object(n.useState)({displayName:"",email:"",password:""}),v=Object(u.a)(f,2),p=v[0],g=v[1],N=Object(B.c)(),S=new B.b,C=new B.a;return Object(n.useEffect)((function(){var e=Object(B.d)(N,(function(e){s(e||{}),x(!1)}));return function(){return e}}),[N]),{signInWithGoogle:function(){return x(!0),Object(B.e)(N,S).finally((function(){return x(!1)}))},signInWithGithub:function(){x(!0),Object(B.e)(N,C).then((function(e){s(e.user),b("Successfully Registered"),o("")})).catch((function(e){b(""),o(e.message)})).finally((function(){return x(!1)}))},user:c,setUser:s,registerLogin:p,setRegisterLogin:g,error:i,setError:o,success:d,setSuccess:b,isLoading:m,setIsLoading:x,logout:function(){x(!0),Object(B.f)(N).then((function(){s({}),b("SuccesFully Logged out")})).catch((function(e){b(""),o(e.message)})).finally((function(){return x(!1)}))}}},G=Object(n.createContext)(),K=function(e){var t=e.children,c=F();return Object(b.jsx)(G.Provider,{value:c,children:t})},R=function(){return Object(n.useContext)(G)},M=(c(89),function(){var e=R(),t=e.user,c=e.logout;m().cartCounter;return Object(b.jsx)("div",{children:Object(b.jsx)(L.a,{collapseOnSelect:!0,expand:"lg",bg:"success",variant:"dark",className:"fixed-top",children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(L.a.Brand,{as:g.b,to:"/",children:"Khaja Tours & Travels "}),Object(b.jsx)(L.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsxs)(L.a.Collapse,{id:"responsive-navbar-nav",children:[Object(b.jsxs)(A.a,{className:"m-auto",children:[Object(b.jsx)(A.a.Link,{as:g.b,className:"",to:"/",children:"Services"}),Object(b.jsx)(A.a.Link,{as:g.b,className:"",to:"/manageOrders",children:"Manage orders"}),Object(b.jsx)(A.a.Link,{as:g.b,className:"",to:"/newService",children:"Add a Service"}),Object(b.jsx)("div",{className:"cart-link",children:Object(b.jsx)(A.a.Link,{as:g.b,to:"/cart",children:"  My Orders "})})]}),Object(b.jsxs)(A.a,{children:[(null===t||void 0===t?void 0:t.email)&&Object(b.jsxs)(L.a.Text,{children:["Signed in as: ",Object(b.jsx)("a",{className:"mx-1",href:"#login",children:null===t||void 0===t?void 0:t.displayName})]}),Object(b.jsx)(A.a.Link,{style:{display:(null===t||void 0===t?void 0:t.email)?"none":"block"},as:g.b,to:"/login",children:"Log in"}),(null===t||void 0===t?void 0:t.email)&&Object(b.jsx)(d.a,{className:"mx-3",variant:"danger",onClick:c,children:"Log Out"})]})]})]})})})}),U=(c(92),c(67)),W=function(){var e=Object(p.h)(),t=Object(p.g)(),c=R(),n=c.signInWithGoogle,s=c.user,r=c.error,a=c.success,i=c.setSuccess,o=c.setError;c.setUser;console.log(s);return Object(b.jsxs)("div",{className:"login text-center",children:[Object(b.jsx)("h2",{className:"my-3",children:s.email?"":"Please log in for manage orders & to add a new service"}),Object(b.jsxs)(j.a,{children:[Object(b.jsx)(U.a,{style:{fontSize:"50px",cursor:"pointer"},onClick:function(){n().then((function(c){var n;t.push((null===(n=e.state)||void 0===n?void 0:n.from)||"/"),i("Successfully Registered"),o("")})).catch((function(e){i(""),o(e.message)}))}}),Object(b.jsx)("h3",{className:"text-danger",children:r}),Object(b.jsx)("h3",{className:"text-success",children:a})]})]})},_=(c(93),function(){return Object(b.jsxs)("div",{className:"text-center not-found",children:[Object(b.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl9nt6CXaBeIBZjj_BYx80Tktq7ZEgEulaU1Xb73LFCeybtw1GE9FXQf-F6EiXeZ72v30&usqp=CAU",alt:""}),Object(b.jsx)("h2",{children:"Not Found"})]})}),H=(c(94),function(){var e=Object(p.g)();return Object(b.jsxs)("div",{className:"text-center order-confirmed",children:[Object(b.jsx)("h2",{className:"mt-3 text-success",children:"Package Confirmed!! Thanks for being with us."}),Object(b.jsx)(d.a,{onClick:function(){e.push("/")},style:{display:"block"},className:"btn-success mx-auto mt-3",children:"Go Back to Services"}),Object(b.jsx)("img",{src:"https://cdni.iconscout.com/illustration/premium/thumb/order-confirmed-2644404-2206500.png",alt:""})]})}),J=c(10),X=c(106),q=["children"],Y=function(e){var t=e.children,c=Object(J.a)(e,q),n=R(),s=n.user,r=n.isLoading;return localStorage.getItem("local"),r?Object(b.jsx)(X.a,{animation:"border",variant:"warning"}):Object(b.jsx)("div",{children:Object(b.jsx)(p.b,Object(o.a)(Object(o.a)({},c),{},{render:function(e){var c=e.location;return s.email?t:Object(b.jsx)(p.a,{to:{pathname:"/Login",state:{from:c}}})}}))})},Z=(c(95),function(){return Object(b.jsx)("div",{className:"footer",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(l.a,{children:[Object(b.jsxs)("div",{className:"col-lg-6 col-sm-12 text-center",children:["Khaja Tours & Travels",Object(b.jsx)("br",{}),"Emergency call: ",Object(b.jsx)("a",{href:"tel:+8801611154975",children:"+88 01611154975"})]}),Object(b.jsxs)("div",{className:"col-lg-6 col-sm-12 text-center",children:["location: House: 500, Bananni-11, Dhaka",Object(b.jsx)("br",{}),"Email: ",Object(b.jsx)("a",{href:"mailto:KhajaTours&Travels@gamil.com",children:"KhajaTours&Travels@gamil.com"})]})]})})})}),$=Object(n.createContext)(),z=function(e){var t=e.children,c=Object(n.useState)([]),s=Object(u.a)(c,2),r=s[0],a=s[1];return Object(n.useEffect)((function(){fetch("https://frightening-pirate-52052.herokuapp.com/businessPackages").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(b.jsx)($.Provider,{value:r,children:t})},Q=function(){return Object(n.useContext)($)},V=(c(96),function(){var e=Object(p.i)().ServiceId;console.log(e);var t=Q(),c=null===t||void 0===t?void 0:t.find((function(t){return t._id===e}));return Object(b.jsxs)("div",{className:"service-detail text-center",children:[Object(b.jsxs)("h2",{className:"mt-3",children:["Details of ",null===c||void 0===c?void 0:c.name]}),Object(b.jsx)("img",{src:null===c||void 0===c?void 0:c.image,alt:"",className:"w-25 my-3"}),Object(b.jsx)("p",{className:"w-75 m-auto mb-5 pb-4",children:null===c||void 0===c?void 0:c.description})]})}),ee=(c(97),c(68)),te=function(){var e=Object(ee.a)(),t=e.register,c=e.handleSubmit,s=e.reset,r=Object(n.useContext)(C).setDisplayServices;return Object(b.jsxs)("div",{className:"newService text-center",children:[Object(b.jsx)("h2",{children:"Add A Service here"}),Object(b.jsxs)("form",{onSubmit:c((function(e){fetch("https://frightening-pirate-52052.herokuapp.com/businessPackages",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){fetch("https://frightening-pirate-52052.herokuapp.com/businessPackages").then((function(e){return e.json()})).then((function(e){console.log(e),r(e),s()}))}))})),children:[Object(b.jsx)("input",Object(o.a)(Object(o.a)({},t("name")),{},{placeholder:"Service name here"})),Object(b.jsx)("br",{}),Object(b.jsx)("input",Object(o.a)(Object(o.a)({},t("description")),{},{placeholder:"Service Description"})),Object(b.jsx)("br",{}),Object(b.jsx)("input",Object(o.a)(Object(o.a)({type:"number"},t("price")),{},{placeholder:"Service Price"})),Object(b.jsx)("br",{}),Object(b.jsx)("input",Object(o.a)(Object(o.a)({},t("image")),{},{placeholder:"Image URL"})),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"submit",type:"submit"})]})]})},ce=(c(98),function(e){var t=e.service,c=e.setManageOrder,s=e.manageOrder,r=Object(n.useState)(!1),a=Object(u.a)(r,2),i=a[0],o=a[1],j=Object(n.useState)(),l=Object(u.a)(j,2),h=l[0],O=l[1];return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"d-flex justify-content-around text-left mb-5",children:[Object(b.jsx)("p",{className:"w-25",children:t.name}),Object(b.jsxs)("p",{className:"w-25",children:["Status-"," ",i&&h===t.id?"Approved":"pending"]}),Object(b.jsxs)("p",{className:"w-25",children:["$",t.price]}),Object(b.jsx)("img",{className:"mr-5",src:t.image,alt:""}),Object(b.jsxs)(d.a,{onClick:function(){return function(e){o(!i);var t=s.find((function(t){return t.id===e.id}));O(t.id)}(t)},className:i&&h===t.id?"btn-success":"btn-primary",children:[" ",i&&h===t.id?"Approved":"Approve"]}),Object(b.jsxs)(d.a,{onClick:function(){return e=t._id,void fetch("https://frightening-pirate-52052.herokuapp.com/orders/".concat(e),{method:"DELETE"}).then((function(){fetch("https://frightening-pirate-52052.herokuapp.com/orders").then((function(e){return e.json()})).then((function(e){c(e)}))}));var e},className:"btn-danger",children:["Remove"," "]})]})})}),ne=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("https://frightening-pirate-52052.herokuapp.com/orders").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),Object(b.jsx)(j.a,{children:Object(b.jsxs)("div",{className:"manage-orders",children:[Object(b.jsx)("h2",{className:"text-center mb-5",children:"Manage orders"}),null===c||void 0===c?void 0:c.map((function(e){return Object(b.jsx)(ce,{setManageOrder:s,service:e,manageOrder:c})}))]})})},se=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(g.a,{children:[Object(b.jsx)(M,{}),Object(b.jsxs)(p.d,{children:[Object(b.jsx)(p.b,{exact:!0,path:"/",children:Object(b.jsx)(k,{})}),Object(b.jsx)(Y,{path:"/Service/:ServiceId",children:Object(b.jsx)(V,{})}),Object(b.jsx)(Y,{path:"/manageOrders",children:Object(b.jsx)(ne,{})}),Object(b.jsx)(Y,{path:"/Cart",children:Object(b.jsx)(P,{})}),Object(b.jsx)(Y,{path:"/NewService",children:Object(b.jsx)(te,{})}),Object(b.jsx)(Y,{path:"/Shipping",children:Object(b.jsx)(T,{})}),Object(b.jsx)(p.b,{path:"/Login",children:Object(b.jsx)(W,{})}),Object(b.jsx)(p.b,{path:"/OrderConfirmed",children:Object(b.jsx)(H,{})}),Object(b.jsx)(p.b,{path:"*",children:Object(b.jsx)(_,{})})]}),Object(b.jsx)(Z,{})]})})},re=Object(n.createContext)(),ae=function(e){var t=e.children,c=Object(n.useState)({}),s=Object(u.a)(c,2),r=s[0],a=s[1];return Object(b.jsx)(re.Provider,{value:{customRegister:r,setCustomRegister:a},children:t})};var ie=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(y,{children:Object(b.jsx)(ae,{children:Object(b.jsx)(K,{children:Object(b.jsx)(O,{children:Object(b.jsx)(z,{children:Object(b.jsx)(se,{})})})})})})})},oe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,110)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(ie,{})}),document.getElementById("root")),oe()}},[[99,1,2]]]);
//# sourceMappingURL=main.db724a97.chunk.js.map