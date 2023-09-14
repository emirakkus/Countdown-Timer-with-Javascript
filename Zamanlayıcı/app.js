// Elementleri al
let day = document.querySelector('.days');
let hour = document.querySelector('.hours');
let minute = document.querySelector('.minutes');
let second = document.querySelector('.seconds');

function setCountdown() {
  // Geri sayım tarihini ayarla
  let countdownDate = new Date('Oct 02, 2023 09:00:00').getTime();

  // Geri sayımı güncelle
  let updateCount = setInterval(function () {
    // Bugünkü tarihi ve saati al
    let todayDate = new Date().getTime();

    // Şimdi ile geri sayım tarihi arasındaki farkı hesapla
    let distance = countdownDate - todayDate;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Değerleri görüntüle
    day.textContent = days;
    hour.textContent = hours;
    minute.textContent = minutes;
    second.textContent = seconds;
  }, 1000);
}

setCountdown();
