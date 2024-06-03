document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
});

function openModal() {
    document.getElementById('addressModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('addressModal').style.display = 'none';
}

function saveAddress() {
    var city = document.getElementById('city').value;
    var street = document.getElementById('street').value;
    var house = document.getElementById('house').value;
    if (city && street && house) {
        alert('Адрес сохранен: ' + city + ', ' + street + ', ' + house);
        closeModal();
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
}

// Закрыть модальное окно при клике вне его области
window.onclick = function(event) {
    var modal = document.getElementById('addressModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

