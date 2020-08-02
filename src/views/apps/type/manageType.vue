<template>
    <div>
        <form action="javascript:void(0)" @submit="typeSubmit()">
            <div class="vx-row">
                <div class="vx-col md:w-12/12 w-full mb-base">
                    <vx-card :title="$t('ManageType')" icon="AlertTriangleIcon">
                        <b-table
                            :data="typeData"
                            :loading="typeFetching"
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
                                                <vs-button @click="deleteType(props.row.type_id)" color="danger" type="relief" size="small">
                                                    ลบประเภท
                                                </vs-button>
                                            </template>
                                        </span>
                                        <span class="th-font" v-else-if="column.field === 'type_name'">
                                            <b-input @blur="changeTypeName(props.row.type_id, $event)" :value="props.row.type_name" placeholder="กรุณาแก้ไขข้อมูล" icon="pencil" size="is-small"/>
                                        </span>
                                        <span class="th-font" v-else-if="column.field === 'type_desc'">
                                            <b-input @blur="changeTypeDesc(props.row.type_id, $event)" :value="props.row.type_desc" placeholder="กรุณาแก้ไขข้อมูล" icon="book-open-variant" size="is-small"/>
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
                        field: 'type_name',
                        label: 'ชื่อประเภท',
                        searchable: true,
                    },
                    {
                        field: 'type_desc',
                        label: 'รายละเอียดประเภท',
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
				typeData: [],
                typeFetching: true,
                currentTypeName: "",
                currentTypeDesc: "",
				alertMessage: "",
				alertPosition: "",
				alertType: "",
            }
        },
        methods: {
        	getTypeAsyncData () {
                this.typeFetching = true
                this.$http.get(`https://gservernodejs.herokuapp.com/api/type/all`)
                    .then(({ data }) => {
                        this.typeData = []
                        if(data !== "ERROR|EMPTYINFO"){
                        	data.forEach((item) => this.typeData.push(item))
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
            changeTypeName (value,event) {
            	this.$http.post(`https://gservernodejs.herokuapp.com/api/type/manage/name`,{
            		type_id: value,
            		type_name: event.target.value
            	}).then((response) => {
            		if(response.data === "SUCCEED|UPDATED"){
					  	this.alertMessage = "แก้ไขชื่อประเภทแล้วค่ะ"
						this.alertPosition = "bottom-right"
						this.alertType = "success"
            			this.getTypeAsyncData()
            			this.alert()
            		}
            	})
            },
            changeTypeDesc (value,event) {
            	this.$http.post(`https://gservernodejs.herokuapp.com/api/type/manage/desc`,{
            		type_id: value,
            		type_desc: event.target.value
            	}).then((response) => {
            		if(response.data === "SUCCEED|UPDATED"){
					  	this.alertMessage = "แก้ไขรายละเอียดประเภทแล้วค่ะ"
						this.alertPosition = "bottom-right"
						this.alertType = "success"
            			this.getTypeAsyncData()
            			this.alert()
            		}
            	})
            },
            deleteType(value){
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
                    title: 'ยืนยันการลบประเภทสินค้า',
                    message: 'คุณมั่นใจว่าต้องการลบประเภทนี้, ข้อมูลจะไม่สามารถกู้คืนได้',
                    confirmText: 'ยืนยัน',
                    cancelText: 'ย้อนกลับ',
                    type: 'is-danger',
                    hasIcon: true,
                    onConfirm: () => {
                    	this.$http.post(`https://gservernodejs.herokuapp.com/api/type/delete`,{
		            		type_id: value
		            	}).then((response) => {
		            		if(response.data === "SUCCEED|DELETED"){
							  	this.alertMessage = "ลบประเภทสินค้าแล้วค่ะ"
								this.alertPosition = "bottom-right"
								this.alertType = "success"
		            			this.getTypeAsyncData()
		            			this.alert()
		            		}
		            	})
                    }
                })
            }
        },
        mounted(){
        	this.getTypeAsyncData()
        }
	};
</script>