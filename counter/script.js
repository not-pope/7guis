// Given that I don't know the differance between two 
// options I have (or better yet two implementations),
// I will keep both and comment one out.

//---Option I---
const output = document.getElementById("output");

let countClicks = () => {
    let clicks = parseInt(output.innerText) + 1;
    //also, I dont think there is much of a diff in 
    //using const over let here
    output.innerText=clicks;
}

// ---Option II---
//Im not sure, but I think that using one variable to
//keep clicks would be faster(but prop not enough) and
//yet it will not make any functional differance
// const output = document.getElementById("output");
// let clicks = parseInt(output.innerText);
// let countClicks = () => {
//     output.innerText=++clicks;
// }

//one additional thing, there is more ways to select
//output element
//document.getElementById('output');
//doucment.querySelector('#output');