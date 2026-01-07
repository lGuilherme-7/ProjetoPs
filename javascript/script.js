document.addEventListener('DOMContentLoaded', () => {
    
    // ========= MENU HAMBÚRGUER - SOLUÇÃO COMPLETA =========
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');
    const navLinks = document.querySelectorAll('.navList a');
    const body = document.body;

    console.log('Menu Toggle:', menuToggle);
    console.log('Nav List:', navList);

    if (menuToggle && navList) {
        // Abre/fecha ao clicar no hambúrguer
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que o clique "vaze"
            navList.classList.toggle('active');
            
            // Previne scroll quando menu aberto
            if (navList.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
            
            console.log('Menu toggled! Active:', navList.classList.contains('active'));
        });

        // Fecha ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                body.style.overflow = '';
                console.log('Link clicado, menu fechado');
            });
        });

        // Fecha ao clicar fora (no overlay)
        document.addEventListener('click', (e) => {
            if (navList.classList.contains('active') && 
                !navList.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                navList.classList.remove('active');
                body.style.overflow = '';
                console.log('Clicou fora, menu fechado');
            }
        });

        // Fecha ao apertar ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navList.classList.contains('active')) {
                navList.classList.remove('active');
                body.style.overflow = '';
                console.log('ESC pressionado, menu fechado');
            }
        });
    }

    // ========= FAQ ACCORDION =========
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (question && answer) {
            question.addEventListener('click', () => {
                // Fecha outros
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle do atual
                const isActive = item.classList.toggle('active');
                console.log('FAQ clicado! Active:', isActive);
            });
        }
    });

    // ========= SCROLL REVEAL (opcional - só se quiser) =========
    const reveals = document.querySelectorAll('.reveal-hidden');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                reveal.classList.add('active');
            }
        });
    }

    if (reveals.length > 0) {
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll();
    }
});