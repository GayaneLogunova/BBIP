(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{105:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(0),c=a.n(s),r=a(22),i=a.n(r),o=(a(105),a(14)),d=a(15),l=a(13),h=a(17),j=a(16),b=(a(69),a(64),a(70),a(71),a(10)),u=a(53),O=a.n(u),p=a(173),x=a(170),g=a(174),m=a(172),f=a(175),v=a(163),y=a(60),k=a(23),C=a.n(k),w=(a(33),function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=new Set,a={};return this.props.data.map((function(e){void 0==a[e[0]+e[2]]?a[e[0]+e[2]]="status: "+e[4]+"   time: "+e[5]+"#":a[e[0]+e[2]]+="status: "+e[4]+"   time: "+e[5]+"#"})),Object(n.jsx)("div",{className:"accordion-body",children:this.props.data.map((function(s){if(s[2]==e.props.name&&!t.has(s[0]))return t.add(s[0]),"done"==s[4]?Object(n.jsx)("div",{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(f.a,{expandIcon:Object(n.jsx)(C.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(n.jsx)(y.a,{className:"done-text",children:s[3]})}),Object(n.jsx)(v.a,{style:{display:"block"},children:a[s[0]+s[2]].split("#").map((function(e){return Object(n.jsx)(y.a,{children:e})}))})]})}):"pending"==s[3]?Object(n.jsx)("div",{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(f.a,{expandIcon:Object(n.jsx)(C.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(n.jsx)(y.a,{className:"pending-text",children:s[3]})}),Object(n.jsx)(v.a,{style:{display:"block"},children:a[s[0]+s[2]].split("#").map((function(e){return Object(n.jsx)(y.a,{children:e})}))})]})}):Object(n.jsx)("div",{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(f.a,{expandIcon:Object(n.jsx)(C.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(n.jsx)(y.a,{className:"failed-text",children:s[3]})}),Object(n.jsx)(v.a,{style:{display:"block"},children:a[s[0]+s[2]].split("#").map((function(e){return Object(n.jsx)(y.a,{children:e})}))})]})})}))})}}]),a}(c.a.Component));var S=function(e){var t=new Set;return Object(n.jsx)("div",{className:"accordion-body",children:e.data.map((function(a){if(a[1]==e.position&&!t.has(a[2]))return t.add(a[2]),Object(n.jsx)("div",{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(f.a,{expandIcon:Object(n.jsx)(C.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(n.jsx)(y.a,{children:a[2]})}),Object(n.jsx)(v.a,{children:Object(n.jsx)(w,{data:e.data,name:a[2]})})]})})}))})};var I=function(e){var t=new Set;return Object(n.jsx)("div",{className:"accordion-body",children:e.data.map((function(a){if(!t.has(a[1]))return t.add(a[1]),Object(n.jsxs)(m.a,{style:{margin:"2%"},children:[Object(n.jsx)(f.a,{expandIcon:Object(n.jsx)(C.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(n.jsx)(y.a,{children:a[1]})}),Object(n.jsx)(v.a,{children:Object(n.jsx)(S,{data:e.data,position:a[1]})})]})}))})},B=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={checkBoxName:!1,checkBoxTask:!1,search_text:""},n.handleChangeSearch=n.handleChangeSearch.bind(Object(l.a)(n)),n.onChangeByName=n.onChangeByName.bind(Object(l.a)(n)),n.onChangeByTask=n.onChangeByTask.bind(Object(l.a)(n)),n}return Object(d.a)(a,[{key:"onChangeByName",value:function(e){this.setState({checkBoxName:e.target.checked})}},{key:"onChangeByTask",value:function(e){this.setState({checkBoxTask:e.target.checked})}},{key:"handleChangeSearch",value:function(e){this.state.checkBoxName||this.state.checkBoxTask?this.setState({search_text:e.target.value}):alert("At least one of checkboxes should be checked")}},{key:"render",value:function(){var e={};this.props.data.map((function(t){var a="status: "+t[4]+"   time: "+t[5]+"#";void 0==e[t[0]]?e[t[0]]=a:e[t[0]]+="status: "+t[4]+"   time: "+t[5]+"#"}));var t=[],a=this,s=new Set,c=new Set;return""==a.state.search_text?Object(n.jsx)("div",{style:{position:"relative"},children:Object(n.jsxs)("div",{style:{padding:"3%"},children:[Object(n.jsx)(x.a.Row,{style:{marginBottom:"2%"},children:Object(n.jsx)(x.a.Control,{value:this.state.request,onChange:this.handleChangeSearch,type:"search_text",placeholder:"Enter..."})}),Object(n.jsx)(x.a.Group,{children:Object(n.jsx)(x.a.Row,{children:Object(n.jsx)(x.a.Check,{type:"checkbox",onChange:this.onChangeByName,label:"Search by name"})})}),Object(n.jsx)(x.a.Group,{children:Object(n.jsx)(x.a.Row,{children:Object(n.jsx)(x.a.Check,{type:"checkbox",onChange:this.onChangeByTask,label:"Search by task"})})}),Object(n.jsx)("h4",{children:"Tasks"}),Object(n.jsx)(I,{data:a.props.data})]})}):(t=this.state.checkBoxName?this.props.data.map((function(e){if(1==e[2].includes(a.state.search_text)&&!c.has(e[2]))return c.add(e[2]),Object(n.jsxs)(m.a,{style:{marginBottom:"2%"},children:[Object(n.jsx)(f.a,{expandIcon:Object(n.jsx)(C.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(n.jsx)(y.a,{children:e[2]})}),Object(n.jsx)(v.a,{children:Object(n.jsx)(y.a,{children:Object(n.jsx)(w,{data:a.props.data,name:e[2]})})})]})})):this.props.data.map((function(t){if(1==t[3].includes(a.state.search_text)&&!s.has(t[0]))return s.add(t[0]),Object(n.jsxs)(m.a,{style:{marginBottom:"2%"},children:[Object(n.jsx)(f.a,{expandIcon:Object(n.jsx)(C.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(n.jsx)(y.a,{children:t[3]})}),Object(n.jsx)(v.a,{style:{display:"block"},children:e[t[0]].split("#").map((function(e){return Object(n.jsx)(y.a,{children:e})}))})]})})),Object(n.jsx)("div",{style:{position:"relative"},children:Object(n.jsxs)("div",{style:{padding:"3%"},children:[Object(n.jsx)(x.a.Row,{style:{marginBottom:"2%"},children:Object(n.jsx)(x.a.Control,{value:this.state.request,onChange:this.handleChangeSearch,type:"search_text",placeholder:"Enter..."})}),Object(n.jsx)(x.a.Group,{children:Object(n.jsx)(x.a.Row,{children:Object(n.jsx)(x.a.Check,{type:"checkbox",onChange:this.onChangeByName,label:"Search by name"})})}),Object(n.jsx)(x.a.Group,{children:Object(n.jsx)(x.a.Row,{children:Object(n.jsx)(x.a.Check,{type:"checkbox",onChange:this.onChangeByTask,label:"Search by task"})})}),Object(n.jsx)("h4",{children:"Tasks"}),Object(n.jsx)("div",{style:{margin:"2%"},children:t})]})}))}}]),a}(c.a.Component),T=a(83),L=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){var e,t=0,a=0,s=0;this.props.data.map((function(e){"done"==e[4]?t++:"pending"==e[4]?a++:s++})),e=t+a+s;var c={animationEnabled:!0,data:[{type:"pie",startAngle:75,toolTipContent:"<b>{label}</b>: {y}%",showInLegend:"true",legendText:"{label}",indexLabelFontSize:16,indexLabel:"{label} - {y}%",dataPoints:[{y:Math.round(t/e*100)/100,label:"Done",color:"#16AC23"},{y:Math.round(a/e*100)/100,label:"Pending",color:"#E7CF24"},{y:Math.round(s/e*100)/100,label:"Failed",color:"#DC3A19"}]}]};return Object(n.jsx)("div",{style:{margin:"2%",padding:"2%"},children:Object(n.jsx)(T.a,{options:c})})}}]),a}(c.a.Component),N=a(164),_=a(165),R=(a(81),function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).compare=n.compare.bind(Object(l.a)(n)),n}return Object(d.a)(a,[{key:"compare",value:function(e,t){var a=e[5],n=t[5];return e[5].length<5&&(a="0"+e),t[5].length<5&&(n="0"+t),a>n?(console.log("first > second: "+e[5]+" "+t[5]),-1):(console.log("second > first: "+e[5]+" "+t[5]),1)}},{key:"render",value:function(){var e=[];return this.props.data.map((function(t){"pending"!=t[4]&&e.push(t)})),e.sort(this.compare),Object(n.jsxs)(p.a,{style:{margin:"2%",padding:"2%",textAlign:"inherit"},children:[Object(n.jsx)(p.a.Title,{children:" Status changed "}),Object(n.jsx)("div",{style:{overflowY:"scroll",height:"300px"},children:e.map((function(e){return"done"==e[4]?Object(n.jsx)(p.a,{children:Object(n.jsxs)(N.a,{className:"done-text",children:[Object(n.jsx)(_.a,{primary:"task id: "+e[0]+"  "+e[3]+"  "+e[4],secondary:e[2]}),Object(n.jsx)("p",{children:e[5]})]})}):Object(n.jsx)(p.a,{children:Object(n.jsxs)(N.a,{className:"failed-text",children:[Object(n.jsx)(_.a,{primary:"task id: "+e[0]+"  "+e[3]+"  "+e[4],secondary:e[2]}),Object(n.jsx)("p",{children:e[5]})]})})}))})]})}}]),a}(c.a.Component)),P=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).compare=n.compare.bind(Object(l.a)(n)),n}return Object(d.a)(a,[{key:"compare",value:function(e,t){var a=e[5],n=t[5];return e[5].length<5&&(a="0"+e),t[5].length<5&&(n="0"+t),a>n?(console.log("first > second: "+e[5]+" "+t[5]),-1):(console.log("second > first: "+e[5]+" "+t[5]),1)}},{key:"render",value:function(){var e=[];return this.props.data.map((function(t){"failed"==t[4]&&e.push(t)})),e.sort(this.compare),Object(n.jsxs)(p.a,{style:{margin:"2%",padding:"2%"},children:[Object(n.jsx)(p.a.Title,{children:" Failed tasks "}),Object(n.jsx)("div",{style:{overflowY:"scroll",height:"300px"},children:e.map((function(e){return Object(n.jsx)(p.a,{children:Object(n.jsxs)(N.a,{className:"failed-text",children:[Object(n.jsx)(_.a,{primary:"task id: "+e[0]+"  "+e[3]+"  "+e[4],secondary:e[2]}),Object(n.jsx)("p",{children:e[5]})]})})}))})]})}}]),a}(c.a.Component),F=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={data_:[],parsed_data:[["1","administrator","Pasha","say hi","done","14:00","12:00"],["2","worker","Katya","say Bye","failed","12:00","10:00"]],username:""},n.handleChange=n.handleChange.bind(Object(l.a)(n)),n.sort_data=n.sort_data.bind(Object(l.a)(n)),n}return Object(d.a)(a,[{key:"postRequest",value:function(){var e=new FormData;return O.a.post("/data",e)}},{key:"getFile",value:function(){var e=this;this.postRequest().then((function(t){e.setState({data_:t.data})})).then((function(){e.parse_data(e.state.data_)}))}},{key:"componentDidMount",value:function(){this.getFile(),this.sort_data()}},{key:"handleChange",value:function(){this.setState({checkedA:!0,checkedB:!0})}},{key:"parse_data",value:function(e){for(var t=e,a=[],n=[],s=0;s<t.tasks.length;s++)a.push(t.tasks[s].id),a.push(t.tasks[s].position),a.push(t.tasks[s].name),a.push(t.tasks[s].task_name),a.push(t.tasks[s].status),a.push(t.tasks[s].status_changed),a.push(t.tasks[s].time),n.push(a),a=[];this.setState({parsed_data:n})}},{key:"sort_data",value:function(){var e={};this.state.parsed_data.map((function(t){void 0==e[t[0]]?e[t[0]]="status: "+t[4]+"   time: "+t[5]+"#":e[t[0]]+="status: "+t[4]+"   time: "+t[5]+"#"})),this.setState({dict:e})}},{key:"render",value:function(){return Object(n.jsxs)("div",{style:{display:"flex"},children:[Object(n.jsx)("div",{style:{flex:"auto",width:"50%",margin:"2%"},children:Object(n.jsxs)(p.a,{style:{padding:"5%",textAlign:"center"},children:[Object(n.jsx)("h2",{children:"Tasks monitor"}),Object(n.jsx)(B,{data:this.state.parsed_data})]})}),Object(n.jsx)("div",{style:{flex:"auto",width:"50%",margin:"2%"},children:Object(n.jsxs)(p.a,{style:{padding:"5%",textAlign:"center"},children:[Object(n.jsx)("h2",{children:"Status monitor"}),Object(n.jsx)(L,{data:this.state.parsed_data}),Object(n.jsx)(R,{data:this.state.parsed_data}),Object(n.jsx)(P,{data:this.state.parsed_data})]})})]})}}]),a}(c.a.Component),G=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={check:!1,password:"",username:""},n.postRequest=n.postRequest.bind(Object(l.a)(n)),n.handleChangeUsername=n.handleChangeUsername.bind(Object(l.a)(n)),n.handleChangePassword=n.handleChangePassword.bind(Object(l.a)(n)),n}return Object(d.a)(a,[{key:"postRequest",value:function(e){var t=this;e.preventDefault(),O.a.post("/verify",{username:this.state.username,password:this.state.password}).then((function(e){return t.setState({check:e.data.result})}))}},{key:"handleChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return this.state.check?(console.log("ok"),localStorage.setItem("authToken","true"),localStorage.setItem("username",this.state.username),this.props.funcIsLogged("true"),Object(n.jsx)(b.a,{to:"/dashboard",component:F})):Object(n.jsx)(p.a,{style:{marginLeft:"auto",marginRight:"auto",marginTop:"10%",marginBottom:"10%",width:"40%"},children:Object(n.jsxs)(x.a,{style:{margin:"5%"},children:[Object(n.jsxs)(x.a.Group,{controlId:"formBasicUsername",children:[Object(n.jsx)(x.a.Label,{children:"Username"}),Object(n.jsx)(x.a.Control,{value:this.state.username,onChange:this.handleChangeUsername,type:"username",placeholder:"Enter username"})]}),Object(n.jsxs)(x.a.Group,{controlId:"formBasicPassword",children:[Object(n.jsx)(x.a.Label,{children:"Password"}),Object(n.jsx)(x.a.Control,{value:this.state.password,onChange:this.handleChangePassword,type:"password",placeholder:"Password"})]}),Object(n.jsx)(g.a,{variant:"primary",type:"submit",onClick:this.postRequest,children:"Submit"})]})})}}]),a}(c.a.Component),U=a(34),q=a(84),A=function(e){var t=e.component,a=Object(q.a)(e,["component"]);return Object(n.jsx)(b.b,Object(U.a)(Object(U.a)({},a),{},{render:function(e){return"true"==localStorage.getItem("authToken")?(console.log("print component"),Object(n.jsx)(t,Object(U.a)({},e))):(console.log("redirect"),Object(n.jsx)(b.a,{to:"/registration"}))}}))},D=function(e){return Object(n.jsxs)("main",{children:[Object(n.jsx)(b.a,{from:"/",to:"/dashboard",exact:!0}),Object(n.jsxs)(b.d,{children:[Object(n.jsx)(b.b,{exact:!0,path:"/registration",component:function(){return Object(n.jsx)(G,{funcIsLogged:e.funcIsLogged})}}),Object(n.jsx)(A,{exact:!0,path:"/dashboard",component:F})]})]})},E=a(166),M=a(167),z=a(168),H=a(169),J=a(171),Y=Object(E.a)((function(e){return{title:{flexGrow:1,fontSize:25,fontWeight:100}}})),K={bgcolor:"inherit",borderColor:"white",m:1,border:1,display:"flex",alignItems:"center",justifyContent:"center",style:{width:"7rem",height:"3rem"}};function W(e){var t=Y(),a=Object(b.g)();return"true"==e.isLogged?Object(n.jsx)("div",{children:Object(n.jsx)(M.a,{position:"static",children:Object(n.jsxs)(z.a,{children:[Object(n.jsx)(y.a,{className:t.title,children:" BIG BROTHER ON PRODUCTION "}),Object(n.jsx)(y.a,{children:Object(n.jsx)(J.a,Object(U.a)(Object(U.a)({},K),{},{children:" Pupkin Ivanov "}))}),Object(n.jsx)(H.a,{color:"inherit",onClick:function(){return localStorage.setItem("authToken","false"),e.funcIsLogged("false"),void a.push("/registration")},children:"LOGOUT"})]})})}):Object(n.jsx)("div",{children:Object(n.jsx)(M.a,{position:"static",children:Object(n.jsxs)(z.a,{children:[Object(n.jsx)(y.a,{className:t.title,children:" BIG BROTHER ON PRODUCTION "}),Object(n.jsx)(H.a,{color:"inherit",children:"LOGIN"})]})})})}var Q=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isLogged:localStorage.getItem("authToken")},n.changeIsLogged=n.changeIsLogged.bind(Object(l.a)(n)),n}return Object(d.a)(a,[{key:"changeIsLogged",value:function(e){this.setState({isLogged:e})}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(W,{isLogged:this.state.isLogged,funcIsLogged:this.changeIsLogged}),Object(n.jsx)(D,{funcIsLogged:this.changeIsLogged})]})}}]),a}(c.a.Component),V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,178)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))},X=a(52);i.a.render(Object(n.jsx)(X.a,{children:Object(n.jsx)(Q,{})}),document.getElementById("root")),V()},33:function(e,t,a){},69:function(e,t,a){}},[[136,1,2]]]);
//# sourceMappingURL=main.55c81e47.chunk.js.map