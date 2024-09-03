const addToCartBtn = document.querySelector(".c-cta-button--add-to-cart");
const toast = document.querySelector('.cart-toast');
const progressBar = document.querySelector('.cart-toast__progress-bar');
const cartText = document.querySelector(".cart-toast__text");


addToCartBtn.addEventListener('click', showToast);

let toastTimeout;
function showToast() {

  if (!toast.classList.contains('cart-toast--show') && getComputedStyle(toast).opacity > 0 && getComputedStyle(toast).opacity < 1) {
    console.log(getComputedStyle(toast).opacity, "HERE")
    toast.classList.add('cart-toast--show');

    resetProgressBar()
  }
  else if (toast.classList.contains('cart-toast--show')) {
    clearTimeout(toastTimeout);
    resetProgressBar()
  } else {

    toast.classList.add('cart-toast--show');
    progressBar.style.transition = 'transform 1s linear';
    progressBar.style.transform = 'scaleX(1)';
  }

  toastTimeout = setTimeout(() => {
    toast.classList.remove('cart-toast--show');
  }, 1000);
}


function resetProgressBar() {
  progressBar.style.transition = 'none';
  progressBar.style.transform = 'scaleX(0)';
  progressBar.offsetWidth;
  progressBar.style.transition = 'transform 1s linear';
  progressBar.style.transform = 'scaleX(1)';
}



toast.addEventListener("transitionend", (event) => {
  if (event.propertyName === "opacity" && !toast.classList.contains('cart-toast--show')) {
    progressBar.style.transition = 'none';
    progressBar.style.transform = 'scaleX(0)';
  }
});