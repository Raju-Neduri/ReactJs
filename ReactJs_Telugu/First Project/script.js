console.log("Successfully completed my first project");

const changebutton = document.getElementById("submitButton");
console.log(changebutton);

function greet(){
  console.log("Hello Raju");
}

greet();

changebutton.addEventListener('click',function(){
// console.log("function called now")

//To change H1 tag content
const titleElement=document.getElementById("title");
console.log("titleElement");
titleElement.textContent="Successfully completed the first project";

//To add html content in DIV
const divElement=document.getElementById("paragraphId");
console.log("divElement");
divElement.innerHTML="<p>This is a new pargraph</p>";

});