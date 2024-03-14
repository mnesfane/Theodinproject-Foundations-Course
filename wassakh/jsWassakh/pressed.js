let inpTxt = document.querySelector("#inpText");
let output = document.querySelector("#output");

inpText.addEventListener("keydown", event => output.textContent = `u pressed ${event.key}.`)
