// Массив игроков (пример данных)
// Массив игроков (пример данных)
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Обновляем иконку
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = newTheme === 'dark' ? '🌞' : '🌙';
}

// Инициализация темы при загрузке
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = savedTheme === 'dark' ? '🌞' : '🌙';
    
    // Добавляем обработчик события
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', toggleTheme);
}

// Вызываем инициализацию темы при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    // Остальной существующий код...
});
const players = [
    {
        name: "Тибо Куртуа",
        number: "1",
        country: {
            name: "Бельгия",
            flag: "https://avatars.mds.yandex.net/i?id=e680a93b08820eda89954be49b7b2f46_l-5233403-images-thumbs&n=13" 
        },
        realPhoto: "https://storage.yandexcloud.net/s3-metaratings-storage/images/29/99/2999d7c7d72aeece226257c53b6bde23.jpg",
        fifaPhoto: "https://game-assets.fut.gg/2025/futgg-player-item-card/25-192119.9d04bf0b5a21f858f7f5aa3213cab283bc9ee4eace48d4b45be57384c95e8228.webp",
        position: "Вратарь",
        transferDate: "08.08.2018",
        stats: {
            matches: 230,
            cleanSheets: 98,
            goalsConceded: 187,
            saves: 645,
            penaltySaves: 12,
            catches: 423,
            punches: 156,
            cleanSheetPercentage: "43%"
        },
        trophies: [
            { name: "Ла Лига", count: 3, image: "https://i.pinimg.com/736x/16/e8/99/16e899fe138d15fb1b6ea4da1e40b122.jpg" },
            { name: "Лига чемпионов", count: 2, image: "https://avatars.mds.yandex.net/i?id=a52172799ffdbaedf82602d7d161f102_l-5221613-images-thumbs&n=13" },
            { name: "Кубок Испании", count: 1, image: "https://avatars.mds.yandex.net/i?id=00e7f1637c298a28e0efca170209dc24_l-10704821-images-thumbs&n=13" },
            { name: "Суперкубок Испании", count: 2, image: "https://fbi.cults3d.com/uploaders/15795342/illustration-file/9dcb9eb0-4892-4487-a34f-5998f99178ad/untitled.77.jpg" },
            { name: "Суперкубок УЕФА", count: 2, image: "https://avatars.mds.yandex.net/i?id=4d6449eee02c58f211b7a7e067c111bf_l-5288062-images-thumbs&n=13" },
            { name: "Клубный чмпионат мира", count: 1, image: "https://i.pinimg.com/originals/41/60/e9/4160e9e356f7ee2746a29a0fbaf92e87.png" },
            { name: "Межконтинентальный кубок", count: 1, image: "https://www.seekpng.com/png/detail/108-1080967_klub-weltmeisterschafts-pokal-trophy-club-world-cup-png.png" }
        ],
        description: "Оплот обороны Реала. Бельгийский голкипер, чьи сейвы не раз спасли команду в решающих матчах Лиги Чемпионов. Обладает феноменальной реакцией и авторитетом, организующим всю защитную линию."
    },
    {
        name: "Андрей Лунин",
        number: "13",
        country: {
            name: "Украина",
            flag: "https://i.pinimg.com/originals/d2/0e/f2/d20ef238e2770ac041dd81adcabfb1d8.jpg" 
        },
        realPhoto: "https://img.championat.com/s/1350x900/news/big/x/a/andrej-lunin-mozhet-perejti-v-man-siti-i-zamenit-edersona_17202340741199464701.jpg",
        fifaPhoto: "https://game-assets.fut.gg/cdn-cgi/image/quality=60,format=auto,width=300/2025/futgg-player-item-card/25-243952.de8bf6c26b3d1a6991c9313725d126fb6a10340d2468d98803e66a22f31c4b01.webp",
        position: "Вратарь",
        transferDate: "22.07.2018",
        stats: {
            matches: 65,
            cleanSheets: 28,
            goalsConceded: 54,
            saves: 187,
            penaltySaves: 5,
            catches: 120,
            punches: 45,
            cleanSheetPercentage: "43%"
        },
        trophies: [
            { name: "Ла Лига", count: 3, image: "https://i.pinimg.com/736x/16/e8/99/16e899fe138d15fb1b6ea4da1e40b122.jpg" },
            { name: "Лига чемпионов", count: 2, image: "https://avatars.mds.yandex.net/i?id=a52172799ffdbaedf82602d7d161f102_l-5221613-images-thumbs&n=13" },
            { name: "Кубок Испании", count: 1, image: "https://avatars.mds.yandex.net/i?id=00e7f1637c298a28e0efca170209dc24_l-10704821-images-thumbs&n=13" },
            { name: "Суперкубок Испании", count: 3, image: "https://fbi.cults3d.com/uploaders/15795342/illustration-file/9dcb9eb0-4892-4487-a34f-5998f99178ad/untitled.77.jpg" },
            { name: "Суперкубок УЕФА", count: 2, image: "https://avatars.mds.yandex.net/i?id=4d6449eee02c58f211b7a7e067c111bf_l-5288062-images-thumbs&n=13" },
            { name: "Клубный чемпионат мира", count: 1, image: "https://i.pinimg.com/originals/41/60/e9/4160e9e356f7ee2746a29a0fbaf92e87.png" },
            { name: "Межконтинентальный кубок", count: 1, image: "https://www.seekpng.com/png/detail/108-1080967_klub-weltmeisterschafts-pokal-trophy-club-world-cup-png.png" }
        ],
        description: "Открытие сезона. Украинский вратарь, совершивший путь от третьей опции до героя четвертьфиналов ЛЧ-2024. Рекордсмен по отраженным пенальти в Ла Лиге (5 за сезон)."
    },
    {
        name: "Дани Карвахаль",
        number: "2",
        country: {
            name: "Испания",
            flag: "https://static.tildacdn.com/tild6461-3939-4331-b433-633362646336/1.jpg" 
        },
        realPhoto: "https://photobooth.cdn.sports.ru/preset/wysiwyg/c/bc/19dc2c1f54472923cc918b949ace5.jpeg",
        fifaPhoto: "https://fifagc.ru/upfiles/players/25/1969-s.png",
        position: "Правый защитник",
        transferDate: "18.08.2013",
        stats: {
            matches: 412,
            goals: 10,
            assists: 62,
            tackles: 387,
            interceptions: 421
        },
        trophies: [
            { name: "Ла Лига", count: 4, image: "https://i.pinimg.com/736x/16/e8/99/16e899fe138d15fb1b6ea4da1e40b122.jpg" },
            { name: "Лига чемпионов", count: 6, image: "https://avatars.mds.yandex.net/i?id=a52172799ffdbaedf82602d7d161f102_l-5221613-images-thumbs&n=13" },
            { name: "Кубок Испании", count: 2, image: "https://avatars.mds.yandex.net/i?id=00e7f1637c298a28e0efca170209dc24_l-10704821-images-thumbs&n=13" },
            { name: "Суперкубок Испании", count: 4, image: "https://fbi.cults3d.com/uploaders/15795342/illustration-file/9dcb9eb0-4892-4487-a34f-5998f99178ad/untitled.77.jpg" },
            { name: "Суперкубок УЕФА", count: 5, image: "https://avatars.mds.yandex.net/i?id=4d6449eee02c58f211b7a7e067c111bf_l-5288062-images-thumbs&n=13" },
            { name: "Клубный чемпионат мира", count: 5, image: "https://i.pinimg.com/originals/41/60/e9/4160e9e356f7ee2746a29a0fbaf92e87.png" },
            { name: "Межконтинентальный кубок", count: 1, image: "https://www.seekpng.com/png/detail/108-1080967_klub-weltmeisterschafts-pokal-trophy-club-world-cup-png.png" }
        ],
        description: "Легенда правого фланга. Символ верности клубу - провел всю карьеру в Реале. Ключевое звено атак, чьи навесы стали голевой гарантией. Четырежды включался в символическую сборную Лиги Чемпионов."
    },
    {
        name: "Эдер Милитао",
        number: "3",
        country: {
            name: "Бразилия",
            flag: "https://www.linguatrans.com/wp-content/uploads/2022/07/brazil-g01815d337_1920-1920x1080.jpg" 
        },
        realPhoto: "https://avatars.mds.yandex.net/i?id=54aa9311b523e6a08d03e7d39a66d934_l-5299516-images-thumbs&n=13",
        fifaPhoto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-shields/tr/240130.png?width=265",
        position: "Центральный защитник",
        transferDate: "1.07.2019",
        stats: {
            matches: 145,
            goals: 8,
            tackles: 245,
            interceptions: 198,
            clearances: 327
        },
        trophies: [
            { name: "Ла Лига", count: 3, image: "https://i.pinimg.com/736x/16/e8/99/16e899fe138d15fb1b6ea4da1e40b122.jpg" },
            { name: "Лига чемпионов", count: 2, image: "https://avatars.mds.yandex.net/i?id=a52172799ffdbaedf82602d7d161f102_l-5221613-images-thumbs&n=13" },
            { name: "Кубок Испании", count: 1, image: "https://avatars.mds.yandex.net/i?id=00e7f1637c298a28e0efca170209dc24_l-10704821-images-thumbs&n=13" },
            { name: "Суперкубок Испании", count: 2, image: "https://fbi.cults3d.com/uploaders/15795342/illustration-file/9dcb9eb0-4892-4487-a34f-5998f99178ad/untitled.77.jpg" },
            { name: "Суперкубок УЕФА", count: 2, image: "https://avatars.mds.yandex.net/i?id=4d6449eee02c58f211b7a7e067c111bf_l-5288062-images-thumbs&n=13" },
            { name: "Клубный чемпионат мира", count: 1, image: "https://i.pinimg.com/originals/41/60/e9/4160e9e356f7ee2746a29a0fbaf92e87.png" },
            { name: "Межконтинентальный кубок", count: 1, image: "https://www.seekpng.com/png/detail/108-1080967_klub-weltmeisterschafts-pokal-trophy-club-world-cup-png.png" }
        ],
        description: "Столп центра обороны. Бразилец, чья скорость и силовая манера игры компенсируют любые пробелы. Главный претендент на звание лучшего защитника мира после ухода Рамоcа. Непревзойден в воздушных дуэлях."
    },
    {
        name: "Антонио Рюдигер",
        number: "22",
        country: {
            name: "Германия",
            flag: "https://avatars.mds.yandex.net/i?id=db2731c8b3b974fd83d0d1416d0633c0_l-5398918-images-thumbs&n=13" 
        },
        realPhoto: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1DIO27.img?w=1200&h=750&m=4&q=97",
        fifaPhoto: "https://fifagc.ru/upfiles/players/25/504-s.png",
        position: "Центральный защитник",
        transferDate: "2.06.2022",
        stats: {
            matches: 95,
            goals: 4,
            tackles: 143,
            interceptions: 87,
            aerialsWon: 165
        },
        trophies: [
            { name: "Ла Лига", count: 1, image: "https://i.pinimg.com/736x/16/e8/99/16e899fe138d15fb1b6ea4da1e40b122.jpg" },
            { name: "Лига чемпионов", count: 1, image: "https://avatars.mds.yandex.net/i?id=a52172799ffdbaedf82602d7d161f102_l-5221613-images-thumbs&n=13" },
            { name: "Кубок Испании", count: 1, image: "https://avatars.mds.yandex.net/i?id=00e7f1637c298a28e0efca170209dc24_l-10704821-images-thumbs&n=13" },
            { name: "Суперкубок Испании", count: 1, image: "https://fbi.cults3d.com/uploaders/15795342/illustration-file/9dcb9eb0-4892-4487-a34f-5998f99178ad/untitled.77.jpg" },
            { name: "Суперкубок УЕФА", count: 2, image: "https://avatars.mds.yandex.net/i?id=4d6449eee02c58f211b7a7e067c111bf_l-5288062-images-thumbs&n=13" },
            { name: "Межконтинентальный кубок", count: 1, image: "https://www.seekpng.com/png/detail/108-1080967_klub-weltmeisterschafts-pokal-trophy-club-world-cup-png.png" }
        ],
        description: "Немецкая стена. Пришел на бесплатный трансфер и стал оплотом обороны. Его физическая мощь (1.90 м, 85 кг) - главное оружие против мощных форвардов. Лидер по выношенным мячам."
    },
    {
        name: "Ферлан Менди",
        number: "23",
        country: {
            name: "Франция",
            flag: "https://steamuserimages-a.akamaihd.net/ugc/2022729808633246684/A935306DE0171D85D57254931244994B6AC2FABB/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false" 
        },
        realPhoto: "https://avatars.mds.yandex.net/i?id=6fb8fb50cb5baed4fd381542f97ffc64_l-4613271-images-thumbs&n=13",
        fifaPhoto: "https://fifagc.ru/upfiles/players/25/10912-s.png",
        position: "Левый защитник",
        transferDate: "12.07.2019",
        stats: {
            matches: 145,
            assists: 15,
            tackles: 187,
            interceptions: 156,
            successfulDribbles: 143
        },
        trophies: [
            { name: "Ла Лига", count: 3, image: "https://i.pinimg.com/736x/16/e8/99/16e899fe138d15fb1b6ea4da1e40b122.jpg" },
            { name: "Лига чемпионов", count: 2, image: "https://avatars.mds.yandex.net/i?id=a52172799ffdbaedf82602d7d161f102_l-5221613-images-thumbs&n=13" },
            { name: "Кубок Испании", count: 1, image: "https://avatars.mds.yandex.net/i?id=00e7f1637c298a28e0efca170209dc24_l-10704821-images-thumbs&n=13" },
            { name: "Суперкубок Испании", count: 3, image: "https://fbi.cults3d.com/uploaders/15795342/illustration-file/9dcb9eb0-4892-4487-a34f-5998f99178ad/untitled.77.jpg" },
            { name: "Суперкубок УЕФА", count: 2, image: "https://avatars.mds.yandex.net/i?id=4d6449eee02c58f211b7a7e067c111bf_l-5288062-images-thumbs&n=13" },
            { name: "Межконтинентальный кубок", count: 1, image: "https://www.seekpng.com/png/detail/108-1080967_klub-weltmeisterschafts-pokal-trophy-club-world-cup-png.png" }
        ],
        description: "Анкер левого фланга. Француз, чьи скоростные качества компенсируют атакующие порывы крайних полузащитников. Самый надежный защитник в 1vs1 по статистике La Liga."
    },
    {
        name: "Федерико Вальверде",
        number: "8",
        country: {
            name: "Уругвай",
            flag: "https://dropi.ru/img/uploads/test/2023-05-02/cbaee863ad683c769af150b721d296df.jpeg" 
        },
        realPhoto: "https://i.pinimg.com/originals/0b/b4/fa/0bb4faf809930f86003b77bfc5115be4.jpg",
        fifaPhoto: "https://fifagc.ru/upfiles/players/25/23025-s.png",
        position: "Центральный полузащитник",
        transferDate: "1.07.2018",
        stats: {
            matches: 231,
            goals: 19,
            assists: 24,
            distanceCovered: "12.8 km",
            longShots: 87
        },
        trophies: [
            { name: "Ла Лига", count: 3, image: "https://i.pinimg.com/736x/16/e8/99/16e899fe138d15fb1b6ea4da1e40b122.jpg" },
            { name: "Лига чемпионов", count: 2, image: "https://avatars.mds.yandex.net/i?id=a52172799ffdbaedf82602d7d161f102_l-5221613-images-thumbs&n=13" },
            { name: "Кубок Испании", count: 1, image: "https://avatars.mds.yandex.net/i?id=00e7f1637c298a28e0efca170209dc24_l-10704821-images-thumbs&n=13" },
            { name: "Суперкубок Испании", count: 3, image: "https://fbi.cults3d.com/uploaders/15795342/illustration-file/9dcb9eb0-4892-4487-a34f-5998f99178ad/untitled.77.jpg" },
            { name: "Суперкубок УЕФА", count: 2, image: "https://avatars.mds.yandex.net/i?id=4d6449eee02c58f211b7a7e067c111bf_l-5288062-images-thumbs&n=13" },
            { name: "Клубный чемпионат мира", count: 2, image: "https://i.pinimg.com/originals/41/60/e9/4160e9e356f7ee2746a29a0fbaf92e87.png" },
            { name: "Межконтинентальный кубок", count: 1, image: "https://www.seekpng.com/png/detail/108-1080967_klub-weltmeisterschafts-pokal-trophy-club-world-cup-png.png" }
        ],
        description: "Уругвайский 'мотор'. Игрок, покрывающий 13+ км за матч - рекордсмен команды по пробегам. Его голы 'из-за штрафной' стали фирменным оружием Реала. Олицетворение неутомимости."
    },
    {
        name: "Джуд Белингем",
        number: "5",
        country: {
            name: "Англия",
            flag: "https://media.baamboozle.com/uploads/images/41367/1593086121_39880" 
        },
        realPhoto: "https://i.pinimg.com/originals/ad/27/d1/ad27d1b8cb59d7476ab9e4736de54501.jpg",
        fifaPhoto: "https://fifagc.ru/upfiles/players/25/34187-s.png",
        position: "Центральный атакующий полузащитник",
        transferDate: "14.06.2023",
        stats: {
            matches: 45,
            goals: 22,
            assists: 14,
            keyPasses: 38,
            distanceCovered: "11.5 km"
        },
        trophies: [
            { name: "Ла Лига", count: 1, image: "https://i.pinimg.com/736x/16/e8/99/16e899fe138d15fb1b6ea4da1e40b122.jpg" },
            { name: "Лига чемпионов", count: 1, image: "https://avatars.mds.yandex.net/i?id=a52172799ffdbaedf82602d7d161f102_l-5221613-images-thumbs&n=13" },
            { name: "Суперкубок Испании", count: 1, image: "https://fbi.cults3d.com/uploaders/15795342/illustration-file/9dcb9eb0-4892-4487-a34f-5998f99178ad/untitled.77.jpg" },
            { name: "Суперкубок УЕФА", count: 1, image: "https://avatars.mds.yandex.net/i?id=4d6449eee02c58f211b7a7e067c111bf_l-5288062-images-thumbs&n=13" },
            { name: "Межконтинентальный кубок", count: 1, image: "https://www.seekpng.com/png/detail/108-1080967_klub-weltmeisterschafts-pokal-trophy-club-world-cup-png.png" }
        ],
        description: "Новый символ эпохи. Самый дорогой трансфер в истории Реала, оправдавший инвестиции с первых месяцев. Сочетание мощи, техники и голевого чутья переопределило понятие 'бокс-ту-бокс'."
    },
    {
        name: "Эдуардо Камавинга",
        number: "6",
        country: {
            name: "Франция",
            flag: "https://steamuserimages-a.akamaihd.net/ugc/2022729808633246684/A935306DE0171D85D57254931244994B6AC2FABB/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false" 
        },
        realPhoto: "https://i.pinimg.com/736x/b9/bf/cf/b9bfcf9a9fd42dc82aed0307ea613531.jpg",
        fifaPhoto: "https://fifagc.ru/upfiles/players/25/30235-s.png",
        position: "Центральный полузащитник",
        transferDate: "31.08.2021",
        stats: {
            matches: 128,
            goals: 4,
            assists: 15,
            tackles: 187,
            passAccuracy: "90%"
        },
        trophies: [
            { name: "Ла Лига", count: 2, image: "https://i.pinimg.com/736x/16/e8/99/16e899fe138d15fb1b6ea4da1e40b122.jpg" },
            { name: "Лига чемпионов", count: 2, image: "https://avatars.mds.yandex.net/i?id=a52172799ffdbaedf82602d7d161f102_l-5221613-images-thumbs&n=13" },
            { name: "Кубок Испании", count: 1, image: "https://avatars.mds.yandex.net/i?id=00e7f1637c298a28e0efca170209dc24_l-10704821-images-thumbs&n=13" },
            { name: "Суперкубок Испании", count: 2, image: "https://fbi.cults3d.com/uploaders/15795342/illustration-file/9dcb9eb0-4892-4487-a34f-5998f99178ad/untitled.77.jpg" },
            { name: "Суперкубок УЕФА", count: 2, image: "https://avatars.mds.yandex.net/i?id=4d6449eee02c58f211b7a7e067c111bf_l-5288062-images-thumbs&n=13" },
            { name: "Клубный чемпионат мира", count: 1, image: "https://i.pinimg.com/originals/41/60/e9/4160e9e356f7ee2746a29a0fbaf92e87.png"},
            { name: "Межконтинентальный кубок", count: 1, image: "https://www.seekpng.com/png/detail/108-1080967_klub-weltmeisterschafts-pokal-trophy-club-world-cup-png.png" }
        ],
        description: "Дирижер полузащиты. Французский вундеркинд, чьи пасы 'разрывают' любую оборону. Самый прогрессирующий игрок сезона-2023/24. Его видение поля сравнивают с Кроосом в лучшие годы."
    },
    {
        name: "Орельен Тчуамени",
        number: "14",
        country: {
            name: "Франция",
            flag: "https://steamuserimages-a.akamaihd.net/ugc/2022729808633246684/A935306DE0171D85D57254931244994B6AC2FABB/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false"
        },
        realPhoto: "https://stadion.uz/images/news/Tchouameni-rmaosa.jpg",
        fifaPhoto: "https://fifagc.ru/upfiles/players/25/25251-s.png",
        position: "Центральный оборонительный полузащитник",
        transferDate: "1.08.2022",
        stats: {
            matches: 85,
            goals: 3,
            tackles: 143,
            interceptions: 127,
            longPasses: 198
        },
        trophies: [
            { name: "Ла Лига", count: 1, image: "https://i.pinimg.com/736x/16/e8/99/16e899fe138d15fb1b6ea4da1e40b122.jpg" },
            { name: "Лига чемпионов", count: 1, image: "https://avatars.mds.yandex.net/i?id=a52172799ffdbaedf82602d7d161f102_l-5221613-images-thumbs&n=13" },
            { name: "Кубок Испании", count: 1, image: "https://avatars.mds.yandex.net/i?id=00e7f1637c298a28e0efca170209dc24_l-10704821-images-thumbs&n=13" },
            { name: "Суперкубок Испании", count: 1, image: "https://fbi.cults3d.com/uploaders/15795342/illustration-file/9dcb9eb0-4892-4487-a34f-5998f99178ad/untitled.77.jpg" },
            { name: "Суперкубок УЕФА", count: 2, image: "https://avatars.mds.yandex.net/i?id=4d6449eee02c58f211b7a7e067c111bf_l-5288062-images-thumbs&n=13" },
            { name: "Межконтинентальный кубок", count: 1, image: "https://www.seekpng.com/png/detail/108-1080967_klub-weltmeisterschafts-pokal-trophy-club-world-cup-png.png" }
        ],
        description: "Преемник Касемиро. Французский 'разрушитель', чьи отборы запускают контратаки. Ключевое звено в балансе между обороной и атакой. Лучший в команде по проценту выигранных единоборств."
    },
    {
        name: "Арда Гюлер",
        number: "15",
        country: {
            name: "Турция",
            flag: "https://i.pinimg.com/originals/17/b9/94/17b9942eb3c451c66be9984fa114fd4f.jpg"
        },
        realPhoto: "https://cdn1.ntv.com.tr/gorsel/baYmzcWpQUmmTFb8YVVTmA.jpg?width=1000&mode=both&scale=both&v=1691572279881",
        fifaPhoto: "https://fifagc.ru/upfiles/players/25/39793-s.png",
        position: "Центральный атакующий полузащитник",
        transferDate: "6.07.2023",
        stats: {
            matches: 28,
            goals: 8,
            assists: 7,
            keyPasses: 23,
            successfulDribbles: 54
        },
        trophies: [
            { name: "Ла Лига", count: 1, image: "https://i.pinimg.com/736x/16/e8/99/16e899fe138d15fb1b6ea4da1e40b122.jpg" },
            { name: "Лига чемпионов", count: 1, image: "https://avatars.mds.yandex.net/i?id=a52172799ffdbaedf82602d7d161f102_l-5221613-images-thumbs&n=13" },
            { name: "Суперкубок Испании", count: 1, image: "https://fbi.cults3d.com/uploaders/15795342/illustration-file/9dcb9eb0-4892-4487-a34f-5998f99178ad/untitled.77.jpg" },
            { name: "Суперкубок УЕФА", count: 1, image: "https://avatars.mds.yandex.net/i?id=4d6449eee02c58f211b7a7e067c111bf_l-5288062-images-thumbs&n=13" },
            { name: "Межконтинентальный кубок", count: 1, image: "https://www.seekpng.com/png/detail/108-1080967_klub-weltmeisterschafts-pokal-trophy-club-world-cup-png.png" }
        ],
        description: "Турецкое чудо. Самый молодой автор гола в эль-класико XXI века. Техничный плеймейкер, сравнимый с Модричем в юности. Главная надежда на творческую составляющую игры."
    },
    {
        name: "Дани Себальос",
        number: "19",
        country: {
            name: "Испания",
            flag: "https://static.tildacdn.com/tild6461-3939-4331-b433-633362646336/1.jpg"
        },
        realPhoto: "https://static.onzemondial.com/8/2022/07/photo_article/785532/310248/1200-L-real-madrid-ceballos-se-confie-sur-son-futur-et-affiche-de-grosses-ambitions.jpg",
        fifaPhoto: "https://fifagc.ru/upfiles/players/25/3742-s.png",
        position: "Центральный полузащитник",
        transferDate: "14.08.2017",
        stats: {
            matches: 165,
            goals: 12,
            assists: 24,
            keyPasses: 54,
            passAccuracy: "89%"
        },
        trophies: [
            { name: "Ла Лига", count: 2, image: "https://i.pinimg.com/736x/16/e8/99/16e899fe138d15fb1b6ea4da1e40b122.jpg" },
            { name: "Лига чемпионов", count: 3, image: "https://avatars.mds.yandex.net/i?id=a52172799ffdbaedf82602d7d161f102_l-5221613-images-thumbs&n=13" },
            { name: "Кубок Испании", count: 1, image: "https://avatars.mds.yandex.net/i?id=00e7f1637c298a28e0efca170209dc24_l-10704821-images-thumbs&n=13" },
            { name: "Суперкубок Испании", count: 3, image: "https://fbi.cults3d.com/uploaders/15795342/illustration-file/9dcb9eb0-4892-4487-a34f-5998f99178ad/untitled.77.jpg" },
            { name: "Суперкубок УЕФА", count: 2, image: "https://avatars.mds.yandex.net/i?id=4d6449eee02c58f211b7a7e067c111bf_l-5288062-images-thumbs&n=13" },
            { name: "Клубный чемпионат мира", count: 3, image: "https://i.pinimg.com/originals/41/60/e9/4160e9e356f7ee2746a29a0fbaf92e87.png" },
            { name: "Межконтинентальный кубок", count: 1, image: "https://www.seekpng.com/png/detail/108-1080967_klub-weltmeisterschafts-pokal-trophy-club-world-cup-png.png" }
        ],
        description: "Игрок ротации с чемпионской ДНК. Выпускник академии, возвращенный для сохранения 'испанского духа'. Мастер сохранения мяча в центре при игре на результат."
    },
    {
        name: "Винисиус Жуниор",
        number: "7",
        country: {
            name: "Бразилия",
            flag: "https://www.linguatrans.com/wp-content/uploads/2022/07/brazil-g01815d337_1920-1920x1080.jpg"
        },
        realPhoto: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1tiHNl.img?w=634&h=423&m=6&x=301&y=119&s=82&d=82",
        fifaPhoto: "https://fifagc.ru/upfiles/players/25/26889-s.png",
        position: "Левый нападающий",
        transferDate: "23.05.2017",
        stats: {
            matches: 245,
            goals: 78,
            assists: 65,
            successfulDribbles: 423,
            topSpeed: "36.5 km/h"
        },
        trophies: [
            { name: "Ла Лига", count: 3, image: "https://i.pinimg.com/736x/16/e8/99/16e899fe138d15fb1b6ea4da1e40b122.jpg" },
            { name: "Лига чемпионов", count: 2, image: "https://avatars.mds.yandex.net/i?id=a52172799ffdbaedf82602d7d161f102_l-5221613-images-thumbs&n=13" },
            { name: "Кубок Испании", count: 1, image: "https://avatars.mds.yandex.net/i?id=00e7f1637c298a28e0efca170209dc24_l-10704821-images-thumbs&n=13" },
            { name: "Суперкубок Испании", count: 3, image: "https://fbi.cults3d.com/uploaders/15795342/illustration-file/9dcb9eb0-4892-4487-a34f-5998f99178ad/untitled.77.jpg" },
            { name: "Суперкубок УЕФА", count: 2, image: "https://avatars.mds.yandex.net/i?id=4d6449eee02c58f211b7a7e067c111bf_l-5288062-images-thumbs&n=13" },
            { name: "Клубный чемпионат мира", count: 2, image: "https://i.pinimg.com/originals/41/60/e9/4160e9e356f7ee2746a29a0fbaf92e87.png" },
            { name: "Межконтинентальный кубок", count: 1, image: "https://www.seekpng.com/png/detail/108-1080967_klub-weltmeisterschafts-pokal-trophy-club-world-cup-png.png" }
        ],
        description: "Главный дриблер и душа атаки. Бразилец, заменивший Роналду в сердцах болельщиков. Автор победного гола в двух финалах ЛЧ. Его скорость на фланге - основной козырь тактики Хабби."
    },
    {
        name: "Килиан Мбаппе",
        number: "9",
        country: {
            name: "Франция",
            flag: "https://steamuserimages-a.akamaihd.net/ugc/2022729808633246684/A935306DE0171D85D57254931244994B6AC2FABB/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false"
        },
        realPhoto: "https://www.soccer.ru/sites/default/files/blogs/records/nd_liga_barcelona_rm_alegria_mbappe_noticia_av29594.jpg",
        fifaPhoto: "https://fifagc.ru/upfiles/players/25/4967-s.png",
        position: "Центральный нападающий",
        transferDate: "1.08.2024",
        stats: {
            matches: 41,
            goals: 41,
            assists: 10,
            shotsOnTarget: 87,
            topSpeed: "37.1 km/h"
        },
        trophies: [
            { name: "Суперкубок УЕФА", count: 1, image: "https://avatars.mds.yandex.net/i?id=4d6449eee02c58f211b7a7e067c111bf_l-5288062-images-thumbs&n=13" },
            { name: "Межконтинентальный кубок", count: 1, image: "https://www.seekpng.com/png/detail/108-1080967_klub-weltmeisterschafts-pokal-trophy-club-world-cup-png.png" }
        ],
        description: "Коронационный трансфер. Решение 15-летней 'охоты' клуба. Главный снайпер новой эры, пришедший за статусом лучшего игрока мира. Его дуэль с Холандом определяет лицо современного футбола."
    },
    {
        name: "Родриго",
        number: "11",
        country: {
            name: "Бразилия",
            flag: "https://www.linguatrans.com/wp-content/uploads/2022/07/brazil-g01815d337_1920-1920x1080.jpg"
        },
        realPhoto: "https://img.championat.com/s/1350x900/news/big/c/i/igrok-reala-rodrigo-manchester-siti-luchshaya-komanda-v-mire_1717086261940250554.jpg",
        fifaPhoto: "https://fifagc.ru/upfiles/players/25/29951-s.png",
        position: "Правый нападающий",
        transferDate: "1.08.2019",
        stats: {
            matches: 210,
            goals: 54,
            assists: 42,
            firstTouchGoals: 28,
            successfulDribbles: 187
        },
        trophies: [
            { name: "Ла Лига", count: 3, image: "https://i.pinimg.com/736x/16/e8/99/16e899fe138d15fb1b6ea4da1e40b122.jpg" },
            { name: "Лига чемпионов", count: 2, image: "https://avatars.mds.yandex.net/i?id=a52172799ffdbaedf82602d7d161f102_l-5221613-images-thumbs&n=13" },
            { name: "Кубок Испании", count: 1, image: "https://avatars.mds.yandex.net/i?id=00e7f1637c298a28e0efca170209dc24_l-10704821-images-thumbs&n=13" },
            { name: "Суперкубок Испании", count: 3, image: "https://fbi.cults3d.com/uploaders/15795342/illustration-file/9dcb9eb0-4892-4487-a34f-5998f99178ad/untitled.77.jpg" },
            { name: "Суперкубок УЕФА", count: 2, image: "https://avatars.mds.yandex.net/i?id=4d6449eee02c58f211b7a7e067c111bf_l-5288062-images-thumbs&n=13" },
            { name: "Клубный чемпионат мира", count: 1, image: "https://i.pinimg.com/originals/41/60/e9/4160e9e356f7ee2746a29a0fbaf92e87.png" },
            { name: "Межконтинентальный кубок", count: 1, image: "https://www.seekpng.com/png/detail/108-1080967_klub-weltmeisterschafts-pokal-trophy-club-world-cup-png.png" }
        ],
        description: "Специалист по решающим моментам. Автор легендарных дублей в плей-офф ЛЧ-2022. Идеальный 'чистильщик' в штрафной - 85% голевых касаний приходятся на 1-2 касания."
    },
    {
        name: "Эндрик Фелипе",
        number: "16",
        country: {
            name: "Бразилия",
            flag: "https://www.linguatrans.com/wp-content/uploads/2022/07/brazil-g01815d337_1920-1920x1080.jpg"
        },
        realPhoto: "https://img.championat.com/s/1350x900/news/big/d/g/18-letnij-endrik-prokommentiroval-dubl-za-real-v-vorota-selty-v-kubke-ispanii_17370722361261764514.jpg",
        fifaPhoto: "https://fifagc.ru/upfiles/players/25/49517-s.png",
        position: "Центральный нападающий",
        transferDate: "21.08.2024",
        stats: {
            matches: 12,
            goals: 7,
            assists: 3,
            shotsOnTarget: 15,
            topSpeed: "35.8 km/h"
        },
        trophies: [
            { name: "Ла Лига", count: 1, image: "https://i.pinimg.com/736x/16/e8/99/16e899fe138d15fb1b6ea4da1e40b122.jpg" },
            { name: "Лига чемпионов", count: 1, image: "https://avatars.mds.yandex.net/i?id=a52172799ffdbaedf82602d7d161f102_l-5221613-images-thumbs&n=13" },
            { name: "Суперкубок Испании", count: 1, image: "https://fbi.cults3d.com/uploaders/15795342/illustration-file/9dcb9eb0-4892-4487-a34f-5998f99178ad/untitled.77.jpg" },
            { name: "Суперкубок УЕФА", count: 1, image: "https://avatars.mds.yandex.net/i?id=4d6449eee02c58f211b7a7e067c111bf_l-5288062-images-thumbs&n=13" },
            { name: "Межконтинентальный кубок", count: 1, image: "https://www.seekpng.com/png/detail/108-1080967_klub-weltmeisterschafts-pokal-trophy-club-world-cup-png.png" }
        ],
        description: "Инвестиция в будущее. Бразильский феномен, купленный в 16 лет. Сочетание физики Халана и техники Роналдо. Первый игрок с 2007 года, забивший в первых 3 матчах за основу."
    },
    {
        name: "Браим Диас",
        number: "21",
        country: {
            name: "Мароко",
            flag: "https://kollekcioner24.ru/image/catalog/marokko.jpg"
        },
        realPhoto: "https://img.championat.com/s/1350x900/news/big/v/i/braim-dias-budet-vyzvan-v-sbornuyu-ispanii-spustya-tri-goda_1708144536882126884.jpg",
        fifaPhoto: "https://fifagc.ru/upfiles/players/25/3935-s.png",
        position: "Правый нападающий",
        transferDate: "7.01.2019",
        stats: {
            matches: 132,
            goals: 24,
            assists: 18,
            successfulDribbles: 243,
            keyPasses: 54
        },
        trophies: [
            { name: "Ла Лига", count: 2, image: "https://i.pinimg.com/736x/16/e8/99/16e899fe138d15fb1b6ea4da1e40b122.jpg" },
            { name: "Лига чемпионов", count: 1, image: "https://avatars.mds.yandex.net/i?id=a52172799ffdbaedf82602d7d161f102_l-5221613-images-thumbs&n=13" },
            { name: "Кубок Испании", count: 1, image: "https://avatars.mds.yandex.net/i?id=00e7f1637c298a28e0efca170209dc24_l-10704821-images-thumbs&n=13" },
            { name: "Суперкубок Испании", count: 2, image: "https://fbi.cults3d.com/uploaders/15795342/illustration-file/9dcb9eb0-4892-4487-a34f-5998f99178ad/untitled.77.jpg" },
            { name: "Суперкубок УЕФА", count: 2, image: "https://avatars.mds.yandex.net/i?id=4d6449eee02c58f211b7a7e067c111bf_l-5288062-images-thumbs&n=13" },
            { name: "Межконтинентальный кубок", count: 1, image: "https://www.seekpng.com/png/detail/108-1080967_klub-weltmeisterschafts-pokal-trophy-club-world-cup-png.png" }
        ],
        description: "Тактический 'джедай'. Марокканец, расцветший после возвращения из Милана. Специалист по 'разблокировке' плотных защит. Рекордсмен по обводкам в штрафной среди полузащитников."
    }
];
let currentPlayerIndex = 0;

// Улучшенная функция для определения категории игрока
function getPlayerCategory(position) {
    position = position.toLowerCase();
    
    // Вратари
    if (position.includes('вратарь')) {
        return 'goalkeeper';
    }
    
    // Защитники (исключая полузащитников)
    if ((position.includes('защитник') || 
         position.includes('центральный защитник')) && 
        !position.includes('полузащитник')) {
        return 'defender';
    }
    
    // Полузащитники
    if (position.includes('полузащитник') || 
        position.includes('опорный')) {
        return 'midfielder';
    }
    
    // Нападающие
    if (position.includes('нападающий') || 
        position.includes('форвард') || 
        position.includes('крайний нападающий')) {
        return 'forward';
    }
    
    return 'other';
}

// Функция для загрузки данных игрока
function loadPlayerData(index) {
    const player = players[index];
    document.querySelector(".player-name").textContent = player.name;
    document.querySelector(".player-number").textContent = `№ ${player.number}`;
    
    const countryFlag = document.querySelector(".country-flag");
    const countryName = document.querySelector(".country-name");
    countryFlag.src = player.country.flag;
    countryFlag.alt = `Флаг ${player.country.name}`;
    countryName.textContent = player.country.name;

    document.querySelector(".player-position").textContent = player.position;
    document.querySelector(".transfer-date").textContent = `Дата перехода: ${player.transferDate}`;
    document.querySelector(".player-real-photo").src = player.realPhoto;
    document.querySelector(".player-fifa-photo").src = player.fifaPhoto;
    document.querySelector(".description-text").textContent = player.description;

    // Загрузка статистики
    const statsContent = document.querySelector(".stats-content");
    statsContent.innerHTML = "";
    
    // Определяем категорию для стилей
    const category = getPlayerCategory(player.position);
    statsContent.className = "stats-content " + category + "-stats";
    
    // Специальные метки для разных позиций
    const statLabels = {
        matches: "Матчи",
        goals: "Голы",
        assists: "Голевые передачи",
        cleanSheets: "Сухие матчи",
        goalsConceded: "Пропущенные голы",
        saves: "Сейвы",
        penaltySaves: "Отбитые пенальти",
        catches: "Захваты мяча",
        punches: "Выбивания",
        cleanSheetPercentage: "Процент сухих матчей",
        tackles: "Отборы",
        interceptions: "Перехваты",
        clearances: "Выносы",
        aerialsWon: "Верховые единоборства (выиграно)",
        successfulDribbles: "Успешные обводки",
        distanceCovered: "Пройденная дистанция",
        longShots: "Дальние удары",
        passAccuracy: "Точность передач",
        longPasses: "Длинные передачи",
        keyPasses: "Ключевые передачи",
        shotsOnTarget: "Удары в створ",
        firstTouchGoals: "Голы с первого касания",
        topSpeed: "Максимальная скорость"
    };
    
    for (const [key, value] of Object.entries(player.stats)) {
        const statElement = document.createElement("div");
        statElement.className = "stat-item";
        statElement.innerHTML = `
            <div class="stat-name">${statLabels[key] || key}</div>
            <div class="stat-value">${value}</div>
        `;
        statsContent.appendChild(statElement);
    }

    // Загрузка трофеев
    const trophiesGrid = document.querySelector(".trophies-grid");
    trophiesGrid.innerHTML = "";
    player.trophies.forEach(trophy => {
        const trophyItem = document.createElement("div");
        trophyItem.className = "trophy-item";
        trophyItem.innerHTML = `
            <img src="${trophy.image}" alt="${trophy.name}">
            <p>${trophy.name} (${trophy.count})</p>
        `;
        trophiesGrid.appendChild(trophyItem);
    });
}

// Инициализация списка игроков с категориями
function initPlayerList() {
    const categories = {
        all: players,
        goalkeeper: players.filter(p => getPlayerCategory(p.position) === 'goalkeeper'),
        defender: players.filter(p => getPlayerCategory(p.position) === 'defender'),
        midfielder: players.filter(p => getPlayerCategory(p.position) === 'midfielder'),
        forward: players.filter(p => getPlayerCategory(p.position) === 'forward')
    };

    // Обработчики для кнопок категорий
    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const category = btn.dataset.category;
            renderPlayerList(categories[category] || categories.all);
        });
    });

    // Первоначальная загрузка всех игроков
    renderPlayerList(players);
}

// Рендер списка игроков
function renderPlayerList(playersToShow) {
    const playersList = document.getElementById("players-list");
    playersList.innerHTML = "";
    
    if (playersToShow.length === 0) {
        playersList.innerHTML = "<p>Нет игроков в этой категории</p>";
        return;
    }
    
    playersToShow.forEach((player, index) => {
        const playerItem = document.createElement("div");
        playerItem.className = "player-item";
        playerItem.innerHTML = `
            <strong>${player.number}.</strong> ${player.name}
        `;
        playerItem.addEventListener("click", () => {
            currentPlayerIndex = players.findIndex(p => p.name === player.name);
            loadPlayerData(currentPlayerIndex);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        playersList.appendChild(playerItem);
    });
}

// Навигация
document.querySelector(".prev-btn").addEventListener("click", () => {
    if (currentPlayerIndex > 0) {
        currentPlayerIndex--;
        loadPlayerData(currentPlayerIndex);
    }
});

document.querySelector(".next-btn").addEventListener("click", () => {
    if (currentPlayerIndex < players.length - 1) {
        currentPlayerIndex++;
        loadPlayerData(currentPlayerIndex);
    }
});

// Запуск при загрузке страницы
window.onload = () => {
    loadPlayerData(0);
    initPlayerList();
};