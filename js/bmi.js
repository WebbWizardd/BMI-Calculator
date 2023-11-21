function calculate(){
    let age = parseFloat(document.getElementById("age").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let newHeight = parseFloat((height/100)*(height/100));
    let bmi;
    bmi = weight/newHeight;
    if(weight < 0 || height < 0 || age < 0){
        alert("Please Enter a Valid Input");
        document.getElementById("ourForm").reset();
    }
    else{
    document.getElementById("result").innerHTML = bmi.toFixed(2)+" kg/m<sup>2</sup>";
    if(bmi >= 18.5 && bmi <= 25){
        document.getElementById("result").style.color = "green";    
    }

    else if(bmi < 16){
        document.getElementById("result").style.color = "red";   
    }
    else if(bmi >=16 && bmi < 18.5){
        document.getElementById("result").style.color = "orange";   
    }
    else if(bmi > 25){
        document.getElementById("result").style.color = "red";   
    }
    }
}

function resetAll(){
    document.getElementById("result").innerHTML = " ";
}