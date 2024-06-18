function createCherryBlossoms() {
    const numBlossoms = 150;
    for (let i = 0; i < numBlossoms; i++) {
        const blossom = document.createElement('div');
        blossom.classList.add('blossom');
        document.body.appendChild(blossom);
        animateBlossom(blossom);
    }
}

function animateBlossom(blossom) {
    const fallDuration = Math.random() * 10 + 5;
    const delay = Math.random() * 5;
    const startX = Math.random() * 100;
    const endX = Math.random() * 100;
    const size = Math.random() * 10 + 5;

    blossom.style.width = `${size}px`;
    blossom.style.height = `${size}px`;
    blossom.style.left = `${startX}vw`;
    blossom.style.position = 'fixed';
    blossom.style.top = '-10vh';
    blossom.style.background = 'url("Bilder/pixel-art-sakura-flower-icon-png.webp") no-repeat center center / contain';
    blossom.style.pointerEvents = 'none';
    blossom.style.zIndex = '1';

    blossom.animate([
        { transform: `translate(${startX}vw, -10vh)` },
        { transform: `translate(${endX}vw, 110vh)` }
    ], {
        duration: fallDuration * 1000,
        delay: delay * 1000,
        iterations: Infinity
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 768) {
        createCherryBlossoms();
    }
});
