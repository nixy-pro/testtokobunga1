// Script untuk efek animasi saat halaman pertama kali dibuka
document.addEventListener('DOMContentLoaded', function() {
    // Misalnya, animasi untuk header
    const header = document.querySelector('header');
    header.style.transform = 'translateY(0)';
    header.style.opacity = '1';
    header.style.transition = 'transform 0.5s ease, opacity 0.5s ease';

    // Anda dapat menambahkan animasi tambahan sesuai kebutuhan
});
