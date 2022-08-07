var data = '2022-10-22T22:00:00';
var falta = (new Date(data).getTime() - new Date().getTime()) / 1000;
var segundos = Math.round(falta % 60);
var minutos = Math.round(falta / 60 % 60);
var horas = Math.round(falta / 60 / 60 % 24);
var dias = Math.round(falta / 60 / 60 / 24);
var divs = document.querySelectorAll('#regressive-container div');
const names = ['<p class="legenda">dias</p>', '<p class="legenda">horas</p>', '<p class="legenda">minutos</p>', '<p class="legenda">segundos</p>'];

setInterval(function () {
    if (segundos == 0) {
        segundos = 60;
        minutos--;
    }
    if (minutos == 0) {
        minutos = 60;
        horas--;
    }
    if (horas == 0) {
        horas = 24;
        dias--;
    }
    segundos--;
    var contador = [dias, horas, minutos, segundos].forEach(function (parcela, i) {
        divs[i].innerHTML = parcela + names[i];
    });

}, 1000);