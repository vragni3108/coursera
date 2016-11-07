
(function(){

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim","hello"];


for (i=0;i<names.length;i++) {
   var name =names[i].toLowerCase();  
  if (name.match("j")) {   
    SpeakGoodBye.speak(names[i]);


  } else {
    helloSpeaker.speak(names[i]);
    
  }
}



})();