<template>
    <div>
		<form action="javascript:void(0)" @submit="stockSubmit()">
			<div class="vx-row">
				<div class="vx-col md:w-6/12 w-full mb-base">
					<vx-card :title="$t('ProductName')" icon="InfoIcon">
						<b-field
						type=""
						message="">
							<b-input type="text"
							    v-model="stockName"
							    maxlength="100"
							    placeholder="กรุณากรอกกรอกชื่อสินค้า"
							    size="is-small">
							</b-input>
						</b-field>
					</vx-card>
				</div>
				<div class="vx-col md:w-6/12 w-full mb-base">
					<vx-card :title="$t('ProductPrice')" icon="CreditCardIcon">
						<b-field
						type=""
						message="">
							<b-input type="text"
								step="any"
							    v-model="stockPrice"
							    maxlength="10"
							    placeholder="กรุณากรอกราคาสินค้า"
							    size="is-small">
							</b-input>
						</b-field>
					</vx-card>
				</div>
				<div class="vx-col md:w-6/12 w-full mb-base">
					<vx-card :title="$t('ProductType')" icon="TagIcon">
						<b-field
						type=""
						message="">
							<b-autocomplete
				                rounded
				                :data="typeData"
				                placeholder="กรุณากรอกประเภทสินค้า"
				                field="type_name"
				                icon="magnify"
				                :loading="typeFetching"
				                @typing="getTypeAsyncData"
				                @select="option => stockType = option"
				                size="is-small">

				                <template slot-scope="props">
				                    <div class="media">
				                        <div class="media-content">
				                            {{ props.option.type_name }}
				                        </div>
				                    </div>
				                </template>
				            </b-autocomplete>
						</b-field>
					</vx-card>
				</div>
				<div class="vx-col md:w-6/12 w-full mb-base">
					<vx-card :title="$t('ProductUnit')" icon="ArchiveIcon">
						<b-field
						type=""
						message="">
							<b-autocomplete
								rounded
				                :data="unitData"
				                placeholder="กรุณากรอกหน่วยสินค้า"
				                field="unit_name"
				                icon="magnify"
				                :loading="unitFetching"
				                @typing="getUnitAsyncData"
				                @select="option => stockUnit = option"
				                size="is-small">

				                <template slot-scope="props">
				                    <div class="media">
				                        <div class="media-content">
				                            {{ props.option.unit_name }}
				                        </div>
				                    </div>
				                </template>
				            </b-autocomplete>
						</b-field>
					</vx-card>
				</div>
				<div class="vx-col md:w-12/12 w-full mb-base">
					<vx-card :title="$t('ProductDescription')" icon="BookIcon">
						<b-field
						type=""
						message="">
							<b-input type="textarea"
							    v-model="stockDesc"
							    maxlength="300"
							    placeholder="กรุณากรอกรายละเอียดสินค้า"
							    size="is-small">
							</b-input>
						</b-field>
					</vx-card>
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
    import debounce from 'lodash/debounce'
	export default{
		data(){
			return{
				stockName: "",
				typeData: [],
                typeFetching: false,
				stockType: "",
				unitData: [],
                unitFetching: false,
				stockUnit: null,
				stockPrice: 0,
				stockDesc: "",
				alertMessage: "",
				alertPosition: "",
				alertType: "",
			}
		},
		methods:{
			getUnitAsyncData: debounce(function (name) {
                if (!name.length) {
                    this.unitData = []
                    return
                }
                this.unitFetching = true
                this.$http.get(`https://gservernodejs.herokuapp.com/api/unit/name/`+ name +``)
                    .then(({ data }) => {
                        this.unitData = []
                        if(data !== "ERROR|EMPTYINFO"){
                        	data.forEach((item) => this.unitData.push(item))
                        }else{
                        	var noitem = {unit_name: "ไม่พบรายการหน่วยของสินค้าค่ะ"};
                        	this.unitData.push(noitem)
                        }
                    })
                    .catch((error) => {
                        this.unitData = []
                        throw error
                    })
                    .finally(() => {
                        this.unitFetching = false
                    })
            }, 500),
			getTypeAsyncData: debounce(function (name) {
                if (!name.length) {
                    this.unitData = []
                    return
                }
                this.typeFetching = true
                this.$http.get(`https://gservernodejs.herokuapp.com/api/type/name/`+ name +``)
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
            }, 500),
			stockSubmit(){
				if(this.stockName == "" || this.stockDesc == "" || this.stockType == "" || this.stockUnit == ""){
					this.alertMessage = "กรุณากรอกข้อมูลให้ครบค่ะ"
					this.alertPosition = "bottom-right"
					this.alertType = "danger"
					this.alert()
				}else if(this.stockName != "" && this.stockDesc != "" && this.stockType != "" && this.stockUnit != ""){
					this.alertMessage = "เพิ่มข้อมูลแล้วค่ะ"
					this.alertPosition = "bottom-right"
					this.alertType = "success"
					this.$http.post('https://gservernodejs.herokuapp.com/api/stock/insert',{
						stock_name: this.stockName,
						stock_price: this.stockPrice,
						stock_type: this.stockType.type_id,
						stock_unit: this.stockUnit.unit_id,
						stock_desc: this.stockDesc
					}).then((response) => {
					  if(response.data === "SUCCEDD|INSERTED"){
					  	this.alertMessage = "เพิ่มสินค้า "+ this.stockName +" แล้วค่ะ"
						this.alertPosition = "bottom-right"
						this.alertType = "success"
					  }else if(response.data === "ERROR|DUPLICATED"){
					  	this.alertMessage = "ผิดพลาด, มีสินค้า "+ this.stockName +" อยู่แล้วค่ะ"
						this.alertPosition = "bottom-right"
						this.alertType = "danger"
					  }else{
					  	this.alertMessage = "ไม่สามารถเพิ่มสินค้า "+ this.stockName +" ได้ค่ะ"
						this.alertPosition = "bottom-right"
						this.alertType = "danger"
					  }
						this.alert()
					})
				}
			},
            alert() {
                this.$vs.notify({
		          title: "Gentax",
		          text: this.alertMessage,
                  color: this.alertType,
                  position: this.alertPosition
		      	})
            },
            managePage(){
            	this.$emit('eventstock', 'manageStock')
            }
		},
        computed: {
            formattedCurrencyValue(){
		        if(!this.stockPrice){ 
		        	return "0.00" 
		        }
	            return parseFloat(this.stockPrice).toFixed(2)
	        }
        }
	};
</script>