document.addEventListener('DOMContentLoaded', () => {
    // 1. Animação de aparição progressiva dos cards (Stagger Effect)
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 150 * index);
    });

    // 2. Transição suave ao clicar nos links dos cards
    const links = document.querySelectorAll('.btn');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const destination = link.getAttribute('href');
            if (destination && !destination.startsWith('#')) {
                e.preventDefault();
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.3s ease';
                setTimeout(() => {
                    window.location.href = destination;
                }, 300);
            }
        });
    });
});