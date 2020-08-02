<template>
    <div>
        <form action="javascript:void(0)" @submit="stockSubmit()">
            <div class="vx-row">
                <div class="vx-col md:w-12/12 w-full mb-base">
                    <vx-card :title="$t('ManageStock')" icon="AlertTriangleIcon">
                        <b-table
                            :data="stockData"
                            :loading="stockFetching"
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
                            detail-key="stock_id"
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
                                            </template>
                                        </span>
                                        <span class="th-font" v-else-if="column.field === 'stock_name'">
                                            <b-input @blur="changeStockName(props.row.stock_id, $event)" :value="props.row.stock_name" placeholder="กรุณาแก้ไขข้อมูล" icon="pencil" size="is-small"/>
                                        </span>
                                        <span class="th-font" v-else-if="column.field === 'stock_type'">
                                            <b-autocomplete
                                                rounded
                                                :data="typeData"
                                                placeholder="กรุณากรอกประเภทสินค้า"
                                                field="type_name"
                                                icon="magnify"
                                                :loading="typeFetching"
                                                :value="props.row.type_name"
                                                @typing="getTypeAsyncData"
                                                @select="changeStockType(props.row.stock_id, $event)"
                                                size="is-small">

                                                <template slot-scope="props">
                                                    <div class="media">
                                                        <div class="media-content">
                                                            {{ props.option.type_name }}
                                                        </div>
                                                    </div>
                                                </template>
                                            </b-autocomplete>
                                        </span>
                                        <span class="th-font" v-else-if="column.field === 'stock_unit'">
                                            <b-autocomplete
                                                rounded
                                                :data="unitData"
                                                placeholder="กรุณากรอกหน่วยสินค้า"
                                                field="unit_name"
                                                icon="magnify"
                                                :loading="unitFetching"
                                                :value="props.row.unit_name"
                                                @typing="getUnitAsyncData"
                                                @select="changeStockUnit(props.row.stock_id, $event)"
                                                size="is-small">

                                                <template slot-scope="props">
                                                    <div class="media">
                                                        <div class="media-content">
                                                            {{ props.option.unit_name }}
                                                        </div>
                                                    </div>
                                                </template>
                                            </b-autocomplete>
                                        </span>
                                    </b-table-column>
                                </template>
                            </template>
                            <template slot="detail" slot-scope="props">
                                <article class="media">
                                    <div class="media-content">
                                        <div class="content">
                                            <b-field horizontal label="ราคาสินค้า">
                                                <b-input step="any" type="number" @blur="changeStockPrice(props.row.stock_id, $event)" :value="props.row.stock_price" placeholder="กรุณาแก้ไขข้อมูล" icon="pencil" size="is-small"/>
                                            </b-field>
                                            <b-field horizontal label="รายละเอียดสินค้า">
                                                <b-input type="textarea"
                                                    maxlength="300"
                                                    placeholder="กรุณากรอกรายละเอียดสินค้า"
                                                    @blur="changeStockDesc(props.row.stock_id, $event)" :value="props.row.stock_desc"
                                                    size="is-small">
                                                </b-input>
                                            </b-field>
                                        </div>
                                    </div>
                                </article>
                            </template>
                        </b-table>
                    </vx-card>
                </div>
            </div>
        </form>
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
                        field: 'stock_name',
                        label: 'ชื่อสินค้า',
                        searchable: true,
                    },
                    {
                        field: 'stock_type',
                        label: 'ประเภทสินค้า',
                        searchable: true,
                    },
                    {
                        field: 'stock_unit',
                        label: 'หน่วยสินค้า',
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
				stockData: [],
                stockFetching: true,
                currentStockName: "",
                currentStockType: "",
                currentStockUnit: "",
                currentStockPrice: "",
                currentStockDesc: "",
                typeData: [],
                typeFetching: false,
                unitData: [],
                unitFetching: false,
				alertMessage: "",
				alertPosition: "",
				alertType: "",
                showDetailIcon: false
            }
        },
        methods: {
        	getStockAsyncData () {
                this.stockData = []
                this.stockFetching = true
                this.$http.get(`https://gservernodejs.herokuapp.com/api/stock/all`)
                    .then(({ data }) => {
                        this.stockData = []
                        if(data !== "ERROR|EMPTYINFO"){
                        	data.forEach((item) => this.stockData.push(item))
                        }
                    })
                    .catch((error) => {
                        this.stockData = []
                        throw error
                    })
                    .finally(() => {
                        this.stockFetching = false
                    })
            },
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
                            var noitem = {unit_name: "ไม่พบรายการหน่วยสินค้านี้ค่ะ"};
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
            changeStockName (value,event) {
            	this.$http.post(`https://gservernodejs.herokuapp.com/api/stock/manage/name`,{
            		stock_id: value,
            		stock_name: event.target.value
            	}).then((response) => {
            		if(response.data === "SUCCEED|UPDATED"){
					  	this.alertMessage = "แก้ไขชื่อสินค้าแล้วค่ะ"
						this.alertPosition = "bottom-right"
						this.alertType = "success"
            			this.getStockAsyncData()
            			this.alert()
            		}
            	})
            },
            changeStockType (value,event) {
                this.$http.post(`https://gservernodejs.herokuapp.com/api/stock/manage/type`,{
                    stock_id: value,
                    stock_type: event.type_id
                }).then((response) => {
                    if(response.data === "SUCCEED|UPDATED"){
                        this.alertMessage = "แก้ไขประเภทสินค้าแล้วค่ะ"
                        this.alertPosition = "bottom-right"
                        this.alertType = "success"
                        this.getStockAsyncData()
                    }else if(response.data === "ERROR|TYPE_404"){
                        this.alertMessage = "ผิดพลาด, ไม่พบข้อมูลประเภทสินค้านี้ค่ะ"
                        this.alertPosition = "bottom-right"
                        this.alertType = "danger"
                    }else if(response.data === "ERROR|STOCK_404"){
                        this.alertMessage = "ผิดพลาด, ไม่พบข้อมูลสินค้านี้ค่ะ"
                        this.alertPosition = "bottom-right"
                        this.alertType = "danger"
                    }else{
                        this.alertMessage = "ผิดพลาด, กรุณาติดต่อแอดมินค่ะ"
                        this.alertPosition = "bottom-right"
                        this.alertType = "danger"
                    }
                    this.alert()
                })
            },
            changeStockUnit (value,event) {
                if(event.unit_name == "ไม่พบรายการหน่วยสินค้านี้ค่ะ"){
                    this.alertMessage = "ผิดพลาด, กรุณาเลือกหน่วยสินค้าด้วยค่ะ"
                    this.alertPosition = "bottom-right"
                    this.alertType = "danger"
                    this.alert()
                }else{
                    this.$http.post(`https://gservernodejs.herokuapp.com/api/stock/manage/unit`,{
                        stock_id: value,
                        stock_unit: event.unit_id
                    }).then((response) => {
                        if(response.data === "SUCCEED|UPDATED"){
                            this.alertMessage = "แก้ไขหน่วยสินค้าแล้วค่ะ"
                            this.alertPosition = "bottom-right"
                            this.alertType = "success"
                        }else if(response.data === "ERROR|UNIT_404"){
                            this.alertMessage = "ผิดพลาด, ไม่พบข้อมูลหน่วยสินค้านี้ค่ะ"
                            this.alertPosition = "bottom-right"
                            this.alertType = "danger"
                        }else if(response.data === "ERROR|STOCK_404"){
                            this.alertMessage = "ผิดพลาด, ไม่พบข้อมูลสินค้านี้ค่ะ"
                            this.alertPosition = "bottom-right"
                            this.alertType = "danger"
                        }else{
                            this.alertMessage = "ผิดพลาด, กรุณาติดต่อแอดมินค่ะ"
                            this.alertPosition = "bottom-right"
                            this.alertType = "danger"
                        }
                        this.alert()
                        this.getStockAsyncData()
                    })
                }
            },
            changeStockPrice (value,event) {
                this.$http.post(`https://gservernodejs.herokuapp.com/api/stock/manage/price`,{
                    stock_id: value,
                    stock_price: event.target.value
                }).then((response) => {
                    if(response.data === "SUCCEED|UPDATED"){
                        this.alertMessage = "แก้ไขราคาสินค้าแล้วค่ะ"
                        this.alertPosition = "bottom-right"
                        this.alertType = "success"
                        this.getStockAsyncData()
                        this.alert()
                    }
                })
            },
            changeStockDesc (value,event) {
                this.$http.post(`https://gservernodejs.herokuapp.com/api/stock/manage/desc`,{
                    stock_id: value,
                    stock_desc: event.target.value
                }).then((response) => {
                    if(response.data === "SUCCEED|UPDATED"){
                        this.alertMessage = "แก้ไขรายละเอียดสินค้าแล้วค่ะ"
                        this.alertPosition = "bottom-right"
                        this.alertType = "success"
                        this.getStockAsyncData()
                        this.alert()
                    }
                })
            },
            deleteStock(value){
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
                    type: 'danger',
                    hasIcon: true,
                    onConfirm: () => {
                    	this.$http.post(`https://gservernodejs.herokuapp.com/api/stock/delete`,{
		            		stock_id: value
		            	}).then((response) => {
		            		if(response.data === "SUCCEED|DELETED"){
							  	this.alertMessage = "ลบสินค้าแล้วค่ะ"
								this.alertPosition = "bottom-right"
								this.alertType = "success"
		            			this.getStockAsyncData()
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
        	this.getStockAsyncData()
        }
	};
</script>