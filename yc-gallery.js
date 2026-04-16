/**
 * YANAGI CYCLE - ギャラリー・スライダー最終兵器JS（main-track完全捕捉Ver.）
 */
function initKazusaGallery() {
    console.log("スライダー初期化開始(v5)...");

    // 実際のHTMLに存在する .yc-gallery-main-track を最優先で探す
    const track = document.querySelector('.yc-gallery-main-track') || 
                  document.querySelector('.yc-gallery-track') || 
                  document.querySelector('#slideImg');

    const container = document.querySelector('.yc-gallery-container') || 
                      document.querySelector('.itemImgSlide');

    if (!track || !container) {
        console.log("ターゲットが見つかりません。再試行中...");
        setTimeout(initKazusaGallery, 500);
        return;
    }

    const images = track.querySelectorAll('img');
    const totalImages = images.length;
    
    if (totalImages <= 1) {
        console.log("画像が1枚以下（" + totalImages + "枚）のため終了。");
        return;
    }

    console.log("ターゲット捕捉成功！画像枚数:", totalImages);

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
        dot.style.cursor = "pointer";
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
        dots.push(dot);
    }

    function goToSlide(index) {
        currentIndex = index;
        track.style.transition = "transform 0.4s ease-in-out";
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((d, idx) => d.classList.toggle('is-active', idx === currentIndex));
    }

    // スワイプ対応
    let startX = 0;
    track.addEventListener('touchstart', (e) => { startX = e.touches[0].pageX; }, {passive: true});
    track.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].pageX;
        if (startX > endX + 50 && currentIndex < totalImages - 1) goToSlide(currentIndex + 1);
        else if (startX < endX - 50 && currentIndex > 0) goToSlide(currentIndex - 1);
    }, {passive: true});

    console.log("スライダーが正常に起動しました！");
}

initKazusaGallery();
