<template>
    <div class="list_main">
        <div class="list_path" >
           <h3>终端列表</h3>
        </div>

        <div style="background: #fff; padding: 24px 32px" v-loading="loading">
            <div style="margin-bottom:20px;text-align: left;">
                <el-button type="primary" icon="el-icon-plus" @click="handleAdd">新建</el-button>
                <el-button type="danger" icon="el-icon-close" @click="handleDel">删除</el-button>
                <el-button style="float:right" type="success" :loading="loadingSeen" @click="handleRefresh">刷新</el-button>
            </div>

            <el-table :data="tableData" border style="width=100%">
                <el-table-column fixed type="selection" width="55"></el-table-column>
                <el-table-column prop="date" label="日期" width="150"></el-table-column>
                <el-table-column prop="name" label="名称" width="150"></el-table-column>
                <el-table-column prop="mac" label="MAC地址" width="150"></el-table-column>
                <el-table-column prop="remark" label="备注"></el-table-column>
                <el-table-column prop="status" label="状态" width="100"></el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleItemDetails(scope.row)" type="text" size="small">查看</el-button>
                        <el-button @click="handleItemEdit(scope.row)" type="text" size="small">编辑</el-button>
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
                        :total=total>

                </el-pagination>
            </div>
        </div>
        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" >
                <el-form-item label="终端名称">
                    <el-input v-model="form.name"></el-input>
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
        form:{
             name: '',
             department: ''
         }
      }
    },
    created() {
        this.initData();
    },
    methods: {
       initData() {
           this.loading=true;
           this.$axios({
           url: "admin/count",
           method: "GET",
          }).then(res => {
              if(res.data.status=1){
                this.total=res.data.count;
                this.getDivList();
              }else{
                console.log(res.data.message);  
              }         
          })
          this.loading = false;  
       },
       getDivList() {
        this.$axios({
        url: "admin/all",
        method: "GET",
        params:{
              limit : this.limit,
              offset: this.offset
            }
        }).then(res => {
            if(res.data.status=1){
               this.tableData = [];
               const devList=res.data.data;
               devList.forEach(item => {
                   const tableItem = {
                      date: item.create_time,
					  name: item.user_name,
					  mac: item.admin,
                      remark: item.city,
                      status:"在线"
                    }
                    this.tableData.push(tableItem)
               });              
            }else{
                console.log(res.data.message);  
            }         
        })
       },
       handleAdd() {

       },
       handleDel() {
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
        console.log(`每页 ${val} 条`);
       },
       handleCurrentChange(val) {
         this.currentPage = val;
         this.offset = (val - 1)*this.limit;
         this.getDivList();
       },
       handleItemDetails(row) {
        this.$router.push('face_list')
       },
       handleItemEdit(row) {
         this.editVisible=true;
       },
       saveEdit() {
        this.editVisible = false;
       }
    }
}
</script>
<style scoped>
.list_path {
  padding: 16px 32px 0;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 16px;
}
</style>

