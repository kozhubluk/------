document.addEventListener('DOMContentLoaded', () => {
    const cross = document.getElementsByClassName('remove');
    const minusButtons = document.getElementsByClassName('minus');
    const plusButtons = document.getElementsByClassName('plus');
    updateTotal();

    for (let i = 0; i < cross.length; i++) {
        cross[i].addEventListener('click', function (event) {
            var crossClicked = event.target;
            console.log(crossClicked.className);
            while (crossClicked.className != "catalog_item") { 
                crossClicked = crossClicked.parentElement;
            }
            console.log(cross, minusButtons, plusButtons);
            crossClicked.remove();
            updateTotal();
        })
    }
    for (let i = 0; i < minusButtons.length; i++) {
        minusButtons[i].addEventListener('click', function () {
            console.log("i = ", i);
            var quantity = this.parentElement.getElementsByClassName("counter")[0];
            if (quantity.innerText > 1) quantity.innerText = quantity.innerText - 1;
            updateTotal();
        })
    }
    for (let i = 0; i < plusButtons.length; i++) {
        plusButtons[i].addEventListener('click', function () {
            var quantity = this.parentElement.getElementsByClassName("counter")[0];
            if (Number(quantity.innerText) < 100) quantity.innerText = Number(quantity.innerText) + 1;
            updateTotal();
        })
    }
    function updateTotal() {
        var cartItemsContainer = document.getElementsByClassName("cards_container")[0];
        var cartRows = cartItemsContainer.getElementsByClassName("catalog_item");
        var total = 0;
        for (let i = 0; i < cartRows.length; i++) {
            var cartRow = cartRows[i];
            var priceElement = cartRow.getElementsByClassName("now_price")[0];
            var quantityElement = cartRow.getElementsByClassName("counter")[0];
            console.log(priceElement, quantityElement);
            var price = parseFloat(priceElement.innerText.replace('₽', ''));
            console.log(price)
            var quantity = quantityElement.innerText;
            console.log(quantity)
            console.log(quantity * price);
            total = total + quantity * price;
        }
        document.getElementsByClassName("total_price")[0].innerText = total + '₽';
    }

})
