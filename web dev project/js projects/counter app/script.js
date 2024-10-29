// const countValue = document.getElementById('counter');

// function increment(){
//     // get the vlue from UI
//     let value = parseInt(countValue.innerText);//phele string ayegi parseInt int me convert kar dega
//     //Update the value
//     value = value + 1;
//     //set the value onto UI
//     countValue.innerText = value;
// };


// function decrement(){
//         // get the vlue from UI
//         let value = parseInt(countValue.innerText);
//         //Update the value
//         value = value - 1;
//         //set the value onto UI
//         countValue.innerText = value;
// };

const value= document.getElementById('counter');

function increment(){
    let val= parseInt(value.innerText);
    val=val + 1;
    value.innerText=val;
}
 
function decrement(){
    let val= parseInt(value.innerText);
    val= val - 1;
    value.innerText=val;
}