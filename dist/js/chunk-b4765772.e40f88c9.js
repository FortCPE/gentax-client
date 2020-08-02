(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b4765772"],{3359:function(a,t,n){"use strict";var e=n("8145"),s=n.n(e);s.a},4602:function(a,t,n){"use strict";var e=n("6d37"),s=n.n(e);s.a},"6d37":function(a,t,n){},"6de0":function(a,t,n){"use strict";n.r(t);var e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{attrs:{id:"colors-demo"}},[n("colors-default"),n("colors-gradient"),n("colors-customization"),n("colors-change-color"),n("colors-change-color-SSR"),n("colors-tailwind")],1)},s=[],r=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("vx-card",{attrs:{title:"Default Colors","code-toggler":""}},[n("p",[a._v("We have a series of colors that are used by default. They include:")]),n("vx-list",{attrs:{list:a.defaultColors}}),n("p",{staticClass:"mb-5"},[a._v("For each color, we think has its functionality in the application as alerts of errors ("),n("strong",[a._v("danger")]),a._v("), warnings to the user ("),n("strong",[a._v("warning")]),a._v("), communications of approval ("),n("strong",[a._v("success")]),a._v("), or main color of the application ("),n("strong",[a._v("primary")]),a._v(").")]),n("ul",{staticClass:"demo-alignment text-white"},[n("li",{staticClass:"bg-primary"},[a._v("\n                primary\n            ")]),n("li",{staticClass:"bg-success"},[a._v("\n                success\n            ")]),n("li",{staticClass:"bg-danger"},[a._v("\n                danger\n            ")]),n("li",{staticClass:"bg-warning"},[a._v("\n                warning\n            ")]),n("li",{staticClass:"bg-dark"},[a._v("\n                dark\n            ")])]),n("template",{slot:"codeContainer"},[a._v('\n<ul class="demo-alignment text-white">\n  <li class="bg-primary">primary</li>\n  <li class="bg-success">success</li>\n  <li class="bg-danger">danger</li>\n  <li class="bg-warning">warning</li>\n  <li class="bg-dark">dark</li>\n</ul>\n        ')])],2)},l=[],o={data:function(){return{defaultColors:["primary","success","danger","warning","dark"]}}},i=o,c=n("2877"),g=Object(c["a"])(i,r,l,!1,null,null,null),d=g.exports,u=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("vx-card",{attrs:{title:"Gradient Colors","code-toggler":""}},[n("p",[a._v("We have make gradient color based on our default color:")]),n("vx-list",{attrs:{list:a.defaultColors}}),n("p",{staticClass:"mb-5"},[a._v("For each color, we think has its functionality in the application as alerts of errors ("),n("strong",[a._v("danger")]),a._v("), warnings to the user ("),n("strong",[a._v("warning")]),a._v("), communications of approval ("),n("strong",[a._v("success")]),a._v("), or main color of the application ("),n("strong",[a._v("primary")]),a._v(").")]),n("ul",{staticClass:"demo-alignment text-white"},[n("li",{staticClass:"bg-primary-gradient text-center"},[a._v("\n                primary gradient\n            ")]),n("li",{staticClass:"bg-success-gradient text-center"},[a._v("\n                success gradient\n            ")]),n("li",{staticClass:"bg-danger-gradient text-center"},[a._v("\n                danger gradient\n            ")]),n("li",{staticClass:"bg-warning-gradient text-center"},[a._v("\n                warning gradient\n            ")]),n("li",{staticClass:"bg-dark-gradient text-center"},[a._v("\n                dark "),n("br"),a._v(" gradient\n            ")])]),n("template",{slot:"codeContainer"},[a._v('\n<ul class="demo-alignment text-white">\n  <li class="bg-primary-gradient">primary gradient</li>\n  <li class="bg-success-gradient">success gradient</li>\n  <li class="bg-danger-gradient">danger gradient</li>\n  <li class="bg-warning-gradient">warning gradient</li>\n  <li class="bg-dark-gradient">dark gradient</li>\n</ul>\n        ')])],2)},v=[],p={data:function(){return{defaultColors:["primary gradient","success gradient","danger gradient","warning gradient","dark gradient"]}}},m=p,h=Object(c["a"])(m,u,v,!1,null,null,null),_=h.exports,b=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("vx-card",{attrs:{title:"Customize Theme Colors","code-toggler":"","code-language":"js"}},[n("p",[a._v("We almost always need a personalized application with own colors. In Vuesax, you can change the main colors to those that you need and the branding that your application has.")]),n("p",[a._v("You can change default colors using "),n("code",[a._v("themeColors.js")]),a._v(" file. You can find this file in src folder.")]),n("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[n("span",[a._v("Only "),n("strong",[a._v("RGB")]),a._v(" and "),n("strong",[a._v("HEX")]),a._v(" colors are supported.")])]),n("br"),n("ul",{staticClass:"demo-alignment text-white"},[n("li",{staticStyle:{"background-color":"#5b3cc4"}},[a._v("\n                primary\n            ")]),n("li",{staticStyle:{"background-color":"rgb(23, 201, 100)"}},[a._v("\n                success\n            ")]),n("li",{staticStyle:{"background-color":"rgb(242, 19, 93)"}},[a._v("\n                danger\n            ")]),n("li",{staticStyle:{"background-color":"rgb(255, 130, 0)"}},[a._v("\n                warning\n            ")]),n("li",{staticStyle:{"background-color":"rgb(36, 33, 69)"}},[a._v("\n                dark\n            ")])]),n("template",{slot:"codeContainer"},[a._v("\nVue.use(Vuesax, {\n  theme: {\n    colors: {\n      primary: '#5b3cc4',\n      success: 'rgb(23, 201, 100)',\n      danger: 'rgb(242, 19, 93)',\n      warning: 'rgb(255, 130, 0)',\n      dark: 'rgb(36, 33, 69)'\n    }\n  }\n})\n        ")])],2)},C=[],w={},f=Object(c["a"])(w,b,C,!1,null,null,null),y=f.exports,x=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("vx-card",{attrs:{title:"Change Color","code-toggler":""}},[n("p",[a._v("You can change the color of the application in process of execution with the function $vs.theme which as a parameter requires a json with the colors to change")]),n("p",[a._v("Imagine that in the middle of the application we want the primary color change would be something like this:")]),n("prism",{staticClass:"rounded-lg",attrs:{language:"js"}},[a._v("\nthis.$vs.theme({\n  primary:'rgb(5, 173, 88)' // my new color\n})\n        ")]),n("p",{staticClass:"mt-5"},[a._v("By doing this, all "),n("strong",[a._v("Vuesax")]),a._v(" components and other components which uses primary color in the application will change. Select one of the colors to change it and that all the components of this application will have that color.")]),n("ul",{staticClass:"demo-alignment text-white"},[n("li",{staticClass:"bg-primary"},[n("input",{staticClass:"absolute w-full h-full cursor-pointer opacity-0",attrs:{type:"color",name:"",value:""},on:{change:function(t){return a.changeColor(t.target.value,"primary")}}}),a._v("\n                primary\n            ")]),n("li",{staticClass:"bg-success"},[n("input",{staticClass:"absolute w-full h-full cursor-pointer opacity-0",attrs:{type:"color",name:"",value:""},on:{change:function(t){return a.changeColor(t.target.value,"success")}}}),a._v("\n                success\n            ")]),n("li",{staticClass:"bg-danger"},[n("input",{staticClass:"absolute w-full h-full cursor-pointer opacity-0",attrs:{type:"color",name:"",value:""},on:{change:function(t){return a.changeColor(t.target.value,"danger")}}}),a._v("\n                danger\n            ")]),n("li",{staticClass:"bg-warning"},[n("input",{staticClass:"absolute w-full h-full cursor-pointer opacity-0",attrs:{type:"color",name:"",value:""},on:{change:function(t){return a.changeColor(t.target.value,"warning")}}}),a._v("\n                warning\n            ")]),n("li",{staticClass:"bg-dark"},[n("input",{staticClass:"absolute w-full h-full cursor-pointer opacity-0",attrs:{type:"color",name:"",value:""},on:{change:function(t){return a.changeColor(t.target.value,"dark")}}}),a._v("\n                dark\n            ")])]),n("template",{slot:"codeContainer"},[a._v('\n<template>\n  <ul class="demo-alignment text-white">\n    <li class="colorprimaryx">\n      <input @change="changeColor($event.target.value,\'primary\')" type="color" name="" value="">\n      primary\n    </li>\n    <li class="colorsuccessx">\n      <input @change="changeColor($event.target.value,\'success\')" type="color" name="" value="">\n      success\n    </li>\n    <li class="colordangerx">\n      <input @change="changeColor($event.target.value,\'danger\')" type="color" name="" value="">\n      danger\n    </li>\n    <li class="colorwarningx">\n      <input @change="changeColor($event.target.value,\'warning\')" type="color" name="" value="">\n      warning\n    </li>\n    <li class="colordarkx">\n      <input @change="changeColor($event.target.value,\'dark\')" type="color" name="" value="">\n      dark\n    </li>\n  </ul>\n</template>\n\n<script>\nexport default {\n  methods: {\n    changeColor(colorx, whatColor) {\n      this.$vs.theme({\n        [whatColor]: colorx\n      })\n    }\n  }\n}\n<\/script>\n\n<style lang="css" scoped>\n.colorprimaryx {\n  background: rgb(var(--vs-primary)) !important;\n}\n\n.colorsuccessx {\n  background: rgb(var(--vs-success)) !important;\n}\n\n.colordangerx {\n  background: rgb(var(--vs-danger)) !important;\n}\n\n.colorwarningx {\n  background: rgb(var(--vs-warning)) !important;\n}\n\n.colordarkx {\n  background: rgb(var(--vs-dark)) !important;\n}\n</style>\n        ')])],2)},k=[],$=n("bd86"),j=n("8d51"),T=n.n(j),S={components:{Prism:T.a},methods:{changeColor:function(a,t){this.$vs.theme(Object($["a"])({},t,a))}}},O=S,E=(n("3359"),Object(c["a"])(O,x,k,!1,null,"6d4d3804",null)),R=E.exports,Y=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("vx-card",{attrs:{title:"Change Color SSR"}},[n("p",[a._v("To change the main colors in SSR (Server-Side Rendering) for example if you are using nuxt.js the main variables of stylus and those of css")]),n("p",[a._v("To change the variables we must first import them into a .styl file and change the values of the variables by the colors required")]),n("vs-alert",{staticClass:"my-5",attrs:{icon:"warning",active:"true",color:"warning"}},[n("p",{staticClass:"mb-2"},[a._v("In order to change the variables and use them you have to have implemented the stylus loaders, to implement them by npm would be something like this")]),n("code",[a._v("npm i stylus stylus-loader --save-dev")])]),n("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[n("p",[a._v("The value of the colors can only be "),n("code",[a._v("RGB")]),a._v(" and nothing else is added to the number without the letters "),n("code",[a._v("rgb")]),a._v(" or the parentheses")]),n("p",[a._v("For example if the color is "),n("code",[a._v("rgb(50,100,200)")]),a._v(" the value to be implemented is only: "),n("code",[a._v("50,100,A")])])]),n("br"),n("prism",{staticClass:"rounded-lg",attrs:{language:"js"}},[a._v("\n// main.styl\n\n@import '~vuesax/dist/styles/index.styl'\n\n$vs-primary = 50,100,200\n\n:root {\n  --vs-primary: $vs-primary\n}\n        ")]),n("div",{staticClass:"mt-base"},[n("p",[a._v("The stylus variables of the main colors are:")]),n("prism",{staticClass:"rounded-lg"},[a._v("\n$vs-primary\n$vs-success\n$vs-danger\n$vs-warning\n$vs-dark\n            ")]),n("p",{staticClass:"mt-base"},[a._v("And the css variables are:")]),n("prism",{staticClass:"rounded-lg",attrs:{language:"css"}},[a._v("\n--vs-primary\n--vs-success\n--vs-danger\n--vs-warning\n--vs-dark\n            ")])],1)],1)},z=[],A={components:{Prism:T.a}},B=A,G=Object(c["a"])(B,Y,z,!1,null,null,null),V=G.exports,F=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("vx-card",{attrs:{title:"Tailwind Colors"}},[n("span",[a._v("Tailwind creates "),n("code",[a._v("text-{color}")]),a._v(" and "),n("code",[a._v("bg-{color}")]),a._v(" for text color and background color.")]),n("div",{staticClass:"mt-5"},[n("tailwind-text-classes"),n("tailwind-background-classes"),n("tailwind-add-more-colors")],1)])},I=[],P=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("vx-card",{attrs:{title:"Text Classes","code-toggler":"","no-shadow":"","card-border":""}},[n("span",[a._v("You can use "),n("code",[a._v("text-{color}")]),a._v(" for applying default colors to text.")]),n("br"),n("span",[a._v("There is also other tailwind classes like "),n("code",[a._v("text-white")]),a._v(", "),n("code",[a._v("text-black")]),a._v(", "),n("code",[a._v("text-transparent")])]),n("div",{staticClass:"demo-alignment"},[n("span",{staticClass:"text-primary"},[a._v("primary")]),n("span",{staticClass:"text-success"},[a._v("success")]),n("span",{staticClass:"text-danger"},[a._v("danger")]),n("span",{staticClass:"text-warning"},[a._v("warning")]),n("span",{staticClass:"text-dark"},[a._v("dark")]),n("span",{staticClass:"text-white bg-primary p-2 rounded"},[a._v("white")]),n("span",{staticClass:"text-black"},[a._v("black")]),n("span",{staticClass:"text-transparent"},[a._v("transparent")])]),n("template",{slot:"codeContainer"},[a._v('\n\n<div class="demo-alignment">\n  <span class="text-primary">primary</span>\n  <span class="text-success">success</span>\n  <span class="text-danger">danger</span>\n  <span class="text-warning">warning</span>\n  <span class="text-dark">dark</span>\n  <span class="text-white op-block">white</span>\n  <span class="text-black">black</span>\n  <span class="text-transparent op-block">transparent</span>\n</div>\n\n        ')])],2)},W=[],q={},D=Object(c["a"])(q,P,W,!1,null,null,null),J=D.exports,H=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("vx-card",{attrs:{title:"Background Classes","code-toggler":"","no-shadow":"","card-border":""}},[n("span",[a._v("You can use "),n("code",[a._v("bg-{color}")]),a._v(" for applying default colors to background.")]),n("br"),n("span",[a._v("There is also other tailwind classes like "),n("code",[a._v("bg-white")]),a._v(", "),n("code",[a._v("bg-black")]),a._v(", "),n("code",[a._v("bg-transparent")])]),n("ul",{staticClass:"demo-alignment text-white mt-5"},[n("li",{staticClass:"bg-primary"},[a._v("primary")]),n("li",{staticClass:"bg-success"},[a._v("success")]),n("li",{staticClass:"bg-danger"},[a._v("danger")]),n("li",{staticClass:"bg-warning"},[a._v("warning")]),n("li",{staticClass:"bg-dark"},[a._v("dark")]),n("li",{staticClass:"bg-white text-dark"},[a._v("white")]),n("li",{staticClass:"bg-black"},[a._v("black")]),n("li",{staticClass:"bg-transparent text-dark"},[a._v("transparent")])]),n("template",{slot:"codeContainer"},[a._v('\n\n<ul class="demo-alignment text-white">\n  <li class="bg-primary">primary</li>\n  <li class="bg-success">success</li>\n  <li class="bg-danger">danger</li>\n  <li class="bg-warning">warning</li>\n  <li class="bg-dark">dark</li>\n  <li class="bg-white text-dark">white</li>\n  <li class="bg-black">black</li>\n  <li class="bg-transparent text-dark">transparent</li>\n</ul>\n\n        ')])],2)},M=[],X={},K=Object(c["a"])(X,H,M,!1,null,null,null),L=K.exports,N=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("vx-card",{attrs:{title:"Add more colors","no-shadow":"","card-border":""}},[n("p",[a._v("You can add more colors in "),n("code",[a._v("tailwind.js")]),a._v(" file. You can find this file in root folder.")]),n("span",{staticClass:"mb-5"},[a._v("Checkout Color Customization in "),n("a",{attrs:{href:"https://tailwindcss.com/docs/text-color#customizing",target:"_blank"}},[a._v("Tailwind")])]),n("prism",{staticClass:"rounded-lg",attrs:{language:"js"}},[a._v("\ncolors: {\n\n  ....\n  'secondary': '#767c82',\n  ....\n\n}\n        ")]),n("template",{slot:"codeContainer"}),n("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[n("span",[a._v("After registering color you can use "),n("code",[a._v("text-secondary")]),a._v(" and "),n("code",[a._v("bg-secondary")]),a._v(" in theme")])])],2)},Q=[],U={components:{Prism:T.a}},Z=U,aa=Object(c["a"])(Z,N,Q,!1,null,null,null),ta=aa.exports,na={components:{TailwindTextClasses:J,TailwindBackgroundClasses:L,TailwindAddMoreColors:ta}},ea=na,sa=(n("c509"),Object(c["a"])(ea,F,I,!1,null,null,null)),ra=sa.exports,la={components:{ColorsDefault:d,ColorsGradient:_,ColorsCustomization:y,ColorsChangeColor:R,ColorsChangeColorSSR:V,ColorsTailwind:ra}},oa=la,ia=(n("4602"),Object(c["a"])(oa,e,s,!1,null,null,null));t["default"]=ia.exports},8145:function(a,t,n){},aa8b:function(a,t,n){},c509:function(a,t,n){"use strict";var e=n("aa8b"),s=n.n(e);s.a}}]);
//# sourceMappingURL=chunk-b4765772.e40f88c9.js.map