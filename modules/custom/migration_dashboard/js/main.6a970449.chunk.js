(this["webpackJsonpmigration-dashboard"]=this["webpackJsonpmigration-dashboard"]||[]).push([[0],{16:function(e,t,a){},27:function(e,t,a){e.exports=a(36)},36:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(5),r=a.n(l),o=a(7),s=a(22),d=a(1),c=a(17),u=a(18),m=a(2),h=a(24),b=a(23),f=a(37),p=a(38);a(16);var v=function(e){var t=e.name,a=e.nodeId,n=e.updateItem,l=e.drupalId,r=e.listId;return i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("a",{href:"/node/".concat(a)},t)),i.a.createElement("td",null,"todo"===r?i.a.createElement("button",{type:"button",onClick:function(){n(l,r,"inProgress","In Progress")}},"Add to In Progress"):i.a.createElement("span",null,"\xa0")))};function g(e){var t=e.title,a=e.listId,n=e.bios,l=e.updateItem;return i.a.createElement("div",{className:"list"},i.a.createElement("h2",null,t," ",i.a.createElement("span",null,n.length?"(".concat(n.length," item").concat(n.length>1?"s":"",")"):null)),i.a.createElement("table",{className:"views-table views-view-table cols-7 responsive-enabled sticky-enabled sticky-table"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Name"),i.a.createElement("th",null," "))),i.a.createElement("tbody",null,n.length?i.a.createElement(p.a,{component:null},n.map((function(e){return i.a.createElement(f.a,{key:e.id,timeout:500,classNames:"fade"},i.a.createElement(v,{key:e.id,name:e.attributes.title,nodeId:e.attributes.drupal_internal__nid,updateItem:l,drupalId:e.id,listId:a}))}))):i.a.createElement("tr",null,i.a.createElement("td",{colSpan:"2"},"No bios with this status.")))))}g.defaultProps={bios:[]};var E=g,y=a(9),I=a(10);function j(){var e=Object(y.a)(["\n  flex: 1 1 30%;\n  border: 1px solid grey;\n  margin: 0.5rem;\n  padding: 1rem;\n  border-radius: 10px;\n  display: flex;\n  & div {\n    flex: 1;\n    padding: 1em;\n  }\n  & div.field--name-body {\n    flex: 2;\n  }\n  & h3 {\n    margin-top: 0;\n  }\n"]);return j=function(){return e},e}var O=I.a.article(j());var _=function(e){var t=e.name,a=e.nodeId,n=e.updateItem,l=e.drupalId,r=e.summary,o=e.headshotAlt,s=e.headshotFilename;return i.a.createElement(O,null,i.a.createElement("div",{className:"field field--name-field-headshot field--type-image field__item"},i.a.createElement("img",{src:"/sites/default/files/styles/thumbnail/public/headshots/".concat(s),alt:o,className:"image-style-medium"})),i.a.createElement("div",{className:"clearfix text-formatted field field--name-body field--type-text-with-summary field__item"},i.a.createElement("h3",null,i.a.createElement("a",{href:"/node/".concat(a)},t)," ",i.a.createElement("a",{href:"/node/".concat(a,"/edit")},"(Edit)")),i.a.createElement("p",null,r),i.a.createElement("button",{type:"button",onClick:function(){n(l,"inProgress","todo","To Do")}},"Move -> To Do")))};function k(){var e=Object(y.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return k=function(){return e},e}var w=I.a.div(k());function P(e){var t=e.title,a=e.bios,n=e.updateItem,l=e.included;return i.a.createElement("div",{className:"list"},i.a.createElement("h2",null,t," ",i.a.createElement("span",null,a.length?"(".concat(a.length," item").concat(a.length>1?"s":"",")"):null)),i.a.createElement(w,null,a.length?i.a.createElement(p.a,{component:null},a.map((function(e){var t=l.find((function(t){return t.id===e.relationships.field_headshot.data.id})).attributes.filename;return i.a.createElement(f.a,{key:e.id,timeout:500,classNames:"fade"},i.a.createElement(_,{key:e.id,summary:e.attributes.body.summary,name:e.attributes.title,nodeId:e.attributes.drupal_internal__nid,updateItem:n,drupalId:e.id,headshotId:e.relationships.field_headshot.data.id,headshotAlt:e.relationships.field_headshot.data.meta.alt,headshotFilename:t}))}))):i.a.createElement("div",null,"Ready for bios!")))}P.defaultProps={bios:[]};var x=P;var T=function(e){var t=e.message,a=e.type;return i.a.createElement("div",{className:"alert alert-".concat(a),role:"alert"},t)},A=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={alert:"",bioData:[],bioIncluded:[],lists:{inProgress:{id:"inProgress",title:"In Progress"},todo:{id:"todo",title:"To Do"},done:{id:"done",title:"Done"}}},e.isValidData=e.isValidData.bind(Object(m.a)(e)),e.updateItem=e.updateItem.bind(Object(m.a)(e)),e.fetchUpdate=e.fetchUpdate.bind(Object(m.a)(e)),e.slowChangeAlert=e.slowChangeAlert.bind(Object(m.a)(e)),e.fetchItems(),e}return Object(u.a)(a,[{key:"isValidData",value:function(e){return null!==e&&(void 0!==e.data&&null!==e.data&&0!==e.data.length)}},{key:"fetchItems",value:function(){var e=this;fetch("/alittlebithidden/437/jsonapi/node/bio?include=field_headshot",{method:"GET",credentials:"include",headers:{"Content-Type":"application/vnd.api+json"}}).then((function(t){if(!t.ok)throw Error(t.statusText);t.json().then((function(t){e.isValidData(t)&&e.setState({bioData:t.data,bioIncluded:t.included,lists:{inProgress:Object(d.a)(Object(d.a)({},e.state.lists.inProgress),{},{bios:t.data.filter((function(e){return"In Progress"===e.attributes.field_2020_migration_status}))}),todo:Object(d.a)(Object(d.a)({},e.state.lists.todo),{},{bios:t.data.filter((function(e){return"To Do"===e.attributes.field_2020_migration_status}))}),done:Object(d.a)(Object(d.a)({},e.state.lists.done),{},{bios:t.data.filter((function(e){return"Done"===e.attributes.field_2020_migration_status}))})}})}))})).catch((function(e){return console.log("Initial GET API error",e)}))}},{key:"fetchUpdate",value:function(e,t,a,n){var i=this,l=this.state.bioData,r=l.find((function(t){return t.id===e}));r.attributes.field_2020_migration_status=n;var c=this.state.lists[t].bios.filter((function(t){return t.id!==e})),u="/alittlebithidden/437/jsonapi/node/bio/".concat(e);fetch("/session/token?_format=json",{method:"GET",headers:{Accept:"application/vnd.api+json"}}).then((function(e){return e.text()})).then((function(m){fetch(u,{method:"PATCH",credentials:"same-origin",headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","X-CSRF-Token":m},body:JSON.stringify({data:{type:"node--bio",id:e,attributes:{field_2020_migration_status:n}}})}).then((function(e){var n;if(!e.ok)throw i.setState(Object(d.a)(Object(d.a)({},i.state),{},{alert:"Node couldn't be updated on the server."})),Error(e.statusText);i.setState(Object(d.a)(Object(d.a)({},i.state),{},{bioData:l,lists:Object(d.a)(Object(d.a)({},i.state.lists),{},(n={},Object(o.a)(n,t,Object(d.a)(Object(d.a)({},i.state.lists[t]),{},{bios:c})),Object(o.a)(n,a,Object(d.a)(Object(d.a)({},i.state.lists[a]),{},{bios:[].concat(Object(s.a)(i.state.lists[a].bios),[r])})),n))}))})).catch((function(e){return console.log("API Patch error",e)}))})).catch((function(e){return console.log("API Token error",e)}))}},{key:"updateItem",value:function(e,t,a,n){this.fetchUpdate(e,t,a,n)}},{key:"slowChangeAlert",value:function(){var e=this;return this.state.alert.length>0&&(setTimeout((function(){e.setState(Object(d.a)(Object(d.a)({},e.state),{},{alert:""}))}),5e3),i.a.createElement(T,{message:this.state.alert,type:"danger"}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},this.slowChangeAlert(),["inProgress","todo","done"].map((function(t){var a=e.state.lists[t];return"inProgress"===t?i.a.createElement(x,{key:a.id,title:a.title,bios:a.bios,updateItem:e.updateItem,included:e.state.bioIncluded}):i.a.createElement(E,{key:a.id,title:a.title,listId:a.id,bios:a.bios,updateItem:e.updateItem})})))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(A,null),document.getElementById("react-app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);