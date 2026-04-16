/* ========================================
   YANAGI CYCLE - ギャラリー共通JS
   yc-gallery.js
======================================== */

console.log('yc-gallery.js loaded!');

(function() {

    // ==========================================
    // A. KAZUSA ギャラリー
    // ==========================================
    window.initKazusaGallery = function() {
        const IMGS = [
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dcdc7077de9/kazusa-001.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dcdc7c6c675/kazusa-002.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dcbaa10e04a/kazusa-003.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dcdc894337e/kazusa-004.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dcdc94553f4/kazusa-005.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dcdc9e74378/kazusa-006.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dcdca7d3b84/kazusa-007.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dcdcb12df46/kazusa-008.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dcdcbcc0710/kazusa-009.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dcdcc623b53/kazusa-010.jpg"
        ];
        initGallery('kazusaTrack', 'kazusaDots', 'kazusaThumbs', 'kazusaPrev', 'kazusaNext', IMGS, null);
    };

    // ==========================================
    // B-1. QUIET Disc ギャラリー
    // ==========================================
    window.initQuietGallery = function() {
        const IMGS = [
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce6be3dc14/quiet-disc-001.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce6cb65f88/quiet-disc-002.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce6d5a5d08/quiet-disc-003.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce6deb8e42/quiet-disc-004.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce6e8e1ff4/quiet-disc-005.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce6f2dd773/quiet-disc-006.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce6fcbeb72/quiet-disc-007.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce70647cac/quiet-disc-008.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce70fe8817/quiet-disc-009.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce71b3ea5a/quiet-disc-010.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce7292b4b3/quiet-disc-011.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce73ac2dee/quiet-disc-012.jpg"
        ];
        initGallery('quietTrack', 'quietDots', 'quietThumbs', 'quietPrev', 'quietNext', IMGS, 'quietGeoImg');
    };

    // ==========================================
    // B-2. QUIET Mud ギャラリー
    // ==========================================
    window.initQuietMudGallery = function() {
        const IMGS = [
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd976ee1b42/quiet-mud-001.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd977f9e4c1/quiet-mud-002.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd978c13c6b/quiet-mud-003.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd979750bde/quiet-mud-004.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd97a1f2932/quiet-mud-005.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd97ae642d7/quiet-mud-006.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd97bcc6179/quiet-mud-007.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd97c75e58a/quiet-mud-008.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd97d2f01ca/quiet-mud-009.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd97e053228/quiet-mud-010.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd97ea35072/quiet-mud-011.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd97f4202e6/quiet-mud-012.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd97fe85bb5/quiet-mud-013.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd9807ecb2a/quiet-mud-014.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd981312a2b/quiet-mud-015.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd98204ae73/quiet-mud-016.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd9830d4810/quiet-mud-017.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd983bba4fb/quiet-mud-018.jpg"
        ];
        initGallery('quietTrack', 'quietDots', 'quietThumbs', 'quietPrev', 'quietNext', IMGS, 'quietGeoImg');
    };

    // ==========================================
    // 共通ギャラリー処理
    // ==========================================
    function initGallery(trackId, dotsId, thumbsId, prevId, nextId, IMGS, geoImgId) {
        var current  = 0;
        var track    = document.getElementById(trackId);
        var dotsEl   = document.getElementById(dotsId);
        var thumbsEl = document.getElementById(thumbsId);

        if (!track || !dotsEl || !thumbsEl) return;

        IMGS.forEach(function(src, i) {
            var btn = document.createElement('button');
            btn.className = 'yc-gallery-dot' + (i === 0 ? ' is-active' : '');
            btn.addEventListener('click', function() { goTo(i); });
            dotsEl.appendChild(btn);

            var thumb = document.createElement('img');
            thumb.src = src;
            thumb.className = 'yc-gallery-thumb' + (i === 0 ? ' is-active' : '');
            thumb.addEventListener('click', function() { goTo(i); });
            thumbsEl.appendChild(thumb);
        });

        function goTo(n) {
            current = (n + IMGS.length) % IMGS.length;
            track.style.transform = 'translateX(' + (-current * 100) + '%)';
            dotsEl.querySelectorAll('.yc-gallery-dot').forEach(function(d, i) {
                d.classList.toggle('is-active', i === current);
            });
            thumbsEl.querySelectorAll('.yc-gallery-thumb').forEach(function(t, i) {
                t.classList.toggle('is-active', i === current);
            });
            thumbsEl.children[current].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }

        document.getElementById(prevId).addEventListener('click', function() { goTo(current - 1); });
        document.getElementById(nextId).addEventListener('click', function() { goTo(current + 1); });

        var startX = 0;
        track.addEventListener('touchstart', function(e) { startX = e.touches[0].clientX; }, { passive: true });
        track.addEventListener('touchend', function(e) {
            var diff = startX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
        });

        // モーダル処理
        if (geoImgId) {
            var geoImg   = document.getElementById(geoImgId);
            var modal    = document.getElementById('ycModal');
            var modalImg = document.getElementById('ycModalImg');
            if (geoImg && modal && modalImg) {
                geoImg.onclick = function() {
                    modalImg.src = this.src;
                    modal.style.display = 'flex';
                };
                modal.onclick = function() { this.style.display = 'none'; };
            }
        }
    }

})();
