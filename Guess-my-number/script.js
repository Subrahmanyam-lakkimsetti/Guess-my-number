'use scrict'

let score = 20;
let high_score = 0;
let temp_score = 0;
let text;
let body;

const button = document.querySelector('.check-button');
const number = document.querySelector('.input-number');
const score_dom = document.querySelector('.current-score');
const highest_score = document.querySelector('.high-score');
const again = document.querySelector(".Again");
const guess = document.querySelector('.gussing-text');
const question_mark = document.querySelector(".question-mark");

let random_number = Math.floor((Math.random() * 20) + 1);
console.log(random_number);


const submitted = () =>{
    let number1 = number.value;
    number1 = parseInt(number1);
    console.log(number1);
 
    if(number.value === "" && number1 <=0 ){
        alert("please enter some number that is greater than 0");
        return
    }

    number.value="";
    
    if(number1 !== random_number){
        score = score - 1;
        score_dom.innerHTML = `💯 Score : ${score}`
        if((number1 > random_number && number1 <= random_number + 2) || number1 < random_number && number1 >= random_number - 2){
            guess.innerHTML = `You are almost there😍`
        }
        else{
            guess.innerHTML = `you are too far😖`
        }
    }
    else{
        body = document.querySelector('body');
        body.style.backgroundColor = 'green';
        text = document.createElement('div');
        text.innerHTML = "you won🥳"
        body.appendChild(text);
        text.className = "won";
        temp_score = score;
        if(temp_score > high_score){
            high_score = temp_score;
            highest_score.innerHTML = `🥇 HighScore: ${high_score}`
        }
        guess.innerHTML = "🎉Correct answer.....";
        question_mark.innerHTML = random_number;
    }
}

const again_clicked = ()=>{
    score = 20;
    score_dom.innerHTML =  `💯 Score : ${score}`
    body.style.backgroundColor = 'black';
    text.className = "";

}

button.addEventListener('click',submitted);
again.addEventListener('click',again_clicked);


