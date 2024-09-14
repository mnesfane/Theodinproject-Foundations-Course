let inpTxt = document.querySelector("#inpText");
let output = document.querySelector("#output");
console.log(c)

inpText.addEventListener("keydown", event => output.textContent = `u pressed ${event.key}.`)
