function nextTry(){
        
    rand1=Math.floor(Math.random()*6)+1;
    rand2=Math.floor(Math.random()*6)+1;
    
  

    document.getElementsByClassName("img1")[0].src="images/dice"+rand1+".png";
    document.getElementsByClassName("img2")[0].src="images/dice"+rand2+".png";
    if (rand1>rand2){
      document.getElementsByTagName("h1")[0].innerHTML= " 🚩Player 1 win";
    }
    if (rand1<rand2){
      document.getElementsByTagName("h1")[0].innerHTML="Player 2 win 🚩" ;
    }
    if (rand1===rand2){
      document.getElementsByTagName("h1")[0].innerHTML="Try again";
    }
     
  }
function changebackgroundColor(){
    document.getElementsByTagName("button")[0].style.backgroundColor='green';
    
  }