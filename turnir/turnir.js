const API_KEY = 'ba88cd2ed0084669ae127eecb33d58c9'; // Замените на ваш ключ
const CACHE_TIME = 7000000; // 1 час

document.addEventListener('DOMContentLoaded', () => {
    // Инициализация табов
    initTabs();
    
    // Загрузка данных при открытии соответствующей вкладки
    document.querySelector('.tab-button[data-tab="laliga"]').addEventListener('click', () => {
        fetchLaLigaTable();
    });
    
    document.querySelector('.tab-button[data-tab="ucl"]').addEventListener('click', () => {
        fetchUCLTables();
    });
    
    // Загружаем данные для активной вкладки
    fetchLaLigaTable();
});
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
function initTabs() {
    const tabs = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Убираем активный класс у всех кнопок и контента
            document.querySelectorAll('.tab-button').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Добавляем активный класс к выбранной вкладке
            tab.classList.add('active');
            document.getElementById(`${tab.dataset.tab}-tab`).classList.add('active');
        });
    });
}

async function fetchLaLigaTable() {
    const container = document.getElementById('laliga-table-container');
    const cacheKey = 'laligaStandings';
    
    try {
        const data = await fetchWithCache(
            'https://api.football-data.org/v4/competitions/PD/standings',
            cacheKey
        );
        displayLeagueTable(data, container, 'La Liga');
    } catch (error) {
        handleDataError(error, container, cacheKey);
    }
}

async function fetchUCLTables() {
    const container = document.getElementById('ucl-table-container');
    const cacheKey = 'uclStandings';
    
    try {
        const data = await fetchWithCache(
            'https://api.football-data.org/v4/competitions/CL/standings',
            cacheKey
        );
        displayUCLTables(data, container);
    } catch (error) {
        handleDataError(error, container, cacheKey);
    }
}

async function fetchWithCache(url, cacheKey) {
    // Проверка кэша
    const cachedData = localStorage.getItem(cacheKey);
    const lastUpdated = localStorage.getItem(`${cacheKey}_time`);
    
    if (cachedData && lastUpdated && (Date.now() - lastUpdated < CACHE_TIME)) {
        return JSON.parse(cachedData);
    }
    
    // Запрос к API
    const response = await fetch(url, {
        headers: {
            'X-Auth-Token': API_KEY,
            'Accept': 'application/json'
        }
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || `HTTP error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Сохранение в кэш
    localStorage.setItem(cacheKey, JSON.stringify(data));
    localStorage.setItem(`${cacheKey}_time`, Date.now());
    
    return data;
}

function displayLeagueTable(data, container, leagueName) {
    if (!data?.standings?.[0]?.table) {
        container.innerHTML = `<p class="error">Данные таблицы не найдены</p>`;
        return;
    }

    const season = data.season ? 
        `${data.season.startDate.slice(0,4)}/${data.season.endDate.slice(2,4)}` : 
        '2024/2025';

    let html = `
        <h2>${leagueName} ${season}</h2>
        <table>
            <thead>
                <tr>
                    <th>Поз.</th>
                    <th>Команда</th>
                    <th>И</th>
                    <th>В</th>
                    <th>Н</th>
                    <th>П</th>
                    <th>ГЗ</th>
                    <th>ГП</th>
                    <th>РМ</th>
                    <th>Очки</th>
                </tr>
            </thead>
            <tbody>
    `;

    data.standings[0].table.forEach(team => {
        html += `
            <tr>
                <td>${team.position}</td>
                <td class="team-name">
                    <img src="${team.team.crest || 'https://via.placeholder.com/20'}" 
                         alt="${team.team.name}" 
                         height="20" 
                         onerror="this.src='https://via.placeholder.com/20'">
                    ${team.team.shortName || team.team.name}
                </td>
                <td>${team.playedGames}</td>
                <td>${team.won}</td>
                <td>${team.draw}</td>
                <td>${team.lost}</td>
                <td>${team.goalsFor}</td>
                <td>${team.goalsAgainst}</td>
                <td>${team.goalDifference}</td>
                <td><strong>${team.points}</strong></td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    html += `<p class="update-time">Обновлено: ${new Date().toLocaleString()}</p>`;
    container.innerHTML = html;
}

function displayUCLTables(data, container) {
    if (!data?.standings || data.standings.length === 0) {
        container.innerHTML = `<p class="error">Данные Лиги Чемпионов не найдены</p>`;
        return;
    }

    const season = data.season ? 
        `${data.season.startDate.slice(0,4)}/${data.season.endDate.slice(2,4)}` : 
        '2024/2025';

    let html = `
        <h2>Лига Чемпионов УЕФА ${season}</h2>
    `;

    data.standings.forEach(group => {
        html += `
            <div class="group-table">
                <div class="group-name">Группа ${group.group.replace('GROUP_', '')}</div>
                <table>
                    <thead>
                        <tr>
                            <th>Поз.</th>
                            <th>Команда</th>
                            <th>И</th>
                            <th>В</th>
                            <th>Н</th>
                            <th>П</th>
                            <th>ГЗ</th>
                            <th>ГП</th>
                            <th>РМ</th>
                            <th>Очки</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        group.table.forEach(team => {
            html += `
                <tr>
                    <td>${team.position}</td>
                    <td class="team-name">
                        <img src="${team.team.crest || 'https://via.placeholder.com/20'}" 
                             alt="${team.team.name}" 
                             height="20" 
                             onerror="this.src='https://via.placeholder.com/20'">
                        ${team.team.shortName || team.team.name}
                    </td>
                    <td>${team.playedGames}</td>
                    <td>${team.won}</td>
                    <td>${team.draw}</td>
                    <td>${team.lost}</td>
                    <td>${team.goalsFor}</td>
                    <td>${team.goalsAgainst}</td>
                    <td>${team.goalDifference}</td>
                    <td><strong>${team.points}</strong></td>
                </tr>
            `;
        });

        html += `</tbody></table></div>`;
    });

    html += `<p class="update-time">Обновлено: ${new Date().toLocaleString()}</p>`;
    container.innerHTML = html;
}

function handleDataError(error, container, cacheKey) {
    console.error('Ошибка:', error);
    
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
        container.innerHTML = `<p class="error">Ошибка загрузки свежих данных. Показаны сохранённые данные.</p>`;
        if (cacheKey === 'laligaStandings') {
            displayLeagueTable(JSON.parse(cachedData), container, 'La Liga');
        } else {
            displayUCLTables(JSON.parse(cachedData), container);
        }
    } else {
        container.innerHTML = `<p class="error">${error.message || 'Не удалось загрузить данные. Попробуйте позже.'}</p>`;
    }
}