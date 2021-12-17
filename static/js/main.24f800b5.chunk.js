(this["webpackJsonpcrud-generator"]=this["webpackJsonpcrud-generator"]||[]).push([[0],{118:function(e,n,t){"use strict";t.r(n),t.d(n,"StyledShadowBox",(function(){return a}));var i,o=t(22),a=t(23).a.div(i||(i=Object(o.a)(["\n  display: flex;\n  min-width: 200px;\n  height: 100%;\n  background: white;\n  flex-direction: column;\n  margin: 1rem;\n  padding: 1rem;\n  border-radius: 8px;\n  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);\n  flex-grow: 1;\n  flex-basis: 200px;\n  overflow: auto;\n"])))},128:function(e,n,t){var i={"./mongoDB/mongoose/controllers-generator":[138,3]};function o(e){if(!t.o(i,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=i[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(i)},o.id=128,e.exports=o},129:function(e,n,t){var i={"./mongoDB/mongoose/models-generator":[139,4]};function o(e){if(!t.o(i,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=i[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(i)},o.id=129,e.exports=o},13:function(e){e.exports=JSON.parse('{"init_settings":{"project_name":"","database":"","database_orm":"","dependencies":[],"authentication":false,"auth_type":""},"init_entity":{"entity_name":"","entity_fields":[],"entity_timestamp":true,"entity_paginated":true},"init_field":{"field_name":"","field_type":"","field_ref":"","field_required":false,"field_default":"","field_unique":false},"init_options":{"database_options":[{"name":"mongoDB","orm":["mongoose"]}]},"init_dependencies":[{"name":"cors","version":"^2.8.5"},{"name":"dotenv","version":"^8.2.0"},{"name":"express","version":"^4.17.1"},{"name":"jsonwebtoken","version":"^8.5.1"},{"name":"mongoose","version":"^6.1.1"},{"name":"mongoose-paginate","version":"^5.0.3"},{"name":"morgan","version":"^1.10.0"}],"field_types":[{"type":"String","label":"String","complex":false},{"type":"Number","label":"Number","complex":false},{"type":"Boolean","label":"Boolean","complex":false},{"type":"String[]","label":"String[]","complex":false},{"type":"Number[]","label":"Number[]","complex":false},{"type":"mongoose.Schema.Types.ObjectId","label":"Entity","complex":true},{"type":"[mongoose.Schema.Types.ObjectId]","label":"Entity[]","complex":true}]}')},130:function(e,n,t){var i={"./mongoDB/mongoose/routes-generator":[140,5]};function o(e){if(!t.o(i,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=i[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(i)},o.id=130,e.exports=o},137:function(e,n,t){"use strict";t.r(n);var i,o=t(0),a=t.n(o),c=t(19),r=t.n(c),s=(t(81),t(65)),l=t(20),d=t(10),u=t(15),f=(t(82),t(83),t(84),t(146)),b=t(149),p=t(13),j=t(12),h=function e(n){Object(j.a)(this,e),this.project_name=void 0,this.database=void 0,this.database_orm=void 0,this.dependencies=void 0,this.authentication=void 0,this.auth_type=void 0,this.project_name=null===n||void 0===n?void 0:n.project_name,this.database=null===n||void 0===n?void 0:n.database,this.database_orm=null===n||void 0===n?void 0:n.database_orm,this.dependencies=null===n||void 0===n?void 0:n.dependencies,this.authentication=null===n||void 0===n?void 0:n.authentication,this.auth_type=null===n||void 0===n?void 0:n.auth_type},m=t(37),x=t(148),v=t(26),g=t.n(v),O=t(39),y=t(14),_=t(66),w=t.n(_),k=function(){function e(){Object(j.a)(this,e),this.configValue="https://registry.npmjs.com/-/v1/search?text="}return Object(y.a)(e,[{key:"httpClient",value:function(){var e=Object(O.a)(g.a.mark((function e(n,t,i){var o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={url:"".concat(n),method:t,headers:Object(d.a)({Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},i)},e.abrupt("return",w()(o));case 2:case"end":return e.stop()}}),e)})));return function(n,t,i){return e.apply(this,arguments)}}()},{key:"findNpmPacks",value:function(){var e=Object(O.a)(g.a.mark((function e(n){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(this.configValue).concat(n,"&size=5"),e.abrupt("return",this.httpClient(t,"GET"));case 2:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()}]),e}(),C=t(22),N=t(23),S=N.a.div(i||(i=Object(C.a)(['\n  & {\n    position: relative;\n    width: 40px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n  }\n  .onoffswitch-checkbox {\n    position: absolute;\n    opacity: 0;\n    pointer-events: none;\n  }\n  .onoffswitch-label {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    height: 20px;\n    padding: 0;\n    line-height: 20px;\n    border: 2px solid #e3e3e3;\n    border-radius: 20px;\n    background-color: #ffffff;\n    transition: background-color 0.3s ease-in;\n  }\n  .onoffswitch-label:before {\n    content: "";\n    display: block;\n    width: 20px;\n    margin: 0px;\n    background: #ffffff;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 18px;\n    border: 2px solid #e3e3e3;\n    border-radius: 20px;\n    transition: all 0.3s ease-in 0s;\n  }\n  .onoffswitch-checkbox:checked + .onoffswitch-label {\n    background-color: #007bff;\n  }\n  .onoffswitch-checkbox:checked + .onoffswitch-label,\n  .onoffswitch-checkbox:checked + .onoffswitch-label:before {\n    border-color: #007bff;\n  }\n  .onoffswitch-checkbox:checked + .onoffswitch-label:before {\n    right: 0px;\n  }\n']))),E=t(70),T=t.n(E),q=t(1),L=t.n(q),D=t(2);function M(e){var n=Object(o.useState)(T()("switch-")),t=Object(u.a)(n,1)[0],i=Object(o.useState)(e.checked),a=Object(u.a)(i,2),c=a[0],r=a[1];return Object(D.jsxs)(S,{children:[Object(D.jsx)("input",Object(d.a)({type:"checkbox",className:"onoffswitch-checkbox",id:t,value:"checked",checked:c,onChange:function(n){var t=!c;r(t),e.onChange&&e.onChange(t)}},e)),Object(D.jsx)("label",{className:"onoffswitch-label",htmlFor:t})]})}M.propsTypes={checked:L.a.bool,onChange:L.a.func};var B=M,P=t(118).StyledShadowBox;var A=function(e){var n;return Object(D.jsxs)(x.a.Control,Object(d.a)(Object(d.a)({as:"select"},e),{},{children:[Object(D.jsx)("option",{disabled:!0,hidden:!0},0),null===(n=e.options)||void 0===n?void 0:n.map((function(n){var t=e.displayAttr?n[e.displayAttr]:n;return Object(D.jsx)("option",{value:e.complex?JSON.stringify(n):t,children:t},t)}))]}))},F=t(47),G=function(e){var n=e.isLoading,t=e.id,i=void 0===t?"multiselect":t,o=e.placeholder,a=e.options,c=e.labelKey,r=void 0===c?function(e){return"".concat(e)}:c,s=e.renderMenuItemChildren,l=void 0===s?function(e){return Object(D.jsx)("span",{children:e})}:s,d=e.onChange,u=e.onInputChange,f=e.selected,b=e.filterBy,p=void 0===b?function(){return!0}:b;return Object(D.jsx)(F.a,{multiple:!0,selected:f,onChange:d,filterBy:p,id:i,isLoading:n,labelKey:r,onSearch:u,options:a,placeholder:o,renderMenuItemChildren:l})};var I,R,U=function e(n){Object(j.a)(this,e),this.name=void 0,this.version=void 0,this.name=null===n||void 0===n?void 0:n.name,this.version=null===n||void 0===n?void 0:n.version},H=function(e){var n=e.settings,t=e.onChangeSettings,i=e.setSettings,a=Object(o.useRef)(new k),c=Object(o.useState)([]),r=Object(u.a)(c,2),s=r[0],l=r[1],f=Object(o.useState)(!1),b=Object(u.a)(f,2),j=b[0],h=b[1],m=Object(o.useState)([]),v=Object(u.a)(m,2),g=v[0],O=v[1];Object(o.useEffect)((function(){i((function(e){return Object(d.a)(Object(d.a)({},e),{},{database_orm:p.init_options.database_options[0].orm[0],database:p.init_options.database_options[0].name})})),O(p.init_options.database_options[0].orm)}),[]);var y=function(e){console.log(e),h(!0),a.current.findNpmPacks(e).then((function(e){var n=[];e.data.objects.forEach((function(e){n.push({name:e.package.name,version:e.package.version})})),l(n)}),(function(e){return console.error(e)})).finally((function(){return h(!1)}))};return Object(D.jsxs)(P,{children:[Object(D.jsx)("h5",{style:{borderBottom:"1px solid #5c5c5c",padding:".5rem",color:"#5c5c5c"},children:"App settings"}),Object(D.jsxs)("div",{className:"d-flex flex-row flex-wrap",children:[Object(D.jsxs)("div",{className:"p-2 col-6",children:[Object(D.jsx)(x.a.Label,{children:"Project Name:"}),Object(D.jsx)(x.a.Control,{type:"text",style:{width:"100%"},placeholder:"My awesome project",value:n.project_name,name:"project_name",onChange:t})]}),Object(D.jsx)("div",{className:"p-2 col-6",children:Object(D.jsxs)(x.a.Group,{style:{minWidth:"150px"},children:[Object(D.jsx)(x.a.Label,{children:"Database"}),Object(D.jsx)(A,{options:p.init_options.database_options,name:"database",displayAttr:"name",value:n.database,onChange:t})]})}),Object(D.jsx)("div",{className:"p-2 col-6",children:Object(D.jsxs)(x.a.Group,{style:{minWidth:"150px"},children:[Object(D.jsx)(x.a.Label,{children:"Database ORM/ODM"}),Object(D.jsx)(A,{options:g,name:"database_orm",value:n.database_orm,onChange:t})]})}),Object(D.jsx)("div",{className:"p-2 col-6",children:Object(D.jsxs)(x.a.Group,{style:{width:"100%"},children:[Object(D.jsx)(x.a.Label,{children:"Npm packages"}),Object(D.jsx)(G,{isLoading:j,onChange:function(e){var n=[];e.forEach((function(e){n.push(new U(e))})),i((function(e){return Object(d.a)(Object(d.a)({},e),{},{dependencies:n})})),console.log(e)},onInputChange:function(e,n){y(e)},options:s,selected:n.dependencies,placeholder:"Search for a npm package...",labelKey:function(e){return"".concat(e.name," (").concat(e.version,")")},renderMenuItemChildren:function(e){return Object(D.jsxs)("span",{children:[e.name," (",e.version,")"]})}})]})})]})]})},J=t.p+"static/media/plus.5e21677f.svg",z=N.a.button(I||(I=Object(C.a)(["\n    background: ",";\n    border: none;\n    border-radius: 50%;\n    height: 30px;\n    width: 30px;\n    position: ",";\n    right: ",";\n    top: ",";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 0px 0px 5px 1px rgb(0 0 0 / 20%);\n    &:hover {\n        background: ",";\n    }\n    &:focus {\n        border: none;\n    }\n"])),(function(e){return e.color?e.color:"#b3b3b33"}),(function(e){return e.absolute?"absolute":""}),(function(e){return e.top?e.top+"px":"30px"}),(function(e){return e.top?e.top+"px":"40px"}),(function(e){return e.hover?e.hover:"#7c7c7c8a"})),W=function e(n){Object(j.a)(this,e),this.entity_id=void 0,this.entity_name=void 0,this.entity_fields=void 0,this.entity_timestamp=void 0,this.entity_paginated=void 0;var t=new Date;this.entity_id=t.getTime(),this.entity_name=null===n||void 0===n?void 0:n.entity_name,this.entity_fields=null===n||void 0===n?void 0:n.entity_fields,this.entity_timestamp=null===n||void 0===n?void 0:n.entity_timestamp,this.entity_paginated=null===n||void 0===n?void 0:n.entity_paginated},K=t(147),V=t.p+"static/media/x.85f9f2a1.svg",Y=function(e){var n=e.field,t=e.index,i=e.entityName,a=e.onFieldChange,c=e.onFieldRemove,r=e.onFieldTypeChange,s=e.entitiesLabels,l=Object(o.useState)(),d=Object(u.a)(l,2),f=d[0],b=d[1],j=Object(o.useState)(!1),h=Object(u.a)(j,2),m=h[0],v=h[1],g=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a(e,t,n)};return Object(o.useEffect)((function(){if(n.field_type&&""!=n.field_type){var e=p.field_types.find((function(e){return e.type==n.field_type}));b(e),v(e.complex)}else b(p.field_types[0]),r("field_type",p.field_types[0].type,t)}),[]),Object(D.jsxs)("div",{className:"d-flex",style:{alignItems:"center",justifyContent:"space-between",margin:"1rem 0",flexWrap:"wrap"},children:[Object(D.jsx)(x.a.Group,{style:{margin:".5rem 0"},children:Object(D.jsx)(x.a.Control,{type:"text",style:{width:"150px"},placeholder:"Field name",value:n.field_name,name:"field_name",onChange:g})}),Object(D.jsx)(x.a.Group,{style:{margin:".5rem 0"},children:Object(D.jsx)(x.a.Control,{type:"text",style:{width:"150px"},placeholder:"Default value",value:n.field_default,name:"field_default",onChange:g})}),Object(D.jsx)(A,{complex:!0,style:{width:"fit-content"},options:p.field_types,name:"field_type",displayAttr:"label",value:JSON.stringify(f),onChange:function(e){var n=JSON.parse(e.target.value);r("field_type",n.type,t),b(n),v(n.complex)}}),m?Object(D.jsx)(A,{style:{width:"fit-content"},options:s.filter((function(e){return e!=i})),name:"field_ref",value:n.field_ref,onChange:function(e){r("field_ref",e.target.value,t)}}):null,Object(D.jsx)(x.a.Group,{id:"formGridCheckbox",children:Object(D.jsxs)("div",{className:"d-flex mt-2 flex-row align-items-center",children:[Object(D.jsx)("div",{children:Object(D.jsx)(B,{name:"field_required",onChange:function(e){return g(e,!0)},checked:n.field_required})}),Object(D.jsx)("p",{className:"ml-1 mb-2",children:"Required"})]})}),Object(D.jsx)(x.a.Group,{id:"formGridCheckbox",children:Object(D.jsxs)("div",{className:"d-flex mt-2 flex-row align-items-center",children:[Object(D.jsx)("div",{children:Object(D.jsx)(B,{name:"field_unique",onChange:function(e){return g(e,!0)},checked:n.field_unique})}),Object(D.jsx)("p",{className:"ml-1 mb-2",children:"Unique"})]})}),Object(D.jsx)(z,{className:"mx-1",onClick:function(){return c(t)},color:"#dc3545",hover:"#d50014",children:Object(D.jsx)("img",{src:V,style:{filter:"invert(100%) sepia(0%) saturate(7500%) hue-rotate(72deg) brightness(99%) contrast(99%)"}})})]})},Q=function e(n){Object(j.a)(this,e),this.field_name=void 0,this.field_type=void 0,this.field_default=void 0,this.field_required=void 0,this.field_unique=void 0,this.field_ref=void 0,this.field_name=null===n||void 0===n?void 0:n.field_name,this.field_type=null===n||void 0===n?void 0:n.field_type,this.field_default=null===n||void 0===n?void 0:n.field_default,this.field_required=null===n||void 0===n?void 0:n.field_required,this.field_unique=null===n||void 0===n?void 0:n.field_unique,this.field_ref=null===n||void 0===n?void 0:n.field_ref},X=function(e){var n=e.show,t=e.save,i=e.closeModal,o=e.entity,a=e.setEntity,c=e.entitiesLabels,r=function(e){a((function(n){return Object(d.a)(Object(d.a)({},n),{},Object(l.a)({},e.target.name,!n[e.target.name]))}))},s=function(e,n,t){a((function(i){return Object(d.a)(Object(d.a)({},i),{},{entity_fields:i.entity_fields.map((function(i,o){return n==o?Object(d.a)(Object(d.a)({},i),{},Object(l.a)({},e.target.name,t?!i[e.target.name]:e.target.value)):i}))})}))},u=function(e,n,t){a((function(i){return Object(d.a)(Object(d.a)({},i),{},{entity_fields:i.entity_fields.map((function(i,o){return t==o?Object(d.a)(Object(d.a)({},i),{},Object(l.a)({},e,n)):i}))})}))},j=function(e){a((function(n){return Object(d.a)(Object(d.a)({},n),{},{entity_fields:n.entity_fields.filter((function(n,t){return t!==e}))})}))};return o?Object(D.jsxs)(K.a,{show:n,onHide:i,size:"xl","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(D.jsx)(K.a.Header,{closeButton:!0,children:Object(D.jsx)(K.a.Title,{id:"contained-modal-title-vcenter",children:"Entity settings"})}),Object(D.jsxs)(K.a.Body,{children:[Object(D.jsxs)(f.a,{style:{alignItems:"center"},children:[Object(D.jsx)("div",{className:"px-4 py-2 col-6",children:Object(D.jsx)(x.a.Control,{type:"text",style:{width:"100%"},placeholder:"Entity name",value:o.entity_name,name:"entity_name",onChange:function(e){a((function(n){return Object(d.a)(Object(d.a)({},n),{},Object(l.a)({},e.target.name,e.target.value))}))}})}),Object(D.jsx)("div",{className:"p-2 col-3",children:Object(D.jsx)(x.a.Group,{id:"formGridCheckbox",children:Object(D.jsxs)("div",{className:"d-flex mt-2 flex-row align-items-center",children:[Object(D.jsx)("div",{children:Object(D.jsx)(B,{name:"entity_timestamp",onChange:r,checked:o.entity_timestamp,label:"Timestamp"})}),Object(D.jsx)("p",{className:"ml-1 mb-2",children:"Timestamp"})]})})}),Object(D.jsx)("div",{className:"p-2 col-3",children:Object(D.jsx)(x.a.Group,{id:"formGridCheckbox",children:Object(D.jsxs)("div",{className:"d-flex mt-2 flex-row align-items-center",children:[Object(D.jsx)("div",{children:Object(D.jsx)(B,{name:"entity_paginated",onChange:r,checked:o.entity_paginated,label:"Paginated"})}),Object(D.jsx)("p",{className:"ml-1 mb-2",children:"Paginated"})]})})})]}),Object(D.jsxs)("div",{style:{position:"relative"},children:[Object(D.jsx)("h5",{style:{borderBottom:"1px solid #5c5c5c",padding:".5rem",color:"#5c5c5c"},children:"Fields"}),Object(D.jsx)(z,{absolute:!0,top:"5",right:"20",onClick:function(){console.log("NEW FIELD"),a((function(e){return Object(d.a)(Object(d.a)({},e),{},{entity_fields:[].concat(Object(m.a)(e.entity_fields),[new Q(p.init_field)])})}))},children:Object(D.jsx)("img",{src:J})})]}),Object(D.jsx)("div",{style:{maxHeight:"30vh",overflowY:"auto"},children:o.entity_fields&&o.entity_fields.map((function(e,n){return Object(D.jsx)(Y,{index:n,field:e,onFieldTypeChange:u,onFieldChange:s,onFieldRemove:j,entitiesLabels:c,entityName:o.entity_name},n)}))})]}),Object(D.jsxs)(K.a.Footer,{children:[Object(D.jsx)(b.a,{variant:"secondary",onClick:i,children:"Cancel"}),Object(D.jsx)(b.a,{disabled:!o.entity_name||o.entity_fields.length<=0,variant:"primary",onClick:t,children:"Save Changes"})]})]}):null},Z=N.a.div(R||(R=Object(C.a)(["\n    padding: 0.5rem;\n    margin: 0.2rem 0;\n    height: 40px;\n    border-bottom: 0.5px solid lightgray;\n    display: flex;\n    justify-content: space-between;\n    cursor: pointer;\n    &:hover {\n        background: #f4f4f4;\n    }\n"]))),$=t.p+"static/media/pencil.372bf1c0.svg",ee=function(e){var n=e.name,t=e.index,i=e.editEntity;return Object(D.jsxs)(Z,{children:[Object(D.jsxs)("span",{children:[" ",n," "]}),Object(D.jsx)("div",{onClick:function(){return i(t)},children:Object(D.jsx)("img",{style:{filter:"invert(35%) sepia(62%) saturate(5026%) hue-rotate(200deg) brightness(103%) contrast(106%)"},src:$})})]})},ne=function(e){var n=e.entities,t=e.setEntities,i=e.entitiesLabels,a=Object(o.useState)(),c=Object(u.a)(a,2),r=c[0],s=c[1],l=Object(o.useState)(!1),d=Object(u.a)(l,2),f=d[0],b=d[1],j=Object(o.useState)(!1),h=Object(u.a)(j,2),x=h[0],v=h[1],g=function(){b(!1),v(!1)},O=function(){b(!0)},y=function(e){s(n[e]),v(!0),O()};return Object(D.jsxs)(P,{children:[Object(D.jsx)("h5",{style:{borderBottom:"1px solid #5c5c5c",padding:".5rem",color:"#5c5c5c"},children:"Entities"}),Object(D.jsx)(z,{absolute:!0,onClick:function(){s(new W(p.init_entity)),O()},children:Object(D.jsx)("img",{src:J})}),Object(D.jsx)("div",{style:{overflowY:"auto"},children:n&&n.map((function(e,n){return Object(D.jsx)(ee,{editEntity:y,name:e.entity_name,index:n},n)}))}),Object(D.jsx)(X,{entity:r,show:f,save:function(){t(x?function(e){return e.map((function(e,n){if(e.entity_id===(null===r||void 0===r?void 0:r.entity_id))return r}))}:[].concat(Object(m.a)(n),[r])),s(new W(p.init_entity)),g(),setTimeout((function(){console.log(n)}),1e3)},setEntity:s,closeModal:g,entitiesLabels:i})]})},te=function(){function e(){Object(j.a)(this,e)}return Object(y.a)(e,null,[{key:"generateEntities",value:function(){var e=Object(O.a)(g.a.mark((function e(n,i,o){var a,c,r,s,l,d;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(128)("./".concat(i.database,"/").concat(i.database_orm,"/controllers-generator"));case 2:return a=e.sent,c=a.ControllersGenerator,e.next=6,t(129)("./".concat(i.database,"/").concat(i.database_orm,"/models-generator"));case 6:return r=e.sent,s=r.ModelsGenerator,e.next=10,t(130)("./".concat(i.database,"/").concat(i.database_orm,"/routes-generator"));case 10:l=e.sent,d=l.RoutesGenerator,s.generateModel(n,o),c.generateControllers(n,o),d.generateRoute(n,o);case 15:case"end":return e.stop()}}),e)})));return function(n,t,i){return e.apply(this,arguments)}}()}]),e}(),ie=te,oe=function(){return"const mongoose = require('mongoose');\n    \nconst dbConnect = () => {\n  mongoose.connect(process.env.DATABASE_URL, {\n      useNewUrlParser: true,\n      useUnifiedTopology: true\n  });\n  const connection = mongoose.connection;\n  connection.once('open', async () => {\n      console.log('Connected to DataBase');\n  })\n}\n\nmodule.exports = dbConnect;"},ae=function(){function e(){Object(j.a)(this,e)}return Object(y.a)(e,null,[{key:"generateDatabase",value:function(e,n){var t=null===n||void 0===n?void 0:n.folder("database");null===t||void 0===t||t.file("index.js",oe())}}]),e}(),ce=function(e){return"APP_NAME = ".concat(e.project_name,"\nDATABASE_URL = mongodb://localhost:27017/").concat(e.project_name,"\nPORT = 5000")},re=function(){function e(){Object(j.a)(this,e)}return Object(y.a)(e,null,[{key:"generateEnv",value:function(e){return ce(e)}}]),e}(),se=function(e){return"const express = require('express');\nconst app = express();\nrequire('dotenv').config();\n\nconst PORT = process.env.PORT || 4000;\n\nconst dbConnect = require('./database');\nconst globalMiddelwares = require('./middleware');\n\nglobalMiddelwares(app, __dirname);\ndbConnect();\n\n\napp.listen(PORT, () => {\n  console.log('Listening on port ' + PORT);\n});"},le=function(){function e(){Object(j.a)(this,e)}return Object(y.a)(e,null,[{key:"generateIndex",value:function(e){return se(e)}}]),e}(),de=function(e){var n="";return e.forEach((function(e){n+="app.use('/api/".concat(e.entity_name.toLowerCase(),"', require('../routes/").concat(e.entity_name.toLowerCase(),".routes'))\n  ")})),"const express = require('express');\nconst cors = require('cors');\nconst morgan = require('morgan');\nconst path = require('path');\n\nconst globalMiddelwares = (app, dir) => {\n  app.use('/public', express.static(path.join(dir, 'public')));\n  app.use(cors());\n  app.use(express.json());\n  app.use(morgan('dev'));\n\n  ".concat(n,"\n}\n\nmodule.exports = globalMiddelwares;")},ue=function(){function e(){Object(j.a)(this,e)}return Object(y.a)(e,null,[{key:"generateMiddleware",value:function(e,n,t){var i=null===t||void 0===t?void 0:t.folder("middleware");null===i||void 0===i||i.file("index.js",de(n))}}]),e}(),fe=function(e){var n="",t=e.dependencies;return p.init_dependencies.forEach((function(e){t.find((function(n){return n.name===e.name}))||t.push(e)})),t.length>0&&t.forEach((function(e,i){n+=t.length-1==i?'"'.concat(e.name,'" : "').concat(e.version,'"'):'"'.concat(e.name,'" : "').concat(e.version,'",\n        ')})),'\n    {\n      "name": "'.concat(e.project_name.replace(" ","-"),'",\n      "version": "1.0.0",\n      "description": "",\n      "main": "index.js",\n      "scripts": {\n        "start": "node index.js"\n      },\n      "keywords": [],\n      "author": "",\n      "license": "ISC",\n      "dependencies": {\n        ').concat(n,"\n      }\n    }")},be=function(){function e(){Object(j.a)(this,e)}return Object(y.a)(e,null,[{key:"generatePackage",value:function(e){return fe(e)}}]),e}(),pe=function(){function e(){Object(j.a)(this,e)}return Object(y.a)(e,null,[{key:"generateSetup",value:function(e,n,t){null===t||void 0===t||t.folder("public"),t.file("package.json",be.generatePackage(e)),t.file(".env",re.generateEnv(e)),t.file("index.js",le.generateIndex(e)),ae.generateDatabase(e,t),ue.generateMiddleware(e,n,t),t.file(".gitignore","/node_modules\n        .env"),console.log("Setup generator : ",e)}}]),e}(),je=t(74),he=t.n(je),me=t(64).saveAs,xe=function(){function e(){Object(j.a)(this,e)}return Object(y.a)(e,null,[{key:"generateApp",value:function(e,n){var t=new he.a;pe.generateSetup(n,e,t),ie.generateEntities(e,n,t).then((function(){t.generateAsync({type:"blob"}).then((function(e){me(e,n.project_name.replace(" ","-")+".zip")}))}))}}]),e}();t(64).saveAs;var ve=function(){var e=Object(o.useState)(new h(p.init_settings)),n=Object(u.a)(e,2),t=n[0],i=n[1],a=Object(o.useState)([]),c=Object(u.a)(a,2),r=c[0],j=c[1],m=Object(o.useState)([]),x=Object(u.a)(m,2),v=x[0],g=x[1];Object(o.useEffect)((function(){var e,n=[],t=Object(s.a)(r);try{for(t.s();!(e=t.n()).done;){var i=e.value;n.push(i.entity_name)}}catch(o){t.e(o)}finally{t.f()}g(n)}),[r]);var O=function(){return""==t.project_name.trim()};return Object(D.jsxs)("div",{className:"p-3 m-auto",style:{minHeight:"100vh",background:"#f0f0f0b8"},children:[Object(D.jsx)(f.a,{className:"d-flex justify-content-center mt-4",children:Object(D.jsx)("h1",{children:"Node.js/Express CRUD generator"})}),Object(D.jsxs)("div",{className:"d-flex flex-row flex-wrap",children:[Object(D.jsx)("div",{className:"p-1 col-md-8",style:{maxHeight:"400px"},children:Object(D.jsx)(H,{settings:t,setSettings:i,onChangeSettings:function(e){console.log(e.target.value),i(Object(d.a)(Object(d.a)({},t),{},Object(l.a)({},e.target.name,e.target.value)))}})}),Object(D.jsx)("div",{className:"p-1 col-md-4",style:{maxHeight:"400px"},children:Object(D.jsx)(ne,{entitiesLabels:v,entities:r,setEntities:j})})]}),Object(D.jsx)("div",{className:"d-flex flex-row flex-wrap mt-4 px-3",children:Object(D.jsx)(b.a,{disabled:O(),onClick:function(){O()||xe.generateApp(r,t),console.log(t,r)},variant:"success",style:{boxShadow:"1px 1px 4px 1px rgb(0 0 0 / 20%)"},children:"Generate"})})]})},ge=function(e){e&&e instanceof Function&&t.e(6).then(t.bind(null,150)).then((function(n){var t=n.getCLS,i=n.getFID,o=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),i(e),o(e),a(e),c(e)}))};r.a.render(Object(D.jsx)(a.a.StrictMode,{children:Object(D.jsx)(ve,{})}),document.getElementById("root")),ge(console.log)},81:function(e,n,t){},82:function(e,n,t){}},[[137,1,2]]]);
//# sourceMappingURL=main.24f800b5.chunk.js.map