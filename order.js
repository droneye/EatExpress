// Функция для отображения корзины на странице отслеживания заказа
function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartTotal = parseFloat(localStorage.getItem('cartTotal')) || 0;
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalContainer = document.querySelector('.cart-total');

    // Отображение товаров и общей стоимости в корзине
    cartItemsContainer.innerHTML = cartItems.map(item => `<p>${item.name} - ${item.price}₽</p>`).join('');
    cartTotalContainer.textContent = `Итого: ${cartTotal}₽`;
}

// Вызов функции для отображения корзины при загрузке страницы отслеживания заказа
displayCart();