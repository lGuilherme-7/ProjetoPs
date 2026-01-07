document.addEventListener('DOMContentLoaded', function() {
    
    console.log('✅ JavaScript carregado!');
    
    // ========= ELEMENTOS DO MENU =========
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');
    const navLinks = document.querySelectorAll('.navList a');
    
    // Verifica se existem
    if (!menuToggle || !navList) {
        console.error('❌ Elementos do menu não encontrados!');
        return;
    }
    
    console.log('✅ Menu encontrado:', menuToggle);
    console.log('✅ Nav encontrada:', navList);
    
    // ========= FUNÇÃO PARA ABRIR/FECHAR MENU =========
    function toggleMenu() {
        const isActive = navList.classList.contains('active');
        
        if (isActive) {
            // Fecha o menu
            navList.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
            console.log('❌ Menu FECHADO');
        } else {
            // Abre o menu
            navList.classList.add('active');
            document.body.classList.add('menu-open');
            document.body.style.overflow = 'hidden';
            console.log('✅ Menu ABERTO');
        }
    }
    
    // ========= CLIQUE NO HAMBÚRGUER =========
    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });
    
    // ========= CLIQUE NOS LINKS (fecha o menu) =========
    navLinks.forEach(function(link, index) {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
            console.log('🔗 Link ' + (index + 1) + ' clicado');
        });
    });
    
    // ========= CLIQUE FORA DO MENU (fecha) =========
    document.addEventListener('click', function(e) {
        if (navList.classList.contains('active')) {
            // Se clicou fora do menu e do botão
            if (!navList.contains(e.target) && !menuToggle.contains(e.target)) {
                navList.classList.remove('active');
                document.body.classList.remove('menu-open');
                document.body.style.overflow = '';
                console.log('🖱️ Clicou fora - Menu fechado');
            }
        }
    });
    
    // ========= TECLA ESC (fecha) =========
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navList.classList.contains('active')) {
            navList.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
            console.log('⌨️ ESC - Menu fechado');
        }
    });
    
    // ========= REDIMENSIONAR JANELA (fecha se virar desktop) =========
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navList.classList.contains('active')) {
            navList.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
            console.log('📏 Redimensionado - Menu fechado');
        }
    });
    
    // ========= FAQ ACCORDION =========
    const faqItems = document.querySelectorAll('.faq-item');
    
    console.log('✅ FAQs encontrados:', faqItems.length);
    
    faqItems.forEach(function(item, index) {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                // Fecha outros
                faqItems.forEach(function(other) {
                    if (other !== item) {
                        other.classList.remove('active');
                    }
                });
                
                // Toggle atual
                const isActive = item.classList.toggle('active');
                console.log('FAQ ' + (index + 1) + (isActive ? ' ABERTO' : ' FECHADO'));
            });
        }
    });
    
    // ========= SCROLL REVEAL =========
    const reveals = document.querySelectorAll('.reveal');
    
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        
        reveals.forEach(function(reveal) {
            const elementTop = reveal.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - 100) {
                reveal.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Executa ao carregar
    
    console.log('✨ Sistema pronto!');
});