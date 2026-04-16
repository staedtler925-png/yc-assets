/**
 * YANAGI CYCLE - ギャラリー・スライダー
 * VERSION: V2
 */

const YC_VERSION = "V2";

function initKazusaGallery() {
    console.log(`スライダー初期化開始 (${YC_VERSION})`);

    // 画像取得（BASE商品画像のみ）
    const srcList = Array.from(document.querySelectorAll('img'))
        .map(img => img.src)
        .filter(src =>
            src.includes('basefile.akamaized.net') // 商品画像だけ
        )
        .filter((src, i, self) => self.indexOf(src) === i); // 重複削除

    if (srcList.length < 2) {
        console.log("画像不足 → 待機");
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

    // 再構築判定
    if (container.dataset.ycInitialized === "true") {
        if (container.dataset.ycImageCount == srcList.length) {
            console.log("変更なし → スキップ");
            return true;
        } else {
            console.log("画像変化検知 → 再構築");
        }
    }

    container.dataset.ycInitialized = "true";
    container.dataset.ycImageCount = srcList.length;

    // HTML構築
    container.innerHTML = `
        <div class="yc-gallery-main-container" style="overflow:hidden; position:relative; width:100%;">
            <div class="yc-gallery-track" style="display:flex; flex-wrap:nowrap; transition:transform 0.4s ease;">
                ${srcList.map(src => `
                    <div style="flex:0 0 100%;">
                        <img src="${src}" style="width:100%; display:block; pointer-events:none;">
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
    dotsContainer.innerHTML = "";
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

    // スワイプ
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

    console.log(`スライダー構築完了 (${YC_VERSION})`);
    return true;
}


/**
 * 初期化制御（BASE完全対応）
 */
function startKazusaGallery() {

    // load後
    window.addEventListener('load', () => {
        console.log(`window.load発火 (${YC_VERSION})`);
        initKazusaGallery();
    });

    // DOM変化監視
    const observer = new MutationObserver(() => {
        const success = initKazusaGallery();
        if (success) {
            console.log("Observer待機継続（画像変化監視）");
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // 保険リトライ
    let retry = 0;
    const interval = setInterval(() => {
        if (initKazusaGallery() || retry > 20) {
            clearInterval(interval);
        }
        retry++;
    }, 500);
}

// 起動
startKazusaGallery();
