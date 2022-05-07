const container = document.querySelector(".container");
const inputField = document.querySelector(".form input");
const generateBtn = document.querySelector(".form button");
const qrImage = document.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
  let inputValue = inputField.value;
  if (!inputValue) return; //if empty do nothing
  generateBtn.innerText = "Processing...";

  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;

  //add load event listener
  qrImage.addEventListener("load", () => {
    container.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
  });
});

inputField.addEventListener("keyup", () => {
  if (!inputField.value) {
    container.classList.remove("active");
  }
});

// get the qr link from https://goqr.me/api/
