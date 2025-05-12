// Получаем элементы DOM
const tournamentSelect = document.getElementById('tournamentSelect');
const tournamentContent = document.getElementById('tournamentContent');

// Данные о турнирах (замените на ваши данные)
const tournamentData = {
  "champions-league": {
    title: "Лига Чемпионов УЕФА",
    trophies: [
      { image: "[URL изображения 1]", videoId: "[ID видео 1]", description: "Описание победы 1" },
      { image: "[URL изображения 2]", videoId: "[ID видео 2]", description: "Описание победы 2" }
      // ... ещё трофеи
    ]
  },
  "la-liga": {
    title: "Ла Лига",
    trophies: [
      // ... трофеи для Ла Лиги
    ]
  },
  // ... данные для других турниров
};

// Обработчик события изменения выбора турнира
tournamentSelect.addEventListener('change', () => {
  // Получаем выбранный турнир
  const selectedTournament = tournamentSelect.value;
  // Получаем данные о выбранном турнире
  const data = tournamentData[selectedTournament];

  // Очищаем предыдущий контент
  tournamentContent.innerHTML = ''; // Очищаем содержимое блока

  // Добавляем заголовок
  tournamentContent.innerHTML += `<h2>${data.title}</h2>`;

  // Добавляем информацию о трофеях
  data.trophies.forEach(trophy => {
    tournamentContent.innerHTML += `
      <div class="trophy-item">
        <img src="" alt="${data.title} Trophy">
        <div class="video-placeholder">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/${trophy.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p>${trophy.description}</p>
      </div>
    `;
  });
});

// Первоначальная загрузка (отображает первый турнир)
tournamentSelect.dispatchEvent(new Event('change'));