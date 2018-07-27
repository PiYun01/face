<template>
    <div class="list_main">
        <div class="breadcrumb-div" >
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/device_list' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>终端列表</el-breadcrumb-item>
                <el-breadcrumb-item>人脸库列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div style="background: #fff; padding: 24px 32px" v-loading="loading">
            <div style="margin-bottom:20px;text-align: left;">
                <el-button type="primary" icon="el-icon-plus" @click="handleAdd">新建</el-button>
                <el-button type="danger" icon="el-icon-close" @click="handleBatchDel">批量删除</el-button>
                <el-button style="float:right" type="success" :loading="loadingSeen" @click="handleRefresh">刷新</el-button>
            </div>

            <el-table :data="tableData" border style="width=100%">
                <el-table-column fixed type="selection" width="55"></el-table-column>
                <el-table-column label="照片" width="120">
                    <template slot-scope="scope">
                        <div class="face-img-content">
                            <img :src="scope.row.faceImgSrc" class="face-img"/>
                        </div>
                        
                    </template>
                </el-table-column>
                <el-table-column prop="faceLibraryName" label="库名" width="150"></el-table-column>
                <el-table-column prop="faceLibraryID" label="face_id" width="150"></el-table-column>
                <el-table-column prop="personName" label="姓名" width="150"></el-table-column>
                <el-table-column prop="idnumber" label="身份证" width="200"></el-table-column>
                <el-table-column prop="phoneNumber" label="手机号" width="200"></el-table-column>
                <el-table-column prop="remark" label="备注"></el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleItemDel(scope.$index,scope.row)" type="text" size="small">删除</el-button>
                        <el-button @click="handleItemEdit(scope.$index,scope.row)" type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <div style="margin-top:20px;text-align:right">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="limit"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total">

                </el-pagination>
            </div>
        </div>
        <!-- 编辑弹出框 -->
        <el-dialog title="修改人员信息" :visible.sync="editVisible">
            <el-form :model="selectTable" >
                <el-form-item label="人员名称" label-width="100px">
                    <el-input v-model="selectTable.personName"></el-input>
                </el-form-item>
                <el-form-item label="身份证" label-width="100px">
                    <el-input v-model="selectTable.idnumber"></el-input>
                </el-form-item>
                <el-form-item label="手机号" label-width="100px">
                    <el-input v-model="selectTable.phoneNumber"></el-input>
                </el-form-item>
                 <el-form-item label="备注" label-width="100px">
                    <el-input v-model="selectTable.remark"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
      return {
        loading:true,
        loadingSeen:false,
        editVisible:false,
        currentPage:1,
        total:0,
        offset: 0,
        limit: 20,
        tableData:[],
        selectTable:{},
      }
    },
    created() {
        this.initData();
    },
    methods: {
       initData() {
           this.loading=true;
           this.$axios({
           url: "bos/orders/count",
           method: "GET",
          }).then(res => {
              if(res.data.status=1){
                this.total=res.data.count;
                this.getFaceList();
              }else{
                this.loading = false;
                console.log(res.data.message);  
              }         
          })   
       },
       getFaceList() {
           this.$axios({
            url: "bos/orders",
            method: "GET",
            params:{
              limit : this.limit,
              offset: this.offset
            }
          }).then(res => {
            const faceList=res.data;
             if(res.data.status=1){
               this.tableData = [];
               faceList.forEach(item => {
                   const tableItem = {
                      faceLibraryID: item.id,
					  faceLibraryName: item.restaurant_name,
					  personName: item._id,
                      phoneNumber: item.order_time,
                      idnumber:item.address_id,
                      faceImgSrc:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg",
                    }
                    this.tableData.push(tableItem)
               });              
            }else{
                console.log(res.data.message);  
            }    
          });
           this.loading = false;          
       },
       handleAdd() {
           this.$router.push('add_face')
       },
       handleBatchDel() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            this.$message({
            type: 'success',
            message: '删除成功!'
            })
        }).catch(() => {
            this.$message({
            type: 'info',
            message: '已取消删除'
            })
        })
       },
       handleRefresh() {
           this.loadingSeen=true;
           setTimeout(() => {
               this.loadingSeen=false;
           }, 2000);
       },
       handleSizeChange(val) {
        this.currentPage=1;   
        this.limit=val;
        this.offset = (val - 1)*this.limit;
        this.getFaceList();
       },
       handleCurrentChange(val) {
        this.currentPage = val;
        this.offset = (val - 1)*this.limit;
        this.getFaceList();
       },
       handleItemDel(index,row) {
        this.$message({
            type:'success',
            message:'删除成功'
        });
        this.tableData.splice(index,1);
       },
       handleItemEdit(index,row) {
         this.editVisible=true;
         this.selectTable=row;
       },
       saveEdit() {
        this.editVisible = false;
       }
    }
}
</script>
<style scoped>
.face-img-content {
  width: 80px;
  height: 80px;
}
.face-img-content .face-img {
  max-width: 100%;
  max-height: 100%;
  display: block;
}
</style>

