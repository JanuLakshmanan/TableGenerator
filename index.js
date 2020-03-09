 const name=  document.getElementById("name");
 const email=  document.getElementById("email");
let id=1;
let currentid=null;
var add=document.getElementById("cu-action");
array=[];
function readFormData(){
if(currentid)
{
    array=array.map((obj)=>{
        if(obj.id==currentid){
            obj.id=currentid;
            obj.name=name.value;
            obj.email= email.value;       
        }
        return obj;   
 } );
update(null,'Add');
}
else{
    var obj = {};
    obj.id=id++;
    obj.name = name.value;
    obj.email = email.value;
    array.push(obj);
}
updateform();
}
function resetForm() {
    name.value = "";
    email.value = "";
}
function update(id,text){
    currentid=id;
    document.getElementById("cu-action").innerHTML=text;
}
function onEdit(edit) {
    const object=array.find((obj)=>obj.id===edit);
        if(object)
    {
        name.value = object.name;
        email.value = object.email;
        console.log(name.value);
        update(edit,'update'); 
    } 
  
    }

function updateform(){
    let rows='';
    table=document.getElementById("nameList");
    array.forEach((obj)=>{
    const tr=`<tr>
    <td>${obj.id}</td>
    <td>${obj.name}</td>
    <td>${obj.email}</td>
    <td><a href="javascript:void(0)" onClick="onEdit(${obj.id})">Edit</a>
                        <a href="javascript:void(0)" onClick="onDelete(${obj.id})">Delete</a></td>
    </tr> `;
    rows+= tr;
    });
    table.innerHTML=rows;
    resetForm();
}
function onDelete(id)
{
    if (confirm('Are you sure to delete this record ?')) {
        console.log(id);
        array=array.filter(function(obj){
            if(obj.id!=id){
            return array;
        }}); 
        updateform();
        
    }
}
add.addEventListener("click",readFormData);





