const video = document.getElementById('video');
let playedOnce = false;  // Video sadece bir kez oynatıldı mı?

// Intersection Observer API kullanarak video görünür olduğunda çalıştırın
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !playedOnce) {
            video.volume = 0;  // Videonun sesini kapat
            video.play().then(() => {
                video.volume = 1;  // Videonun sesini aç
                playedOnce = true;  // Video oynatıldı, bir daha oynatılmasın
            }).catch(error => {
                console.error("Video otomatik olarak oynatılamadı: ", error);
            });
        }
    });
}, {
    threshold: 0.5  // Video elementinin %50'si görünür olduğunda tetiklenir
});

// Video gözlemlenmeye devam edecek ancak sadece bir kez oynatılacak
observer.observe(video);
