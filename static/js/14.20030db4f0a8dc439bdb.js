webpackJsonp([14],{107:function(e,a,t){"use strict";var n=t(97),s=t(11),i=t.n(s);a.a={name:"nivel",props:["levels"],data:function(){return{bottomNav:"recent",sheet:!1,item:this.$route.params.level,tiles:[{img:"keep.png",title:"Keep"},{img:"inbox.png",title:"Inbox"},{img:"hangouts.png",title:"Hangouts"},{img:"messenger.png",title:"Messenger"},{img:"google.png",title:"Google+"}],level:0,description:"",img:""}},created:function(){var e=this;n.a.dataNivel.forEach(function(a){console.log(a),console.log(a.nivel,e.levels),a.nivel===e.levels&&(e.level=e.levels,e.description=a.description,e.img=a.img)})},methods:{playGame:function(){var e=this;console.log(this.levels),i.a.auth().onAuthStateChanged(function(a){var t=a.uid;i.a.database().ref("usuarios/"+t).update({nivel:e.levels})});switch(this.levels){case 1:this.$router.push("/level_one");break;case 2:this.$router.push("/level_two");break;case 3:this.$router.push("/level_three");break;case 4:this.$router.push("/level_four");break;case 5:this.$router.push("/level_five")}}}}},140:function(e,a,t){var n=t(141);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t(70)("01bf9385",n,!0,{})},141:function(e,a,t){a=e.exports=t(69)(!0),a.push([e.i,".box-nivel[data-v-497e1892]{margin-top:30%!important;margin:10%}.box-nivel-content[data-v-497e1892]{background:none!important}.text-xs-center[data-v-497e1892]{z-index:2;background:none}.box-nivel-content-wapper[data-v-497e1892]{top:-35px;z-index:1;border-radius:1em;background:none}.headline[data-v-497e1892]{background:#fff;border-radius:1em;min-height:300px;color:#ff6a63;font-weight:800}.btn-nivel[data-v-497e1892]{padding:.8em 1em;background:#00c9db;color:#fff!important;border-radius:.8em}.btn-nivel-number[data-v-497e1892]{color:orange;font-size:20px;font-weight:800}","",{version:3,sources:["D:/LABORATORIA/BVL/Stock-Evolutionpwa/stock-solution-pwa/src/components/nivel.vue"],names:[],mappings:"AACA,4BACC,yBAA2B,AAC1B,UAAY,CACb,AACD,oCACC,yBAA2B,CAC3B,AACD,iCACC,UAAW,AACX,eAAiB,CACjB,AACD,2CACE,UAAW,AACT,UAAW,AACb,kBAAmB,AACnB,eAAiB,CAClB,AACD,2BACC,gBAAiB,AAChB,kBAAmB,AACpB,iBAAkB,AAClB,cAAc,AACd,eAAgB,CAChB,AACD,4BACC,iBAAkB,AACjB,mBAAoB,AACpB,qBAAuB,AACvB,kBAAoB,CACrB,AACD,mCACC,aAAc,AACd,eAAgB,AAChB,eAAgB,CAChB",file:"nivel.vue",sourcesContent:["\n.box-nivel[data-v-497e1892]{\r\n\tmargin-top: 30% !important;\r\n  margin: 10%;\n}\n.box-nivel-content[data-v-497e1892]{\r\n\tbackground: none !important\n}\n.text-xs-center[data-v-497e1892]{\r\n\tz-index: 2;\r\n\tbackground: none;\n}\n.box-nivel-content-wapper[data-v-497e1892]{\r\n\t\ttop: -35px;\r\n    z-index: 1;\r\n\t\tborder-radius: 1em;\r\n\t\tbackground: none;\n}\n.headline[data-v-497e1892]{\r\n\tbackground: #fff;\r\n  border-radius: 1em;\r\n\tmin-height: 300px;\r\n\tcolor:#ff6a63;\r\n\tfont-weight: 800\n}\n.btn-nivel[data-v-497e1892]{\r\n\tpadding: .8em 1em;\r\n  background: #00c9db;\r\n  color: #fff !important;\r\n  border-radius: .8em;\n}\n.btn-nivel-number[data-v-497e1892]{\r\n\tcolor: orange;\r\n\tfont-size: 20px;\r\n\tfont-weight: 800\n}\r\n"],sourceRoot:""}])},142:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"box-nivel",attrs:{id:"app"}},[t("v-app",{staticClass:"box-nivel-content",attrs:{id:"inspire"}},[t("div",{staticClass:"text-xs-center"},[t("v-btn",{staticClass:"btn-nivel-number",attrs:{fab:"",dark:"",large:"",color:"yellow"}},[e._v("\n        "+e._s(e.level)+"\n        ")])],1),e._v(" "),t("v-card",{staticClass:"box-nivel-content-wapper",attrs:{height:"300px",flat:""}},[t("div",{staticClass:"headline text-xs-center pa-5"},[e._v("\n           "+e._s(e.description)+"\n           "),t("v-flex",{attrs:{"mt-2":""}},[t("img",{attrs:{src:e.img,width:"100px",alt:""}})])],1),e._v(" "),t("v-bottom-nav",{attrs:{active:e.bottomNav,value:!0,absolute:"",color:"transparent"},on:{"update:active":function(a){e.bottomNav=a}}},[t("v-btn",{attrs:{color:"teal",flat:"",value:"recent"},on:{click:function(a){e.playGame()}}},[t("v-icon",{staticClass:"btn-nivel"},[e._v("play_arrow")])],1),e._v(" "),t("v-bottom-sheet",{model:{value:e.sheet,callback:function(a){e.sheet=a},expression:"sheet"}},[t("v-btn",{attrs:{slot:"activator",color:"teal",flat:"",value:"favorites"},slot:"activator"},[t("v-icon",{staticClass:"btn-nivel"},[e._v("share")])],1),e._v(" "),t("v-list",[t("v-subheader",[e._v("Open in")]),e._v(" "),e._l(e.tiles,function(a){return t("v-list-tile",{key:a.title,on:{click:function(a){e.sheet=!1}}},[t("v-list-tile-avatar",[t("v-avatar",{attrs:{size:"32px",tile:""}},[t("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/bottom-sheets/"+a.img,alt:a.title}})])],1),e._v(" "),t("v-list-tile-title",[e._v(e._s(a.title))])],1)})],2)],1)],1)],1)],1)],1)},s=[],i={render:n,staticRenderFns:s};a.a=i},72:function(e,a,t){"use strict";function n(e){t(140)}Object.defineProperty(a,"__esModule",{value:!0});var s=t(107),i=t(142),o=t(19),r=n,l=o(s.a,i.a,!1,r,"data-v-497e1892",null);a.default=l.exports},97:function(e,a,t){"use strict";var n=[{src:"http://subirimagen.me/uploads/20181123161725.png",message:"!Hola! soy Leo y te voy a guiar a lo largo del juego."},{src:"http://subirimagen.me/uploads/20181123161838.gif",message:"Todos aquí iniciammos nuestro camino a ser unos gigantes de la inversión con $5000"},{src:"http://subirimagen.me/uploads/20181123161541.png",message:"Conviértete en una grande de la inversión, siguiendo mis consejos."}],s=[{src:"http://subirimagen.me/uploads/20181123161541.png",message:"¡Bienvenido al nivel 1 pequeño huevecillo!Iras ganando puntos BURSEN que podrás canjear por descuentos en el centro de estudios de la BVL"},{src:"http://subirimagen.me/uploads/20181123161541.png",message:"Para nacer en el mundo de la bolsa de valores, debes escoger una SAB"},{src:"http://subirimagen.me/uploads/20181201233629.png",message:"¿Y qué es una SAB o Sociedad Agente de bolsa?"},{src:"http://subirimagen.me/uploads/20181201233854.png",message:"Es una entidad financiera intermediaria de la BVL, autorizada a la compra y venta que los inversionistas solicitan"}],i=[{src:"http://subirimagen.me/uploads/20181201234107.png",message:"¡Mirate! ¡Estás creciendo! Ganaste 1000 pts BURSEN  Canjéalos aquí"}],o=[{src:"http://subirimagen.me/uploads/20181123161838.gif",message:"¡Eres un capo!"},{src:"http://subirimagen.me/uploads/20181123161725.png",message:"Ahora vamos a aprender cómo invertir"}],r=[{src:"http://subirimagen.me/uploads/20181123161725.png",message:"Para ser al fin un pez inversionista, contesta correctamente 2 preguntas"}],l=[{src:"http://subirimagen.me/uploads/20181123161725.png",message:"¡Genial!"}],p=[{src:"http://subirimagen.me/uploads/20181123161838.gif",message:"¡Llego el momento de invertir pecesito! Ganaste 1000 pts. BURSEN  Canjéalos aquí"},{src:"http://subirimagen.me/uploads/20181123161725.png",message:"Para invertir es importante que conozcas 2 términos:"},{src:"http://subirimagen.me/uploads/20181123161541.png",message:"Valor fundamental: Es definido por un cálculo en el que influyen diferentes factores propios de la empresa"},{src:"http://subirimagen.me/uploads/20181123161725.png",message:"Valor de mercado: Este valor varía de acuerdo a factores externos tales como noticias y eventos"},{src:"http://subirimagen.me/uploads/20181123161541.png",message:"¡Genial! ¡Empecemos!"}],u=[{src:"http://subirimagen.me/uploads/20181123161725.png",message:"¡Felicitaciones compraste tus primera acciones!"}],m=[{src:"http://subirimagen.me/uploads/20181123161541.png",message:"Mantente atento a los acontecimientos  Ganaste 1000 pts. BURSEN"}],c=[{src:"http://subirimagen.me/uploads/20181123161725.png",message:"¡Cada noticia cuenta! Analiza lo que pasa con el mercado, sector y la empresa que invertiste"},{src:"http://subirimagen.me/uploads/20181123161725.png",message:"¿Qué opinas de la noticia? ¿Es positiva o negativa?"},{src:"http://subirimagen.me/uploads/20181123161541.png",message:"De acuerdo a lo que creas, puedes comprar, vender o simplemente no actuar sobre la noticia"}],d=[{src:"http://subirimagen.me/uploads/20181123161725.png",message:"Compraste acciones en"},{src:"http://subirimagen.me/uploads/20181123161541.png",message:"se endeudó barato para adquirir empresas y tener mayores tasas de crecimiento !fue una buena inversión!"}],g=[{src:"http://subirimagen.me/uploads/20181123161725.png",message:"Ten en cuenta cada noticia pez azul  Ganaste 1000 pts. BURSEN Canjéalos aquí"},{src:"http://subirimagen.me/uploads/20181201235258.png",message:"Pongamos a prueba tus conocimientos, contesta las siguientes preguntas:"}],v=[{src:"http://subirimagen.me/uploads/20181123161541.png",message:"¡Bien!"}],b=[{src:"http://subirimagen.me/uploads/20181123161725.png",message:"No olvides todo lo aprendido  Ganaste 1000 pts. BURSEN   Canjéalos aquí"}],A=[{src:"http://subirimagen.me/uploads/20181123161725.png",message:"Analiza bien la noticia, los mercado mencionados pueden ser clave para lo que viene."}],h=[{src:"http://subirimagen.me/uploads/20181201235258.png",message:"Brasil y Argentina son países de alto riesgo por la inestabilidad económica. Fue una buena oportunidad de venta y tomar ganancias."},{src:"http://subirimagen.me/uploads/20181123161541.png",message:"Espera la llegada de una nueva noticia o sigue invirtiendo en otros sectores y empresas."}],f=[{nivel:1,description:"Inicia tu camino a ser un tiburon financiero",img:"http://subirimagen.me/uploads/20181202220900.png"},{nivel:2,description:"!Genial! Ya eres parte de una SAB!",img:"http://subirimagen.me/uploads/20181202220956.png"},{nivel:3,description:"!Estas a un paso de ser un inversionista!",img:"http://subirimagen.me/uploads/20181202221046.png"},{nivel:4,description:"!Ya eres un inversionista!",img:"http://subirimagen.me/uploads/20181202221134.jpg"},{nivel:5,description:"!Sigue avanzando en el mar de la inversión!",img:"http://subirimagen.me/uploads/20181202221234.jpg"},{nivel:6,description:"¡Sigue creciendo con el mismo ritmo!",img:"http://subirimagen.me/uploads/20181203000753.jpg"}],C=["http://subirimagen.me/uploads/20181201215812.png","http://subirimagen.me/uploads/20181201215950.png","http://subirimagen.me/uploads/20181201220058.png","http://subirimagen.me/uploads/20181201220204.png","http://subirimagen.me/uploads/20181201220243.png","http://subirimagen.me/uploads/20181201220320.png","http://subirimagen.me/uploads/20181201220419.png"],B=["http://subirimagen.me/uploads/20181202231821.jpg","http://subirimagen.me/uploads/20181202231952.jpg","http://subirimagen.me/uploads/20181202232036.jpg","http://subirimagen.me/uploads/20181202232116.jpg","http://subirimagen.me/uploads/20181202232214.jpg","http://subirimagen.me/uploads/20181203001028.jpg"];a.a={datajs:n,datainformacion:s,dataNivel:f,dataLeveltwo_1:i,dataLeveltwo_2:o,dataLeveltwo_3:r,dataLeveltwo_4:l,dataLevelthree_1:p,dataLevelthree_2:u,dataLevelFour_1:m,dataLevelFour_2:c,dataLevelFour_3:d,dataLevelFive_1:g,dataLevelFive_2:v,dataLevelSix_1:b,dataLevelSix_2:A,dataLevelSix_3:h,moneyNivel:C,fishNivel:B}}});
//# sourceMappingURL=14.20030db4f0a8dc439bdb.js.map