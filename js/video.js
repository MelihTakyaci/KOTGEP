document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('video');

    // Intersection Observer API kullanarak video görünür olduğunda çalıştırın
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.volume = 1;
                video.play();
            } else {
                video.pause();
            }
        });
    }, {
        threshold: 0.5  // Video elementinin %50'si görünür olduğunda tetiklenir
    });

    observer.observe(video);
});
