let btn = document.querySelector('.btn-submit');

btn.addEventListener('click', result);


function result(){
    
    var q1 = document.quiz.q_1.value;
    var q2 = document.quiz.q_2.value;
    var q3 = document.quiz.q_3.value;
    var q4 = document.quiz.q_4.value;
    var q5 = document.quiz.q_5.value;
    var q6 = document.quiz.q_6.value;
    var q7 = document.quiz.q_7.value;
    var q8 = document.quiz.q_8.value;
    var q9 = document.quiz.q_9.value;
    var q10 = document.quiz.q_10.value;

    var answer = document.querySelector('.answer');
    

    let count = 0;

    if(q1 == "script"){++count;}
    if(q2 == "Escript"){++count;}
    if(q3 == "?:"){++count;}
    if(q4 == "getElementByTagName()"){++count;}
    if(q5 == "2names"){count++;}
    if(q6 == "document.write('Hello World')"){++count;}
    if(q7 == "Declaration Statements"){++count;}
    if(q8 == "Object-Based"){++count;}
    if(q9 == "Client"){++count;}
    if(q10 == "True"){++count;}

    if(count <= 3){
        answer.textContent = `Your result is ${count} /10. You're failed.`;
        answer.style.color = 'red';
    }
    else{
        answer.textContent = `Your result is ${count} /10. You're passed.`;
       
    }
    
}