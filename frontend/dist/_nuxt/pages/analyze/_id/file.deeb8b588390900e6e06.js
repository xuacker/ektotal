webpackJsonp([2],{H90V:function(t,e,r){"use strict";r("1P+R");e.a={computed:{analysis_result:function(){return this.$store.state.analyze.scoped_analyze_result},summary_result:function(){var t=[];return this.$store.state.analyze.scoped_analyze_result.data.forEach(function(e){if(e.result&&e.result.description&&e.result.description.virustotal){var r=e.result.description,a={};a.context=e.result.name,a.hash=r.sha256,a.virustotal=r.virustotal,t.push(a)}}),t}}}},Pcp8:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"h1{font-size:60px}header{padding-top:40px;padding-bottom:40px;color:#696969}header h1{color:#000}.main-summary{text-align:center;color:#696969;padding-top:40px;padding-bottom:40px}.main-summary strong{color:red}table{word-wrap:break-word}",""])},RrFe:function(t,e,r){var a=r("Pcp8");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("df17113a",a,!1,{sourceMap:!1})},W5j1:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("H90V"),s=r("Z5FA"),n=!1;var o=function(t){n||r("RrFe")},i=r("VU/8")(a.a,s.a,!1,o,null,null);i.options.__file="pages/analyze/_id/file.vue",e.default=i.exports},Z5FA:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header",[r("h1",[t._v("File")]),r("span",[t._v(" - Case: "+t._s(t.analysis_result.id))])]),r("b-table",{attrs:{responsive:"",items:t.summary_result,fixed:""},scopedSlots:t._u([{key:"virustotal",fn:function(e){return[r("a",{attrs:{href:e.item.virustotal,target:"_blank"}},[t._v(t._s(e.item.virustotal))])]}}])})],1)};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s}});