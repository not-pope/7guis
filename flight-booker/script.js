let typeOfFlight = document.getElementById("typeOfFlight");
let inputDepartureDate = document.getElementById("departureDate");
let inputReturnDate = document.getElementById("returnDate");

const inputRegex = /^(\d{2})\.(\d{2})\.(\d{4})$/;

let typeChanged = () => {
    if(typeOfFlight.value==="returnFlight"){
        inputReturnDate.classList.remove("disabled");
        inputReturnDate.removeAttribute("disabled");
    }else{
        inputReturnDate.classList.add("disabled");
        inputReturnDate.setAttribute("disabled","disabled");
    }
    // inputReturnDate.classList.toggle("disabled");
}

let book = () => {
    alert("Booked for: "+inputDepartureDate.value);
}

















/*
    x and y coors of mouse click (relative to current viewport ie. page)
    x
    y

    x and y coors of a mouse click (relative to a whole screen, yeah.. when clientY=0, screenY=0+(height of tabline, os-status-bar, bookmark bar..) )
    screenX
    screenY

    x and y offsets of a mouse click from a padding edge of the target node
    offsetX
    offsetY

    x and y coors of a mouse click in a whole page/document
    pageX
    pageY
*/
