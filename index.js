
// const answersection=document.querySelector(".answer");
// const question=document.querySelector("[Question]");
// const que=document.querySelector(".question1");


// function upanddown(){
//     if(!downicons.classList.contains("rotateactive")){
//         downicons.classList.add("rotateactive");
//         // answersection.classList.add("active");
//     }
//     else{
       
//         downicons.classList.toggle("rotateactive");
//         // answersection.classList.toggle("active");
//     }
// };


const que=document.querySelectorAll(".question1");
// for(let i=0; i<que.length; i++)
// {
//     que[i].addEventListener('click', function(){
//        const downicons=que[i].querySelector(".downicon");
//        const answersection=que[i].querySelector(".answer");
//         downicons.classList.toggle("rotateactive");
//         answersection.classList.toggle("active");
//     });
// }


que.forEach(allquestion => {
    allquestion.addEventListener('click', function(){
        const downicons=allquestion.querySelector(".downicon");
        const answersection=allquestion.querySelector(".answer");
         downicons.classList.toggle("rotateactive");
         answersection.classList.toggle("active");
     });
});



    
   


 
    
