x=localStorage.getItem("Player_1_Username");
y=localStorage.getItem("Player_2_Username");
score1=0;
score2=0;
document.getElementById("p1").innerHTML=x+":";
document.getElementById("p2").innerHTML=y+":";
document.getElementById("p1score").innerHTML=score1;
document.getElementById("p2score").innerHTML=score2;
document.getElementById("Qturn").innerHTML="Question turn: "+x;
document.getElementById("Aturn").innerHTML="Answer turn: "+y;
function buttonclick(){
 WordVar =  document.getElementById("word").value;
 LowerWord = WordVar.toLowerCase();
 console.log("Word in lowercase: "+LowerWord);
 dash1=LowerWord.charAt(1);
 console.log(dash1);
 randomdash=Math.floor(LowerWord.length/2);
 dash2=LowerWord.charAt(randomdash);
 console.log(dash2);
 len =LowerWord.length-1
 dash3=LowerWord.charAt(len);
 console.log(dash3);
dreplace1=LowerWord.replace(dash1,"_");
 dreplace2=dreplace1.replace(dash2,"_");
dreplace3=dreplace2.replace(dash3,"_");
console.log(dreplace1);
console.log(dreplace2);
console.log(dreplace3);
op="<h4 id='OP'> Q. "+dreplace3+"</h4>";
ip="<br> Answer : <input type='text' id='IP'>";
bt="<br><br><button id='BT' class='btn-info' onclick='BT()'>Check</button>";
all=op+ip+bt;
document.getElementById("output").innerHTML=all;
document.getElementById("word").value="";
}
Qturn="Player 1";
Aturn="Player 2";
function BT(){
IdIp=document.getElementById("IP").value;
LowerIp=IdIp.toLowerCase();
console.log(LowerIp);
if (LowerIp == LowerWord){
    if(Aturn=="Player 1"){
        score1=score1+1
        document.getElementById("p1score").innerHTML=score1
    }
    else{
        score2=score2+1
        document.getElementById("p2score").innerHTML=score2;
    }
}
if(Qturn=="Player 1"){
     Qturn="Player 2";
     document.getElementById("Qturn").innerHTML="Question turn: "+y;
}
else{
    Qturn="Player 1"
    document.getElementById("Qturn").innerHTML="Question turn: "+x;
}
if(Aturn=="Player 1"){
    Aturn="Player 2";
    document.getElementById("Aturn").innerHTML="Answer turn: "+y;
}
else{
   Aturn="Player 1"
   document.getElementById("Aturn").innerHTML="Answer turn: "+x;
}
document.getElementById("output").innerHTML="";
}