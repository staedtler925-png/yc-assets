(function () {
    'use strict';

    // ==========================================
    // A. KAZUSA 初期化
    // ==========================================
    function initKazusaGallery() {
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

        var gallery = document.getElementById('kazusaGallery');
        var track = document.getElementById('kazusaTrack');
        var dotsEl = document.getElementById('kazusaDots');
        var thumbsEl = document.getElementById('kazusaThumbs');
        var prevBtn = document.getElementById('kazusaPrev');
        var nextBtn = document.getElementById('kazusaNext');

        if (!gallery || !track || !dotsEl || !thumbsEl || !prevBtn || !nextBtn) return;
        if (gallery.dataset.ycInitialized === 'true') return;

        gallery.dataset.ycInitialized = 'true';

        var current = 0;

        dotsEl.innerHTML = '';
        thumbsEl.innerHTML = '';

        IMGS.forEach(function (src, i) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'yc-gallery-dot' + (i === 0 ? ' is-active' : '');
            btn.addEventListener('click', function () { goTo(i); });
            dotsEl.appendChild(btn);

            var thumb = document.createElement('img');
            thumb.src = src;
            thumb.alt = 'KAZUSA ' + (i + 1);
            thumb.className = 'yc-gallery-thumb' + (i === 0 ? ' is-active' : '');
            thumb.addEventListener('click', function () { goTo(i); });
            thumbsEl.appendChild(thumb);
        });

        function goTo(n) {
            current = (n + IMGS.length) % IMGS.length;
            track.style.transform = 'translateX(' + (-current * 100) + '%)';

            dotsEl.querySelectorAll('.yc-gallery-dot').forEach(function (d, i) {
                d.classList.toggle('is-active', i === current);
            });

            thumbsEl.querySelectorAll('.yc-gallery-thumb').forEach(function (t, i) {
                t.classList.toggle('is-active', i === current);
            });

            if (thumbsEl.children[current]) {
                thumbsEl.children[current].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }

        prevBtn.addEventListener('click', function () { goTo(current - 1); });
        nextBtn.addEventListener('click', function () { goTo(current + 1); });

        var startX = 0;
        track.addEventListener('touchstart', function (e) {
            startX = e.touches[0].clientX;
        }, { passive: true });

        track.addEventListener('touchend', function (e) {
            var diff = startX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) {
                goTo(current + (diff > 0 ? 1 : -1));
            }
        });

        goTo(0);
    }

    // ==========================================
    // B-1. QUIET Disc 初期化
    // ==========================================
    function initQuietGallery() {
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

        var gallery = document.querySelector('.yc-gallery');
        var track = document.getElementById('quietTrack');
        var dotsEl = document.getElementById('quietDots');
        var thumbsEl = document.getElementById('quietThumbs');
        var prevBtn = document.getElementById('quietPrev');
        var nextBtn = document.getElementById('quietNext');

        if (!gallery || !track || !dotsEl || !thumbsEl || !prevBtn || !nextBtn) return;
        if (gallery.dataset.ycInitialized === 'true') return;

        gallery.dataset.ycInitialized = 'true';

        var current = 0;

        dotsEl.innerHTML = '';
        thumbsEl.innerHTML = '';

        IMGS.forEach(function (src, i) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'yc-gallery-dot' + (i === 0 ? ' is-active' : '');
            btn.addEventListener('click', function () { goTo(i); });
            dotsEl.appendChild(btn);

            var thumb = document.createElement('img');
            thumb.src = src;
            thumb.alt = 'QUIET Disc ' + (i + 1);
            thumb.className = 'yc-gallery-thumb' + (i === 0 ? ' is-active' : '');
            thumb.addEventListener('click', function () { goTo(i); });
            thumbsEl.appendChild(thumb);
        });

        function goTo(n) {
            current = (n + IMGS.length) % IMGS.length;
            track.style.transform = 'translateX(' + (-current * 100) + '%)';

            dotsEl.querySelectorAll('.yc-gallery-dot').forEach(function (d, i) {
                d.classList.toggle('is-active', i === current);
            });

            thumbsEl.querySelectorAll('.yc-gallery-thumb').forEach(function (t, i) {
                t.classList.toggle('is-active', i === current);
            });

            if (thumbsEl.children[current]) {
                thumbsEl.children[current].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }

        prevBtn.addEventListener('click', function () { goTo(current - 1); });
        nextBtn.addEventListener('click', function () { goTo(current + 1); });

        var startX = 0;
        track.addEventListener('touchstart', function (e) {
            startX = e.touches[0].clientX;
        }, { passive: true });

        track.addEventListener('touchend', function (e) {
            var diff = startX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) {
                goTo(current + (diff > 0 ? 1 : -1));
            }
        });

        var geoImg = document.getElementById('quietGeoImg');
        var modal = document.getElementById('ycModal');
        var modalImg = document.getElementById('ycModalImg');

        if (geoImg && modal && modalImg) {
            geoImg.onclick = function () {
                modalImg.src = this.src;
                modal.style.display = 'flex';
            };
            modal.onclick = function () {
                this.style.display = 'none';
            };
        }

        goTo(0);
    }

    // ==========================================
    // B-2. QUIET Mud 初期化
    // ==========================================
    function initQuietMudGallery() {
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

        var gallery = document.querySelector('.yc-gallery');
        var track = document.getElementById('quietTrack');
        var dotsEl = document.getElementById('quietDots');
        var thumbsEl = document.getElementById('quietThumbs');
        var prevBtn = document.getElementById('quietPrev');
        var nextBtn = document.getElementById('quietNext');

        if (!gallery || !track || !dotsEl || !thumbsEl || !prevBtn || !nextBtn) return;
        if (gallery.dataset.ycInitialized === 'true') return;

        gallery.dataset.ycInitialized = 'true';

        var current = 0;

        dotsEl.innerHTML = '';
        thumbsEl.innerHTML = '';

        IMGS.forEach(function (src, i) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'yc-gallery-dot' + (i === 0 ? ' is-active' : '');
            btn.addEventListener('click', function () { goTo(i); });
            dotsEl.appendChild(btn);

            var thumb = document.createElement('img');
            thumb.src = src;
            thumb.alt = 'QUIET Mud ' + (i + 1);
            thumb.className = 'yc-gallery-thumb' + (i === 0 ? ' is-active' : '');
            thumb.addEventListener('click', function () { goTo(i); });
            thumbsEl.appendChild(thumb);
        });

        function goTo(n) {
            current = (n + IMGS.length) % IMGS.length;
            track.style.transform = 'translateX(' + (-current * 100) + '%)';

            dotsEl.querySelectorAll('.yc-gallery-dot').forEach(function (d, i) {
                d.classList.toggle('is-active', i === current);
            });

            thumbsEl.querySelectorAll('.yc-gallery-thumb').forEach(function (t, i) {
                t.classList.toggle('is-active', i === current);
            });

            if (thumbsEl.children[current]) {
                thumbsEl.children[current].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }

        prevBtn.addEventListener('click', function () { goTo(current - 1); });
        nextBtn.addEventListener('click', function () { goTo(current + 1); });

        var startX = 0;
        track.addEventListener('touchstart', function (e) {
            startX = e.touches[0].clientX;
        }, { passive: true });

        track.addEventListener('touchend', function (e) {
            var diff = startX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) {
                goTo(current + (diff > 0 ? 1 : -1));
            }
        });

        var geoImg = document.getElementById('quietGeoImg');
        var modal = document.getElementById('ycModal');
        var modalImg = document.getElementById('ycModalImg');

        if (geoImg && modal && modalImg) {
            geoImg.onclick = function () {
                modalImg.src = this.src;
                modal.style.display = 'flex';
            };
            modal.onclick = function () {
                this.style.display = 'none';
            };
        }

        goTo(0);
    }

    // ==========================================
    // C. ページHTMLデータ
    // ==========================================
    const listPage = `
        <div class="yc-wrapper">
            <section class="yc-main-visual" style="text-align:center; padding: 60px 0 0;">
                <h1 style="font-size:20px; font-weight:300; letter-spacing:0.4em; color:#2F2E2E;">オリジナルフレーム</h1>
            </section>
            <div class="yc-grid-container">
                <section class="yc-model-section">
                    <div class="yc-model-img"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dc9efa7761c/frame01.png" alt="KAZUSA"></div>
                    <div class="yc-model-text">
                        <a href="/about?p=kazusa" class="yc-btn-detail"><h2>GRAVEL GRINDER<br>上総 KAZUSA</h2></a>
                        <p>林道やグラベルを楽しく遊べるグラベルグラインダー！</p>
                    </div>
                </section>
                <section class="yc-model-section">
                    <div class="yc-model-img"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcab10eb1eb/frame02.png" alt="QUIET"></div>
                    <div class="yc-model-text">
                        <a href="/about?p=quiet-disc" class="yc-btn-detail"><h2>ALL ROAD BIKE QUIET Disc</h2></a><br>
                        <a href="/about?p=quiet-mud" class="yc-btn-detail"><h2>ALL ROAD BIKE QUIET Mud</h2></a>
                        <p>ロングライドもちょっとした悪路もガンガンこなすオールラウンダー！</p>
                    </div>
                </section>
                <section class="yc-model-section">
                    <div class="yc-model-img"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dc9f15a0189/frame03.png" alt="CUSTOM"></div>
                    <div class="yc-model-text">
                        <a href="/about?p=custom" class="yc-btn-detail"><h2>CUSTOM FRAME</h2></a>
                        <p>こういう自転車が欲しい！他社のモデルやYANAGIのスタンダードには収まらないものをご希望の方はこちら。</p>
                    </div>
                </section>
            </div>
        </div>
    `;

    const pages = {
        'kazusa': `
            <div class="yc-detail-wrapper">
                <div class="yc-back-nav"><a href="/about" class="yc-back-btn">← ALL FRAMES</a></div>
                <div class="yc-detail-head"><h1>GRAVEL GRINDER KAZUSA (上総)</h1></div>

                <div class="yc-gallery" id="kazusaGallery">
                    <div class="yc-gallery-main">
                        <div class="yc-gallery-main-track" id="kazusaTrack">
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcdc7077de9/kazusa-001.jpg" alt="KAZUSA 01"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcdc7c6c675/kazusa-002.jpg" alt="KAZUSA 02"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcbaa10e04a/kazusa-003.jpg" alt="KAZUSA 03"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcdc894337e/kazusa-004.jpg" alt="KAZUSA 04"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcdc94553f4/kazusa-005.jpg" alt="KAZUSA 05"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcdc9e74378/kazusa-006.jpg" alt="KAZUSA 06"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcdca7d3b84/kazusa-007.jpg" alt="KAZUSA 07"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcdcb12df46/kazusa-008.jpg" alt="KAZUSA 08"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcdcbcc0710/kazusa-009.jpg" alt="KAZUSA 09"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcdcc623b53/kazusa-010.jpg" alt="KAZUSA 10"></div>
                        </div>
                        <button class="yc-gallery-prev" id="kazusaPrev" type="button">&#10094;</button>
                        <button class="yc-gallery-next" id="kazusaNext" type="button">&#10095;</button>
                    </div>
                    <div class="yc-gallery-dots" id="kazusaDots"></div>
                    <div class="yc-gallery-thumbs" id="kazusaThumbs"></div>
                </div>

                <div class="yc-detail-main">
                    <div class="yc-description-col">
                        <h2>商品名：KAZUSA</h2>
                        <p>林道やグラベルを楽しく、アグレッシブに遊べるグラベルグラインダーです！</p>
                        <h3>◆ 650 x 47B ロードプラスタイヤ</h3>
                        <p>軽くエアボリュームがあり、良いタイヤが多く発売されているこの規格・タイヤ径で最高のパフォーマンスが出せるフレーム設計</p>
                        <h3>◆ 低いスタンドオーバーハイト</h3>
                        <p>下りで何かの拍子で足をつかなければいけない時、大事な股間にできるだけダメージを与えないように。<br>それからカーブで、ぐっと車体を倒しこんだ時に膝がトップチューブに当たらないようにトップチューブは強いスローピングになっています。<br>強力にグリップするロードプラスタイヤのポテンシャルを引き出すにはこのくらいトップチューブが低いほうが良いですね！</p>
                        <h3>◆ ロード系のハンドル</h3>
                        <p>MTBではなくあくまでロードバイクベース。ドロップハンドルで最適なフィーリングに設計</p>
                        <h3>◆ コロンバス ZONAパイプ</h3>
                        <p>ZONAはこれだけ大径でも固くなりすぎないしなやかなパイプです。適度にウィップなフレームはトラクションを向上させて様々なコーナリングで良い効果をもたらします。</p>
                        <h3>◆ ドロッパーポスト対応</h3>
                        <p>ボリュームのあるタイヤ、さらにサスペンションをつけた場合、林道での下りの速度は圧倒的に上がります。うまく重心・フォームを変化させるにはドロッパーポストは大変有効です。ドロッパーポスト内装に対応しています。</p>
                        <h3>◆ 長いフロントセンター</h3>
                        <p>この設計により、最高の下りの安定感・トレースのフィーリングの良さをもたらします</p>
                    </div>
                    <div class="yc-side-col">
                        <div style="background: #f9f9f9; padding: 30px; position: sticky; top: 20px;">
                            <h3 style="font-size:16px; color:#ED4700; margin-bottom:20px; font-weight:bold;">仕様</h3>
                            <table class="yc-spec-table">
                                <tr><td>使用パイプ</td><td>コロンブス ZONA</td></tr>
                                <tr><td>フロントフォーク</td><td>コロンブスカーボン</td></tr>
                                <tr><td>ブレーキ</td><td>ディスクブレーキ</td></tr>
                                <tr><td>最大タイヤ幅</td><td>650 x 50b, 27.5 x 2.0"</td></tr>
                            </table>
                            <div class="yc-price">価格：<span>285,000円</span>（税込￥313,500円）</div>
                            <a href="https://thebase.com/inquiry/yanagicycle-base-shop?" class="yc-btn yc-btn-orange">お問い合わせ</a>
                            <br>
                            <a href="https://drive.google.com/uc?export=download&id=ここにGoogleドライブのファイルID" class="yc-btn yc-btn-orange" target="_blank" style="margin-top:10px;">オーダーフォーム (DOCX)</a>
                        </div>
                    </div>
                </div>
            </div>
        `,
        'quiet-disc': `
            <div class="yc-detail-wrapper yc-detail-wrapper-equal">
                <div class="yc-back-nav"><a href="/about" class="yc-back-btn">← ALL FRAMES</a></div>
                <div class="yc-detail-head"><h1>ALL ROAD BIKE QUIET Disc</h1></div>

                <div class="yc-gallery">
                    <div class="yc-gallery-main">
                        <div class="yc-gallery-main-track" id="quietTrack">
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce6be3dc14/quiet-disc-001.jpg" alt="QUIET Disc 01"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce6cb65f88/quiet-disc-002.jpg" alt="QUIET Disc 02"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce6d5a5d08/quiet-disc-003.jpg" alt="QUIET Disc 03"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce6deb8e42/quiet-disc-004.jpg" alt="QUIET Disc 04"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce6e8e1ff4/quiet-disc-005.jpg" alt="QUIET Disc 05"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce6f2dd773/quiet-disc-006.jpg" alt="QUIET Disc 06"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce6fcbeb72/quiet-disc-007.jpg" alt="QUIET Disc 07"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce70647cac/quiet-disc-008.jpg" alt="QUIET Disc 08"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce70fe8817/quiet-disc-009.jpg" alt="QUIET Disc 09"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce71b3ea5a/quiet-disc-010.jpg" alt="QUIET Disc 10"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce7292b4b3/quiet-disc-011.jpg" alt="QUIET Disc 11"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce73ac2dee/quiet-disc-012.jpg" alt="QUIET Disc 12"></div>
                        </div>
                        <button class="yc-gallery-prev" id="quietPrev" type="button">&#10094;</button>
                        <button class="yc-gallery-next" id="quietNext" type="button">&#10095;</button>
                    </div>
                    <div class="yc-gallery-dots" id="quietDots"></div>
                    <div class="yc-gallery-thumbs" id="quietThumbs"></div>
                </div>

                <div class="yc-detail-main">
                    <div class="yc-description-col">
                        <h2>商品名：QUIET Disc</h2>
                        <p>YANAGI QUIET Discは、タイヤボリューム 700 x 30~35cのミニマルなオールロードバイク。</p>
                        <h3>◆ツーリングに最適な剛性感</h3>
                        <p>TANGE CHAMPION No.2の細身のパイプと、それにあわせた1 1/8"ストレートコラムのカーボンフォーク。長距離ライドの疲労から体を守りつつ、必要な剛性や粘りは充分にあるので、じっくりとペダルを踏めば気持ちよく進みます。</p>
                        <h3>◆長めのホイールベースと低めの重心</h3>
                        <p>通常のロードバイクよりやや長いホイールベース、低いBB位置で、より真っすぐ走り、カーブでは気持ちよくラインをトレースできます。</p>
                        <h3>◆丁度良いタイヤボリューム</h3>
                        <p>距離を延ばすにも楽で、疲労で集中力が落ちてもある程度安心感のある700 x 32c近辺のボリューム。シンプルでソリッドな走りを楽しむことができます。</p>
                        <h3>◆カラーリングはお好みの色をご指定頂けます。</h3>
                    </div>

                    <div class="yc-side-col">
                        <div style="background: #f9f9f9; padding: 30px;">
                            <h3 style="font-size:16px; color:#ED4700; margin-bottom:20px; font-weight:bold;">仕様</h3>
                            <table class="yc-spec-table">
                                <tr><td>使用パイプ</td><td>TANGE Champion No.2</td></tr>
                                <tr><td>ブレーキ</td><td>フラットマウントディスク</td></tr>
                                <tr><td>想定タイヤ幅</td><td>700 x 30～35c</td></tr>
                                <tr><td>ヘッドセット</td><td>EC34</td></tr>
                                <tr><td>シートポスト径</td><td>27.2mm</td></tr>
                                <tr><td>FDクランプ径</td><td>28.6mm</td></tr>
                                <tr><td>車輪固定</td><td>12mmスルーアクスル</td></tr>
                                <tr><td>BB</td><td>68mm JIS</td></tr>
                                <tr><td>フロントフォーク</td><td>カーボン(1 1/8")</td></tr>
                            </table>
                            <p style="font-weight: bold; margin-bottom:5px;">フレーム & フォークセット（単色塗装込み）</p>
                            <div class="yc-price">価格：<span>265,500円</span>（税込￥291,500）</div>
                            <a href="https://thebase.com/inquiry/yanagicycle-base-shop?" class="yc-btn yc-btn-orange">お問い合わせ</a>
                            <p style="font-size: 22px; font-weight: bold; margin-top:20px;">
                                ※販売店からもご注文いただけます。<br>
                                <a href="https://cyclotech.net/wp/" target="_blank" style="font-weight: bold; color: #008AFC;">Cyclotech イチカワ（山口県）</a>
                            </p>
                            <h3 style="font-size:16px; color:#ED4700; margin-top:30px; margin-bottom:15px; font-weight:bold;">ジオメトリ (拡大可)</h3>
                            <img id="quietGeoImg" src="https://basefile.akamaized.net/yanagicycle-base-shop/69dced2e09f8d/quiet-disc-013.jpg" alt="QUIET Disc Geometry" style="width: 100%; cursor: pointer; border: 1px solid #ddd;">
                        </div>
                    </div>
                </div>
            </div>
        `,
        'quiet-mud': `
            <div class="yc-detail-wrapper yc-detail-wrapper-equal">
                <div class="yc-back-nav"><a href="/about" class="yc-back-btn">← ALL FRAMES</a></div>
                <div class="yc-detail-head"><h1>ALL ROAD BIKE QUIET</h1></div>

                <div class="yc-gallery">
                    <div class="yc-gallery-main">
                        <div class="yc-gallery-main-track" id="quietTrack">
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd976ee1b42/quiet-mud-001.jpg" alt="QUIET Mud 01"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd977f9e4c1/quiet-mud-002.jpg" alt="QUIET Mud 02"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd978c13c6b/quiet-mud-003.jpg" alt="QUIET Mud 03"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd979750bde/quiet-mud-004.jpg" alt="QUIET Mud 04"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd97a1f2932/quiet-mud-005.jpg" alt="QUIET Mud 05"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd97ae642d7/quiet-mud-006.jpg" alt="QUIET Mud 06"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd97bcc6179/quiet-mud-007.jpg" alt="QUIET Mud 07"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd97c75e58a/quiet-mud-008.jpg" alt="QUIET Mud 08"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd97d2f01ca/quiet-mud-009.jpg" alt="QUIET Mud 09"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd97e053228/quiet-mud-010.jpg" alt="QUIET Mud 10"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd97ea35072/quiet-mud-011.jpg" alt="QUIET Mud 11"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd97f4202e6/quiet-mud-012.jpg" alt="QUIET Mud 12"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd97fe85bb5/quiet-mud-013.jpg" alt="QUIET Mud 13"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd9807ecb2a/quiet-mud-014.jpg" alt="QUIET Mud 14"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd981312a2b/quiet-mud-015.jpg" alt="QUIET Mud 15"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd98204ae73/quiet-mud-016.jpg" alt="QUIET Mud 16"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd9830d4810/quiet-mud-017.jpg" alt="QUIET Mud 17"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd983bba4fb/quiet-mud-018.jpg" alt="QUIET Mud 18"></div>
                        </div>
                        <button class="yc-gallery-prev" id="quietPrev" type="button">&#10094;</button>
                        <button class="yc-gallery-next" id="quietNext" type="button">&#10095;</button>
                    </div>
                    <div class="yc-gallery-dots" id="quietDots"></div>
                    <div class="yc-gallery-thumbs" id="quietThumbs"></div>
                </div>

                <div class="yc-detail-main">
                    <div class="yc-description-col">
                        <h2>商品名：QUIET</h2>
                        <p>YANAGI QUIETは、タイヤボリューム 700 x 30~35cのオールロードバイク。スポルティーフのようにフルフェンダー装着可能で、クラシカルとも言えるルックス。ありきたりなロードツーリングから一歩踏み込んだルートチョイスが、サイクリングにより深みを持たせます。</p>
                        <h3>◆ツーリングに最適な剛性感</h3>
                        <p>TANGE CHAMPION No.2の細身のパイプと、1" スレッドレスコラムフォーク。<br>過度な剛性は省いて長距離ライドの疲労から体を守り、少々の荒れた路面でも跳ねることなく、とはいえ必要な剛性や粘りは充分あるので、じっくりとペダルを踏めば気持ちよく進みます。</p>
                        <h3>◆長めのホイールベースと低めの重心</h3>
                        <p>通常のロードバイクよりやや長いホイールベース、低いBB位置でより真っすぐ走り、カーブでは気持ちよくラインをトレースできます。</p>
                        <h3>◆丁度良いタイヤボリューム</h3>
                        <p>距離を延ばすにも楽で、疲労で集中力が落ちてもある程度安心感のあるタイヤボリューム。それが700 x 32c近辺だと考えます。グラベルバイクのように太いタイヤには対応せず、700 x 30～35cが入る最低限のクリアランスを確保した設計です。</p>
                        <h3>◆カンチブレーキ、ミニVブレーキ</h3>
                        <p>シンプルで扱いが簡単、トラブルも少ないリムブレーキ。カンチブレーキでも十分な制動力を確保しつつ、しなやかでロングライドでも疲れにくいフレームになります。</p>
                        <h3>◆カラーリングはお好みの色をご指定頂けます。</h3>
                    </div>

                    <div class="yc-side-col">
                        <div style="background: #f9f9f9; padding: 30px;">
                            <h3 style="font-size:16px; color:#ED4700; margin-bottom:20px; font-weight:bold;">仕様</h3>
                            <table class="yc-spec-table">
                                <tr><td>使用パイプ</td><td>TANGE Champion No.2</td></tr>
                                <tr><td>ブレーキ</td><td>カンチブレーキ、Vブレーキ</td></tr>
                                <tr><td>想定タイヤ幅</td><td>700 x 30～35c</td></tr>
                                <tr><td>ヘッドセット</td><td>EC30</td></tr>
                                <tr><td>シートポスト径</td><td>27.2mm</td></tr>
                                <tr><td>FDクランプ径</td><td>28.6mm</td></tr>
                                <tr><td>車輪固定</td><td>9mm, 10mm クイックリリース</td></tr>
                                <tr><td>BB</td><td>68mm JIS</td></tr>
                                <tr><td>フロントフォーク</td><td>1" A-head クロモリフォーク</td></tr>
                            </table>
                            <p style="font-weight: bold; margin-bottom:5px;">フレーム & フォークセット（単色塗装込み）</p>
                            <div class="yc-price">価格：<span>255,000円</span>（税込￥280,500）</div>
                            <p style="font-weight: bold; margin-bottom:5px;">フレーム & フォーク & フロントラックセット<br>（メッキ、単色塗装込み）</p>
                            <div class="yc-price">価格：<span>280,000円</span>（税込￥308,000）</div>
                            <a href="https://thebase.com/inquiry/yanagicycle-base-shop?" class="yc-btn yc-btn-orange">お問い合わせ</a>
                            <p style="font-size: 22px; font-weight: bold; margin-top:20px;">
                                試乗車、お店にありますので乗ってみてください！
                            </p>
                            <img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd9abc477e1/quiet-mud-020.jpg" alt="QUIET Mud Trial Bike" style="width: 100%; border: 1px solid #ddd;">
                            <br>
                            <h3 style="font-size:16px; color:#ED4700; margin-top:30px; margin-bottom:15px; font-weight:bold;">ジオメトリ (拡大可)</h3>
                            <img id="quietGeoImg" src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd9a692dc39/quiet-mud-019.jpg" alt="QUIET Mud Geometry" style="width: 100%; cursor: pointer; border: 1px solid #ddd;">
                        </div>
                    </div>
                </div>
            </div>
        `,
        'custom': `
            <div class="yc-custom-wrapper">
                <div class="yc-back-nav"><a href="/about" class="yc-back-btn">← ALL FRAMES</a></div>
        
                <div class="yc-custom-hero">
                    <h1>CUSTOM FRAME</h1>
                    <p>YANAGI QUIETなどのスタンダードモデル以外はこちら。<br>あなたの理想の自転車を聞かせてください。</p>
                </div>
        
                <div class="yc-steps">
                    <div class="yc-step">
                        <div class="yc-step-num">❶</div>
                        <div class="yc-step-body">
                            <h2>理想の一台について、お話を聞かせてください。</h2>
                            <p>オーダーメイドは難しく敷居が高いと思われがちですが、専門的な知識は必要ありません。どのようなコンセプト・車種であれば理想の一台になるのかを話し合いましょう。</p>
                            <p class="en">Made-to-order is difficult and seems to be a high threshold, but specialized knowledge is unnecessary. Let's discuss what concept and model would make your ideal bicycle.</p>
                        </div>
                    </div>
        
                    <div class="yc-step">
                        <div class="yc-step-num">❷</div>
                        <div class="yc-step-body">
                            <h2>理想の一台を設計。</h2>
                            <p>CADシステムを使用して理想の一台のための設計をします。設計は体に100％フィット。コンセプトに忠実で「走るフレーム」を設計します。</p>
                            <p class="en">Using a CAD system, we design your ideal bicycle — a frame that fits your body 100% and stays true to the concept.</p>
                        </div>
                    </div>
        
                    <div class="yc-step">
                        <div class="yc-step-num">❸</div>
                        <div class="yc-step-body">
                            <h2>フレームの素材の選定。</h2>
                            <p>フレームビルディングに使用する素材はクロモリ（クロムモリブデン鋼）のチューブ。重量があって丈夫なものから、乗った瞬間その軽さに驚くようなものまで。コンセプトと車種に最適なものを各チューブメーカーより選び出します。</p>
                            <p class="en">The material used for frame building is chromoly tubing. From heavier and durable options to surprisingly lightweight ones — we select the best from each tube manufacturer to match your concept.</p>
                        </div>
                    </div>
        
                    <div class="yc-step">
                        <div class="yc-step-num">❹</div>
                        <div class="yc-step-body">
                            <h2>フレーム製作。</h2>
                            <p>フレームビルダーが丹精を込めて製作します。製作にはある一定期間を要しますので、その間に制作風景を見に来ていただくのも良いかも知れません。製作の経過をご自身の目で見られるのも、オーダーメイドならではです。</p>
                            <p class="en">Our frame builder crafts your frame with great care. Since production takes time, you're welcome to visit and see the work in progress — a unique privilege of ordering custom.</p>
                        </div>
                    </div>
        
                    <div class="yc-step">
                        <div class="yc-step-num">❺</div>
                        <div class="yc-step-body">
                            <h2>ペインティング。</h2>
                            <p>色の選択は無限大。当店にある色見本から選んで頂いても結構ですし、逆にそれをお持ち込みになっても結構です。さらには、イメージを伝えてもらうだけでも。例えばある風景に映えるカラーリング、なんて指定でも面白いかもしれません。</p>
                            <p class="en">The choice of color is infinite. Pick from our samples, bring your own reference, or simply describe an image — even something like "colors that suit a certain landscape" works perfectly.</p>
                        </div>
                    </div>
        
                    <div class="yc-step">
                        <div class="yc-step-num">❻</div>
                        <div class="yc-step-body">
                            <h2>組み付け。</h2>
                            <p>当店はフレーム工房である以前に、数多くの組み付けやカスタム・修理を行ってきた自転車店がベースです。安全に確実に、最高のフィーリングを生み出すブレーキや変速器といったメカ調整。格好良く組み上げるセンス。百戦錬磨のメカニックが組み付けを行います。</p>
                            <p class="en">Before being a frame workshop, we are a bicycle shop with extensive experience in assembly, custom work and repairs. Our seasoned mechanics handle every adjustment with precision and style.</p>
                        </div>
                    </div>
                </div>
        
                <div class="yc-custom-price">
                    <h2>価格の目安について</h2>
                    <p class="en">Estimated price</p>
                    <div class="yc-price-num">¥235,000〜（税抜）</div>
                    <p>オリジナルフレーム＆フォークの制作（単色塗装込み）<br>選定パイプ・取付小物・カスタム塗装など、仕様により料金が加算されます。<br>詳しくはお問い合わせください。</p>
                    <p class="en">Production of original frame & fork (including single color painting). Charges are added according to specifications such as selected pipes, mounting accessories, and custom paint. Please inquire for details.</p>
                </div>
        
                <div class="yc-custom-cta">
                    <a href="https://thebase.com/inquiry/yanagicycle-base-shop?" class="yc-btn-orange">制作のご相談はこちら</a>
                </div>
            </div>
        `,
        'price-mod-frame': `
            <div class="yc-price-table-page">
                <div class="yc-back-nav">
                    <a href="/about" class="yc-back-btn">← ABOUT</a>
                </div>
        
                <div class="yc-price-table-hero">
                    <h1>フレーム修理、カスタム工賃表</h1>
                    <p>
                        主にスチール（クロモリ）フレームを中心にカスタム、レストア、改造を可能な範囲で承ります。<br>
                        また遠方の方、フレームをお送りいただくことで対応が可能です。<br>
                        表にない加工もお気軽にお問い合わせください。
                    </p>
                </div>
        
                <div class="yc-price-table-wrap">
                    <table class="yc-price-table-scroll">
                        <thead>
                            <tr>
                                <th>分類</th>
                                <th>作業内容</th>
                                <th>価格（税込）</th>
                                <th>備考</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>小物</td><td>Wレバー台座取り付け（左右ペア）</td><td>￥5,500</td><td></td></tr>
                            <tr><td>小物</td><td>センタースタンド台座取り付け</td><td>￥7,260</td><td></td></tr>
                            <tr><td>小物</td><td>チェーフック取り付け</td><td>￥3,520</td><td></td></tr>
                            <tr><td>小物</td><td>ポンプペグ取り付け</td><td>￥5,500</td><td></td></tr>
                            <tr><td>小物</td><td>ダボ穴取り付け</td><td>￥1,650</td><td>1箇所につき</td></tr>
                            <tr><td>小物</td><td>アウター受け取り付け</td><td>￥2,200</td><td>1箇所につき</td></tr>
                            <tr><td>小物</td><td>ライト台座取り付け</td><td>￥2,750〜</td><td>形状、難易度による</td></tr>
                            <tr><td>小物</td><td>内装穴</td><td>￥5,500</td><td>1箇所につき。ガイド無し、蓋と穴のみ</td></tr>
        
                            <tr><td>塗装</td><td>フロントフォーク剥離・全塗装</td><td>￥28,600〜</td><td>単色ソリッドカラーの価格。メタリック・パールベース、塗分け等は別途加算</td></tr>
                            <tr><td>塗装</td><td>フレームセット剥離・全塗装</td><td>￥69,300〜</td><td>単色ソリッドカラーの価格。メタリック・パールベース、塗分け等は別途加算</td></tr>
                            <tr><td>塗装</td><td>部分塗装</td><td>￥13,200〜</td><td>2か所まで。色によっては再現不可。</td></tr>
        
                            <tr><td>ブレーキ</td><td>ディスクブレーキ台座取り付け</td><td>￥13,200</td><td>スチールフレーム、インターナショナルスタンダード</td></tr>
                            <tr><td>ブレーキ</td><td>ディスクブレーキ台座取り付け</td><td>￥22,000</td><td>アルミ、補強ブリッジ込み</td></tr>
                            <tr><td>ブレーキ</td><td>フロントフォーク、キャリパーブレーキ穴開け</td><td>￥2,200</td><td></td></tr>
                            <tr><td>ブレーキ</td><td>ディスクブレーキ台座取り付け</td><td>￥16,500</td><td>正爪、スチールフレーム</td></tr>
                            <tr><td>ブレーキ</td><td>カンチ、Vブレーキ台座取り付け</td><td>￥12,100</td><td>片側</td></tr>
                            <tr><td>ブレーキ</td><td>キャリパーブレーキブリッジ取り付け</td><td>￥12,100</td><td></td></tr>
                            <tr><td>ブレーキ</td><td>センタープル台座取り付け</td><td>￥12,100</td><td>片側、ブレーキバネ引っ掛け穴直付け可</td></tr>
        
                            <tr><td>フォーク</td><td>コラムねじ山修正</td><td>￥2,200</td><td></td></tr>
                            <tr><td>フォーク</td><td>フォークコラム溝切</td><td>￥3,960</td><td></td></tr>
                            <tr><td>フォーク</td><td>フォークコラム延長（スレッドレス）</td><td>￥7,040</td><td></td></tr>
                            <tr><td>フォーク</td><td>フォークコラム延長（スレッド）</td><td>￥9,240</td><td></td></tr>
        
                            <tr><td>パイプ差し替え</td><td>チェーンステー差し替え</td><td>￥33,000〜</td><td>1本につき。パイプ種類、難易度により変動</td></tr>
                            <tr><td>パイプ差し替え</td><td>メインパイプ差し替え</td><td>￥33,000〜</td><td>1本につき。パイプ種類、難易度により変動</td></tr>
                            <tr><td>パイプ差し替え</td><td>シートステー差し替え</td><td>￥22,000〜</td><td>1本につき。パイプ種類、難易度により変動</td></tr>
                            <tr><td>パイプ差し替え</td><td>ヘッドパイプ差し替え</td><td>￥33,000〜</td><td>例、1インチ用パイプ→オーバーサイズあるいは44mmヘッドなど</td></tr>
        
                            <tr><td>カスタムラック、ステム</td><td>リアラック製作（大サイズ、メッキ）</td><td>￥44,000〜</td><td></td></tr>
                            <tr><td>カスタムラック、ステム</td><td>ステム製作（フィレット仕上げ、研磨、メッキ）</td><td>￥33,000〜</td><td></td></tr>
                            <tr><td>カスタムラック、ステム</td><td>ステム製作（フィレット仕上げ、塗装込み）</td><td>￥33,000〜</td><td></td></tr>
                            <tr><td>カスタムラック、ステム</td><td>フロントラック製作（小サイズ、メッキ）</td><td>￥27,500〜</td><td></td></tr>
        
                            <tr><td>エンド</td><td>バック広げ</td><td>￥4,400</td><td></td></tr>
                            <tr><td>エンド</td><td>フォークエンド平行だし</td><td>￥2,200</td><td></td></tr>
                            <tr><td>エンド</td><td>エンドスロット拡張</td><td>￥4,400</td><td>例：フォークエンド8mm→9mm</td></tr>
                            <tr><td>エンド</td><td>リアエンド差し替え</td><td>￥33,000〜</td><td></td></tr>
        
                            <tr><td>アライメント</td><td>フロントフォーク精度チェック、修正</td><td>￥3,300〜</td><td>度合い、難易度により変動</td></tr>
                            <tr><td>アライメント</td><td>フレーム精度チェック、修正</td><td>￥4,400〜</td><td>度合い、難易度により変動</td></tr>
        
                            <tr><td>その他</td><td>パイプ凹みのロー埋め（小）</td><td>￥4,400</td><td>軽量パイプは不可</td></tr>
                            <tr><td>その他</td><td>パイプ凹みのロー埋め（中）</td><td>￥5,500</td><td>軽量パイプは不可</td></tr>
                            <tr><td>その他</td><td>パイプ凹みのロー埋め（大）</td><td>￥6,600</td><td>軽量パイプは不可</td></tr>
                            <tr><td>その他</td><td>小物、ブレーキ台座など除去</td><td>￥1,650〜</td><td>一箇所につき。サイズ、面積により変動</td></tr>
                        </tbody>
                    </table>
                </div>
        
                <div class="yc-price-table-cta">
                    <a href="https://thebase.com/inquiry/yanagicycle-base-shop?" class="yc-btn yc-btn-orange">お問い合わせ</a>
                </div>
            </div>
        `,
        'price-mod-bike': `
            <div class="yc-price-wrapper">
                <div class="yc-back-nav"><a href="/about" class="yc-back-btn">← HOME</a></div>
        
                <div class="yc-price-hero">
                    <h1>自転車修理、カスタム工賃表</h1>
                    <p>ロードバイクなどのスポーツ車と、シティサイクル（ママチャリ）とでは<br>
                    作業工数などが違いますので価格表を分けています。<br>
                    表にない修理、カスタムもお気軽にお尋ねください。</p>
                </div>
        
                <div class="yc-price-section-title sport">ロード、クロスバイク、ツーリング車などのスポーツ車</div>
                <div class="yc-price-notice">※ 価格には部品代金は含まれません。</div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title sport">組み付け等<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">組み付け</span><span class="yc-price-row-price sport">￥21,780</span><span class="yc-price-row-note">フレームお買い上げ、再塗装、パーツをこちらで用意した場合</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">組み付け</span><span class="yc-price-row-price sport">￥36,300</span><span class="yc-price-row-note">主にお持ち込みの場合</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ばらし</span><span class="yc-price-row-price sport">￥12,100</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">組み付け</span><span class="yc-price-row-price sport">￥44,000</span><span class="yc-price-row-note">ビンテージパーツが主の場合</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title sport">ホイール<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ハブグリスアップ（フロント）</span><span class="yc-price-row-price sport">￥3,300</span><span class="yc-price-row-note">簡易清掃、ガタ取り含む</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">スポーク交換（フロント）</span><span class="yc-price-row-price sport">￥2,200〜</span><span class="yc-price-row-note">スポーク一本につき。2本目以降は＋￥400/1箇所</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">スポーク交換（リア）</span><span class="yc-price-row-price sport">￥3,300〜</span><span class="yc-price-row-note">スポーク一本につき。2本目以降は＋￥400/1箇所</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">振れ取り</span><span class="yc-price-row-price sport">￥1,100〜</span><span class="yc-price-row-note">度合いに応じて加算</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ホイール組</span><span class="yc-price-row-price sport">￥7,700</span><span class="yc-price-row-note">リム、ハブを当店でお買い上げの場合</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ハブグリスアップ（リア）</span><span class="yc-price-row-price sport">￥4,400</span><span class="yc-price-row-note">簡易清掃、ガタ取り含む</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ホイール組</span><span class="yc-price-row-price sport">￥8,800</span><span class="yc-price-row-note">リム、ハブをお持ち込みの場合</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title sport">ペダル<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ペダル交換</span><span class="yc-price-row-price sport">￥1,100</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title sport">ヘッドパーツ<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">JIS → ITA化</span><span class="yc-price-row-price sport">￥6,600</span><span class="yc-price-row-note">1インチ ITAヘッドセットが入るようにヘッドチューブと下玉押し部を切削</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ヘッドベアリング玉当たり調整</span><span class="yc-price-row-price sport">￥880</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">下玉押し圧入のみ</span><span class="yc-price-row-price sport">￥1,100</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ヘッドリーマー、フェイシング</span><span class="yc-price-row-price sport">￥3,300</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">上下カップ、下玉押し交換</span><span class="yc-price-row-price sport">￥3,520</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title sport">ブレーキ<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">調整のみ</span><span class="yc-price-row-price sport">￥550〜</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ブレーキレバー（STI）交換</span><span class="yc-price-row-price sport">￥3,520</span><span class="yc-price-row-note">片側、バーテープ・グリップなど付け直し含む</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ブレーキ本体交換</span><span class="yc-price-row-price sport">￥2,640</span><span class="yc-price-row-note">片側、調整含む</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ブレーキシュー交換</span><span class="yc-price-row-price sport">￥1,100</span><span class="yc-price-row-note">片側、調整含む</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ブレーキワイヤー交換</span><span class="yc-price-row-price sport">￥2,200</span><span class="yc-price-row-note">片側、調整含む</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title sport">フォーク<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">コラムカット</span><span class="yc-price-row-price sport">￥1,760</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">クラウンレースカット</span><span class="yc-price-row-price sport">￥1,320</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">スターファングルナット圧入</span><span class="yc-price-row-price sport">￥880</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">フロントフォーク交換</span><span class="yc-price-row-price sport">￥5,280</span><span class="yc-price-row-note">下玉押し外し圧入、ブレーキ移植、コラムカット</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title sport">フェンダー<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">イージーrinkoフェンダー加工</span><span class="yc-price-row-price sport">￥5,500</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">フェンダー取り付け</span><span class="yc-price-row-price sport">￥6,600</span><span class="yc-price-row-note">片側、本所などの泥除け本体に穴開け加工が必要なタイプ</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">フェンダー取り付け</span><span class="yc-price-row-price sport">￥2,200</span><span class="yc-price-row-note">片側、泥除け本体に穴開け加工など必要のないタイプ</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">フェンダー分割加工</span><span class="yc-price-row-price sport">￥8,000</span><span class="yc-price-row-note">本所製フェンダーに限る</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title sport">ハンドル<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ドロップバー交換</span><span class="yc-price-row-price sport">￥4,400</span><span class="yc-price-row-note">レバーの外し取付、バーテープ巻き直し含む</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">フラットバー交換</span><span class="yc-price-row-price sport">￥3,520</span><span class="yc-price-row-note">グリップ、レバー類の外し取付含む</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">グリップ交換</span><span class="yc-price-row-price sport">￥1,100</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">バーテープ交換</span><span class="yc-price-row-price sport">￥1,760</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title sport">ディスクブレーキ<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ブレーキキャリパー交換（機械）</span><span class="yc-price-row-price sport">￥3,300</span><span class="yc-price-row-note">片側、調整含む</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ローター交換</span><span class="yc-price-row-price sport">￥1,100</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">キャリパー・ホース交換（油圧）</span><span class="yc-price-row-price sport">￥6,600</span><span class="yc-price-row-note">片側、フルード入れ替え、調整込み（ハンドルやフレームの内装は加算）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">フルード交換</span><span class="yc-price-row-price sport">￥4,400</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ブレーキレバー交換（油圧）</span><span class="yc-price-row-price sport">￥6,600</span><span class="yc-price-row-note">片側、フルード・グリップバーテープ交換含む</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">パッド交換</span><span class="yc-price-row-price sport">￥2,200</span><span class="yc-price-row-note">片側、調整込み</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title sport">タイヤ、チューブ<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">チューブレスレディタイヤ交換</span><span class="yc-price-row-price sport">￥3,300</span><span class="yc-price-row-note">シーラント除去、シーラント注入含む</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">チューブラータイヤ交換</span><span class="yc-price-row-price sport">￥3,300</span><span class="yc-price-row-note">古いセメントなど剥がす場合は別途</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">タイヤ、チューブ交換</span><span class="yc-price-row-price sport">￥1,320</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">パンク修理</span><span class="yc-price-row-price sport">￥1,300</span><span class="yc-price-row-note">パッチ1箇所につき。以降2箇所目からは＋￥400/1箇所</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title sport">ステム<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ステム交換（オープンタイプ）</span><span class="yc-price-row-price sport">￥1,760</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ステム交換（クローズドタイプ）</span><span class="yc-price-row-price sport">￥4,400</span><span class="yc-price-row-note">レバーの外し取付、バーテープ巻き直し含む</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title sport">スタンド<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">キックスタンド取り付け</span><span class="yc-price-row-price sport">￥1,100</span><span class="yc-price-row-note">簡易タイプ</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title sport">シフト<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">変速器交換</span><span class="yc-price-row-price sport">￥3,300</span><span class="yc-price-row-note">調整込み</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ディレイラーハンガー修正</span><span class="yc-price-row-price sport">￥2,200〜</span><span class="yc-price-row-note">度合いに応じて加算</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">変速調整</span><span class="yc-price-row-price sport">￥1,100〜</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">シフトワイヤー交換</span><span class="yc-price-row-price sport">￥2,200</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">シフト（STI）レバー交換</span><span class="yc-price-row-price sport">￥5,500</span><span class="yc-price-row-note">片側、バーテープ・グリップなど付け直し含む</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title sport">サドル、シート<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">シートリーマーがけ</span><span class="yc-price-row-price sport">￥3,300〜</span><span class="yc-price-row-note">拡張などは度合いに応じて加算</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">サドル交換</span><span class="yc-price-row-price sport">￥880</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">シートポスト交換</span><span class="yc-price-row-price sport">￥1,430</span><span class="yc-price-row-note">サドル交換含む</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title sport">サスペンション<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">フロントサスペンションOH</span><span class="yc-price-row-price sport">￥11,000</span><span class="yc-price-row-note">基本工賃、消耗品や交換部品は別途</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title sport">ギア、チェーン<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">チェーン交換</span><span class="yc-price-row-price sport">￥2,200</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">スプロケット交換</span><span class="yc-price-row-price sport">￥1,320</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">チェーンリング交換</span><span class="yc-price-row-price sport">￥2,200</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">クランク交換</span><span class="yc-price-row-price sport">￥3,300</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title sport">オーバーホール、点検メニュー<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">自転車洗浄</span><span class="yc-price-row-price sport">￥5,500〜</span><span class="yc-price-row-note">水洗いの上、駆動・ブレーキ周り清掃（部品の脱着無し）。汚れがひどい場合は別途オーバーホールメニューとなります。</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">駆動系洗浄</span><span class="yc-price-row-price sport">￥6,600</span><span class="yc-price-row-note">チェーンリング、ディレイラー、スプロケット、チェーンをディグリーザーで洗浄します。汚れがひどい場合に有効です。</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">フルオーバーホール</span><span class="yc-price-row-price sport">￥49,500</span><span class="yc-price-row-note">全てのパーツを最小単位まで分解洗浄、パーツ交換調整費用、グリス・オイルアップ、ホイール振れ取り等 ※機械式ブレーキ</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">クイック点検</span><span class="yc-price-row-price sport">￥3,300</span><span class="yc-price-row-note">各ボルトねじ増し締め、部品交換を伴わない変速機やブレーキの調整、注油、各部点検など。</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title sport">BB<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">BB交換</span><span class="yc-price-row-price sport">￥4,400</span><span class="yc-price-row-note">クランク外し、付け直し含む</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">BBシェルタッピング</span><span class="yc-price-row-price sport">￥4,400</span><span class="yc-price-row-note">BSA, T47</span></div>
                </div>
        
                <div class="yc-price-section-title city" style="margin-top: 70px;">シティサイクル（ままちゃり）</div>
                <div class="yc-price-notice">※ 価格には部品代金は含まれません。</div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title city">鍵<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ワイヤ錠切断</span><span class="yc-price-row-price city">￥550</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">リング錠切断、交換</span><span class="yc-price-row-price city">￥1,100</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title city">荷台<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">チャイルドシート取り付け（前）</span><span class="yc-price-row-price city">￥2,640</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">チャイルドシート取り付け（後）</span><span class="yc-price-row-price city">￥3,520</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title city">変速<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">変速調整</span><span class="yc-price-row-price city">￥550</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">変速ワイヤ交換</span><span class="yc-price-row-price city">￥1,760</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title city">ライト<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ライト交換</span><span class="yc-price-row-price city">￥880</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">球切れ交換</span><span class="yc-price-row-price city">￥550</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title city">ホイール<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">スポーク交換（後ホイール脱着あり）</span><span class="yc-price-row-price city">￥4,840〜</span><span class="yc-price-row-note">スポーク一本につき。2本目以降は＋￥400/1箇所</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">フロントホイール交換</span><span class="yc-price-row-price city">￥1,760</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">振れ取り（後ホイール脱着あり）</span><span class="yc-price-row-price city">￥3,520〜</span><span class="yc-price-row-note">度合いに応じて加算</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">スポーク交換（前ホイール脱着あり）</span><span class="yc-price-row-price city">￥3,740〜</span><span class="yc-price-row-note">スポーク一本につき。2本目以降は＋￥400/1箇所</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">振れ取り（前ホイール脱着あり）</span><span class="yc-price-row-price city">￥2,640〜</span><span class="yc-price-row-note">度合いに応じて加算</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">後ホイール組み換え</span><span class="yc-price-row-price city">￥7,700</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">リアホイール交換</span><span class="yc-price-row-price city">￥3,520</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ガタ調整、ベアリング交換（後ホイール）</span><span class="yc-price-row-price city">￥3,520〜</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">振れ取り（ホイール脱着せず）</span><span class="yc-price-row-price city">￥1,100〜</span><span class="yc-price-row-note">度合いに応じて加算</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">前ホイール組み換え</span><span class="yc-price-row-price city">￥6,600</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ニップル交換（ホイール脱着せず）</span><span class="yc-price-row-price city">￥1,760</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">スポーク交換（ホイール脱着せず）</span><span class="yc-price-row-price city">￥2,200〜</span><span class="yc-price-row-note">スポーク一本につき。2本目以降は＋￥400/1箇所</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ガタ調整、ベアリング交換（前ホイール）</span><span class="yc-price-row-price city">￥1,760</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title city">ペダル<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ペダル交換</span><span class="yc-price-row-price city">￥880</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title city">ブレーキ<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">後ろブレーキ交換（バンドブレーキ等）</span><span class="yc-price-row-price city">￥3,520</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ローラーブレーキグリス注入</span><span class="yc-price-row-price city">￥330</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">前ブレーキ交換（キャリパー）</span><span class="yc-price-row-price city">￥1,760</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ブレーキシュー交換</span><span class="yc-price-row-price city">￥1,100</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ブレーキ調整</span><span class="yc-price-row-price city">￥550</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ブレーキワイヤ交換</span><span class="yc-price-row-price city">￥1,320</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title city">チェーン<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">注油</span><span class="yc-price-row-price city">￥100</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">チェーン交換（フルカバー）</span><span class="yc-price-row-price city">￥3,520</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">チェーン交換（ハーフケース）</span><span class="yc-price-row-price city">￥2,640</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">チェーン張り調整</span><span class="yc-price-row-price city">￥550</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title city">タイヤ、チューブ<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">パンク修理</span><span class="yc-price-row-price city">￥1,300</span><span class="yc-price-row-note">パッチ1箇所につき。以降2箇所目からは＋￥400/1箇所</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">虫ゴム交換</span><span class="yc-price-row-price city">￥200</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">後輪タイヤ、チューブ交換</span><span class="yc-price-row-price city">￥3,300</span><span class="yc-price-row-note">表示価格は工賃。タイヤ代は別途</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">水調べ</span><span class="yc-price-row-price city">￥1,000</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">前輪タイヤ、チューブ交換</span><span class="yc-price-row-price city">￥2,200</span><span class="yc-price-row-note">表示価格は工賃。タイヤ代は別途</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title city">スタンド<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">バネ交換</span><span class="yc-price-row-price city">￥550</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">両立スタンド</span><span class="yc-price-row-price city">￥1,320</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">片足スタンド</span><span class="yc-price-row-price city">￥880</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title city">サドル<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">サドル交換</span><span class="yc-price-row-price city">￥550</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title city">かご<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">かご交換</span><span class="yc-price-row-price city">￥1,320</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">カゴ足交換</span><span class="yc-price-row-price city">￥2,640</span><span class="yc-price-row-note">部品代込み</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ねじ取り付け</span><span class="yc-price-row-price city">￥220</span><span class="yc-price-row-note">ねじ一本につき。2本目以降は＋￥100/1箇所</span></div>
                </div>
        
                <div class="yc-price-group">
                    <div class="yc-price-group-title city">BB<span class="yc-price-label">価格（税込）</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">ガタ調整</span><span class="yc-price-row-price city">￥1,320〜</span><span class="yc-price-row-note">クランク脱着要の場合は加算</span></div>
                    <div class="yc-price-row"><span class="yc-price-row-label">BB交換</span><span class="yc-price-row-price city">￥5,280</span><span class="yc-price-row-note">クランク脱着含む</span></div>
                </div>
        
                <div class="yc-price-cta">
                    <a href="https://thebase.com/inquiry/yanagicycle-base-shop?" class="yc-btn-orange">お問い合わせ</a>
                </div>
            </div>
        `,
    };

    // ==========================================
    // D. ルーター制御
    // ==========================================
    function router() {
        var root = document.getElementById('yc-router-root');
        if (!root) return;

        var params = new URLSearchParams(window.location.search);
        var pageKey = params.get('p');

        if (pageKey && pages[pageKey]) {
            root.innerHTML = pages[pageKey];

            if (pageKey === 'kazusa') initKazusaGallery();
            if (pageKey === 'quiet-disc') initQuietGallery();
            if (pageKey === 'quiet-mud') initQuietMudGallery();
        } else {
            root.innerHTML = listPage;
        }

        window.scrollTo(0, 0);
    }

    router();
    window.addEventListener('popstate', router);
})();
