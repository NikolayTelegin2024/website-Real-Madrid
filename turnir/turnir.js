async function fetchLaLigaTable() {
    const apiUrl = 'https://sstats.net/api/leagues/table?league=laliga&season=2023-24';
    const apiKey = '75kwgw7361l0l1ir'; // Замените на ваш ключ

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();
        displayTable(data);
    } catch (error) {
        console.error('Ошибка:', error);
        document.getElementById('laliga-table-container').innerHTML = 
            `<p class="error">Не удалось загрузить данные. Попробуйте позже.</p>`;
    }
}

function displayTable(data) {
    const container = document.getElementById('laliga-table-container');
    
    if (!data?.table) {
        container.innerHTML = `<p class="error">Данные не найдены.</p>`;
        return;
    }

    let html = `
        <h2>${data.league || 'La Liga'} ${data.season || '2023-24'}</h2>
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

    data.table.forEach(team => {
        html += `
            <tr>
                <td>${team.position || '-'}</td>
                <td class="team-name">${team.team || '-'}</td>
                <td>${team.played || '0'}</td>
                <td>${team.wins || '0'}</td>
                <td>${team.draws || '0'}</td>
                <td>${team.losses || '0'}</td>
                <td>${team.goals_for || '0'}</td>
                <td>${team.goals_against || '0'}</td>
                <td>${team.goal_difference || '0'}</td>
                <td><strong>${team.points || '0'}</strong></td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', fetchLaLigaTable);