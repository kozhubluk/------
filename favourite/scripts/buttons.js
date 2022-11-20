var btn = document.querySelectorAll('.add_to_cart');
var cross = document.querySelectorAll('.remove');
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function() {
   if (this.innerHTML === "В корзине"){
      window.open('./cart.html');
   }
   else{
      this.innerHTML = "В корзине";
      this.classList.add("active");
   }
  })
}
for (let i = 0; i < cross.length; i++) {
    cross[i].addEventListener('click', function(event) {
        var crossClicked = event.target;
        console.log(crossClicked.className);
        while (crossClicked.className != "catalog_item") { // получаем родительский элемент, который надо удалить
            crossClicked = crossClicked.parentElement;
        }
        crossClicked.remove();
    })

}