webpackJsonp([16],{154:function(t,e,n){"use strict";var a=n(95);e.a={name:"Inform",data:function(){return{color:"red",btnActivator:!1,factorOption:"",snackbar:!1,mode:"vertical",timeout:6e3,text:"Respuesta incorrecta :(, intenta de nuevo"}},methods:{nextLevelTwo:function(){2===this.factorOption?a.a.$emit("change-nivel",!0):(this.snackbar=!0,console.log("te equivocaste"))},changeFactor:function(t){this.factorOption=t,this.btnActivator=!0,console.log(this.factorOption)}}}},170:function(t,e,n){var a=n(171);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(70)("0ae52994",a,!0,{})},171:function(t,e,n){e=t.exports=n(69)(!0),e.push([t.i,".btnSec[data-v-2ee1a213]{border-radius:.8em;width:225px;height:40px}.textBtn[data-v-2ee1a213]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.btnEco[data-v-2ee1a213]{width:270px;height:75px;padding:5px;border:2px solid #1b2a6f;border-radius:8rem}.btn-Eco[data-v-2ee1a213]{width:100%;border-radius:8rem}","",{version:3,sources:["D:/LABORATORIA/BVL/Stock-Evolutionpwa/stock-solution-pwa/src/components/Sectores.vue"],names:[],mappings:"AACA,yBACE,mBAAqB,AACrB,YAAa,AACb,WAAa,CACd,AACD,0BACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAC7B,AACD,yBACE,YAAa,AACb,YAAa,AACb,YAAa,AACb,yBAA0B,AAC1B,kBAAoB,CACrB,AACD,0BACE,WAAY,AACZ,kBAAoB,CACrB",file:"Sectores.vue",sourcesContent:["\n.btnSec[data-v-2ee1a213] {\r\n  border-radius: 0.8em;\r\n  width: 225px;\r\n  height: 40px;\n}\n.textBtn[data-v-2ee1a213] {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\n}\n.btnEco[data-v-2ee1a213] {\r\n  width: 270px;\r\n  height: 75px;\r\n  padding: 5px;\r\n  border: 2px solid #1b2a6f;\r\n  border-radius: 8rem;\n}\n.btn-Eco[data-v-2ee1a213] {\r\n  width: 100%;\r\n  border-radius: 8rem;\n}\r\n"],sourceRoot:""}])},172:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"text-xs-center"},[n("v-flex",{attrs:{"mt-4":""}},[n("h2",[t._v("¿Qué factores debes tener en\n      "),n("br"),t._v("cuenta al momento de\n      "),n("br"),t._v("invertir?\n    ")])]),t._v(" "),n("v-flex",{attrs:{"mt-5":""}},[n("v-btn",{staticClass:"btnEco",attrs:{slot:"activator",flat:"",large:""},on:{click:function(e){t.changeFactor(0)}},slot:"activator"},[n("div",[n("h4",[t._v("Sectores, empresas\n          "),n("br"),t._v("y otros\n        ")])])]),t._v(" "),n("v-btn",{staticClass:"btnEco",attrs:{slot:"activator",flat:"",large:""},on:{click:function(e){t.changeFactor(1)}},slot:"activator"},[n("div",[n("h4",[t._v("Mercado y recomendaciones")])])]),t._v(" "),n("v-btn",{staticClass:"btnEco",attrs:{slot:"activator",flat:"",large:""},on:{click:function(e){t.changeFactor(2)}},slot:"activator"},[n("div",[n("h4",[t._v("Mercado local, sectores\n          "),n("br"),t._v("y empresas\n        ")])])])],1),t._v(" "),n("div",[n("v-btn",{staticClass:"btnSec",attrs:{disabled:!t.btnActivator,color:"red"},on:{click:function(e){t.nextLevelTwo()}}},[t._v("Continue")])],1),t._v(" "),n("v-snackbar",{attrs:{color:t.color,"multi-line":"multi-line"===t.mode,timeout:t.timeout,vertical:"vertical"===t.mode},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.text)+"\n    "),n("v-btn",{attrs:{dark:"",flat:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n      Close\n    ")])],1)],1)},r=[],o={render:a,staticRenderFns:r};e.a=o},79:function(t,e,n){"use strict";function a(t){n(170)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(154),o=n(172),c=n(19),i=a,s=c(r.a,o.a,!1,i,"data-v-2ee1a213",null);e.default=s.exports},95:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var a=n(6),r=new a.default}});
//# sourceMappingURL=16.b40aab1b5129fd2d0a93.js.map