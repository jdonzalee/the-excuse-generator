/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
// import '../style/index.scss';

window.onload = () =>{
   document.querySelector('#TheBotton').addEventListener("click", () => {
      document.querySelector("#my-excuse").InnerHTML = generateExcuse();   
   });
    console.log ('Hello Rigo from the console!');
};

let generateExcuse = () => {
    
    let pronoun = ['The','A',];
    let subject = ['policeman', 'teacher', 'baker', 'dog', 'cat', 'lawyer'];
    let action = ['lost my', 'kicked my', 'stole my', 'attacked my', 'ate my'];
    let possession = ['handbag', 'cat', 'project', 'rabbit', 'lunch', 'sandwich'];
    let location = ['in the office', 'at the mall', 'inside the restaurant', 'in my apartment'];
    
    let pronounIndex = Math.floor(Math.random() *pronoun.length);
    let subjectIndex = Math.floor(Math.random() *subject.length);
    let actionIndex = Math.floor(Math.random() *action.length);
    let possessionIndex = Math.floor(Math.random() *possession.length);
    let locationIndex = Math.floor(Math.random() *location.length);
    
    return pronoun[pronounIndex] + ' ' + subject[subjectIndex] + ' ' + action [actionIndex] + ' ' + possession[possessionIndex] + ' ' + location[locationIndex];
    
};