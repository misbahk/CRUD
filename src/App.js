import React, { useState } from 'react'
import { Button , Table} from 'react-bootstrap';
import googleicon from './googleicon.png'


function App() {

const [column , setcolumn] = useState(['Dropbox','Google Drive','Sales Force','Box'])
const [row , setrow] = useState(['Product Description','anytext','anytext','anytext','dummytext'])
const [vendor ,setvendor] = useState('')
const [html , sethtml] = useState([])
function vendorChange (e) {
setvendor(e.target.value)
}

function addVendor(){
setcolumn(column.concat(vendor))
}

function clickDelete(data){
let array = [...column]
let index = array.indexOf(data)
array.splice(index, 1)
setcolumn(array)
}

function clickDeleteRow(data){
let array = [...row]
let index = array.indexOf(data)
array.splice(index, 1)
// setsirstrowh(array)
setrow([])
}
function addRow (){
// setrow(row.concat('customized'))
sethtml(html.concat(<tr><td><center>Funding History
<span onClick={()=>deleteRow('GGGG')} style={{cursor:"pointer"}}>
<i style={{cursor:"pointer"}} class="fa fa-close ml-3"></i>

</span>
</center>
</td>
<td><center>Lorem Ipsum has been the industry's standard dummy text nown type specimen book. It has survived not only </center></td>
<td><center>ever since the 1500s when an unk</center></td>
<td><center> printer took a galley of type and scrambled it to make a</center></td>
<td><center>five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</center></td></tr>))

}
function deleteRow (data){
sethtml([])
}
return (
<div>


<Table striped bordered hover responsive>
<thead>
<th><center><span className="mr-3">ADD CRITERIA </span>
<Button onClick={addRow}>Add Row
<i class="fa fa-plus ml-3"></i></Button>
</center>
</th>

<tr>
<th scope="col" style={{color:"turquoise"}}>
<center>
<input placeholder="Enter vendor name" onChange={vendorChange} type="text"/>

<Button type="button" onClick={addVendor} value="Add">ADD VENDOR
<i class="lni lni-circle-plus"></i></Button>
</center>
</th>

{column.map((data)=>(
<th scope="col">
<center>
<img src={googleicon} alt="imageee"
style={{width:"6rem", height:"6rem"}}
/></center><center>
<span>{data}</span>
<span style={{cursor:"pointer"}}
onClick={()=>clickDelete(data)}><i style={{color:"red"}} class="fa fa-times ml-3"></i></span></center></th>
))}

</tr>
</thead>
<tbody>
<tr>

{row.map((data)=>(
<td><center>{data}<span style={{cursor:"pointer"}}
onClick={()=>clickDeleteRow(data)}><i class="fa fa-times ml-3"></i></span></center></td>


))}
</tr>

{html}
</tbody>
</Table>

</div>
);
}

export default App;