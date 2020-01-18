var x = Math.floor(Math.random()*100)+1;

var dao = 1;
let daolaw;

document.getElementById("submitguess").onclick = function(){
    var y = document.getElementById("guessField").value;
        if(dao < 11){
            if(y == x ){
                document.querySelector('.result').textContent = "CONGRATULATION YOU GUESS IT RIGHT IN " + dao + "GUESS";
                dao = 12;
            }else if (y > x){
                document.querySelector('.result').textContent = "Too High";
                dao++;
            }else{
                document.querySelector('.result').textContent = "Too Low";
                dao++;
            }
            if (dao == 2){
                daolaw = y;
            }else{
                daolaw += ", "+y;
            }
            document.querySelector('.history').textContent = daolaw;
        }
        if (dao == 11){
            document.querySelector('.result').textContent = "You Lost!!! THE NUMBER IS "+ x + ".";
        }
}
document.getElementById("submitguess").onkey13 = function(){
    var y = document.getElementById("guessField").value;
        if(dao < 11){
            if(y == x ){
                document.querySelector('.result').textContent = "CONGRATULATION YOU GUESS IT RIGHT IN " + dao + "GUESS";
                dao = 12;
            }else if (y > x){
                document.querySelector('.result').textContent = "Too High";
                dao++;
            }else{
                document.querySelector('.result').textContent = "Too Low";
                dao++;
            }
            if (dao == 2){
                daolaw = y;
            }else{
                daolaw += ", "+y;
            }
            document.querySelector('.history').textContent = daolaw;
        }
        if (dao == 11){
            document.querySelector('.result').textContent = "You Lost!!! THE NUMBER IS "+ x + ".";
        }
}