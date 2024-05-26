function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}


//  Kontaktformular: Senden-Button erst nach 10 Sekunden erlauben
setTimeout (function(){
  document.getElementById('absenden').disabled = null;
},10000);

var countdownNum = 10;
incTimer();

function incTimer(){
setTimeout (function(){
  if(countdownNum != 0){
    countdownNum--;
    document.getElementById('absenden').innerHTML = countdownNum ;
    incTimer();
  } else {
      document.getElementById('absenden').innerHTML = 'Absenden';
  }
},1000);
}