"use strict";(self["webpackChunkextra_notes"]=self["webpackChunkextra_notes"]||[]).push([[339],{5339:function(t,e,s){s.r(e),s.d(e,{default:function(){return r}});var a=function(){var t=this,e=t._self._c;return e("main",[e("div",{staticClass:"container"},[e("div",{staticClass:"header"},[e("div",{staticClass:"search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inp,expression:"inp"}],attrs:{type:"text",placeholder:"Поиск"},domProps:{value:t.inp},on:{input:function(e){e.target.composing||(t.inp=e.target.value)}}})])]),e("div",{staticClass:"dialogs"},t._l(t.dialogs,(function(s){return e("router-link",{attrs:{to:`/messages/${s.id}`}},[e("div",{staticClass:"dialog"},[e("div",{staticClass:"title"},[e("h3",[t._v(t._s(s.title))]),e("time",[t._v(t._s(s.dataTime))])]),e("div",{staticClass:"last-message"},[e("p",[t._v(t._s(s.lastMessage))])])])])})),1),e("div",{staticClass:"footer"},[e("div",{staticClass:"form"},[e("div",{staticClass:"new-dialog"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Название"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),e("button",{on:{click:this.addDialog}},[t._v(" Добавить новый дилог ")])])])])])},i=[],l=(s(7658),{props:{},data(){return{dialogs:[],title:"",inp:""}},computed:{},watch:{},created(){},mounted(){},methods:{addDialog(){let t=new Date;this.dialogs.push({title:this.title,dataTime:`${t.getHours()}:${t.getMinutes()}`,lastMessage:"Нет сообщений",id:Date.now()})}}}),n=l,o=s(1001),d=(0,o.Z)(n,a,i,!1,null,"6f75af04",null),r=d.exports}}]);
//# sourceMappingURL=339.74de4844.js.map