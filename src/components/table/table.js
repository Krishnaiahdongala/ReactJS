import TableData from "./table-data"
import TableHeader from "./table-header"





const TableComponent=()=>{

    return(

        <table>
        <tr>
        <TableHeader/>
        </tr>
        <tr>
           <TableData/>
        </tr>
       </table>
         
    )
}

export default TableComponent