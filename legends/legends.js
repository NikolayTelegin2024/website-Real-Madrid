function openTab(evt, cityName) {
    // Получаем все элементы tabcontent
    let tabcontent = document.getElementsByClassName("tabcontent");
    // Делаем все tabcontent скрытыми
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Получаем все кнопки вкладок
    let tablinks = document.getElementsByClassName("tablinks");
    // Удаляем класс active со всех кнопок
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Показываем выбранный tabcontent и добавляем класс active к кнопке
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  
  // Добавляем обработчик событий для каждой кнопки.  
  // Этот код делает js более функциональным.
  // Он не требует модификации функции openTab для добавления новых вкладок.
  const tabs = document.querySelectorAll('.tab button');
  tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
      const tabContentId = event.target.dataset.tab;
      openTab(event, tabContentId);
    });
  });
  