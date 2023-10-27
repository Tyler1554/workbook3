function date(){
    let input= document.getElementById("selectDate");
    let d = new Date(input.value + "T00:00:00.000Z");
    let output= document.getElementById("dateOutput");
    output.innerText=(d.toString()); 
}

