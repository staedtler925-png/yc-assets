/**
 * YANAGI CYCLE - ギャラリー・スライダー最終兵器JS
 * CSSで横に並べた画像を、実際にスライドさせるための「脳みそ」です。
 */
console.log('yc-gallery.js loaded! V2');

function initKazusaGallery() {
    console.log("スライダー初期化開始...");

    // 1. スライダーの「動かす芯（トラック）」と「外枠（コンテナ）」を探す
    const track = document.querySelector('.yc-gallery-track') || document.querySelector('#slideImg');
    const container = document.querySelector('.yc-gallery-container') || document.querySelector('.itemImgSlide');

    if (!track || !container) {
        console.log("スライダーの要素がまだ存在しません。");
        return;
    }

    // 2. スライドさせる画像をすべて取得
    const images = track.querySelectorAll('img');
    const totalImages = images.length;
    
    if (totalImages <= 1) return; // 1枚なら動かす必要なし

    let currentIndex = 0;

    // 3. ドット（丸いボタン）の生成
    let dotsContainer = document.querySelector('.yc-gallery-dots');
    if (!dotsContainer) {
        dotsContainer = document.createElement('div');
        dotsContainer.className = 'yc-gallery-dots';
        container.appendChild(dotsContainer);
    }
    dotsContainer.innerHTML = ''; // 初期化

    const dots = [];
    for (let i = 0; i < totalImages; i++) {
        const dot = document.createElement('div');
        dot.className = 'yc-gallery-dot' + (i === 0 ? ' is-active' : '');
        dot.style.cursor = 'pointer';
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
        dots.push(dot);
    }

    // 4. スライド移動の命令
    function goToSlide(index) {
        currentIndex = index;
        // CSSのtransformを使って、横に(枚数分)ズラす
        track.style.transition = "transform 0.4s ease-in-out";
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // ドットの色を更新
        dots.forEach((dot, i) => {
            dot.classList.toggle('is-active', i === currentIndex);
        });
    }

    // 5. スマホ用のフリック操作対応
    let startX = 0;
    track.addEventListener('touchstart', (e) => { startX = e.touches[0].pageX; }, {passive: true});
    track.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].pageX;
        if (startX > endX + 50) { // 左へスワイプ
            if (currentIndex < totalImages - 1) goToSlide(currentIndex + 1);
        } else if (startX < endX - 50) { // 右へスワイプ
            if (currentIndex > 0) goToSlide(currentIndex - 1);
        }
    }, {passive: true});

    console.log("スライダーが正常に起動しました！");
}

// BASEの読み込み完了に合わせて実行（0.5秒待つのがコツ）
window.addEventListener('load', () => {
    setTimeout(initKazusaGallery, 500);
});
