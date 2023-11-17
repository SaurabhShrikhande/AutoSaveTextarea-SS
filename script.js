const txt = document.getElementsByTagName("textarea")[0];
txt.value = localStorage.getItem("savedDate"); 

txt.addEventListener("input", abc)


function abc() {
    console.log("1");
    localStorage.setItem("savedDate" , txt.value); 
}

