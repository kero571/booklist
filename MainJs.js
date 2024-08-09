let look = document.querySelector("#look");
let parrent = document.querySelector(".parrent");
let lookChild = document.querySelector("#look div:first-of-type");
let form = document.querySelector("#form");
let BookTitle = document.querySelector("#BookTitle");
let Author = document.querySelector("#Author");
let iSBN = document.querySelector("#iSBN");
let sub = document.querySelector("#sub");
let list = document.querySelector("table tbody:first-of-type");
localStorage.clear();
function bodymoodnight(){
    if(lookChild.style.transform === "translateX(0px)"){
        lookChild.style.cssText = "transform: translateX(25px);background-color: black;";
        look.style.cssText = "background-color: white; border: 2px black solid;";
        parrent.style.cssText = "background-color: white;color: black;";
        sub.style.cssText = "background-color: black;color: white;";
    }else{
        lookChild.style.cssText = "transform: translateX(0px);background-color: white;";
        look.style.cssText = "background-color: black; border: 2px white solid;";
        parrent.style.cssText = "background-color: black;color: white;";
        sub.style.cssText = "background-color: white;color: black;font-weight:bold";
    }
}
lookChild.addEventListener('click',()=>{
    bodymoodnight();
})
let i = 1; 
function TackAndPrint(){
    let obj = {
        title:BookTitle.value,
        author:Author.value,
        isbn:iSBN.value,
    }
    //let dataList = document.querySelector("#del");
    let oBJ = JSON.stringify(obj);
    localStorage.setItem(i,oBJ);
    let buttone = document.createElement("button");
    buttone.style.cssText = "color: green;background-color: white;border: 0;";
    buttone.textContent = "X";
    let tr = document.createElement("tr");
    tr.setAttribute("id",`tr${i.toString()}`)
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    td1.textContent = BookTitle.value;
    td2.textContent = Author.value;
    td3.textContent = iSBN.value;
    td4.appendChild(buttone);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    list.appendChild(tr);
    buttone.addEventListener('click',function(){
        let i = confirm("are you sure");
        if(i === true){
            $(this).parent().parent().remove();
        }
    });
    i++;
    return true
}
form.onsubmit = (e)=>{
    TackAndPrint()
    e.preventDefault();
}