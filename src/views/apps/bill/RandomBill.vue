<template>
    <div>
		<form action="javascript:void(0)" @submit="billSubmit()">
			<div class="vx-row">
				<div class="vx-col md:w-4/4 w-full mb-base">
					<vx-card :title="$t('SelectDate')" icon="CalendarIcon">
						<b-field>
							<b-datepicker
								placeholder="คลิกเพื่อเลือกวันที่..."
								icon="calendar-today"
								trap-focus
								v-model="billDate"
								rounded
								size="is-small">
							</b-datepicker>
						</b-field>
						<br>
						<b-field>
							<b-switch v-model="loopDate" size="is-small" type="is-info">
								เรียงวันที่
							</b-switch>
						</b-field>
					</vx-card>
				</div>
				<div class="vx-col md:w-6/12 w-full mb-base">
					<vx-card :title="$t('SelectType')" icon="CheckCircleIcon">
						<b-autocomplete
                            rounded
                            :data="typeData"
                            placeholder="กรุณากรอกประเภทสินค้า"
                            field="type_name"
                            icon="magnify"
                            :loading="typeFetching"
                            @typing="getTypeAsyncData"
                            @select="option => stockType = option"
                            size="is-small"
                            v-if="all_button_status == true">
                            <template slot-scope="props">
                                <div class="media">
                                    <div class="media-content">
                                        {{ props.option.type_name }}
                                    </div>
                                </div>
                            </template>
                        </b-autocomplete>
                        <b-input type="text"
                            value="เลือกทั้งหมดแล้ว"
                            disabled=""
                            v-if="all_button_status == false"
                            rounded
                            size="is-small">
                        </b-input>
                        <hr>
                        <button v-if="all_button_status == true" @click="selectAllType()" class="button is-rounded is-small is-info is-fullwidth">
                            เลือกทั้งหมด
                        </button>
                        <button v-if="all_button_status == false" @click="selectAllType()" class="button is-rounded is-small is-danger is-fullwidth">
                            ยกเลิก
                        </button>
					</vx-card>
				</div>
				<div class="vx-col md:w-6/12 w-full mb-base">
					<vx-card :title="$t('TotalBillPrice')" icon="CheckCircleIcon">
                        <b-input type="number"
                            step="any"
                            v-model="billPrice"
                            placeholder="กรุณากรอกราคาบิลรวม"
                            size="is-small">
                        </b-input>
                        <hr>
                        <button @click="randomPrice()" class="button is-rounded is-small is-info is-fullwidth">
                            สุ่มราคา
                        </button>
					</vx-card>
				</div>
                <div class="vx-col md:w-4/12 w-full mb-base">
                    <vx-card :title="$t('StockAmount')" icon="FileTextIcon">
                        <b-field>
                            <b-numberinput @input="checkLimit()" v-model="billLimit" type="is-info"></b-numberinput>
                        </b-field>
                        <b-field>
                            <b-slider @change="checkLimit()" v-model="billLimit" lazy type="is-info"></b-slider>
                        </b-field>
                    </vx-card>
				</div>
                <div class="vx-col md:w-4/12 w-full mb-base">
                    <vx-card :title="$t('BillAmount')" icon="FileTextIcon">
                        <b-field>
                            <b-numberinput v-model="billAmount" type="is-info"></b-numberinput>
                        </b-field>
                        <b-field>
                            <b-slider v-model="billAmount" lazy type="is-info"></b-slider>
                        </b-field>
                    </vx-card>
				</div>
				<div class="vx-col md:w-4/12 w-full mb-base">
					<vx-card :title="$t('BillStart')" icon="FileTextIcon">
						<b-field>
							<b-numberinput v-model="billStart" type="is-info"></b-numberinput>
						</b-field>
						<b-field>
							<b-slider v-model="billStart" lazy type="is-info"></b-slider>
						</b-field>
					</vx-card>
				</div>
				<div class="vx-col md:w-7/12 w-full mb-base">
                    <vx-card :title="$t('SelectBusiness')" icon="FileTextIcon">
                        <b-table
                            :data="businessData"
                            :loading="businessFetching"
                            :paginated="isPaginated"
                            :per-page="perPage"
                            :current-page.sync="currentPage"
                            :pagination-simple="isPaginationSimple"
                            :pagination-position="paginationPosition"
                            :default-sort-direction="defaultSortDirection"
                            :sort-icon="sortIcon"
                            :sort-icon-size="sortIconSize"
                            default-sort="user.first_name"
                            aria-next-label="Next page"
                            aria-previous-label="Previous page"
                            aria-page-label="Page"
                            aria-current-label="Current page">
                            <template slot-scope="props">
                                <template v-for="column in columns">
                                    <b-table-column :key="column.id" v-bind="column">
                                        <template
                                            v-if="column.searchable"
                                            slot="searchable"
                                            slot-scope="props">
                                            <b-input
                                                v-model="props.filters[props.column.field]"
                                                placeholder="ค้นหาข้อมูล"
                                                icon="magnify"
                                                size="is-small" />
                                        </template>
                                        <span v-if="column.field === 'index'">
                                            <b-tag rounded type="is-light">{{props.index + 1}}</b-tag>
                                        </span>
                                        <span v-else-if="column.field === 'options'">
                                            <div class="block">
                                                <b-checkbox type="is-info" v-model="businessGroup"
                                                    :native-value="props.row">
                                                </b-checkbox>
                                            </div>
                                        </span>
                                        <span class="th-font" v-else-if="column.field === 'business_name'">
                                            <b-input disabled :value="props.row.business_name" placeholder="กรุณาแก้ไขข้อมูล" icon="pencil" size="is-small"/>
                                        </span>
                                    </b-table-column>
                                </template>
                            </template>
                        </b-table>
                    </vx-card>
				</div>
                <div class="vx-col md:w-5/12 w-full mb-base">
                    <vx-card :title="$t('SelectedBusiness')" icon="FileTextIcon">
                        <section>
                            <b-tag v-for="(business) in businessGroup" :key="business.business_id"
                                rounded
                                type="is-info"
                                closable
                                aria-close-label="Close tag"
                                style="margin-right: 5px;"
                                @close="removeBusiness(business.business_id)">
                                {{ business.business_name }}
                            </b-tag>
                        </section>
                        <hr v-if="businessGroup.length != 0">
                        <div class="buttons" v-if="businessGroup.length != 0">
                            <button @click="cancelAll()" type="submit" class="button is-danger is-rounded is-fullwidth is-small">
                                <span class="icon" style="margin-right: 3px;">
                                    <i class="mdi mdi-close-circle"></i>
                                </span>
                                ยกเลิกทั้งหมด
                            </button>
                        </div>
                    </vx-card>
				</div>
				<div class="vx-col md:w-12/12 w-full mb-base">
					<hr>
					<button type="submit" name="button" class="vs-component vs-button vs-button-primary vs-button-filled small" style="width: 100%; font-size: 13px;">
						<span class="vs-button-backgroundx vs-button--background" style="opacity: 1; left: 20px; top: 20px; width: 0px; height: 0px; transition: width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s;"></span>
						<span class="vs-button-text vs-button--text">
							<span class="icon" style="margin-right: 3px;">
								<i class="mdi mdi-check-circle"></i>
							</span>
							ยืนยัน
						</span>
						<span class="vs-button-linex" style="top: auto; bottom: -2px; left: 50%; transform: translate(-50%);"></span>
					</button>
				</div>
			</div>
		</form>
    </div>
</template>

<script>
	Array.prototype.remove = function(from, to) {
	  var rest = this.slice((to || from) + 1 || this.length);
	  this.length = from < 0 ? this.length + from : from;
	  return this.push.apply(this, rest);
	};
	function groupBy(propertyName, array) {
	    var groupedElements = {};

	    for(var i = 0; i < array.length; i++) {
	        var element = array[i];
	        var value = element[propertyName];

	        var group = groupedElements[value];
	        if(group == undefined) {
	            group = [element];
	            groupedElements[value] = group;
	        } else {
	            group.push(element);
	        }
	    }

	    return groupedElements;
	}
	function ThaiNumberToText(Number)
	{
		Number = Number.replace (/๐/gi,'0');  
		Number = Number.replace (/๑/gi,'1');  
		Number = Number.replace (/๒/gi,'2');
		Number = Number.replace (/๓/gi,'3');
		Number = Number.replace (/๔/gi,'4');
		Number = Number.replace (/๕/gi,'5');
		Number = Number.replace (/๖/gi,'6');
		Number = Number.replace (/๗/gi,'7');
		Number = Number.replace (/๘/gi,'8');
		Number = Number.replace (/๙/gi,'9');
		return 	ArabicNumberToText(Number);
	}

	function ArabicNumberToText(Number)
	{
		var Number = CheckNumber(Number);
		var NumberArray = new Array ("ศูนย์", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า", "สิบ");
		var DigitArray = new Array ("", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน");
		var BahtText = "";
		if (isNaN(Number))
		{
			return "ข้อมูลนำเข้าไม่ถูกต้อง";
		} else
		{
			if ((Number - 0) > 9999999.9999)
			{
				return "ข้อมูลนำเข้าเกินขอบเขตที่ตั้งไว้";
			} else
			{
				Number = Number.split (".");
				if (Number[1].length > 0)
				{
					Number[1] = Number[1].substring(0, 2);
				}
				var NumberLen = Number[0].length - 0;
				for(var i = 0; i < NumberLen; i++)
				{
					var tmp = Number[0].substring(i, i + 1) - 0;
					if (tmp != 0)
					{
						if ((i == (NumberLen - 1)) && (tmp == 1))
						{
							BahtText += "เอ็ด";
						} else
						if ((i == (NumberLen - 2)) && (tmp == 2))
						{
							BahtText += "ยี่";
						} else
						if ((i == (NumberLen - 2)) && (tmp == 1))
						{
							BahtText += "";
						} else
						{
							BahtText += NumberArray[tmp];
						}
						BahtText += DigitArray[NumberLen - i - 1];
					}
				}
				BahtText += "บาท";
				if ((Number[1] == "0") || (Number[1] == "00"))
				{
					BahtText += "ถ้วน";
				} else
				{
					var DecimalLen = Number[1].length - 0;
					for (var i = 0; i < DecimalLen; i++)
					{
						var tmp = Number[1].substring(i, i + 1) - 0;
						if (tmp != 0)
						{
							if ((i == (DecimalLen - 1)) && (tmp == 1))
							{
								BahtText += "เอ็ด";
							} else
							if ((i == (DecimalLen - 2)) && (tmp == 2))
							{
								BahtText += "ยี่";
							} else
							if ((i == (DecimalLen - 2)) && (tmp == 1))
							{
								BahtText += "";
							} else
							{
								BahtText += NumberArray[tmp];
							}
							BahtText += DigitArray[DecimalLen - i - 1];
						}
					}
					BahtText += "สตางค์";
				}
				return BahtText;
			}
		}
	}

	function CheckNumber(Number){
		var decimal = false;
		Number = Number.toString();						
		Number = Number.replace (/ |,|บาท|฿/gi,'');  		
		for (var i = 0; i < Number.length; i++)
		{
			if(Number[i] =='.'){
				decimal = true;
			}
		}
		if(decimal == false){
			Number = Number+'.00';
		}
		return Number
	}
    import debounce from 'lodash/debounce'
    var pdfMake = require("pdfmake/build/pdfmake.js");
	var pdfFonts = require("pdfmake/build/vfs_fonts.js");
	pdfMake.vfs = pdfFonts.pdfMake.vfs;
	pdfMake.fonts = {
	  Kanit: {
	    normal: 'Kanit-Regular.ttf'
	  }
	}
	export default{
		data(){
			return{
                columns: [
                    {
                        field: 'index',
                        label: 'ลำดับ',
                        width: '50',
                        numeric: true,
                        searchable: false,
                        centered: true
                    },
                    {
                        field: 'business_name',
                        label: 'ชื่อบริษัท',
                        searchable: true,
                    },
                    {
                        field: 'options',
                        label: 'ตัวเลือก',
                        searchable: false,
                        centered: true
                    }
                ],
                isPaginated: true,
                isPaginationSimple: true,
                paginationPosition: 'bottom',
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                currentPage: 1,
                perPage: 10,
				businessData: [],
				businessGroup: [],
				businessFetching: true,
				typeData: [],
                typeFetching: false,
				stockType: "",
				all_button_status: true,
				billPrice: 0,
				billLimit: 0,
				billAmount: 0,
				billStart: 0,
				billDate: new Date(),
				loopDate: false,
				billCurrentDate: new Date(),
				currentTotal: 0,
				currentBillStock: [],
				currentData: [],
				currentStock: [],
				alertMessage: "",
				alertPosition: "",
				alertType: "",
				content: {
					business_name: "",
					business_address: "",
					business_tax: "",
					business_invoice: "",
					business_invoice_number: ""
				}
			}
		},
		methods:{
			selectAllType(){
				if(this.all_button_status == true){
					this.all_button_status = false
				}else{
					this.all_button_status = true
				}
			},
			randomPrice(){
				this.billPrice = Math.floor((Math.random() * 100000) + 5000)
			},
			checkLimit(){
				this.$http.get(`https://gservernodejs.herokuapp.com/api/stock/all`).then((response)=>{
					if(this.billLimit > response.data.length){
						this.alertMessage = "ไม่พบจำนวนสินค้าค่ะ"
						this.alertType = "danger"
						this.alertPosition = "bottom-right"
						this.alert()
						this.billLimit = response.data.length
					}
				})
			},
			async billSubmit(){
				if(this.loopDate == true){
					if(this.all_button_status == true){
						for (var i = 0; i < this.businessGroup.length; i++) {
							this.content.business_name = this.businessGroup[i].business_name
							this.content.business_address = this.businessGroup[i].business_address
							this.content.business_tax = this.businessGroup[i].business_tax
							this.content.business_invoice = this.businessGroup[i].business_invoice
							for (var o = 0; o < this.billAmount; o++) {
								this.billCurrentDate = this.billDate
								this.billCurrentDate = this.moment(this.billCurrentDate).add(o,'days').format('DD/MM/YYYY')
								this.content.business_invoice_number = +this.billStart+o;
								this.currentBillStock.length = 0;
								this.currentTotal = 0;
								await this.$http.post(`https://gservernodejs.herokuapp.com/api/stock/all_by_type`,{
									stock_type: this.stockType.type_id,
									stock_limit: this.billLimit
								})
								.then((response) => {
									this.currentData.length=0;
									this.currentData.push(["ชื่อสินค้า","หน่วย","จำนวน","ราคา","ราคารวม"]);
									while(this.currentTotal < this.billPrice){
										var x = Math.floor(Math.random() * Math.floor(response.data.length))
										this.currentTotal = this.currentTotal + response.data[x].stock_price;
										this.currentBillStock.push(response.data[x])
									}
									var result = groupBy("stock_name", this.currentBillStock)
									let sums = Object.values(result)
						           		.map(arr => arr.reduce((sums,{stock_name, stock_price, stock_result, unit_name, type_name}) => ({stock_name, stock_price, stock_result: sums.stock_result + +stock_price, unit_name, type_name}), {stock_result:0}))
									for (var i = 0; i < sums.length; i++) {
										this.currentData.push([sums[i].stock_name, sums[i].unit_name, parseInt(sums[i].stock_result/sums[i].stock_price), parseFloat(sums[i].stock_price).toFixed(2), parseFloat(sums[i].stock_result).toFixed(2)]);
									}
									this.generate()
								})
							}
						}
					}else{
						for (var i = 0; i < this.businessGroup.length; i++) {
							this.content.business_name = this.businessGroup[i].business_name
							this.content.business_address = this.businessGroup[i].business_address
							this.content.business_tax = this.businessGroup[i].business_tax
							this.content.business_invoice = this.businessGroup[i].business_invoice
							for (var o = 0; o < this.billAmount; o++) {
								this.billCurrentDate = this.billDate
								this.billCurrentDate = this.moment(this.billCurrentDate).add(o,'days').format('DD/MM/YYYY')
								this.content.business_invoice_number = +this.billStart+o;
								this.currentBillStock.length = 0;
								this.currentTotal = 0;
								await this.$http.post(`https://gservernodejs.herokuapp.com/api/stock/all_type`,{
									stock_limit: this.billLimit
								})
								.then((response) => {
									this.currentData.length=0;
									this.currentData.push(["ชื่อสินค้า","หน่วย","จำนวน","ราคา","ราคารวม"]);
									while(this.currentTotal < this.billPrice){
										var x = Math.floor(Math.random() * Math.floor(response.data.length))
										this.currentTotal = this.currentTotal + response.data[x].stock_price;
										this.currentBillStock.push(response.data[x])
									}
									var result = groupBy("stock_name", this.currentBillStock)
									let sums = Object.values(result)
						           		.map(arr => arr.reduce((sums,{stock_name, stock_price, stock_result, unit_name, type_name}) => ({stock_name, stock_price, stock_result: sums.stock_result + +stock_price, unit_name, type_name}), {stock_result:0}))
									for (var i = 0; i < sums.length; i++) {
										this.currentData.push([sums[i].stock_name, sums[i].unit_name, parseInt(sums[i].stock_result/sums[i].stock_price), parseFloat(sums[i].stock_price).toFixed(2), parseFloat(sums[i].stock_result).toFixed(2)]);
									}
									this.generate()
								})
							}
						}
					}
				}else if(this.loopDate == false){
					if(this.all_button_status == true){
						for (var i = 0; i < this.businessGroup.length; i++) {
							this.content.business_name = this.businessGroup[i].business_name
							this.content.business_address = this.businessGroup[i].business_address
							this.content.business_tax = this.businessGroup[i].business_tax
							this.content.business_invoice = this.businessGroup[i].business_invoice
							for (var o = 0; o < this.billAmount; o++) {
								this.billCurrentDate = this.billDate
								this.billCurrentDate = this.moment(this.billCurrentDate).format('DD/MM/YYYY')
								this.content.business_invoice_number = +this.billStart+o;
								this.currentBillStock.length = 0;
								this.currentTotal = 0;
								await this.$http.post(`https://gservernodejs.herokuapp.com/api/stock/all_by_type`,{
									stock_type: this.stockType.type_id,
									stock_limit: this.billLimit
								})
								.then((response) => {
									this.currentData.length=0;
									this.currentData.push(["ชื่อสินค้า","หน่วย","จำนวน","ราคา","ราคารวม"]);
									while(this.currentTotal < this.billPrice){
										var x = Math.floor(Math.random() * Math.floor(response.data.length))
										this.currentTotal = this.currentTotal + response.data[x].stock_price;
										this.currentBillStock.push(response.data[x])
									}
									var result = groupBy("stock_name", this.currentBillStock)
									let sums = Object.values(result)
						           		.map(arr => arr.reduce((sums,{stock_name, stock_price, stock_result, unit_name, type_name}) => ({stock_name, stock_price, stock_result: sums.stock_result + +stock_price, unit_name, type_name}), {stock_result:0}))
									for (var i = 0; i < sums.length; i++) {
										this.currentData.push([sums[i].stock_name, sums[i].unit_name, parseInt(sums[i].stock_result/sums[i].stock_price), parseFloat(sums[i].stock_price).toFixed(2), parseFloat(sums[i].stock_result).toFixed(2)]);
									}
									this.generate()
								})
							}
						}
					}else{
						for (var i = 0; i < this.businessGroup.length; i++) {
							this.content.business_name = this.businessGroup[i].business_name
							this.content.business_address = this.businessGroup[i].business_address
							this.content.business_tax = this.businessGroup[i].business_tax
							this.content.business_invoice = this.businessGroup[i].business_invoice
							for (var o = 0; o < this.billAmount; o++) {
								this.billCurrentDate = this.billDate
								this.billCurrentDate = this.moment(this.billCurrentDate).format('DD/MM/YYYY')
								this.content.business_invoice_number = +this.billStart+o;
								this.currentBillStock.length = 0;
								this.currentTotal = 0;
								await this.$http.post(`https://gservernodejs.herokuapp.com/api/stock/all_type`,{
									stock_limit: this.billLimit
								})
								.then((response) => {
									this.currentData.length=0;
									this.currentData.push(["ชื่อสินค้า","หน่วย","จำนวน","ราคา","ราคารวม"]);
									while(this.currentTotal < this.billPrice){
										var x = Math.floor(Math.random() * Math.floor(response.data.length))
										this.currentTotal = this.currentTotal + response.data[x].stock_price;
										this.currentBillStock.push(response.data[x])
									}
									var result = groupBy("stock_name", this.currentBillStock)
									let sums = Object.values(result)
						           		.map(arr => arr.reduce((sums,{stock_name, stock_price, stock_result, unit_name, type_name}) => ({stock_name, stock_price, stock_result: sums.stock_result + +stock_price, unit_name, type_name}), {stock_result:0}))
									for (var i = 0; i < sums.length; i++) {
										this.currentData.push([sums[i].stock_name, sums[i].unit_name, parseInt(sums[i].stock_result/sums[i].stock_price), parseFloat(sums[i].stock_price).toFixed(2), parseFloat(sums[i].stock_result).toFixed(2)]);
									}
									this.generate()
								})
							}
						}
					}
				}
			},
			removeBusiness(business_id){
				for (var i = 0; i < this.businessGroup.length; i++) {
					if(business_id == this.businessGroup[i].business_id){
						this.businessGroup.remove(i)
					}
				}
			},
        	getBusinessAsyncData () {
                this.businessData = []
                this.businessFetching = true
                this.$http.get(`https://gservernodejs.herokuapp.com/api/business/all`)
                    .then(({ data }) => {
                        this.businessData = []
                        if(data !== "ERROR|EMPTYINFO"){
                        	data.forEach((item) => this.businessData.push(item))
                        }
                    })
                    .catch((error) => {
                        this.businessData = []
                        throw error
                    })
                    .finally(() => {
                        this.businessFetching = false
                    })
            },
			getTypeAsyncData() {
                this.typeFetching = true
                this.$http.get(`https://gservernodejs.herokuapp.com/api/type/all`)
                    .then(({ data }) => {
                        this.typeData = []
                        if(data !== "ERROR|EMPTYINFO"){
                        	data.forEach((item) => this.typeData.push(item))
                        }else{
                        	var noitem = {type_name: "ไม่พบรายการประเภทสินค้าค่ะ"};
                        	this.typeData.push(noitem)
                        }
                    })
                    .catch((error) => {
                        this.typeData = []
                        throw error
                    })
                    .finally(() => {
                        this.typeFetching = false
                    })
            },
            alert() {
                this.$vs.notify({
		          title: "Gentax",
		          text: this.alertMessage,
                  color: this.alertType,
                  position: this.alertPosition
		      	})
            },
            cancelAll(){ 
            	this.$buefy.dialog.confirm({
                    title: 'ยืนยันยกเลิกการเลือกบริษัท',
                    message: 'คุณมั่นใจว่าต้องการยกเลิกข้อมูลนี้',
                    confirmText: 'ยกเลิกข้อมูล',
                    cancelText: 'ย้อนกลับ',
                    type: 'is-danger',
                    hasIcon: true,
                    onConfirm: () => {
            			this.businessGroup = []
                    }
                })
            },
            generate() {
		      var docDefinition = {
		        content: [
		        	{
					  columns: [
					    {
					      // % width
					      width: '50%',
					      text: this.content.business_name
					    },
					    {
					      // % width
					      width: '20%',
					      text: this.content.business_invoice+"-"+this.content.business_invoice_number,
					      alignment: 'center'
					    },
					    {
					      // % width
					      width: '30%',
					      text: this.billCurrentDate,
					      alignment: 'right'
					    }
					  ],
					  // optional space between columns
					  columnGap: 10
					},
				  	this.content.business_address,
				  	'เลขประจำตัวผู้เสียภาษีอากร '+this.content.business_tax,
				  	"\n",
					{
						layout: 'lightHorizontalLines', // optional
						table: {
							widths: [ '*', 'auto', 'auto', 'auto', 'auto' ],
							body: this.currentData
						}
					},
				  	"\n",
		        	{
					  columns: [
					    {
					      // % width
					      width: '90%',
					      text: ''
					    },
					    {
					    	width: '10%',
					    	text: parseFloat(this.currentTotal).toFixed(2),
					    	alignment: 'right'
					    }
					  ],
					  // optional space between columns
					  columnGap: 10
					},
				  	"\n",
		        	{
					  columns: [
					    {
					      // % width
					      width: '60%',
					      text: ''
					    },
					    {
					    	width: '20%',
					    	text: 'Vat 7%',
					    	alignment: 'right'
					    },
					    {
					    	width: '20%',
					    	text: parseFloat(0.07*parseFloat(this.currentTotal).toFixed(2)).toFixed(2),
					    	alignment: 'right'
					    }
					  ],
					  // optional space between columns
					  columnGap: 10
					},
				  	"\n",
		        	{
					  columns: [
					    {
					      // % width
					      width: '80%',
					      text: ArabicNumberToText(parseFloat((0.07*this.currentTotal)+this.currentTotal).toFixed(2))
					    },
					    {
					    	width: '20%',
					    	text: parseFloat((0.07*this.currentTotal)+this.currentTotal).toFixed(2),
					    	alignment: 'right'
					    }
					  ],
					  // optional space between columns
					  columnGap: 10
					}
		        ],
		        defaultStyle: {
		        	font: 'Kanit'
		        }
		      };
		      pdfMake.createPdf(docDefinition).download("bill_"+ this.content.business_invoice +"-"+ this.content.business_invoice_number +".pdf");
		    }
		},
		mounted(){
			this.getBusinessAsyncData()
		}
	};
</script>