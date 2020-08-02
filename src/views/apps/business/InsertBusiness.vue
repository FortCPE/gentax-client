<template>
    <div>
        <form action="javascript:void(0)" @submit="businessSubmit()">
			<div class="vx-row">
				<div class="vx-col md:w-6/12 w-full mb-base">
                    <vx-card :title="$t('BusinessName')" icon="BookmarkIcon">
                        <b-field
                        type=""
                        message="">
                            <b-input type="text"
                                v-model="businessName"
                                maxlength="100"
                                placeholder="กรุณากรอกชื่อบริษัท"
                                size="is-small">
                            </b-input>
                        </b-field>
                    </vx-card>
				</div>
				<div class="vx-col md:w-6/12 w-full mb-base">
                    <vx-card :title="$t('BusinessTax')" icon="HashIcon">
                        <b-field
                        type=""
                        message="">
                            <b-input type="text"
                                v-model="businessTax"
                                maxlength="100"
                                placeholder="กรุณากรอกหมายเลขผู้เสียภาษี"
                                size="is-small">
                            </b-input>
                        </b-field>
                    </vx-card>
				</div>
				<div class="vx-col md:w-4/4 w-full mb-base">
                    <vx-card :title="$t('BusinessAddress')" icon="FlagIcon">
                        <b-field
                        type=""
                        message="">
                            <b-input type="textarea"
                                v-model="businessAddress"
                                maxlength="300"
                                placeholder="กรุณากรอกที่อยู่บริษัท"
                                size="is-small">
                            </b-input>
                        </b-field>
                    </vx-card>
				</div>
				<div class="vx-col md:w-4/4 w-full mb-base">
                    <vx-card :title="$t('BusinessInvoice')" icon="TagIcon">
                        <b-field>
                            <b-input type="text" v-model="businessInvoice" placeholder="กรุณากรอกตัวอักษรย่อ Invoice Number เช่น IV, AB, PD" size="is-small"/>
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
				businessName: "",
				businessTax: "",
				businessAddress: "",
				businessInvoice: "",
				alertMessage: "",
				alertPosition: "",
				alertType: "",
			}
		},
		methods:{
			businessSubmit(){
				if(this.businessName == "" || this.businessTax == "" || this.businessAddress == "" || this.businessInvoice == ""){
					this.alertMessage = "กรุณากรอกข้อมูลให้ครบค่ะ"
					this.alertPosition = "bottom-right"
					this.alertType = "danger"
					this.alert()
				}else if(this.businessName != "" && this.businessTax != "" && this.businessAddress != "" || this.businessInvoice != ""){
					this.alertMessage = "เพิ่มข้อมูลแล้วค่ะ"
					this.alertPosition = "bottom-right"
					this.alertType = "success"
					this.$http.post('https://gservernodejs.herokuapp.com/api/business/insert',{
						business_name: this.businessName,
						business_tax: this.businessTax,
						business_address: this.businessAddress,
						business_invoice: this.businessInvoice
					}).then((response) => {
					  if(response.data === "SUCCEDD|INSERTED"){
					  	this.alertMessage = "เพิ่มบริษัท "+ this.businessName +" แล้วค่ะ"
						this.alertPosition = "bottom-right"
						this.alertType = "success"
					  }else if(response.data === "ERROR|DUPLICATED"){
					  	this.alertMessage = "ผิดพลาด, มีบริษัท "+ this.businessName +" นี้อยู่แล้วค่ะ"
						this.alertPosition = "bottom-right"
						this.alertType = "danger"
					  }else{
					  	this.alertMessage = "ไม่สามารถเพิ่มบริษัท "+ this.businessName +" ได้ค่ะ"
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
            	this.$emit('eventstock', 'manageBusiness')
            }
		}
	};
</script>