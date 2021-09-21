// you could create list (or object/dict) of these elems and somehow you don't
// even need to reference that obj when accessin' them. like so
// const elems = {
//   celsius: document.querySelector("input#celsius"),
//   fahrenheit: document.querySelector("input#fahrenheit"),
// };
// i though i need to use elems.celsius but sometimes you dont (apparently)
// i though about wrting second version but its more or less the same thing
// also, these two are the same:
// const {value} = event.target;
// const value = event.target.value;
// also oninput you can create fn that passes an event, and you can access
// event.target to see who called it and do some smart shit with it that way

let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");


const celsToFahr = (temp) => {
    return (temp * 1.8 + 32);
}
const fahrToCels = (temp) => {
    return ((temp-32) * 0.5555555555555556);
}

const cels = () => {
    fahrenheit.value=celsToFahr(celsius.value).toFixed(2);
}

const fahr = () => {
    celsius.value=fahrToCels(fahrenheit.value).toFixed(2);
}
