<template>
    <div>
        <div class="vx-row">
            <div class="vx-col md:w-4/4 w-full mb-base">
                <vx-card :title="$t('ManageBusiness')" icon="SettingsIcon">
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
                        aria-current-label="Current page"
                        :show-detail-icon="showDetailIcon"
                        detailed
                        detail-key="business_id"
                        ref="table">
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
                                        <template>
                                            <vs-button @click="toggle(props.row)" color="primary" type="relief" size="small">
                                                ดูเพิ่มเติม
                                            </vs-button>
                                            &nbsp;
                                            <vs-button @click="deleteBusiness(props.row.business_id)" color="danger" type="relief" size="small">
                                                ลบ
                                            </vs-button>
                                        </template>
                                    </span>
                                    <span class="th-font" v-else-if="column.field === 'business_name'">
                                        <b-input @blur="changeBusinessName(props.row.business_id, $event)" :value="props.row.business_name" placeholder="กรุณาแก้ไขข้อมูล" icon="pencil" size="is-small"/>
                                    </span>
                                    <span class="th-font" v-else-if="column.field === 'business_tax'">
                                        <b-input @blur="changeBusinessTax(props.row.business_id, $event)" :value="props.row.business_tax" placeholder="กรุณาแก้ไขข้อมูลเลขภาษี" icon="pencil" size="is-small"/>
                                    </span>
                                </b-table-column>
                            </template>
                        </template>
                        <template slot="detail" slot-scope="props">
                            <article class="media">
                                <div class="media-content">
                                    <div class="content">
                                        <b-field horizontal label="ที่อยู่บริษัท">
                                            <b-input type="textarea"
                                                maxlength="300"
                                                placeholder="กรุณากรอกรายละเอียดสินค้า"
                                                @blur="changeBusinessAddress(props.row.business_id, $event)" :value="props.row.business_address"
                                                size="is-small">
                                            </b-input>
                                        </b-field>
                                        <b-field horizontal label="ตัวอักษรย่อ">
                                            <b-input type="text" placeholder="กรุณากรอกตัวอักษรย่อ Invoice Number" size="is-small" @blur="changeBusinessInvoice(props.row.business_id, $event)" :value="props.row.business_invoice"/>
                                        </b-field>
                                    </div>
                                </div>
                            </article>
                        </template>
                    </b-table>
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
    import debounce from 'lodash/debounce'
	export default{
		data() {
            return {
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
                        field: 'business_tax',
                        label: 'หมายเลขผู้เสียภาษี',
                        searchable: true,
                    },
                    {
                        field: 'options',
                        label: 'ตัวเลือก',
                        searchable: false,
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
                businessFetching: true,
                currentBusinessName: "",
                currentBusinessTax: "",
                currentBusinessAddress: "",
				alertMessage: "",
				alertPosition: "",
				alertType: "",
                showDetailIcon: false
            }
        },
        methods: {
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
            changeBusinessName (value,event) {
            	this.$http.post(`https://gservernodejs.herokuapp.com/api/business/manage/name`,{
            		business_id: value,
            		business_name: event.target.value
            	}).then((response) => {
            		if(response.data === "SUCCEED|UPDATED"){
					  	this.alertMessage = "แก้ไขชื่อบริษัทแล้วค่ะ"
						this.alertPosition = "bottom-right"
						this.alertType = "success"
            			this.getBusinessAsyncData()
            			this.alert()
            		}
            	})
            },
            changeBusinessTax (value,event) {
                this.$http.post(`https://gservernodejs.herokuapp.com/api/business/manage/tax`,{
                    business_id: value,
                    business_tax: event.target.value
                }).then((response) => {
                    if(response.data === "SUCCEED|UPDATED"){
                        this.alertMessage = "แก้ไขข้อมูลบริษัทแล้วค่ะ"
                        this.alertPosition = "bottom-right"
                        this.alertType = "success"
                        this.getBusinessAsyncData()
                        this.alert()
                    }
                })
            },
            changeBusinessAddress (value,event) {
                this.$http.post(`https://gservernodejs.herokuapp.com/api/business/manage/address`,{
                    business_id: value,
                    business_address: event.target.value
                }).then((response) => {
                    if(response.data === "SUCCEED|UPDATED"){
                        this.alertMessage = "แก้ไขที่อยู่บริษัทแล้วค่ะ"
                        this.alertPosition = "bottom-right"
                        this.alertType = "success"
                        this.getBusinessAsyncData()
                        this.alert()
                    }
                })
            },
            changeBusinessInvoice (value,event) {
                this.$http.post(`https://gservernodejs.herokuapp.com/api/business/manage/invoice`,{
                    business_id: value,
                    business_invoice: event.target.value
                }).then((response) => {
                    if(response.data === "SUCCEED|UPDATED"){
                        this.alertMessage = "แก้ไขตัวอักษรย่อบริษัทแล้วค่ะ"
                        this.alertPosition = "bottom-right"
                        this.alertType = "success"
                        this.getBusinessAsyncData()
                        this.alert()
                    }
                })
            },
            deleteBusiness(value){
            	this.confirmCustomDelete(value);
            },
            alert() {
                this.$vs.notify({
		          title: "Gentax",
		          text: this.alertMessage,
                  color: this.alertType,
                  position: this.alertPosition
		      	})
            },
            confirmCustomDelete(value) {
                this.$buefy.dialog.confirm({
                    title: 'ยืนยันการลบสินค้า',
                    message: 'คุณมั่นใจว่าต้องการลบสินค้าชิ้นนี้, สินค้าจะไม่สามารถกู้คืนได้',
                    confirmText: 'ลบสินค้า',
                    cancelText: 'ย้อนกลับ',
                    type: 'is-danger',
                    hasIcon: true,
                    onConfirm: () => {
                    	this.$http.post(`https://gservernodejs.herokuapp.com/api/business/delete`,{
		            		business_id: value
		            	}).then((response) => {
		            		if(response.data === "SUCCEED|DELETED"){
							  	this.alertMessage = "ลบสินค้าแล้วค่ะ"
								this.alertPosition = "bottom-right"
								this.alertType = "success"
		            			this.getBusinessAsyncData()
		            			this.alert()
		            		}
		            	})
                    }
                })
            },
            toggle(row) {
                this.$refs.table.toggleDetails(row)
            }
        },
        mounted(){
        	this.getBusinessAsyncData()
        }
	};
</script>