function showInput(containerId, inputName, placeholderText) {
    const container = document.getElementById(containerId);
    const input = document.createElement('input');
    input.type = 'text';
    input.name = inputName;
    input.placeholder = placeholderText;
    input.className = 'input-field';
    container.innerHTML = ''; 
    container.appendChild(input); 
    input.focus();
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

