webpackJsonp([11],{143:function(t,n,e){t.exports={default:e(144),__esModule:!0}},144:function(t,n,e){var o=e(3),a=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},183:function(t,n,e){"use strict";var o=e(143),a=e.n(o),i=e(11),r=e.n(i);n.a={data:function(){return{}},methods:{writeDatabase:function(t){var n=this;r.a.database().ref().child("usuarios/"+t.uid).on("value",function(e){var o=a()(e.val(),null,3);if(null==(o=JSON.parse(o))){var i={uid:t.uid,monto:5e3,nivel:0};r.a.database().ref("usuarios/"+i.uid).set(i),n.$router.push("/level_zero")}else switch(o.nivel){case 0:n.$router.push("/level_zero");break;case 1:n.$router.push("/level_one");break;case 2:n.$router.push("/level_two");break;case 3:n.$router.push("/level_three");break;case 4:n.$router.push("/level_four")}})},userSignInGoogle:function(){var t=this,n=new r.a.auth.GoogleAuthProvider;r.a.auth().signInWithPopup(n).then(function(n){t.writeDatabase(n.user)}).catch(function(t){alert(t.message)})},signFacebook:function(){var t=this,n=new r.a.auth.FacebookAuthProvider;n.addScope("public_profile"),r.a.auth().signInWithPopup(n).then(function(n){t.writeDatabase(n.user)}).catch(function(t){alert(t.message)})}}}},194:function(t,n,e){var o=e(195);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(70)("654ab720",o,!0,{})},195:function(t,n,e){n=t.exports=e(69)(!0),n.push([t.i,'#logo{width:80%}.texto-white{color:#fff;font-size:26px;font-weight:400}.fondo{background-image:url("http://subirimagen.me/uploads/20181123142846.png")}.button-img{width:30%}.button{opacity:.8!important}.bvl-contenedor{background-color:#fff;border-radius:95% 0 0 0;margin-left:60%;margin-top:30%}.bvl-img{width:90%;margin-left:15%;padding-right:15%;padding-left:10%;padding-top:20%}',"",{version:3,sources:["D:/LABORATORIA/BVL/Stock-Evolutionpwa/stock-solution-pwa/src/components/Landing.vue"],names:[],mappings:"AACA,MACE,SAAW,CACZ,AACD,aACE,WAAa,AACb,eAAgB,AAChB,eAAiB,CAClB,AACD,OACE,wEAA0E,CAC3E,AACD,YACE,SAAW,CACZ,AACD,QACE,oBAAwB,CACzB,AACD,gBACE,sBAAwB,AACxB,wBAA6B,AAC7B,gBAAiB,AACjB,cAAgB,CACjB,AACD,SACE,UAAW,AACX,gBAAiB,AACjB,kBAAmB,AACnB,iBAAkB,AAClB,eAAiB,CAClB",file:"Landing.vue",sourcesContent:["\n#logo {\n  width: 80%;\n}\n.texto-white {\n  color: white;\n  font-size: 26px;\n  font-weight: 400;\n}\n.fondo {\n  background-image: url('http://subirimagen.me/uploads/20181123142846.png');\n}\n.button-img {\n  width: 30%;\n}\n.button {\n  opacity: 0.8 !important;\n}\n.bvl-contenedor {\n  background-color: white;\n  border-radius: 95% 0% 0% 0% ;\n  margin-left: 60%;\n  margin-top: 30%;\n}\n.bvl-img {\n  width: 90%;\n  margin-left: 15%;\n  padding-right: 15%;\n  padding-left: 10%;\n  padding-top: 20%;\n}\n"],sourceRoot:""}])},196:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-layout",{staticClass:"fondo",attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"","text-xs-center":"","mt-5":"","pt-5":""}},[e("img",{attrs:{id:"logo",src:"http://subirimagen.me/uploads/20181123143029.png",alt:""}})]),t._v(" "),e("v-flex",{attrs:{"mr-3":""}},[e("blockquote",{staticClass:"texto-white blockquote text-xs-center"},[e("strong",[t._v("Ingresa con")])])]),t._v(" "),e("v-flex",{attrs:{xs12:"","text-xs-center":""}},[e("v-btn",{staticClass:"button",attrs:{large:"",round:"true",href:"#"},on:{click:function(n){t.signFacebook()}}},[e("img",{staticClass:"button-img",attrs:{src:"http://subirimagen.me/uploads/20181128145504.png"}}),t._v(" "),e("span",[t._v("acebook")])]),t._v(" "),e("br"),t._v(" "),e("v-btn",{staticClass:"button",attrs:{large:"",round:"true",href:"#"},on:{click:function(n){t.userSignInGoogle()}}},[e("img",{staticClass:"button-img",attrs:{src:"http://subirimagen.me/uploads/20181128145139.png"}}),t._v(" "),e("span",[t._v("oogle")])])],1),t._v(" "),e("v-flex",{staticClass:"bvl-contenedor"},[e("img",{staticClass:"bvl-img",attrs:{src:"http://subirimagen.me/uploads/20181123120801.png",alt:""}})])],1)},a=[],i={render:o,staticRenderFns:a};n.a=i},82:function(t,n,e){"use strict";function o(t){e(194)}Object.defineProperty(n,"__esModule",{value:!0});var a=e(183),i=e(196),r=e(19),s=o,u=r(a.a,i.a,!1,s,null,null);n.default=u.exports}});
//# sourceMappingURL=11.2b965f73333c9bc30557.js.map