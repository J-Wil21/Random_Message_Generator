let message = document.querySelector("#message");
let btn = document.querySelector("#btn");

let words = ["grass", "match", "organisation", "welfare", "willpower", "lobby", "palace", "father", "bottle", "electron", "conclusion", "swing", "population", "thoughtful", "coalition", "shower", "feast", "paint", "delivery", "length", "trunk", "bounce", "counter", "elite", "boom", "corner", "protection", "temperature", "vague", "lock"];

function ranNum() {
    return Math.floor(Math.random() * 29)
};


btn.addEventListener('click', () => {
    let txt = `${words[ranNum()]}-${words[ranNum()]}-${words[ranNum()]}`
    message.textContent = txt
});