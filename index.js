function updateTime() {
    $.get("http://worldtimeapi.org/api/ip", function(data) {
        var date = new Date(data.datetime);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var formattedTime = hours + ':' + minutes.substr(-2);
        $("#time").text(formattedTime);
    });
}

$(document).ready(function() {
    updateTime(); // actualizar inmediatamente al cargar la página
    setInterval(updateTime, 1000); // actualizar cada segundo
});

$(document).ready(function() {
    $.get("http://api.ipstack.com/check?access_key=4e9ab16e97d8ec4ba6c90452cc877f0a", function(data) {
        var location =  data.region_name + ", " + data.country_name;
        $("#location").text(location);
    });
});

function toggleMode() {
    const body = document.body;
    const btn = document.getElementById('toggle-mode-btn');
    if (body.classList.contains('dark-mode')) {
      // Modo claro
    body.classList.remove('dark-mode');
    btn.textContent = 'Modo Oscuro';
    } else {
      // Modo oscuro
    body.classList.add('dark-mode');
    btn.textContent = 'Modo Claro';
    }
}