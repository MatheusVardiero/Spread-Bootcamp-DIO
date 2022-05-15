let num = 0;

function decrement() {
  if (num==0) {
    num = 0;
  } else {
    num -= 1;
  }
  document.getElementById("currentNumber").innerText = num;
 
}

function increment() {
  num += 1;
  document.getElementById("currentNumber").innerText = num; lkuytrq1  
}

