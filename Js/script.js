function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  const addModal = document.querySelector(".body-con");
  const paymentBtn = document.querySelector(".btn-checkout");
  const empty = document.querySelector(".empty-dot");
  const addIcon = document.querySelector(".add-icon");
  const filterImg = document.querySelector(".updater");
  
  
  function showModal() {
    addModal.classList.toggle("visible");
  }

  paymentBtn.addEventListener("click", showModal);

  
const colorChange = function () {
empty.classList.toggle("visible");
filterImg.classList.toggle("visible");

  
}

addIcon.addEventListener("click", colorChange);




  // console.log(empty);