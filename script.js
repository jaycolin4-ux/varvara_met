document.addEventListener('DOMContentLoaded', () => {
    // Загрузка данных из JSON
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            renderWorks(data.works);
            renderGallery(data.gallery);
        })
        .catch(error => console.error('Ошибка загрузки данных:', error));

    // Функция отрисовки секции Творения
    function renderWorks(works) {
        const worksGrid = document.querySelector('.works-grid');
        if (!worksGrid) return;

        worksGrid.innerHTML = works.map(work => `
            <div class="work-card">
                <div class="card-frame">
                    <span class="card-star">✦</span>
                </div>
                <div class="card-meta">
                    <h3>${work.title}</h3>
                    <p class="desc">${work.description}</p>
                    <p class="progress">${work.progress}</p>
                </div>
            </div>
        `).join('');
    }

    // Функция отрисовки Галереи
    function renderGallery(images) {
        const rows = [document.querySelector('.row-top'), document.querySelector('.row-bottom')];
        if (!rows[0]) return;

        // Распределяем картинки по двум рядам
        images.forEach((img, index) => {
            const card = document.createElement('div');
            card.className = 'gallery-card';
            card.style.backgroundImage = `url(${img})`;
            card.style.backgroundSize = 'cover';
            card.style.backgroundPosition = 'center';
            
            if (index < 5) rows[0].appendChild(card);
            else if (index < 10) rows[1].appendChild(card);
        });
    }
});

    fetch('works.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.works-row'); // убедись что класс совпадает
            container.innerHTML = data.map(work => `
                <div class="work-card">
                    <div class="card-frame">
                        <span class="card-star">✦</span>
                    </div>
                    <div class="card-info">
                        <h3>${work.title}</h3>
                        <p class="desc">${work.desc}</p>
                        <p class="progress">${work.progress}</p>
                    </div>
                </div>
            `).join('');
        });

    let starClicks = 0;
    const star = document.getElementById('magic-star');

    if(star) {
        star.onclick = function() {
            starClicks++;
            // Если кликнули 3 раза
            if (starClicks === 3) {
                // Добавляем эффект вспышки перед переходом
                document.body.style.transition = '2s';
                document.body.style.filter = 'brightness(3) white';
                
                setTimeout(() => {
                    window.location.href = 'gift.html';
                }, 500);
            }
            // Сбрасываем счетчик через 2 секунды, если не докликали
            setTimeout(() => { starClicks = 0; }, 2000);
        };
    }
function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'ru', 
            includedLanguages: 'en,fr,ru', 
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        }, 'google_translate_element');
    }

    function changeLanguage(lang) {
        var selectField = document.querySelector("select.goog-te-combo");
        if (selectField) {
            selectField.value = lang;
            selectField.dispatchEvent(new Event('change'));
        }
    }
    function initMagicCursor() {
    const cursor = document.getElementById('magic-cursor');
    if (!cursor) return;

    // Движение курсора
    window.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    });

    // Эффект при наведении на кнопки и ссылки
    const hovers = document.querySelectorAll('a, button, select, input, textarea');
    hovers.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('link-hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('link-hover'));
    });
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    initMagicCursor();
});
