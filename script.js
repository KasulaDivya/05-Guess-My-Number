'use strict';
/*console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.message').textContent = "❤️congrates");*/

let number = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore =0;

 const displaymessage = function(message)
 {
    document.querySelector('.message').textContent=message;
 }

document.querySelector('.check').addEventListener('click',function(){
    const g= Number(document.querySelector('.guess').value);
    //console.log(g,typeof g);
    if(!g){
        //document.querySelector('.message').textContent=' 👎No number ';
        displaymessage('No message');
        //if the number matches the secret number
    }else if( g === number ){
         //document.querySelector('.message').textContent='👌congrates';
         displaymessage('congrates');
         document.querySelector('body').style.backgroundColor=' #CC3399 ';
         document.querySelector('.number').style.width='30rem';
         document.querySelector('.number').textContent= number;
        if(score > highscore){
           let highscore = score;
            document.querySelector('.highscore').textContent = highscore;

            //if the number dont match the secret number 
            //and by using by refactoring the code new method
        }}else if( g !== number) {
            if(score > 1){
                //document.querySelector('.message').textContent= g > number ? 'too high':'too low';
                displaymessage( g > number ? 'too high':'too low');
                score--;
                document.querySelector('.score').textContent=score;
            }else{
                //document.querySelector('.message').textContent='you lost the game👽'
                displaymessage('you lost the game');
            }}
        });

          // if the number not matches the secret number
          // by using the old method
         /*else if(g > number && g < 20){
            if(score > 0){
                document.querySelector('.message').textContent='too High😒';
            score--;
            document.querySelector('.score').textContent=score;
            }else{
                document.querySelector('.message').textContent='you lost the game👽'
            }
         }else if(g < number && g < 20){
            if(score>0){
                document.querySelector('.message').textContent='too low😐';
                score--;
                document.querySelector('.score').textContent=score;
            }else{
                document.querySelector('.message').textContent='☠️you lost the game'
            }
         }else{
             document.querySelector('.message').textContent='exceeded the limit';
         }
});*/

// code to restart the game by clicking the again button

document.querySelector('.again').addEventListener('click',function(){
    let score = 20;
    document.querySelector('.score').textContent=score;
    number = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent=number;
    document.querySelector('.number').textContent='?';
    //document.querySelector('.message').textContent='Select Number...';
    displaymessage('select number');
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
});
