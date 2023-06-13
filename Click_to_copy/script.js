const btn = document.querySelector('.btn');
const coupon = document.querySelector('.coupon');

const copyText = (e) => {
  e.preventDefault()
  console.log(coupon.value.length);
  coupon.select();
  coupon.setSelectionRange(0, coupon.value.length);
  document.execCommand('copy')

  btn.textContent = "Copied!!!"
  setTimeout(() => {
    btn.textContent = "Copy"
    btn.style.backgroundColor = '#db6400'
  }, 5000);

  


}

btn.addEventListener('click', copyText);