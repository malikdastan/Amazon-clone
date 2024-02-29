var postBtn = document.getElementById("post");
var getBtn = document.getElementById("get");
var deleteBtn = document.getElementById("delete");
var putBtn = document.getElementById("put");

postBtn.addEventListener("click", ()=>{
    console.log("posted");
    axios.post("https://crudcrud.com/api/e9d944fd8d4b4af4bc5c8d796fb9cbcb/sharpeners",{
        title:"Meet Doctor",
        completed:true,
        walkin: "appointment",
    }).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })
});

getBtn.addEventListener("click", ()=>{
    axios.post("https://crudcrud.com/api/e9d944fd8d4b4af4bc5c8d796fb9cbcb/sharpeners")
    .then((result)=>{
        console.log(result.data);
    }).catch((error)=>{
        console.log(error);
    })
});

putBtn.addEventListener("click", ()=>{
    console.log("posted");
    axios.post("https://crudcrud.com/api/e9d944fd8d4b4af4bc5c8d796fb9cbcb/sharpeners/65e018e472109f03e8c7f6b3",{
        title:"Meet Doctor",
        completed:true,
        walkin: "appointment over phone",
    }).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })
});

deleteBtn.addEventListener("click", ()=>{
    console.log("posted");
});

