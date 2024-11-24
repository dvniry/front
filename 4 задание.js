const images = [
    {
        src: 'градиент1.jpeg',
        text: '1 Простой сгенерированый градиент в shedevrum.ai от Yandex'
    },
    {
        src: 'градиент2.jpeg',
        text: '2 Простой сгенерированый градиент в shedevrum.ai от Yandex'
    },
    {
        src: 'градиент3.jpeg',
        text: '3 Простой сгенерированый градиент в shedevrum.ai от Yandex'
    },
    {
        src: 'градиент4.jpeg',
        text: '4 Простой сгенерированый градиент в shedevrum.ai от Yandex'
    }
];

let currentIndex = 0;

const imageElement = document.getElementById('dynamic-image');
const textElement = document.getElementById('dynamic-text');
const button = document.getElementById('change-button');

button.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex].src;
    textElement.textContent = images[currentIndex].text;
});
