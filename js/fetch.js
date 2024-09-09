document.addEventListener("DOMContentLoaded", function() {
  const num = localStorage.getItem('selectedEvent');
  console.log("selected item:" , num);
  if (num) {
      fetchEtkinlik(num);
  }
});

function fetchEtkinlik(num) {
  console.log(num);
  
  fetch('https://kotgep.com/js/json/etkinlikler.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(events => {
        const event = events.find(e => e.id == num); // 'num' parametresini burada kullanıyoruz
        if (event) {
          document.getElementById('event-title').textContent = event.title; // "Laper" yerine gerçek başlık
          console.log(event.title , "başarıyla bulundu");
          document.getElementById('event-description1').textContent = event.description1;
          document.getElementById('event-description2').textContent = event.description2;
          document.getElementById('event-description3').textContent = event.description3;
          document.getElementById('img1').src = event.image1;
          document.getElementById('img2').src = event.image2;
          document.getElementById('img3').src = event.image3;
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
        console.error('There was a problem with the fetch operation:', error);
      });
}
