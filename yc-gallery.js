/**
 * YANAGI CYCLE - ギャラリー・スライダー最終兵器JS（v6: 執念の全方位探索）
 */
function initKazusaGallery() {
    console.log("スライダー初期化開始(v6)...");

    // BASEの画像が入る可能性がある場所を片っ端から探す
    const track = document.querySelector('.yc-gallery-main-track') || 
                  document.querySelector('#slideImg') || 
                  document.querySelector('.itemImgSlide div') ||
                  document.querySelector('.itemImgSlide ul');

    const container = document.querySelector('.yc-gallery-container') || 
                      document.querySelector('.itemImgSlide');

    // まだ要素自体がない場合
    if (!track || !container) {
        console.log("箱（Container/Track）が見つかりません。再試行中...");
        setTimeout(initKazusaGallery, 500);
        return;
    }

    // 画像が「0枚」でないか確認
    const images = track.querySelectorAll('img');
    if (images.length === 0) {
        console.log("箱は見つかりましたが、画像がまだ読み込まれていません。再試行中...");
        setTimeout(initKazusaGallery, 500);
        return;
    }

    const totalImages = images.length;
    console.log("ターゲット捕捉成功！画像枚数:", totalImages);

    // --- ここからスライダーの処理 ---
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

// 実行
initKazusaGallery();
