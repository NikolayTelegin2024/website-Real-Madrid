document.addEventListener('DOMContentLoaded', () => {
    // Установка текущего года в футере
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Загрузка данных руководства
    loadManagementData();

    // Загрузка новостей
    loadNews();

    // Инициализация интерактивных элементов (например, анимации)
    initInteractiveElements();
});

// Загрузка данных руководства
function loadManagementData() {
    const managementData = [
        {
            name: "socios",
            position: "Владельцы",
            img: "https://butsa24.ru/img/cms/BLOG/2403/I8AmJ3RZPJw.jpg",
            bio: "«Реал Мадрид» управляется по уникальной модели, где у членов клуба есть права голосования и важная роль в определении судьбы команды."
        },
        {
            name: "Флорентино Перес",
            position: "Президент",
            img: "https://img.championat.com/s/1350x900/news/big/d/b/trenirovochnuyu-bazu-madridskogo-reala-pereimenuyut-v-chest-florentino-peresa_17315165241497136005.jpg",
            bio: "Президент с 2009 года, архитектор Галактикос"
        },
        {
            name: "Хабби Алонсо",
            position: "Главный тренер",
            img: "https://phantom-marca.uecdn.es/af6d4c3afa86f17341c6e04220373d85/resize/1200/f/webp/assets/multimedia/imagenes/2025/05/25/17481684405011.jpg",
            bio: "Легендарный игрок, теперь новый тренер Реала"
        }
    ];

    const container = document.querySelector('.management-grid');
    let html = '';
    
    managementData.forEach(person => {
        html += `
            <div class="management-card">
                <img src="${person.img}" alt="${person.name}" loading="lazy">
                <div class="management-card-content">
                    <h3>${person.name}</h3>
                    <p><strong>${person.position}</strong></p>
                    <p>${person.bio}</p>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Загрузка новостей
function loadNews() {
    const newsData = [
        {
            title: "«Реал» при Алонсо изменится до неузнаваемости. Аргументы мощные",
            img: "https://theplayoffs.news/en/wp-content/uploads/2025/05/Xabi-Alonso-Presentation-at-Santiago-Bernabeu-New-Real-Madrid-Coach-Pays-Tribute-to-Carlo-Ancelotti.jpg",
            link: "https://www.championat.com/football/article-6027038-kakim-budet-real-v-novom-sezone-2025-2026-pri-habi-alonso-novichki-transfery-shema-taktika.html"
        },
        {
            title: "«Реал» проводил Анчелотти и Модрича",
            img: "https://imageio.forbes.com/specials-images/imageserve/683370304d02b4cd2109a711/Real-Madrid-CF-v-Real-Sociedad---La-Liga-EA-Sports/960x0.jpg?format=jpg&width=1440",
            link: "https://www.sports.ru/football/blogs/3325969.html"
        },
        {
            title: "Мбаппе выиграл «Золотую бутсу». А ведь говорили, что его трансфер только навредил «Реалу»",
            img: "https://0d314c86-f76b-45cc-874e-45816116a667.selcdn.net/6ae9acd3-d528-42e9-a5d3-2b7bd10ee9d0.png",
            link: "https://www.sport-express.ru/football/spain/reviews/kilian-mbappe-vyigral-zolotuyu-butsu-po-itogam-sezona-2024-25-statistika-luchshih-bombardirov-sezona-2329877/?utm_referrer=https%3A%2F%2Fyandex.ru%2F"
        }
    ];

    const container = document.querySelector('.news-grid');
    let html = '';
    
    newsData.forEach(newsItem => {
        html += `
            <div class="news-card">
                <a href="${newsItem.link}" target="_blank">
                    <img src="${newsItem.img}" alt="${newsItem.title}" loading="lazy">
                    <h3>${newsItem.title}</h3>
                </a>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Инициализация интерактивных элементов
function initInteractiveElements() {
    // Параллакс для секции стадиона
    const stadiumSection = document.querySelector('.stadium-section');
    if (stadiumSection) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            stadiumSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        });
    }

    // Анимация заголовка
    animateHeader();

    // Анимация карточек при наведении
    const cards = document.querySelectorAll('.management-card, .news-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });

    // Кнопка официального сайта
    const officialBtn = document.querySelector('.official-btn');
    if (officialBtn) {
        officialBtn.addEventListener('click', (e) => {
            e.preventDefault();
            officialBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                window.open(officialBtn.href, '_blank');
                officialBtn.style.transform = 'scale(1)';
            }, 200);
        });
    }
}

// Анимация заголовка
function animateHeader() {
    const header = document.querySelector('.club-header h1');
    const motto = document.querySelector('.club-motto');

    if (header && motto) {
        setTimeout(() => {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 100);

        setTimeout(() => {
            motto.style.opacity = '1';
            motto.style.transform = 'translateY(0)';
        }, 500);
    }
}