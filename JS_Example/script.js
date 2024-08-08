const basket1 = document.querySelector(".basket-1 span");
const basket2 = document.querySelector(".basket-2 span");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const totalApples = 10;

let secondBasket = 0;
let firstBasket = totalApples - secondBasket;

basket1.innerHTML = firstBasket;
basket2.innerHTML = secondBasket;

rightArrow.addEventListener("click", () => {
  if (firstBasket > 0) {
    firstBasket--;
    basket1.innerHTML = firstBasket;
    secondBasket++;
    basket2.innerHTML = secondBasket;
  }
});

leftArrow.addEventListener("click", () => {
  if (secondBasket > 0) {
    firstBasket++;
    basket1.innerHTML = firstBasket;
    secondBasket--;
    basket2.innerHTML = secondBasket;
  }
});
