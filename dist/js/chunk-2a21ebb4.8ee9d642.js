(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a21ebb4"],{4329:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{attrs:{action:"javascript:void(0)"},on:{submit:function(e){return t.billSubmit()}}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col md:w-4/4 w-full mb-base"},[s("vx-card",{attrs:{title:t.$t("SelectDate"),icon:"CalendarIcon"}},[s("b-field",[s("b-datepicker",{attrs:{placeholder:"คลิกเพื่อเลือกวันที่...",icon:"calendar-today","trap-focus":"",rounded:"",size:"is-small"},model:{value:t.billDate,callback:function(e){t.billDate=e},expression:"billDate"}})],1),s("br"),s("b-field",[s("b-switch",{attrs:{size:"is-small",type:"is-info"},model:{value:t.loopDate,callback:function(e){t.loopDate=e},expression:"loopDate"}},[t._v("\n\t\t\t\t\t\t\t\tเรียงวันที่\n\t\t\t\t\t\t\t")])],1)],1)],1),s("div",{staticClass:"vx-col md:w-6/12 w-full mb-base"},[s("vx-card",{attrs:{title:t.$t("SelectType"),icon:"CheckCircleIcon"}},[1==t.all_button_status?s("b-autocomplete",{attrs:{rounded:"",data:t.typeData,placeholder:"กรุณากรอกประเภทสินค้า",field:"type_name",icon:"magnify",loading:t.typeFetching,size:"is-small"},on:{typing:t.getTypeAsyncData,select:function(e){return t.stockType=e}},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"media"},[s("div",{staticClass:"media-content"},[t._v("\n                                        "+t._s(e.option.type_name)+"\n                                    ")])])]}}],null,!1,2544490576)}):t._e(),0==t.all_button_status?s("b-input",{attrs:{type:"text",value:"เลือกทั้งหมดแล้ว",disabled:"",rounded:"",size:"is-small"}}):t._e(),s("hr"),1==t.all_button_status?s("button",{staticClass:"button is-rounded is-small is-info is-fullwidth",on:{click:function(e){return t.selectAllType()}}},[t._v("\n                            เลือกทั้งหมด\n                        ")]):t._e(),0==t.all_button_status?s("button",{staticClass:"button is-rounded is-small is-danger is-fullwidth",on:{click:function(e){return t.selectAllType()}}},[t._v("\n                            ยกเลิก\n                        ")]):t._e()],1)],1),s("div",{staticClass:"vx-col md:w-6/12 w-full mb-base"},[s("vx-card",{attrs:{title:t.$t("TotalBillPrice"),icon:"CheckCircleIcon"}},[s("b-input",{attrs:{type:"number",step:"any",placeholder:"กรุณากรอกราคาบิลรวม",size:"is-small"},model:{value:t.billPrice,callback:function(e){t.billPrice=e},expression:"billPrice"}}),s("hr"),s("button",{staticClass:"button is-rounded is-small is-info is-fullwidth",on:{click:function(e){return t.randomPrice()}}},[t._v("\n                            สุ่มราคา\n                        ")])],1)],1),s("div",{staticClass:"vx-col md:w-4/12 w-full mb-base"},[s("vx-card",{attrs:{title:t.$t("StockAmount"),icon:"FileTextIcon"}},[s("b-field",[s("b-numberinput",{attrs:{type:"is-info"},on:{input:function(e){return t.checkLimit()}},model:{value:t.billLimit,callback:function(e){t.billLimit=e},expression:"billLimit"}})],1),s("b-field",[s("b-slider",{attrs:{lazy:"",type:"is-info"},on:{change:function(e){return t.checkLimit()}},model:{value:t.billLimit,callback:function(e){t.billLimit=e},expression:"billLimit"}})],1)],1)],1),s("div",{staticClass:"vx-col md:w-4/12 w-full mb-base"},[s("vx-card",{attrs:{title:t.$t("BillAmount"),icon:"FileTextIcon"}},[s("b-field",[s("b-numberinput",{attrs:{type:"is-info"},model:{value:t.billAmount,callback:function(e){t.billAmount=e},expression:"billAmount"}})],1),s("b-field",[s("b-slider",{attrs:{lazy:"",type:"is-info"},model:{value:t.billAmount,callback:function(e){t.billAmount=e},expression:"billAmount"}})],1)],1)],1),s("div",{staticClass:"vx-col md:w-4/12 w-full mb-base"},[s("vx-card",{attrs:{title:t.$t("BillStart"),icon:"FileTextIcon"}},[s("b-field",[s("b-numberinput",{attrs:{type:"is-info"},model:{value:t.billStart,callback:function(e){t.billStart=e},expression:"billStart"}})],1),s("b-field",[s("b-slider",{attrs:{lazy:"",type:"is-info"},model:{value:t.billStart,callback:function(e){t.billStart=e},expression:"billStart"}})],1)],1)],1),s("div",{staticClass:"vx-col md:w-7/12 w-full mb-base"},[s("vx-card",{attrs:{title:t.$t("SelectBusiness"),icon:"FileTextIcon"}},[s("b-table",{attrs:{data:t.businessData,loading:t.businessFetching,paginated:t.isPaginated,"per-page":t.perPage,"current-page":t.currentPage,"pagination-simple":t.isPaginationSimple,"pagination-position":t.paginationPosition,"default-sort-direction":t.defaultSortDirection,"sort-icon":t.sortIcon,"sort-icon-size":t.sortIconSize,"default-sort":"user.first_name","aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(t.columns,(function(n){return[s("b-table-column",t._b({key:n.id,scopedSlots:t._u([{key:"searchable",fn:function(e){return n.searchable?[s("b-input",{attrs:{placeholder:"ค้นหาข้อมูล",icon:"magnify",size:"is-small"},model:{value:e.filters[e.column.field],callback:function(s){t.$set(e.filters,e.column.field,s)},expression:"props.filters[props.column.field]"}})]:void 0}}],null,!0)},"b-table-column",n,!1),["index"===n.field?s("span",[s("b-tag",{attrs:{rounded:"",type:"is-light"}},[t._v(t._s(e.index+1))])],1):"options"===n.field?s("span",[s("div",{staticClass:"block"},[s("b-checkbox",{attrs:{type:"is-info","native-value":e.row},model:{value:t.businessGroup,callback:function(e){t.businessGroup=e},expression:"businessGroup"}})],1)]):"business_name"===n.field?s("span",{staticClass:"th-font"},[s("b-input",{attrs:{disabled:"",value:e.row.business_name,placeholder:"กรุณาแก้ไขข้อมูล",icon:"pencil",size:"is-small"}})],1):t._e()])]}))]}}])})],1)],1),s("div",{staticClass:"vx-col md:w-5/12 w-full mb-base"},[s("vx-card",{attrs:{title:t.$t("SelectedBusiness"),icon:"FileTextIcon"}},[s("section",t._l(t.businessGroup,(function(e){return s("b-tag",{key:e.business_id,staticStyle:{"margin-right":"5px"},attrs:{rounded:"",type:"is-info",closable:"","aria-close-label":"Close tag"},on:{close:function(s){return t.removeBusiness(e.business_id)}}},[t._v("\n                                "+t._s(e.business_name)+"\n                            ")])})),1),0!=t.businessGroup.length?s("hr"):t._e(),0!=t.businessGroup.length?s("div",{staticClass:"buttons"},[s("button",{staticClass:"button is-danger is-rounded is-fullwidth is-small",attrs:{type:"submit"},on:{click:function(e){return t.cancelAll()}}},[s("span",{staticClass:"icon",staticStyle:{"margin-right":"3px"}},[s("i",{staticClass:"mdi mdi-close-circle"})]),t._v("\n                                ยกเลิกทั้งหมด\n                            ")])]):t._e()])],1),t._m(0)])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vx-col md:w-12/12 w-full mb-base"},[s("hr"),s("button",{staticClass:"vs-component vs-button vs-button-primary vs-button-filled small",staticStyle:{width:"100%","font-size":"13px"},attrs:{type:"submit",name:"button"}},[s("span",{staticClass:"vs-button-backgroundx vs-button--background",staticStyle:{opacity:"1",left:"20px",top:"20px",width:"0px",height:"0px",transition:"width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s"}}),s("span",{staticClass:"vs-button-text vs-button--text"},[s("span",{staticClass:"icon",staticStyle:{"margin-right":"3px"}},[s("i",{staticClass:"mdi mdi-check-circle"})]),t._v("\n\t\t\t\t\t\t\tยืนยัน\n\t\t\t\t\t\t")]),s("span",{staticClass:"vs-button-linex",staticStyle:{top:"auto",bottom:"-2px",left:"50%",transform:"translate(-50%)"}})])])}],a=(s("ac6a"),s("8615"),s("96cf"),s("3b8d"));s("6b54"),s("28a5"),s("a481"),s("b047");function r(t,e){for(var s={},n=0;n<e.length;n++){var i=e[n],a=i[t],r=s[a];void 0==r?(r=[i],s[a]=r):r.push(i)}return s}function l(t){t=o(t);var e=new Array("ศูนย์","หนึ่ง","สอง","สาม","สี่","ห้า","หก","เจ็ด","แปด","เก้า","สิบ"),s=new Array("","สิบ","ร้อย","พัน","หมื่น","แสน","ล้าน"),n="";if(isNaN(t))return"ข้อมูลนำเข้าไม่ถูกต้อง";if(t-0>9999999.9999)return"ข้อมูลนำเข้าเกินขอบเขตที่ตั้งไว้";t=t.split("."),t[1].length>0&&(t[1]=t[1].substring(0,2));for(var i=t[0].length-0,a=0;a<i;a++){var r=t[0].substring(a,a+1)-0;0!=r&&(n+=a==i-1&&1==r?"เอ็ด":a==i-2&&2==r?"ยี่":a==i-2&&1==r?"":e[r],n+=s[i-a-1])}if(n+="บาท","0"==t[1]||"00"==t[1])n+="ถ้วน";else{var l=t[1].length-0;for(a=0;a<l;a++){r=t[1].substring(a,a+1)-0;0!=r&&(n+=a==l-1&&1==r?"เอ็ด":a==l-2&&2==r?"ยี่":a==l-2&&1==r?"":e[r],n+=s[l-a-1])}n+="สตางค์"}return n}function o(t){var e=!1;t=t.toString(),t=t.replace(/ |,|บาท|฿/gi,"");for(var s=0;s<t.length;s++)"."==t[s]&&(e=!0);return 0==e&&(t+=".00"),t}Array.prototype.remove=function(t,e){var s=this.slice((e||t)+1||this.length);return this.length=t<0?this.length+t:t,this.push.apply(this,s)};var c=s("e499"),u=s("4ebb");c.vfs=u.pdfMake.vfs,c.fonts={Kanit:{normal:"Kanit-Regular.ttf"}};var b={data:function(){return{columns:[{field:"index",label:"ลำดับ",width:"50",numeric:!0,searchable:!1,centered:!0},{field:"business_name",label:"ชื่อบริษัท",searchable:!0},{field:"options",label:"ตัวเลือก",searchable:!1,centered:!0}],isPaginated:!0,isPaginationSimple:!0,paginationPosition:"bottom",defaultSortDirection:"asc",sortIcon:"arrow-up",sortIconSize:"is-small",currentPage:1,perPage:10,businessData:[],businessGroup:[],businessFetching:!0,typeData:[],typeFetching:!1,stockType:"",all_button_status:!0,billPrice:0,billLimit:0,billAmount:0,billStart:0,billDate:new Date,loopDate:!1,billCurrentDate:new Date,currentTotal:0,currentBillStock:[],currentData:[],currentStock:[],alertMessage:"",alertPosition:"",alertType:"",content:{business_name:"",business_address:"",business_tax:"",business_invoice:"",business_invoice_number:""}}},methods:{selectAllType:function(){1==this.all_button_status?this.all_button_status=!1:this.all_button_status=!0},randomPrice:function(){this.billPrice=Math.floor(1e5*Math.random()+5e3)},checkLimit:function(){var t=this;this.$http.get("https://gservernodejs.herokuapp.com/api/stock/all").then((function(e){t.billLimit>e.data.length&&(t.alertMessage="ไม่พบจำนวนสินค้าค่ะ",t.alertType="danger",t.alertPosition="bottom-right",t.alert(),t.billLimit=e.data.length)}))},billSubmit:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,s,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(1!=this.loopDate){t.next=48;break}if(1!=this.all_button_status){t.next=25;break}e=0;case 3:if(!(e<this.businessGroup.length)){t.next=23;break}this.content.business_name=this.businessGroup[e].business_name,this.content.business_address=this.businessGroup[e].business_address,this.content.business_tax=this.businessGroup[e].business_tax,this.content.business_invoice=this.businessGroup[e].business_invoice,s=0;case 9:if(!(s<this.billAmount)){t.next=20;break}return this.billCurrentDate=this.billDate,this.billCurrentDate=this.moment(this.billCurrentDate).add(s,"days").format("DD/MM/YYYY"),this.content.business_invoice_number=+this.billStart+s,this.currentBillStock.length=0,this.currentTotal=0,t.next=17,this.$http.post("https://gservernodejs.herokuapp.com/api/stock/all_by_type",{stock_type:this.stockType.type_id,stock_limit:this.billLimit}).then((function(t){n.currentData.length=0,n.currentData.push(["ชื่อสินค้า","หน่วย","จำนวน","ราคา","ราคารวม"]);while(n.currentTotal<n.billPrice){var e=Math.floor(Math.random()*Math.floor(t.data.length));n.currentTotal=n.currentTotal+t.data[e].stock_price,n.currentBillStock.push(t.data[e])}for(var s=r("stock_name",n.currentBillStock),i=Object.values(s).map((function(t){return t.reduce((function(t,e){var s=e.stock_name,n=e.stock_price,i=(e.stock_result,e.unit_name),a=e.type_name;return{stock_name:s,stock_price:n,stock_result:t.stock_result+ +n,unit_name:i,type_name:a}}),{stock_result:0})})),a=0;a<i.length;a++)n.currentData.push([i[a].stock_name,i[a].unit_name,parseInt(i[a].stock_result/i[a].stock_price),parseFloat(i[a].stock_price).toFixed(2),parseFloat(i[a].stock_result).toFixed(2)]);n.generate()}));case 17:s++,t.next=9;break;case 20:e++,t.next=3;break;case 23:t.next=46;break;case 25:e=0;case 26:if(!(e<this.businessGroup.length)){t.next=46;break}this.content.business_name=this.businessGroup[e].business_name,this.content.business_address=this.businessGroup[e].business_address,this.content.business_tax=this.businessGroup[e].business_tax,this.content.business_invoice=this.businessGroup[e].business_invoice,s=0;case 32:if(!(s<this.billAmount)){t.next=43;break}return this.billCurrentDate=this.billDate,this.billCurrentDate=this.moment(this.billCurrentDate).add(s,"days").format("DD/MM/YYYY"),this.content.business_invoice_number=+this.billStart+s,this.currentBillStock.length=0,this.currentTotal=0,t.next=40,this.$http.post("https://gservernodejs.herokuapp.com/api/stock/all_type",{stock_limit:this.billLimit}).then((function(t){n.currentData.length=0,n.currentData.push(["ชื่อสินค้า","หน่วย","จำนวน","ราคา","ราคารวม"]);while(n.currentTotal<n.billPrice){var e=Math.floor(Math.random()*Math.floor(t.data.length));n.currentTotal=n.currentTotal+t.data[e].stock_price,n.currentBillStock.push(t.data[e])}for(var s=r("stock_name",n.currentBillStock),i=Object.values(s).map((function(t){return t.reduce((function(t,e){var s=e.stock_name,n=e.stock_price,i=(e.stock_result,e.unit_name),a=e.type_name;return{stock_name:s,stock_price:n,stock_result:t.stock_result+ +n,unit_name:i,type_name:a}}),{stock_result:0})})),a=0;a<i.length;a++)n.currentData.push([i[a].stock_name,i[a].unit_name,parseInt(i[a].stock_result/i[a].stock_price),parseFloat(i[a].stock_price).toFixed(2),parseFloat(i[a].stock_result).toFixed(2)]);n.generate()}));case 40:s++,t.next=32;break;case 43:e++,t.next=26;break;case 46:t.next=94;break;case 48:if(0!=this.loopDate){t.next=94;break}if(1!=this.all_button_status){t.next=73;break}e=0;case 51:if(!(e<this.businessGroup.length)){t.next=71;break}this.content.business_name=this.businessGroup[e].business_name,this.content.business_address=this.businessGroup[e].business_address,this.content.business_tax=this.businessGroup[e].business_tax,this.content.business_invoice=this.businessGroup[e].business_invoice,s=0;case 57:if(!(s<this.billAmount)){t.next=68;break}return this.billCurrentDate=this.billDate,this.billCurrentDate=this.moment(this.billCurrentDate).format("DD/MM/YYYY"),this.content.business_invoice_number=+this.billStart+s,this.currentBillStock.length=0,this.currentTotal=0,t.next=65,this.$http.post("https://gservernodejs.herokuapp.com/api/stock/all_by_type",{stock_type:this.stockType.type_id,stock_limit:this.billLimit}).then((function(t){n.currentData.length=0,n.currentData.push(["ชื่อสินค้า","หน่วย","จำนวน","ราคา","ราคารวม"]);while(n.currentTotal<n.billPrice){var e=Math.floor(Math.random()*Math.floor(t.data.length));n.currentTotal=n.currentTotal+t.data[e].stock_price,n.currentBillStock.push(t.data[e])}for(var s=r("stock_name",n.currentBillStock),i=Object.values(s).map((function(t){return t.reduce((function(t,e){var s=e.stock_name,n=e.stock_price,i=(e.stock_result,e.unit_name),a=e.type_name;return{stock_name:s,stock_price:n,stock_result:t.stock_result+ +n,unit_name:i,type_name:a}}),{stock_result:0})})),a=0;a<i.length;a++)n.currentData.push([i[a].stock_name,i[a].unit_name,parseInt(i[a].stock_result/i[a].stock_price),parseFloat(i[a].stock_price).toFixed(2),parseFloat(i[a].stock_result).toFixed(2)]);n.generate()}));case 65:s++,t.next=57;break;case 68:e++,t.next=51;break;case 71:t.next=94;break;case 73:e=0;case 74:if(!(e<this.businessGroup.length)){t.next=94;break}this.content.business_name=this.businessGroup[e].business_name,this.content.business_address=this.businessGroup[e].business_address,this.content.business_tax=this.businessGroup[e].business_tax,this.content.business_invoice=this.businessGroup[e].business_invoice,s=0;case 80:if(!(s<this.billAmount)){t.next=91;break}return this.billCurrentDate=this.billDate,this.billCurrentDate=this.moment(this.billCurrentDate).format("DD/MM/YYYY"),this.content.business_invoice_number=+this.billStart+s,this.currentBillStock.length=0,this.currentTotal=0,t.next=88,this.$http.post("https://gservernodejs.herokuapp.com/api/stock/all_type",{stock_limit:this.billLimit}).then((function(t){n.currentData.length=0,n.currentData.push(["ชื่อสินค้า","หน่วย","จำนวน","ราคา","ราคารวม"]);while(n.currentTotal<n.billPrice){var e=Math.floor(Math.random()*Math.floor(t.data.length));n.currentTotal=n.currentTotal+t.data[e].stock_price,n.currentBillStock.push(t.data[e])}for(var s=r("stock_name",n.currentBillStock),i=Object.values(s).map((function(t){return t.reduce((function(t,e){var s=e.stock_name,n=e.stock_price,i=(e.stock_result,e.unit_name),a=e.type_name;return{stock_name:s,stock_price:n,stock_result:t.stock_result+ +n,unit_name:i,type_name:a}}),{stock_result:0})})),a=0;a<i.length;a++)n.currentData.push([i[a].stock_name,i[a].unit_name,parseInt(i[a].stock_result/i[a].stock_price),parseFloat(i[a].stock_price).toFixed(2),parseFloat(i[a].stock_result).toFixed(2)]);n.generate()}));case 88:s++,t.next=80;break;case 91:e++,t.next=74;break;case 94:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),removeBusiness:function(t){for(var e=0;e<this.businessGroup.length;e++)t==this.businessGroup[e].business_id&&this.businessGroup.remove(e)},getBusinessAsyncData:function(){var t=this;this.businessData=[],this.businessFetching=!0,this.$http.get("https://gservernodejs.herokuapp.com/api/business/all").then((function(e){var s=e.data;t.businessData=[],"ERROR|EMPTYINFO"!==s&&s.forEach((function(e){return t.businessData.push(e)}))})).catch((function(e){throw t.businessData=[],e})).finally((function(){t.businessFetching=!1}))},getTypeAsyncData:function(){var t=this;this.typeFetching=!0,this.$http.get("https://gservernodejs.herokuapp.com/api/type/all").then((function(e){var s=e.data;if(t.typeData=[],"ERROR|EMPTYINFO"!==s)s.forEach((function(e){return t.typeData.push(e)}));else{var n={type_name:"ไม่พบรายการประเภทสินค้าค่ะ"};t.typeData.push(n)}})).catch((function(e){throw t.typeData=[],e})).finally((function(){t.typeFetching=!1}))},alert:function(){this.$vs.notify({title:"Gentax",text:this.alertMessage,color:this.alertType,position:this.alertPosition})},cancelAll:function(){var t=this;this.$buefy.dialog.confirm({title:"ยืนยันยกเลิกการเลือกบริษัท",message:"คุณมั่นใจว่าต้องการยกเลิกข้อมูลนี้",confirmText:"ยกเลิกข้อมูล",cancelText:"ย้อนกลับ",type:"is-danger",hasIcon:!0,onConfirm:function(){t.businessGroup=[]}})},generate:function(){var t={content:[{columns:[{width:"50%",text:this.content.business_name},{width:"20%",text:this.content.business_invoice+"-"+this.content.business_invoice_number,alignment:"center"},{width:"30%",text:this.billCurrentDate,alignment:"right"}],columnGap:10},this.content.business_address,"เลขประจำตัวผู้เสียภาษีอากร "+this.content.business_tax,"\n",{layout:"lightHorizontalLines",table:{widths:["*","auto","auto","auto","auto"],body:this.currentData}},"\n",{columns:[{width:"90%",text:""},{width:"10%",text:parseFloat(this.currentTotal).toFixed(2),alignment:"right"}],columnGap:10},"\n",{columns:[{width:"60%",text:""},{width:"20%",text:"Vat 7%",alignment:"right"},{width:"20%",text:parseFloat(.07*parseFloat(this.currentTotal).toFixed(2)).toFixed(2),alignment:"right"}],columnGap:10},"\n",{columns:[{width:"80%",text:l(parseFloat(.07*this.currentTotal+this.currentTotal).toFixed(2))},{width:"20%",text:parseFloat(.07*this.currentTotal+this.currentTotal).toFixed(2),alignment:"right"}],columnGap:10}],defaultStyle:{font:"Kanit"}};c.createPdf(t).download("bill_"+this.content.business_invoice+"-"+this.content.business_invoice_number+".pdf")}},mounted:function(){this.getBusinessAsyncData()}},h=b,p=s("2877"),d=Object(p["a"])(h,n,i,!1,null,null,null);e["default"]=d.exports},"504c":function(t,e,s){var n=s("0d58"),i=s("6821"),a=s("52a7").f;t.exports=function(t){return function(e){var s,r=i(e),l=n(r),o=l.length,c=0,u=[];while(o>c)a.call(r,s=l[c++])&&u.push(t?[s,r[s]]:r[s]);return u}}},8615:function(t,e,s){var n=s("5ca1"),i=s("504c")(!1);n(n.S,"Object",{values:function(t){return i(t)}})}}]);
//# sourceMappingURL=chunk-2a21ebb4.8ee9d642.js.map