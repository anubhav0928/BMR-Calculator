function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

    function weightConverter(valNum) {
        document.getElementById("outputStones1").value= valNum * 0.071429;
        
}




function BMI() {
    age= parseFloat(document.getElementById("age1").value);
    console.log(age)
    gender = document.getElementById("Gender1").value;
    console.log(gender)
    inches = document.getElementById("inches1").value;
    inches = parseFloat( inches)
    inchess=inches
    console.log(inchess)
    feets = document.getElementById("feets1").value;
    console.log(feets)
    feets = parseFloat(feets)
    feetss=feets*12;
    console.log(feetss)
        hieght = feetss + inchess
        console.log(hieght)
    wieght = document.getElementById("iPounds1").value;

    console.log(wieght)
    if (gender==='Male') {


if (document.getElementById("Sedentary1").checked) {
    var Act=parseFloat(document.getElementById("Sedentary1").value)
    console.log(Act)
    var BMR=parseFloat(66.47+(6.24*wieght)+(12.7*feetss)-(6.76*age));
  var bmio=(BMR.toFixed(0))
    var Calorie=parseInt(Act*bmio);
  
  } else if (document.getElementById("Light1").checked) {
    var Act=parseFloat(document.getElementById("Sedentary1").value)
    console.log(Act)
    var BMR=parseFloat(66.47+(6.24*wieght)+(12.7*feetss)-(6.76*age));
  var bmio=(BMR.toFixed(0))
    var Calorie=parseInt(Act*bmio);
   
  } else if (document.getElementById("Moderate1").checked) {
    var Act=parseFloat(document.getElementById("Sedentary1").value)
    console.log(Act)
    var BMR=parseFloat(66.47+(6.24*wieght)+(12.7*feetss)-(6.76*age));
  var bmio=(BMR.toFixed(0))
    var Calorie=parseInt(Act*bmio);
   
  }else if(document.getElementById("Active1").checked){
    var Act=parseFloat(document.getElementById("Sedentary1").value)
    console.log(Act)
    var BMR=parseFloat(66.47+(6.24*wieght)+(12.7*feetss)-(6.76*age));
  var bmio=(BMR.toFixed(0))
    var Calorie=parseInt(Act*bmio); 
  }
  



//BMR = 66 + ( 6.2 × weight in pounds ) + ( 12.7 × height in inches ) – ( 6.76 × age in years )
//10 x weight (kg) + 6.25 x height (cm) – 5 x age (years) + 5
    }
    else if(gender==="Female") {
      var Calorie
  
      if (document.getElementById("Sedentary1").checked) {
        var Act=parseFloat(document.getElementById("Light1").value)
        console.log(Act)
        var  BMR=parseFloat(655+(4.35*wieght)+(4.7*feetss)-(4.7*age));
        var bmio=(BMR.toFixed(0))
        console.log(bmio)
        Calorie=parseInt(Act*bmio);
      
      } 
      else if (document.getElementById("Light1").checked) {
        var Act=parseFloat(document.getElementById("Light1").value)
        console.log(Act)
        var  BMR=parseFloat(655+(4.35*wieght)+(4.7*feetss)-(4.7*age));
        var bmio=(BMR.toFixed(0))
        console.log(bmio)
        Calorie=parseInt(Act*bmio);
       
      } 
      else if (document.getElementById("Moderate1").checked) {
        var Act=parseFloat(document.getElementById("Light1").value)
        console.log(Act)
        var  BMR=parseFloat(655+(4.35*wieght)+(4.7*feetss)-(4.7*age));
        var bmio=(BMR.toFixed(0))
        console.log(bmio)
         Calorie=parseInt(Act*bmio);
       
      }
      else if(document.getElementById("Active1").checked){
        var Act=parseFloat(document.getElementById("Light1").value)
        console.log(Act)
        var  BMR=parseFloat(655+(4.35*wieght)+(4.7*feetss)-(4.7*age));
      var bmio=(BMR.toFixed(0))
      console.log(bmio)
         Calorie=parseInt(Act*bmio);
      }
    }
      document.getElementById("result11").innerHTML="Your BMR is " +" "+ bmio
    
      document.getElementById("result12").innerHTML="Your Calories needed are" +" "+ Calorie
      return false;
    }
  









  

   function BMI2(){

    
   age= parseInt(document.getElementById("age").value);
  console.log(age)
  gender = document.getElementById("Gender").value;
  console.log(gender)
   feets = parseInt(document.getElementById("feets").value);
  console.log(feets)
  feets = parseInt(feets)
 
  
  hieght = feets 
    
  var wieght = document.getElementById("iPounds").value;

  console.log(wieght)
  if (gender=="Male") {

   if (document.getElementById("Sedentary").checked) {
  var Act=parseFloat(document.getElementById("Sedentary").value)
  console.log(Act)
  var BMR=parseFloat((10*wieght)+(6.25*hieght)-(5*age)+5);
var bmio=(BMR.toFixed(0))
  var Calorie=Act*bmio;
  var cal=Calorie.toFixed(0)

} else if (document.getElementById("Light").checked) {
  var Act=parseFloat(document.getElementById("Light").value)
  console.log(Act)
  var BMR=parseFloat((10*wieght)+(6.25*hieght)-(5*age)+5);
var bmio=(BMR.toFixed(0))
  var Calorie=Act*bmio;
  var cal=Calorie.toFixed(0)
 
} else if (document.getElementById("Moderate").checked) {
  var Act=parseFloat(document.getElementById("Moderate").value)
  console.log(Act)
  var BMR=parseFloat((10*wieght)+(6.25*hieght)-(5*age)+5);
var bmio=(BMR.toFixed(0))
  var Calorie=Act*bmio;
  var cal=Calorie.toFixed(0)
 
}else if(document.getElementById("Active").checked){
  var Act=parseFloat(document.getElementById("Active").value)
  console.log(Act)
  var BMR=parseFloat((10*wieght)+(6.25*hieght)-(5*age)+5);
var bmio=(BMR.toFixed(0))
  var Calorie=Act*bmio;
  var cal=Calorie.toFixed(0)
  
}



//BMR = 66 + ( 6.2 × weight in pounds ) + ( 12.7 × height in inches ) – ( 6.76 × age in years )
//10 x weight (kg) + 6.25 x height (cm) – 5 x age (years) + 5
  } else if(gender=="Female"){
    
    if (document.getElementById("Sedentary").checked) {
      var Act=parseFloat(document.getElementById("Sedentary").value)
      console.log(Act)
    var BMR=parseFloat((10*wieght)+(6.25*hieght)-(5*age)-161);
    var bmio=(BMR.toFixed(0))
    console.log(bmio)
      var Calorie=Act*bmio;
      var cal=Calorie.toFixed(0)
    
    } else if (document.getElementById("Light").checked) {
      var Act=parseFloat(document.getElementById("Light").value)
      console.log(Act)
    var BMR=parseFloat((10*wieght)+(6.25*hieght)-(5*age)-161);
    var bmio=(BMR.toFixed(0))
    console.log(bmio)
      var Calorie=Act*bmio;
      var cal=Calorie.toFixed(0)
     
    } else if (document.getElementById("Moderate").checked) {
      var Act=parseFloat(document.getElementById("Moderate").value)
      console.log(Act)
    var BMR=parseFloat((10*wieght)+(6.25*hieght)-(5*age)-161);
    var bmio=(BMR.toFixed(0))
    console.log(bmio)
      var Calorie=Act*bmio;
      var cal=Calorie.toFixed(0)
     
    }else if(document.getElementById("Active").checked){
      var Act=parseFloat(document.getElementById("Active").value)
      console.log(Act)
    var BMR=parseFloat((10*wieght)+(6.25*hieght)-(5*age)-161);
    var bmio=(BMR.toFixed(0))
    console.log(bmio)
      var Calorie=Act*bmio;
      var cal=Calorie.toFixed(0)
    }
    

   
  }
  document.getElementById("result").innerHTML="Your BMR is " +" "+ bmio
  document.getElementById("result2").innerHTML="Your Calories needed are" +" "+ cal
  
    return false
}

function validateForm() {

  var a = document.getElementById("Gender").value

  if ( a== "") {
    alert("Gender must be filled out");
    return false;
  }


  var b= document.getElementById("age").value
  
  if ( b== "") {
    alert("age must be filled out");
    return false;
  }

  var c = document.getElementById("feets").value
  
  if (c == "") {
    alert("Hieght must be filled out");
    return false;
  }

  var d = document.getElementById("iPounds").value

  if (d === "") {
    alert("Wieght must be filled out");
    return false;
  }


  var activ = document.getElementsByName('activity1');
        var genValue = false;

        for(var i=0; i<activ.length;i++){
            if(activ[i].checked == true){
                genValue = true;    
            }
        }
        if(!genValue){
            alert("Please choose activity level");
            return false;
        }
}
  
function validateForm2() {

  var a = document.getElementById("Gender1").value

  if ( a== "") {
    alert("Gender must be filled out");
    return false;
  }


  var b=document.getElementById("age1").value
  console.log(b)
  if ( b== "") {
    alert("Age must be filled out");
    return false;
  }

  var c = document.getElementById("feets1").value

  if (c == "") {
    alert("Hieght must be filled out");
    return false;
  
  }
  var k = document.getElementById("inches1").value

  if (k == "") {
    alert("Inches must be filled out");
    return false;
  
  }

  var d = document.getElementById("iPounds1").value

  if (d == "") {
    alert(" Wieght must be filled out");
    return false;
  }

  var activ = document.getElementsByName('activity');
  var genValue = false;
  for(var i=0; i<activ.length;i++){
    if(activ[i].checked == true){
        genValue = true;    
    }
}
if(!genValue){
    alert("Please choose activity level");
    return false;
}
}






