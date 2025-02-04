function reserveGift(button) {
    const giftItem = button.parentElement; // Получаем родительский элемент (li)
    const giftName = giftItem.querySelector('.gift-name').textContent; // Получаем название подарка

    // Добавляем подарок в список зарезервированных
    const reservedGiftsList = document.getElementById('reserved-gifts');
    const li = document.createElement('li');
    li.textContent = ${giftName} - зарезервировано;
    reservedGiftsList.appendChild(li);

    // Делаем кнопку неактивной и изменяем стиль подарка
    button.disabled = true;
    giftItem.querySelector('.gift-name').classList.add('reserved');
    button.textContent = 'Зарезервировано';
}
