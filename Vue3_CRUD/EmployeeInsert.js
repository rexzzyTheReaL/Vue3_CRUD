export default{
    props:{
    arr:Array
    },
    emits:['doInsert'],
    setup(props,{emit}) {
     const saveData = () => emit('doInsert')
     return{
         arr:props.arr,
         saveData
     }
    },
    template:`<span>資料新增&nbsp;<input style="width: 70px;margin-bottom: 10px" type="button" @click="saveData" value="新增"></span>
    <table>             
    <tr>
        <th>員編</th>
        <td><input v-model="arr[0].empNo"></td>
    </tr>
    <tr>
        <th>姓名</th>
        <td><input v-model="arr[0].name"></td>
    </tr>
    <tr>
        <th>分機</th>
        <td><input v-model="arr[0].tel"></td>
    </tr>                      
    </table>`
 }