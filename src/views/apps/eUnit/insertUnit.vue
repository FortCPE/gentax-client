<template>
    <div>
        <form action="javascript:void(0)" @submit="unitSubmit()">
            <div class="vx-row">
                <div class="vx-col md:w-12/12 w-full mb-base">
                    <vx-card :title="$t('UnitName')" icon="InfoIcon">
						<b-field
						type=""
						message="">
							<b-input type="text"
							    v-model="unitName"
							    maxlength="30"
							    placeholder="กรุณากรอกชื่อหน่วย"
							    size="is-small">
							</b-input>
						</b-field>
                    </vx-card>
                </div>
                <div class="vx-col md:w-12/12 w-full mb-base">
                    <vx-card :title="$t('UnitDesc')" icon="InfoIcon">
						<b-field
						type=""
						message="">
							<b-input type="text"
							    v-model="unitDesc"
							    maxlength="30"
							    placeholder="กรุณากรอกรายละเอียดของหน่วย"
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
	export default{
		data(){
			return{
				unitName: "",
				unitDesc: "",
				alertMessage: "",
				alertPosition: "",
				alertType: "",
			}
		},
		methods:{
			unitSubmit(){
				if(this.unitName == "" || this.unitDesc == ""){
					this.alertMessage = "กรุณากรอกข้อมูลให้ครบค่ะ"
					this.alertPosition = "bottom-right"
					this.alertType = "danger"
					this.alert()
				}else if(this.unitName != "" && this.unitDesc != ""){
					this.$http.post('https://gservernodejs.herokuapp.com/api/unit/insert',{
						unit_name: this.unitName,
						unit_desc: this.unitDesc
					}).then((response) => {
					  if(response.data === "SUCCEDD|INSERTED"){
					  	this.alertMessage = "เพิ่มหน่วยสินค้า "+ this.unitName +" แล้วค่ะ"
						this.alertPosition = "bottom-right"
						this.alertType = "success"
					  }else if(response.data === "ERROR|DUPLICATED"){
					  	this.alertMessage = "ผิดพลาด, มีหน่วยสินค้า "+ this.unitName +" อยู่แล้วค่ะ"
						this.alertPosition = "bottom-right"
						this.alertType = "danger"
					  }else{
					  	this.alertMessage = "ไม่สามารถเพิ่มหน่วยสินค้า "+ this.unitName +" ได้ค่ะ"
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
            }
		}
	};
</script>