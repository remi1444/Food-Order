function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  const bodyCheck = document.querySelector(".btn-checkout");
  const bodyContainer = document.querySelector(".body-con");
  const paymentContainer = document.querySelector(".payment-con");
  const xBtn = document.querySelector(".x-btn");




  bodyCheck.addEventListener("click", showModal)
  

  function showModal() {
    bodyContainer.style.visibility = "visible";
    paymentContainer.style.filter = "blur(10px)";
  }

  xBtn.addEventListener("click", hideModal)

  function hideModal() {
    bodyContainer.style.visibility = "hidden";
    paymentContainer.style.filter = "blur(0)";
  }