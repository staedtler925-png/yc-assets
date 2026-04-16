/**
 * YANAGI CYCLE - ギャラリー・スライダー最終兵器JS（v7: 完全自立型）
 */
function initKazusaGallery() {
    console.log("スライダー完全再構築開始(v7)...");

    // 1. BASEが標準で出力している「生画像」を全部集める
    const rawImages = document.querySelectorAll('.itemImgSlide img, #slideImg img');
    if (rawImages.length === 0) {
        console.log("BASEの画像がまだ見つかりません。再試行中...");
        setTimeout(initKazusaGallery, 500);
        return;
    }

    // 画像URLのリストを作成（重複削除）
    const srcList = Array.from(rawImages).map(img => img.src).filter((src, i, self) => self.indexOf(src) === i);
    console.log("画像URL抽出成功:", srcList);

    // 2. 既存のスライダーエリアを特定、または作成
    let container = document.querySelector('.yc-gallery-container');
    if (!container) {
        // もしHTMLに枠がなければ、BASEの標準エリアを乗っ取る
        container = document.querySelector('.itemImgSlide');
        if(!container) return;
    }

    // 3. HTML構造をJSから強制的に書き換える（ここがミソ）
    container.innerHTML = `
        <div class="yc-gallery-main-container" style="overflow:hidden; position:relative; width:100%;">
            <div class="yc-gallery-track" style="display:flex; transition:transform 0.4s ease; width:100%;">
                ${srcList.map(src => `<div style="min-width:100%;"><img src="${src}" style="width:100%; display:block;"></div>`).join('')}
            </div>
            <div class="yc-gallery-dots" style="display:flex; justify-content:center; gap:8px; padding:10px 0;"></div>
        </div>
    `;

    const track = container.querySelector('.yc-gallery-track');
    const dotsContainer = container.querySelector('.yc-gallery-dots');
    const total = srcList.length;
    let current = 0;

    // 4. ドット生成
    srcList.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'yc-gallery-dot' + (i === 0 ? ' is-active' : '');
        dot.style.cssText = "width:10px; height:10px; border-radius:50%; background:#ccc; cursor:pointer;";
        if(i === 0) dot.style.background = "#ED4700"; // アクティブ色
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

    // 5. スワイプ
    let startX = 0;
    track.ontouchstart = (e) => { startX = e.touches[0].pageX; };
    track.ontouchend = (e) => {
        const diff = startX - e.changedTouches[0].pageX;
        if (Math.abs(diff) > 50) goTo(Math.max(0, Math.min(total - 1, current + (diff > 0 ? 1 : -1))));
    };

    console.log("スライダーの再構築が完了しました！");
}

initKazusaGallery();
