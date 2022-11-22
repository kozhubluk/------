document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelectorAll('.add_to_cart');
  const heart = document.querySelectorAll('.add_to_fav');
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
      if (this.innerHTML === "В корзине") {
        window.open('./cart.html');
      }
      else {
        this.innerHTML = "В корзине";
        this.classList.add("active");
      }
    })
  }
  for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener('click', function () {
      // addEventListener(type, listener) type - тип события listner - функция
      if (this.classList.contains("liked")) {
        this.classList.remove("liked"); // добавляем класс элементу
      } else {
        this.classList.add("liked");
      }
      ;
    })
  }
})
