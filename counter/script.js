const output = document.getElementById("output");
let clicks = parseInt(output.innerText);

//Im not sure, but I think that using one variable to
//keep clicks would be faster(but prop not enough) and
//yet it will not make and differance
//like:
//let clicks = parseInt(output.innerText); global var
//output.innerText=clicks++;
let countClicks = () => {
    // let clicks = parseInt(output.innerText) + 1;
    output.innerText=++clicks;
}