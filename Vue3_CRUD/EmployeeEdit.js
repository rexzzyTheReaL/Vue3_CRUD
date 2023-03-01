export default{
   props:{
   arr:Array
   },
   emits:['doSave','doCloseEdit'],
   setup(props,{emit}) {
    const saveData = () => emit('doSave')
    const closeEdit = () => emit('doCloseEdit')
    return{
        arr:props.arr,
        saveData,
        closeEdit
    }
   },
   template:`
   <span>資料修改</span>
   <div class="border pt-2" style="padding:10px;">
                <div class="row mb-2">
                    <label class="col-sm-2 col-form-label">電腦編號</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="arr[0].empNo" disabled>
                    </div>
                </div>
                <div class="row mb-2">
                    <label class="col-sm-2 col-form-label">姓名</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="arr[0].name">
                    </div>
                </div>
                <div class="row mb-2">
                    <label class="col-sm-2 col-form-label">分機</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="arr[0].tel">
                    </div>
                </div>
                <div class="mb-2 text-end">                     
                    <button type="button" class="btn btn-success" @click="saveData">儲存</button>&nbsp;
                    <button type="button" class="btn btn-danger" @click="closeEdit">取消</button>
                </div>
    </div>`
}