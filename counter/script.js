// Given that I don't know the differance between two 
// options I have (or better yet two implementations),
// I will keep both and comment one out.

// //---Option I---
// const output = document.getElementById("output");

// let countClicks = () => {
//     let clicks = parseInt(output.innerText) + 1;
//     output.innerText=clicks;
// }

// ---Option II---
const output = document.getElementById("output");
let clicks = parseInt(output.innerText);
//Im not sure, but I think that using one variable to
//keep clicks would be faster(but prop not enough) and
//yet it will not make and differance
//like:
//let clicks = parseInt(output.innerText); global var
//output.innerText=clicks++;
let countClicks = () => {
    output.innerText=++clicks;
}