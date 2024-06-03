// Инициализация корзины из Local Storage или создание новой корзины
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');

// Обновление отображения корзины при загрузке страницы
updateCart();

document.querySelectorAll('.add-button').forEach(button => {
    button.addEventListener('click', function() {
        const dish = this.closest('.dish');
        const dishName = dish.dataset.name;
        const dishPrice = parseFloat(dish.dataset.price);

        // Добавление товара в корзину и обновление Local Storage
        cartItems.push({ name: dishName, price: dishPrice });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCart();
    });
});

function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = `${item.name} - ${item.price}₽`;
        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    cartTotal.textContent = `Итого: ${total}₽`;

    // Сохранение общей суммы в Local Storage
    localStorage.setItem('cartTotal', total);
}




// Добавление обработчика событий для кнопки "Очистить корзину"
const clearCartButton = document.querySelector('.clear-cart-button');
clearCartButton.addEventListener('click', clearCart);

function clearCart() {
    // Очищаем массив корзины и обновляем Local Storage
    cartItems = [];
    localStorage.removeItem('cartItems');
    updateCart();
}

// Функция для обновления корзины
function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = `${item.name} - ${item.price}₽`;
        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    cartTotal.textContent = `Итого: ${total}₽`;

    // Сохранение общей суммы в Local Storage
    localStorage.setItem('cartTotal', total);
}

        document.getElementById('theme-toggle').addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
            this.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
        });



        const authButton = document.querySelector('.auth-button');
        const authModal = document.getElementById('auth-modal');
        const closeModal = document.getElementById('close-modal');
        const loginTab = document.getElementById('login-tab');
        const registerTab = document.getElementById('register-tab');
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');

        authButton.addEventListener('click', () => {
            authModal.style.display = 'flex';
        });

        closeModal.addEventListener('click', () => {
            authModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target == authModal) {
                authModal.style.display = 'none';
            }
        });

        loginTab.addEventListener('click', () => {
            loginTab.classList.add('active');
            registerTab.classList.remove('active');
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
        });

        registerTab.addEventListener('click', () => {
            registerTab.classList.add('active');
            loginTab.classList.remove('active');
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        });