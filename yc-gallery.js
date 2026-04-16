/**
 * YANAGI CYCLE - ギャラリー・スライダー（安定版）
 */

function initKazusaGallery() {
    console.log("スライダー初期化開始");

    const rawImages = document.querySelectorAll('.itemImgSlide img, #slideImg img');

    if (!rawImages || rawImages.length === 0) {
        console.log("画像未検出 → 中断");
        return false;
    }

    // URL抽出（重複除去）
    const srcList = Array.from(rawImages)
        .map(img => img.src)
        .filter((src, i, self) => self.indexOf(src) === i);

    if (srcList.length === 0) {
        console.log("画像URL取得失敗");
        return false;
    }

    console.log("画像取得:", srcList);

    // コンテナ取得
    let container = document.querySelector('.yc-gallery-container');

    if (!container) {
        container = document.querySelector('.itemImgSlide');
        if (!container) {
            console.log("コンテナ未検出");
            return false;
        }
    }

    // 既に構築済みならスキップ（二重実行防止）
    if (container.dataset.ycInitialized === "true") {
        console.log("すでに初期化済み");
        return true;
    }

    container.dataset.ycInitialized = "true";

    // HTML構築
    container.innerHTML = `
        <div class="yc-gallery-main-container" style="overflow:hidden; position:relative; width:100%;">
            <div class="yc-gallery-track" style="display:flex; transition:transform 0.4s ease;">
                ${srcList.map(src => `
                    <div style="min-width:100%;">
                        <img src="${src}" style="width:100%; display:block;">
                    </div>
                `).join('')}
            </div>
            <div class="yc-gallery-dots" style="display:flex; justify-content:center; gap:8px; padding:10px 0;"></div>
        </div>
    `;

    const track = container.querySelector('.yc-gallery-track');
    const dotsContainer = container.querySelector('.yc-gallery-dots');

    let current = 0;
    const total = srcList.length;

    // ドット生成
    srcList.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.style.cssText = "width:10px;height:10px;border-radius:50%;background:#ccc;cursor:pointer;";
        if (i === 0) dot.style.background = "#ED4700";

        dot.onclick = () => goTo(i);
        dotsContainer.appendChild(dot);
    });

    function goTo(n) {
        current = n;
        track.style.transform = `translateX(-${current * 100}%)`;

        Array.from(dotsContainer.children).forEach((dot, i) => {
            dot.style.background = (i === current) ? "#ED4700" : "#ccc";
        });
    }

    // スワイプ対応
    let startX = 0;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX;
    });

    track.addEventListener('touchend', (e) => {
        const diff = startX - e.changedTouches[0].pageX;

        if (Math.abs(diff) > 50) {
            if (diff > 0 && current < total - 1) goTo(current + 1);
            if (diff < 0 && current > 0) goTo(current - 1);
        }
    });

    console.log("スライダー構築完了");
    return true;
}


/**
 * 初期化制御（BASE対策）
 */
function startKazusaGallery() {

    // ① load後に1回実行
    window.addEventListener('load', () => {
        console.log("window.load発火");
        initKazusaGallery();
    });

    // ② MutationObserverで後追い
    const observer = new MutationObserver(() => {
        const success = initKazusaGallery();
        if (success) {
            observer.disconnect();
            console.log("Observer停止");
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // ③ 最終保険（遅延再試行）
    let retry = 0;
    const interval = setInterval(() => {
        if (initKazusaGallery() || retry > 10) {
            clearInterval(interval);
        }
        retry++;
    }, 500);
}

// 起動
startKazusaGallery();
