// get h1 element using   DOM 

// let display_number=document.getElementById("display");

// let increment_button=document.getElementById("button");
// let decrement_button=document.getElementById("button_2");

// const value=display_number.innerHTML
// let num= parseInt(value)

// increment_button.addEventListener("click", function() {
//     num++
//     display_number.innerHTML=num

//   });

//   decrement_button.addEventListener("click", function() {
//     num--
//     display_number.innerHTML=num

//   });


// or 

let number=0
let number2=0
let display_number=document.querySelector("#display")
let display_number_2=document.querySelector("#display_2")

let incremnt_button=document.querySelector("#button")
let decrement_button=document.querySelector("#button_2")

let in_button=document.querySelector("#inbutton")
let de_button=document.querySelector("#debutton")


incremnt_button.addEventListener("click", function() {
    number++
    display_number.textContent=number

  });


  decrement_button.addEventListener("click", function() {
    number--
    display_number.textContent=number

  });


  // second counter er jonno 

  in_button.addEventListener("click", function() {
    number2++
    display_number_2.textContent=number2

  });


  de_button.addEventListener("click", function() {
    number2--
    display_number_2.textContent=number2

  });



