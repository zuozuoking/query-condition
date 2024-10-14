"use strict";(self.webpackChunkquery_condition=self.webpackChunkquery_condition||[]).push([[899],{15899:function(Q,P,r){r.r(P),r.d(P,{QueryCondition:function(){return k},QueryType:function(){return l}});var D=r(19632),M=r.n(D),N=r(5574),Z=r.n(N),T=r(68400),v=r.n(T),U=r(48115),K=r(80882),R=r(50900),G=r(71230),L=r(15746),j=r(20182),g=r(49373),H=r(55999),Y=r(38597),C=r(67294),d=r(41686),e=r(85893),I,S,y,F,b,B=R.Z.RangePicker,V=(0,d.ZP)(G.Z)(I||(I=v()([`
  width: 100%;
  .ant-form-item .ant-form-item-label > label {
    width: 100px;
    justify-content: end;
  }
`]))),E=(0,d.ZP)(L.Z)(S||(S=v()([`
  margin-bottom: 12px;
`]))),$=(0,d.ZP)(E)(y||(y=v()([`
  text-align: right;
  padding-right: 8px;
  button {
    margin: 0 8px;
  }
`]))),w=(0,d.ZP)(R.Z)(F||(F=v()([`
  &.ant-picker {
    width: 100%;
  }
`]))),z=(0,d.ZP)(B)(b||(b=v()([`
  &.ant-picker-range {
    width: 100%;
  }
`]))),J=d.ZP.div(function(t){return`
height: 32px;
overflow: hidden;
transition: all 0.5s ease-out;

&.show{
  height: `.concat(t.height,`px;
}
`)}),O="YYYY-MM-DD",l=function(t){return t[t.FREE=0]="FREE",t[t.CUSTOM=1]="CUSTOM",t[t.INPUT=2]="INPUT",t[t.SELECT=3]="SELECT",t[t.RANGEPICKER=4]="RANGEPICKER",t[t.DATEPICKER=5]="DATEPICKER",t}({});function W(){var t=(0,C.useState)(0),o=Z()(t,2),h=o[0],s=o[1];return(0,C.useEffect)(function(){var f=document.querySelector(".query-form");f&&s(f.clientHeight)},[]),{height:h}}function X(t){var o=(0,C.useState)(!1),h=Z()(o,2),s=h[0],f=h[1],c=t.findIndex(function(x){return x.type===l.RANGEPICKER}),n=function(){if(t.length>=4||t.length>1&&c>1)return!0},a=M()(t),i={label:"",name:"btn",type:l.FREE,render:function(){return(0,e.jsxs)($,{span:6,children:[(0,e.jsx)(j.ZP,{type:"primary",htmlType:"submit",children:"\u67E5\u8BE2"}),(0,e.jsx)(j.ZP,{htmlType:"reset",children:"\u91CD\u7F6E"}),n()&&(0,e.jsxs)(j.ZP,{onClick:function(){f(!s)},children:["\u66F4\u591A",s?(0,e.jsx)(U.Z,{}):(0,e.jsx)(K.Z,{})]})]},"btn")}},u=function(A){return{label:"",name:A.toString(),type:l.CUSTOM,render:function(){return(0,e.jsx)("span",{})}}};if(c===2)a.splice(2,0,u(2)),a.splice(3,0,i);else if(c===1)a.push(i);else if(c===0)a.push(u(1)),a.push(i);else if(a.length<4){for(var m=3-a.length,p=0;p<m;p++)a.push(u(p));a.push(i)}else a.splice(3,0,i);return{list:a,more:s}}function k(t){var o=X(t.queryList),h=o.list,s=o.more,f=W(),c=f.height;return(0,e.jsx)(J,{height:c,className:"".concat(s&&"show"),children:(0,e.jsx)(g.Z,{className:"query-form",layout:"inline",initialValues:t.initialValues,onFinish:t.submit,onReset:t.reset,form:t.form,children:(0,e.jsx)(V,{children:h.map(function(n){return n.type===l.FREE?n.render?n.render():(0,e.jsx)(e.Fragment,{}):n.type===l.CUSTOM&&n.render?(0,e.jsx)(E,{span:6,children:(0,e.jsx)(g.Z.Item,{label:n.label,name:n.name,children:n.render()})},n.name):n.type===l.RANGEPICKER?(0,e.jsx)(E,{span:12,children:(0,e.jsx)(g.Z.Item,{label:n.label,name:n.name,children:(0,e.jsx)(z,{format:n.format?n.format:O,disabledDate:n.disabledDate,picker:n.picker})})},n.name):(0,e.jsx)(E,{span:6,children:(0,e.jsx)(g.Z.Item,{label:n.label,name:n.name,children:function(){return n.type===l.INPUT?(0,e.jsx)(H.Z,{allowClear:!0}):n.type===l.SELECT?(0,e.jsx)(Y.Z,{allowClear:!0,options:n.options,showSearch:!0,optionFilterProp:n.optionFilterProp,filterOption:function(i,u){var m;return((m=u==null?void 0:u.label)!==null&&m!==void 0?m:"").includes(i)}}):n.type===l.DATEPICKER?(0,e.jsx)(w,{allowClear:!0,format:n.format?n.format:O,picker:n.picker}):(0,e.jsx)(e.Fragment,{})}()})},n.name)})})})})}}}]);
