document.addEventListener('DOMContentLoaded', function() {
    const trophies = {
        international: [
            {
                title: "Лига чемпионов УЕФА",
                count: "15",
                years: ["1956", "1957", "1958", "1959", "1960", "1966", "1998", "2000", "2002", "2014", "2016", "2017", "2018", "2022", "2024"],
                embedCode: "<iframe src=\"https://vk.com/video_ext.php?oid=-23693281&id=456253582&hd=2\" width=\"853\" height=\"480\" allow=\"encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;\" frameborder=\"0\" allowfullscreen></iframe>",
                description: "Самый престижный клубный турнир Европы. Реал Мадрид – рекордсмен по количеству побед, завоевав 15 кубков, что значительно больше, чем у любого другого клуба.  Эти победы отражают доминирование клуба на протяжении многих десятилетий,  подтверждая его статус одного из величайших в истории футбола.",
                image: "https://img.championat.com/i/o/f/1717532527406683956.jpg"
            },
            {
                title: "Клубный чемпионат мира",
                count: "5",
                years: ["2014", "2016", "2017", "2018", "2022"],
                embedCode: "",
                description: "Ежегодный турнир, в котором участвуют лучшие клубы со всего мира.  Победы Реал Мадрида в Клубном чемпионате мира подтверждают его глобальное превосходство и статус одного из сильнейших клубов планеты.  Это достижение демонстрирует способность команды конкурировать и побеждать на международной арене.",
                image: "https://i.pinimg.com/originals/ba/d2/7e/bad27e675ea948a0faf4dba5e4d95f8c.jpg"
            },
            {
                title: "Суперкубок УЕФА",
                count: "6",
                years: ["2002", "2014", "2016", "2017", "2022", "2024"],
                embedCode: "",
                description: "Матч между победителями Лиги чемпионов УЕФА и Лиги Европы УЕФА.  Этот трофей является дополнительным подтверждением силы и мастерства Реал Мадрида. Победы в Суперкубке УЕФА демонстрируют готовность команды к самым сложным матчам и способность побеждать лучших клубов Европы.",
                image: "https://img.gazeta.ru/files3/437/19577437/kepav-pic_32ratio_900x600-900x600-72427.jpg"
            }
        ],
        domestic: [
            {
                title: "Ла Лига",
                count: "36",
                years: ["1932", "1933", "1954", "1955", "1957", "1958", "1961", "1962", "1963", "1964", "1965", "1967", "1968", "1969", "1972", "1975", "1976", "1978", "1979", "1980", "1986", "1987", "1988", "1989", "1990", "1995", "1997", "2001", "2003", "2007", "2008", "2012", "2017", "2020", "2022", "2024"],
                embedCode: "<iframe src=\"https://vk.com/video_ext.php?oid=-20499235&id=456239090&hd=1\" width=\"640\" height=\"360\" allow=\"encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;\" frameborder=\"0\" allowfullscreen></iframe>", 
                description: "Чемпионат Испании по футболу.  Рекордное количество побед в Ла Лиге  подчеркивает длительное и непрерывное доминирование Реал Мадрида на национальном уровне.  Это свидетельство постоянного высокого качества игры и стабильности результатов на протяжении многих лет.",
                image: "https://avatars.mds.yandex.net/i?id=2ae86af7a23b528992b6b6791fedcb16_l-5879065-images-thumbs&n=13"
            },
            {
                title: "Кубок Испании",
                count: "20",
                years: ["1905", "1906", "1907", "1908", "1917", "1934", "1936", "1946", "1947", "1962", "1970", "1974", "1975", "1980", "1982", "1989", "1993", "2011", "2014", "2023"],
                embedCode: "<iframe src=\"https://vk.com/video_ext.php?oid=-23403635&id=456241273&hd=2\" width=\"853\" height=\"480\" allow=\"encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;\" frameborder=\"0\" allowfullscreen></iframe>", 
                description: "Кубок Короля — это престижный кубковый турнир Испании.  Множество побед Реал Мадрида в Кубке Испании демонстрирует его способность добиваться успеха в различных форматах соревнований.  Это трофей, который подчеркивает разносторонность и силу клуба.",
                image: "https://glasnarod.ru/wp-content/uploads/2023/05/photo_2023-05-07_08-19-03-886x0-c-default.jpg" 
            },
            {
                title: "Суперкубок Испании",
                count: "13",
                years: ["1988", "1989", "1990", "1993", "1997", "2001", "2003", "2008", "2012", "2017", "2020", "2022", "2024"],
                embedCode: "<iframe src=\"https://vk.com/video_ext.php?oid=-214696315&id=456239190&hd=2\" width=\"853\" height=\"480\" allow=\"encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;\" frameborder=\"0\" allowfullscreen></iframe>", 
                description: "Суперкубок Испании разыгрывается между чемпионом Ла Лиги и обладателем Кубка Испании.  Многочисленные победы Реал Мадрида в этом турнире подтверждают его стабильное превосходство на национальной арене и умение побеждать лучших клубов Испании.",
                image: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_662611f392564f0f3b1ac489_662611fd92564f0f3b1ac638/scale_1200" 
            }
        ]
    };

    function createTrophyCard(trophy) {
        let mediaContent;
        if (trophy.embedCode) {
            mediaContent = trophy.embedCode;
        } else if (trophy.image) {
            mediaContent = `<img src="${trophy.image}" alt="${trophy.title}" class="trophy-image">`;
        } else {
            mediaContent = `<div class="trophy-video-placeholder">Изображение отсутствует</div>`;
        }
        
        const yearsHtml = trophy.years 
            ? `<div class="trophy-years"><strong>Годы побед:</strong> ${trophy.years.join(', ')}</div>` 
            : '';
        
        return `
            <div class="trophy-card">
                <div class="trophy-media">
                    ${mediaContent}
                </div>
                <div class="trophy-info">
                    <div class="trophy-title">${trophy.title}</div>
                    <div class="trophy-count">${trophy.count} побед</div>
                    <div class="trophy-description">${trophy.description}</div>
                    ${yearsHtml}
                </div>
            </div>
        `;
    }

    // Остальной код (createTrophiesChart, заполнение контейнеров) остается без изменений
    function createTrophiesChart() {
        const ctx = document.getElementById('trophies-chart').getContext('2d');

        const trophyYears = [];
        trophies.international.forEach(trophy => trophyYears.push(...trophy.years));
        trophies.domestic.forEach(trophy => trophyYears.push(...trophy.years));
        trophyYears.sort((a, b) => parseInt(a) - parseInt(b));

        const chartData = {};
        for (const year of trophyYears) {
            const period = Math.floor(parseInt(year) / 5) * 5;
            const periodLabel = `${period}-${period + 5}`;
            chartData[periodLabel] = (chartData[periodLabel] || 0) + 1;
        }

        const labels = Object.keys(chartData);
        const dataValues = Object.values(chartData);

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Количество трофеев',
                    data: dataValues,
                    borderWidth: 1,
                    backgroundColor: 'rgba(0, 82, 159, 0.7)',
                    borderColor: 'rgba(0, 82, 159, 1)'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Трофеи Реал Мадрид по 5-летним периодам',
                        font: {
                            size: 18
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            maxRotation: 90,
                            minRotation: 45
                        }
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    const internationalContainer = document.getElementById('international-trophies');
    const domesticContainer = document.getElementById('domestic-trophies');

    trophies.international.forEach(trophy => {
        internationalContainer.innerHTML += createTrophyCard(trophy);
    });
    trophies.domestic.forEach(trophy => {
        domesticContainer.innerHTML += createTrophyCard(trophy);
    });

    createTrophiesChart();
});