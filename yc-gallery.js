/**
 * YANAGI CYCLE - 既存ギャラリー制御
 * VERSION: V4
 */

const YC_VERSION = "V4";

function initKazusaGallery() {
    console.log(`既存ギャラリー初期化開始 (${YC_VERSION})`);

    const main = document.querySelector('.yc-gallery-main');
    const track = document.querySelector('.yc-gallery-main-track');
    const slides = document.querySelectorAll('.yc-gallery-main-slide');

    if (!main || !track || slides.length < 2) {
        console.log("既存ギャラリー未検出 or 画像不足");
        return false;
    }

    if (main.dataset.ycInitialized === "true") {
        console.log("変更なし → スキップ");
        return true;
    }

    main.dataset.ycInitialized = "true";

    if (!document.getElementById('yc-gallery-style-v4')) {
        const style = document.createElement('style');
        style.id = 'yc-gallery-style-v4';
        style.innerHTML = `
        .yc-gallery-main {
            width: 100% !important;
            overflow: hidden !important;
            position: relative !important;
        }
        .yc-gallery-main-track {
            display: flex !important;
            flex-wrap: nowrap !important;
            transition: transform 0.4s ease !important;
            width: 100% !important;
        }
        .yc-gallery-main-slide {
            flex: 0 0 100% !important;
            width: 100% !important;
            min-width: 100% !important;
            max-width: 100% !important;
        }
        .yc-gallery-main-slide img {
            width: 100% !important;
            height: auto !important;
            display: block !important;
        }
        .yc-gallery-dots {
            display: flex;
            justify-content: center;
            gap: 8px;
            padding: 10px 0;
        }
        `;
        document.head.appendChild(style);
    }

    let dotsContainer = document.querySelector('.yc-gallery-dots');
    if (!dotsContainer) {
        dotsContainer = document.createElement('div');
        dotsContainer.className = 'yc-gallery-dots';
        main.insertAdjacentElement('afterend', dotsContainer);
    }

    dotsContainer.innerHTML = "";

    let current = 0;
    const total = slides.length;

    slides.forEach((_, i) => {
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

    let startX = 0;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        const diff = startX - e.changedTouches[0].pageX;

        if (Math.abs(diff) > 50) {
            if (diff > 0 && current < total - 1) goTo(current + 1);
            if (diff < 0 && current > 0) goTo(current - 1);
        }
    });

    console.log(`既存ギャラリー構築完了 (${YC_VERSION})`);
    return true;
}

window.addEventListener('load', initKazusaGallery);
