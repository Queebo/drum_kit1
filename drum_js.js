var sounds=document.querySelectorAll('audio');
var divs=document.querySelectorAll('.audios>div');
var characters=['a','s','d','f','g','h','j','k','l'];
var colors=['#8dd6a1','#d6d68d','#d69c8d','#8dd6c4' ,'#968dd6','#be8dd6','#e2edb7','#d6ab8d','#a8a29e'];
document.addEventListener("keypress",function(event){
 	 var keynum;
 keynum = event.keyCode;
 var key_string=String.fromCharCode(keynum);

makeAChange(key_string);
    
 });

 function makeAChange(cp){

 	for(var i=0;i<characters.length;i++){
 		divs[i].style.background='white';
 		
 		if(characters[i]==cp){
 			sounds[i].currentTime = 0;
 			sounds[i].play();
            divs[i].style.background= colors[i];
          
            
 		}

 	}
 
 }
 