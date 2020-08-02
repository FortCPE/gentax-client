<template>
    <div>
        <form action="javascript:void(0)" @submit="stockSubmit()">
            <div class="vx-row">
                <div class="vx-col md:w-12/12 w-full mb-base">
                    <vx-card :title="$t('ManageUnit')" icon="AlertTriangleIcon">
                        <b-table
                            :data="unitData"
                            :loading="unitFetching"
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
                                            <template>
                                                <vs-button @click="deleteUnit(props.row.unit_id)" color="danger" type="relief" size="small">
                                                    ลบหน่วย
                                                </vs-button>
                                            </template>
                                        </span>
                                        <span class="th-font" v-else-if="column.field === 'unit_name'">
                                            <b-input @blur="changeUnitName(props.row.unit_id, $event)" :value="props.row.unit_name" placeholder="กรุณาแก้ไขข้อมูล" icon="pencil" size="is-small"/>
                                        </span>
                                        <span class="th-font" v-else-if="column.field === 'unit_desc'">
                                            <b-input @blur="changeUnitDesc(props.row.unit_id, $event)" :value="props.row.unit_desc" placeholder="กรุณาแก้ไขข้อมูล" icon="book-open-variant" size="is-small"/>
                                        </span>
                                    </b-table-column>
                                </template>
                            </template>
                        </b-table>
                    </vx-card>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
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
                        field: 'unit_name',
                        label: 'ชื่อหน่วย',
                        searchable: true,
                    },
                    {
                        field: 'unit_desc',
                        label: 'รายละเอียดหน่วย',
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
				unitData: [],
                unitFetching: true,
                currentUnitName: "",
                currentUnitDesc: "",
				alertMessage: "",
				alertPosition: "",
				alertType: "",
            }
        },
        methods: {
        	getUnitAsyncData () {
                this.unitFetching = true
                this.$http.get(`https://gservernodejs.herokuapp.com/api/unit/all`)
                    .then(({ data }) => {
                        this.unitData = []
                        if(data !== "ERROR|EMPTYINFO"){
                        	data.forEach((item) => this.unitData.push(item))
                        }
                    })
                    .catch((error) => {
                        this.unitData = []
                        throw error
                    })
                    .finally(() => {
                        this.unitFetching = false
                    })
            },
            changeUnitName (value,event) {
            	this.$http.post(`https://gservernodejs.herokuapp.com/api/unit/manage/name`,{
            		unit_id: value,
            		unit_name: event.target.value
            	}).then((response) => {
            		if(response.data === "SUCCEED|UPDATED"){
					  	this.alertMessage = "แก้ไขชื่อหน่วยแล้วค่ะ"
						this.alertPosition = "bottom-right"
						this.alertType = "success"
            			this.getUnitAsyncData()
            			this.alert()
            		}
            	})
            },
            changeUnitDesc (value,event) {
            	this.$http.post(`https://gservernodejs.herokuapp.com/api/unit/manage/desc`,{
            		unit_id: value,
            		unit_desc: event.target.value
            	}).then((response) => {
            		if(response.data === "SUCCEED|UPDATED"){
					  	this.alertMessage = "แก้ไขรายละเอียดหน่วยแล้วค่ะ"
						this.alertPosition = "bottom-right"
						this.alertType = "success"
            			this.getUnitAsyncData()
            			this.alert()
            		}
            	})
            },
            deleteUnit(value){
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
                    title: 'ยืนยันการลบหน่วยสินค้า',
                    message: 'คุณมั่นใจว่าต้องการลบหน่วยสินค้านี้, ข้อมูลจะไม่สามารถกู้คืนได้',
                    confirmText: 'ลบหน่วย',
                    cancelText: 'ย้อนกลับ',
                    type: 'is-danger',
                    hasIcon: true,
                    onConfirm: () => {
                    	this.$http.post(`https://gservernodejs.herokuapp.com/api/unit/delete`,{
		            		unit_id: value
		            	}).then((response) => {
		            		if(response.data === "SUCCEED|DELETED"){
							  	this.alertMessage = "ลบหน่วยสินค้าแล้วค่ะ"
								this.alertPosition = "bottom-right"
								this.alertType = "success"
		            			this.getUnitAsyncData()
		            			this.alert()
		            		}
		            	})
                    }
                })
            }
        },
        mounted(){
        	this.getUnitAsyncData()
        }
	};
</script>