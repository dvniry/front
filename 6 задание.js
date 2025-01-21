function showInput(containerId, inputName, placeholderText) {
    // Получаем контейнер
    const container = document.getElementById(containerId);

    // Создаём поле ввода
    const input = document.createElement('input');
    input.type = 'text';
    input.name = inputName;
    input.placeholder = placeholderText;
    input.className = 'input-field'; // Применяем стили

    // Очищаем контейнер и добавляем поле ввода
    container.innerHTML = ''; // Удаляем текущее содержимое
    container.appendChild(input); // Добавляем поле ввода

    // Фокусируемся на поле ввода
    input.focus();

    // Возвращаем текст, если поле остаётся пустым
    input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
            container.innerHTML = `
                <h1 onclick="showInput('${containerId}', '${inputName}', '${placeholderText}')">${placeholderText}</h1>
                <div class="hay-line"></div>
            `;
        }
    });
}

function toggleCheckbox() {
    const checkboxObject = document.querySelector('.check-agree');
    checkboxObject.style.display = checkboxObject.style.display === 'none' ? 'block' : 'none';
}

