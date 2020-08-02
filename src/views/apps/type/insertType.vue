<template>
    <form action="javascript:void(0)" @submit="typeSubmit()">
        <div class="vx-row">
            <div class="vx-col md:w-12/12 w-full mb-base">
                <vx-card :title="$t('TypeName')" icon="InfoIcon">
                    <b-field
						type=""
						message="">
							<b-input type="text"
							    v-model="typeName"
							    maxlength="30"
							    placeholder="กรุณากรอกชื่อประเภท"
							    size="is-small"
							    rounded>
							</b-input>
						</b-field>
                </vx-card>
            </div>
            <div class="vx-col md:w-12/12 w-full mb-base">
                <vx-card :title="$t('TypeDesc')" icon="InfoIcon">
                    <b-field
						type=""
						message="">
							<b-input type="text"
							    v-model="typeDesc"
							    maxlength="100"
							    placeholder="กรุณากรอกรายละเอียดประเภทสินค้า"
							    size="is-small"
							    rounded>
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
</template>
<script>
	export default{
		data(){
			return{
				typeName: "",
				typeDesc: "",
				alertMessage: "",
				alertPosition: "",
				alertType: "",
			}
		},
		methods:{
			typeSubmit(){
				if(this.typeName == "" || this.typeDesc == ""){
					this.alertMessage = "กรุณากรอกข้อมูลให้ครบค่ะ"
					this.alertPosition = "bottom-right"
					this.alertType = "danger"
					this.alert()
				}else if(this.typeName != "" && this.typeDesc != ""){
					this.$http.post('https://gservernodejs.herokuapp.com/api/type/insert',{
						type_name: this.typeName,
						type_desc: this.typeDesc
					}).then((response) => {
					  if(response.data === "SUCCEDD|INSERTED"){
					  	this.alertMessage = "เพิ่มประเภทสินค้า "+ this.typeName +" แล้วค่ะ"
						this.alertPosition = "bottom-right"
						this.alertType = "success"
					  }else if(response.data === "ERROR|DUPLICATED"){
					  	this.alertMessage = "ผิดพลาด, มีประเภทสินค้า "+ this.typeName +" อยู่แล้วค่ะ"
						this.alertPosition = "bottom-right"
						this.alertType = "danger"
					  }else{
					  	this.alertMessage = "ไม่สามารถเพิ่มประเภทสินค้า "+ this.typeName +" ได้ค่ะ"
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