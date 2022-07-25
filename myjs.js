var myString = "Welcome to the codepen of Int3cn0.";
var myArray = myString.split("");
var loopTimer;

function looper() {
  if(myArray.length > 0){
    document.getElementById("typing-text").innerHTML += myArray.shift();
  } else {
    clearTimeout(loopTimer);
  }
  loopTimer = setTimeout('looper()', 100);
}
looper();