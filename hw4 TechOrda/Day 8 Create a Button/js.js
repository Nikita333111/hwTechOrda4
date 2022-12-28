const myBtn = document.getElementById('btn');
myBtn.addEventListener("click",(e) => {
           const count = Number(e.currentTarget.innerText) + 1;
       e.currentTarget.innerText = count;  });
