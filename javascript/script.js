
function calculateBTC() {
  let price = prompt("What is BTC price today?", "21000");
  
  let amount = prompt("How much $ do you have?", "1000");
    let box = document.getElementById("result");
  
  if (parseInt(price)>0 && parseInt(amount)>=0) {
    box.innerHTML = "You can buy " + amount / price + " BTS";
      box.style.backgroundColor = "Green";
      box.style.color = "White";
  } else {
   box.innerHTML = "Input valid values";
   box.style.backgroundColor = "Red";
  }
}
