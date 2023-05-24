const inp = document.getElementById("inp")
const demo = document.getElementById("demo")
const demoo = document.getElementById("demoo")
const btn = document.getElementById("btn")
const rst = document.getElementById("rst")  
const list = document.getElementById("list")
const lists = document.getElementById("lists")
const btnIcon = document.getElementById("btnIcon")
const btnIcon2 = document.getElementById("btnIcon2")


function show(){
   
    if(!inp.value){
       demoo.innerHTML = "value mütləq olmalıdır"
       demoo.style.color = "red"
       demoo.style.fontSize = "20px"
    }else if(inp.value.length<4){
        demoo.innerHTML = "value ən az 3 simvoldan çox olmalıdır"
        demoo.style.color = "red"
       demoo.style.fontSize = "20px"
    }else if(inp.value){
        demoo.innerHTML = " "
        const listItem = document.createElement("li")
       listItem.classList.add("list-group-item" , "d-flex" , "justify-content-between" ,"align-items-center")

    const span = document.createElement("span")
    span.innerHTML = inp.value
    listItem.append(span)
 
    const div = document.createElement("div")
    const btnIcon = document.createElement("button")
    btnIcon.classList.add("btn", "btn-light" , "btn-sm")
    btnIcon.innerHTML = '<i class="fa-solid fa-check text-success" ></i>'
    btnIcon.style.marginRight = "2px"

    const btnIcon2 = document.createElement("button")
    btnIcon2.classList.add("btn", "btn-light" , "btn-sm")
    btnIcon2.innerHTML = '<i class="fa-solid fa-trash text-danger" ></i>'
    btnIcon2.style.marginRight = "1px"

    div.append(btnIcon,btnIcon2)
    listItem.append(div)
    list.append(listItem)
 
    btnIcon.addEventListener("click",btn1)
    function btn1(){
        this.parentElement.previousSibling.style.textDecoration = "line-through"
        this.parentElement.parentElement.classList.add("bg-success")

        this.remove()

    }
    btnIcon2.addEventListener("click", btn2)
    function btn2 (){
       this.parentElement.parentElement.remove()
    }

    inp.value= ""
    }
   

}

function clean(){
    list.remove()
    demo.classList.add("alert" , "alert-danger")
    demo.innerHTML = "List silindi"
     
}
function clickk(){
   inp.value = " "
}



