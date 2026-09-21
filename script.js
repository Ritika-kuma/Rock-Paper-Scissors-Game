//let elements = document.querySelectorAll("p");
//console.dir(elements);

//let element = document.querySelectorAll(".head");
//console.dir(element);

//let h2 = document.querySelector("h2")
//console.dir(h2.innerText);

//h2.innerText = h2.innerText + "  from apna college student";

//let el = document.querySelectorAll(".box");
//el[0].innerText = "unique value1";
//el[1].innerText = "unique value2";
//el[2].innerText = "unique value3";

//let div = document.querySelector("div");
//console.log(div);

 //let id = div.getAttribute("id");
 //console.log(id);

 //let para = document.querySelector("p");
 //console.log(para);

 //let element = para.getAttribute("#id");
 //console.log(element);


//let div = document.querySelector("div");
//console.log(div);

// let id = div.getAttribute("id");
//console.log(id);

//let name = div.getAttribute("name");
//console.log(name);

//let para = document.querySelector("p");
//console.log(para);

//let newatrr = para.setAttribute("class", "newclass");
//console.log(newatrr);

//let newbtn = document.createElement("button");
//newbtn.innerText = "click me";
//console.log("newbtn");

//let div = document.querySelector("div");
//div.after(newbtn);

//let para = document.querySelector("p");
//para.remove();

//let newbtn = document.createElement("button");
//newbtn.innerText = "click me!";
//newbtn.style.background = "red";
//newbtn.style.color = "white";

//console.log(newbtn);

//let body = document.querySelector("body");
//body.prepend(newbtn);

//let para = document.querySelector("p");
//para.classList.add("newclass");

//let btn1 = document.querySelector("#btn1");

//btn1.addEventListener("click", (evt) => {
//    console.log("button was clicked - handler1");
//});

//btn1.addEventListener("click", (evt) => {
 //   console.log("button was clicked - handler2");
//});

//const handler3 = () => {
//    console.log("button was clicked - handler3");
//}

//btn1.addEventListener("click",handler3);

//btn1.addEventListener("click", (evt) => {
//    console.log("button was clicked - handler4");
//});

//let div = document.querySelector("div");
//div.onmouseover = (e) => {
//    console.log(e);
//    console.log(e.type);
//    console.log(e.target);
//    console.log(e.clientX, e.clientY);
//};


//btn1.removeEventListener("click", handler3);


let modebtn = document.querySelector("#mode");
let currmode = "light";
let body = document.querySelector("body");

modebtn.addEventListener("click", () => {
    if (currmode === "light"){
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
});


