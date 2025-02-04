function reserveGift(button) {
    // Изменяем текст кнопки на "Забронировано" и отключаем её
    button.innerText = "Забронировано";
    button.disabled = true;

    // Меняем стиль элемента списка на забронированный
    const listItem = button.parentElement;
    listItem.style.textDecoration = "line-through";
}
