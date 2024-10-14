function initializePreloader() {
    // Preloader için CSS sınıfını ayarla
    jQuery('#preloader').show(); // Preloader'ı görünür yap

    // Sayfa tamamen yüklendiğinde preloader'ı gizle
    jQuery(window).on('load', function() {
        jQuery('#preloader').fadeOut('slow', function() {
            jQuery('.page-content').fadeIn('slow'); // İçeriği yavaşça göster
        });
    });
}

// Fonksiyonu çağır
initializePreloader();
