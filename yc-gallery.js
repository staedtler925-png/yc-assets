/**
 * YANAGI CYCLE - ギャラリー・スライダー最終兵器JS（粘り強いVer.）
 */
console.log('yc-gallery.js loaded! V3');

function initKazusaGallery() {
    console.log("スライダー初期化開始...");

    const track = document.querySelector('.yc-gallery-track') || document.querySelector('#slideImg');
    const container = document.querySelector('.yc-gallery-container') || document.querySelector('.itemImgSlide');

    // 要素がない場合は、0.5秒後に自分自身をもう一度呼び出す
    if (!track || !container) {
        console.log("要素がまだないので、0.5秒後に再試行します...");
        setTimeout(initKazusaGallery, 500);
        return;
    }

    const images = track.querySelectorAll('img');
    const totalImages = images.length;
    
    if (totalImages <= 1) {
        console.log("画像が1枚以下なので終了します");
        return;
    }

    let currentIndex = 0;

    // ドット生成
    let dotsContainer = document.querySelector('.yc-gallery-dots');
    if (!dotsContainer) {
        dotsContainer = document.createElement('div');
        dotsContainer.className = 'yc-gallery-dots';
        container.appendChild(dotsContainer);
    }
    dotsContainer.innerHTML = '';

    const dots = [];
    for (let i = 0; i < totalImages; i++) {
        const dot = document.createElement('div');
        dot.className = 'yc-gallery-dot' + (i === 0 ? ' is-active' : '');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
        dots.push(dot);
    }

    function goToSlide(index) {
        currentIndex = index;
        track.style.transition = "transform 0.4s ease-in-out";
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('is-active', i === currentIndex);
        });
    }

    // スワイプ
    let startX = 0;
    track.addEventListener('touchstart', (e) => { startX = e.touches[0].pageX; }, {passive: true});
    track.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].pageX;
        if (startX > endX + 50) {
            if (currentIndex < totalImages - 1) goToSlide(currentIndex + 1);
        } else if (startX < endX - 50) {
            if (currentIndex > 0) goToSlide(currentIndex - 1);
        }
    }, {passive: true});

    console.log("スライダーが正常に起動しました！");
}

// 実行開始
initKazusaGallery();
