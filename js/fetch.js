document.addEventListener("DOMContentLoaded", function() {
  // URL'den ID parametresini çekiyoruz
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const eventId = urlParams.get('id'); // ?id=5 gibi bir URL'den ID'yi alır

  // Eğer geçerli bir ID varsa, fetchEtkinlik fonksiyonunu çağır
  if (eventId) {
    fetchEtkinlik(eventId);
  } else {
    fetchEtkinlik(6); // Varsayılan ID 6 olabilir
  }
});

function fetchEtkinlik(num) {
  console.log("Etkinlik ID: ", num);
  
  fetch('https://kotgep.com/js/json/etkinlikler.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(events => {
      const event = events.find(e => e.id == num);
      if (event) {
        document.getElementById('event-title').textContent = event.title;
        document.getElementById('event-description1').textContent = event.description1;
        document.getElementById('event-description2').textContent = event.description2;
        document.getElementById('event-description3').textContent = event.description3;
        document.getElementById('img1').src = event.image1;
        document.getElementById('img2').src = event.image2;
        document.getElementById('img3').src = event.image3;

        // Daha fazla resim ekleme işlemi
        if(event.imagecount > 3){
          document.getElementById('rezerve').classList.remove('hide');
          document.getElementById('img4').src = event.image4;
          document.getElementById('img5').src = event.image5;
          if(event.imagecount > 5){
            document.getElementById('rezerve1').classList.remove('hide');
            document.getElementById('img6').src = event.image6;
            document.getElementById('img7').src = event.image7;
            if(event.imagecount >= 8){
              document.getElementById('rezerve2').classList.remove('hide');
              document.getElementById('img8').src = event.image8;
              document.getElementById('img9').src = event.image9;
            }
          }
        }
      } else {
        document.getElementById('event-title').textContent = 'Etkinlik bulunamadı';
      }
    })
    .catch(error => {
      console.error('Fetch hatası:', error);
    });
}
