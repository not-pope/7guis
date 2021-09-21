const output = document.getElementById("output");

let countClicks = () => {
    let clicks = parseInt(output.innerText) + 1;
    output.innerText=clicks;
}