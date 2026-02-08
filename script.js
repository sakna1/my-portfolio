document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Animate On Scroll (AOS)
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-quad',
        offset: 100
    });

    // 2. Initialize Lucide Icons
    lucide.createIcons();

    // 3. Simple Navbar scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('bg-slate-950/95');
            nav.classList.remove('bg-slate-950/80');
        } else {
            nav.classList.add('bg-slate-950/80');
            nav.classList.remove('bg-slate-950/95');
        }
    });
});